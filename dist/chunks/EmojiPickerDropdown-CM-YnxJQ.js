import { t as e } from "./Dropdown-C01ij_R6.js";
import { t } from "./EmojiPicker-C3ikhndT.js";
import { computed as n, createBlock as r, createVNode as i, defineComponent as a, mergeProps as o, openBlock as s, ref as c, renderSlot as l, watch as u, withCtx as d } from "vue";
//#endregion
//#region src/components/EmojiPicker/EmojiPickerDropdown.vue
var f = /* @__PURE__ */ a({
	inheritAttrs: !1,
	__name: "EmojiPickerDropdown",
	props: {
		shown: { type: Boolean },
		disabled: { type: Boolean },
		closeOnSelect: {
			type: Boolean,
			default: !0
		},
		size: { default: "large" },
		categories: {},
		placeholder: {},
		emptyLabel: {},
		ariaLabel: {},
		maxHeight: {}
	},
	emits: [
		"select",
		"select-emoji",
		"update:shown"
	],
	setup(a, { emit: f }) {
		let p = a, m = f, h = c(!1), g = n(() => p.size === "small" ? "extra-small" : p.size === "medium" ? "small" : "medium"), _ = n({
			get: () => p.shown ?? h.value,
			set: (e) => {
				h.value = e, m("update:shown", e);
			}
		}), v = (e) => {
			p.disabled || (m("select", e), p.closeOnSelect && (_.value = !1));
		};
		return u(() => p.disabled, (e) => {
			e && (_.value = !1);
		}), (n, a) => (s(), r(e, o(n.$attrs, {
			shown: _.value,
			"onUpdate:shown": a[1] ||= (e) => _.value = e,
			triggers: p.disabled ? [] : void 0,
			"content-width": g.value,
			"content-padding": "none",
			placement: "bottom-start",
			distance: 8
		}), {
			popper: d(() => [i(t, {
				size: p.size,
				categories: p.categories,
				placeholder: p.placeholder,
				"empty-label": p.emptyLabel,
				"aria-label": p.ariaLabel,
				"max-height": p.maxHeight,
				onSelect: v,
				onSelectEmoji: a[0] ||= (e) => m("select-emoji", e)
			}, null, 8, [
				"size",
				"categories",
				"placeholder",
				"empty-label",
				"aria-label",
				"max-height"
			])]),
			default: d(() => [l(n.$slots, "default")]),
			_: 3
		}, 16, [
			"shown",
			"triggers",
			"content-width"
		]));
	}
});
//#endregion
export { f as default };
