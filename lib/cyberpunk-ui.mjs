import { defineComponent as H, useSlots as re, computed as V, openBlock as s, createElementBlock as r, normalizeClass as N, createElementVNode as c, unref as ue, renderSlot as Q, toDisplayString as A, ref as C, onUnmounted as ie, createBlock as me, Teleport as be, createVNode as de, TransitionGroup as we, withCtx as pe, Fragment as j, renderList as U, createCommentVNode as L, normalizeStyle as F, watch as te, nextTick as ve, onMounted as ae, withDirectives as ye, createTextVNode as fe, vShow as xe, watchEffect as Ie, useCssVars as ge, getCurrentInstance as Me, createStaticVNode as Te, reactive as Ee, onBeforeUnmount as $e, withModifiers as se, Transition as ke, vModelText as Be, resolveDynamicComponent as Le, h as le } from "vue";
const Ve = (e = []) => ({
  install: (t) => {
    e.forEach((l) => t.use(l));
  }
}), W = (e, a) => (e.install = (t) => {
  for (const l of [e, ...Object.values({})])
    t.component(l.name, l);
}, e), Ne = ["data-content"], ze = { key: 1 }, Oe = /* @__PURE__ */ H({
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
    const t = re(), l = e, u = V(() => {
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
    }), i = V(() => {
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
    return (d, y) => (s(), r("div", {
      class: N(["cp-button", i.value])
    }, [
      c("div", {
        class: N(["button", u.value]),
        "data-content": l.content
      }, [
        ue(t) ? Q(d.$slots, "default", { key: 0 }, void 0, !0) : (s(), r("span", ze, A(l.content), 1))
      ], 10, Ne)
    ], 2));
  }
}), Y = (e, a) => {
  const t = e.__vccOpts || e;
  for (const [l, u] of a)
    t[l] = u;
  return t;
}, Ae = /* @__PURE__ */ Y(Oe, [["__scopeId", "data-v-6fea0e49"]]), De = W(Ae), Re = { class: "notification-content" }, Pe = {
  key: 0,
  class: "notification-icon"
}, Ke = { class: "notification-body" }, Fe = {
  key: 0,
  class: "notification-title"
}, He = { class: "notification-message" }, Ge = {
  key: 1,
  class: "notification-actions"
}, We = ["onClick"], Ye = ["onClick"], qe = /* @__PURE__ */ H({
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
    const l = e, u = t, i = C([]), d = C(!1);
    let y = 0;
    const f = (w) => {
      const S = ++y, m = w.actions && w.actions.length > 0, B = {
        id: S,
        title: w.title || "",
        message: w.message,
        type: w.type || "info",
        duration: w.duration !== void 0 ? w.duration : m ? 0 : l.duration,
        showClose: w.showClose !== void 0 ? w.showClose : !0,
        showIcon: w.showIcon !== void 0 ? w.showIcon : !0,
        actions: w.actions || [],
        effect: w.effect || l.effect,
        onClose: w.onClose || (() => {
        })
      };
      if (i.value.push(B), d.value = !0, B.duration > 0 && setTimeout(() => {
        b(S);
      }, B.duration), i.value.length > l.maxCount) {
        const _ = i.value[0];
        b(_.id);
      }
      return S;
    }, b = (w) => {
      const S = i.value.findIndex((m) => m.id === w);
      if (S !== -1) {
        const m = i.value[S];
        m.onClose && m.onClose(), i.value.splice(S, 1), u("close", w);
      }
    }, k = (w, S) => {
      S.callback && S.callback(), b(w.id);
    }, E = () => {
      i.value.length === 0 && (d.value = !1);
    }, x = () => {
      i.value.forEach((w) => {
        w.onClose && w.onClose();
      }), i.value = [], d.value = !1;
    };
    return a({
      // 创建不同类型的通知
      info: (w) => f({ ...w, type: "info" }),
      success: (w) => f({ ...w, type: "success" }),
      warning: (w) => f({ ...w, type: "warning" }),
      error: (w) => f({ ...w, type: "error" }),
      // 通用创建方法
      create: f,
      // 关闭方法
      close: b,
      // 清除所有
      clearAll: x
    }), ie(() => {
      x();
    }), (w, S) => (s(), me(be, { to: "body" }, [
      d.value ? (s(), r("div", {
        key: 0,
        class: N(["cp-cyber-notification-container", `position-${e.position}`])
      }, [
        de(we, {
          name: "notification",
          tag: "div",
          onAfterLeave: E
        }, {
          default: pe(() => [
            (s(!0), r(j, null, U(i.value, (m) => (s(), r("div", {
              key: m.id,
              class: N(["cp-cyber-notification", `type-${m.type}`, `effect-${m.effect}`])
            }, [
              c("div", Re, [
                m.showIcon ? (s(), r("div", Pe, [...S[0] || (S[0] = [
                  c("div", { class: "icon-circle" }, null, -1),
                  c("div", { class: "icon-symbol" }, null, -1)
                ])])) : L("", !0),
                c("div", Ke, [
                  m.title ? (s(), r("div", Fe, A(m.title), 1)) : L("", !0),
                  c("div", He, A(m.message), 1),
                  m.actions && m.actions.length ? (s(), r("div", Ge, [
                    (s(!0), r(j, null, U(m.actions, (B, _) => (s(), r("button", {
                      key: _,
                      class: "action-button",
                      onClick: (P) => k(m, B)
                    }, A(B.text), 9, We))), 128))
                  ])) : L("", !0)
                ]),
                m.showClose ? (s(), r("div", {
                  key: 1,
                  class: "notification-close",
                  onClick: (B) => b(m.id)
                }, [...S[1] || (S[1] = [
                  c("span", { class: "close-icon" }, "×", -1)
                ])], 8, Ye)) : L("", !0)
              ]),
              m.duration > 0 ? (s(), r("div", {
                key: 0,
                class: "notification-progress",
                style: F({ animationDuration: `${m.duration}ms` })
              }, null, 4)) : L("", !0),
              S[2] || (S[2] = c("div", { class: "notification-glitch-effect" }, null, -1)),
              S[3] || (S[3] = c("div", { class: "notification-hologram-effect" }, null, -1))
            ], 2))), 128))
          ]),
          _: 1
        })
      ], 2)) : L("", !0)
    ]));
  }
}), je = /* @__PURE__ */ Y(qe, [["__scopeId", "data-v-5b833339"]]), Xe = W(je), Ue = { class: "tooltip-inner" }, Qe = { class: "tooltip-content" }, Ze = /* @__PURE__ */ H({
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
    const t = e, l = a, u = C(!1), i = C(null), d = C(null), y = C(null), f = C(t.position), b = C({}), k = () => {
      if (!i.value || !d.value || t.position !== "auto")
        return t.position;
      const $ = i.value.getBoundingClientRect(), n = d.value.getBoundingClientRect(), o = window.innerWidth, h = window.innerHeight, v = $.top, p = o - $.right, M = h - $.bottom, D = $.left, K = [
        { position: "top", space: v },
        { position: "right", space: p },
        { position: "bottom", space: M },
        { position: "left", space: D }
      ];
      K.sort((I, X) => X.space - I.space);
      const G = n.height || 50, R = n.width || 150;
      for (const I of K)
        if (I.position === "top" && I.space >= G + 10 || I.position === "bottom" && I.space >= G + 10 || I.position === "left" && I.space >= R + 10 || I.position === "right" && I.space >= R + 10)
          return I.position;
      return "top";
    }, E = V(() => typeof t.width == "number" ? `${t.width}px` : t.width), x = () => {
      y.value && clearTimeout(y.value), y.value = window.setTimeout(() => {
        u.value = !0, ve(() => {
          t.position === "auto" ? f.value = k() : f.value = t.position, S(), l("show");
        });
      }, t.delay);
    }, w = () => {
      y.value && clearTimeout(y.value), y.value = window.setTimeout(() => {
        u.value = !1, l("hide");
      }, 100);
    }, S = () => {
      if (!i.value || !d.value) return;
      const $ = i.value.getBoundingClientRect(), n = d.value.getBoundingClientRect(), o = window.pageYOffset || document.documentElement.scrollTop, h = window.pageXOffset || document.documentElement.scrollLeft;
      let v = 0, p = 0;
      const M = 10;
      switch (f.value) {
        case "top":
          v = $.left + $.width / 2 - n.width / 2 + h, p = $.top - n.height - M + o;
          break;
        case "right":
          v = $.right + M + h, p = $.top + $.height / 2 - n.height / 2 + o;
          break;
        case "bottom":
          v = $.left + $.width / 2 - n.width / 2 + h, p = $.bottom + M + o;
          break;
        case "left":
          v = $.left - n.width - M + h, p = $.top + $.height / 2 - n.height / 2 + o;
          break;
      }
      (() => {
        const K = window.innerWidth, G = window.innerHeight, R = 10;
        v < R ? v = R : v + n.width > K - R && (v = K - n.width - R), p < R ? p = R : p + n.height > G - R && (p = G - n.height - R);
      })(), b.value = {
        left: `${v}px`,
        top: `${p}px`,
        width: E.value
      };
    }, m = () => {
      t.trigger === "hover" && x();
    }, B = () => {
      t.trigger === "hover" && w();
    }, _ = () => {
      t.trigger === "click" && (u.value ? w() : x());
    }, P = () => {
      t.trigger === "focus" && x();
    }, q = () => {
      t.trigger === "focus" && w();
    }, Z = () => {
      u.value && (t.position === "auto" && (f.value = k()), S());
    }, g = () => {
      u.value && (O && clearTimeout(O), O = setTimeout(() => {
        S();
      }, 16));
    };
    te(
      () => t.position,
      ($) => {
        u.value && ve(() => {
          $ === "auto" ? f.value = k() : f.value = $, S();
        });
      }
    );
    let z = [];
    const T = ($) => {
      let n = [], o = $.parentElement;
      for (; o; ) {
        const h = window.getComputedStyle(o);
        /(auto|scroll)/.test(h.overflow + h.overflowY + h.overflowX) && n.push(o), o = o.parentElement;
      }
      return n.push(document.documentElement), n;
    };
    ae(() => {
      if (window.addEventListener("resize", Z), window.addEventListener("scroll", g, { passive: !0 }), document.addEventListener("click", ($) => {
        if (u.value && t.trigger === "click") {
          const n = $.target;
          d.value && !d.value.contains(n) && i.value && !i.value.contains(n) && w();
        }
      }), i.value) {
        z = T(i.value);
        const $ = () => {
          O && clearTimeout(O), O = setTimeout(() => {
            u.value && S();
          }, 16);
        };
        z.forEach((n) => {
          n.addEventListener("scroll", $);
        });
      }
    });
    let O = null;
    return ie(() => {
      window.removeEventListener("resize", Z), window.removeEventListener("scroll", g), z.forEach(($) => {
        $.removeEventListener("scroll", g);
      }), y.value && clearTimeout(y.value), O && clearTimeout(O);
    }), ($, n) => (s(), r("div", null, [
      c("div", {
        ref_key: "triggerRef",
        ref: i,
        class: "tooltip-trigger",
        onMouseenter: m,
        onMouseleave: B,
        onClick: _,
        onFocus: P,
        onBlur: q
      }, [
        Q($.$slots, "default", {}, void 0, !0)
      ], 544),
      (s(), me(be, { to: "body" }, [
        ye(c("div", {
          ref_key: "tooltipRef",
          ref: d,
          class: N([
            "cp-cyber-tooltip",
            `theme-${e.theme}`,
            `effect-${e.effect}`,
            `position-${f.value}`
          ]),
          style: F(b.value)
        }, [
          n[2] || (n[2] = c("div", { class: "tooltip-arrow" }, null, -1)),
          c("div", Ue, [
            c("div", Qe, [
              Q($.$slots, "content", {}, () => [
                fe(A(e.content), 1)
              ], !0)
            ]),
            n[0] || (n[0] = c("div", { class: "tooltip-scanline" }, null, -1)),
            n[1] || (n[1] = c("div", { class: "tooltip-glitch" }, null, -1))
          ])
        ], 6), [
          [xe, u.value]
        ])
      ]))
    ]));
  }
}), Je = /* @__PURE__ */ Y(Ze, [["__scopeId", "data-v-3de3033d"]]), et = W(Je), tt = { class: "progress-track" }, at = {
  key: 0,
  class: "percentage-inside"
}, lt = { class: "tick-marks" }, nt = {
  key: 0,
  class: "percentage-outside"
}, st = {
  key: 1,
  class: "status-indicator"
}, ot = { class: "status-text" }, rt = /* @__PURE__ */ H({
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
    const a = e, t = V(() => Math.min(100, Math.max(0, a.percentage)).toFixed(0)), l = V(() => {
      const u = Number(t.value);
      return u < 30 ? "INITIALIZING" : u < 60 ? "PROCESSING" : u < 90 ? "LOADING" : u < 100 ? "ALMOST" : "COMPLETE";
    });
    return (u, i) => (s(), r("div", {
      class: N(["cyber-progress", [`theme-${e.theme}`, { animated: e.animated }]])
    }, [
      c("div", tt, [
        i[0] || (i[0] = c("div", { class: "track-grid" }, null, -1)),
        c("div", {
          class: "progress-bar",
          style: F({ width: e.percentage + "%" })
        }, [
          e.showPercentage && e.percentagePosition === "inside" ? (s(), r("span", at, A(t.value) + "% ", 1)) : L("", !0)
        ], 4),
        c("div", lt, [
          (s(), r(j, null, U(10, (d) => c("span", {
            key: d,
            class: N(["tick", { active: d * 10 <= e.percentage }])
          }, null, 2)), 64))
        ])
      ]),
      e.showPercentage && e.percentagePosition === "outside" ? (s(), r("span", nt, A(t.value) + "% ", 1)) : L("", !0),
      e.showStatus ? (s(), r("div", st, [
        i[1] || (i[1] = c("div", { class: "indicator-dot" }, null, -1)),
        c("span", ot, A(l.value), 1)
      ])) : L("", !0)
    ], 2));
  }
}), it = /* @__PURE__ */ Y(rt, [["__scopeId", "data-v-44363fb0"]]), ct = W(it), ut = {
  key: 0,
  class: "prefix"
}, dt = { class: "counter-container" }, ft = {
  key: 0,
  class: "separator"
}, ht = { class: "digit-top" }, vt = { class: "digit-bottom" }, pt = { class: "digit-top flip-top" }, gt = { class: "digit-bottom flip-bottom" }, mt = {
  key: 1,
  class: "suffix"
}, yt = /* @__PURE__ */ H({
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
    const a = e, t = C(Number(a.from)), l = C(Number(a.value)), u = C(null), i = C(null), d = C(""), y = (m) => {
      const B = Math.pow(10, a.decimal);
      let P = (Math.round(m * B) / B).toFixed(a.decimal);
      if (a.separator) {
        const q = P.split(".");
        q[0] = q[0].replace(/\B(?=(\d{3})+(?!\d))/g, a.separator), P = q.join(".");
      }
      return P;
    }, f = V(() => y(t.value)), b = V(() => f.value.split("")), k = (m) => m === a.separator || m === ".", E = (m) => !d.value || m >= d.value.length ? !1 : d.value[m] !== b.value[m] && !k(b.value[m]), x = (m) => {
      u.value === null && (u.value = m);
      const B = m - u.value, _ = Math.min(B / a.duration, 1), P = Number(a.from), q = Number(a.to !== null ? a.to : l.value), Z = P + (q - P) * w(_);
      t.value = Z, _ < 1 ? i.value = requestAnimationFrame(x) : (t.value = q, u.value = null);
    }, w = (m) => 1 - Math.pow(1 - m, 4), S = () => {
      d.value = f.value, i.value !== null && cancelAnimationFrame(i.value), u.value = null, i.value = requestAnimationFrame(x);
    };
    return te(() => a.value, (m) => {
      l.value = Number(m), S();
    }), te(() => a.to, (m) => {
      m !== null && (l.value = Number(m), S());
    }), ae(() => {
      Number(a.from) !== Number(a.value) && S();
    }), ie(() => {
      i.value !== null && cancelAnimationFrame(i.value);
    }), (m, B) => (s(), r("div", {
      class: N(["cp-digital-counter", `theme-${e.theme}`])
    }, [
      e.prefix ? (s(), r("span", ut, A(e.prefix), 1)) : L("", !0),
      c("div", dt, [
        (s(!0), r(j, null, U(b.value, (_, P) => (s(), r("div", {
          key: P,
          class: "digit-container"
        }, [
          k(_) ? (s(), r("div", ft, A(_), 1)) : (s(), r("div", {
            key: 1,
            class: N(["digit-flipper", { animate: E(P) }])
          }, [
            c("div", ht, A(_), 1),
            c("div", vt, A(_), 1),
            c("div", pt, A(_), 1),
            c("div", gt, A(_), 1)
          ], 2))
        ]))), 128))
      ]),
      e.suffix ? (s(), r("span", mt, A(e.suffix), 1)) : L("", !0)
    ], 2));
  }
}), bt = /* @__PURE__ */ Y(yt, [["__scopeId", "data-v-99c23541"]]), wt = W(bt), xt = {
  class: "cp-full-page",
  id: "page-scroll"
}, $t = ["onClick"], kt = /* @__PURE__ */ H({
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
    const t = e, l = a, u = C();
    Ie(() => {
      u.value?.style && (u.value.style.transform = d.value);
    });
    const i = V(() => {
      y.value = !0;
      let g = 0;
      return document.getElementById("page-scroll")?.clientHeight ? g = document.getElementById("page-scroll")?.clientHeight ?? 0 : g = window.innerHeight, g;
    }), d = V(() => `translateY(-${_.value * i.value}px)`), y = C(!1), f = C(!0);
    function b(g) {
      g.preventDefault(), g.stopPropagation(), y.value = !1, f.value && (f.value = !1, B(g), setTimeout(() => {
        f.value = !0;
      }, 500));
    }
    const k = C(0), E = C(0), x = C(0);
    function w(g) {
      k.value = g.touches[0].pageY || g.changedTouches[0].pageY;
    }
    function S(g) {
      g.preventDefault(), y.value = !1, E.value = g.changedTouches[0].pageY || g.touches[0].pageY, x.value = E.value - k.value, Math.abs(x.value) >= 60 ? (_.value < t.items.length - 1 && x.value < 0 && _.value++, _.value > 0 && x.value > 0 && _.value--) : (console.log("else", -_.value * i.value), u.value.style.transform = `translateY(-${_.value * i.value}px)`);
    }
    function m(g) {
      y.value = !0, g.preventDefault(), x.value = (g.changedTouches[0].pageY || g.touches[0].pageY) - k.value, !(_.value === t.items.length - 1 && x.value < 0 || _.value === 0 && x.value > 0) && (console.log("else", -_.value * i.value + x.value * -1), u.value.style.transform = `translateY(-${_.value * i.value + x.value * -1}px)`);
    }
    function B(g) {
      g.wheelDelta < 0 ? (P(), l("change", { from: t.items[_.value - 1], to: t.items[_.value], type: "next" })) : (q(), l("change", { from: t.items[_.value + 1], to: t.items[_.value], type: "last" }));
    }
    const _ = C(0);
    function P() {
      _.value < t.items.length - 1 && (_.value++, l("toNext", _.value));
    }
    function q() {
      (_.value > 1 || _.value === 1) && (_.value--, l("toLast", _.value));
    }
    function Z(g) {
      y.value = !1, _.value = g;
    }
    return (g, z) => (s(), r("div", xt, [
      c("div", {
        ref_key: "element",
        ref: u,
        class: N([{ activeTranstion: y.value }, "inner-box"]),
        onMousewheel: b,
        onTouchstart: w,
        onTouchend: S,
        onTouchmove: m
      }, [
        Q(g.$slots, "default", {}, void 0, !0)
      ], 34),
      c("div", {
        class: N(["cp-full-dot", t.position])
      }, [
        (s(!0), r(j, null, U(t.items, (T, O) => (s(), r("div", {
          onClick: ($) => Z(O),
          class: "cp-full-dot-item"
        }, [
          c("div", {
            class: N(["cp-full-dot-item-bg", { active: O === _.value }])
          }, null, 2),
          t.showTitle ? ye((s(), r("div", {
            key: 0,
            class: "show-dec"
          }, A(T.title), 513)), [
            [xe, O === _.value]
          ]) : L("", !0)
        ], 8, $t))), 256))
      ], 2)
    ]));
  }
}), Ct = /* @__PURE__ */ Y(kt, [["__scopeId", "data-v-ee83c807"]]), _t = W(Ct), St = ["src", "alt"], It = {
  key: 1,
  class: "loading-placeholder"
}, Mt = {
  key: 2,
  class: "error-placeholder"
}, Tt = /* @__PURE__ */ H({
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
    const t = e, l = a, u = C(null), i = C(null), d = C(null), y = C(!1), f = C(!1), b = C(!1), k = C(null), E = C(null), x = V(() => t.intensity / 10), w = () => {
      y.value = !0, f.value = !1, setTimeout(() => {
        m(), t.triggerMode === "auto" ? T() : t.triggerMode === "random" && O();
      }, 0);
    }, S = () => {
      f.value = !0, y.value = !1, console.error("Failed to load image:", t.src);
    }, m = () => {
      if (!d.value || !i.value) return;
      const v = i.value, p = d.value, M = p.getContext("2d");
      if (M) {
        p.width = v.naturalWidth, p.height = v.naturalHeight;
        try {
          M.drawImage(v, 0, 0), E.value = M.getImageData(0, 0, p.width, p.height);
        } catch (D) {
          console.error("Failed to get image data (possibly CORS issue):", D), f.value = !0;
        }
      }
    }, B = (v, p) => {
      if (!E.value) return;
      const M = v.canvas, D = v.getImageData(0, 0, M.width, M.height), K = D.data, G = E.value.data, R = Math.floor(20 * p), I = Math.floor(Math.random() * R), X = Math.floor(Math.random() * R);
      for (let J = 0; J < M.height; J++)
        for (let ne = 0; ne < M.width; ne++) {
          const ee = (J * M.width + ne) * 4, oe = Math.min(Math.max(ne + I, 0), M.width - 1), Ce = (Math.min(Math.max(J + X, 0), M.height - 1) * M.width + oe) * 4;
          K[ee] = G[Ce];
          const _e = Math.min(Math.max(ne - I, 0), M.width - 1), Se = (Math.min(Math.max(J - X, 0), M.height - 1) * M.width + _e) * 4;
          K[ee + 2] = G[Se + 2], K[ee + 1] = G[ee + 1];
        }
      v.putImageData(D, 0, 0);
    }, _ = (v, p) => {
      if (!E.value) return;
      const M = v.canvas;
      v.putImageData(E.value, 0, 0);
      const D = Math.max(1, Math.floor(5 / p)), K = 0.5 + p * 0.1;
      for (let G = 0; G < M.height; G += D * 2)
        v.fillStyle = `rgba(255, 255, 255, ${K})`, v.fillRect(0, G, M.width, D);
    }, P = (v, p) => {
      if (!E.value) return;
      const M = v.canvas;
      v.putImageData(E.value, 0, 0);
      const D = Math.max(4, Math.floor(p * 8));
      if (Math.random() > 0.5)
        for (let G = 0; G < M.height; G += D)
          for (let R = 0; R < M.width; R += D) {
            const I = v.getImageData(R, G, 1, 1).data;
            v.fillStyle = `rgb(${I[0]}, ${I[1]}, ${I[2]})`, v.fillRect(R, G, D, D);
          }
      else {
        const G = Math.floor(p * 3);
        for (let R = 0; R < G; R++) {
          const I = Math.floor(Math.random() * (M.width - 50)), X = Math.floor(Math.random() * (M.height - 50)), J = Math.floor(Math.random() * 100 * p) + 30, ne = Math.floor(Math.random() * 80 * p) + 20;
          for (let ee = X; ee < X + ne; ee += D)
            for (let oe = I; oe < I + J; oe += D)
              if (oe < M.width && ee < M.height) {
                const he = v.getImageData(oe, ee, 1, 1).data;
                v.fillStyle = `rgb(${he[0]}, ${he[1]}, ${he[2]})`, v.fillRect(oe, ee, D, D);
              }
        }
      }
    }, q = (v, p) => {
      if (!E.value) return;
      const M = v.canvas, D = v.getImageData(0, 0, M.width, M.height), K = D.data, G = 0.2 + p * 0.05;
      for (let R = 0; R < K.length; R += 4)
        Math.random() < G && (Math.random() > 0.5 ? (K[R] = 255, K[R + 1] = 255, K[R + 2] = 255) : (K[R] = Math.floor(Math.random() * 256), K[R + 1] = Math.floor(Math.random() * 256), K[R + 2] = Math.floor(Math.random() * 256)));
      v.putImageData(D, 0, 0);
    }, Z = (v, p) => {
      [...["rgb-shift", "scanline", "pixelate", "noise"]].sort(() => 0.5 - Math.random()).slice(0, 2 + Math.floor(Math.random() * 2)).forEach((G) => {
        switch (G) {
          case "rgb-shift":
            B(v, p);
            break;
          case "scanline":
            _(v, p);
            break;
          case "pixelate":
            P(v, p);
            break;
          case "noise":
            q(v, p);
            break;
        }
      });
    }, g = () => {
      if (!d.value || !E.value) return;
      const p = d.value.getContext("2d");
      if (p) {
        switch (p.putImageData(E.value, 0, 0), t.glitchType) {
          case "rgb-shift":
            B(p, x.value);
            break;
          case "scanline":
            _(p, x.value);
            break;
          case "pixelate":
            P(p, x.value);
            break;
          case "noise":
            q(p, x.value);
            break;
          case "combined":
            Z(p, x.value);
            break;
        }
        b.value = !0, l("glitch-start");
      }
    }, z = () => {
      if (!d.value || !E.value) return;
      const p = d.value.getContext("2d");
      p && (p.putImageData(E.value, 0, 0), b.value = !1, l("glitch-end"));
    }, T = () => {
      k.value && clearInterval(k.value), g(), t.animated && (k.value = window.setInterval(() => {
        g();
      }, t.interval));
    }, O = () => {
      k.value && clearInterval(k.value), k.value = window.setInterval(() => {
        Math.random() < 0.5 && (g(), setTimeout(() => {
          z();
        }, 200 + Math.random() * 300));
      }, t.interval);
    }, $ = () => {
      k.value && (clearInterval(k.value), k.value = null), z();
    }, n = () => {
      t.triggerMode === "hover" && T();
    }, o = () => {
      t.triggerMode === "hover" && !t.animated && $();
    }, h = () => {
      t.triggerMode === "click" && (b.value ? $() : T());
    };
    return te(() => [t.src, t.glitchType, t.intensity], () => {
      t.src && (y.value = !1, f.value = !1), b.value && g();
    }), ae(() => {
      i.value && i.value.complete && i.value.naturalHeight !== 0 && w();
    }), ie(() => {
      k.value && clearInterval(k.value);
    }), (v, p) => (s(), r("div", {
      class: N(["cp-glitch-image", { animated: e.animated }]),
      onMouseenter: n,
      onMouseleave: o,
      onClick: h
    }, [
      c("div", {
        class: "image-container",
        ref_key: "imageContainerRef",
        ref: u
      }, [
        c("img", {
          src: e.src,
          alt: e.alt,
          ref_key: "imageRef",
          ref: i,
          class: "original-image",
          crossOrigin: "anonymous",
          onLoad: w,
          onError: S
        }, null, 40, St),
        y.value && !f.value ? (s(), r("canvas", {
          key: 0,
          ref_key: "glitchCanvasRef",
          ref: d,
          class: "glitch-canvas"
        }, null, 512)) : L("", !0),
        !y.value && !f.value ? (s(), r("div", It, [...p[0] || (p[0] = [
          c("div", { class: "loading-text" }, "Loading...", -1)
        ])])) : L("", !0),
        f.value ? (s(), r("div", Mt, [...p[1] || (p[1] = [
          c("div", { class: "error-text" }, "Image Load Failed", -1)
        ])])) : L("", !0)
      ], 512)
    ], 34));
  }
}), Et = /* @__PURE__ */ Y(Tt, [["__scopeId", "data-v-b2947767"]]), Bt = W(Et), Lt = ["data-progress"], Vt = { class: "progress-container" }, Nt = {
  key: 0,
  class: "progress-text"
}, zt = /* @__PURE__ */ H({
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
    const a = e, t = C(null), l = C(null), u = V(() => a.direction === "vertical" ? "vertical" : "horizontal"), i = V(() => {
      const f = a.direction === "vertical" ? "height" : "width", b = a.indeterminate ? "100%" : `${a.progress}%`;
      return {
        [f]: b,
        backgroundColor: a.color,
        boxShadow: `0 0 ${a.glitchIntensity * 2}px ${a.color}`
      };
    }), d = () => {
      if (!t.value) return;
      const f = t.value.querySelector(".glitch-effect");
      if (!f) return;
      const b = () => {
        if (!f) return;
        if (Math.random() < a.glitchIntensity / 20) {
          const E = Math.random() * a.glitchIntensity - a.glitchIntensity / 2, x = Math.random() * a.glitchIntensity - a.glitchIntensity / 2, w = Math.random() * a.glitchIntensity - a.glitchIntensity / 2, S = Math.random() * a.glitchIntensity / 2;
          f.style.transform = `translate(${E}px, ${x}px) skew(${w}deg)`, f.style.filter = `blur(${S}px)`, f.style.opacity = "1", setTimeout(() => {
            f && (f.style.transform = "translate(0, 0) skew(0)", f.style.filter = "blur(0)", f.style.opacity = "0");
          }, 150);
        }
      };
      l.value = window.setInterval(() => {
        b();
      }, 500);
    };
    let y = a.progress;
    return te(() => a.progress, (f) => {
      if (f !== y) {
        if (t.value) {
          const b = t.value.querySelector(".glitch-effect");
          if (b) {
            const k = Math.random() * a.glitchIntensity * 2 - a.glitchIntensity, E = Math.random() * a.glitchIntensity - a.glitchIntensity / 2;
            b.style.transform = `translate(${k}px, ${E}px)`, b.style.opacity = "1", setTimeout(() => {
              b && (b.style.transform = "translate(0, 0)", b.style.opacity = "0");
            }, 300);
          }
        }
        y = f;
      }
    }), ae(() => {
      d();
    }), ie(() => {
      l.value && clearInterval(l.value);
    }), (f, b) => (s(), r("div", {
      class: N(["cp-glitch-progress", u.value, { indeterminate: e.indeterminate }]),
      "data-progress": e.progress
    }, [
      c("div", Vt, [
        c("div", {
          class: "progress-bar",
          style: F(i.value),
          ref_key: "progressBarRef",
          ref: t
        }, [...b[0] || (b[0] = [
          c("div", { class: "glitch-effect" }, null, -1)
        ])], 4),
        e.showText && !e.indeterminate ? (s(), r("div", Nt, A(e.progress) + "% ", 1)) : L("", !0)
      ])
    ], 10, Lt));
  }
}), Ot = /* @__PURE__ */ Y(zt, [["__scopeId", "data-v-27854e11"]]), At = W(Ot), Dt = { class: "glow-text" }, Rt = /* @__PURE__ */ H({
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
    return ae(() => {
      document.documentElement.style.setProperty("--child-color", a.color);
    }), (t, l) => (s(), r("div", Dt, [
      Q(t.$slots, "default", {}, void 0, !0)
    ]));
  }
}), Pt = /* @__PURE__ */ Y(Rt, [["__scopeId", "data-v-7d666f1f"]]), Kt = W(Pt), Ft = ["tabindex", "aria-disabled", "aria-label"], Ht = { class: "holo-card-content" }, Gt = {
  key: 0,
  class: "card-title"
}, Wt = /* @__PURE__ */ H({
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
    ge((m) => ({
      v558892ac: l.hologramColor
    }));
    const a = Me(), t = re(), l = e, u = C({ x: 0, y: 0 }), i = C(!1), f = ((m, B) => {
      let _;
      return function() {
        const P = arguments, q = a;
        _ || (m.apply(q, P), _ = !0, setTimeout(() => _ = !1, B));
      };
    })((m) => {
      if (l.disabled) return;
      const B = m.currentTarget.getBoundingClientRect();
      u.value = {
        x: (m.clientX - B.left) / B.width * 2 - 1,
        y: (m.clientY - B.top) / B.height * 2 - 1
      }, i.value = !0;
    }, 16), b = () => {
      i.value = !1, u.value = { x: 0, y: 0 };
    }, k = () => {
      l.disabled || (i.value = !0, u.value = { x: 0, y: 0 });
    }, E = V(() => [(() => {
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
    })()]), x = V(() => {
      const m = {};
      if (l.rounded || (m.borderRadius = "0"), l.disabled && (m.cursor = "not-allowed", m.opacity = "0.6"), !i.value || l.disabled) return m;
      const B = u.value.y * 10, _ = -u.value.x * 10;
      return {
        ...m,
        transform: `perspective(1000px) rotateX(${B}deg) rotateY(${_}deg) scale3d(1.05, 1.05, 1.05)`,
        transition: "transform 0.1s ease"
      };
    }), w = V(() => {
      if (!i.value || l.disabled) return {};
      const m = Math.max(-50, Math.min(50, u.value.x * 10)), B = Math.max(-50, Math.min(50, u.value.y * 10));
      return {
        background: `radial-gradient(circle at ${50 + m}% ${50 + B}%, ${l.hologramColor}33, transparent 70%)`,
        opacity: 0.8,
        transition: "background 0.1s ease"
      };
    }), S = V(() => {
      const m = l.glowIntensity / 100;
      return {
        boxShadow: `0 0 ${10 + l.glowIntensity / 5}px ${l.hologramColor}${Math.floor(m * 99).toString(16).padStart(2, "0")}`,
        opacity: i.value && !l.disabled ? m : m * 0.5
      };
    });
    return ae(() => {
      ve(() => {
      });
    }), (m, B) => (s(), r("div", {
      class: N([
        "cp-holo-card",
        `depth-${e.depth}`,
        E.value,
        `theme-${e.theme}`,
        `effect-${e.effect}`
      ]),
      style: F(x.value),
      onMousemove: B[0] || (B[0] = //@ts-ignore
      (..._) => ue(f) && ue(f)(..._)),
      onMouseleave: b,
      onFocus: k,
      onBlur: b,
      tabindex: e.disabled ? -1 : 0,
      role: "button",
      "aria-disabled": e.disabled,
      "aria-label": e.title
    }, [
      c("div", Ht, [
        e.title && !ue(t).title ? (s(), r("div", Gt, A(e.title), 1)) : L("", !0),
        Q(m.$slots, "title", {}, void 0, !0),
        Q(m.$slots, "default", {}, void 0, !0),
        Q(m.$slots, "footer", {}, void 0, !0)
      ]),
      c("div", {
        class: "holo-card-hologram-effect",
        style: F(w.value)
      }, null, 4),
      c("div", {
        class: "holo-card-glow",
        style: F(S.value)
      }, null, 4)
    ], 46, Ft));
  }
}), Yt = /* @__PURE__ */ Y(Wt, [["__scopeId", "data-v-fe164a1d"]]), qt = W(Yt), jt = { class: "loader-container" }, Xt = {
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
}, aa = { class: "typing-text" }, la = /* @__PURE__ */ H({
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
    ge((f) => ({
      c40498b2: f.$props.color,
      v7f665050: t
    }));
    const a = e, t = (6 / a.speed).toString() + "s", l = V(() => {
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
    }), u = C(""), i = C(0), d = C(null), y = () => {
      if (!a.text) return;
      i.value = 0, u.value = "";
      const f = () => {
        i.value < a.text.length ? (u.value += a.text[i.value], i.value++) : setTimeout(() => {
          i.value = 0, u.value = "";
        }, 1e3);
      }, b = 100 / a.speed;
      d.value = window.setInterval(f, b);
    };
    return te(() => a.text, () => {
      d.value && clearInterval(d.value), y();
    }), ae(() => {
      y();
    }), ie(() => {
      d.value && clearInterval(d.value);
    }), (f, b) => (s(), r("div", {
      class: N(["cp-holo-loader", l.value, { "transparent-bg": e.transparent }])
    }, [
      c("div", jt, [
        c("div", {
          class: N(["holo-projection", `type-${e.type}`])
        }, [
          e.type === "cube" || e.type === "split" ? (s(), r("div", Xt, [...b[0] || (b[0] = [
            Te('<div class="cube" data-v-6df1b911><div class="cube-face front" data-v-6df1b911></div><div class="cube-face back" data-v-6df1b911></div><div class="cube-face right" data-v-6df1b911></div><div class="cube-face left" data-v-6df1b911></div><div class="cube-face top" data-v-6df1b911></div><div class="cube-face bottom" data-v-6df1b911></div></div>', 1)
          ])])) : e.type === "sphere" ? (s(), r("div", Ut, [
            c("div", Qt, [
              (s(), r(j, null, U(3, (k) => c("div", {
                class: "sphere-ring",
                key: k
              })), 64))
            ])
          ])) : e.type === "datastream" ? (s(), r("div", Zt, [
            (s(), r(j, null, U(10, (k) => c("div", {
              class: "data-line",
              key: k
            })), 64))
          ])) : e.type === "circuit" ? (s(), r("div", Jt, [
            c("div", ea, [
              (s(), r(j, null, U(5, (k) => c("div", {
                class: "circuit-path",
                key: k
              })), 64)),
              (s(), r(j, null, U(6, (k) => c("div", {
                class: "circuit-node",
                key: k + 10
              })), 64))
            ])
          ])) : L("", !0)
        ], 2),
        e.text ? (s(), r("div", ta, [
          c("span", aa, A(u.value), 1),
          b[1] || (b[1] = c("span", { class: "cursor" }, "_", -1))
        ])) : L("", !0),
        b[2] || (b[2] = c("div", { class: "holo-base" }, [
          c("div", { class: "base-glow" })
        ], -1))
      ])
    ], 2));
  }
}), na = /* @__PURE__ */ Y(la, [["__scopeId", "data-v-6df1b911"]]), sa = W(na), oa = { class: "header-row" }, ra = { class: "header-text" }, ia = { class: "cell-text" }, ca = {
  key: 0,
  class: "row-scanline"
}, ua = /* @__PURE__ */ H({
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
    const a = e, t = C(null), l = C(!1), u = C(!0), i = C(1), d = C(0), y = C(!1), f = C(0), b = Ee([]);
    a.data.length > 0 && b.splice(0, b.length, ...a.data);
    let k = 0;
    const E = () => `row-${++k}-${Date.now()}`, x = V(() => a.rowNum * a.rowHeight), w = V(() => x.value), S = V(() => {
      const $ = b.length, n = a.rowNum;
      if ($ === 0) return [];
      if ($ <= n)
        return b.map((p, M) => ({
          key: p._uniqueKey || E(),
          data: p,
          index: M
        }));
      let o = [...b];
      $ > n && $ < 2 * n && (o = [...o, ...o]), o = o.map((p, M) => ({
        key: p._uniqueKey || E(),
        data: p,
        index: M,
        scroll: M
      }));
      let h = o.slice(d.value);
      return h.push(...o.slice(0, d.value)), h.slice(0, n);
    }), m = ($) => a.columns[$]?.width ? a.columns[$].width : "auto", B = ($) => $ === "center" ? "center" : $ === "right" ? "flex-end" : "flex-start", _ = () => a.theme === "neon" ? "rgba(0, 230, 246, 0.15)" : a.theme === "hologram" ? "rgba(138, 43, 226, 0.2)" : a.theme === "terminal" ? "rgba(0, 255, 0, 0.15)" : a.theme === "matrix" ? "rgba(0, 255, 65, 0.15)" : "rgba(0, 230, 246, 0.15)", P = ($) => (d.value + $) % b.length % 2 === 0 ? "var(--table-row-bg)" : "var(--table-row-hover)", q = ($, n) => {
      const o = n.split(".");
      let h = $;
      for (const v of o)
        h = h?.[v];
      return h ?? "";
    }, Z = async () => {
      if (!(l.value || !u.value)) {
        l.value = !0;
        try {
          if (a.remoteMethod) {
            const $ = await a.remoteMethod({
              page: i.value,
              size: a.bufferSize * 10
            });
            if ($.data && $.data.length > 0) {
              const n = $.data.map((o) => (o._uniqueKey || (o._uniqueKey = E()), o));
              i.value === 1 ? b.splice(0, b.length, ...n) : b.push(...n), a.data && a.data.splice(0, a.data.length, ...b);
            }
            u.value = $.hasMore ?? !1, i.value++;
          } else a.loadMore && await a.loadMore();
        } catch ($) {
          console.error("Failed to load more data:", $), u.value = !1;
        } finally {
          l.value = !1;
        }
      }
    }, g = async () => {
      if (!a.autoScroll || y.value) return;
      const $ = b.length, n = a.rowNum;
      if ($ <= n || (await new Promise((h) => setTimeout(h, a.waitTime)), y.value)) return;
      const o = async () => {
        if (y.value) return;
        const h = f.value, v = a.scrollType === "page" ? n : 1;
        d.value = (d.value + v) % $;
        const p = a.scrollType === "page" ? 500 : 300;
        await new Promise((M) => setTimeout(M, p)), !(f.value !== h || y.value) && (await new Promise((M) => setTimeout(M, a.waitTime)), !(f.value !== h || y.value) && o());
      };
      o();
    }, z = () => {
      f.value = (f.value + 1) % 999999;
    }, T = () => {
      a.hoverPause && (y.value = !0, z());
    }, O = () => {
      a.hoverPause && (y.value = !1, g());
    };
    return ae(() => {
      a.remoteMethod && b.length === 0 && Z(), a.autoScroll && g();
    }), ($, n) => (s(), r("div", {
      class: N(["cyber-infinite-table", [`theme-${e.theme}`, `scroll-${e.scrollType}`]])
    }, [
      c("div", {
        class: "table-header",
        style: F({ backgroundColor: _() })
      }, [
        c("div", oa, [
          (s(!0), r(j, null, U(e.columns, (o, h) => (s(), r("div", {
            key: o.field || h,
            class: "header-cell",
            style: F({
              width: m(h),
              minWidth: o.minWidth || "100px",
              textAlign: o.align || "left"
            })
          }, [
            c("div", {
              class: "header-content",
              style: F({ justifyContent: B(o.align || "left") })
            }, [
              c("span", ra, A(o.title), 1)
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
          style: F({ height: w.value + "px" })
        }, [
          de(we, { name: "scroll-list" }, {
            default: pe(() => [
              (s(!0), r(j, null, U(S.value, (o) => (s(), r("div", {
                class: "table-row",
                key: o.key,
                style: F({
                  height: e.rowHeight + "px",
                  lineHeight: e.rowHeight + "px",
                  backgroundColor: P(o.index)
                })
              }, [
                (s(!0), r(j, null, U(e.columns, (h, v) => (s(), r("div", {
                  key: h.field || v,
                  class: "table-cell",
                  style: F({
                    width: m(v),
                    minWidth: h.minWidth || "100px",
                    justifyContent: B(h.align || "left")
                  })
                }, [
                  Q($.$slots, h.field, {
                    row: o.data,
                    column: h
                  }, () => [
                    c("span", ia, A(q(o.data, h.field)), 1)
                  ], !0)
                ], 4))), 128)),
                e.showScanline ? (s(), r("div", ca)) : L("", !0)
              ], 4))), 128))
            ]),
            _: 3
          })
        ], 4)
      ], 544),
      n[0] || (n[0] = c("div", { class: "table-border-effect" }, null, -1))
    ], 2));
  }
}), da = /* @__PURE__ */ Y(ua, [["__scopeId", "data-v-a239aba5"]]), fa = W(da), ha = /* @__PURE__ */ H({
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
    const t = e, l = V(() => {
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
    }), u = V(() => {
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
    return (i, d) => (s(), r("div", {
      class: N(["cp-button-neno", u.value])
    }, [
      c("div", {
        class: N(["button", l.value, t.bg ? "show-bg" : ""])
      }, [
        d[0] || (d[0] = c("div", { class: "border" }, null, -1)),
        d[1] || (d[1] = c("div", { class: "border" }, null, -1)),
        d[2] || (d[2] = c("div", { class: "border" }, null, -1)),
        d[3] || (d[3] = c("div", { class: "border" }, null, -1)),
        Q(i.$slots, "default", {}, void 0, !0)
      ], 2)
    ], 2));
  }
}), va = /* @__PURE__ */ Y(ha, [["__scopeId", "data-v-5d7945c0"]]), pa = W(va), ga = ["aria-checked", "aria-disabled"], ma = { class: "toggle-thumb" }, ya = {
  key: 0,
  class: "pulse-effect"
}, ba = /* @__PURE__ */ H({
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
    ge((y) => ({
      v2ad8abbc: t.inActiveColor,
      v247239f2: t.activeColor
    }));
    const t = e, l = a, u = V(() => {
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
    }), i = V(() => {
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
    }), d = () => {
      if (t.disabled) return;
      const y = !t.modelValue;
      l("update:modelValue", y), l("change", y);
    };
    return (y, f) => (s(), r("div", {
      class: N(["cp-neon-toggle", i.value, u.value, { active: e.modelValue, disabled: e.disabled }]),
      onClick: d,
      "aria-checked": e.modelValue,
      role: "switch",
      "aria-disabled": e.disabled
    }, [
      f[0] || (f[0] = c("div", { class: "toggle-track" }, [
        c("div", { class: "toggle-track-inner" }),
        c("div", { class: "circuit-lines" })
      ], -1)),
      c("div", ma, [
        e.pulseEffect && e.modelValue ? (s(), r("div", ya)) : L("", !0)
      ])
    ], 10, ga));
  }
}), wa = /* @__PURE__ */ Y(ba, [["__scopeId", "data-v-799d9482"]]), xa = W(wa), $a = /* @__PURE__ */ H({
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
    const t = e, l = V(() => {
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
    }), u = V(() => {
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
    return (i, d) => (s(), r("div", {
      class: N(["cp-button-neno", u.value])
    }, [
      c("div", {
        class: N(["button", l.value, t.bg ? "show-bg" : ""])
      }, [
        Q(i.$slots, "default", {}, void 0, !0)
      ], 2)
    ], 2));
  }
}), ka = /* @__PURE__ */ Y($a, [["__scopeId", "data-v-d73343d5"]]), Ca = W(ka), _a = ["data-word"], Sa = /* @__PURE__ */ H({
  name: "CyberText",
  __name: "text",
  props: {
    lineColor: {
      type: String,
      default: "#0000"
    }
  },
  setup(e) {
    const a = C(""), t = re();
    if (t && t.default) {
      let u = t.default();
      a.value = u[0].children;
    }
    const l = e;
    return (u, i) => (s(), r("div", {
      class: "cp-text",
      "data-word": a.value
    }, [
      Q(u.$slots, "default", {}, void 0, !0),
      c("div", {
        class: "cp-text-line",
        style: F("background: " + l.lineColor)
      }, null, 4)
    ], 8, _a));
  }
}), Ia = /* @__PURE__ */ Y(Sa, [["__scopeId", "data-v-ee14b82a"]]), Ma = W(Ia), Ta = /* @__PURE__ */ H({
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
    const a = e, t = (u, i) => {
      let d = `0px 0px ${u}`;
      for (let y = 1; y <= a.long; y++) {
        const f = l(u, y);
        d += `, ${i === "left" ? "-" : ""}${y}px ${y}px ${f}`;
      }
      return d;
    }, l = (u, i) => {
      const d = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i.exec(u), y = /^rgba?\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})(,\s*([\d.]+))?\)$/i.exec(u);
      if (d) {
        const f = parseInt(d[1], 16), b = parseInt(d[2], 16), k = parseInt(d[3], 16), E = d[4] ? parseInt(d[4], 16) / 255 : 1, x = Math.max(0, E - i * 0.05);
        return `rgba(${f}, ${b}, ${k}, ${x})`;
      } else if (y) {
        const f = parseInt(y[1], 10), b = parseInt(y[2], 10), k = parseInt(y[3], 10), E = y[5] ? parseFloat(y[5]) : 1, x = Math.max(0, E - i * 0.05);
        return `rgba(${f}, ${b}, ${k}, ${x})`;
      } else
        throw new Error(`Unsupported color format: ${u}`);
    };
    return (u, i) => (s(), r("div", {
      class: N(["shadow-text", a.direction]),
      style: F({ textShadow: t(a.shadowColor, a.direction) })
    }, [
      Q(u.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), Ea = /* @__PURE__ */ Y(Ta, [["__scopeId", "data-v-baec179b"]]), Ba = W(Ea), La = { class: "cp-typing" }, Va = { class: "content" }, Na = /* @__PURE__ */ H({
  name: "CyberTyping",
  __name: "typing",
  setup(e) {
    return (a, t) => (s(), r("div", La, [
      c("div", Va, [
        Q(a.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), za = /* @__PURE__ */ Y(Na, [["__scopeId", "data-v-c43f79f6"]]), Oa = W(za), Aa = ["src", "alt", "loading", "crossorigin"], Da = {
  key: 1,
  class: "placeholder"
}, Ra = ["src"], Pa = {
  key: 2,
  class: "error-content"
}, Ka = /* @__PURE__ */ H({
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
    const a = /* @__PURE__ */ Object.assign({}), t = e, l = (x) => {
      if (x.startsWith("http://") || x.startsWith("https://") || x.startsWith("/"))
        return x;
      for (const [w, S] of Object.entries(a))
        if (w.includes(x) || x.includes(w.split("/").pop() || ""))
          return S;
      return x;
    }, u = C(!1), i = C(!1), d = C(""), y = V(() => {
      const x = {};
      return t.width !== "auto" && t.width !== void 0 && (x.width = typeof t.width == "number" ? `${t.width}px` : t.width), t.height !== "auto" && t.height !== void 0 && (x.height = typeof t.height == "number" ? `${t.height}px` : t.height), !x.width && !x.height && (x.display = "inline-block"), x;
    }), f = V(() => i.value && t.errorSrc ? `url(${t.errorSrc})` : d.value ? `url(${d.value})` : "none"), b = V(() => {
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
      d.value = l(t.src), u.value = !0, i.value = !1;
    }, E = () => {
      if (i.value = !0, t.errorSrc && t.errorSrc !== t.src) {
        const x = new Image();
        x.crossOrigin = t.crossorigin || "", x.src = l(t.errorSrc), x.onload = () => {
          d.value = l(t.errorSrc), u.value = !0;
        }, x.onerror = () => {
          u.value = !0;
        };
      } else
        u.value = !0;
    };
    return te(() => t.src, () => {
      u.value = !1, i.value = !1, d.value = l(t.src);
    }, { immediate: !0 }), ae(() => {
      t.src && (d.value = l(t.src));
    }), (x, w) => (s(), r("div", {
      class: "cyber-image-wrapper",
      style: F(y.value)
    }, [
      e.src ? (s(), r("img", {
        key: 0,
        src: e.src,
        alt: e.alt,
        loading: e.loading,
        crossorigin: e.crossorigin,
        class: "hidden-image",
        onLoad: k,
        onError: E
      }, null, 40, Aa)) : L("", !0),
      c("div", {
        class: N(["glitch", {
          "is-loaded": u.value && !i.value,
          "is-loading": !u.value && !i.value,
          "is-error": i.value,
          "no-glitch": e.disableGlitch
        }]),
        style: F({
          backgroundImage: f.value,
          backgroundSize: b.value,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        })
      }, [
        u.value && !i.value && !e.disableGlitch ? (s(), r("div", {
          key: 0,
          class: "glitch-layer",
          style: F({ backgroundImage: f.value })
        }, null, 4)) : L("", !0),
        !u.value && e.placeholder ? (s(), r("div", Da, [
          Q(x.$slots, "placeholder", {}, () => [
            c("img", {
              src: e.placeholder,
              alt: "Loading..."
            }, null, 8, Ra)
          ], !0)
        ])) : i.value ? (s(), r("div", Pa, [
          Q(x.$slots, "error", {}, () => [
            fe(A(e.errorContent), 1)
          ], !0)
        ])) : L("", !0),
        u.value && !i.value ? Q(x.$slots, "default", { key: 3 }, void 0, !0) : L("", !0)
      ], 6)
    ], 4));
  }
}), Fa = /* @__PURE__ */ Y(Ka, [["__scopeId", "data-v-c8293d7c"]]), Ha = W(Fa), Ga = { class: "cyber-magic-text" }, Wa = ["data-text"], Ya = /* @__PURE__ */ H({
  name: "CyberMagicText",
  __name: "magicText",
  setup(e) {
    const a = C(""), t = re();
    if (t && t.default) {
      let l = t.default();
      a.value = l[0].children;
    }
    return (l, u) => (s(), r("div", Ga, [
      c("span", {
        class: "gradient-text",
        "data-text": a.value
      }, [
        Q(l.$slots, "default")
      ], 8, Wa)
    ]));
  }
}), qa = W(Ya), ja = { class: "imgWrap" }, Xa = ["src"], Ua = /* @__PURE__ */ H({
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
    ge((y) => ({
      v29922088: t.value + "px"
    }));
    const a = e, t = C(a.imgHeight);
    a.shadow && (t.value = a.imgHeight * 2);
    const l = C(a.imgList.length), u = i(a.imgWidth, 360 / l.value) * 1.6;
    function i(y, f) {
      const b = f * Math.PI / 180;
      return y / (2 * Math.sin(b / 2));
    }
    const d = (y) => {
      const f = 35 + (y + 1) * (360 / l.value), b = i(a.imgWidth, 360 / l.value);
      return {
        transform: `rotateY(${f}deg) translateZ(${b}px)`
      };
    };
    return (y, f) => (s(), r("div", {
      class: "container",
      style: F({
        "--container-width": `${u}px`,
        "--img-width": `${a.imgWidth}px`,
        "--img-height": `${a.imgHeight}px`
      })
    }, [
      c("div", {
        class: N(["stage", { "has-shadow": a.shadow }])
      }, [
        c("div", {
          class: "control",
          style: F({
            "--animation-duration": `${a.animationDuration}s`
          })
        }, [
          c("div", ja, [
            (s(!0), r(j, null, U(a.imgList, (b, k) => (s(), r("div", {
              key: k,
              class: "img",
              style: F(d(k))
            }, [
              c("img", { src: b }, null, 8, Xa)
            ], 4))), 128))
          ])
        ], 4)
      ], 2)
    ], 4));
  }
}), Qa = /* @__PURE__ */ Y(Ua, [["__scopeId", "data-v-3d7f1970"]]), Za = W(Qa), Ja = ["aria-expanded", "aria-disabled"], el = { class: "select-value" }, tl = ["aria-label", "onClick"], al = {
  key: 1,
  class: "select-single"
}, ll = {
  key: 2,
  class: "select-placeholder"
}, nl = {
  key: 0,
  class: "select-dropdown"
}, sl = {
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
}, pl = /* @__PURE__ */ H({
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
    const t = e, l = a, u = C(), i = C(), d = C(!1), y = C(""), f = V(() => t.showCheck !== void 0 ? t.showCheck : t.multiple), b = V(() => {
      const o = [], h = [];
      return t.options.forEach((v, p) => {
        Array.isArray(v.options) ? o.push({
          key: `group-${p}`,
          label: S(v),
          options: v.options
        }) : h.push(v);
      }), h.length && o.unshift({
        key: "default",
        label: "",
        options: h
      }), o;
    }), k = V(() => b.value.flatMap((o) => o.options)), E = V(() => {
      const o = y.value.trim().toLowerCase();
      return o ? b.value.map((h) => ({
        ...h,
        options: h.options.filter((v) => S(v).toLowerCase().includes(o))
      })).filter((h) => h.options.length) : b.value;
    }), x = V(() => {
      const o = t.multiple ? Array.isArray(t.modelValue) ? t.modelValue : [] : Array.isArray(t.modelValue) ? [] : [t.modelValue ?? null];
      return k.value.filter((h) => o.some((v) => B(v, m(h))));
    }), w = V(() => t.multiple ? Array.isArray(t.modelValue) && t.modelValue.length > 0 : t.modelValue !== "" && t.modelValue !== null && t.modelValue !== void 0), S = (o) => {
      const h = o[t.labelKey] ?? o.label ?? o[t.valueKey] ?? o.value ?? "";
      return String(h);
    }, m = (o) => o[t.valueKey] ?? o.value ?? null, B = (o, h) => o === h, _ = (o) => {
      const h = m(o);
      return t.multiple ? (Array.isArray(t.modelValue) ? t.modelValue : []).some((p) => B(p, h)) : B(t.modelValue, h);
    }, P = (o) => {
      t.disabled || d.value === o || (d.value = o, l("visible-change", o), o && t.filterable && ve(() => i.value?.focus()));
    }, q = () => {
      P(!d.value);
    }, Z = (o) => {
      if (t.disabled || o.disabled) return;
      const h = m(o);
      if (t.multiple) {
        const v = Array.isArray(t.modelValue) ? [...t.modelValue] : [], p = v.findIndex((D) => B(D, h));
        p > -1 ? v.splice(p, 1) : v.push(h);
        const M = k.value.filter((D) => v.some((K) => B(K, m(D))));
        l("update:modelValue", v), l("change", v, M);
        return;
      }
      l("update:modelValue", h), l("change", h, o), P(!1);
    }, g = (o) => {
      if (!t.multiple || t.disabled) return;
      const h = m(o), p = (Array.isArray(t.modelValue) ? [...t.modelValue] : []).filter((D) => !B(D, h)), M = k.value.filter((D) => p.some((K) => B(K, m(D))));
      l("update:modelValue", p), l("change", p, M);
    }, z = () => {
      const o = t.multiple ? [] : "";
      l("update:modelValue", o), l("change", o, t.multiple ? [] : void 0), l("clear"), y.value = "";
    }, T = (o) => {
      t.disabled || l("focus", o);
    }, O = (o) => {
      l("blur", o);
    }, $ = (o) => {
      t.disabled || ((o.key === "Enter" || o.key === " ") && (d.value || (o.preventDefault(), P(!0))), o.key === "Escape" && P(!1));
    }, n = (o) => {
      u.value?.contains(o.target) || P(!1);
    };
    return te(d, (o) => {
      o || (y.value = "");
    }), te(() => t.multiple, (o) => {
      o && !Array.isArray(t.modelValue) && l("update:modelValue", []);
    }), ae(() => {
      document.addEventListener("click", n);
    }), $e(() => {
      document.removeEventListener("click", n);
    }), (o, h) => (s(), r("div", {
      ref_key: "selectRef",
      ref: u,
      class: N(["cp-cyber-select", [
        `theme-${e.theme}`,
        `size-${e.size}`,
        {
          "is-open": d.value,
          "is-disabled": e.disabled,
          "is-multiple": e.multiple
        }
      ]])
    }, [
      c("div", {
        class: "select-control",
        tabindex: "0",
        role: "combobox",
        "aria-expanded": d.value,
        "aria-disabled": e.disabled,
        onClick: q,
        onFocus: T,
        onBlur: O,
        onKeydown: $
      }, [
        c("div", el, [
          e.multiple && x.value.length ? (s(!0), r(j, { key: 0 }, U(x.value, (v) => (s(), r("span", {
            key: String(m(v)),
            class: "select-tag",
            onClick: h[0] || (h[0] = se(() => {
            }, ["stop"]))
          }, [
            fe(A(S(v)) + " ", 1),
            c("button", {
              class: "tag-close",
              type: "button",
              "aria-label": `Remove ${S(v)}`,
              onClick: se((p) => g(v), ["stop"])
            }, null, 8, tl)
          ]))), 128)) : !e.multiple && x.value.length ? (s(), r("span", al, A(S(x.value[0])), 1)) : (s(), r("span", ll, A(e.placeholder), 1))
        ]),
        e.clearable && w.value && !e.disabled ? (s(), r("button", {
          key: 0,
          class: "clear-button",
          type: "button",
          "aria-label": "Clear selected value",
          onClick: se(z, ["stop"])
        })) : L("", !0),
        h[3] || (h[3] = c("span", { class: "select-arrow" }, null, -1))
      ], 40, Ja),
      de(ke, { name: "select-dropdown" }, {
        default: pe(() => [
          d.value ? (s(), r("div", nl, [
            e.filterable ? (s(), r("div", sl, [
              ye(c("input", {
                ref_key: "searchInputRef",
                ref: i,
                "onUpdate:modelValue": h[1] || (h[1] = (v) => y.value = v),
                type: "text",
                placeholder: e.searchPlaceholder,
                onClick: h[2] || (h[2] = se(() => {
                }, ["stop"])),
                onKeydown: $
              }, null, 40, ol), [
                [Be, y.value]
              ])
            ])) : L("", !0),
            E.value.length ? (s(), r("div", rl, [
              (s(!0), r(j, null, U(E.value, (v) => (s(), r(j, {
                key: v.key
              }, [
                v.label ? (s(), r("div", il, A(v.label), 1)) : L("", !0),
                (s(!0), r(j, null, U(v.options, (p) => (s(), r(j, null, [
                  p.divider ? (s(), r("div", {
                    class: "select-divider",
                    key: `divider-${p.key || Math.random()}`
                  })) : (s(), r("button", {
                    key: `${v.key}-${String(m(p))}`,
                    class: N(["select-option", {
                      selected: _(p),
                      disabled: p.disabled
                    }]),
                    type: "button",
                    disabled: p.disabled,
                    onClick: se((M) => Z(p), ["stop"])
                  }, [
                    f.value ? (s(), r("span", ul)) : L("", !0),
                    p.icon ? (s(), r("span", dl, [
                      (s(), me(Le(p.icon)))
                    ])) : L("", !0),
                    c("span", fl, A(S(p)), 1),
                    p.shortcut ? (s(), r("span", hl, A(p.shortcut), 1)) : L("", !0)
                  ], 10, cl))
                ], 64))), 256))
              ], 64))), 128))
            ])) : (s(), r("div", vl, A(e.noDataText), 1))
          ])) : L("", !0)
        ]),
        _: 1
      })
    ], 2));
  }
}), gl = /* @__PURE__ */ Y(pl, [["__scopeId", "data-v-d196aecd"]]), ml = W(gl), yl = ["aria-expanded", "aria-disabled"], bl = { class: "cascader-value" }, wl = ["aria-label", "onClick"], xl = {
  key: 1,
  class: "cascader-single"
}, $l = {
  key: 2,
  class: "cascader-placeholder"
}, kl = { class: "cascader-panel-wrapper" }, Cl = /* @__PURE__ */ H({
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
    const t = e, l = a, u = H({
      name: "CascaderMenu",
      props: {
        options: { type: Array, required: !0 },
        selectedValues: { type: Array, required: !0 },
        multiple: { type: Boolean, default: !1 },
        labelKey: { type: String, default: "label" },
        valueKey: { type: String, default: "value" },
        childrenKey: { type: String, default: "children" }
      },
      emits: ["select"],
      setup(n, { emit: o }) {
        const h = C(/* @__PURE__ */ new Set()), v = (I) => String(I[n.labelKey] ?? I.label ?? I[n.valueKey] ?? I.value ?? ""), p = (I) => I[n.valueKey] ?? I.value ?? "", M = (I) => {
          const X = I[n.childrenKey] ?? I.children;
          return Array.isArray(X) && X.length > 0;
        }, D = (I) => I[n.childrenKey] ?? I.children ?? [], K = (I) => {
          const X = p(I);
          return n.selectedValues.includes(X);
        }, G = (I, X) => {
          X.stopPropagation();
          const J = p(I);
          h.value.has(J) ? h.value.delete(J) : h.value.add(J);
        }, R = (I) => {
          if (I.disabled) return;
          const X = p(I);
          D(I), M(I) ? G(I, new MouseEvent("click")) : o("select", { option: I, value: X });
        };
        return () => le("div", { class: "cascader-menu" }, [
          ...(n.options || []).map((I) => {
            const X = p(I), J = h.value.has(X), ne = D(I);
            return le("div", { key: String(X), class: "cascader-menu-item" }, [
              // 选项按钮
              le(
                "button",
                {
                  class: [
                    "cascader-option",
                    {
                      selected: K(I),
                      disabled: I.disabled,
                      "has-children": M(I)
                    }
                  ],
                  type: "button",
                  onClick: (ee) => R(I)
                },
                [
                  // 多选框
                  n.multiple && le("span", { class: "option-check" }, [
                    K(I) && le("span", { class: "check-icon" }, "✓")
                  ]),
                  // 标签
                  le("span", { class: "option-label" }, v(I)),
                  // 箭头
                  M(I) && le("span", {
                    class: ["option-arrow", { "is-expanded": J }]
                  })
                ]
              ),
              // 子菜单
              M(I) && J && le(
                "div",
                { class: "cascader-submenu" },
                [le(u, {
                  options: ne,
                  selectedValues: n.selectedValues,
                  multiple: n.multiple,
                  labelKey: n.labelKey,
                  valueKey: n.valueKey,
                  childrenKey: n.childrenKey,
                  onSelect: (ee) => o("select", ee)
                })]
              )
            ]);
          }),
          n.options.length === 0 && le("div", { class: "cascader-empty" }, "暂无数据")
        ]);
      }
    }), i = C(), d = C(!1), y = C(""), f = C([]), b = V(() => t.multiple ? Array.isArray(t.modelValue) && t.modelValue.length > 0 : t.modelValue !== "" && t.modelValue !== null && t.modelValue !== void 0), k = (n) => String(n[t.labelKey] ?? n.label ?? n[t.valueKey] ?? n.value ?? ""), E = (n) => n[t.valueKey] ?? n.value ?? "", x = (n) => n[t.childrenKey] ?? n.children ?? [], w = (n) => {
      if (!t.showAllLevels) {
        const h = S(t.options, n);
        return h ? k(h) : String(n);
      }
      return m(t.options, n).map((h) => k(h)).join(" / ");
    }, S = (n, o) => {
      for (const h of n) {
        if (E(h) === o)
          return h;
        const v = x(h);
        if (v.length) {
          const p = S(v, o);
          if (p) return p;
        }
      }
      return null;
    }, m = (n, o) => {
      for (const h of n) {
        if (E(h) === o)
          return [h];
        const v = x(h);
        if (v.length) {
          const p = m(v, o);
          if (p.length)
            return [h, ...p];
        }
      }
      return [];
    }, B = (n) => {
      t.disabled || d.value === n || (d.value = n, l("visible-change", n));
    }, _ = () => {
      B(!d.value);
    }, P = ({ option: n, value: o }) => {
      if (!(t.disabled || n.disabled))
        if (t.multiple) {
          const h = f.value.indexOf(o);
          h > -1 ? f.value.splice(h, 1) : f.value.push(o), l("update:modelValue", [...f.value]), l("change", [...f.value]);
        } else
          y.value = o, l("update:modelValue", o), l("change", o), B(!1);
    }, q = (n) => {
      t.multiple && (f.value = f.value.filter((o) => o !== n), l("update:modelValue", [...f.value]), l("change", [...f.value]));
    }, Z = () => {
      t.multiple ? (f.value = [], l("update:modelValue", [])) : (y.value = "", l("update:modelValue", "")), l("change", t.multiple ? [] : ""), l("clear");
    }, g = (n) => {
      t.disabled || l("focus", n);
    }, z = (n) => {
      l("blur", n);
    }, T = (n) => {
      t.disabled || ((n.key === "Enter" || n.key === " ") && (d.value || (n.preventDefault(), B(!0))), n.key === "Escape" && B(!1));
    }, O = (n) => {
      i.value?.contains(n.target) || B(!1);
    }, $ = V(() => ({
      width: `${i.value?.offsetWidth || 260}px`
    }));
    return te(() => t.modelValue, (n) => {
      t.multiple ? f.value = Array.isArray(n) ? [...n] : [] : y.value = n;
    }, { immediate: !0 }), ae(() => {
      document.addEventListener("click", O);
    }), $e(() => {
      document.removeEventListener("click", O);
    }), (n, o) => (s(), r("div", {
      ref_key: "cascaderRef",
      ref: i,
      class: N(["cp-cyber-cascader", [
        `theme-${e.theme}`,
        `size-${e.size}`,
        {
          "is-open": d.value,
          "is-disabled": e.disabled,
          "is-multiple": e.multiple
        }
      ]])
    }, [
      c("div", {
        class: "cascader-control",
        tabindex: "0",
        role: "combobox",
        "aria-expanded": d.value,
        "aria-disabled": e.disabled,
        onClick: _,
        onFocus: g,
        onBlur: z,
        onKeydown: T
      }, [
        c("div", bl, [
          e.multiple && f.value.length ? (s(!0), r(j, { key: 0 }, U(f.value, (h, v) => (s(), r("span", {
            key: v,
            class: "cascader-tag"
          }, [
            fe(A(w(h)) + " ", 1),
            c("button", {
              class: "tag-close",
              type: "button",
              "aria-label": `移除 ${w(h)}`,
              onClick: se((p) => q(h), ["stop"])
            }, "×", 8, wl)
          ]))), 128)) : !e.multiple && y.value ? (s(), r("span", xl, A(w(y.value)), 1)) : (s(), r("span", $l, A(e.placeholder), 1))
        ]),
        e.clearable && b.value && !e.disabled ? (s(), r("button", {
          key: 0,
          class: "clear-button",
          type: "button",
          "aria-label": "清空",
          onClick: se(Z, ["stop"])
        }, [...o[0] || (o[0] = [
          c("span", { class: "clear-icon" }, "×", -1)
        ])])) : L("", !0),
        c("span", {
          class: N(["arrow", { "is-reverse": d.value }])
        }, null, 2)
      ], 40, yl),
      de(ke, { name: "cascader-dropdown" }, {
        default: pe(() => [
          d.value ? (s(), r("div", {
            key: 0,
            class: "cascader-dropdown",
            style: F($.value)
          }, [
            c("div", kl, [
              de(ue(u), {
                options: t.options,
                "selected-values": e.multiple ? f.value : [y.value],
                multiple: e.multiple,
                "label-key": e.labelKey,
                "value-key": e.valueKey,
                "children-key": e.childrenKey,
                onSelect: P
              }, null, 8, ["options", "selected-values", "multiple", "label-key", "value-key", "children-key"])
            ])
          ], 4)) : L("", !0)
        ]),
        _: 1
      })
    ], 2));
  }
}), _l = /* @__PURE__ */ Y(Cl, [["__scopeId", "data-v-05fc0de0"]]), Sl = W(_l), Il = {
  key: 0,
  class: "tree-connectors",
  "aria-hidden": "true"
}, Ml = ["onClick"], Tl = ["aria-expanded", "aria-label", "onClick"], El = {
  key: 1,
  class: "node-expand-placeholder"
}, Bl = { class: "node-label" }, Ll = { class: "label-text" }, Vl = ["title"], Nl = { class: "status-text" }, zl = {
  key: 0,
  class: "tree-empty"
}, Ol = {
  key: 1,
  class: "tree-scanline"
}, ce = 14, Al = /* @__PURE__ */ H({
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
    const l = e, u = t, i = C([]), d = C([]), y = C(0), f = V(() => {
      const g = [], z = (T, O = 0, $) => {
        T.forEach((n, o) => {
          n._level = O, n._parent = $, n._expanded = n.expanded ?? (l.defaultExpandAll || O === 0), n._selected = n.selected ?? !1, n._isLastChild = o === T.length - 1, g.push(n), n._expanded && n.children && n.children.length > 0 && z(n.children, O + 1, n);
        });
      };
      return z(i.value), g;
    }), b = () => {
      const g = (z, T = 0) => {
        const O = {
          ...z,
          _expanded: z.expanded ?? (l.defaultExpandAll || T === 0),
          _selected: z.selected ?? !1,
          _level: T,
          _parent: void 0,
          _isLastChild: !1
        };
        return z.children && z.children.length > 0 && (O.children = z.children.map(($) => g($, T + 1))), O;
      };
      i.value = l.data.map((z) => g(z)), d.value = f.value.filter((z) => z._selected);
    }, k = (g) => !g.children || g.children.length === 0, E = (g) => g._level ?? 0, x = (g) => E(g) * l.indent, w = (g) => {
      const z = E(g);
      return Array.from({ length: Math.max(z - 1, 0) }, (T, O) => O);
    }, S = (g, z) => {
      let T = g, O = E(g);
      for (; T && O > z; )
        T = T._parent, O--;
      return T?._isLastChild ?? !1;
    }, m = (g) => {
      g._expanded = !g._expanded, g.expanded = g._expanded, g._expanded ? u("node-expand", g) : u("node-collapse", g), Z();
    }, B = (g) => {
      l.multiple ? (g._selected = !g._selected, g.selected = g._selected) : g._selected ? (g._selected = !1, g.selected = !1) : (d.value.forEach((z) => {
        z._selected = !1, z.selected = !1;
      }), g._selected = !0, g.selected = !0), _(), u("select-change", d.value), u("node-click", g), l.expandOnClick && !k(g) && m(g);
    }, _ = () => {
      d.value = f.value.filter((g) => g._selected);
    }, P = (g) => g.icon ? g.icon : k(g) ? "icon-file" : g._expanded ? "icon-folder-open" : "icon-folder", q = (g) => g ? {
      online: "Online",
      offline: "Offline",
      warning: "Warning",
      error: "Error"
    }[g] : "", Z = () => {
      y.value++;
    };
    return te(() => l.data, () => {
      b();
    }, { deep: !0, immediate: !0 }), a({
      getSelectedNodes: () => d.value,
      clearSelection: () => {
        d.value.forEach((g) => {
          g._selected = !1, g.selected = !1;
        }), d.value = [], Z();
      }
    }), (g, z) => (s(), r("div", {
      class: N(["cp-cyber-tree cyber-tree", [`theme-${e.theme}`, `effect-${e.effect}`]])
    }, [
      (s(!0), r(j, null, U(f.value, (T) => (s(), r("div", {
        key: `${T.id}-${T._expanded}-${T._selected}-${y.value}`,
        class: N(["tree-node", {
          expanded: T._expanded,
          leaf: k(T),
          "last-child": T._isLastChild
        }]),
        style: F({ paddingLeft: `${x(T)}px` })
      }, [
        e.showConnectors && E(T) > 0 ? (s(), r("div", Il, [
          (s(!0), r(j, null, U(w(T), (O) => (s(), r("span", {
            key: O,
            class: N(["ancestor-line", { hidden: S(T, O) }]),
            style: F({ left: `${O * e.indent + ce}px` })
          }, null, 6))), 128)),
          c("span", {
            class: N(["parent-line", { "is-last": T._isLastChild }]),
            style: F({ left: `${(E(T) - 1) * e.indent + ce}px` })
          }, null, 6),
          c("span", {
            class: "horizontal-line",
            style: F({
              left: `${(E(T) - 1) * e.indent + ce}px`,
              width: `${e.indent - ce + 20}px`
            })
          }, null, 4),
          c("span", {
            class: "connector-joint",
            style: F({ left: `${(E(T) - 1) * e.indent + ce}px` })
          }, null, 4)
        ])) : L("", !0),
        c("div", {
          class: "node-content-wrapper",
          onClick: se((O) => B(T), ["stop"])
        }, [
          c("div", {
            class: N(["node-content", { selected: T._selected }])
          }, [
            k(T) ? (s(), r("span", El)) : (s(), r("button", {
              key: 0,
              class: "node-expand-icon",
              type: "button",
              "aria-expanded": T._expanded,
              "aria-label": T._expanded ? "Collapse node" : "Expand node",
              onClick: se((O) => m(T), ["stop"])
            }, [
              c("span", {
                class: N(["expand-arrow", { rotated: T._expanded }])
              }, null, 2)
            ], 8, Tl)),
            c("span", {
              class: N(["node-icon", P(T)])
            }, [...z[0] || (z[0] = [
              c("span", { class: "icon-core" }, null, -1)
            ])], 2),
            c("span", Bl, [
              c("span", Ll, A(T.label), 1)
            ]),
            e.showStatus && T.status ? (s(), r("span", {
              key: 2,
              class: "node-status",
              title: q(T.status)
            }, [
              c("span", {
                class: N(["status-indicator", `status-${T.status}`])
              }, null, 2),
              c("span", Nl, A(T.status), 1)
            ], 8, Vl)) : L("", !0)
          ], 2)
        ], 8, Ml)
      ], 6))), 128)),
      f.value.length === 0 ? (s(), r("div", zl, " No data ")) : L("", !0),
      e.showScanline && e.effect !== "static" ? (s(), r("div", Ol)) : L("", !0)
    ], 2));
  }
}), Dl = /* @__PURE__ */ Y(Al, [["__scopeId", "data-v-f9876722"]]), Rl = W(Dl), Pl = {
  key: 0,
  class: "cp-divider__line cp-divider__line--left"
}, Kl = {
  key: 1,
  class: "cp-divider__content"
}, Fl = {
  key: 2,
  class: "cp-divider__line cp-divider__line--right"
}, Hl = /* @__PURE__ */ H({
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
    const a = e, t = V(() => {
      const l = {};
      return a.size && (a.direction === "horizontal" ? l.width = a.size : l.height = a.size), l;
    });
    return (l, u) => (s(), r("div", {
      class: N(["cp-divider", [`cp-divider--${e.direction}`, `cp-divider--${e.type}`]]),
      style: F(t.value)
    }, [
      e.showLeftLine ? (s(), r("div", Pl)) : L("", !0),
      l.$slots.default || e.content ? (s(), r("div", Kl, [
        Q(l.$slots, "default", {}, () => [
          fe(A(e.content), 1)
        ], !0)
      ])) : L("", !0),
      e.showRightLine ? (s(), r("div", Fl)) : L("", !0)
    ], 6));
  }
}), Gl = /* @__PURE__ */ Y(Hl, [["__scopeId", "data-v-e3e2783b"]]), Wl = W(Gl), Yl = { class: "input-wrapper" }, ql = ["type", "value", "placeholder", "disabled", "readonly", "maxlength", "autocomplete"], jl = {
  key: 0,
  class: "input-glitch"
}, Xl = {
  key: 1,
  class: "input-scanline"
}, Ul = /* @__PURE__ */ H({
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
    const l = e, u = t, i = C(null), d = V(() => {
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
    }), y = V(() => {
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
    }), f = (w) => {
      const S = w.target;
      u("update:modelValue", S.value), u("input", S.value);
    }, b = (w) => {
      u("focus", w);
    }, k = (w) => {
      u("blur", w);
    }, E = (w) => {
      u("keyup", w);
    }, x = (w) => {
      u("keydown", w);
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
    }), (w, S) => (s(), r("div", {
      class: N(["cp-input", d.value, y.value])
    }, [
      c("div", Yl, [
        c("input", {
          ref_key: "inputRef",
          ref: i,
          type: e.type,
          value: e.modelValue,
          placeholder: e.placeholder,
          disabled: e.disabled,
          readonly: e.readonly,
          maxlength: e.maxlength,
          autocomplete: e.autocomplete,
          onInput: f,
          onFocus: b,
          onBlur: k,
          onKeyup: E,
          onKeydown: x,
          class: "cyber-input"
        }, null, 40, ql),
        S[0] || (S[0] = c("div", { class: "input-border" }, null, -1)),
        e.glitchEffect ? (s(), r("div", jl)) : L("", !0),
        e.scanlineEffect ? (s(), r("div", Xl)) : L("", !0)
      ])
    ], 2));
  }
}), Ql = /* @__PURE__ */ Y(Ul, [["__scopeId", "data-v-a6c7ea98"]]), Zl = W(Ql), Jl = [
  De,
  Xe,
  et,
  ct,
  wt,
  Bt,
  At,
  qt,
  sa,
  fa,
  xa,
  pa,
  Ca,
  Ma,
  Ba,
  Kt,
  Oa,
  _t,
  Ha,
  qa,
  ml,
  Sl,
  Rl,
  Za,
  Wl,
  Zl
], en = Ve([...Jl]);
console.log(
  "%c %s",
  "border: 1px solid #97E3FE;border-radius: 3px;padding: 2px 5px;color: white;font-weight:bolder;background: linear-gradient(to right, #fF717F,#CC54D1,#4EAFFA,#3DE1C3, #F7DA66)",
  "CyberPunk-UI"
);
const ln = en.install;
export {
  en as default,
  ln as install,
  Ve as makeInstaller
};
