//#region src/hooks/breakpoints/breakpoints.ts
var e = [
	"xs",
	"s",
	"m",
	"l",
	"xl",
	"xxl"
], t = {
	xs: 0,
	s: 576,
	m: 768,
	l: 1024,
	xl: 1280,
	xxl: 1600
}, n = {
	xs: 4,
	s: 8,
	m: 12,
	l: 12,
	xl: 12,
	xxl: 12
};
function r(n) {
	let r = "xs";
	for (let i of e) n >= t[i] && (r = i);
	return r;
}
function i(t) {
	return {
		get breakpoint() {
			return t();
		},
		get isXS() {
			return t() === "xs";
		},
		get isS() {
			return t() === "s";
		},
		get isM() {
			return t() === "m";
		},
		get isL() {
			return t() === "l";
		},
		get isXL() {
			return t() === "xl";
		},
		get isXXL() {
			return t() === "xxl";
		},
		get isMobile() {
			let e = t();
			return e === "xs" || e === "s";
		},
		get isGtXS() {
			return e.indexOf(t()) > e.indexOf("xs");
		},
		get isGtS() {
			return e.indexOf(t()) > e.indexOf("s");
		},
		get isGtM() {
			return e.indexOf(t()) > e.indexOf("m");
		},
		get isGtL() {
			return e.indexOf(t()) > e.indexOf("l");
		}
	};
}
//#endregion
export { r as i, e as n, i as r, n as t };
