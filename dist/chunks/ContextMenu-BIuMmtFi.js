import { defineComponent as p, computed as o, openBlock as t, createElementBlock as u, Fragment as c, createElementVNode as f, normalizeStyle as a, createBlock as n, Teleport as m, createVNode as _, Transition as x, withCtx as l, renderSlot as y, createCommentVNode as v } from "vue";
import { B as C } from "./BaseMenu-C5V3dVbJ.js";
import { _ as B } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/ContextMenu-DPITCyML.css';const S = /* @__PURE__ */ p({
  __name: "ContextMenu",
  props: {
    data: {}
  },
  setup(s) {
    const e = s, r = o(() => ({
      position: "fixed",
      left: `${e.data.position.value.x}px`,
      top: `${e.data.position.value.y}px`
    })), i = o(() => ({
      ...e.data.floatingStyles.value
    }));
    return (d, k) => (t(), u(c, null, [
      f("div", {
        ref: e.data.positionRef,
        style: a(r.value)
      }, null, 4),
      (t(), n(m, { to: "body" }, [
        _(x, { name: "fade" }, {
          default: l(() => [
            e.data.isContextMenuVisible.value ? (t(), n(C, {
              key: 0,
              ref: e.data.floatingRef,
              style: a(i.value)
            }, {
              default: l(() => [
                y(d.$slots, "default", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["style"])) : v("", !0)
          ]),
          _: 3
        })
      ]))
    ], 64));
  }
}), g = /* @__PURE__ */ B(S, [["__scopeId", "data-v-4b886c96"]]);
export {
  g as default
};
