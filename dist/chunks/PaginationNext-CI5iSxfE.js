import { defineComponent as n, openBlock as l, createBlock as o, mergeProps as s, withCtx as i, renderSlot as r, createElementVNode as d, toDisplayString as p, createVNode as c, unref as m } from "vue";
import { d as f } from "./IconChevronRightOutline-B9UH_Yk2.js";
import { _ } from "./PaginationLink.vue_vue_type_script_setup_true_lang-jzh4pSqQ.js";
import { _ as u } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/PaginationNext-BW4JpSNF.css';const x = /* @__PURE__ */ n({
  inheritAttrs: !1,
  __name: "PaginationNext",
  props: {
    Element: { default: "a" },
    disabled: { type: Boolean },
    size: {},
    label: { default: "Перейти на следующую страницу" },
    text: { default: "Вперёд" }
  },
  setup(a) {
    const e = a;
    return (t, b) => (l(), o(_, s(t.$attrs, {
      Element: e.Element,
      disabled: e.disabled,
      size: e.size,
      "aria-label": e.label,
      class: ["pagination-next", { "pagination-next-icon-only": !e.text }]
    }), {
      default: i(() => [
        r(t.$slots, "default", {}, () => [
          d("span", null, p(e.text), 1),
          c(m(f))
        ], !0)
      ]),
      _: 3
    }, 16, ["Element", "disabled", "size", "aria-label", "class"]));
  }
}), h = /* @__PURE__ */ u(x, [["__scopeId", "data-v-7cf7c3a1"]]);
export {
  h as default
};
