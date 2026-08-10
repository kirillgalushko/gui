import { o as e } from "./floating-ui.vue-CE68TKCX.js";
import { t } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { _ as n, v as r } from "./gui-icons.es-5O8QlDZJ.js";
import { t as i } from "./Action-CF1Ttgrt.js";
import { t as a } from "./Input-DDpZC86_.js";
import { computed as o, createBlock as s, createVNode as c, defineComponent as l, mergeProps as u, openBlock as d, ref as f, unref as p, withCtx as m, withModifiers as h } from "vue";
import '../assets/PasswordInput-m4w3_vEz.css';//#region src/components/PasswordInput/PasswordInput.vue?vue&type=script&setup=true&lang.ts
var g = /*@__PURE__*/ l({
	inheritAttrs: !1,
	__name: "PasswordInput",
	props: {
		modelValue: {},
		autoFocus: { type: Boolean },
		maxWidth: { default: "100%" },
		disabled: { type: Boolean },
		description: {},
		errorMessage: {},
		invalid: { type: Boolean },
		descriptionId: {}
	},
	emits: ["update:modelValue"],
	setup(e, { emit: t }) {
		let l = e, g = t, _ = f(!1), v = o(() => _.value ? "text" : "password"), y = o(() => _.value ? "Скрыть пароль" : "Показать пароль"), b = () => {
			l.disabled || (_.value = !_.value);
		}, x = (e) => {
			g("update:modelValue", String(e ?? ""));
		};
		return (e, t) => (d(), s(a, u(e.$attrs, {
			"model-value": l.modelValue,
			type: v.value,
			"max-width": l.maxWidth,
			"auto-focus": l.autoFocus,
			disabled: l.disabled,
			description: l.description,
			"error-message": l.errorMessage,
			invalid: l.invalid,
			"description-id": l.descriptionId,
			"onUpdate:modelValue": x
		}), {
			rightAdornment: m(() => [c(i, {
				type: "button",
				"aria-label": y.value,
				"aria-pressed": _.value,
				disabled: l.disabled,
				class: "password-toggle",
				onClick: h(b, ["prevent"])
			}, {
				default: m(() => [_.value ? (d(), s(p(n), { key: 0 })) : (d(), s(p(r), { key: 1 }))]),
				_: 1
			}, 8, [
				"aria-label",
				"aria-pressed",
				"disabled"
			])]),
			_: 1
		}, 16, [
			"model-value",
			"type",
			"max-width",
			"auto-focus",
			"disabled",
			"description",
			"error-message",
			"invalid",
			"description-id"
		]));
	}
}), _ = /* @__PURE__ */ e({ default: () => v }), v = /*#__PURE__*/ t(g, [["__scopeId", "data-v-e80b2331"]]);
//#endregion
export { _ as n, v as t };
