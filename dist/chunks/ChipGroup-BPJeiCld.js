import { t as e } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { t } from "./useChipGroup-BJJcSC3A.js";
import { Fragment as n, computed as r, createCommentVNode as i, createElementBlock as a, defineComponent as o, mergeModels as s, normalizeClass as c, openBlock as l, provide as u, renderList as d, renderSlot as f, useModel as p } from "vue";
import '../assets/ChipGroup-BhTBTFXT.css';//#region src/components/Chip/ChipGroup.vue?vue&type=script&setup=true&lang.ts
var m = ["role"], h = ["name", "value"], g = /*#__PURE__*/ e(/* @__PURE__ */ o({
	__name: "ChipGroup",
	props: /*@__PURE__*/ s({
		mode: { default: "single" },
		size: { default: "medium" },
		disabled: { type: Boolean },
		name: {},
		stretched: { type: Boolean }
	}, {
		modelValue: { default: null },
		modelModifiers: {}
	}),
	emits: ["update:modelValue"],
	setup(e) {
		let o = e, s = p(e, "modelValue"), g = r(() => o.mode === "multiple" ? Array.isArray(s.value) ? s.value : [] : s.value === null || Array.isArray(s.value) ? [] : [s.value]), _ = (e) => g.value.includes(e);
		return u(t, {
			mode: o.mode,
			size: o.size,
			disabled: o.disabled,
			isSelected: _,
			select: (e) => {
				if (!o.disabled) {
					if (o.mode === "multiple") {
						let t = _(e) ? g.value.filter((t) => t !== e) : [...g.value, e];
						s.value = t;
						return;
					}
					s.value = _(e) ? null : e;
				}
			}
		}), (e, t) => (l(), a("div", {
			class: c(["chip-group", { stretched: o.stretched }]),
			role: o.mode === "single" ? "radiogroup" : "group"
		}, [f(e.$slots, "default", {}, void 0, !0), o.name ? (l(!0), a(n, { key: 0 }, d(g.value, (e) => (l(), a("input", {
			key: e,
			type: "hidden",
			name: o.name,
			value: e
		}, null, 8, h))), 128)) : i("", !0)], 10, m));
	}
}), [["__scopeId", "data-v-663d7235"]]);
//#endregion
export { g as default };
