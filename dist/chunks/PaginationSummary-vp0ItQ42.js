import { defineComponent as l, computed as o, openBlock as n, createBlock as c, withCtx as i, createTextVNode as m, toDisplayString as p } from "vue";
import s from "./Text-Cd35JtZQ.js";
const y = /* @__PURE__ */ l({
  __name: "PaginationSummary",
  props: {
    from: {},
    to: {},
    total: {}
  },
  setup(a) {
    const t = a, e = o(
      () => t.total > 0 ? `${t.from}–${t.to} из ${t.total}` : "0 из 0"
    ), r = o(
      () => t.total > 0 ? `Показаны строки с ${t.from} по ${t.to} из ${t.total}` : "Нет строк"
    );
    return (u, f) => (n(), c(s, {
      Element: "span",
      typography: "subtitle-1",
      color: "secondary",
      "aria-live": "polite",
      "aria-label": r.value
    }, {
      default: i(() => [
        m(p(e.value), 1)
      ]),
      _: 1
    }, 8, ["aria-label"]));
  }
});
export {
  y as default
};
