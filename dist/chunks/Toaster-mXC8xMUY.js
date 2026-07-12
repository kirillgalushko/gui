import { defineComponent as o, openBlock as s, createBlock as a, unref as n, mergeProps as r } from "vue";
import { T as l } from "./index-D5rI4VW1.js";
import '../assets/Toaster-_jOt9C2w.css';const f = /* @__PURE__ */ o({
  __name: "Toaster",
  props: {
    id: {},
    invert: { type: Boolean },
    theme: { default: "system" },
    position: { default: "bottom-center" },
    closeButtonPosition: {},
    hotkey: {},
    richColors: { type: Boolean, default: !0 },
    expand: { type: Boolean },
    duration: {},
    gap: { default: 12 },
    visibleToasts: { default: 4 },
    closeButton: { type: Boolean, default: !0 },
    toastOptions: {},
    class: {},
    style: {},
    offset: {},
    mobileOffset: {},
    dir: {},
    swipeDirections: {},
    icons: {},
    containerAriaLabel: {}
  },
  setup(e) {
    const t = e;
    return (i, p) => (s(), a(n(l), r(t, { class: "Toaster" }), null, 16));
  }
});
export {
  f as default
};
