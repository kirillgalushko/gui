import { t as e } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { createElementBlock as t, defineComponent as n, normalizeClass as r, openBlock as i, renderSlot as a } from "vue";
import '../assets/AttachmentGroup-BKpf2RVd.css';//#region src/components/Attachment/AttachmentGroup.vue?vue&type=script&setup=true&lang.ts
var o = ["data-orientation"], s = /*#__PURE__*/ e(/* @__PURE__ */ n({
	__name: "AttachmentGroup",
	props: { orientation: { default: "vertical" } },
	setup(e) {
		let n = e;
		return (e, s) => (i(), t("div", {
			class: r(["attachment-group", n.orientation]),
			"data-orientation": n.orientation,
			role: "list"
		}, [a(e.$slots, "default", {}, void 0, !0)], 10, o));
	}
}), [["__scopeId", "data-v-857b5afd"]]);
//#endregion
export { s as default };
