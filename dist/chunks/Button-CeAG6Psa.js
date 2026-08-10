import { o as e } from "./floating-ui.vue-CE68TKCX.js";
import { t } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { t as n } from "./Loader-DtyzjXEU.js";
import { t as r } from "./AsChild-CshKkIhp.js";
import { computed as i, createBlock as a, createCommentVNode as o, createElementBlock as s, createVNode as c, defineComponent as l, mergeProps as u, openBlock as d, renderSlot as f, unref as p, withCtx as m } from "vue";
import '../assets/Button-Dxve4dVl.css';//#region src/components/Button/Button.vue?vue&type=script&setup=true&lang.ts
var h = ["disabled", "aria-busy"], g = {
	key: 0,
	class: "button-loader"
}, _ = /*@__PURE__*/ l({
	inheritAttrs: !1,
	__name: "Button",
	props: {
		asChild: { type: Boolean },
		mode: { default: "default" },
		size: { default: "medium" },
		stretched: { type: Boolean },
		squared: { type: Boolean },
		rounded: { type: Boolean },
		isLoading: { type: Boolean },
		disabled: { type: Boolean }
	},
	setup(e) {
		let t = e, l = i(() => [
			"button",
			t.mode,
			t.size,
			{
				stretched: t.stretched,
				squared: t.squared,
				rounded: t.rounded,
				"with-loader": t.isLoading,
				"as-child": t.asChild,
				disabled: t.disabled
			}
		]);
		return (i, _) => t.asChild ? (d(), a(p(r), u({ key: 0 }, i.$attrs, {
			class: l.value,
			disabled: t.disabled || void 0,
			"aria-disabled": t.disabled || void 0,
			"aria-busy": t.isLoading || void 0
		}), {
			default: m(() => [f(i.$slots, "default", {}, void 0, !0)]),
			_: 3
		}, 16, [
			"class",
			"disabled",
			"aria-disabled",
			"aria-busy"
		])) : (d(), s("button", u({ key: 1 }, i.$attrs, {
			disabled: t.disabled,
			"aria-busy": t.isLoading || void 0,
			class: l.value
		}), [f(i.$slots, "default", {}, void 0, !0), e.isLoading ? (d(), s("div", g, [c(n, { size: "var(--button-loader-size)" })])) : o("", !0)], 16, h));
	}
}), v = /* @__PURE__ */ e({ default: () => y }), y = /*#__PURE__*/ t(_, [["__scopeId", "data-v-4c016703"]]);
//#endregion
export { v as n, y as t };
