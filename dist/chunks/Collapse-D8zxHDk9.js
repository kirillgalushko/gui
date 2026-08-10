import { o as e } from "./floating-ui.vue-CE68TKCX.js";
import { t } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { computed as n, createElementBlock as r, createElementVNode as i, defineComponent as a, normalizeStyle as o, openBlock as s, renderSlot as c } from "vue";
import '../assets/Collapse-F5oXD6Jh.css';//#region src/components/Collapse/Collapse.vue?vue&type=script&setup=true&lang.ts
var l = [
	"data-state",
	"aria-hidden",
	"aria-labelledby",
	"inert"
], u = { class: "collapse-clip" }, d = { class: "collapse-content" }, f = /*@__PURE__*/ a({
	__name: "Collapse",
	props: {
		duration: { default: 240 },
		labelledBy: { default: void 0 },
		opened: { type: Boolean }
	},
	setup(e) {
		let t = e, a = n(() => ({ "--collapse-duration": `${Math.max(0, t.duration)}ms` }));
		return (e, n) => (s(), r("div", {
			class: "collapse",
			"data-state": t.opened ? "open" : "closed",
			"aria-hidden": !t.opened,
			"aria-labelledby": t.labelledBy,
			inert: !t.opened || void 0,
			style: o(a.value)
		}, [i("div", u, [i("div", d, [c(e.$slots, "default", {}, void 0, !0)])])], 12, l));
	}
}), p = /* @__PURE__ */ e({ default: () => m }), m = /*#__PURE__*/ t(f, [["__scopeId", "data-v-91598fa6"]]);
//#endregion
export { p as n, m as t };
