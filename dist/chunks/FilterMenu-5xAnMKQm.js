import { o as e } from "./floating-ui.vue-CE68TKCX.js";
import { i as t, l as n, r } from "./filters-B7YbzXBe.js";
import { t as i } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { O as a, m as o, r as s } from "./gui-icons.es-5O8QlDZJ.js";
import { t as c } from "./Button-CeAG6Psa.js";
import { t as l } from "./Dropdown-88Rw7P0I.js";
import { t as u } from "./Input-DDpZC86_.js";
import { t as d } from "./DropdownGroup-DRm7UzYq.js";
import { t as f } from "./DropdownItem-ZtMjq63a.js";
import { t as p } from "./DropdownSub-Dx9MCIis.js";
import { t as m } from "./DropdownSubTrigger-CXmgFrwN.js";
import { Fragment as h, computed as g, createBlock as _, createCommentVNode as v, createElementBlock as y, createElementVNode as b, createTextVNode as x, createVNode as S, defineComponent as C, nextTick as w, openBlock as T, reactive as E, ref as D, renderList as O, renderSlot as k, resolveDynamicComponent as A, toDisplayString as j, unref as M, withCtx as N } from "vue";
import '../assets/FilterMenu-BKes2af_.css';//#region src/components/Filters/FilterMenu.vue?vue&type=script&setup=true&lang.ts
var P = {
	key: 0,
	class: "filter-menu-search"
}, F = {
	key: 0,
	class: "filter-menu-search"
}, I = /*@__PURE__*/ C({
	__name: "FilterMenu",
	props: {
		fields: {},
		label: { default: "Добавить фильтр" },
		searchPlaceholder: { default: "Найти поле…" },
		optionSearchPlaceholder: { default: "Найти значение…" },
		emptyLabel: { default: "Ничего не найдено" },
		searchable: {
			type: Boolean,
			default: !0
		},
		closeOnSelect: {
			type: Boolean,
			default: !0
		},
		disabled: { type: Boolean },
		contentWidth: { default: "extra-small" },
		size: { default: "medium" },
		mode: { default: "outline" }
	},
	emits: ["select"],
	setup(e, { emit: i }) {
		let C = e, I = i, L = D(0), R = D(!1), z = D(""), B = E({}), V = g(() => r(C.fields, z.value)), H = (e) => !!e.options?.length, U = (e) => t(e.options ?? [], B[e.key] ?? ""), W = async () => {
			C.closeOnSelect && (await w(), R.value = !1, L.value += 1);
		}, G = (e) => {
			e.disabled || H(e) || (I("select", { field: e }), W());
		}, K = (e, t) => {
			e.disabled || t.disabled || (I("select", {
				field: e,
				option: t
			}), W());
		};
		return (e, t) => (T(), _(l, {
			key: L.value,
			shown: R.value,
			"onUpdate:shown": t[1] ||= (e) => R.value = e,
			"content-width": C.contentWidth,
			"content-padding": "none"
		}, {
			popper: N(() => [C.searchable ? (T(), y("div", P, [S(u, {
				modelValue: z.value,
				"onUpdate:modelValue": t[0] ||= (e) => z.value = e,
				size: C.size,
				placeholder: C.searchPlaceholder,
				"aria-label": C.searchPlaceholder
			}, {
				leftAdornment: N(() => [S(M(s), { "aria-hidden": "true" })]),
				_: 1
			}, 8, [
				"modelValue",
				"size",
				"placeholder",
				"aria-label"
			])])) : v("", !0), S(d, {
				class: "filter-menu-list",
				"aria-label": "Поля фильтра"
			}, {
				default: N(() => [V.value.length ? (T(!0), y(h, { key: 0 }, O(V.value, (t) => (T(), y(h, { key: t.key }, [H(t) ? (T(), _(p, {
					key: 0,
					"content-width": C.contentWidth,
					"content-padding": "none"
				}, {
					popper: N(() => [t.searchable ? (T(), y("div", F, [S(u, {
						modelValue: B[t.key],
						"onUpdate:modelValue": (e) => B[t.key] = e,
						size: C.size,
						placeholder: t.placeholder ?? C.optionSearchPlaceholder,
						"aria-label": t.placeholder ?? C.optionSearchPlaceholder
					}, {
						leftAdornment: N(() => [S(M(s), { "aria-hidden": "true" })]),
						_: 1
					}, 8, [
						"modelValue",
						"onUpdate:modelValue",
						"size",
						"placeholder",
						"aria-label"
					])])) : v("", !0), S(d, {
						class: "filter-menu-list",
						"aria-label": t.label
					}, {
						default: N(() => [(T(!0), y(h, null, O(U(t), (r) => (T(), _(f, {
							key: String(r.value),
							disabled: r.disabled,
							onClick: (e) => K(t, r)
						}, {
							default: N(() => [k(e.$slots, "option", {
								field: t,
								option: r
							}, () => [r.icon ? (T(), _(A(M(n)(r.icon)), { key: 0 })) : v("", !0), b("span", null, j(r.label), 1)], !0)]),
							_: 2
						}, 1032, ["disabled", "onClick"]))), 128)), U(t).length === 0 ? (T(), _(f, {
							key: 0,
							disabled: ""
						}, {
							default: N(() => [x(j(C.emptyLabel), 1)]),
							_: 1
						})) : v("", !0)]),
						_: 2
					}, 1032, ["aria-label"])]),
					default: N(() => [S(m, { disabled: t.disabled }, {
						default: N(() => [k(e.$slots, "field", { field: t }, () => [t.icon ? (T(), _(A(M(n)(t.icon)), { key: 0 })) : v("", !0), b("span", null, j(t.label), 1)], !0)]),
						_: 2
					}, 1032, ["disabled"])]),
					_: 2
				}, 1032, ["content-width"])) : (T(), _(f, {
					key: 1,
					disabled: t.disabled,
					onClick: (e) => G(t)
				}, {
					default: N(() => [k(e.$slots, "field", { field: t }, () => [t.icon ? (T(), _(A(M(n)(t.icon)), { key: 0 })) : v("", !0), b("span", null, j(t.label), 1)], !0)]),
					_: 2
				}, 1032, ["disabled", "onClick"]))], 64))), 128)) : (T(), _(f, {
					key: 1,
					disabled: ""
				}, {
					default: N(() => [S(M(a), { "aria-hidden": "true" }), x(" " + j(C.emptyLabel), 1)]),
					_: 1
				}))]),
				_: 3
			})]),
			default: N(() => [k(e.$slots, "trigger", { label: C.label }, () => [S(c, {
				size: C.size,
				mode: C.mode,
				disabled: C.disabled
			}, {
				default: N(() => [S(M(o)), x(" " + j(C.label), 1)]),
				_: 1
			}, 8, [
				"size",
				"mode",
				"disabled"
			])], !0)]),
			_: 3
		}, 8, ["shown", "content-width"]));
	}
}), L = /* @__PURE__ */ e({ default: () => R }), R = /*#__PURE__*/ i(I, [["__scopeId", "data-v-36d12a30"]]);
//#endregion
export { L as n, R as t };
