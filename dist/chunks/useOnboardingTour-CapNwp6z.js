import { computed as e, ref as t, toValue as n } from "vue";
//#region src/components/OnboardingTour/onboarding.ts
var r = /(auto|scroll|hidden|clip)/;
function i(e, t) {
	return t <= 0 ? 0 : Math.min(Math.max(Math.trunc(e), 0), t - 1);
}
function a(e, t = document) {
	if (typeof e == "function") return e();
	if (typeof e != "string") return e;
	try {
		let n = t.querySelector(e);
		return n instanceof HTMLElement ? n : null;
	} catch {
		return null;
	}
}
function o(e, t, n, r) {
	let i = Math.max(0, t - r), a = Math.max(0, n - e);
	return i <= 0 || a <= 0 ? null : {
		top: e,
		right: t,
		bottom: n,
		left: r,
		width: i,
		height: a
	};
}
function s(e, t) {
	return o(Math.max(e.top, t.top), Math.min(e.right, t.right), Math.min(e.bottom, t.bottom), Math.max(e.left, t.left));
}
function c(e) {
	return o(e.top, e.right, e.bottom, e.left);
}
function l(e, t = window.innerWidth, n = window.innerHeight) {
	let i = c(e.getBoundingClientRect());
	if (!i) return null;
	let a = s(i, {
		top: 0,
		right: t,
		bottom: n,
		left: 0,
		width: t,
		height: n
	}), o = e.parentElement;
	for (; a && o && o !== document.body;) {
		let e = window.getComputedStyle(o);
		if (r.test(e.overflow) || r.test(e.overflowX) || r.test(e.overflowY)) {
			let e = c(o.getBoundingClientRect());
			e && (a = s(a, e));
		}
		o = o.parentElement;
	}
	return a;
}
function u(e) {
	let t = c(e.getBoundingClientRect()), n = l(e);
	return !t || !n ? !1 : n.top <= t.top && n.left <= t.left && n.right >= t.right && n.bottom >= t.bottom;
}
function d(e, t) {
	return !u(e) && (e.scrollIntoView({
		behavior: t,
		block: "center",
		inline: "center"
	}), !0);
}
function f(e, t, n) {
	return !!(n && t && e.composedPath().includes(t));
}
function p(e, t, n, r) {
	let i = Math.max(0, t), a = Math.max(0, e.top - i), o = Math.max(0, e.left - i), s = Math.min(n, e.right + i), c = Math.min(r, e.bottom + i);
	return {
		top: a,
		right: s,
		bottom: c,
		left: o,
		width: Math.max(0, s - o),
		height: Math.max(0, c - a)
	};
}
function m(e, t, n) {
	return [
		o(0, t, e.top, 0),
		o(e.top, e.left, e.bottom, 0),
		o(e.top, t, e.bottom, e.right),
		o(e.bottom, t, n, 0)
	].filter((e) => e !== null);
}
function h(...e) {
	let t = [
		"a[href]",
		"button:not([disabled])",
		"input:not([disabled])",
		"select:not([disabled])",
		"textarea:not([disabled])",
		"[tabindex]:not([tabindex='-1'])",
		"[contenteditable='true']"
	].join(",");
	return e.flatMap((e) => {
		if (!e) return [];
		let n = Array.from(e.querySelectorAll(t));
		return (e.matches(t) ? [e, ...n] : n).filter((e) => !e.hidden && e.getAttribute("aria-hidden") !== "true");
	});
}
//#endregion
//#region src/components/OnboardingTour/useOnboardingTour.ts
function g(r) {
	let a = r.open ?? t(!1), o = r.step ?? t(r.initialStep ?? 0), s = e(() => n(r.steps)), c = e(() => s.value[o.value]), l = e(() => o.value <= 0), u = e(() => s.value.length > 0 && o.value >= s.value.length - 1), d = e(() => ({
		current: s.value.length === 0 ? 0 : o.value + 1,
		total: s.value.length
	})), f = () => {
		let e = c.value;
		return e ? {
			step: e,
			index: o.value
		} : null;
	}, p = (e = r.initialStep ?? 0) => {
		if (s.value.length === 0) return !1;
		let t = i(e, s.value.length), n = s.value[t];
		return o.value = t, a.value = !0, n && r.onStart?.({
			step: n,
			index: t
		}), !0;
	}, m = (e = "dismiss") => {
		let t = f();
		a.value = !1, r.onClose?.(e, t);
	}, h = () => {
		let e = f();
		e && r.onFinish?.(e), m("complete");
	};
	return {
		open: a,
		step: o,
		steps: s,
		currentStep: c,
		isFirstStep: l,
		isLastStep: u,
		progress: d,
		start: p,
		close: m,
		finish: h,
		next: () => {
			let e = f();
			if (!e) {
				m();
				return;
			}
			if (r.onNext?.(e), u.value) {
				h();
				return;
			}
			o.value = i(o.value + 1, s.value.length);
		},
		previous: () => {
			let e = f();
			!e || l.value || (r.onPrevious?.(e), o.value = i(o.value - 1, s.value.length));
		},
		goTo: (e) => s.value.length !== 0 && (o.value = i(e, s.value.length), !0),
		reset: () => {
			a.value = !1, o.value = i(r.initialStep ?? 0, s.value.length);
		}
	};
}
//#endregion
export { l as a, f as c, m as i, p as n, a as o, h as r, d as s, g as t };
