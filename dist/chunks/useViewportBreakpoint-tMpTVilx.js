import { i as e, r as t } from "./breakpoints-DUuhBvFs.js";
import { onBeforeUnmount as n, onMounted as r, readonly as i, ref as a } from "vue";
//#region src/hooks/useViewportBreakpoint.ts
function o() {
	let o = () => typeof window > "u" ? "xs" : e(window.innerWidth), s = a(o()), c = t(() => s.value), l = () => {
		s.value = o();
	};
	return r(() => {
		l(), window.addEventListener("resize", l);
	}), n(() => {
		typeof window < "u" && window.removeEventListener("resize", l);
	}), i(c);
}
//#endregion
export { o as t };
