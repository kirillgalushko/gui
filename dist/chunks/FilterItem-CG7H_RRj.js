import { o as e } from "./floating-ui.vue-CE68TKCX.js";
import { a as t, c as n, l as r, o as i, u as a } from "./filters-B7YbzXBe.js";
import { t as o } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { O as s, t as c } from "./gui-icons.es-5O8QlDZJ.js";
import { t as l } from "./Button-CeAG6Psa.js";
import { t as u } from "./ButtonGroup-DH8-TnEU.js";
import { t as d } from "./Dropdown-88Rw7P0I.js";
import { t as f } from "./Input-DDpZC86_.js";
import { t as p } from "./DatePicker-C0rVf4gc.js";
import { t as m } from "./DropdownCheckboxItem-BgcHAKae.js";
import { t as h } from "./DropdownGroup-DRm7UzYq.js";
import { t as g } from "./DropdownItem-ZtMjq63a.js";
import { t as _ } from "./DropdownRadioGroup-Ct0NCms9.js";
import { t as v } from "./DropdownRadioItem-BDjLCgjk.js";
import { Fragment as y, computed as b, createBlock as x, createCommentVNode as S, createElementBlock as C, createElementVNode as w, createTextVNode as T, createVNode as E, defineComponent as D, mergeModels as O, openBlock as k, renderList as A, renderSlot as j, resolveDynamicComponent as M, toDisplayString as N, unref as P, useModel as F, withCtx as I } from "vue";
import '../assets/FilterItem-Bdi0S32N.css';//#region src/components/Filters/FilterItem.vue?vue&type=script&setup=true&lang.ts
var L = {
	key: 1,
	class: "filter-item-input"
}, R = {
	key: 2,
	class: "filter-item-input"
}, z = /*@__PURE__*/ D({
	__name: "FilterItem",
	props: /*@__PURE__*/ O({
		field: {},
		disabled: { type: Boolean },
		selectedLabel: { default: "выбрано" },
		removeLabel: { default: "Удалить фильтр" },
		contentWidth: { default: "extra-small" },
		layout: { default: "full" },
		size: { default: "medium" },
		mode: { default: "outline" }
	}, {
		modelValue: { required: !0 },
		modelModifiers: {}
	}),
	emits: /*@__PURE__*/ O(["remove"], ["update:modelValue"]),
	setup(e, { emit: o }) {
		let D = e, O = F(e, "modelValue"), z = o, B = b(() => i(D.field)), V = b(() => B.value.find((e) => e.value === O.value.operator) ?? B.value[0]), H = b(() => t(O.value, D.field, D.selectedLabel)), U = b({
			get: () => String(O.value.values[0] ?? ""),
			set: (e) => {
				G({ values: e ? [e] : [] });
			}
		}), W = b(() => {
			let e = O.value.values[0];
			return e instanceof Date ? e : null;
		}), G = (e) => {
			D.disabled || (O.value = {
				...O.value,
				...e
			});
		}, K = (e) => {
			G({ operator: e.value });
		}, q = (e) => {
			if (e.disabled || D.disabled) return;
			let t = D.field.type === "multiselect" ? a(O.value.values, e.value, D.field.isValueEqual) : [e.value];
			G({ values: t });
		}, J = ({ value: e }) => {
			G({ values: e === null ? [] : [e] });
		}, Y = (e) => n(O.value.values, e.value, D.field.isValueEqual);
		return (e, t) => (k(), x(u, { "aria-label": D.field.label }, {
			default: I(() => [
				D.layout === "full" ? (k(), x(l, {
					key: 0,
					"as-child": "",
					size: D.size,
					mode: D.mode
				}, {
					default: I(() => [w("span", null, [j(e.$slots, "field", { field: D.field }, () => [D.field.icon ? (k(), x(M(P(r)(D.field.icon)), { key: 0 })) : S("", !0), T(" " + N(D.field.label), 1)], !0)])]),
					_: 3
				}, 8, ["size", "mode"])) : S("", !0),
				D.layout === "full" ? (k(), x(d, {
					key: 1,
					"content-width": D.contentWidth
				}, {
					popper: I(() => [E(h, { "aria-label": `Оператор: ${D.field.label}` }, {
						default: I(() => [E(_, { "model-value": O.value.operator }, {
							default: I(() => [(k(!0), C(y, null, A(B.value, (e) => (k(), x(v, {
								key: e.value,
								value: e.value,
								onClick: (t) => K(e)
							}, {
								default: I(() => [w("span", null, N(e.label), 1)]),
								_: 2
							}, 1032, ["value", "onClick"]))), 128))]),
							_: 1
						}, 8, ["model-value"])]),
						_: 1
					}, 8, ["aria-label"])]),
					default: I(() => [E(l, {
						size: D.size,
						mode: D.mode,
						disabled: D.disabled
					}, {
						default: I(() => [j(e.$slots, "operator", {
							operator: V.value,
							filter: O.value
						}, () => [T(N(V.value?.label), 1)], !0)]),
						_: 3
					}, 8, [
						"size",
						"mode",
						"disabled"
					])]),
					_: 3
				}, 8, ["content-width"])) : S("", !0),
				E(d, {
					"content-width": D.contentWidth,
					"content-padding": "none"
				}, {
					popper: I(() => [e.$slots["value-menu"] ? j(e.$slots, "value-menu", {
						filter: O.value,
						field: D.field,
						updateFilter: G
					}, void 0, !0, 0) : D.field.type === "date" ? (k(), C("div", L, [E(p, {
						value: W.value,
						size: D.size,
						placeholder: D.field.placeholder,
						stretched: "",
						"on-change": J
					}, null, 8, [
						"value",
						"size",
						"placeholder"
					])])) : D.field.type === "text" ? (k(), C("div", R, [E(f, {
						modelValue: U.value,
						"onUpdate:modelValue": t[0] ||= (e) => U.value = e,
						size: D.size,
						placeholder: D.field.placeholder,
						"aria-label": D.field.label
					}, null, 8, [
						"modelValue",
						"size",
						"placeholder",
						"aria-label"
					])])) : (k(), x(h, {
						key: 3,
						class: "filter-item-list",
						"aria-label": `Значение: ${D.field.label}`
					}, {
						default: I(() => [(k(!0), C(y, null, A(D.field.options ?? [], (e) => (k(), C(y, { key: String(e.value) }, [D.field.type === "multiselect" ? (k(), x(m, {
							key: 0,
							disabled: e.disabled,
							"model-value": Y(e),
							"onUpdate:modelValue": (t) => q(e)
						}, {
							default: I(() => [e.icon ? (k(), x(M(P(r)(e.icon)), { key: 0 })) : S("", !0), w("span", null, N(e.label), 1)]),
							_: 2
						}, 1032, [
							"disabled",
							"model-value",
							"onUpdate:modelValue"
						])) : (k(), x(g, {
							key: 1,
							disabled: e.disabled,
							selected: Y(e),
							"aria-pressed": Y(e),
							onClick: (t) => q(e)
						}, {
							default: I(() => [
								e.icon ? (k(), x(M(P(r)(e.icon)), { key: 0 })) : S("", !0),
								w("span", null, N(e.label), 1),
								Y(e) ? (k(), x(P(s), {
									key: 1,
									class: "filter-item-check",
									"aria-hidden": "true"
								})) : S("", !0)
							]),
							_: 2
						}, 1032, [
							"disabled",
							"selected",
							"aria-pressed",
							"onClick"
						]))], 64))), 128))]),
						_: 1
					}, 8, ["aria-label"]))]),
					default: I(() => [E(l, {
						size: D.size,
						mode: D.mode,
						disabled: D.disabled
					}, {
						default: I(() => [j(e.$slots, "value", {
							filter: O.value,
							field: D.field,
							label: H.value
						}, () => [T(N(H.value), 1)], !0)]),
						_: 3
					}, 8, [
						"size",
						"mode",
						"disabled"
					])]),
					_: 3
				}, 8, ["content-width"]),
				E(l, {
					squared: "",
					size: D.size,
					mode: D.mode,
					disabled: D.disabled,
					"aria-label": D.removeLabel,
					onClick: t[1] ||= (e) => z("remove", O.value)
				}, {
					default: I(() => [E(P(c))]),
					_: 1
				}, 8, [
					"size",
					"mode",
					"disabled",
					"aria-label"
				])
			]),
			_: 3
		}, 8, ["aria-label"]));
	}
}), B = /* @__PURE__ */ e({ default: () => V }), V = /*#__PURE__*/ o(z, [["__scopeId", "data-v-a411fcef"]]);
//#endregion
export { B as n, V as t };
