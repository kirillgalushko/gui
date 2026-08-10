import { a as e, i as t, n, r, t as i } from "./floating-ui.vue-CE68TKCX.js";
import { t as a } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { Fragment as o, Teleport as s, Transition as c, computed as l, createBlock as u, createCommentVNode as d, createElementBlock as f, createElementVNode as p, createVNode as m, defineComponent as h, mergeProps as g, nextTick as _, normalizeStyle as v, onBeforeUnmount as y, openBlock as b, ref as x, renderSlot as S, unref as C, useAttrs as w, watch as T, withCtx as E } from "vue";
import '../assets/HoverCard-gIJefW_6.css';//#endregion
//#region src/components/HoverCard/HoverCard.vue
var D = /*#__PURE__*/ a(/* @__PURE__ */ h({
	inheritAttrs: !1,
	__name: "HoverCard",
	props: {
		open: {
			type: Boolean,
			default: void 0
		},
		disabled: {
			type: Boolean,
			default: !1
		},
		placement: { default: "bottom-start" },
		openDelay: { default: 0 },
		closeDelay: { default: 100 },
		sideOffset: { default: 8 },
		updateKey: {
			type: [
				String,
				Number,
				Boolean
			],
			default: void 0
		}
	},
	emits: ["update:open"],
	setup(a, { emit: h }) {
		let D = a, O = h, k = x(null), A = x(null), j = x(!1), M = x(null), N = w(), P = l(() => D.open !== void 0), F = l(() => !D.disabled && (P.value ? D.open === !0 : j.value)), I = l(() => [
			t(D.sideOffset),
			r(),
			e({ padding: 8 })
		]), { floatingStyles: L, update: R } = i(k, A, {
			placement: l(() => D.placement),
			middleware: I,
			whileElementsMounted: n
		}), z = (e) => {
			P.value || (j.value = e), O("update:open", e);
		}, B = () => {
			M.value !== null && (clearTimeout(M.value), M.value = null);
		}, V = () => {
			D.disabled || (B(), M.value = setTimeout(() => {
				z(!0), _(R);
			}, D.openDelay));
		}, H = () => {
			B(), M.value = setTimeout(() => {
				z(!1);
			}, D.closeDelay);
		};
		return T(F, (e) => {
			e && _(R);
		}), T(() => D.updateKey, () => {
			F.value && _(R);
		}), y(B), (e, t) => (b(), f(o, null, [p("div", g(C(N), {
			ref_key: "targetRef",
			ref: k,
			class: "hover-card__trigger",
			onFocusin: V,
			onFocusout: H,
			onMouseenter: V,
			onMouseleave: H
		}), [S(e.$slots, "default", {}, void 0, !0)], 16), (b(), u(s, { to: "body" }, [m(c, { name: "hover-card-fade" }, {
			default: E(() => [F.value ? (b(), f("div", {
				key: 0,
				ref_key: "floatingRef",
				ref: A,
				class: "hover-card",
				style: v(C(L)),
				role: "dialog",
				onMouseenter: V,
				onMouseleave: H
			}, [S(e.$slots, "content", {}, void 0, !0)], 36)) : d("", !0)]),
			_: 3
		})]))], 64));
	}
}), [["__scopeId", "data-v-36d1af5f"]]);
//#endregion
export { D as default };
