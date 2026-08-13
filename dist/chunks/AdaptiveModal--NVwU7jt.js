import { o as e } from "./floating-ui.vue-CE68TKCX.js";
import { t } from "./useViewportBreakpoint-tMpTVilx.js";
import { t as n } from "./Modal-BYis6Rjn.js";
import { t as r } from "./Sheet-D7QIs_um.js";
import { computed as i, createBlock as a, createSlots as o, defineComponent as s, mergeProps as c, openBlock as l, renderSlot as u, withCtx as d } from "vue";
//#region src/components/AdaptiveModal/AdaptiveModal.vue?vue&type=script&setup=true&lang.ts
var f = /*@__PURE__*/ s({
	__name: "AdaptiveModal",
	props: {
		isOpened: { type: Boolean },
		onClose: {},
		showCloseButton: {
			type: Boolean,
			default: !1
		},
		title: {},
		description: {},
		modalProps: {},
		sheetProps: {}
	},
	setup(e) {
		let s = e, f = t(), p = i(() => f.isMobile);
		return (e, t) => p.value ? (l(), a(r, c({ key: 0 }, s.sheetProps, {
			isOpened: s.isOpened,
			onClose: s.onClose,
			showCloseButton: s.showCloseButton,
			title: s.title,
			description: s.description,
			side: "bottom"
		}), o({
			default: d(() => [u(e.$slots, "default")]),
			_: 2
		}, [e.$slots.footer ? {
			name: "footer",
			fn: d(() => [u(e.$slots, "footer")]),
			key: "0"
		} : void 0]), 1040, [
			"isOpened",
			"onClose",
			"showCloseButton",
			"title",
			"description"
		])) : (l(), a(n, c({ key: 1 }, s.modalProps, {
			isOpened: s.isOpened,
			onClose: s.onClose,
			showCloseButton: s.showCloseButton,
			title: s.title,
			description: s.description
		}), o({
			default: d(() => [u(e.$slots, "default")]),
			_: 2
		}, [e.$slots.footer ? {
			name: "footer",
			fn: d(() => [u(e.$slots, "footer")]),
			key: "0"
		} : void 0]), 1040, [
			"isOpened",
			"onClose",
			"showCloseButton",
			"title",
			"description"
		]));
	}
}), p = /* @__PURE__ */ e({ default: () => m }), m = f;
//#endregion
export { p as n, m as t };
