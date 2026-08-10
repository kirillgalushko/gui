import { t as e } from "./useResize-Dsnbi184.js";
import { t } from "./useViewportBreakpoint-tMpTVilx.js";
import { t as n } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { l as r } from "./gui-icons.es-5O8QlDZJ.js";
import { t as i } from "./Button-CeAG6Psa.js";
import { t as a } from "./Sheet-CoPPfryt.js";
import { t as o } from "./Stack-D5mSLcYP.js";
import { t as s } from "./Dropdown-88Rw7P0I.js";
import { Fragment as c, Teleport as l, computed as u, createBlock as d, createCommentVNode as f, createElementBlock as p, createElementVNode as m, createVNode as h, defineComponent as g, normalizeClass as _, onMounted as v, openBlock as y, ref as b, renderSlot as x, unref as S, watch as C, withCtx as w } from "vue";
import '../assets/Navbar-8rh3jknT.css';//#region src/components/Navbar/useNavbarCompactLayout.ts
var T = (e) => e ? Math.max(e.scrollWidth, e.getBoundingClientRect().width) : 0;
function E({ actionsRef: t, isViewportCompact: n, layoutRef: r, leftRef: i, navbarRef: a, navigationRef: o }) {
	let s = b(null), c = b(0), l = b(!1), d = () => {
		let e = r.value;
		if (!e) return;
		if (o.value) {
			let n = getComputedStyle(e), r = Number.parseFloat(n.paddingLeft) + Number.parseFloat(n.paddingRight), a = Number.parseFloat(n.columnGap) || 0, s = Math.max(T(i.value), T(t.value));
			c.value = r + s * 2 + T(o.value) + a * 2;
		}
		let n = s.value?.clientWidth ?? e.clientWidth;
		l.value = c.value > 0 && n < c.value;
	};
	return v(() => {
		s.value = a.value?.parentElement ?? null;
	}), e(s, d), e(r, d), e(i, d), e(o, d), e(t, d), { isCompact: u(() => n.value || l.value) };
}
//#endregion
//#region src/components/Navbar/Navbar.vue?vue&type=script&setup=true&lang.ts
var D = ["data-mode"], O = ["aria-label"], k = ["aria-label"], A = ["aria-label"], j = /*#__PURE__*/ n(/* @__PURE__ */ g({
	__name: "Navbar",
	props: {
		ariaLabel: { default: "Основная навигация" },
		blur: {
			type: Boolean,
			default: !1
		},
		defaultMobileOpen: {
			type: Boolean,
			default: !1
		},
		mobileMenuLabel: { default: "Открыть меню" },
		mobileMenuTitle: { default: "Меню" },
		mobileMenuVariant: { default: "sheet" },
		mobileOpen: {
			type: Boolean,
			default: void 0
		},
		mode: { default: "default" },
		sticky: {
			type: Boolean,
			default: !1
		},
		stretched: { type: Boolean }
	},
	emits: ["update:mobileOpen"],
	setup(e, { emit: n }) {
		let g = e, v = n, T = t(), j = u(() => T.isMobile), M = b(null), N = b(null), P = b(null), F = b(null), I = b(null), { isCompact: L } = E({
			actionsRef: I,
			isViewportCompact: j,
			layoutRef: N,
			leftRef: P,
			navbarRef: M,
			navigationRef: F
		}), R = u(() => g.stretched ?? g.mode !== "floating"), z = b(g.defaultMobileOpen), B = u(() => g.mobileOpen ?? z.value), V = (e) => {
			g.mobileOpen === void 0 && (z.value = e), v("update:mobileOpen", e);
		}, H = (e) => {
			let t = e.target;
			t instanceof Element && t.closest("a[href]") && V(!1);
		};
		return C(L, (e) => {
			!e && B.value && V(!1);
		}), (t, n) => (y(), p("header", {
			ref_key: "navbarRef",
			ref: M,
			class: _([
				"navbar",
				`navbar-${g.mode}`,
				{
					blur: g.blur,
					"navbar-sticky": g.sticky,
					"navbar-stretched": R.value,
					"navbar-compact": S(L)
				}
			]),
			"data-mode": g.mode
		}, [m("div", {
			ref_key: "layoutRef",
			ref: N,
			class: "navbar-layout"
		}, [
			m("div", {
				ref_key: "leftRef",
				ref: P,
				class: "navbar-left"
			}, [x(t.$slots, "left", {}, void 0, !0)], 512),
			S(L) ? t.$slots.compactActions ? (y(), d(o, {
				key: 1,
				direction: "row",
				gap: 1,
				"align-items": "center"
			}, {
				default: w(() => [x(t.$slots, "compactActions", {}, void 0, !0)]),
				_: 3
			})) : f("", !0) : (y(), p(c, { key: 0 }, [m("div", {
				ref_key: "navigationRef",
				ref: F,
				class: "navbar-navigation",
				"aria-label": g.ariaLabel
			}, [x(t.$slots, "default", {}, void 0, !0)], 8, O), t.$slots.actions ? (y(), p("div", {
				key: 0,
				ref_key: "actionsRef",
				ref: I,
				class: "navbar-actions"
			}, [h(o, {
				direction: "row",
				gap: 2,
				"align-items": "center",
				"justify-content": "end"
			}, {
				default: w(() => [x(t.$slots, "actions", {}, void 0, !0)]),
				_: 3
			})], 512)) : f("", !0)], 64)),
			S(L) && g.mobileMenuVariant === "dropdown" ? (y(), d(s, {
				key: 2,
				shown: B.value,
				"content-padding": "comfortable",
				placement: "bottom-end",
				"onUpdate:shown": V
			}, {
				popper: w(() => [m("div", {
					class: "navbar-mobile-content",
					onClick: H
				}, [t.$slots.mobile ? x(t.$slots, "mobile", {}, void 0, !0, 0) : (y(), p(c, { key: 1 }, [m("div", {
					class: "navbar-mobile-navigation",
					"aria-label": g.ariaLabel
				}, [x(t.$slots, "default", {}, void 0, !0)], 8, k), t.$slots.actions ? (y(), d(o, {
					key: 0,
					direction: "column",
					gap: 2,
					stretched: ""
				}, {
					default: w(() => [x(t.$slots, "actions", {}, void 0, !0)]),
					_: 3
				})) : f("", !0)], 64))])]),
				default: w(() => [h(i, {
					class: "navbar-menu-button",
					mode: "ghost",
					size: "medium",
					squared: "",
					type: "button",
					"aria-label": g.mobileMenuLabel,
					"aria-expanded": B.value
				}, {
					default: w(() => [h(S(r))]),
					_: 1
				}, 8, ["aria-label", "aria-expanded"])]),
				_: 3
			}, 8, ["shown"])) : S(L) ? (y(), d(i, {
				key: 3,
				class: "navbar-menu-button",
				mode: "ghost",
				size: "medium",
				squared: "",
				rounded: e.mode === "floating",
				type: "button",
				"aria-label": g.mobileMenuLabel,
				"aria-expanded": B.value,
				onClick: n[0] ||= (e) => V(!0)
			}, {
				default: w(() => [h(S(r))]),
				_: 1
			}, 8, [
				"rounded",
				"aria-label",
				"aria-expanded"
			])) : f("", !0)
		], 512), (y(), d(l, { to: "body" }, [S(L) && g.mobileMenuVariant === "sheet" ? (y(), d(a, {
			key: 0,
			"is-opened": B.value,
			title: g.mobileMenuTitle,
			side: "right",
			size: "small",
			mode: "floating",
			"on-close": () => V(!1)
		}, {
			default: w(() => [m("div", {
				class: "navbar-mobile-content",
				onClick: H
			}, [t.$slots.mobile ? x(t.$slots, "mobile", {}, void 0, !0, 0) : (y(), p(c, { key: 1 }, [m("div", {
				class: "navbar-mobile-navigation",
				"aria-label": g.ariaLabel
			}, [x(t.$slots, "default", {}, void 0, !0)], 8, A), t.$slots.actions ? (y(), d(o, {
				key: 0,
				direction: "column",
				gap: 2,
				stretched: ""
			}, {
				default: w(() => [x(t.$slots, "actions", {}, void 0, !0)]),
				_: 3
			})) : f("", !0)], 64))])]),
			_: 3
		}, 8, [
			"is-opened",
			"title",
			"on-close"
		])) : f("", !0)]))], 10, D));
	}
}), [["__scopeId", "data-v-3d6f5e84"]]);
//#endregion
export { j as default };
