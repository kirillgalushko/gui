import { t as e } from "./Button-CeAG6Psa.js";
import { t } from "./context-CKHbCX99.js";
import { createBlock as n, createCommentVNode as r, createTextVNode as i, defineComponent as a, inject as o, openBlock as s, renderSlot as c, toDisplayString as l, unref as u, withCtx as d } from "vue";
//#endregion
//#region src/components/FileUpload/FileUploadClear.vue
var f = /* @__PURE__ */ a({
	__name: "FileUploadClear",
	props: { label: { default: "Очистить" } },
	setup(a) {
		let f = a, p = o(t);
		if (p === void 0) throw Error("FileUploadClear must be used inside FileUpload");
		return (t, a) => u(p).files.value.length > 0 ? (s(), n(e, {
			key: 0,
			type: "button",
			mode: "ghost",
			size: "small",
			disabled: u(p).disabled.value,
			onClick: u(p).clear
		}, {
			default: d(() => [c(t.$slots, "default", {}, () => [i(l(f.label), 1)])]),
			_: 3
		}, 8, ["disabled", "onClick"])) : r("", !0);
	}
});
//#endregion
export { f as default };
