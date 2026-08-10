import { t as e } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { t } from "./AsChild-CshKkIhp.js";
import { t as n } from "./context-B_FpNEFp.js";
import { computed as r, createBlock as i, defineComponent as a, inject as o, mergeProps as s, openBlock as c, renderSlot as l, resolveDynamicComponent as u, unref as d, withCtx as f } from "vue";
import '../assets/NavigationMenuLink-CwvSfoXI.css';//#endregion
//#region src/components/NavigationMenu/NavigationMenuLink.vue
var p = /*#__PURE__*/ e(/* @__PURE__ */ a({
	inheritAttrs: !1,
	__name: "NavigationMenuLink",
	props: {
		active: {
			type: Boolean,
			default: !1
		},
		asChild: {
			type: Boolean,
			default: !1
		},
		closeOnSelect: {
			type: Boolean,
			default: !0
		},
		disabled: {
			type: Boolean,
			default: !1
		},
		Element: { default: "a" },
		rounded: {
			type: Boolean,
			default: !1
		},
		size: { default: "medium" }
	},
	setup(e) {
		let a = e, p = o(n);
		if (!p) throw Error("NavigationMenuLink must be used inside NavigationMenu");
		let m = r(() => ({
			"aria-current": a.active ? "page" : void 0,
			"aria-disabled": a.disabled || void 0,
			"data-navigation-menu-focusable": "",
			disabled: a.disabled && (a.Element === "button" || a.asChild) ? !0 : void 0,
			tabindex: a.disabled ? -1 : void 0
		})), h = (e) => {
			if (a.disabled) {
				e.preventDefault();
				return;
			}
			a.closeOnSelect && p.close();
		};
		return (e, n) => a.asChild ? (c(), i(d(t), s({ key: 0 }, {
			...e.$attrs,
			...m.value
		}, {
			class: [
				"navigation-menu-link",
				a.size,
				{ rounded: a.rounded }
			],
			"data-active": a.active || void 0,
			onClick: h
		}), {
			default: f(() => [l(e.$slots, "default", {}, void 0, !0)]),
			_: 3
		}, 16, ["class", "data-active"])) : (c(), i(u(a.Element), s({ key: 1 }, {
			...e.$attrs,
			...m.value
		}, {
			class: [
				"navigation-menu-link",
				a.size,
				{ rounded: a.rounded }
			],
			"data-active": a.active || void 0,
			onClick: h
		}), {
			default: f(() => [l(e.$slots, "default", {}, void 0, !0)]),
			_: 3
		}, 16, ["class", "data-active"]));
	}
}), [["__scopeId", "data-v-ce5c6a1a"]]);
//#endregion
export { p as default };
