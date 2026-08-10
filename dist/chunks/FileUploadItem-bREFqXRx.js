import { t as e } from "./fileUpload-DH2QdR7Y.js";
import { t } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { A as n, O as r, a as i, h as a, t as o, u as s, x as c } from "./gui-icons.es-5O8QlDZJ.js";
import { t as l } from "./Attachment-Ci5K5lsQ.js";
import { t as u } from "./AttachmentAction-xzyA6gUH.js";
import { t as d } from "./AttachmentActions-BI6zUTgk.js";
import { t as f } from "./AttachmentContent-DfqCe0S4.js";
import { t as p } from "./AttachmentDescription-Bs8ofkEB.js";
import { t as m } from "./AttachmentMedia-n0EJ-DRO.js";
import { t as h } from "./AttachmentTitle-BNfBwdmM.js";
import { n as g, t as _ } from "./context-CKHbCX99.js";
import { t as v } from "./ProgressBar-CttqzR0Y.js";
import { computed as y, createBlock as b, createCommentVNode as x, createElementBlock as S, createTextVNode as C, createVNode as w, defineComponent as T, inject as E, onBeforeUnmount as D, openBlock as O, ref as k, toDisplayString as A, unref as j, watch as M, withCtx as N } from "vue";
import '../assets/FileUploadItem-CgsNOTqt.css';//#region src/components/FileUpload/FileUploadItem.vue?vue&type=script&setup=true&lang.ts
var P = ["src", "alt"], F = /*#__PURE__*/ t(/* @__PURE__ */ T({
	__name: "FileUploadItem",
	props: {
		disabled: {
			type: Boolean,
			default: !1
		},
		error: { default: void 0 },
		file: {},
		progress: { default: void 0 },
		removable: {
			type: Boolean,
			default: !0
		},
		onRetry: {
			type: Function,
			default: void 0
		},
		state: { default: "idle" }
	},
	setup(t) {
		let T = t, F = E(_), I = E(g, y(() => "vertical"));
		if (F === void 0) throw Error("FileUploadItem must be used inside FileUpload");
		let L = k(null), R = y(() => T.file.type.startsWith("image/")), z = y(() => T.error === void 0 ? T.state === "uploading" ? T.progress === void 0 ? "Загрузка" : `Загрузка · ${Math.round(T.progress)}%` : T.state === "processing" ? "Обработка файла" : T.state === "done" ? `Загружен · ${e(T.file.size)}` : `${T.file.type || "Файл"} · ${e(T.file.size)}` : T.error), B = () => {
			L.value !== null && (URL.revokeObjectURL(L.value), L.value = null);
		};
		return M(() => T.file, (e) => {
			B(), e.type.startsWith("image/") && (L.value = URL.createObjectURL(e));
		}, { immediate: !0 }), D(B), (e, t) => (O(), b(l, {
			stretched: j(I) !== "horizontal",
			orientation: j(I) === "horizontal" ? "vertical" : "horizontal",
			size: j(F).size.value,
			state: T.error === void 0 ? T.state : "error",
			role: "listitem"
		}, {
			default: N(() => [
				w(m, { variant: R.value ? "image" : "icon" }, {
					default: N(() => [R.value && L.value ? (O(), S("img", {
						key: 0,
						src: L.value,
						alt: T.file.name
					}, null, 8, P)) : T.state === "uploading" ? (O(), b(j(s), {
						key: 1,
						class: "file-upload-item-loader"
					})) : T.state === "error" ? (O(), b(j(n), { key: 2 })) : T.state === "done" ? (O(), b(j(r), { key: 3 })) : T.state === "processing" ? (O(), b(j(a), { key: 4 })) : (O(), b(j(c), { key: 5 }))]),
					_: 1
				}, 8, ["variant"]),
				w(f, null, {
					default: N(() => [
						w(h, null, {
							default: N(() => [C(A(T.file.name), 1)]),
							_: 1
						}),
						w(p, null, {
							default: N(() => [C(A(z.value), 1)]),
							_: 1
						}),
						T.state === "uploading" && T.progress !== void 0 ? (O(), b(v, {
							key: 0,
							progress: T.progress,
							max: 100,
							height: "3px"
						}, null, 8, ["progress"])) : x("", !0)
					]),
					_: 1
				}),
				T.removable || T.state === "error" && T.onRetry ? (O(), b(d, { key: 0 }, {
					default: N(() => [T.state === "error" && T.onRetry ? (O(), b(u, {
						key: 0,
						"aria-label": "Повторить загрузку",
						disabled: T.disabled || j(F).disabled.value,
						onClick: T.onRetry
					}, {
						default: N(() => [w(j(i))]),
						_: 1
					}, 8, ["disabled", "onClick"])) : x("", !0), T.removable ? (O(), b(u, {
						key: 1,
						"aria-label": "Удалить файл",
						disabled: T.disabled || j(F).disabled.value,
						onClick: t[0] ||= (e) => j(F).remove(T.file)
					}, {
						default: N(() => [w(j(o))]),
						_: 1
					}, 8, ["disabled"])) : x("", !0)]),
					_: 1
				})) : x("", !0)
			]),
			_: 1
		}, 8, [
			"stretched",
			"orientation",
			"size",
			"state"
		]));
	}
}), [["__scopeId", "data-v-2619150e"]]);
//#endregion
export { F as default };
