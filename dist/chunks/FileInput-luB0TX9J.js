import { defineComponent as s, ref as r, openBlock as u, createElementBlock as f, createElementVNode as m, createVNode as i, withCtx as _, unref as b, createTextVNode as h, toDisplayString as g } from "vue";
import { d as y } from "./IconUploadOutline-C40pEcAR.js";
import k from "./Button-DBIwBw8Q.js";
import { _ as v } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/FileInput-B7tjhBi5.css';const x = ["accept", "multiple", "disabled", "capture"], B = /* @__PURE__ */ s({
  __name: "FileInput",
  props: {
    accept: { default: void 0 },
    multiple: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    label: { default: "Выбрать файл" },
    capture: { default: void 0 },
    size: { default: "large" }
  },
  emits: ["change"],
  setup(n, { emit: o }) {
    const e = n, c = o, l = r(), d = () => {
      var t;
      e.disabled || (t = l.value) == null || t.click();
    }, p = (t) => {
      const a = t.target;
      c("change", Array.from(a.files ?? [])), a.value = "";
    };
    return (t, a) => (u(), f("span", null, [
      m("input", {
        ref_key: "input",
        ref: l,
        class: "file-input-native",
        type: "file",
        accept: e.accept,
        multiple: e.multiple,
        disabled: e.disabled,
        capture: e.capture,
        tabindex: "-1",
        onChange: p
      }, null, 40, x),
      i(k, {
        type: "button",
        mode: "default",
        size: e.size,
        disabled: e.disabled,
        onClick: d
      }, {
        default: _(() => [
          i(b(y)),
          h(" " + g(e.label), 1)
        ]),
        _: 1
      }, 8, ["size", "disabled"])
    ]));
  }
}), V = /* @__PURE__ */ v(B, [["__scopeId", "data-v-442cd07d"]]);
export {
  V as default
};
