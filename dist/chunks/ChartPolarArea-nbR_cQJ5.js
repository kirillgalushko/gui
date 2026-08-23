import { o as e, t } from "./useChart-BUu153me.js";
import { createElementBlock as n, createVNode as r, defineComponent as i, normalizeStyle as a, openBlock as o, unref as s } from "vue";
//#endregion
//#region src/components/Chart/ChartPolarArea.vue
var c = /* @__PURE__ */ i({
	__name: "ChartPolarArea",
	props: {
		data: {},
		options: {},
		plugins: {},
		datasetIdKey: { default: "label" },
		updateMode: {},
		height: { default: 280 },
		ariaLabel: {},
		ariaDescribedby: {}
	},
	setup(i) {
		let c = i, { chartData: l, chartOptions: u, chartPlugins: d, containerStyle: f } = t("polarArea", c);
		return (t, i) => (o(), n("div", {
			class: "chart-container",
			style: a(s(f))
		}, [r(s(e), {
			data: s(l),
			options: s(u),
			plugins: s(d),
			"dataset-id-key": c.datasetIdKey,
			"update-mode": c.updateMode,
			"aria-label": c.ariaLabel,
			"aria-describedby": c.ariaDescribedby
		}, null, 8, [
			"data",
			"options",
			"plugins",
			"dataset-id-key",
			"update-mode",
			"aria-label",
			"aria-describedby"
		])], 4));
	}
});
//#endregion
export { c as default };
