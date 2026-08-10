import { o as e } from "./floating-ui.vue-CE68TKCX.js";
import { t } from "./Skeleton-273enNa5.js";
import { computed as n, createBlock as r, defineComponent as i, openBlock as a, renderSlot as o, withCtx as s } from "vue";
//#region src/components/Skeleton/ButtonSkeleton.vue?vue&type=script&setup=true&lang.ts
var c = /*@__PURE__*/ i({
	__name: "ButtonSkeleton",
	props: {
		loading: { type: Boolean },
		size: { default: "large" },
		width: { default: "96px" },
		stretched: { type: Boolean },
		squared: { type: Boolean },
		rounded: { type: Boolean }
	},
	setup(e) {
		let i = e, c = {
			"extra-small": {
				height: "24px",
				radius: "8px"
			},
			small: {
				height: "32px",
				radius: "8px"
			},
			medium: {
				height: "36px",
				radius: "10px"
			},
			large: {
				height: "40px",
				radius: "10px"
			}
		}, l = n(() => i.stretched ? "100%" : i.squared ? c[i.size].height : i.width), u = n(() => i.rounded ? "999px" : c[i.size].radius);
		return (e, n) => (a(), r(t, {
			loading: i.loading,
			width: l.value,
			height: c[i.size].height,
			radius: u.value
		}, {
			default: s(() => [o(e.$slots, "default")]),
			_: 3
		}, 8, [
			"loading",
			"width",
			"height",
			"radius"
		]));
	}
}), l = /* @__PURE__ */ e({ default: () => u }), u = c;
//#endregion
export { l as n, u as t };
