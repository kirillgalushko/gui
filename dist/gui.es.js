import { defineComponent as r, openBlock as a, createElementBlock as l, mergeProps as _, renderSlot as d, createBlock as v, resolveDynamicComponent as f, normalizeClass as i, withCtx as $, useModel as h, withDirectives as g, vModelDynamic as b, ref as p, normalizeStyle as k, createElementVNode as y } from "vue";
const C = /* @__PURE__ */ r({
  __name: "Button",
  props: {
    mode: {}
  },
  setup(s) {
    const e = s;
    return (t, o) => (a(), l("button", _(t.$attrs, {
      class: ["button", e.mode]
    }), [
      d(t.$slots, "default", {}, void 0, !0)
    ], 16));
  }
}), n = (s, e) => {
  const t = s.__vccOpts || s;
  for (const [o, c] of e)
    t[o] = c;
  return t;
}, G = /* @__PURE__ */ n(C, [["__scopeId", "data-v-fa182caa"]]), I = /* @__PURE__ */ r({
  __name: "Card",
  props: {
    interactive: { type: Boolean, default: !1 },
    onClick: {},
    background: { default: "default" },
    stretched: { type: Boolean }
  },
  setup(s) {
    const e = s;
    return (t, o) => (a(), v(f(e.interactive ? "button" : "div"), {
      class: i(["card", e.background, { interactive: e.interactive, stretched: e.stretched }]),
      onClick: t.onClick
    }, {
      default: $(() => [
        d(t.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class", "onClick"]));
  }
}), X = /* @__PURE__ */ n(I, [["__scopeId", "data-v-236b4a5d"]]), B = /* @__PURE__ */ r({
  __name: "Gap",
  props: {
    direction: {},
    default: {}
  },
  setup(s) {
    const e = s;
    return (t, o) => (a(), l("div", {
      class: i(["gap", e.direction, { [`gap-${e.default}`]: !!e.default }])
    }, [
      d(t.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), F = /* @__PURE__ */ n(B, [["__scopeId", "data-v-99b11cd2"]]), w = /* @__PURE__ */ r({
  __name: "Input",
  props: {
    modelValue: {},
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(s) {
    const e = h(s, "modelValue");
    return (t, o) => g((a(), l("input", _(t.$attrs, {
      "onUpdate:modelValue": o[0] || (o[0] = (c) => e.value = c),
      class: "input"
    }), null, 16)), [
      [b, e.value]
    ]);
  }
}), N = /* @__PURE__ */ n(w, [["__scopeId", "data-v-a86397d3"]]), z = /* @__PURE__ */ r({
  __name: "Row",
  props: {
    fullHeight: { type: Boolean }
  },
  setup(s) {
    const e = s;
    return (t, o) => (a(), l("div", {
      class: i(["row", { fullHeight: e.fullHeight }])
    }, [
      d(t.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), O = /* @__PURE__ */ n(z, [["__scopeId", "data-v-ceda7a70"]]), S = /* @__PURE__ */ r({
  __name: "Sidebar",
  setup(s) {
    const e = p(400), t = p(!1), o = () => {
      t.value = !0, document.addEventListener("mousemove", c), document.addEventListener("mouseup", m);
    }, c = (u) => {
      t.value && u.clientX > 0 && (e.value = u.clientX);
    }, m = () => {
      t.value = !1, document.removeEventListener("mousemove", c), document.removeEventListener("mouseup", c);
    };
    return (u, M) => (a(), l("div", {
      class: i(["sidebar"]),
      style: k({ width: `${e.value}px` })
    }, [
      y("div", {
        class: "resize-handle",
        onMousedown: o
      }, null, 32),
      d(u.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), P = /* @__PURE__ */ n(S, [["__scopeId", "data-v-f6b249d6"]]), E = /* @__PURE__ */ r({
  __name: "Stack",
  props: {
    direction: {},
    gap: {},
    fullHeight: { type: Boolean }
  },
  setup(s) {
    const e = s;
    return (t, o) => (a(), l("div", {
      class: i(["stack", e.direction, { [`gap-${e.gap}`]: !!t.gap, fullHeight: e.fullHeight }])
    }, [
      d(t.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), U = /* @__PURE__ */ n(E, [["__scopeId", "data-v-17a9b12c"]]), H = /* @__PURE__ */ r({
  __name: "Tab",
  props: {
    selected: { type: Boolean },
    onClick: { type: Function }
  },
  setup(s) {
    const e = s;
    return (t, o) => (a(), l("div", {
      onClick: o[0] || (o[0] = //@ts-ignore
      (...c) => e.onClick && e.onClick(...c)),
      class: i(["tab", { selected: e.selected }])
    }, [
      d(t.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), j = /* @__PURE__ */ n(H, [["__scopeId", "data-v-53dd07b4"]]), R = {}, T = {
  class: /* @__PURE__ */ i(["tabs"])
};
function V(s, e) {
  return a(), l("div", T, [
    d(s.$slots, "default", {}, void 0, !0)
  ]);
}
const q = /* @__PURE__ */ n(R, [["render", V], ["__scopeId", "data-v-4a70ea5c"]]), L = /* @__PURE__ */ r({
  __name: "Text",
  props: {
    typography: {},
    clamp: {},
    ellipsis: { type: Boolean },
    mode: { default: "default" }
  },
  setup(s) {
    const e = s;
    return (t, o) => (a(), l("div", {
      class: i([e.typography, e.mode, {
        ellipsis: t.ellipsis,
        clamp: t.clamp,
        [`clamp-${t.clamp}`]: !!t.clamp
      }])
    }, [
      d(t.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), A = /* @__PURE__ */ n(L, [["__scopeId", "data-v-c7b86e75"]]);
export {
  G as Button,
  X as Card,
  F as Gap,
  N as Input,
  O as Row,
  P as Sidebar,
  U as Stack,
  j as Tab,
  q as Tabs,
  A as Text
};
