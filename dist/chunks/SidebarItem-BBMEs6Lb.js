import { o as e } from "./floating-ui.vue-CE68TKCX.js";
import { t } from "./useResize-Dsnbi184.js";
import { t as n } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { t as r } from "./Tooltip-CFeop1UI.js";
import { createBlock as i, createCommentVNode as a, createElementBlock as o, createElementVNode as s, defineComponent as c, inject as l, mergeProps as u, openBlock as d, ref as f, renderSlot as p, unref as m, withCtx as h } from "vue";
import '../assets/SidebarItem-BEafTKeS.css';//#region src/components/Sidebar/SidebarItem.vue?vue&type=script&setup=true&lang.ts
var g = ["aria-current"], _ = {
	key: 0,
	class: "left"
}, v = {
	key: 2,
	class: "right"
}, y = {
	key: 3,
	class: "compact-content"
}, b = {
	key: 0,
	class: "compact-indicator"
}, x = /*@__PURE__*/ c({
	inheritAttrs: !1,
	__name: "SidebarItem",
	props: {
		selected: { type: Boolean },
		tooltipDisabled: { type: Boolean }
	},
	setup(e) {
		let n = e, c = f(null), x = f(null), S = f(!1), C = l("sidebar-is-compact");
		return t(x, () => {
			if (c.value) {
				let { scrollWidth: e, clientWidth: t } = c.value;
				S.value = e > t;
			}
		}), (e, t) => (d(), i(r, {
			stretched: "",
			delay: 0,
			disabled: n.tooltipDisabled || !(S.value || m(C)),
			placement: "right"
		}, {
			popper: h(() => [p(e.$slots, "tooltip", {}, () => [p(e.$slots, "default", {}, void 0, !0)], !0)]),
			default: h(() => [s("button", u(e.$attrs, {
				ref_key: "buttonElement",
				ref: x,
				class: ["SidebarItem", {
					selected: n.selected,
					compact: m(C)
				}],
				"aria-current": n.selected ? "page" : void 0,
				type: "button"
			}), [
				e.$slots.left && !m(C) ? (d(), o("div", _, [p(e.$slots, "left", {}, void 0, !0)])) : a("", !0),
				m(C) ? a("", !0) : (d(), o("div", {
					key: 1,
					ref_key: "centerElement",
					ref: c,
					class: "center"
				}, [p(e.$slots, "default", {}, void 0, !0)], 512)),
				e.$slots.right && !m(C) ? (d(), o("div", v, [p(e.$slots, "right", {}, void 0, !0)])) : a("", !0),
				m(C) ? (d(), o("div", y, [p(e.$slots, "compact", {}, () => [p(e.$slots, "left", {}, void 0, !0)], !0), e.$slots["compact-indicator"] ? (d(), o("span", b, [p(e.$slots, "compact-indicator", {}, void 0, !0)])) : a("", !0)])) : a("", !0)
			], 16, g)]),
			_: 3
		}, 8, ["disabled"]));
	}
}), S = /* @__PURE__ */ e({ default: () => C }), C = /*#__PURE__*/ n(x, [["__scopeId", "data-v-3af3a21b"]]);
//#endregion
export { S as n, C as t };
