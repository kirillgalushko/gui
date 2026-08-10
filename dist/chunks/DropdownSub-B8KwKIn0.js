import { defineComponent as w, inject as f, provide as m, openBlock as g, createBlock as v, mergeProps as _, unref as C, withCtx as s, createElementVNode as d, renderSlot as c } from "vue";
import x from "./Dropdown-BtaoLYy0.js";
import { d as r, u as H } from "./useDropdownSubmenu-bt07zy60.js";
import { _ as D } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/DropdownSub-B1sfoOux.css';const F = { class: "dropdown-sub-trigger" }, M = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "DropdownSub",
  props: {
    contentWidth: {},
    contentMaxWidth: {},
    contentPadding: {}
  },
  setup(i) {
    const n = i, t = f(r, null), o = H();
    m(r, o);
    const a = () => {
      t == null || t.show(), o.setHovered("content", !0);
    }, p = () => {
      o.setHovered("content", !1), t == null || t.scheduleHide();
    }, h = () => {
      t == null || t.show(), o.setFocused("content", !0);
    }, u = () => {
      o.setFocused("content", !1), t == null || t.scheduleHide();
    }, l = (e) => {
      e || o.hide();
    };
    return (e, W) => (g(), v(x, _(e.$attrs, {
      shown: C(o).shown.value,
      "content-width": n.contentWidth,
      "content-max-width": n.contentMaxWidth,
      "content-padding": n.contentPadding,
      stretched: "",
      "instant-move": "",
      placement: "right-start",
      triggers: [],
      "popper-triggers": [],
      "no-auto-focus": !0,
      "onUpdate:shown": l
    }), {
      popper: s(() => [
        d("div", {
          onMouseenter: a,
          onMouseleave: p,
          onFocusin: h,
          onFocusout: u
        }, [
          c(e.$slots, "popper", {}, void 0, !0)
        ], 32)
      ]),
      default: s(() => [
        d("div", F, [
          c(e.$slots, "default", {}, void 0, !0)
        ])
      ]),
      _: 3
    }, 16, ["shown", "content-width", "content-max-width", "content-padding"]));
  }
}), j = /* @__PURE__ */ D(M, [["__scopeId", "data-v-62a92c73"]]);
export {
  j as default
};
