import { defineComponent as l, openBlock as r, createBlock as a, withCtx as s, renderSlot as m } from "vue";
import n from "./Text-0p81GmwH.js";
import { _ as p } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/ItemTitle-6CF7p5nB.css';const c = /* @__PURE__ */ l({
  __name: "ItemTitle",
  props: {
    Element: { default: "div" }
  },
  setup(e) {
    const t = e;
    return (o, i) => (r(), a(n, {
      Element: t.Element,
      typography: "label-2",
      color: "default",
      ellipsis: "",
      class: "item-title"
    }, {
      default: s(() => [
        m(o.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["Element"]));
  }
}), u = /* @__PURE__ */ p(c, [["__scopeId", "data-v-ad9c9bf0"]]);
export {
  u as default
};
