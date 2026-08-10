import { o as e } from "./floating-ui.vue-CE68TKCX.js";
import { O as t } from "./gui-icons.es-5O8QlDZJ.js";
import { t as n } from "./BaseMenuItem-DIpxPRjf.js";
import { n as r } from "./menuSelection-C5Uu2l4Y.js";
import { createBlock as i, createCommentVNode as a, defineComponent as o, mergeModels as s, openBlock as c, renderSlot as l, unref as u, useModel as d, withCtx as f } from "vue";
//#endregion
//#region src/components/Dropdown/DropdownCheckboxItem.vue?vue&type=script&lang.ts
var p = /* @__PURE__ */ o({
	__name: "BaseMenuCheckboxItem",
	props: /*@__PURE__*/ s({ disabled: { type: Boolean } }, {
		modelValue: {
			type: Boolean,
			default: !1
		},
		modelModifiers: {}
	}),
	emits: ["update:modelValue"],
	setup(e) {
		let o = e, s = d(e, "modelValue"), p = () => {
			s.value = r(s.value, o.disabled);
		};
		return (e, r) => (c(), i(n, {
			role: "menuitemcheckbox",
			disabled: o.disabled,
			selected: s.value,
			"aria-checked": s.value,
			"data-state": s.value ? "checked" : "unchecked",
			onClick: p
		}, {
			trailing: f(() => [l(e.$slots, "indicator", { checked: s.value }, () => [s.value ? (c(), i(u(t), { key: 0 })) : a("", !0)])]),
			default: f(() => [l(e.$slots, "default")]),
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
