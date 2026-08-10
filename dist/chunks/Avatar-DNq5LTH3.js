import { o as e } from "./floating-ui.vue-CE68TKCX.js";
import { t } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { t as n } from "./context-DVA_7kbg.js";
import { computed as r, createCommentVNode as i, createElementBlock as a, createTextVNode as o, defineComponent as s, inject as c, mergeProps as l, openBlock as u, ref as d, renderSlot as f, toDisplayString as p, vShow as m, withDirectives as h } from "vue";
import '../assets/Avatar-Exo7nDy8.css';//#region src/components/Avatar/Avatar.vue?vue&type=script&setup=true&lang.ts
var g = ["src"], _ = /*@__PURE__*/ s({
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
		let t = e, s = c(n, null), _ = d(!1), v = r(() => t.shape ?? s?.shape.value ?? "circle"), y = r(() => t.size ?? s?.size.value ?? "40px"), b = {
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
		}, x = r(() => {
			let e = t.name?.trim().split(/\s+/).filter(Boolean) ?? [];
			return `${e[0]?.[0] ?? ""}${e[1]?.[0] ?? ""}`.toUpperCase();
		});
		function S() {
			_.value = !0;
		}
		let C = r(() => {
			let e = v.value === "square" ? { borderRadius: `calc(${y.value} / 4)` } : {}, n = t.color === void 0 ? void 0 : `var(--color-${t.color}-500)`, r = b[t.mode];
			return {
				width: y.value,
				height: y.value,
				fontSize: `calc(${y.value} / 2.5)`,
				"--avatar-bg": n === void 0 ? r.backgroundColor : `color-mix(in oklab, ${n} 20%, transparent)`,
				"--avatar-color": n ?? r.color ?? "inherit",
				...e
			};
		});
		return (e, n) => (u(), a("div", l({
			style: C.value,
			class: [
				"avatar",
				v.value,
				t.mode
			]
		}, e.$attrs), [t.src ? h((u(), a("img", {
			key: 0,
			onLoad: S,
			class: "avatar-image",
			src: t.src
		}, null, 40, g)), [[m, _.value]]) : i("", !0), f(e.$slots, "default", {}, () => [o(p(x.value), 1)], !0)], 16));
	}
}), v = /* @__PURE__ */ e({ default: () => y }), y = /*#__PURE__*/ t(_, [["__scopeId", "data-v-48f475c1"]]);
//#endregion
export { v as n, y as t };
