import { o as e } from "./floating-ui.vue-CE68TKCX.js";
import { t } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { t as n } from "./Dropdown-88Rw7P0I.js";
import { n as r, t as i } from "./useDropdownSubmenu-DzUcbJ4y.js";
import { createBlock as a, createElementVNode as o, defineComponent as s, inject as c, mergeProps as l, openBlock as u, provide as d, renderSlot as f, unref as p, withCtx as m } from "vue";
import '../assets/DropdownSub-DllS4VXa.css';//#region src/components/Dropdown/DropdownSub.vue?vue&type=script&setup=true&lang.ts
var h = { class: "dropdown-sub-trigger" }, g = /*@__PURE__*/ s({
	inheritAttrs: !1,
	__name: "DropdownSub",
	props: {
		contentWidth: {},
		contentMaxWidth: {},
		contentPadding: {}
	},
	setup(e) {
		let t = e, s = c(i, null), g = r();
		d(i, g);
		let _ = () => {
			s?.show(), g.setHovered("content", !0);
		}, v = () => {
			g.setHovered("content", !1), s?.scheduleHide();
		}, y = () => {
			s?.show(), g.setFocused("content", !0);
		}, b = () => {
			g.setFocused("content", !1), s?.scheduleHide();
		}, x = (e) => {
			e || g.hide();
		};
		return (e, r) => (u(), a(n, l(e.$attrs, {
			shown: p(g).shown.value,
			"content-width": t.contentWidth,
			"content-max-width": t.contentMaxWidth,
			"content-padding": t.contentPadding,
			stretched: "",
			"instant-move": "",
			placement: "right-start",
			triggers: [],
			"popper-triggers": [],
			"no-auto-focus": !0,
			"onUpdate:shown": x
		}), {
			popper: m(() => [o("div", {
				onMouseenter: _,
				onMouseleave: v,
				onFocusin: y,
				onFocusout: b
			}, [f(e.$slots, "popper", {}, void 0, !0)], 32)]),
			default: m(() => [o("div", h, [f(e.$slots, "default", {}, void 0, !0)])]),
			_: 3
		}, 16, [
			"shown",
			"content-width",
			"content-max-width",
			"content-padding"
		]));
	}
}), _ = /* @__PURE__ */ e({ default: () => v }), v = /*#__PURE__*/ t(g, [["__scopeId", "data-v-62a92c73"]]);
//#endregion
export { _ as n, v as t };
