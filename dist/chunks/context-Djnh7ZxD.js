import { computed as e, inject as t, provide as n, toValue as r } from "vue";
//#region src/components/Skeleton/context.ts
var i = Symbol("skeleton-context");
function a(t) {
	let a = e(() => !!r(t));
	return n(i, { loading: a }), a;
}
function o(n, a = !0) {
	let o = t(i, null);
	return e(() => (n === void 0 ? void 0 : r(n)) ?? o?.loading.value ?? a);
}
//#endregion
export { o as n, a as t };
