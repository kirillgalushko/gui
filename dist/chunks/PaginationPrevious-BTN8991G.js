import { defineComponent as o, openBlock as s, createBlock as i, mergeProps as l, withCtx as r, renderSlot as n, createVNode as p, unref as d, createElementVNode as m, toDisplayString as c } from "vue";
import { d as f } from "./IconChevronLeftOutline-Dni7wod7.js";
import { _ as u } from "./PaginationLink.vue_vue_type_script_setup_true_lang-jzh4pSqQ.js";
import { _ } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/PaginationPrevious-CAd94YMe.css';const b = /* @__PURE__ */ o({
  inheritAttrs: !1,
  __name: "PaginationPrevious",
  props: {
    Element: { default: "a" },
    disabled: { type: Boolean },
    size: {},
    label: { default: "Перейти на предыдущую страницу" },
    text: { default: "Назад" }
  },
  setup(a) {
    const e = a;
    return (t, g) => (s(), i(u, l(t.$attrs, {
      Element: e.Element,
      disabled: e.disabled,
      size: e.size,
      "aria-label": e.label,
      class: [
        "pagination-previous",
        { "pagination-previous-icon-only": !e.text }
      ]
    }), {
      default: r(() => [
        n(t.$slots, "default", {}, () => [
          p(d(f)),
          m("span", null, c(e.text), 1)
        ], !0)
      ]),
      _: 3
    }, 16, ["Element", "disabled", "size", "aria-label", "class"]));
  }
}), z = /* @__PURE__ */ _(b, [["__scopeId", "data-v-3ac9a030"]]);
export {
  z as default
};
