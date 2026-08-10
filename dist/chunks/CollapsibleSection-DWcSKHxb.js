import { defineComponent as b, ref as h, computed as d, openBlock as v, createElementBlock as g, unref as l, createElementVNode as o, mergeProps as i, renderSlot as n, toDisplayString as V, createVNode as c, withCtx as C } from "vue";
import { d as y } from "./IconChevronDownOutline-Clx8hRBy.js";
import { c as B } from "./index-BQgYVE5h.js";
import O from "./Collapse-CaBUPciD.js";
import { _ as S } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/CollapsibleSection-96QR-tr_.css';const P = ["data-disabled", "data-state"], k = ["disabled"], x = { class: "collapsible-section-heading" }, E = {
  class: "collapsible-section-icon",
  "aria-hidden": "true"
}, N = { class: "collapsible-section-content" }, $ = /* @__PURE__ */ b({
  __name: "CollapsibleSection",
  props: {
    defaultOpened: { type: Boolean, default: !0 },
    disabled: { type: Boolean, default: !1 },
    modelValue: { type: Boolean, default: void 0 },
    title: {}
  },
  emits: ["change", "update:modelValue"],
  setup(p, { emit: r }) {
    const e = p, a = r, s = h(e.defaultOpened), u = d({
      get: () => e.modelValue ?? s.value,
      set: (t) => {
        e.modelValue === void 0 && (s.value = t), a("update:modelValue", t), a("change", t);
      }
    }), { collapseProps: m, opened: f, triggerProps: _ } = B({
      disabled: d(() => e.disabled),
      opened: u
    });
    return (t, w) => (v(), g("div", {
      class: "collapsible-section",
      "data-disabled": e.disabled || void 0,
      "data-state": l(f) ? "open" : "closed"
    }, [
      o("button", i(l(_), {
        class: "collapsible-section-trigger",
        type: "button",
        disabled: e.disabled
      }), [
        o("span", x, [
          o("span", E, [
            n(t.$slots, "icon", {}, void 0, !0)
          ]),
          o("span", null, V(e.title), 1)
        ]),
        c(l(y), {
          class: "collapsible-section-chevron",
          "aria-hidden": "true"
        })
      ], 16, k),
      c(O, i(l(m), { duration: 200 }), {
        default: C(() => [
          o("div", N, [
            n(t.$slots, "default", {}, void 0, !0)
          ])
        ]),
        _: 3
      }, 16)
    ], 8, P));
  }
}), A = /* @__PURE__ */ S($, [["__scopeId", "data-v-4c51a51f"]]);
export {
  A as default
};
