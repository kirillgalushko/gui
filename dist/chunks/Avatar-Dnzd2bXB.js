import { o as e } from "./floating-ui.vue-CE68TKCX.js";
import { t } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { t as n } from "./context-DVA_7kbg.js";
import { computed as r, createCommentVNode as i, createElementBlock as a, createElementVNode as o, createTextVNode as s, defineComponent as c, inject as l, mergeProps as u, openBlock as d, ref as f, renderSlot as p, toDisplayString as m, vShow as h, withDirectives as g } from "vue";
import '../assets/Avatar-DlUsZy3o.css';//#region src/components/Avatar/Avatar.vue?vue&type=script&setup=true&lang.ts
var _ = { class: "avatar-content" }, v = ["src"], y = {
	key: 0,
	class: "avatar-corner"
}, b = /*@__PURE__*/ c({
	__name: "Avatar",
	props: {
		shape: {},
		mode: { default: "default" },
		color: {},
		src: {},
		name: {},
		size: {}
	},
	setup(e) {
		let t = e, c = l(n, null), b = f(!1), x = r(() => t.shape ?? c?.shape.value ?? "circle"), S = r(() => t.size ?? c?.size.value ?? "40px"), C = {
			default: {
				backgroundColor: "hsl(var(--primary))",
				color: "hsl(var(--primary-foreground))"
			},
			accent: {
				backgroundColor: "hsl(var(--accent))",
				color: "hsl(0 0% 98%)"
			},
			secondary: {
				backgroundColor: "hsl(var(--secondary))",
				color: "hsl(var(--secondary-foreground))"
			},
			ghost: { backgroundColor: "transparent" },
			outlined: {
				backgroundColor: "transparent",
				color: "hsl(var(--foreground))"
			},
			negative: {
				backgroundColor: "color-mix(in oklab, hsl(var(--negative)) 20%, transparent)",
				color: "hsl(var(--negative))"
			},
			positive: {
				backgroundColor: "color-mix(in oklab, hsl(var(--positive)) 20%, transparent)",
				color: "hsl(var(--positive))"
			},
			danger: {
				backgroundColor: "color-mix(in oklab, hsl(var(--danger)) 20%, transparent)",
				color: "hsl(var(--danger))"
			},
			warning: {
				backgroundColor: "color-mix(in oklab, hsl(var(--warning)) 20%, transparent)",
				color: "hsl(var(--warning))"
			}
		}, w = r(() => {
			let e = t.name?.trim().split(/\s+/).filter(Boolean) ?? [];
			return `${e[0]?.[0] ?? ""}${e[1]?.[0] ?? ""}`.toUpperCase();
		});
		function T() {
			b.value = !0;
		}
		let E = r(() => {
			let e = x.value === "square" ? { borderRadius: `calc(${S.value} / 4)` } : {}, n = t.color === void 0 ? void 0 : `var(--color-${t.color}-500)`, r = C[t.mode];
			return {
				width: S.value,
				height: S.value,
				fontSize: `calc(${S.value} / 2.5)`,
				"--avatar-bg": n === void 0 ? r.backgroundColor : `color-mix(in oklab, ${n} 20%, transparent)`,
				"--avatar-color": n ?? r.color ?? "inherit",
				...e
			};
		});
		return (e, n) => (d(), a("div", u({
			style: E.value,
			class: [
				"avatar",
				x.value,
				t.mode
			]
		}, e.$attrs), [o("div", _, [t.src ? g((d(), a("img", {
			key: 0,
			onLoad: T,
			class: "avatar-image",
			src: t.src
		}, null, 40, v)), [[h, b.value]]) : i("", !0), p(e.$slots, "default", {}, () => [s(m(w.value), 1)], !0)]), e.$slots.corner ? (d(), a("div", y, [p(e.$slots, "corner", {}, void 0, !0)])) : i("", !0)], 16));
	}
}), x = /* @__PURE__ */ e({ default: () => S }), S = /*#__PURE__*/ t(b, [["__scopeId", "data-v-d0583681"]]);
//#endregion
export { x as n, S as t };
