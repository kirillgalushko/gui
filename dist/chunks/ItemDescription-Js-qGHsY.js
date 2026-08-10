import { defineComponent as s, openBlock as l, createBlock as r, withCtx as i, renderSlot as p } from "vue";
import n from "./Text-Cd35JtZQ.js";
import { _ as a } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/ItemDescription-CF6sm_s6.css';const c = /* @__PURE__ */ s({
  __name: "ItemDescription",
  props: {
    Element: { default: "div" },
    ellipsis: { type: Boolean, default: !1 }
  },
  setup(t) {
    const e = t;
    return (o, m) => (l(), r(n, {
      Element: e.Element,
      typography: "label-3",
      color: "secondary",
      ellipsis: e.ellipsis,
      class: "item-description"
    }, {
      default: i(() => [
        p(o.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["Element", "ellipsis"]));
  }
}), u = /* @__PURE__ */ a(c, [["__scopeId", "data-v-dc232c37"]]);
export {
  u as default
};
