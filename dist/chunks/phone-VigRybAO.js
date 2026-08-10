//#region src/components/PhoneInput/phone.ts
var e = /^[0-9+\-()\s]*$/, t = /^\+7[0-9]{10}$/;
function n(e) {
	let t = a(e ?? ""), n = t.replace(/\D/g, "");
	if (n.length === 0) return {
		formatted: "",
		raw: ""
	};
	let r = l(n, t);
	return {
		formatted: d(r),
		raw: `+${r}`
	};
}
function r(e) {
	let t = a(e ?? ""), n = t.replace(/\D/g, "").slice(0, 11);
	return n.length === 0 ? t : f(n);
}
function i(e) {
	let t = e.value.slice(0, e.caret).replace(/\D/g, "").length, n = r(e.value), i = a(e.value.slice(0, e.caret)).length;
	return {
		value: n,
		caret: t === 0 ? Math.min(i, n.length) : p(n, t)
	};
}
function a(e) {
	let t = "", n = !1;
	for (let r of e) /[0-9\-()\s]/.test(r) ? t += r : r === "+" && !n && t.trim().length === 0 && (t += r, n = !0);
	return t;
}
function o(t) {
	return e.test(t);
}
function s(e) {
	if (!o(e.insertedValue)) return !1;
	let t = e.currentValue.slice(e.selectionStart, e.selectionEnd).replace(/\D/g, "").length, n = e.currentValue.replace(/\D/g, "").length, r = e.insertedValue.replace(/\D/g, "").length;
	return n - t + r <= 11;
}
function c(e) {
	let r = n(e);
	return r.formatted.length === 0 || t.test(r.raw);
}
function l(e, t) {
	return e.length === 10 && u(e, t) ? `7${e}` : e.length === 11 && e.startsWith("8") ? `7${e.slice(1)}` : e.slice(0, 11);
}
function u(e, t) {
	let n = t.replace(/[\s\-()]/g, "");
	return !n.startsWith("+7") && !n.startsWith("7") && !n.startsWith("8") && e.length === 10;
}
function d(e) {
	if (e.length === 11 && e.startsWith("7")) {
		let [, t, n, r, i, a] = e.match(/^(\d)(\d{3})(\d{3})(\d{2})(\d{2})$/) ?? [];
		if (t && n && r && i && a) return `+${t} (${n}) ${r}-${i}-${a}`;
	}
	return `+${e}`;
}
function f(e) {
	if (!e.startsWith("7")) return `+${e}`;
	let t = e.slice(0, 1), n = e.slice(1, 4), r = e.slice(4, 7), i = e.slice(7, 9), a = e.slice(9, 11), o = `+${t}`;
	return n.length > 0 && (o += ` (${n}`), n.length === 3 && r.length > 0 && (o += ")"), r.length > 0 && (o += ` ${r}`), i.length > 0 && (o += `-${i}`), a.length > 0 && (o += `-${a}`), o;
}
function p(e, t) {
	let n = 0;
	for (let r = 0; r < e.length; r += 1) if (/\d/.test(e[r] ?? "") && (n += 1, n === t)) return r + 1;
	return e.length;
}
//#endregion
export { c as a, o as i, r as n, n as o, i as r, a as s, s as t };
