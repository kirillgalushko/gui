import { defineComponent as r, computed as l, openBlock as s, createElementBlock as n, mergeProps as i, renderSlot as c } from "vue";
import { _ as d } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/ScrollArea-DlUSRzZY.css';const p = ["tabindex"], m = /* @__PURE__ */ r({
  inheritAttrs: !1,
  __name: "ScrollArea",
  props: {
    maxHeight: {
      type: [String, Number],
      default: void 0
    },
    orientation: {
      type: String,
      default: "vertical"
    },
    keyboardFocusable: {
      type: Boolean,
      default: !0
    },
    stableScrollbar: {
      type: Boolean,
      default: !0
    }
  },
  setup(o) {
    const e = o, a = l(
      () => typeof e.maxHeight == "number" ? `${e.maxHeight}px` : e.maxHeight
    );
    return (t, u) => (s(), n("div", i(t.$attrs, {
      class: [
        "scroll-area",
        e.orientation,
        { "stable-scrollbar": e.stableScrollbar }
      ],
      style: { maxHeight: a.value },
      tabindex: e.keyboardFocusable ? 0 : void 0
    }), [
      c(t.$slots, "default", {}, void 0, !0)
    ], 16, p));
  }
}), _ = /* @__PURE__ */ d(m, [["__scopeId", "data-v-81938977"]]);
export {
  _ as default
};
