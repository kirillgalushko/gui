//#region src/utils/date.ts
var e = (e) => e instanceof Date ? e : new Date(e), t = (e) => {
	let t = new Date(e);
	return t.setHours(0, 0, 0, 0), t;
}, n = (e) => {
	let t = new Date(e);
	return t.setHours(23, 59, 59, 999), t;
}, r = (e, t) => {
	let n = new Date(e);
	return n.setDate(n.getDate() + t), n;
}, i = (e, t) => {
	let n = new Date(e);
	return n.setHours(n.getHours() + t), n;
}, a = (e, t) => {
	let n = new Date(e);
	return n.setMonth(n.getMonth() + t, 1), n;
}, o = (e, t) => {
	let n = new Date(e);
	return n.setFullYear(n.getFullYear() + t, 0, 1), n;
}, s = (e) => {
	let n = t(e), i = n.getDay();
	return r(n, i === 0 ? -6 : 1 - i);
}, c = (e) => t(new Date(e.getFullYear(), e.getMonth(), 1)), l = (e) => t(new Date(e.getFullYear(), 0, 1)), u = (e, t) => e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth() && e.getDate() === t.getDate(), d = (e, n) => t(e).getTime() < t(n).getTime(), f = (e, n) => t(e).getTime() > t(n).getTime(), p = (e, n) => Math.round((t(e).getTime() - t(n).getTime()) / 864e5), m = (e, t) => {
	let n = new Date(e);
	return n.setHours(t, 0, 0, 0), n;
}, h = (e) => {
	let t = new Date(e);
	return t.getMinutes() * 6e4 + t.getSeconds() * 1e3 + t.getMilliseconds() >= 18e5 && t.setHours(t.getHours() + 1), t.setMinutes(0, 0, 0), t;
}, g = (e, t) => {
	let n = m(e, t);
	return [
		m(r(e, -1), t),
		n,
		m(r(e, 1), t)
	].reduce((t, n) => {
		let r = Math.abs(t.getTime() - e.getTime());
		return Math.abs(n.getTime() - e.getTime()) < r ? n : t;
	}, n);
}, _ = (e) => new Intl.DateTimeFormat("ru-RU", {
	weekday: "short",
	month: "short",
	day: "numeric"
}).format(e).replace(".", ""), v = (e) => new Intl.DateTimeFormat("ru-RU", {
	month: "long",
	year: "numeric"
}).format(e).replace(" г.", ""), y = (e) => new Intl.DateTimeFormat("ru-RU", {
	day: "numeric",
	month: "short"
}).format(e).replace(".", ""), b = (t, n = {}) => new Intl.DateTimeFormat("ru-RU", {
	day: "numeric",
	month: "long",
	year: "numeric",
	hour: "2-digit",
	minute: "2-digit",
	...n
}).format(e(t)), x = new Intl.RelativeTimeFormat("ru-RU", { numeric: "always" }), S = (e, t) => t > 0 ? e : -e, C = (t, n = /* @__PURE__ */ new Date()) => {
	let r = e(t).getTime() - e(n).getTime(), i = Math.floor(Math.abs(r) / 1e3);
	if (i < 60) return x.format(S(i, r), "second");
	let a = Math.floor(i / 60);
	if (a < 60) return x.format(S(a, r), "minute");
	let o = Math.floor(a / 60);
	if (o < 24) return x.format(S(o, r), "hour");
	let s = Math.floor(o / 24);
	if (r < 0 && s === 1) return "Вчера";
	if (s < 7) return x.format(S(s, r), "day");
	let c = Math.floor(s / 7);
	if (s < 30) return x.format(S(c, r), "week");
	let l = Math.floor(s / 30);
	if (s < 365) return x.format(S(l, r), "month");
	let u = Math.floor(s / 365);
	return x.format(S(u, r), "year");
};
//#endregion
export { e as S, g as _, p as a, s as b, v as c, _ as d, f, m as g, h, o as i, b as l, u as m, i as n, n as o, d as p, a as r, y as s, r as t, C as u, t as v, l as x, c as y };
