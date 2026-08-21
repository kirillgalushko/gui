import { a as e, i as t, n, r, t as i } from "./floating-ui.vue-CE68TKCX.js";
import { t as a } from "./useViewportBreakpoint-tMpTVilx.js";
import { a as o, c as s, i as c, n as l, o as u, r as d, s as f, t as p } from "./useOnboardingTour-CapNwp6z.js";
import { t as m } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { t as h } from "./gui-icons.es-B9g1VPOq.js";
import { t as g } from "./Button-CeAG6Psa.js";
import { t as _ } from "./Card-mY6PKnyG.js";
import { t as v } from "./Text-BiA0aMEo.js";
import { t as y } from "./Badge-uBFTgl85.js";
import { t as b } from "./Stack-1RaHEufk.js";
import { Fragment as x, Teleport as S, computed as C, createBlock as w, createCommentVNode as T, createElementBlock as E, createElementVNode as D, createTextVNode as O, createVNode as k, defineComponent as A, nextTick as j, normalizeClass as M, normalizeStyle as N, onBeforeUnmount as P, openBlock as F, ref as I, renderList as L, renderSlot as R, shallowRef as z, toDisplayString as B, toValue as V, unref as H, useId as U, watch as W, withCtx as G, withModifiers as K } from "vue";
import '../assets/OnboardingTour-joh3ejGv.css';//#region src/components/OnboardingTour/useOnboardingSpotlight.ts
var q = {
	width: 0,
	height: 0
};
function ee() {
	return typeof window > "u" ? q : {
		width: window.innerWidth,
		height: window.innerHeight
	};
}
function J(a) {
	let p = z(null), m = I(null), h = z(null), g = I(ee()), _ = C(() => V(a.step)), v = C(() => V(a.open)), y = C(() => _.value?.spotlightPadding ?? V(a.defaultSpotlightPadding)), b = C(() => h.value ? l(h.value, y.value, g.value.width, g.value.height) : null), x = C(() => b.value ? c(b.value, g.value.width, g.value.height) : []), S = C(() => [
		t((_.value?.sideOffset ?? V(a.defaultSideOffset)) + y.value),
		r({
			padding: V(a.viewportPadding),
			fallbackAxisSideDirection: "start"
		}),
		e({ padding: V(a.viewportPadding) })
	]), w = () => {
		g.value = ee();
		let e = p.value;
		if (!e?.isConnected) {
			p.value = null, h.value = null, J();
			return;
		}
		h.value = o(e, g.value.width, g.value.height);
	}, { floatingStyles: T, update: E } = i(p, m, {
		strategy: "fixed",
		placement: C(() => _.value?.placement ?? "bottom"),
		middleware: S,
		whileElementsMounted: (e, t, r) => n(e, t, () => {
			w(), r();
		})
	}), D = null, O = null, k = null, A = null, M = !1, N = 0, F = !1, L = null, R = () => {
		k !== null && (clearTimeout(k), k = null);
	}, B = () => {
		D?.disconnect(), D = null;
	}, H = (e) => {
		B(), typeof ResizeObserver < "u" && (D = new ResizeObserver(w), D.observe(e));
	}, U = () => {
		let e = _.value;
		!e || F || !v.value || (F = !0, a.onTargetMissing({
			step: e,
			index: V(a.stepIndex),
			target: e.target
		}));
	}, G = () => {
		if (k !== null || F || p.value) return;
		let e = Math.max(0, V(a.targetTimeout));
		k = setTimeout(U, e);
	}, K = (e, t) => {
		t.scrollIntoView !== !1 && f(e, V(a.scrollBehavior));
	}, q = async (e = N) => {
		if (!v.value || e !== N || (await j(), !v.value || e !== N)) return;
		let t = _.value, n = t ? u(t.target) : null;
		if (!n?.isConnected) {
			p.value = null, h.value = null, G();
			return;
		}
		R(), F = !1, t && K(n, t), p.value = n, H(n), w(), await j(), E();
	};
	function J(e = !1) {
		M ||= e, !(A !== null || typeof window > "u") && (A = window.requestAnimationFrame(() => {
			A = null;
			let e = M;
			if (M = !1, p.value) {
				let t = _.value;
				e && t && K(p.value, t), w(), E();
			} else q();
		}));
	}
	let te = () => {
		N += 1, M = !1, p.value = null, h.value = null, F = !1, R(), B(), !(!v.value || !_.value) && q(N);
	}, Y = (e) => !!(e && (p.value?.contains(e) || m.value?.contains(e))), X = (e = !1) => {
		let t = d(p.value, m.value);
		((e ? t[t.length - 1] : t[0]) ?? m.value)?.focus({ preventScroll: !0 });
	}, ne = (e) => {
		if (!v.value || !b.value) return;
		if (e.key === "Escape" && V(a.closeOnEscape)) {
			e.preventDefault(), a.onEscape();
			return;
		}
		if (e.key !== "Tab") return;
		let t = d(p.value, m.value), n = t.indexOf(document.activeElement);
		if (t.length === 0 || n === -1) {
			e.preventDefault(), X(e.shiftKey);
			return;
		}
		let r = e.shiftKey && n === 0, i = !e.shiftKey && n === t.length - 1;
		(r || i) && (e.preventDefault(), X(e.shiftKey));
	}, re = (e) => {
		v.value && b.value && !Y(e.target) && X();
	}, ie = (e) => {
		let t = p.value;
		v.value && t && e.composedPath().includes(t) && a.onTargetClick();
	}, Z = (e) => {
		s(e, p.value, V(a.lockTargetScroll)) && e.preventDefault();
	}, Q = () => {
		let e = p.value, t = _.value;
		e && t && K(e, t), J();
	}, $ = () => {
		J();
	}, ae = () => {
		typeof window > "u" || (L = document.activeElement instanceof HTMLElement ? document.activeElement : null, window.addEventListener("resize", Q), window.addEventListener("scroll", $, !0), window.visualViewport?.addEventListener("resize", Q), window.visualViewport?.addEventListener("scroll", $), document.addEventListener("keydown", ne, !0), document.addEventListener("focusin", re, !0), document.addEventListener("click", ie, !0), document.addEventListener("wheel", Z, {
			capture: !0,
			passive: !1
		}), document.addEventListener("touchmove", Z, {
			capture: !0,
			passive: !1
		}), typeof MutationObserver < "u" && (O = new MutationObserver(() => J(!0)), O.observe(document.body, {
			childList: !0,
			subtree: !0,
			attributes: !0,
			attributeFilter: [
				"class",
				"style",
				"hidden"
			]
		})));
	}, oe = () => {
		typeof window > "u" || (window.removeEventListener("resize", Q), window.removeEventListener("scroll", $, !0), window.visualViewport?.removeEventListener("resize", Q), window.visualViewport?.removeEventListener("scroll", $), document.removeEventListener("keydown", ne, !0), document.removeEventListener("focusin", re, !0), document.removeEventListener("click", ie, !0), document.removeEventListener("wheel", Z, !0), document.removeEventListener("touchmove", Z, !0), O?.disconnect(), O = null, L?.isConnected && (!document.activeElement || Y(document.activeElement)) && L.focus({ preventScroll: !0 }), L = null);
	};
	return W([
		v,
		() => V(a.stepIndex),
		_
	], ([e], t) => {
		let n = t?.[0] ?? !1;
		e && !n ? ae() : !e && n && oe(), te();
	}, { immediate: !0 }), W(m, (e) => {
		e && v.value && j(() => {
			E(), e.focus({ preventScroll: !0 });
		});
	}), P(() => {
		N += 1, M = !1, R(), B(), oe(), A !== null && typeof window < "u" && window.cancelAnimationFrame(A);
	}), {
		targetElement: p,
		floatingElement: m,
		spotlightRect: b,
		overlayRects: x,
		floatingStyles: T,
		isTargetReady: C(() => !!(p.value && b.value)),
		setFloatingElement: (e) => {
			m.value = e instanceof HTMLElement ? e : null;
		},
		refresh: () => J(!0)
	};
}
//#endregion
//#region src/components/OnboardingTour/OnboardingTour.vue?vue&type=script&setup=true&lang.ts
var te = [
	"aria-label",
	"aria-labelledby",
	"aria-describedby"
], Y = { key: 1 }, X = /*#__PURE__*/ m(/* @__PURE__ */ A({
	__name: "OnboardingTour",
	props: {
		steps: {},
		open: {
			type: Boolean,
			default: !1
		},
		step: { default: 0 },
		teleportTo: { default: "body" },
		cardWidth: { default: 380 },
		zIndex: { default: 1e3 },
		overlayOpacity: { default: .6 },
		spotlightPadding: { default: 6 },
		spotlightRadius: { default: 12 },
		sideOffset: { default: 10 },
		viewportPadding: { default: 8 },
		targetTimeout: { default: 3e3 },
		missingTargetBehavior: { default: "close" },
		scrollBehavior: { default: "smooth" },
		lockTargetScroll: {
			type: Boolean,
			default: !0
		},
		animated: {
			type: Boolean,
			default: !0
		},
		closeOnEscape: {
			type: Boolean,
			default: !0
		},
		showCloseButton: {
			type: Boolean,
			default: !0
		},
		showProgress: {
			type: Boolean,
			default: !0
		},
		previousLabel: { default: "Назад" },
		nextLabel: { default: "Далее" },
		finishLabel: { default: "Готово" },
		ariaLabel: { default: "Подсказка по интерфейсу" }
	},
	emits: [
		"update:open",
		"update:step",
		"start",
		"next",
		"previous",
		"finish",
		"close",
		"target-click",
		"target-missing"
	],
	setup(e, { expose: t, emit: n }) {
		let r = e, i = n, o = C({
			get: () => r.open,
			set: (e) => i("update:open", e)
		}), s = C({
			get: () => r.step,
			set: (e) => i("update:step", e)
		}), c = p({
			steps: () => r.steps,
			open: o,
			step: s,
			onStart: (e) => i("start", e),
			onNext: (e) => i("next", e),
			onPrevious: (e) => i("previous", e),
			onFinish: (e) => i("finish", e),
			onClose: (e, t) => i("close", e, t)
		}), l = a(), u = U(), d = U(), f = J({
			open: o,
			step: c.currentStep,
			stepIndex: s,
			closeOnEscape: () => r.closeOnEscape,
			lockTargetScroll: () => r.lockTargetScroll,
			scrollBehavior: () => r.scrollBehavior,
			targetTimeout: () => r.targetTimeout,
			viewportPadding: () => r.viewportPadding,
			defaultSpotlightPadding: () => r.spotlightPadding,
			defaultSideOffset: () => r.sideOffset,
			onEscape: () => c.close("escape"),
			onTargetClick: () => {
				let e = c.currentStep.value;
				e && (i("target-click", {
					step: e,
					index: c.step.value
				}), e.advanceOnTargetClick && c.next());
			},
			onTargetMissing: (e) => {
				if (i("target-missing", e), r.missingTargetBehavior !== "wait") {
					if (r.missingTargetBehavior === "skip" && e.index < r.steps.length - 1) {
						c.goTo(e.index + 1);
						return;
					}
					c.close("missing-target");
				}
			}
		}), m = C(() => ({
			"--onboarding-tour-z-index": String(r.zIndex),
			"--onboarding-tour-overlay-opacity": String(Math.min(Math.max(r.overlayOpacity, 0), 1))
		})), A = C(() => [f.floatingStyles.value, {
			width: l.isMobile ? "calc(100vw - (var(--gap-2) * 2))" : `${r.cardWidth}px`,
			maxWidth: "calc(100vw - (var(--gap-2) * 2))"
		}]), j = C(() => {
			let e = f.spotlightRect.value;
			if (e) return {
				top: `${e.top}px`,
				left: `${e.left}px`,
				width: `${e.width}px`,
				height: `${e.height}px`,
				borderRadius: `${c.currentStep.value?.spotlightRadius ?? r.spotlightRadius}px`
			};
		}), P = C(() => !c.isFirstStep.value && c.currentStep.value?.showPrevious !== !1), I = C(() => c.currentStep.value?.actionLabel ?? (c.isLastStep.value ? r.finishLabel : r.nextLabel));
		return t({
			start: c.start,
			close: c.close,
			next: c.next,
			previous: c.previous,
			goTo: c.goTo,
			refresh: f.refresh
		}), (e, t) => (F(), w(S, { to: r.teleportTo }, [r.open && H(c).currentStep.value ? (F(), E("div", {
			key: 0,
			class: M(["onboarding-tour", { "onboarding-tour--animated": r.animated }]),
			style: N(m.value)
		}, [H(f).isTargetReady.value ? (F(), E(x, { key: 0 }, [
			(F(!0), E(x, null, L(H(f).overlayRects.value, (e, n) => (F(), E("div", {
				key: n,
				class: "onboarding-tour__overlay",
				style: N({
					top: `${e.top}px`,
					left: `${e.left}px`,
					width: `${e.width}px`,
					height: `${e.height}px`
				}),
				"aria-hidden": "true",
				onWheel: t[0] ||= K(() => {}, ["prevent"]),
				onTouchmove: t[1] ||= K(() => {}, ["prevent"])
			}, null, 36))), 128)),
			D("div", {
				class: "onboarding-tour__spotlight",
				style: N(j.value),
				"aria-hidden": "true"
			}, null, 4),
			D("div", {
				ref: H(f).setFloatingElement,
				class: "onboarding-tour__floating",
				style: N(A.value),
				role: "dialog",
				"aria-modal": "true",
				"aria-label": r.ariaLabel,
				"aria-labelledby": H(u),
				"aria-describedby": H(c).currentStep.value.description ? H(d) : void 0,
				tabindex: "-1"
			}, [(F(), E("div", {
				key: H(c).currentStep.value.id,
				class: "onboarding-tour__card-motion"
			}, [R(e.$slots, "card", {
				step: H(c).currentStep.value,
				index: H(c).step.value,
				progress: H(c).progress.value,
				next: H(c).next,
				previous: H(c).previous,
				close: H(c).close
			}, () => [k(_, {
				class: "onboarding-tour__card",
				padding: 16,
				"border-radius": 16,
				stretched: ""
			}, {
				default: G(() => [k(b, {
					direction: "column",
					gap: 4,
					stretched: ""
				}, {
					default: G(() => [
						k(b, {
							direction: "row",
							gap: 3,
							"align-items": "start",
							"justify-content": "space-between",
							stretched: ""
						}, {
							default: G(() => [k(b, {
								direction: "column",
								gap: 2
							}, {
								default: G(() => [R(e.$slots, "title", {
									step: H(c).currentStep.value,
									index: H(c).step.value
								}, () => [k(v, {
									id: H(u),
									Element: "h2",
									typography: "title-2",
									class: "onboarding-tour__title"
								}, {
									default: G(() => [O(B(H(c).currentStep.value.title), 1)]),
									_: 1
								}, 8, ["id"])], !0), R(e.$slots, "description", {
									step: H(c).currentStep.value,
									index: H(c).step.value
								}, () => [H(c).currentStep.value.description ? (F(), w(v, {
									key: 0,
									id: H(d),
									typography: "paragraph-1",
									color: "secondary",
									class: "onboarding-tour__description"
								}, {
									default: G(() => [O(B(H(c).currentStep.value.description), 1)]),
									_: 1
								}, 8, ["id"])) : T("", !0)], !0)]),
								_: 3
							}), r.showCloseButton ? (F(), w(g, {
								key: 0,
								mode: "ghost",
								size: "small",
								squared: "",
								type: "button",
								"aria-label": "Закрыть онбординг",
								onClick: t[2] ||= (e) => H(c).close()
							}, {
								default: G(() => [k(H(h))]),
								_: 1
							})) : T("", !0)]),
							_: 3
						}),
						R(e.$slots, "content", {
							step: H(c).currentStep.value,
							index: H(c).step.value
						}, void 0, !0),
						k(b, {
							direction: "row",
							gap: 2,
							"align-items": "center",
							"justify-content": "space-between",
							stretched: ""
						}, {
							default: G(() => [R(e.$slots, "progress", {
								step: H(c).currentStep.value,
								index: H(c).step.value,
								progress: H(c).progress.value
							}, () => [r.showProgress ? (F(), w(y, {
								key: 0,
								mode: "secondary"
							}, {
								default: G(() => [O(B(H(c).progress.value.current) + " из " + B(H(c).progress.value.total), 1)]),
								_: 1
							})) : (F(), E("span", Y))], !0), k(b, {
								direction: "row",
								gap: 2,
								"align-items": "center"
							}, {
								default: G(() => [R(e.$slots, "actions", {
									step: H(c).currentStep.value,
									index: H(c).step.value,
									isFirst: H(c).isFirstStep.value,
									isLast: H(c).isLastStep.value,
									next: H(c).next,
									previous: H(c).previous,
									close: H(c).close
								}, () => [P.value ? (F(), w(g, {
									key: 0,
									mode: "ghost",
									size: "small",
									type: "button",
									onClick: H(c).previous
								}, {
									default: G(() => [O(B(H(c).currentStep.value.previousLabel ?? r.previousLabel), 1)]),
									_: 1
								}, 8, ["onClick"])) : T("", !0), k(g, {
									mode: "contrast",
									size: "small",
									type: "button",
									onClick: H(c).next
								}, {
									default: G(() => [O(B(I.value), 1)]),
									_: 1
								}, 8, ["onClick"])], !0)]),
								_: 3
							})]),
							_: 3
						})
					]),
					_: 3
				})]),
				_: 3
			})], !0)]))], 12, te)
		], 64)) : T("", !0)], 6)) : T("", !0)], 8, ["to"]));
	}
}), [["__scopeId", "data-v-9d7242d2"]]);
//#endregion
export { X as default };
