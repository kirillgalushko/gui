import fs from 'fs';
import path from 'path';

const directoryPath = './';

fs.readdir(directoryPath, (err, files) => {
    if (err) {
        console.error('Ошибка чтения директории:', err);
        return;
    }

    files.forEach(file => {
        console.log(file)
        if (path.extname(file) === '.svg') {
            console.log(file)
            const newFileName = file.replace(/(-[a-z0-9]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})\.svg$/, '.svg').replace(/-100/, '');

            if (newFileName !== file) {
                fs.rename(path.join(directoryPath, file), path.join(directoryPath, newFileName), (err) => {
                    if (err) {
                        console.error(`Ошибка переименования файла ${file}:`, err);
                    } else {
                        console.log(`Переименован: ${file} -> ${newFileName}`);
                    }
                });
            }
        }
    });
});
