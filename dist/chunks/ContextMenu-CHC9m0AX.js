import { t as e } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { t } from "./BaseMenu-COlcEhsb.js";
import { Fragment as n, Teleport as r, Transition as i, computed as a, createBlock as o, createCommentVNode as s, createElementBlock as c, createElementVNode as l, createVNode as u, defineComponent as d, normalizeStyle as f, openBlock as p, renderSlot as m, withCtx as h } from "vue";
import '../assets/ContextMenu-Dtw1kVPj.css';//#endregion
//#region src/components/ContextMenu/ContextMenu.vue
var g = /*#__PURE__*/ e(/* @__PURE__ */ d({
	__name: "ContextMenu",
	props: { data: {} },
	setup(e) {
		let d = e, g = a(() => ({
			position: "fixed",
			left: `${d.data.position.value.x}px`,
			top: `${d.data.position.value.y}px`
		})), _ = a(() => ({ ...d.data.floatingStyles.value }));
		return (e, a) => (p(), c(n, null, [l("div", {
			ref: d.data.positionRef,
			style: f(g.value)
		}, null, 4), (p(), o(r, { to: "body" }, [u(i, { name: "fade" }, {
			default: h(() => [d.data.isContextMenuVisible.value ? (p(), o(t, {
				key: 0,
				ref: d.data.floatingRef,
				style: f(_.value)
			}, {
				default: h(() => [m(e.$slots, "default", {}, void 0, !0)]),
				_: 3
			}, 8, ["style"])) : s("", !0)]),
			_: 3
		})]))], 64));
	}
}), [["__scopeId", "data-v-c32e3f4b"]]);
//#endregion
export { g as default };
