import { o as e } from "./floating-ui.vue-CE68TKCX.js";
import { t } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { t as n } from "./Text-BiA0aMEo.js";
import { Transition as r, computed as i, createBlock as a, createCommentVNode as o, createElementBlock as s, createElementVNode as c, createTextVNode as l, createVNode as u, defineComponent as d, normalizeClass as f, normalizeStyle as p, openBlock as m, toDisplayString as h, withCtx as g } from "vue";
import '../assets/FieldHelper-Bn_tGqH8.css';//#region src/components/FieldHelper/FieldHelper.vue?vue&type=script&setup=true&lang.ts
var _ = { class: "field-helper-content" }, v = { class: "field-helper-message-box" }, y = /*@__PURE__*/ d({
	__name: "FieldHelper",
	props: {
		description: {},
		errorMessage: {},
		invalid: { type: Boolean },
		gap: { default: "var(--gap-1)" },
		disabled: { type: Boolean },
		descriptionId: {}
	},
	setup(e) {
		let t = e, d = i(() => t.invalid ? t.errorMessage : t.description), y = i(() => t.invalid ? "error" : "description");
		return (e, i) => (m(), a(r, { name: "field-helper" }, {
			default: g(() => [d.value ? (m(), s("div", {
				key: 0,
				class: f([
					"field-helper",
					y.value,
					{ disabled: t.disabled }
				]),
				style: p({ "--field-helper-gap": t.gap })
			}, [c("div", _, [c("div", v, [u(r, {
				name: "field-helper-message",
				mode: "out-in"
			}, {
				default: g(() => [(m(), a(n, {
					id: t.descriptionId,
					key: y.value,
					Element: "p",
					typography: "label-1",
					color: "inherit"
				}, {
					default: g(() => [l(h(d.value), 1)]),
					_: 1
				}, 8, ["id"]))]),
				_: 1
			})])])], 6)) : o("", !0)]),
			_: 1
		}));
	}
}), b = /* @__PURE__ */ e({ default: () => x }), x = /*#__PURE__*/ t(y, [["__scopeId", "data-v-b6d30268"]]);
//#endregion
export { b as n, x as t };
