import { defineComponent as m, computed as p, unref as c, openBlock as e, createElementBlock as o, Fragment as u, renderList as _, createVNode as s, createBlock as k, createCommentVNode as h, renderSlot as g } from "vue";
import a from "./Skeleton-C0X3Bx_u.js";
import { _ as x } from "./ButtonSkeleton.vue_vue_type_script_setup_true_lang-Bet9mONf.js";
import { g as y } from "./index-D5rI4VW1.js";
import { _ as v } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/FormSkeleton-CwkOqdsu.css';const B = {
  key: 0,
  class: "form-skeleton",
  "aria-hidden": "true"
}, S = /* @__PURE__ */ m({
  __name: "FormSkeleton",
  props: {
    loading: { type: Boolean },
    fields: { default: 3 },
    button: { type: Boolean, default: !0 }
  },
  setup(d) {
    const t = d, i = y(() => t.loading), l = p(() => Array.from({ length: t.fields }, (r, n) => n));
    return (r, n) => c(i) ? (e(), o("div", B, [
      (e(!0), o(u, null, _(l.value, (f) => (e(), o("div", {
        key: f,
        class: "form-skeleton-field"
      }, [
        s(a, {
          width: "96px",
          height: "16px",
          radius: "6px"
        }),
        s(a, {
          height: "40px",
          radius: "10px"
        })
      ]))), 128)),
      t.button ? (e(), k(x, {
        key: 0,
        width: "128px"
      })) : h("", !0)
    ])) : g(r.$slots, "default", { key: 1 }, void 0, !0);
  }
}), I = /* @__PURE__ */ v(S, [["__scopeId", "data-v-e08fdff4"]]);
export {
  I as default
};
