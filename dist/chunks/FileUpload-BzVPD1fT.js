import { n as e, r as t } from "./fileUpload-DH2QdR7Y.js";
import { t as n } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { t as r } from "./context-CKHbCX99.js";
import { computed as i, createElementBlock as a, createElementVNode as o, defineComponent as s, normalizeClass as c, openBlock as l, provide as u, ref as d, renderSlot as f, unref as p, useId as m } from "vue";
import '../assets/FileUpload-C8qYsJ_U.css';//#region src/components/FileUpload/FileUpload.vue?vue&type=script&setup=true&lang.ts
var h = ["data-disabled", "data-invalid"], g = [
	"id",
	"accept",
	"capture",
	"disabled",
	"multiple",
	"name",
	"required"
], _ = /*#__PURE__*/ n(/* @__PURE__ */ s({
	__name: "FileUpload",
	props: {
		accept: { default: void 0 },
		capture: { default: void 0 },
		defaultValue: { default: () => [] },
		disabled: {
			type: Boolean,
			default: !1
		},
		invalid: {
			type: Boolean,
			default: !1
		},
		maxFiles: { default: 1 },
		maxSize: { default: void 0 },
		modelValue: { default: void 0 },
		multiple: {
			type: Boolean,
			default: !1
		},
		name: { default: void 0 },
		required: {
			type: Boolean,
			default: !1
		},
		size: { default: "medium" },
		stretched: {
			type: Boolean,
			default: !0
		},
		validate: {
			type: Function,
			default: void 0
		}
	},
	emits: [
		"accept",
		"change",
		"reject",
		"update:modelValue"
	],
	setup(n, { expose: s, emit: _ }) {
		let v = n, y = _, b = d(null), x = d([...v.defaultValue]), S = d(!1), C = d(!1), w = m(), T = i(() => v.modelValue ?? x.value), E = i(() => v.invalid || S.value), D = (e) => {
			v.modelValue === void 0 && (x.value = e), y("update:modelValue", e), y("change", e);
		}, O = (n) => {
			if (v.disabled || n.length === 0) return;
			let r = v.multiple ? [...T.value] : [], i = v.multiple ? n : n.slice(0, 1), a = [], o = i.flatMap((n) => {
				let i = t(n, {
					accept: v.accept,
					maxSize: v.maxSize,
					validate: v.validate
				});
				return i === null ? [...r, ...a].some((t) => e(t, n)) ? [{
					file: n,
					errors: ["Файл уже добавлен"]
				}] : r.length + a.length >= v.maxFiles ? [{
					file: n,
					errors: [`Можно добавить не больше ${v.maxFiles} файлов`]
				}] : (a.push(n), []) : [i];
			});
			if (S.value = o.length > 0, o.length > 0 && y("reject", o), a.length > 0) {
				let e = [...r, ...a];
				y("accept", a), D(e);
			}
		}, k = (t) => {
			v.disabled || D(T.value.filter((n) => !e(n, t)));
		}, A = () => {
			!v.disabled && T.value.length > 0 && D([]);
		}, j = () => {
			v.disabled || b.value?.click();
		}, M = (e) => {
			let t = e.target;
			O(Array.from(t.files ?? [])), t.value = "";
		};
		return u(r, {
			addFiles: O,
			clear: A,
			disabled: i(() => v.disabled),
			files: T,
			inputId: w,
			invalid: E,
			isDragging: C,
			open: j,
			remove: k,
			size: i(() => v.size)
		}), s({
			clear: A,
			open: j
		}), (e, t) => (l(), a("div", {
			class: c(["file-upload", { stretched: v.stretched }]),
			"data-disabled": v.disabled || void 0,
			"data-invalid": E.value || void 0
		}, [o("input", {
			id: p(w),
			ref_key: "input",
			ref: b,
			class: "file-upload-input",
			type: "file",
			accept: v.accept,
			capture: v.capture,
			disabled: v.disabled,
			multiple: v.multiple,
			name: v.name,
			required: v.required,
			tabindex: "-1",
			onChange: M
		}, null, 40, g), f(e.$slots, "default", {}, void 0, !0)], 10, h));
	}
}), [["__scopeId", "data-v-c7cedeee"]]);
//#endregion
export { _ as default };
