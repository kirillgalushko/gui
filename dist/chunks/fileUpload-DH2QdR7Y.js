//#region src/components/FileUpload/fileUpload.ts
var e = (e, t) => {
	let n = t.trim().toLowerCase(), r = e.name.toLowerCase(), i = e.type.toLowerCase();
	return n.startsWith(".") ? r.endsWith(n) : n.endsWith("/*") ? i.startsWith(n.slice(0, -1)) : i === n;
}, t = (t, n) => n === void 0 || n.trim().length === 0 || n.split(",").some((n) => e(t, n)), n = (e, t) => e.name === t.name && e.size === t.size && e.lastModified === t.lastModified, r = (e, n) => {
	let r = [];
	t(e, n.accept) || r.push("Недопустимый формат файла"), n.maxSize !== void 0 && e.size > n.maxSize && r.push("Файл превышает допустимый размер");
	let i = n.validate?.(e);
	return typeof i == "string" && i.length > 0 && r.push(i), r.length > 0 ? {
		file: e,
		errors: r
	} : null;
}, i = (e) => {
	if (e < 1024) return `${Math.max(1, e)} Б`;
	if (e < 1048576) return `${Math.ceil(e / 1024)} КБ`;
	let t = e / 1048576;
	return `${t >= 10 ? Math.round(t) : t.toFixed(1)} МБ`;
};
//#endregion
export { n, r, i as t };
