import { defineComponent as o, openBlock as r, createBlock as t, withCtx as n, renderSlot as p } from "vue";
import { B as a } from "./BaseMenuGroup-DY94gyLc.js";
const c = /* @__PURE__ */ o({
  __name: "DropdownGroup",
  setup(s) {
    return (e, u) => (r(), t(a, { role: "menu" }, {
      default: n(() => [
        p(e.$slots, "default")
      ]),
      _: 3
    }));
  }
});
export {
  c as _
};
