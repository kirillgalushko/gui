import { pushScopeId as le, popScopeId as ue, defineComponent as b, nextTick as ce, openBlock as w, createBlock as D, createElementBlock as A, normalizeClass as Z, renderSlot as T, normalizeProps as fe, guardReactiveProps as me, withScopeId as ge, resolveComponent as B, normalizeStyle as z, withKeys as we, createElementVNode as m, Fragment as ye, createCommentVNode as L, mergeProps as ve, withCtx as R, createVNode as $e } from "vue";
import { o as _e, c as Se, s as Te, f as be, d as Pe, e as Ce, B as ze, D as I } from "./index-BZ0moHHL.js";
import '../assets/floating-vue-DF4AVo2i.css';const g = {
  // Disable popper components
  disabled: !1,
  // Default position offset along main axis (px)
  distance: 5,
  // Default position offset along cross axis (px)
  skidding: 0,
  // Default container where the tooltip will be appended
  container: "body",
  // Element used to compute position and size boundaries
  boundary: void 0,
  // Skip delay & CSS transitions when another popper is shown, so that the popper appear to instanly move to the new position.
  instantMove: !1,
  // Auto destroy tooltip DOM nodes (ms)
  disposeTimeout: 150,
  // Triggers on the popper itself
  popperTriggers: [],
  // Positioning strategy
  strategy: "absolute",
  // Prevent overflow
  preventOverflow: !0,
  // Flip to the opposite placement if needed
  flip: !0,
  // Shift on the cross axis to prevent the popper from overflowing
  shift: !0,
  // Overflow padding (px)
  overflowPadding: 0,
  // Arrow padding (px)
  arrowPadding: 0,
  // Compute arrow overflow (useful to hide it)
  arrowOverflow: !0,
  /**
   * By default, compute autohide on 'click'.
   */
  autoHideOnMousedown: !1,
  // Themes
  themes: {
    tooltip: {
      // Default tooltip placement relative to target element
      placement: "top",
      // Default events that trigger the tooltip
      triggers: ["hover", "focus", "touch"],
      // Close tooltip on click on tooltip target
      hideTriggers: (e) => [...e, "click"],
      // Delay (ms)
      delay: {
        show: 200,
        hide: 0
      },
      // Update popper on content resize
      handleResize: !1,
      // Enable HTML content in directive
      html: !1,
      // Displayed when tooltip content is loading
      loadingContent: "..."
    },
    dropdown: {
      // Default dropdown placement relative to target element
      placement: "bottom",
      // Default events that trigger the dropdown
      triggers: ["click"],
      // Delay (ms)
      delay: 0,
      // Update popper on content resize
      handleResize: !0,
      // Hide on clock outside
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
function H(e, t) {
  let i = g.themes[e] || {}, o;
  do
    o = i[t], typeof o > "u" ? i.$extend ? i = g.themes[i.$extend] || {} : (i = null, o = g[t]) : i = null;
  while (i);
  return o;
}
function Ne(e) {
  const t = [e];
  let i = g.themes[e] || {};
  do
    i.$extend && !i.$resetCss ? (t.push(i.$extend), i = g.themes[i.$extend] || {}) : i = null;
  while (i);
  return t.map((o) => `v-popper--theme-${o}`);
}
function j(e) {
  const t = [e];
  let i = g.themes[e] || {};
  do
    i.$extend ? (t.push(i.$extend), i = g.themes[i.$extend] || {}) : i = null;
  while (i);
  return t;
}
let $ = !1;
if (typeof window < "u") {
  $ = !1;
  try {
    const e = Object.defineProperty({}, "passive", {
      get() {
        $ = !0;
      }
    });
    window.addEventListener("test", null, e);
  } catch {
  }
}
let Q = !1;
typeof window < "u" && typeof navigator < "u" && (Q = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream);
const xe = ["auto", "top", "bottom", "left", "right"].reduce((e, t) => e.concat([
  t,
  `${t}-start`,
  `${t}-end`
]), []), W = {
  hover: "mouseenter",
  focus: "focus",
  click: "click",
  touch: "touchstart",
  pointer: "pointerdown"
}, V = {
  hover: "mouseleave",
  focus: "blur",
  click: "click",
  touch: "touchend",
  pointer: "pointerup"
};
function q(e, t) {
  const i = e.indexOf(t);
  i !== -1 && e.splice(i, 1);
}
function N() {
  return new Promise((e) => requestAnimationFrame(() => {
    requestAnimationFrame(e);
  }));
}
const d = [];
let f = null;
const G = {};
function U(e) {
  let t = G[e];
  return t || (t = G[e] = []), t;
}
let k = function() {
};
typeof window < "u" && (k = window.Element);
function n(e) {
  return function(t) {
    return H(t.theme, e);
  };
}
const x = "__floating-vue__popper", J = () => b({
  name: "VPopper",
  provide() {
    return {
      [x]: {
        parentPopper: this
      }
    };
  },
  inject: {
    [x]: { default: null }
  },
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
    // eslint-disable-next-line vue/require-prop-types
    ariaId: {
      default: null
    },
    disabled: {
      type: Boolean,
      default: n("disabled")
    },
    positioningDisabled: {
      type: Boolean,
      default: n("positioningDisabled")
    },
    placement: {
      type: String,
      default: n("placement"),
      validator: (e) => xe.includes(e)
    },
    delay: {
      type: [String, Number, Object],
      default: n("delay")
    },
    distance: {
      type: [Number, String],
      default: n("distance")
    },
    skidding: {
      type: [Number, String],
      default: n("skidding")
    },
    triggers: {
      type: Array,
      default: n("triggers")
    },
    showTriggers: {
      type: [Array, Function],
      default: n("showTriggers")
    },
    hideTriggers: {
      type: [Array, Function],
      default: n("hideTriggers")
    },
    popperTriggers: {
      type: Array,
      default: n("popperTriggers")
    },
    popperShowTriggers: {
      type: [Array, Function],
      default: n("popperShowTriggers")
    },
    popperHideTriggers: {
      type: [Array, Function],
      default: n("popperHideTriggers")
    },
    container: {
      type: [String, Object, k, Boolean],
      default: n("container")
    },
    boundary: {
      type: [String, k],
      default: n("boundary")
    },
    strategy: {
      type: String,
      validator: (e) => ["absolute", "fixed"].includes(e),
      default: n("strategy")
    },
    autoHide: {
      type: [Boolean, Function],
      default: n("autoHide")
    },
    handleResize: {
      type: Boolean,
      default: n("handleResize")
    },
    instantMove: {
      type: Boolean,
      default: n("instantMove")
    },
    eagerMount: {
      type: Boolean,
      default: n("eagerMount")
    },
    popperClass: {
      type: [String, Array, Object],
      default: n("popperClass")
    },
    computeTransformOrigin: {
      type: Boolean,
      default: n("computeTransformOrigin")
    },
    /**
     * @deprecated
     */
    autoMinSize: {
      type: Boolean,
      default: n("autoMinSize")
    },
    autoSize: {
      type: [Boolean, String],
      default: n("autoSize")
    },
    /**
     * @deprecated
     */
    autoMaxSize: {
      type: Boolean,
      default: n("autoMaxSize")
    },
    autoBoundaryMaxSize: {
      type: Boolean,
      default: n("autoBoundaryMaxSize")
    },
    preventOverflow: {
      type: Boolean,
      default: n("preventOverflow")
    },
    overflowPadding: {
      type: [Number, String],
      default: n("overflowPadding")
    },
    arrowPadding: {
      type: [Number, String],
      default: n("arrowPadding")
    },
    arrowOverflow: {
      type: Boolean,
      default: n("arrowOverflow")
    },
    flip: {
      type: Boolean,
      default: n("flip")
    },
    shift: {
      type: Boolean,
      default: n("shift")
    },
    shiftCrossAxis: {
      type: Boolean,
      default: n("shiftCrossAxis")
    },
    noAutoFocus: {
      type: Boolean,
      default: n("noAutoFocus")
    },
    disposeTimeout: {
      type: Number,
      default: n("disposeTimeout")
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
      return this.ariaId != null ? this.ariaId : this.randomId;
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
      var e;
      return (e = this[x]) == null ? void 0 : e.parentPopper;
    },
    hasPopperShowTriggerHover() {
      var e, t;
      return ((e = this.popperTriggers) == null ? void 0 : e.includes("hover")) || ((t = this.popperShowTriggers) == null ? void 0 : t.includes("hover"));
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
    this.autoMinSize && console.warn('[floating-vue] `autoMinSize` option is deprecated. Use `autoSize="min"` instead.'), this.autoMaxSize && console.warn("[floating-vue] `autoMaxSize` option is deprecated. Use `autoBoundaryMaxSize` instead.");
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
    show({ event: e = null, skipDelay: t = !1, force: i = !1 } = {}) {
      var o, s;
      (o = this.parentPopper) != null && o.lockedChild && this.parentPopper.lockedChild !== this || (this.pendingHide = !1, (i || !this.disabled) && (((s = this.parentPopper) == null ? void 0 : s.lockedChild) === this && (this.parentPopper.lockedChild = null), this.$_scheduleShow(e, t), this.$emit("show"), this.$_showFrameLocked = !0, requestAnimationFrame(() => {
        this.$_showFrameLocked = !1;
      })), this.$emit("update:shown", !0));
    },
    hide({ event: e = null, skipDelay: t = !1 } = {}) {
      var i;
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
        ((i = this.parentPopper) == null ? void 0 : i.lockedChild) === this && (this.parentPopper.lockedChild = null), this.pendingHide = !1, this.$_scheduleHide(e, t), this.$emit("hide"), this.$emit("update:shown", !1);
      }
    },
    init() {
      var e;
      this.isDisposed && (this.isDisposed = !1, this.isMounted = !1, this.$_events = [], this.$_preventShow = !1, this.$_referenceNode = ((e = this.referenceNode) == null ? void 0 : e.call(this)) ?? this.$el, this.$_targetNodes = this.targetNodes().filter((t) => t.nodeType === t.ELEMENT_NODE), this.$_popperNode = this.popperNode(), this.$_innerNode = this.$_popperNode.querySelector(".v-popper__inner"), this.$_arrowNode = this.$_popperNode.querySelector(".v-popper__arrow-container"), this.$_swapTargetAttrs("title", "data-original-title"), this.$_detachPopperNode(), this.triggers.length && this.$_addEventListeners(), this.shown && this.show());
    },
    dispose() {
      this.isDisposed || (this.isDisposed = !0, this.$_removeEventListeners(), this.hide({ skipDelay: !0 }), this.$_detachPopperNode(), this.isMounted = !1, this.isShown = !1, this.$_updateParentShownChildren(!1), this.$_swapTargetAttrs("data-original-title", "title"));
    },
    async onResize() {
      this.isShown && (await this.$_computePosition(), this.$emit("resize"));
    },
    async $_computePosition() {
      if (this.isDisposed || this.positioningDisabled)
        return;
      const e = {
        strategy: this.strategy,
        middleware: []
      };
      (this.distance || this.skidding) && e.middleware.push(_e({
        mainAxis: this.distance,
        crossAxis: this.skidding
      }));
      const t = this.placement.startsWith("auto");
      if (t ? e.middleware.push(Se({
        alignment: this.placement.split("-")[1] ?? ""
      })) : e.placement = this.placement, this.preventOverflow && (this.shift && e.middleware.push(Te({
        padding: this.overflowPadding,
        boundary: this.boundary,
        crossAxis: this.shiftCrossAxis
      })), !t && this.flip && e.middleware.push(be({
        padding: this.overflowPadding,
        boundary: this.boundary
      }))), e.middleware.push(Pe({
        element: this.$_arrowNode,
        padding: this.arrowPadding
      })), this.arrowOverflow && e.middleware.push({
        name: "arrowOverflow",
        fn: ({ placement: o, rects: s, middlewareData: r }) => {
          let a;
          const { centerOffset: p } = r.arrow;
          return o.startsWith("top") || o.startsWith("bottom") ? a = Math.abs(p) > s.reference.width / 2 : a = Math.abs(p) > s.reference.height / 2, {
            data: {
              overflow: a
            }
          };
        }
      }), this.autoMinSize || this.autoSize) {
        const o = this.autoSize ? this.autoSize : this.autoMinSize ? "min" : null;
        e.middleware.push({
          name: "autoSize",
          fn: ({ rects: s, placement: r, middlewareData: a }) => {
            var p;
            if ((p = a.autoSize) != null && p.skip)
              return {};
            let h, l;
            return r.startsWith("top") || r.startsWith("bottom") ? h = s.reference.width : l = s.reference.height, this.$_innerNode.style[o === "min" ? "minWidth" : o === "max" ? "maxWidth" : "width"] = h != null ? `${h}px` : null, this.$_innerNode.style[o === "min" ? "minHeight" : o === "max" ? "maxHeight" : "height"] = l != null ? `${l}px` : null, {
              data: {
                skip: !0
              },
              reset: {
                rects: !0
              }
            };
          }
        });
      }
      (this.autoMaxSize || this.autoBoundaryMaxSize) && (this.$_innerNode.style.maxWidth = null, this.$_innerNode.style.maxHeight = null, e.middleware.push(Ce({
        boundary: this.boundary,
        padding: this.overflowPadding,
        apply: ({ availableWidth: o, availableHeight: s }) => {
          this.$_innerNode.style.maxWidth = o != null ? `${o}px` : null, this.$_innerNode.style.maxHeight = s != null ? `${s}px` : null;
        }
      })));
      const i = await ze(this.$_referenceNode, this.$_popperNode, e);
      Object.assign(this.result, {
        x: i.x,
        y: i.y,
        placement: i.placement,
        strategy: i.strategy,
        arrow: {
          ...i.middlewareData.arrow,
          ...i.middlewareData.arrowOverflow
        }
      });
    },
    $_scheduleShow(e, t = !1) {
      if (this.$_updateParentShownChildren(!0), this.$_hideInProgress = !1, clearTimeout(this.$_scheduleTimer), f && this.instantMove && f.instantMove && f !== this.parentPopper) {
        f.$_applyHide(!0), this.$_applyShow(!0);
        return;
      }
      t ? this.$_applyShow() : this.$_scheduleTimer = setTimeout(this.$_applyShow.bind(this), this.$_computeDelay("show"));
    },
    $_scheduleHide(e, t = !1) {
      if (this.shownChildren.size > 0) {
        this.pendingHide = !0;
        return;
      }
      this.$_updateParentShownChildren(!1), this.$_hideInProgress = !0, clearTimeout(this.$_scheduleTimer), this.isShown && (f = this), t ? this.$_applyHide() : this.$_scheduleTimer = setTimeout(this.$_applyHide.bind(this), this.$_computeDelay("hide"));
    },
    $_computeDelay(e) {
      const t = this.delay;
      return parseInt(t && t[e] || t || 0);
    },
    async $_applyShow(e = !1) {
      clearTimeout(this.$_disposeTimer), clearTimeout(this.$_scheduleTimer), this.skipTransition = e, !this.isShown && (this.$_ensureTeleport(), await N(), await this.$_computePosition(), await this.$_applyShowEffect(), this.positioningDisabled || this.$_registerEventListeners([
        ...I(this.$_referenceNode),
        ...I(this.$_popperNode)
      ], "scroll", () => {
        this.$_computePosition();
      }));
    },
    async $_applyShowEffect() {
      if (this.$_hideInProgress)
        return;
      if (this.computeTransformOrigin) {
        const t = this.$_referenceNode.getBoundingClientRect(), i = this.$_popperNode.querySelector(".v-popper__wrapper"), o = i.parentNode.getBoundingClientRect(), s = t.x + t.width / 2 - (o.left + i.offsetLeft), r = t.y + t.height / 2 - (o.top + i.offsetTop);
        this.result.transformOrigin = `${s}px ${r}px`;
      }
      this.isShown = !0, this.$_applyAttrsToTarget({
        "aria-describedby": this.popperId,
        "data-popper-shown": ""
      });
      const e = this.showGroup;
      if (e) {
        let t;
        for (let i = 0; i < d.length; i++)
          t = d[i], t.showGroup !== e && (t.hide(), t.$emit("close-group"));
      }
      d.push(this), document.body.classList.add("v-popper--some-open");
      for (const t of j(this.theme))
        U(t).push(this), document.body.classList.add(`v-popper--some-open--${t}`);
      this.$emit("apply-show"), this.classes.showFrom = !0, this.classes.showTo = !1, this.classes.hideFrom = !1, this.classes.hideTo = !1, await N(), this.classes.showFrom = !1, this.classes.showTo = !0, this.noAutoFocus || this.$_popperNode.focus();
    },
    async $_applyHide(e = !1) {
      if (this.shownChildren.size > 0) {
        this.pendingHide = !0, this.$_hideInProgress = !1;
        return;
      }
      if (clearTimeout(this.$_scheduleTimer), !this.isShown)
        return;
      this.skipTransition = e, q(d, this), d.length === 0 && document.body.classList.remove("v-popper--some-open");
      for (const i of j(this.theme)) {
        const o = U(i);
        q(o, this), o.length === 0 && document.body.classList.remove(`v-popper--some-open--${i}`);
      }
      f === this && (f = null), this.isShown = !1, this.$_applyAttrsToTarget({
        "aria-describedby": void 0,
        "data-popper-shown": void 0
      }), clearTimeout(this.$_disposeTimer);
      const t = this.disposeTimeout;
      t !== null && (this.$_disposeTimer = setTimeout(() => {
        this.$_popperNode && (this.$_detachPopperNode(), this.isMounted = !1);
      }, t)), this.$_removeEventListeners("scroll"), this.$emit("apply-hide"), this.classes.showFrom = !1, this.classes.showTo = !1, this.classes.hideFrom = !0, this.classes.hideTo = !1, await N(), this.classes.hideFrom = !1, this.classes.hideTo = !0;
    },
    $_autoShowHide() {
      this.shown ? this.show() : this.hide();
    },
    $_ensureTeleport() {
      if (this.isDisposed)
        return;
      let e = this.container;
      if (typeof e == "string" ? e = window.document.querySelector(e) : e === !1 && (e = this.$_targetNodes[0].parentNode), !e)
        throw new Error("No container for popover: " + this.container);
      e.appendChild(this.$_popperNode), this.isMounted = !0;
    },
    $_addEventListeners() {
      const e = (i) => {
        this.isShown && !this.$_hideInProgress || (i.usedByTooltip = !0, !this.$_preventShow && this.show({ event: i }));
      };
      this.$_registerTriggerListeners(this.$_targetNodes, W, this.triggers, this.showTriggers, e), this.$_registerTriggerListeners([this.$_popperNode], W, this.popperTriggers, this.popperShowTriggers, e);
      const t = (i) => {
        i.usedByTooltip || this.hide({ event: i });
      };
      this.$_registerTriggerListeners(this.$_targetNodes, V, this.triggers, this.hideTriggers, t), this.$_registerTriggerListeners([this.$_popperNode], V, this.popperTriggers, this.popperHideTriggers, t);
    },
    $_registerEventListeners(e, t, i) {
      this.$_events.push({ targetNodes: e, eventType: t, handler: i }), e.forEach((o) => o.addEventListener(t, i, $ ? {
        passive: !0
      } : void 0));
    },
    $_registerTriggerListeners(e, t, i, o, s) {
      let r = i;
      o != null && (r = typeof o == "function" ? o(r) : o), r.forEach((a) => {
        const p = t[a];
        p && this.$_registerEventListeners(e, p, s);
      });
    },
    $_removeEventListeners(e) {
      const t = [];
      this.$_events.forEach((i) => {
        const { targetNodes: o, eventType: s, handler: r } = i;
        !e || e === s ? o.forEach((a) => a.removeEventListener(s, r)) : t.push(i);
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
      for (const i of this.$_targetNodes) {
        const o = i.getAttribute(e);
        o && (i.removeAttribute(e), i.setAttribute(t, o));
      }
    },
    $_applyAttrsToTarget(e) {
      for (const t of this.$_targetNodes)
        for (const i in e) {
          const o = e[i];
          o == null ? t.removeAttribute(i) : t.setAttribute(i, o);
        }
    },
    $_updateParentShownChildren(e) {
      let t = this.parentPopper;
      for (; t; )
        e ? t.shownChildren.add(this.randomId) : (t.shownChildren.delete(this.randomId), t.pendingHide && t.hide()), t = t.parentPopper;
    },
    $_isAimingPopper() {
      const e = this.$_referenceNode.getBoundingClientRect();
      if (y >= e.left && y <= e.right && v >= e.top && v <= e.bottom) {
        const t = this.$_popperNode.getBoundingClientRect(), i = y - u, o = v - c, s = t.left + t.width / 2 - u + (t.top + t.height / 2) - c + t.width + t.height, r = u + i * s, a = c + o * s;
        return _(u, c, r, a, t.left, t.top, t.left, t.bottom) || // Left edge
        _(u, c, r, a, t.left, t.top, t.right, t.top) || // Top edge
        _(u, c, r, a, t.right, t.top, t.right, t.bottom) || // Right edge
        _(u, c, r, a, t.left, t.bottom, t.right, t.bottom);
      }
      return !1;
    }
  },
  render() {
    return this.$slots.default(this.slotData);
  }
});
if (typeof document < "u" && typeof window < "u") {
  if (Q) {
    const e = $ ? {
      passive: !0,
      capture: !0
    } : !0;
    document.addEventListener("touchstart", (t) => K(t), e), document.addEventListener("touchend", (t) => X(t, !0), e);
  } else
    window.addEventListener("mousedown", (e) => K(e), !0), window.addEventListener("click", (e) => X(e, !1), !0);
  window.addEventListener("resize", He);
}
function K(e, t) {
  for (let i = 0; i < d.length; i++) {
    const o = d[i];
    try {
      o.mouseDownContains = o.popperNode().contains(e.target);
    } catch {
    }
  }
}
function X(e, t) {
  Ae(e, t);
}
function Ae(e, t) {
  const i = {};
  for (let o = d.length - 1; o >= 0; o--) {
    const s = d[o];
    try {
      const r = s.containsGlobalTarget = s.mouseDownContains || s.popperNode().contains(e.target);
      s.pendingHide = !1, requestAnimationFrame(() => {
        if (s.pendingHide = !1, !i[s.randomId] && Y(s, r, e)) {
          if (s.$_handleGlobalClose(e, t), !e.closeAllPopover && e.closePopover && r) {
            let p = s.parentPopper;
            for (; p; )
              i[p.randomId] = !0, p = p.parentPopper;
            return;
          }
          let a = s.parentPopper;
          for (; a && Y(a, a.containsGlobalTarget, e); )
            a.$_handleGlobalClose(e, t), a = a.parentPopper;
        }
      });
    } catch {
    }
  }
}
function Y(e, t, i) {
  return i.closeAllPopover || i.closePopover && t || Be(e, i) && !t;
}
function Be(e, t) {
  if (typeof e.autoHide == "function") {
    const i = e.autoHide(t);
    return e.lastAutoHide = i, i;
  }
  return e.autoHide;
}
function He() {
  for (let e = 0; e < d.length; e++)
    d[e].$_computePosition();
}
let u = 0, c = 0, y = 0, v = 0;
typeof window < "u" && window.addEventListener("mousemove", (e) => {
  u = y, c = v, y = e.clientX, v = e.clientY;
}, $ ? {
  passive: !0
} : void 0);
function _(e, t, i, o, s, r, a, p) {
  const h = ((a - s) * (t - r) - (p - r) * (e - s)) / ((p - r) * (i - e) - (a - s) * (o - t)), l = ((i - e) * (t - r) - (o - t) * (e - s)) / ((p - r) * (i - e) - (a - s) * (o - t));
  return h >= 0 && h <= 1 && l >= 0 && l <= 1;
}
const ke = {
  extends: J()
}, E = (e, t) => {
  const i = e.__vccOpts || e;
  for (const [o, s] of t)
    i[o] = s;
  return i;
};
function Oe(e, t, i, o, s, r) {
  return w(), A("div", {
    ref: "reference",
    class: Z(["v-popper", {
      "v-popper--shown": e.slotData.isShown
    }])
  }, [
    T(e.$slots, "default", fe(me(e.slotData)))
  ], 2);
}
const Me = /* @__PURE__ */ E(ke, [["render", Oe]]);
function De() {
  var e = window.navigator.userAgent, t = e.indexOf("MSIE ");
  if (t > 0)
    return parseInt(e.substring(t + 5, e.indexOf(".", t)), 10);
  var i = e.indexOf("Trident/");
  if (i > 0) {
    var o = e.indexOf("rv:");
    return parseInt(e.substring(o + 3, e.indexOf(".", o)), 10);
  }
  var s = e.indexOf("Edge/");
  return s > 0 ? parseInt(e.substring(s + 5, e.indexOf(".", s)), 10) : -1;
}
let S;
function O() {
  O.init || (O.init = !0, S = De() !== -1);
}
var P = {
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
  emits: [
    "notify"
  ],
  mounted() {
    O(), ce(() => {
      this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitOnMount && this.emitSize();
    });
    const e = document.createElement("object");
    this._resizeObject = e, e.setAttribute("aria-hidden", "true"), e.setAttribute("tabindex", -1), e.onload = this.addResizeHandlers, e.type = "text/html", S && this.$el.appendChild(e), e.data = "about:blank", S || this.$el.appendChild(e);
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
      this._resizeObject && this._resizeObject.onload && (!S && this._resizeObject.contentDocument && this._resizeObject.contentDocument.defaultView.removeEventListener("resize", this.compareAndNotify), this.$el.removeChild(this._resizeObject), this._resizeObject.onload = null, this._resizeObject = null);
    }
  }
};
const Ee = /* @__PURE__ */ ge("data-v-b329ee4c");
le("data-v-b329ee4c");
const Fe = {
  class: "resize-observer",
  tabindex: "-1"
};
ue();
const Le = /* @__PURE__ */ Ee((e, t, i, o, s, r) => (w(), D("div", Fe)));
P.render = Le;
P.__scopeId = "data-v-b329ee4c";
P.__file = "src/components/ResizeObserver.vue";
const ee = (e = "theme") => ({
  computed: {
    themeClass() {
      return Ne(this[e]);
    }
  }
}), Re = b({
  name: "VPopperContent",
  components: {
    ResizeObserver: P
  },
  mixins: [
    ee()
  ],
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
  emits: [
    "hide",
    "resize"
  ],
  methods: {
    toPx(e) {
      return e != null && !isNaN(e) ? `${e}px` : null;
    }
  }
}), Ie = ["id", "aria-hidden", "tabindex", "data-popper-placement"], je = {
  ref: "inner",
  class: "v-popper__inner"
}, We = /* @__PURE__ */ m("div", { class: "v-popper__arrow-outer" }, null, -1), Ve = /* @__PURE__ */ m("div", { class: "v-popper__arrow-inner" }, null, -1), qe = [
  We,
  Ve
];
function Ge(e, t, i, o, s, r) {
  const a = B("ResizeObserver");
  return w(), A("div", {
    id: e.popperId,
    ref: "popover",
    class: Z(["v-popper__popper", [
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
    style: z(e.result ? {
      position: e.result.strategy,
      transform: `translate3d(${Math.round(e.result.x)}px,${Math.round(e.result.y)}px,0)`
    } : void 0),
    "aria-hidden": e.shown ? "false" : "true",
    tabindex: e.autoHide ? 0 : void 0,
    "data-popper-placement": e.result ? e.result.placement : void 0,
    onKeyup: t[2] || (t[2] = we((p) => e.autoHide && e.$emit("hide"), ["esc"]))
  }, [
    m("div", {
      class: "v-popper__backdrop",
      onClick: t[0] || (t[0] = (p) => e.autoHide && e.$emit("hide"))
    }),
    m("div", {
      class: "v-popper__wrapper",
      style: z(e.result ? {
        transformOrigin: e.result.transformOrigin
      } : void 0)
    }, [
      m("div", je, [
        e.mounted ? (w(), A(ye, { key: 0 }, [
          m("div", null, [
            T(e.$slots, "default")
          ]),
          e.handleResize ? (w(), D(a, {
            key: 0,
            onNotify: t[1] || (t[1] = (p) => e.$emit("resize", p))
          })) : L("", !0)
        ], 64)) : L("", !0)
      ], 512),
      m("div", {
        ref: "arrow",
        class: "v-popper__arrow-container",
        style: z(e.result ? {
          left: e.toPx(e.result.arrow.x),
          top: e.toPx(e.result.arrow.y)
        } : void 0)
      }, qe, 4)
    ], 4)
  ], 46, Ie);
}
const te = /* @__PURE__ */ E(Re, [["render", Ge]]), ie = {
  methods: {
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
  }
};
let M = function() {
};
typeof window < "u" && (M = window.Element);
const Ue = b({
  name: "VPopperWrapper",
  components: {
    Popper: Me,
    PopperContent: te
  },
  mixins: [
    ie,
    ee("finalTheme")
  ],
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
    // eslint-disable-next-line vue/require-prop-types
    ariaId: {
      default: null
    },
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
      type: [String, Number, Object],
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
      type: [String, Object, M, Boolean],
      default: void 0
    },
    boundary: {
      type: [String, M],
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
      type: [String, Array, Object],
      default: void 0
    },
    computeTransformOrigin: {
      type: Boolean,
      default: void 0
    },
    /**
     * @deprecated
     */
    autoMinSize: {
      type: Boolean,
      default: void 0
    },
    autoSize: {
      type: [Boolean, String],
      default: void 0
    },
    /**
     * @deprecated
     */
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
  computed: {
    finalTheme() {
      return this.theme ?? this.$options.vPopperTheme;
    }
  },
  methods: {
    getTargetNodes() {
      return Array.from(this.$el.children).filter((e) => e !== this.$refs.popperContent.$el);
    }
  }
});
function Ke(e, t, i, o, s, r) {
  const a = B("PopperContent"), p = B("Popper");
  return w(), D(p, ve({ ref: "popper" }, e.$props, {
    theme: e.finalTheme,
    "target-nodes": e.getTargetNodes,
    "popper-node": () => e.$refs.popperContent.$el,
    class: [
      e.themeClass
    ],
    onShow: t[0] || (t[0] = () => e.$emit("show")),
    onHide: t[1] || (t[1] = () => e.$emit("hide")),
    "onUpdate:shown": t[2] || (t[2] = (h) => e.$emit("update:shown", h)),
    onApplyShow: t[3] || (t[3] = () => e.$emit("apply-show")),
    onApplyHide: t[4] || (t[4] = () => e.$emit("apply-hide")),
    onCloseGroup: t[5] || (t[5] = () => e.$emit("close-group")),
    onCloseDirective: t[6] || (t[6] = () => e.$emit("close-directive")),
    onAutoHide: t[7] || (t[7] = () => e.$emit("auto-hide")),
    onResize: t[8] || (t[8] = () => e.$emit("resize"))
  }), {
    default: R(({
      popperId: h,
      isShown: l,
      shouldMountContent: oe,
      skipTransition: se,
      autoHide: ne,
      show: re,
      hide: C,
      handleResize: ae,
      onResize: pe,
      classes: de,
      result: he
    }) => [
      T(e.$slots, "default", {
        shown: l,
        show: re,
        hide: C
      }),
      $e(a, {
        ref: "popperContent",
        "popper-id": h,
        theme: e.finalTheme,
        shown: l,
        mounted: oe,
        "skip-transition": se,
        "auto-hide": ne,
        "handle-resize": ae,
        classes: de,
        result: he,
        onHide: C,
        onResize: pe
      }, {
        default: R(() => [
          T(e.$slots, "popper", {
            shown: l,
            hide: C
          })
        ]),
        _: 2
      }, 1032, ["popper-id", "theme", "shown", "mounted", "skip-transition", "auto-hide", "handle-resize", "classes", "result", "onHide", "onResize"])
    ]),
    _: 3
  }, 16, ["theme", "target-nodes", "popper-node", "class"]);
}
const F = /* @__PURE__ */ E(Ue, [["render", Ke]]), Xe = {
  ...F,
  name: "VDropdown",
  vPopperTheme: "dropdown"
};
({
  ...F
});
const Ye = {
  ...F,
  name: "VTooltip",
  vPopperTheme: "tooltip"
};
b({
  name: "VTooltipDirective",
  components: {
    Popper: J(),
    PopperContent: te
  },
  mixins: [
    ie
  ],
  inheritAttrs: !1,
  props: {
    theme: {
      type: String,
      default: "tooltip"
    },
    html: {
      type: Boolean,
      default: (e) => H(e.theme, "html")
    },
    content: {
      type: [String, Number, Function],
      default: null
    },
    loadingContent: {
      type: String,
      default: (e) => H(e.theme, "loadingContent")
    },
    targetNodes: {
      type: Function,
      required: !0
    }
  },
  data() {
    return {
      asyncContent: null
    };
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
        const t = ++this.$_fetchId, i = this.content(this);
        i.then ? i.then((o) => this.onResult(t, o)) : this.onResult(t, i);
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
const Je = Xe, et = Ye;
export {
  et as V,
  Je as k
};
