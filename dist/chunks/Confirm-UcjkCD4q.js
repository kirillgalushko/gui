import { defineComponent as a, openBlock as l, createBlock as p, withCtx as t, createVNode as o, createTextVNode as r, toDisplayString as n } from "vue";
import d from "./Modal-CODxjuvn.js";
import i from "./Button-BpMWZZ9H.js";
import s from "./Text-D1KvsXGq.js";
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
  setup(c) {
    const e = c;
    return (m, u) => (l(), p(d, {
      isOpened: e.isOpened.value,
      title: e.title.value
    }, {
      footer: t(() => [
        o(i, {
          mode: "ghost",
          onClick: e.reject.value
        }, {
          default: t(() => [
            r(n(e.cancelButtonText), 1)
          ]),
          _: 1
        }, 8, ["onClick"]),
        o(i, {
          mode: "contrast",
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
          typography: "paragraph-1",
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
