import { o as e } from "./floating-ui.vue-CE68TKCX.js";
import { t } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { t as n } from "./gui-icons.es-B9g1VPOq.js";
import { t as r } from "./Button-CeAG6Psa.js";
import { t as i } from "./Card-mY6PKnyG.js";
import { t as a } from "./Text-BiA0aMEo.js";
import { t as o } from "./ModalContent-hbYXOdQV.js";
import { t as s } from "./ModalFooter-y4RdbIBp.js";
import { t as c } from "./ModalHeader-Dm3XSwYu.js";
import { Teleport as l, Transition as u, computed as d, createBlock as f, createCommentVNode as p, createElementBlock as m, createElementVNode as h, createTextVNode as g, createVNode as _, defineComponent as v, normalizeClass as y, openBlock as b, renderSlot as x, toDisplayString as S, unref as C, withCtx as w } from "vue";
import '../assets/Modal-jLD0oYCr.css';//#region src/components/Modal/Modal.vue?vue&type=script&setup=true&lang.ts
var T = {
	key: 0,
	class: "modal-wrapper"
}, E = {
	key: 0,
	class: "modal-heading modal-title"
}, D = /*@__PURE__*/ v({
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
		let t = e, v = d(() => t.title || t.description || t.showCloseButton);
		return (e, d) => (b(), f(l, { to: "body" }, [_(u, { name: "fade" }, {
			default: w(() => [t.isOpened ? (b(), m("div", T, [d[0] ||= h("div", { class: "modal-bg" }, null, -1), _(i, {
				class: y(["modal", t.size]),
				padding: 16,
				borderRadius: 24,
				stretched: "",
				role: "dialog",
				"aria-modal": "true"
			}, {
				default: w(() => [
					v.value ? (b(), f(c, {
						key: 0,
						class: y(["modal-header", { "with-close": t.showCloseButton }]),
						border: !!(t.title || t.description)
					}, {
						default: w(() => [t.title || t.description ? (b(), m("div", E, [t.title ? (b(), f(a, {
							key: 0,
							typography: "title-2"
						}, {
							default: w(() => [g(S(t.title), 1)]),
							_: 1
						})) : p("", !0), t.description ? (b(), f(a, {
							key: 1,
							typography: "paragraph-1",
							color: "secondary"
						}, {
							default: w(() => [g(S(t.description), 1)]),
							_: 1
						})) : p("", !0)])) : p("", !0), t.showCloseButton ? (b(), f(r, {
							key: 1,
							class: "modal-close",
							mode: "ghost",
							size: "small",
							squared: "",
							"aria-label": "Закрыть",
							onClick: t.onClose
						}, {
							default: w(() => [_(C(n))]),
							_: 1
						}, 8, ["onClick"])) : p("", !0)]),
						_: 1
					}, 8, ["class", "border"])) : p("", !0),
					_(o, { class: "modal-content" }, {
						default: w(() => [x(e.$slots, "default", {}, void 0, !0)]),
						_: 3
					}),
					e.$slots.footer ? (b(), f(s, {
						key: 1,
						class: "modal-footer"
					}, {
						default: w(() => [x(e.$slots, "footer", {}, void 0, !0)]),
						_: 3
					})) : p("", !0)
				]),
				_: 3
			}, 8, ["class"])])) : p("", !0)]),
			_: 3
		})]));
	}
}), O = /* @__PURE__ */ e({ default: () => k }), k = /*#__PURE__*/ t(D, [["__scopeId", "data-v-5f544e19"]]);
//#endregion
export { O as n, k as t };
