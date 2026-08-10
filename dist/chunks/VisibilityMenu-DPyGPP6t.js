import { l as e } from "./filters-B7YbzXBe.js";
import { b as t } from "./gui-icons.es-5O8QlDZJ.js";
import { t as n } from "./Button-CeAG6Psa.js";
import { t as r } from "./Dropdown-88Rw7P0I.js";
import { t as i } from "./DropdownCheckboxItem-BgcHAKae.js";
import { t as a } from "./DropdownGroup-DRm7UzYq.js";
import { Fragment as o, computed as s, createBlock as c, createCommentVNode as l, createElementBlock as u, createElementVNode as d, createTextVNode as f, createVNode as p, defineComponent as m, mergeModels as h, openBlock as g, renderList as _, renderSlot as v, resolveDynamicComponent as y, toDisplayString as b, unref as x, useModel as S, withCtx as C } from "vue";
//#endregion
//#region src/components/Filters/VisibilityMenu.vue
var w = /* @__PURE__ */ m({
	__name: "VisibilityMenu",
	props: /*@__PURE__*/ h({
		items: {},
		label: { default: "Колонки" },
		menuLabel: { default: "Показывать колонки" },
		minVisible: { default: 1 },
		disabled: { type: Boolean },
		contentWidth: { default: "auto" },
		contentMaxWidth: {},
		size: { default: "medium" },
		mode: { default: "outline" }
	}, {
		modelValue: { default: () => [] },
		modelModifiers: {}
	}),
	emits: /*@__PURE__*/ h(["toggle"], ["update:modelValue"]),
	setup(m, { emit: h }) {
		let w = m, T = S(m, "modelValue"), E = h, D = s(() => new Set(T.value)), O = (e) => D.value.has(e), k = (e) => !!w.disabled || !!e.disabled || O(e.value) && T.value.length <= w.minVisible, A = (e) => {
			if (k(e)) return;
			let t = !O(e.value);
			T.value = t ? [...T.value, e.value] : T.value.filter((t) => t !== e.value), E("toggle", e.value, t);
		};
		return (s, m) => (g(), c(r, {
			"content-width": w.contentWidth,
			"content-max-width": w.contentMaxWidth
		}, {
			popper: C(() => [p(a, { "aria-label": w.menuLabel }, {
				default: C(() => [(g(!0), u(o, null, _(w.items, (t) => (g(), c(i, {
					key: t.value,
					disabled: k(t),
					"model-value": O(t.value),
					"onUpdate:modelValue": (e) => A(t)
				}, {
					default: C(() => [v(s.$slots, "item", {
						item: t,
						visible: O(t.value)
					}, () => [t.icon ? (g(), c(y(x(e)(t.icon)), { key: 0 })) : l("", !0), d("span", null, b(t.label), 1)])]),
					_: 2
				}, 1032, [
					"disabled",
					"model-value",
					"onUpdate:modelValue"
				]))), 128))]),
				_: 3
			}, 8, ["aria-label"])]),
			default: C(() => [v(s.$slots, "trigger", { label: w.label }, () => [p(n, {
				size: w.size,
				mode: w.mode,
				disabled: w.disabled
			}, {
				default: C(() => [p(x(t)), f(" " + b(w.label), 1)]),
				_: 1
			}, 8, [
				"size",
				"mode",
				"disabled"
			])])]),
			_: 3
		}, 8, ["content-width", "content-max-width"]));
	}
});
//#endregion
export { w as default };
