import { t as e } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { t } from "./context-B_FpNEFp.js";
import { createElementBlock as n, defineComponent as r, inject as i, openBlock as a, renderSlot as o, unref as s } from "vue";
import '../assets/NavigationMenuList-BthLiAY3.css';//#region src/components/NavigationMenu/NavigationMenuList.vue?vue&type=script&setup=true&lang.ts
var c = ["data-mobile", "data-orientation"], l = /*#__PURE__*/ e(/* @__PURE__ */ r({
	__name: "NavigationMenuList",
	setup(e) {
		let r = i(t);
		if (!r) throw Error("NavigationMenuList must be used inside NavigationMenu");
		let l = (e) => {
			let t = r.orientation.value === "horizontal", n = t ? "ArrowLeft" : "ArrowUp", i = t ? "ArrowRight" : "ArrowDown";
			if (![
				n,
				i,
				"Home",
				"End"
			].includes(e.key)) return;
			let a = e.currentTarget;
			if (!(a instanceof HTMLElement)) return;
			let o = Array.from(a.querySelectorAll("[data-navigation-menu-focusable]:not([aria-disabled='true']):not(:disabled)")), s = o.indexOf(document.activeElement);
			s < 0 || o.length === 0 || (e.preventDefault(), o[e.key === "Home" ? 0 : e.key === "End" ? o.length - 1 : e.key === i ? (s + 1) % o.length : (s - 1 + o.length) % o.length]?.focus());
		};
		return (e, t) => (a(), n("ul", {
			class: "navigation-menu-list",
			"data-mobile": s(r).isMobile.value || void 0,
			"data-orientation": s(r).orientation.value,
			onKeydown: l
		}, [o(e.$slots, "default", {}, void 0, !0)], 40, c));
	}
}), [["__scopeId", "data-v-381ae84b"]]);
//#endregion
export { l as default };
