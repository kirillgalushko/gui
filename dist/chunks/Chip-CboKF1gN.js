import { t as e } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { t } from "./useChipGroup-BJJcSC3A.js";
import { computed as n, createElementBlock as r, createElementVNode as i, defineComponent as a, inject as o, normalizeClass as s, openBlock as c, renderSlot as l } from "vue";
import '../assets/Chip-Q21zwy6G.css';//#region src/components/Chip/Chip.vue?vue&type=script&setup=true&lang.ts
var u = [
	"disabled",
	"role",
	"aria-checked",
	"aria-pressed"
], d = { class: "chip-label" }, f = /*#__PURE__*/ e(/* @__PURE__ */ a({
	__name: "Chip",
	props: {
		value: {},
		size: { default: "medium" },
		selected: { type: Boolean },
		disabled: { type: Boolean }
	},
	emits: ["select"],
	setup(e, { emit: a }) {
		let f = e, p = a, m = o(t, null), h = n(() => f.disabled || m?.disabled || !1), g = n(() => m?.size ?? f.size), _ = n(() => !!m && f.value !== void 0), v = n(() => _.value ? m?.isSelected(f.value) ?? !1 : !!f.selected), y = n(() => {
			if (_.value) return m?.mode === "single" ? "radio" : void 0;
		}), b = () => {
			h.value || (_.value && m?.select(f.value), p("select", f.value));
		};
		return (e, t) => (c(), r("button", {
			type: "button",
			class: s([
				"chip",
				g.value,
				{
					selected: v.value,
					disabled: h.value
				}
			]),
			disabled: h.value,
			role: y.value,
			"aria-checked": y.value === "radio" ? v.value : void 0,
			"aria-pressed": y.value ? void 0 : v.value,
			onClick: b
		}, [i("span", d, [l(e.$slots, "default", {}, void 0, !0)])], 10, u));
	}
}), [["__scopeId", "data-v-e21db3fe"]]);
//#endregion
export { f as default };
