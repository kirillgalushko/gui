import { defineComponent as r, inject as c, openBlock as s, createElementBlock as i, normalizeClass as m, unref as d, renderSlot as l } from "vue";
import { a as p } from "./context-B9i5CnhF.js";
import { _ as f } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/AttachmentMedia-DD5ol-HV.css';const u = /* @__PURE__ */ r({
  __name: "AttachmentMedia",
  props: {
    variant: { default: "icon" }
  },
  setup(e) {
    const a = e, n = c(p, null);
    return (o, _) => {
      var t;
      return s(), i("div", {
        class: m(["attachment-media", a.variant, (t = d(n)) == null ? void 0 : t.orientation.value])
      }, [
        l(o.$slots, "default", {}, void 0, !0)
      ], 2);
    };
  }
}), C = /* @__PURE__ */ f(u, [["__scopeId", "data-v-d879dc8b"]]);
export {
  C as default
};
