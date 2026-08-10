import { t as e } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { computed as t, createElementBlock as n, createElementVNode as r, defineComponent as i, normalizeClass as a, normalizeStyle as o, onBeforeUnmount as s, openBlock as c, reactive as l, ref as u, renderSlot as d, toRef as f, toValue as p, unref as m, watch as h } from "vue";
import '../assets/Hover3d-Duz_qYb2.css';//#region src/components/Hover3d/useHover3d.ts
var g = 320, _ = .35, v = 1.5, y = (e, t, n) => Math.min(Math.max(e, t), n), b = (e, t, n, r = {}) => {
	let i = Math.hypot(n.width, n.height), a = y(g / Math.max(i, 1), _, v), o = (r.maxTilt ?? 7) * a, s = 1 + ((r.scale ?? 1.025) - 1) * a, c = y((e - n.left) / Math.max(n.width, 1), 0, 1);
	return {
		rotateX: (y((t - n.top) / Math.max(n.height, 1), 0, 1) - .5) * o * 2,
		rotateY: (.5 - c) * o * 2,
		scale: s
	};
}, x = (e = {}) => {
	let n = u(!1), r = l({
		rotateX: 0,
		rotateY: 0,
		scale: 1
	}), i, a = () => {
		i !== void 0 && (window.cancelAnimationFrame(i), i = void 0);
	}, o = () => {
		a(), n.value = !1, r.rotateX = 0, r.rotateY = 0, r.scale = 1;
	}, c = (t) => {
		if (p(e.disabled) === !0 || t.pointerType !== "mouse" || !(t.currentTarget instanceof HTMLElement)) return;
		let o = b(t.clientX, t.clientY, t.currentTarget.getBoundingClientRect(), {
			maxTilt: p(e.maxTilt) ?? 7,
			scale: p(e.scale) ?? 1.025
		});
		n.value = !0, a(), i = window.requestAnimationFrame(() => {
			Object.assign(r, o), i = void 0;
		});
	}, d = t(() => ({
		"--hover-3d-rotate-x": `${r.rotateX}deg`,
		"--hover-3d-rotate-y": `${r.rotateY}deg`,
		"--hover-3d-scale": String(r.scale)
	}));
	return h(() => p(e.disabled), (e) => e && o()), s(a), {
		isActive: n,
		onPointerMove: c,
		reset: o,
		style: d
	};
}, S = { class: "Hover3d__surface" }, C = /*#__PURE__*/ e(/* @__PURE__ */ i({
	__name: "Hover3d",
	props: {
		disabled: {
			type: Boolean,
			default: !1
		},
		maxTilt: { default: 9 },
		scale: { default: 1.035 },
		stretched: {
			type: Boolean,
			default: !1
		}
	},
	setup(e) {
		let t = e, { isActive: i, onPointerMove: s, reset: l, style: u } = x({
			disabled: f(t, "disabled"),
			maxTilt: f(t, "maxTilt"),
			scale: f(t, "scale")
		});
		return (e, f) => (c(), n("div", {
			class: a(["Hover3d", {
				active: m(i) && !t.disabled,
				stretched: t.stretched
			}]),
			style: o(m(u)),
			onPointermove: f[0] ||= (...e) => m(s) && m(s)(...e),
			onPointerleave: f[1] ||= (...e) => m(l) && m(l)(...e),
			onPointercancel: f[2] ||= (...e) => m(l) && m(l)(...e)
		}, [r("div", S, [d(e.$slots, "default", {}, void 0, !0)])], 38));
	}
}), [["__scopeId", "data-v-d611d5a1"]]);
//#endregion
export { C as default };
