import { i as e, r as t } from "./breakpoints-DUuhBvFs.js";
import { onBeforeUnmount as n, onMounted as r, readonly as i, ref as a, watch as o } from "vue";
//#region src/hooks/useContainerBreakpoint.ts
function s(s) {
	let c = a("xs"), l = t(() => c.value), u = a(null), d = a(null), f = (t) => {
		c.value = e(t.clientWidth);
	}, p = () => {
		u.value && d.value && u.value.unobserve(d.value), d.value = null;
	}, m = (e) => {
		!u.value || !e || (u.value.observe(e), d.value = e, f(e));
	};
	return r(() => {
		if (typeof ResizeObserver > "u") {
			s.value && f(s.value);
			return;
		}
		u.value = new ResizeObserver((e) => {
			let t = e[0];
			t?.target instanceof HTMLElement && f(t.target);
		}), m(s.value);
	}), o(() => s.value, (e) => {
		p(), m(e);
	}), n(() => {
		p(), u.value?.disconnect();
	}), i(l);
}
//#endregion
export { s as t };
