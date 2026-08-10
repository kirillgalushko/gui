import { n as e } from "./context-Djnh7ZxD.js";
import { t } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { t as n } from "./Skeleton-273enNa5.js";
import { t as r } from "./ButtonSkeleton-BEs4epBQ.js";
import { Fragment as i, computed as a, createBlock as o, createCommentVNode as s, createElementBlock as c, createVNode as l, defineComponent as u, openBlock as d, renderList as f, renderSlot as p, unref as m } from "vue";
import '../assets/FormSkeleton-BaSXbKRD.css';//#region src/components/Skeleton/FormSkeleton.vue?vue&type=script&setup=true&lang.ts
var h = {
	key: 0,
	class: "form-skeleton",
	"aria-hidden": "true"
}, g = /*#__PURE__*/ t(/* @__PURE__ */ u({
	__name: "FormSkeleton",
	props: {
		loading: { type: Boolean },
		fields: { default: 3 },
		button: {
			type: Boolean,
			default: !0
		}
	},
	setup(t) {
		let u = t, g = e(() => u.loading), _ = a(() => Array.from({ length: u.fields }, (e, t) => t));
		return (e, t) => m(g) ? (d(), c("div", h, [(d(!0), c(i, null, f(_.value, (e) => (d(), c("div", {
			key: e,
			class: "form-skeleton-field"
		}, [l(n, {
			width: "96px",
			height: "16px",
			radius: "6px"
		}), l(n, {
			height: "40px",
			radius: "10px"
		})]))), 128)), u.button ? (d(), o(r, {
			key: 0,
			width: "128px"
		})) : s("", !0)])) : p(e.$slots, "default", {}, void 0, !0, 1);
	}
}), [["__scopeId", "data-v-da386b99"]]);
//#endregion
export { g as default };
