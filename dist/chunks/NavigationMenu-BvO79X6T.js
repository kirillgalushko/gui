import { t as e } from "./useViewportBreakpoint-tMpTVilx.js";
import { t } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { t as n } from "./context-B_FpNEFp.js";
import { computed as r, createElementBlock as i, defineComponent as a, onBeforeUnmount as o, onMounted as s, openBlock as c, provide as l, ref as u, renderSlot as d, unref as f } from "vue";
import '../assets/NavigationMenu-BjOnbv7Z.css';//#region src/components/NavigationMenu/useNavigationMenu.ts
var p = (e) => {
	let t = u(e.defaultValue ?? ""), n = r(() => e.modelValue?.() ?? t.value), i, a = () => {
		i !== void 0 && (clearTimeout(i), i = void 0);
	}, s = (n) => {
		a(), e.modelValue?.() === void 0 && (t.value = n), e.onValueChange?.(n);
	}, c = (e) => s(e), l = () => s(""), d = (e) => n.value === e ? l() : c(e), f = (e, t) => {
		a(), i = setTimeout(e, t);
	};
	return o(a), {
		cancelScheduledChange: a,
		close: l,
		open: c,
		scheduleClose: () => f(l, e.closeDelayDuration ?? 180),
		scheduleOpen: (t) => f(() => c(t), e.delayDuration ?? 120),
		toggle: d,
		value: n
	};
}, m = [
	"aria-label",
	"data-mobile",
	"data-orientation"
], h = /*#__PURE__*/ t(/* @__PURE__ */ a({
	__name: "NavigationMenu",
	props: {
		ariaLabel: { default: "Основная навигация" },
		closeDelayDuration: { default: 180 },
		defaultValue: { default: "" },
		delayDuration: { default: 120 },
		modelValue: { default: void 0 },
		openOnHover: {
			type: Boolean,
			default: !0
		},
		orientation: { default: "horizontal" }
	},
	emits: ["change", "update:modelValue"],
	setup(t, { emit: a }) {
		let h = t, g = a, _ = e(), v = r(() => _.isMobile), y = u(null), b = /* @__PURE__ */ new Map(), x = p({
			closeDelayDuration: h.closeDelayDuration,
			defaultValue: h.defaultValue,
			delayDuration: h.delayDuration,
			modelValue: () => h.modelValue,
			onValueChange: (e) => {
				g("update:modelValue", e), g("change", e);
			}
		}), S = (e, t) => {
			t ? b.set(e, t) : b.delete(e);
		}, C = (e) => {
			let t = e.relatedTarget;
			(!(t instanceof Node) || !y.value?.contains(t)) && x.scheduleClose();
		}, w = (e) => {
			let t = e.target;
			t instanceof Node && !y.value?.contains(t) && x.close();
		}, T = (e) => {
			if (e.key === "Escape" && x.value.value) {
				e.preventDefault();
				let t = b.get(x.value.value);
				x.close(), t?.focus();
			}
		};
		return l(n, {
			...x,
			isMobile: v,
			openOnHover: r(() => h.openOnHover),
			orientation: r(() => h.orientation),
			registerTrigger: S
		}), s(() => {
			document.addEventListener("pointerdown", w);
		}), o(() => {
			document.removeEventListener("pointerdown", w);
		}), (e, t) => (c(), i("nav", {
			ref_key: "navigationMenuRef",
			ref: y,
			class: "navigation-menu",
			"aria-label": h.ariaLabel,
			"data-mobile": v.value || void 0,
			"data-orientation": h.orientation,
			onFocusin: t[0] ||= (...e) => f(x).cancelScheduledChange && f(x).cancelScheduledChange(...e),
			onFocusout: C,
			onKeydown: T,
			onPointerenter: t[1] ||= (...e) => f(x).cancelScheduledChange && f(x).cancelScheduledChange(...e),
			onPointerleave: t[2] ||= (...e) => f(x).scheduleClose && f(x).scheduleClose(...e)
		}, [d(e.$slots, "default", {}, void 0, !0)], 40, m));
	}
}), [["__scopeId", "data-v-41e055b2"]]);
//#endregion
export { h as default };
