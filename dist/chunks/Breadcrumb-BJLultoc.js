import { createElementBlock as e, defineComponent as t, mergeProps as n, openBlock as r, renderSlot as i } from "vue";
//#region src/components/Breadcrumb/Breadcrumb.vue?vue&type=script&setup=true&lang.ts
var a = ["aria-label"], o = /* @__PURE__ */ t({
	inheritAttrs: !1,
	__name: "Breadcrumb",
	props: { label: { default: "breadcrumb" } },
	setup(t) {
		let o = t;
		return (t, s) => (r(), e("nav", n(t.$attrs, { "aria-label": o.label }), [i(t.$slots, "default")], 16, a));
	}
});
//#endregion
export { o as default };
