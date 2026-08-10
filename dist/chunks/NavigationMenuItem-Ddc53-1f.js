import { t as e } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { n as t, t as n } from "./context-B_FpNEFp.js";
import { computed as r, createElementBlock as i, defineComponent as a, inject as o, openBlock as s, provide as c, ref as l, renderSlot as u, unref as d, useId as f } from "vue";
import '../assets/NavigationMenuItem-Cmb_ecus.css';//#region src/components/NavigationMenu/NavigationMenuItem.vue?vue&type=script&setup=true&lang.ts
var p = ["data-disabled", "data-state"], m = /*#__PURE__*/ e(/* @__PURE__ */ a({
	__name: "NavigationMenuItem",
	props: {
		disabled: {
			type: Boolean,
			default: !1
		},
		value: {}
	},
	setup(e) {
		let a = e, m = o(n);
		if (!m) throw Error("NavigationMenuItem must be used inside NavigationMenu");
		let h = f(), g = r(() => m.value.value === a.value), _ = r(() => a.disabled), v = l(null);
		return c(t, {
			contentId: `${h}-content`,
			disabled: _,
			isOpen: g,
			triggerId: `${h}-trigger`,
			triggerRef: v,
			value: a.value
		}), (e, t) => (s(), i("li", {
			class: "navigation-menu-item",
			"data-disabled": _.value || void 0,
			"data-state": g.value ? "open" : "closed",
			onPointerenter: t[0] ||= (e) => d(m).openOnHover.value && !_.value ? d(m).scheduleOpen(a.value) : void 0
		}, [u(e.$slots, "default", {}, void 0, !0)], 40, p));
	}
}), [["__scopeId", "data-v-72f637f4"]]);
//#endregion
export { m as default };
