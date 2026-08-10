import { n as e } from "./context-CNwJLG7f.js";
import { t } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { createElementBlock as n, createElementVNode as r, defineComponent as i, inject as a, openBlock as o, renderSlot as s, unref as c } from "vue";
import '../assets/AccordionContent-JUUOzyl0.css';//#region src/components/Accordion/AccordionContent.vue?vue&type=script&setup=true&lang.ts
var l = [
	"id",
	"aria-hidden",
	"aria-labelledby",
	"data-state"
], u = { class: "accordion-content-clip" }, d = { class: "accordion-content-inner" }, f = /*#__PURE__*/ t(/* @__PURE__ */ i({
	__name: "AccordionContent",
	setup(t) {
		let i = a(e);
		if (i === void 0) throw Error("AccordionContent must be used inside AccordionItem");
		return (e, t) => (o(), n("div", {
			id: c(i).contentId,
			class: "accordion-content",
			role: "region",
			"aria-hidden": !c(i).isOpen.value,
			"aria-labelledby": c(i).triggerId,
			"data-state": c(i).isOpen.value ? "open" : "closed"
		}, [r("div", u, [r("div", d, [s(e.$slots, "default", {}, void 0, !0)])])], 8, l));
	}
}), [["__scopeId", "data-v-904814b2"]]);
//#endregion
export { f as default };
