import { t as e } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { t } from "./Text-BiA0aMEo.js";
import { computed as n, createBlock as r, createElementBlock as i, createVNode as a, defineComponent as o, inject as s, mergeProps as c, onBeforeUnmount as l, onMounted as u, openBlock as d, ref as f, toRef as p, toValue as m, unref as h, watch as g, withCtx as _ } from "vue";
String.raw;
import '../assets/NumberFlow-k1eVK_K5.css';//#region node_modules/number-flow/dist/ssr-DvIINv8w.mjs
var v = String.raw, y = (() => {
	try {
		document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
	} catch {
		return !1;
	}
	return !0;
})(), b = typeof CSS < "u" && CSS.supports && CSS.supports("line-height", "mod(1,1)"), x = typeof matchMedia < "u" ? matchMedia("(prefers-reduced-motion: reduce)") : null, S = "--_number-flow-d-opacity", C = "--_number-flow-d-width", w = "--_number-flow-dx", T = "--_number-flow-d", ee = (() => {
	try {
		return CSS.registerProperty({
			name: S,
			syntax: "<number>",
			inherits: !1,
			initialValue: "0"
		}), CSS.registerProperty({
			name: w,
			syntax: "<length>",
			inherits: !0,
			initialValue: "0px"
		}), CSS.registerProperty({
			name: C,
			syntax: "<number>",
			inherits: !1,
			initialValue: "0"
		}), CSS.registerProperty({
			name: T,
			syntax: "<number>",
			inherits: !0,
			initialValue: "0"
		}), !0;
	} catch {
		return !1;
	}
})(), E = "round(nearest, calc(var(--number-flow-mask-height, 0.25em) / 2), 1px)", D = `calc(${E} * 2)`, O = "var(--number-flow-mask-width, 0.5em)", k = `calc(${O} / var(--scale-x))`, A = "#000 0, transparent 71%", te = v`:host{display:inline-block;direction:ltr;white-space:nowrap;isolation:isolate;line-height:1}.number,.number__inner{display:inline-block;transform-origin:left top}:host([data-will-change]) :is(.number,.number__inner,.section,.digit,.digit__num,.symbol){will-change:transform}.number{--scale-x:calc(1 + var(${C}) / var(--width));transform:translateX(var(${w})) scaleX(var(--scale-x));margin:0 calc(-1 * ${O});position:relative;-webkit-mask-image:linear-gradient(to right,transparent 0,#000 ${k},#000 calc(100% - ${k}),transparent ),linear-gradient(to bottom,transparent 0,#000 ${D},#000 calc(100% - ${D}),transparent 100% ),radial-gradient(at bottom right,${A}),radial-gradient(at bottom left,${A}),radial-gradient(at top left,${A}),radial-gradient(at top right,${A});-webkit-mask-size:100% calc(100% - ${D} * 2),calc(100% - ${k} * 2) 100%,${k} ${D},${k} ${D},${k} ${D},${k} ${D};-webkit-mask-position:center,center,top left,top right,bottom right,bottom left;-webkit-mask-repeat:no-repeat}.number__inner{padding:${E} ${O};transform:scaleX(calc(1 / var(--scale-x))) translateX(calc(-1 * var(${w})))}:host > :not(.number){z-index:5}.section,.symbol{display:inline-block;position:relative;isolation:isolate}.section::after{content:'\200b';display:inline-block}.section--justify-left{transform-origin:center left}.section--justify-right{transform-origin:center right}.section > [inert],.symbol > [inert]{margin:0 !important;position:absolute !important;z-index:-1}.digit{display:inline-block;position:relative;--c:var(--current) + var(${T})}.digit__num,.number .section::after{padding:${E} 0}.digit__num{display:inline-block;--offset-raw:mod(var(--length) + var(--n) - mod(var(--c),var(--length)),var(--length));--offset:calc( var(--offset-raw) - var(--length) * round(down,var(--offset-raw) / (var(--length) / 2),1) );--y:clamp(-100%,var(--offset) * 100%,100%);transform:translateY(var(--y))}.digit__num[inert]{position:absolute;top:0;left:50%;transform:translateX(-50%) translateY(var(--y))}.digit:not(.is-spinning) .digit__num[inert]{display:none}.symbol__value{display:inline-block;mix-blend-mode:plus-lighter;white-space:pre}.section--justify-left .symbol > [inert]{left:0}.section--justify-right .symbol > [inert]{right:0}.animate-presence{opacity:calc(1 + var(${S}))}`, ne = typeof HTMLElement < "u" ? HTMLElement : class {};
v`:host{display:inline-block;direction:ltr;white-space:nowrap;line-height:1}span{display:inline-block}:host([data-will-change]) span{will-change:transform}.number,.digit{padding:${E} 0}.symbol{white-space:pre}`;
var re = (e, t) => e == null ? t : t == null ? e : Math.max(e, t), j = /* @__PURE__ */ new WeakMap(), ie = {
	onUpdate(e, t, n) {
		if (j.set(n, void 0), !n.computedTrend) return;
		let r = t.integer.concat(t.fraction).filter((e) => e.type === "integer" || e.type === "fraction"), i = e.integer.concat(e.fraction).filter((e) => e.type === "integer" || e.type === "fraction"), a = r.find((e) => !i.find((t) => t.pos === e.pos && t.value === e.value)), o = i.find((e) => !r.find((t) => e.pos === t.pos && e.value === t.value));
		j.set(n, re(a?.pos, o?.pos));
	},
	getDelta(e, t, n) {
		let r = e - t, i = j.get(n.flow);
		if (!r && i != null && i >= n.pos) return n.length * n.flow.computedTrend;
	}
}, M = (e, t, n) => {
	let r = document.createElement(e), [i, a] = Array.isArray(t) ? [void 0, t] : [t, n];
	return i && Object.assign(r, i), a?.forEach((e) => r.appendChild(e)), r;
}, ae = (e, t) => t === "left" ? e.offsetLeft : ((e.offsetParent instanceof HTMLElement ? e.offsetParent : null)?.offsetWidth ?? 0) - e.offsetWidth - e.offsetLeft, oe = (e) => e.offsetWidth > 0 && e.offsetHeight > 0, se = (e, t) => {
	typeof HTMLElement < "u" && typeof customElements < "u" && !customElements.get(e) && customElements.define(e, t);
};
function N(e, t, { reverse: n = !1 } = {}) {
	let r = e.length;
	for (let i = n ? r - 1 : 0; n ? i >= 0 : i < r; n ? i-- : i++) t(e[i], i);
}
function ce(e, t, n, r) {
	let i = t.formatToParts(e);
	n && i.unshift({
		type: "prefix",
		value: n
	}), r && i.push({
		type: "suffix",
		value: r
	});
	let a = [], o = [], s = [], c = [], l = {}, u = (e) => `${e}:${l[e] = (l[e] ?? -1) + 1}`, d = "", f = !1, p = !1;
	for (let e of i) {
		d += e.value;
		let t = e.type === "minusSign" || e.type === "plusSign" ? "sign" : e.type;
		t === "integer" ? (f = !0, o.push(...e.value.split("").map((e) => ({
			type: t,
			value: parseInt(e)
		})))) : t === "group" ? o.push({
			type: t,
			value: e.value
		}) : t === "decimal" ? (p = !0, s.push({
			type: t,
			value: e.value,
			key: u(t)
		})) : t === "fraction" ? s.push(...e.value.split("").map((e) => ({
			type: t,
			value: parseInt(e),
			key: u(t),
			pos: -1 - l[t]
		}))) : (f || p ? c : a).push({
			type: t,
			value: e.value,
			key: u(t)
		});
	}
	let m = [];
	for (let e = o.length - 1; e >= 0; e--) {
		let t = o[e];
		m.unshift(t.type === "integer" ? {
			...t,
			key: u(t.type),
			pos: l[t.type]
		} : {
			...t,
			key: u(t.type)
		});
	}
	return {
		pre: a,
		integer: m,
		fraction: s,
		post: c,
		valueAsString: d,
		value: typeof e == "string" ? parseFloat(e) : e
	};
}
var P = b && y && ee, F = class extends ne {
	constructor() {
		super(), this.created = !1, this.batched = !1, this._preUpdated = !1;
		let { animated: e, ...t } = this.constructor.defaultProps;
		this._animated = this.computedAnimated = e, Object.assign(this, t);
	}
	get animated() {
		return this._animated;
	}
	set animated(e) {
		var t;
		this.animated !== e && (this._animated = e, (t = this.shadowRoot) == null || t.getAnimations().forEach((e) => e.finish()));
	}
	set data(e) {
		var t, n;
		if (e == null || e === this._data) return;
		let { pre: r, integer: i, fraction: a, post: o, value: s } = e;
		if (this.created) {
			let c = this._data;
			this._data = e, this.computedTrend = typeof this.trend == "function" ? this.trend(c.value, s) : this.trend, this.computedAnimated = P && this._animated && (!this.respectMotionPreference || !((t = x) != null && t.matches)) && oe(this) && this.ownerDocument.visibilityState === "visible", (n = this.plugins) == null || n.forEach((t) => t.onUpdate?.call(t, e, c, this)), this.batched || this.willUpdate(), this._pre.update(r), this._num.update({
				integer: i,
				fraction: a
			}), this._post.update(o), this.batched || this.didUpdate();
		} else {
			this._data = e, this.attachShadow({ mode: "open" });
			try {
				this._internals ??= this.attachInternals(), this._internals.role = "img";
			} catch {}
			let t = document.createElement("style");
			this.nonce && (t.nonce = this.nonce), t.textContent = te, this.shadowRoot.appendChild(t), this._pre = new R(this, r, {
				justify: "right",
				part: "left"
			}), this.shadowRoot.appendChild(this._pre.el), this._num = new le(this, i, a), this.shadowRoot.appendChild(this._num.el), this._post = new R(this, o, {
				justify: "left",
				part: "right"
			}), this.shadowRoot.appendChild(this._post.el), this.created = !0;
		}
		try {
			this._internals.ariaLabel = e.valueAsString;
		} catch {}
	}
	willUpdate() {
		var e;
		this._preUpdated = P && this._animated && (!this.respectMotionPreference || !((e = x) != null && e.matches)) && this.ownerDocument.visibilityState === "visible", this._preUpdated && (this._pre.willUpdate(), this._num.willUpdate(), this._post.willUpdate());
	}
	didUpdate() {
		if (!this.computedAnimated || !this._preUpdated) return;
		this._abortAnimationsFinish ? this._abortAnimationsFinish.abort() : this.dispatchEvent(new Event("animationsstart")), this._pre.didUpdate(), this._num.didUpdate(), this._post.didUpdate();
		let e = new AbortController();
		Promise.all(this.shadowRoot.getAnimations().map((e) => e.finished)).then(() => {
			e.signal.aborted || (this.dispatchEvent(new Event("animationsfinish")), this._abortAnimationsFinish = void 0);
		}), this._abortAnimationsFinish = e;
	}
};
F.defaultProps = {
	transformTiming: {
		duration: 900,
		easing: "linear(0,.005,.019,.039,.066,.096,.129,.165,.202,.24,.278,.316,.354,.39,.426,.461,.494,.526,.557,.586,.614,.64,.665,.689,.711,.731,.751,.769,.786,.802,.817,.831,.844,.856,.867,.877,.887,.896,.904,.912,.919,.925,.931,.937,.942,.947,.951,.955,.959,.962,.965,.968,.971,.973,.976,.978,.98,.981,.983,.984,.986,.987,.988,.989,.99,.991,.992,.992,.993,.994,.994,.995,.995,.996,.996,.9963,.9967,.9969,.9972,.9975,.9977,.9979,.9981,.9982,.9984,.9985,.9987,.9988,.9989,1)"
	},
	spinTiming: void 0,
	opacityTiming: {
		duration: 450,
		easing: "ease-out"
	},
	animated: !0,
	trend: (e, t) => Math.sign(t - e),
	respectMotionPreference: !0,
	plugins: void 0,
	digits: void 0
};
var le = class {
	constructor(e, t, n, { className: r, ...i } = {}) {
		this.flow = e, this._integer = new L(e, t, {
			justify: "right",
			part: "integer"
		}), this._fraction = new L(e, n, {
			justify: "left",
			part: "fraction"
		}), this._inner = M("span", { className: "number__inner" }, [this._integer.el, this._fraction.el]), this.el = M("span", {
			...i,
			part: "number",
			className: `number ${r ?? ""}`
		}, [this._inner]);
	}
	willUpdate() {
		this._prevWidth = this.el.offsetWidth, this._prevLeft = this.el.getBoundingClientRect().left, this._integer.willUpdate(), this._fraction.willUpdate();
	}
	update({ integer: e, fraction: t }) {
		this._integer.update(e), this._fraction.update(t);
	}
	didUpdate() {
		let e = this.el.getBoundingClientRect();
		this._integer.didUpdate(), this._fraction.didUpdate();
		let t = this._prevLeft - e.left, n = this.el.offsetWidth, r = this._prevWidth - n;
		this.el.style.setProperty("--width", String(n)), this.el.animate({
			[w]: [`${t}px`, "0px"],
			[C]: [r, 0]
		}, {
			...this.flow.transformTiming,
			composite: "accumulate"
		});
	}
}, I = class {
	constructor(e, t, { justify: n, className: r, ...i }, a) {
		this.flow = e, this.children = /* @__PURE__ */ new Map(), this.onCharRemove = (e) => () => {
			this.children.delete(e);
		}, this.justify = n;
		let o = t.map((e) => this.addChar(e).el);
		this.el = M("span", {
			...i,
			className: `section section--justify-${n} ${r ?? ""}`
		}, a ? a(o) : o);
	}
	addChar(e, { startDigitsAtZero: t = !1, ...n } = {}) {
		let r = e.type === "integer" || e.type === "fraction" ? new V(this, e.type, t ? 0 : e.value, e.pos, {
			...n,
			onRemove: this.onCharRemove(e.key)
		}) : new H(this, e.type, e.value, {
			...n,
			onRemove: this.onCharRemove(e.key)
		});
		return this.children.set(e.key, r), r;
	}
	unpop(e) {
		e.el.removeAttribute("inert"), e.el.style.top = "", e.el.style[this.justify] = "";
	}
	pop(e) {
		e.forEach((e) => {
			e.el.style.top = `${e.el.offsetTop}px`, e.el.style[this.justify] = `${ae(e.el, this.justify)}px`;
		}), e.forEach((e) => {
			e.el.setAttribute("inert", ""), e.present = !1;
		});
	}
	addNewAndUpdateExisting(e) {
		let t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), r = this.justify === "left", i = r ? "prepend" : "append";
		if (N(e, (e) => {
			let r;
			this.children.has(e.key) ? (r = this.children.get(e.key), n.set(e, r), this.unpop(r), r.present = !0) : (r = this.addChar(e, {
				startDigitsAtZero: !0,
				animateIn: !0
			}), t.set(e, r)), this.el[i](r.el);
		}, { reverse: r }), this.flow.computedAnimated) {
			let e = this.el.getBoundingClientRect();
			t.forEach((t) => {
				t.willUpdate(e);
			});
		}
		t.forEach((e, t) => {
			e.update(t.value);
		}), n.forEach((e, t) => {
			e.update(t.value);
		});
	}
	willUpdate() {
		let e = this.el.getBoundingClientRect();
		this._prevOffset = e[this.justify], this.children.forEach((t) => t.willUpdate(e));
	}
	didUpdate() {
		let e = this.el.getBoundingClientRect();
		this.children.forEach((t) => t.didUpdate(e));
		let t = e[this.justify], n = this._prevOffset - t;
		n && this.children.size && this.el.animate({ transform: [`translateX(${n}px)`, "none"] }, {
			...this.flow.transformTiming,
			composite: "accumulate"
		});
	}
}, L = class extends I {
	update(e) {
		let t = /* @__PURE__ */ new Map();
		this.children.forEach((n, r) => {
			e.find((e) => e.key === r) || t.set(r, n), this.unpop(n);
		}), this.addNewAndUpdateExisting(e), t.forEach((e) => {
			e instanceof V && e.update(0);
		}), this.pop(t);
	}
}, R = class extends I {
	update(e) {
		let t = /* @__PURE__ */ new Map();
		this.children.forEach((n, r) => {
			e.find((e) => e.key === r) || t.set(r, n);
		}), this.pop(t), this.addNewAndUpdateExisting(e);
	}
}, z = class {
	constructor(e, t, { onRemove: n, animateIn: r = !1 } = {}) {
		this.flow = e, this.el = t, this._present = !0, this._remove = () => {
			var e;
			this.el.remove(), (e = this._onRemove) == null || e.call(this);
		}, this.el.classList.add("animate-presence"), this.flow.computedAnimated && r && this.el.animate({ "--_number-flow-d-opacity": [-.9999, 0] }, {
			...this.flow.opacityTiming,
			composite: "accumulate"
		}), this._onRemove = n;
	}
	get present() {
		return this._present;
	}
	set present(e) {
		if (this._present !== e) {
			if (this._present = e, e ? this.el.removeAttribute("inert") : this.el.setAttribute("inert", ""), !this.flow.computedAnimated) {
				e || this._remove();
				return;
			}
			this.el.style.setProperty("--_number-flow-d-opacity", e ? "0" : "-.999"), this.el.animate({ [S]: e ? [-.9999, 0] : [.999, 0] }, {
				...this.flow.opacityTiming,
				composite: "accumulate"
			}), e ? this.flow.removeEventListener("animationsfinish", this._remove) : this.flow.addEventListener("animationsfinish", this._remove, { once: !0 });
		}
	}
}, B = class extends z {
	constructor(e, t, n, r) {
		super(e.flow, n, r), this.section = e, this.value = t, this.el = n;
	}
}, V = class extends B {
	constructor(e, t, n, r, i) {
		let a = (e.flow.digits?.[r]?.max ?? 9) + 1, o = Array.from({ length: a }).map((e, t) => {
			let r = M("span", { className: "digit__num" }, [document.createTextNode(String(t))]);
			return t !== n && r.setAttribute("inert", ""), r.style.setProperty("--n", String(t)), r;
		}), s = M("span", {
			part: `digit ${t}-digit`,
			className: "digit"
		}, o);
		s.style.setProperty("--current", String(n)), s.style.setProperty("--length", String(a)), super(e, n, s, i), this.pos = r, this._onAnimationsFinish = () => {
			this.el.classList.remove("is-spinning");
		}, this._numbers = o, this.length = a;
	}
	willUpdate(e) {
		let t = this.el.getBoundingClientRect();
		this._prevValue = this.value;
		let n = t[this.section.justify] - e[this.section.justify], r = t.width / 2;
		this._prevCenter = this.section.justify === "left" ? n + r : n - r;
	}
	update(e) {
		this.el.style.setProperty("--current", String(e)), this._numbers.forEach((t, n) => n === e ? t.removeAttribute("inert") : t.setAttribute("inert", "")), this.value = e;
	}
	didUpdate(e) {
		let t = this.el.getBoundingClientRect(), n = t[this.section.justify] - e[this.section.justify], r = t.width / 2, i = this.section.justify === "left" ? n + r : n - r, a = this._prevCenter - i;
		a && this.el.animate({ transform: [`translateX(${a}px)`, "none"] }, {
			...this.flow.transformTiming,
			composite: "accumulate"
		});
		let o = this.getDelta();
		o && (this.el.classList.add("is-spinning"), this.el.animate({ "--_number-flow-d": [-o, 0] }, {
			...this.flow.spinTiming ?? this.flow.transformTiming,
			composite: "accumulate"
		}), this.flow.addEventListener("animationsfinish", this._onAnimationsFinish, { once: !0 }));
	}
	getDelta() {
		if (this.flow.plugins) for (let e of this.flow.plugins) {
			let t = e.getDelta?.call(e, this.value, this._prevValue, this);
			if (t != null) return t;
		}
		let e = this.value - this._prevValue, t = this.flow.computedTrend || Math.sign(e);
		return t < 0 && this.value > this._prevValue ? this.value - this.length - this._prevValue : t > 0 && this.value < this._prevValue ? this.length - this._prevValue + this.value : e;
	}
}, H = class extends B {
	constructor(e, t, n, r) {
		let i = M("span", {
			className: "symbol__value",
			textContent: n
		});
		super(e, n, M("span", {
			part: `symbol ${t}`,
			className: "symbol"
		}, [i]), r), this.type = t, this._children = /* @__PURE__ */ new Map(), this._onChildRemove = (e) => () => {
			this._children.delete(e);
		}, this._children.set(n, new z(this.flow, i, { onRemove: this._onChildRemove(n) }));
	}
	willUpdate(e) {
		if (this.type === "decimal") return;
		let t = this.el.getBoundingClientRect();
		this._prevOffset = t[this.section.justify] - e[this.section.justify];
	}
	update(e) {
		if (this.value !== e) {
			let t = this._children.get(this.value);
			t && (t.present = !1);
			let n = this._children.get(e);
			if (n) n.present = !0;
			else {
				let t = M("span", {
					className: "symbol__value",
					textContent: e
				});
				this.el.appendChild(t), this._children.set(e, new z(this.flow, t, {
					animateIn: !0,
					onRemove: this._onChildRemove(e)
				}));
			}
		}
		this.value = e;
	}
	didUpdate(e) {
		if (this.type === "decimal") return;
		let t = this.el.getBoundingClientRect()[this.section.justify] - e[this.section.justify], n = this._prevOffset - t;
		n && this.el.animate({ transform: [`translateX(${n}px)`, "none"] }, {
			...this.flow.transformTiming,
			composite: "accumulate"
		});
	}
}, U = String.raw;
(() => {
	try {
		document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
	} catch {
		return !1;
	}
	return !0;
})(), typeof CSS < "u" && CSS.supports && CSS.supports("line-height", "mod(1,1)"), typeof matchMedia < "u" && matchMedia("(prefers-reduced-motion: reduce)");
var W = "--_number-flow-d-opacity", G = "--_number-flow-d-width", K = "--_number-flow-dx", q = "--_number-flow-d";
(() => {
	try {
		return CSS.registerProperty({
			name: W,
			syntax: "<number>",
			inherits: !1,
			initialValue: "0"
		}), CSS.registerProperty({
			name: K,
			syntax: "<length>",
			inherits: !0,
			initialValue: "0px"
		}), CSS.registerProperty({
			name: G,
			syntax: "<number>",
			inherits: !1,
			initialValue: "0"
		}), CSS.registerProperty({
			name: q,
			syntax: "<number>",
			inherits: !0,
			initialValue: "0"
		}), !0;
	} catch {
		return !1;
	}
})();
var J = "round(nearest, calc(var(--number-flow-mask-height, 0.25em) / 2), 1px)", Y = `calc(${J} * 2)`, X = "var(--number-flow-mask-width, 0.5em)", Z = `calc(${X} / var(--scale-x))`, Q = "#000 0, transparent 71%", ue = U`:host{display:inline-block;direction:ltr;white-space:nowrap;isolation:isolate;line-height:1}.number,.number__inner{display:inline-block;transform-origin:left top}:host([data-will-change]) :is(.number,.number__inner,.section,.digit,.digit__num,.symbol){will-change:transform}.number{--scale-x:calc(1 + var(${G}) / var(--width));transform:translateX(var(${K})) scaleX(var(--scale-x));margin:0 calc(-1 * ${X});position:relative;-webkit-mask-image:linear-gradient(to right,transparent 0,#000 ${Z},#000 calc(100% - ${Z}),transparent ),linear-gradient(to bottom,transparent 0,#000 ${Y},#000 calc(100% - ${Y}),transparent 100% ),radial-gradient(at bottom right,${Q}),radial-gradient(at bottom left,${Q}),radial-gradient(at top left,${Q}),radial-gradient(at top right,${Q});-webkit-mask-size:100% calc(100% - ${Y} * 2),calc(100% - ${Z} * 2) 100%,${Z} ${Y},${Z} ${Y},${Z} ${Y},${Z} ${Y};-webkit-mask-position:center,center,top left,top right,bottom right,bottom left;-webkit-mask-repeat:no-repeat}.number__inner{padding:${J} ${X};transform:scaleX(calc(1 / var(--scale-x))) translateX(calc(-1 * var(${K})))}:host > :not(.number){z-index:5}.section,.symbol{display:inline-block;position:relative;isolation:isolate}.section::after{content:'\200b';display:inline-block}.section--justify-left{transform-origin:center left}.section--justify-right{transform-origin:center right}.section > [inert],.symbol > [inert]{margin:0 !important;position:absolute !important;z-index:-1}.digit{display:inline-block;position:relative;--c:var(--current) + var(${q})}.digit__num,.number .section::after{padding:${J} 0}.digit__num{display:inline-block;--offset-raw:mod(var(--length) + var(--n) - mod(var(--c),var(--length)),var(--length));--offset:calc( var(--offset-raw) - var(--length) * round(down,var(--offset-raw) / (var(--length) / 2),1) );--y:clamp(-100%,var(--offset) * 100%,100%);transform:translateY(var(--y))}.digit__num[inert]{position:absolute;top:0;left:50%;transform:translateX(-50%) translateY(var(--y))}.digit:not(.is-spinning) .digit__num[inert]{display:none}.symbol__value{display:inline-block;mix-blend-mode:plus-lighter;white-space:pre}.section--justify-left .symbol > [inert]{left:0}.section--justify-right .symbol > [inert]{right:0}.animate-presence{opacity:calc(1 + var(${W}))}`, de = U`:host{display:inline-block;direction:ltr;white-space:nowrap;line-height:1}span{display:inline-block}:host([data-will-change]) span{will-change:transform}.number,.digit{padding:${J} 0}.symbol{white-space:pre}`, fe = (e = "") => U`:where(number-flow${e}){line-height:1}number-flow${e} > span{font-kerning:none;display:inline-block;padding:${Y} 0}`, pe = (e) => [
	de,
	fe(e),
	ue
], $ = Symbol(), me = [
	"batched",
	"trend",
	"plugins",
	"animated",
	"transformTiming",
	"spinTiming",
	"opacityTiming",
	"respectMotionPreference",
	"nonce",
	"data-will-change",
	"digits",
	"innerHTML",
	"data"
], he = /* @__PURE__ */ o({
	inheritAttrs: !1,
	__name: "index",
	props: {
		transformTiming: { default: () => F.defaultProps.transformTiming },
		spinTiming: { default: () => F.defaultProps.spinTiming },
		opacityTiming: { default: () => F.defaultProps.opacityTiming },
		animated: {
			type: Boolean,
			default: () => F.defaultProps.animated
		},
		respectMotionPreference: {
			type: Boolean,
			default: () => F.defaultProps.respectMotionPreference
		},
		trend: {
			type: [Number, Function],
			default: () => F.defaultProps.trend
		},
		plugins: { default: () => F.defaultProps.plugins },
		digits: { default: () => F.defaultProps.digits },
		locales: {},
		format: {},
		value: {},
		prefix: {},
		suffix: {},
		nonce: {},
		willChange: {
			type: Boolean,
			default: !1
		}
	},
	emits: ["animationsstart", "animationsfinish"],
	setup(e, { expose: t, emit: r }) {
		let a = f();
		t({ el: a });
		let o = r, l = n(() => new Intl.NumberFormat(e.locales, e.format)), u = n(() => ce(e.value, l.value, e.prefix, e.suffix)), p = s($, void 0);
		return p?.(a, u), (e, t) => (d(), i("number-flow-vue", c({
			ref_key: "el",
			ref: a
		}, e.$attrs, {
			batched: !!h(p),
			trend: e.trend,
			plugins: e.plugins,
			animated: e.animated,
			transformTiming: e.transformTiming,
			spinTiming: e.spinTiming,
			opacityTiming: e.opacityTiming,
			respectMotionPreference: e.respectMotionPreference,
			nonce: e.nonce,
			"data-will-change": e.willChange ? "" : void 0,
			digits: e.digits,
			innerHTML: h(void 0),
			"data-allow-mismatch": "",
			onAnimationsstart: t[0] ||= (e) => o("animationsstart"),
			onAnimationsfinish: t[1] ||= (e) => o("animationsfinish"),
			data: u.value
		}), null, 16, me));
	}
});
pe("-vue"), se("number-flow-vue", F);
//#endregion
//#region src/components/NumberFlow/useNumberFlow.ts
var ge = "cubic-bezier(0.22, 1, 0.36, 1)", _e = (e) => e === "up" ? 1 : e === "down" ? -1 : e === "individual" ? 0 : (e, t) => Math.sign(t - e), ve = (e, t, n) => {
	let r = n?.transform ?? {
		duration: e,
		easing: t
	};
	return {
		transform: r,
		spin: n?.spin ?? r,
		opacity: n?.opacity ?? {
			duration: Math.min(e * .5, 350),
			easing: "ease-out"
		}
	};
}, ye = ({ animateOnMount: e, initialValue: t, mountDelay: r, startOnVisible: i, target: a, value: o, visibilityRootMargin: s, visibilityThreshold: c }) => {
	let d = f(m(e) ? m(t) : m(o)), p = f(!m(e)), h, _, v, y = () => {
		h !== void 0 && window.cancelAnimationFrame(h), v !== void 0 && window.clearTimeout(v), h = void 0, v = void 0, _?.disconnect(), _ = void 0;
	}, b = () => {
		h = window.requestAnimationFrame(() => {
			p.value = !0, d.value = m(o), h = void 0;
		});
	}, x = () => {
		_?.disconnect(), _ = void 0;
		let e = Math.max(0, m(r));
		if (e === 0) {
			b();
			return;
		}
		v = window.setTimeout(() => {
			v = void 0, b();
		}, e);
	}, S = () => {
		let e = a.value;
		return e instanceof HTMLElement ? e : e?.$el instanceof HTMLElement ? e.$el : null;
	};
	return g(() => m(o), (t) => {
		!p.value && m(e) || (d.value = t);
	}), u(() => {
		if (!m(e)) {
			p.value = !0, d.value = m(o);
			return;
		}
		let t = S();
		if (!m(i) || t === null || typeof IntersectionObserver > "u") {
			x();
			return;
		}
		_ = new IntersectionObserver((e) => {
			e.some((e) => e.isIntersecting) && x();
		}, {
			rootMargin: m(s),
			threshold: Math.min(1, Math.max(0, m(c)))
		}), _.observe(t);
	}), l(y), { displayValue: n(() => d.value) };
}, be = /*#__PURE__*/ e(/* @__PURE__ */ o({
	__name: "NumberFlow",
	props: {
		Element: { default: "span" },
		animateOnMount: {
			type: Boolean,
			default: !1
		},
		animated: {
			type: Boolean,
			default: !0
		},
		color: { default: "inherit" },
		continuous: {
			type: Boolean,
			default: !1
		},
		direction: { default: "auto" },
		duration: { default: 700 },
		easing: { default: ge },
		format: {},
		initialValue: { default: 0 },
		locales: {},
		mountDelay: { default: 0 },
		prefix: {},
		respectMotionPreference: {
			type: Boolean,
			default: !0
		},
		startOnVisible: {
			type: Boolean,
			default: !1
		},
		suffix: {},
		textAlign: { default: "inherit" },
		timing: {},
		typography: { default: "inherit" },
		value: {},
		visibilityRootMargin: { default: "0px" },
		visibilityThreshold: { default: .2 },
		willChange: {
			type: Boolean,
			default: !1
		}
	},
	emits: ["animations-finish", "animations-start"],
	setup(e, { emit: i }) {
		let o = e, s = i, c = f(null), { displayValue: l } = ye({
			animateOnMount: p(o, "animateOnMount"),
			initialValue: p(o, "initialValue"),
			mountDelay: p(o, "mountDelay"),
			startOnVisible: p(o, "startOnVisible"),
			target: c,
			value: p(o, "value"),
			visibilityRootMargin: p(o, "visibilityRootMargin"),
			visibilityThreshold: p(o, "visibilityThreshold")
		}), u = n(() => o.continuous ? [ie] : void 0), m = n(() => _e(o.direction)), g = n(() => ve(o.duration, o.easing, o.timing));
		return (e, n) => (d(), r(t, {
			ref_key: "root",
			ref: c,
			class: "NumberFlow",
			Element: o.Element,
			color: o.color,
			"text-align": o.textAlign,
			typography: o.typography
		}, {
			default: _(() => [a(h(he), {
				class: "NumberFlow__value",
				animated: o.animated,
				format: o.format,
				locales: o.locales,
				"opacity-timing": g.value.opacity,
				plugins: u.value,
				prefix: o.prefix,
				"respect-motion-preference": o.respectMotionPreference,
				"spin-timing": g.value.spin,
				suffix: o.suffix,
				"transform-timing": g.value.transform,
				trend: m.value,
				value: h(l),
				"will-change": o.willChange,
				onAnimationsfinish: n[0] ||= (e) => s("animations-finish"),
				onAnimationsstart: n[1] ||= (e) => s("animations-start")
			}, null, 8, [
				"animated",
				"format",
				"locales",
				"opacity-timing",
				"plugins",
				"prefix",
				"respect-motion-preference",
				"spin-timing",
				"suffix",
				"transform-timing",
				"trend",
				"value",
				"will-change"
			])]),
			_: 1
		}, 8, [
			"Element",
			"color",
			"text-align",
			"typography"
		]));
	}
}), [["__scopeId", "data-v-b16b9142"]]);
//#endregion
export { be as default };
