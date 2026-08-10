import { a as e, o as t, r as n, t as r } from "./floating-ui.vue-CE68TKCX.js";
import { t as i } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { t as a } from "./BaseMenu-COlcEhsb.js";
import { Fragment as o, Teleport as s, Transition as c, createBlock as l, createCommentVNode as u, createElementBlock as d, createElementVNode as f, createVNode as p, defineComponent as m, inject as h, normalizeStyle as g, openBlock as _, provide as v, ref as y, renderSlot as b, unref as x, withCtx as S } from "vue";
import '../assets/HoverMenu-wFH1_qMd.css';//#region src/components/HoverMenu/useHoverMenu.ts
var C = () => {
	let t = h("hover-submenu-shown", y()), i = h("hover-submenu-hidden", y()), a = y(!1), o = y(!1), s = y(null), c = y(null), l = y(), u = y([n(), e()]), { floatingStyles: d, update: f } = r(s, c, {
		placement: "right-start",
		middleware: u
	});
	return v("hover-submenu-shown", y(() => {
		o.value = !0;
	})), v("hover-submenu-hidden", y(() => {
		o.value = !1;
	})), {
		floatingStyles: d,
		floatingRef: c,
		targetRef: s,
		isVisible: a,
		isSubmenuVisible: o,
		hideMenu: () => {
			l.value = setTimeout(() => {
				a.value = !1, i.value?.();
			}, 100);
		},
		showHoverMenu: (e) => {
			clearTimeout(l.value), e?.preventDefault(), a.value = !0, t.value?.(), f();
		}
	};
}, w = /*@__PURE__*/ m({
	__name: "HoverMenu",
	setup(e) {
		let { targetRef: t, floatingRef: n, floatingStyles: r, isVisible: i, isSubmenuVisible: m, showHoverMenu: h, hideMenu: v } = C();
		return (e, y) => (_(), d(o, null, [f("div", {
			ref_key: "targetRef",
			ref: t,
			onMouseenter: y[0] ||= (...e) => x(h) && x(h)(...e),
			onMouseleave: y[1] ||= (...e) => x(v) && x(v)(...e),
			class: "hover-menu-wrapper"
		}, [b(e.$slots, "default", { ref: "testRef" }, void 0, !0)], 544), (_(), l(s, { to: "body" }, [p(c, { name: "fade" }, {
			default: S(() => [x(i) || x(m) ? (_(), d("div", {
				key: 0,
				onMouseenter: y[2] ||= (...e) => x(h) && x(h)(...e),
				onMouseleave: y[3] ||= (...e) => x(v) && x(v)(...e),
				ref_key: "floatingRef",
				ref: n
			}, [p(a, { style: g(x(r)) }, {
				default: S(() => [b(e.$slots, "menu", {}, void 0, !0)]),
				_: 3
			}, 8, ["style"])], 544)) : u("", !0)]),
			_: 3
		})]))], 64));
	}
}), T = /* @__PURE__ */ t({ default: () => E }), E = /*#__PURE__*/ i(w, [["__scopeId", "data-v-99689c20"]]);
//#endregion
export { T as n, E as t };
