import { defineComponent as P, useSlots as ie, computed as B, openBlock as n, createElementBlock as s, normalizeClass as L, createElementVNode as d, unref as me, renderSlot as U, toDisplayString as O, ref as S, onUnmounted as re, createBlock as ue, Teleport as be, createVNode as oe, TransitionGroup as we, withCtx as de, Fragment as Y, renderList as X, createCommentVNode as E, normalizeStyle as K, watch as Z, nextTick as pe, onMounted as J, withDirectives as ge, createTextVNode as fe, vShow as xe, watchEffect as Ie, useCssVars as ve, getCurrentInstance as Me, createStaticVNode as Te, reactive as Ve, onBeforeUnmount as $e, withModifiers as te, Transition as ye, vModelText as Ee, resolveDynamicComponent as Be, resolveComponent as ke } from "vue";
const Le = (e = []) => ({
  install: (t) => {
    e.forEach((l) => t.use(l));
  }
}), H = (e, a) => (e.install = (t) => {
  for (const l of [e, ...Object.values({})])
    t.component(l.name, l);
}, e), ze = ["data-content"], Ne = { key: 1 }, Oe = /* @__PURE__ */ P({
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
    const t = ie(), l = e, i = B(() => {
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
    }), o = B(() => {
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
    return (u, h) => (n(), s("div", {
      class: L(["cp-button", o.value])
    }, [
      d("div", {
        class: L(["button", i.value]),
        "data-content": l.content
      }, [
        me(t) ? U(u.$slots, "default", { key: 0 }, void 0, !0) : (n(), s("span", Ne, O(l.content), 1))
      ], 10, ze)
    ], 2));
  }
}), F = (e, a) => {
  const t = e.__vccOpts || e;
  for (const [l, i] of a)
    t[l] = i;
  return t;
}, Ae = /* @__PURE__ */ F(Oe, [["__scopeId", "data-v-6fea0e49"]]), De = H(Ae), Re = { class: "notification-content" }, Pe = {
  key: 0,
  class: "notification-icon"
}, Ke = { class: "notification-body" }, Fe = {
  key: 0,
  class: "notification-title"
}, He = { class: "notification-message" }, Ge = {
  key: 1,
  class: "notification-actions"
}, We = ["onClick"], Ye = ["onClick"], qe = /* @__PURE__ */ P({
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
    const l = e, i = t, o = S([]), u = S(!1);
    let h = 0;
    const g = (b) => {
      const C = ++h, f = b.actions && b.actions.length > 0, T = {
        id: C,
        title: b.title || "",
        message: b.message,
        type: b.type || "info",
        duration: b.duration !== void 0 ? b.duration : f ? 0 : l.duration,
        showClose: b.showClose !== void 0 ? b.showClose : !0,
        showIcon: b.showIcon !== void 0 ? b.showIcon : !0,
        actions: b.actions || [],
        effect: b.effect || l.effect,
        onClose: b.onClose || (() => {
        })
      };
      if (o.value.push(T), u.value = !0, T.duration > 0 && setTimeout(() => {
        m(C);
      }, T.duration), o.value.length > l.maxCount) {
        const I = o.value[0];
        m(I.id);
      }
      return C;
    }, m = (b) => {
      const C = o.value.findIndex((f) => f.id === b);
      if (C !== -1) {
        const f = o.value[C];
        f.onClose && f.onClose(), o.value.splice(C, 1), i("close", b);
      }
    }, w = (b, C) => {
      C.callback && C.callback(), m(b.id);
    }, _ = () => {
      o.value.length === 0 && (u.value = !1);
    }, v = () => {
      o.value.forEach((b) => {
        b.onClose && b.onClose();
      }), o.value = [], u.value = !1;
    };
    return a({
      // 创建不同类型的通知
      info: (b) => g({ ...b, type: "info" }),
      success: (b) => g({ ...b, type: "success" }),
      warning: (b) => g({ ...b, type: "warning" }),
      error: (b) => g({ ...b, type: "error" }),
      // 通用创建方法
      create: g,
      // 关闭方法
      close: m,
      // 清除所有
      clearAll: v
    }), re(() => {
      v();
    }), (b, C) => (n(), ue(be, { to: "body" }, [
      u.value ? (n(), s("div", {
        key: 0,
        class: L(["cp-cyber-notification-container", `position-${e.position}`])
      }, [
        oe(we, {
          name: "notification",
          tag: "div",
          onAfterLeave: _
        }, {
          default: de(() => [
            (n(!0), s(Y, null, X(o.value, (f) => (n(), s("div", {
              key: f.id,
              class: L(["cp-cyber-notification", `type-${f.type}`, `effect-${f.effect}`])
            }, [
              d("div", Re, [
                f.showIcon ? (n(), s("div", Pe, [...C[0] || (C[0] = [
                  d("div", { class: "icon-circle" }, null, -1),
                  d("div", { class: "icon-symbol" }, null, -1)
                ])])) : E("", !0),
                d("div", Ke, [
                  f.title ? (n(), s("div", Fe, O(f.title), 1)) : E("", !0),
                  d("div", He, O(f.message), 1),
                  f.actions && f.actions.length ? (n(), s("div", Ge, [
                    (n(!0), s(Y, null, X(f.actions, (T, I) => (n(), s("button", {
                      key: I,
                      class: "action-button",
                      onClick: (A) => w(f, T)
                    }, O(T.text), 9, We))), 128))
                  ])) : E("", !0)
                ]),
                f.showClose ? (n(), s("div", {
                  key: 1,
                  class: "notification-close",
                  onClick: (T) => m(f.id)
                }, [...C[1] || (C[1] = [
                  d("span", { class: "close-icon" }, "×", -1)
                ])], 8, Ye)) : E("", !0)
              ]),
              f.duration > 0 ? (n(), s("div", {
                key: 0,
                class: "notification-progress",
                style: K({ animationDuration: `${f.duration}ms` })
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
}), je = /* @__PURE__ */ F(qe, [["__scopeId", "data-v-5b833339"]]), Xe = H(je), Ue = { class: "tooltip-inner" }, Qe = { class: "tooltip-content" }, Ze = /* @__PURE__ */ P({
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
    const t = e, l = a, i = S(!1), o = S(null), u = S(null), h = S(null), g = S(t.position), m = S({}), w = () => {
      if (!o.value || !u.value || t.position !== "auto")
        return t.position;
      const r = o.value.getBoundingClientRect(), $ = u.value.getBoundingClientRect(), c = window.innerWidth, k = window.innerHeight, y = r.top, x = c - r.right, V = k - r.bottom, D = r.left, G = [
        { position: "top", space: y },
        { position: "right", space: x },
        { position: "bottom", space: V },
        { position: "left", space: D }
      ];
      G.sort((j, ae) => ae.space - j.space);
      const W = $.height || 50, R = $.width || 150;
      for (const j of G)
        if (j.position === "top" && j.space >= W + 10 || j.position === "bottom" && j.space >= W + 10 || j.position === "left" && j.space >= R + 10 || j.position === "right" && j.space >= R + 10)
          return j.position;
      return "top";
    }, _ = B(() => typeof t.width == "number" ? `${t.width}px` : t.width), v = () => {
      h.value && clearTimeout(h.value), h.value = window.setTimeout(() => {
        i.value = !0, pe(() => {
          t.position === "auto" ? g.value = w() : g.value = t.position, C(), l("show");
        });
      }, t.delay);
    }, b = () => {
      h.value && clearTimeout(h.value), h.value = window.setTimeout(() => {
        i.value = !1, l("hide");
      }, 100);
    }, C = () => {
      if (!o.value || !u.value) return;
      const r = o.value.getBoundingClientRect(), $ = u.value.getBoundingClientRect(), c = window.pageYOffset || document.documentElement.scrollTop, k = window.pageXOffset || document.documentElement.scrollLeft;
      let y = 0, x = 0;
      const V = 10;
      switch (g.value) {
        case "top":
          y = r.left + r.width / 2 - $.width / 2 + k, x = r.top - $.height - V + c;
          break;
        case "right":
          y = r.right + V + k, x = r.top + r.height / 2 - $.height / 2 + c;
          break;
        case "bottom":
          y = r.left + r.width / 2 - $.width / 2 + k, x = r.bottom + V + c;
          break;
        case "left":
          y = r.left - $.width - V + k, x = r.top + r.height / 2 - $.height / 2 + c;
          break;
      }
      (() => {
        const G = window.innerWidth, W = window.innerHeight, R = 10;
        y < R ? y = R : y + $.width > G - R && (y = G - $.width - R), x < R ? x = R : x + $.height > W - R && (x = W - $.height - R);
      })(), m.value = {
        left: `${y}px`,
        top: `${x}px`,
        width: _.value
      };
    }, f = () => {
      t.trigger === "hover" && v();
    }, T = () => {
      t.trigger === "hover" && b();
    }, I = () => {
      t.trigger === "click" && (i.value ? b() : v());
    }, A = () => {
      t.trigger === "focus" && v();
    }, q = () => {
      t.trigger === "focus" && b();
    }, Q = () => {
      i.value && (t.position === "auto" && (g.value = w()), C());
    }, p = () => {
      i.value && (N && clearTimeout(N), N = setTimeout(() => {
        C();
      }, 16));
    };
    Z(
      () => t.position,
      (r) => {
        i.value && pe(() => {
          r === "auto" ? g.value = w() : g.value = r, C();
        });
      }
    );
    let z = [];
    const M = (r) => {
      let $ = [], c = r.parentElement;
      for (; c; ) {
        const k = window.getComputedStyle(c);
        /(auto|scroll)/.test(k.overflow + k.overflowY + k.overflowX) && $.push(c), c = c.parentElement;
      }
      return $.push(document.documentElement), $;
    };
    J(() => {
      if (window.addEventListener("resize", Q), window.addEventListener("scroll", p, { passive: !0 }), document.addEventListener("click", (r) => {
        if (i.value && t.trigger === "click") {
          const $ = r.target;
          u.value && !u.value.contains($) && o.value && !o.value.contains($) && b();
        }
      }), o.value) {
        z = M(o.value);
        const r = () => {
          N && clearTimeout(N), N = setTimeout(() => {
            i.value && C();
          }, 16);
        };
        z.forEach(($) => {
          $.addEventListener("scroll", r);
        });
      }
    });
    let N = null;
    return re(() => {
      window.removeEventListener("resize", Q), window.removeEventListener("scroll", p), z.forEach((r) => {
        r.removeEventListener("scroll", p);
      }), h.value && clearTimeout(h.value), N && clearTimeout(N);
    }), (r, $) => (n(), s("div", null, [
      d("div", {
        ref_key: "triggerRef",
        ref: o,
        class: "tooltip-trigger",
        onMouseenter: f,
        onMouseleave: T,
        onClick: I,
        onFocus: A,
        onBlur: q
      }, [
        U(r.$slots, "default", {}, void 0, !0)
      ], 544),
      (n(), ue(be, { to: "body" }, [
        ge(d("div", {
          ref_key: "tooltipRef",
          ref: u,
          class: L([
            "cp-cyber-tooltip",
            `theme-${e.theme}`,
            `effect-${e.effect}`,
            `position-${g.value}`
          ]),
          style: K(m.value)
        }, [
          $[2] || ($[2] = d("div", { class: "tooltip-arrow" }, null, -1)),
          d("div", Ue, [
            d("div", Qe, [
              U(r.$slots, "content", {}, () => [
                fe(O(e.content), 1)
              ], !0)
            ]),
            $[0] || ($[0] = d("div", { class: "tooltip-scanline" }, null, -1)),
            $[1] || ($[1] = d("div", { class: "tooltip-glitch" }, null, -1))
          ])
        ], 6), [
          [xe, i.value]
        ])
      ]))
    ]));
  }
}), Je = /* @__PURE__ */ F(Ze, [["__scopeId", "data-v-3de3033d"]]), et = H(Je), tt = { class: "progress-track" }, at = {
  key: 0,
  class: "percentage-inside"
}, lt = { class: "tick-marks" }, nt = {
  key: 0,
  class: "percentage-outside"
}, st = {
  key: 1,
  class: "status-indicator"
}, ot = { class: "status-text" }, it = /* @__PURE__ */ P({
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
    const a = e, t = B(() => Math.min(100, Math.max(0, a.percentage)).toFixed(0)), l = B(() => {
      const i = Number(t.value);
      return i < 30 ? "INITIALIZING" : i < 60 ? "PROCESSING" : i < 90 ? "LOADING" : i < 100 ? "ALMOST" : "COMPLETE";
    });
    return (i, o) => (n(), s("div", {
      class: L(["cyber-progress", [`theme-${e.theme}`, { animated: e.animated }]])
    }, [
      d("div", tt, [
        o[0] || (o[0] = d("div", { class: "track-grid" }, null, -1)),
        d("div", {
          class: "progress-bar",
          style: K({ width: e.percentage + "%" })
        }, [
          e.showPercentage && e.percentagePosition === "inside" ? (n(), s("span", at, O(t.value) + "% ", 1)) : E("", !0)
        ], 4),
        d("div", lt, [
          (n(), s(Y, null, X(10, (u) => d("span", {
            key: u,
            class: L(["tick", { active: u * 10 <= e.percentage }])
          }, null, 2)), 64))
        ])
      ]),
      e.showPercentage && e.percentagePosition === "outside" ? (n(), s("span", nt, O(t.value) + "% ", 1)) : E("", !0),
      e.showStatus ? (n(), s("div", st, [
        o[1] || (o[1] = d("div", { class: "indicator-dot" }, null, -1)),
        d("span", ot, O(l.value), 1)
      ])) : E("", !0)
    ], 2));
  }
}), rt = /* @__PURE__ */ F(it, [["__scopeId", "data-v-44363fb0"]]), ct = H(rt), ut = {
  key: 0,
  class: "prefix"
}, dt = { class: "counter-container" }, ft = {
  key: 0,
  class: "separator"
}, vt = { class: "digit-top" }, ht = { class: "digit-bottom" }, mt = { class: "digit-top flip-top" }, pt = { class: "digit-bottom flip-bottom" }, gt = {
  key: 1,
  class: "suffix"
}, yt = /* @__PURE__ */ P({
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
    const a = e, t = S(Number(a.from)), l = S(Number(a.value)), i = S(null), o = S(null), u = S(""), h = (f) => {
      const T = Math.pow(10, a.decimal);
      let A = (Math.round(f * T) / T).toFixed(a.decimal);
      if (a.separator) {
        const q = A.split(".");
        q[0] = q[0].replace(/\B(?=(\d{3})+(?!\d))/g, a.separator), A = q.join(".");
      }
      return A;
    }, g = B(() => h(t.value)), m = B(() => g.value.split("")), w = (f) => f === a.separator || f === ".", _ = (f) => !u.value || f >= u.value.length ? !1 : u.value[f] !== m.value[f] && !w(m.value[f]), v = (f) => {
      i.value === null && (i.value = f);
      const T = f - i.value, I = Math.min(T / a.duration, 1), A = Number(a.from), q = Number(a.to !== null ? a.to : l.value), Q = A + (q - A) * b(I);
      t.value = Q, I < 1 ? o.value = requestAnimationFrame(v) : (t.value = q, i.value = null);
    }, b = (f) => 1 - Math.pow(1 - f, 4), C = () => {
      u.value = g.value, o.value !== null && cancelAnimationFrame(o.value), i.value = null, o.value = requestAnimationFrame(v);
    };
    return Z(() => a.value, (f) => {
      l.value = Number(f), C();
    }), Z(() => a.to, (f) => {
      f !== null && (l.value = Number(f), C());
    }), J(() => {
      Number(a.from) !== Number(a.value) && C();
    }), re(() => {
      o.value !== null && cancelAnimationFrame(o.value);
    }), (f, T) => (n(), s("div", {
      class: L(["cp-digital-counter", `theme-${e.theme}`])
    }, [
      e.prefix ? (n(), s("span", ut, O(e.prefix), 1)) : E("", !0),
      d("div", dt, [
        (n(!0), s(Y, null, X(m.value, (I, A) => (n(), s("div", {
          key: A,
          class: "digit-container"
        }, [
          w(I) ? (n(), s("div", ft, O(I), 1)) : (n(), s("div", {
            key: 1,
            class: L(["digit-flipper", { animate: _(A) }])
          }, [
            d("div", vt, O(I), 1),
            d("div", ht, O(I), 1),
            d("div", mt, O(I), 1),
            d("div", pt, O(I), 1)
          ], 2))
        ]))), 128))
      ]),
      e.suffix ? (n(), s("span", gt, O(e.suffix), 1)) : E("", !0)
    ], 2));
  }
}), bt = /* @__PURE__ */ F(yt, [["__scopeId", "data-v-99c23541"]]), wt = H(bt), xt = {
  class: "cp-full-page",
  id: "page-scroll"
}, $t = ["onClick"], kt = /* @__PURE__ */ P({
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
    const t = e, l = a, i = S();
    Ie(() => {
      i.value?.style && (i.value.style.transform = u.value);
    });
    const o = B(() => {
      h.value = !0;
      let p = 0;
      return document.getElementById("page-scroll")?.clientHeight ? p = document.getElementById("page-scroll")?.clientHeight ?? 0 : p = window.innerHeight, p;
    }), u = B(() => `translateY(-${I.value * o.value}px)`), h = S(!1), g = S(!0);
    function m(p) {
      p.preventDefault(), p.stopPropagation(), h.value = !1, g.value && (g.value = !1, T(p), setTimeout(() => {
        g.value = !0;
      }, 500));
    }
    const w = S(0), _ = S(0), v = S(0);
    function b(p) {
      w.value = p.touches[0].pageY || p.changedTouches[0].pageY;
    }
    function C(p) {
      p.preventDefault(), h.value = !1, _.value = p.changedTouches[0].pageY || p.touches[0].pageY, v.value = _.value - w.value, Math.abs(v.value) >= 60 ? (I.value < t.items.length - 1 && v.value < 0 && I.value++, I.value > 0 && v.value > 0 && I.value--) : (console.log("else", -I.value * o.value), i.value.style.transform = `translateY(-${I.value * o.value}px)`);
    }
    function f(p) {
      h.value = !0, p.preventDefault(), v.value = (p.changedTouches[0].pageY || p.touches[0].pageY) - w.value, !(I.value === t.items.length - 1 && v.value < 0 || I.value === 0 && v.value > 0) && (console.log("else", -I.value * o.value + v.value * -1), i.value.style.transform = `translateY(-${I.value * o.value + v.value * -1}px)`);
    }
    function T(p) {
      p.wheelDelta < 0 ? (A(), l("change", { from: t.items[I.value - 1], to: t.items[I.value], type: "next" })) : (q(), l("change", { from: t.items[I.value + 1], to: t.items[I.value], type: "last" }));
    }
    const I = S(0);
    function A() {
      I.value < t.items.length - 1 && (I.value++, l("toNext", I.value));
    }
    function q() {
      (I.value > 1 || I.value === 1) && (I.value--, l("toLast", I.value));
    }
    function Q(p) {
      h.value = !1, I.value = p;
    }
    return (p, z) => (n(), s("div", xt, [
      d("div", {
        ref_key: "element",
        ref: i,
        class: L([{ activeTranstion: h.value }, "inner-box"]),
        onMousewheel: m,
        onTouchstart: b,
        onTouchend: C,
        onTouchmove: f
      }, [
        U(p.$slots, "default", {}, void 0, !0)
      ], 34),
      d("div", {
        class: L(["cp-full-dot", t.position])
      }, [
        (n(!0), s(Y, null, X(t.items, (M, N) => (n(), s("div", {
          onClick: (r) => Q(N),
          class: "cp-full-dot-item"
        }, [
          d("div", {
            class: L(["cp-full-dot-item-bg", { active: N === I.value }])
          }, null, 2),
          t.showTitle ? ge((n(), s("div", {
            key: 0,
            class: "show-dec"
          }, O(M.title), 513)), [
            [xe, N === I.value]
          ]) : E("", !0)
        ], 8, $t))), 256))
      ], 2)
    ]));
  }
}), Ct = /* @__PURE__ */ F(kt, [["__scopeId", "data-v-ee83c807"]]), _t = H(Ct), St = ["src", "alt"], It = {
  key: 1,
  class: "loading-placeholder"
}, Mt = {
  key: 2,
  class: "error-placeholder"
}, Tt = /* @__PURE__ */ P({
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
    const t = e, l = a, i = S(null), o = S(null), u = S(null), h = S(!1), g = S(!1), m = S(!1), w = S(null), _ = S(null), v = B(() => t.intensity / 10), b = () => {
      h.value = !0, g.value = !1, setTimeout(() => {
        f(), t.triggerMode === "auto" ? M() : t.triggerMode === "random" && N();
      }, 0);
    }, C = () => {
      g.value = !0, h.value = !1, console.error("Failed to load image:", t.src);
    }, f = () => {
      if (!u.value || !o.value) return;
      const y = o.value, x = u.value, V = x.getContext("2d");
      if (V) {
        x.width = y.naturalWidth, x.height = y.naturalHeight;
        try {
          V.drawImage(y, 0, 0), _.value = V.getImageData(0, 0, x.width, x.height);
        } catch (D) {
          console.error("Failed to get image data (possibly CORS issue):", D), g.value = !0;
        }
      }
    }, T = (y, x) => {
      if (!_.value) return;
      const V = y.canvas, D = y.getImageData(0, 0, V.width, V.height), G = D.data, W = _.value.data, R = Math.floor(20 * x), j = Math.floor(Math.random() * R), ae = Math.floor(Math.random() * R);
      for (let le = 0; le < V.height; le++)
        for (let ne = 0; ne < V.width; ne++) {
          const ee = (le * V.width + ne) * 4, se = Math.min(Math.max(ne + j, 0), V.width - 1), Ce = (Math.min(Math.max(le + ae, 0), V.height - 1) * V.width + se) * 4;
          G[ee] = W[Ce];
          const _e = Math.min(Math.max(ne - j, 0), V.width - 1), Se = (Math.min(Math.max(le - ae, 0), V.height - 1) * V.width + _e) * 4;
          G[ee + 2] = W[Se + 2], G[ee + 1] = W[ee + 1];
        }
      y.putImageData(D, 0, 0);
    }, I = (y, x) => {
      if (!_.value) return;
      const V = y.canvas;
      y.putImageData(_.value, 0, 0);
      const D = Math.max(1, Math.floor(5 / x)), G = 0.5 + x * 0.1;
      for (let W = 0; W < V.height; W += D * 2)
        y.fillStyle = `rgba(255, 255, 255, ${G})`, y.fillRect(0, W, V.width, D);
    }, A = (y, x) => {
      if (!_.value) return;
      const V = y.canvas;
      y.putImageData(_.value, 0, 0);
      const D = Math.max(4, Math.floor(x * 8));
      if (Math.random() > 0.5)
        for (let W = 0; W < V.height; W += D)
          for (let R = 0; R < V.width; R += D) {
            const j = y.getImageData(R, W, 1, 1).data;
            y.fillStyle = `rgb(${j[0]}, ${j[1]}, ${j[2]})`, y.fillRect(R, W, D, D);
          }
      else {
        const W = Math.floor(x * 3);
        for (let R = 0; R < W; R++) {
          const j = Math.floor(Math.random() * (V.width - 50)), ae = Math.floor(Math.random() * (V.height - 50)), le = Math.floor(Math.random() * 100 * x) + 30, ne = Math.floor(Math.random() * 80 * x) + 20;
          for (let ee = ae; ee < ae + ne; ee += D)
            for (let se = j; se < j + le; se += D)
              if (se < V.width && ee < V.height) {
                const he = y.getImageData(se, ee, 1, 1).data;
                y.fillStyle = `rgb(${he[0]}, ${he[1]}, ${he[2]})`, y.fillRect(se, ee, D, D);
              }
        }
      }
    }, q = (y, x) => {
      if (!_.value) return;
      const V = y.canvas, D = y.getImageData(0, 0, V.width, V.height), G = D.data, W = 0.2 + x * 0.05;
      for (let R = 0; R < G.length; R += 4)
        Math.random() < W && (Math.random() > 0.5 ? (G[R] = 255, G[R + 1] = 255, G[R + 2] = 255) : (G[R] = Math.floor(Math.random() * 256), G[R + 1] = Math.floor(Math.random() * 256), G[R + 2] = Math.floor(Math.random() * 256)));
      y.putImageData(D, 0, 0);
    }, Q = (y, x) => {
      [...["rgb-shift", "scanline", "pixelate", "noise"]].sort(() => 0.5 - Math.random()).slice(0, 2 + Math.floor(Math.random() * 2)).forEach((W) => {
        switch (W) {
          case "rgb-shift":
            T(y, x);
            break;
          case "scanline":
            I(y, x);
            break;
          case "pixelate":
            A(y, x);
            break;
          case "noise":
            q(y, x);
            break;
        }
      });
    }, p = () => {
      if (!u.value || !_.value) return;
      const x = u.value.getContext("2d");
      if (x) {
        switch (x.putImageData(_.value, 0, 0), t.glitchType) {
          case "rgb-shift":
            T(x, v.value);
            break;
          case "scanline":
            I(x, v.value);
            break;
          case "pixelate":
            A(x, v.value);
            break;
          case "noise":
            q(x, v.value);
            break;
          case "combined":
            Q(x, v.value);
            break;
        }
        m.value = !0, l("glitch-start");
      }
    }, z = () => {
      if (!u.value || !_.value) return;
      const x = u.value.getContext("2d");
      x && (x.putImageData(_.value, 0, 0), m.value = !1, l("glitch-end"));
    }, M = () => {
      w.value && clearInterval(w.value), p(), t.animated && (w.value = window.setInterval(() => {
        p();
      }, t.interval));
    }, N = () => {
      w.value && clearInterval(w.value), w.value = window.setInterval(() => {
        Math.random() < 0.5 && (p(), setTimeout(() => {
          z();
        }, 200 + Math.random() * 300));
      }, t.interval);
    }, r = () => {
      w.value && (clearInterval(w.value), w.value = null), z();
    }, $ = () => {
      t.triggerMode === "hover" && M();
    }, c = () => {
      t.triggerMode === "hover" && !t.animated && r();
    }, k = () => {
      t.triggerMode === "click" && (m.value ? r() : M());
    };
    return Z(() => [t.src, t.glitchType, t.intensity], () => {
      t.src && (h.value = !1, g.value = !1), m.value && p();
    }), J(() => {
      o.value && o.value.complete && o.value.naturalHeight !== 0 && b();
    }), re(() => {
      w.value && clearInterval(w.value);
    }), (y, x) => (n(), s("div", {
      class: L(["cp-glitch-image", { animated: e.animated }]),
      onMouseenter: $,
      onMouseleave: c,
      onClick: k
    }, [
      d("div", {
        class: "image-container",
        ref_key: "imageContainerRef",
        ref: i
      }, [
        d("img", {
          src: e.src,
          alt: e.alt,
          ref_key: "imageRef",
          ref: o,
          class: "original-image",
          crossOrigin: "anonymous",
          onLoad: b,
          onError: C
        }, null, 40, St),
        h.value && !g.value ? (n(), s("canvas", {
          key: 0,
          ref_key: "glitchCanvasRef",
          ref: u,
          class: "glitch-canvas"
        }, null, 512)) : E("", !0),
        !h.value && !g.value ? (n(), s("div", It, [...x[0] || (x[0] = [
          d("div", { class: "loading-text" }, "Loading...", -1)
        ])])) : E("", !0),
        g.value ? (n(), s("div", Mt, [...x[1] || (x[1] = [
          d("div", { class: "error-text" }, "Image Load Failed", -1)
        ])])) : E("", !0)
      ], 512)
    ], 34));
  }
}), Vt = /* @__PURE__ */ F(Tt, [["__scopeId", "data-v-b2947767"]]), Et = H(Vt), Bt = ["data-progress"], Lt = { class: "progress-container" }, zt = {
  key: 0,
  class: "progress-text"
}, Nt = /* @__PURE__ */ P({
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
    const a = e, t = S(null), l = S(null), i = B(() => a.direction === "vertical" ? "vertical" : "horizontal"), o = B(() => {
      const g = a.direction === "vertical" ? "height" : "width", m = a.indeterminate ? "100%" : `${a.progress}%`;
      return {
        [g]: m,
        backgroundColor: a.color,
        boxShadow: `0 0 ${a.glitchIntensity * 2}px ${a.color}`
      };
    }), u = () => {
      if (!t.value) return;
      const g = t.value.querySelector(".glitch-effect");
      if (!g) return;
      const m = () => {
        if (!g) return;
        if (Math.random() < a.glitchIntensity / 20) {
          const _ = Math.random() * a.glitchIntensity - a.glitchIntensity / 2, v = Math.random() * a.glitchIntensity - a.glitchIntensity / 2, b = Math.random() * a.glitchIntensity - a.glitchIntensity / 2, C = Math.random() * a.glitchIntensity / 2;
          g.style.transform = `translate(${_}px, ${v}px) skew(${b}deg)`, g.style.filter = `blur(${C}px)`, g.style.opacity = "1", setTimeout(() => {
            g && (g.style.transform = "translate(0, 0) skew(0)", g.style.filter = "blur(0)", g.style.opacity = "0");
          }, 150);
        }
      };
      l.value = window.setInterval(() => {
        m();
      }, 500);
    };
    let h = a.progress;
    return Z(() => a.progress, (g) => {
      if (g !== h) {
        if (t.value) {
          const m = t.value.querySelector(".glitch-effect");
          if (m) {
            const w = Math.random() * a.glitchIntensity * 2 - a.glitchIntensity, _ = Math.random() * a.glitchIntensity - a.glitchIntensity / 2;
            m.style.transform = `translate(${w}px, ${_}px)`, m.style.opacity = "1", setTimeout(() => {
              m && (m.style.transform = "translate(0, 0)", m.style.opacity = "0");
            }, 300);
          }
        }
        h = g;
      }
    }), J(() => {
      u();
    }), re(() => {
      l.value && clearInterval(l.value);
    }), (g, m) => (n(), s("div", {
      class: L(["cp-glitch-progress", i.value, { indeterminate: e.indeterminate }]),
      "data-progress": e.progress
    }, [
      d("div", Lt, [
        d("div", {
          class: "progress-bar",
          style: K(o.value),
          ref_key: "progressBarRef",
          ref: t
        }, [...m[0] || (m[0] = [
          d("div", { class: "glitch-effect" }, null, -1)
        ])], 4),
        e.showText && !e.indeterminate ? (n(), s("div", zt, O(e.progress) + "% ", 1)) : E("", !0)
      ])
    ], 10, Bt));
  }
}), Ot = /* @__PURE__ */ F(Nt, [["__scopeId", "data-v-27854e11"]]), At = H(Ot), Dt = { class: "glow-text" }, Rt = /* @__PURE__ */ P({
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
    }), (t, l) => (n(), s("div", Dt, [
      U(t.$slots, "default", {}, void 0, !0)
    ]));
  }
}), Pt = /* @__PURE__ */ F(Rt, [["__scopeId", "data-v-7d666f1f"]]), Kt = H(Pt), Ft = ["tabindex", "aria-disabled", "aria-label"], Ht = { class: "holo-card-content" }, Gt = {
  key: 0,
  class: "card-title"
}, Wt = /* @__PURE__ */ P({
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
      v558892ac: l.hologramColor
    }));
    const a = Me(), t = ie(), l = e, i = S({ x: 0, y: 0 }), o = S(!1), g = ((f, T) => {
      let I;
      return function() {
        const A = arguments, q = a;
        I || (f.apply(q, A), I = !0, setTimeout(() => I = !1, T));
      };
    })((f) => {
      if (l.disabled) return;
      const T = f.currentTarget.getBoundingClientRect();
      i.value = {
        x: (f.clientX - T.left) / T.width * 2 - 1,
        y: (f.clientY - T.top) / T.height * 2 - 1
      }, o.value = !0;
    }, 16), m = () => {
      o.value = !1, i.value = { x: 0, y: 0 };
    }, w = () => {
      l.disabled || (o.value = !0, i.value = { x: 0, y: 0 });
    }, _ = B(() => [(() => {
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
    })()]), v = B(() => {
      const f = {};
      if (l.rounded || (f.borderRadius = "0"), l.disabled && (f.cursor = "not-allowed", f.opacity = "0.6"), !o.value || l.disabled) return f;
      const T = i.value.y * 10, I = -i.value.x * 10;
      return {
        ...f,
        transform: `perspective(1000px) rotateX(${T}deg) rotateY(${I}deg) scale3d(1.05, 1.05, 1.05)`,
        transition: "transform 0.1s ease"
      };
    }), b = B(() => {
      if (!o.value || l.disabled) return {};
      const f = Math.max(-50, Math.min(50, i.value.x * 10)), T = Math.max(-50, Math.min(50, i.value.y * 10));
      return {
        background: `radial-gradient(circle at ${50 + f}% ${50 + T}%, ${l.hologramColor}33, transparent 70%)`,
        opacity: 0.8,
        transition: "background 0.1s ease"
      };
    }), C = B(() => {
      const f = l.glowIntensity / 100;
      return {
        boxShadow: `0 0 ${10 + l.glowIntensity / 5}px ${l.hologramColor}${Math.floor(f * 99).toString(16).padStart(2, "0")}`,
        opacity: o.value && !l.disabled ? f : f * 0.5
      };
    });
    return J(() => {
      pe(() => {
      });
    }), (f, T) => (n(), s("div", {
      class: L([
        "cp-holo-card",
        `depth-${e.depth}`,
        _.value,
        `theme-${e.theme}`,
        `effect-${e.effect}`
      ]),
      style: K(v.value),
      onMousemove: T[0] || (T[0] = //@ts-ignore
      (...I) => me(g) && me(g)(...I)),
      onMouseleave: m,
      onFocus: w,
      onBlur: m,
      tabindex: e.disabled ? -1 : 0,
      role: "button",
      "aria-disabled": e.disabled,
      "aria-label": e.title
    }, [
      d("div", Ht, [
        e.title && !me(t).title ? (n(), s("div", Gt, O(e.title), 1)) : E("", !0),
        U(f.$slots, "title", {}, void 0, !0),
        U(f.$slots, "default", {}, void 0, !0),
        U(f.$slots, "footer", {}, void 0, !0)
      ]),
      d("div", {
        class: "holo-card-hologram-effect",
        style: K(b.value)
      }, null, 4),
      d("div", {
        class: "holo-card-glow",
        style: K(C.value)
      }, null, 4)
    ], 46, Ft));
  }
}), Yt = /* @__PURE__ */ F(Wt, [["__scopeId", "data-v-fe164a1d"]]), qt = H(Yt), jt = { class: "loader-container" }, Xt = {
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
}, aa = { class: "typing-text" }, la = /* @__PURE__ */ P({
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
    ve((g) => ({
      c40498b2: g.$props.color,
      v7f665050: t
    }));
    const a = e, t = (6 / a.speed).toString() + "s", l = B(() => {
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
    }), i = S(""), o = S(0), u = S(null), h = () => {
      if (!a.text) return;
      o.value = 0, i.value = "";
      const g = () => {
        o.value < a.text.length ? (i.value += a.text[o.value], o.value++) : setTimeout(() => {
          o.value = 0, i.value = "";
        }, 1e3);
      }, m = 100 / a.speed;
      u.value = window.setInterval(g, m);
    };
    return Z(() => a.text, () => {
      u.value && clearInterval(u.value), h();
    }), J(() => {
      h();
    }), re(() => {
      u.value && clearInterval(u.value);
    }), (g, m) => (n(), s("div", {
      class: L(["cp-holo-loader", l.value, { "transparent-bg": e.transparent }])
    }, [
      d("div", jt, [
        d("div", {
          class: L(["holo-projection", `type-${e.type}`])
        }, [
          e.type === "cube" || e.type === "split" ? (n(), s("div", Xt, [...m[0] || (m[0] = [
            Te('<div class="cube" data-v-6df1b911><div class="cube-face front" data-v-6df1b911></div><div class="cube-face back" data-v-6df1b911></div><div class="cube-face right" data-v-6df1b911></div><div class="cube-face left" data-v-6df1b911></div><div class="cube-face top" data-v-6df1b911></div><div class="cube-face bottom" data-v-6df1b911></div></div>', 1)
          ])])) : e.type === "sphere" ? (n(), s("div", Ut, [
            d("div", Qt, [
              (n(), s(Y, null, X(3, (w) => d("div", {
                class: "sphere-ring",
                key: w
              })), 64))
            ])
          ])) : e.type === "datastream" ? (n(), s("div", Zt, [
            (n(), s(Y, null, X(10, (w) => d("div", {
              class: "data-line",
              key: w
            })), 64))
          ])) : e.type === "circuit" ? (n(), s("div", Jt, [
            d("div", ea, [
              (n(), s(Y, null, X(5, (w) => d("div", {
                class: "circuit-path",
                key: w
              })), 64)),
              (n(), s(Y, null, X(6, (w) => d("div", {
                class: "circuit-node",
                key: w + 10
              })), 64))
            ])
          ])) : E("", !0)
        ], 2),
        e.text ? (n(), s("div", ta, [
          d("span", aa, O(i.value), 1),
          m[1] || (m[1] = d("span", { class: "cursor" }, "_", -1))
        ])) : E("", !0),
        m[2] || (m[2] = d("div", { class: "holo-base" }, [
          d("div", { class: "base-glow" })
        ], -1))
      ])
    ], 2));
  }
}), na = /* @__PURE__ */ F(la, [["__scopeId", "data-v-6df1b911"]]), sa = H(na), oa = { class: "header-row" }, ia = { class: "header-text" }, ra = { class: "cell-text" }, ca = {
  key: 0,
  class: "row-scanline"
}, ua = /* @__PURE__ */ P({
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
    const a = e, t = S(null), l = S(!1), i = S(!0), o = S(1), u = S(0), h = S(!1), g = S(0), m = Ve([]);
    a.data.length > 0 && m.splice(0, m.length, ...a.data);
    let w = 0;
    const _ = () => `row-${++w}-${Date.now()}`, v = B(() => a.rowNum * a.rowHeight), b = B(() => v.value), C = B(() => {
      const r = m.length, $ = a.rowNum;
      if (r === 0) return [];
      if (r <= $)
        return m.map((x, V) => ({
          key: x._uniqueKey || _(),
          data: x,
          index: V
        }));
      let c = [...m];
      r > $ && r < 2 * $ && (c = [...c, ...c]), c = c.map((x, V) => ({
        key: x._uniqueKey || _(),
        data: x,
        index: V,
        scroll: V
      }));
      let k = c.slice(u.value);
      return k.push(...c.slice(0, u.value)), k.slice(0, $);
    }), f = (r) => a.columns[r]?.width ? a.columns[r].width : "auto", T = (r) => r === "center" ? "center" : r === "right" ? "flex-end" : "flex-start", I = () => a.theme === "neon" ? "rgba(0, 230, 246, 0.15)" : a.theme === "hologram" ? "rgba(138, 43, 226, 0.2)" : a.theme === "terminal" ? "rgba(0, 255, 0, 0.15)" : a.theme === "matrix" ? "rgba(0, 255, 65, 0.15)" : "rgba(0, 230, 246, 0.15)", A = (r) => (u.value + r) % m.length % 2 === 0 ? "var(--table-row-bg)" : "var(--table-row-hover)", q = (r, $) => {
      const c = $.split(".");
      let k = r;
      for (const y of c)
        k = k?.[y];
      return k ?? "";
    }, Q = async () => {
      if (!(l.value || !i.value)) {
        l.value = !0;
        try {
          if (a.remoteMethod) {
            const r = await a.remoteMethod({
              page: o.value,
              size: a.bufferSize * 10
            });
            if (r.data && r.data.length > 0) {
              const $ = r.data.map((c) => (c._uniqueKey || (c._uniqueKey = _()), c));
              o.value === 1 ? m.splice(0, m.length, ...$) : m.push(...$), a.data && a.data.splice(0, a.data.length, ...m);
            }
            i.value = r.hasMore ?? !1, o.value++;
          } else a.loadMore && await a.loadMore();
        } catch (r) {
          console.error("Failed to load more data:", r), i.value = !1;
        } finally {
          l.value = !1;
        }
      }
    }, p = async () => {
      if (!a.autoScroll || h.value) return;
      const r = m.length, $ = a.rowNum;
      if (r <= $ || (await new Promise((k) => setTimeout(k, a.waitTime)), h.value)) return;
      const c = async () => {
        if (h.value) return;
        const k = g.value, y = a.scrollType === "page" ? $ : 1;
        u.value = (u.value + y) % r;
        const x = a.scrollType === "page" ? 500 : 300;
        await new Promise((V) => setTimeout(V, x)), !(g.value !== k || h.value) && (await new Promise((V) => setTimeout(V, a.waitTime)), !(g.value !== k || h.value) && c());
      };
      c();
    }, z = () => {
      g.value = (g.value + 1) % 999999;
    }, M = () => {
      a.hoverPause && (h.value = !0, z());
    }, N = () => {
      a.hoverPause && (h.value = !1, p());
    };
    return J(() => {
      a.remoteMethod && m.length === 0 && Q(), a.autoScroll && p();
    }), (r, $) => (n(), s("div", {
      class: L(["cyber-infinite-table", [`theme-${e.theme}`, `scroll-${e.scrollType}`]])
    }, [
      d("div", {
        class: "table-header",
        style: K({ backgroundColor: I() })
      }, [
        d("div", oa, [
          (n(!0), s(Y, null, X(e.columns, (c, k) => (n(), s("div", {
            key: c.field || k,
            class: "header-cell",
            style: K({
              width: f(k),
              minWidth: c.minWidth || "100px",
              textAlign: c.align || "left"
            })
          }, [
            d("div", {
              class: "header-content",
              style: K({ justifyContent: T(c.align || "left") })
            }, [
              d("span", ia, O(c.title), 1)
            ], 4)
          ], 4))), 128))
        ])
      ], 4),
      d("div", {
        class: "table-body",
        ref_key: "bodyRef",
        ref: t,
        onMouseenter: M,
        onMouseleave: N
      }, [
        d("div", {
          class: "rows-container",
          style: K({ height: b.value + "px" })
        }, [
          oe(we, { name: "scroll-list" }, {
            default: de(() => [
              (n(!0), s(Y, null, X(C.value, (c) => (n(), s("div", {
                class: "table-row",
                key: c.key,
                style: K({
                  height: e.rowHeight + "px",
                  lineHeight: e.rowHeight + "px",
                  backgroundColor: A(c.index)
                })
              }, [
                (n(!0), s(Y, null, X(e.columns, (k, y) => (n(), s("div", {
                  key: k.field || y,
                  class: "table-cell",
                  style: K({
                    width: f(y),
                    minWidth: k.minWidth || "100px",
                    justifyContent: T(k.align || "left")
                  })
                }, [
                  U(r.$slots, k.field, {
                    row: c.data,
                    column: k
                  }, () => [
                    d("span", ra, O(q(c.data, k.field)), 1)
                  ], !0)
                ], 4))), 128)),
                e.showScanline ? (n(), s("div", ca)) : E("", !0)
              ], 4))), 128))
            ]),
            _: 3
          })
        ], 4)
      ], 544),
      $[0] || ($[0] = d("div", { class: "table-border-effect" }, null, -1))
    ], 2));
  }
}), da = /* @__PURE__ */ F(ua, [["__scopeId", "data-v-a239aba5"]]), fa = H(da), va = /* @__PURE__ */ P({
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
    ie();
    const t = e, l = B(() => {
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
    }), i = B(() => {
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
    return (o, u) => (n(), s("div", {
      class: L(["cp-button-neno", i.value])
    }, [
      d("div", {
        class: L(["button", l.value, t.bg ? "show-bg" : ""])
      }, [
        u[0] || (u[0] = d("div", { class: "border" }, null, -1)),
        u[1] || (u[1] = d("div", { class: "border" }, null, -1)),
        u[2] || (u[2] = d("div", { class: "border" }, null, -1)),
        u[3] || (u[3] = d("div", { class: "border" }, null, -1)),
        U(o.$slots, "default", {}, void 0, !0)
      ], 2)
    ], 2));
  }
}), ha = /* @__PURE__ */ F(va, [["__scopeId", "data-v-5d7945c0"]]), ma = H(ha), pa = ["aria-checked", "aria-disabled"], ga = { class: "toggle-thumb" }, ya = {
  key: 0,
  class: "pulse-effect"
}, ba = /* @__PURE__ */ P({
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
    ve((h) => ({
      v2ad8abbc: t.inActiveColor,
      v247239f2: t.activeColor
    }));
    const t = e, l = a, i = B(() => {
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
    }), o = B(() => {
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
    return (h, g) => (n(), s("div", {
      class: L(["cp-neon-toggle", o.value, i.value, { active: e.modelValue, disabled: e.disabled }]),
      onClick: u,
      "aria-checked": e.modelValue,
      role: "switch",
      "aria-disabled": e.disabled
    }, [
      g[0] || (g[0] = d("div", { class: "toggle-track" }, [
        d("div", { class: "toggle-track-inner" }),
        d("div", { class: "circuit-lines" })
      ], -1)),
      d("div", ga, [
        e.pulseEffect && e.modelValue ? (n(), s("div", ya)) : E("", !0)
      ])
    ], 10, pa));
  }
}), wa = /* @__PURE__ */ F(ba, [["__scopeId", "data-v-799d9482"]]), xa = H(wa), $a = /* @__PURE__ */ P({
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
    ie();
    const t = e, l = B(() => {
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
    }), i = B(() => {
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
    return (o, u) => (n(), s("div", {
      class: L(["cp-button-neno", i.value])
    }, [
      d("div", {
        class: L(["button", l.value, t.bg ? "show-bg" : ""])
      }, [
        U(o.$slots, "default", {}, void 0, !0)
      ], 2)
    ], 2));
  }
}), ka = /* @__PURE__ */ F($a, [["__scopeId", "data-v-d73343d5"]]), Ca = H(ka), _a = ["data-word"], Sa = /* @__PURE__ */ P({
  name: "CyberText",
  __name: "text",
  props: {
    lineColor: {
      type: String,
      default: "#0000"
    }
  },
  setup(e) {
    const a = S(""), t = ie();
    if (t && t.default) {
      let i = t.default();
      a.value = i[0].children;
    }
    const l = e;
    return (i, o) => (n(), s("div", {
      class: "cp-text",
      "data-word": a.value
    }, [
      U(i.$slots, "default", {}, void 0, !0),
      d("div", {
        class: "cp-text-line",
        style: K("background: " + l.lineColor)
      }, null, 4)
    ], 8, _a));
  }
}), Ia = /* @__PURE__ */ F(Sa, [["__scopeId", "data-v-ee14b82a"]]), Ma = H(Ia), Ta = /* @__PURE__ */ P({
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
    const a = e, t = (i, o) => {
      let u = `0px 0px ${i}`;
      for (let h = 1; h <= a.long; h++) {
        const g = l(i, h);
        u += `, ${o === "left" ? "-" : ""}${h}px ${h}px ${g}`;
      }
      return u;
    }, l = (i, o) => {
      const u = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i.exec(i), h = /^rgba?\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})(,\s*([\d.]+))?\)$/i.exec(i);
      if (u) {
        const g = parseInt(u[1], 16), m = parseInt(u[2], 16), w = parseInt(u[3], 16), _ = u[4] ? parseInt(u[4], 16) / 255 : 1, v = Math.max(0, _ - o * 0.05);
        return `rgba(${g}, ${m}, ${w}, ${v})`;
      } else if (h) {
        const g = parseInt(h[1], 10), m = parseInt(h[2], 10), w = parseInt(h[3], 10), _ = h[5] ? parseFloat(h[5]) : 1, v = Math.max(0, _ - o * 0.05);
        return `rgba(${g}, ${m}, ${w}, ${v})`;
      } else
        throw new Error(`Unsupported color format: ${i}`);
    };
    return (i, o) => (n(), s("div", {
      class: L(["shadow-text", a.direction]),
      style: K({ textShadow: t(a.shadowColor, a.direction) })
    }, [
      U(i.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), Va = /* @__PURE__ */ F(Ta, [["__scopeId", "data-v-baec179b"]]), Ea = H(Va), Ba = { class: "cp-typing" }, La = { class: "content" }, za = /* @__PURE__ */ P({
  name: "CyberTyping",
  __name: "typing",
  setup(e) {
    return (a, t) => (n(), s("div", Ba, [
      d("div", La, [
        U(a.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), Na = /* @__PURE__ */ F(za, [["__scopeId", "data-v-c43f79f6"]]), Oa = H(Na), Aa = ["src", "alt", "loading", "crossorigin"], Da = {
  key: 1,
  class: "placeholder"
}, Ra = ["src"], Pa = {
  key: 2,
  class: "error-content"
}, Ka = /* @__PURE__ */ P({
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
      for (const [b, C] of Object.entries(a))
        if (b.includes(v) || v.includes(b.split("/").pop() || ""))
          return C;
      return v;
    }, i = S(!1), o = S(!1), u = S(""), h = B(() => {
      const v = {};
      return t.width !== "auto" && t.width !== void 0 && (v.width = typeof t.width == "number" ? `${t.width}px` : t.width), t.height !== "auto" && t.height !== void 0 && (v.height = typeof t.height == "number" ? `${t.height}px` : t.height), !v.width && !v.height && (v.display = "inline-block"), v;
    }), g = B(() => o.value && t.errorSrc ? `url(${t.errorSrc})` : u.value ? `url(${u.value})` : "none"), m = B(() => {
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
    }), w = () => {
      u.value = l(t.src), i.value = !0, o.value = !1;
    }, _ = () => {
      if (o.value = !0, t.errorSrc && t.errorSrc !== t.src) {
        const v = new Image();
        v.crossOrigin = t.crossorigin || "", v.src = l(t.errorSrc), v.onload = () => {
          u.value = l(t.errorSrc), i.value = !0;
        }, v.onerror = () => {
          i.value = !0;
        };
      } else
        i.value = !0;
    };
    return Z(() => t.src, () => {
      i.value = !1, o.value = !1, u.value = l(t.src);
    }, { immediate: !0 }), J(() => {
      t.src && (u.value = l(t.src));
    }), (v, b) => (n(), s("div", {
      class: "cyber-image-wrapper",
      style: K(h.value)
    }, [
      e.src ? (n(), s("img", {
        key: 0,
        src: e.src,
        alt: e.alt,
        loading: e.loading,
        crossorigin: e.crossorigin,
        class: "hidden-image",
        onLoad: w,
        onError: _
      }, null, 40, Aa)) : E("", !0),
      d("div", {
        class: L(["glitch", {
          "is-loaded": i.value && !o.value,
          "is-loading": !i.value && !o.value,
          "is-error": o.value,
          "no-glitch": e.disableGlitch
        }]),
        style: K({
          backgroundImage: g.value,
          backgroundSize: m.value,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        })
      }, [
        i.value && !o.value && !e.disableGlitch ? (n(), s("div", {
          key: 0,
          class: "glitch-layer",
          style: K({ backgroundImage: g.value })
        }, null, 4)) : E("", !0),
        !i.value && e.placeholder ? (n(), s("div", Da, [
          U(v.$slots, "placeholder", {}, () => [
            d("img", {
              src: e.placeholder,
              alt: "Loading..."
            }, null, 8, Ra)
          ], !0)
        ])) : o.value ? (n(), s("div", Pa, [
          U(v.$slots, "error", {}, () => [
            fe(O(e.errorContent), 1)
          ], !0)
        ])) : E("", !0),
        i.value && !o.value ? U(v.$slots, "default", { key: 3 }, void 0, !0) : E("", !0)
      ], 6)
    ], 4));
  }
}), Fa = /* @__PURE__ */ F(Ka, [["__scopeId", "data-v-c8293d7c"]]), Ha = H(Fa), Ga = { class: "cyber-magic-text" }, Wa = ["data-text"], Ya = /* @__PURE__ */ P({
  name: "CyberMagicText",
  __name: "magicText",
  setup(e) {
    const a = S(""), t = ie();
    if (t && t.default) {
      let l = t.default();
      a.value = l[0].children;
    }
    return (l, i) => (n(), s("div", Ga, [
      d("span", {
        class: "gradient-text",
        "data-text": a.value
      }, [
        U(l.$slots, "default")
      ], 8, Wa)
    ]));
  }
}), qa = H(Ya), ja = { class: "imgWrap" }, Xa = ["src"], Ua = /* @__PURE__ */ P({
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
    ve((h) => ({
      v29922088: t.value + "px"
    }));
    const a = e, t = S(a.imgHeight);
    a.shadow && (t.value = a.imgHeight * 2);
    const l = S(a.imgList.length), i = o(a.imgWidth, 360 / l.value) * 1.6;
    function o(h, g) {
      const m = g * Math.PI / 180;
      return h / (2 * Math.sin(m / 2));
    }
    const u = (h) => {
      const g = 35 + (h + 1) * (360 / l.value), m = o(a.imgWidth, 360 / l.value);
      return {
        transform: `rotateY(${g}deg) translateZ(${m}px)`
      };
    };
    return (h, g) => (n(), s("div", {
      class: "container",
      style: K({
        "--container-width": `${i}px`,
        "--img-width": `${a.imgWidth}px`,
        "--img-height": `${a.imgHeight}px`
      })
    }, [
      d("div", {
        class: L(["stage", { "has-shadow": a.shadow }])
      }, [
        d("div", {
          class: "control",
          style: K({
            "--animation-duration": `${a.animationDuration}s`
          })
        }, [
          d("div", ja, [
            (n(!0), s(Y, null, X(a.imgList, (m, w) => (n(), s("div", {
              key: w,
              class: "img",
              style: K(u(w))
            }, [
              d("img", { src: m }, null, 8, Xa)
            ], 4))), 128))
          ])
        ], 4)
      ], 2)
    ], 4));
  }
}), Qa = /* @__PURE__ */ F(Ua, [["__scopeId", "data-v-3d7f1970"]]), Za = H(Qa), Ja = ["aria-expanded", "aria-disabled"], el = { class: "select-value" }, tl = ["aria-label", "onClick"], al = {
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
}, ol = ["placeholder"], il = {
  key: 1,
  class: "select-options"
}, rl = {
  key: 0,
  class: "select-group-label"
}, cl = ["disabled", "onClick"], ul = {
  key: 0,
  class: "option-check"
}, dl = {
  key: 1,
  class: "option-icon"
}, fl = { class: "option-label" }, vl = {
  key: 2,
  class: "option-shortcut"
}, hl = {
  key: 2,
  class: "select-empty"
}, ml = /* @__PURE__ */ P({
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
    const t = e, l = a, i = S(), o = S(), u = S(!1), h = S(""), g = B(() => t.showCheck !== void 0 ? t.showCheck : t.multiple), m = B(() => {
      const c = [], k = [];
      return t.options.forEach((y, x) => {
        Array.isArray(y.options) ? c.push({
          key: `group-${x}`,
          label: C(y),
          options: y.options
        }) : k.push(y);
      }), k.length && c.unshift({
        key: "default",
        label: "",
        options: k
      }), c;
    }), w = B(() => m.value.flatMap((c) => c.options)), _ = B(() => {
      const c = h.value.trim().toLowerCase();
      return c ? m.value.map((k) => ({
        ...k,
        options: k.options.filter((y) => C(y).toLowerCase().includes(c))
      })).filter((k) => k.options.length) : m.value;
    }), v = B(() => {
      const c = t.multiple ? Array.isArray(t.modelValue) ? t.modelValue : [] : Array.isArray(t.modelValue) ? [] : [t.modelValue ?? null];
      return w.value.filter((k) => c.some((y) => T(y, f(k))));
    }), b = B(() => t.multiple ? Array.isArray(t.modelValue) && t.modelValue.length > 0 : t.modelValue !== "" && t.modelValue !== null && t.modelValue !== void 0), C = (c) => {
      const k = c[t.labelKey] ?? c.label ?? c[t.valueKey] ?? c.value ?? "";
      return String(k);
    }, f = (c) => c[t.valueKey] ?? c.value ?? null, T = (c, k) => c === k, I = (c) => {
      const k = f(c);
      return t.multiple ? (Array.isArray(t.modelValue) ? t.modelValue : []).some((x) => T(x, k)) : T(t.modelValue, k);
    }, A = (c) => {
      t.disabled || u.value === c || (u.value = c, l("visible-change", c), c && t.filterable && pe(() => o.value?.focus()));
    }, q = () => {
      A(!u.value);
    }, Q = (c) => {
      if (t.disabled || c.disabled) return;
      const k = f(c);
      if (t.multiple) {
        const y = Array.isArray(t.modelValue) ? [...t.modelValue] : [], x = y.findIndex((D) => T(D, k));
        x > -1 ? y.splice(x, 1) : y.push(k);
        const V = w.value.filter((D) => y.some((G) => T(G, f(D))));
        l("update:modelValue", y), l("change", y, V);
        return;
      }
      l("update:modelValue", k), l("change", k, c), A(!1);
    }, p = (c) => {
      if (!t.multiple || t.disabled) return;
      const k = f(c), x = (Array.isArray(t.modelValue) ? [...t.modelValue] : []).filter((D) => !T(D, k)), V = w.value.filter((D) => x.some((G) => T(G, f(D))));
      l("update:modelValue", x), l("change", x, V);
    }, z = () => {
      const c = t.multiple ? [] : "";
      l("update:modelValue", c), l("change", c, t.multiple ? [] : void 0), l("clear"), h.value = "";
    }, M = (c) => {
      t.disabled || l("focus", c);
    }, N = (c) => {
      l("blur", c);
    }, r = (c) => {
      t.disabled || ((c.key === "Enter" || c.key === " ") && (u.value || (c.preventDefault(), A(!0))), c.key === "Escape" && A(!1));
    }, $ = (c) => {
      i.value?.contains(c.target) || A(!1);
    };
    return Z(u, (c) => {
      c || (h.value = "");
    }), Z(() => t.multiple, (c) => {
      c && !Array.isArray(t.modelValue) && l("update:modelValue", []);
    }), J(() => {
      document.addEventListener("click", $);
    }), $e(() => {
      document.removeEventListener("click", $);
    }), (c, k) => (n(), s("div", {
      ref_key: "selectRef",
      ref: i,
      class: L(["cp-cyber-select", [
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
        onClick: q,
        onFocus: M,
        onBlur: N,
        onKeydown: r
      }, [
        d("div", el, [
          e.multiple && v.value.length ? (n(!0), s(Y, { key: 0 }, X(v.value, (y) => (n(), s("span", {
            key: String(f(y)),
            class: "select-tag",
            onClick: k[0] || (k[0] = te(() => {
            }, ["stop"]))
          }, [
            fe(O(C(y)) + " ", 1),
            d("button", {
              class: "tag-close",
              type: "button",
              "aria-label": `Remove ${C(y)}`,
              onClick: te((x) => p(y), ["stop"])
            }, null, 8, tl)
          ]))), 128)) : !e.multiple && v.value.length ? (n(), s("span", al, O(C(v.value[0])), 1)) : (n(), s("span", ll, O(e.placeholder), 1))
        ]),
        e.clearable && b.value && !e.disabled ? (n(), s("button", {
          key: 0,
          class: "clear-button",
          type: "button",
          "aria-label": "Clear selected value",
          onClick: te(z, ["stop"])
        })) : E("", !0),
        k[3] || (k[3] = d("span", { class: "select-arrow" }, null, -1))
      ], 40, Ja),
      oe(ye, { name: "select-dropdown" }, {
        default: de(() => [
          u.value ? (n(), s("div", nl, [
            e.filterable ? (n(), s("div", sl, [
              ge(d("input", {
                ref_key: "searchInputRef",
                ref: o,
                "onUpdate:modelValue": k[1] || (k[1] = (y) => h.value = y),
                type: "text",
                placeholder: e.searchPlaceholder,
                onClick: k[2] || (k[2] = te(() => {
                }, ["stop"])),
                onKeydown: r
              }, null, 40, ol), [
                [Ee, h.value]
              ])
            ])) : E("", !0),
            _.value.length ? (n(), s("div", il, [
              (n(!0), s(Y, null, X(_.value, (y) => (n(), s(Y, {
                key: y.key
              }, [
                y.label ? (n(), s("div", rl, O(y.label), 1)) : E("", !0),
                (n(!0), s(Y, null, X(y.options, (x) => (n(), s(Y, null, [
                  x.divider ? (n(), s("div", {
                    class: "select-divider",
                    key: `divider-${x.key || Math.random()}`
                  })) : (n(), s("button", {
                    key: `${y.key}-${String(f(x))}`,
                    class: L(["select-option", {
                      selected: I(x),
                      disabled: x.disabled
                    }]),
                    type: "button",
                    disabled: x.disabled,
                    onClick: te((V) => Q(x), ["stop"])
                  }, [
                    g.value ? (n(), s("span", ul)) : E("", !0),
                    x.icon ? (n(), s("span", dl, [
                      (n(), ue(Be(x.icon)))
                    ])) : E("", !0),
                    d("span", fl, O(C(x)), 1),
                    x.shortcut ? (n(), s("span", vl, O(x.shortcut), 1)) : E("", !0)
                  ], 10, cl))
                ], 64))), 256))
              ], 64))), 128))
            ])) : (n(), s("div", hl, O(e.noDataText), 1))
          ])) : E("", !0)
        ]),
        _: 1
      })
    ], 2));
  }
}), pl = /* @__PURE__ */ F(ml, [["__scopeId", "data-v-d196aecd"]]), gl = H(pl), yl = { class: "cascader-tree" }, bl = ["disabled", "onClick"], wl = {
  key: 0,
  class: "option-check"
}, xl = { class: "option-label" }, $l = {
  key: 1,
  class: "option-arrow"
}, kl = {
  key: 0,
  class: "cascader-submenu"
}, Cl = {
  key: 0,
  class: "cascader-empty"
}, _l = P({
  name: "CascaderOptionTree"
}), Sl = /* @__PURE__ */ P({
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
    const t = e, l = a, i = S(/* @__PURE__ */ new Set()), o = (v) => String(v[t.labelKey] ?? v.label ?? v[t.valueKey] ?? v.value ?? ""), u = (v) => v[t.valueKey] ?? v.value ?? "", h = (v) => {
      const b = v[t.childrenKey] ?? v.children;
      return Array.isArray(b) && b.length > 0;
    }, g = (v) => v[t.childrenKey] ?? v.children ?? [], m = (v) => {
      const b = u(v);
      return t.selectedValues.includes(b);
    }, w = (v) => {
      const b = u(v);
      return i.value.has(b);
    }, _ = (v) => {
      if (v.disabled) return;
      const b = u(v);
      if (h(v)) {
        const C = new Set(i.value);
        C.has(b) ? C.delete(b) : C.add(b), i.value = C;
      } else
        l("select", { option: v, value: b });
    };
    return (v, b) => {
      const C = ke("CascaderOptionTree");
      return n(), s("div", yl, [
        (n(!0), s(Y, null, X(e.options, (f) => (n(), s("div", {
          key: String(u(f)),
          class: "cascader-menu-item"
        }, [
          d("button", {
            class: L(["cascader-option", {
              selected: m(f),
              disabled: f.disabled,
              "has-children": h(f),
              "is-expanded": w(f)
            }]),
            type: "button",
            disabled: f.disabled,
            onClick: te((T) => _(f), ["stop"])
          }, [
            e.multiple ? (n(), s("span", wl)) : E("", !0),
            d("span", xl, O(o(f)), 1),
            h(f) ? (n(), s("span", $l)) : E("", !0)
          ], 10, bl),
          h(f) && w(f) ? (n(), s("div", kl, [
            oe(C, {
              options: g(f),
              "selected-values": e.selectedValues,
              multiple: e.multiple,
              "label-key": e.labelKey,
              "value-key": e.valueKey,
              "children-key": e.childrenKey,
              onSelect: b[0] || (b[0] = (T) => v.$emit("select", T))
            }, null, 8, ["options", "selected-values", "multiple", "label-key", "value-key", "children-key"])
          ])) : E("", !0)
        ]))), 128)),
        !e.options || e.options.length === 0 ? (n(), s("div", Cl, " 暂无数据 ")) : E("", !0)
      ]);
    };
  }
}), Il = /* @__PURE__ */ F(Sl, [["__scopeId", "data-v-6616b296"]]), Ml = ["aria-expanded", "aria-disabled"], Tl = { class: "cascader-value" }, Vl = ["aria-label", "onClick"], El = {
  key: 1,
  class: "cascader-single"
}, Bl = {
  key: 2,
  class: "cascader-placeholder"
}, Ll = { class: "cascader-options" }, zl = /* @__PURE__ */ P({
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
    const t = e, l = a, i = S(), o = S(!1), u = S(""), h = S([]), g = B(() => t.multiple ? Array.isArray(t.modelValue) && t.modelValue.length > 0 : t.modelValue !== "" && t.modelValue !== null && t.modelValue !== void 0), m = (r) => {
      if (!t.showAllLevels) {
        const c = w(t.options, r);
        return c ? v(c) : String(r);
      }
      return _(t.options, r).map((c) => v(c)).join(" / ");
    }, w = (r, $) => {
      for (const c of r) {
        if (b(c) === $)
          return c;
        const k = C(c);
        if (k.length) {
          const y = w(k, $);
          if (y) return y;
        }
      }
      return null;
    }, _ = (r, $) => {
      for (const c of r) {
        if (b(c) === $)
          return [c];
        const k = C(c);
        if (k.length) {
          const y = _(k, $);
          if (y.length)
            return [c, ...y];
        }
      }
      return [];
    }, v = (r) => String(r[t.labelKey] ?? r.label ?? r[t.valueKey] ?? r.value ?? ""), b = (r) => r[t.valueKey] ?? r.value ?? "", C = (r) => r[t.childrenKey] ?? r.children ?? [], f = (r) => {
      t.disabled || o.value === r || (o.value = r, l("visible-change", r));
    }, T = () => {
      f(!o.value);
    }, I = ({ value: r }) => {
      if (!t.disabled)
        if (t.multiple) {
          const $ = h.value.indexOf(r);
          $ > -1 ? h.value.splice($, 1) : h.value.push(r), l("update:modelValue", [...h.value]), l("change", [...h.value]);
        } else
          u.value = r, l("update:modelValue", r), l("change", r), f(!1);
    }, A = (r) => {
      t.multiple && (h.value = h.value.filter(($) => $ !== r), l("update:modelValue", [...h.value]), l("change", [...h.value]));
    }, q = () => {
      t.multiple ? (h.value = [], l("update:modelValue", [])) : (u.value = "", l("update:modelValue", "")), l("change", t.multiple ? [] : ""), l("clear");
    }, Q = (r) => {
      t.disabled || l("focus", r);
    }, p = (r) => {
      l("blur", r);
    }, z = (r) => {
      t.disabled || ((r.key === "Enter" || r.key === " ") && (o.value || (r.preventDefault(), f(!0))), r.key === "Escape" && f(!1));
    }, M = (r) => {
      i.value?.contains(r.target) || f(!1);
    }, N = B(() => ({
      width: `${i.value?.offsetWidth || 260}px`
    }));
    return Z(() => t.modelValue, (r) => {
      t.multiple ? h.value = Array.isArray(r) ? [...r] : [] : u.value = r;
    }, { immediate: !0 }), J(() => {
      document.addEventListener("click", M);
    }), $e(() => {
      document.removeEventListener("click", M);
    }), (r, $) => (n(), s("div", {
      ref_key: "cascaderRef",
      ref: i,
      class: L(["cp-cyber-cascader", [
        `theme-${e.theme}`,
        `size-${e.size}`,
        {
          "is-open": o.value,
          "is-disabled": e.disabled,
          "is-multiple": e.multiple
        }
      ]])
    }, [
      d("div", {
        class: "cascader-control",
        tabindex: "0",
        role: "combobox",
        "aria-expanded": o.value,
        "aria-disabled": e.disabled,
        onClick: T,
        onFocus: Q,
        onBlur: p,
        onKeydown: z
      }, [
        d("div", Tl, [
          e.multiple && h.value.length ? (n(!0), s(Y, { key: 0 }, X(h.value, (c, k) => (n(), s("span", {
            key: k,
            class: "cascader-tag"
          }, [
            fe(O(m(c)) + " ", 1),
            d("button", {
              class: "tag-close",
              type: "button",
              "aria-label": `移除 ${m(c)}`,
              onClick: te((y) => A(c), ["stop"])
            }, null, 8, Vl)
          ]))), 128)) : !e.multiple && u.value ? (n(), s("span", El, O(m(u.value)), 1)) : (n(), s("span", Bl, O(e.placeholder), 1))
        ]),
        e.clearable && g.value && !e.disabled ? (n(), s("button", {
          key: 0,
          class: "clear-button",
          type: "button",
          "aria-label": "清空",
          onClick: te(q, ["stop"])
        })) : E("", !0),
        $[0] || ($[0] = d("span", { class: "cascader-arrow" }, null, -1))
      ], 40, Ml),
      oe(ye, { name: "cascader-dropdown" }, {
        default: de(() => [
          o.value ? (n(), s("div", {
            key: 0,
            class: "cascader-dropdown",
            style: K(N.value)
          }, [
            d("div", Ll, [
              oe(Il, {
                options: t.options,
                "selected-values": e.multiple ? h.value : [u.value],
                multiple: e.multiple,
                "label-key": e.labelKey,
                "value-key": e.valueKey,
                "children-key": e.childrenKey,
                onSelect: I
              }, null, 8, ["options", "selected-values", "multiple", "label-key", "value-key", "children-key"])
            ])
          ], 4)) : E("", !0)
        ]),
        _: 1
      })
    ], 2));
  }
}), Nl = /* @__PURE__ */ F(zl, [["__scopeId", "data-v-fade87c5"]]), Ol = H(Nl), Al = {
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
}, ce = 14, ql = /* @__PURE__ */ P({
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
    const l = e, i = t, o = S([]), u = S([]), h = S(0), g = B(() => {
      const p = [], z = (M, N = 0, r) => {
        M.forEach(($, c) => {
          $._level = N, $._parent = r, $._expanded = $.expanded ?? (l.defaultExpandAll || N === 0), $._selected = $.selected ?? !1, $._isLastChild = c === M.length - 1, p.push($), $._expanded && $.children && $.children.length > 0 && z($.children, N + 1, $);
        });
      };
      return z(o.value), p;
    }), m = () => {
      const p = (z, M = 0) => {
        const N = {
          ...z,
          _expanded: z.expanded ?? (l.defaultExpandAll || M === 0),
          _selected: z.selected ?? !1,
          _level: M,
          _parent: void 0,
          _isLastChild: !1
        };
        return z.children && z.children.length > 0 && (N.children = z.children.map((r) => p(r, M + 1))), N;
      };
      o.value = l.data.map((z) => p(z)), u.value = g.value.filter((z) => z._selected);
    }, w = (p) => !p.children || p.children.length === 0, _ = (p) => p._level ?? 0, v = (p) => _(p) * l.indent, b = (p) => {
      const z = _(p);
      return Array.from({ length: Math.max(z - 1, 0) }, (M, N) => N);
    }, C = (p, z) => {
      let M = p, N = _(p);
      for (; M && N > z; )
        M = M._parent, N--;
      return M?._isLastChild ?? !1;
    }, f = (p) => {
      p._expanded = !p._expanded, p.expanded = p._expanded, p._expanded ? i("node-expand", p) : i("node-collapse", p), Q();
    }, T = (p) => {
      l.multiple ? (p._selected = !p._selected, p.selected = p._selected) : p._selected ? (p._selected = !1, p.selected = !1) : (u.value.forEach((z) => {
        z._selected = !1, z.selected = !1;
      }), p._selected = !0, p.selected = !0), I(), i("select-change", u.value), i("node-click", p), l.expandOnClick && !w(p) && f(p);
    }, I = () => {
      u.value = g.value.filter((p) => p._selected);
    }, A = (p) => p.icon ? p.icon : w(p) ? "icon-file" : p._expanded ? "icon-folder-open" : "icon-folder", q = (p) => p ? {
      online: "Online",
      offline: "Offline",
      warning: "Warning",
      error: "Error"
    }[p] : "", Q = () => {
      h.value++;
    };
    return Z(() => l.data, () => {
      m();
    }, { deep: !0, immediate: !0 }), a({
      getSelectedNodes: () => u.value,
      clearSelection: () => {
        u.value.forEach((p) => {
          p._selected = !1, p.selected = !1;
        }), u.value = [], Q();
      }
    }), (p, z) => (n(), s("div", {
      class: L(["cp-cyber-tree cyber-tree", [`theme-${e.theme}`, `effect-${e.effect}`]])
    }, [
      (n(!0), s(Y, null, X(g.value, (M) => (n(), s("div", {
        key: `${M.id}-${M._expanded}-${M._selected}-${h.value}`,
        class: L(["tree-node", {
          expanded: M._expanded,
          leaf: w(M),
          "last-child": M._isLastChild
        }]),
        style: K({ paddingLeft: `${v(M)}px` })
      }, [
        e.showConnectors && _(M) > 0 ? (n(), s("div", Al, [
          (n(!0), s(Y, null, X(b(M), (N) => (n(), s("span", {
            key: N,
            class: L(["ancestor-line", { hidden: C(M, N) }]),
            style: K({ left: `${N * e.indent + ce}px` })
          }, null, 6))), 128)),
          d("span", {
            class: L(["parent-line", { "is-last": M._isLastChild }]),
            style: K({ left: `${(_(M) - 1) * e.indent + ce}px` })
          }, null, 6),
          d("span", {
            class: "horizontal-line",
            style: K({
              left: `${(_(M) - 1) * e.indent + ce}px`,
              width: `${e.indent - ce + 20}px`
            })
          }, null, 4),
          d("span", {
            class: "connector-joint",
            style: K({ left: `${(_(M) - 1) * e.indent + ce}px` })
          }, null, 4)
        ])) : E("", !0),
        d("div", {
          class: "node-content-wrapper",
          onClick: te((N) => T(M), ["stop"])
        }, [
          d("div", {
            class: L(["node-content", { selected: M._selected }])
          }, [
            w(M) ? (n(), s("span", Pl)) : (n(), s("button", {
              key: 0,
              class: "node-expand-icon",
              type: "button",
              "aria-expanded": M._expanded,
              "aria-label": M._expanded ? "Collapse node" : "Expand node",
              onClick: te((N) => f(M), ["stop"])
            }, [
              d("span", {
                class: L(["expand-arrow", { rotated: M._expanded }])
              }, null, 2)
            ], 8, Rl)),
            d("span", {
              class: L(["node-icon", A(M)])
            }, [...z[0] || (z[0] = [
              d("span", { class: "icon-core" }, null, -1)
            ])], 2),
            d("span", Kl, [
              d("span", Fl, O(M.label), 1)
            ]),
            e.showStatus && M.status ? (n(), s("span", {
              key: 2,
              class: "node-status",
              title: q(M.status)
            }, [
              d("span", {
                class: L(["status-indicator", `status-${M.status}`])
              }, null, 2),
              d("span", Gl, O(M.status), 1)
            ], 8, Hl)) : E("", !0)
          ], 2)
        ], 8, Dl)
      ], 6))), 128)),
      g.value.length === 0 ? (n(), s("div", Wl, " No data ")) : E("", !0),
      e.showScanline && e.effect !== "static" ? (n(), s("div", Yl)) : E("", !0)
    ], 2));
  }
}), jl = /* @__PURE__ */ F(ql, [["__scopeId", "data-v-f9876722"]]), Xl = H(jl), Ul = {
  key: 0,
  class: "cp-divider__line cp-divider__line--left"
}, Ql = {
  key: 1,
  class: "cp-divider__content"
}, Zl = {
  key: 2,
  class: "cp-divider__line cp-divider__line--right"
}, Jl = /* @__PURE__ */ P({
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
    const a = e, t = B(() => {
      const l = {};
      return a.size && (a.direction === "horizontal" ? l.width = a.size : l.height = a.size), l;
    });
    return (l, i) => (n(), s("div", {
      class: L(["cp-divider", [`cp-divider--${e.direction}`, `cp-divider--${e.type}`]]),
      style: K(t.value)
    }, [
      e.showLeftLine ? (n(), s("div", Ul)) : E("", !0),
      l.$slots.default || e.content ? (n(), s("div", Ql, [
        U(l.$slots, "default", {}, () => [
          fe(O(e.content), 1)
        ], !0)
      ])) : E("", !0),
      e.showRightLine ? (n(), s("div", Zl)) : E("", !0)
    ], 6));
  }
}), en = /* @__PURE__ */ F(Jl, [["__scopeId", "data-v-e3e2783b"]]), tn = H(en), an = { class: "input-wrapper" }, ln = ["type", "value", "placeholder", "disabled", "readonly", "maxlength", "autocomplete"], nn = {
  key: 0,
  class: "input-glitch"
}, sn = {
  key: 1,
  class: "input-scanline"
}, on = /* @__PURE__ */ P({
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
    const l = e, i = t, o = S(null), u = B(() => {
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
    }), h = B(() => {
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
    }), g = (b) => {
      const C = b.target;
      i("update:modelValue", C.value), i("input", C.value);
    }, m = (b) => {
      i("focus", b);
    }, w = (b) => {
      i("blur", b);
    }, _ = (b) => {
      i("keyup", b);
    }, v = (b) => {
      i("keydown", b);
    };
    return a({
      focus: () => {
        o.value?.focus();
      },
      blur: () => {
        o.value?.blur();
      },
      select: () => {
        o.value?.select();
      }
    }), (b, C) => (n(), s("div", {
      class: L(["cp-input", u.value, h.value])
    }, [
      d("div", an, [
        d("input", {
          ref_key: "inputRef",
          ref: o,
          type: e.type,
          value: e.modelValue,
          placeholder: e.placeholder,
          disabled: e.disabled,
          readonly: e.readonly,
          maxlength: e.maxlength,
          autocomplete: e.autocomplete,
          onInput: g,
          onFocus: m,
          onBlur: w,
          onKeyup: _,
          onKeydown: v,
          class: "cyber-input"
        }, null, 40, ln),
        C[0] || (C[0] = d("div", { class: "input-border" }, null, -1)),
        e.glitchEffect ? (n(), s("div", nn)) : E("", !0),
        e.scanlineEffect ? (n(), s("div", sn)) : E("", !0)
      ])
    ], 2));
  }
}), rn = /* @__PURE__ */ F(on, [["__scopeId", "data-v-a6c7ea98"]]), cn = H(rn), un = ["tabindex", "aria-disabled", "aria-expanded"], dn = {
  key: 0,
  class: "menu-icon"
}, fn = { class: "menu-label" }, vn = {
  key: 1,
  class: "menu-arrow"
}, hn = /* @__PURE__ */ P({
  name: "CyberMenuItem",
  __name: "menu-item",
  props: {
    item: {},
    depth: {},
    direction: {},
    activeValue: {},
    expandedValues: {}
  },
  emits: ["select", "toggle-expand"],
  setup(e, { emit: a }) {
    const t = e, l = a, i = S(!1), o = B(() => t.item.children && t.item.children.length > 0), u = B(() => t.activeValue === t.item.value), h = B(() => t.expandedValues.includes(t.item.value)), g = (_) => {
      t.item.disabled || (_.stopPropagation(), o.value ? l("toggle-expand", t.item.value) : l("select", t.item));
    }, m = () => {
      t.item.disabled || (i.value = !0, t.direction === "horizontal" && o.value && l("toggle-expand", t.item.value));
    }, w = () => {
      i.value = !1, t.direction === "horizontal" && o.value && setTimeout(() => {
        i.value || l("toggle-expand", t.item.value);
      }, 200);
    };
    return (_, v) => {
      const b = ke("CyberMenuItem");
      return n(), s("li", {
        class: L([
          "menu-item",
          `depth-${e.depth}`,
          {
            "is-active": u.value,
            "is-disabled": e.item.disabled,
            "has-children": o.value,
            "is-expanded": h.value,
            "is-horizontal": e.direction === "horizontal",
            "is-vertical": e.direction === "vertical"
          }
        ])
      }, [
        d("div", {
          class: "menu-item-content",
          onClick: g,
          onMouseenter: m,
          onMouseleave: w,
          tabindex: e.item.disabled ? -1 : 0,
          "aria-disabled": e.item.disabled,
          "aria-expanded": o.value ? h.value : void 0
        }, [
          e.item.icon ? (n(), s("span", dn, [
            d("i", {
              class: L(e.item.icon)
            }, null, 2)
          ])) : E("", !0),
          d("span", fn, O(e.item.label), 1),
          o.value ? (n(), s("span", vn, [...v[2] || (v[2] = [
            d("i", { class: "arrow-icon" }, null, -1)
          ])])) : E("", !0)
        ], 40, un),
        oe(ye, { name: "submenu-fade" }, {
          default: de(() => [
            o.value && h.value ? (n(), s("ul", {
              key: 0,
              class: L(["submenu-list", `submenu-depth-${e.depth + 1}`])
            }, [
              (n(!0), s(Y, null, X(e.item.children, (C) => (n(), ue(b, {
                key: C.value,
                item: C,
                depth: e.depth + 1,
                direction: e.direction,
                "active-value": e.activeValue,
                "expanded-values": e.expandedValues,
                onSelect: v[0] || (v[0] = (f) => _.$emit("select", f)),
                onToggleExpand: v[1] || (v[1] = (f) => _.$emit("toggle-expand", f))
              }, null, 8, ["item", "depth", "direction", "active-value", "expanded-values"]))), 128))
            ], 2)) : E("", !0)
          ]),
          _: 1
        })
      ], 2);
    };
  }
}), mn = /* @__PURE__ */ F(hn, [["__scopeId", "data-v-2cc7f5c1"]]), pn = { class: "menu-list" }, gn = /* @__PURE__ */ P({
  name: "CyberMenu",
  __name: "menu",
  props: {
    modelValue: { default: "" },
    items: { default: () => [] },
    direction: { default: "vertical" },
    theme: { default: "neon" },
    expandedValues: { default: () => [] }
  },
  emits: ["update:modelValue", "change", "select", "update:expandedValues"],
  setup(e, { emit: a }) {
    ve((w) => ({
      v68fa44d4: m.value.primary,
      v070c5a33: m.value.bg,
      v36ce8c8e: m.value.hover,
      d331b418: m.value.active,
      v7566cf9b: m.value.text,
      v3717b4bd: m.value.muted
    }));
    const t = e, l = a, i = S(t.modelValue), o = S([...t.expandedValues]), u = S([...t.items]), h = (w) => {
      i.value = w.value, l("update:modelValue", w.value), l("change", w.value), l("select", w);
    }, g = (w) => {
      const _ = [...o.value], v = _.indexOf(w);
      v > -1 ? _.splice(v, 1) : (t.direction === "horizontal" && (_.length = 0), _.push(w)), o.value = _, l("update:expandedValues", _);
    };
    Z(() => t.modelValue, (w) => i.value = w, { immediate: !0 }), Z(() => t.items, (w) => u.value = [...w], { deep: !0, immediate: !0 }), Z(() => t.expandedValues, (w) => o.value = [...w], { deep: !0, immediate: !0 });
    const m = B(() => ({
      neon: { primary: "#00e6f6", bg: "rgba(8,16,28,0.95)", hover: "rgba(0,230,246,0.15)", active: "rgba(0,230,246,0.25)", text: "#fff", muted: "#aaa" },
      terminal: { primary: "#47f26b", bg: "#0a140a", hover: "rgba(71,242,107,0.15)", active: "rgba(71,242,107,0.25)", text: "#fff", muted: "#aaa" },
      matrix: { primary: "#00ff41", bg: "#000000", hover: "rgba(0,255,65,0.15)", active: "rgba(0,255,65,0.25)", text: "#00ff41", muted: "#00aa2a" },
      hologram: { primary: "#ff00ff", bg: "rgba(10,0,20,0.9)", hover: "rgba(255,0,255,0.15)", active: "rgba(255,0,255,0.25)", text: "#ffffff", muted: "#cccccc" }
    })[t.theme]);
    return (w, _) => (n(), s("div", {
      class: L([
        "cp-cyber-menu",
        `direction-${e.direction}`,
        `theme-${e.theme}`
      ])
    }, [
      d("ul", pn, [
        (n(!0), s(Y, null, X(u.value, (v) => (n(), ue(mn, {
          key: v.value,
          item: v,
          depth: 0,
          direction: e.direction,
          "active-value": i.value,
          "expanded-values": o.value,
          onSelect: h,
          onToggleExpand: g
        }, null, 8, ["item", "direction", "active-value", "expanded-values"]))), 128))
      ])
    ], 2));
  }
}), yn = /* @__PURE__ */ F(gn, [["__scopeId", "data-v-969b6d78"]]), bn = H(yn), wn = [
  De,
  Xe,
  et,
  ct,
  wt,
  Et,
  At,
  qt,
  sa,
  fa,
  xa,
  ma,
  Ca,
  Ma,
  Ea,
  Kt,
  Oa,
  _t,
  Ha,
  qa,
  gl,
  Ol,
  Xl,
  Za,
  tn,
  cn,
  bn
], xn = Le([...wn]);
console.log(
  "%c %s",
  "border: 1px solid #97E3FE;border-radius: 3px;padding: 2px 5px;color: white;font-weight:bolder;background: linear-gradient(to right, #fF717F,#CC54D1,#4EAFFA,#3DE1C3, #F7DA66)",
  "CyberPunk-UI"
);
const Cn = xn.install;
export {
  xn as default,
  Cn as install,
  Le as makeInstaller
};
