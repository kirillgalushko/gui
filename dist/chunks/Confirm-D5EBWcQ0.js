import { defineComponent as a, openBlock as l, createBlock as p, withCtx as t, createVNode as o, createTextVNode as r, toDisplayString as n } from "vue";
import d from "./Modal-BEI3PKTq.js";
import c from "./Button-CwShwllY.js";
import s from "./Text-Bybrs1QB.js";
const C = /* @__PURE__ */ a({
  __name: "Confirm",
  props: {
    title: {},
    description: {},
    isOpened: {},
    resolve: {},
    reject: {},
    confirmButtonText: {},
    cancelButtonText: {}
  },
  setup(i) {
    const e = i;
    return (u, m) => (l(), p(d, {
      isOpened: e.isOpened.value,
      title: e.title.value
    }, {
      footer: t(() => [
        o(c, {
          mode: "ghost",
          onClick: e.reject.value
        }, {
          default: t(() => [
            r(n(e.cancelButtonText), 1)
          ]),
          _: 1
        }, 8, ["onClick"]),
        o(c, {
          mode: "accent",
          onClick: e.resolve.value
        }, {
          default: t(() => [
            r(n(e.confirmButtonText), 1)
          ]),
          _: 1
        }, 8, ["onClick"])
      ]),
      default: t(() => [
        o(s, {
          typography: "paragraph-1-regular",
          mode: "secondary"
        }, {
          default: t(() => [
            r(n(e.description), 1)
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["isOpened", "title"]));
  }
});
export {
  C as default
};
