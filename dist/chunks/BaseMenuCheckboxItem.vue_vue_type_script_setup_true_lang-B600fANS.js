import { defineComponent as u, mergeModels as n, useModel as m, openBlock as l, createBlock as d, withCtx as s, renderSlot as c, unref as i, createCommentVNode as p } from "vue";
import { d as f } from "./IconCheckOutline-BoPzWPqG.js";
import { B as k } from "./BaseMenuItem-BgZg369U.js";
import { t as h } from "./menuSelection-Btvx5qA4.js";
const M = /* @__PURE__ */ u({
  __name: "BaseMenuCheckboxItem",
  props: /* @__PURE__ */ n({
    disabled: { type: Boolean }
  }, {
    modelValue: { type: Boolean, default: !1 },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(a) {
    const o = a, e = m(a, "modelValue"), r = () => {
      e.value = h(e.value, o.disabled);
    };
    return (t, b) => (l(), d(k, {
      role: "menuitemcheckbox",
      disabled: o.disabled,
      selected: e.value,
      "aria-checked": e.value,
      "data-state": e.value ? "checked" : "unchecked",
      onClick: r
    }, {
      trailing: s(() => [
        c(t.$slots, "indicator", { checked: e.value }, () => [
          e.value ? (l(), d(i(f), { key: 0 })) : p("", !0)
        ])
      ]),
      default: s(() => [
        c(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["disabled", "selected", "aria-checked", "data-state"]));
  }
});
export {
  M as _
};
