import { defineComponent as n, inject as s, computed as r, provide as d, unref as o, openBlock as p, createElementBlock as c, normalizeClass as f, renderSlot as u, createCommentVNode as m } from "vue";
import { f as _, a as v } from "./context-CiuKGLtT.js";
import { _ as U } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/FileUploadList-CDzy1eFP.css';const C = ["data-orientation"], h = /* @__PURE__ */ n({
  __name: "FileUploadList",
  props: {
    orientation: { default: "vertical" }
  },
  setup(i) {
    const a = i, e = s(_);
    if (e === void 0)
      throw new Error("FileUploadList must be used inside FileUpload");
    const t = r(() => a.orientation);
    return d(v, t), (l, x) => o(e).files.value.length > 0 ? (p(), c("div", {
      key: 0,
      class: f(["file-upload-list", t.value]),
      "data-orientation": t.value,
      role: "list"
    }, [
      u(l.$slots, "default", {
        files: o(e).files.value
      }, void 0, !0)
    ], 10, C)) : m("", !0);
  }
}), y = /* @__PURE__ */ U(h, [["__scopeId", "data-v-67cbe516"]]);
export {
  y as default
};
