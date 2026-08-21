import { t as e } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { E as t } from "./gui-icons.es-B9g1VPOq.js";
import { n, t as r } from "./context-B_FpNEFp.js";
import { createElementBlock as i, createElementVNode as a, createVNode as o, defineComponent as s, inject as c, nextTick as l, onBeforeUnmount as u, onMounted as d, openBlock as f, ref as p, renderSlot as m, unref as h } from "vue";
import '../assets/NavigationMenuTrigger-C9G3VdjU.css';//#region src/components/NavigationMenu/NavigationMenuTrigger.vue?vue&type=script&setup=true&lang.ts
var g = [
	"id",
	"aria-controls",
	"aria-expanded",
	"data-state",
	"disabled"
], _ = { class: "navigation-menu-trigger-content" }, v = /*#__PURE__*/ e(/* @__PURE__ */ s({
	__name: "NavigationMenuTrigger",
	setup(e) {
		let s = c(r), v = c(n);
		if (!s || !v) throw Error("NavigationMenuTrigger must be used inside NavigationMenuItem");
		let y = p(null), b = () => {
			l(() => {
				document.getElementById(v.contentId)?.focus();
			});
		}, x = (e) => {
			[
				"ArrowDown",
				"Enter",
				" "
			].includes(e.key) && (e.preventDefault(), s.open(v.value), b());
		};
		return d(() => {
			v.triggerRef.value = y.value, s.registerTrigger(v.value, y.value);
		}), u(() => {
			v.triggerRef.value = null, s.registerTrigger(v.value, null);
		}), (e, n) => (f(), i("button", {
			id: h(v).triggerId,
			ref_key: "triggerRef",
			ref: y,
			class: "navigation-menu-trigger",
			type: "button",
			"data-navigation-menu-focusable": "",
			"aria-controls": h(v).contentId,
			"aria-expanded": h(v).isOpen.value,
			"aria-haspopup": "true",
			"data-state": h(v).isOpen.value ? "open" : "closed",
			disabled: h(v).disabled.value,
			onClick: n[0] ||= (e) => h(s).toggle(h(v).value),
			onKeydown: x
		}, [a("span", _, [m(e.$slots, "default", {}, void 0, !0)]), o(h(t), {
			class: "navigation-menu-trigger-icon",
			"aria-hidden": "true"
		})], 40, g));
	}
}), [["__scopeId", "data-v-d1a39b41"]]);
//#endregion
export { v as default };
