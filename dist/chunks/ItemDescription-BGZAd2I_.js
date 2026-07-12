import { defineComponent as r, openBlock as s, createBlock as n, withCtx as p, renderSlot as a } from "vue";
import l from "./Text-0p81GmwH.js";
import { _ as c } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/ItemDescription-Cpqgzxls.css';const i = /* @__PURE__ */ r({
  __name: "ItemDescription",
  props: {
    Element: { default: "div" }
  },
  setup(e) {
    const t = e;
    return (o, m) => (s(), n(l, {
      Element: t.Element,
      typography: "label-3",
      color: "secondary",
      ellipsis: "",
      class: "item-description"
    }, {
      default: p(() => [
        a(o.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["Element"]));
  }
}), u = /* @__PURE__ */ c(i, [["__scopeId", "data-v-af346fa0"]]);
export {
  u as default
};
