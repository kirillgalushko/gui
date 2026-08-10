import { defineComponent as a, openBlock as n, createElementBlock as r, normalizeClass as i, renderSlot as s } from "vue";
import { _ as c } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/AttachmentGroup-DAkTLX3U.css';const p = ["data-orientation"], l = /* @__PURE__ */ a({
  __name: "AttachmentGroup",
  props: {
    orientation: { default: "vertical" }
  },
  setup(o) {
    const t = o;
    return (e, d) => (n(), r("div", {
      class: i(["attachment-group", t.orientation]),
      "data-orientation": t.orientation,
      role: "list"
    }, [
      s(e.$slots, "default", {}, void 0, !0)
    ], 10, p));
  }
}), u = /* @__PURE__ */ c(l, [["__scopeId", "data-v-857b5afd"]]);
export {
  u as default
};
