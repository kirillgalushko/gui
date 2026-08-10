import { defineComponent as s, computed as d, openBlock as n, createElementBlock as r, normalizeStyle as i, createElementVNode as t, renderSlot as c } from "vue";
import { _ as p } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/Collapse-Bp2Ivcz0.css';const _ = ["data-state", "aria-hidden", "aria-labelledby", "inert"], u = { class: "collapse-clip" }, m = { class: "collapse-content" }, f = /* @__PURE__ */ s({
  __name: "Collapse",
  props: {
    duration: { default: 240 },
    labelledBy: { default: void 0 },
    opened: { type: Boolean }
  },
  setup(o) {
    const e = o, a = d(
      () => ({
        "--collapse-duration": `${Math.max(0, e.duration)}ms`
      })
    );
    return (l, v) => (n(), r("div", {
      class: "collapse",
      "data-state": e.opened ? "open" : "closed",
      "aria-hidden": !e.opened,
      "aria-labelledby": e.labelledBy,
      inert: e.opened ? void 0 : !0,
      style: i(a.value)
    }, [
      t("div", u, [
        t("div", m, [
          c(l.$slots, "default", {}, void 0, !0)
        ])
      ])
    ], 12, _));
  }
}), b = /* @__PURE__ */ p(f, [["__scopeId", "data-v-91598fa6"]]);
export {
  b as default
};
