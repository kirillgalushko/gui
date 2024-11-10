import { defineComponent as m, ref as n, provide as i, watchEffect as b, onMounted as h, onBeforeUnmount as _, openBlock as x, createElementBlock as y, normalizeClass as v, createElementVNode as w, normalizeStyle as C, renderSlot as S } from "vue";
import { u as T } from "./index-DdoF6KC2.js";
import { _ as z } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/Tabs-BEiP7Lx2.css';const B = /* @__PURE__ */ m({
  __name: "Tabs",
  props: {
    value: {},
    onChange: { type: Function },
    stretched: { type: Boolean }
  },
  setup(f) {
    const c = n(!0), s = f, p = (e) => {
      c.value = !1, s.onChange(e);
    }, o = T(s.value, p);
    i("tabs", o), i("stretched", s.stretched);
    const r = n(null), l = n(null), d = n({
      width: "0px",
      transform: "translateX(0px)"
    }), a = () => {
      const e = o.selectedTab.value;
      e && (d.value = {
        width: `${e.offsetWidth}px`,
        transform: `translateX(${e.offsetLeft}px)`
      });
    };
    return b(() => {
      a();
    }), h(() => {
      a(), r.value = new ResizeObserver(a), l.value = new MutationObserver(a), o.tabs.value.forEach((e) => {
        var t, u;
        (t = r.value) == null || t.observe(e), (u = l.value) == null || u.observe(e);
      });
    }), _(() => {
      var e, t;
      (e = r.value) == null || e.disconnect(), (t = l.value) == null || t.disconnect();
    }), (e, t) => (x(), y("div", {
      class: v(["tabs", { stretched: s.stretched }])
    }, [
      w("div", {
        class: v(["slider", { animated: !c.value }]),
        style: C(d.value)
      }, null, 6),
      S(e.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), $ = /* @__PURE__ */ z(B, [["__scopeId", "data-v-59698ed2"]]);
export {
  $ as default
};
