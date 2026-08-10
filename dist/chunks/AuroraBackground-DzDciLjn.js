import { defineComponent as s, openBlock as o, createElementBlock as t, normalizeClass as n, createElementVNode as a, Fragment as c, renderList as l, renderSlot as _ } from "vue";
import { _ as i } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/AuroraBackground-CRdH7VTN.css';const m = {
  class: "AuroraBackground__canvas",
  "aria-hidden": "true"
}, p = { class: "AuroraBackground__content" }, k = /* @__PURE__ */ s({
  __name: "AuroraBackground",
  props: {
    animated: { type: Boolean, default: !0 },
    intensity: { default: "medium" },
    palette: { default: "brand" }
  },
  setup(u) {
    const r = u;
    return (d, B) => (o(), t("div", {
      class: n([
        "AuroraBackground",
        `AuroraBackground--${r.palette}`,
        `AuroraBackground--${r.intensity}`,
        { "AuroraBackground--animated": r.animated }
      ])
    }, [
      a("div", m, [
        (o(), t(c, null, l(9, (e) => a("span", {
          key: e,
          class: n(["AuroraBackground__orb", `AuroraBackground__orb--${e}`])
        }, null, 2)), 64))
      ]),
      a("div", p, [
        _(d.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
}), A = /* @__PURE__ */ i(k, [["__scopeId", "data-v-fa9258ab"]]);
export {
  A as default
};
