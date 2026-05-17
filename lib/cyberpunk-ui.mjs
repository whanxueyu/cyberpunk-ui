import { defineComponent as K, useSlots as re, computed as L, openBlock as s, createElementBlock as n, normalizeClass as V, createElementVNode as d, unref as fe, renderSlot as U, toDisplayString as z, ref as _, onUnmounted as ie, createBlock as ge, Teleport as ye, createVNode as oe, TransitionGroup as be, withCtx as ve, Fragment as j, renderList as X, createCommentVNode as E, normalizeStyle as P, watch as Z, nextTick as he, onMounted as J, withDirectives as me, createTextVNode as ue, vShow as we, watchEffect as Se, useCssVars as pe, getCurrentInstance as Ie, createStaticVNode as Me, reactive as Te, onBeforeUnmount as $e, withModifiers as te, Transition as xe, vModelText as Be, resolveDynamicComponent as Ee, resolveComponent as Le } from "vue";
const Ve = (e = []) => ({
  install: (t) => {
    e.forEach((l) => t.use(l));
  }
}), F = (e, a) => (e.install = (t) => {
  for (const l of [e, ...Object.values({})])
    t.component(l.name, l);
}, e), Ne = ["data-content"], Oe = { key: 1 }, ze = /* @__PURE__ */ K({
  name: "CyberButton",
  __name: "button",
  props: {
    type: {
      type: String,
      default: "primary",
      validator: (e) => ["primary", "success", "warning", "danger"].indexOf(e) !== -1
    },
    size: {
      type: String,
      default: "default",
      validator: (e) => ["large", "default", "small"].indexOf(e) !== -1
    },
    content: {
      type: String,
      default: "CyberPunk-UI"
    }
  },
  emits: ["onMouseEnter", "onMouseLeave"],
  setup(e, { emit: a }) {
    const t = re(), l = e, c = L(() => {
      switch (l.type) {
        case "primary":
          return "primary-style";
        case "success":
          return "success-style";
        case "warning":
          return "warning-style";
        case "danger":
          return "danger-style";
        default:
          return "primary-style";
      }
    }), i = L(() => {
      switch (l.size) {
        case "large":
          return "large-size";
        case "default":
          return "default-size";
        case "small":
          return "small-size";
        default:
          return "default-size";
      }
    });
    return (u, h) => (s(), n("div", {
      class: V(["cp-button", i.value])
    }, [
      d("div", {
        class: V(["button", c.value]),
        "data-content": l.content
      }, [
        fe(t) ? U(u.$slots, "default", { key: 0 }, void 0, !0) : (s(), n("span", Oe, z(l.content), 1))
      ], 10, Ne)
    ], 2));
  }
}), H = (e, a) => {
  const t = e.__vccOpts || e;
  for (const [l, c] of a)
    t[l] = c;
  return t;
}, Ae = /* @__PURE__ */ H(ze, [["__scopeId", "data-v-6fea0e49"]]), De = F(Ae), Re = { class: "notification-content" }, Pe = {
  key: 0,
  class: "notification-icon"
}, Ke = { class: "notification-body" }, Fe = {
  key: 0,
  class: "notification-title"
}, He = { class: "notification-message" }, Ge = {
  key: 1,
  class: "notification-actions"
}, We = ["onClick"], Ye = ["onClick"], qe = /* @__PURE__ */ K({
  name: "CyberNotification",
  __name: "notification",
  props: {
    position: {
      type: String,
      default: "top-right",
      validator: (e) => ["top-right", "top-left", "bottom-right", "bottom-left", "center"].indexOf(e) !== -1
    },
    maxCount: {
      type: Number,
      default: 10
    },
    duration: {
      type: Number,
      default: 4500
    },
    effect: {
      type: String,
      default: "glitch",
      validator: (e) => ["glitch", "hologram", "circuit"].indexOf(e) !== -1
    }
  },
  emits: ["close"],
  setup(e, { expose: a, emit: t }) {
    const l = e, c = t, i = _([]), u = _(!1);
    let h = 0;
    const m = (y) => {
      const C = ++h, f = y.actions && y.actions.length > 0, T = {
        id: C,
        title: y.title || "",
        message: y.message,
        type: y.type || "info",
        duration: y.duration !== void 0 ? y.duration : f ? 0 : l.duration,
        showClose: y.showClose !== void 0 ? y.showClose : !0,
        showIcon: y.showIcon !== void 0 ? y.showIcon : !0,
        actions: y.actions || [],
        effect: y.effect || l.effect,
        onClose: y.onClose || (() => {
        })
      };
      if (i.value.push(T), u.value = !0, T.duration > 0 && setTimeout(() => {
        b(C);
      }, T.duration), i.value.length > l.maxCount) {
        const S = i.value[0];
        b(S.id);
      }
      return C;
    }, b = (y) => {
      const C = i.value.findIndex((f) => f.id === y);
      if (C !== -1) {
        const f = i.value[C];
        f.onClose && f.onClose(), i.value.splice(C, 1), c("close", y);
      }
    }, k = (y, C) => {
      C.callback && C.callback(), b(y.id);
    }, I = () => {
      i.value.length === 0 && (u.value = !1);
    }, v = () => {
      i.value.forEach((y) => {
        y.onClose && y.onClose();
      }), i.value = [], u.value = !1;
    };
    return a({
      // 创建不同类型的通知
      info: (y) => m({ ...y, type: "info" }),
      success: (y) => m({ ...y, type: "success" }),
      warning: (y) => m({ ...y, type: "warning" }),
      error: (y) => m({ ...y, type: "error" }),
      // 通用创建方法
      create: m,
      // 关闭方法
      close: b,
      // 清除所有
      clearAll: v
    }), ie(() => {
      v();
    }), (y, C) => (s(), ge(ye, { to: "body" }, [
      u.value ? (s(), n("div", {
        key: 0,
        class: V(["cp-cyber-notification-container", `position-${e.position}`])
      }, [
        oe(be, {
          name: "notification",
          tag: "div",
          onAfterLeave: I
        }, {
          default: ve(() => [
            (s(!0), n(j, null, X(i.value, (f) => (s(), n("div", {
              key: f.id,
              class: V(["cp-cyber-notification", `type-${f.type}`, `effect-${f.effect}`])
            }, [
              d("div", Re, [
                f.showIcon ? (s(), n("div", Pe, [...C[0] || (C[0] = [
                  d("div", { class: "icon-circle" }, null, -1),
                  d("div", { class: "icon-symbol" }, null, -1)
                ])])) : E("", !0),
                d("div", Ke, [
                  f.title ? (s(), n("div", Fe, z(f.title), 1)) : E("", !0),
                  d("div", He, z(f.message), 1),
                  f.actions && f.actions.length ? (s(), n("div", Ge, [
                    (s(!0), n(j, null, X(f.actions, (T, S) => (s(), n("button", {
                      key: S,
                      class: "action-button",
                      onClick: (A) => k(f, T)
                    }, z(T.text), 9, We))), 128))
                  ])) : E("", !0)
                ]),
                f.showClose ? (s(), n("div", {
                  key: 1,
                  class: "notification-close",
                  onClick: (T) => b(f.id)
                }, [...C[1] || (C[1] = [
                  d("span", { class: "close-icon" }, "×", -1)
                ])], 8, Ye)) : E("", !0)
              ]),
              f.duration > 0 ? (s(), n("div", {
                key: 0,
                class: "notification-progress",
                style: P({ animationDuration: `${f.duration}ms` })
              }, null, 4)) : E("", !0),
              C[2] || (C[2] = d("div", { class: "notification-glitch-effect" }, null, -1)),
              C[3] || (C[3] = d("div", { class: "notification-hologram-effect" }, null, -1))
            ], 2))), 128))
          ]),
          _: 1
        })
      ], 2)) : E("", !0)
    ]));
  }
}), je = /* @__PURE__ */ H(qe, [["__scopeId", "data-v-5b833339"]]), Xe = F(je), Ue = { class: "tooltip-inner" }, Qe = { class: "tooltip-content" }, Ze = /* @__PURE__ */ K({
  name: "CyberTooltip",
  __name: "tooltip",
  props: {
    content: {
      type: String,
      default: ""
    },
    position: {
      type: String,
      default: "top",
      validator: (e) => ["top", "right", "bottom", "left", "auto"].indexOf(e) !== -1
    },
    effect: {
      type: String,
      default: "hologram",
      validator: (e) => ["hologram", "glitch", "scan", "fade"].indexOf(e) !== -1
    },
    trigger: {
      type: String,
      default: "hover",
      validator: (e) => ["hover", "click", "focus"].indexOf(e) !== -1
    },
    delay: {
      type: Number,
      default: 200
    },
    width: {
      type: [String, Number],
      default: "auto"
    },
    theme: {
      type: String,
      default: "neon",
      validator: (e) => ["neon", "terminal", "holographic"].indexOf(e) !== -1
    }
  },
  emits: ["show", "hide"],
  setup(e, { emit: a }) {
    const t = e, l = a, c = _(!1), i = _(null), u = _(null), h = _(null), m = _(t.position), b = _({}), k = () => {
      if (!i.value || !u.value || t.position !== "auto")
        return t.position;
      const o = i.value.getBoundingClientRect(), $ = u.value.getBoundingClientRect(), r = window.innerWidth, x = window.innerHeight, g = o.top, w = r - o.right, B = x - o.bottom, D = o.left, G = [
        { position: "top", space: g },
        { position: "right", space: w },
        { position: "bottom", space: B },
        { position: "left", space: D }
      ];
      G.sort((q, ae) => ae.space - q.space);
      const W = $.height || 50, R = $.width || 150;
      for (const q of G)
        if (q.position === "top" && q.space >= W + 10 || q.position === "bottom" && q.space >= W + 10 || q.position === "left" && q.space >= R + 10 || q.position === "right" && q.space >= R + 10)
          return q.position;
      return "top";
    }, I = L(() => typeof t.width == "number" ? `${t.width}px` : t.width), v = () => {
      h.value && clearTimeout(h.value), h.value = window.setTimeout(() => {
        c.value = !0, he(() => {
          t.position === "auto" ? m.value = k() : m.value = t.position, C(), l("show");
        });
      }, t.delay);
    }, y = () => {
      h.value && clearTimeout(h.value), h.value = window.setTimeout(() => {
        c.value = !1, l("hide");
      }, 100);
    }, C = () => {
      if (!i.value || !u.value) return;
      const o = i.value.getBoundingClientRect(), $ = u.value.getBoundingClientRect(), r = window.pageYOffset || document.documentElement.scrollTop, x = window.pageXOffset || document.documentElement.scrollLeft;
      let g = 0, w = 0;
      const B = 10;
      switch (m.value) {
        case "top":
          g = o.left + o.width / 2 - $.width / 2 + x, w = o.top - $.height - B + r;
          break;
        case "right":
          g = o.right + B + x, w = o.top + o.height / 2 - $.height / 2 + r;
          break;
        case "bottom":
          g = o.left + o.width / 2 - $.width / 2 + x, w = o.bottom + B + r;
          break;
        case "left":
          g = o.left - $.width - B + x, w = o.top + o.height / 2 - $.height / 2 + r;
          break;
      }
      (() => {
        const G = window.innerWidth, W = window.innerHeight, R = 10;
        g < R ? g = R : g + $.width > G - R && (g = G - $.width - R), w < R ? w = R : w + $.height > W - R && (w = W - $.height - R);
      })(), b.value = {
        left: `${g}px`,
        top: `${w}px`,
        width: I.value
      };
    }, f = () => {
      t.trigger === "hover" && v();
    }, T = () => {
      t.trigger === "hover" && y();
    }, S = () => {
      t.trigger === "click" && (c.value ? y() : v());
    }, A = () => {
      t.trigger === "focus" && v();
    }, Y = () => {
      t.trigger === "focus" && y();
    }, Q = () => {
      c.value && (t.position === "auto" && (m.value = k()), C());
    }, p = () => {
      c.value && (O && clearTimeout(O), O = setTimeout(() => {
        C();
      }, 16));
    };
    Z(
      () => t.position,
      (o) => {
        c.value && he(() => {
          o === "auto" ? m.value = k() : m.value = o, C();
        });
      }
    );
    let N = [];
    const M = (o) => {
      let $ = [], r = o.parentElement;
      for (; r; ) {
        const x = window.getComputedStyle(r);
        /(auto|scroll)/.test(x.overflow + x.overflowY + x.overflowX) && $.push(r), r = r.parentElement;
      }
      return $.push(document.documentElement), $;
    };
    J(() => {
      if (window.addEventListener("resize", Q), window.addEventListener("scroll", p, { passive: !0 }), document.addEventListener("click", (o) => {
        if (c.value && t.trigger === "click") {
          const $ = o.target;
          u.value && !u.value.contains($) && i.value && !i.value.contains($) && y();
        }
      }), i.value) {
        N = M(i.value);
        const o = () => {
          O && clearTimeout(O), O = setTimeout(() => {
            c.value && C();
          }, 16);
        };
        N.forEach(($) => {
          $.addEventListener("scroll", o);
        });
      }
    });
    let O = null;
    return ie(() => {
      window.removeEventListener("resize", Q), window.removeEventListener("scroll", p), N.forEach((o) => {
        o.removeEventListener("scroll", p);
      }), h.value && clearTimeout(h.value), O && clearTimeout(O);
    }), (o, $) => (s(), n("div", null, [
      d("div", {
        ref_key: "triggerRef",
        ref: i,
        class: "tooltip-trigger",
        onMouseenter: f,
        onMouseleave: T,
        onClick: S,
        onFocus: A,
        onBlur: Y
      }, [
        U(o.$slots, "default", {}, void 0, !0)
      ], 544),
      (s(), ge(ye, { to: "body" }, [
        me(d("div", {
          ref_key: "tooltipRef",
          ref: u,
          class: V([
            "cp-cyber-tooltip",
            `theme-${e.theme}`,
            `effect-${e.effect}`,
            `position-${m.value}`
          ]),
          style: P(b.value)
        }, [
          $[2] || ($[2] = d("div", { class: "tooltip-arrow" }, null, -1)),
          d("div", Ue, [
            d("div", Qe, [
              U(o.$slots, "content", {}, () => [
                ue(z(e.content), 1)
              ], !0)
            ]),
            $[0] || ($[0] = d("div", { class: "tooltip-scanline" }, null, -1)),
            $[1] || ($[1] = d("div", { class: "tooltip-glitch" }, null, -1))
          ])
        ], 6), [
          [we, c.value]
        ])
      ]))
    ]));
  }
}), Je = /* @__PURE__ */ H(Ze, [["__scopeId", "data-v-3de3033d"]]), et = F(Je), tt = { class: "progress-track" }, at = {
  key: 0,
  class: "percentage-inside"
}, lt = { class: "tick-marks" }, st = {
  key: 0,
  class: "percentage-outside"
}, nt = {
  key: 1,
  class: "status-indicator"
}, ot = { class: "status-text" }, rt = /* @__PURE__ */ K({
  name: "CyberProgress",
  __name: "progress",
  props: {
    percentage: { default: 0 },
    theme: { default: "neon" },
    animated: { type: Boolean, default: !0 },
    showPercentage: { type: Boolean, default: !0 },
    percentagePosition: { default: "outside" },
    showStatus: { type: Boolean }
  },
  setup(e) {
    const a = e, t = L(() => Math.min(100, Math.max(0, a.percentage)).toFixed(0)), l = L(() => {
      const c = Number(t.value);
      return c < 30 ? "INITIALIZING" : c < 60 ? "PROCESSING" : c < 90 ? "LOADING" : c < 100 ? "ALMOST" : "COMPLETE";
    });
    return (c, i) => (s(), n("div", {
      class: V(["cyber-progress", [`theme-${e.theme}`, { animated: e.animated }]])
    }, [
      d("div", tt, [
        i[0] || (i[0] = d("div", { class: "track-grid" }, null, -1)),
        d("div", {
          class: "progress-bar",
          style: P({ width: e.percentage + "%" })
        }, [
          e.showPercentage && e.percentagePosition === "inside" ? (s(), n("span", at, z(t.value) + "% ", 1)) : E("", !0)
        ], 4),
        d("div", lt, [
          (s(), n(j, null, X(10, (u) => d("span", {
            key: u,
            class: V(["tick", { active: u * 10 <= e.percentage }])
          }, null, 2)), 64))
        ])
      ]),
      e.showPercentage && e.percentagePosition === "outside" ? (s(), n("span", st, z(t.value) + "% ", 1)) : E("", !0),
      e.showStatus ? (s(), n("div", nt, [
        i[1] || (i[1] = d("div", { class: "indicator-dot" }, null, -1)),
        d("span", ot, z(l.value), 1)
      ])) : E("", !0)
    ], 2));
  }
}), it = /* @__PURE__ */ H(rt, [["__scopeId", "data-v-44363fb0"]]), ct = F(it), ut = {
  key: 0,
  class: "prefix"
}, dt = { class: "counter-container" }, ft = {
  key: 0,
  class: "separator"
}, ht = { class: "digit-top" }, vt = { class: "digit-bottom" }, pt = { class: "digit-top flip-top" }, gt = { class: "digit-bottom flip-bottom" }, mt = {
  key: 1,
  class: "suffix"
}, yt = /* @__PURE__ */ K({
  name: "CyberDigitalCounter",
  __name: "digitalCounter",
  props: {
    value: {
      type: [Number, String],
      default: 0
    },
    from: {
      type: [Number, String],
      default: 0
    },
    to: {
      type: [Number, String],
      default: null
    },
    duration: {
      type: Number,
      default: 1e3
    },
    format: {
      type: Object,
      default: () => ({})
    },
    prefix: {
      type: String,
      default: ""
    },
    suffix: {
      type: String,
      default: ""
    },
    separator: {
      type: String,
      default: ","
    },
    decimal: {
      type: Number,
      default: 0
    },
    effect: {
      type: String,
      default: "flip",
      validator: (e) => ["flip", "roll", "fade", "glitch"].indexOf(e) !== -1
    },
    theme: {
      type: String,
      default: "neon",
      validator: (e) => ["neon", "digital", "hologram"].indexOf(e) !== -1
    },
    error: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const a = e, t = _(Number(a.from)), l = _(Number(a.value)), c = _(null), i = _(null), u = _(""), h = (f) => {
      const T = Math.pow(10, a.decimal);
      let A = (Math.round(f * T) / T).toFixed(a.decimal);
      if (a.separator) {
        const Y = A.split(".");
        Y[0] = Y[0].replace(/\B(?=(\d{3})+(?!\d))/g, a.separator), A = Y.join(".");
      }
      return A;
    }, m = L(() => h(t.value)), b = L(() => m.value.split("")), k = (f) => f === a.separator || f === ".", I = (f) => !u.value || f >= u.value.length ? !1 : u.value[f] !== b.value[f] && !k(b.value[f]), v = (f) => {
      c.value === null && (c.value = f);
      const T = f - c.value, S = Math.min(T / a.duration, 1), A = Number(a.from), Y = Number(a.to !== null ? a.to : l.value), Q = A + (Y - A) * y(S);
      t.value = Q, S < 1 ? i.value = requestAnimationFrame(v) : (t.value = Y, c.value = null);
    }, y = (f) => 1 - Math.pow(1 - f, 4), C = () => {
      u.value = m.value, i.value !== null && cancelAnimationFrame(i.value), c.value = null, i.value = requestAnimationFrame(v);
    };
    return Z(() => a.value, (f) => {
      l.value = Number(f), C();
    }), Z(() => a.to, (f) => {
      f !== null && (l.value = Number(f), C());
    }), J(() => {
      Number(a.from) !== Number(a.value) && C();
    }), ie(() => {
      i.value !== null && cancelAnimationFrame(i.value);
    }), (f, T) => (s(), n("div", {
      class: V(["cp-digital-counter", `theme-${e.theme}`])
    }, [
      e.prefix ? (s(), n("span", ut, z(e.prefix), 1)) : E("", !0),
      d("div", dt, [
        (s(!0), n(j, null, X(b.value, (S, A) => (s(), n("div", {
          key: A,
          class: "digit-container"
        }, [
          k(S) ? (s(), n("div", ft, z(S), 1)) : (s(), n("div", {
            key: 1,
            class: V(["digit-flipper", { animate: I(A) }])
          }, [
            d("div", ht, z(S), 1),
            d("div", vt, z(S), 1),
            d("div", pt, z(S), 1),
            d("div", gt, z(S), 1)
          ], 2))
        ]))), 128))
      ]),
      e.suffix ? (s(), n("span", mt, z(e.suffix), 1)) : E("", !0)
    ], 2));
  }
}), bt = /* @__PURE__ */ H(yt, [["__scopeId", "data-v-99c23541"]]), wt = F(bt), $t = {
  class: "cp-full-page",
  id: "page-scroll"
}, xt = ["onClick"], kt = /* @__PURE__ */ K({
  name: "CyberFullPage",
  __name: "fullPage",
  props: {
    items: {
      type: Array,
      default: [{ title: "标题1" }]
    },
    position: {
      type: String,
      default: "right"
    },
    showTitle: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["toNext", "toLast", "change"],
  setup(e, { emit: a }) {
    const t = e, l = a, c = _();
    Se(() => {
      c.value?.style && (c.value.style.transform = u.value);
    });
    const i = L(() => {
      h.value = !0;
      let p = 0;
      return document.getElementById("page-scroll")?.clientHeight ? p = document.getElementById("page-scroll")?.clientHeight ?? 0 : p = window.innerHeight, p;
    }), u = L(() => `translateY(-${S.value * i.value}px)`), h = _(!1), m = _(!0);
    function b(p) {
      p.preventDefault(), p.stopPropagation(), h.value = !1, m.value && (m.value = !1, T(p), setTimeout(() => {
        m.value = !0;
      }, 500));
    }
    const k = _(0), I = _(0), v = _(0);
    function y(p) {
      k.value = p.touches[0].pageY || p.changedTouches[0].pageY;
    }
    function C(p) {
      p.preventDefault(), h.value = !1, I.value = p.changedTouches[0].pageY || p.touches[0].pageY, v.value = I.value - k.value, Math.abs(v.value) >= 60 ? (S.value < t.items.length - 1 && v.value < 0 && S.value++, S.value > 0 && v.value > 0 && S.value--) : (console.log("else", -S.value * i.value), c.value.style.transform = `translateY(-${S.value * i.value}px)`);
    }
    function f(p) {
      h.value = !0, p.preventDefault(), v.value = (p.changedTouches[0].pageY || p.touches[0].pageY) - k.value, !(S.value === t.items.length - 1 && v.value < 0 || S.value === 0 && v.value > 0) && (console.log("else", -S.value * i.value + v.value * -1), c.value.style.transform = `translateY(-${S.value * i.value + v.value * -1}px)`);
    }
    function T(p) {
      p.wheelDelta < 0 ? (A(), l("change", { from: t.items[S.value - 1], to: t.items[S.value], type: "next" })) : (Y(), l("change", { from: t.items[S.value + 1], to: t.items[S.value], type: "last" }));
    }
    const S = _(0);
    function A() {
      S.value < t.items.length - 1 && (S.value++, l("toNext", S.value));
    }
    function Y() {
      (S.value > 1 || S.value === 1) && (S.value--, l("toLast", S.value));
    }
    function Q(p) {
      h.value = !1, S.value = p;
    }
    return (p, N) => (s(), n("div", $t, [
      d("div", {
        ref_key: "element",
        ref: c,
        class: V([{ activeTranstion: h.value }, "inner-box"]),
        onMousewheel: b,
        onTouchstart: y,
        onTouchend: C,
        onTouchmove: f
      }, [
        U(p.$slots, "default", {}, void 0, !0)
      ], 34),
      d("div", {
        class: V(["cp-full-dot", t.position])
      }, [
        (s(!0), n(j, null, X(t.items, (M, O) => (s(), n("div", {
          onClick: (o) => Q(O),
          class: "cp-full-dot-item"
        }, [
          d("div", {
            class: V(["cp-full-dot-item-bg", { active: O === S.value }])
          }, null, 2),
          t.showTitle ? me((s(), n("div", {
            key: 0,
            class: "show-dec"
          }, z(M.title), 513)), [
            [we, O === S.value]
          ]) : E("", !0)
        ], 8, xt))), 256))
      ], 2)
    ]));
  }
}), Ct = /* @__PURE__ */ H(kt, [["__scopeId", "data-v-ee83c807"]]), _t = F(Ct), St = ["src", "alt"], It = {
  key: 1,
  class: "loading-placeholder"
}, Mt = {
  key: 2,
  class: "error-placeholder"
}, Tt = /* @__PURE__ */ K({
  name: "CyberGlitchImage",
  __name: "glitchImage",
  props: {
    src: {
      type: String,
      required: !0
    },
    alt: {
      type: String,
      default: "Glitch image"
    },
    glitchType: {
      type: String,
      default: "rgb-shift",
      validator: (e) => ["rgb-shift", "scanline", "pixelate", "noise", "combined"].indexOf(e) !== -1
    },
    intensity: {
      type: Number,
      default: 5,
      validator: (e) => e >= 1 && e <= 10
    },
    animated: {
      type: Boolean,
      default: !1
    },
    triggerMode: {
      type: String,
      default: "hover",
      validator: (e) => ["hover", "click", "auto", "random"].indexOf(e) !== -1
    },
    interval: {
      type: Number,
      default: 1e3
    }
  },
  emits: ["glitch-start", "glitch-end"],
  setup(e, { emit: a }) {
    const t = e, l = a, c = _(null), i = _(null), u = _(null), h = _(!1), m = _(!1), b = _(!1), k = _(null), I = _(null), v = L(() => t.intensity / 10), y = () => {
      h.value = !0, m.value = !1, setTimeout(() => {
        f(), t.triggerMode === "auto" ? M() : t.triggerMode === "random" && O();
      }, 0);
    }, C = () => {
      m.value = !0, h.value = !1, console.error("Failed to load image:", t.src);
    }, f = () => {
      if (!u.value || !i.value) return;
      const g = i.value, w = u.value, B = w.getContext("2d");
      if (B) {
        w.width = g.naturalWidth, w.height = g.naturalHeight;
        try {
          B.drawImage(g, 0, 0), I.value = B.getImageData(0, 0, w.width, w.height);
        } catch (D) {
          console.error("Failed to get image data (possibly CORS issue):", D), m.value = !0;
        }
      }
    }, T = (g, w) => {
      if (!I.value) return;
      const B = g.canvas, D = g.getImageData(0, 0, B.width, B.height), G = D.data, W = I.value.data, R = Math.floor(20 * w), q = Math.floor(Math.random() * R), ae = Math.floor(Math.random() * R);
      for (let le = 0; le < B.height; le++)
        for (let se = 0; se < B.width; se++) {
          const ee = (le * B.width + se) * 4, ne = Math.min(Math.max(se + q, 0), B.width - 1), ke = (Math.min(Math.max(le + ae, 0), B.height - 1) * B.width + ne) * 4;
          G[ee] = W[ke];
          const Ce = Math.min(Math.max(se - q, 0), B.width - 1), _e = (Math.min(Math.max(le - ae, 0), B.height - 1) * B.width + Ce) * 4;
          G[ee + 2] = W[_e + 2], G[ee + 1] = W[ee + 1];
        }
      g.putImageData(D, 0, 0);
    }, S = (g, w) => {
      if (!I.value) return;
      const B = g.canvas;
      g.putImageData(I.value, 0, 0);
      const D = Math.max(1, Math.floor(5 / w)), G = 0.5 + w * 0.1;
      for (let W = 0; W < B.height; W += D * 2)
        g.fillStyle = `rgba(255, 255, 255, ${G})`, g.fillRect(0, W, B.width, D);
    }, A = (g, w) => {
      if (!I.value) return;
      const B = g.canvas;
      g.putImageData(I.value, 0, 0);
      const D = Math.max(4, Math.floor(w * 8));
      if (Math.random() > 0.5)
        for (let W = 0; W < B.height; W += D)
          for (let R = 0; R < B.width; R += D) {
            const q = g.getImageData(R, W, 1, 1).data;
            g.fillStyle = `rgb(${q[0]}, ${q[1]}, ${q[2]})`, g.fillRect(R, W, D, D);
          }
      else {
        const W = Math.floor(w * 3);
        for (let R = 0; R < W; R++) {
          const q = Math.floor(Math.random() * (B.width - 50)), ae = Math.floor(Math.random() * (B.height - 50)), le = Math.floor(Math.random() * 100 * w) + 30, se = Math.floor(Math.random() * 80 * w) + 20;
          for (let ee = ae; ee < ae + se; ee += D)
            for (let ne = q; ne < q + le; ne += D)
              if (ne < B.width && ee < B.height) {
                const de = g.getImageData(ne, ee, 1, 1).data;
                g.fillStyle = `rgb(${de[0]}, ${de[1]}, ${de[2]})`, g.fillRect(ne, ee, D, D);
              }
        }
      }
    }, Y = (g, w) => {
      if (!I.value) return;
      const B = g.canvas, D = g.getImageData(0, 0, B.width, B.height), G = D.data, W = 0.2 + w * 0.05;
      for (let R = 0; R < G.length; R += 4)
        Math.random() < W && (Math.random() > 0.5 ? (G[R] = 255, G[R + 1] = 255, G[R + 2] = 255) : (G[R] = Math.floor(Math.random() * 256), G[R + 1] = Math.floor(Math.random() * 256), G[R + 2] = Math.floor(Math.random() * 256)));
      g.putImageData(D, 0, 0);
    }, Q = (g, w) => {
      [...["rgb-shift", "scanline", "pixelate", "noise"]].sort(() => 0.5 - Math.random()).slice(0, 2 + Math.floor(Math.random() * 2)).forEach((W) => {
        switch (W) {
          case "rgb-shift":
            T(g, w);
            break;
          case "scanline":
            S(g, w);
            break;
          case "pixelate":
            A(g, w);
            break;
          case "noise":
            Y(g, w);
            break;
        }
      });
    }, p = () => {
      if (!u.value || !I.value) return;
      const w = u.value.getContext("2d");
      if (w) {
        switch (w.putImageData(I.value, 0, 0), t.glitchType) {
          case "rgb-shift":
            T(w, v.value);
            break;
          case "scanline":
            S(w, v.value);
            break;
          case "pixelate":
            A(w, v.value);
            break;
          case "noise":
            Y(w, v.value);
            break;
          case "combined":
            Q(w, v.value);
            break;
        }
        b.value = !0, l("glitch-start");
      }
    }, N = () => {
      if (!u.value || !I.value) return;
      const w = u.value.getContext("2d");
      w && (w.putImageData(I.value, 0, 0), b.value = !1, l("glitch-end"));
    }, M = () => {
      k.value && clearInterval(k.value), p(), t.animated && (k.value = window.setInterval(() => {
        p();
      }, t.interval));
    }, O = () => {
      k.value && clearInterval(k.value), k.value = window.setInterval(() => {
        Math.random() < 0.5 && (p(), setTimeout(() => {
          N();
        }, 200 + Math.random() * 300));
      }, t.interval);
    }, o = () => {
      k.value && (clearInterval(k.value), k.value = null), N();
    }, $ = () => {
      t.triggerMode === "hover" && M();
    }, r = () => {
      t.triggerMode === "hover" && !t.animated && o();
    }, x = () => {
      t.triggerMode === "click" && (b.value ? o() : M());
    };
    return Z(() => [t.src, t.glitchType, t.intensity], () => {
      t.src && (h.value = !1, m.value = !1), b.value && p();
    }), J(() => {
      i.value && i.value.complete && i.value.naturalHeight !== 0 && y();
    }), ie(() => {
      k.value && clearInterval(k.value);
    }), (g, w) => (s(), n("div", {
      class: V(["cp-glitch-image", { animated: e.animated }]),
      onMouseenter: $,
      onMouseleave: r,
      onClick: x
    }, [
      d("div", {
        class: "image-container",
        ref_key: "imageContainerRef",
        ref: c
      }, [
        d("img", {
          src: e.src,
          alt: e.alt,
          ref_key: "imageRef",
          ref: i,
          class: "original-image",
          crossOrigin: "anonymous",
          onLoad: y,
          onError: C
        }, null, 40, St),
        h.value && !m.value ? (s(), n("canvas", {
          key: 0,
          ref_key: "glitchCanvasRef",
          ref: u,
          class: "glitch-canvas"
        }, null, 512)) : E("", !0),
        !h.value && !m.value ? (s(), n("div", It, [...w[0] || (w[0] = [
          d("div", { class: "loading-text" }, "Loading...", -1)
        ])])) : E("", !0),
        m.value ? (s(), n("div", Mt, [...w[1] || (w[1] = [
          d("div", { class: "error-text" }, "Image Load Failed", -1)
        ])])) : E("", !0)
      ], 512)
    ], 34));
  }
}), Bt = /* @__PURE__ */ H(Tt, [["__scopeId", "data-v-b2947767"]]), Et = F(Bt), Lt = ["data-progress"], Vt = { class: "progress-container" }, Nt = {
  key: 0,
  class: "progress-text"
}, Ot = /* @__PURE__ */ K({
  name: "CyberGlitchProgress",
  __name: "glitchProgress",
  props: {
    progress: {
      type: Number,
      default: 0,
      validator: (e) => e >= 0 && e <= 100
    },
    direction: {
      type: String,
      default: "horizontal",
      validator: (e) => ["horizontal", "vertical"].indexOf(e) !== -1
    },
    glitchIntensity: {
      type: Number,
      default: 5,
      validator: (e) => e >= 1 && e <= 10
    },
    indeterminate: {
      type: Boolean,
      default: !1
    },
    color: {
      type: String,
      default: "#00e6f6cc"
    },
    showText: {
      type: Boolean,
      default: !0
    }
  },
  setup(e) {
    const a = e, t = _(null), l = _(null), c = L(() => a.direction === "vertical" ? "vertical" : "horizontal"), i = L(() => {
      const m = a.direction === "vertical" ? "height" : "width", b = a.indeterminate ? "100%" : `${a.progress}%`;
      return {
        [m]: b,
        backgroundColor: a.color,
        boxShadow: `0 0 ${a.glitchIntensity * 2}px ${a.color}`
      };
    }), u = () => {
      if (!t.value) return;
      const m = t.value.querySelector(".glitch-effect");
      if (!m) return;
      const b = () => {
        if (!m) return;
        if (Math.random() < a.glitchIntensity / 20) {
          const I = Math.random() * a.glitchIntensity - a.glitchIntensity / 2, v = Math.random() * a.glitchIntensity - a.glitchIntensity / 2, y = Math.random() * a.glitchIntensity - a.glitchIntensity / 2, C = Math.random() * a.glitchIntensity / 2;
          m.style.transform = `translate(${I}px, ${v}px) skew(${y}deg)`, m.style.filter = `blur(${C}px)`, m.style.opacity = "1", setTimeout(() => {
            m && (m.style.transform = "translate(0, 0) skew(0)", m.style.filter = "blur(0)", m.style.opacity = "0");
          }, 150);
        }
      };
      l.value = window.setInterval(() => {
        b();
      }, 500);
    };
    let h = a.progress;
    return Z(() => a.progress, (m) => {
      if (m !== h) {
        if (t.value) {
          const b = t.value.querySelector(".glitch-effect");
          if (b) {
            const k = Math.random() * a.glitchIntensity * 2 - a.glitchIntensity, I = Math.random() * a.glitchIntensity - a.glitchIntensity / 2;
            b.style.transform = `translate(${k}px, ${I}px)`, b.style.opacity = "1", setTimeout(() => {
              b && (b.style.transform = "translate(0, 0)", b.style.opacity = "0");
            }, 300);
          }
        }
        h = m;
      }
    }), J(() => {
      u();
    }), ie(() => {
      l.value && clearInterval(l.value);
    }), (m, b) => (s(), n("div", {
      class: V(["cp-glitch-progress", c.value, { indeterminate: e.indeterminate }]),
      "data-progress": e.progress
    }, [
      d("div", Vt, [
        d("div", {
          class: "progress-bar",
          style: P(i.value),
          ref_key: "progressBarRef",
          ref: t
        }, [...b[0] || (b[0] = [
          d("div", { class: "glitch-effect" }, null, -1)
        ])], 4),
        e.showText && !e.indeterminate ? (s(), n("div", Nt, z(e.progress) + "% ", 1)) : E("", !0)
      ])
    ], 10, Lt));
  }
}), zt = /* @__PURE__ */ H(Ot, [["__scopeId", "data-v-27854e11"]]), At = F(zt), Dt = { class: "glow-text" }, Rt = /* @__PURE__ */ K({
  name: "CyberGlowText",
  __name: "glowText",
  props: {
    color: {
      type: String,
      default: "#e91e84"
    }
  },
  setup(e) {
    const a = e;
    return J(() => {
      document.documentElement.style.setProperty("--child-color", a.color);
    }), (t, l) => (s(), n("div", Dt, [
      U(t.$slots, "default", {}, void 0, !0)
    ]));
  }
}), Pt = /* @__PURE__ */ H(Rt, [["__scopeId", "data-v-7d666f1f"]]), Kt = F(Pt), Ft = ["tabindex", "aria-disabled", "aria-label"], Ht = { class: "holo-card-content" }, Gt = {
  key: 0,
  class: "card-title"
}, Wt = /* @__PURE__ */ K({
  name: "CyberHoloCard",
  __name: "holoCard",
  props: {
    type: {
      type: String,
      default: "basic",
      validator: (e) => ["basic", "media", "action"].indexOf(e) !== -1
    },
    glowIntensity: {
      type: Number,
      default: 50,
      validator: (e) => e >= 0 && e <= 100
    },
    hologramColor: {
      type: String,
      default: "#00e6f6"
    },
    depth: {
      type: Number,
      default: 3,
      validator: (e) => e >= 1 && e <= 5
    },
    title: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    rounded: {
      type: Boolean,
      default: !0
    },
    theme: {
      type: String,
      default: "default",
      validator: (e) => ["default", "neon", "hologram", "terminal"].indexOf(e) !== -1
    },
    effect: {
      type: String,
      default: "default",
      validator: (e) => ["default", "scan", "glitch", "pulse"].indexOf(e) !== -1
    }
  },
  setup(e) {
    pe((f) => ({
      v558892ac: l.hologramColor
    }));
    const a = Ie(), t = re(), l = e, c = _({ x: 0, y: 0 }), i = _(!1), m = ((f, T) => {
      let S;
      return function() {
        const A = arguments, Y = a;
        S || (f.apply(Y, A), S = !0, setTimeout(() => S = !1, T));
      };
    })((f) => {
      if (l.disabled) return;
      const T = f.currentTarget.getBoundingClientRect();
      c.value = {
        x: (f.clientX - T.left) / T.width * 2 - 1,
        y: (f.clientY - T.top) / T.height * 2 - 1
      }, i.value = !0;
    }, 16), b = () => {
      i.value = !1, c.value = { x: 0, y: 0 };
    }, k = () => {
      l.disabled || (i.value = !0, c.value = { x: 0, y: 0 });
    }, I = L(() => [(() => {
      switch (l.type) {
        case "basic":
          return "basic-type";
        case "media":
          return "media-type";
        case "action":
          return "action-type";
        default:
          return "basic-type";
      }
    })()]), v = L(() => {
      const f = {};
      if (l.rounded || (f.borderRadius = "0"), l.disabled && (f.cursor = "not-allowed", f.opacity = "0.6"), !i.value || l.disabled) return f;
      const T = c.value.y * 10, S = -c.value.x * 10;
      return {
        ...f,
        transform: `perspective(1000px) rotateX(${T}deg) rotateY(${S}deg) scale3d(1.05, 1.05, 1.05)`,
        transition: "transform 0.1s ease"
      };
    }), y = L(() => {
      if (!i.value || l.disabled) return {};
      const f = Math.max(-50, Math.min(50, c.value.x * 10)), T = Math.max(-50, Math.min(50, c.value.y * 10));
      return {
        background: `radial-gradient(circle at ${50 + f}% ${50 + T}%, ${l.hologramColor}33, transparent 70%)`,
        opacity: 0.8,
        transition: "background 0.1s ease"
      };
    }), C = L(() => {
      const f = l.glowIntensity / 100;
      return {
        boxShadow: `0 0 ${10 + l.glowIntensity / 5}px ${l.hologramColor}${Math.floor(f * 99).toString(16).padStart(2, "0")}`,
        opacity: i.value && !l.disabled ? f : f * 0.5
      };
    });
    return J(() => {
      he(() => {
      });
    }), (f, T) => (s(), n("div", {
      class: V([
        "cp-holo-card",
        `depth-${e.depth}`,
        I.value,
        `theme-${e.theme}`,
        `effect-${e.effect}`
      ]),
      style: P(v.value),
      onMousemove: T[0] || (T[0] = //@ts-ignore
      (...S) => fe(m) && fe(m)(...S)),
      onMouseleave: b,
      onFocus: k,
      onBlur: b,
      tabindex: e.disabled ? -1 : 0,
      role: "button",
      "aria-disabled": e.disabled,
      "aria-label": e.title
    }, [
      d("div", Ht, [
        e.title && !fe(t).title ? (s(), n("div", Gt, z(e.title), 1)) : E("", !0),
        U(f.$slots, "title", {}, void 0, !0),
        U(f.$slots, "default", {}, void 0, !0),
        U(f.$slots, "footer", {}, void 0, !0)
      ]),
      d("div", {
        class: "holo-card-hologram-effect",
        style: P(y.value)
      }, null, 4),
      d("div", {
        class: "holo-card-glow",
        style: P(C.value)
      }, null, 4)
    ], 46, Ft));
  }
}), Yt = /* @__PURE__ */ H(Wt, [["__scopeId", "data-v-fe164a1d"]]), qt = F(Yt), jt = { class: "loader-container" }, Xt = {
  key: 0,
  class: "cube-loader"
}, Ut = {
  key: 1,
  class: "sphere-loader"
}, Qt = { class: "sphere" }, Zt = {
  key: 2,
  class: "datastream-loader"
}, Jt = {
  key: 3,
  class: "circuit-loader"
}, ea = { class: "circuit-board" }, ta = {
  key: 0,
  class: "loader-text"
}, aa = { class: "typing-text" }, la = /* @__PURE__ */ K({
  name: "CyberHoloLoader",
  __name: "holoLoader",
  props: {
    type: {
      type: String,
      default: "cube",
      validator: (e) => ["cube", "sphere", "datastream", "circuit", "split"].indexOf(e) !== -1
    },
    size: {
      type: String,
      default: "default",
      validator: (e) => ["small", "default", "large"].indexOf(e) !== -1
    },
    text: {
      type: String,
      default: "Loading..."
    },
    speed: {
      type: Number,
      default: 1,
      validator: (e) => e > 0 && e <= 3
    },
    transparent: {
      type: Boolean,
      default: !1
    },
    color: {
      type: String,
      default: "#00e6f6"
    }
  },
  setup(e) {
    pe((m) => ({
      c40498b2: m.$props.color,
      v7f665050: t
    }));
    const a = e, t = (6 / a.speed).toString() + "s", l = L(() => {
      switch (a.size) {
        case "small":
          return "small-size";
        case "default":
          return "default-size";
        case "large":
          return "large-size";
        default:
          return "default-size";
      }
    }), c = _(""), i = _(0), u = _(null), h = () => {
      if (!a.text) return;
      i.value = 0, c.value = "";
      const m = () => {
        i.value < a.text.length ? (c.value += a.text[i.value], i.value++) : setTimeout(() => {
          i.value = 0, c.value = "";
        }, 1e3);
      }, b = 100 / a.speed;
      u.value = window.setInterval(m, b);
    };
    return Z(() => a.text, () => {
      u.value && clearInterval(u.value), h();
    }), J(() => {
      h();
    }), ie(() => {
      u.value && clearInterval(u.value);
    }), (m, b) => (s(), n("div", {
      class: V(["cp-holo-loader", l.value, { "transparent-bg": e.transparent }])
    }, [
      d("div", jt, [
        d("div", {
          class: V(["holo-projection", `type-${e.type}`])
        }, [
          e.type === "cube" || e.type === "split" ? (s(), n("div", Xt, [...b[0] || (b[0] = [
            Me('<div class="cube" data-v-6df1b911><div class="cube-face front" data-v-6df1b911></div><div class="cube-face back" data-v-6df1b911></div><div class="cube-face right" data-v-6df1b911></div><div class="cube-face left" data-v-6df1b911></div><div class="cube-face top" data-v-6df1b911></div><div class="cube-face bottom" data-v-6df1b911></div></div>', 1)
          ])])) : e.type === "sphere" ? (s(), n("div", Ut, [
            d("div", Qt, [
              (s(), n(j, null, X(3, (k) => d("div", {
                class: "sphere-ring",
                key: k
              })), 64))
            ])
          ])) : e.type === "datastream" ? (s(), n("div", Zt, [
            (s(), n(j, null, X(10, (k) => d("div", {
              class: "data-line",
              key: k
            })), 64))
          ])) : e.type === "circuit" ? (s(), n("div", Jt, [
            d("div", ea, [
              (s(), n(j, null, X(5, (k) => d("div", {
                class: "circuit-path",
                key: k
              })), 64)),
              (s(), n(j, null, X(6, (k) => d("div", {
                class: "circuit-node",
                key: k + 10
              })), 64))
            ])
          ])) : E("", !0)
        ], 2),
        e.text ? (s(), n("div", ta, [
          d("span", aa, z(c.value), 1),
          b[1] || (b[1] = d("span", { class: "cursor" }, "_", -1))
        ])) : E("", !0),
        b[2] || (b[2] = d("div", { class: "holo-base" }, [
          d("div", { class: "base-glow" })
        ], -1))
      ])
    ], 2));
  }
}), sa = /* @__PURE__ */ H(la, [["__scopeId", "data-v-6df1b911"]]), na = F(sa), oa = { class: "header-row" }, ra = { class: "header-text" }, ia = { class: "cell-text" }, ca = {
  key: 0,
  class: "row-scanline"
}, ua = /* @__PURE__ */ K({
  name: "CyberInfiniteTable",
  __name: "infiniteTable",
  props: {
    data: { default: () => [] },
    columns: { default: () => [] },
    theme: { default: "neon" },
    rowHeight: { default: 40 },
    bufferSize: { default: 5 },
    scrollType: { default: "single" },
    showScanline: { type: Boolean, default: !0 },
    loadMore: {},
    remoteMethod: {},
    autoScroll: { type: Boolean, default: !0 },
    rowNum: { default: 5 },
    waitTime: { default: 2e3 },
    hoverPause: { type: Boolean, default: !0 }
  },
  setup(e) {
    const a = e, t = _(null), l = _(!1), c = _(!0), i = _(1), u = _(0), h = _(!1), m = _(0), b = Te([]);
    a.data.length > 0 && b.splice(0, b.length, ...a.data);
    let k = 0;
    const I = () => `row-${++k}-${Date.now()}`, v = L(() => a.rowNum * a.rowHeight), y = L(() => v.value), C = L(() => {
      const o = b.length, $ = a.rowNum;
      if (o === 0) return [];
      if (o <= $)
        return b.map((w, B) => ({
          key: w._uniqueKey || I(),
          data: w,
          index: B
        }));
      let r = [...b];
      o > $ && o < 2 * $ && (r = [...r, ...r]), r = r.map((w, B) => ({
        key: w._uniqueKey || I(),
        data: w,
        index: B,
        scroll: B
      }));
      let x = r.slice(u.value);
      return x.push(...r.slice(0, u.value)), x.slice(0, $);
    }), f = (o) => a.columns[o]?.width ? a.columns[o].width : "auto", T = (o) => o === "center" ? "center" : o === "right" ? "flex-end" : "flex-start", S = () => a.theme === "neon" ? "rgba(0, 230, 246, 0.15)" : a.theme === "hologram" ? "rgba(138, 43, 226, 0.2)" : a.theme === "terminal" ? "rgba(0, 255, 0, 0.15)" : a.theme === "matrix" ? "rgba(0, 255, 65, 0.15)" : "rgba(0, 230, 246, 0.15)", A = (o) => (u.value + o) % b.length % 2 === 0 ? "var(--table-row-bg)" : "var(--table-row-hover)", Y = (o, $) => {
      const r = $.split(".");
      let x = o;
      for (const g of r)
        x = x?.[g];
      return x ?? "";
    }, Q = async () => {
      if (!(l.value || !c.value)) {
        l.value = !0;
        try {
          if (a.remoteMethod) {
            const o = await a.remoteMethod({
              page: i.value,
              size: a.bufferSize * 10
            });
            if (o.data && o.data.length > 0) {
              const $ = o.data.map((r) => (r._uniqueKey || (r._uniqueKey = I()), r));
              i.value === 1 ? b.splice(0, b.length, ...$) : b.push(...$), a.data && a.data.splice(0, a.data.length, ...b);
            }
            c.value = o.hasMore ?? !1, i.value++;
          } else a.loadMore && await a.loadMore();
        } catch (o) {
          console.error("Failed to load more data:", o), c.value = !1;
        } finally {
          l.value = !1;
        }
      }
    }, p = async () => {
      if (!a.autoScroll || h.value) return;
      const o = b.length, $ = a.rowNum;
      if (o <= $ || (await new Promise((x) => setTimeout(x, a.waitTime)), h.value)) return;
      const r = async () => {
        if (h.value) return;
        const x = m.value, g = a.scrollType === "page" ? $ : 1;
        u.value = (u.value + g) % o;
        const w = a.scrollType === "page" ? 500 : 300;
        await new Promise((B) => setTimeout(B, w)), !(m.value !== x || h.value) && (await new Promise((B) => setTimeout(B, a.waitTime)), !(m.value !== x || h.value) && r());
      };
      r();
    }, N = () => {
      m.value = (m.value + 1) % 999999;
    }, M = () => {
      a.hoverPause && (h.value = !0, N());
    }, O = () => {
      a.hoverPause && (h.value = !1, p());
    };
    return J(() => {
      a.remoteMethod && b.length === 0 && Q(), a.autoScroll && p();
    }), (o, $) => (s(), n("div", {
      class: V(["cyber-infinite-table", [`theme-${e.theme}`, `scroll-${e.scrollType}`]])
    }, [
      d("div", {
        class: "table-header",
        style: P({ backgroundColor: S() })
      }, [
        d("div", oa, [
          (s(!0), n(j, null, X(e.columns, (r, x) => (s(), n("div", {
            key: r.field || x,
            class: "header-cell",
            style: P({
              width: f(x),
              minWidth: r.minWidth || "100px",
              textAlign: r.align || "left"
            })
          }, [
            d("div", {
              class: "header-content",
              style: P({ justifyContent: T(r.align || "left") })
            }, [
              d("span", ra, z(r.title), 1)
            ], 4)
          ], 4))), 128))
        ])
      ], 4),
      d("div", {
        class: "table-body",
        ref_key: "bodyRef",
        ref: t,
        onMouseenter: M,
        onMouseleave: O
      }, [
        d("div", {
          class: "rows-container",
          style: P({ height: y.value + "px" })
        }, [
          oe(be, { name: "scroll-list" }, {
            default: ve(() => [
              (s(!0), n(j, null, X(C.value, (r) => (s(), n("div", {
                class: "table-row",
                key: r.key,
                style: P({
                  height: e.rowHeight + "px",
                  lineHeight: e.rowHeight + "px",
                  backgroundColor: A(r.index)
                })
              }, [
                (s(!0), n(j, null, X(e.columns, (x, g) => (s(), n("div", {
                  key: x.field || g,
                  class: "table-cell",
                  style: P({
                    width: f(g),
                    minWidth: x.minWidth || "100px",
                    justifyContent: T(x.align || "left")
                  })
                }, [
                  U(o.$slots, x.field, {
                    row: r.data,
                    column: x
                  }, () => [
                    d("span", ia, z(Y(r.data, x.field)), 1)
                  ], !0)
                ], 4))), 128)),
                e.showScanline ? (s(), n("div", ca)) : E("", !0)
              ], 4))), 128))
            ]),
            _: 3
          })
        ], 4)
      ], 544),
      $[0] || ($[0] = d("div", { class: "table-border-effect" }, null, -1))
    ], 2));
  }
}), da = /* @__PURE__ */ H(ua, [["__scopeId", "data-v-a239aba5"]]), fa = F(da), ha = /* @__PURE__ */ K({
  name: "CyberNenobutton",
  __name: "nenoButton",
  props: {
    type: {
      type: String,
      default: "primary",
      validator: (e) => ["primary", "success", "warning", "danger"].indexOf(e) !== -1
    },
    size: {
      type: String,
      default: "default",
      validator: (e) => ["large", "default", "small"].indexOf(e) !== -1
    },
    bg: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["onMouseEnter", "onMouseLeave"],
  setup(e, { emit: a }) {
    re();
    const t = e, l = L(() => {
      switch (t.type) {
        case "primary":
          return "primary-style";
        case "success":
          return "success-style";
        case "warning":
          return "warning-style";
        case "danger":
          return "danger-style";
        default:
          return "primary-style";
      }
    }), c = L(() => {
      switch (t.size) {
        case "large":
          return "large-size";
        case "default":
          return "default-size";
        case "small":
          return "small-size";
        default:
          return "default-size";
      }
    });
    return (i, u) => (s(), n("div", {
      class: V(["cp-button-neno", c.value])
    }, [
      d("div", {
        class: V(["button", l.value, t.bg ? "show-bg" : ""])
      }, [
        u[0] || (u[0] = d("div", { class: "border" }, null, -1)),
        u[1] || (u[1] = d("div", { class: "border" }, null, -1)),
        u[2] || (u[2] = d("div", { class: "border" }, null, -1)),
        u[3] || (u[3] = d("div", { class: "border" }, null, -1)),
        U(i.$slots, "default", {}, void 0, !0)
      ], 2)
    ], 2));
  }
}), va = /* @__PURE__ */ H(ha, [["__scopeId", "data-v-5d7945c0"]]), pa = F(va), ga = ["aria-checked", "aria-disabled"], ma = { class: "toggle-thumb" }, ya = {
  key: 0,
  class: "pulse-effect"
}, ba = /* @__PURE__ */ K({
  name: "CyberNeonToggle",
  __name: "neonToggle",
  props: {
    modelValue: {
      type: Boolean,
      default: !1
    },
    shape: {
      type: String,
      default: "circle",
      validator: (e) => ["circle", "square", "hex"].indexOf(e) !== -1
    },
    activeColor: {
      type: String,
      default: "#00e6f6cc"
    },
    inActiveColor: {
      type: String,
      default: "#ffffff99"
    },
    pulseEffect: {
      type: Boolean,
      default: !0
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    size: {
      type: String,
      default: "default",
      validator: (e) => ["large", "default", "small"].indexOf(e) !== -1
    }
  },
  emits: ["update:modelValue", "change"],
  setup(e, { emit: a }) {
    pe((h) => ({
      v2ad8abbc: t.inActiveColor,
      v247239f2: t.activeColor
    }));
    const t = e, l = a, c = L(() => {
      switch (t.size) {
        case "large":
          return "large-size";
        case "default":
          return "default-size";
        case "small":
          return "small-size";
        default:
          return "default-size";
      }
    }), i = L(() => {
      switch (t.shape) {
        case "circle":
          return "circle-shape";
        case "square":
          return "square-shape";
        case "hex":
          return "hex-shape";
        default:
          return "circle-shape";
      }
    }), u = () => {
      if (t.disabled) return;
      const h = !t.modelValue;
      l("update:modelValue", h), l("change", h);
    };
    return (h, m) => (s(), n("div", {
      class: V(["cp-neon-toggle", i.value, c.value, { active: e.modelValue, disabled: e.disabled }]),
      onClick: u,
      "aria-checked": e.modelValue,
      role: "switch",
      "aria-disabled": e.disabled
    }, [
      m[0] || (m[0] = d("div", { class: "toggle-track" }, [
        d("div", { class: "toggle-track-inner" }),
        d("div", { class: "circuit-lines" })
      ], -1)),
      d("div", ma, [
        e.pulseEffect && e.modelValue ? (s(), n("div", ya)) : E("", !0)
      ])
    ], 10, ga));
  }
}), wa = /* @__PURE__ */ H(ba, [["__scopeId", "data-v-799d9482"]]), $a = F(wa), xa = /* @__PURE__ */ K({
  name: "CyberReflectbutton",
  __name: "reflectButton",
  props: {
    type: {
      type: String,
      default: "primary",
      validator: (e) => ["primary", "success", "warning", "danger"].indexOf(e) !== -1
    },
    size: {
      type: String,
      default: "default",
      validator: (e) => ["large", "default", "small"].indexOf(e) !== -1
    },
    bg: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["onMouseEnter", "onMouseLeave"],
  setup(e, { emit: a }) {
    re();
    const t = e, l = L(() => {
      switch (t.type) {
        case "primary":
          return "primary-style";
        case "success":
          return "success-style";
        case "warning":
          return "warning-style";
        case "danger":
          return "danger-style";
        default:
          return "primary-style";
      }
    }), c = L(() => {
      switch (t.size) {
        case "large":
          return "large-size";
        case "default":
          return "default-size";
        case "small":
          return "small-size";
        default:
          return "default-size";
      }
    });
    return (i, u) => (s(), n("div", {
      class: V(["cp-button-neno", c.value])
    }, [
      d("div", {
        class: V(["button", l.value, t.bg ? "show-bg" : ""])
      }, [
        U(i.$slots, "default", {}, void 0, !0)
      ], 2)
    ], 2));
  }
}), ka = /* @__PURE__ */ H(xa, [["__scopeId", "data-v-d73343d5"]]), Ca = F(ka), _a = ["data-word"], Sa = /* @__PURE__ */ K({
  name: "CyberText",
  __name: "text",
  props: {
    lineColor: {
      type: String,
      default: "#0000"
    }
  },
  setup(e) {
    const a = _(""), t = re();
    if (t && t.default) {
      let c = t.default();
      a.value = c[0].children;
    }
    const l = e;
    return (c, i) => (s(), n("div", {
      class: "cp-text",
      "data-word": a.value
    }, [
      U(c.$slots, "default", {}, void 0, !0),
      d("div", {
        class: "cp-text-line",
        style: P("background: " + l.lineColor)
      }, null, 4)
    ], 8, _a));
  }
}), Ia = /* @__PURE__ */ H(Sa, [["__scopeId", "data-v-ee14b82a"]]), Ma = F(Ia), Ta = /* @__PURE__ */ K({
  name: "CyberShadowText",
  __name: "shadowText",
  props: {
    direction: {
      type: String,
      default: "left"
    },
    shadowColor: {
      type: String,
      default: "#ae0ed68c"
    },
    long: {
      type: Number,
      default: 20
    }
  },
  setup(e) {
    const a = e, t = (c, i) => {
      let u = `0px 0px ${c}`;
      for (let h = 1; h <= a.long; h++) {
        const m = l(c, h);
        u += `, ${i === "left" ? "-" : ""}${h}px ${h}px ${m}`;
      }
      return u;
    }, l = (c, i) => {
      const u = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i.exec(c), h = /^rgba?\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})(,\s*([\d.]+))?\)$/i.exec(c);
      if (u) {
        const m = parseInt(u[1], 16), b = parseInt(u[2], 16), k = parseInt(u[3], 16), I = u[4] ? parseInt(u[4], 16) / 255 : 1, v = Math.max(0, I - i * 0.05);
        return `rgba(${m}, ${b}, ${k}, ${v})`;
      } else if (h) {
        const m = parseInt(h[1], 10), b = parseInt(h[2], 10), k = parseInt(h[3], 10), I = h[5] ? parseFloat(h[5]) : 1, v = Math.max(0, I - i * 0.05);
        return `rgba(${m}, ${b}, ${k}, ${v})`;
      } else
        throw new Error(`Unsupported color format: ${c}`);
    };
    return (c, i) => (s(), n("div", {
      class: V(["shadow-text", a.direction]),
      style: P({ textShadow: t(a.shadowColor, a.direction) })
    }, [
      U(c.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), Ba = /* @__PURE__ */ H(Ta, [["__scopeId", "data-v-baec179b"]]), Ea = F(Ba), La = { class: "cp-typing" }, Va = { class: "content" }, Na = /* @__PURE__ */ K({
  name: "CyberTyping",
  __name: "typing",
  setup(e) {
    return (a, t) => (s(), n("div", La, [
      d("div", Va, [
        U(a.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), Oa = /* @__PURE__ */ H(Na, [["__scopeId", "data-v-c43f79f6"]]), za = F(Oa), Aa = ["src", "alt", "loading", "crossorigin"], Da = {
  key: 1,
  class: "placeholder"
}, Ra = ["src"], Pa = {
  key: 2,
  class: "error-content"
}, Ka = /* @__PURE__ */ K({
  name: "CyberImage",
  __name: "image",
  props: {
    src: { default: "" },
    alt: { default: "" },
    width: { default: "auto" },
    height: { default: "auto" },
    fit: { default: "cover" },
    loading: { default: "lazy" },
    crossorigin: { default: "anonymous" },
    placeholder: {},
    errorSrc: { default: "" },
    errorContent: { default: "Image failed to load" },
    disableGlitch: { type: Boolean, default: !1 }
  },
  setup(e) {
    const a = /* @__PURE__ */ Object.assign({}), t = e, l = (v) => {
      if (v.startsWith("http://") || v.startsWith("https://") || v.startsWith("/"))
        return v;
      for (const [y, C] of Object.entries(a))
        if (y.includes(v) || v.includes(y.split("/").pop() || ""))
          return C;
      return v;
    }, c = _(!1), i = _(!1), u = _(""), h = L(() => {
      const v = {};
      return t.width !== "auto" && t.width !== void 0 && (v.width = typeof t.width == "number" ? `${t.width}px` : t.width), t.height !== "auto" && t.height !== void 0 && (v.height = typeof t.height == "number" ? `${t.height}px` : t.height), !v.width && !v.height && (v.display = "inline-block"), v;
    }), m = L(() => i.value && t.errorSrc ? `url(${t.errorSrc})` : u.value ? `url(${u.value})` : "none"), b = L(() => {
      if (!t.fit) return "cover";
      switch (t.fit) {
        case "fill":
          return "100% 100%";
        // 完全填充（可能变形）
        case "scale-down":
          return "contain";
        // 保持比例
        default:
          return t.fit;
      }
    }), k = () => {
      u.value = l(t.src), c.value = !0, i.value = !1;
    }, I = () => {
      if (i.value = !0, t.errorSrc && t.errorSrc !== t.src) {
        const v = new Image();
        v.crossOrigin = t.crossorigin || "", v.src = l(t.errorSrc), v.onload = () => {
          u.value = l(t.errorSrc), c.value = !0;
        }, v.onerror = () => {
          c.value = !0;
        };
      } else
        c.value = !0;
    };
    return Z(() => t.src, () => {
      c.value = !1, i.value = !1, u.value = l(t.src);
    }, { immediate: !0 }), J(() => {
      t.src && (u.value = l(t.src));
    }), (v, y) => (s(), n("div", {
      class: "cyber-image-wrapper",
      style: P(h.value)
    }, [
      e.src ? (s(), n("img", {
        key: 0,
        src: e.src,
        alt: e.alt,
        loading: e.loading,
        crossorigin: e.crossorigin,
        class: "hidden-image",
        onLoad: k,
        onError: I
      }, null, 40, Aa)) : E("", !0),
      d("div", {
        class: V(["glitch", {
          "is-loaded": c.value && !i.value,
          "is-loading": !c.value && !i.value,
          "is-error": i.value,
          "no-glitch": e.disableGlitch
        }]),
        style: P({
          backgroundImage: m.value,
          backgroundSize: b.value,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        })
      }, [
        c.value && !i.value && !e.disableGlitch ? (s(), n("div", {
          key: 0,
          class: "glitch-layer",
          style: P({ backgroundImage: m.value })
        }, null, 4)) : E("", !0),
        !c.value && e.placeholder ? (s(), n("div", Da, [
          U(v.$slots, "placeholder", {}, () => [
            d("img", {
              src: e.placeholder,
              alt: "Loading..."
            }, null, 8, Ra)
          ], !0)
        ])) : i.value ? (s(), n("div", Pa, [
          U(v.$slots, "error", {}, () => [
            ue(z(e.errorContent), 1)
          ], !0)
        ])) : E("", !0),
        c.value && !i.value ? U(v.$slots, "default", { key: 3 }, void 0, !0) : E("", !0)
      ], 6)
    ], 4));
  }
}), Fa = /* @__PURE__ */ H(Ka, [["__scopeId", "data-v-c8293d7c"]]), Ha = F(Fa), Ga = { class: "cyber-magic-text" }, Wa = ["data-text"], Ya = /* @__PURE__ */ K({
  name: "CyberMagicText",
  __name: "magicText",
  setup(e) {
    const a = _(""), t = re();
    if (t && t.default) {
      let l = t.default();
      a.value = l[0].children;
    }
    return (l, c) => (s(), n("div", Ga, [
      d("span", {
        class: "gradient-text",
        "data-text": a.value
      }, [
        U(l.$slots, "default")
      ], 8, Wa)
    ]));
  }
}), qa = F(Ya), ja = { class: "imgWrap" }, Xa = ["src"], Ua = /* @__PURE__ */ K({
  name: "CyberBanner",
  __name: "banner",
  props: {
    imgList: {
      type: Array,
      default: []
    },
    shadow: {
      type: Boolean,
      default: !0
    },
    animationDuration: {
      type: Number,
      default: 30
    },
    imgWidth: {
      type: Number,
      default: 500
    },
    imgHeight: {
      type: Number,
      default: 400
    }
  },
  setup(e) {
    pe((h) => ({
      v29922088: t.value + "px"
    }));
    const a = e, t = _(a.imgHeight);
    a.shadow && (t.value = a.imgHeight * 2);
    const l = _(a.imgList.length), c = i(a.imgWidth, 360 / l.value) * 1.6;
    function i(h, m) {
      const b = m * Math.PI / 180;
      return h / (2 * Math.sin(b / 2));
    }
    const u = (h) => {
      const m = 35 + (h + 1) * (360 / l.value), b = i(a.imgWidth, 360 / l.value);
      return {
        transform: `rotateY(${m}deg) translateZ(${b}px)`
      };
    };
    return (h, m) => (s(), n("div", {
      class: "container",
      style: P({
        "--container-width": `${c}px`,
        "--img-width": `${a.imgWidth}px`,
        "--img-height": `${a.imgHeight}px`
      })
    }, [
      d("div", {
        class: V(["stage", { "has-shadow": a.shadow }])
      }, [
        d("div", {
          class: "control",
          style: P({
            "--animation-duration": `${a.animationDuration}s`
          })
        }, [
          d("div", ja, [
            (s(!0), n(j, null, X(a.imgList, (b, k) => (s(), n("div", {
              key: k,
              class: "img",
              style: P(u(k))
            }, [
              d("img", { src: b }, null, 8, Xa)
            ], 4))), 128))
          ])
        ], 4)
      ], 2)
    ], 4));
  }
}), Qa = /* @__PURE__ */ H(Ua, [["__scopeId", "data-v-3d7f1970"]]), Za = F(Qa), Ja = ["aria-expanded", "aria-disabled"], el = { class: "select-value" }, tl = ["aria-label", "onClick"], al = {
  key: 1,
  class: "select-single"
}, ll = {
  key: 2,
  class: "select-placeholder"
}, sl = {
  key: 0,
  class: "select-dropdown"
}, nl = {
  key: 0,
  class: "select-search"
}, ol = ["placeholder"], rl = {
  key: 1,
  class: "select-options"
}, il = {
  key: 0,
  class: "select-group-label"
}, cl = ["disabled", "onClick"], ul = {
  key: 0,
  class: "option-check"
}, dl = {
  key: 1,
  class: "option-icon"
}, fl = { class: "option-label" }, hl = {
  key: 2,
  class: "option-shortcut"
}, vl = {
  key: 2,
  class: "select-empty"
}, pl = /* @__PURE__ */ K({
  name: "CyberSelect",
  __name: "select",
  props: {
    modelValue: { type: [String, Number, Boolean, null, Array], default: "" },
    options: { default: () => [] },
    placeholder: { default: "请选择" },
    searchPlaceholder: { default: "搜索选项" },
    noDataText: { default: "暂无数据" },
    disabled: { type: Boolean, default: !1 },
    clearable: { type: Boolean, default: !0 },
    filterable: { type: Boolean, default: !1 },
    multiple: { type: Boolean, default: !1 },
    showCheck: { type: Boolean, default: void 0 },
    size: { default: "default" },
    theme: { default: "neon" },
    labelKey: { default: "label" },
    valueKey: { default: "value" }
  },
  emits: ["update:modelValue", "change", "focus", "blur", "visible-change", "clear"],
  setup(e, { emit: a }) {
    const t = e, l = a, c = _(), i = _(), u = _(!1), h = _(""), m = L(() => t.showCheck !== void 0 ? t.showCheck : t.multiple), b = L(() => {
      const r = [], x = [];
      return t.options.forEach((g, w) => {
        Array.isArray(g.options) ? r.push({
          key: `group-${w}`,
          label: C(g),
          options: g.options
        }) : x.push(g);
      }), x.length && r.unshift({
        key: "default",
        label: "",
        options: x
      }), r;
    }), k = L(() => b.value.flatMap((r) => r.options)), I = L(() => {
      const r = h.value.trim().toLowerCase();
      return r ? b.value.map((x) => ({
        ...x,
        options: x.options.filter((g) => C(g).toLowerCase().includes(r))
      })).filter((x) => x.options.length) : b.value;
    }), v = L(() => {
      const r = t.multiple ? Array.isArray(t.modelValue) ? t.modelValue : [] : Array.isArray(t.modelValue) ? [] : [t.modelValue ?? null];
      return k.value.filter((x) => r.some((g) => T(g, f(x))));
    }), y = L(() => t.multiple ? Array.isArray(t.modelValue) && t.modelValue.length > 0 : t.modelValue !== "" && t.modelValue !== null && t.modelValue !== void 0), C = (r) => {
      const x = r[t.labelKey] ?? r.label ?? r[t.valueKey] ?? r.value ?? "";
      return String(x);
    }, f = (r) => r[t.valueKey] ?? r.value ?? null, T = (r, x) => r === x, S = (r) => {
      const x = f(r);
      return t.multiple ? (Array.isArray(t.modelValue) ? t.modelValue : []).some((w) => T(w, x)) : T(t.modelValue, x);
    }, A = (r) => {
      t.disabled || u.value === r || (u.value = r, l("visible-change", r), r && t.filterable && he(() => i.value?.focus()));
    }, Y = () => {
      A(!u.value);
    }, Q = (r) => {
      if (t.disabled || r.disabled) return;
      const x = f(r);
      if (t.multiple) {
        const g = Array.isArray(t.modelValue) ? [...t.modelValue] : [], w = g.findIndex((D) => T(D, x));
        w > -1 ? g.splice(w, 1) : g.push(x);
        const B = k.value.filter((D) => g.some((G) => T(G, f(D))));
        l("update:modelValue", g), l("change", g, B);
        return;
      }
      l("update:modelValue", x), l("change", x, r), A(!1);
    }, p = (r) => {
      if (!t.multiple || t.disabled) return;
      const x = f(r), w = (Array.isArray(t.modelValue) ? [...t.modelValue] : []).filter((D) => !T(D, x)), B = k.value.filter((D) => w.some((G) => T(G, f(D))));
      l("update:modelValue", w), l("change", w, B);
    }, N = () => {
      const r = t.multiple ? [] : "";
      l("update:modelValue", r), l("change", r, t.multiple ? [] : void 0), l("clear"), h.value = "";
    }, M = (r) => {
      t.disabled || l("focus", r);
    }, O = (r) => {
      l("blur", r);
    }, o = (r) => {
      t.disabled || ((r.key === "Enter" || r.key === " ") && (u.value || (r.preventDefault(), A(!0))), r.key === "Escape" && A(!1));
    }, $ = (r) => {
      c.value?.contains(r.target) || A(!1);
    };
    return Z(u, (r) => {
      r || (h.value = "");
    }), Z(() => t.multiple, (r) => {
      r && !Array.isArray(t.modelValue) && l("update:modelValue", []);
    }), J(() => {
      document.addEventListener("click", $);
    }), $e(() => {
      document.removeEventListener("click", $);
    }), (r, x) => (s(), n("div", {
      ref_key: "selectRef",
      ref: c,
      class: V(["cp-cyber-select", [
        `theme-${e.theme}`,
        `size-${e.size}`,
        {
          "is-open": u.value,
          "is-disabled": e.disabled,
          "is-multiple": e.multiple
        }
      ]])
    }, [
      d("div", {
        class: "select-control",
        tabindex: "0",
        role: "combobox",
        "aria-expanded": u.value,
        "aria-disabled": e.disabled,
        onClick: Y,
        onFocus: M,
        onBlur: O,
        onKeydown: o
      }, [
        d("div", el, [
          e.multiple && v.value.length ? (s(!0), n(j, { key: 0 }, X(v.value, (g) => (s(), n("span", {
            key: String(f(g)),
            class: "select-tag",
            onClick: x[0] || (x[0] = te(() => {
            }, ["stop"]))
          }, [
            ue(z(C(g)) + " ", 1),
            d("button", {
              class: "tag-close",
              type: "button",
              "aria-label": `Remove ${C(g)}`,
              onClick: te((w) => p(g), ["stop"])
            }, null, 8, tl)
          ]))), 128)) : !e.multiple && v.value.length ? (s(), n("span", al, z(C(v.value[0])), 1)) : (s(), n("span", ll, z(e.placeholder), 1))
        ]),
        e.clearable && y.value && !e.disabled ? (s(), n("button", {
          key: 0,
          class: "clear-button",
          type: "button",
          "aria-label": "Clear selected value",
          onClick: te(N, ["stop"])
        })) : E("", !0),
        x[3] || (x[3] = d("span", { class: "select-arrow" }, null, -1))
      ], 40, Ja),
      oe(xe, { name: "select-dropdown" }, {
        default: ve(() => [
          u.value ? (s(), n("div", sl, [
            e.filterable ? (s(), n("div", nl, [
              me(d("input", {
                ref_key: "searchInputRef",
                ref: i,
                "onUpdate:modelValue": x[1] || (x[1] = (g) => h.value = g),
                type: "text",
                placeholder: e.searchPlaceholder,
                onClick: x[2] || (x[2] = te(() => {
                }, ["stop"])),
                onKeydown: o
              }, null, 40, ol), [
                [Be, h.value]
              ])
            ])) : E("", !0),
            I.value.length ? (s(), n("div", rl, [
              (s(!0), n(j, null, X(I.value, (g) => (s(), n(j, {
                key: g.key
              }, [
                g.label ? (s(), n("div", il, z(g.label), 1)) : E("", !0),
                (s(!0), n(j, null, X(g.options, (w) => (s(), n(j, null, [
                  w.divider ? (s(), n("div", {
                    class: "select-divider",
                    key: `divider-${w.key || Math.random()}`
                  })) : (s(), n("button", {
                    key: `${g.key}-${String(f(w))}`,
                    class: V(["select-option", {
                      selected: S(w),
                      disabled: w.disabled
                    }]),
                    type: "button",
                    disabled: w.disabled,
                    onClick: te((B) => Q(w), ["stop"])
                  }, [
                    m.value ? (s(), n("span", ul)) : E("", !0),
                    w.icon ? (s(), n("span", dl, [
                      (s(), ge(Ee(w.icon)))
                    ])) : E("", !0),
                    d("span", fl, z(C(w)), 1),
                    w.shortcut ? (s(), n("span", hl, z(w.shortcut), 1)) : E("", !0)
                  ], 10, cl))
                ], 64))), 256))
              ], 64))), 128))
            ])) : (s(), n("div", vl, z(e.noDataText), 1))
          ])) : E("", !0)
        ]),
        _: 1
      })
    ], 2));
  }
}), gl = /* @__PURE__ */ H(pl, [["__scopeId", "data-v-d196aecd"]]), ml = F(gl), yl = { class: "cascader-tree" }, bl = ["disabled", "onClick"], wl = {
  key: 0,
  class: "option-check"
}, $l = { class: "option-label" }, xl = {
  key: 1,
  class: "option-arrow"
}, kl = {
  key: 0,
  class: "cascader-submenu"
}, Cl = {
  key: 0,
  class: "cascader-empty"
}, _l = K({
  name: "CascaderOptionTree"
}), Sl = /* @__PURE__ */ K({
  ..._l,
  props: {
    options: {},
    selectedValues: {},
    multiple: { type: Boolean },
    labelKey: {},
    valueKey: {},
    childrenKey: {}
  },
  emits: ["select"],
  setup(e, { emit: a }) {
    const t = e, l = a, c = _(/* @__PURE__ */ new Set()), i = (v) => String(v[t.labelKey] ?? v.label ?? v[t.valueKey] ?? v.value ?? ""), u = (v) => v[t.valueKey] ?? v.value ?? "", h = (v) => {
      const y = v[t.childrenKey] ?? v.children;
      return Array.isArray(y) && y.length > 0;
    }, m = (v) => v[t.childrenKey] ?? v.children ?? [], b = (v) => {
      const y = u(v);
      return t.selectedValues.includes(y);
    }, k = (v) => {
      const y = u(v);
      return c.value.has(y);
    }, I = (v) => {
      if (v.disabled) return;
      const y = u(v);
      if (h(v)) {
        const C = new Set(c.value);
        C.has(y) ? C.delete(y) : C.add(y), c.value = C;
      } else
        l("select", { option: v, value: y });
    };
    return (v, y) => {
      const C = Le("CascaderOptionTree");
      return s(), n("div", yl, [
        (s(!0), n(j, null, X(e.options, (f) => (s(), n("div", {
          key: String(u(f)),
          class: "cascader-menu-item"
        }, [
          d("button", {
            class: V(["cascader-option", {
              selected: b(f),
              disabled: f.disabled,
              "has-children": h(f),
              "is-expanded": k(f)
            }]),
            type: "button",
            disabled: f.disabled,
            onClick: te((T) => I(f), ["stop"])
          }, [
            e.multiple ? (s(), n("span", wl)) : E("", !0),
            d("span", $l, z(i(f)), 1),
            h(f) ? (s(), n("span", xl)) : E("", !0)
          ], 10, bl),
          h(f) && k(f) ? (s(), n("div", kl, [
            oe(C, {
              options: m(f),
              "selected-values": e.selectedValues,
              multiple: e.multiple,
              "label-key": e.labelKey,
              "value-key": e.valueKey,
              "children-key": e.childrenKey,
              onSelect: y[0] || (y[0] = (T) => v.$emit("select", T))
            }, null, 8, ["options", "selected-values", "multiple", "label-key", "value-key", "children-key"])
          ])) : E("", !0)
        ]))), 128)),
        !e.options || e.options.length === 0 ? (s(), n("div", Cl, " 暂无数据 ")) : E("", !0)
      ]);
    };
  }
}), Il = /* @__PURE__ */ H(Sl, [["__scopeId", "data-v-6616b296"]]), Ml = ["aria-expanded", "aria-disabled"], Tl = { class: "cascader-value" }, Bl = ["aria-label", "onClick"], El = {
  key: 1,
  class: "cascader-single"
}, Ll = {
  key: 2,
  class: "cascader-placeholder"
}, Vl = { class: "cascader-options" }, Nl = /* @__PURE__ */ K({
  name: "CyberCascader",
  __name: "cascader",
  props: {
    modelValue: { default: "" },
    options: { default: () => [] },
    placeholder: { default: "请选择" },
    noDataText: { default: "暂无数据" },
    disabled: { type: Boolean, default: !1 },
    clearable: { type: Boolean, default: !0 },
    multiple: { type: Boolean, default: !1 },
    showAllLevels: { type: Boolean, default: !0 },
    filterable: { type: Boolean, default: !1 },
    size: { default: "default" },
    theme: { default: "neon" },
    labelKey: { default: "label" },
    valueKey: { default: "value" },
    childrenKey: { default: "children" }
  },
  emits: ["update:modelValue", "change", "focus", "blur", "visible-change", "clear"],
  setup(e, { emit: a }) {
    const t = e, l = a, c = _(), i = _(!1), u = _(""), h = _([]), m = L(() => t.multiple ? Array.isArray(t.modelValue) && t.modelValue.length > 0 : t.modelValue !== "" && t.modelValue !== null && t.modelValue !== void 0), b = (o) => {
      if (!t.showAllLevels) {
        const r = k(t.options, o);
        return r ? v(r) : String(o);
      }
      return I(t.options, o).map((r) => v(r)).join(" / ");
    }, k = (o, $) => {
      for (const r of o) {
        if (y(r) === $)
          return r;
        const x = C(r);
        if (x.length) {
          const g = k(x, $);
          if (g) return g;
        }
      }
      return null;
    }, I = (o, $) => {
      for (const r of o) {
        if (y(r) === $)
          return [r];
        const x = C(r);
        if (x.length) {
          const g = I(x, $);
          if (g.length)
            return [r, ...g];
        }
      }
      return [];
    }, v = (o) => String(o[t.labelKey] ?? o.label ?? o[t.valueKey] ?? o.value ?? ""), y = (o) => o[t.valueKey] ?? o.value ?? "", C = (o) => o[t.childrenKey] ?? o.children ?? [], f = (o) => {
      t.disabled || i.value === o || (i.value = o, l("visible-change", o));
    }, T = () => {
      f(!i.value);
    }, S = ({ value: o }) => {
      if (!t.disabled)
        if (t.multiple) {
          const $ = h.value.indexOf(o);
          $ > -1 ? h.value.splice($, 1) : h.value.push(o), l("update:modelValue", [...h.value]), l("change", [...h.value]);
        } else
          u.value = o, l("update:modelValue", o), l("change", o), f(!1);
    }, A = (o) => {
      t.multiple && (h.value = h.value.filter(($) => $ !== o), l("update:modelValue", [...h.value]), l("change", [...h.value]));
    }, Y = () => {
      t.multiple ? (h.value = [], l("update:modelValue", [])) : (u.value = "", l("update:modelValue", "")), l("change", t.multiple ? [] : ""), l("clear");
    }, Q = (o) => {
      t.disabled || l("focus", o);
    }, p = (o) => {
      l("blur", o);
    }, N = (o) => {
      t.disabled || ((o.key === "Enter" || o.key === " ") && (i.value || (o.preventDefault(), f(!0))), o.key === "Escape" && f(!1));
    }, M = (o) => {
      c.value?.contains(o.target) || f(!1);
    }, O = L(() => ({
      width: `${c.value?.offsetWidth || 260}px`
    }));
    return Z(() => t.modelValue, (o) => {
      t.multiple ? h.value = Array.isArray(o) ? [...o] : [] : u.value = o;
    }, { immediate: !0 }), J(() => {
      document.addEventListener("click", M);
    }), $e(() => {
      document.removeEventListener("click", M);
    }), (o, $) => (s(), n("div", {
      ref_key: "cascaderRef",
      ref: c,
      class: V(["cp-cyber-cascader", [
        `theme-${e.theme}`,
        `size-${e.size}`,
        {
          "is-open": i.value,
          "is-disabled": e.disabled,
          "is-multiple": e.multiple
        }
      ]])
    }, [
      d("div", {
        class: "cascader-control",
        tabindex: "0",
        role: "combobox",
        "aria-expanded": i.value,
        "aria-disabled": e.disabled,
        onClick: T,
        onFocus: Q,
        onBlur: p,
        onKeydown: N
      }, [
        d("div", Tl, [
          e.multiple && h.value.length ? (s(!0), n(j, { key: 0 }, X(h.value, (r, x) => (s(), n("span", {
            key: x,
            class: "cascader-tag"
          }, [
            ue(z(b(r)) + " ", 1),
            d("button", {
              class: "tag-close",
              type: "button",
              "aria-label": `移除 ${b(r)}`,
              onClick: te((g) => A(r), ["stop"])
            }, null, 8, Bl)
          ]))), 128)) : !e.multiple && u.value ? (s(), n("span", El, z(b(u.value)), 1)) : (s(), n("span", Ll, z(e.placeholder), 1))
        ]),
        e.clearable && m.value && !e.disabled ? (s(), n("button", {
          key: 0,
          class: "clear-button",
          type: "button",
          "aria-label": "清空",
          onClick: te(Y, ["stop"])
        })) : E("", !0),
        $[0] || ($[0] = d("span", { class: "cascader-arrow" }, null, -1))
      ], 40, Ml),
      oe(xe, { name: "cascader-dropdown" }, {
        default: ve(() => [
          i.value ? (s(), n("div", {
            key: 0,
            class: "cascader-dropdown",
            style: P(O.value)
          }, [
            d("div", Vl, [
              oe(Il, {
                options: t.options,
                "selected-values": e.multiple ? h.value : [u.value],
                multiple: e.multiple,
                "label-key": e.labelKey,
                "value-key": e.valueKey,
                "children-key": e.childrenKey,
                onSelect: S
              }, null, 8, ["options", "selected-values", "multiple", "label-key", "value-key", "children-key"])
            ])
          ], 4)) : E("", !0)
        ]),
        _: 1
      })
    ], 2));
  }
}), Ol = /* @__PURE__ */ H(Nl, [["__scopeId", "data-v-fade87c5"]]), zl = F(Ol), Al = {
  key: 0,
  class: "tree-connectors",
  "aria-hidden": "true"
}, Dl = ["onClick"], Rl = ["aria-expanded", "aria-label", "onClick"], Pl = {
  key: 1,
  class: "node-expand-placeholder"
}, Kl = { class: "node-label" }, Fl = { class: "label-text" }, Hl = ["title"], Gl = { class: "status-text" }, Wl = {
  key: 0,
  class: "tree-empty"
}, Yl = {
  key: 1,
  class: "tree-scanline"
}, ce = 14, ql = /* @__PURE__ */ K({
  name: "CyberTree",
  __name: "tree",
  props: {
    data: { default: () => [] },
    theme: { default: "neon" },
    effect: { default: "scan" },
    showConnectors: { type: Boolean, default: !0 },
    showStatus: { type: Boolean, default: !0 },
    showScanline: { type: Boolean, default: !0 },
    indent: { default: 30 },
    defaultExpandAll: { type: Boolean, default: !1 },
    expandOnClick: { type: Boolean, default: !0 },
    multiple: { type: Boolean, default: !1 }
  },
  emits: ["node-click", "node-expand", "node-collapse", "select-change"],
  setup(e, { expose: a, emit: t }) {
    const l = e, c = t, i = _([]), u = _([]), h = _(0), m = L(() => {
      const p = [], N = (M, O = 0, o) => {
        M.forEach(($, r) => {
          $._level = O, $._parent = o, $._expanded = $.expanded ?? (l.defaultExpandAll || O === 0), $._selected = $.selected ?? !1, $._isLastChild = r === M.length - 1, p.push($), $._expanded && $.children && $.children.length > 0 && N($.children, O + 1, $);
        });
      };
      return N(i.value), p;
    }), b = () => {
      const p = (N, M = 0) => {
        const O = {
          ...N,
          _expanded: N.expanded ?? (l.defaultExpandAll || M === 0),
          _selected: N.selected ?? !1,
          _level: M,
          _parent: void 0,
          _isLastChild: !1
        };
        return N.children && N.children.length > 0 && (O.children = N.children.map((o) => p(o, M + 1))), O;
      };
      i.value = l.data.map((N) => p(N)), u.value = m.value.filter((N) => N._selected);
    }, k = (p) => !p.children || p.children.length === 0, I = (p) => p._level ?? 0, v = (p) => I(p) * l.indent, y = (p) => {
      const N = I(p);
      return Array.from({ length: Math.max(N - 1, 0) }, (M, O) => O);
    }, C = (p, N) => {
      let M = p, O = I(p);
      for (; M && O > N; )
        M = M._parent, O--;
      return M?._isLastChild ?? !1;
    }, f = (p) => {
      p._expanded = !p._expanded, p.expanded = p._expanded, p._expanded ? c("node-expand", p) : c("node-collapse", p), Q();
    }, T = (p) => {
      l.multiple ? (p._selected = !p._selected, p.selected = p._selected) : p._selected ? (p._selected = !1, p.selected = !1) : (u.value.forEach((N) => {
        N._selected = !1, N.selected = !1;
      }), p._selected = !0, p.selected = !0), S(), c("select-change", u.value), c("node-click", p), l.expandOnClick && !k(p) && f(p);
    }, S = () => {
      u.value = m.value.filter((p) => p._selected);
    }, A = (p) => p.icon ? p.icon : k(p) ? "icon-file" : p._expanded ? "icon-folder-open" : "icon-folder", Y = (p) => p ? {
      online: "Online",
      offline: "Offline",
      warning: "Warning",
      error: "Error"
    }[p] : "", Q = () => {
      h.value++;
    };
    return Z(() => l.data, () => {
      b();
    }, { deep: !0, immediate: !0 }), a({
      getSelectedNodes: () => u.value,
      clearSelection: () => {
        u.value.forEach((p) => {
          p._selected = !1, p.selected = !1;
        }), u.value = [], Q();
      }
    }), (p, N) => (s(), n("div", {
      class: V(["cp-cyber-tree cyber-tree", [`theme-${e.theme}`, `effect-${e.effect}`]])
    }, [
      (s(!0), n(j, null, X(m.value, (M) => (s(), n("div", {
        key: `${M.id}-${M._expanded}-${M._selected}-${h.value}`,
        class: V(["tree-node", {
          expanded: M._expanded,
          leaf: k(M),
          "last-child": M._isLastChild
        }]),
        style: P({ paddingLeft: `${v(M)}px` })
      }, [
        e.showConnectors && I(M) > 0 ? (s(), n("div", Al, [
          (s(!0), n(j, null, X(y(M), (O) => (s(), n("span", {
            key: O,
            class: V(["ancestor-line", { hidden: C(M, O) }]),
            style: P({ left: `${O * e.indent + ce}px` })
          }, null, 6))), 128)),
          d("span", {
            class: V(["parent-line", { "is-last": M._isLastChild }]),
            style: P({ left: `${(I(M) - 1) * e.indent + ce}px` })
          }, null, 6),
          d("span", {
            class: "horizontal-line",
            style: P({
              left: `${(I(M) - 1) * e.indent + ce}px`,
              width: `${e.indent - ce + 20}px`
            })
          }, null, 4),
          d("span", {
            class: "connector-joint",
            style: P({ left: `${(I(M) - 1) * e.indent + ce}px` })
          }, null, 4)
        ])) : E("", !0),
        d("div", {
          class: "node-content-wrapper",
          onClick: te((O) => T(M), ["stop"])
        }, [
          d("div", {
            class: V(["node-content", { selected: M._selected }])
          }, [
            k(M) ? (s(), n("span", Pl)) : (s(), n("button", {
              key: 0,
              class: "node-expand-icon",
              type: "button",
              "aria-expanded": M._expanded,
              "aria-label": M._expanded ? "Collapse node" : "Expand node",
              onClick: te((O) => f(M), ["stop"])
            }, [
              d("span", {
                class: V(["expand-arrow", { rotated: M._expanded }])
              }, null, 2)
            ], 8, Rl)),
            d("span", {
              class: V(["node-icon", A(M)])
            }, [...N[0] || (N[0] = [
              d("span", { class: "icon-core" }, null, -1)
            ])], 2),
            d("span", Kl, [
              d("span", Fl, z(M.label), 1)
            ]),
            e.showStatus && M.status ? (s(), n("span", {
              key: 2,
              class: "node-status",
              title: Y(M.status)
            }, [
              d("span", {
                class: V(["status-indicator", `status-${M.status}`])
              }, null, 2),
              d("span", Gl, z(M.status), 1)
            ], 8, Hl)) : E("", !0)
          ], 2)
        ], 8, Dl)
      ], 6))), 128)),
      m.value.length === 0 ? (s(), n("div", Wl, " No data ")) : E("", !0),
      e.showScanline && e.effect !== "static" ? (s(), n("div", Yl)) : E("", !0)
    ], 2));
  }
}), jl = /* @__PURE__ */ H(ql, [["__scopeId", "data-v-f9876722"]]), Xl = F(jl), Ul = {
  key: 0,
  class: "cp-divider__line cp-divider__line--left"
}, Ql = {
  key: 1,
  class: "cp-divider__content"
}, Zl = {
  key: 2,
  class: "cp-divider__line cp-divider__line--right"
}, Jl = /* @__PURE__ */ K({
  name: "CyberDivider",
  __name: "divider",
  props: {
    direction: { default: "horizontal" },
    type: { default: "primary" },
    content: { default: "" },
    showLeftLine: { type: Boolean, default: !0 },
    showRightLine: { type: Boolean, default: !0 },
    size: { default: "" }
  },
  setup(e) {
    const a = e, t = L(() => {
      const l = {};
      return a.size && (a.direction === "horizontal" ? l.width = a.size : l.height = a.size), l;
    });
    return (l, c) => (s(), n("div", {
      class: V(["cp-divider", [`cp-divider--${e.direction}`, `cp-divider--${e.type}`]]),
      style: P(t.value)
    }, [
      e.showLeftLine ? (s(), n("div", Ul)) : E("", !0),
      l.$slots.default || e.content ? (s(), n("div", Ql, [
        U(l.$slots, "default", {}, () => [
          ue(z(e.content), 1)
        ], !0)
      ])) : E("", !0),
      e.showRightLine ? (s(), n("div", Zl)) : E("", !0)
    ], 6));
  }
}), es = /* @__PURE__ */ H(Jl, [["__scopeId", "data-v-e3e2783b"]]), ts = F(es), as = { class: "input-wrapper" }, ls = ["type", "value", "placeholder", "disabled", "readonly", "maxlength", "autocomplete"], ss = {
  key: 0,
  class: "input-glitch"
}, ns = {
  key: 1,
  class: "input-scanline"
}, os = /* @__PURE__ */ K({
  name: "CyberInput",
  __name: "input",
  props: {
    modelValue: {
      type: [String, Number],
      default: ""
    },
    type: {
      type: String,
      default: "text",
      validator: (e) => ["text", "password", "number", "email", "tel", "url"].indexOf(e) !== -1
    },
    placeholder: {
      type: String,
      default: "请输入..."
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    readonly: {
      type: Boolean,
      default: !1
    },
    maxlength: {
      type: [String, Number],
      default: void 0
    },
    autocomplete: {
      type: String,
      default: "off"
    },
    size: {
      type: String,
      default: "default",
      validator: (e) => ["large", "default", "small"].indexOf(e) !== -1
    },
    theme: {
      type: String,
      default: "primary",
      validator: (e) => ["primary", "success", "warning", "danger", "info"].indexOf(e) !== -1
    },
    glitchEffect: {
      type: Boolean,
      default: !0
    },
    scanlineEffect: {
      type: Boolean,
      default: !0
    }
  },
  emits: [
    "update:modelValue",
    "input",
    "change",
    "focus",
    "blur",
    "keyup",
    "keydown"
  ],
  setup(e, { expose: a, emit: t }) {
    const l = e, c = t, i = _(null), u = L(() => {
      switch (l.size) {
        case "large":
          return "large-size";
        case "default":
          return "default-size";
        case "small":
          return "small-size";
        default:
          return "default-size";
      }
    }), h = L(() => {
      switch (l.theme) {
        case "primary":
          return "primary-theme";
        case "success":
          return "success-theme";
        case "warning":
          return "warning-theme";
        case "danger":
          return "danger-theme";
        case "info":
          return "info-theme";
        default:
          return "primary-theme";
      }
    }), m = (y) => {
      const C = y.target;
      c("update:modelValue", C.value), c("input", C.value);
    }, b = (y) => {
      c("focus", y);
    }, k = (y) => {
      c("blur", y);
    }, I = (y) => {
      c("keyup", y);
    }, v = (y) => {
      c("keydown", y);
    };
    return a({
      focus: () => {
        i.value?.focus();
      },
      blur: () => {
        i.value?.blur();
      },
      select: () => {
        i.value?.select();
      }
    }), (y, C) => (s(), n("div", {
      class: V(["cp-input", u.value, h.value])
    }, [
      d("div", as, [
        d("input", {
          ref_key: "inputRef",
          ref: i,
          type: e.type,
          value: e.modelValue,
          placeholder: e.placeholder,
          disabled: e.disabled,
          readonly: e.readonly,
          maxlength: e.maxlength,
          autocomplete: e.autocomplete,
          onInput: m,
          onFocus: b,
          onBlur: k,
          onKeyup: I,
          onKeydown: v,
          class: "cyber-input"
        }, null, 40, ls),
        C[0] || (C[0] = d("div", { class: "input-border" }, null, -1)),
        e.glitchEffect ? (s(), n("div", ss)) : E("", !0),
        e.scanlineEffect ? (s(), n("div", ns)) : E("", !0)
      ])
    ], 2));
  }
}), rs = /* @__PURE__ */ H(os, [["__scopeId", "data-v-a6c7ea98"]]), is = F(rs), cs = [
  De,
  Xe,
  et,
  ct,
  wt,
  Et,
  At,
  qt,
  na,
  fa,
  $a,
  pa,
  Ca,
  Ma,
  Ea,
  Kt,
  za,
  _t,
  Ha,
  qa,
  ml,
  zl,
  Xl,
  Za,
  ts,
  is
], us = Ve([...cs]);
console.log(
  "%c %s",
  "border: 1px solid #97E3FE;border-radius: 3px;padding: 2px 5px;color: white;font-weight:bolder;background: linear-gradient(to right, #fF717F,#CC54D1,#4EAFFA,#3DE1C3, #F7DA66)",
  "CyberPunk-UI"
);
const hs = us.install;
export {
  us as default,
  hs as install,
  Ve as makeInstaller
};
