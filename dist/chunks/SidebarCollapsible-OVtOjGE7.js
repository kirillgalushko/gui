import { t as e } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { T as t } from "./gui-icons.es-5O8QlDZJ.js";
import { t as n } from "./Dropdown-88Rw7P0I.js";
import { t as r } from "./SidebarItem-BKw1Lqjq.js";
import { computed as i, createBlock as a, createElementBlock as o, createElementVNode as s, createTextVNode as c, createVNode as l, defineComponent as u, inject as d, openBlock as f, ref as p, renderSlot as m, toDisplayString as h, toRef as g, toValue as _, unref as v, withCtx as y } from "vue";
import '../assets/SidebarCollapsible-MbJNL048.css';//#region src/components/Sidebar/useSidebarCollapsible.ts
var b = (e = {}) => {
	let t = p(_(e.defaultOpened ?? !1)), n = i(() => _(e.modelValue) ?? t.value);
	return {
		opened: n,
		toggle: () => {
			if (_(e.disabled ?? !1)) return;
			let r = !n.value;
			_(e.modelValue) === void 0 && (t.value = r), e.onChange?.(r);
		}
	};
}, x = { class: "sidebar-collapsible__popover" }, S = { class: "sidebar-collapsible__popover-title" }, C = ["data-disabled", "data-state"], w = ["aria-hidden"], T = { class: "sidebar-collapsible__content-clip" }, E = /*#__PURE__*/ e(/* @__PURE__ */ u({
	__name: "SidebarCollapsible",
	props: {
		defaultOpened: {
			type: Boolean,
			default: !1
		},
		disabled: {
			type: Boolean,
			default: !1
		},
		label: {},
		modelValue: {
			type: Boolean,
			default: void 0
		},
		selected: {
			type: Boolean,
			default: !1
		}
	},
	emits: ["change", "update:modelValue"],
	setup(e, { emit: u }) {
		let _ = e, E = u, D = d("sidebar-is-compact", p(!1)), { opened: O, toggle: k } = b({
			defaultOpened: g(_, "defaultOpened"),
			disabled: g(_, "disabled"),
			modelValue: g(_, "modelValue"),
			onChange: (e) => {
				E("update:modelValue", e), E("change", e);
			}
		}), A = i(() => O.value ? "open" : "closed");
		return (e, i) => v(D) ? (f(), a(n, {
			key: 0,
			stretched: "",
			placement: "right-start",
			"content-width": "extra-small",
			"content-padding": "none",
			"popper-hide-triggers": ["click"]
		}, {
			popper: y(() => [s("div", x, [s("div", S, h(_.label), 1), m(e.$slots, "default", {}, void 0, !0)])]),
			default: y(() => [l(r, {
				selected: _.selected,
				"tooltip-disabled": "",
				"aria-label": _.label,
				disabled: _.disabled
			}, {
				left: y(() => [m(e.$slots, "icon", {}, void 0, !0)]),
				_: 3
			}, 8, [
				"selected",
				"aria-label",
				"disabled"
			])]),
			_: 3
		})) : (f(), o("div", {
			key: 1,
			class: "sidebar-collapsible",
			"data-disabled": _.disabled || void 0,
			"data-state": A.value
		}, [l(r, {
			selected: _.selected,
			"aria-expanded": v(O),
			disabled: _.disabled,
			onClick: v(k)
		}, {
			left: y(() => [m(e.$slots, "icon", {}, void 0, !0)]),
			right: y(() => [l(v(t), {
				class: "sidebar-collapsible__chevron",
				"aria-hidden": "true"
			})]),
			default: y(() => [c(" " + h(_.label) + " ", 1)]),
			_: 3
		}, 8, [
			"selected",
			"aria-expanded",
			"disabled",
			"onClick"
		]), s("div", {
			class: "sidebar-collapsible__content",
			"aria-hidden": !v(O)
		}, [s("div", T, [m(e.$slots, "default", {}, void 0, !0)])], 8, w)], 8, C));
	}
}), [["__scopeId", "data-v-32b704a7"]]);
//#endregion
export { E as default };
