import { openBlock as w, createElementBlock as k, createElementVNode as A, defineComponent as E, mergeModels as S, useModel as $, createBlock as x, mergeProps as B, withCtx as f, renderSlot as h, createVNode as C, unref as M, nextTick as y } from "vue";
import { i as D } from "./IconAccessibleFilled-DFPdopZN.js";
import T from "./Input-BLQK2c0I.js";
import { j as g, k as b, l as j, m as v } from "./index-BQgYVE5h.js";
const z = {}, L = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" },
  viewBox: "0 0 24 24"
};
function N(d, r) {
  return w(), k("svg", L, r[0] || (r[0] = [
    A("path", { d: "M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" }, null, -1)
  ]));
}
const _ = /* @__PURE__ */ D(z, [["render", N]]), q = /* @__PURE__ */ E({
  inheritAttrs: !1,
  __name: "PhoneInput",
  props: {
    modelValue: { default: "" },
    modelModifiers: {}
  },
  emits: /* @__PURE__ */ S(["beforeinput", "input", "paste"], ["update:modelValue"]),
  setup(d, { emit: r }) {
    const o = $(d, "modelValue"), s = r, u = (e) => e instanceof HTMLInputElement ? e : null, c = async (e, t) => {
      e !== null && (await y(), e.setSelectionRange(t, t));
    }, V = (e) => {
      if (s("beforeinput", e), e.defaultPrevented || e.data === null) return;
      const t = u(e.target), n = (t == null ? void 0 : t.selectionStart) ?? o.value.length, l = (t == null ? void 0 : t.selectionEnd) ?? o.value.length;
      g({
        currentValue: o.value,
        insertedValue: e.data,
        selectionStart: n,
        selectionEnd: l
      }) || e.preventDefault();
    }, I = (e) => {
      var p;
      if (s("paste", e), e.defaultPrevented) return;
      const t = ((p = e.clipboardData) == null ? void 0 : p.getData("text")) ?? "";
      if (b(t)) return;
      e.preventDefault();
      const n = u(e.target), l = (n == null ? void 0 : n.selectionStart) ?? o.value.length, a = (n == null ? void 0 : n.selectionEnd) ?? o.value.length, i = j(t);
      if (!g({
        currentValue: o.value,
        insertedValue: i,
        selectionStart: l,
        selectionEnd: a
      }))
        return;
      const m = v({
        value: `${o.value.slice(0, l)}${i}${o.value.slice(a)}`,
        caret: l + i.length
      });
      o.value = m.value, c(n, m.caret);
    }, P = (e) => {
      const t = u(e.target), n = (t == null ? void 0 : t.value) ?? o.value, l = (t == null ? void 0 : t.selectionStart) ?? n.length, a = v({ value: n, caret: l });
      o.value = a.value, c(t, a.caret), s("input", e);
    };
    return (e, t) => (w(), x(T, B(e.$attrs, {
      modelValue: o.value,
      "onUpdate:modelValue": t[0] || (t[0] = (n) => o.value = n),
      type: "tel",
      inputmode: "tel",
      autocomplete: "tel",
      placeholder: "+7 (999) 123-45-67",
      onBeforeinput: V,
      onPaste: I,
      onInput: P
    }), {
      leftAdornment: f(() => [
        h(e.$slots, "leftAdornment", {}, () => [
          C(M(_))
        ])
      ]),
      rightAdornment: f(() => [
        h(e.$slots, "rightAdornment")
      ]),
      _: 3
    }, 16, ["modelValue"]));
  }
});
export {
  q as default
};
