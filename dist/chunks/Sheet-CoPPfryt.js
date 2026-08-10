import { o as e } from "./floating-ui.vue-CE68TKCX.js";
import { t } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { t as n } from "./gui-icons.es-5O8QlDZJ.js";
import { t as r } from "./Button-CeAG6Psa.js";
import { t as i } from "./Gap-BwE3JGxn.js";
import { t as a } from "./Text-BiA0aMEo.js";
import { Transition as o, computed as s, createBlock as c, createCommentVNode as l, createElementBlock as u, createElementVNode as d, createTextVNode as f, createVNode as p, defineComponent as m, normalizeClass as h, onBeforeUnmount as g, onMounted as _, openBlock as v, ref as y, renderSlot as b, toDisplayString as x, unref as S, watch as C, withCtx as w, withModifiers as T } from "vue";
import '../assets/Sheet-CBia793K.css';//#region src/components/Sheet/useSheet.ts
var E = (e) => {
	let t = y(null), n = y(""), r = y(!1), i = y(null), a = () => {
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
	return C(() => e.isOpened, c), _(() => {
		document.addEventListener("keydown", o), document.addEventListener("pointerdown", s), c(e.isOpened);
	}), g(() => {
		document.removeEventListener("keydown", o), document.removeEventListener("pointerdown", s), r.value && (document.body.style.overflow = n.value);
	}), {
		close: a,
		sheetRef: i
	};
}, D = {
	key: 0,
	class: "sheet-wrapper"
}, O = { class: "sheet-layout" }, k = {
	key: 0,
	class: "sheet-header"
}, A = {
	key: 0,
	class: "sheet-heading"
}, j = {
	key: 1,
	class: "sheet-actions"
}, M = { class: "sheet-content" }, N = { class: "sheet-content-inner" }, P = {
	key: 1,
	class: "sheet-footer"
}, F = /*@__PURE__*/ m({
	__name: "Sheet",
	props: {
		isOpened: { type: Boolean },
		onClose: {},
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
		let t = e, { close: m, sheetRef: g } = E(t), _ = s(() => t.size ?? (t.side === "top" || t.side === "bottom" ? "auto" : "medium")), y = () => {
			t.closeOnOverlayClick && m();
		};
		return (e, s) => (v(), c(o, { name: `sheet-${t.side}` }, {
			default: w(() => [t.isOpened ? (v(), u("div", D, [t.showOverlay ? (v(), u("div", {
				key: 0,
				class: "sheet-overlay",
				"aria-hidden": "true",
				onClick: y
			})) : l("", !0), d("section", {
				ref_key: "sheetRef",
				ref: g,
				class: h([
					"sheet",
					t.side,
					_.value,
					t.mode,
					{
						rounded: t.rounded,
						"without-overlay": !t.showOverlay
					}
				]),
				role: "dialog",
				"aria-modal": "true",
				tabindex: "-1",
				onClick: s[0] ||= T(() => {}, ["stop"])
			}, [d("div", O, [
				e.$slots.header || t.title || t.description || t.showCloseButton || e.$slots.actions ? (v(), u("div", k, [e.$slots.header || t.title || t.description ? (v(), u("div", A, [
					e.$slots.header ? b(e.$slots, "header", {}, void 0, !0, 0) : t.title ? (v(), c(a, {
						key: 1,
						Element: "h2",
						typography: "title-2",
						class: "sheet-title"
					}, {
						default: w(() => [f(x(t.title), 1)]),
						_: 1
					})) : l("", !0),
					!e.$slots.header && t.title && t.description ? (v(), c(i, {
						key: 2,
						size: 2
					})) : l("", !0),
					!e.$slots.header && t.description ? (v(), c(a, {
						key: 3,
						typography: "paragraph-1",
						color: "secondary",
						class: "sheet-description"
					}, {
						default: w(() => [f(x(t.description), 1)]),
						_: 1
					})) : l("", !0)
				])) : l("", !0), e.$slots.actions || t.showCloseButton ? (v(), u("div", j, [b(e.$slots, "actions", {}, void 0, !0), t.showCloseButton ? (v(), c(r, {
					key: 0,
					class: "sheet-close",
					mode: "ghost",
					size: "small",
					squared: "",
					type: "button",
					"aria-label": "Закрыть",
					onClick: S(m)
				}, {
					default: w(() => [p(S(n))]),
					_: 1
				}, 8, ["onClick"])) : l("", !0)])) : l("", !0)])) : l("", !0),
				d("div", M, [d("div", N, [b(e.$slots, "default", {}, void 0, !0)])]),
				e.$slots.footer ? (v(), u("div", P, [b(e.$slots, "footer", {}, void 0, !0)])) : l("", !0)
			])], 2)])) : l("", !0)]),
			_: 3
		}, 8, ["name"]));
	}
}), I = /* @__PURE__ */ e({ default: () => L }), L = /*#__PURE__*/ t(F, [["__scopeId", "data-v-c5b24508"]]);
//#endregion
export { I as n, L as t };
