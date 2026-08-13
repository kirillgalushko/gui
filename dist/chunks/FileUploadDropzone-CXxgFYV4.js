import { t as e } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { g as t } from "./gui-icons.es-5O8QlDZJ.js";
import { t as n } from "./Text-BiA0aMEo.js";
import { t as r } from "./Stack-1RaHEufk.js";
import { t as i } from "./context-CKHbCX99.js";
import { t as a } from "./FileUploadTrigger-COm1qdmx.js";
import { createElementBlock as o, createElementVNode as s, createTextVNode as c, createVNode as l, defineComponent as u, inject as d, openBlock as f, renderSlot as p, toDisplayString as m, unref as h, withCtx as g } from "vue";
import '../assets/FileUploadDropzone-C3znp6RG.css';//#region src/components/FileUpload/FileUploadDropzone.vue?vue&type=script&setup=true&lang.ts
var _ = [
	"tabindex",
	"aria-disabled",
	"data-disabled",
	"data-dragging",
	"data-invalid"
], v = {
	class: "file-upload-dropzone-icon",
	"aria-hidden": "true"
}, y = /*#__PURE__*/ e(/* @__PURE__ */ u({
	__name: "FileUploadDropzone",
	props: {
		description: { default: "Или выберите файлы с устройства" },
		title: { default: "Перетащите файлы сюда" },
		triggerLabel: { default: "Выбрать файлы" }
	},
	setup(e) {
		let u = e, y = d(i);
		if (y === void 0) throw Error("FileUploadDropzone must be used inside FileUpload");
		let b = (e) => {
			!y.disabled.value && e.dataTransfer?.types.includes("Files") && (e.preventDefault(), y.isDragging.value = !0);
		}, x = (e) => {
			(e.relatedTarget === null || !e.currentTarget.contains(e.relatedTarget)) && (y.isDragging.value = !1);
		}, S = (e) => {
			y.disabled.value || (e.preventDefault(), y.isDragging.value = !1, y.addFiles(Array.from(e.dataTransfer?.files ?? [])));
		}, C = (e) => {
			(e.key === "Enter" || e.key === " ") && (e.preventDefault(), y.open());
		};
		return (e, i) => (f(), o("div", {
			class: "file-upload-dropzone",
			role: "button",
			tabindex: h(y).disabled.value ? -1 : 0,
			"aria-disabled": h(y).disabled.value,
			"data-disabled": h(y).disabled.value || void 0,
			"data-dragging": h(y).isDragging.value || void 0,
			"data-invalid": h(y).invalid.value || void 0,
			onClick: i[0] ||= (...e) => h(y).open && h(y).open(...e),
			onKeydown: C,
			onDragover: b,
			onDragleave: x,
			onDrop: S
		}, [p(e.$slots, "default", {}, () => [l(r, {
			direction: "column",
			"align-items": "center",
			gap: 2
		}, {
			default: g(() => [
				s("div", v, [l(h(t))]),
				l(r, {
					direction: "column",
					"align-items": "center",
					gap: 1
				}, {
					default: g(() => [l(n, {
						typography: "label-2",
						"text-align": "center"
					}, {
						default: g(() => [c(m(u.title), 1)]),
						_: 1
					}), l(n, {
						color: "secondary",
						"text-align": "center"
					}, {
						default: g(() => [c(m(u.description), 1)]),
						_: 1
					})]),
					_: 1
				}),
				l(a, {
					label: u.triggerLabel,
					size: "small"
				}, null, 8, ["label"])
			]),
			_: 1
		})], !0)], 40, _));
	}
}), [["__scopeId", "data-v-a450a911"]]);
//#endregion
export { y as default };
