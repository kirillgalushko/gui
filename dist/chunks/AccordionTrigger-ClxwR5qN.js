import { n as e } from "./context-CNwJLG7f.js";
import { t } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { D as n } from "./gui-icons.es-5O8QlDZJ.js";
import { createElementBlock as r, createElementVNode as i, createVNode as a, defineComponent as o, inject as s, openBlock as c, renderSlot as l, unref as u } from "vue";
import '../assets/AccordionTrigger-D3l6eYvb.css';//#region src/components/Accordion/AccordionTrigger.vue?vue&type=script&setup=true&lang.ts
var d = [
	"id",
	"aria-controls",
	"aria-expanded",
	"disabled",
	"data-state"
], f = { class: "accordion-trigger-content" }, p = /*#__PURE__*/ t(/* @__PURE__ */ o({
	__name: "AccordionTrigger",
	setup(t) {
		let o = s(e);
		if (o === void 0) throw Error("AccordionTrigger must be used inside AccordionItem");
		return (e, t) => (c(), r("button", {
			id: u(o).triggerId,
			class: "accordion-trigger",
			type: "button",
			"aria-controls": u(o).contentId,
			"aria-expanded": u(o).isOpen.value,
			disabled: u(o).disabled.value,
			"data-state": u(o).isOpen.value ? "open" : "closed",
			onClick: t[0] ||= (...e) => u(o).toggle && u(o).toggle(...e)
		}, [i("span", f, [l(e.$slots, "default", {}, void 0, !0)]), a(u(n), {
			class: "accordion-chevron",
			"aria-hidden": "true"
		})], 8, d));
	}
}), [["__scopeId", "data-v-4a2b0c46"]]);
//#endregion
export { p as default };
