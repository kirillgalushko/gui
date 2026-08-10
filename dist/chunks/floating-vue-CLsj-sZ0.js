import { a as e, f as t, i as n, n as r, o as i, r as a, s as o, t as s } from "./floating-ui.core-BHEaoHGY.js";
import { Fragment as c, createBlock as l, createCommentVNode as u, createElementBlock as d, createElementVNode as f, createVNode as ee, defineComponent as p, guardReactiveProps as te, mergeProps as ne, nextTick as re, normalizeClass as ie, normalizeProps as ae, normalizeStyle as m, openBlock as h, popScopeId as oe, pushScopeId as se, renderSlot as g, resolveComponent as _, withCtx as ce, withKeys as le, withScopeId as ue } from "vue";
import '../assets/floating-vue-BhCqcmL7.css';//#region node_modules/floating-vue/node_modules/@floating-ui/dom/dist/floating-ui.dom.browser.min.mjs
function v(e) {
	return e.ownerDocument?.defaultView || window;
}
function y(e) {
	return v(e).getComputedStyle(e);
}
var de = Math.min, b = Math.max, x = Math.round;
function fe(e) {
	let t = y(e), n = parseFloat(t.width), r = parseFloat(t.height), i = e.offsetWidth, a = e.offsetHeight, o = x(n) !== i || x(r) !== a;
	return o && (n = i, r = a), {
		width: n,
		height: r,
		fallback: o
	};
}
function S(e) {
	return me(e) ? (e.nodeName || "").toLowerCase() : "";
}
var C;
function pe() {
	if (C) return C;
	let e = navigator.userAgentData;
	return e && Array.isArray(e.brands) ? (C = e.brands.map(((e) => e.brand + "/" + e.version)).join(" "), C) : navigator.userAgent;
}
function w(e) {
	return e instanceof v(e).HTMLElement;
}
function T(e) {
	return e instanceof v(e).Element;
}
function me(e) {
	return e instanceof v(e).Node;
}
function he(e) {
	return typeof ShadowRoot > "u" ? !1 : e instanceof v(e).ShadowRoot || e instanceof ShadowRoot;
}
function E(e) {
	let { overflow: t, overflowX: n, overflowY: r, display: i } = y(e);
	return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(i);
}
function ge(e) {
	return [
		"table",
		"td",
		"th"
	].includes(S(e));
}
function D(e) {
	let t = /firefox/i.test(pe()), n = y(e), r = n.backdropFilter || n.WebkitBackdropFilter;
	return n.transform !== "none" || n.perspective !== "none" || !!r && r !== "none" || t && n.willChange === "filter" || t && !!n.filter && n.filter !== "none" || ["transform", "perspective"].some(((e) => n.willChange.includes(e))) || [
		"paint",
		"layout",
		"strict",
		"content"
	].some(((e) => {
		let t = n.contain;
		return t != null && t.includes(e);
	}));
}
function _e() {
	return !/^((?!chrome|android).)*safari/i.test(pe());
}
function O(e) {
	return [
		"html",
		"body",
		"#document"
	].includes(S(e));
}
function ve(e) {
	return T(e) ? e : e.contextElement;
}
var ye = {
	x: 1,
	y: 1
};
function k(e) {
	let t = ve(e);
	if (!w(t)) return ye;
	let n = t.getBoundingClientRect(), { width: r, height: i, fallback: a } = fe(t), o = (a ? x(n.width) : n.width) / r, s = (a ? x(n.height) : n.height) / i;
	return o && Number.isFinite(o) || (o = 1), s && Number.isFinite(s) || (s = 1), {
		x: o,
		y: s
	};
}
function A(e, t, n, r) {
	t === void 0 && (t = !1), n === void 0 && (n = !1);
	let i = e.getBoundingClientRect(), a = ve(e), o = ye;
	t && (r ? T(r) && (o = k(r)) : o = k(e));
	let s = a ? v(a) : window, c = !_e() && n, l = (i.left + (c && s.visualViewport?.offsetLeft || 0)) / o.x, u = (i.top + (c && s.visualViewport?.offsetTop || 0)) / o.y, d = i.width / o.x, f = i.height / o.y;
	if (a) {
		let e = v(a), t = r && T(r) ? v(r) : r, n = e.frameElement;
		for (; n && r && t !== e;) {
			let e = k(n), t = n.getBoundingClientRect(), r = getComputedStyle(n);
			t.x += (n.clientLeft + parseFloat(r.paddingLeft)) * e.x, t.y += (n.clientTop + parseFloat(r.paddingTop)) * e.y, l *= e.x, u *= e.y, d *= e.x, f *= e.y, l += t.x, u += t.y, n = v(n).frameElement;
		}
	}
	return {
		width: d,
		height: f,
		top: u,
		right: l + d,
		bottom: u + f,
		left: l,
		x: l,
		y: u
	};
}
function j(e) {
	return ((me(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function M(e) {
	return T(e) ? {
		scrollLeft: e.scrollLeft,
		scrollTop: e.scrollTop
	} : {
		scrollLeft: e.pageXOffset,
		scrollTop: e.pageYOffset
	};
}
function be(e) {
	return A(j(e)).left + M(e).scrollLeft;
}
function N(e) {
	if (S(e) === "html") return e;
	let t = e.assignedSlot || e.parentNode || he(e) && e.host || j(e);
	return he(t) ? t.host : t;
}
function xe(e) {
	let t = N(e);
	return O(t) ? t.ownerDocument.body : w(t) && E(t) ? t : xe(t);
}
function P(e, t) {
	t === void 0 && (t = []);
	let n = xe(e), r = n === e.ownerDocument?.body, i = v(n);
	return r ? t.concat(i, i.visualViewport || [], E(n) ? n : []) : t.concat(n, P(n));
}
function Se(e, n, r) {
	return n === "viewport" ? t(function(e, t) {
		let n = v(e), r = j(e), i = n.visualViewport, a = r.clientWidth, o = r.clientHeight, s = 0, c = 0;
		if (i) {
			a = i.width, o = i.height;
			let e = _e();
			(e || !e && t === "fixed") && (s = i.offsetLeft, c = i.offsetTop);
		}
		return {
			width: a,
			height: o,
			x: s,
			y: c
		};
	}(e, r)) : T(n) ? t(function(e, t) {
		let n = A(e, !0, t === "fixed"), r = n.top + e.clientTop, i = n.left + e.clientLeft, a = w(e) ? k(e) : {
			x: 1,
			y: 1
		};
		return {
			width: e.clientWidth * a.x,
			height: e.clientHeight * a.y,
			x: i * a.x,
			y: r * a.y
		};
	}(n, r)) : t(function(e) {
		let t = j(e), n = M(e), r = e.ownerDocument.body, i = b(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = b(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight), o = -n.scrollLeft + be(e), s = -n.scrollTop;
		return y(r).direction === "rtl" && (o += b(t.clientWidth, r.clientWidth) - i), {
			width: i,
			height: a,
			x: o,
			y: s
		};
	}(j(e)));
}
function Ce(e) {
	return w(e) && y(e).position !== "fixed" ? e.offsetParent : null;
}
function we(e) {
	let t = v(e), n = Ce(e);
	for (; n && ge(n) && y(n).position === "static";) n = Ce(n);
	return n && (S(n) === "html" || S(n) === "body" && y(n).position === "static" && !D(n)) ? t : n || function(e) {
		let t = N(e);
		for (; w(t) && !O(t);) {
			if (D(t)) return t;
			t = N(t);
		}
		return null;
	}(e) || t;
}
function Te(e, t, n) {
	let r = w(t), i = j(t), a = A(e, !0, n === "fixed", t), o = {
		scrollLeft: 0,
		scrollTop: 0
	}, s = {
		x: 0,
		y: 0
	};
	if (r || !r && n !== "fixed") {
		if ((S(t) !== "body" || E(i)) && (o = M(t)), w(t)) {
			let e = A(t, !0);
			s.x = e.x + t.clientLeft, s.y = e.y + t.clientTop;
		} else i && (s.x = be(i));
	}
	return {
		x: a.left + o.scrollLeft - s.x,
		y: a.top + o.scrollTop - s.y,
		width: a.width,
		height: a.height
	};
}
var Ee = {
	getClippingRect: function(e) {
		let { element: t, boundary: n, rootBoundary: r, strategy: i } = e, a = [...n === "clippingAncestors" ? function(e, t) {
			let n = t.get(e);
			if (n) return n;
			let r = P(e).filter(((e) => T(e) && S(e) !== "body")), i = null, a = y(e).position === "fixed", o = a ? N(e) : e;
			for (; T(o) && !O(o);) {
				let e = y(o), t = D(o);
				(a ? t || i : t || e.position !== "static" || !i || !["absolute", "fixed"].includes(i.position)) ? i = e : r = r.filter(((e) => e !== o)), o = N(o);
			}
			return t.set(e, r), r;
		}(t, this._c) : [].concat(n), r], o = a[0], s = a.reduce(((e, n) => {
			let r = Se(t, n, i);
			return e.top = b(r.top, e.top), e.right = de(r.right, e.right), e.bottom = de(r.bottom, e.bottom), e.left = b(r.left, e.left), e;
		}), Se(t, o, i));
		return {
			width: s.right - s.left,
			height: s.bottom - s.top,
			x: s.left,
			y: s.top
		};
	},
	convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
		let { rect: t, offsetParent: n, strategy: r } = e, i = w(n), a = j(n);
		if (n === a) return t;
		let o = {
			scrollLeft: 0,
			scrollTop: 0
		}, s = {
			x: 1,
			y: 1
		}, c = {
			x: 0,
			y: 0
		};
		if ((i || !i && r !== "fixed") && ((S(n) !== "body" || E(a)) && (o = M(n)), w(n))) {
			let e = A(n);
			s = k(n), c.x = e.x + n.clientLeft, c.y = e.y + n.clientTop;
		}
		return {
			width: t.width * s.x,
			height: t.height * s.y,
			x: t.x * s.x - o.scrollLeft * s.x + c.x,
			y: t.y * s.y - o.scrollTop * s.y + c.y
		};
	},
	isElement: T,
	getDimensions: function(e) {
		return w(e) ? fe(e) : e.getBoundingClientRect();
	},
	getOffsetParent: we,
	getDocumentElement: j,
	getScale: k,
	async getElementRects(e) {
		let { reference: t, floating: n, strategy: r } = e, i = this.getOffsetParent || we, a = this.getDimensions;
		return {
			reference: Te(t, await i(n), r),
			floating: {
				x: 0,
				y: 0,
				...await a(n)
			}
		};
	},
	getClientRects: (e) => Array.from(e.getClientRects()),
	isRTL: (e) => y(e).direction === "rtl"
}, De = (e, t, n) => {
	let r = /* @__PURE__ */ new Map(), i = {
		platform: Ee,
		...n
	}, o = {
		...i.platform,
		_c: r
	};
	return a(e, t, {
		...i,
		platform: o
	});
}, F = {
	disabled: !1,
	distance: 5,
	skidding: 0,
	container: "body",
	boundary: void 0,
	instantMove: !1,
	disposeTimeout: 150,
	popperTriggers: [],
	strategy: "absolute",
	preventOverflow: !0,
	flip: !0,
	shift: !0,
	overflowPadding: 0,
	arrowPadding: 0,
	arrowOverflow: !0,
	autoHideOnMousedown: !1,
	themes: {
		tooltip: {
			placement: "top",
			triggers: [
				"hover",
				"focus",
				"touch"
			],
			hideTriggers: (e) => [...e, "click"],
			delay: {
				show: 200,
				hide: 0
			},
			handleResize: !1,
			html: !1,
			loadingContent: "..."
		},
		dropdown: {
			placement: "bottom",
			triggers: ["click"],
			delay: 0,
			handleResize: !0,
			autoHide: !0
		},
		menu: {
			$extend: "dropdown",
			triggers: ["hover", "focus"],
			popperTriggers: ["hover"],
			delay: {
				show: 0,
				hide: 400
			}
		}
	}
};
function I(e, t) {
	let n = F.themes[e] || {}, r;
	do
		r = n[t], typeof r > "u" ? n.$extend ? n = F.themes[n.$extend] || {} : (n = null, r = F[t]) : n = null;
	while (n);
	return r;
}
function Oe(e) {
	let t = [e], n = F.themes[e] || {};
	do
		n.$extend && !n.$resetCss ? (t.push(n.$extend), n = F.themes[n.$extend] || {}) : n = null;
	while (n);
	return t.map((e) => `v-popper--theme-${e}`);
}
function ke(e) {
	let t = [e], n = F.themes[e] || {};
	do
		n.$extend ? (t.push(n.$extend), n = F.themes[n.$extend] || {}) : n = null;
	while (n);
	return t;
}
var L = !1;
if (typeof window < "u") {
	L = !1;
	try {
		let e = Object.defineProperty({}, "passive", { get() {
			L = !0;
		} });
		window.addEventListener("test", null, e);
	} catch {}
}
var Ae = !1;
typeof window < "u" && typeof navigator < "u" && (Ae = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream);
var je = [
	"auto",
	"top",
	"bottom",
	"left",
	"right"
].reduce((e, t) => e.concat([
	t,
	`${t}-start`,
	`${t}-end`
]), []), Me = {
	hover: "mouseenter",
	focus: "focus",
	click: "click",
	touch: "touchstart",
	pointer: "pointerdown"
}, Ne = {
	hover: "mouseleave",
	focus: "blur",
	click: "click",
	touch: "touchend",
	pointer: "pointerup"
};
function Pe(e, t) {
	let n = e.indexOf(t);
	n !== -1 && e.splice(n, 1);
}
function R() {
	return new Promise((e) => requestAnimationFrame(() => {
		requestAnimationFrame(e);
	}));
}
var z = [], B = null, Fe = {};
function Ie(e) {
	let t = Fe[e];
	return t ||= Fe[e] = [], t;
}
var V = function() {};
typeof window < "u" && (V = window.Element);
function H(e) {
	return function(t) {
		return I(t.theme, e);
	};
}
var U = "__floating-vue__popper", Le = () => p({
	name: "VPopper",
	provide() {
		return { [U]: { parentPopper: this } };
	},
	inject: { [U]: { default: null } },
	props: {
		theme: {
			type: String,
			required: !0
		},
		targetNodes: {
			type: Function,
			required: !0
		},
		referenceNode: {
			type: Function,
			default: null
		},
		popperNode: {
			type: Function,
			required: !0
		},
		shown: {
			type: Boolean,
			default: !1
		},
		showGroup: {
			type: String,
			default: null
		},
		ariaId: { default: null },
		disabled: {
			type: Boolean,
			default: H("disabled")
		},
		positioningDisabled: {
			type: Boolean,
			default: H("positioningDisabled")
		},
		placement: {
			type: String,
			default: H("placement"),
			validator: (e) => je.includes(e)
		},
		delay: {
			type: [
				String,
				Number,
				Object
			],
			default: H("delay")
		},
		distance: {
			type: [Number, String],
			default: H("distance")
		},
		skidding: {
			type: [Number, String],
			default: H("skidding")
		},
		triggers: {
			type: Array,
			default: H("triggers")
		},
		showTriggers: {
			type: [Array, Function],
			default: H("showTriggers")
		},
		hideTriggers: {
			type: [Array, Function],
			default: H("hideTriggers")
		},
		popperTriggers: {
			type: Array,
			default: H("popperTriggers")
		},
		popperShowTriggers: {
			type: [Array, Function],
			default: H("popperShowTriggers")
		},
		popperHideTriggers: {
			type: [Array, Function],
			default: H("popperHideTriggers")
		},
		container: {
			type: [
				String,
				Object,
				V,
				Boolean
			],
			default: H("container")
		},
		boundary: {
			type: [String, V],
			default: H("boundary")
		},
		strategy: {
			type: String,
			validator: (e) => ["absolute", "fixed"].includes(e),
			default: H("strategy")
		},
		autoHide: {
			type: [Boolean, Function],
			default: H("autoHide")
		},
		handleResize: {
			type: Boolean,
			default: H("handleResize")
		},
		instantMove: {
			type: Boolean,
			default: H("instantMove")
		},
		eagerMount: {
			type: Boolean,
			default: H("eagerMount")
		},
		popperClass: {
			type: [
				String,
				Array,
				Object
			],
			default: H("popperClass")
		},
		computeTransformOrigin: {
			type: Boolean,
			default: H("computeTransformOrigin")
		},
		autoMinSize: {
			type: Boolean,
			default: H("autoMinSize")
		},
		autoSize: {
			type: [Boolean, String],
			default: H("autoSize")
		},
		autoMaxSize: {
			type: Boolean,
			default: H("autoMaxSize")
		},
		autoBoundaryMaxSize: {
			type: Boolean,
			default: H("autoBoundaryMaxSize")
		},
		preventOverflow: {
			type: Boolean,
			default: H("preventOverflow")
		},
		overflowPadding: {
			type: [Number, String],
			default: H("overflowPadding")
		},
		arrowPadding: {
			type: [Number, String],
			default: H("arrowPadding")
		},
		arrowOverflow: {
			type: Boolean,
			default: H("arrowOverflow")
		},
		flip: {
			type: Boolean,
			default: H("flip")
		},
		shift: {
			type: Boolean,
			default: H("shift")
		},
		shiftCrossAxis: {
			type: Boolean,
			default: H("shiftCrossAxis")
		},
		noAutoFocus: {
			type: Boolean,
			default: H("noAutoFocus")
		},
		disposeTimeout: {
			type: Number,
			default: H("disposeTimeout")
		}
	},
	emits: {
		show: () => !0,
		hide: () => !0,
		"update:shown": (e) => !0,
		"apply-show": () => !0,
		"apply-hide": () => !0,
		"close-group": () => !0,
		"close-directive": () => !0,
		"auto-hide": () => !0,
		resize: () => !0
	},
	data() {
		return {
			isShown: !1,
			isMounted: !1,
			skipTransition: !1,
			classes: {
				showFrom: !1,
				showTo: !1,
				hideFrom: !1,
				hideTo: !0
			},
			result: {
				x: 0,
				y: 0,
				placement: "",
				strategy: this.strategy,
				arrow: {
					x: 0,
					y: 0,
					centerOffset: 0
				},
				transformOrigin: null
			},
			randomId: `popper_${[Math.random(), Date.now()].map((e) => e.toString(36).substring(2, 10)).join("_")}`,
			shownChildren: /* @__PURE__ */ new Set(),
			lastAutoHide: !0,
			pendingHide: !1,
			containsGlobalTarget: !1,
			isDisposed: !0,
			mouseDownContains: !1
		};
	},
	computed: {
		popperId() {
			return this.ariaId == null ? this.randomId : this.ariaId;
		},
		shouldMountContent() {
			return this.eagerMount || this.isMounted;
		},
		slotData() {
			return {
				popperId: this.popperId,
				isShown: this.isShown,
				shouldMountContent: this.shouldMountContent,
				skipTransition: this.skipTransition,
				autoHide: typeof this.autoHide == "function" ? this.lastAutoHide : this.autoHide,
				show: this.show,
				hide: this.hide,
				handleResize: this.handleResize,
				onResize: this.onResize,
				classes: {
					...this.classes,
					popperClass: this.popperClass
				},
				result: this.positioningDisabled ? null : this.result,
				attrs: this.$attrs
			};
		},
		parentPopper() {
			return this[U]?.parentPopper;
		},
		hasPopperShowTriggerHover() {
			return this.popperTriggers?.includes("hover") || this.popperShowTriggers?.includes("hover");
		}
	},
	watch: {
		shown: "$_autoShowHide",
		disabled(e) {
			e ? this.dispose() : this.init();
		},
		async container() {
			this.isShown && (this.$_ensureTeleport(), await this.$_computePosition());
		},
		triggers: {
			handler: "$_refreshListeners",
			deep: !0
		},
		positioningDisabled: "$_refreshListeners",
		...[
			"placement",
			"distance",
			"skidding",
			"boundary",
			"strategy",
			"overflowPadding",
			"arrowPadding",
			"preventOverflow",
			"shift",
			"shiftCrossAxis",
			"flip"
		].reduce((e, t) => (e[t] = "$_computePosition", e), {})
	},
	created() {
		this.autoMinSize && console.warn("[floating-vue] `autoMinSize` option is deprecated. Use `autoSize=\"min\"` instead."), this.autoMaxSize && console.warn("[floating-vue] `autoMaxSize` option is deprecated. Use `autoBoundaryMaxSize` instead.");
	},
	mounted() {
		this.init(), this.$_detachPopperNode();
	},
	activated() {
		this.$_autoShowHide();
	},
	deactivated() {
		this.hide();
	},
	beforeUnmount() {
		this.dispose();
	},
	methods: {
		show({ event: e = null, skipDelay: t = !1, force: n = !1 } = {}) {
			var r;
			(r = this.parentPopper) != null && r.lockedChild && this.parentPopper.lockedChild !== this || (this.pendingHide = !1, (n || !this.disabled) && (this.parentPopper?.lockedChild === this && (this.parentPopper.lockedChild = null), this.$_scheduleShow(e, t), this.$emit("show"), this.$_showFrameLocked = !0, requestAnimationFrame(() => {
				this.$_showFrameLocked = !1;
			})), this.$emit("update:shown", !0));
		},
		hide({ event: e = null, skipDelay: t = !1 } = {}) {
			if (!this.$_hideInProgress) {
				if (this.shownChildren.size > 0) {
					this.pendingHide = !0;
					return;
				}
				if (this.hasPopperShowTriggerHover && this.$_isAimingPopper()) {
					this.parentPopper && (this.parentPopper.lockedChild = this, clearTimeout(this.parentPopper.lockedChildTimer), this.parentPopper.lockedChildTimer = setTimeout(() => {
						this.parentPopper.lockedChild === this && (this.parentPopper.lockedChild.hide({ skipDelay: t }), this.parentPopper.lockedChild = null);
					}, 1e3));
					return;
				}
				this.parentPopper?.lockedChild === this && (this.parentPopper.lockedChild = null), this.pendingHide = !1, this.$_scheduleHide(e, t), this.$emit("hide"), this.$emit("update:shown", !1);
			}
		},
		init() {
			this.isDisposed && (this.isDisposed = !1, this.isMounted = !1, this.$_events = [], this.$_preventShow = !1, this.$_referenceNode = this.referenceNode?.call(this) ?? this.$el, this.$_targetNodes = this.targetNodes().filter((e) => e.nodeType === e.ELEMENT_NODE), this.$_popperNode = this.popperNode(), this.$_innerNode = this.$_popperNode.querySelector(".v-popper__inner"), this.$_arrowNode = this.$_popperNode.querySelector(".v-popper__arrow-container"), this.$_swapTargetAttrs("title", "data-original-title"), this.$_detachPopperNode(), this.triggers.length && this.$_addEventListeners(), this.shown && this.show());
		},
		dispose() {
			this.isDisposed || (this.isDisposed = !0, this.$_removeEventListeners(), this.hide({ skipDelay: !0 }), this.$_detachPopperNode(), this.isMounted = !1, this.isShown = !1, this.$_updateParentShownChildren(!1), this.$_swapTargetAttrs("data-original-title", "title"));
		},
		async onResize() {
			this.isShown && (await this.$_computePosition(), this.$emit("resize"));
		},
		async $_computePosition() {
			if (this.isDisposed || this.positioningDisabled) return;
			let t = {
				strategy: this.strategy,
				middleware: []
			};
			(this.distance || this.skidding) && t.middleware.push(e({
				mainAxis: this.distance,
				crossAxis: this.skidding
			}));
			let a = this.placement.startsWith("auto");
			if (a ? t.middleware.push(r({ alignment: this.placement.split("-")[1] ?? "" })) : t.placement = this.placement, this.preventOverflow && (this.shift && t.middleware.push(i({
				padding: this.overflowPadding,
				boundary: this.boundary,
				crossAxis: this.shiftCrossAxis
			})), !a && this.flip && t.middleware.push(n({
				padding: this.overflowPadding,
				boundary: this.boundary
			}))), t.middleware.push(s({
				element: this.$_arrowNode,
				padding: this.arrowPadding
			})), this.arrowOverflow && t.middleware.push({
				name: "arrowOverflow",
				fn: ({ placement: e, rects: t, middlewareData: n }) => {
					let r, { centerOffset: i } = n.arrow;
					return r = e.startsWith("top") || e.startsWith("bottom") ? Math.abs(i) > t.reference.width / 2 : Math.abs(i) > t.reference.height / 2, { data: { overflow: r } };
				}
			}), this.autoMinSize || this.autoSize) {
				let e = this.autoSize ? this.autoSize : this.autoMinSize ? "min" : null;
				t.middleware.push({
					name: "autoSize",
					fn: ({ rects: t, placement: n, middlewareData: r }) => {
						var i;
						if ((i = r.autoSize) != null && i.skip) return {};
						let a, o;
						return n.startsWith("top") || n.startsWith("bottom") ? a = t.reference.width : o = t.reference.height, this.$_innerNode.style[e === "min" ? "minWidth" : e === "max" ? "maxWidth" : "width"] = a == null ? null : `${a}px`, this.$_innerNode.style[e === "min" ? "minHeight" : e === "max" ? "maxHeight" : "height"] = o == null ? null : `${o}px`, {
							data: { skip: !0 },
							reset: { rects: !0 }
						};
					}
				});
			}
			(this.autoMaxSize || this.autoBoundaryMaxSize) && (this.$_innerNode.style.maxWidth = null, this.$_innerNode.style.maxHeight = null, t.middleware.push(o({
				boundary: this.boundary,
				padding: this.overflowPadding,
				apply: ({ availableWidth: e, availableHeight: t }) => {
					this.$_innerNode.style.maxWidth = e == null ? null : `${e}px`, this.$_innerNode.style.maxHeight = t == null ? null : `${t}px`;
				}
			})));
			let c = await De(this.$_referenceNode, this.$_popperNode, t);
			Object.assign(this.result, {
				x: c.x,
				y: c.y,
				placement: c.placement,
				strategy: c.strategy,
				arrow: {
					...c.middlewareData.arrow,
					...c.middlewareData.arrowOverflow
				}
			});
		},
		$_scheduleShow(e, t = !1) {
			if (this.$_updateParentShownChildren(!0), this.$_hideInProgress = !1, clearTimeout(this.$_scheduleTimer), B && this.instantMove && B.instantMove && B !== this.parentPopper) {
				B.$_applyHide(!0), this.$_applyShow(!0);
				return;
			}
			t ? this.$_applyShow() : this.$_scheduleTimer = setTimeout(this.$_applyShow.bind(this), this.$_computeDelay("show"));
		},
		$_scheduleHide(e, t = !1) {
			if (this.shownChildren.size > 0) {
				this.pendingHide = !0;
				return;
			}
			this.$_updateParentShownChildren(!1), this.$_hideInProgress = !0, clearTimeout(this.$_scheduleTimer), this.isShown && (B = this), t ? this.$_applyHide() : this.$_scheduleTimer = setTimeout(this.$_applyHide.bind(this), this.$_computeDelay("hide"));
		},
		$_computeDelay(e) {
			let t = this.delay;
			return parseInt(t && t[e] || t || 0);
		},
		async $_applyShow(e = !1) {
			clearTimeout(this.$_disposeTimer), clearTimeout(this.$_scheduleTimer), this.skipTransition = e, !this.isShown && (this.$_ensureTeleport(), await R(), await this.$_computePosition(), await this.$_applyShowEffect(), this.positioningDisabled || this.$_registerEventListeners([...P(this.$_referenceNode), ...P(this.$_popperNode)], "scroll", () => {
				this.$_computePosition();
			}));
		},
		async $_applyShowEffect() {
			if (this.$_hideInProgress) return;
			if (this.computeTransformOrigin) {
				let e = this.$_referenceNode.getBoundingClientRect(), t = this.$_popperNode.querySelector(".v-popper__wrapper"), n = t.parentNode.getBoundingClientRect(), r = e.x + e.width / 2 - (n.left + t.offsetLeft), i = e.y + e.height / 2 - (n.top + t.offsetTop);
				this.result.transformOrigin = `${r}px ${i}px`;
			}
			this.isShown = !0, this.$_applyAttrsToTarget({
				"aria-describedby": this.popperId,
				"data-popper-shown": ""
			});
			let e = this.showGroup;
			if (e) {
				let t;
				for (let n = 0; n < z.length; n++) t = z[n], t.showGroup !== e && (t.hide(), t.$emit("close-group"));
			}
			z.push(this), document.body.classList.add("v-popper--some-open");
			for (let e of ke(this.theme)) Ie(e).push(this), document.body.classList.add(`v-popper--some-open--${e}`);
			this.$emit("apply-show"), this.classes.showFrom = !0, this.classes.showTo = !1, this.classes.hideFrom = !1, this.classes.hideTo = !1, await R(), this.classes.showFrom = !1, this.classes.showTo = !0, this.noAutoFocus || this.$_popperNode.focus();
		},
		async $_applyHide(e = !1) {
			if (this.shownChildren.size > 0) {
				this.pendingHide = !0, this.$_hideInProgress = !1;
				return;
			}
			if (clearTimeout(this.$_scheduleTimer), !this.isShown) return;
			this.skipTransition = e, Pe(z, this), z.length === 0 && document.body.classList.remove("v-popper--some-open");
			for (let e of ke(this.theme)) {
				let t = Ie(e);
				Pe(t, this), t.length === 0 && document.body.classList.remove(`v-popper--some-open--${e}`);
			}
			B === this && (B = null), this.isShown = !1, this.$_applyAttrsToTarget({
				"aria-describedby": void 0,
				"data-popper-shown": void 0
			}), clearTimeout(this.$_disposeTimer);
			let t = this.disposeTimeout;
			t !== null && (this.$_disposeTimer = setTimeout(() => {
				this.$_popperNode && (this.$_detachPopperNode(), this.isMounted = !1);
			}, t)), this.$_removeEventListeners("scroll"), this.$emit("apply-hide"), this.classes.showFrom = !1, this.classes.showTo = !1, this.classes.hideFrom = !0, this.classes.hideTo = !1, await R(), this.classes.hideFrom = !1, this.classes.hideTo = !0;
		},
		$_autoShowHide() {
			this.shown ? this.show() : this.hide();
		},
		$_ensureTeleport() {
			if (this.isDisposed) return;
			let e = this.container;
			if (typeof e == "string" ? e = window.document.querySelector(e) : e === !1 && (e = this.$_targetNodes[0].parentNode), !e) throw Error("No container for popover: " + this.container);
			e.appendChild(this.$_popperNode), this.isMounted = !0;
		},
		$_addEventListeners() {
			let e = (e) => {
				this.isShown && !this.$_hideInProgress || (e.usedByTooltip = !0, !this.$_preventShow && this.show({ event: e }));
			};
			this.$_registerTriggerListeners(this.$_targetNodes, Me, this.triggers, this.showTriggers, e), this.$_registerTriggerListeners([this.$_popperNode], Me, this.popperTriggers, this.popperShowTriggers, e);
			let t = (e) => {
				e.usedByTooltip || this.hide({ event: e });
			};
			this.$_registerTriggerListeners(this.$_targetNodes, Ne, this.triggers, this.hideTriggers, t), this.$_registerTriggerListeners([this.$_popperNode], Ne, this.popperTriggers, this.popperHideTriggers, t);
		},
		$_registerEventListeners(e, t, n) {
			this.$_events.push({
				targetNodes: e,
				eventType: t,
				handler: n
			}), e.forEach((e) => e.addEventListener(t, n, L ? { passive: !0 } : void 0));
		},
		$_registerTriggerListeners(e, t, n, r, i) {
			let a = n;
			r != null && (a = typeof r == "function" ? r(a) : r), a.forEach((n) => {
				let r = t[n];
				r && this.$_registerEventListeners(e, r, i);
			});
		},
		$_removeEventListeners(e) {
			let t = [];
			this.$_events.forEach((n) => {
				let { targetNodes: r, eventType: i, handler: a } = n;
				!e || e === i ? r.forEach((e) => e.removeEventListener(i, a)) : t.push(n);
			}), this.$_events = t;
		},
		$_refreshListeners() {
			this.isDisposed || (this.$_removeEventListeners(), this.$_addEventListeners());
		},
		$_handleGlobalClose(e, t = !1) {
			this.$_showFrameLocked || (this.hide({ event: e }), e.closePopover ? this.$emit("close-directive") : this.$emit("auto-hide"), t && (this.$_preventShow = !0, setTimeout(() => {
				this.$_preventShow = !1;
			}, 300)));
		},
		$_detachPopperNode() {
			this.$_popperNode.parentNode && this.$_popperNode.parentNode.removeChild(this.$_popperNode);
		},
		$_swapTargetAttrs(e, t) {
			for (let n of this.$_targetNodes) {
				let r = n.getAttribute(e);
				r && (n.removeAttribute(e), n.setAttribute(t, r));
			}
		},
		$_applyAttrsToTarget(e) {
			for (let t of this.$_targetNodes) for (let n in e) {
				let r = e[n];
				r == null ? t.removeAttribute(n) : t.setAttribute(n, r);
			}
		},
		$_updateParentShownChildren(e) {
			let t = this.parentPopper;
			for (; t;) e ? t.shownChildren.add(this.randomId) : (t.shownChildren.delete(this.randomId), t.pendingHide && t.hide()), t = t.parentPopper;
		},
		$_isAimingPopper() {
			let e = this.$_referenceNode.getBoundingClientRect();
			if (K >= e.left && K <= e.right && q >= e.top && q <= e.bottom) {
				let e = this.$_popperNode.getBoundingClientRect(), t = K - W, n = q - G, r = e.left + e.width / 2 - W + (e.top + e.height / 2) - G + e.width + e.height, i = W + t * r, a = G + n * r;
				return J(W, G, i, a, e.left, e.top, e.left, e.bottom) || J(W, G, i, a, e.left, e.top, e.right, e.top) || J(W, G, i, a, e.right, e.top, e.right, e.bottom) || J(W, G, i, a, e.left, e.bottom, e.right, e.bottom);
			}
			return !1;
		}
	},
	render() {
		return this.$slots.default(this.slotData);
	}
});
if (typeof document < "u" && typeof window < "u") {
	if (Ae) {
		let e = !L || {
			passive: !0,
			capture: !0
		};
		document.addEventListener("touchstart", (e) => Re(e, !0), e), document.addEventListener("touchend", (e) => ze(e, !0), e);
	} else window.addEventListener("mousedown", (e) => Re(e, !1), !0), window.addEventListener("click", (e) => ze(e, !1), !0);
	window.addEventListener("resize", Ue);
}
function Re(e, t) {
	if (F.autoHideOnMousedown) Be(e, t);
	else for (let t = 0; t < z.length; t++) {
		let n = z[t];
		try {
			n.mouseDownContains = n.popperNode().contains(e.target);
		} catch {}
	}
}
function ze(e, t) {
	F.autoHideOnMousedown || Be(e, t);
}
function Be(e, t) {
	let n = {};
	for (let r = z.length - 1; r >= 0; r--) {
		let i = z[r];
		try {
			let r = i.containsGlobalTarget = i.mouseDownContains || i.popperNode().contains(e.target);
			i.pendingHide = !1, requestAnimationFrame(() => {
				if (i.pendingHide = !1, !n[i.randomId] && Ve(i, r, e)) {
					if (i.$_handleGlobalClose(e, t), !e.closeAllPopover && e.closePopover && r) {
						let e = i.parentPopper;
						for (; e;) n[e.randomId] = !0, e = e.parentPopper;
						return;
					}
					let a = i.parentPopper;
					for (; a && Ve(a, a.containsGlobalTarget, e);) a.$_handleGlobalClose(e, t), a = a.parentPopper;
				}
			});
		} catch {}
	}
}
function Ve(e, t, n) {
	return n.closeAllPopover || n.closePopover && t || He(e, n) && !t;
}
function He(e, t) {
	if (typeof e.autoHide == "function") {
		let n = e.autoHide(t);
		return e.lastAutoHide = n, n;
	}
	return e.autoHide;
}
function Ue() {
	for (let e = 0; e < z.length; e++) z[e].$_computePosition();
}
var W = 0, G = 0, K = 0, q = 0;
typeof window < "u" && window.addEventListener("mousemove", (e) => {
	W = K, G = q, K = e.clientX, q = e.clientY;
}, L ? { passive: !0 } : void 0);
function J(e, t, n, r, i, a, o, s) {
	let c = ((o - i) * (t - a) - (s - a) * (e - i)) / ((s - a) * (n - e) - (o - i) * (r - t)), l = ((n - e) * (t - a) - (r - t) * (e - i)) / ((s - a) * (n - e) - (o - i) * (r - t));
	return c >= 0 && c <= 1 && l >= 0 && l <= 1;
}
var We = { extends: Le() }, Y = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
};
function Ge(e, t, n, r, i, a) {
	return h(), d("div", {
		ref: "reference",
		class: ie(["v-popper", { "v-popper--shown": e.slotData.isShown }])
	}, [g(e.$slots, "default", ae(te(e.slotData)))], 2);
}
var Ke = /* @__PURE__ */ Y(We, [["render", Ge]]);
function qe() {
	var e = window.navigator.userAgent, t = e.indexOf("MSIE ");
	if (t > 0) return parseInt(e.substring(t + 5, e.indexOf(".", t)), 10);
	if (e.indexOf("Trident/") > 0) {
		var n = e.indexOf("rv:");
		return parseInt(e.substring(n + 3, e.indexOf(".", n)), 10);
	}
	var r = e.indexOf("Edge/");
	return r > 0 ? parseInt(e.substring(r + 5, e.indexOf(".", r)), 10) : -1;
}
var X;
function Z() {
	Z.init || (Z.init = !0, X = qe() !== -1);
}
var Q = {
	name: "ResizeObserver",
	props: {
		emitOnMount: {
			type: Boolean,
			default: !1
		},
		ignoreWidth: {
			type: Boolean,
			default: !1
		},
		ignoreHeight: {
			type: Boolean,
			default: !1
		}
	},
	emits: ["notify"],
	mounted() {
		Z(), re(() => {
			this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitOnMount && this.emitSize();
		});
		let e = document.createElement("object");
		this._resizeObject = e, e.setAttribute("aria-hidden", "true"), e.setAttribute("tabindex", -1), e.onload = this.addResizeHandlers, e.type = "text/html", X && this.$el.appendChild(e), e.data = "about:blank", X || this.$el.appendChild(e);
	},
	beforeUnmount() {
		this.removeResizeHandlers();
	},
	methods: {
		compareAndNotify() {
			(!this.ignoreWidth && this._w !== this.$el.offsetWidth || !this.ignoreHeight && this._h !== this.$el.offsetHeight) && (this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitSize());
		},
		emitSize() {
			this.$emit("notify", {
				width: this._w,
				height: this._h
			});
		},
		addResizeHandlers() {
			this._resizeObject.contentDocument.defaultView.addEventListener("resize", this.compareAndNotify), this.compareAndNotify();
		},
		removeResizeHandlers() {
			this._resizeObject && this._resizeObject.onload && (!X && this._resizeObject.contentDocument && this._resizeObject.contentDocument.defaultView.removeEventListener("resize", this.compareAndNotify), this.$el.removeChild(this._resizeObject), this._resizeObject.onload = null, this._resizeObject = null);
		}
	}
}, Je = /* @__PURE__ */ ue("data-v-b329ee4c");
se("data-v-b329ee4c");
var Ye = {
	class: "resize-observer",
	tabindex: "-1"
};
oe(), Q.render = /* @__PURE__ */ Je((e, t, n, r, i, a) => (h(), l("div", Ye))), Q.__scopeId = "data-v-b329ee4c", Q.__file = "src/components/ResizeObserver.vue";
var Xe = (e = "theme") => ({ computed: { themeClass() {
	return Oe(this[e]);
} } }), Ze = p({
	name: "VPopperContent",
	components: { ResizeObserver: Q },
	mixins: [Xe()],
	props: {
		popperId: String,
		theme: String,
		shown: Boolean,
		mounted: Boolean,
		skipTransition: Boolean,
		autoHide: Boolean,
		handleResize: Boolean,
		classes: Object,
		result: Object
	},
	emits: ["hide", "resize"],
	methods: { toPx(e) {
		return e != null && !isNaN(e) ? `${e}px` : null;
	} }
}), Qe = [
	"id",
	"aria-hidden",
	"tabindex",
	"data-popper-placement"
], $e = {
	ref: "inner",
	class: "v-popper__inner"
}, et = [/* @__PURE__ */ f("div", { class: "v-popper__arrow-outer" }, null, -1), /* @__PURE__ */ f("div", { class: "v-popper__arrow-inner" }, null, -1)];
function tt(e, t, n, r, i, a) {
	let o = _("ResizeObserver");
	return h(), d("div", {
		id: e.popperId,
		ref: "popover",
		class: ie(["v-popper__popper", [
			e.themeClass,
			e.classes.popperClass,
			{
				"v-popper__popper--shown": e.shown,
				"v-popper__popper--hidden": !e.shown,
				"v-popper__popper--show-from": e.classes.showFrom,
				"v-popper__popper--show-to": e.classes.showTo,
				"v-popper__popper--hide-from": e.classes.hideFrom,
				"v-popper__popper--hide-to": e.classes.hideTo,
				"v-popper__popper--skip-transition": e.skipTransition,
				"v-popper__popper--arrow-overflow": e.result && e.result.arrow.overflow,
				"v-popper__popper--no-positioning": !e.result
			}
		]]),
		style: m(e.result ? {
			position: e.result.strategy,
			transform: `translate3d(${Math.round(e.result.x)}px,${Math.round(e.result.y)}px,0)`
		} : void 0),
		"aria-hidden": e.shown ? "false" : "true",
		tabindex: e.autoHide ? 0 : void 0,
		"data-popper-placement": e.result ? e.result.placement : void 0,
		onKeyup: t[2] ||= le((t) => e.autoHide && e.$emit("hide"), ["esc"])
	}, [f("div", {
		class: "v-popper__backdrop",
		onClick: t[0] ||= (t) => e.autoHide && e.$emit("hide")
	}), f("div", {
		class: "v-popper__wrapper",
		style: m(e.result ? { transformOrigin: e.result.transformOrigin } : void 0)
	}, [f("div", $e, [e.mounted ? (h(), d(c, { key: 0 }, [f("div", null, [g(e.$slots, "default")]), e.handleResize ? (h(), l(o, {
		key: 0,
		onNotify: t[1] ||= (t) => e.$emit("resize", t)
	})) : u("", !0)], 64)) : u("", !0)], 512), f("div", {
		ref: "arrow",
		class: "v-popper__arrow-container",
		style: m(e.result ? {
			left: e.toPx(e.result.arrow.x),
			top: e.toPx(e.result.arrow.y)
		} : void 0)
	}, et, 4)], 4)], 46, Qe);
}
var nt = /* @__PURE__ */ Y(Ze, [["render", tt]]), rt = { methods: {
	show(...e) {
		return this.$refs.popper.show(...e);
	},
	hide(...e) {
		return this.$refs.popper.hide(...e);
	},
	dispose(...e) {
		return this.$refs.popper.dispose(...e);
	},
	onResize(...e) {
		return this.$refs.popper.onResize(...e);
	}
} }, it = function() {};
typeof window < "u" && (it = window.Element);
var at = p({
	name: "VPopperWrapper",
	components: {
		Popper: Ke,
		PopperContent: nt
	},
	mixins: [rt, Xe("finalTheme")],
	props: {
		theme: {
			type: String,
			default: null
		},
		referenceNode: {
			type: Function,
			default: null
		},
		shown: {
			type: Boolean,
			default: !1
		},
		showGroup: {
			type: String,
			default: null
		},
		ariaId: { default: null },
		disabled: {
			type: Boolean,
			default: void 0
		},
		positioningDisabled: {
			type: Boolean,
			default: void 0
		},
		placement: {
			type: String,
			default: void 0
		},
		delay: {
			type: [
				String,
				Number,
				Object
			],
			default: void 0
		},
		distance: {
			type: [Number, String],
			default: void 0
		},
		skidding: {
			type: [Number, String],
			default: void 0
		},
		triggers: {
			type: Array,
			default: void 0
		},
		showTriggers: {
			type: [Array, Function],
			default: void 0
		},
		hideTriggers: {
			type: [Array, Function],
			default: void 0
		},
		popperTriggers: {
			type: Array,
			default: void 0
		},
		popperShowTriggers: {
			type: [Array, Function],
			default: void 0
		},
		popperHideTriggers: {
			type: [Array, Function],
			default: void 0
		},
		container: {
			type: [
				String,
				Object,
				it,
				Boolean
			],
			default: void 0
		},
		boundary: {
			type: [String, it],
			default: void 0
		},
		strategy: {
			type: String,
			default: void 0
		},
		autoHide: {
			type: [Boolean, Function],
			default: void 0
		},
		handleResize: {
			type: Boolean,
			default: void 0
		},
		instantMove: {
			type: Boolean,
			default: void 0
		},
		eagerMount: {
			type: Boolean,
			default: void 0
		},
		popperClass: {
			type: [
				String,
				Array,
				Object
			],
			default: void 0
		},
		computeTransformOrigin: {
			type: Boolean,
			default: void 0
		},
		autoMinSize: {
			type: Boolean,
			default: void 0
		},
		autoSize: {
			type: [Boolean, String],
			default: void 0
		},
		autoMaxSize: {
			type: Boolean,
			default: void 0
		},
		autoBoundaryMaxSize: {
			type: Boolean,
			default: void 0
		},
		preventOverflow: {
			type: Boolean,
			default: void 0
		},
		overflowPadding: {
			type: [Number, String],
			default: void 0
		},
		arrowPadding: {
			type: [Number, String],
			default: void 0
		},
		arrowOverflow: {
			type: Boolean,
			default: void 0
		},
		flip: {
			type: Boolean,
			default: void 0
		},
		shift: {
			type: Boolean,
			default: void 0
		},
		shiftCrossAxis: {
			type: Boolean,
			default: void 0
		},
		noAutoFocus: {
			type: Boolean,
			default: void 0
		},
		disposeTimeout: {
			type: Number,
			default: void 0
		}
	},
	emits: {
		show: () => !0,
		hide: () => !0,
		"update:shown": (e) => !0,
		"apply-show": () => !0,
		"apply-hide": () => !0,
		"close-group": () => !0,
		"close-directive": () => !0,
		"auto-hide": () => !0,
		resize: () => !0
	},
	computed: { finalTheme() {
		return this.theme ?? this.$options.vPopperTheme;
	} },
	methods: { getTargetNodes() {
		return Array.from(this.$el.children).filter((e) => e !== this.$refs.popperContent.$el);
	} }
});
function ot(e, t, n, r, i, a) {
	let o = _("PopperContent"), s = _("Popper");
	return h(), l(s, ne({ ref: "popper" }, e.$props, {
		theme: e.finalTheme,
		"target-nodes": e.getTargetNodes,
		"popper-node": () => e.$refs.popperContent.$el,
		class: [e.themeClass],
		onShow: t[0] ||= () => e.$emit("show"),
		onHide: t[1] ||= () => e.$emit("hide"),
		"onUpdate:shown": t[2] ||= (t) => e.$emit("update:shown", t),
		onApplyShow: t[3] ||= () => e.$emit("apply-show"),
		onApplyHide: t[4] ||= () => e.$emit("apply-hide"),
		onCloseGroup: t[5] ||= () => e.$emit("close-group"),
		onCloseDirective: t[6] ||= () => e.$emit("close-directive"),
		onAutoHide: t[7] ||= () => e.$emit("auto-hide"),
		onResize: t[8] ||= () => e.$emit("resize")
	}), {
		default: ce(({ popperId: t, isShown: n, shouldMountContent: r, skipTransition: i, autoHide: a, show: s, hide: c, handleResize: l, onResize: u, classes: d, result: f }) => [g(e.$slots, "default", {
			shown: n,
			show: s,
			hide: c
		}), ee(o, {
			ref: "popperContent",
			"popper-id": t,
			theme: e.finalTheme,
			shown: n,
			mounted: r,
			"skip-transition": i,
			"auto-hide": a,
			"handle-resize": l,
			classes: d,
			result: f,
			onHide: c,
			onResize: u
		}, {
			default: ce(() => [g(e.$slots, "popper", {
				shown: n,
				hide: c
			})]),
			_: 2
		}, 1032, [
			"popper-id",
			"theme",
			"shown",
			"mounted",
			"skip-transition",
			"auto-hide",
			"handle-resize",
			"classes",
			"result",
			"onHide",
			"onResize"
		])]),
		_: 3
	}, 16, [
		"theme",
		"target-nodes",
		"popper-node",
		"class"
	]);
}
var $ = /* @__PURE__ */ Y(at, [["render", ot]]), st = {
	...$,
	name: "VDropdown",
	vPopperTheme: "dropdown"
};
({ ...$ });
var ct = {
	...$,
	name: "VTooltip",
	vPopperTheme: "tooltip"
};
p({
	name: "VTooltipDirective",
	components: {
		Popper: Le(),
		PopperContent: nt
	},
	mixins: [rt],
	inheritAttrs: !1,
	props: {
		theme: {
			type: String,
			default: "tooltip"
		},
		html: {
			type: Boolean,
			default: (e) => I(e.theme, "html")
		},
		content: {
			type: [
				String,
				Number,
				Function
			],
			default: null
		},
		loadingContent: {
			type: String,
			default: (e) => I(e.theme, "loadingContent")
		},
		targetNodes: {
			type: Function,
			required: !0
		}
	},
	data() {
		return { asyncContent: null };
	},
	computed: {
		isContentAsync() {
			return typeof this.content == "function";
		},
		loading() {
			return this.isContentAsync && this.asyncContent == null;
		},
		finalContent() {
			return this.isContentAsync ? this.loading ? this.loadingContent : this.asyncContent : this.content;
		}
	},
	watch: {
		content: {
			handler() {
				this.fetchContent(!0);
			},
			immediate: !0
		},
		async finalContent() {
			await this.$nextTick(), this.$refs.popper.onResize();
		}
	},
	created() {
		this.$_fetchId = 0;
	},
	methods: {
		fetchContent(e) {
			if (typeof this.content == "function" && this.$_isShown && (e || !this.$_loading && this.asyncContent == null)) {
				this.asyncContent = null, this.$_loading = !0;
				let e = ++this.$_fetchId, t = this.content(this);
				t.then ? t.then((t) => this.onResult(e, t)) : this.onResult(e, t);
			}
		},
		onResult(e, t) {
			e === this.$_fetchId && (this.$_loading = !1, this.asyncContent = t);
		},
		onShow() {
			this.$_isShown = !0, this.fetchContent();
		},
		onHide() {
			this.$_isShown = !1;
		}
	}
});
var lt = st, ut = ct;
//#endregion
export { lt as n, ut as t };
