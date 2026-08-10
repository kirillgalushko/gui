import { t as e } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { createBlock as t, defineComponent as n, mergeProps as r, openBlock as i, renderSlot as a, resolveDynamicComponent as o, withCtx as s } from "vue";
import '../assets/BreadcrumbLink-N3Bao6ox.css';//#endregion
//#region src/components/Breadcrumb/BreadcrumbLink.vue
var c = /*#__PURE__*/ e(/* @__PURE__ */ n({
	inheritAttrs: !1,
	__name: "BreadcrumbLink",
	props: { Element: { default: "a" } },
	setup(e) {
		let n = e;
		return (e, c) => (i(), t(o(n.Element), r(e.$attrs, { class: "breadcrumb-link" }), {
			default: s(() => [a(e.$slots, "default", {}, void 0, !0)]),
			_: 3
		}, 16));
	}
}), [["__scopeId", "data-v-c4a5ba29"]]);
//#endregion
export { c as default };
