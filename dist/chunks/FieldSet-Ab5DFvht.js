import { t as e } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { createElementBlock as t, defineComponent as n, normalizeClass as r, openBlock as i, renderSlot as a } from "vue";
import '../assets/FieldSet-DKqDZQLP.css';//#region src/components/Field/FieldSet.vue?vue&type=script&setup=true&lang.ts
var o = ["disabled"], s = /*#__PURE__*/ e(/* @__PURE__ */ n({
	__name: "FieldSet",
	props: { disabled: { type: Boolean } },
	setup(e) {
		let n = e;
		return (e, s) => (i(), t("fieldset", {
			disabled: n.disabled,
			class: r(["field-set", { disabled: n.disabled }])
		}, [a(e.$slots, "default", {}, void 0, !0)], 10, o));
	}
}), [["__scopeId", "data-v-04f7e99f"]]);
//#endregion
export { s as default };
