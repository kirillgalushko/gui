import { defineComponent as D, ref as E, computed as C, inject as Y, openBlock as I, createElementBlock as Z, mergeProps as q, unref as S, toValue as f, watch as G, onMounted as J, onBeforeUnmount as K, toRef as w, createBlock as Q, withCtx as tt, createVNode as et } from "vue";
import it from "./Text-Cd35JtZQ.js";
import { _ as nt } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/NumberFlow-DRhGxuzj.css';const st = String.raw, at = (() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
})(), rt = typeof CSS < "u" && CSS.supports && CSS.supports("line-height", "mod(1,1)"), B = typeof matchMedia < "u" ? matchMedia("(prefers-reduced-motion: reduce)") : null, A = "--_number-flow-d-opacity", j = "--_number-flow-d-width", M = "--_number-flow-dx", V = "--_number-flow-d", ot = (() => {
  try {
    return CSS.registerProperty({
      name: A,
      syntax: "<number>",
      inherits: !1,
      initialValue: "0"
    }), CSS.registerProperty({
      name: M,
      syntax: "<length>",
      inherits: !0,
      initialValue: "0px"
    }), CSS.registerProperty({
      name: j,
      syntax: "<number>",
      inherits: !1,
      initialValue: "0"
    }), CSS.registerProperty({
      name: V,
      syntax: "<number>",
      inherits: !0,
      initialValue: "0"
    }), !0;
  } catch {
    return !1;
  }
})(), U = "round(nearest, calc(var(--number-flow-mask-height, 0.25em) / 2), 1px)", b = `calc(${U} * 2)`, k = "var(--number-flow-mask-width, 0.5em)", x = `calc(${k} / var(--scale-x))`, T = "#000 0, transparent 71%", lt = st`:host{display:inline-block;direction:ltr;white-space:nowrap;isolation:isolate;line-height:1}.number,.number__inner{display:inline-block;transform-origin:left top}:host([data-will-change]) :is(.number,.number__inner,.section,.digit,.digit__num,.symbol){will-change:transform}.number{--scale-x:calc(1 + var(${j}) / var(--width));transform:translateX(var(${M})) scaleX(var(--scale-x));margin:0 calc(-1 * ${k});position:relative;-webkit-mask-image:linear-gradient(to right,transparent 0,#000 ${x},#000 calc(100% - ${x}),transparent ),linear-gradient(to bottom,transparent 0,#000 ${b},#000 calc(100% - ${b}),transparent 100% ),radial-gradient(at bottom right,${T}),radial-gradient(at bottom left,${T}),radial-gradient(at top left,${T}),radial-gradient(at top right,${T});-webkit-mask-size:100% calc(100% - ${b} * 2),calc(100% - ${x} * 2) 100%,${x} ${b},${x} ${b},${x} ${b},${x} ${b};-webkit-mask-position:center,center,top left,top right,bottom right,bottom left;-webkit-mask-repeat:no-repeat}.number__inner{padding:${U} ${k};transform:scaleX(calc(1 / var(--scale-x))) translateX(calc(-1 * var(${M})))}:host > :not(.number){z-index:5}.section,.symbol{display:inline-block;position:relative;isolation:isolate}.section::after{content:'\200b';display:inline-block}.section--justify-left{transform-origin:center left}.section--justify-right{transform-origin:center right}.section > [inert],.symbol > [inert]{margin:0 !important;position:absolute !important;z-index:-1}.digit{display:inline-block;position:relative;--c:var(--current) + var(${V})}.digit__num,.number .section::after{padding:${U} 0}.digit__num{display:inline-block;--offset-raw:mod(var(--length) + var(--n) - mod(var(--c),var(--length)),var(--length));--offset:calc( var(--offset-raw) - var(--length) * round(down,var(--offset-raw) / (var(--length) / 2),1) );--y:clamp(-100%,var(--offset) * 100%,100%);transform:translateY(var(--y))}.digit__num[inert]{position:absolute;top:0;left:50%;transform:translateX(-50%) translateY(var(--y))}.digit:not(.is-spinning) .digit__num[inert]{display:none}.symbol__value{display:inline-block;mix-blend-mode:plus-lighter;white-space:pre}.section--justify-left .symbol > [inert]{left:0}.section--justify-right .symbol > [inert]{right:0}.animate-presence{opacity:calc(1 + var(${A}))}`, ht = typeof HTMLElement < "u" ? HTMLElement : class {
}, ut = (s, t) => s == null ? t : t == null ? s : Math.max(s, t), P = /* @__PURE__ */ new WeakMap(), ct = {
  onUpdate(s, t, e) {
    if (P.set(e, void 0), !e.computedTrend)
      return;
    const i = t.integer.concat(t.fraction).filter((a) => a.type === "integer" || a.type === "fraction"), n = s.integer.concat(s.fraction).filter((a) => a.type === "integer" || a.type === "fraction"), r = i.find((a) => !n.find((l) => l.pos === a.pos && l.value === a.value)), o = n.find((a) => !i.find((l) => a.pos === l.pos && a.value === l.value));
    P.set(e, ut(r == null ? void 0 : r.pos, o == null ? void 0 : o.pos));
  },
  getDelta(s, t, e) {
    const i = s - t, n = P.get(e.flow);
    if (!i && n != null && n >= e.pos)
      return e.length * e.flow.computedTrend;
  }
}, _ = (s, t, e) => {
  const i = document.createElement(s), [n, r] = Array.isArray(t) ? [void 0, t] : [t, e];
  return n && Object.assign(i, n), r == null || r.forEach((o) => i.appendChild(o)), i;
}, pt = (s, t) => {
  var e;
  return t === "left" ? s.offsetLeft : (((e = s.offsetParent instanceof HTMLElement ? s.offsetParent : null) == null ? void 0 : e.offsetWidth) ?? 0) - s.offsetWidth - s.offsetLeft;
}, dt = (s) => s.offsetWidth > 0 && s.offsetHeight > 0, mt = (s, t) => {
  typeof HTMLElement < "u" && typeof customElements < "u" && !customElements.get(s) && customElements.define(s, t);
};
function ft(s, t, { reverse: e = !1 } = {}) {
  const i = s.length;
  for (let n = e ? i - 1 : 0; e ? n >= 0 : n < i; e ? n-- : n++)
    t(s[n], n);
}
function gt(s, t, e, i) {
  const n = t.formatToParts(s);
  e && n.unshift({ type: "prefix", value: e }), i && n.push({ type: "suffix", value: i });
  const r = [], o = [], a = [], l = [], h = {}, u = (d) => `${d}:${h[d] = (h[d] ?? -1) + 1}`;
  let p = "", g = !1, v = !1;
  for (const d of n) {
    p += d.value;
    const c = d.type === "minusSign" || d.type === "plusSign" ? "sign" : d.type;
    c === "integer" ? (g = !0, o.push(...d.value.split("").map((m) => ({ type: c, value: parseInt(m) })))) : c === "group" ? o.push({ type: c, value: d.value }) : c === "decimal" ? (v = !0, a.push({ type: c, value: d.value, key: u(c) })) : c === "fraction" ? a.push(...d.value.split("").map((m) => ({
      type: c,
      value: parseInt(m),
      key: u(c),
      pos: -1 - h[c]
    }))) : (g || v ? l : r).push({
      type: c,
      value: d.value,
      key: u(c)
    });
  }
  const $ = [];
  for (let d = o.length - 1; d >= 0; d--) {
    const c = o[d];
    $.unshift(c.type === "integer" ? {
      ...c,
      key: u(c.type),
      pos: h[c.type]
    } : {
      ...c,
      key: u(c.type)
    });
  }
  return {
    pre: r,
    integer: $,
    fraction: a,
    post: l,
    valueAsString: p,
    value: typeof s == "string" ? parseFloat(s) : s
  };
}
const N = rt && at && ot;
class y extends ht {
  constructor() {
    super(), this.created = !1, this.batched = !1, this._preUpdated = !1;
    const { animated: t, ...e } = this.constructor.defaultProps;
    this._animated = this.computedAnimated = t, Object.assign(this, e);
  }
  get animated() {
    return this._animated;
  }
  set animated(t) {
    var e;
    this.animated !== t && (this._animated = t, (e = this.shadowRoot) == null || e.getAnimations().forEach((i) => i.finish()));
  }
  /**
   * @internal
   */
  set data(t) {
    var e, i;
    if (t == null || t === this._data)
      return;
    const { pre: n, integer: r, fraction: o, post: a, value: l } = t;
    if (this.created) {
      const h = this._data;
      this._data = t, this.computedTrend = typeof this.trend == "function" ? this.trend(h.value, l) : this.trend, this.computedAnimated = N && this._animated && (!this.respectMotionPreference || !((e = B) != null && e.matches)) && // https://github.com/barvian/number-flow/issues/9
      dt(this) && // https://github.com/barvian/number-flow/issues/165
      this.ownerDocument.visibilityState === "visible", (i = this.plugins) == null || i.forEach((u) => {
        var p;
        return (p = u.onUpdate) == null ? void 0 : p.call(u, t, h, this);
      }), this.batched || this.willUpdate(), this._pre.update(n), this._num.update({ integer: r, fraction: o }), this._post.update(a), this.batched || this.didUpdate();
    } else {
      this._data = t, this.attachShadow({ mode: "open" });
      try {
        this._internals ?? (this._internals = this.attachInternals()), this._internals.role = "img";
      } catch {
      }
      const h = document.createElement("style");
      this.nonce && (h.nonce = this.nonce), h.textContent = lt, this.shadowRoot.appendChild(h), this._pre = new L(this, n, {
        justify: "right",
        part: "left"
      }), this.shadowRoot.appendChild(this._pre.el), this._num = new yt(this, r, o), this.shadowRoot.appendChild(this._num.el), this._post = new L(this, a, {
        justify: "left",
        part: "right"
      }), this.shadowRoot.appendChild(this._post.el), this.created = !0;
    }
    try {
      this._internals.ariaLabel = t.valueAsString;
    } catch {
    }
  }
  /**
   * @internal
   */
  willUpdate() {
    var t;
    this._preUpdated = N && this._animated && (!this.respectMotionPreference || !((t = B) != null && t.matches)) && this.ownerDocument.visibilityState === "visible", this._preUpdated && (this._pre.willUpdate(), this._num.willUpdate(), this._post.willUpdate());
  }
  /**
   * @internal
   */
  didUpdate() {
    if (!this.computedAnimated || !this._preUpdated)
      return;
    this._abortAnimationsFinish ? this._abortAnimationsFinish.abort() : this.dispatchEvent(new Event("animationsstart")), this._pre.didUpdate(), this._num.didUpdate(), this._post.didUpdate();
    const t = new AbortController();
    Promise.all(this.shadowRoot.getAnimations().map((e) => e.finished)).then(() => {
      t.signal.aborted || (this.dispatchEvent(new Event("animationsfinish")), this._abortAnimationsFinish = void 0);
    }), this._abortAnimationsFinish = t;
  }
}
y.defaultProps = {
  transformTiming: {
    duration: 900,
    // Make sure to keep this minified:
    easing: "linear(0,.005,.019,.039,.066,.096,.129,.165,.202,.24,.278,.316,.354,.39,.426,.461,.494,.526,.557,.586,.614,.64,.665,.689,.711,.731,.751,.769,.786,.802,.817,.831,.844,.856,.867,.877,.887,.896,.904,.912,.919,.925,.931,.937,.942,.947,.951,.955,.959,.962,.965,.968,.971,.973,.976,.978,.98,.981,.983,.984,.986,.987,.988,.989,.99,.991,.992,.992,.993,.994,.994,.995,.995,.996,.996,.9963,.9967,.9969,.9972,.9975,.9977,.9979,.9981,.9982,.9984,.9985,.9987,.9988,.9989,1)"
  },
  spinTiming: void 0,
  opacityTiming: { duration: 450, easing: "ease-out" },
  animated: !0,
  trend: (s, t) => Math.sign(t - s),
  respectMotionPreference: !0,
  plugins: void 0,
  digits: void 0
};
class yt {
  constructor(t, e, i, { className: n, ...r } = {}) {
    this.flow = t, this._integer = new F(t, e, {
      justify: "right",
      part: "integer"
    }), this._fraction = new F(t, i, {
      justify: "left",
      part: "fraction"
    }), this._inner = _("span", {
      className: "number__inner"
    }, [this._integer.el, this._fraction.el]), this.el = _("span", {
      ...r,
      part: "number",
      className: `number ${n ?? ""}`
    }, [this._inner]);
  }
  willUpdate() {
    this._prevWidth = this.el.offsetWidth, this._prevLeft = this.el.getBoundingClientRect().left, this._integer.willUpdate(), this._fraction.willUpdate();
  }
  update({ integer: t, fraction: e }) {
    this._integer.update(t), this._fraction.update(e);
  }
  didUpdate() {
    const t = this.el.getBoundingClientRect();
    this._integer.didUpdate(), this._fraction.didUpdate();
    const e = this._prevLeft - t.left, i = this.el.offsetWidth, n = this._prevWidth - i;
    this.el.style.setProperty("--width", String(i)), this.el.animate({
      [M]: [`${e}px`, "0px"],
      [j]: [n, 0]
    }, {
      ...this.flow.transformTiming,
      composite: "accumulate"
    });
  }
}
class O {
  constructor(t, e, { justify: i, className: n, ...r }, o) {
    this.flow = t, this.children = /* @__PURE__ */ new Map(), this.onCharRemove = (l) => () => {
      this.children.delete(l);
    }, this.justify = i;
    const a = e.map((l) => this.addChar(l).el);
    this.el = _("span", {
      ...r,
      className: `section section--justify-${i} ${n ?? ""}`
    }, o ? o(a) : a);
  }
  addChar(t, { startDigitsAtZero: e = !1, ...i } = {}) {
    const n = t.type === "integer" || t.type === "fraction" ? new H(this, t.type, e ? 0 : t.value, t.pos, {
      ...i,
      onRemove: this.onCharRemove(t.key)
    }) : new vt(this, t.type, t.value, {
      ...i,
      onRemove: this.onCharRemove(t.key)
    });
    return this.children.set(t.key, n), n;
  }
  unpop(t) {
    t.el.removeAttribute("inert"), t.el.style.top = "", t.el.style[this.justify] = "";
  }
  pop(t) {
    t.forEach((e) => {
      e.el.style.top = `${e.el.offsetTop}px`, e.el.style[this.justify] = `${pt(e.el, this.justify)}px`;
    }), t.forEach((e) => {
      e.el.setAttribute("inert", ""), e.present = !1;
    });
  }
  addNewAndUpdateExisting(t) {
    const e = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), n = this.justify === "left", r = n ? "prepend" : "append";
    if (ft(t, (o) => {
      let a;
      this.children.has(o.key) ? (a = this.children.get(o.key), i.set(o, a), this.unpop(a), a.present = !0) : (a = this.addChar(o, { startDigitsAtZero: !0, animateIn: !0 }), e.set(o, a)), this.el[r](a.el);
    }, { reverse: n }), this.flow.computedAnimated) {
      const o = this.el.getBoundingClientRect();
      e.forEach((a) => {
        a.willUpdate(o);
      });
    }
    e.forEach((o, a) => {
      o.update(a.value);
    }), i.forEach((o, a) => {
      o.update(a.value);
    });
  }
  willUpdate() {
    const t = this.el.getBoundingClientRect();
    this._prevOffset = t[this.justify], this.children.forEach((e) => e.willUpdate(t));
  }
  didUpdate() {
    const t = this.el.getBoundingClientRect();
    this.children.forEach((n) => n.didUpdate(t));
    const e = t[this.justify], i = this._prevOffset - e;
    i && this.children.size && this.el.animate({
      transform: [`translateX(${i}px)`, "none"]
    }, {
      ...this.flow.transformTiming,
      composite: "accumulate"
    });
  }
}
class F extends O {
  update(t) {
    const e = /* @__PURE__ */ new Map();
    this.children.forEach((i, n) => {
      t.find((r) => r.key === n) || e.set(n, i), this.unpop(i);
    }), this.addNewAndUpdateExisting(t), e.forEach((i) => {
      i instanceof H && i.update(0);
    }), this.pop(e);
  }
}
class L extends O {
  update(t) {
    const e = /* @__PURE__ */ new Map();
    this.children.forEach((i, n) => {
      t.find((r) => r.key === n) || e.set(n, i);
    }), this.pop(e), this.addNewAndUpdateExisting(t);
  }
}
class R {
  constructor(t, e, { onRemove: i, animateIn: n = !1 } = {}) {
    this.flow = t, this.el = e, this._present = !0, this._remove = () => {
      var r;
      this.el.remove(), (r = this._onRemove) == null || r.call(this);
    }, this.el.classList.add("animate-presence"), this.flow.computedAnimated && n && this.el.animate({
      [A]: [-0.9999, 0]
    }, {
      ...this.flow.opacityTiming,
      composite: "accumulate"
    }), this._onRemove = i;
  }
  get present() {
    return this._present;
  }
  set present(t) {
    if (this._present !== t) {
      if (this._present = t, t ? this.el.removeAttribute("inert") : this.el.setAttribute("inert", ""), !this.flow.computedAnimated) {
        t || this._remove();
        return;
      }
      this.el.style.setProperty("--_number-flow-d-opacity", t ? "0" : "-.999"), this.el.animate({
        [A]: t ? [-0.9999, 0] : [0.999, 0]
      }, {
        ...this.flow.opacityTiming,
        composite: "accumulate"
      }), t ? this.flow.removeEventListener("animationsfinish", this._remove) : this.flow.addEventListener("animationsfinish", this._remove, {
        once: !0
      });
    }
  }
}
class W extends R {
  constructor(t, e, i, n) {
    super(t.flow, i, n), this.section = t, this.value = e, this.el = i;
  }
}
let H = class extends W {
  constructor(t, e, i, n, r) {
    var o, a;
    const l = (((a = (o = t.flow.digits) == null ? void 0 : o[n]) == null ? void 0 : a.max) ?? 9) + 1, h = Array.from({ length: l }).map((p, g) => {
      const v = _("span", { className: "digit__num" }, [
        document.createTextNode(String(g))
      ]);
      return g !== i && v.setAttribute("inert", ""), v.style.setProperty("--n", String(g)), v;
    }), u = _("span", {
      part: `digit ${e}-digit`,
      className: "digit"
    }, h);
    u.style.setProperty("--current", String(i)), u.style.setProperty("--length", String(l)), super(t, i, u, r), this.pos = n, this._onAnimationsFinish = () => {
      this.el.classList.remove("is-spinning");
    }, this._numbers = h, this.length = l;
  }
  willUpdate(t) {
    const e = this.el.getBoundingClientRect();
    this._prevValue = this.value;
    const i = e[this.section.justify] - t[this.section.justify], n = e.width / 2;
    this._prevCenter = this.section.justify === "left" ? i + n : i - n;
  }
  update(t) {
    this.el.style.setProperty("--current", String(t)), this._numbers.forEach((e, i) => i === t ? e.removeAttribute("inert") : e.setAttribute("inert", "")), this.value = t;
  }
  didUpdate(t) {
    const e = this.el.getBoundingClientRect(), i = e[this.section.justify] - t[this.section.justify], n = e.width / 2, r = this.section.justify === "left" ? i + n : i - n, o = this._prevCenter - r;
    o && this.el.animate({
      transform: [`translateX(${o}px)`, "none"]
    }, {
      ...this.flow.transformTiming,
      composite: "accumulate"
    });
    const a = this.getDelta();
    a && (this.el.classList.add("is-spinning"), this.el.animate({
      [V]: [-a, 0]
    }, {
      ...this.flow.spinTiming ?? this.flow.transformTiming,
      composite: "accumulate"
    }), this.flow.addEventListener("animationsfinish", this._onAnimationsFinish, { once: !0 }));
  }
  getDelta() {
    var t;
    if (this.flow.plugins)
      for (const n of this.flow.plugins) {
        const r = (t = n.getDelta) == null ? void 0 : t.call(n, this.value, this._prevValue, this);
        if (r != null)
          return r;
      }
    const e = this.value - this._prevValue, i = this.flow.computedTrend || Math.sign(e);
    return i < 0 && this.value > this._prevValue ? this.value - this.length - this._prevValue : i > 0 && this.value < this._prevValue ? this.length - this._prevValue + this.value : e;
  }
};
class vt extends W {
  constructor(t, e, i, n) {
    const r = _("span", {
      className: "symbol__value",
      textContent: i
    });
    super(t, i, _("span", {
      part: `symbol ${e}`,
      className: "symbol"
    }, [r]), n), this.type = e, this._children = /* @__PURE__ */ new Map(), this._onChildRemove = (o) => () => {
      this._children.delete(o);
    }, this._children.set(i, new R(this.flow, r, {
      onRemove: this._onChildRemove(i)
    }));
  }
  willUpdate(t) {
    if (this.type === "decimal")
      return;
    const e = this.el.getBoundingClientRect();
    this._prevOffset = e[this.section.justify] - t[this.section.justify];
  }
  update(t) {
    if (this.value !== t) {
      const e = this._children.get(this.value);
      e && (e.present = !1);
      const i = this._children.get(t);
      if (i)
        i.present = !0;
      else {
        const n = _("span", {
          className: "symbol__value",
          textContent: t
        });
        this.el.appendChild(n), this._children.set(t, new R(this.flow, n, {
          animateIn: !0,
          onRemove: this._onChildRemove(t)
        }));
      }
    }
    this.value = t;
  }
  didUpdate(t) {
    if (this.type === "decimal")
      return;
    const e = this.el.getBoundingClientRect()[this.section.justify] - t[this.section.justify], i = this._prevOffset - e;
    i && this.el.animate({
      transform: [`translateX(${i}px)`, "none"]
    }, { ...this.flow.transformTiming, composite: "accumulate" });
  }
}
(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
})();
typeof CSS < "u" && CSS.supports && CSS.supports("line-height", "mod(1,1)");
typeof matchMedia < "u" && matchMedia("(prefers-reduced-motion: reduce)");
const _t = "--_number-flow-d-opacity", wt = "--_number-flow-d-width", bt = "--_number-flow-dx", xt = "--_number-flow-d";
(() => {
  try {
    return CSS.registerProperty({
      name: _t,
      syntax: "<number>",
      inherits: !1,
      initialValue: "0"
    }), CSS.registerProperty({
      name: bt,
      syntax: "<length>",
      inherits: !0,
      initialValue: "0px"
    }), CSS.registerProperty({
      name: wt,
      syntax: "<number>",
      inherits: !1,
      initialValue: "0"
    }), CSS.registerProperty({
      name: xt,
      syntax: "<number>",
      inherits: !0,
      initialValue: "0"
    }), !0;
  } catch {
    return !1;
  }
})();
const Ct = Symbol(), $t = ["batched", "trend", "plugins", "animated", "transformTiming", "spinTiming", "opacityTiming", "respectMotionPreference", "nonce", "data-will-change", "digits", "innerHTML", "data"], Tt = /* @__PURE__ */ D({
  inheritAttrs: !1,
  __name: "index",
  props: {
    transformTiming: { default: () => y.defaultProps.transformTiming },
    spinTiming: { default: () => y.defaultProps.spinTiming },
    opacityTiming: { default: () => y.defaultProps.opacityTiming },
    animated: { type: Boolean, default: () => y.defaultProps.animated },
    respectMotionPreference: { type: Boolean, default: () => y.defaultProps.respectMotionPreference },
    trend: { type: [Number, Function], default: () => y.defaultProps.trend },
    plugins: { default: () => y.defaultProps.plugins },
    digits: { default: () => y.defaultProps.digits },
    locales: {},
    format: {},
    value: {},
    prefix: {},
    suffix: {},
    nonce: {},
    willChange: { type: Boolean, default: !1 }
  },
  emits: ["animationsstart", "animationsfinish"],
  setup(s, { expose: t, emit: e }) {
    const i = E();
    t({ el: i });
    const n = e, r = C(() => new Intl.NumberFormat(s.locales, s.format)), o = C(() => gt(s.value, r.value, s.prefix, s.suffix)), a = void 0, l = Y(Ct, void 0);
    return l == null || l(i, o), (h, u) => (I(), Z("number-flow-vue", q({
      ref_key: "el",
      ref: i
    }, h.$attrs, {
      batched: !!S(l),
      trend: h.trend,
      plugins: h.plugins,
      animated: h.animated,
      transformTiming: h.transformTiming,
      spinTiming: h.spinTiming,
      opacityTiming: h.opacityTiming,
      respectMotionPreference: h.respectMotionPreference,
      nonce: h.nonce,
      "data-will-change": h.willChange ? "" : void 0,
      digits: h.digits,
      innerHTML: S(a),
      "data-allow-mismatch": "",
      onAnimationsstart: u[0] || (u[0] = (p) => n("animationsstart")),
      onAnimationsfinish: u[1] || (u[1] = (p) => n("animationsfinish")),
      data: o.value
    }), null, 16, $t));
  }
});
mt("number-flow-vue", y);
const Et = "cubic-bezier(0.22, 1, 0.36, 1)", St = (s) => s === "up" ? 1 : s === "down" ? -1 : s === "individual" ? 0 : (t, e) => Math.sign(e - t), At = (s, t, e) => {
  const i = (e == null ? void 0 : e.transform) ?? { duration: s, easing: t };
  return {
    transform: i,
    spin: (e == null ? void 0 : e.spin) ?? i,
    opacity: (e == null ? void 0 : e.opacity) ?? {
      duration: Math.min(s * 0.5, 350),
      easing: "ease-out"
    }
  };
}, Mt = ({
  animateOnMount: s,
  initialValue: t,
  mountDelay: e,
  startOnVisible: i,
  target: n,
  value: r,
  visibilityRootMargin: o,
  visibilityThreshold: a
}) => {
  const l = E(
    f(s) ? f(t) : f(r)
  ), h = E(!f(s));
  let u, p, g;
  const v = () => {
    u !== void 0 && window.cancelAnimationFrame(u), g !== void 0 && window.clearTimeout(g), u = void 0, g = void 0, p == null || p.disconnect(), p = void 0;
  }, $ = () => {
    u = window.requestAnimationFrame(() => {
      h.value = !0, l.value = f(r), u = void 0;
    });
  }, d = () => {
    p == null || p.disconnect(), p = void 0;
    const m = Math.max(0, f(e));
    if (m === 0) {
      $();
      return;
    }
    g = window.setTimeout(() => {
      g = void 0, $();
    }, m);
  }, c = () => {
    const m = n.value;
    return m instanceof HTMLElement ? m : (m == null ? void 0 : m.$el) instanceof HTMLElement ? m.$el : null;
  };
  return G(
    () => f(r),
    (m) => {
      !h.value && f(s) || (l.value = m);
    }
  ), J(() => {
    if (!f(s)) {
      h.value = !0, l.value = f(r);
      return;
    }
    const m = c();
    if (!f(i) || m === null || typeof IntersectionObserver > "u") {
      d();
      return;
    }
    p = new IntersectionObserver(
      (X) => {
        X.some((z) => z.isIntersecting) && d();
      },
      {
        rootMargin: f(o),
        threshold: Math.min(1, Math.max(0, f(a)))
      }
    ), p.observe(m);
  }), K(v), {
    displayValue: C(() => l.value)
  };
}, Pt = /* @__PURE__ */ D({
  __name: "NumberFlow",
  props: {
    Element: { default: "span" },
    animateOnMount: { type: Boolean, default: !1 },
    animated: { type: Boolean, default: !0 },
    color: { default: "inherit" },
    continuous: { type: Boolean, default: !1 },
    direction: { default: "auto" },
    duration: { default: 700 },
    easing: { default: Et },
    format: {},
    initialValue: { default: 0 },
    locales: {},
    mountDelay: { default: 0 },
    prefix: {},
    respectMotionPreference: { type: Boolean, default: !0 },
    startOnVisible: { type: Boolean, default: !1 },
    suffix: {},
    textAlign: { default: "inherit" },
    timing: {},
    typography: { default: "inherit" },
    value: {},
    visibilityRootMargin: { default: "0px" },
    visibilityThreshold: { default: 0.2 },
    willChange: { type: Boolean, default: !1 }
  },
  emits: ["animations-finish", "animations-start"],
  setup(s, { emit: t }) {
    const e = s, i = t, n = E(null), { displayValue: r } = Mt({
      animateOnMount: w(e, "animateOnMount"),
      initialValue: w(e, "initialValue"),
      mountDelay: w(e, "mountDelay"),
      startOnVisible: w(e, "startOnVisible"),
      target: n,
      value: w(e, "value"),
      visibilityRootMargin: w(e, "visibilityRootMargin"),
      visibilityThreshold: w(e, "visibilityThreshold")
    }), o = C(
      () => e.continuous ? [ct] : void 0
    ), a = C(() => St(e.direction)), l = C(
      () => At(e.duration, e.easing, e.timing)
    );
    return (h, u) => (I(), Q(it, {
      ref_key: "root",
      ref: n,
      class: "NumberFlow",
      Element: e.Element,
      color: e.color,
      "text-align": e.textAlign,
      typography: e.typography
    }, {
      default: tt(() => [
        et(S(Tt), {
          class: "NumberFlow__value",
          animated: e.animated,
          format: e.format,
          locales: e.locales,
          "opacity-timing": l.value.opacity,
          plugins: o.value,
          prefix: e.prefix,
          "respect-motion-preference": e.respectMotionPreference,
          "spin-timing": l.value.spin,
          suffix: e.suffix,
          "transform-timing": l.value.transform,
          trend: a.value,
          value: S(r),
          "will-change": e.willChange,
          onAnimationsfinish: u[0] || (u[0] = (p) => i("animations-finish")),
          onAnimationsstart: u[1] || (u[1] = (p) => i("animations-start"))
        }, null, 8, ["animated", "format", "locales", "opacity-timing", "plugins", "prefix", "respect-motion-preference", "spin-timing", "suffix", "transform-timing", "trend", "value", "will-change"])
      ]),
      _: 1
    }, 8, ["Element", "color", "text-align", "typography"]));
  }
}), Vt = /* @__PURE__ */ nt(Pt, [["__scopeId", "data-v-b16b9142"]]);
export {
  Vt as default
};
