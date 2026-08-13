import { t as e } from "./useViewportBreakpoint-tMpTVilx.js";
import { t } from "./Button-CeAG6Psa.js";
import { t as n } from "./Text-BiA0aMEo.js";
import { t as r } from "./AdaptiveModal--NVwU7jt.js";
import { t as i } from "./Stack-1RaHEufk.js";
import { computed as a, createBlock as o, createCommentVNode as s, createTextVNode as c, createVNode as l, defineComponent as u, openBlock as d, toDisplayString as f, unref as p, withCtx as m } from "vue";
//#endregion
//#region src/components/Confirm/Confirm.vue
var h = /* @__PURE__ */ u({
	__name: "Confirm",
	props: {
		title: {},
		description: {},
		isOpened: {},
		resolve: {},
		secondary: {},
		reject: {},
		confirmButtonText: {},
		secondaryButtonText: {},
		cancelButtonText: {}
	},
	setup(u) {
		let h = u, g = e(), _ = a(() => g.isMobile), v = a(() => !!p(h.secondaryButtonText) && !!h.secondary), y = () => h.secondary?.value();
		return (e, a) => (d(), o(r, {
			isOpened: h.isOpened.value,
			onClose: h.reject.value,
			title: h.title.value,
			showCloseButton: ""
		}, {
			footer: m(() => [l(i, {
				stretched: "",
				direction: _.value ? "column" : "row",
				justifyContent: "end",
				gap: 2
			}, {
				default: m(() => [
					l(t, {
						stretched: _.value,
						mode: "ghost",
						onClick: h.reject.value
					}, {
						default: m(() => [c(f(h.cancelButtonText), 1)]),
						_: 1
					}, 8, ["stretched", "onClick"]),
					v.value ? (d(), o(t, {
						key: 0,
						stretched: _.value,
						mode: "outline",
						onClick: y
					}, {
						default: m(() => [c(f(h.secondaryButtonText), 1)]),
						_: 1
					}, 8, ["stretched"])) : s("", !0),
					l(t, {
						stretched: _.value,
						mode: "contrast",
						onClick: h.resolve.value
					}, {
						default: m(() => [c(f(h.confirmButtonText), 1)]),
						_: 1
					}, 8, ["stretched", "onClick"])
				]),
				_: 1
			}, 8, ["direction"])]),
			default: m(() => [l(n, {
				typography: "paragraph-1",
				color: "secondary"
			}, {
				default: m(() => [c(f(h.description), 1)]),
				_: 1
			})]),
			_: 1
		}, 8, [
			"isOpened",
			"onClose",
			"title"
		]));
	}
});
//#endregion
export { h as default };
