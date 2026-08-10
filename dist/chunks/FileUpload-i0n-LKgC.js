import { defineComponent as k, ref as n, useId as q, computed as s, provide as I, openBlock as U, createElementBlock as E, normalizeClass as $, createElementVNode as A, unref as D, renderSlot as K } from "vue";
import { f as M } from "./context-CiuKGLtT.js";
import { v as N, n as x } from "./index-BQgYVE5h.js";
import { _ as R } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/FileUpload-CgmgzI2n.css';const w = ["data-disabled", "data-invalid"], G = ["id", "accept", "capture", "disabled", "multiple", "name", "required"], H = /* @__PURE__ */ k({
  __name: "FileUpload",
  props: {
    accept: { default: void 0 },
    capture: { default: void 0 },
    defaultValue: { default: () => [] },
    disabled: { type: Boolean, default: !1 },
    invalid: { type: Boolean, default: !1 },
    maxFiles: { default: 1 },
    maxSize: { default: void 0 },
    modelValue: { default: void 0 },
    multiple: { type: Boolean, default: !1 },
    name: { default: void 0 },
    required: { type: Boolean, default: !1 },
    size: { default: "medium" },
    stretched: { type: Boolean, default: !0 },
    validate: { type: Function, default: void 0 }
  },
  emits: ["accept", "change", "reject", "update:modelValue"],
  setup(y, { expose: F, emit: V }) {
    const e = y, i = V, r = n(null), p = n([...e.defaultValue]), f = n(!1), z = n(!1), m = q(), o = s(() => e.modelValue ?? p.value), v = s(() => e.invalid || f.value), u = (a) => {
      e.modelValue === void 0 && (p.value = a), i("update:modelValue", a), i("change", a);
    }, h = (a) => {
      if (e.disabled || a.length === 0)
        return;
      const t = e.multiple ? [...o.value] : [], S = e.multiple ? a : a.slice(0, 1), d = [], c = S.flatMap((l) => {
        const _ = N(l, {
          accept: e.accept,
          maxSize: e.maxSize,
          validate: e.validate
        });
        return _ !== null ? [_] : [...t, ...d].some((j) => x(j, l)) ? [{ file: l, errors: ["Файл уже добавлен"] }] : t.length + d.length >= e.maxFiles ? [
          { file: l, errors: [`Можно добавить не больше ${e.maxFiles} файлов`] }
        ] : (d.push(l), []);
      });
      if (f.value = c.length > 0, c.length > 0 && i("reject", c), d.length > 0) {
        const l = [...t, ...d];
        i("accept", d), u(l);
      }
    }, B = (a) => {
      e.disabled || u(o.value.filter((t) => !x(t, a)));
    }, b = () => {
      !e.disabled && o.value.length > 0 && u([]);
    }, g = () => {
      var a;
      e.disabled || (a = r.value) == null || a.click();
    }, C = (a) => {
      const t = a.target;
      h(Array.from(t.files ?? [])), t.value = "";
    };
    return I(M, {
      addFiles: h,
      clear: b,
      disabled: s(() => e.disabled),
      files: o,
      inputId: m,
      invalid: v,
      isDragging: z,
      open: g,
      remove: B,
      size: s(() => e.size)
    }), F({ clear: b, open: g }), (a, t) => (U(), E("div", {
      class: $(["file-upload", { stretched: e.stretched }]),
      "data-disabled": e.disabled || void 0,
      "data-invalid": v.value || void 0
    }, [
      A("input", {
        id: D(m),
        ref_key: "input",
        ref: r,
        class: "file-upload-input",
        type: "file",
        accept: e.accept,
        capture: e.capture,
        disabled: e.disabled,
        multiple: e.multiple,
        name: e.name,
        required: e.required,
        tabindex: "-1",
        onChange: C
      }, null, 40, G),
      K(a.$slots, "default", {}, void 0, !0)
    ], 10, w));
  }
}), Q = /* @__PURE__ */ R(H, [["__scopeId", "data-v-c7cedeee"]]);
export {
  Q as default
};
