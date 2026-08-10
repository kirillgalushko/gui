import { defineComponent as n, inject as o, openBlock as c, createElementBlock as r, normalizeClass as s, unref as m, renderSlot as i } from "vue";
import { a as l } from "./context-B9i5CnhF.js";
import { _ } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/AttachmentActions-DPavIS4C.css';const p = /* @__PURE__ */ n({
  __name: "AttachmentActions",
  setup(f) {
    const e = o(l, null);
    return (a, d) => {
      var t;
      return c(), r("div", {
        class: s(["attachment-actions", (t = m(e)) == null ? void 0 : t.orientation.value])
      }, [
        i(a.$slots, "default", {}, void 0, !0)
      ], 2);
    };
  }
}), A = /* @__PURE__ */ _(p, [["__scopeId", "data-v-a9dfa92a"]]);
export {
  A as default
};
