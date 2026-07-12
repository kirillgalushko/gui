import { defineComponent as i, useAttrs as d, computed as o, openBlock as t, createBlock as a, Transition as s, withCtx as r, createElementBlock as f, normalizeStyle as g, createElementVNode as l, createVNode as u, mergeProps as _, unref as y, createTextVNode as x, toDisplayString as h, createCommentVNode as v } from "vue";
import E from "./Text-0p81GmwH.js";
import { _ as k } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/FormError-B9vaWzNu.css';const A = { class: "form-error-content" }, B = { class: "form-error-message-box" }, N = /* @__PURE__ */ i({
  __name: "FormError",
  props: {
    message: {},
    gap: { default: "var(--gap-1)" },
    Element: { default: "p" },
    typography: { default: "label-2" },
    clamp: {},
    ellipsis: { type: Boolean },
    color: { default: "negative" },
    textAlign: { default: "inherit" }
  },
  setup(m) {
    const e = m, n = d(), c = o(() => ({
      Element: e.Element,
      typography: e.typography,
      clamp: e.clamp,
      ellipsis: e.ellipsis,
      color: e.color,
      textAlign: e.textAlign
    })), p = o(() => ({
      "--form-error-gap": e.gap
    }));
    return (V, b) => (t(), a(s, { name: "form-error" }, {
      default: r(() => [
        e.message ? (t(), f("div", {
          key: 0,
          class: "form-error",
          style: g(p.value)
        }, [
          l("div", A, [
            l("div", B, [
              u(s, {
                name: "form-error-message",
                mode: "out-in"
              }, {
                default: r(() => [
                  (t(), a(E, _({ ...y(n), ...c.value }, {
                    key: e.message
                  }), {
                    default: r(() => [
                      x(h(e.message), 1)
                    ]),
                    _: 1
                  }, 16))
                ]),
                _: 1
              })
            ])
          ])
        ], 4)) : v("", !0)
      ]),
      _: 1
    }));
  }
}), P = /* @__PURE__ */ k(N, [["__scopeId", "data-v-bcd56200"]]);
export {
  P as default
};
