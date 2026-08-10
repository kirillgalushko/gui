import { t as e } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { createElementBlock as t, createElementVNode as n, defineComponent as r, mergeModels as i, mergeProps as a, normalizeClass as o, openBlock as s, useModel as c, vModelCheckbox as l, withDirectives as u } from "vue";
import '../assets/Switch-tb-LjdZ6.css';//#region src/components/Switch/Switch.vue?vue&type=script&setup=true&lang.ts
var d = ["disabled"], f = /*#__PURE__*/ e(/* @__PURE__ */ r({
	inheritAttrs: !1,
	__name: "Switch",
	props: /*@__PURE__*/ i({
		disabled: {
			type: Boolean,
			default: !1
		},
		size: { default: "medium" }
	}, {
		modelValue: {
			type: Boolean,
			default: !1
		},
		modelModifiers: {}
	}),
	emits: ["update:modelValue"],
	setup(e) {
		let r = e, i = c(e, "modelValue");
		return (e, c) => (s(), t("label", { class: o([
			"switch",
			r.size,
			{ disabled: r.disabled }
		]) }, [u(n("input", a(e.$attrs, {
			"onUpdate:modelValue": c[0] ||= (e) => i.value = e,
			class: "switch-input",
			type: "checkbox",
			role: "switch",
			disabled: r.disabled
		}), null, 16, d), [[l, i.value]]), c[1] ||= n("span", {
			class: "switch-track",
			"aria-hidden": "true"
		}, [n("span", { class: "switch-thumb" })], -1)], 2));
	}
}), [["__scopeId", "data-v-ee901b2d"]]);
//#endregion
export { f as default };
