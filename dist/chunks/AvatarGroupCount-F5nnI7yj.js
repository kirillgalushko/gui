import { t as e } from "./Avatar-Dnzd2bXB.js";
import { computed as t, createBlock as n, createTextVNode as r, defineComponent as i, openBlock as a, renderSlot as o, toDisplayString as s, withCtx as c } from "vue";
//#endregion
//#region src/components/Avatar/AvatarGroupCount.vue
var l = /* @__PURE__ */ i({
	__name: "AvatarGroupCount",
	props: {
		ariaLabel: {},
		color: {},
		count: {},
		mode: { default: "secondary" },
		shape: {},
		size: {}
	},
	setup(i) {
		let l = i, u = t(() => l.ariaLabel ?? `Ещё участников: ${l.count}`);
		return (t, i) => (a(), n(e, {
			"aria-label": u.value,
			color: l.color,
			mode: l.mode,
			shape: l.shape,
			size: l.size
		}, {
			default: c(() => [o(t.$slots, "default", {}, () => [r("+" + s(l.count), 1)])]),
			_: 3
		}, 8, [
			"aria-label",
			"color",
			"mode",
			"shape",
			"size"
		]));
	}
});
//#endregion
export { l as default };
