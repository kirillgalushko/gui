import { defineComponent as a, computed as c, openBlock as l, createElementBlock as m, normalizeStyle as s, renderSlot as d } from "vue";
import { _ as i } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/ItemMedia-BtRSmnXI.css';const n = /* @__PURE__ */ a({
  __name: "ItemMedia",
  props: {
    color: {}
  },
  setup(o) {
    const e = o, t = c(
      () => e.color === void 0 ? void 0 : { "--item-media-color": `var(--color-${e.color}-500)` }
    );
    return (r, p) => (l(), m("div", {
      class: "item-media",
      style: s(t.value)
    }, [
      d(r.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), f = /* @__PURE__ */ i(n, [["__scopeId", "data-v-7737ba99"]]);
export {
  f as default
};
