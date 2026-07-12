import { defineComponent as G, ref as I, computed as o, openBlock as D, createBlock as g, withCtx as s, createVNode as i, createElementVNode as U, unref as M, createTextVNode as R, toDisplayString as j, createCommentVNode as N } from "vue";
import { C as H, d as J } from "./Calendar-CTqUF14l.js";
import { d as K } from "./IconChevronRightOutline-B9UH_Yk2.js";
import f from "./Button-B4EJCtdb.js";
import L from "./ButtonGroup-DlA53B60.js";
import Q from "./Dropdown-BzAtxMa0.js";
import X from "./Gap-C353wviN.js";
import { v as B, k as d, w as Z, x as ee, y as te, A as ae, C as oe, m as re, E as ne, F as se, r as S, q as O } from "./index-D5rI4VW1.js";
import { _ as ie } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/DateNavigator-D0yJNvSL.css';const le = { class: "date-navigator" }, ue = /* @__PURE__ */ G({
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
  setup(P) {
    const e = P, l = I(!1), c = (t, a) => a === "week" ? te(t) : a === "month" ? ae(t) : a === "year" ? oe(t) : re(t), v = (t, a, r) => a === "threeDays" ? d(t, r * 3) : a === "week" ? d(t, r * 7) : a === "twoWeeks" ? d(t, r * 14) : a === "month" ? ne(t, r) : a === "year" ? se(t, r) : d(t, r), u = (t, a) => {
      const r = c(t, a);
      return {
        start: r,
        end: v(r, a, 1)
      };
    }, n = o(() => c(e.value, e.mode)), p = o(() => u(n.value, e.mode)), V = o(() => v(n.value, e.mode, -1)), T = o(() => v(n.value, e.mode, 1)), y = o(() => u(V.value, e.mode)), h = o(() => u(T.value, e.mode)), b = (t) => e.minDate ? !S(t.end, e.minDate) : !1, x = (t) => e.maxDate ? S(t.start, e.maxDate) : !1, W = (t, a) => !O(t, a.start) && O(t, a.end), w = o(() => b(y.value)), k = o(() => x(h.value)), z = o(() => u(/* @__PURE__ */ new Date(), e.mode)), _ = o(() => b(z.value) || x(z.value)), C = o(() => !W(/* @__PURE__ */ new Date(), p.value) && !_.value), Y = o(() => e.mode === "threeDays" || e.mode === "week" || e.mode === "twoWeeks" ? `${B(p.value.start)} - ${B(d(p.value.end, -1))}` : e.mode === "month" ? Z(n.value) : e.mode === "year" ? String(n.value.getFullYear()) : ee(n.value)), m = (t) => {
      const a = c(t, e.mode);
      e.onChange({
        value: a,
        mode: e.mode,
        range: u(a, e.mode)
      });
    }, q = () => {
      l.value = !l.value;
    }, A = () => {
      w.value || m(y.value.start);
    }, $ = () => {
      k.value || m(h.value.start);
    }, E = () => {
      _.value || m(/* @__PURE__ */ new Date());
    }, F = ({ date: t }) => {
      m(t), l.value = !1;
    };
    return (t, a) => (D(), g(Q, {
      shown: l.value,
      "onUpdate:shown": a[0] || (a[0] = (r) => l.value = r),
      triggers: [],
      placement: "bottom",
      distance: 8
    }, {
      popper: s(() => [
        i(H, {
          "model-value": n.value,
          "min-date": e.minDate,
          "max-date": e.maxDate,
          onSelect: F
        }, null, 8, ["model-value", "min-date", "max-date"])
      ]),
      default: s(() => [
        U("div", le, [
          i(L, { "aria-label": "Выбор даты" }, {
            default: s(() => [
              i(f, {
                mode: e.buttonMode,
                size: e.size,
                squared: "",
                type: "button",
                "aria-label": "Предыдущий день",
                disabled: w.value,
                onClick: A
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
                onClick: q
              }, {
                default: s(() => [
                  R(j(Y.value), 1)
                ]),
                _: 1
              }, 8, ["mode", "size", "aria-expanded"]),
              i(f, {
                mode: e.buttonMode,
                size: e.size,
                squared: "",
                type: "button",
                "aria-label": "Следующий день",
                disabled: k.value,
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
            onClick: E
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
}), he = /* @__PURE__ */ ie(ue, [["__scopeId", "data-v-9fa44a60"]]);
export {
  he as default
};
