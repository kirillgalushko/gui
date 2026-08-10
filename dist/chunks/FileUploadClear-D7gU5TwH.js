import { defineComponent as r, inject as i, unref as t, openBlock as n, createBlock as d, withCtx as s, renderSlot as p, createTextVNode as u, toDisplayString as c, createCommentVNode as f } from "vue";
import m from "./Button-DBIwBw8Q.js";
import { f as C } from "./context-CiuKGLtT.js";
const x = /* @__PURE__ */ r({
  __name: "FileUploadClear",
  props: {
    label: { default: "Очистить" }
  },
  setup(o) {
    const l = o, e = i(C);
    if (e === void 0)
      throw new Error("FileUploadClear must be used inside FileUpload");
    return (a, b) => t(e).files.value.length > 0 ? (n(), d(m, {
      key: 0,
      type: "button",
      mode: "ghost",
      size: "small",
      disabled: t(e).disabled.value,
      onClick: t(e).clear
    }, {
      default: s(() => [
        p(a.$slots, "default", {}, () => [
          u(c(l.label), 1)
        ])
      ]),
      _: 3
    }, 8, ["disabled", "onClick"])) : f("", !0);
  }
});
export {
  x as default
};
