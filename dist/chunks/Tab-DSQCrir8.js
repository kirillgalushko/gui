import { t as e } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { createElementBlock as t, defineComponent as n, inject as r, normalizeClass as i, onMounted as a, openBlock as o, ref as s, renderSlot as c, unref as l } from "vue";
import '../assets/Tab-Ct3TgsYQ.css';//#region src/components/Tabs/Tab.vue?vue&type=script&setup=true&lang.ts
var u = ["data-name"], d = /*#__PURE__*/ e(/* @__PURE__ */ n({
	__name: "Tab",
	props: { name: {} },
	setup(e) {
		let n = e, d = s(), f = r("tabs"), p = r("stretched"), { registerTab: m, selectTab: h, selectedTab: g } = f || {}, _ = () => {
			d.value && h?.(d.value);
		}, v = (e) => {
			e.key === "Enter" && _();
		};
		return a(() => {
			d.value && m?.(d.value);
		}), (e, r) => (o(), t("div", {
			ref_key: "tabRef",
			ref: d,
			tabindex: "0",
			onKeydown: v,
			onClick: _,
			"data-name": n.name,
			class: i(["tab", {
				stretched: l(p),
				selected: l(g) === d.value
			}])
		}, [c(e.$slots, "default", {}, void 0, !0)], 42, u));
	}
}), [["__scopeId", "data-v-c5130736"]]);
//#endregion
export { d as default };
