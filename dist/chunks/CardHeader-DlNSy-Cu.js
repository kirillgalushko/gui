import { o as e } from "./floating-ui.vue-CE68TKCX.js";
import { t } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { createElementBlock as n, defineComponent as r, normalizeClass as i, openBlock as a, renderSlot as o } from "vue";
import '../assets/CardHeader-BORaON_N.css';//#region src/components/Card/CardHeader.vue?vue&type=script&setup=true&lang.ts
var s = ["data-border"], c = /*@__PURE__*/ r({
	__name: "CardHeader",
	props: { border: {
		type: Boolean,
		default: !1
	} },
	setup(e) {
		let t = e;
		return (e, r) => (a(), n("div", {
			class: i(["card-header", { bordered: t.border }]),
			"data-border": t.border || void 0,
			"data-slot": "card-header"
		}, [o(e.$slots, "default", {}, void 0, !0)], 10, s));
	}
}), l = /* @__PURE__ */ e({ default: () => u }), u = /*#__PURE__*/ t(c, [["__scopeId", "data-v-a9416ff3"]]);
//#endregion
export { l as n, u as t };
