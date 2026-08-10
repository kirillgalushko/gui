import { o as e } from "./floating-ui.vue-CE68TKCX.js";
import { t } from "./Skeleton-273enNa5.js";
import { createBlock as n, defineComponent as r, openBlock as i, renderSlot as a, withCtx as o } from "vue";
//#region src/components/Skeleton/AvatarSkeleton.vue?vue&type=script&setup=true&lang.ts
var s = /*@__PURE__*/ r({
	__name: "AvatarSkeleton",
	props: {
		loading: { type: Boolean },
		size: { default: "40px" },
		shape: { default: "circle" }
	},
	setup(e) {
		let r = e;
		return (e, s) => (i(), n(t, {
			loading: r.loading,
			width: r.size,
			height: r.size,
			radius: r.shape === "square" ? `calc(${r.size} / 4)` : "999px"
		}, {
			default: o(() => [a(e.$slots, "default")]),
			_: 3
		}, 8, [
			"loading",
			"width",
			"height",
			"radius"
		]));
	}
}), c = /* @__PURE__ */ e({ default: () => l }), l = s;
//#endregion
export { c as n, l as t };
