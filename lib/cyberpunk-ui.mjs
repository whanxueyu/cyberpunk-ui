import { defineComponent as F, useSlots as oe, computed as L, openBlock as s, createElementBlock as o, normalizeClass as N, createElementVNode as c, unref as ue, renderSlot as X, toDisplayString as V, ref as S, onUnmounted as re, createBlock as me, Teleport as ye, createVNode as he, TransitionGroup as be, withCtx as pe, Fragment as j, renderList as U, createCommentVNode as B, normalizeStyle as A, watch as J, nextTick as de, onMounted as ee, withDirectives as ge, createTextVNode as fe, vShow as we, watchEffect as _e, useCssVars as ve, getCurrentInstance as Ce, createStaticVNode as Se, reactive as Ie, onBeforeUnmount as Me, withModifiers as se, Transition as Te, vModelText as Ee } from "vue";
const Ne = (e = []) => ({
  install: (t) => {
    e.forEach((n) => t.use(n));
  }
}), H = (e, a) => (e.install = (t) => {
  for (const n of [e, ...Object.values({})])
    t.component(n.name, n);
}, e), Be = ["data-content"], Le = { key: 1 }, ze = /* @__PURE__ */ F({
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
    const t = oe(), n = e, i = L(() => {
      switch (n.type) {
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
    }), r = L(() => {
      switch (n.size) {
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
    return (u, p) => (s(), o("div", {
      class: N(["cp-button", r.value])
    }, [
      c("div", {
        class: N(["button", i.value]),
        "data-content": n.content
      }, [
        ue(t) ? X(u.$slots, "default", { key: 0 }, void 0, !0) : (s(), o("span", Le, V(n.content), 1))
      ], 10, Be)
    ], 2));
  }
}), W = (e, a) => {
  const t = e.__vccOpts || e;
  for (const [n, i] of a)
    t[n] = i;
  return t;
}, Oe = /* @__PURE__ */ W(ze, [["__scopeId", "data-v-6fea0e49"]]), Re = H(Oe), Ve = { class: "notification-content" }, De = {
  key: 0,
  class: "notification-icon"
}, Ae = { class: "notification-body" }, Pe = {
  key: 0,
  class: "notification-title"
}, Fe = { class: "notification-message" }, He = {
  key: 1,
  class: "notification-actions"
}, Ge = ["onClick"], We = ["onClick"], Ye = /* @__PURE__ */ F({
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
    const n = e, i = t, r = S([]), u = S(!1);
    let p = 0;
    const v = (m) => {
      const C = ++p, f = m.actions && m.actions.length > 0, E = {
        id: C,
        title: m.title || "",
        message: m.message,
        type: m.type || "info",
        duration: m.duration !== void 0 ? m.duration : f ? 0 : n.duration,
        showClose: m.showClose !== void 0 ? m.showClose : !0,
        showIcon: m.showIcon !== void 0 ? m.showIcon : !0,
        actions: m.actions || [],
        effect: m.effect || n.effect,
        onClose: m.onClose || (() => {
        })
      };
      if (r.value.push(E), u.value = !0, E.duration > 0 && setTimeout(() => {
        g(C);
      }, E.duration), r.value.length > n.maxCount) {
        const $ = r.value[0];
        g($.id);
      }
      return C;
    }, g = (m) => {
      const C = r.value.findIndex((f) => f.id === m);
      if (C !== -1) {
        const f = r.value[C];
        f.onClose && f.onClose(), r.value.splice(C, 1), i("close", m);
      }
    }, _ = (m, C) => {
      C.callback && C.callback(), g(m.id);
    }, M = () => {
      r.value.length === 0 && (u.value = !1);
    }, w = () => {
      r.value.forEach((m) => {
        m.onClose && m.onClose();
      }), r.value = [], u.value = !1;
    };
    return a({
      // 创建不同类型的通知
      info: (m) => v({ ...m, type: "info" }),
      success: (m) => v({ ...m, type: "success" }),
      warning: (m) => v({ ...m, type: "warning" }),
      error: (m) => v({ ...m, type: "error" }),
      // 通用创建方法
      create: v,
      // 关闭方法
      close: g,
      // 清除所有
      clearAll: w
    }), re(() => {
      w();
    }), (m, C) => (s(), me(ye, { to: "body" }, [
      u.value ? (s(), o("div", {
        key: 0,
        class: N(["cp-cyber-notification-container", `position-${e.position}`])
      }, [
        he(be, {
          name: "notification",
          tag: "div",
          onAfterLeave: M
        }, {
          default: pe(() => [
            (s(!0), o(j, null, U(r.value, (f) => (s(), o("div", {
              key: f.id,
              class: N(["cp-cyber-notification", `type-${f.type}`, `effect-${f.effect}`])
            }, [
              c("div", Ve, [
                f.showIcon ? (s(), o("div", De, [...C[0] || (C[0] = [
                  c("div", { class: "icon-circle" }, null, -1),
                  c("div", { class: "icon-symbol" }, null, -1)
                ])])) : B("", !0),
                c("div", Ae, [
                  f.title ? (s(), o("div", Pe, V(f.title), 1)) : B("", !0),
                  c("div", Fe, V(f.message), 1),
                  f.actions && f.actions.length ? (s(), o("div", He, [
                    (s(!0), o(j, null, U(f.actions, (E, $) => (s(), o("button", {
                      key: $,
                      class: "action-button",
                      onClick: (P) => _(f, E)
                    }, V(E.text), 9, Ge))), 128))
                  ])) : B("", !0)
                ]),
                f.showClose ? (s(), o("div", {
                  key: 1,
                  class: "notification-close",
                  onClick: (E) => g(f.id)
                }, [...C[1] || (C[1] = [
                  c("span", { class: "close-icon" }, "×", -1)
                ])], 8, We)) : B("", !0)
              ]),
              f.duration > 0 ? (s(), o("div", {
                key: 0,
                class: "notification-progress",
                style: A({ animationDuration: `${f.duration}ms` })
              }, null, 4)) : B("", !0),
              C[2] || (C[2] = c("div", { class: "notification-glitch-effect" }, null, -1)),
              C[3] || (C[3] = c("div", { class: "notification-hologram-effect" }, null, -1))
            ], 2))), 128))
          ]),
          _: 1
        })
      ], 2)) : B("", !0)
    ]));
  }
}), Ke = /* @__PURE__ */ W(Ye, [["__scopeId", "data-v-5b833339"]]), qe = H(Ke), je = { class: "tooltip-inner" }, Xe = { class: "tooltip-content" }, Ue = /* @__PURE__ */ F({
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
    const t = e, n = a, i = S(!1), r = S(null), u = S(null), p = S(null), v = S(t.position), g = S({}), _ = () => {
      if (!r.value || !u.value || t.position !== "auto")
        return t.position;
      const b = r.value.getBoundingClientRect(), l = u.value.getBoundingClientRect(), h = window.innerWidth, x = window.innerHeight, y = b.top, k = h - b.right, I = x - b.bottom, D = b.left, q = [
        { position: "top", space: y },
        { position: "right", space: k },
        { position: "bottom", space: I },
        { position: "left", space: D }
      ];
      q.sort((Y, te) => te.space - Y.space);
      const G = l.height || 50, R = l.width || 150;
      for (const Y of q)
        if (Y.position === "top" && Y.space >= G + 10 || Y.position === "bottom" && Y.space >= G + 10 || Y.position === "left" && Y.space >= R + 10 || Y.position === "right" && Y.space >= R + 10)
          return Y.position;
      return "top";
    }, M = L(() => typeof t.width == "number" ? `${t.width}px` : t.width), w = () => {
      p.value && clearTimeout(p.value), p.value = window.setTimeout(() => {
        i.value = !0, de(() => {
          t.position === "auto" ? v.value = _() : v.value = t.position, C(), n("show");
        });
      }, t.delay);
    }, m = () => {
      p.value && clearTimeout(p.value), p.value = window.setTimeout(() => {
        i.value = !1, n("hide");
      }, 100);
    }, C = () => {
      if (!r.value || !u.value) return;
      const b = r.value.getBoundingClientRect(), l = u.value.getBoundingClientRect(), h = window.pageYOffset || document.documentElement.scrollTop, x = window.pageXOffset || document.documentElement.scrollLeft;
      let y = 0, k = 0;
      const I = 10;
      switch (v.value) {
        case "top":
          y = b.left + b.width / 2 - l.width / 2 + x, k = b.top - l.height - I + h;
          break;
        case "right":
          y = b.right + I + x, k = b.top + b.height / 2 - l.height / 2 + h;
          break;
        case "bottom":
          y = b.left + b.width / 2 - l.width / 2 + x, k = b.bottom + I + h;
          break;
        case "left":
          y = b.left - l.width - I + x, k = b.top + b.height / 2 - l.height / 2 + h;
          break;
      }
      (() => {
        const q = window.innerWidth, G = window.innerHeight, R = 10;
        y < R ? y = R : y + l.width > q - R && (y = q - l.width - R), k < R ? k = R : k + l.height > G - R && (k = G - l.height - R);
      })(), g.value = {
        left: `${y}px`,
        top: `${k}px`,
        width: M.value
      };
    }, f = () => {
      t.trigger === "hover" && w();
    }, E = () => {
      t.trigger === "hover" && m();
    }, $ = () => {
      t.trigger === "click" && (i.value ? m() : w());
    }, P = () => {
      t.trigger === "focus" && w();
    }, K = () => {
      t.trigger === "focus" && m();
    }, Q = () => {
      i.value && (t.position === "auto" && (v.value = _()), C());
    }, d = () => {
      i.value && (O && clearTimeout(O), O = setTimeout(() => {
        C();
      }, 16));
    };
    J(
      () => t.position,
      (b) => {
        i.value && de(() => {
          b === "auto" ? v.value = _() : v.value = b, C();
        });
      }
    );
    let z = [];
    const T = (b) => {
      let l = [], h = b.parentElement;
      for (; h; ) {
        const x = window.getComputedStyle(h);
        /(auto|scroll)/.test(x.overflow + x.overflowY + x.overflowX) && l.push(h), h = h.parentElement;
      }
      return l.push(document.documentElement), l;
    };
    ee(() => {
      if (window.addEventListener("resize", Q), window.addEventListener("scroll", d, { passive: !0 }), document.addEventListener("click", (b) => {
        if (i.value && t.trigger === "click") {
          const l = b.target;
          u.value && !u.value.contains(l) && r.value && !r.value.contains(l) && m();
        }
      }), r.value) {
        z = T(r.value);
        const b = () => {
          O && clearTimeout(O), O = setTimeout(() => {
            i.value && C();
          }, 16);
        };
        z.forEach((l) => {
          l.addEventListener("scroll", b);
        });
      }
    });
    let O = null;
    return re(() => {
      window.removeEventListener("resize", Q), window.removeEventListener("scroll", d), z.forEach((b) => {
        b.removeEventListener("scroll", d);
      }), p.value && clearTimeout(p.value), O && clearTimeout(O);
    }), (b, l) => (s(), o("div", null, [
      c("div", {
        ref_key: "triggerRef",
        ref: r,
        class: "tooltip-trigger",
        onMouseenter: f,
        onMouseleave: E,
        onClick: $,
        onFocus: P,
        onBlur: K
      }, [
        X(b.$slots, "default", {}, void 0, !0)
      ], 544),
      (s(), me(ye, { to: "body" }, [
        ge(c("div", {
          ref_key: "tooltipRef",
          ref: u,
          class: N([
            "cp-cyber-tooltip",
            `theme-${e.theme}`,
            `effect-${e.effect}`,
            `position-${v.value}`
          ]),
          style: A(g.value)
        }, [
          l[2] || (l[2] = c("div", { class: "tooltip-arrow" }, null, -1)),
          c("div", je, [
            c("div", Xe, [
              X(b.$slots, "content", {}, () => [
                fe(V(e.content), 1)
              ], !0)
            ]),
            l[0] || (l[0] = c("div", { class: "tooltip-scanline" }, null, -1)),
            l[1] || (l[1] = c("div", { class: "tooltip-glitch" }, null, -1))
          ])
        ], 6), [
          [we, i.value]
        ])
      ]))
    ]));
  }
}), Qe = /* @__PURE__ */ W(Ue, [["__scopeId", "data-v-3de3033d"]]), Ze = H(Qe), Je = { class: "progress-track" }, et = {
  key: 0,
  class: "percentage-inside"
}, tt = { class: "tick-marks" }, at = {
  key: 0,
  class: "percentage-outside"
}, lt = {
  key: 1,
  class: "status-indicator"
}, nt = { class: "status-text" }, st = /* @__PURE__ */ F({
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
    const a = e, t = L(() => Math.min(100, Math.max(0, a.percentage)).toFixed(0)), n = L(() => {
      const i = Number(t.value);
      return i < 30 ? "INITIALIZING" : i < 60 ? "PROCESSING" : i < 90 ? "LOADING" : i < 100 ? "ALMOST" : "COMPLETE";
    });
    return (i, r) => (s(), o("div", {
      class: N(["cyber-progress", [`theme-${e.theme}`, { animated: e.animated }]])
    }, [
      c("div", Je, [
        r[0] || (r[0] = c("div", { class: "track-grid" }, null, -1)),
        c("div", {
          class: "progress-bar",
          style: A({ width: e.percentage + "%" })
        }, [
          e.showPercentage && e.percentagePosition === "inside" ? (s(), o("span", et, V(t.value) + "% ", 1)) : B("", !0)
        ], 4),
        c("div", tt, [
          (s(), o(j, null, U(10, (u) => c("span", {
            key: u,
            class: N(["tick", { active: u * 10 <= e.percentage }])
          }, null, 2)), 64))
        ])
      ]),
      e.showPercentage && e.percentagePosition === "outside" ? (s(), o("span", at, V(t.value) + "% ", 1)) : B("", !0),
      e.showStatus ? (s(), o("div", lt, [
        r[1] || (r[1] = c("div", { class: "indicator-dot" }, null, -1)),
        c("span", nt, V(n.value), 1)
      ])) : B("", !0)
    ], 2));
  }
}), ot = /* @__PURE__ */ W(st, [["__scopeId", "data-v-44363fb0"]]), rt = H(ot), it = {
  key: 0,
  class: "prefix"
}, ct = { class: "counter-container" }, ut = {
  key: 0,
  class: "separator"
}, dt = { class: "digit-top" }, ft = { class: "digit-bottom" }, vt = { class: "digit-top flip-top" }, ht = { class: "digit-bottom flip-bottom" }, pt = {
  key: 1,
  class: "suffix"
}, gt = /* @__PURE__ */ F({
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
    const a = e, t = S(Number(a.from)), n = S(Number(a.value)), i = S(null), r = S(null), u = S(""), p = (f) => {
      const E = Math.pow(10, a.decimal);
      let P = (Math.round(f * E) / E).toFixed(a.decimal);
      if (a.separator) {
        const K = P.split(".");
        K[0] = K[0].replace(/\B(?=(\d{3})+(?!\d))/g, a.separator), P = K.join(".");
      }
      return P;
    }, v = L(() => p(t.value)), g = L(() => v.value.split("")), _ = (f) => f === a.separator || f === ".", M = (f) => !u.value || f >= u.value.length ? !1 : u.value[f] !== g.value[f] && !_(g.value[f]), w = (f) => {
      i.value === null && (i.value = f);
      const E = f - i.value, $ = Math.min(E / a.duration, 1), P = Number(a.from), K = Number(a.to !== null ? a.to : n.value), Q = P + (K - P) * m($);
      t.value = Q, $ < 1 ? r.value = requestAnimationFrame(w) : (t.value = K, i.value = null);
    }, m = (f) => 1 - Math.pow(1 - f, 4), C = () => {
      u.value = v.value, r.value !== null && cancelAnimationFrame(r.value), i.value = null, r.value = requestAnimationFrame(w);
    };
    return J(() => a.value, (f) => {
      n.value = Number(f), C();
    }), J(() => a.to, (f) => {
      f !== null && (n.value = Number(f), C());
    }), ee(() => {
      Number(a.from) !== Number(a.value) && C();
    }), re(() => {
      r.value !== null && cancelAnimationFrame(r.value);
    }), (f, E) => (s(), o("div", {
      class: N(["cp-digital-counter", `theme-${e.theme}`])
    }, [
      e.prefix ? (s(), o("span", it, V(e.prefix), 1)) : B("", !0),
      c("div", ct, [
        (s(!0), o(j, null, U(g.value, ($, P) => (s(), o("div", {
          key: P,
          class: "digit-container"
        }, [
          _($) ? (s(), o("div", ut, V($), 1)) : (s(), o("div", {
            key: 1,
            class: N(["digit-flipper", { animate: M(P) }])
          }, [
            c("div", dt, V($), 1),
            c("div", ft, V($), 1),
            c("div", vt, V($), 1),
            c("div", ht, V($), 1)
          ], 2))
        ]))), 128))
      ]),
      e.suffix ? (s(), o("span", pt, V(e.suffix), 1)) : B("", !0)
    ], 2));
  }
}), mt = /* @__PURE__ */ W(gt, [["__scopeId", "data-v-99c23541"]]), yt = H(mt), bt = {
  class: "cp-full-page",
  id: "page-scroll"
}, wt = ["onClick"], xt = /* @__PURE__ */ F({
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
    const t = e, n = a, i = S();
    _e(() => {
      i.value?.style && (i.value.style.transform = u.value);
    });
    const r = L(() => {
      p.value = !0;
      let d = 0;
      return document.getElementById("page-scroll")?.clientHeight ? d = document.getElementById("page-scroll")?.clientHeight ?? 0 : d = window.innerHeight, d;
    }), u = L(() => `translateY(-${$.value * r.value}px)`), p = S(!1), v = S(!0);
    function g(d) {
      d.preventDefault(), d.stopPropagation(), p.value = !1, v.value && (v.value = !1, E(d), setTimeout(() => {
        v.value = !0;
      }, 500));
    }
    const _ = S(0), M = S(0), w = S(0);
    function m(d) {
      _.value = d.touches[0].pageY || d.changedTouches[0].pageY;
    }
    function C(d) {
      d.preventDefault(), p.value = !1, M.value = d.changedTouches[0].pageY || d.touches[0].pageY, w.value = M.value - _.value, Math.abs(w.value) >= 60 ? ($.value < t.items.length - 1 && w.value < 0 && $.value++, $.value > 0 && w.value > 0 && $.value--) : (console.log("else", -$.value * r.value), i.value.style.transform = `translateY(-${$.value * r.value}px)`);
    }
    function f(d) {
      p.value = !0, d.preventDefault(), w.value = (d.changedTouches[0].pageY || d.touches[0].pageY) - _.value, !($.value === t.items.length - 1 && w.value < 0 || $.value === 0 && w.value > 0) && (console.log("else", -$.value * r.value + w.value * -1), i.value.style.transform = `translateY(-${$.value * r.value + w.value * -1}px)`);
    }
    function E(d) {
      d.wheelDelta < 0 ? (P(), n("change", { from: t.items[$.value - 1], to: t.items[$.value], type: "next" })) : (K(), n("change", { from: t.items[$.value + 1], to: t.items[$.value], type: "last" }));
    }
    const $ = S(0);
    function P() {
      $.value < t.items.length - 1 && ($.value++, n("toNext", $.value));
    }
    function K() {
      ($.value > 1 || $.value === 1) && ($.value--, n("toLast", $.value));
    }
    function Q(d) {
      p.value = !1, $.value = d;
    }
    return (d, z) => (s(), o("div", bt, [
      c("div", {
        ref_key: "element",
        ref: i,
        class: N([{ activeTranstion: p.value }, "inner-box"]),
        onMousewheel: g,
        onTouchstart: m,
        onTouchend: C,
        onTouchmove: f
      }, [
        X(d.$slots, "default", {}, void 0, !0)
      ], 34),
      c("div", {
        class: N(["cp-full-dot", t.position])
      }, [
        (s(!0), o(j, null, U(t.items, (T, O) => (s(), o("div", {
          onClick: (b) => Q(O),
          class: "cp-full-dot-item"
        }, [
          c("div", {
            class: N(["cp-full-dot-item-bg", { active: O === $.value }])
          }, null, 2),
          t.showTitle ? ge((s(), o("div", {
            key: 0,
            class: "show-dec"
          }, V(T.title), 513)), [
            [we, O === $.value]
          ]) : B("", !0)
        ], 8, wt))), 256))
      ], 2)
    ]));
  }
}), $t = /* @__PURE__ */ W(xt, [["__scopeId", "data-v-ee83c807"]]), kt = H($t), _t = ["src", "alt"], Ct = {
  key: 1,
  class: "loading-placeholder"
}, St = {
  key: 2,
  class: "error-placeholder"
}, It = /* @__PURE__ */ F({
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
    const t = e, n = a, i = S(null), r = S(null), u = S(null), p = S(!1), v = S(!1), g = S(!1), _ = S(null), M = S(null), w = L(() => t.intensity / 10), m = () => {
      p.value = !0, v.value = !1, setTimeout(() => {
        f(), t.triggerMode === "auto" ? T() : t.triggerMode === "random" && O();
      }, 0);
    }, C = () => {
      v.value = !0, p.value = !1, console.error("Failed to load image:", t.src);
    }, f = () => {
      if (!u.value || !r.value) return;
      const y = r.value, k = u.value, I = k.getContext("2d");
      if (I) {
        k.width = y.naturalWidth, k.height = y.naturalHeight;
        try {
          I.drawImage(y, 0, 0), M.value = I.getImageData(0, 0, k.width, k.height);
        } catch (D) {
          console.error("Failed to get image data (possibly CORS issue):", D), v.value = !0;
        }
      }
    }, E = (y, k) => {
      if (!M.value) return;
      const I = y.canvas, D = y.getImageData(0, 0, I.width, I.height), q = D.data, G = M.value.data, R = Math.floor(20 * k), Y = Math.floor(Math.random() * R), te = Math.floor(Math.random() * R);
      for (let ae = 0; ae < I.height; ae++)
        for (let le = 0; le < I.width; le++) {
          const Z = (ae * I.width + le) * 4, ne = Math.min(Math.max(le + Y, 0), I.width - 1), xe = (Math.min(Math.max(ae + te, 0), I.height - 1) * I.width + ne) * 4;
          q[Z] = G[xe];
          const $e = Math.min(Math.max(le - Y, 0), I.width - 1), ke = (Math.min(Math.max(ae - te, 0), I.height - 1) * I.width + $e) * 4;
          q[Z + 2] = G[ke + 2], q[Z + 1] = G[Z + 1];
        }
      y.putImageData(D, 0, 0);
    }, $ = (y, k) => {
      if (!M.value) return;
      const I = y.canvas;
      y.putImageData(M.value, 0, 0);
      const D = Math.max(1, Math.floor(5 / k)), q = 0.5 + k * 0.1;
      for (let G = 0; G < I.height; G += D * 2)
        y.fillStyle = `rgba(255, 255, 255, ${q})`, y.fillRect(0, G, I.width, D);
    }, P = (y, k) => {
      if (!M.value) return;
      const I = y.canvas;
      y.putImageData(M.value, 0, 0);
      const D = Math.max(4, Math.floor(k * 8));
      if (Math.random() > 0.5)
        for (let G = 0; G < I.height; G += D)
          for (let R = 0; R < I.width; R += D) {
            const Y = y.getImageData(R, G, 1, 1).data;
            y.fillStyle = `rgb(${Y[0]}, ${Y[1]}, ${Y[2]})`, y.fillRect(R, G, D, D);
          }
      else {
        const G = Math.floor(k * 3);
        for (let R = 0; R < G; R++) {
          const Y = Math.floor(Math.random() * (I.width - 50)), te = Math.floor(Math.random() * (I.height - 50)), ae = Math.floor(Math.random() * 100 * k) + 30, le = Math.floor(Math.random() * 80 * k) + 20;
          for (let Z = te; Z < te + le; Z += D)
            for (let ne = Y; ne < Y + ae; ne += D)
              if (ne < I.width && Z < I.height) {
                const ce = y.getImageData(ne, Z, 1, 1).data;
                y.fillStyle = `rgb(${ce[0]}, ${ce[1]}, ${ce[2]})`, y.fillRect(ne, Z, D, D);
              }
        }
      }
    }, K = (y, k) => {
      if (!M.value) return;
      const I = y.canvas, D = y.getImageData(0, 0, I.width, I.height), q = D.data, G = 0.2 + k * 0.05;
      for (let R = 0; R < q.length; R += 4)
        Math.random() < G && (Math.random() > 0.5 ? (q[R] = 255, q[R + 1] = 255, q[R + 2] = 255) : (q[R] = Math.floor(Math.random() * 256), q[R + 1] = Math.floor(Math.random() * 256), q[R + 2] = Math.floor(Math.random() * 256)));
      y.putImageData(D, 0, 0);
    }, Q = (y, k) => {
      [...["rgb-shift", "scanline", "pixelate", "noise"]].sort(() => 0.5 - Math.random()).slice(0, 2 + Math.floor(Math.random() * 2)).forEach((G) => {
        switch (G) {
          case "rgb-shift":
            E(y, k);
            break;
          case "scanline":
            $(y, k);
            break;
          case "pixelate":
            P(y, k);
            break;
          case "noise":
            K(y, k);
            break;
        }
      });
    }, d = () => {
      if (!u.value || !M.value) return;
      const k = u.value.getContext("2d");
      if (k) {
        switch (k.putImageData(M.value, 0, 0), t.glitchType) {
          case "rgb-shift":
            E(k, w.value);
            break;
          case "scanline":
            $(k, w.value);
            break;
          case "pixelate":
            P(k, w.value);
            break;
          case "noise":
            K(k, w.value);
            break;
          case "combined":
            Q(k, w.value);
            break;
        }
        g.value = !0, n("glitch-start");
      }
    }, z = () => {
      if (!u.value || !M.value) return;
      const k = u.value.getContext("2d");
      k && (k.putImageData(M.value, 0, 0), g.value = !1, n("glitch-end"));
    }, T = () => {
      _.value && clearInterval(_.value), d(), t.animated && (_.value = window.setInterval(() => {
        d();
      }, t.interval));
    }, O = () => {
      _.value && clearInterval(_.value), _.value = window.setInterval(() => {
        Math.random() < 0.5 && (d(), setTimeout(() => {
          z();
        }, 200 + Math.random() * 300));
      }, t.interval);
    }, b = () => {
      _.value && (clearInterval(_.value), _.value = null), z();
    }, l = () => {
      t.triggerMode === "hover" && T();
    }, h = () => {
      t.triggerMode === "hover" && !t.animated && b();
    }, x = () => {
      t.triggerMode === "click" && (g.value ? b() : T());
    };
    return J(() => [t.src, t.glitchType, t.intensity], () => {
      t.src && (p.value = !1, v.value = !1), g.value && d();
    }), ee(() => {
      r.value && r.value.complete && r.value.naturalHeight !== 0 && m();
    }), re(() => {
      _.value && clearInterval(_.value);
    }), (y, k) => (s(), o("div", {
      class: N(["cp-glitch-image", { animated: e.animated }]),
      onMouseenter: l,
      onMouseleave: h,
      onClick: x
    }, [
      c("div", {
        class: "image-container",
        ref_key: "imageContainerRef",
        ref: i
      }, [
        c("img", {
          src: e.src,
          alt: e.alt,
          ref_key: "imageRef",
          ref: r,
          class: "original-image",
          crossOrigin: "anonymous",
          onLoad: m,
          onError: C
        }, null, 40, _t),
        p.value && !v.value ? (s(), o("canvas", {
          key: 0,
          ref_key: "glitchCanvasRef",
          ref: u,
          class: "glitch-canvas"
        }, null, 512)) : B("", !0),
        !p.value && !v.value ? (s(), o("div", Ct, [...k[0] || (k[0] = [
          c("div", { class: "loading-text" }, "Loading...", -1)
        ])])) : B("", !0),
        v.value ? (s(), o("div", St, [...k[1] || (k[1] = [
          c("div", { class: "error-text" }, "Image Load Failed", -1)
        ])])) : B("", !0)
      ], 512)
    ], 34));
  }
}), Mt = /* @__PURE__ */ W(It, [["__scopeId", "data-v-b2947767"]]), Tt = H(Mt), Et = ["data-progress"], Nt = { class: "progress-container" }, Bt = {
  key: 0,
  class: "progress-text"
}, Lt = /* @__PURE__ */ F({
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
    const a = e, t = S(null), n = S(null), i = L(() => a.direction === "vertical" ? "vertical" : "horizontal"), r = L(() => {
      const v = a.direction === "vertical" ? "height" : "width", g = a.indeterminate ? "100%" : `${a.progress}%`;
      return {
        [v]: g,
        backgroundColor: a.color,
        boxShadow: `0 0 ${a.glitchIntensity * 2}px ${a.color}`
      };
    }), u = () => {
      if (!t.value) return;
      const v = t.value.querySelector(".glitch-effect");
      if (!v) return;
      const g = () => {
        if (!v) return;
        if (Math.random() < a.glitchIntensity / 20) {
          const M = Math.random() * a.glitchIntensity - a.glitchIntensity / 2, w = Math.random() * a.glitchIntensity - a.glitchIntensity / 2, m = Math.random() * a.glitchIntensity - a.glitchIntensity / 2, C = Math.random() * a.glitchIntensity / 2;
          v.style.transform = `translate(${M}px, ${w}px) skew(${m}deg)`, v.style.filter = `blur(${C}px)`, v.style.opacity = "1", setTimeout(() => {
            v && (v.style.transform = "translate(0, 0) skew(0)", v.style.filter = "blur(0)", v.style.opacity = "0");
          }, 150);
        }
      };
      n.value = window.setInterval(() => {
        g();
      }, 500);
    };
    let p = a.progress;
    return J(() => a.progress, (v) => {
      if (v !== p) {
        if (t.value) {
          const g = t.value.querySelector(".glitch-effect");
          if (g) {
            const _ = Math.random() * a.glitchIntensity * 2 - a.glitchIntensity, M = Math.random() * a.glitchIntensity - a.glitchIntensity / 2;
            g.style.transform = `translate(${_}px, ${M}px)`, g.style.opacity = "1", setTimeout(() => {
              g && (g.style.transform = "translate(0, 0)", g.style.opacity = "0");
            }, 300);
          }
        }
        p = v;
      }
    }), ee(() => {
      u();
    }), re(() => {
      n.value && clearInterval(n.value);
    }), (v, g) => (s(), o("div", {
      class: N(["cp-glitch-progress", i.value, { indeterminate: e.indeterminate }]),
      "data-progress": e.progress
    }, [
      c("div", Nt, [
        c("div", {
          class: "progress-bar",
          style: A(r.value),
          ref_key: "progressBarRef",
          ref: t
        }, [...g[0] || (g[0] = [
          c("div", { class: "glitch-effect" }, null, -1)
        ])], 4),
        e.showText && !e.indeterminate ? (s(), o("div", Bt, V(e.progress) + "% ", 1)) : B("", !0)
      ])
    ], 10, Et));
  }
}), zt = /* @__PURE__ */ W(Lt, [["__scopeId", "data-v-27854e11"]]), Ot = H(zt), Rt = { class: "glow-text" }, Vt = /* @__PURE__ */ F({
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
    return ee(() => {
      document.documentElement.style.setProperty("--child-color", a.color);
    }), (t, n) => (s(), o("div", Rt, [
      X(t.$slots, "default", {}, void 0, !0)
    ]));
  }
}), Dt = /* @__PURE__ */ W(Vt, [["__scopeId", "data-v-7d666f1f"]]), At = H(Dt), Pt = ["tabindex", "aria-disabled", "aria-label"], Ft = { class: "holo-card-content" }, Ht = {
  key: 0,
  class: "card-title"
}, Gt = /* @__PURE__ */ F({
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
    ve((f) => ({
      v558892ac: n.hologramColor
    }));
    const a = Ce(), t = oe(), n = e, i = S({ x: 0, y: 0 }), r = S(!1), v = ((f, E) => {
      let $;
      return function() {
        const P = arguments, K = a;
        $ || (f.apply(K, P), $ = !0, setTimeout(() => $ = !1, E));
      };
    })((f) => {
      if (n.disabled) return;
      const E = f.currentTarget.getBoundingClientRect();
      i.value = {
        x: (f.clientX - E.left) / E.width * 2 - 1,
        y: (f.clientY - E.top) / E.height * 2 - 1
      }, r.value = !0;
    }, 16), g = () => {
      r.value = !1, i.value = { x: 0, y: 0 };
    }, _ = () => {
      n.disabled || (r.value = !0, i.value = { x: 0, y: 0 });
    }, M = L(() => [(() => {
      switch (n.type) {
        case "basic":
          return "basic-type";
        case "media":
          return "media-type";
        case "action":
          return "action-type";
        default:
          return "basic-type";
      }
    })()]), w = L(() => {
      const f = {};
      if (n.rounded || (f.borderRadius = "0"), n.disabled && (f.cursor = "not-allowed", f.opacity = "0.6"), !r.value || n.disabled) return f;
      const E = i.value.y * 10, $ = -i.value.x * 10;
      return {
        ...f,
        transform: `perspective(1000px) rotateX(${E}deg) rotateY(${$}deg) scale3d(1.05, 1.05, 1.05)`,
        transition: "transform 0.1s ease"
      };
    }), m = L(() => {
      if (!r.value || n.disabled) return {};
      const f = Math.max(-50, Math.min(50, i.value.x * 10)), E = Math.max(-50, Math.min(50, i.value.y * 10));
      return {
        background: `radial-gradient(circle at ${50 + f}% ${50 + E}%, ${n.hologramColor}33, transparent 70%)`,
        opacity: 0.8,
        transition: "background 0.1s ease"
      };
    }), C = L(() => {
      const f = n.glowIntensity / 100;
      return {
        boxShadow: `0 0 ${10 + n.glowIntensity / 5}px ${n.hologramColor}${Math.floor(f * 99).toString(16).padStart(2, "0")}`,
        opacity: r.value && !n.disabled ? f : f * 0.5
      };
    });
    return ee(() => {
      de(() => {
      });
    }), (f, E) => (s(), o("div", {
      class: N([
        "cp-holo-card",
        `depth-${e.depth}`,
        M.value,
        `theme-${e.theme}`,
        `effect-${e.effect}`
      ]),
      style: A(w.value),
      onMousemove: E[0] || (E[0] = //@ts-ignore
      (...$) => ue(v) && ue(v)(...$)),
      onMouseleave: g,
      onFocus: _,
      onBlur: g,
      tabindex: e.disabled ? -1 : 0,
      role: "button",
      "aria-disabled": e.disabled,
      "aria-label": e.title
    }, [
      c("div", Ft, [
        e.title && !ue(t).title ? (s(), o("div", Ht, V(e.title), 1)) : B("", !0),
        X(f.$slots, "title", {}, void 0, !0),
        X(f.$slots, "default", {}, void 0, !0),
        X(f.$slots, "footer", {}, void 0, !0)
      ]),
      c("div", {
        class: "holo-card-hologram-effect",
        style: A(m.value)
      }, null, 4),
      c("div", {
        class: "holo-card-glow",
        style: A(C.value)
      }, null, 4)
    ], 46, Pt));
  }
}), Wt = /* @__PURE__ */ W(Gt, [["__scopeId", "data-v-fe164a1d"]]), Yt = H(Wt), Kt = { class: "loader-container" }, qt = {
  key: 0,
  class: "cube-loader"
}, jt = {
  key: 1,
  class: "sphere-loader"
}, Xt = { class: "sphere" }, Ut = {
  key: 2,
  class: "datastream-loader"
}, Qt = {
  key: 3,
  class: "circuit-loader"
}, Zt = { class: "circuit-board" }, Jt = {
  key: 0,
  class: "loader-text"
}, ea = { class: "typing-text" }, ta = /* @__PURE__ */ F({
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
    ve((v) => ({
      c40498b2: v.$props.color,
      v7f665050: t
    }));
    const a = e, t = (6 / a.speed).toString() + "s", n = L(() => {
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
    }), i = S(""), r = S(0), u = S(null), p = () => {
      if (!a.text) return;
      r.value = 0, i.value = "";
      const v = () => {
        r.value < a.text.length ? (i.value += a.text[r.value], r.value++) : setTimeout(() => {
          r.value = 0, i.value = "";
        }, 1e3);
      }, g = 100 / a.speed;
      u.value = window.setInterval(v, g);
    };
    return J(() => a.text, () => {
      u.value && clearInterval(u.value), p();
    }), ee(() => {
      p();
    }), re(() => {
      u.value && clearInterval(u.value);
    }), (v, g) => (s(), o("div", {
      class: N(["cp-holo-loader", n.value, { "transparent-bg": e.transparent }])
    }, [
      c("div", Kt, [
        c("div", {
          class: N(["holo-projection", `type-${e.type}`])
        }, [
          e.type === "cube" || e.type === "split" ? (s(), o("div", qt, [...g[0] || (g[0] = [
            Se('<div class="cube" data-v-6df1b911><div class="cube-face front" data-v-6df1b911></div><div class="cube-face back" data-v-6df1b911></div><div class="cube-face right" data-v-6df1b911></div><div class="cube-face left" data-v-6df1b911></div><div class="cube-face top" data-v-6df1b911></div><div class="cube-face bottom" data-v-6df1b911></div></div>', 1)
          ])])) : e.type === "sphere" ? (s(), o("div", jt, [
            c("div", Xt, [
              (s(), o(j, null, U(3, (_) => c("div", {
                class: "sphere-ring",
                key: _
              })), 64))
            ])
          ])) : e.type === "datastream" ? (s(), o("div", Ut, [
            (s(), o(j, null, U(10, (_) => c("div", {
              class: "data-line",
              key: _
            })), 64))
          ])) : e.type === "circuit" ? (s(), o("div", Qt, [
            c("div", Zt, [
              (s(), o(j, null, U(5, (_) => c("div", {
                class: "circuit-path",
                key: _
              })), 64)),
              (s(), o(j, null, U(6, (_) => c("div", {
                class: "circuit-node",
                key: _ + 10
              })), 64))
            ])
          ])) : B("", !0)
        ], 2),
        e.text ? (s(), o("div", Jt, [
          c("span", ea, V(i.value), 1),
          g[1] || (g[1] = c("span", { class: "cursor" }, "_", -1))
        ])) : B("", !0),
        g[2] || (g[2] = c("div", { class: "holo-base" }, [
          c("div", { class: "base-glow" })
        ], -1))
      ])
    ], 2));
  }
}), aa = /* @__PURE__ */ W(ta, [["__scopeId", "data-v-6df1b911"]]), la = H(aa), na = { class: "header-row" }, sa = { class: "header-text" }, oa = { class: "cell-text" }, ra = {
  key: 0,
  class: "row-scanline"
}, ia = /* @__PURE__ */ F({
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
    const a = e, t = S(null), n = S(!1), i = S(!0), r = S(1), u = S(0), p = S(!1), v = S(0), g = Ie([]);
    a.data.length > 0 && g.splice(0, g.length, ...a.data);
    let _ = 0;
    const M = () => `row-${++_}-${Date.now()}`, w = L(() => a.rowNum * a.rowHeight), m = L(() => w.value), C = L(() => {
      const b = g.length, l = a.rowNum;
      if (b === 0) return [];
      if (b <= l)
        return g.map((k, I) => ({
          key: k._uniqueKey || M(),
          data: k,
          index: I
        }));
      let h = [...g];
      b > l && b < 2 * l && (h = [...h, ...h]), h = h.map((k, I) => ({
        key: k._uniqueKey || M(),
        data: k,
        index: I,
        scroll: I
      }));
      let x = h.slice(u.value);
      return x.push(...h.slice(0, u.value)), x.slice(0, l);
    }), f = (b) => a.columns[b]?.width ? a.columns[b].width : "auto", E = (b) => b === "center" ? "center" : b === "right" ? "flex-end" : "flex-start", $ = () => a.theme === "neon" ? "rgba(0, 230, 246, 0.15)" : a.theme === "hologram" ? "rgba(138, 43, 226, 0.2)" : a.theme === "terminal" ? "rgba(0, 255, 0, 0.15)" : a.theme === "matrix" ? "rgba(0, 255, 65, 0.15)" : "rgba(0, 230, 246, 0.15)", P = (b) => (u.value + b) % g.length % 2 === 0 ? "var(--table-row-bg)" : "var(--table-row-hover)", K = (b, l) => {
      const h = l.split(".");
      let x = b;
      for (const y of h)
        x = x?.[y];
      return x ?? "";
    }, Q = async () => {
      if (!(n.value || !i.value)) {
        n.value = !0;
        try {
          if (a.remoteMethod) {
            const b = await a.remoteMethod({
              page: r.value,
              size: a.bufferSize * 10
            });
            if (b.data && b.data.length > 0) {
              const l = b.data.map((h) => (h._uniqueKey || (h._uniqueKey = M()), h));
              r.value === 1 ? g.splice(0, g.length, ...l) : g.push(...l), a.data && a.data.splice(0, a.data.length, ...g);
            }
            i.value = b.hasMore ?? !1, r.value++;
          } else a.loadMore && await a.loadMore();
        } catch (b) {
          console.error("Failed to load more data:", b), i.value = !1;
        } finally {
          n.value = !1;
        }
      }
    }, d = async () => {
      if (!a.autoScroll || p.value) return;
      const b = g.length, l = a.rowNum;
      if (b <= l || (await new Promise((x) => setTimeout(x, a.waitTime)), p.value)) return;
      const h = async () => {
        if (p.value) return;
        const x = v.value, y = a.scrollType === "page" ? l : 1;
        u.value = (u.value + y) % b;
        const k = a.scrollType === "page" ? 500 : 300;
        await new Promise((I) => setTimeout(I, k)), !(v.value !== x || p.value) && (await new Promise((I) => setTimeout(I, a.waitTime)), !(v.value !== x || p.value) && h());
      };
      h();
    }, z = () => {
      v.value = (v.value + 1) % 999999;
    }, T = () => {
      a.hoverPause && (p.value = !0, z());
    }, O = () => {
      a.hoverPause && (p.value = !1, d());
    };
    return ee(() => {
      a.remoteMethod && g.length === 0 && Q(), a.autoScroll && d();
    }), (b, l) => (s(), o("div", {
      class: N(["cyber-infinite-table", [`theme-${e.theme}`, `scroll-${e.scrollType}`]])
    }, [
      c("div", {
        class: "table-header",
        style: A({ backgroundColor: $() })
      }, [
        c("div", na, [
          (s(!0), o(j, null, U(e.columns, (h, x) => (s(), o("div", {
            key: h.field || x,
            class: "header-cell",
            style: A({
              width: f(x),
              minWidth: h.minWidth || "100px",
              textAlign: h.align || "left"
            })
          }, [
            c("div", {
              class: "header-content",
              style: A({ justifyContent: E(h.align || "left") })
            }, [
              c("span", sa, V(h.title), 1)
            ], 4)
          ], 4))), 128))
        ])
      ], 4),
      c("div", {
        class: "table-body",
        ref_key: "bodyRef",
        ref: t,
        onMouseenter: T,
        onMouseleave: O
      }, [
        c("div", {
          class: "rows-container",
          style: A({ height: m.value + "px" })
        }, [
          he(be, { name: "scroll-list" }, {
            default: pe(() => [
              (s(!0), o(j, null, U(C.value, (h) => (s(), o("div", {
                class: "table-row",
                key: h.key,
                style: A({
                  height: e.rowHeight + "px",
                  lineHeight: e.rowHeight + "px",
                  backgroundColor: P(h.index)
                })
              }, [
                (s(!0), o(j, null, U(e.columns, (x, y) => (s(), o("div", {
                  key: x.field || y,
                  class: "table-cell",
                  style: A({
                    width: f(y),
                    minWidth: x.minWidth || "100px",
                    justifyContent: E(x.align || "left")
                  })
                }, [
                  X(b.$slots, x.field, {
                    row: h.data,
                    column: x
                  }, () => [
                    c("span", oa, V(K(h.data, x.field)), 1)
                  ], !0)
                ], 4))), 128)),
                e.showScanline ? (s(), o("div", ra)) : B("", !0)
              ], 4))), 128))
            ]),
            _: 3
          })
        ], 4)
      ], 544),
      l[0] || (l[0] = c("div", { class: "table-border-effect" }, null, -1))
    ], 2));
  }
}), ca = /* @__PURE__ */ W(ia, [["__scopeId", "data-v-a239aba5"]]), ua = H(ca), da = /* @__PURE__ */ F({
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
    oe();
    const t = e, n = L(() => {
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
    }), i = L(() => {
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
    return (r, u) => (s(), o("div", {
      class: N(["cp-button-neno", i.value])
    }, [
      c("div", {
        class: N(["button", n.value, t.bg ? "show-bg" : ""])
      }, [
        u[0] || (u[0] = c("div", { class: "border" }, null, -1)),
        u[1] || (u[1] = c("div", { class: "border" }, null, -1)),
        u[2] || (u[2] = c("div", { class: "border" }, null, -1)),
        u[3] || (u[3] = c("div", { class: "border" }, null, -1)),
        X(r.$slots, "default", {}, void 0, !0)
      ], 2)
    ], 2));
  }
}), fa = /* @__PURE__ */ W(da, [["__scopeId", "data-v-5d7945c0"]]), va = H(fa), ha = ["aria-checked", "aria-disabled"], pa = { class: "toggle-thumb" }, ga = {
  key: 0,
  class: "pulse-effect"
}, ma = /* @__PURE__ */ F({
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
    ve((p) => ({
      v2ad8abbc: t.inActiveColor,
      v247239f2: t.activeColor
    }));
    const t = e, n = a, i = L(() => {
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
    }), r = L(() => {
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
      const p = !t.modelValue;
      n("update:modelValue", p), n("change", p);
    };
    return (p, v) => (s(), o("div", {
      class: N(["cp-neon-toggle", r.value, i.value, { active: e.modelValue, disabled: e.disabled }]),
      onClick: u,
      "aria-checked": e.modelValue,
      role: "switch",
      "aria-disabled": e.disabled
    }, [
      v[0] || (v[0] = c("div", { class: "toggle-track" }, [
        c("div", { class: "toggle-track-inner" }),
        c("div", { class: "circuit-lines" })
      ], -1)),
      c("div", pa, [
        e.pulseEffect && e.modelValue ? (s(), o("div", ga)) : B("", !0)
      ])
    ], 10, ha));
  }
}), ya = /* @__PURE__ */ W(ma, [["__scopeId", "data-v-799d9482"]]), ba = H(ya), wa = /* @__PURE__ */ F({
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
    oe();
    const t = e, n = L(() => {
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
    }), i = L(() => {
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
    return (r, u) => (s(), o("div", {
      class: N(["cp-button-neno", i.value])
    }, [
      c("div", {
        class: N(["button", n.value, t.bg ? "show-bg" : ""])
      }, [
        X(r.$slots, "default", {}, void 0, !0)
      ], 2)
    ], 2));
  }
}), xa = /* @__PURE__ */ W(wa, [["__scopeId", "data-v-d73343d5"]]), $a = H(xa), ka = ["data-word"], _a = /* @__PURE__ */ F({
  name: "CyberText",
  __name: "text",
  props: {
    lineColor: {
      type: String,
      default: "#0000"
    }
  },
  setup(e) {
    const a = S(""), t = oe();
    if (t && t.default) {
      let i = t.default();
      a.value = i[0].children;
    }
    const n = e;
    return (i, r) => (s(), o("div", {
      class: "cp-text",
      "data-word": a.value
    }, [
      X(i.$slots, "default", {}, void 0, !0),
      c("div", {
        class: "cp-text-line",
        style: A("background: " + n.lineColor)
      }, null, 4)
    ], 8, ka));
  }
}), Ca = /* @__PURE__ */ W(_a, [["__scopeId", "data-v-ee14b82a"]]), Sa = H(Ca), Ia = /* @__PURE__ */ F({
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
    const a = e, t = (i, r) => {
      let u = `0px 0px ${i}`;
      for (let p = 1; p <= a.long; p++) {
        const v = n(i, p);
        u += `, ${r === "left" ? "-" : ""}${p}px ${p}px ${v}`;
      }
      return u;
    }, n = (i, r) => {
      const u = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i.exec(i), p = /^rgba?\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})(,\s*([\d.]+))?\)$/i.exec(i);
      if (u) {
        const v = parseInt(u[1], 16), g = parseInt(u[2], 16), _ = parseInt(u[3], 16), M = u[4] ? parseInt(u[4], 16) / 255 : 1, w = Math.max(0, M - r * 0.05);
        return `rgba(${v}, ${g}, ${_}, ${w})`;
      } else if (p) {
        const v = parseInt(p[1], 10), g = parseInt(p[2], 10), _ = parseInt(p[3], 10), M = p[5] ? parseFloat(p[5]) : 1, w = Math.max(0, M - r * 0.05);
        return `rgba(${v}, ${g}, ${_}, ${w})`;
      } else
        throw new Error(`Unsupported color format: ${i}`);
    };
    return (i, r) => (s(), o("div", {
      class: N(["shadow-text", a.direction]),
      style: A({ textShadow: t(a.shadowColor, a.direction) })
    }, [
      X(i.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), Ma = /* @__PURE__ */ W(Ia, [["__scopeId", "data-v-baec179b"]]), Ta = H(Ma), Ea = { class: "cp-typing" }, Na = { class: "content" }, Ba = /* @__PURE__ */ F({
  name: "CyberTyping",
  __name: "typing",
  setup(e) {
    return (a, t) => (s(), o("div", Ea, [
      c("div", Na, [
        X(a.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), La = /* @__PURE__ */ W(Ba, [["__scopeId", "data-v-c43f79f6"]]), za = H(La), Oa = ["src", "alt", "loading", "crossorigin"], Ra = {
  key: 1,
  class: "placeholder"
}, Va = ["src"], Da = {
  key: 2,
  class: "error-content"
}, Aa = /* @__PURE__ */ F({
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
    const a = /* @__PURE__ */ Object.assign({}), t = e, n = (w) => {
      if (w.startsWith("http://") || w.startsWith("https://") || w.startsWith("/"))
        return w;
      for (const [m, C] of Object.entries(a))
        if (m.includes(w) || w.includes(m.split("/").pop() || ""))
          return C;
      return w;
    }, i = S(!1), r = S(!1), u = S(""), p = L(() => {
      const w = {};
      return t.width !== "auto" && t.width !== void 0 && (w.width = typeof t.width == "number" ? `${t.width}px` : t.width), t.height !== "auto" && t.height !== void 0 && (w.height = typeof t.height == "number" ? `${t.height}px` : t.height), !w.width && !w.height && (w.display = "inline-block"), w;
    }), v = L(() => r.value && t.errorSrc ? `url(${t.errorSrc})` : u.value ? `url(${u.value})` : "none"), g = L(() => {
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
    }), _ = () => {
      u.value = n(t.src), i.value = !0, r.value = !1;
    }, M = () => {
      if (r.value = !0, t.errorSrc && t.errorSrc !== t.src) {
        const w = new Image();
        w.crossOrigin = t.crossorigin || "", w.src = n(t.errorSrc), w.onload = () => {
          u.value = n(t.errorSrc), i.value = !0;
        }, w.onerror = () => {
          i.value = !0;
        };
      } else
        i.value = !0;
    };
    return J(() => t.src, () => {
      i.value = !1, r.value = !1, u.value = n(t.src);
    }, { immediate: !0 }), ee(() => {
      t.src && (u.value = n(t.src));
    }), (w, m) => (s(), o("div", {
      class: "cyber-image-wrapper",
      style: A(p.value)
    }, [
      e.src ? (s(), o("img", {
        key: 0,
        src: e.src,
        alt: e.alt,
        loading: e.loading,
        crossorigin: e.crossorigin,
        class: "hidden-image",
        onLoad: _,
        onError: M
      }, null, 40, Oa)) : B("", !0),
      c("div", {
        class: N(["glitch", {
          "is-loaded": i.value && !r.value,
          "is-loading": !i.value && !r.value,
          "is-error": r.value,
          "no-glitch": e.disableGlitch
        }]),
        style: A({
          backgroundImage: v.value,
          backgroundSize: g.value,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        })
      }, [
        i.value && !r.value && !e.disableGlitch ? (s(), o("div", {
          key: 0,
          class: "glitch-layer",
          style: A({ backgroundImage: v.value })
        }, null, 4)) : B("", !0),
        !i.value && e.placeholder ? (s(), o("div", Ra, [
          X(w.$slots, "placeholder", {}, () => [
            c("img", {
              src: e.placeholder,
              alt: "Loading..."
            }, null, 8, Va)
          ], !0)
        ])) : r.value ? (s(), o("div", Da, [
          X(w.$slots, "error", {}, () => [
            fe(V(e.errorContent), 1)
          ], !0)
        ])) : B("", !0),
        i.value && !r.value ? X(w.$slots, "default", { key: 3 }, void 0, !0) : B("", !0)
      ], 6)
    ], 4));
  }
}), Pa = /* @__PURE__ */ W(Aa, [["__scopeId", "data-v-c8293d7c"]]), Fa = H(Pa), Ha = { class: "cyber-magic-text" }, Ga = ["data-text"], Wa = /* @__PURE__ */ F({
  name: "CyberMagicText",
  __name: "magicText",
  setup(e) {
    const a = S(""), t = oe();
    if (t && t.default) {
      let n = t.default();
      a.value = n[0].children;
    }
    return (n, i) => (s(), o("div", Ha, [
      c("span", {
        class: "gradient-text",
        "data-text": a.value
      }, [
        X(n.$slots, "default")
      ], 8, Ga)
    ]));
  }
}), Ya = H(Wa), Ka = { class: "imgWrap" }, qa = ["src"], ja = /* @__PURE__ */ F({
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
    ve((p) => ({
      v29922088: t.value + "px"
    }));
    const a = e, t = S(a.imgHeight);
    a.shadow && (t.value = a.imgHeight * 2);
    const n = S(a.imgList.length), i = r(a.imgWidth, 360 / n.value) * 1.6;
    function r(p, v) {
      const g = v * Math.PI / 180;
      return p / (2 * Math.sin(g / 2));
    }
    const u = (p) => {
      const v = 35 + (p + 1) * (360 / n.value), g = r(a.imgWidth, 360 / n.value);
      return {
        transform: `rotateY(${v}deg) translateZ(${g}px)`
      };
    };
    return (p, v) => (s(), o("div", {
      class: "container",
      style: A({
        "--container-width": `${i}px`,
        "--img-width": `${a.imgWidth}px`,
        "--img-height": `${a.imgHeight}px`
      })
    }, [
      c("div", {
        class: N(["stage", { "has-shadow": a.shadow }])
      }, [
        c("div", {
          class: "control",
          style: A({
            "--animation-duration": `${a.animationDuration}s`
          })
        }, [
          c("div", Ka, [
            (s(!0), o(j, null, U(a.imgList, (g, _) => (s(), o("div", {
              key: _,
              class: "img",
              style: A(u(_))
            }, [
              c("img", { src: g }, null, 8, qa)
            ], 4))), 128))
          ])
        ], 4)
      ], 2)
    ], 4));
  }
}), Xa = /* @__PURE__ */ W(ja, [["__scopeId", "data-v-3d7f1970"]]), Ua = H(Xa), Qa = ["aria-expanded", "aria-disabled"], Za = { class: "select-value" }, Ja = ["aria-label", "onClick"], el = {
  key: 1,
  class: "select-single"
}, tl = {
  key: 2,
  class: "select-placeholder"
}, al = {
  key: 0,
  class: "select-dropdown"
}, ll = {
  key: 0,
  class: "select-search"
}, nl = ["placeholder"], sl = {
  key: 1,
  class: "select-options"
}, ol = {
  key: 0,
  class: "select-group-label"
}, rl = ["disabled", "onClick"], il = { class: "option-label" }, cl = {
  key: 2,
  class: "select-empty"
}, ul = /* @__PURE__ */ F({
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
    size: { default: "default" },
    theme: { default: "neon" },
    labelKey: { default: "label" },
    valueKey: { default: "value" }
  },
  emits: ["update:modelValue", "change", "focus", "blur", "visible-change", "clear"],
  setup(e, { emit: a }) {
    const t = e, n = a, i = S(), r = S(), u = S(!1), p = S(""), v = L(() => {
      const l = [], h = [];
      return t.options.forEach((x, y) => {
        Array.isArray(x.options) ? l.push({
          key: `group-${y}`,
          label: m(x),
          options: x.options
        }) : h.push(x);
      }), h.length && l.unshift({
        key: "default",
        label: "",
        options: h
      }), l;
    }), g = L(() => v.value.flatMap((l) => l.options)), _ = L(() => {
      const l = p.value.trim().toLowerCase();
      return l ? v.value.map((h) => ({
        ...h,
        options: h.options.filter((x) => m(x).toLowerCase().includes(l))
      })).filter((h) => h.options.length) : v.value;
    }), M = L(() => {
      const l = t.multiple ? Array.isArray(t.modelValue) ? t.modelValue : [] : Array.isArray(t.modelValue) ? [] : [t.modelValue ?? null];
      return g.value.filter((h) => l.some((x) => f(x, C(h))));
    }), w = L(() => t.multiple ? Array.isArray(t.modelValue) && t.modelValue.length > 0 : t.modelValue !== "" && t.modelValue !== null && t.modelValue !== void 0), m = (l) => {
      const h = l[t.labelKey] ?? l.label ?? l[t.valueKey] ?? l.value ?? "";
      return String(h);
    }, C = (l) => l[t.valueKey] ?? l.value ?? null, f = (l, h) => l === h, E = (l) => {
      const h = C(l);
      return t.multiple ? (Array.isArray(t.modelValue) ? t.modelValue : []).some((y) => f(y, h)) : f(t.modelValue, h);
    }, $ = (l) => {
      t.disabled || u.value === l || (u.value = l, n("visible-change", l), l && t.filterable && de(() => r.value?.focus()));
    }, P = () => {
      $(!u.value);
    }, K = (l) => {
      if (t.disabled || l.disabled) return;
      const h = C(l);
      if (t.multiple) {
        const x = Array.isArray(t.modelValue) ? [...t.modelValue] : [], y = x.findIndex((I) => f(I, h));
        y > -1 ? x.splice(y, 1) : x.push(h);
        const k = g.value.filter((I) => x.some((D) => f(D, C(I))));
        n("update:modelValue", x), n("change", x, k);
        return;
      }
      n("update:modelValue", h), n("change", h, l), $(!1);
    }, Q = (l) => {
      if (!t.multiple || t.disabled) return;
      const h = C(l), y = (Array.isArray(t.modelValue) ? [...t.modelValue] : []).filter((I) => !f(I, h)), k = g.value.filter((I) => y.some((D) => f(D, C(I))));
      n("update:modelValue", y), n("change", y, k);
    }, d = () => {
      const l = t.multiple ? [] : "";
      n("update:modelValue", l), n("change", l, t.multiple ? [] : void 0), n("clear"), p.value = "";
    }, z = (l) => {
      t.disabled || n("focus", l);
    }, T = (l) => {
      n("blur", l);
    }, O = (l) => {
      t.disabled || ((l.key === "Enter" || l.key === " ") && (u.value || (l.preventDefault(), $(!0))), l.key === "Escape" && $(!1));
    }, b = (l) => {
      i.value?.contains(l.target) || $(!1);
    };
    return J(u, (l) => {
      l || (p.value = "");
    }), J(() => t.multiple, (l) => {
      l && !Array.isArray(t.modelValue) && n("update:modelValue", []);
    }), ee(() => {
      document.addEventListener("click", b);
    }), Me(() => {
      document.removeEventListener("click", b);
    }), (l, h) => (s(), o("div", {
      ref_key: "selectRef",
      ref: i,
      class: N(["cp-cyber-select", [
        `theme-${e.theme}`,
        `size-${e.size}`,
        {
          "is-open": u.value,
          "is-disabled": e.disabled,
          "is-multiple": e.multiple
        }
      ]])
    }, [
      c("div", {
        class: "select-control",
        tabindex: "0",
        role: "combobox",
        "aria-expanded": u.value,
        "aria-disabled": e.disabled,
        onClick: P,
        onFocus: z,
        onBlur: T,
        onKeydown: O
      }, [
        c("div", Za, [
          e.multiple && M.value.length ? (s(!0), o(j, { key: 0 }, U(M.value, (x) => (s(), o("span", {
            key: String(C(x)),
            class: "select-tag",
            onClick: h[0] || (h[0] = se(() => {
            }, ["stop"]))
          }, [
            fe(V(m(x)) + " ", 1),
            c("button", {
              class: "tag-close",
              type: "button",
              "aria-label": `Remove ${m(x)}`,
              onClick: se((y) => Q(x), ["stop"])
            }, null, 8, Ja)
          ]))), 128)) : !e.multiple && M.value.length ? (s(), o("span", el, V(m(M.value[0])), 1)) : (s(), o("span", tl, V(e.placeholder), 1))
        ]),
        e.clearable && w.value && !e.disabled ? (s(), o("button", {
          key: 0,
          class: "clear-button",
          type: "button",
          "aria-label": "Clear selected value",
          onClick: se(d, ["stop"])
        })) : B("", !0),
        h[3] || (h[3] = c("span", { class: "select-arrow" }, null, -1))
      ], 40, Qa),
      he(Te, { name: "select-dropdown" }, {
        default: pe(() => [
          u.value ? (s(), o("div", al, [
            e.filterable ? (s(), o("div", ll, [
              ge(c("input", {
                ref_key: "searchInputRef",
                ref: r,
                "onUpdate:modelValue": h[1] || (h[1] = (x) => p.value = x),
                type: "text",
                placeholder: e.searchPlaceholder,
                onClick: h[2] || (h[2] = se(() => {
                }, ["stop"])),
                onKeydown: O
              }, null, 40, nl), [
                [Ee, p.value]
              ])
            ])) : B("", !0),
            _.value.length ? (s(), o("div", sl, [
              (s(!0), o(j, null, U(_.value, (x) => (s(), o(j, {
                key: x.key
              }, [
                x.label ? (s(), o("div", ol, V(x.label), 1)) : B("", !0),
                (s(!0), o(j, null, U(x.options, (y) => (s(), o("button", {
                  key: `${x.key}-${String(C(y))}`,
                  class: N(["select-option", {
                    selected: E(y),
                    disabled: y.disabled
                  }]),
                  type: "button",
                  disabled: y.disabled,
                  onClick: se((k) => K(y), ["stop"])
                }, [
                  h[4] || (h[4] = c("span", { class: "option-check" }, null, -1)),
                  c("span", il, V(m(y)), 1)
                ], 10, rl))), 128))
              ], 64))), 128))
            ])) : (s(), o("div", cl, V(e.noDataText), 1))
          ])) : B("", !0)
        ]),
        _: 1
      })
    ], 2));
  }
}), dl = /* @__PURE__ */ W(ul, [["__scopeId", "data-v-486e0750"]]), fl = H(dl), vl = {
  key: 0,
  class: "tree-connectors",
  "aria-hidden": "true"
}, hl = ["onClick"], pl = ["aria-expanded", "aria-label", "onClick"], gl = {
  key: 1,
  class: "node-expand-placeholder"
}, ml = { class: "node-label" }, yl = { class: "label-text" }, bl = ["title"], wl = { class: "status-text" }, xl = {
  key: 0,
  class: "tree-empty"
}, $l = {
  key: 1,
  class: "tree-scanline"
}, ie = 14, kl = /* @__PURE__ */ F({
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
    const n = e, i = t, r = S([]), u = S([]), p = S(0), v = L(() => {
      const d = [], z = (T, O = 0, b) => {
        T.forEach((l, h) => {
          l._level = O, l._parent = b, l._expanded = l.expanded ?? (n.defaultExpandAll || O === 0), l._selected = l.selected ?? !1, l._isLastChild = h === T.length - 1, d.push(l), l._expanded && l.children && l.children.length > 0 && z(l.children, O + 1, l);
        });
      };
      return z(r.value), d;
    }), g = () => {
      const d = (z, T = 0) => {
        const O = {
          ...z,
          _expanded: z.expanded ?? (n.defaultExpandAll || T === 0),
          _selected: z.selected ?? !1,
          _level: T,
          _parent: void 0,
          _isLastChild: !1
        };
        return z.children && z.children.length > 0 && (O.children = z.children.map((b) => d(b, T + 1))), O;
      };
      r.value = n.data.map((z) => d(z)), u.value = v.value.filter((z) => z._selected);
    }, _ = (d) => !d.children || d.children.length === 0, M = (d) => d._level ?? 0, w = (d) => M(d) * n.indent, m = (d) => {
      const z = M(d);
      return Array.from({ length: Math.max(z - 1, 0) }, (T, O) => O);
    }, C = (d, z) => {
      let T = d, O = M(d);
      for (; T && O > z; )
        T = T._parent, O--;
      return T?._isLastChild ?? !1;
    }, f = (d) => {
      d._expanded = !d._expanded, d.expanded = d._expanded, d._expanded ? i("node-expand", d) : i("node-collapse", d), Q();
    }, E = (d) => {
      n.multiple ? (d._selected = !d._selected, d.selected = d._selected) : d._selected ? (d._selected = !1, d.selected = !1) : (u.value.forEach((z) => {
        z._selected = !1, z.selected = !1;
      }), d._selected = !0, d.selected = !0), $(), i("select-change", u.value), i("node-click", d), n.expandOnClick && !_(d) && f(d);
    }, $ = () => {
      u.value = v.value.filter((d) => d._selected);
    }, P = (d) => d.icon ? d.icon : _(d) ? "icon-file" : d._expanded ? "icon-folder-open" : "icon-folder", K = (d) => d ? {
      online: "Online",
      offline: "Offline",
      warning: "Warning",
      error: "Error"
    }[d] : "", Q = () => {
      p.value++;
    };
    return J(() => n.data, () => {
      g();
    }, { deep: !0, immediate: !0 }), a({
      getSelectedNodes: () => u.value,
      clearSelection: () => {
        u.value.forEach((d) => {
          d._selected = !1, d.selected = !1;
        }), u.value = [], Q();
      }
    }), (d, z) => (s(), o("div", {
      class: N(["cp-cyber-tree cyber-tree", [`theme-${e.theme}`, `effect-${e.effect}`]])
    }, [
      (s(!0), o(j, null, U(v.value, (T) => (s(), o("div", {
        key: `${T.id}-${T._expanded}-${T._selected}-${p.value}`,
        class: N(["tree-node", {
          expanded: T._expanded,
          leaf: _(T),
          "last-child": T._isLastChild
        }]),
        style: A({ paddingLeft: `${w(T)}px` })
      }, [
        e.showConnectors && M(T) > 0 ? (s(), o("div", vl, [
          (s(!0), o(j, null, U(m(T), (O) => (s(), o("span", {
            key: O,
            class: N(["ancestor-line", { hidden: C(T, O) }]),
            style: A({ left: `${O * e.indent + ie}px` })
          }, null, 6))), 128)),
          c("span", {
            class: N(["parent-line", { "is-last": T._isLastChild }]),
            style: A({ left: `${(M(T) - 1) * e.indent + ie}px` })
          }, null, 6),
          c("span", {
            class: "horizontal-line",
            style: A({
              left: `${(M(T) - 1) * e.indent + ie}px`,
              width: `${e.indent - ie + 20}px`
            })
          }, null, 4),
          c("span", {
            class: "connector-joint",
            style: A({ left: `${(M(T) - 1) * e.indent + ie}px` })
          }, null, 4)
        ])) : B("", !0),
        c("div", {
          class: "node-content-wrapper",
          onClick: se((O) => E(T), ["stop"])
        }, [
          c("div", {
            class: N(["node-content", { selected: T._selected }])
          }, [
            _(T) ? (s(), o("span", gl)) : (s(), o("button", {
              key: 0,
              class: "node-expand-icon",
              type: "button",
              "aria-expanded": T._expanded,
              "aria-label": T._expanded ? "Collapse node" : "Expand node",
              onClick: se((O) => f(T), ["stop"])
            }, [
              c("span", {
                class: N(["expand-arrow", { rotated: T._expanded }])
              }, null, 2)
            ], 8, pl)),
            c("span", {
              class: N(["node-icon", P(T)])
            }, [...z[0] || (z[0] = [
              c("span", { class: "icon-core" }, null, -1)
            ])], 2),
            c("span", ml, [
              c("span", yl, V(T.label), 1)
            ]),
            e.showStatus && T.status ? (s(), o("span", {
              key: 2,
              class: "node-status",
              title: K(T.status)
            }, [
              c("span", {
                class: N(["status-indicator", `status-${T.status}`])
              }, null, 2),
              c("span", wl, V(T.status), 1)
            ], 8, bl)) : B("", !0)
          ], 2)
        ], 8, hl)
      ], 6))), 128)),
      v.value.length === 0 ? (s(), o("div", xl, " No data ")) : B("", !0),
      e.showScanline && e.effect !== "static" ? (s(), o("div", $l)) : B("", !0)
    ], 2));
  }
}), _l = /* @__PURE__ */ W(kl, [["__scopeId", "data-v-f9876722"]]), Cl = H(_l), Sl = {
  key: 0,
  class: "cp-divider__line cp-divider__line--left"
}, Il = {
  key: 1,
  class: "cp-divider__content"
}, Ml = {
  key: 2,
  class: "cp-divider__line cp-divider__line--right"
}, Tl = /* @__PURE__ */ F({
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
      const n = {};
      return a.size && (a.direction === "horizontal" ? n.width = a.size : n.height = a.size), n;
    });
    return (n, i) => (s(), o("div", {
      class: N(["cp-divider", [`cp-divider--${e.direction}`, `cp-divider--${e.type}`]]),
      style: A(t.value)
    }, [
      e.showLeftLine ? (s(), o("div", Sl)) : B("", !0),
      n.$slots.default || e.content ? (s(), o("div", Il, [
        X(n.$slots, "default", {}, () => [
          fe(V(e.content), 1)
        ], !0)
      ])) : B("", !0),
      e.showRightLine ? (s(), o("div", Ml)) : B("", !0)
    ], 6));
  }
}), El = /* @__PURE__ */ W(Tl, [["__scopeId", "data-v-e3e2783b"]]), Nl = H(El), Bl = { class: "input-wrapper" }, Ll = ["type", "value", "placeholder", "disabled", "readonly", "maxlength", "autocomplete"], zl = {
  key: 0,
  class: "input-glitch"
}, Ol = {
  key: 1,
  class: "input-scanline"
}, Rl = /* @__PURE__ */ F({
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
    const n = e, i = t, r = S(null), u = L(() => {
      switch (n.size) {
        case "large":
          return "large-size";
        case "default":
          return "default-size";
        case "small":
          return "small-size";
        default:
          return "default-size";
      }
    }), p = L(() => {
      switch (n.theme) {
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
    }), v = (m) => {
      const C = m.target;
      i("update:modelValue", C.value), i("input", C.value);
    }, g = (m) => {
      i("focus", m);
    }, _ = (m) => {
      i("blur", m);
    }, M = (m) => {
      i("keyup", m);
    }, w = (m) => {
      i("keydown", m);
    };
    return a({
      focus: () => {
        r.value?.focus();
      },
      blur: () => {
        r.value?.blur();
      },
      select: () => {
        r.value?.select();
      }
    }), (m, C) => (s(), o("div", {
      class: N(["cp-input", u.value, p.value])
    }, [
      c("div", Bl, [
        c("input", {
          ref_key: "inputRef",
          ref: r,
          type: e.type,
          value: e.modelValue,
          placeholder: e.placeholder,
          disabled: e.disabled,
          readonly: e.readonly,
          maxlength: e.maxlength,
          autocomplete: e.autocomplete,
          onInput: v,
          onFocus: g,
          onBlur: _,
          onKeyup: M,
          onKeydown: w,
          class: "cyber-input"
        }, null, 40, Ll),
        C[0] || (C[0] = c("div", { class: "input-border" }, null, -1)),
        e.glitchEffect ? (s(), o("div", zl)) : B("", !0),
        e.scanlineEffect ? (s(), o("div", Ol)) : B("", !0)
      ])
    ], 2));
  }
}), Vl = /* @__PURE__ */ W(Rl, [["__scopeId", "data-v-a6c7ea98"]]), Dl = H(Vl), Al = [
  Re,
  qe,
  Ze,
  rt,
  yt,
  Tt,
  Ot,
  Yt,
  la,
  ua,
  ba,
  va,
  $a,
  Sa,
  Ta,
  At,
  za,
  kt,
  Fa,
  Ya,
  fl,
  Cl,
  Ua,
  Nl,
  Dl
], Pl = Ne([...Al]);
console.log(
  "%c %s",
  "border: 1px solid #97E3FE;border-radius: 3px;padding: 2px 5px;color: white;font-weight:bolder;background: linear-gradient(to right, #fF717F,#CC54D1,#4EAFFA,#3DE1C3, #F7DA66)",
  "CyberPunk-UI"
);
const Gl = Pl.install;
export {
  Pl as default,
  Gl as install,
  Ne as makeInstaller
};
