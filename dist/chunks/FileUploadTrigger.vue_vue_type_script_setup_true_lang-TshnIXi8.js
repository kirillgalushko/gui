import { defineComponent as i, inject as s, computed as a, openBlock as n, createBlock as p, unref as o, withModifiers as c, withCtx as u, createVNode as f, renderSlot as m, createTextVNode as h, toDisplayString as b } from "vue";
import { d as _ } from "./IconUploadOutline-C40pEcAR.js";
import v from "./Button-DBIwBw8Q.js";
import { f as z } from "./context-CiuKGLtT.js";
const y = /* @__PURE__ */ i({
  __name: "FileUploadTrigger",
  props: {
    label: { default: "Выбрать файлы" },
    mode: { default: "default" },
    size: { default: void 0 },
    stretched: { type: Boolean, default: !1 }
  },
  setup(d) {
    const e = d, t = s(z);
    if (t === void 0)
      throw new Error("FileUploadTrigger must be used inside FileUpload");
    const l = a(() => e.size ?? t.size.value);
    return (r, g) => (n(), p(v, {
      type: "button",
      mode: e.mode,
      size: l.value,
      stretched: e.stretched,
      disabled: o(t).disabled.value,
      onClick: c(o(t).open, ["stop"])
    }, {
      default: u(() => [
        f(o(_)),
        m(r.$slots, "default", {}, () => [
          h(b(e.label), 1)
        ])
      ]),
      _: 3
    }, 8, ["mode", "size", "stretched", "disabled", "onClick"]));
  }
});
export {
  y as _
};
