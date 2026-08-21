import { o as e } from "./floating-ui.vue-CE68TKCX.js";
import { t } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { computed as n, createElementBlock as r, defineComponent as i, mergeProps as a, onBeforeUnmount as o, openBlock as s, ref as c, renderSlot as l, toRef as u, watch as d } from "vue";
import '../assets/ScrollArea-BmiXLq63.css';//#region src/components/ScrollArea/useScrollFade.ts
var f = 1, p = () => typeof CSS < "u" && CSS.supports("animation-timeline: scroll()"), m = (e, t = "ltr") => {
	let n = Math.max(0, e.scrollHeight - e.clientHeight), r = Math.max(0, e.scrollWidth - e.clientWidth), i = Math.min(n, Math.max(0, e.scrollTop)), a = Math.min(r, Math.max(0, t === "rtl" ? Math.abs(e.scrollLeft) : e.scrollLeft));
	return {
		top: n > f && i > f,
		bottom: n > f && i < n - f,
		start: r > f && a > f,
		end: r > f && a < r - f
	};
}, h = (e, t) => {
	let n = null, r = null, i = [], a = null, s = (e) => {
		e.removeAttribute("data-scroll-fade-top"), e.removeAttribute("data-scroll-fade-bottom"), e.removeAttribute("data-scroll-fade-start"), e.removeAttribute("data-scroll-fade-end");
	}, c = () => {
		if (!a || !t.value) return;
		let e = getComputedStyle(a).direction === "rtl" ? "rtl" : "ltr", n = m(a, e);
		a.toggleAttribute("data-scroll-fade-top", n.top), a.toggleAttribute("data-scroll-fade-bottom", n.bottom), a.toggleAttribute("data-scroll-fade-start", n.start), a.toggleAttribute("data-scroll-fade-end", n.end);
	}, l = () => {
		if (!(!a || !n)) {
			for (let e of i) n.unobserve(e);
			i = Array.from(a.children);
			for (let e of i) n.observe(e);
		}
	}, u = () => {
		a && (a.removeEventListener("scroll", c), s(a)), n?.disconnect(), r?.disconnect(), n = null, r = null, i = [], a = null;
	}, f = d([e, t], ([e, t]) => {
		u(), !(!e || !t) && (a = e, !p() && (a.addEventListener("scroll", c, { passive: !0 }), typeof ResizeObserver < "u" && (n = new ResizeObserver(c), n.observe(a), l()), typeof MutationObserver < "u" && (r = new MutationObserver(() => {
			l(), c();
		}), r.observe(a, {
			childList: !0,
			subtree: !0
		})), c()));
	}, { flush: "post" });
	o(() => {
		f(), u();
	});
}, g = ["tabindex"], _ = /*@__PURE__*/ i({
	inheritAttrs: !1,
	__name: "ScrollArea",
	props: {
		maxHeight: {
			type: [String, Number],
			default: void 0
		},
		orientation: {
			type: String,
			default: "vertical"
		},
		keyboardFocusable: {
			type: Boolean,
			default: !0
		},
		stableScrollbar: {
			type: Boolean,
			default: !0
		},
		fade: {
			type: Boolean,
			default: !1
		},
		fadeSize: {
			type: [String, Number],
			default: void 0
		}
	},
	setup(e) {
		let t = e, i = c(null), o = n(() => typeof t.maxHeight == "number" ? `${t.maxHeight}px` : t.maxHeight), d = n(() => typeof t.fadeSize == "number" ? `${t.fadeSize}px` : t.fadeSize);
		return h(i, u(t, "fade")), (e, n) => (s(), r("div", a({
			ref_key: "scrollAreaRef",
			ref: i
		}, e.$attrs, {
			class: [
				"scroll-area",
				t.orientation,
				{
					"stable-scrollbar": t.stableScrollbar,
					"scroll-fade": t.fade
				}
			],
			style: {
				maxHeight: o.value,
				"--scroll-fade-size": d.value
			},
			tabindex: t.keyboardFocusable ? 0 : void 0
		}), [l(e.$slots, "default", {}, void 0, !0)], 16, g));
	}
}), v = /* @__PURE__ */ e({ default: () => y }), y = /*#__PURE__*/ t(_, [["__scopeId", "data-v-602f3114"]]);
//#endregion
export { v as n, y as t };
