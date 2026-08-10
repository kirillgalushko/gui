import { t as e } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { Fragment as t, createElementBlock as n, createElementVNode as r, defineComponent as i, normalizeClass as a, openBlock as o, renderList as s, renderSlot as c } from "vue";
import '../assets/AuroraBackground-0jg8Pgqm.css';//#region src/components/AuroraBackground/AuroraBackground.vue?vue&type=script&setup=true&lang.ts
var l = {
	class: "AuroraBackground__canvas",
	"aria-hidden": "true"
}, u = { class: "AuroraBackground__content" }, d = /*#__PURE__*/ e(/* @__PURE__ */ i({
	__name: "AuroraBackground",
	props: {
		animated: {
			type: Boolean,
			default: !0
		},
		intensity: { default: "medium" },
		palette: { default: "brand" }
	},
	setup(e) {
		let i = e;
		return (e, d) => (o(), n("div", { class: a([
			"AuroraBackground",
			`AuroraBackground--${i.palette}`,
			`AuroraBackground--${i.intensity}`,
			{ "AuroraBackground--animated": i.animated }
		]) }, [r("div", l, [(o(), n(t, null, s(9, (e) => r("span", {
			key: e,
			class: a(["AuroraBackground__orb", `AuroraBackground__orb--${e}`])
		}, null, 2)), 64))]), r("div", u, [c(e.$slots, "default", {}, void 0, !0)])], 2));
	}
}), [["__scopeId", "data-v-fa9258ab"]]);
//#endregion
export { d as default };
