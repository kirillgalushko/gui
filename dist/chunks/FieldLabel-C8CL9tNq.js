import { t as e } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { t } from "./Text-BiA0aMEo.js";
import { computed as n, createBlock as r, defineComponent as i, inject as a, mergeProps as o, openBlock as s, renderSlot as c, withCtx as l } from "vue";
import '../assets/FieldLabel-DbEWP9Er.css';//#endregion
//#region src/components/Field/FieldLabel.vue
var u = /*#__PURE__*/ e(/* @__PURE__ */ i({
	inheritAttrs: !1,
	__name: "FieldLabel",
	props: {
		htmlFor: {},
		invalid: { type: Boolean },
		disabled: { type: Boolean }
	},
	setup(e) {
		let i = e, u = a("field-state", void 0), d = n(() => i.invalid ?? u?.value.invalid ?? !1), f = n(() => i.disabled ?? u?.value.disabled ?? !1);
		return (e, n) => (s(), r(t, o(e.$attrs, {
			for: i.htmlFor,
			Element: "label",
			typography: "label-2",
			color: "inherit",
			class: ["field-label", {
				invalid: d.value,
				disabled: f.value
			}]
		}), {
			default: l(() => [c(e.$slots, "default", {}, void 0, !0)]),
			_: 3
		}, 16, ["for", "class"]));
	}
}), [["__scopeId", "data-v-07ebbca4"]]);
//#endregion
export { u as default };
