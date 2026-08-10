import { t as e } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { t } from "./FieldHelper-BC_s15EK.js";
import { Fragment as n, computed as r, createElementBlock as i, createElementVNode as a, createVNode as o, defineComponent as s, mergeModels as c, mergeProps as l, nextTick as u, onMounted as d, openBlock as f, ref as p, useAttrs as m, useId as h, useModel as g, vModelText as _, watch as v, withDirectives as y } from "vue";
import '../assets/Textarea-vf7C4oSC.css';//#region src/components/Textarea/Textarea.vue?vue&type=script&setup=true&lang.ts
var b = [
	"placeholder",
	"aria-invalid",
	"aria-describedby"
], x = /*#__PURE__*/ e(/* @__PURE__ */ s({
	inheritAttrs: !1,
	__name: "Textarea",
	props: /*@__PURE__*/ c({
		resize: { default: "none" },
		layout: { default: "fixed" },
		placeholder: {},
		invalid: { type: Boolean },
		errorMessage: {},
		descriptionId: {},
		minHeight: {},
		maxHeight: {}
	}, {
		modelValue: {},
		modelModifiers: {}
	}),
	emits: ["update:modelValue"],
	setup(e) {
		let s = e, c = p(null), x = g(e, "modelValue"), S = m(), C = h(), w = r(() => ({
			resize: s.resize,
			minHeight: s.minHeight,
			maxHeight: s.maxHeight
		})), T = r(() => s.invalid && !!s.errorMessage), E = r(() => {
			if (T.value) return s.descriptionId ?? `${C}-helper`;
		}), D = r(() => {
			let e = S["aria-describedby"], t = typeof e == "string" ? e : void 0;
			return E.value ? [t, E.value].filter(Boolean).join(" ") : t;
		}), O = () => {
			let e = c.value;
			if (e) {
				if (s.layout !== "hug") {
					e.style.removeProperty("height"), e.style.removeProperty("overflow-y");
					return;
				}
				e.style.height = "auto", e.style.overflowY = "hidden", e.style.height = `${e.scrollHeight + 2}px`, e.style.overflowY = e.scrollHeight > e.clientHeight ? "auto" : "hidden";
			}
		};
		return d(async () => {
			await u(), O();
		}), v([
			x,
			() => s.layout,
			() => s.minHeight,
			() => s.maxHeight
		], async () => {
			await u(), O();
		}, { flush: "post" }), (e, r) => (f(), i(n, null, [y(a("textarea", l({
			ref_key: "textareaRef",
			ref: c
		}, e.$attrs, {
			"onUpdate:modelValue": r[0] ||= (e) => x.value = e,
			placeholder: s.placeholder,
			style: w.value,
			class: [
				"textarea",
				s.layout,
				{ invalid: s.invalid }
			],
			"aria-invalid": s.invalid || void 0,
			"aria-describedby": D.value,
			onInput: O
		}), null, 16, b), [[_, x.value]]), o(t, {
			"error-message": s.errorMessage,
			invalid: s.invalid,
			"description-id": E.value
		}, null, 8, [
			"error-message",
			"invalid",
			"description-id"
		])], 64));
	}
}), [["__scopeId", "data-v-e4409639"]]);
//#endregion
export { x as default };
