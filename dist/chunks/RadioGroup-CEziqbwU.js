import { t as e } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { t } from "./radioGroup-l5T68BiS.js";
import { computed as n, createElementBlock as r, defineComponent as i, inject as a, mergeModels as o, mergeProps as s, openBlock as c, provide as l, renderSlot as u, useId as d, useModel as f } from "vue";
import '../assets/RadioGroup-BbDQYVVQ.css';//#region src/components/RadioGroup/RadioGroup.vue?vue&type=script&setup=true&lang.ts
var p = [
	"aria-orientation",
	"aria-invalid",
	"aria-required",
	"data-disabled",
	"data-invalid"
], m = /*#__PURE__*/ e(/* @__PURE__ */ i({
	inheritAttrs: !1,
	__name: "RadioGroup",
	props: /*@__PURE__*/ o({
		name: {},
		disabled: { type: Boolean },
		invalid: { type: Boolean },
		required: { type: Boolean },
		orientation: { default: "vertical" },
		mode: { default: "default" },
		stretched: {
			type: Boolean,
			default: !1
		}
	}, {
		modelValue: { default: null },
		modelModifiers: {}
	}),
	emits: ["update:modelValue"],
	setup(e) {
		let i = e, o = f(e, "modelValue"), m = a("field-state", void 0), h = d(), g = n(() => i.name ?? `radio-group-${h}`), _ = n(() => !!i.disabled || !!m?.value.disabled), v = n(() => !!i.invalid || !!m?.value.invalid), y = n(() => !!i.required), b = n(() => i.mode);
		return l(t, {
			model: o,
			name: g,
			disabled: _,
			invalid: v,
			required: y,
			mode: b,
			select: (e) => {
				_.value || (o.value = e);
			}
		}), (e, t) => (c(), r("div", s(e.$attrs, {
			class: [
				"radio-group",
				i.orientation,
				i.mode,
				{
					disabled: _.value,
					invalid: v.value,
					stretched: i.stretched
				}
			],
			role: "radiogroup",
			"aria-orientation": i.orientation,
			"aria-invalid": v.value || void 0,
			"aria-required": y.value || void 0,
			"data-disabled": _.value || void 0,
			"data-invalid": v.value || void 0
		}), [u(e.$slots, "default", {}, void 0, !0)], 16, p));
	}
}), [["__scopeId", "data-v-c5e52ea1"]]);
//#endregion
export { m as default };
