import { defineComponent as a, openBlock as l, createBlock as p, withCtx as t, createVNode as o, createTextVNode as n, toDisplayString as r } from "vue";
import d from "./Modal-_ciLoK1q.js";
import c from "./Button-CyAGLh2u.js";
import s from "./Text-CzCPgMJQ.js";
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
    return (m, u) => (l(), p(d, {
      isOpened: e.isOpened.value,
      title: e.title.value
    }, {
      footer: t(() => [
        o(c, {
          mode: "ghost",
          onClick: e.reject.value
        }, {
          default: t(() => [
            n(r(e.cancelButtonText), 1)
          ]),
          _: 1
        }, 8, ["onClick"]),
        o(c, {
          mode: "accent",
          onClick: e.resolve.value
        }, {
          default: t(() => [
            n(r(e.confirmButtonText), 1)
          ]),
          _: 1
        }, 8, ["onClick"])
      ]),
      default: t(() => [
        o(s, {
          typography: "paragraph-1",
          mode: "secondary"
        }, {
          default: t(() => [
            n(r(e.description), 1)
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
