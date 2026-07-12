import { defineComponent as l, computed as p, openBlock as d, createBlock as u, withCtx as t, createVNode as o, createTextVNode as r, toDisplayString as n } from "vue";
import { u as m } from "./index-D5rI4VW1.js";
import { _ as f } from "./AdaptiveModal.vue_vue_type_script_setup_true_lang-ogF-Y7A8.js";
import i from "./Button-B4EJCtdb.js";
import _ from "./Text-0p81GmwH.js";
const g = /* @__PURE__ */ l({
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
  setup(s) {
    const e = s, a = m(), c = p(() => a.isMobile);
    return (h, v) => (d(), u(f, {
      isOpened: e.isOpened.value,
      onClose: e.reject.value,
      title: e.title.value
    }, {
      footer: t(() => [
        o(i, {
          stretched: c.value,
          mode: "ghost",
          onClick: e.reject.value
        }, {
          default: t(() => [
            r(n(e.cancelButtonText), 1)
          ]),
          _: 1
        }, 8, ["stretched", "onClick"]),
        o(i, {
          stretched: c.value,
          mode: "contrast",
          onClick: e.resolve.value
        }, {
          default: t(() => [
            r(n(e.confirmButtonText), 1)
          ]),
          _: 1
        }, 8, ["stretched", "onClick"])
      ]),
      default: t(() => [
        o(_, {
          typography: "paragraph-1",
          color: "secondary"
        }, {
          default: t(() => [
            r(n(e.description), 1)
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["isOpened", "onClose", "title"]));
  }
});
export {
  g as default
};
