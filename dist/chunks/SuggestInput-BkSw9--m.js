import { t as e } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { t } from "./Dropdown-C01ij_R6.js";
import { t as n } from "./Input-DDpZC86_.js";
import { computed as r, createBlock as i, createElementVNode as a, createVNode as o, defineComponent as s, mergeModels as c, normalizeStyle as l, onBeforeUnmount as u, openBlock as d, ref as f, renderSlot as p, useModel as m, withCtx as h } from "vue";
import '../assets/SuggestInput-bdwQMlbn.css';//#endregion
//#region src/components/SuggestInput/SuggestInput.vue
var g = /*#__PURE__*/ e(/* @__PURE__ */ s({
	__name: "SuggestInput",
	props: /*@__PURE__*/ c({
		id: {},
		placeholder: {},
		size: {},
		disabled: { type: Boolean },
		invalid: { type: Boolean },
		errorMessage: {},
		description: {},
		shown: { type: Boolean }
	}, {
		modelValue: { default: "" },
		modelModifiers: {}
	}),
	emits: /*@__PURE__*/ c([
		"blur",
		"focus",
		"input",
		"keydown",
		"update:shown"
	], ["update:modelValue"]),
	setup(e, { emit: s }) {
		let c = e, g = s, _ = m(e, "modelValue"), v = f(), y, b, x = r({
			get: () => c.shown ?? !1,
			set: (e) => g("update:shown", e)
		}), S = r(() => ({ width: `${v.value?.offsetWidth ?? 0}px` })), C = () => {
			c.disabled || (x.value = !0);
		}, w = () => {
			x.value = !1;
		}, T = () => {
			y !== void 0 && clearTimeout(y), y = setTimeout(C, 0);
		}, E = () => {
			b !== void 0 && clearTimeout(b), b = setTimeout(w, 120);
		}, D = (e) => {
			b !== void 0 && clearTimeout(b), T(), g("focus", e);
		}, O = (e) => {
			E(), g("blur", e);
		};
		return u(() => {
			y !== void 0 && clearTimeout(y), b !== void 0 && clearTimeout(b);
		}), (r, s) => (d(), i(t, {
			shown: x.value,
			"onUpdate:shown": s[3] ||= (e) => x.value = e,
			triggers: [],
			"popper-hide-triggers": [],
			placement: "bottom-start",
			distance: 6,
			stretched: "",
			"auto-hide": !1,
			"no-auto-focus": ""
		}, {
			popper: h(() => [a("div", {
				class: "suggest-input__popper",
				style: l(S.value)
			}, [p(r.$slots, "default", { close: w }, void 0, !0)], 4)]),
			default: h(() => [a("div", {
				ref_key: "triggerRef",
				ref: v,
				class: "suggest-input__trigger"
			}, [o(n, {
				id: e.id,
				modelValue: _.value,
				"onUpdate:modelValue": s[0] ||= (e) => _.value = e,
				placeholder: e.placeholder,
				size: e.size,
				disabled: e.disabled,
				invalid: e.invalid,
				"error-message": e.errorMessage,
				description: e.description,
				autocomplete: "off",
				onFocus: D,
				onBlur: O,
				onInput: s[1] ||= (e) => g("input", e),
				onKeydown: s[2] ||= (e) => g("keydown", e)
			}, null, 8, [
				"id",
				"modelValue",
				"placeholder",
				"size",
				"disabled",
				"invalid",
				"error-message",
				"description"
			])], 512)]),
			_: 3
		}, 8, ["shown"]));
	}
}), [["__scopeId", "data-v-63b8b958"]]);
//#endregion
export { g as default };
