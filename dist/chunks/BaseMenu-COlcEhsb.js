import { t as e } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { n as t, t as n } from "./menuSizing-BczhsFXG.js";
import { computed as r, createElementBlock as i, defineComponent as a, mergeProps as o, openBlock as s, ref as c, renderSlot as l } from "vue";
import '../assets/BaseMenu-D98QWsdW.css';//#endregion
//#region src/components/BaseMenu/BaseMenu.vue
var u = /*#__PURE__*/ e(/* @__PURE__ */ a({
	__name: "BaseMenu",
	props: {
		width: { default: "auto" },
		maxWidth: { default: n }
	},
	setup(e, { expose: n }) {
		let a = e, u = c(), d = r(() => ({
			width: t(a.width),
			maxWidth: a.maxWidth
		}));
		return n({ menuRef: u }), (e, t) => (s(), i("div", o(e.$attrs, {
			ref_key: "menuRef",
			ref: u,
			class: "base-menu",
			role: "menu",
			style: d.value
		}), [l(e.$slots, "default", {}, void 0, !0)], 16));
	}
}), [["__scopeId", "data-v-3c75c676"]]);
//#endregion
export { u as t };
