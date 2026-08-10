import { defineComponent as U, ref as E, computed as o, openBlock as D, createBlock as g, withCtx as s, createVNode as i, createElementVNode as F, unref as M, createTextVNode as R, toDisplayString as H, createCommentVNode as N } from "vue";
import { d as J } from "./IconChevronLeftOutline-Dni7wod7.js";
import { d as K } from "./IconChevronRightOutline-B9UH_Yk2.js";
import f from "./Button-DBIwBw8Q.js";
import Q from "./ButtonGroup-CX3_2NXK.js";
import j from "./Dropdown-BtaoLYy0.js";
import L from "./Calendar-CCGXg07r.js";
import X from "./Gap-DQv4R87n.js";
import { H as S, K as d, Q as Z, R as ee, S as te, T as ae, U as oe, G as re, V as ne, W as se, J as B, I as V } from "./index-BQgYVE5h.js";
import { _ as ie } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/DateNavigator-Ym5Qke0q.css';const le = { class: "date-navigator" }, ue = /* @__PURE__ */ U({
  __name: "DateNavigator",
  props: {
    value: {},
    mode: { default: "day" },
    buttonMode: { default: "outline" },
    size: { default: "large" },
    onChange: {},
    minDate: {},
    maxDate: {}
  },
  setup(O) {
    const e = O, l = E(!1), c = (t, a) => a === "week" ? te(t) : a === "month" ? ae(t) : a === "year" ? oe(t) : re(t), v = (t, a, r) => a === "threeDays" ? d(t, r * 3) : a === "week" ? d(t, r * 7) : a === "twoWeeks" ? d(t, r * 14) : a === "month" ? ne(t, r) : a === "year" ? se(t, r) : d(t, r), u = (t, a) => {
      const r = c(t, a);
      return {
        start: r,
        end: v(r, a, 1)
      };
    }, n = o(() => c(e.value, e.mode)), p = o(
      () => u(n.value, e.mode)
    ), P = o(
      () => v(n.value, e.mode, -1)
    ), T = o(
      () => v(n.value, e.mode, 1)
    ), h = o(
      () => u(P.value, e.mode)
    ), y = o(() => u(T.value, e.mode)), b = (t) => e.minDate ? !B(t.end, e.minDate) : !1, x = (t) => e.maxDate ? B(t.start, e.maxDate) : !1, W = (t, a) => !V(t, a.start) && V(t, a.end), w = o(
      () => b(h.value)
    ), z = o(() => x(y.value)), k = o(() => u(/* @__PURE__ */ new Date(), e.mode)), _ = o(
      () => b(k.value) || x(k.value)
    ), C = o(
      () => !W(/* @__PURE__ */ new Date(), p.value) && !_.value
    ), Y = o(() => e.mode === "threeDays" || e.mode === "week" || e.mode === "twoWeeks" ? `${S(p.value.start)} - ${S(d(p.value.end, -1))}` : e.mode === "month" ? Z(n.value) : e.mode === "year" ? String(n.value.getFullYear()) : ee(n.value)), m = (t) => {
      const a = c(t, e.mode);
      e.onChange({
        value: a,
        mode: e.mode,
        range: u(a, e.mode)
      });
    }, G = () => {
      l.value = !l.value;
    }, I = () => {
      w.value || m(h.value.start);
    }, $ = () => {
      z.value || m(y.value.start);
    }, q = () => {
      _.value || m(/* @__PURE__ */ new Date());
    }, A = ({ date: t }) => {
      m(t), l.value = !1;
    };
    return (t, a) => (D(), g(j, {
      shown: l.value,
      "onUpdate:shown": a[0] || (a[0] = (r) => l.value = r),
      triggers: [],
      placement: "bottom",
      distance: 8
    }, {
      popper: s(() => [
        i(L, {
          "model-value": n.value,
          "min-date": e.minDate,
          "max-date": e.maxDate,
          onSelect: A,
          size: "small"
        }, null, 8, ["model-value", "min-date", "max-date"])
      ]),
      default: s(() => [
        F("div", le, [
          i(Q, { "aria-label": "Выбор даты" }, {
            default: s(() => [
              i(f, {
                mode: e.buttonMode,
                size: e.size,
                squared: "",
                type: "button",
                "aria-label": "Предыдущий день",
                disabled: w.value,
                onClick: I
              }, {
                default: s(() => [
                  i(M(J))
                ]),
                _: 1
              }, 8, ["mode", "size", "disabled"]),
              i(f, {
                mode: e.buttonMode,
                size: e.size,
                type: "button",
                "aria-haspopup": "dialog",
                "aria-expanded": l.value,
                onClick: G
              }, {
                default: s(() => [
                  R(H(Y.value), 1)
                ]),
                _: 1
              }, 8, ["mode", "size", "aria-expanded"]),
              i(f, {
                mode: e.buttonMode,
                size: e.size,
                squared: "",
                type: "button",
                "aria-label": "Следующий день",
                disabled: z.value,
                onClick: $
              }, {
                default: s(() => [
                  i(M(K))
                ]),
                _: 1
              }, 8, ["mode", "size", "disabled"])
            ]),
            _: 1
          }),
          C.value ? (D(), g(X, {
            key: 0,
            direction: "horizontal",
            size: 2
          })) : N("", !0),
          C.value ? (D(), g(f, {
            key: 1,
            mode: e.buttonMode,
            size: e.size,
            type: "button",
            onClick: q
          }, {
            default: s(() => a[1] || (a[1] = [
              R(" Сегодня ")
            ])),
            _: 1
          }, 8, ["mode", "size"])) : N("", !0)
        ])
      ]),
      _: 1
    }, 8, ["shown"]));
  }
}), be = /* @__PURE__ */ ie(ue, [["__scopeId", "data-v-24fe2f18"]]);
export {
  be as default
};
