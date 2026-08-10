import { t as e } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { t } from "./Text-BiA0aMEo.js";
import { createBlock as n, createCommentVNode as r, createElementBlock as i, createElementVNode as a, createTextVNode as o, defineComponent as s, openBlock as c, toDisplayString as l, withCtx as u } from "vue";
import '../assets/FieldSeparator-D5wlUNwr.css';//#region src/components/Field/FieldSeparator.vue?vue&type=script&setup=true&lang.ts
var d = { class: "field-separator" }, f = /*#__PURE__*/ e(/* @__PURE__ */ s({
	__name: "FieldSeparator",
	props: { label: {} },
	setup(e) {
		let s = e;
		return (e, f) => (c(), i("div", d, [
			f[0] ||= a("span", { class: "field-separator-line" }, null, -1),
			s.label ? (c(), n(t, {
				key: 0,
				Element: "span",
				typography: "label-3",
				color: "secondary",
				class: "field-separator-label"
			}, {
				default: u(() => [o(l(s.label), 1)]),
				_: 1
			})) : r("", !0),
			f[1] ||= a("span", { class: "field-separator-line" }, null, -1)
		]));
	}
}), [["__scopeId", "data-v-7397d226"]]);
//#endregion
export { f as default };
