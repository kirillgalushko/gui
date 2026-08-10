import { markRaw as e, toRaw as t } from "vue";
//#region src/components/Filters/filters.ts
var n = {
	text: [
		{
			value: "contains",
			label: "содержит"
		},
		{
			value: "not_contains",
			label: "не содержит"
		},
		{
			value: "is",
			label: "равно"
		},
		{
			value: "is_not",
			label: "не равно"
		}
	],
	select: [{
		value: "is",
		label: "равно"
	}, {
		value: "is_not",
		label: "не равно"
	}],
	multiselect: [
		{
			value: "is_any_of",
			label: "любое из"
		},
		{
			value: "is_all_of",
			label: "все из"
		},
		{
			value: "is_none_of",
			label: "ни одно из"
		}
	],
	date: [
		{
			value: "is",
			label: "в дату"
		},
		{
			value: "on_or_after",
			label: "начиная с"
		},
		{
			value: "on_or_before",
			label: "до даты"
		}
	],
	custom: [{
		value: "is",
		label: "равно"
	}, {
		value: "is_not",
		label: "не равно"
	}]
}, r = 0, i = (e, t) => Object.is(e, t), a = (n) => n ? e(t(n)) : void 0, o = (e, t) => t ? [t.value] : Array.isArray(e.defaultValue) ? [...e.defaultValue] : e.defaultValue === void 0 ? [] : [e.defaultValue], s = () => globalThis.crypto !== void 0 && typeof globalThis.crypto.randomUUID == "function" ? globalThis.crypto.randomUUID() : (r += 1, `filter-${Date.now()}-${r}`), c = (e) => e.operators?.length ? e.operators : n[e.type ?? "text"], l = (e, t, n = s()) => {
	let r = c(e);
	return {
		id: n,
		field: e.key,
		operator: e.defaultOperator ?? r[0]?.value ?? "is",
		values: o(e, t)
	};
}, u = (e, t, n = i) => {
	let r = e.findIndex((e) => n(e, t));
	return r === -1 ? [...e, t] : e.filter((e, t) => t !== r);
}, d = (e, t) => {
	let n = new Map(t.map((e) => [e.key, e])), r = [], i = /* @__PURE__ */ new Map();
	return e.forEach((e) => {
		let t = n.get(e.field);
		if (!t) {
			r.push(e);
			return;
		}
		let a = i.get(e.field);
		if (!a) {
			let t = {
				...e,
				values: [...e.values]
			};
			i.set(e.field, t), r.push(t);
			return;
		}
		if (a.operator = e.operator, t.type !== "multiselect") {
			a.values = [...e.values];
			return;
		}
		e.values.forEach((e) => {
			a.values.some((t) => Object.is(t, e)) || a.values.push(e);
		});
	}), r;
}, f = (e, t, n = i) => e.some((e) => n(e, t)), p = (e, t, n = "выбрано") => {
	let r = t.options ?? [], a = t.formatValue?.(e.values, r);
	if (a) return a;
	if (e.values.length === 0) return t.valuePlaceholder ?? t.placeholder ?? "Выберите значение";
	let o = e.values.map((e) => r.find((n) => (t.isValueEqual ?? i)(n.value, e))?.label ?? String(e));
	return o.length === 1 ? o[0] ?? "" : `${o.length} ${n}`;
}, m = (e, t) => {
	let n = t.trim().toLocaleLowerCase();
	return n ? e.filter((e) => e.label.toLocaleLowerCase().includes(n)) : e;
}, h = (e, t) => {
	let n = t.trim().toLocaleLowerCase();
	return n ? e.filter((e) => [e.label, ...e.keywords ?? []].join(" ").toLocaleLowerCase().includes(n)) : e;
};
//#endregion
export { p as a, f as c, h as i, a as l, s as n, c as o, m as r, d as s, l as t, u };
