import { o as e } from "./floating-ui.vue-CE68TKCX.js";
import { t } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { t as n } from "./FieldHelper-BC_s15EK.js";
import { computed as r, createCommentVNode as i, createElementBlock as a, createElementVNode as o, createVNode as s, defineComponent as c, mergeModels as l, mergeProps as u, nextTick as d, normalizeClass as f, normalizeStyle as p, onBeforeUnmount as m, onMounted as h, openBlock as g, ref as _, renderSlot as v, toDisplayString as y, useAttrs as b, useId as x, useModel as S, vModelDynamic as C, withDirectives as w } from "vue";
import '../assets/Input-CDO3bk8O.css';//#region src/components/Input/Input.vue?vue&type=script&setup=true&lang.ts
var T = [
	"disabled",
	"aria-invalid",
	"aria-describedby"
], E = { class: "input-postfix-value" }, D = { class: "input-postfix" }, O = /*@__PURE__*/ c({
	inheritAttrs: !1,
	__name: "Input",
	props: /*@__PURE__*/ l({
		autoFocus: { type: Boolean },
		maxWidth: { default: "100%" },
		disabled: { type: Boolean },
		postfix: {},
		description: {},
		errorMessage: {},
		invalid: { type: Boolean },
		descriptionId: {},
		size: { default: "large" }
	}, {
		modelValue: {},
		modelModifiers: {}
	}),
	emits: ["update:modelValue"],
	setup(e) {
		let t = {
			"extra-small": { paddingX: 8 },
			small: { paddingX: 12 },
			medium: { paddingX: 14 },
			large: { paddingX: 16 }
		}, c = _(), l = _(), O = _(0), k = _(0), A = _(), j = S(e, "modelValue"), M = e, N = b(), P = x(), F, I = (e) => {
			let n = t[M.size].paddingX;
			return e > 0 ? e + n + 8 : n;
		}, L = r(() => I(O.value)), R = r(() => I(k.value)), z = r(() => String(j.value ?? "")), B = r(() => ({
			paddingLeft: `${L.value}px`,
			paddingRight: `${R.value}px`
		})), V = r(() => ({ "--input-padding-x": `${t[M.size].paddingX}px` })), H = r(() => ({ left: `${L.value}px` })), U = r(() => M.invalid ? !!M.errorMessage : !!M.description), W = r(() => {
			if (U.value) return M.descriptionId ?? `${P}-helper`;
		}), G = r(() => {
			let e = N["aria-describedby"], t = typeof e == "string" ? e : void 0;
			return W.value ? [t, W.value].filter(Boolean).join(" ") : t;
		}), K = r(() => N.type === "number"), q = r(() => M.postfix !== void 0 && M.postfix.length > 0 && z.value.length > 0), J = (e) => e === "e" || e === "E", Y = () => {
			O.value = c.value?.clientWidth ?? 0, k.value = l.value?.clientWidth ?? 0;
		}, X = (e) => {
			K.value && J(e.key) && e.preventDefault();
		}, Z = (e) => {
			let t = e;
			K.value && J(t.data) && e.preventDefault();
		};
		return h(async () => {
			await d(), Y(), typeof ResizeObserver < "u" && (F = new ResizeObserver(Y), c.value && F.observe(c.value), l.value && F.observe(l.value)), !(!M.autoFocus || M.disabled) && A.value?.focus();
		}), m(() => {
			F?.disconnect();
		}), (e, t) => (g(), a("div", {
			style: p({ maxWidth: M.maxWidth }),
			class: "input-field"
		}, [o("div", {
			class: f([
				"input-container",
				M.size,
				{ disabled: M.disabled }
			]),
			style: p(V.value)
		}, [
			o("div", {
				ref_key: "leftAdornment",
				ref: c,
				class: "adornment left-adornment"
			}, [v(e.$slots, "leftAdornment", {}, void 0, !0)], 512),
			w(o("input", u({
				ref_key: "inputRef",
				ref: A
			}, e.$attrs, {
				"onUpdate:modelValue": t[0] ||= (e) => j.value = e,
				disabled: M.disabled,
				style: B.value,
				class: ["input", { invalid: M.invalid }],
				"aria-invalid": M.invalid || void 0,
				"aria-describedby": G.value,
				onKeydown: X,
				onBeforeinput: Z
			}), null, 16, T), [[C, j.value]]),
			q.value ? (g(), a("span", {
				key: 0,
				class: "input-postfix-overlay",
				style: p(H.value),
				"aria-hidden": "true"
			}, [o("span", E, y(z.value), 1), o("span", D, y(M.postfix), 1)], 4)) : i("", !0),
			o("div", {
				ref_key: "rightAdornment",
				ref: l,
				class: "adornment right-adornment"
			}, [v(e.$slots, "rightAdornment", {}, void 0, !0)], 512)
		], 6), s(n, {
			description: M.description,
			"error-message": M.errorMessage,
			invalid: M.invalid,
			disabled: M.disabled,
			"description-id": W.value
		}, null, 8, [
			"description",
			"error-message",
			"invalid",
			"disabled",
			"description-id"
		])], 4));
	}
}), k = /* @__PURE__ */ e({ default: () => A }), A = /*#__PURE__*/ t(O, [["__scopeId", "data-v-b27085c5"]]);
//#endregion
export { k as n, A as t };
