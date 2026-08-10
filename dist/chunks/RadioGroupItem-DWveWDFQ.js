import { defineComponent as _, inject as k, useAttrs as y, useId as I, computed as o, openBlock as c, createElementBlock as p, normalizeClass as B, unref as l, createElementVNode as t, mergeProps as C, renderSlot as v, createCommentVNode as G } from "vue";
import { r as $ } from "./radioGroup-CQ7xOI09.js";
import { _ as E } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/RadioGroupItem-CuYJKIf-.css';const R = ["for", "data-state", "data-disabled", "data-invalid"], q = ["id", "name", "value", "checked", "disabled", "required", "aria-invalid", "aria-describedby"], w = { class: "radio-group-content" }, A = { class: "radio-group-label" }, N = {
  key: 0,
  class: "radio-group-description"
}, V = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "RadioGroupItem",
  props: {
    value: {},
    id: {},
    disabled: { type: Boolean },
    invalid: { type: Boolean }
  },
  setup(m) {
    const d = m, a = k($);
    if (!a)
      throw new Error("RadioGroupItem must be used inside RadioGroup");
    const b = y(), f = I(), n = o(() => d.id ?? `radio-group-item-${f}`), i = o(() => !!d.disabled || a.disabled.value), s = o(() => !!d.invalid || a.invalid.value), r = o(() => a.model.value === d.value), g = o(() => {
      const e = b["aria-describedby"];
      return typeof e == "string" ? e : void 0;
    }), h = (e) => {
      !i.value && e.target instanceof HTMLInputElement && e.target.checked && a.select(d.value);
    };
    return (e, u) => (c(), p("label", {
      class: B([
        "radio-group-item",
        l(a).mode.value,
        {
          checked: r.value,
          disabled: i.value,
          invalid: s.value
        }
      ]),
      for: n.value,
      "data-state": r.value ? "checked" : "unchecked",
      "data-disabled": i.value || void 0,
      "data-invalid": s.value || void 0
    }, [
      t("input", C(e.$attrs, {
        id: n.value,
        class: "radio-group-input",
        type: "radio",
        name: l(a).name.value,
        value: d.value,
        checked: r.value,
        disabled: i.value,
        required: l(a).required.value,
        "aria-invalid": s.value || void 0,
        "aria-describedby": g.value,
        onChange: h
      }), null, 16, q),
      u[0] || (u[0] = t("span", {
        class: "radio-group-indicator",
        "aria-hidden": "true"
      }, [
        t("span", { class: "radio-group-dot" })
      ], -1)),
      t("span", w, [
        t("span", A, [
          v(e.$slots, "default", {}, void 0, !0)
        ]),
        e.$slots.description ? (c(), p("span", N, [
          v(e.$slots, "description", {}, void 0, !0)
        ])) : G("", !0)
      ])
    ], 10, R));
  }
}), H = /* @__PURE__ */ E(V, [["__scopeId", "data-v-a33c148b"]]);
export {
  H as default
};
