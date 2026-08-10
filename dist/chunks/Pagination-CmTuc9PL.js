import { t as e } from "./context-sz1msvET.js";
import { computed as t, createElementBlock as n, defineComponent as r, mergeProps as i, openBlock as a, provide as o, renderSlot as s } from "vue";
//#region src/components/Pagination/Pagination.vue?vue&type=script&setup=true&lang.ts
var c = ["aria-label", "data-size"], l = /* @__PURE__ */ r({
	inheritAttrs: !1,
	__name: "Pagination",
	props: {
		label: { default: "Пагинация" },
		size: { default: "medium" }
	},
	setup(r) {
		let l = r;
		return o(e, { size: t(() => l.size) }), (e, t) => (a(), n("nav", i(e.$attrs, {
			"aria-label": l.label,
			"data-size": l.size
		}), [s(e.$slots, "default")], 16, c));
	}
});
//#endregion
export { l as default };
