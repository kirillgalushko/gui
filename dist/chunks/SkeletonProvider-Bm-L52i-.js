import { t as e } from "./context-Djnh7ZxD.js";
import { defineComponent as t, renderSlot as n, unref as r } from "vue";
//#endregion
//#region src/components/Skeleton/SkeletonProvider.vue
var i = /* @__PURE__ */ t({
	__name: "SkeletonProvider",
	props: { loading: {
		type: Boolean,
		default: !0
	} },
	setup(t) {
		let i = t, a = e(() => i.loading);
		return (e, t) => n(e.$slots, "default", { loading: r(a) });
	}
});
//#endregion
export { i as default };
