import { A as e, j as t, k as n } from "./gui-icons.es-B9g1VPOq.js";
import { t as r } from "./Button-CeAG6Psa.js";
import { t as i } from "./Dropdown-C01ij_R6.js";
import { t as a } from "./DropdownGroup-DRm7UzYq.js";
import { t as o } from "./DropdownLabel-DBbTwyXj.js";
import { t as s } from "./DropdownRadioGroup-Ct0NCms9.js";
import { t as c } from "./DropdownRadioItem-CN8FrE6F.js";
import { t as l } from "./DropdownSeparator-BqPPwieV.js";
import { Fragment as u, computed as d, createBlock as f, createElementBlock as p, createTextVNode as m, createVNode as h, defineComponent as g, mergeModels as _, openBlock as v, renderList as y, renderSlot as b, toDisplayString as x, unref as S, useModel as C, withCtx as w } from "vue";
//#endregion
//#region src/components/Filters/SortMenu.vue
var T = /* @__PURE__ */ g({
	__name: "SortMenu",
	props: /*@__PURE__*/ _({
		options: {},
		label: { default: "Сортировка" },
		fieldLabel: { default: "Сортировать по" },
		orderLabel: { default: "Порядок" },
		ascendingLabel: { default: "По возрастанию" },
		descendingLabel: { default: "По убыванию" },
		disabled: { type: Boolean },
		contentWidth: { default: "small" },
		contentMaxWidth: {},
		size: { default: "medium" },
		mode: { default: "outline" }
	}, {
		modelValue: { required: !0 },
		modelModifiers: {}
	}),
	emits: ["update:modelValue"],
	setup(g) {
		let _ = g, T = C(g, "modelValue"), E = d(() => _.options.find((e) => e.value === T.value.value)), D = (e) => {
			if (typeof e != "string") return;
			let t = _.options.find((t) => t.value === e);
			t === void 0 || t.disabled || t.value === T.value.value || (T.value = {
				value: t.value,
				order: t.defaultOrder ?? T.value.order
			});
		}, O = (e) => {
			(e === "asc" || e === "desc") && (T.value = {
				...T.value,
				order: e
			});
		};
		return (d, g) => (v(), f(i, {
			"content-width": _.contentWidth,
			"content-max-width": _.contentMaxWidth
		}, {
			popper: w(() => [
				h(a, { "aria-label": _.fieldLabel }, {
					default: w(() => [h(o, null, {
						default: w(() => [m(x(_.fieldLabel), 1)]),
						_: 1
					}), h(s, {
						"model-value": T.value.value,
						disabled: _.disabled,
						"onUpdate:modelValue": D
					}, {
						default: w(() => [(v(!0), p(u, null, y(_.options, (e) => (v(), f(c, {
							key: e.value,
							value: e.value,
							disabled: e.disabled
						}, {
							default: w(() => [b(d.$slots, "option", {
								option: e,
								selected: e.value === T.value.value
							}, () => [m(x(e.label), 1)])]),
							_: 2
						}, 1032, ["value", "disabled"]))), 128))]),
						_: 3
					}, 8, ["model-value", "disabled"])]),
					_: 3
				}, 8, ["aria-label"]),
				h(l),
				h(a, { "aria-label": _.orderLabel }, {
					default: w(() => [h(o, null, {
						default: w(() => [m(x(_.orderLabel), 1)]),
						_: 1
					}), h(s, {
						"model-value": T.value.order,
						disabled: _.disabled,
						"onUpdate:modelValue": O
					}, {
						default: w(() => [h(c, { value: "asc" }, {
							default: w(() => [h(S(e)), m(" " + x(_.ascendingLabel), 1)]),
							_: 1
						}), h(c, { value: "desc" }, {
							default: w(() => [h(S(t)), m(" " + x(_.descendingLabel), 1)]),
							_: 1
						})]),
						_: 1
					}, 8, ["model-value", "disabled"])]),
					_: 1
				}, 8, ["aria-label"])
			]),
			default: w(() => [b(d.$slots, "trigger", {
				label: _.label,
				sort: T.value,
				option: E.value
			}, () => [h(r, {
				size: _.size,
				mode: _.mode,
				disabled: _.disabled
			}, {
				default: w(() => [h(S(n)), m(" " + x(_.label), 1)]),
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
export { T as default };
