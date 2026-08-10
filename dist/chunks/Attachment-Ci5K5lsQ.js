import { o as e } from "./floating-ui.vue-CE68TKCX.js";
import { t } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { t as n } from "./context-B4o2WOB3.js";
import { computed as r, createElementBlock as i, defineComponent as a, normalizeClass as o, openBlock as s, provide as c, renderSlot as l } from "vue";
import '../assets/Attachment-DLuWcxYo.css';//#region src/components/Attachment/Attachment.vue?vue&type=script&setup=true&lang.ts
var u = [
	"data-orientation",
	"data-size",
	"data-state",
	"aria-busy"
], d = /*@__PURE__*/ a({
	__name: "Attachment",
	props: {
		orientation: { default: "horizontal" },
		size: { default: "medium" },
		state: { default: "done" },
		stretched: {
			type: Boolean,
			default: !1
		}
	},
	setup(e) {
		let t = e;
		return c(n, {
			orientation: r(() => t.orientation),
			size: r(() => t.size),
			state: r(() => t.state)
		}), (e, n) => (s(), i("div", {
			class: o([
				"attachment",
				t.size,
				t.orientation,
				{ stretched: t.stretched }
			]),
			"data-orientation": t.orientation,
			"data-size": t.size,
			"data-state": t.state,
			"aria-busy": t.state === "uploading" || t.state === "processing"
		}, [l(e.$slots, "default", {}, void 0, !0)], 10, u));
	}
}), f = /* @__PURE__ */ e({ default: () => p }), p = /*#__PURE__*/ t(d, [["__scopeId", "data-v-a7a7dd78"]]);
//#endregion
export { f as n, p as t };
