import { t as e } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { n as t, t as n } from "./context-CKHbCX99.js";
import { computed as r, createCommentVNode as i, createElementBlock as a, defineComponent as o, inject as s, normalizeClass as c, openBlock as l, provide as u, renderSlot as d, unref as f } from "vue";
import '../assets/FileUploadList-BSoHGq_l.css';//#region src/components/FileUpload/FileUploadList.vue?vue&type=script&setup=true&lang.ts
var p = ["data-orientation"], m = /*#__PURE__*/ e(/* @__PURE__ */ o({
	__name: "FileUploadList",
	props: { orientation: { default: "vertical" } },
	setup(e) {
		let o = e, m = s(n);
		if (m === void 0) throw Error("FileUploadList must be used inside FileUpload");
		let h = r(() => o.orientation);
		return u(t, h), (e, t) => f(m).files.value.length > 0 ? (l(), a("div", {
			key: 0,
			class: c(["file-upload-list", h.value]),
			"data-orientation": h.value,
			role: "list"
		}, [d(e.$slots, "default", { files: f(m).files.value }, void 0, !0)], 10, p)) : i("", !0);
	}
}), [["__scopeId", "data-v-67cbe516"]]);
//#endregion
export { m as default };
