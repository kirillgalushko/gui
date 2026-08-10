import { t as e } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { t } from "./Text-BiA0aMEo.js";
import { computed as n, createBlock as r, defineComponent as i, inject as a, mergeProps as o, openBlock as s, renderSlot as c, withCtx as l } from "vue";
import '../assets/FieldDescription-C7v2hq87.css';//#endregion
//#region src/components/Field/FieldDescription.vue
var u = /*#__PURE__*/ e(/* @__PURE__ */ i({
	inheritAttrs: !1,
	__name: "FieldDescription",
	props: { disabled: { type: Boolean } },
	setup(e) {
		let i = e, u = a("field-state", void 0), d = n(() => i.disabled ?? u?.value.disabled ?? !1);
		return (e, n) => (s(), r(t, o(e.$attrs, {
			Element: "p",
			typography: "label-1",
			color: "secondary",
			class: ["field-description", { disabled: d.value }]
		}), {
			default: l(() => [c(e.$slots, "default", {}, void 0, !0)]),
			_: 3
		}, 16, ["class"]));
	}
}), [["__scopeId", "data-v-ea96270a"]]);
//#endregion
export { u as default };
