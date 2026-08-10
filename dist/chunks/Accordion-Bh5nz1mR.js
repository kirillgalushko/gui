import { t as e } from "./context-CNwJLG7f.js";
import { t } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { computed as n, createElementBlock as r, defineComponent as i, openBlock as a, provide as o, ref as s, renderSlot as c } from "vue";
import '../assets/Accordion-GdgleaM2.css';//#region src/components/Accordion/Accordion.vue?vue&type=script&setup=true&lang.ts
var l = { class: "accordion" }, u = /*#__PURE__*/ t(/* @__PURE__ */ i({
	__name: "Accordion",
	props: {
		defaultValue: { default: () => [] },
		disabled: {
			type: Boolean,
			default: !1
		},
		modelValue: { default: void 0 },
		multiple: {
			type: Boolean,
			default: !1
		}
	},
	emits: ["change", "update:modelValue"],
	setup(t, { emit: i }) {
		let u = t, d = i, f = s([...u.defaultValue]), p = n(() => u.modelValue ?? f.value), m = (e) => {
			u.modelValue === void 0 && (f.value = e), d("update:modelValue", e), d("change", e);
		};
		return o(e, {
			disabled: n(() => u.disabled),
			isOpen: (e) => p.value.includes(e),
			toggle: (e) => {
				if (u.disabled) return;
				let t = p.value.includes(e), n = u.multiple ? t ? p.value.filter((t) => t !== e) : [...p.value, e] : t ? [] : [e];
				m(n);
			}
		}), (e, t) => (a(), r("div", l, [c(e.$slots, "default", {}, void 0, !0)]));
	}
}), [["__scopeId", "data-v-287a1f04"]]);
//#endregion
export { u as default };
