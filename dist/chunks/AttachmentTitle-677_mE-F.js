import { defineComponent as r, inject as l, openBlock as s, createBlock as c, normalizeClass as i, unref as o, withCtx as m, renderSlot as p } from "vue";
import _ from "./Text-Cd35JtZQ.js";
import { a as f } from "./context-B9i5CnhF.js";
import { _ as u } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/AttachmentTitle-CP1pas9g.css';const d = /* @__PURE__ */ r({
  __name: "AttachmentTitle",
  setup(h) {
    const t = l(f, null);
    return (n, x) => {
      var e, a;
      return s(), c(_, {
        class: i([
          "attachment-title",
          (e = o(t)) == null ? void 0 : e.orientation.value,
          (a = o(t)) == null ? void 0 : a.size.value
        ]),
        typography: "label-2",
        ellipsis: ""
      }, {
        default: m(() => [
          p(n.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["class"]);
    };
  }
}), k = /* @__PURE__ */ u(d, [["__scopeId", "data-v-3213e882"]]);
export {
  k as default
};
