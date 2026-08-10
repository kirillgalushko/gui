import { t as e } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { t } from "./FieldHelper-BC_s15EK.js";
import { computed as n, createCommentVNode as r, createElementBlock as i, createElementVNode as a, createVNode as o, defineComponent as s, mergeModels as c, mergeProps as l, normalizeClass as u, normalizeStyle as d, onMounted as f, openBlock as p, ref as m, renderSlot as h, useAttrs as g, useId as _, useModel as v, vModelCheckbox as y, watch as b, withDirectives as x } from "vue";
import '../assets/Checkbox-BvqFIhP2.css';//#region src/components/Checkbox/Checkbox.vue?vue&type=script&setup=true&lang.ts
var S = { class: "checkbox-box" }, C = [
	"disabled",
	"aria-invalid",
	"aria-describedby",
	"aria-checked"
], w = {
	key: 0,
	class: "checkbox-label"
}, T = /*#__PURE__*/ e(/* @__PURE__ */ s({
	inheritAttrs: !1,
	__name: "Checkbox",
	props: /*@__PURE__*/ c({
		disabled: { type: Boolean },
		description: {},
		errorMessage: {},
		invalid: { type: Boolean },
		indeterminate: { type: Boolean },
		descriptionId: {},
		maxWidth: { default: "100%" }
	}, {
		modelValue: { type: [Boolean, Array] },
		modelModifiers: {}
	}),
	emits: ["update:modelValue"],
	setup(e) {
		let s = e, c = v(e, "modelValue"), T = g(), E = _(), D = m(), O = n(() => s.invalid ? !!s.errorMessage : !!s.description), k = n(() => {
			if (O.value) return s.descriptionId ?? `${E}-helper`;
		}), A = n(() => {
			let e = T["aria-describedby"], t = typeof e == "string" ? e : void 0;
			return k.value ? [t, k.value].filter(Boolean).join(" ") : t;
		}), j = () => {
			D.value && (D.value.indeterminate = !!s.indeterminate);
		};
		return f(j), b(() => s.indeterminate, j), (e, n) => (p(), i("div", {
			style: d({ maxWidth: s.maxWidth }),
			class: "checkbox-field"
		}, [a("label", { class: u(["checkbox", {
			disabled: s.disabled,
			invalid: s.invalid
		}]) }, [a("span", S, [x(a("input", l(e.$attrs, {
			ref_key: "inputRef",
			ref: D,
			"onUpdate:modelValue": n[0] ||= (e) => c.value = e,
			class: "checkbox-input",
			type: "checkbox",
			disabled: s.disabled,
			"aria-invalid": s.invalid || void 0,
			"aria-describedby": A.value,
			"aria-checked": s.indeterminate ? "mixed" : void 0
		}), null, 16, C), [[y, c.value]]), n[1] ||= a("span", {
			class: "checkbox-control",
			"aria-hidden": "true"
		}, [a("svg", {
			class: "checkbox-check",
			viewBox: "0 0 14 14",
			fill: "none"
		}, [a("path", { d: "M3 7.2L5.7 9.8L11 4.2" })]), a("span", { class: "checkbox-minus" })], -1)]), e.$slots.default ? (p(), i("span", w, [h(e.$slots, "default", {}, void 0, !0)])) : r("", !0)], 2), o(t, {
			description: s.description,
			"error-message": s.errorMessage,
			invalid: s.invalid,
			disabled: s.disabled,
			"description-id": k.value
		}, null, 8, [
			"description",
			"error-message",
			"invalid",
			"disabled",
			"description-id"
		])], 4));
	}
}), [["__scopeId", "data-v-231b2b75"]]);
//#endregion
export { T as default };
