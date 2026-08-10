import { o as e } from "./floating-ui.vue-CE68TKCX.js";
import { t } from "./Button-CeAG6Psa.js";
import { t as n } from "./context-B4o2WOB3.js";
import { computed as r, createBlock as i, defineComponent as a, inject as o, mergeProps as s, openBlock as c, renderSlot as l, unref as u, useAttrs as d, withCtx as f } from "vue";
//#region src/components/Attachment/AttachmentAction.vue?vue&type=script&setup=true&lang.ts
var p = /*@__PURE__*/ a({
	inheritAttrs: !1,
	__name: "AttachmentAction",
	props: {
		disabled: {
			type: Boolean,
			default: !1
		},
		mode: { default: "ghost" },
		size: { default: void 0 }
	},
	setup(e) {
		let a = e, p = d(), m = o(n, null), h = r(() => a.size ?? (m?.size.value === "large" || m?.size.value === "medium" ? "small" : "extra-small"));
		return (e, n) => (c(), i(t, s(u(p), {
			type: "button",
			squared: "",
			mode: a.mode,
			size: h.value,
			disabled: a.disabled
		}), {
			default: f(() => [l(e.$slots, "default")]),
			_: 3
		}, 16, [
			"mode",
			"size",
			"disabled"
		]));
	}
}), m = /* @__PURE__ */ e({ default: () => h }), h = p;
//#endregion
export { m as n, h as t };
