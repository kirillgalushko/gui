import { defineComponent as p, ref as s, provide as c, watchEffect as m, openBlock as u, createElementBlock as h, normalizeClass as d, createElementVNode as b, normalizeStyle as v, renderSlot as _ } from "vue";
import { a as x, b as y } from "./index-D5rI4VW1.js";
import { _ as z } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/Tabs-PAWFuxJq.css';const C = /* @__PURE__ */ p({
  __name: "Tabs",
  props: {
    value: {},
    onChange: {},
    size: { default: "large" },
    stretched: { type: Boolean }
  },
  setup(i) {
    const a = s(!0), t = i, f = (e) => {
      a.value = !1, t.onChange(e);
    }, l = x(t.value, f);
    c("tabs", l), c("stretched", t.stretched);
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
    return m(() => {
      n();
    }), y(o, n), (e, E) => (u(), h("div", {
      ref_key: "tabsElementRef",
      ref: o,
      class: d(["tabs", t.size, { stretched: t.stretched }])
    }, [
      b("div", {
        class: d(["slider", { animated: !a.value }]),
        style: v(r.value)
      }, null, 6),
      _(e.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), k = /* @__PURE__ */ z(C, [["__scopeId", "data-v-8c8284e0"]]);
export {
  k as default
};
