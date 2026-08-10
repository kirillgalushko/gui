import { defineComponent as p, computed as c, unref as u, openBlock as e, createElementBlock as o, Fragment as f, renderList as _, createVNode as a, createBlock as k, createCommentVNode as h, renderSlot as x } from "vue";
import s from "./Skeleton-DzpDEZnJ.js";
import { _ as g } from "./ButtonSkeleton.vue_vue_type_script_setup_true_lang-CHZESmbX.js";
import { O as y } from "./index-BQgYVE5h.js";
import { _ as v } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/FormSkeleton-B8Gq973n.css';const B = {
  key: 0,
  class: "form-skeleton",
  "aria-hidden": "true"
}, S = /* @__PURE__ */ p({
  __name: "FormSkeleton",
  props: {
    loading: { type: Boolean },
    fields: { default: 3 },
    button: { type: Boolean, default: !0 }
  },
  setup(d) {
    const t = d, i = y(() => t.loading), l = c(
      () => Array.from({ length: t.fields }, (r, n) => n)
    );
    return (r, n) => u(i) ? (e(), o("div", B, [
      (e(!0), o(f, null, _(l.value, (m) => (e(), o("div", {
        key: m,
        class: "form-skeleton-field"
      }, [
        a(s, {
          width: "96px",
          height: "16px",
          radius: "6px"
        }),
        a(s, {
          height: "40px",
          radius: "10px"
        })
      ]))), 128)),
      t.button ? (e(), k(g, {
        key: 0,
        width: "128px"
      })) : h("", !0)
    ])) : x(r.$slots, "default", { key: 1 }, void 0, !0);
  }
}), I = /* @__PURE__ */ v(S, [["__scopeId", "data-v-da386b99"]]);
export {
  I as default
};
