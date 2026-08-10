import { defineComponent as h, computed as i, unref as B, openBlock as l, createBlock as d, withCtx as t, createVNode as n, createTextVNode as r, toDisplayString as c, createCommentVNode as _ } from "vue";
import { a as v } from "./index-BQgYVE5h.js";
import { _ as y } from "./AdaptiveModal.vue_vue_type_script_setup_true_lang-DiMunDJv.js";
import s from "./Button-DBIwBw8Q.js";
import C from "./Stack-CgwImR5w.js";
import x from "./Text-Cd35JtZQ.js";
const V = /* @__PURE__ */ h({
  __name: "Confirm",
  props: {
    title: {},
    description: {},
    isOpened: {},
    resolve: {},
    secondary: {},
    reject: {},
    confirmButtonText: {},
    secondaryButtonText: {},
    cancelButtonText: {}
  },
  setup(u) {
    const e = u, p = v(), o = i(() => p.isMobile), m = i(
      () => !!B(e.secondaryButtonText) && !!e.secondary
    ), f = () => {
      var a;
      return (a = e.secondary) == null ? void 0 : a.value();
    };
    return (a, k) => (l(), d(y, {
      isOpened: e.isOpened.value,
      onClose: e.reject.value,
      title: e.title.value,
      showCloseButton: ""
    }, {
      footer: t(() => [
        n(C, {
          stretched: "",
          direction: o.value ? "column" : "row",
          justifyContent: "end",
          gap: 2
        }, {
          default: t(() => [
            n(s, {
              stretched: o.value,
              mode: "ghost",
              onClick: e.reject.value
            }, {
              default: t(() => [
                r(c(e.cancelButtonText), 1)
              ]),
              _: 1
            }, 8, ["stretched", "onClick"]),
            m.value ? (l(), d(s, {
              key: 0,
              stretched: o.value,
              mode: "outline",
              onClick: f
            }, {
              default: t(() => [
                r(c(e.secondaryButtonText), 1)
              ]),
              _: 1
            }, 8, ["stretched"])) : _("", !0),
            n(s, {
              stretched: o.value,
              mode: "contrast",
              onClick: e.resolve.value
            }, {
              default: t(() => [
                r(c(e.confirmButtonText), 1)
              ]),
              _: 1
            }, 8, ["stretched", "onClick"])
          ]),
          _: 1
        }, 8, ["direction"])
      ]),
      default: t(() => [
        n(x, {
          typography: "paragraph-1",
          color: "secondary"
        }, {
          default: t(() => [
            r(c(e.description), 1)
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["isOpened", "onClose", "title"]));
  }
});
export {
  V as default
};
