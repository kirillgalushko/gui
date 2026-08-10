import { t as e } from "./useTabs-Blvd6Pci.js";
import { t } from "./useResize-Dsnbi184.js";
import { t as n } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { createElementBlock as r, createElementVNode as i, defineComponent as a, normalizeClass as o, normalizeStyle as s, openBlock as c, provide as l, ref as u, renderSlot as d, watchEffect as f } from "vue";
import '../assets/Tabs-cz_uD5LY.css';//#endregion
//#region src/components/Tabs/Tabs.vue
var p = /*#__PURE__*/ n(/* @__PURE__ */ a({
	__name: "Tabs",
	props: {
		value: {},
		onChange: {},
		size: { default: "large" },
		stretched: { type: Boolean }
	},
	setup(n) {
		let a = u(!0), p = n, m = e(p.value, (e) => {
			a.value = !1, p.onChange(e);
		});
		l("tabs", m), l("stretched", p.stretched);
		let h = u(), g = u({
			width: "0px",
			transform: "translateX(0px)"
		}), _ = () => {
			let e = m.selectedTab.value;
			e && (g.value = {
				width: `${e.offsetWidth}px`,
				transform: `translateX(${e.offsetLeft}px)`
			});
		};
		return f(() => {
			_();
		}), t(h, _), (e, t) => (c(), r("div", {
			ref_key: "tabsElementRef",
			ref: h,
			class: o([
				"tabs",
				p.size,
				{ stretched: p.stretched }
			])
		}, [i("div", {
			class: o(["slider", { animated: !a.value }]),
			style: s(g.value)
		}, null, 6), d(e.$slots, "default", {}, void 0, !0)], 2));
	}
}), [["__scopeId", "data-v-f076214d"]]);
//#endregion
export { p as default };
