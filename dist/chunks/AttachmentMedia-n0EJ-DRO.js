import { o as e } from "./floating-ui.vue-CE68TKCX.js";
import { t } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { t as n } from "./context-B4o2WOB3.js";
import { createElementBlock as r, defineComponent as i, inject as a, normalizeClass as o, openBlock as s, renderSlot as c, unref as l } from "vue";
import '../assets/AttachmentMedia-BxTmhkBl.css';//#region src/components/Attachment/AttachmentMedia.vue?vue&type=script&setup=true&lang.ts
var u = /*@__PURE__*/ i({
	__name: "AttachmentMedia",
	props: { variant: { default: "icon" } },
	setup(e) {
		let t = e, i = a(n, null);
		return (e, n) => (s(), r("div", { class: o([
			"attachment-media",
			t.variant,
			l(i)?.orientation.value
		]) }, [c(e.$slots, "default", {}, void 0, !0)], 2));
	}
}), d = /* @__PURE__ */ e({ default: () => f }), f = /*#__PURE__*/ t(u, [["__scopeId", "data-v-d879dc8b"]]);
//#endregion
export { d as n, f as t };
