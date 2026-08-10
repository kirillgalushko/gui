import { n as e, t } from "./context-CNwJLG7f.js";
import { t as n } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { computed as r, createElementBlock as i, defineComponent as a, inject as o, openBlock as s, provide as c, renderSlot as l, useId as u } from "vue";
import '../assets/AccordionItem-BNkkAw4r.css';//#region src/components/Accordion/AccordionItem.vue?vue&type=script&setup=true&lang.ts
var d = ["data-disabled", "data-state"], f = /*#__PURE__*/ n(/* @__PURE__ */ a({
	__name: "AccordionItem",
	props: {
		disabled: {
			type: Boolean,
			default: !1
		},
		value: {}
	},
	setup(n) {
		let a = n, f = o(t);
		if (f === void 0) throw Error("AccordionItem must be used inside Accordion");
		let p = u(), m = r(() => f.isOpen(a.value)), h = r(() => f.disabled.value || a.disabled);
		return c(e, {
			contentId: `${p}-content`,
			disabled: h,
			isOpen: m,
			toggle: () => {
				h.value || f.toggle(a.value);
			},
			triggerId: `${p}-trigger`
		}), (e, t) => (s(), i("div", {
			class: "accordion-item",
			"data-disabled": h.value || void 0,
			"data-state": m.value ? "open" : "closed"
		}, [l(e.$slots, "default", {}, void 0, !0)], 8, d));
	}
}), [["__scopeId", "data-v-2d683002"]]);
//#endregion
export { f as default };
