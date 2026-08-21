import { t as e } from "./useViewportBreakpoint-tMpTVilx.js";
import { t } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { f as n } from "./gui-icons.es-B9g1VPOq.js";
import { t as r } from "./Sheet-D2tBarLz.js";
import { computed as i, createBlock as a, createElementBlock as o, createElementVNode as s, createVNode as c, defineComponent as l, normalizeClass as u, normalizeStyle as d, onBeforeUnmount as f, openBlock as p, provide as m, ref as h, renderSlot as g, unref as _, watch as v, withCtx as y } from "vue";
import '../assets/Sidebar-bUeEv-FB.css';//#region src/components/Sidebar/Sidebar.vue?vue&type=script&setup=true&lang.ts
var b = 45, x = 70, S = /*#__PURE__*/ t(/* @__PURE__ */ l({
	__name: "Sidebar",
	props: {
		mode: { default: "default" },
		padding: { default: 12 },
		width: { default: 300 },
		maxWidth: { default: "100vw" },
		minWidth: { default: "200px" },
		compactWidth: { default: 0 },
		collapseThreshold: {},
		mobile: {
			type: Boolean,
			default: !1
		},
		mobileOpen: {
			type: Boolean,
			default: !1
		}
	},
	emits: ["update:mobileOpen"],
	setup(t, { emit: l }) {
		let S = t, C = l, w = e(), T = i(() => S.mobile && w.isMobile), E = h(S.width), D = h(!1), O = () => S.collapseThreshold !== void 0 && Number.isFinite(S.collapseThreshold) && S.collapseThreshold > S.compactWidth, k = () => S.compactWidth + ((S.collapseThreshold ?? S.compactWidth) - S.compactWidth) / 2, A = h(((e) => O() && e < k())(E.value));
		A.value && (E.value = S.compactWidth);
		let j = h(E.value), M = h(!1), N = h(null), P = i(() => O() ? A.value : E.value <= S.compactWidth), F = h(P.value), I = h(!0), L = h(!1), R = h(null), z = null, B = null, V = null, H = () => {
			V !== null && (clearTimeout(V), V = null);
		};
		v(P, (e) => {
			if (H(), typeof window < "u" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
				F.value = e, I.value = !0;
				return;
			}
			I.value = !1, V = setTimeout(() => {
				F.value = e, V = setTimeout(() => {
					I.value = !0, V = null;
				}, x);
			}, b);
		}, { flush: "sync" });
		let U = (e) => {
			if (e !== void 0 && (e.target !== R.value || e.propertyName !== "width")) return;
			B !== null && (clearTimeout(B), B = null);
			let t = N.value;
			M.value = !1, N.value = null, t === "expand" && !A.value && (L.value = !0, E.value = j.value, z = requestAnimationFrame(() => {
				L.value = !1, z = null;
			}));
		}, W = () => {
			B !== null && clearTimeout(B);
			let e = N.value === "expand" ? 220 : 260;
			B = setTimeout(U, e);
		}, G = (e) => {
			N.value = e, M.value = !0, W();
		};
		m("sidebar-width", E), m("sidebar-requested-width", j), m("sidebar-is-resizing", D);
		let K = i(() => !T.value && F.value);
		m("sidebar-is-compact", K);
		let q = () => {
			C("update:mobileOpen", !1);
		}, J = (e) => O() && e < k(), Y = (e) => {
			let t = J(e);
			if (j.value = t ? S.compactWidth : Math.max(e, S.collapseThreshold ?? e), D.value && t !== A.value && G(t ? "collapse" : "expand"), A.value = t, M.value) {
				E.value = N.value === "expand" ? S.collapseThreshold ?? e : S.compactWidth;
				return;
			}
			E.value = j.value;
		}, X = () => {
			R.value && (E.value = A.value ? S.compactWidth : R.value.getBoundingClientRect().width), D.value = !0, document.addEventListener("mousemove", Z), document.addEventListener("mouseup", Q), document.addEventListener("touchmove", Z, { passive: !0 }), document.addEventListener("touchend", Q), document.body.classList.add("prevent-user-select"), document.body.classList.add("sidebar-is-resizing");
		}, Z = (e) => {
			if (D.value && R.value) {
				let t = e instanceof TouchEvent ? e.touches[0] : void 0, n = e instanceof MouseEvent ? e.clientX : t?.clientX;
				if (n === void 0) return;
				let r = R.value.offsetLeft;
				Y(n - r);
			}
			D.value && e instanceof MouseEvent && e.buttons !== 1 && Q();
		}, Q = () => {
			D.value = !1, document.removeEventListener("mousemove", Z), document.removeEventListener("mouseup", Q), document.removeEventListener("touchmove", Z), document.removeEventListener("touchend", Q), document.body.classList.remove("prevent-user-select"), document.body.classList.remove("sidebar-is-resizing");
		};
		return v(() => S.width, (e) => {
			Number.isFinite(e) && Y(e);
		}), v(() => S.compactWidth, () => {
			A.value && (E.value = S.compactWidth);
		}), v(T, (e) => {
			!e && S.mobileOpen && q();
		}), f(() => {
			H(), B !== null && clearTimeout(B), z !== null && cancelAnimationFrame(z);
		}), (e, t) => T.value ? (p(), a(r, {
			key: 0,
			"is-opened": S.mobileOpen,
			"on-close": q,
			"content-stretched": "",
			"show-close-button": !1,
			side: "left",
			size: "extra-small",
			mode: "default",
			rounded: !1
		}, {
			default: y(() => [g(e.$slots, "default", {}, void 0, !0)]),
			_: 3
		}, 8, ["is-opened"])) : (p(), o("div", {
			key: 1,
			ref_key: "sidebarRef",
			ref: R,
			class: u([
				"sidebar",
				`sidebar--${S.mode}`,
				{
					"sidebar--resizing": D.value,
					"sidebar--snapped": A.value,
					"sidebar--snap-animating": M.value,
					"sidebar--snap-expanding": M.value && N.value === "expand",
					"sidebar--snap-handoff": L.value
				}
			]),
			style: d({
				width: `${E.value}px`,
				padding: `${S.padding}px`,
				maxWidth: S.maxWidth,
				minWidth: S.minWidth,
				"--sidebar-padding": `${S.padding}px`
			}),
			onTransitionend: U
		}, [s("div", {
			class: "resize-handle",
			onMousedown: X,
			onTouchstartPassive: X
		}, [c(_(n))], 32), s("div", { class: u(["sidebar__content", { "sidebar__content--visible": I.value }]) }, [g(e.$slots, "default", {}, void 0, !0)], 2)], 38));
	}
}), [["__scopeId", "data-v-e5b230b0"]]);
//#endregion
export { S as default };
