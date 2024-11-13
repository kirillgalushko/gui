import { defineComponent as f, ref as l, computed as g, openBlock as h, createElementBlock as _, normalizeStyle as v, normalizeClass as b, createElementVNode as n, renderSlot as p, mergeProps as y } from "vue";
import { _ as A } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/Input-BVGmYhy0.css';const x = ["disabled"], W = /* @__PURE__ */ f({
  __name: "Input",
  props: {
    maxWidth: { default: "100%" },
    disabled: { type: Boolean }
  },
  setup(c) {
    const d = l(), r = l(), t = c, m = g(() => {
      const e = (s) => {
        var a, i;
        return (a = s.value) != null && a.clientWidth ? ((i = s.value) == null ? void 0 : i.clientWidth) + 20 : 12;
      }, o = e(d), u = e(r);
      return `padding-left: ${o}px; padding-right: ${u}px;`;
    });
    return (e, o) => (h(), _("div", {
      style: v({ maxWidth: t.maxWidth }),
      class: b(["input-container", { disabled: t.disabled }])
    }, [
      n("div", {
        ref_key: "leftAdornment",
        ref: d,
        class: "adornment left-adornment"
      }, [
        p(e.$slots, "leftAdornment", {}, void 0, !0)
      ], 512),
      n("input", y(e.$attrs, {
        disabled: t.disabled,
        style: m.value,
        class: ["input"]
      }), null, 16, x),
      n("div", {
        ref_key: "rightAdornment",
        ref: r,
        class: "adornment right-adornment"
      }, [
        p(e.$slots, "rightAdornment", {}, void 0, !0)
      ], 512)
    ], 6));
  }
}), B = /* @__PURE__ */ A(W, [["__scopeId", "data-v-ae80c3bf"]]);
export {
  B as default
};
