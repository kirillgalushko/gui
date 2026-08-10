import { defineComponent as s, computed as l, unref as p, openBlock as o, createElementBlock as c, normalizeStyle as m, createElementVNode as u, createBlock as f, createCommentVNode as _, createVNode as t, renderSlot as h } from "vue";
import k from "./Skeleton-DzpDEZnJ.js";
import { _ as y } from "./AvatarSkeleton.vue_vue_type_script_setup_true_lang-BVDs9WDv.js";
import a from "./TextSkeleton-c3hqY6XB.js";
import { O as g } from "./index-BQgYVE5h.js";
import { _ as x } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/CardSkeleton--C4UXHiD.css';const v = { class: "card-skeleton-header" }, w = /* @__PURE__ */ s({
  __name: "CardSkeleton",
  props: {
    loading: { type: Boolean },
    width: { default: "320px" },
    padding: { default: 8 },
    borderRadius: { default: 16 },
    withAvatar: { type: Boolean, default: !0 }
  },
  setup(r) {
    const e = r, d = g(() => e.loading), n = l(() => ({
      width: e.width,
      padding: `${e.padding}px`,
      borderRadius: `${e.borderRadius}px`
    }));
    return (i, S) => p(d) ? (o(), c("div", {
      key: 0,
      class: "card-skeleton",
      style: m(n.value),
      "aria-hidden": "true"
    }, [
      u("div", v, [
        e.withAvatar ? (o(), f(y, { key: 0 })) : _("", !0),
        t(a, {
          lines: 2,
          width: ["60%", "42%"],
          typography: "label-2"
        })
      ]),
      t(k, {
        height: "120px",
        radius: "12px"
      }),
      t(a, {
        lines: 3,
        "last-line-width": "64%"
      })
    ], 4)) : h(i.$slots, "default", { key: 1 }, void 0, !0);
  }
}), V = /* @__PURE__ */ x(w, [["__scopeId", "data-v-c50f1b3f"]]);
export {
  V as default
};
