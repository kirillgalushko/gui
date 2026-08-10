import { o as e } from "./floating-ui.vue-CE68TKCX.js";
import { C as t } from "./gui-icons.es-5O8QlDZJ.js";
import { t as n } from "./BaseMenuItem-DIpxPRjf.js";
import { t as r } from "./baseMenuRadioGroup-6k4ppaFj.js";
import { computed as i, createBlock as a, createCommentVNode as o, defineComponent as s, inject as c, openBlock as l, renderSlot as u, unref as d, withCtx as f } from "vue";
//#endregion
//#region src/components/Dropdown/DropdownRadioItem.vue?vue&type=script&lang.ts
var p = /* @__PURE__ */ s({
	__name: "BaseMenuRadioItem",
	props: {
		value: {},
		disabled: { type: Boolean }
	},
	setup(e) {
		let s = e, p = c(r);
		if (!p) throw Error("BaseMenuRadioItem must be used inside BaseMenuRadioGroup");
		let m = i(() => !!s.disabled || p.disabled.value), h = i(() => p.model.value === s.value), g = () => {
			m.value || p.select(s.value);
		};
		return (e, r) => (l(), a(n, {
			role: "menuitemradio",
			disabled: m.value,
			selected: h.value,
			"aria-checked": h.value,
			"data-state": h.value ? "checked" : "unchecked",
			onClick: g
		}, {
			trailing: f(() => [u(e.$slots, "indicator", { checked: h.value }, () => [h.value ? (l(), a(d(t), { key: 0 })) : o("", !0)])]),
			default: f(() => [u(e.$slots, "default")]),
			_: 3
		}, 8, [
			"disabled",
			"selected",
			"aria-checked",
			"data-state"
		]));
	}
}), m = /* @__PURE__ */ e({ default: () => h }), h = p;
//#endregion
export { m as n, h as t };
