import { defineComponent as G, useSlots as ne, computed as z, openBlock as i, createElementBlock as c, normalizeClass as E, createElementVNode as o, unref as ie, renderSlot as U, toDisplayString as F, ref as _, onUnmounted as oe, createBlock as de, Teleport as fe, createVNode as ve, TransitionGroup as he, withCtx as ge, Fragment as K, renderList as Z, createCommentVNode as R, normalizeStyle as D, watch as ee, nextTick as ue, onMounted as J, withDirectives as pe, createTextVNode as me, vShow as ye, watchEffect as $e, useCssVars as ce, getCurrentInstance as _e, createStaticVNode as Ce, reactive as ke, withModifiers as Se } from "vue";
const Ie = (e = []) => ({
  install: (t) => {
    e.forEach((n) => t.use(n));
  }
}), Y = (e, a) => (e.install = (t) => {
  for (const n of [e, ...Object.values({})])
    t.component(n.name, n);
}, e), Me = ["data-content"], Te = { key: 1 }, Ne = /* @__PURE__ */ G({
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
    const t = ne(), n = e, l = z(() => {
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
    }), s = z(() => {
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
    return (r, v) => (i(), c("div", {
      class: E(["cp-button", s.value])
    }, [
      o("div", {
        class: E(["button", l.value]),
        "data-content": n.content
      }, [
        ie(t) ? U(r.$slots, "default", { key: 0 }, void 0, !0) : (i(), c("span", Te, F(n.content), 1))
      ], 10, Me)
    ], 2));
  }
}), j = (e, a) => {
  const t = e.__vccOpts || e;
  for (const [n, l] of a)
    t[n] = l;
  return t;
}, Ee = /* @__PURE__ */ j(Ne, [["__scopeId", "data-v-c3d9b67f"]]), Le = Y(Ee), Be = { class: "notification-content" }, ze = {
  key: 0,
  class: "notification-icon"
}, Pe = { class: "notification-body" }, Re = {
  key: 0,
  class: "notification-title"
}, De = { class: "notification-message" }, Oe = {
  key: 1,
  class: "notification-actions"
}, Ae = ["onClick"], He = ["onClick"], Fe = /* @__PURE__ */ G({
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
    const n = e, l = t, s = _([]), r = _(!1);
    let v = 0;
    const u = (w) => {
      const I = ++v, d = w.actions && w.actions.length > 0, T = {
        id: I,
        title: w.title || "",
        message: w.message,
        type: w.type || "info",
        duration: w.duration !== void 0 ? w.duration : d ? 0 : n.duration,
        showClose: w.showClose !== void 0 ? w.showClose : !0,
        showIcon: w.showIcon !== void 0 ? w.showIcon : !0,
        actions: w.actions || [],
        effect: w.effect || n.effect,
        onClose: w.onClose || (() => {
        })
      };
      if (s.value.push(T), r.value = !0, T.duration > 0 && setTimeout(() => {
        f(I);
      }, T.duration), s.value.length > n.maxCount) {
        const b = s.value[0];
        f(b.id);
      }
      return I;
    }, f = (w) => {
      const I = s.value.findIndex((d) => d.id === w);
      if (I !== -1) {
        const d = s.value[I];
        d.onClose && d.onClose(), s.value.splice(I, 1), l("close", w);
      }
    }, $ = (w, I) => {
      I.callback && I.callback(), f(w.id);
    }, S = () => {
      s.value.length === 0 && (r.value = !1);
    }, m = () => {
      s.value.forEach((w) => {
        w.onClose && w.onClose();
      }), s.value = [], r.value = !1;
    };
    return a({
      // 创建不同类型的通知
      info: (w) => u({ ...w, type: "info" }),
      success: (w) => u({ ...w, type: "success" }),
      warning: (w) => u({ ...w, type: "warning" }),
      error: (w) => u({ ...w, type: "error" }),
      // 通用创建方法
      create: u,
      // 关闭方法
      close: f,
      // 清除所有
      clearAll: m
    }), oe(() => {
      m();
    }), (w, I) => (i(), de(fe, { to: "body" }, [
      r.value ? (i(), c("div", {
        key: 0,
        class: E(["cp-cyber-notification-container", `position-${e.position}`])
      }, [
        ve(he, {
          name: "notification",
          tag: "div",
          onAfterLeave: S
        }, {
          default: ge(() => [
            (i(!0), c(K, null, Z(s.value, (d) => (i(), c("div", {
              key: d.id,
              class: E(["cp-cyber-notification", `type-${d.type}`, `effect-${d.effect}`])
            }, [
              o("div", Be, [
                d.showIcon ? (i(), c("div", ze, [...I[0] || (I[0] = [
                  o("div", { class: "icon-circle" }, null, -1),
                  o("div", { class: "icon-symbol" }, null, -1)
                ])])) : R("", !0),
                o("div", Pe, [
                  d.title ? (i(), c("div", Re, F(d.title), 1)) : R("", !0),
                  o("div", De, F(d.message), 1),
                  d.actions && d.actions.length ? (i(), c("div", Oe, [
                    (i(!0), c(K, null, Z(d.actions, (T, b) => (i(), c("button", {
                      key: b,
                      class: "action-button",
                      onClick: (O) => $(d, T)
                    }, F(T.text), 9, Ae))), 128))
                  ])) : R("", !0)
                ]),
                d.showClose ? (i(), c("div", {
                  key: 1,
                  class: "notification-close",
                  onClick: (T) => f(d.id)
                }, [...I[1] || (I[1] = [
                  o("span", { class: "close-icon" }, "×", -1)
                ])], 8, He)) : R("", !0)
              ]),
              d.duration > 0 ? (i(), c("div", {
                key: 0,
                class: "notification-progress",
                style: D({ animationDuration: `${d.duration}ms` })
              }, null, 4)) : R("", !0),
              I[2] || (I[2] = o("div", { class: "notification-glitch-effect" }, null, -1)),
              I[3] || (I[3] = o("div", { class: "notification-hologram-effect" }, null, -1))
            ], 2))), 128))
          ]),
          _: 1
        })
      ], 2)) : R("", !0)
    ]));
  }
}), Ge = /* @__PURE__ */ j(Fe, [["__scopeId", "data-v-5b833339"]]), Ye = Y(Ge), We = { class: "tooltip-inner" }, Ve = { class: "tooltip-content" }, qe = /* @__PURE__ */ G({
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
    const t = e, n = a, l = _(!1), s = _(null), r = _(null), v = _(null), u = _(t.position), f = _({}), $ = () => {
      if (!s.value || !r.value || t.position !== "auto")
        return t.position;
      const g = s.value.getBoundingClientRect(), C = r.value.getBoundingClientRect(), M = window.innerWidth, N = window.innerHeight, x = g.top, y = M - g.right, k = N - g.bottom, H = g.left, q = [
        { position: "top", space: x },
        { position: "right", space: y },
        { position: "bottom", space: k },
        { position: "left", space: H }
      ];
      q.sort((W, te) => te.space - W.space);
      const A = C.height || 50, L = C.width || 150;
      for (const W of q)
        if (W.position === "top" && W.space >= A + 10 || W.position === "bottom" && W.space >= A + 10 || W.position === "left" && W.space >= L + 10 || W.position === "right" && W.space >= L + 10)
          return W.position;
      return "top";
    }, S = z(() => typeof t.width == "number" ? `${t.width}px` : t.width), m = () => {
      v.value && clearTimeout(v.value), v.value = window.setTimeout(() => {
        l.value = !0, ue(() => {
          t.position === "auto" ? u.value = $() : u.value = t.position, I(), n("show");
        });
      }, t.delay);
    }, w = () => {
      v.value && clearTimeout(v.value), v.value = window.setTimeout(() => {
        l.value = !1, n("hide");
      }, 100);
    }, I = () => {
      if (!s.value || !r.value) return;
      const g = s.value.getBoundingClientRect(), C = r.value.getBoundingClientRect(), M = window.pageYOffset || document.documentElement.scrollTop, N = window.pageXOffset || document.documentElement.scrollLeft;
      let x = 0, y = 0;
      const k = 10;
      switch (u.value) {
        case "top":
          x = g.left + g.width / 2 - C.width / 2 + N, y = g.top - C.height - k + M;
          break;
        case "right":
          x = g.right + k + N, y = g.top + g.height / 2 - C.height / 2 + M;
          break;
        case "bottom":
          x = g.left + g.width / 2 - C.width / 2 + N, y = g.bottom + k + M;
          break;
        case "left":
          x = g.left - C.width - k + N, y = g.top + g.height / 2 - C.height / 2 + M;
          break;
      }
      (() => {
        const q = window.innerWidth, A = window.innerHeight, L = 10;
        x < L ? x = L : x + C.width > q - L && (x = q - C.width - L), y < L ? y = L : y + C.height > A - L && (y = A - C.height - L);
      })(), f.value = {
        left: `${x}px`,
        top: `${y}px`,
        width: S.value
      };
    }, d = () => {
      t.trigger === "hover" && m();
    }, T = () => {
      t.trigger === "hover" && w();
    }, b = () => {
      t.trigger === "click" && (l.value ? w() : m());
    }, O = () => {
      t.trigger === "focus" && m();
    }, p = () => {
      t.trigger === "focus" && w();
    }, P = () => {
      l.value && (t.position === "auto" && (u.value = $()), I());
    }, h = () => {
      l.value && (B && clearTimeout(B), B = setTimeout(() => {
        I();
      }, 16));
    };
    ee(
      () => t.position,
      (g) => {
        l.value && ue(() => {
          g === "auto" ? u.value = $() : u.value = g, I();
        });
      }
    );
    let V = [];
    const X = (g) => {
      let C = [], M = g.parentElement;
      for (; M; ) {
        const N = window.getComputedStyle(M);
        /(auto|scroll)/.test(N.overflow + N.overflowY + N.overflowX) && C.push(M), M = M.parentElement;
      }
      return C.push(document.documentElement), C;
    };
    J(() => {
      if (window.addEventListener("resize", P), window.addEventListener("scroll", h, { passive: !0 }), document.addEventListener("click", (g) => {
        if (l.value && t.trigger === "click") {
          const C = g.target;
          r.value && !r.value.contains(C) && s.value && !s.value.contains(C) && w();
        }
      }), s.value) {
        V = X(s.value);
        const g = () => {
          B && clearTimeout(B), B = setTimeout(() => {
            l.value && I();
          }, 16);
        };
        V.forEach((C) => {
          C.addEventListener("scroll", g);
        });
      }
    });
    let B = null;
    return oe(() => {
      window.removeEventListener("resize", P), window.removeEventListener("scroll", h), V.forEach((g) => {
        g.removeEventListener("scroll", h);
      }), v.value && clearTimeout(v.value), B && clearTimeout(B);
    }), (g, C) => (i(), c("div", null, [
      o("div", {
        ref_key: "triggerRef",
        ref: s,
        class: "tooltip-trigger",
        onMouseenter: d,
        onMouseleave: T,
        onClick: b,
        onFocus: O,
        onBlur: p
      }, [
        U(g.$slots, "default", {}, void 0, !0)
      ], 544),
      (i(), de(fe, { to: "body" }, [
        pe(o("div", {
          ref_key: "tooltipRef",
          ref: r,
          class: E([
            "cp-cyber-tooltip",
            `theme-${e.theme}`,
            `effect-${e.effect}`,
            `position-${u.value}`
          ]),
          style: D(f.value)
        }, [
          C[2] || (C[2] = o("div", { class: "tooltip-arrow" }, null, -1)),
          o("div", We, [
            o("div", Ve, [
              U(g.$slots, "content", {}, () => [
                me(F(e.content), 1)
              ], !0)
            ]),
            C[0] || (C[0] = o("div", { class: "tooltip-scanline" }, null, -1)),
            C[1] || (C[1] = o("div", { class: "tooltip-glitch" }, null, -1))
          ])
        ], 6), [
          [ye, l.value]
        ])
      ]))
    ]));
  }
}), je = /* @__PURE__ */ j(qe, [["__scopeId", "data-v-3de3033d"]]), Xe = Y(je), Ue = { class: "progress-track" }, Ke = {
  key: 0,
  class: "percentage-inside"
}, Ze = { class: "tick-marks" }, Qe = {
  key: 0,
  class: "percentage-outside"
}, Je = {
  key: 1,
  class: "status-indicator"
}, et = { class: "status-text" }, tt = /* @__PURE__ */ G({
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
    const a = e, t = z(() => Math.min(100, Math.max(0, a.percentage)).toFixed(0)), n = z(() => {
      const l = Number(t.value);
      return l < 30 ? "INITIALIZING" : l < 60 ? "PROCESSING" : l < 90 ? "LOADING" : l < 100 ? "ALMOST" : "COMPLETE";
    });
    return (l, s) => (i(), c("div", {
      class: E(["cyber-progress", [`theme-${e.theme}`, { animated: e.animated }]])
    }, [
      o("div", Ue, [
        s[0] || (s[0] = o("div", { class: "track-grid" }, null, -1)),
        o("div", {
          class: "progress-bar",
          style: D({ width: e.percentage + "%" })
        }, [
          e.showPercentage && e.percentagePosition === "inside" ? (i(), c("span", Ke, F(t.value) + "% ", 1)) : R("", !0)
        ], 4),
        o("div", Ze, [
          (i(), c(K, null, Z(10, (r) => o("span", {
            key: r,
            class: E(["tick", { active: r * 10 <= e.percentage }])
          }, null, 2)), 64))
        ])
      ]),
      e.showPercentage && e.percentagePosition === "outside" ? (i(), c("span", Qe, F(t.value) + "% ", 1)) : R("", !0),
      e.showStatus ? (i(), c("div", Je, [
        s[1] || (s[1] = o("div", { class: "indicator-dot" }, null, -1)),
        o("span", et, F(n.value), 1)
      ])) : R("", !0)
    ], 2));
  }
}), at = /* @__PURE__ */ j(tt, [["__scopeId", "data-v-44363fb0"]]), st = Y(at), lt = {
  key: 0,
  class: "prefix"
}, nt = { class: "counter-container" }, ot = {
  key: 0,
  class: "separator"
}, rt = { class: "digit-top" }, it = { class: "digit-bottom" }, ct = { class: "digit-top flip-top" }, ut = { class: "digit-bottom flip-bottom" }, dt = {
  key: 1,
  class: "suffix"
}, ft = /* @__PURE__ */ G({
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
    const a = e, t = _(Number(a.from)), n = _(Number(a.value)), l = _(null), s = _(null), r = _(""), v = (d) => {
      const T = Math.pow(10, a.decimal);
      let O = (Math.round(d * T) / T).toFixed(a.decimal);
      if (a.separator) {
        const p = O.split(".");
        p[0] = p[0].replace(/\B(?=(\d{3})+(?!\d))/g, a.separator), O = p.join(".");
      }
      return O;
    }, u = z(() => v(t.value)), f = z(() => u.value.split("")), $ = (d) => d === a.separator || d === ".", S = (d) => !r.value || d >= r.value.length ? !1 : r.value[d] !== f.value[d] && !$(f.value[d]), m = (d) => {
      l.value === null && (l.value = d);
      const T = d - l.value, b = Math.min(T / a.duration, 1), O = Number(a.from), p = Number(a.to !== null ? a.to : n.value), P = O + (p - O) * w(b);
      t.value = P, b < 1 ? s.value = requestAnimationFrame(m) : (t.value = p, l.value = null);
    }, w = (d) => 1 - Math.pow(1 - d, 4), I = () => {
      r.value = u.value, s.value !== null && cancelAnimationFrame(s.value), l.value = null, s.value = requestAnimationFrame(m);
    };
    return ee(() => a.value, (d) => {
      n.value = Number(d), I();
    }), ee(() => a.to, (d) => {
      d !== null && (n.value = Number(d), I());
    }), J(() => {
      Number(a.from) !== Number(a.value) && I();
    }), oe(() => {
      s.value !== null && cancelAnimationFrame(s.value);
    }), (d, T) => (i(), c("div", {
      class: E(["cp-digital-counter", `theme-${e.theme}`])
    }, [
      e.prefix ? (i(), c("span", lt, F(e.prefix), 1)) : R("", !0),
      o("div", nt, [
        (i(!0), c(K, null, Z(f.value, (b, O) => (i(), c("div", {
          key: O,
          class: "digit-container"
        }, [
          $(b) ? (i(), c("div", ot, F(b), 1)) : (i(), c("div", {
            key: 1,
            class: E(["digit-flipper", { animate: S(O) }])
          }, [
            o("div", rt, F(b), 1),
            o("div", it, F(b), 1),
            o("div", ct, F(b), 1),
            o("div", ut, F(b), 1)
          ], 2))
        ]))), 128))
      ]),
      e.suffix ? (i(), c("span", dt, F(e.suffix), 1)) : R("", !0)
    ], 2));
  }
}), vt = /* @__PURE__ */ j(ft, [["__scopeId", "data-v-41a40b63"]]), ht = Y(vt), gt = {
  class: "cp-full-page",
  id: "page-scroll"
}, pt = ["onClick"], mt = /* @__PURE__ */ G({
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
    const t = e, n = a, l = _();
    $e(() => {
      l.value?.style && (l.value.style.transform = r.value);
    });
    const s = z(() => {
      v.value = !0;
      let h = 0;
      return document.getElementById("page-scroll")?.clientHeight ? h = document.getElementById("page-scroll")?.clientHeight ?? 0 : h = window.innerHeight, h;
    }), r = z(() => `translateY(-${b.value * s.value}px)`), v = _(!1), u = _(!0);
    function f(h) {
      v.value = !1, u.value && (u.value = !1, T(h), setTimeout(() => {
        u.value = !0;
      }, 500));
    }
    const $ = _(0), S = _(0), m = _(0);
    function w(h) {
      $.value = h.touches[0].pageY || h.changedTouches[0].pageY;
    }
    function I(h) {
      h.preventDefault(), v.value = !1, S.value = h.changedTouches[0].pageY || h.touches[0].pageY, m.value = S.value - $.value, Math.abs(m.value) >= 60 ? (b.value < t.items.length - 1 && m.value < 0 && b.value++, b.value > 0 && m.value > 0 && b.value--) : (console.log("else", -b.value * s.value), l.value.style.transform = `translateY(-${b.value * s.value}px)`);
    }
    function d(h) {
      v.value = !0, h.preventDefault(), m.value = (h.changedTouches[0].pageY || h.touches[0].pageY) - $.value, !(b.value === t.items.length - 1 && m.value < 0 || b.value === 0 && m.value > 0) && (console.log("else", -b.value * s.value + m.value * -1), l.value.style.transform = `translateY(-${b.value * s.value + m.value * -1}px)`);
    }
    function T(h) {
      h.wheelDelta < 0 ? (O(), n("change", { from: t.items[b.value - 1], to: t.items[b.value], type: "next" })) : (p(), n("change", { from: t.items[b.value + 1], to: t.items[b.value], type: "last" }));
    }
    const b = _(0);
    function O() {
      b.value < t.items.length - 1 && (b.value++, n("toNext", b.value));
    }
    function p() {
      (b.value > 1 || b.value === 1) && (b.value--, n("toLast", b.value));
    }
    function P(h) {
      v.value = !1, b.value = h;
    }
    return (h, V) => (i(), c("div", gt, [
      o("div", {
        ref_key: "element",
        ref: l,
        class: E([{ activeTranstion: v.value }, "inner-box"]),
        onMousewheel: f,
        onTouchstart: w,
        onTouchend: I,
        onTouchmove: d
      }, [
        U(h.$slots, "default", {}, void 0, !0)
      ], 34),
      o("div", {
        class: E(["cp-full-dot", t.position])
      }, [
        (i(!0), c(K, null, Z(t.items, (X, B) => (i(), c("div", {
          onClick: (g) => P(B),
          class: "cp-full-dot-item"
        }, [
          o("div", {
            class: E(["cp-full-dot-item-bg", { active: B === b.value }])
          }, null, 2),
          t.showTitle ? pe((i(), c("div", {
            key: 0,
            class: "show-dec"
          }, F(X.title), 513)), [
            [ye, B === b.value]
          ]) : R("", !0)
        ], 8, pt))), 256))
      ], 2)
    ]));
  }
}), yt = /* @__PURE__ */ j(mt, [["__scopeId", "data-v-7495e5be"]]), bt = Y(yt), wt = ["src", "alt"], xt = {
  key: 1,
  class: "loading-placeholder"
}, $t = {
  key: 2,
  class: "error-placeholder"
}, _t = /* @__PURE__ */ G({
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
    const t = e, n = a, l = _(null), s = _(null), r = _(null), v = _(!1), u = _(!1), f = _(!1), $ = _(null), S = _(null), m = z(() => t.intensity / 10), w = () => {
      v.value = !0, u.value = !1, setTimeout(() => {
        d(), t.triggerMode === "auto" ? X() : t.triggerMode === "random" && B();
      }, 0);
    }, I = () => {
      u.value = !0, v.value = !1, console.error("Failed to load image:", t.src);
    }, d = () => {
      if (!r.value || !s.value) return;
      const x = s.value, y = r.value, k = y.getContext("2d");
      if (k) {
        y.width = x.naturalWidth, y.height = x.naturalHeight;
        try {
          k.drawImage(x, 0, 0), S.value = k.getImageData(0, 0, y.width, y.height);
        } catch (H) {
          console.error("Failed to get image data (possibly CORS issue):", H), u.value = !0;
        }
      }
    }, T = (x, y) => {
      if (!S.value) return;
      const k = x.canvas, H = x.getImageData(0, 0, k.width, k.height), q = H.data, A = S.value.data, L = Math.floor(20 * y), W = Math.floor(Math.random() * L), te = Math.floor(Math.random() * L);
      for (let ae = 0; ae < k.height; ae++)
        for (let se = 0; se < k.width; se++) {
          const Q = (ae * k.width + se) * 4, le = Math.min(Math.max(se + W, 0), k.width - 1), be = (Math.min(Math.max(ae + te, 0), k.height - 1) * k.width + le) * 4;
          q[Q] = A[be];
          const we = Math.min(Math.max(se - W, 0), k.width - 1), xe = (Math.min(Math.max(ae - te, 0), k.height - 1) * k.width + we) * 4;
          q[Q + 2] = A[xe + 2], q[Q + 1] = A[Q + 1];
        }
      x.putImageData(H, 0, 0);
    }, b = (x, y) => {
      if (!S.value) return;
      const k = x.canvas;
      x.putImageData(S.value, 0, 0);
      const H = Math.max(1, Math.floor(5 / y)), q = 0.5 + y * 0.1;
      for (let A = 0; A < k.height; A += H * 2)
        x.fillStyle = `rgba(255, 255, 255, ${q})`, x.fillRect(0, A, k.width, H);
    }, O = (x, y) => {
      if (!S.value) return;
      const k = x.canvas;
      x.putImageData(S.value, 0, 0);
      const H = Math.max(4, Math.floor(y * 8));
      if (Math.random() > 0.5)
        for (let A = 0; A < k.height; A += H)
          for (let L = 0; L < k.width; L += H) {
            const W = x.getImageData(L, A, 1, 1).data;
            x.fillStyle = `rgb(${W[0]}, ${W[1]}, ${W[2]})`, x.fillRect(L, A, H, H);
          }
      else {
        const A = Math.floor(y * 3);
        for (let L = 0; L < A; L++) {
          const W = Math.floor(Math.random() * (k.width - 50)), te = Math.floor(Math.random() * (k.height - 50)), ae = Math.floor(Math.random() * 100 * y) + 30, se = Math.floor(Math.random() * 80 * y) + 20;
          for (let Q = te; Q < te + se; Q += H)
            for (let le = W; le < W + ae; le += H)
              if (le < k.width && Q < k.height) {
                const re = x.getImageData(le, Q, 1, 1).data;
                x.fillStyle = `rgb(${re[0]}, ${re[1]}, ${re[2]})`, x.fillRect(le, Q, H, H);
              }
        }
      }
    }, p = (x, y) => {
      if (!S.value) return;
      const k = x.canvas, H = x.getImageData(0, 0, k.width, k.height), q = H.data, A = 0.2 + y * 0.05;
      for (let L = 0; L < q.length; L += 4)
        Math.random() < A && (Math.random() > 0.5 ? (q[L] = 255, q[L + 1] = 255, q[L + 2] = 255) : (q[L] = Math.floor(Math.random() * 256), q[L + 1] = Math.floor(Math.random() * 256), q[L + 2] = Math.floor(Math.random() * 256)));
      x.putImageData(H, 0, 0);
    }, P = (x, y) => {
      [...["rgb-shift", "scanline", "pixelate", "noise"]].sort(() => 0.5 - Math.random()).slice(0, 2 + Math.floor(Math.random() * 2)).forEach((A) => {
        switch (A) {
          case "rgb-shift":
            T(x, y);
            break;
          case "scanline":
            b(x, y);
            break;
          case "pixelate":
            O(x, y);
            break;
          case "noise":
            p(x, y);
            break;
        }
      });
    }, h = () => {
      if (!r.value || !S.value) return;
      const y = r.value.getContext("2d");
      if (y) {
        switch (y.putImageData(S.value, 0, 0), t.glitchType) {
          case "rgb-shift":
            T(y, m.value);
            break;
          case "scanline":
            b(y, m.value);
            break;
          case "pixelate":
            O(y, m.value);
            break;
          case "noise":
            p(y, m.value);
            break;
          case "combined":
            P(y, m.value);
            break;
        }
        f.value = !0, n("glitch-start");
      }
    }, V = () => {
      if (!r.value || !S.value) return;
      const y = r.value.getContext("2d");
      y && (y.putImageData(S.value, 0, 0), f.value = !1, n("glitch-end"));
    }, X = () => {
      $.value && clearInterval($.value), h(), t.animated && ($.value = window.setInterval(() => {
        h();
      }, t.interval));
    }, B = () => {
      $.value && clearInterval($.value), $.value = window.setInterval(() => {
        Math.random() < 0.5 && (h(), setTimeout(() => {
          V();
        }, 200 + Math.random() * 300));
      }, t.interval);
    }, g = () => {
      $.value && (clearInterval($.value), $.value = null), V();
    }, C = () => {
      t.triggerMode === "hover" && X();
    }, M = () => {
      t.triggerMode === "hover" && !t.animated && g();
    }, N = () => {
      t.triggerMode === "click" && (f.value ? g() : X());
    };
    return ee(() => [t.src, t.glitchType, t.intensity], () => {
      t.src && (v.value = !1, u.value = !1), f.value && h();
    }), J(() => {
      s.value && s.value.complete && s.value.naturalHeight !== 0 && w();
    }), oe(() => {
      $.value && clearInterval($.value);
    }), (x, y) => (i(), c("div", {
      class: E(["cp-glitch-image", { animated: e.animated }]),
      onMouseenter: C,
      onMouseleave: M,
      onClick: N
    }, [
      o("div", {
        class: "image-container",
        ref_key: "imageContainerRef",
        ref: l
      }, [
        o("img", {
          src: e.src,
          alt: e.alt,
          ref_key: "imageRef",
          ref: s,
          class: "original-image",
          crossOrigin: "anonymous",
          onLoad: w,
          onError: I
        }, null, 40, wt),
        v.value && !u.value ? (i(), c("canvas", {
          key: 0,
          ref_key: "glitchCanvasRef",
          ref: r,
          class: "glitch-canvas"
        }, null, 512)) : R("", !0),
        !v.value && !u.value ? (i(), c("div", xt, [...y[0] || (y[0] = [
          o("div", { class: "loading-text" }, "Loading...", -1)
        ])])) : R("", !0),
        u.value ? (i(), c("div", $t, [...y[1] || (y[1] = [
          o("div", { class: "error-text" }, "Image Load Failed", -1)
        ])])) : R("", !0)
      ], 512)
    ], 34));
  }
}), Ct = /* @__PURE__ */ j(_t, [["__scopeId", "data-v-b2947767"]]), kt = Y(Ct), St = ["data-progress"], It = { class: "progress-container" }, Mt = {
  key: 0,
  class: "progress-text"
}, Tt = /* @__PURE__ */ G({
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
    const a = e, t = _(null), n = _(null), l = z(() => a.direction === "vertical" ? "vertical" : "horizontal"), s = z(() => {
      const u = a.direction === "vertical" ? "height" : "width", f = a.indeterminate ? "100%" : `${a.progress}%`;
      return {
        [u]: f,
        backgroundColor: a.color,
        boxShadow: `0 0 ${a.glitchIntensity * 2}px ${a.color}`
      };
    }), r = () => {
      if (!t.value) return;
      const u = t.value.querySelector(".glitch-effect");
      if (!u) return;
      const f = () => {
        if (!u) return;
        if (Math.random() < a.glitchIntensity / 20) {
          const S = Math.random() * a.glitchIntensity - a.glitchIntensity / 2, m = Math.random() * a.glitchIntensity - a.glitchIntensity / 2, w = Math.random() * a.glitchIntensity - a.glitchIntensity / 2, I = Math.random() * a.glitchIntensity / 2;
          u.style.transform = `translate(${S}px, ${m}px) skew(${w}deg)`, u.style.filter = `blur(${I}px)`, u.style.opacity = "1", setTimeout(() => {
            u && (u.style.transform = "translate(0, 0) skew(0)", u.style.filter = "blur(0)", u.style.opacity = "0");
          }, 150);
        }
      };
      n.value = window.setInterval(() => {
        f();
      }, 500);
    };
    let v = a.progress;
    return ee(() => a.progress, (u) => {
      if (u !== v) {
        if (t.value) {
          const f = t.value.querySelector(".glitch-effect");
          if (f) {
            const $ = Math.random() * a.glitchIntensity * 2 - a.glitchIntensity, S = Math.random() * a.glitchIntensity - a.glitchIntensity / 2;
            f.style.transform = `translate(${$}px, ${S}px)`, f.style.opacity = "1", setTimeout(() => {
              f && (f.style.transform = "translate(0, 0)", f.style.opacity = "0");
            }, 300);
          }
        }
        v = u;
      }
    }), J(() => {
      r();
    }), oe(() => {
      n.value && clearInterval(n.value);
    }), (u, f) => (i(), c("div", {
      class: E(["cp-glitch-progress", l.value, { indeterminate: e.indeterminate }]),
      "data-progress": e.progress
    }, [
      o("div", It, [
        o("div", {
          class: "progress-bar",
          style: D(s.value),
          ref_key: "progressBarRef",
          ref: t
        }, [...f[0] || (f[0] = [
          o("div", { class: "glitch-effect" }, null, -1)
        ])], 4),
        e.showText && !e.indeterminate ? (i(), c("div", Mt, F(e.progress) + "% ", 1)) : R("", !0)
      ])
    ], 10, St));
  }
}), Nt = /* @__PURE__ */ j(Tt, [["__scopeId", "data-v-27854e11"]]), Et = Y(Nt), Lt = { class: "glow-text" }, Bt = /* @__PURE__ */ G({
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
    }), (t, n) => (i(), c("div", Lt, [
      U(t.$slots, "default", {}, void 0, !0)
    ]));
  }
}), zt = /* @__PURE__ */ j(Bt, [["__scopeId", "data-v-7d666f1f"]]), Pt = Y(zt), Rt = ["tabindex", "aria-disabled", "aria-label"], Dt = { class: "holo-card-content" }, Ot = {
  key: 0,
  class: "card-title"
}, At = /* @__PURE__ */ G({
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
    ce((d) => ({
      v558892ac: n.hologramColor
    }));
    const a = _e(), t = ne(), n = e, l = _({ x: 0, y: 0 }), s = _(!1), u = ((d, T) => {
      let b;
      return function() {
        const O = arguments, p = a;
        b || (d.apply(p, O), b = !0, setTimeout(() => b = !1, T));
      };
    })((d) => {
      if (n.disabled) return;
      const T = d.currentTarget.getBoundingClientRect();
      l.value = {
        x: (d.clientX - T.left) / T.width * 2 - 1,
        y: (d.clientY - T.top) / T.height * 2 - 1
      }, s.value = !0;
    }, 16), f = () => {
      s.value = !1, l.value = { x: 0, y: 0 };
    }, $ = () => {
      n.disabled || (s.value = !0, l.value = { x: 0, y: 0 });
    }, S = z(() => [(() => {
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
    })()]), m = z(() => {
      const d = {};
      if (n.rounded || (d.borderRadius = "0"), n.disabled && (d.cursor = "not-allowed", d.opacity = "0.6"), !s.value || n.disabled) return d;
      const T = l.value.y * 10, b = -l.value.x * 10;
      return {
        ...d,
        transform: `perspective(1000px) rotateX(${T}deg) rotateY(${b}deg) scale3d(1.05, 1.05, 1.05)`,
        transition: "transform 0.1s ease"
      };
    }), w = z(() => {
      if (!s.value || n.disabled) return {};
      const d = Math.max(-50, Math.min(50, l.value.x * 10)), T = Math.max(-50, Math.min(50, l.value.y * 10));
      return {
        background: `radial-gradient(circle at ${50 + d}% ${50 + T}%, ${n.hologramColor}33, transparent 70%)`,
        opacity: 0.8,
        transition: "background 0.1s ease"
      };
    }), I = z(() => {
      const d = n.glowIntensity / 100;
      return {
        boxShadow: `0 0 ${10 + n.glowIntensity / 5}px ${n.hologramColor}${Math.floor(d * 99).toString(16).padStart(2, "0")}`,
        opacity: s.value && !n.disabled ? d : d * 0.5
      };
    });
    return J(() => {
      ue(() => {
      });
    }), (d, T) => (i(), c("div", {
      class: E([
        "cp-holo-card",
        `depth-${e.depth}`,
        S.value,
        `theme-${e.theme}`,
        `effect-${e.effect}`
      ]),
      style: D(m.value),
      onMousemove: T[0] || (T[0] = //@ts-ignore
      (...b) => ie(u) && ie(u)(...b)),
      onMouseleave: f,
      onFocus: $,
      onBlur: f,
      tabindex: e.disabled ? -1 : 0,
      role: "button",
      "aria-disabled": e.disabled,
      "aria-label": e.title
    }, [
      o("div", Dt, [
        e.title && !ie(t).title ? (i(), c("div", Ot, F(e.title), 1)) : R("", !0),
        U(d.$slots, "title", {}, void 0, !0),
        U(d.$slots, "default", {}, void 0, !0),
        U(d.$slots, "footer", {}, void 0, !0)
      ]),
      o("div", {
        class: "holo-card-hologram-effect",
        style: D(w.value)
      }, null, 4),
      o("div", {
        class: "holo-card-glow",
        style: D(I.value)
      }, null, 4)
    ], 46, Rt));
  }
}), Ht = /* @__PURE__ */ j(At, [["__scopeId", "data-v-fe164a1d"]]), Ft = Y(Ht), Gt = { class: "loader-container" }, Yt = {
  key: 0,
  class: "cube-loader"
}, Wt = {
  key: 1,
  class: "sphere-loader"
}, Vt = { class: "sphere" }, qt = {
  key: 2,
  class: "datastream-loader"
}, jt = {
  key: 3,
  class: "circuit-loader"
}, Xt = { class: "circuit-board" }, Ut = {
  key: 0,
  class: "loader-text"
}, Kt = { class: "typing-text" }, Zt = /* @__PURE__ */ G({
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
    ce((u) => ({
      c40498b2: u.$props.color,
      v7f665050: t
    }));
    const a = e, t = (6 / a.speed).toString() + "s", n = z(() => {
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
    }), l = _(""), s = _(0), r = _(null), v = () => {
      if (!a.text) return;
      s.value = 0, l.value = "";
      const u = () => {
        s.value < a.text.length ? (l.value += a.text[s.value], s.value++) : setTimeout(() => {
          s.value = 0, l.value = "";
        }, 1e3);
      }, f = 100 / a.speed;
      r.value = window.setInterval(u, f);
    };
    return ee(() => a.text, () => {
      r.value && clearInterval(r.value), v();
    }), J(() => {
      v();
    }), oe(() => {
      r.value && clearInterval(r.value);
    }), (u, f) => (i(), c("div", {
      class: E(["cp-holo-loader", n.value, { "transparent-bg": e.transparent }])
    }, [
      o("div", Gt, [
        o("div", {
          class: E(["holo-projection", `type-${e.type}`])
        }, [
          e.type === "cube" || e.type === "split" ? (i(), c("div", Yt, [...f[0] || (f[0] = [
            Ce('<div class="cube" data-v-6df1b911><div class="cube-face front" data-v-6df1b911></div><div class="cube-face back" data-v-6df1b911></div><div class="cube-face right" data-v-6df1b911></div><div class="cube-face left" data-v-6df1b911></div><div class="cube-face top" data-v-6df1b911></div><div class="cube-face bottom" data-v-6df1b911></div></div>', 1)
          ])])) : e.type === "sphere" ? (i(), c("div", Wt, [
            o("div", Vt, [
              (i(), c(K, null, Z(3, ($) => o("div", {
                class: "sphere-ring",
                key: $
              })), 64))
            ])
          ])) : e.type === "datastream" ? (i(), c("div", qt, [
            (i(), c(K, null, Z(10, ($) => o("div", {
              class: "data-line",
              key: $
            })), 64))
          ])) : e.type === "circuit" ? (i(), c("div", jt, [
            o("div", Xt, [
              (i(), c(K, null, Z(5, ($) => o("div", {
                class: "circuit-path",
                key: $
              })), 64)),
              (i(), c(K, null, Z(6, ($) => o("div", {
                class: "circuit-node",
                key: $ + 10
              })), 64))
            ])
          ])) : R("", !0)
        ], 2),
        e.text ? (i(), c("div", Ut, [
          o("span", Kt, F(l.value), 1),
          f[1] || (f[1] = o("span", { class: "cursor" }, "_", -1))
        ])) : R("", !0),
        f[2] || (f[2] = o("div", { class: "holo-base" }, [
          o("div", { class: "base-glow" })
        ], -1))
      ])
    ], 2));
  }
}), Qt = /* @__PURE__ */ j(Zt, [["__scopeId", "data-v-6df1b911"]]), Jt = Y(Qt), ea = { class: "header-row" }, ta = { class: "header-text" }, aa = { class: "cell-text" }, sa = {
  key: 0,
  class: "row-scanline"
}, la = /* @__PURE__ */ G({
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
    const a = e, t = _(null), n = _(!1), l = _(!0), s = _(1), r = _(0), v = _(!1), u = _(0), f = ke([]);
    a.data.length > 0 && f.splice(0, f.length, ...a.data);
    let $ = 0;
    const S = () => `row-${++$}-${Date.now()}`, m = z(() => a.rowNum * a.rowHeight), w = z(() => m.value), I = z(() => {
      const g = f.length, C = a.rowNum;
      if (g === 0) return [];
      if (g <= C)
        return f.map((y, k) => ({
          key: y._uniqueKey || S(),
          data: y,
          index: k
        }));
      let M = [...f];
      g > C && g < 2 * C && (M = [...M, ...M]), M = M.map((y, k) => ({
        key: y._uniqueKey || S(),
        data: y,
        index: k,
        scroll: k
      }));
      let N = M.slice(r.value);
      return N.push(...M.slice(0, r.value)), N.slice(0, C);
    }), d = (g) => a.columns[g]?.width ? a.columns[g].width : "auto", T = (g) => g === "center" ? "center" : g === "right" ? "flex-end" : "flex-start", b = () => a.theme === "neon" ? "rgba(0, 230, 246, 0.15)" : a.theme === "hologram" ? "rgba(138, 43, 226, 0.2)" : a.theme === "terminal" ? "rgba(0, 255, 0, 0.15)" : a.theme === "matrix" ? "rgba(0, 255, 65, 0.15)" : "rgba(0, 230, 246, 0.15)", O = (g) => (r.value + g) % f.length % 2 === 0 ? "var(--table-row-bg)" : "var(--table-row-hover)", p = (g, C) => {
      const M = C.split(".");
      let N = g;
      for (const x of M)
        N = N?.[x];
      return N ?? "";
    }, P = async () => {
      if (!(n.value || !l.value)) {
        n.value = !0;
        try {
          if (a.remoteMethod) {
            const g = await a.remoteMethod({
              page: s.value,
              size: a.bufferSize * 10
            });
            if (g.data && g.data.length > 0) {
              const C = g.data.map((M) => (M._uniqueKey || (M._uniqueKey = S()), M));
              s.value === 1 ? f.splice(0, f.length, ...C) : f.push(...C), a.data && a.data.splice(0, a.data.length, ...f);
            }
            l.value = g.hasMore ?? !1, s.value++;
          } else a.loadMore && await a.loadMore();
        } catch (g) {
          console.error("Failed to load more data:", g), l.value = !1;
        } finally {
          n.value = !1;
        }
      }
    }, h = async () => {
      if (!a.autoScroll || v.value) return;
      const g = f.length, C = a.rowNum;
      if (g <= C || (await new Promise((N) => setTimeout(N, a.waitTime)), v.value)) return;
      const M = async () => {
        if (v.value) return;
        const N = u.value, x = a.scrollType === "page" ? C : 1;
        r.value = (r.value + x) % g;
        const y = a.scrollType === "page" ? 500 : 300;
        await new Promise((k) => setTimeout(k, y)), !(u.value !== N || v.value) && (await new Promise((k) => setTimeout(k, a.waitTime)), !(u.value !== N || v.value) && M());
      };
      M();
    }, V = () => {
      u.value = (u.value + 1) % 999999;
    }, X = () => {
      a.hoverPause && (v.value = !0, V());
    }, B = () => {
      a.hoverPause && (v.value = !1, h());
    };
    return J(() => {
      a.remoteMethod && f.length === 0 && P(), a.autoScroll && h();
    }), (g, C) => (i(), c("div", {
      class: E(["cyber-infinite-table", [`theme-${e.theme}`, `scroll-${e.scrollType}`]])
    }, [
      o("div", {
        class: "table-header",
        style: D({ backgroundColor: b() })
      }, [
        o("div", ea, [
          (i(!0), c(K, null, Z(e.columns, (M, N) => (i(), c("div", {
            key: M.field || N,
            class: "header-cell",
            style: D({
              width: d(N),
              minWidth: M.minWidth || "100px",
              textAlign: M.align || "left"
            })
          }, [
            o("div", {
              class: "header-content",
              style: D({ justifyContent: T(M.align || "left") })
            }, [
              o("span", ta, F(M.title), 1)
            ], 4)
          ], 4))), 128))
        ])
      ], 4),
      o("div", {
        class: "table-body",
        ref_key: "bodyRef",
        ref: t,
        onMouseenter: X,
        onMouseleave: B
      }, [
        o("div", {
          class: "rows-container",
          style: D({ height: w.value + "px" })
        }, [
          ve(he, { name: "scroll-list" }, {
            default: ge(() => [
              (i(!0), c(K, null, Z(I.value, (M) => (i(), c("div", {
                class: "table-row",
                key: M.key,
                style: D({
                  height: e.rowHeight + "px",
                  lineHeight: e.rowHeight + "px",
                  backgroundColor: O(M.index)
                })
              }, [
                (i(!0), c(K, null, Z(e.columns, (N, x) => (i(), c("div", {
                  key: N.field || x,
                  class: "table-cell",
                  style: D({
                    width: d(x),
                    minWidth: N.minWidth || "100px",
                    justifyContent: T(N.align || "left")
                  })
                }, [
                  U(g.$slots, N.field, {
                    row: M.data,
                    column: N
                  }, () => [
                    o("span", aa, F(p(M.data, N.field)), 1)
                  ], !0)
                ], 4))), 128)),
                e.showScanline ? (i(), c("div", sa)) : R("", !0)
              ], 4))), 128))
            ]),
            _: 3
          })
        ], 4)
      ], 544),
      C[0] || (C[0] = o("div", { class: "table-border-effect" }, null, -1))
    ], 2));
  }
}), na = /* @__PURE__ */ j(la, [["__scopeId", "data-v-a239aba5"]]), oa = Y(na), ra = /* @__PURE__ */ G({
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
    ne();
    const t = e, n = z(() => {
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
    }), l = z(() => {
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
    return (s, r) => (i(), c("div", {
      class: E(["cp-button-neno", l.value])
    }, [
      o("div", {
        class: E(["button", n.value, t.bg ? "show-bg" : ""])
      }, [
        r[0] || (r[0] = o("div", { class: "border" }, null, -1)),
        r[1] || (r[1] = o("div", { class: "border" }, null, -1)),
        r[2] || (r[2] = o("div", { class: "border" }, null, -1)),
        r[3] || (r[3] = o("div", { class: "border" }, null, -1)),
        U(s.$slots, "default", {}, void 0, !0)
      ], 2)
    ], 2));
  }
}), ia = /* @__PURE__ */ j(ra, [["__scopeId", "data-v-c8c24548"]]), ca = Y(ia), ua = ["aria-checked", "aria-disabled"], da = { class: "toggle-thumb" }, fa = {
  key: 0,
  class: "pulse-effect"
}, va = /* @__PURE__ */ G({
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
    ce((v) => ({
      v2ad8abbc: t.inActiveColor,
      v247239f2: t.activeColor
    }));
    const t = e, n = a, l = z(() => {
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
    }), s = z(() => {
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
    }), r = () => {
      if (t.disabled) return;
      const v = !t.modelValue;
      n("update:modelValue", v), n("change", v);
    };
    return (v, u) => (i(), c("div", {
      class: E(["cp-neon-toggle", s.value, l.value, { active: e.modelValue, disabled: e.disabled }]),
      onClick: r,
      "aria-checked": e.modelValue,
      role: "switch",
      "aria-disabled": e.disabled
    }, [
      u[0] || (u[0] = o("div", { class: "toggle-track" }, [
        o("div", { class: "toggle-track-inner" }),
        o("div", { class: "circuit-lines" })
      ], -1)),
      o("div", da, [
        e.pulseEffect && e.modelValue ? (i(), c("div", fa)) : R("", !0)
      ])
    ], 10, ua));
  }
}), ha = /* @__PURE__ */ j(va, [["__scopeId", "data-v-799d9482"]]), ga = Y(ha), pa = /* @__PURE__ */ G({
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
    ne();
    const t = e, n = z(() => {
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
    }), l = z(() => {
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
    return (s, r) => (i(), c("div", {
      class: E(["cp-button-neno", l.value])
    }, [
      o("div", {
        class: E(["button", n.value, t.bg ? "show-bg" : ""])
      }, [
        U(s.$slots, "default", {}, void 0, !0)
      ], 2)
    ], 2));
  }
}), ma = /* @__PURE__ */ j(pa, [["__scopeId", "data-v-f4ab33ea"]]), ya = Y(ma), ba = ["data-word"], wa = /* @__PURE__ */ G({
  name: "CyberText",
  __name: "text",
  props: {
    lineColor: {
      type: String,
      default: "#fff"
    }
  },
  setup(e) {
    const a = _(""), t = ne();
    if (t && t.default) {
      let l = t.default();
      a.value = l[0].children;
    }
    const n = e;
    return (l, s) => (i(), c("div", {
      class: "cp-text",
      "data-word": a.value
    }, [
      U(l.$slots, "default", {}, void 0, !0),
      o("div", {
        class: "cp-text-line",
        style: D("background: " + n.lineColor)
      }, null, 4)
    ], 8, ba));
  }
}), xa = /* @__PURE__ */ j(wa, [["__scopeId", "data-v-09017b4b"]]), $a = Y(xa), _a = /* @__PURE__ */ G({
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
    const a = e, t = (l, s) => {
      let r = `0px 0px ${l}`;
      for (let v = 1; v <= a.long; v++) {
        const u = n(l, v);
        r += `, ${s === "left" ? "-" : ""}${v}px ${v}px ${u}`;
      }
      return r;
    }, n = (l, s) => {
      const r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i.exec(l), v = /^rgba?\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})(,\s*([\d.]+))?\)$/i.exec(l);
      if (r) {
        const u = parseInt(r[1], 16), f = parseInt(r[2], 16), $ = parseInt(r[3], 16), S = r[4] ? parseInt(r[4], 16) / 255 : 1, m = Math.max(0, S - s * 0.05);
        return `rgba(${u}, ${f}, ${$}, ${m})`;
      } else if (v) {
        const u = parseInt(v[1], 10), f = parseInt(v[2], 10), $ = parseInt(v[3], 10), S = v[5] ? parseFloat(v[5]) : 1, m = Math.max(0, S - s * 0.05);
        return `rgba(${u}, ${f}, ${$}, ${m})`;
      } else
        throw new Error(`Unsupported color format: ${l}`);
    };
    return (l, s) => (i(), c("div", {
      class: E(["shadow-text", a.direction]),
      style: D({ textShadow: t(a.shadowColor, a.direction) })
    }, [
      U(l.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), Ca = /* @__PURE__ */ j(_a, [["__scopeId", "data-v-baec179b"]]), ka = Y(Ca), Sa = { class: "cp-typing" }, Ia = { class: "content" }, Ma = /* @__PURE__ */ G({
  name: "CyberTyping",
  __name: "typing",
  setup(e) {
    return (a, t) => (i(), c("div", Sa, [
      o("div", Ia, [
        U(a.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), Ta = /* @__PURE__ */ j(Ma, [["__scopeId", "data-v-c43f79f6"]]), Na = Y(Ta), Ea = ["src", "alt", "loading", "crossorigin"], La = {
  key: 1,
  class: "placeholder"
}, Ba = ["src"], za = {
  key: 2,
  class: "error-content"
}, Pa = /* @__PURE__ */ G({
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
    const a = /* @__PURE__ */ Object.assign({}), t = e, n = (m) => {
      if (m.startsWith("http://") || m.startsWith("https://") || m.startsWith("/"))
        return m;
      for (const [w, I] of Object.entries(a))
        if (w.includes(m) || m.includes(w.split("/").pop() || ""))
          return I;
      return m;
    }, l = _(!1), s = _(!1), r = _(""), v = z(() => {
      const m = {};
      return t.width !== "auto" && t.width !== void 0 && (m.width = typeof t.width == "number" ? `${t.width}px` : t.width), t.height !== "auto" && t.height !== void 0 && (m.height = typeof t.height == "number" ? `${t.height}px` : t.height), !m.width && !m.height && (m.display = "inline-block"), m;
    }), u = z(() => s.value && t.errorSrc ? `url(${t.errorSrc})` : r.value ? `url(${r.value})` : "none"), f = z(() => {
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
    }), $ = () => {
      r.value = n(t.src), l.value = !0, s.value = !1;
    }, S = () => {
      if (s.value = !0, t.errorSrc && t.errorSrc !== t.src) {
        const m = new Image();
        m.crossOrigin = t.crossorigin || "", m.src = n(t.errorSrc), m.onload = () => {
          r.value = n(t.errorSrc), l.value = !0;
        }, m.onerror = () => {
          l.value = !0;
        };
      } else
        l.value = !0;
    };
    return ee(() => t.src, () => {
      l.value = !1, s.value = !1, r.value = n(t.src);
    }, { immediate: !0 }), J(() => {
      t.src && (r.value = n(t.src));
    }), (m, w) => (i(), c("div", {
      class: "cyber-image-wrapper",
      style: D(v.value)
    }, [
      e.src ? (i(), c("img", {
        key: 0,
        src: e.src,
        alt: e.alt,
        loading: e.loading,
        crossorigin: e.crossorigin,
        class: "hidden-image",
        onLoad: $,
        onError: S
      }, null, 40, Ea)) : R("", !0),
      o("div", {
        class: E(["glitch", {
          "is-loaded": l.value && !s.value,
          "is-loading": !l.value && !s.value,
          "is-error": s.value,
          "no-glitch": e.disableGlitch
        }]),
        style: D({
          backgroundImage: u.value,
          backgroundSize: f.value,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        })
      }, [
        l.value && !s.value && !e.disableGlitch ? (i(), c("div", {
          key: 0,
          class: "glitch-layer",
          style: D({ backgroundImage: u.value })
        }, null, 4)) : R("", !0),
        !l.value && e.placeholder ? (i(), c("div", La, [
          U(m.$slots, "placeholder", {}, () => [
            o("img", {
              src: e.placeholder,
              alt: "Loading..."
            }, null, 8, Ba)
          ], !0)
        ])) : s.value ? (i(), c("div", za, [
          U(m.$slots, "error", {}, () => [
            me(F(e.errorContent), 1)
          ], !0)
        ])) : R("", !0),
        l.value && !s.value ? U(m.$slots, "default", { key: 3 }, void 0, !0) : R("", !0)
      ], 6)
    ], 4));
  }
}), Ra = /* @__PURE__ */ j(Pa, [["__scopeId", "data-v-c8293d7c"]]), Da = Y(Ra), Oa = { class: "cyber-magic-text" }, Aa = ["data-text"], Ha = /* @__PURE__ */ G({
  name: "CyberMagicText",
  __name: "magicText",
  setup(e) {
    const a = _(""), t = ne();
    if (t && t.default) {
      let n = t.default();
      a.value = n[0].children;
    }
    return (n, l) => (i(), c("div", Oa, [
      o("span", {
        class: "gradient-text",
        "data-text": a.value
      }, [
        U(n.$slots, "default")
      ], 8, Aa)
    ]));
  }
}), Fa = Y(Ha), Ga = { class: "imgWrap" }, Ya = ["src"], Wa = /* @__PURE__ */ G({
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
    ce((v) => ({
      v29922088: t.value + "px"
    }));
    const a = e, t = _(a.imgHeight);
    a.shadow && (t.value = a.imgHeight * 2);
    const n = _(a.imgList.length), l = s(a.imgWidth, 360 / n.value) * 1.6;
    function s(v, u) {
      const f = u * Math.PI / 180;
      return v / (2 * Math.sin(f / 2));
    }
    const r = (v) => {
      const u = 35 + (v + 1) * (360 / n.value), f = s(a.imgWidth, 360 / n.value);
      return {
        transform: `rotateY(${u}deg) translateZ(${f}px)`
      };
    };
    return (v, u) => (i(), c("div", {
      class: "container",
      style: D({
        "--container-width": `${l}px`,
        "--img-width": `${a.imgWidth}px`,
        "--img-height": `${a.imgHeight}px`
      })
    }, [
      o("div", {
        class: E(["stage", { "has-shadow": a.shadow }])
      }, [
        o("div", {
          class: "control",
          style: D({
            "--animation-duration": `${a.animationDuration}s`
          })
        }, [
          o("div", Ga, [
            (i(!0), c(K, null, Z(a.imgList, (f, $) => (i(), c("div", {
              key: $,
              class: "img",
              style: D(r($))
            }, [
              o("img", { src: f }, null, 8, Ya)
            ], 4))), 128))
          ])
        ], 4)
      ], 2)
    ], 4));
  }
}), Va = /* @__PURE__ */ j(Wa, [["__scopeId", "data-v-3d7f1970"]]), qa = Y(Va), ja = /* @__PURE__ */ G({
  name: "CyberSelect",
  __name: "select",
  setup(e) {
    return (a, t) => (i(), c("div"));
  }
}), Xa = Y(ja), Ua = {
  key: 0,
  class: "tree-connectors"
}, Ka = ["onClick"], Za = {
  key: 0,
  class: "node-expand-icon"
}, Qa = { class: "node-label" }, Ja = { class: "label-text" }, es = {
  key: 1,
  class: "node-status"
}, ts = {
  key: 0,
  class: "tree-scanline"
}, as = /* @__PURE__ */ G({
  name: "CyberTree",
  __name: "tree",
  props: {
    data: { default: () => [] },
    theme: { default: "neon" },
    effect: { default: "scan" },
    showConnectors: { type: Boolean, default: !0 },
    showStatus: { type: Boolean, default: !0 },
    showScanline: { type: Boolean, default: !0 },
    indent: { default: 24 },
    defaultExpandAll: { type: Boolean, default: !1 },
    expandOnClick: { type: Boolean, default: !0 },
    multiple: { type: Boolean, default: !1 }
  },
  emits: ["node-click", "node-expand", "node-collapse", "select-change"],
  setup(e, { expose: a, emit: t }) {
    const n = e, l = t, s = _([]), r = _([]), v = _(0), u = z(() => {
      const p = [], P = (h, V = 0, X) => {
        h.forEach((B, g) => {
          B._level = V, B._parent = X, B._expanded = B.expanded ?? (n.defaultExpandAll || V === 0), B._selected = B.selected ?? !1, B._isLastChild = g === h.length - 1, p.push(B), B._expanded && B.children && B.children.length > 0 && P(B.children, V + 1, B);
        });
      };
      return P(s.value), p;
    }), f = () => {
      const p = (P, h = 0) => {
        const V = {
          ...P,
          _expanded: P.expanded ?? (n.defaultExpandAll || h === 0),
          _selected: P.selected ?? !1,
          _level: h,
          _parent: void 0,
          _isLastChild: !1
        };
        return P.children && P.children.length > 0 && (V.children = P.children.map((X) => p(X, h + 1))), V;
      };
      s.value = n.data.map((P) => p(P)), r.value = [];
    }, $ = (p) => !p.children || p.children.length === 0, S = (p) => p._level ?? 0, m = (p) => S(p) * n.indent, w = (p, P) => p._isLastChild, I = (p, P) => {
      if (!n.showConnectors) return !0;
      let h = p, V = S(p);
      for (; h && V > P; )
        h = h._parent, V--;
      return h?._isLastChild ?? !1;
    }, d = (p) => {
      p._expanded = !p._expanded, p.expanded = p._expanded, p._expanded ? l("node-expand", p) : l("node-collapse", p), O();
    }, T = (p) => {
      n.multiple ? (p._selected = !p._selected, p.selected = p._selected) : p._selected ? (p._selected = !1, p.selected = !1) : (r.value.forEach((P) => {
        P._selected = !1, P.selected = !1;
      }), p._selected = !0, p.selected = !0), b(), l("select-change", r.value), l("node-click", p), n.expandOnClick && !$(p) && d(p);
    }, b = () => {
      r.value = u.value.filter((p) => p._selected);
    }, O = () => {
      v.value++;
    };
    return J(() => {
      f();
    }), ee(() => n.data, () => {
      f();
    }, { deep: !0 }), a({
      getSelectedNodes: () => r.value,
      clearSelection: () => {
        r.value.forEach((p) => {
          p._selected = !1, p.selected = !1;
        }), r.value = [], O();
      }
    }), (p, P) => (i(), c("div", {
      class: E(["cyber-tree", [`theme-${e.theme}`]])
    }, [
      (i(!0), c(K, null, Z(u.value, (h, V) => (i(), c("div", {
        key: `${h.id}-${h._expanded}-${v.value}`,
        class: E(["tree-node", { expanded: h._expanded, leaf: $(h), "last-child": w(h) }]),
        style: D({ paddingLeft: `${m(h)}px` })
      }, [
        e.showConnectors && S(h) > 0 ? (i(), c("div", Ua, [
          (i(!0), c(K, null, Z(S(h) - 1, (X) => (i(), c("div", {
            key: X,
            class: E(["ancestor-line", {
              "ancestor-hidden": I(h, X)
            }]),
            style: D({ left: `${X * e.indent}px` })
          }, null, 6))), 128)),
          o("div", {
            class: "parent-line",
            style: D({ left: `${(S(h) - 1) * e.indent}px` })
          }, null, 4),
          o("div", {
            class: "horizontal-line",
            style: D({
              left: `${(S(h) - 1) * e.indent}px`,
              width: `${e.indent - 8}px`
            })
          }, null, 4)
        ])) : R("", !0),
        o("div", {
          class: "node-content-wrapper",
          onClick: Se((X) => T(h), ["stop"])
        }, [
          o("div", {
            class: E(["node-content", { selected: h._selected }])
          }, [
            $(h) ? R("", !0) : (i(), c("div", Za, [
              o("span", {
                class: E(["expand-arrow", { rotated: h._expanded }])
              }, "▶", 2)
            ])),
            o("div", Qa, [
              o("span", Ja, F(h.label), 1)
            ]),
            e.showStatus && h.status ? (i(), c("div", es, [
              o("div", {
                class: E(["status-indicator", `status-${h.status}`])
              }, null, 2)
            ])) : R("", !0)
          ], 2)
        ], 8, Ka)
      ], 6))), 128)),
      e.showScanline ? (i(), c("div", ts)) : R("", !0)
    ], 2));
  }
}), ss = /* @__PURE__ */ j(as, [["__scopeId", "data-v-5ba3c2db"]]), ls = Y(ss), ns = [
  Le,
  Ye,
  Xe,
  st,
  ht,
  kt,
  Et,
  Ft,
  Jt,
  oa,
  ga,
  ca,
  ya,
  $a,
  ka,
  Pt,
  Na,
  bt,
  Da,
  Fa,
  Xa,
  ls,
  qa
], os = Ie([...ns]);
console.log(
  "%c %s",
  "border: 1px solid #97E3FE;border-radius: 3px;padding: 2px 5px;color: white;font-weight:bolder;background: linear-gradient(to right, #fF717F,#CC54D1,#4EAFFA,#3DE1C3, #F7DA66)",
  "CyberPunk-UI"
);
const cs = os.install;
export {
  os as default,
  cs as install,
  Ie as makeInstaller
};
