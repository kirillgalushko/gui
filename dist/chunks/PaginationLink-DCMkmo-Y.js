import { o as e } from "./floating-ui.vue-CE68TKCX.js";
import { t } from "./Button-CeAG6Psa.js";
import { t as n } from "./context-sz1msvET.js";
import { computed as r, createBlock as i, createElementVNode as a, defineComponent as o, inject as s, mergeProps as c, openBlock as l, renderSlot as u, withCtx as d } from "vue";
//#region src/components/Pagination/PaginationLink.vue?vue&type=script&setup=true&lang.ts
var f = /*@__PURE__*/ o({
	inheritAttrs: !1,
	__name: "PaginationLink",
	props: {
		Element: { default: "a" },
		asChild: { type: Boolean },
		isActive: { type: Boolean },
		disabled: { type: Boolean },
		size: {}
	},
	setup(e) {
		let o = e, f = s(n, void 0), p = r(() => o.size ?? f?.size.value ?? "medium");
		return (e, n) => o.asChild ? (l(), i(t, c({ key: 0 }, e.$attrs, {
			"as-child": "",
			mode: o.isActive ? "outline" : "ghost",
			size: p.value,
			squared: "",
			disabled: o.disabled,
			"aria-current": o.isActive ? "page" : void 0
		}), {
			default: d(() => [u(e.$slots, "default")]),
			_: 3
		}, 16, [
			"mode",
			"size",
			"disabled",
			"aria-current"
		])) : o.Element === "a" ? (l(), i(t, c({ key: 1 }, e.$attrs, {
			"as-child": "",
			mode: o.isActive ? "outline" : "ghost",
			size: p.value,
			squared: "",
			disabled: o.disabled,
			"aria-current": o.isActive ? "page" : void 0
		}), {
			default: d(() => [a("a", null, [u(e.$slots, "default")])]),
			_: 3
		}, 16, [
			"mode",
			"size",
			"disabled",
			"aria-current"
		])) : (l(), i(t, c({ key: 2 }, e.$attrs, {
			type: "button",
			mode: o.isActive ? "outline" : "ghost",
			size: p.value,
			squared: "",
			disabled: o.disabled,
			"aria-current": o.isActive ? "page" : void 0
		}), {
			default: d(() => [u(e.$slots, "default")]),
			_: 3
		}, 16, [
			"mode",
			"size",
			"disabled",
			"aria-current"
		]));
	}
}), p = /* @__PURE__ */ e({ default: () => m }), m = f;
//#endregion
export { p as n, m as t };
