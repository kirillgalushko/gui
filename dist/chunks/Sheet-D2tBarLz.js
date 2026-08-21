import { o as e } from "./floating-ui.vue-CE68TKCX.js";
import { t } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { t as n } from "./gui-icons.es-B9g1VPOq.js";
import { t as r } from "./Button-CeAG6Psa.js";
import { t as i } from "./Card-mY6PKnyG.js";
import { t as a } from "./Text-BiA0aMEo.js";
import { t as o } from "./Gap-BwE3JGxn.js";
import { t as s } from "./SheetContent-DHQ9S1b4.js";
import { t as c } from "./SheetFooter-1FpRR6nj.js";
import { t as l } from "./SheetHeader-DfM6VYVg.js";
import { Teleport as u, Transition as d, computed as f, createBlock as p, createCommentVNode as m, createElementBlock as h, createTextVNode as g, createVNode as _, defineComponent as v, normalizeClass as y, onBeforeUnmount as b, onMounted as x, openBlock as S, ref as C, renderSlot as w, toDisplayString as T, unref as E, useSlots as D, watch as O, withCtx as k, withModifiers as A } from "vue";
import '../assets/Sheet-D_YptduU.css';//#region src/components/Sheet/useSheet.ts
var j = (e) => {
	let t = C(null), n = C(""), r = C(!1), i = C(null), a = () => {
		e.onClose?.();
	}, o = (t) => {
		t.key === "Escape" && e.closeOnEscape && e.isOpened && a();
	}, s = (t) => {
		if (!e.isOpened || e.showOverlay || !e.closeOnOverlayClick) return;
		let n = t.target;
		!(n instanceof Node) || i.value?.contains(n) || n instanceof Element && n.closest(".v-popper__popper") || a();
	}, c = (a) => {
		if (!(typeof document > "u")) {
			if (a) {
				t.value = document.activeElement, e.showOverlay && (n.value = document.body.style.overflow, r.value = !0, document.body.style.overflow = "hidden"), requestAnimationFrame(() => {
					i.value?.focus();
				});
				return;
			}
			r.value &&= (document.body.style.overflow = n.value, !1), t.value?.focus?.();
		}
	};
	return O(() => e.isOpened, c), x(() => {
		document.addEventListener("keydown", o), document.addEventListener("pointerdown", s), c(e.isOpened);
	}), b(() => {
		document.removeEventListener("keydown", o), document.removeEventListener("pointerdown", s), r.value && (document.body.style.overflow = n.value);
	}), {
		close: a,
		sheetRef: i
	};
}, M = {
	key: 0,
	class: "sheet-wrapper"
}, N = {
	key: 0,
	class: "sheet-heading"
}, P = {
	key: 1,
	class: "sheet-actions"
}, F = /*@__PURE__*/ v({
	__name: "Sheet",
	props: {
		isOpened: { type: Boolean },
		onClose: {},
		contentStretched: { type: Boolean },
		showCloseButton: {
			type: Boolean,
			default: !0
		},
		title: {},
		description: {},
		side: { default: "right" },
		size: {},
		mode: { default: "floating" },
		rounded: {
			type: Boolean,
			default: !0
		},
		showOverlay: {
			type: Boolean,
			default: !0
		},
		closeOnOverlayClick: {
			type: Boolean,
			default: !0
		},
		closeOnEscape: {
			type: Boolean,
			default: !0
		}
	},
	setup(e) {
		let t = e, { close: v, sheetRef: b } = j(t), x = D(), C = f(() => t.size ?? (t.side === "top" || t.side === "bottom" ? "auto" : "medium")), O = f(() => t.mode === "floating" && t.rounded ? 24 : 0), F = f(() => x.header || t.title || t.description || t.showCloseButton || x.actions), I = (e) => {
			b.value = e instanceof HTMLElement ? e : e?.element ?? null;
		}, L = () => {
			t.closeOnOverlayClick && v();
		};
		return (e, f) => (S(), p(u, { to: "body" }, [_(d, { name: `sheet-${t.side}` }, {
			default: k(() => [t.isOpened ? (S(), h("div", M, [t.showOverlay ? (S(), h("div", {
				key: 0,
				class: "sheet-overlay",
				"aria-hidden": "true",
				onClick: L
			})) : m("", !0), _(i, {
				ref: I,
				Element: "section",
				class: y([
					"sheet",
					t.side,
					C.value,
					t.mode
				]),
				"border-radius": O.value,
				padding: 16,
				role: "dialog",
				"aria-modal": "true",
				tabindex: "-1",
				stretched: t.side === "left" || t.side === "right",
				"full-height": "",
				onClick: f[0] ||= A(() => {}, ["stop"])
			}, {
				default: k(() => [
					F.value ? (S(), p(l, {
						key: 0,
						class: "sheet-header",
						border: ""
					}, {
						default: k(() => [e.$slots.header || t.title || t.description ? (S(), h("div", N, [
							e.$slots.header ? w(e.$slots, "header", {}, void 0, !0, 0) : t.title ? (S(), p(a, {
								key: 1,
								Element: "h2",
								typography: "title-2",
								class: "sheet-title"
							}, {
								default: k(() => [g(T(t.title), 1)]),
								_: 1
							})) : m("", !0),
							!e.$slots.header && t.title && t.description ? (S(), p(o, {
								key: 2,
								size: 2
							})) : m("", !0),
							!e.$slots.header && t.description ? (S(), p(a, {
								key: 3,
								typography: "paragraph-1",
								color: "secondary",
								class: "sheet-description"
							}, {
								default: k(() => [g(T(t.description), 1)]),
								_: 1
							})) : m("", !0)
						])) : m("", !0), e.$slots.actions || t.showCloseButton ? (S(), h("div", P, [w(e.$slots, "actions", {}, void 0, !0), t.showCloseButton ? (S(), p(r, {
							key: 0,
							mode: "ghost",
							size: "small",
							squared: "",
							type: "button",
							"aria-label": "Закрыть",
							onClick: E(v)
						}, {
							default: k(() => [_(E(n))]),
							_: 1
						}, 8, ["onClick"])) : m("", !0)])) : m("", !0)]),
						_: 3
					})) : m("", !0),
					_(s, { class: y(["sheet-content", { "sheet-content--stretched": t.contentStretched }]) }, {
						default: k(() => [w(e.$slots, "default", {}, void 0, !0)]),
						_: 3
					}, 8, ["class"]),
					e.$slots.footer ? (S(), p(c, {
						key: 1,
						class: "sheet-footer"
					}, {
						default: k(() => [w(e.$slots, "footer", {}, void 0, !0)]),
						_: 3
					})) : m("", !0)
				]),
				_: 3
			}, 8, [
				"class",
				"border-radius",
				"stretched"
			])])) : m("", !0)]),
			_: 3
		}, 8, ["name"])]));
	}
}), I = /* @__PURE__ */ e({ default: () => L }), L = /*#__PURE__*/ t(F, [["__scopeId", "data-v-bacc60c3"]]);
//#endregion
export { I as n, L as t };
