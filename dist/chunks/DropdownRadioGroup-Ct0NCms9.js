import { o as e } from "./floating-ui.vue-CE68TKCX.js";
import { t } from "./menuSelection-C5Uu2l4Y.js";
import { t as n } from "./baseMenuRadioGroup-6k4ppaFj.js";
import { computed as r, createElementBlock as i, defineComponent as a, mergeModels as o, openBlock as s, provide as c, renderSlot as l, useModel as u } from "vue";
//#region src/components/BaseMenu/BaseMenuRadioGroup.vue?vue&type=script&setup=true&lang.ts
var d = { role: "group" }, f = /* @__PURE__ */ a({
	__name: "BaseMenuRadioGroup",
	props: /*@__PURE__*/ o({ disabled: { type: Boolean } }, {
		modelValue: { default: null },
		modelModifiers: {}
	}),
	emits: ["update:modelValue"],
	setup(e) {
		let a = e, o = u(e, "modelValue"), f = r(() => !!a.disabled);
		return c(n, {
			model: o,
			disabled: f,
			select: (e) => {
				o.value = t(o.value, e, f.value);
			}
		}), (e, t) => (s(), i("div", d, [l(e.$slots, "default")]));
	}
}), p = /* @__PURE__ */ e({ default: () => m }), m = f;
//#endregion
export { p as n, m as t };
