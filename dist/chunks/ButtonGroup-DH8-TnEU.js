import { o as e } from "./floating-ui.vue-CE68TKCX.js";
import { t } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { t as n } from "./context-CW9BV7Nt.js";
import { createElementBlock as r, defineComponent as i, mergeProps as a, openBlock as o, provide as s, renderSlot as c } from "vue";
import '../assets/ButtonGroup-Bj7d4Cm_.css';//#region src/components/ButtonGroup/ButtonGroup.vue?vue&type=script&setup=true&lang.ts
var l = /*@__PURE__*/ i({
	__name: "ButtonGroup",
	props: { orientation: { default: "horizontal" } },
	setup(e) {
		let t = e;
		return s(n, t), (e, n) => (o(), r("div", a(e.$attrs, {
			class: ["button-group", t.orientation],
			role: "group"
		}), [c(e.$slots, "default", {}, void 0, !0)], 16));
	}
}), u = /* @__PURE__ */ e({ default: () => d }), d = /*#__PURE__*/ t(l, [["__scopeId", "data-v-19c65847"]]);
//#endregion
export { u as n, d as t };
