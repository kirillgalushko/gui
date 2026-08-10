import { defineComponent as f, cloneVNode as u, Fragment as d, Comment as h, Text as m } from "vue";
const o = (t) => t.flatMap((r) => r.type === d && Array.isArray(r.children) ? o(r.children) : r.type === h ? [] : r.type === m && String(r.children ?? "").trim() === "" ? [] : [r]), C = f({
  name: "AsChild",
  inheritAttrs: !1,
  setup(t, { attrs: r, slots: e }) {
    return () => {
      var a;
      const n = o(((a = e.default) == null ? void 0 : a.call(e)) ?? []);
      if (n.length !== 1)
        throw new Error("asChild ожидает ровно один корневой элемент");
      const i = n[0];
      if (!i)
        throw new Error("asChild не получил корневой элемент");
      return u(i, r, !0);
    };
  }
});
export {
  C as A
};
