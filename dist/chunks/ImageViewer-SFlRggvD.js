import { openBlock as m, createElementBlock as w, createElementVNode as x, computed as B, toValue as g, watch as j, ref as C, defineComponent as W, toRef as I, nextTick as J, onBeforeUnmount as Q, createBlock as $, Teleport as Z, createVNode as h, Transition as A, withCtx as k, unref as t, createTextVNode as T, toDisplayString as V, createCommentVNode as f, renderSlot as D, normalizeClass as U, withModifiers as R, withDirectives as ee, normalizeStyle as te, vShow as oe, Fragment as ae, renderList as le } from "vue";
import { d as re } from "./IconChevronLeftOutline-Dni7wod7.js";
import { d as ne } from "./IconChevronRightOutline-B9UH_Yk2.js";
import { i as N } from "./IconAccessibleFilled-DFPdopZN.js";
import { d as ie } from "./IconRefreshOutline-CO32kkS9.js";
import { d as se } from "./IconXOutline-COEdos3u.js";
import M from "./Button-DBIwBw8Q.js";
import ue from "./Loader-CKtxu-pF.js";
import L from "./Text-Cd35JtZQ.js";
import { _ as de } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import '../assets/ImageViewer-BkpaKHLw.css';const ce = {}, me = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" },
  viewBox: "0 0 24 24"
};
function ve(n, r) {
  return m(), w("svg", me, r[0] || (r[0] = [
    x("path", { d: "M13 15c-2 0-5 1-5 5" }, null, -1),
    x("path", { d: "M4 13a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm0-6V5a1 1 0 0 1 1-1h2m4 0h2m4 0h2a1 1 0 0 1 1 1v2m0 4v2m0 4v2a1 1 0 0 1-1 1h-2" }, null, -1)
  ]));
}
const pe = /* @__PURE__ */ N(ce, [["render", ve]]), he = {}, fe = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" },
  viewBox: "0 0 24 24"
};
function we(n, r) {
  return m(), w("svg", fe, r[0] || (r[0] = [
    x("path", { d: "M5 12h14" }, null, -1)
  ]));
}
const ge = /* @__PURE__ */ N(he, [["render", we]]), ye = {}, ke = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" },
  viewBox: "0 0 24 24"
};
function xe(n, r) {
  return m(), w("svg", ke, r[0] || (r[0] = [
    x("path", { d: "M12 5v14m-7-7h14" }, null, -1)
  ]));
}
const be = /* @__PURE__ */ N(ye, [["render", xe]]), ze = {}, Se = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" },
  viewBox: "0 0 24 24"
};
function $e(n, r) {
  return m(), w("svg", Se, r[0] || (r[0] = [
    x("path", { d: "M4.05 11a8 8 0 1 1 .5 4m-.5 5v-5h5" }, null, -1)
  ]));
}
const Be = /* @__PURE__ */ N(ze, [["render", $e]]), Ce = (n) => {
  const r = /* @__PURE__ */ new Map();
  let e = null, d = null, u = 0, c = 1;
  const p = ([a, i]) => a && i ? Math.hypot(a.x - i.x, a.y - i.y) : 0;
  return { pointerDown: (a) => {
    const i = { x: a.clientX, y: a.clientY };
    r.set(a.pointerId, i), e ?? (e = i), d = i, r.size === 2 && (u = p([...r.values()]), c = n.scale.value);
  }, pointerMove: (a) => {
    if (!r.has(a.pointerId)) return;
    const i = { x: a.clientX, y: a.clientY };
    if (r.set(a.pointerId, i), r.size === 2) {
      const z = p([...r.values()]);
      u > 0 && n.setScale(
        Math.min(
          n.maxScale(),
          Math.max(
            n.minScale(),
            c * (z / u)
          )
        )
      );
    } else d && n.scale.value > n.minScale() && n.panBy(i.x - d.x, i.y - d.y);
    d = i;
  }, pointerUp: (a) => {
    const i = r.get(a.pointerId);
    r.delete(a.pointerId), i && e && n.scale.value === n.minScale() && Math.abs(i.x - e.x) >= n.swipeThreshold() && (i.x < e.x ? n.onNext() : n.onPrevious()), r.size === 0 && (e = null, d = null, u = 0);
  } };
}, X = (n, r) => r === 0 ? 0 : Math.min(Math.max(0, n), r - 1), _e = (n, r, e, d) => {
  const u = B(() => g(n).length), c = B(
    () => X(g(r), u.value)
  ), p = B(() => g(n)[c.value]), b = B(
    () => u.value > 1 && (g(e) || c.value > 0)
  ), y = B(
    () => u.value > 1 && (g(e) || c.value < u.value - 1)
  ), o = (z) => {
    if (u.value !== 0) {
      if (g(e)) {
        d((z + u.value) % u.value);
        return;
      }
      d(X(z, u.value));
    }
  }, a = () => {
    b.value && o(c.value - 1);
  }, i = () => {
    y.value && o(c.value + 1);
  };
  return j(u, () => {
    g(r) !== c.value && d(c.value);
  }), { canNext: y, canPrevious: b, count: u, current: p, goTo: o, index: c, next: i, previous: a };
}, Ie = (n, r) => {
  const e = C(1), d = C(0), u = C(0), c = C(0), p = B(
    () => e.value !== g(n) || d.value !== 0
  ), b = B(() => ({
    transform: `translate3d(${u.value}px, ${c.value}px, 0) scale(${e.value}) rotate(${d.value}deg)`
  })), y = (_) => {
    e.value = Math.min(
      Math.max(_, g(n)),
      g(r)
    ), e.value === g(n) && (u.value = 0, c.value = 0);
  };
  return {
    isTransformed: p,
    panBy: (_, E) => {
      e.value > g(n) && (u.value += _, c.value += E);
    },
    reset: () => {
      e.value = g(n), d.value = 0, u.value = 0, c.value = 0;
    },
    rotate: () => {
      d.value = (d.value + 90) % 360;
    },
    rotation: d,
    scale: e,
    setScale: y,
    style: b,
    x: u,
    y: c,
    zoomIn: () => y(e.value + 0.5),
    zoomOut: () => y(e.value - 0.5)
  };
}, Te = { class: "image-viewer-header" }, Me = { class: "image-viewer-heading" }, Oe = { class: "image-viewer-toolbar" }, Ve = ["disabled"], De = {
  key: 1,
  class: "image-viewer-error"
}, Le = ["src", "alt"], Ne = ["disabled"], Ee = {
  key: 0,
  class: "image-viewer-footer"
}, Pe = {
  key: 0,
  class: "image-viewer-thumbnails"
}, Ue = ["aria-label", "aria-current", "onClick"], je = ["src", "alt"], qe = /* @__PURE__ */ W({
  __name: "ImageViewer",
  props: {
    images: {},
    isOpened: { type: Boolean, default: !1 },
    activeIndex: { default: 0 },
    loop: { type: Boolean, default: !1 },
    showTitle: { type: Boolean, default: !0 },
    showCounter: { type: Boolean, default: !0 },
    showThumbnails: { type: [Boolean, String], default: "auto" },
    zoomable: { type: Boolean, default: !0 },
    rotatable: { type: Boolean, default: !0 },
    closeOnBackdrop: { type: Boolean, default: !0 },
    minScale: { default: 1 },
    maxScale: { default: 4 },
    preload: { default: 1 },
    swipeThreshold: { default: 48 }
  },
  emits: ["update:isOpened", "update:activeIndex", "close", "change", "error"],
  setup(n, { emit: r }) {
    const e = n, d = r, u = C(null), c = C(!0), p = C(!1), b = C(0);
    let y = "";
    const o = _e(
      I(e, "images"),
      I(e, "activeIndex"),
      I(e, "loop"),
      (l) => {
        d("update:activeIndex", l);
        const s = e.images[l];
        s && d("change", l, s);
      }
    ), a = Ie(
      I(e, "minScale"),
      I(e, "maxScale")
    ), i = Ce({
      scale: a.scale,
      minScale: () => e.minScale,
      maxScale: () => e.maxScale,
      swipeThreshold: () => e.swipeThreshold,
      onNext: o.next,
      onPrevious: o.previous,
      panBy: a.panBy,
      setScale: a.setScale
    }), z = B(
      () => e.images.length > 1 && (e.showThumbnails === !0 || e.showThumbnails === "auto")
    ), O = () => {
      d("update:isOpened", !1), d("close");
    }, _ = () => {
      c.value = !1, p.value = !1;
    }, E = (l) => {
      c.value = !1, p.value = !0;
      const s = o.current.value;
      s && d("error", { image: s, index: o.index.value, event: l });
    }, q = () => {
      c.value = !0, p.value = !1, b.value += 1;
    }, F = (l) => o.goTo(l), G = (l) => {
      e.closeOnBackdrop && l.target === l.currentTarget && O();
    }, H = (l) => {
      e.zoomable && (l.preventDefault(), a.setScale(a.scale.value + (l.deltaY < 0 ? 0.25 : -0.25)));
    }, K = () => {
      e.zoomable && a.setScale(
        a.scale.value === e.minScale ? Math.min(2, e.maxScale) : e.minScale
      );
    }, P = (l) => {
      e.isOpened && (l.key === "Escape" && O(), l.key === "ArrowLeft" && o.previous(), l.key === "ArrowRight" && o.next(), e.zoomable && (l.key === "+" || l.key === "=") && a.zoomIn(), e.zoomable && l.key === "-" && a.zoomOut(), e.rotatable && l.key.toLowerCase() === "r" && a.rotate(), l.key === "0" && a.reset());
    }, Y = () => {
      if (!(typeof Image > "u"))
        for (let l = 1; l <= e.preload; l += 1)
          for (const s of [
            o.index.value - l,
            o.index.value + l
          ]) {
            const v = e.loop ? (s + e.images.length) % e.images.length : s, S = e.images[v];
            S && (new Image().src = S.src);
          }
    };
    return j(
      () => o.index.value,
      () => {
        a.reset(), c.value = !0, p.value = !1, e.isOpened && Y();
      }
    ), j(
      () => e.isOpened,
      (l) => {
        l ? (Y(), y = document.body.style.overflow, document.body.style.overflow = "hidden", window.addEventListener("keydown", P), J(() => {
          var s;
          return (s = u.value) == null ? void 0 : s.focus();
        })) : (document.body.style.overflow = y, window.removeEventListener("keydown", P));
      },
      { immediate: !0 }
    ), Q(() => {
      document.body.style.overflow = y, window.removeEventListener("keydown", P);
    }), (l, s) => (m(), $(Z, { to: "body" }, [
      h(A, { name: "image-viewer-fade" }, {
        default: k(() => [
          e.isOpened && t(o).current.value ? (m(), w("div", {
            key: 0,
            ref_key: "dialog",
            ref: u,
            class: "image-viewer",
            role: "dialog",
            "aria-modal": "true",
            "aria-label": "Просмотр изображений",
            tabindex: "-1",
            onClick: G
          }, [
            x("header", Te, [
              x("div", Me, [
                e.showTitle && t(o).current.value.title ? (m(), $(L, {
                  key: 0,
                  typography: "label-3",
                  color: "inherit",
                  ellipsis: ""
                }, {
                  default: k(() => [
                    T(V(t(o).current.value.title), 1)
                  ]),
                  _: 1
                })) : f("", !0),
                e.showCounter ? (m(), $(L, {
                  key: 1,
                  typography: "label-1",
                  color: "inherit"
                }, {
                  default: k(() => [
                    T(V(t(o).index.value + 1) + " / " + V(t(o).count.value), 1)
                  ]),
                  _: 1
                })) : f("", !0)
              ]),
              x("div", Oe, [
                D(l.$slots, "toolbar", {
                  image: t(o).current.value,
                  index: t(o).index.value
                }, void 0, !0),
                e.zoomable ? (m(), $(M, {
                  key: 0,
                  squared: "",
                  mode: "ghost",
                  size: "small",
                  "aria-label": "Уменьшить",
                  disabled: t(a).scale.value <= e.minScale,
                  onClick: t(a).zoomOut
                }, {
                  default: k(() => [
                    h(t(ge))
                  ]),
                  _: 1
                }, 8, ["disabled", "onClick"])) : f("", !0),
                e.zoomable ? (m(), $(M, {
                  key: 1,
                  squared: "",
                  mode: "ghost",
                  size: "small",
                  "aria-label": "Увеличить",
                  disabled: t(a).scale.value >= e.maxScale,
                  onClick: t(a).zoomIn
                }, {
                  default: k(() => [
                    h(t(be))
                  ]),
                  _: 1
                }, 8, ["disabled", "onClick"])) : f("", !0),
                e.rotatable ? (m(), $(M, {
                  key: 2,
                  squared: "",
                  mode: "ghost",
                  size: "small",
                  "aria-label": "Повернуть",
                  onClick: t(a).rotate
                }, {
                  default: k(() => [
                    h(t(Be))
                  ]),
                  _: 1
                }, 8, ["onClick"])) : f("", !0),
                h(M, {
                  squared: "",
                  mode: "ghost",
                  size: "small",
                  "aria-label": "Закрыть",
                  onClick: O
                }, {
                  default: k(() => [
                    h(t(se))
                  ]),
                  _: 1
                })
              ])
            ]),
            x("main", {
              class: U(["image-viewer-stage", { pannable: t(a).scale.value > e.minScale }]),
              onWheel: H,
              onDblclick: K,
              onPointerdown: s[2] || (s[2] = //@ts-ignore
              (...v) => t(i).pointerDown && t(i).pointerDown(...v)),
              onPointermove: s[3] || (s[3] = //@ts-ignore
              (...v) => t(i).pointerMove && t(i).pointerMove(...v)),
              onPointerup: s[4] || (s[4] = //@ts-ignore
              (...v) => t(i).pointerUp && t(i).pointerUp(...v)),
              onPointercancel: s[5] || (s[5] = //@ts-ignore
              (...v) => t(i).pointerUp && t(i).pointerUp(...v))
            }, [
              t(o).count.value > 1 ? (m(), w("button", {
                key: 0,
                class: "image-viewer-edge previous",
                type: "button",
                "aria-label": "Предыдущее изображение",
                disabled: !t(o).canPrevious.value,
                onClick: s[0] || (s[0] = R(
                  //@ts-ignore
                  (...v) => t(o).previous && t(o).previous(...v),
                  ["stop"]
                ))
              }, [
                h(t(re))
              ], 8, Ve)) : f("", !0),
              h(A, {
                name: "image-viewer-image",
                mode: "out-in"
              }, {
                default: k(() => [
                  (m(), w("div", {
                    key: `${t(o).current.value.id}-${b.value}`,
                    class: "image-viewer-media"
                  }, [
                    c.value && !p.value ? (m(), $(ue, { key: 0 })) : f("", !0),
                    p.value ? (m(), w("div", De, [
                      D(l.$slots, "error", {
                        image: t(o).current.value,
                        index: t(o).index.value,
                        retry: q
                      }, () => [
                        h(t(pe)),
                        h(L, {
                          typography: "label-3",
                          color: "inherit"
                        }, {
                          default: k(() => s[6] || (s[6] = [
                            T("Не удалось загрузить изображение")
                          ])),
                          _: 1
                        }),
                        h(M, {
                          mode: "contrast",
                          size: "small",
                          onClick: q
                        }, {
                          default: k(() => [
                            h(t(ie)),
                            s[7] || (s[7] = T(" Повторить "))
                          ]),
                          _: 1
                        })
                      ], !0)
                    ])) : f("", !0),
                    ee(x("img", {
                      class: U(["image-viewer-image", { rotated: t(a).rotation.value % 180 !== 0 }]),
                      style: te(t(a).style.value),
                      src: t(o).current.value.src,
                      alt: t(o).current.value.alt ?? t(o).current.value.title ?? "",
                      draggable: "false",
                      onLoad: _,
                      onError: E
                    }, null, 46, Le), [
                      [oe, !p.value]
                    ])
                  ]))
                ]),
                _: 3
              }),
              t(o).count.value > 1 ? (m(), w("button", {
                key: 1,
                class: "image-viewer-edge next",
                type: "button",
                "aria-label": "Следующее изображение",
                disabled: !t(o).canNext.value,
                onClick: s[1] || (s[1] = R(
                  //@ts-ignore
                  (...v) => t(o).next && t(o).next(...v),
                  ["stop"]
                ))
              }, [
                h(t(ne))
              ], 8, Ne)) : f("", !0)
            ], 34),
            z.value || e.showTitle && t(o).current.value.description || l.$slots.caption ? (m(), w("footer", Ee, [
              D(l.$slots, "caption", {
                image: t(o).current.value,
                index: t(o).index.value
              }, () => [
                e.showTitle && t(o).current.value.description ? (m(), $(L, {
                  key: 0,
                  color: "inherit",
                  "text-align": "center"
                }, {
                  default: k(() => [
                    T(V(t(o).current.value.description), 1)
                  ]),
                  _: 1
                })) : f("", !0)
              ], !0),
              z.value ? (m(), w("div", Pe, [
                (m(!0), w(ae, null, le(e.images, (v, S) => (m(), w("button", {
                  key: v.id,
                  class: U(["image-viewer-thumbnail", { active: S === t(o).index.value }]),
                  type: "button",
                  "aria-label": `Открыть изображение ${S + 1}`,
                  "aria-current": S === t(o).index.value ? "true" : void 0,
                  onClick: (Ye) => F(S)
                }, [
                  D(l.$slots, "thumbnail", {
                    image: v,
                    index: S
                  }, () => [
                    x("img", {
                      src: v.thumbnailSrc ?? v.src,
                      alt: v.alt ?? ""
                    }, null, 8, je)
                  ], !0)
                ], 10, Ue))), 128))
              ])) : f("", !0)
            ])) : f("", !0)
          ], 512)) : f("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), Ze = /* @__PURE__ */ de(qe, [["__scopeId", "data-v-52e15030"]]);
export {
  Ze as default
};
