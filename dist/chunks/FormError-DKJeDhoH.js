import { t as e } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { t } from "./Text-BiA0aMEo.js";
import { Transition as n, computed as r, createBlock as i, createCommentVNode as a, createElementBlock as o, createElementVNode as s, createTextVNode as c, createVNode as l, defineComponent as u, mergeProps as d, normalizeStyle as f, openBlock as p, toDisplayString as m, unref as h, useAttrs as g, withCtx as _ } from "vue";
import '../assets/FormError-Bnoob6cC.css';//#region src/components/FormError/FormError.vue?vue&type=script&setup=true&lang.ts
var v = { class: "form-error-content" }, y = { class: "form-error-message-box" }, b = /*#__PURE__*/ e(/* @__PURE__ */ u({
	__name: "FormError",
	props: {
		message: {},
		gap: { default: "var(--gap-1)" },
		Element: { default: "p" },
		typography: { default: "label-2" },
		clamp: {},
		ellipsis: { type: Boolean },
		color: { default: "negative" },
		textAlign: { default: "inherit" }
	},
	setup(e) {
		let u = e, b = g(), x = r(() => ({
			Element: u.Element,
			typography: u.typography,
			clamp: u.clamp,
			ellipsis: u.ellipsis,
			color: u.color,
			textAlign: u.textAlign
		})), S = r(() => ({ "--form-error-gap": u.gap }));
		return (e, r) => (p(), i(n, { name: "form-error" }, {
			default: _(() => [u.message ? (p(), o("div", {
				key: 0,
				class: "form-error",
				style: f(S.value)
			}, [s("div", v, [s("div", y, [l(n, {
				name: "form-error-message",
				mode: "out-in"
			}, {
				default: _(() => [(p(), i(t, d({
					...h(b),
					...x.value
				}, { key: u.message }), {
					default: _(() => [c(m(u.message), 1)]),
					_: 1
				}, 16))]),
				_: 1
			})])])], 4)) : a("", !0)]),
			_: 1
		}));
	}
}), [["__scopeId", "data-v-2eaf5829"]]);
//#endregion
export { b as default };
