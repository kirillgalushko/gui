import { o as e } from "./floating-ui.vue-CE68TKCX.js";
import { t } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { t as n } from "./menuSizing-BczhsFXG.js";
import { n as r } from "./floating-vue-CLsj-sZ0.js";
import { computed as i, createBlock as a, createElementVNode as o, defineComponent as s, mergeProps as c, normalizeStyle as l, openBlock as u, renderSlot as d, unref as f, useAttrs as p, withCtx as m } from "vue";
import '../assets/Dropdown-C6UULztI.css';//#region src/components/Dropdown/dropdownSizing.ts
var h = (e, t) => ({
	width: e === "auto" ? "fit-content" : "100%",
	maxWidth: t
}), g = /*@__PURE__*/ s({
	inheritAttrs: !1,
	__name: "Dropdown",
	props: {
		stretched: {
			type: Boolean,
			default: !1
		},
		contentWidth: { default: "auto" },
		contentMaxWidth: { default: n },
		contentPadding: { default: "default" }
	},
	setup(e) {
		let t = e, n = p(), s = i(() => [
			n.popperClass,
			`dropdown-content-width-${t.contentWidth}`,
			`dropdown-content-padding-${t.contentPadding}`
		]), g = i(() => h(t.contentWidth, t.contentMaxWidth));
		return (e, n) => (u(), a(f(r), c(e.$attrs, {
			arrowOverflow: !1,
			autoBoundaryMaxSize: !0,
			overflowPadding: 8,
			popperClass: s.value,
			class: ["dropdown", { stretched: t.stretched }]
		}), {
			default: m(() => [d(e.$slots, "default", {}, void 0, !0)]),
			popper: m(() => [o("div", {
				class: "dropdown-content",
				style: l(g.value)
			}, [d(e.$slots, "popper", {}, void 0, !0)], 4)]),
			_: 3
		}, 16, ["popperClass", "class"]));
	}
}), _ = /* @__PURE__ */ e({ default: () => v }), v = /*#__PURE__*/ t(g, [["__scopeId", "data-v-8343a94b"]]);
//#endregion
export { _ as n, v as t };
