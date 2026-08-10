import { Comment as e, Fragment as t, Text as n, cloneVNode as r, defineComponent as i } from "vue";
//#region src/internal/AsChild.ts
var a = (r) => r.flatMap((r) => r.type === t && Array.isArray(r.children) ? a(r.children) : r.type === e || r.type === n && String(r.children ?? "").trim() === "" ? [] : [r]), o = i({
	name: "AsChild",
	inheritAttrs: !1,
	setup(e, { attrs: t, slots: n }) {
		return () => {
			let e = a(n.default?.() ?? []);
			if (e.length !== 1) throw Error("asChild ожидает ровно один корневой элемент");
			let i = e[0];
			if (!i) throw Error("asChild не получил корневой элемент");
			return r(i, t, !0);
		};
	}
});
//#endregion
export { o as t };
