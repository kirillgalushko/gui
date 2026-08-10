import { a as e, i as t, n, r, t as i } from "./floating-ui.vue-CE68TKCX.js";
import { t as a } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { n as o, t as s } from "./context-B_FpNEFp.js";
import { Transition as c, computed as l, createBlock as u, createCommentVNode as d, createElementBlock as f, createElementVNode as p, defineComponent as m, inject as h, normalizeStyle as g, openBlock as _, ref as v, renderSlot as y, unref as b, withCtx as x } from "vue";
import '../assets/NavigationMenuContent-D8rH1Tar.css';//#region src/components/NavigationMenu/NavigationMenuContent.vue?vue&type=script&setup=true&lang.ts
var S = ["id", "aria-labelledby"], C = { class: "navigation-menu-content-inner" }, w = /*#__PURE__*/ a(/* @__PURE__ */ m({
	__name: "NavigationMenuContent",
	setup(a) {
		let m = h(s), w = h(o);
		if (!m || !w) throw Error("NavigationMenuContent must be used inside NavigationMenuItem");
		let T = v(null), E = l(() => m.isMobile.value || m.orientation.value === "vertical"), { floatingStyles: D } = i(w.triggerRef, T, {
			placement: "bottom-start",
			middleware: [
				t(8),
				r(),
				e({ padding: 8 })
			],
			whileElementsMounted: n
		}), O = l(() => E.value ? void 0 : D.value);
		return (e, t) => (_(), u(c, { name: "navigation-menu-content" }, {
			default: x(() => [b(w).isOpen.value ? (_(), f("div", {
				key: 0,
				id: b(w).contentId,
				ref_key: "floatingRef",
				ref: T,
				class: "navigation-menu-content",
				role: "region",
				tabindex: "-1",
				"aria-labelledby": b(w).triggerId,
				"data-state": "open",
				style: g(O.value),
				onPointerenter: t[0] ||= (...e) => b(m).cancelScheduledChange && b(m).cancelScheduledChange(...e),
				onPointerleave: t[1] ||= (...e) => b(m).scheduleClose && b(m).scheduleClose(...e)
			}, [p("div", C, [y(e.$slots, "default", {}, void 0, !0)])], 44, S)) : d("", !0)]),
			_: 3
		}));
	}
}), [["__scopeId", "data-v-1b613c6a"]]);
//#endregion
export { w as default };
