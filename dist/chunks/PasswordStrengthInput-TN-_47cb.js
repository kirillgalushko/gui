import { t as e } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { C as t, S as n } from "./gui-icons.es-B9g1VPOq.js";
import { t as r } from "./Text-BiA0aMEo.js";
import { t as i } from "./ProgressBar-CttqzR0Y.js";
import { t as a } from "./PasswordInput-B8qKG5bD.js";
import { Fragment as o, Transition as s, computed as c, createBlock as l, createCommentVNode as u, createElementBlock as d, createElementVNode as f, createTextVNode as p, createVNode as m, defineComponent as h, mergeProps as g, normalizeClass as _, normalizeStyle as v, openBlock as y, ref as b, renderList as x, toDisplayString as S, unref as C, withCtx as w } from "vue";
import '../assets/PasswordStrengthInput-KaMHwJBd.css';//#region src/components/PasswordStrengthInput/PasswordStrengthInput.vue?vue&type=script&setup=true&lang.ts
var T = {
	key: 0,
	class: "password-strength-details"
}, E = { class: "password-strength-details-content" }, D = { class: "password-strength-progress" }, O = { class: "password-strength-rules" }, k = { class: "password-strength-rule-icon" }, A = /*#__PURE__*/ e(/* @__PURE__ */ h({
	inheritAttrs: !1,
	__name: "PasswordStrengthInput",
	props: {
		modelValue: {},
		autoFocus: { type: Boolean },
		rules: { default: () => [] },
		progress: {},
		progressSegments: { default: 4 },
		progressHeight: { default: "8px" },
		progressGap: { default: "var(--gap-1)" },
		maxWidth: { default: "100%" },
		disabled: { type: Boolean },
		description: {},
		errorMessage: {},
		invalid: { type: Boolean },
		descriptionId: {}
	},
	emits: ["update:modelValue"],
	setup(e, { emit: h }) {
		let A = e, j = h, M = b(!1), N = c(() => A.rules.filter((e) => e.valid).length), P = c(() => A.rules.length), F = c(() => (A.modelValue ?? "").length > 0), I = c(() => A.rules.length > 0 && (M.value || F.value)), L = c(() => typeof A.progress == "number" ? Math.min(P.value, Math.max(0, A.progress)) : P.value ? N.value : 0), R = c(() => {
			let e = P.value ? L.value / P.value : 0;
			return e > .75 ? "positive" : e > .5 ? "warning" : e > .25 ? "danger" : "negative";
		}), z = (e) => {
			j("update:modelValue", e);
		}, B = () => {
			M.value = !0;
		}, V = (e) => {
			let t = e.currentTarget, n = e.relatedTarget;
			t instanceof HTMLElement && n instanceof Node && t.contains(n) || (M.value = !1);
		};
		return (e, c) => (y(), d("div", {
			style: v({ maxWidth: A.maxWidth }),
			class: "password-strength",
			onFocusin: B,
			onFocusout: V
		}, [m(a, g(e.$attrs, {
			"model-value": A.modelValue,
			"max-width": A.maxWidth,
			"auto-focus": A.autoFocus,
			disabled: A.disabled,
			description: A.description,
			"error-message": A.errorMessage,
			invalid: A.invalid,
			"description-id": A.descriptionId,
			"onUpdate:modelValue": z
		}), null, 16, [
			"model-value",
			"max-width",
			"auto-focus",
			"disabled",
			"description",
			"error-message",
			"invalid",
			"description-id"
		]), m(s, { name: "password-strength-details" }, {
			default: w(() => [I.value ? (y(), d("div", T, [f("div", E, [f("div", D, [m(i, {
				progress: L.value,
				color: R.value,
				segments: A.progressSegments,
				height: A.progressHeight,
				gap: A.progressGap,
				max: P.value
			}, null, 8, [
				"progress",
				"color",
				"segments",
				"height",
				"gap",
				"max"
			])]), f("ul", O, [(y(!0), d(o, null, x(A.rules, (e, i) => (y(), d("li", {
				key: e.id ?? i,
				class: _(["password-strength-rule", { valid: e.valid }]),
				style: v({ "--rule-enter-delay": `${i * 34}ms` })
			}, [f("span", k, [e.valid ? (y(), l(C(t), { key: 0 })) : (y(), l(C(n), { key: 1 }))]), m(r, {
				Element: "span",
				typography: "label-1",
				color: "inherit"
			}, {
				default: w(() => [p(S(e.label), 1)]),
				_: 2
			}, 1024)], 6))), 128))])])])) : u("", !0)]),
			_: 1
		})], 36));
	}
}), [["__scopeId", "data-v-ea368072"]]);
//#endregion
export { A as default };
