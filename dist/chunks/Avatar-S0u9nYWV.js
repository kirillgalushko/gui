import { defineComponent as c, ref as l, computed as d, openBlock as i, createElementBlock as n, mergeProps as u, withDirectives as p, createElementVNode as f, vShow as m, renderSlot as v } from "vue";
import { _ as h } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/Avatar-DzasxIKQ.css';const _ = ["src"], g = /* @__PURE__ */ c({
  __name: "Avatar",
  props: {
    shape: { default: "circle" },
    color: { default: "default" },
    src: {},
    size: { default: "40px" }
  },
  setup(s) {
    const e = s, t = l(!1);
    function o() {
      t.value = !0;
    }
    const r = d(() => {
      const a = e.shape === "square" ? {
        borderRadius: `calc(${e.size} / 4)`
      } : {};
      return {
        width: e.size,
        height: e.size,
        fontSize: `calc(${e.size} / 2.5)`,
        ...a
      };
    });
    return (a, z) => (i(), n("div", u({
      style: r.value,
      class: ["avatar", e.shape, e.color]
    }, a.$attrs), [
      p(f("img", {
        onLoad: o,
        class: "avatar-image",
        src: e.src
      }, null, 40, _), [
        [m, t.value]
      ]),
      v(a.$slots, "default", {}, void 0, !0)
    ], 16));
  }
}), w = /* @__PURE__ */ h(g, [["__scopeId", "data-v-efe81b56"]]);
export {
  w as default
};
