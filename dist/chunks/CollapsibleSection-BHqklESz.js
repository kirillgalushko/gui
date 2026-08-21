import { t as e } from "./useCollapse-B8T5jAax.js";
import { t } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { E as n } from "./gui-icons.es-B9g1VPOq.js";
import { t as r } from "./Collapse-D8zxHDk9.js";
import { computed as i, createElementBlock as a, createElementVNode as o, createVNode as s, defineComponent as c, mergeProps as l, openBlock as u, ref as d, renderSlot as f, toDisplayString as p, unref as m, withCtx as h } from "vue";
import '../assets/CollapsibleSection-DRWIE-9d.css';//#region src/components/CollapsibleSection/CollapsibleSection.vue?vue&type=script&setup=true&lang.ts
var g = ["data-disabled", "data-state"], _ = ["disabled"], v = { class: "collapsible-section-heading" }, y = {
	class: "collapsible-section-icon",
	"aria-hidden": "true"
}, b = { class: "collapsible-section-content" }, x = /*#__PURE__*/ t(/* @__PURE__ */ c({
	__name: "CollapsibleSection",
	props: {
		defaultOpened: {
			type: Boolean,
			default: !0
		},
		disabled: {
			type: Boolean,
			default: !1
		},
		modelValue: {
			type: Boolean,
			default: void 0
		},
		title: {}
	},
	emits: ["change", "update:modelValue"],
	setup(t, { emit: c }) {
		let x = t, S = c, C = d(x.defaultOpened), w = i({
			get: () => x.modelValue ?? C.value,
			set: (e) => {
				x.modelValue === void 0 && (C.value = e), S("update:modelValue", e), S("change", e);
			}
		}), { collapseProps: T, opened: E, triggerProps: D } = e({
			disabled: i(() => x.disabled),
			opened: w
		});
		return (e, t) => (u(), a("div", {
			class: "collapsible-section",
			"data-disabled": x.disabled || void 0,
			"data-state": m(E) ? "open" : "closed"
		}, [o("button", l(m(D), {
			class: "collapsible-section-trigger",
			type: "button",
			disabled: x.disabled
		}), [o("span", v, [o("span", y, [f(e.$slots, "icon", {}, void 0, !0)]), o("span", null, p(x.title), 1)]), s(m(n), {
			class: "collapsible-section-chevron",
			"aria-hidden": "true"
		})], 16, _), s(r, l(m(T), { duration: 200 }), {
			default: h(() => [o("div", b, [f(e.$slots, "default", {}, void 0, !0)])]),
			_: 3
		}, 16)], 8, g));
	}
}), [["__scopeId", "data-v-4c51a51f"]]);
//#endregion
export { x as default };
