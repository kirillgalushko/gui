import { t as e } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { computed as t, createElementBlock as n, defineComponent as r, normalizeClass as i, openBlock as a, provide as o, renderSlot as s } from "vue";
import '../assets/Field-BHhirsF6.css';//#region src/components/Field/Field.vue?vue&type=script&setup=true&lang.ts
var c = ["data-invalid", "data-disabled"], l = /*#__PURE__*/ e(/* @__PURE__ */ r({
	__name: "Field",
	props: {
		invalid: { type: Boolean },
		disabled: { type: Boolean },
		orientation: { default: "vertical" },
		stretched: {
			type: Boolean,
			default: !1
		}
	},
	setup(e) {
		let r = e, l = t(() => ({
			invalid: !!r.invalid,
			disabled: !!r.disabled
		}));
		return o("field-state", l), (e, t) => (a(), n("div", {
			class: i([
				"field",
				r.orientation,
				{
					invalid: r.invalid,
					disabled: r.disabled,
					stretched: r.stretched
				}
			]),
			"data-invalid": r.invalid || void 0,
			"data-disabled": r.disabled || void 0
		}, [s(e.$slots, "default", {}, void 0, !0)], 10, c));
	}
}), [["__scopeId", "data-v-562034c3"]]);
//#endregion
export { l as default };
