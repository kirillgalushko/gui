import { t as e } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { f as t } from "./gui-icons.es-5O8QlDZJ.js";
import { computed as n, createElementBlock as r, createElementVNode as i, createVNode as a, defineComponent as o, normalizeClass as s, normalizeStyle as c, onBeforeUnmount as l, openBlock as u, provide as d, ref as f, renderSlot as p, unref as m, watch as h } from "vue";
import '../assets/Sidebar-CHYJYhl3.css';//#region src/components/Sidebar/Sidebar.vue?vue&type=script&setup=true&lang.ts
var g = 45, _ = 70, v = /*#__PURE__*/ e(/* @__PURE__ */ o({
	__name: "Sidebar",
	props: {
		mode: { default: "default" },
		padding: { default: 12 },
		width: { default: 300 },
		maxWidth: { default: "100vw" },
		minWidth: { default: "200px" },
		compactWidth: { default: 0 },
		collapseThreshold: {}
	},
	setup(e) {
		let o = e, v = f(o.width), y = f(!1), b = () => o.collapseThreshold !== void 0 && Number.isFinite(o.collapseThreshold) && o.collapseThreshold > o.compactWidth, x = () => o.compactWidth + ((o.collapseThreshold ?? o.compactWidth) - o.compactWidth) / 2, S = f(((e) => b() && e < x())(v.value));
		S.value && (v.value = o.compactWidth);
		let C = f(v.value), w = f(!1), T = f(null), E = n(() => b() ? S.value : v.value <= o.compactWidth), D = f(E.value), O = f(!0), k = f(!1), A = f(null), j = null, M = null, N = null, P = () => {
			N !== null && (clearTimeout(N), N = null);
		};
		h(E, (e) => {
			if (P(), typeof window < "u" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
				D.value = e, O.value = !0;
				return;
			}
			O.value = !1, N = setTimeout(() => {
				D.value = e, N = setTimeout(() => {
					O.value = !0, N = null;
				}, _);
			}, g);
		}, { flush: "sync" });
		let F = (e) => {
			if (e !== void 0 && (e.target !== A.value || e.propertyName !== "width")) return;
			M !== null && (clearTimeout(M), M = null);
			let t = T.value;
			w.value = !1, T.value = null, t === "expand" && !S.value && (k.value = !0, v.value = C.value, j = requestAnimationFrame(() => {
				k.value = !1, j = null;
			}));
		}, I = () => {
			M !== null && clearTimeout(M);
			let e = T.value === "expand" ? 220 : 260;
			M = setTimeout(F, e);
		}, L = (e) => {
			T.value = e, w.value = !0, I();
		};
		d("sidebar-width", v), d("sidebar-requested-width", C), d("sidebar-is-resizing", y), d("sidebar-is-compact", D);
		let R = (e) => b() && e < x(), z = (e) => {
			let t = R(e);
			if (C.value = t ? o.compactWidth : Math.max(e, o.collapseThreshold ?? e), y.value && t !== S.value && L(t ? "collapse" : "expand"), S.value = t, w.value) {
				v.value = T.value === "expand" ? o.collapseThreshold ?? e : o.compactWidth;
				return;
			}
			v.value = C.value;
		}, B = () => {
			A.value && (v.value = S.value ? o.compactWidth : A.value.getBoundingClientRect().width), y.value = !0, document.addEventListener("mousemove", V), document.addEventListener("mouseup", H), document.addEventListener("touchmove", V, { passive: !0 }), document.addEventListener("touchend", H), document.body.classList.add("prevent-user-select"), document.body.classList.add("sidebar-is-resizing");
		}, V = (e) => {
			if (y.value && A.value) {
				let t = e instanceof TouchEvent ? e.touches[0] : void 0, n = e instanceof MouseEvent ? e.clientX : t?.clientX;
				if (n === void 0) return;
				let r = A.value.offsetLeft;
				z(n - r);
			}
			y.value && e instanceof MouseEvent && e.buttons !== 1 && H();
		}, H = () => {
			y.value = !1, document.removeEventListener("mousemove", V), document.removeEventListener("mouseup", H), document.removeEventListener("touchmove", V), document.removeEventListener("touchend", H), document.body.classList.remove("prevent-user-select"), document.body.classList.remove("sidebar-is-resizing");
		};
		return h(() => o.width, (e) => {
			Number.isFinite(e) && z(e);
		}), h(() => o.compactWidth, () => {
			S.value && (v.value = o.compactWidth);
		}), l(() => {
			P(), M !== null && clearTimeout(M), j !== null && cancelAnimationFrame(j);
		}), (e, n) => (u(), r("div", {
			ref_key: "sidebarRef",
			ref: A,
			class: s([
				"sidebar",
				`sidebar--${o.mode}`,
				{
					"sidebar--resizing": y.value,
					"sidebar--snapped": S.value,
					"sidebar--snap-animating": w.value,
					"sidebar--snap-expanding": w.value && T.value === "expand",
					"sidebar--snap-handoff": k.value
				}
			]),
			style: c({
				width: `${v.value}px`,
				padding: `${o.padding}px`,
				maxWidth: o.maxWidth,
				minWidth: o.minWidth,
				"--sidebar-padding": `${o.padding}px`
			}),
			onTransitionend: F
		}, [i("div", {
			class: "resize-handle",
			onMousedown: B,
			onTouchstartPassive: B
		}, [a(m(t))], 32), i("div", { class: s(["sidebar__content", { "sidebar__content--visible": O.value }]) }, [p(e.$slots, "default", {}, void 0, !0)], 2)], 38));
	}
}), [["__scopeId", "data-v-b71e402d"]]);
//#endregion
export { v as default };
