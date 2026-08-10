import { o as e } from "./floating-ui.vue-CE68TKCX.js";
import { t } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { computed as n, createBlock as r, defineComponent as i, mergeProps as a, openBlock as o, renderSlot as s, resolveDynamicComponent as c, withCtx as l } from "vue";
import '../assets/Badge--mgO1OkL.css';//#region src/components/Badge/Badge.vue?vue&type=script&setup=true&lang.ts
var u = /*@__PURE__*/ i({
	__name: "Badge",
	props: {
		mode: { default: "default" },
		size: { default: "medium" },
		color: {},
		Element: { default: "div" }
	},
	setup(e) {
		let t = e, i = {
			default: {
				backgroundColor: "hsl(var(--primary))",
				color: "hsl(var(--primary-foreground))"
			},
			accent: {
				backgroundColor: "hsl(var(--accent))",
				color: "hsl(0 0% 98%)"
			},
			secondary: {
				backgroundColor: "hsl(var(--input))",
				color: "hsl(var(--secondary-foreground))",
				borderColor: "hsl(var(--border))"
			},
			ghost: { backgroundColor: "transparent" },
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
		}, u = n(() => {
			if (t.color) {
				let e = `var(--color-${t.color}-500)`;
				return {
					"--badge-background": `color-mix(in oklab, ${e} 20%, transparent)`,
					"--badge-color": e,
					"--badge-border-color": `color-mix(in oklab, ${e} 15%, transparent)`
				};
			}
			let e = i[t.mode];
			return {
				"--badge-background": e.backgroundColor,
				"--badge-color": e.color ?? "inherit",
				"--badge-border-color": e.borderColor ?? (e.color ? `color-mix(in oklab, ${e.color} 15%, transparent)` : "inherit")
			};
		}), d = n(() => !!t.color || ![
			"default",
			"ghost",
			"accent"
		].includes(t.mode));
		return (e, n) => (o(), r(c(t.Element), a(e.$attrs, {
			class: [
				"Badge",
				t.size,
				{ "with-border": d.value }
			],
			style: u.value,
			type: t.Element === "button" ? "button" : void 0
		}), {
			default: l(() => [s(e.$slots, "default", {}, void 0, !0), s(e.$slots, "right", {}, void 0, !0)]),
			_: 3
		}, 16, [
			"class",
			"style",
			"type"
		]));
	}
}), d = /* @__PURE__ */ e({ default: () => f }), f = /*#__PURE__*/ t(u, [["__scopeId", "data-v-1c929355"]]);
//#endregion
export { d as n, f as t };
