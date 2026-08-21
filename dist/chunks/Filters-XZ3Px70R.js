import { s as e, t, u as n } from "./filters-B7YbzXBe.js";
import { t as r } from "./Stack-1RaHEufk.js";
import { t as i } from "./FilterClear-CtRlId_G.js";
import { t as a } from "./FilterItem-DcvLmDN_.js";
import { t as o } from "./FilterMenu-D1FjQ0_H.js";
import { Fragment as s, computed as c, createBlock as l, createCommentVNode as u, createElementBlock as d, createSlots as f, defineComponent as p, guardReactiveProps as m, mergeModels as h, mergeProps as g, normalizeProps as _, openBlock as v, renderList as y, renderSlot as b, useModel as x, watch as S, withCtx as C } from "vue";
//#endregion
//#region src/components/Filters/Filters.vue
var w = /* @__PURE__ */ p({
	__name: "Filters",
	props: /*@__PURE__*/ h({
		fields: {},
		addLabel: { default: "Добавить фильтр" },
		clearLabel: { default: "Сбросить" },
		selectedLabel: { default: "выбрано" },
		showClear: {
			type: Boolean,
			default: !0
		},
		showMenu: {
			type: Boolean,
			default: !0
		},
		showItems: {
			type: Boolean,
			default: !0
		},
		allowDuplicateFields: {
			type: Boolean,
			default: !1
		},
		disabled: { type: Boolean },
		createId: {},
		itemLayout: { default: "full" },
		size: { default: "medium" },
		mode: { default: "outline" }
	}, {
		modelValue: { default: () => [] },
		modelModifiers: {}
	}),
	emits: /*@__PURE__*/ h([
		"add",
		"remove",
		"clear"
	], ["update:modelValue"]),
	setup(p, { emit: h }) {
		let w = p, T = x(p, "modelValue"), E = h, D = c(() => new Map(w.fields.map((e) => [e.key, e]))), O = c(() => T.value.flatMap((e) => {
			let t = D.value.get(e.field);
			return t ? [{
				filter: e,
				field: t
			}] : [];
		}));
		S(() => [
			T.value,
			w.fields,
			w.allowDuplicateFields
		], ([t, n, r]) => {
			if (r) return;
			let i = e(t, n);
			(i.length !== t.length || i.some((e, n) => e.operator !== t[n]?.operator || e.values.length !== t[n]?.values.length)) && (T.value = i);
		}, { immediate: !0 });
		let k = ({ field: e, option: r }) => {
			let i = T.value.find((t) => t.field === e.key);
			if (i && !w.allowDuplicateFields) {
				if (!r) return;
				let t = e.type === "multiselect" ? n(i.values, r.value, e.isValueEqual) : [r.value];
				A({
					...i,
					values: t
				});
				return;
			}
			let a = t(e, r, w.createId?.());
			T.value = [...T.value, a], E("add", a);
		}, A = (e) => {
			T.value = T.value.map((t) => t.id === e.id ? e : t);
		}, j = (e) => {
			T.value = T.value.filter((t) => t.id !== e.id), E("remove", e);
		}, M = () => {
			T.value = T.value.filter((e) => !D.value.has(e.field)), E("clear");
		};
		return (e, t) => (v(), l(r, {
			direction: "row",
			gap: 2,
			wrap: "",
			"align-items": "center"
		}, {
			default: C(() => [
				w.showMenu ? (v(), l(o, {
					key: 0,
					fields: w.fields,
					label: w.addLabel,
					size: w.size,
					mode: w.mode,
					disabled: w.disabled,
					onSelect: k
				}, f({ _: 2 }, [
					e.$slots.trigger ? {
						name: "trigger",
						fn: C((t) => [b(e.$slots, "trigger", _(m(t)))]),
						key: "0"
					} : void 0,
					e.$slots.field ? {
						name: "field",
						fn: C((t) => [b(e.$slots, "field", _(m(t)))]),
						key: "1"
					} : void 0,
					e.$slots.option ? {
						name: "option",
						fn: C((t) => [b(e.$slots, "option", _(m(t)))]),
						key: "2"
					} : void 0
				]), 1032, [
					"fields",
					"label",
					"size",
					"mode",
					"disabled"
				])) : u("", !0),
				(v(!0), d(s, null, y(w.showItems ? O.value : [], ({ filter: t, field: n }) => (v(), l(a, {
					key: t.id,
					"model-value": t,
					field: n,
					size: w.size,
					mode: w.mode,
					"selected-label": w.selectedLabel,
					layout: n.itemLayout ?? w.itemLayout,
					disabled: w.disabled,
					"onUpdate:modelValue": A,
					onRemove: j
				}, f({ _: 2 }, [
					e.$slots["filter-field"] ? {
						name: "field",
						fn: C((t) => [b(e.$slots, "filter-field", g({ ref_for: !0 }, t))]),
						key: "0"
					} : void 0,
					e.$slots.operator ? {
						name: "operator",
						fn: C((t) => [b(e.$slots, "operator", g({ ref_for: !0 }, t))]),
						key: "1"
					} : void 0,
					e.$slots.value ? {
						name: "value",
						fn: C((t) => [b(e.$slots, "value", g({ ref_for: !0 }, t))]),
						key: "2"
					} : void 0,
					e.$slots["value-menu"] ? {
						name: "value-menu",
						fn: C((t) => [b(e.$slots, "value-menu", g({ ref_for: !0 }, t))]),
						key: "3"
					} : void 0
				]), 1032, [
					"model-value",
					"field",
					"size",
					"mode",
					"selected-label",
					"layout",
					"disabled"
				]))), 128)),
				w.showItems && w.showClear && O.value.length > 0 ? (v(), l(i, {
					key: 1,
					label: w.clearLabel,
					size: w.size,
					mode: w.mode,
					disabled: w.disabled,
					onClear: M
				}, f({ _: 2 }, [e.$slots["clear-icon"] ? {
					name: "icon",
					fn: C(() => [b(e.$slots, "clear-icon")]),
					key: "0"
				} : void 0]), 1032, [
					"label",
					"size",
					"mode",
					"disabled"
				])) : u("", !0)
			]),
			_: 3
		}));
	}
});
//#endregion
export { w as default };
