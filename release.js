import fs from 'fs';
import { execSync } from 'child_process';
import inquirer from 'inquirer';

function incrementVersion(version, type) {
  const [major, minor, patch] = version.split('.').map(Number);

  switch (type) {
    case 'patch':
      return `${major}.${minor}.${patch + 1}`;
    case 'minor':
      return `${major}.${minor + 1}.0`;
    case 'major':
      return `${major + 1}.0.0`;
    default:
      throw new Error('Unknown version type');
  }
}

const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
const currentVersion = packageJson.version;

console.log(`Current version: ${currentVersion}`);

let newVersion = currentVersion
try {
  const answers = await inquirer.prompt([
    {
      type: 'list',
      name: 'releaseType',
      message: 'Select the type of version bump:',
      choices: ['patch', 'minor', 'major'],
    }])
    newVersion = incrementVersion(currentVersion, answers.releaseType);

    packageJson.version = newVersion;
    fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2));

    console.log('Running build...');
    execSync('npm run build', { stdio: 'inherit' });

    console.log('Committing changes...');
    execSync('git add package.json', { stdio: 'inherit' });
    execSync('git add .', { stdio: 'inherit' });
    execSync(`git commit -m "Release ${newVersion}"`, { stdio: 'inherit' });

    console.log('Creating tag...');
    execSync(`git tag -a v${newVersion} -m "Release ${newVersion}"`, { stdio: 'inherit' });

    console.log(`New version ${newVersion} committed and tagged successfully.`);
} catch(error) {
  console.error('An error occurred:', error);
}

try {
  const shouldPushAnswers = await inquirer.prompt([{
    type: 'list',
    name: 'shouldPush',
    message: 'Do you want to push changes to git?',
    choices: ['No', 'Yes'],
  }])
  if (shouldPushAnswers.shouldPush === 'Yes') {
    console.log('Pushing changes and tags to remote...');
    execSync('git push -f origin main', { stdio: 'inherit' });
    execSync(`git push -f origin v${newVersion}`, { stdio: 'inherit' });
  }
  console.log(`New version ${newVersion} committed and tagged successfully.`);
} catch(error) {
  console.error('An error occurred:', error);
}
