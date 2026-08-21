import { o as e } from "./floating-ui.vue-CE68TKCX.js";
import { p as t } from "./gui-icons.es-B9g1VPOq.js";
import { t as n } from "./Button-CeAG6Psa.js";
import { createBlock as r, createCommentVNode as i, createTextVNode as a, createVNode as o, defineComponent as s, openBlock as c, renderSlot as l, toDisplayString as u, unref as d, withCtx as f } from "vue";
//#region src/components/Filters/FilterClear.vue?vue&type=script&setup=true&lang.ts
var p = /*@__PURE__*/ s({
	__name: "FilterClear",
	props: {
		label: { default: "Сбросить" },
		iconOnly: {
			type: Boolean,
			default: !1
		},
		disabled: { type: Boolean },
		size: { default: "medium" },
		mode: { default: "outline" }
	},
	emits: ["clear"],
	setup(e, { emit: s }) {
		let p = e, m = s;
		return (e, s) => (c(), r(n, {
			squared: p.iconOnly,
			size: p.size,
			mode: p.mode,
			disabled: p.disabled,
			"aria-label": p.iconOnly ? p.label : void 0,
			onClick: s[0] ||= (e) => m("clear")
		}, {
			default: f(() => [l(e.$slots, "icon", {}, () => [o(d(t))]), p.iconOnly ? i("", !0) : l(e.$slots, "default", {}, () => [a(u(p.label), 1)], void 0, 0)]),
			_: 3
		}, 8, [
			"squared",
			"size",
			"mode",
			"disabled",
			"aria-label"
		]));
	}
}), m = /* @__PURE__ */ e({ default: () => h }), h = p;
//#endregion
export { m as n, h as t };
