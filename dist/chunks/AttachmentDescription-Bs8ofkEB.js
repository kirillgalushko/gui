import { o as e } from "./floating-ui.vue-CE68TKCX.js";
import { t } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { t as n } from "./Text-BiA0aMEo.js";
import { t as r } from "./context-B4o2WOB3.js";
import { createBlock as i, defineComponent as a, inject as o, normalizeClass as s, openBlock as c, renderSlot as l, unref as u, withCtx as d } from "vue";
import '../assets/AttachmentDescription-BhJ90UNb.css';//#region src/components/Attachment/AttachmentDescription.vue?vue&type=script&setup=true&lang.ts
var f = /*@__PURE__*/ a({
	__name: "AttachmentDescription",
	setup(e) {
		let t = o(r, null);
		return (e, r) => (c(), i(n, {
			class: s([
				"attachment-description",
				u(t)?.orientation.value,
				u(t)?.size.value
			]),
			color: "secondary",
			ellipsis: ""
		}, {
			default: d(() => [l(e.$slots, "default", {}, void 0, !0)]),
			_: 3
		}, 8, ["class"]));
	}
}), p = /* @__PURE__ */ e({ default: () => m }), m = /*#__PURE__*/ t(f, [["__scopeId", "data-v-a810e701"]]);
//#endregion
export { p as n, m as t };
