import { o as e } from "./floating-ui.vue-CE68TKCX.js";
import { t } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { t as n } from "./gui-icons.es-5O8QlDZJ.js";
import { t as r } from "./Button-CeAG6Psa.js";
import { t as i } from "./Gap-BwE3JGxn.js";
import { t as a } from "./Text-BiA0aMEo.js";
import { Transition as o, computed as s, createBlock as c, createCommentVNode as l, createElementBlock as u, createElementVNode as d, createTextVNode as f, createVNode as p, defineComponent as m, getCurrentInstance as h, normalizeClass as g, normalizeStyle as _, openBlock as v, renderSlot as y, toDisplayString as b, unref as x, withCtx as S } from "vue";
import '../assets/Modal-DCbkH8bN.css';//#region src/components/Modal/Modal.vue?vue&type=script&setup=true&lang.ts
var C = {
	key: 0,
	class: "modal-wrapper"
}, w = {
	key: 0,
	class: "modal-title"
}, T = {
	key: 1,
	class: "modal-close"
}, E = { class: "modal-content" }, D = {
	key: 2,
	class: "modal-footer"
}, O = /*@__PURE__*/ m({
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
		let t = e, m = h(), O = s(() => {
			let e = m?.slots.footer ? "\"footer footer\"" : "";
			return t.title || t.description ? `
      "title close"
      "content content"
      ${e}
    ` : `
     "content close"
      ${e}
  `;
		});
		return (e, s) => (v(), c(o, { name: "fade" }, {
			default: S(() => [t.isOpened ? (v(), u("div", C, [s[0] ||= d("div", { class: "modal-bg" }, null, -1), d("div", {
				class: g(["modal", t.size]),
				role: "dialog"
			}, [d("div", {
				style: _({ gridTemplateAreas: O.value }),
				class: g(["modal-layout", {
					"with-title": !!(t.title || t.description),
					"with-close": !!t.showCloseButton
				}])
			}, [
				t.title || t.description ? (v(), u("div", w, [
					t.title ? (v(), c(a, {
						key: 0,
						typography: "title-3"
					}, {
						default: S(() => [f(b(t.title), 1)]),
						_: 1
					})) : l("", !0),
					t.title && t.description ? (v(), c(i, {
						key: 1,
						size: 1
					})) : l("", !0),
					t.description ? (v(), c(a, {
						key: 2,
						typography: "paragraph-1",
						color: "secondary"
					}, {
						default: S(() => [f(b(t.description), 1)]),
						_: 1
					})) : l("", !0)
				])) : l("", !0),
				t.showCloseButton ? (v(), u("div", T, [p(r, {
					mode: "ghost",
					size: "small",
					squared: "",
					"aria-label": "Закрыть",
					onClick: t.onClose
				}, {
					default: S(() => [p(x(n))]),
					_: 1
				}, 8, ["onClick"])])) : l("", !0),
				d("div", E, [y(e.$slots, "default", {}, void 0, !0)]),
				e.$slots.footer ? (v(), u("div", D, [y(e.$slots, "footer", {}, void 0, !0)])) : l("", !0)
			], 6)], 2)])) : l("", !0)]),
			_: 3
		}));
	}
}), k = /* @__PURE__ */ e({ default: () => A }), A = /*#__PURE__*/ t(O, [["__scopeId", "data-v-e319e56e"]]);
//#endregion
export { k as n, A as t };
