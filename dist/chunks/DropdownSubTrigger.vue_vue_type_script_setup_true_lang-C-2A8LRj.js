import { defineComponent as i, inject as l, computed as f, openBlock as m, createBlock as v, mergeProps as g, unref as w, withCtx as $, renderSlot as x } from "vue";
import { B } from "./BaseMenuItem-BgZg369U.js";
import { d as C } from "./useDropdownSubmenu-bt07zy60.js";
const S = /* @__PURE__ */ i({
  inheritAttrs: !1,
  __name: "DropdownSubTrigger",
  props: {
    selected: { type: Boolean },
    role: {}
  },
  setup(d) {
    const a = d, o = l(C, null), u = f(() => o ? o.shown.value : void 0), n = (t) => {
      o == null || o.setHovered("trigger", t);
    }, s = (t) => {
      o == null || o.setFocused("trigger", t);
    };
    return (t, e) => (m(), v(B, g({ ...t.$attrs, ...a }, {
      "show-arrow": "",
      "aria-haspopup": "menu",
      "aria-expanded": u.value,
      onMouseenter: e[0] || (e[0] = (r) => n(!0)),
      onMouseleave: e[1] || (e[1] = (r) => n(!1)),
      onFocusin: e[2] || (e[2] = (r) => s(!0)),
      onFocusout: e[3] || (e[3] = (r) => s(!1)),
      onClick: e[4] || (e[4] = (r) => {
        var p;
        return (p = w(o)) == null ? void 0 : p.show();
      })
    }), {
      default: $(() => [
        x(t.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-expanded"]));
  }
});
export {
  S as _
};
