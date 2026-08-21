import { o as e } from "./floating-ui.vue-CE68TKCX.js";
import { n as t } from "./gui-icons.es-B9g1VPOq.js";
import { t as n } from "./Button-CeAG6Psa.js";
import { t as r } from "./context-CKHbCX99.js";
import { computed as i, createBlock as a, createTextVNode as o, createVNode as s, defineComponent as c, inject as l, openBlock as u, renderSlot as d, toDisplayString as f, unref as p, withCtx as m, withModifiers as h } from "vue";
//#region src/components/FileUpload/FileUploadTrigger.vue?vue&type=script&setup=true&lang.ts
var g = /*@__PURE__*/ c({
	__name: "FileUploadTrigger",
	props: {
		label: { default: "Выбрать файлы" },
		mode: { default: "default" },
		size: { default: void 0 },
		stretched: {
			type: Boolean,
			default: !1
		}
	},
	setup(e) {
		let c = e, g = l(r);
		if (g === void 0) throw Error("FileUploadTrigger must be used inside FileUpload");
		let _ = i(() => c.size ?? g.size.value);
		return (e, r) => (u(), a(n, {
			type: "button",
			mode: c.mode,
			size: _.value,
			stretched: c.stretched,
			disabled: p(g).disabled.value,
			onClick: h(p(g).open, ["stop"])
		}, {
			default: m(() => [s(p(t)), d(e.$slots, "default", {}, () => [o(f(c.label), 1)])]),
			_: 3
		}, 8, [
			"mode",
			"size",
			"stretched",
			"disabled",
			"onClick"
		]));
	}
}), _ = /* @__PURE__ */ e({ default: () => v }), v = g;
//#endregion
export { _ as n, v as t };
