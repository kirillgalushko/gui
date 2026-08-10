import { t as e } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { t } from "./FieldHelper-BC_s15EK.js";
import { Fragment as n, computed as r, createElementBlock as i, createElementVNode as a, createVNode as o, defineComponent as s, mergeProps as c, nextTick as l, normalizeClass as u, normalizeStyle as d, onMounted as f, openBlock as p, ref as m, renderList as ee, toDisplayString as h, useAttrs as g, useId as _, watch as v, withModifiers as y } from "vue";
import '../assets/PincodeInput-B6i8eORW.css';//#region src/components/PincodeInput/PincodeInput.vue?vue&type=script&setup=true&lang.ts
var b = [
	"value",
	"disabled",
	"readonly",
	"maxlength",
	"aria-invalid",
	"aria-describedby"
], te = {
	class: "pincode-grid",
	"aria-hidden": "true"
}, x = ["onMousedown"], S = /*#__PURE__*/ e(/* @__PURE__ */ s({
	inheritAttrs: !1,
	__name: "PincodeInput",
	props: {
		modelValue: {},
		autoFocus: { type: Boolean },
		stretched: {
			type: Boolean,
			default: !1
		},
		disabled: { type: Boolean },
		loading: { type: Boolean },
		length: { default: 6 },
		succeed: { type: Boolean },
		invalid: { type: Boolean },
		description: {},
		errorMessage: {},
		descriptionId: {}
	},
	emits: ["update:modelValue", "complete"],
	setup(e, { emit: s }) {
		let S = e, C = s, w = g(), T = _(), E = m(null), D = m(0), O = r(() => Math.max(1, Math.floor(Number(S.length) || 1))), k = (e) => String(e ?? "").replace(/\D/g, "").slice(0, O.value), A = (e, t) => t === null ? k(e).length : k(e.slice(0, t)).length, j = (e) => e === "" || e === !0 || e === "true", M = r(() => k(S.modelValue)), N = r(() => S.disabled || S.loading), P = r(() => S.succeed || j(w.readonly)), F = r(() => Array.from({ length: O.value }, (e, t) => M.value[t] ?? "")), I = r(() => Math.min(D.value, O.value - 1)), L = r(() => D.value < O.value), R = r(() => S.invalid ? !!S.errorMessage : !!S.description), z = r(() => {
			if (R.value) return S.descriptionId ?? `${T}-helper`;
		}), B = r(() => {
			let e = w["aria-describedby"], t = typeof e == "string" ? e : void 0;
			return z.value ? [t, z.value].filter(Boolean).join(" ") : t;
		}), V = r(() => {
			let e = { ...w };
			return delete e.class, delete e.style, delete e.readonly, delete e.disabled, delete e.maxlength, e;
		}), H = (e = M.value) => e.length === O.value ? O.value : e.length, U = (e, t = M.value) => Math.min(Math.max(e, 0), H(t)), W = async (e = M.value) => {
			await l(), E.value && (E.value.value = e, E.value.setSelectionRange(D.value, D.value));
		}, G = (e, t = M.value) => {
			D.value = U(e, t), W(t);
		}, K = (e, t) => {
			e.length === O.value && t >= O.value && C("complete", e);
		}, q = (e, t) => {
			let n = k(e);
			D.value = U(t, n), E.value && E.value.value !== n && (E.value.value = n), C("update:modelValue", n), K(n, t), W(n);
		}, J = (e) => {
			if (P.value) return;
			let t = e.replace(/\D/g, "");
			if (!t || D.value >= O.value) return;
			let n = D.value, r = n + t.length, i = `${M.value.slice(0, n)}${t}${M.value.slice(r)}`;
			q(i, n + t.length);
		}, Y = () => {
			if (P.value || !M.value) return;
			let e = D.value < M.value.length ? D.value : D.value - 1;
			if (e < 0) return;
			let t = `${M.value.slice(0, e)}${M.value.slice(e + 1)}`;
			q(t, e);
		}, X = () => {
			if (P.value || D.value >= M.value.length) return;
			let e = `${M.value.slice(0, D.value)}${M.value.slice(D.value + 1)}`;
			q(e, D.value);
		}, Z = (e, t) => {
			if (P.value) {
				E.value && (E.value.value = M.value);
				return;
			}
			let n = k(e);
			E.value && E.value.value !== n && (E.value.value = n);
			let r = t ?? n.length;
			D.value = U(r, n), C("update:modelValue", n), K(n, r);
		}, ne = (e) => {
			let t = e.target;
			Z(t.value, A(t.value, t.selectionStart));
		}, Q = () => !S.invalid || P.value ? !1 : (q("", 0), !0), re = () => {
			Q();
		}, ie = () => {
			N.value || (E.value?.focus(), Q());
		}, ae = (e) => {
			let t = e;
			if (P.value) {
				e.preventDefault();
				return;
			}
			if (t.inputType === "insertText") {
				e.preventDefault(), J(t.data ?? "");
				return;
			}
			if (t.inputType === "insertFromPaste") {
				e.preventDefault(), J(t.data ?? "");
				return;
			}
			if (t.inputType === "deleteContentBackward") {
				e.preventDefault(), Y();
				return;
			}
			t.inputType === "deleteContentForward" && (e.preventDefault(), X());
		}, oe = (e) => {
			if (e.key === "ArrowLeft") {
				e.preventDefault(), G(D.value - 1);
				return;
			}
			if (e.key === "ArrowRight") {
				e.preventDefault(), G(D.value + 1);
				return;
			}
			if (e.key === "Home") {
				e.preventDefault(), G(0);
				return;
			}
			if (e.key === "End") {
				e.preventDefault(), G(M.value.length);
				return;
			}
			if (e.key === "Backspace") {
				e.preventDefault(), Y();
				return;
			}
			e.key === "Delete" && (e.preventDefault(), X());
		}, se = (e) => {
			e.preventDefault(), J(e.clipboardData?.getData("text") ?? "");
		}, $ = () => {
			N.value || E.value?.focus();
		}, ce = (e) => {
			N.value || ($(), !Q() && G(e));
		};
		return v(M, (e) => {
			D.value = U(D.value, e), E.value && E.value.value !== e && (E.value.value = e), W(e);
		}), v(O, () => {
			D.value = U(D.value), W();
		}), f(async () => {
			!S.autoFocus || N.value || (await l(), $());
		}), (e, r) => (p(), i("div", { class: u(["pincode-field", { stretched: S.stretched }]) }, [a("div", {
			class: u(["pincode-shell", {
				disabled: N.value,
				loading: S.loading,
				succeed: S.succeed,
				invalid: S.invalid
			}]),
			style: d({ "--pincode-length": O.value }),
			onClick: ie
		}, [a("input", c({
			ref_key: "inputRef",
			ref: E
		}, V.value, {
			class: "pincode-input",
			value: M.value,
			disabled: N.value,
			readonly: P.value,
			maxlength: O.value,
			"aria-invalid": S.invalid || void 0,
			"aria-describedby": B.value,
			inputmode: "numeric",
			pattern: "[0-9]*",
			autocomplete: "one-time-code",
			onFocus: re,
			onBeforeinput: ae,
			onKeydown: oe,
			onPaste: se,
			onInput: ne
		}), null, 16, b), a("div", te, [(p(!0), i(n, null, ee(F.value, (e, t) => (p(), i("div", {
			key: t,
			class: u(["pincode-cell", {
				filled: e,
				active: t === I.value,
				"with-caret": t === I.value && L.value
			}]),
			onMousedown: y((e) => ce(t), ["prevent"])
		}, [a("span", { class: u(["pincode-dot", { hidden: e }]) }, null, 2), a("span", { class: u(["pincode-digit", { visible: e }]) }, h(e), 3)], 42, x))), 128))])], 6), o(t, {
			description: S.description,
			"error-message": S.errorMessage,
			invalid: S.invalid,
			disabled: N.value,
			"description-id": z.value
		}, null, 8, [
			"description",
			"error-message",
			"invalid",
			"disabled",
			"description-id"
		])], 2));
	}
}), [["__scopeId", "data-v-e1936b73"]]);
//#endregion
export { S as default };
