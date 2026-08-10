import { defineComponent as p, ref as s, provide as d, watchEffect as u, openBlock as m, createElementBlock as h, normalizeClass as c, createElementVNode as v, normalizeStyle as b, renderSlot as _ } from "vue";
import { q as x, u as y } from "./index-BQgYVE5h.js";
import { _ as z } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/Tabs-C4_YhMpb.css';const C = /* @__PURE__ */ p({
  __name: "Tabs",
  props: {
    value: {},
    onChange: {},
    size: { default: "large" },
    stretched: { type: Boolean }
  },
  setup(f) {
    const a = s(!0), t = f, i = (e) => {
      a.value = !1, t.onChange(e);
    }, l = x(t.value, i);
    d("tabs", l), d("stretched", t.stretched);
    const o = s(), r = s({
      width: "0px",
      transform: "translateX(0px)"
    }), n = () => {
      const e = l.selectedTab.value;
      e && (r.value = {
        width: `${e.offsetWidth}px`,
        transform: `translateX(${e.offsetLeft}px)`
      });
    };
    return u(() => {
      n();
    }), y(o, n), (e, E) => (m(), h("div", {
      ref_key: "tabsElementRef",
      ref: o,
      class: c(["tabs", t.size, { stretched: t.stretched }])
    }, [
      v("div", {
        class: c(["slider", { animated: !a.value }]),
        style: b(r.value)
      }, null, 6),
      _(e.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), k = /* @__PURE__ */ z(C, [["__scopeId", "data-v-f076214d"]]);
export {
  k as default
};
