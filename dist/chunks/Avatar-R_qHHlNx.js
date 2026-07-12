import { defineComponent as v, ref as h, computed as n, openBlock as l, createElementBlock as i, mergeProps as _, withDirectives as g, vShow as z, createCommentVNode as $, renderSlot as k, createTextVNode as y, toDisplayString as S } from "vue";
import { _ as b } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/Avatar-BXpWXztW.css';const w = ["src"], x = /* @__PURE__ */ v({
  __name: "Avatar",
  props: {
    shape: { default: "circle" },
    color: { default: "default" },
    src: {},
    name: {},
    size: { default: "40px" }
  },
  setup(d) {
    const e = d, a = h(!1), u = n(() => {
      var r, o, c;
      const t = ((r = e.name) == null ? void 0 : r.trim().split(/\s+/).filter(Boolean)) ?? [], s = ((o = t[0]) == null ? void 0 : o[0]) ?? "", f = ((c = t[1]) == null ? void 0 : c[0]) ?? "";
      return `${s}${f}`.toUpperCase();
    });
    function p() {
      a.value = !0;
    }
    const m = n(() => {
      const t = e.shape === "square" ? {
        borderRadius: `calc(${e.size} / 4)`
      } : {};
      return {
        width: e.size,
        height: e.size,
        fontSize: `calc(${e.size} / 2.5)`,
        ...t
      };
    });
    return (t, s) => (l(), i("div", _({
      style: m.value,
      class: ["avatar", e.shape, e.color]
    }, t.$attrs), [
      e.src ? g((l(), i("img", {
        key: 0,
        onLoad: p,
        class: "avatar-image",
        src: e.src
      }, null, 40, w)), [
        [z, a.value]
      ]) : $("", !0),
      k(t.$slots, "default", {}, () => [
        y(S(u.value), 1)
      ], !0)
    ], 16));
  }
}), L = /* @__PURE__ */ b(x, [["__scopeId", "data-v-2e930385"]]);
export {
  L as default
};
