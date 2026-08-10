import { i as e, r as t, s as n, t as r } from "./phone-VigRybAO.js";
import { s as i } from "./gui-icons.es-5O8QlDZJ.js";
import { t as a } from "./Input-DDpZC86_.js";
import { createBlock as o, createVNode as s, defineComponent as c, mergeModels as l, mergeProps as u, nextTick as d, openBlock as f, renderSlot as p, unref as m, useModel as h, withCtx as g } from "vue";
//#endregion
//#region src/components/PhoneInput/PhoneInput.vue
var _ = /* @__PURE__ */ c({
	inheritAttrs: !1,
	__name: "PhoneInput",
	props: {
		modelValue: { default: "" },
		modelModifiers: {}
	},
	emits: /*@__PURE__*/ l([
		"beforeinput",
		"input",
		"paste"
	], ["update:modelValue"]),
	setup(c, { emit: l }) {
		let _ = h(c, "modelValue"), v = l, y = (e) => e instanceof HTMLInputElement ? e : null, b = async (e, t) => {
			e !== null && (await d(), e.setSelectionRange(t, t));
		}, x = (e) => {
			if (v("beforeinput", e), e.defaultPrevented || e.data === null) return;
			let t = y(e.target), n = t?.selectionStart ?? _.value.length, i = t?.selectionEnd ?? _.value.length;
			r({
				currentValue: _.value,
				insertedValue: e.data,
				selectionStart: n,
				selectionEnd: i
			}) || e.preventDefault();
		}, S = (i) => {
			if (v("paste", i), i.defaultPrevented) return;
			let a = i.clipboardData?.getData("text") ?? "";
			if (e(a)) return;
			i.preventDefault();
			let o = y(i.target), s = o?.selectionStart ?? _.value.length, c = o?.selectionEnd ?? _.value.length, l = n(a);
			if (!r({
				currentValue: _.value,
				insertedValue: l,
				selectionStart: s,
				selectionEnd: c
			})) return;
			let u = t({
				value: `${_.value.slice(0, s)}${l}${_.value.slice(c)}`,
				caret: s + l.length
			});
			_.value = u.value, b(o, u.caret);
		}, C = (e) => {
			let n = y(e.target), r = n?.value ?? _.value, i = n?.selectionStart ?? r.length, a = t({
				value: r,
				caret: i
			});
			_.value = a.value, b(n, a.caret), v("input", e);
		};
		return (e, t) => (f(), o(a, u(e.$attrs, {
			modelValue: _.value,
			"onUpdate:modelValue": t[0] ||= (e) => _.value = e,
			type: "tel",
			inputmode: "tel",
			autocomplete: "tel",
			placeholder: "+7 (999) 123-45-67",
			onBeforeinput: x,
			onPaste: S,
			onInput: C
		}), {
			leftAdornment: g(() => [p(e.$slots, "leftAdornment", {}, () => [s(m(i))])]),
			rightAdornment: g(() => [p(e.$slots, "rightAdornment")]),
			_: 3
		}, 16, ["modelValue"]));
	}
});
//#endregion
export { _ as default };
