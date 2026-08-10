import { o as e } from "./floating-ui.vue-CE68TKCX.js";
import { n as t } from "./context-Djnh7ZxD.js";
import { t as n } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { computed as r, createBlock as i, createCommentVNode as a, defineComponent as o, mergeProps as s, openBlock as c, renderSlot as l, resolveDynamicComponent as u, unref as d, useSlots as f } from "vue";
import '../assets/Skeleton-h0RKSE1E.css';//#region src/components/Skeleton/Skeleton.vue?vue&type=script&setup=true&lang.ts
var p = /*@__PURE__*/ o({
	__name: "Skeleton",
	props: {
		Element: { default: "div" },
		loading: { type: Boolean },
		animated: {
			type: Boolean,
			default: !0
		},
		width: { default: "100%" },
		height: { default: "20px" },
		radius: { default: "8px" },
		circle: { type: Boolean }
	},
	setup(e) {
		let n = e, o = f(), p = t(() => n.loading), m = r(() => ({
			"--skeleton-width": n.width,
			"--skeleton-height": n.height,
			"--skeleton-radius": n.circle ? "999px" : n.radius
		}));
		return (e, t) => d(p) ? (c(), i(u(n.Element), s({ key: 0 }, e.$attrs, {
			class: ["skeleton", { animated: n.animated }],
			style: m.value,
			"aria-hidden": "true"
		}), null, 16, ["class", "style"])) : d(o).default ? l(e.$slots, "default", {}, void 0, !0, 1) : a("", !0);
	}
}), m = /* @__PURE__ */ e({ default: () => h }), h = /*#__PURE__*/ n(p, [["__scopeId", "data-v-35c2c53e"]]);
//#endregion
export { m as n, h as t };
