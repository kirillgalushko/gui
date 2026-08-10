import { t as e } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { t } from "./radioGroup-l5T68BiS.js";
import { computed as n, createCommentVNode as r, createElementBlock as i, createElementVNode as a, defineComponent as o, inject as s, mergeProps as c, normalizeClass as l, openBlock as u, renderSlot as d, unref as f, useAttrs as p, useId as m } from "vue";
import '../assets/RadioGroupItem-83vCMOzK.css';//#region src/components/RadioGroup/RadioGroupItem.vue?vue&type=script&setup=true&lang.ts
var h = [
	"for",
	"data-state",
	"data-disabled",
	"data-invalid"
], g = [
	"id",
	"name",
	"value",
	"checked",
	"disabled",
	"required",
	"aria-invalid",
	"aria-describedby"
], _ = { class: "radio-group-content" }, v = { class: "radio-group-label" }, y = {
	key: 0,
	class: "radio-group-description"
}, b = /*#__PURE__*/ e(/* @__PURE__ */ o({
	inheritAttrs: !1,
	__name: "RadioGroupItem",
	props: {
		value: {},
		id: {},
		disabled: { type: Boolean },
		invalid: { type: Boolean }
	},
	setup(e) {
		let o = e, b = s(t);
		if (!b) throw Error("RadioGroupItem must be used inside RadioGroup");
		let x = p(), S = m(), C = n(() => o.id ?? `radio-group-item-${S}`), w = n(() => !!o.disabled || b.disabled.value), T = n(() => !!o.invalid || b.invalid.value), E = n(() => b.model.value === o.value), D = n(() => {
			let e = x["aria-describedby"];
			return typeof e == "string" ? e : void 0;
		}), O = (e) => {
			!w.value && e.target instanceof HTMLInputElement && e.target.checked && b.select(o.value);
		};
		return (e, t) => (u(), i("label", {
			class: l([
				"radio-group-item",
				f(b).mode.value,
				{
					checked: E.value,
					disabled: w.value,
					invalid: T.value
				}
			]),
			for: C.value,
			"data-state": E.value ? "checked" : "unchecked",
			"data-disabled": w.value || void 0,
			"data-invalid": T.value || void 0
		}, [
			a("input", c(e.$attrs, {
				id: C.value,
				class: "radio-group-input",
				type: "radio",
				name: f(b).name.value,
				value: o.value,
				checked: E.value,
				disabled: w.value,
				required: f(b).required.value,
				"aria-invalid": T.value || void 0,
				"aria-describedby": D.value,
				onChange: O
			}), null, 16, g),
			t[0] ||= a("span", {
				class: "radio-group-indicator",
				"aria-hidden": "true"
			}, [a("span", { class: "radio-group-dot" })], -1),
			a("span", _, [a("span", v, [d(e.$slots, "default", {}, void 0, !0)]), e.$slots.description ? (u(), i("span", y, [d(e.$slots, "description", {}, void 0, !0)])) : r("", !0)])
		], 10, h));
	}
}), [["__scopeId", "data-v-a33c148b"]]);
//#endregion
export { b as default };
