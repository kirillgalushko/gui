import { defineComponent as p, ref as r, provide as d, watchEffect as v, onMounted as m, onBeforeUnmount as h, openBlock as b, createElementBlock as _, normalizeClass as i, createElementVNode as x, normalizeStyle as y, renderSlot as C } from "vue";
import { u as S } from "./index-D36B4cfA.js";
import { _ as T } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/Tabs-CPiLqCM1.css';const w = /* @__PURE__ */ p({
  __name: "Tabs",
  props: {
    value: {},
    onChange: { type: Function },
    stretched: { type: Boolean }
  },
  setup(u) {
    const l = r(!0), t = u, f = (e) => {
      l.value = !1, t.onChange(e);
    }, s = S(t.value, f);
    d("tabs", s), d("stretched", t.stretched);
    const a = r(null), c = r({
      width: "0px",
      transform: "translateX(0px)"
    }), o = () => {
      const e = s.selectedTab.value;
      e && (c.value = {
        width: `${e.offsetWidth}px`,
        transform: `translateX(${e.offsetLeft}px)`
      });
    };
    return v(() => {
      o();
    }), m(() => {
      o(), a.value = new ResizeObserver(o), s.tabs.value.forEach((e) => {
        var n;
        (n = a.value) == null || n.observe(e);
      });
    }), h(() => {
      var e;
      (e = a.value) == null || e.disconnect();
    }), (e, n) => (b(), _("div", {
      class: i(["tabs", { stretched: t.stretched }])
    }, [
      x("div", {
        class: i(["slider", { animated: !l.value }]),
        style: y(c.value)
      }, null, 6),
      C(e.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), g = /* @__PURE__ */ T(w, [["__scopeId", "data-v-cb84fc23"]]);
export {
  g as default
};
