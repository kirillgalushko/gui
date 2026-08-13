import { o as e } from "./floating-ui.vue-CE68TKCX.js";
import { t } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { t as n } from "./gui-icons.es-5O8QlDZJ.js";
import { t as r } from "./Button-CeAG6Psa.js";
import { t as i } from "./Gap-BwE3JGxn.js";
import { t as a } from "./Text-BiA0aMEo.js";
import { Teleport as o, Transition as s, computed as c, createBlock as l, createCommentVNode as u, createElementBlock as d, createElementVNode as f, createTextVNode as p, createVNode as m, defineComponent as h, getCurrentInstance as g, normalizeClass as _, normalizeStyle as v, openBlock as y, renderSlot as b, toDisplayString as x, unref as S, withCtx as C } from "vue";
import '../assets/Modal-3AlAjpBQ.css';//#region src/components/Modal/Modal.vue?vue&type=script&setup=true&lang.ts
var w = {
	key: 0,
	class: "modal-wrapper"
}, T = {
	key: 0,
	class: "modal-title"
}, E = {
	key: 1,
	class: "modal-close"
}, D = { class: "modal-content" }, O = {
	key: 2,
	class: "modal-footer"
}, k = /*@__PURE__*/ h({
	__name: "Modal",
	props: {
		isOpened: { type: Boolean },
		onClose: {},
		showCloseButton: { type: Boolean },
		title: {},
		description: {},
		size: { default: "medium" }
	},
	setup(e) {
		let t = e, h = g(), k = c(() => {
			let e = h?.slots.footer ? "\"footer footer\"" : "";
			return t.title || t.description ? `
      "title close"
      "content content"
      ${e}
    ` : `
     "content close"
      ${e}
  `;
		});
		return (e, c) => (y(), l(o, { to: "body" }, [m(s, { name: "fade" }, {
			default: C(() => [t.isOpened ? (y(), d("div", w, [c[0] ||= f("div", { class: "modal-bg" }, null, -1), f("div", {
				class: _(["modal", t.size]),
				role: "dialog"
			}, [f("div", {
				style: v({ gridTemplateAreas: k.value }),
				class: _(["modal-layout", {
					"with-title": !!(t.title || t.description),
					"with-close": !!t.showCloseButton
				}])
			}, [
				t.title || t.description ? (y(), d("div", T, [
					t.title ? (y(), l(a, {
						key: 0,
						typography: "title-3"
					}, {
						default: C(() => [p(x(t.title), 1)]),
						_: 1
					})) : u("", !0),
					t.title && t.description ? (y(), l(i, {
						key: 1,
						size: 1
					})) : u("", !0),
					t.description ? (y(), l(a, {
						key: 2,
						typography: "paragraph-1",
						color: "secondary"
					}, {
						default: C(() => [p(x(t.description), 1)]),
						_: 1
					})) : u("", !0)
				])) : u("", !0),
				t.showCloseButton ? (y(), d("div", E, [m(r, {
					mode: "ghost",
					size: "small",
					squared: "",
					"aria-label": "Закрыть",
					onClick: t.onClose
				}, {
					default: C(() => [m(S(n))]),
					_: 1
				}, 8, ["onClick"])])) : u("", !0),
				f("div", D, [b(e.$slots, "default", {}, void 0, !0)]),
				e.$slots.footer ? (y(), d("div", O, [b(e.$slots, "footer", {}, void 0, !0)])) : u("", !0)
			], 6)], 2)])) : u("", !0)]),
			_: 3
		})]));
	}
}), A = /* @__PURE__ */ e({ default: () => j }), j = /*#__PURE__*/ t(k, [["__scopeId", "data-v-79b7b2a8"]]);
//#endregion
export { A as n, j as t };
