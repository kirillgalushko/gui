import { defineComponent as r, inject as s, openBlock as c, createBlock as i, normalizeClass as l, unref as a, withCtx as m, renderSlot as p } from "vue";
import _ from "./Text-Cd35JtZQ.js";
import { a as f } from "./context-B9i5CnhF.js";
import { _ as u } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/AttachmentDescription-C7xANxVD.css';const d = /* @__PURE__ */ r({
  __name: "AttachmentDescription",
  setup(h) {
    const t = s(f, null);
    return (n, x) => {
      var e, o;
      return c(), i(_, {
        class: l([
          "attachment-description",
          (e = a(t)) == null ? void 0 : e.orientation.value,
          (o = a(t)) == null ? void 0 : o.size.value
        ]),
        color: "secondary",
        ellipsis: ""
      }, {
        default: m(() => [
          p(n.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["class"]);
    };
  }
}), z = /* @__PURE__ */ u(d, [["__scopeId", "data-v-a810e701"]]);
export {
  z as default
};
