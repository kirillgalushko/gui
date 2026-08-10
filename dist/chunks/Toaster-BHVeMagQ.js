import { t as e } from "./lib-B0py3RFN.js";
import { createBlock as t, defineComponent as n, mergeProps as r, openBlock as i, unref as a } from "vue";
import '../assets/Toaster-CqZ-BrfM.css';//#endregion
//#region src/components/Toaster/Toaster.vue
var o = /* @__PURE__ */ n({
	__name: "Toaster",
	props: {
		id: {},
		invert: { type: Boolean },
		theme: { default: "system" },
		position: { default: "bottom-center" },
		closeButtonPosition: {},
		hotkey: {},
		richColors: {
			type: Boolean,
			default: !0
		},
		expand: { type: Boolean },
		duration: {},
		gap: { default: 12 },
		visibleToasts: { default: 4 },
		closeButton: {
			type: Boolean,
			default: !0
		},
		toastOptions: {},
		class: {},
		style: {},
		offset: {},
		mobileOffset: {},
		dir: {},
		swipeDirections: {},
		icons: {},
		containerAriaLabel: {}
	},
	setup(n) {
		let o = n;
		return (n, s) => (i(), t(a(e), r(o, { class: "Toaster" }), null, 16));
	}
});
//#endregion
export { o as default };
