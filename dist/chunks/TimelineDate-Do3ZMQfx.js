import { t as e } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { createBlock as t, defineComponent as n, openBlock as r, renderSlot as i, resolveDynamicComponent as a, withCtx as o } from "vue";
import '../assets/TimelineDate-CHxOmoaP.css';//#endregion
//#region src/components/Timeline/TimelineDate.vue
var s = /*#__PURE__*/ e(/* @__PURE__ */ n({
	__name: "TimelineDate",
	props: {
		datetime: {},
		Element: { default: "time" }
	},
	setup(e) {
		let n = e;
		return (e, s) => (r(), t(a(n.Element), {
			class: "timeline-date",
			datetime: n.Element === "time" ? n.datetime : void 0
		}, {
			default: o(() => [i(e.$slots, "default", {}, void 0, !0)]),
			_: 3
		}, 8, ["datetime"]));
	}
}), [["__scopeId", "data-v-9dca09fd"]]);
//#endregion
export { s as default };
