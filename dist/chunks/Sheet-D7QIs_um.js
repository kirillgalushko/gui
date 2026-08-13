import { o as e } from "./floating-ui.vue-CE68TKCX.js";
import { t } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { t as n } from "./gui-icons.es-5O8QlDZJ.js";
import { t as r } from "./Button-CeAG6Psa.js";
import { t as i } from "./Gap-BwE3JGxn.js";
import { t as a } from "./Text-BiA0aMEo.js";
import { Teleport as o, Transition as s, computed as c, createBlock as l, createCommentVNode as u, createElementBlock as d, createElementVNode as f, createTextVNode as p, createVNode as m, defineComponent as h, normalizeClass as g, onBeforeUnmount as _, onMounted as v, openBlock as y, ref as b, renderSlot as x, toDisplayString as S, unref as C, watch as w, withCtx as T, withModifiers as E } from "vue";
import '../assets/Sheet-Bm0QBsI9.css';//#region src/components/Sheet/useSheet.ts
var D = (e) => {
	let t = b(null), n = b(""), r = b(!1), i = b(null), a = () => {
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
	return w(() => e.isOpened, c), v(() => {
		document.addEventListener("keydown", o), document.addEventListener("pointerdown", s), c(e.isOpened);
	}), _(() => {
		document.removeEventListener("keydown", o), document.removeEventListener("pointerdown", s), r.value && (document.body.style.overflow = n.value);
	}), {
		close: a,
		sheetRef: i
	};
}, O = {
	key: 0,
	class: "sheet-wrapper"
}, k = { class: "sheet-layout" }, A = {
	key: 0,
	class: "sheet-header"
}, j = {
	key: 0,
	class: "sheet-heading"
}, M = {
	key: 1,
	class: "sheet-actions"
}, N = { class: "sheet-content" }, P = {
	key: 1,
	class: "sheet-footer"
}, F = /*@__PURE__*/ h({
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
		let t = e, { close: h, sheetRef: _ } = D(t), v = c(() => t.size ?? (t.side === "top" || t.side === "bottom" ? "auto" : "medium")), b = () => {
			t.closeOnOverlayClick && h();
		};
		return (e, c) => (y(), l(o, { to: "body" }, [m(s, { name: `sheet-${t.side}` }, {
			default: T(() => [t.isOpened ? (y(), d("div", O, [t.showOverlay ? (y(), d("div", {
				key: 0,
				class: "sheet-overlay",
				"aria-hidden": "true",
				onClick: b
			})) : u("", !0), f("section", {
				ref_key: "sheetRef",
				ref: _,
				class: g([
					"sheet",
					t.side,
					v.value,
					t.mode,
					{
						rounded: t.rounded,
						"without-overlay": !t.showOverlay
					}
				]),
				role: "dialog",
				"aria-modal": "true",
				tabindex: "-1",
				onClick: c[0] ||= E(() => {}, ["stop"])
			}, [f("div", k, [
				e.$slots.header || t.title || t.description || t.showCloseButton || e.$slots.actions ? (y(), d("div", A, [e.$slots.header || t.title || t.description ? (y(), d("div", j, [
					e.$slots.header ? x(e.$slots, "header", {}, void 0, !0, 0) : t.title ? (y(), l(a, {
						key: 1,
						Element: "h2",
						typography: "title-2",
						class: "sheet-title"
					}, {
						default: T(() => [p(S(t.title), 1)]),
						_: 1
					})) : u("", !0),
					!e.$slots.header && t.title && t.description ? (y(), l(i, {
						key: 2,
						size: 2
					})) : u("", !0),
					!e.$slots.header && t.description ? (y(), l(a, {
						key: 3,
						typography: "paragraph-1",
						color: "secondary",
						class: "sheet-description"
					}, {
						default: T(() => [p(S(t.description), 1)]),
						_: 1
					})) : u("", !0)
				])) : u("", !0), e.$slots.actions || t.showCloseButton ? (y(), d("div", M, [x(e.$slots, "actions", {}, void 0, !0), t.showCloseButton ? (y(), l(r, {
					key: 0,
					class: "sheet-close",
					mode: "ghost",
					size: "small",
					squared: "",
					type: "button",
					"aria-label": "Закрыть",
					onClick: C(h)
				}, {
					default: T(() => [m(C(n))]),
					_: 1
				}, 8, ["onClick"])) : u("", !0)])) : u("", !0)])) : u("", !0),
				f("div", N, [f("div", { class: g(["sheet-content-inner", { "sheet-content-inner--stretched": t.contentStretched }]) }, [x(e.$slots, "default", {}, void 0, !0)], 2)]),
				e.$slots.footer ? (y(), d("div", P, [x(e.$slots, "footer", {}, void 0, !0)])) : u("", !0)
			])], 2)])) : u("", !0)]),
			_: 3
		}, 8, ["name"])]));
	}
}), I = /* @__PURE__ */ e({ default: () => L }), L = /*#__PURE__*/ t(F, [["__scopeId", "data-v-b654bc1d"]]);
//#endregion
export { I as n, L as t };
