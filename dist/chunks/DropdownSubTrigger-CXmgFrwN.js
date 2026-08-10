import { o as e } from "./floating-ui.vue-CE68TKCX.js";
import { t } from "./BaseMenuItem-DIpxPRjf.js";
import { t as n } from "./useDropdownSubmenu-DzUcbJ4y.js";
import { computed as r, createBlock as i, defineComponent as a, inject as o, mergeProps as s, openBlock as c, renderSlot as l, unref as u, withCtx as d } from "vue";
//#region src/components/Dropdown/DropdownSubTrigger.vue?vue&type=script&setup=true&lang.ts
var f = /*@__PURE__*/ a({
	inheritAttrs: !1,
	__name: "DropdownSubTrigger",
	props: {
		selected: { type: Boolean },
		role: {}
	},
	setup(e) {
		let a = e, f = o(n, null), p = r(() => f ? f.shown.value : void 0), m = (e) => {
			f?.setHovered("trigger", e);
		}, h = (e) => {
			f?.setFocused("trigger", e);
		};
		return (e, n) => (c(), i(t, s({
			...e.$attrs,
			...a
		}, {
			"show-arrow": "",
			"aria-haspopup": "menu",
			"aria-expanded": p.value,
			onMouseenter: n[0] ||= (e) => m(!0),
			onMouseleave: n[1] ||= (e) => m(!1),
			onFocusin: n[2] ||= (e) => h(!0),
			onFocusout: n[3] ||= (e) => h(!1),
			onClick: n[4] ||= (e) => u(f)?.show()
		}), {
			default: d(() => [l(e.$slots, "default")]),
			_: 3
		}, 16, ["aria-expanded"]));
	}
}), p = /* @__PURE__ */ e({ default: () => m }), m = f;
//#endregion
export { p as n, m as t };
