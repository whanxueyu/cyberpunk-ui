import { defineComponent as P, useSlots as ie, computed as L, openBlock as n, createElementBlock as s, normalizeClass as B, createElementVNode as d, unref as he, renderSlot as U, toDisplayString as z, ref as S, onUnmounted as re, createBlock as ue, Teleport as be, createVNode as oe, TransitionGroup as we, withCtx as de, Fragment as Y, renderList as X, createCommentVNode as V, normalizeStyle as K, watch as Z, nextTick as me, onMounted as J, withDirectives as ge, createTextVNode as fe, vShow as $e, watchEffect as Ie, useCssVars as pe, getCurrentInstance as Me, createStaticVNode as Te, reactive as Ve, onBeforeUnmount as xe, withModifiers as te, Transition as ye, vModelText as Ee, resolveDynamicComponent as Be, resolveComponent as ke } from "vue";
const Le = (e = []) => ({
  install: (t) => {
    e.forEach((l) => t.use(l));
  }
}), G = (e, a) => (e.install = (t) => {
  for (const l of [e, ...Object.values({})])
    t.component(l.name, l);
}, e), Ne = ["data-content"], Oe = { key: 1 }, ze = /* @__PURE__ */ P({
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
    const t = ie(), l = e, i = L(() => {
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
    }), o = L(() => {
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
    return (r, v) => (n(), s("div", {
      class: B(["cp-button", o.value])
    }, [
      d("div", {
        class: B(["button", i.value]),
        "data-content": l.content
      }, [
        he(t) ? U(r.$slots, "default", { key: 0 }, void 0, !0) : (n(), s("span", Oe, z(l.content), 1))
      ], 10, Ne)
    ], 2));
  }
}), F = (e, a) => {
  const t = e.__vccOpts || e;
  for (const [l, i] of a)
    t[l] = i;
  return t;
}, Ae = /* @__PURE__ */ F(ze, [["__scopeId", "data-v-6fea0e49"]]), De = G(Ae), Re = { class: "notification-content" }, Pe = {
  key: 0,
  class: "notification-icon"
}, Ke = { class: "notification-body" }, Fe = {
  key: 0,
  class: "notification-title"
}, Ge = { class: "notification-message" }, He = {
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
    const l = e, i = t, o = S([]), r = S(!1);
    let v = 0;
    const p = (g) => {
      const _ = ++v, f = g.actions && g.actions.length > 0, T = {
        id: _,
        title: g.title || "",
        message: g.message,
        type: g.type || "info",
        duration: g.duration !== void 0 ? g.duration : f ? 0 : l.duration,
        showClose: g.showClose !== void 0 ? g.showClose : !0,
        showIcon: g.showIcon !== void 0 ? g.showIcon : !0,
        actions: g.actions || [],
        effect: g.effect || l.effect,
        onClose: g.onClose || (() => {
        })
      };
      if (o.value.push(T), r.value = !0, T.duration > 0 && setTimeout(() => {
        b(_);
      }, T.duration), o.value.length > l.maxCount) {
        const I = o.value[0];
        b(I.id);
      }
      return _;
    }, b = (g) => {
      const _ = o.value.findIndex((f) => f.id === g);
      if (_ !== -1) {
        const f = o.value[_];
        f.onClose && f.onClose(), o.value.splice(_, 1), i("close", g);
      }
    }, C = (g, _) => {
      _.callback && _.callback(), b(g.id);
    }, x = () => {
      o.value.length === 0 && (r.value = !1);
    }, h = () => {
      o.value.forEach((g) => {
        g.onClose && g.onClose();
      }), o.value = [], r.value = !1;
    };
    return a({
      // 创建不同类型的通知
      info: (g) => p({ ...g, type: "info" }),
      success: (g) => p({ ...g, type: "success" }),
      warning: (g) => p({ ...g, type: "warning" }),
      error: (g) => p({ ...g, type: "error" }),
      // 通用创建方法
      create: p,
      // 关闭方法
      close: b,
      // 清除所有
      clearAll: h
    }), re(() => {
      h();
    }), (g, _) => (n(), ue(be, { to: "body" }, [
      r.value ? (n(), s("div", {
        key: 0,
        class: B(["cp-cyber-notification-container", `position-${e.position}`])
      }, [
        oe(we, {
          name: "notification",
          tag: "div",
          onAfterLeave: x
        }, {
          default: de(() => [
            (n(!0), s(Y, null, X(o.value, (f) => (n(), s("div", {
              key: f.id,
              class: B(["cp-cyber-notification", `type-${f.type}`, `effect-${f.effect}`])
            }, [
              d("div", Re, [
                f.showIcon ? (n(), s("div", Pe, [..._[0] || (_[0] = [
                  d("div", { class: "icon-circle" }, null, -1),
                  d("div", { class: "icon-symbol" }, null, -1)
                ])])) : V("", !0),
                d("div", Ke, [
                  f.title ? (n(), s("div", Fe, z(f.title), 1)) : V("", !0),
                  d("div", Ge, z(f.message), 1),
                  f.actions && f.actions.length ? (n(), s("div", He, [
                    (n(!0), s(Y, null, X(f.actions, (T, I) => (n(), s("button", {
                      key: I,
                      class: "action-button",
                      onClick: (A) => C(f, T)
                    }, z(T.text), 9, We))), 128))
                  ])) : V("", !0)
                ]),
                f.showClose ? (n(), s("div", {
                  key: 1,
                  class: "notification-close",
                  onClick: (T) => b(f.id)
                }, [..._[1] || (_[1] = [
                  d("span", { class: "close-icon" }, "×", -1)
                ])], 8, Ye)) : V("", !0)
              ]),
              f.duration > 0 ? (n(), s("div", {
                key: 0,
                class: "notification-progress",
                style: K({ animationDuration: `${f.duration}ms` })
              }, null, 4)) : V("", !0),
              _[2] || (_[2] = d("div", { class: "notification-glitch-effect" }, null, -1)),
              _[3] || (_[3] = d("div", { class: "notification-hologram-effect" }, null, -1))
            ], 2))), 128))
          ]),
          _: 1
        })
      ], 2)) : V("", !0)
    ]));
  }
}), je = /* @__PURE__ */ F(qe, [["__scopeId", "data-v-5b833339"]]), Xe = G(je), Ue = { class: "tooltip-inner" }, Qe = { class: "tooltip-content" }, Ze = /* @__PURE__ */ P({
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
    const t = e, l = a, i = S(!1), o = S(null), r = S(null), v = S(null), p = S(t.position), b = S({}), C = () => {
      if (!o.value || !r.value || t.position !== "auto")
        return t.position;
      const c = o.value.getBoundingClientRect(), $ = r.value.getBoundingClientRect(), u = window.innerWidth, k = window.innerHeight, y = c.top, w = u - c.right, E = k - c.bottom, D = c.left, H = [
        { position: "top", space: y },
        { position: "right", space: w },
        { position: "bottom", space: E },
        { position: "left", space: D }
      ];
      H.sort((j, ae) => ae.space - j.space);
      const W = $.height || 50, R = $.width || 150;
      for (const j of H)
        if (j.position === "top" && j.space >= W + 10 || j.position === "bottom" && j.space >= W + 10 || j.position === "left" && j.space >= R + 10 || j.position === "right" && j.space >= R + 10)
          return j.position;
      return "top";
    }, x = L(() => typeof t.width == "number" ? `${t.width}px` : t.width), h = () => {
      v.value && clearTimeout(v.value), v.value = window.setTimeout(() => {
        i.value = !0, me(() => {
          t.position === "auto" ? p.value = C() : p.value = t.position, _(), l("show");
        });
      }, t.delay);
    }, g = () => {
      v.value && clearTimeout(v.value), v.value = window.setTimeout(() => {
        i.value = !1, l("hide");
      }, 100);
    }, _ = () => {
      if (!o.value || !r.value) return;
      const c = o.value.getBoundingClientRect(), $ = r.value.getBoundingClientRect(), u = window.pageYOffset || document.documentElement.scrollTop, k = window.pageXOffset || document.documentElement.scrollLeft;
      let y = 0, w = 0;
      const E = 10;
      switch (p.value) {
        case "top":
          y = c.left + c.width / 2 - $.width / 2 + k, w = c.top - $.height - E + u;
          break;
        case "right":
          y = c.right + E + k, w = c.top + c.height / 2 - $.height / 2 + u;
          break;
        case "bottom":
          y = c.left + c.width / 2 - $.width / 2 + k, w = c.bottom + E + u;
          break;
        case "left":
          y = c.left - $.width - E + k, w = c.top + c.height / 2 - $.height / 2 + u;
          break;
      }
      (() => {
        const H = window.innerWidth, W = window.innerHeight, R = 10;
        y < R ? y = R : y + $.width > H - R && (y = H - $.width - R), w < R ? w = R : w + $.height > W - R && (w = W - $.height - R);
      })(), b.value = {
        left: `${y}px`,
        top: `${w}px`,
        width: x.value
      };
    }, f = () => {
      t.trigger === "hover" && h();
    }, T = () => {
      t.trigger === "hover" && g();
    }, I = () => {
      t.trigger === "click" && (i.value ? g() : h());
    }, A = () => {
      t.trigger === "focus" && h();
    }, q = () => {
      t.trigger === "focus" && g();
    }, Q = () => {
      i.value && (t.position === "auto" && (p.value = C()), _());
    }, m = () => {
      i.value && (O && clearTimeout(O), O = setTimeout(() => {
        _();
      }, 16));
    };
    Z(
      () => t.position,
      (c) => {
        i.value && me(() => {
          c === "auto" ? p.value = C() : p.value = c, _();
        });
      }
    );
    let N = [];
    const M = (c) => {
      let $ = [], u = c.parentElement;
      for (; u; ) {
        const k = window.getComputedStyle(u);
        /(auto|scroll)/.test(k.overflow + k.overflowY + k.overflowX) && $.push(u), u = u.parentElement;
      }
      return $.push(document.documentElement), $;
    };
    J(() => {
      if (window.addEventListener("resize", Q), window.addEventListener("scroll", m, { passive: !0 }), document.addEventListener("click", (c) => {
        if (i.value && t.trigger === "click") {
          const $ = c.target;
          r.value && !r.value.contains($) && o.value && !o.value.contains($) && g();
        }
      }), o.value) {
        N = M(o.value);
        const c = () => {
          O && clearTimeout(O), O = setTimeout(() => {
            i.value && _();
          }, 16);
        };
        N.forEach(($) => {
          $.addEventListener("scroll", c);
        });
      }
    });
    let O = null;
    return re(() => {
      window.removeEventListener("resize", Q), window.removeEventListener("scroll", m), N.forEach((c) => {
        c.removeEventListener("scroll", m);
      }), v.value && clearTimeout(v.value), O && clearTimeout(O);
    }), (c, $) => (n(), s("div", null, [
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
        U(c.$slots, "default", {}, void 0, !0)
      ], 544),
      (n(), ue(be, { to: "body" }, [
        ge(d("div", {
          ref_key: "tooltipRef",
          ref: r,
          class: B([
            "cp-cyber-tooltip",
            `theme-${e.theme}`,
            `effect-${e.effect}`,
            `position-${p.value}`
          ]),
          style: K(b.value)
        }, [
          $[2] || ($[2] = d("div", { class: "tooltip-arrow" }, null, -1)),
          d("div", Ue, [
            d("div", Qe, [
              U(c.$slots, "content", {}, () => [
                fe(z(e.content), 1)
              ], !0)
            ]),
            $[0] || ($[0] = d("div", { class: "tooltip-scanline" }, null, -1)),
            $[1] || ($[1] = d("div", { class: "tooltip-glitch" }, null, -1))
          ])
        ], 6), [
          [$e, i.value]
        ])
      ]))
    ]));
  }
}), Je = /* @__PURE__ */ F(Ze, [["__scopeId", "data-v-3de3033d"]]), et = G(Je), tt = { class: "progress-track" }, at = {
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
    const a = e, t = L(() => Math.min(100, Math.max(0, a.percentage)).toFixed(0)), l = L(() => {
      const i = Number(t.value);
      return i < 30 ? "INITIALIZING" : i < 60 ? "PROCESSING" : i < 90 ? "LOADING" : i < 100 ? "ALMOST" : "COMPLETE";
    });
    return (i, o) => (n(), s("div", {
      class: B(["cyber-progress", [`theme-${e.theme}`, { animated: e.animated }]])
    }, [
      d("div", tt, [
        o[0] || (o[0] = d("div", { class: "track-grid" }, null, -1)),
        d("div", {
          class: "progress-bar",
          style: K({ width: e.percentage + "%" })
        }, [
          e.showPercentage && e.percentagePosition === "inside" ? (n(), s("span", at, z(t.value) + "% ", 1)) : V("", !0)
        ], 4),
        d("div", lt, [
          (n(), s(Y, null, X(10, (r) => d("span", {
            key: r,
            class: B(["tick", { active: r * 10 <= e.percentage }])
          }, null, 2)), 64))
        ])
      ]),
      e.showPercentage && e.percentagePosition === "outside" ? (n(), s("span", nt, z(t.value) + "% ", 1)) : V("", !0),
      e.showStatus ? (n(), s("div", st, [
        o[1] || (o[1] = d("div", { class: "indicator-dot" }, null, -1)),
        d("span", ot, z(l.value), 1)
      ])) : V("", !0)
    ], 2));
  }
}), rt = /* @__PURE__ */ F(it, [["__scopeId", "data-v-44363fb0"]]), ct = G(rt), ut = {
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
    const a = e, t = S(Number(a.from)), l = S(Number(a.value)), i = S(null), o = S(null), r = S(""), v = (f) => {
      const T = Math.pow(10, a.decimal);
      let A = (Math.round(f * T) / T).toFixed(a.decimal);
      if (a.separator) {
        const q = A.split(".");
        q[0] = q[0].replace(/\B(?=(\d{3})+(?!\d))/g, a.separator), A = q.join(".");
      }
      return A;
    }, p = L(() => v(t.value)), b = L(() => p.value.split("")), C = (f) => f === a.separator || f === ".", x = (f) => !r.value || f >= r.value.length ? !1 : r.value[f] !== b.value[f] && !C(b.value[f]), h = (f) => {
      i.value === null && (i.value = f);
      const T = f - i.value, I = Math.min(T / a.duration, 1), A = Number(a.from), q = Number(a.to !== null ? a.to : l.value), Q = A + (q - A) * g(I);
      t.value = Q, I < 1 ? o.value = requestAnimationFrame(h) : (t.value = q, i.value = null);
    }, g = (f) => 1 - Math.pow(1 - f, 4), _ = () => {
      r.value = p.value, o.value !== null && cancelAnimationFrame(o.value), i.value = null, o.value = requestAnimationFrame(h);
    };
    return Z(() => a.value, (f) => {
      l.value = Number(f), _();
    }), Z(() => a.to, (f) => {
      f !== null && (l.value = Number(f), _());
    }), J(() => {
      Number(a.from) !== Number(a.value) && _();
    }), re(() => {
      o.value !== null && cancelAnimationFrame(o.value);
    }), (f, T) => (n(), s("div", {
      class: B(["cp-digital-counter", `theme-${e.theme}`])
    }, [
      e.prefix ? (n(), s("span", ut, z(e.prefix), 1)) : V("", !0),
      d("div", dt, [
        (n(!0), s(Y, null, X(b.value, (I, A) => (n(), s("div", {
          key: A,
          class: "digit-container"
        }, [
          C(I) ? (n(), s("div", ft, z(I), 1)) : (n(), s("div", {
            key: 1,
            class: B(["digit-flipper", { animate: x(A) }])
          }, [
            d("div", vt, z(I), 1),
            d("div", ht, z(I), 1),
            d("div", mt, z(I), 1),
            d("div", pt, z(I), 1)
          ], 2))
        ]))), 128))
      ]),
      e.suffix ? (n(), s("span", gt, z(e.suffix), 1)) : V("", !0)
    ], 2));
  }
}), bt = /* @__PURE__ */ F(yt, [["__scopeId", "data-v-99c23541"]]), wt = G(bt), $t = {
  class: "cp-full-page",
  id: "page-scroll"
}, xt = ["onClick"], kt = /* @__PURE__ */ P({
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
      i.value?.style && (i.value.style.transform = r.value);
    });
    const o = L(() => {
      v.value = !0;
      let m = 0;
      return document.getElementById("page-scroll")?.clientHeight ? m = document.getElementById("page-scroll")?.clientHeight ?? 0 : m = window.innerHeight, m;
    }), r = L(() => `translateY(-${I.value * o.value}px)`), v = S(!1), p = S(!0);
    function b(m) {
      m.preventDefault(), m.stopPropagation(), v.value = !1, p.value && (p.value = !1, T(m), setTimeout(() => {
        p.value = !0;
      }, 500));
    }
    const C = S(0), x = S(0), h = S(0);
    function g(m) {
      C.value = m.touches[0].pageY || m.changedTouches[0].pageY;
    }
    function _(m) {
      m.preventDefault(), v.value = !1, x.value = m.changedTouches[0].pageY || m.touches[0].pageY, h.value = x.value - C.value, Math.abs(h.value) >= 60 ? (I.value < t.items.length - 1 && h.value < 0 && I.value++, I.value > 0 && h.value > 0 && I.value--) : (console.log("else", -I.value * o.value), i.value.style.transform = `translateY(-${I.value * o.value}px)`);
    }
    function f(m) {
      v.value = !0, m.preventDefault(), h.value = (m.changedTouches[0].pageY || m.touches[0].pageY) - C.value, !(I.value === t.items.length - 1 && h.value < 0 || I.value === 0 && h.value > 0) && (console.log("else", -I.value * o.value + h.value * -1), i.value.style.transform = `translateY(-${I.value * o.value + h.value * -1}px)`);
    }
    function T(m) {
      m.wheelDelta < 0 ? (A(), l("change", { from: t.items[I.value - 1], to: t.items[I.value], type: "next" })) : (q(), l("change", { from: t.items[I.value + 1], to: t.items[I.value], type: "last" }));
    }
    const I = S(0);
    function A() {
      I.value < t.items.length - 1 && (I.value++, l("toNext", I.value));
    }
    function q() {
      (I.value > 1 || I.value === 1) && (I.value--, l("toLast", I.value));
    }
    function Q(m) {
      v.value = !1, I.value = m;
    }
    return (m, N) => (n(), s("div", $t, [
      d("div", {
        ref_key: "element",
        ref: i,
        class: B([{ activeTranstion: v.value }, "inner-box"]),
        onMousewheel: b,
        onTouchstart: g,
        onTouchend: _,
        onTouchmove: f
      }, [
        U(m.$slots, "default", {}, void 0, !0)
      ], 34),
      d("div", {
        class: B(["cp-full-dot", t.position])
      }, [
        (n(!0), s(Y, null, X(t.items, (M, O) => (n(), s("div", {
          onClick: (c) => Q(O),
          class: "cp-full-dot-item"
        }, [
          d("div", {
            class: B(["cp-full-dot-item-bg", { active: O === I.value }])
          }, null, 2),
          t.showTitle ? ge((n(), s("div", {
            key: 0,
            class: "show-dec"
          }, z(M.title), 513)), [
            [$e, O === I.value]
          ]) : V("", !0)
        ], 8, xt))), 256))
      ], 2)
    ]));
  }
}), Ct = /* @__PURE__ */ F(kt, [["__scopeId", "data-v-ee83c807"]]), _t = G(Ct), St = ["src", "alt"], It = {
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
    const t = e, l = a, i = S(null), o = S(null), r = S(null), v = S(!1), p = S(!1), b = S(!1), C = S(null), x = S(null), h = L(() => t.intensity / 10), g = () => {
      v.value = !0, p.value = !1, setTimeout(() => {
        f(), t.triggerMode === "auto" ? M() : t.triggerMode === "random" && O();
      }, 0);
    }, _ = () => {
      p.value = !0, v.value = !1, console.error("Failed to load image:", t.src);
    }, f = () => {
      if (!r.value || !o.value) return;
      const y = o.value, w = r.value, E = w.getContext("2d");
      if (E) {
        w.width = y.naturalWidth, w.height = y.naturalHeight;
        try {
          E.drawImage(y, 0, 0), x.value = E.getImageData(0, 0, w.width, w.height);
        } catch (D) {
          console.error("Failed to get image data (possibly CORS issue):", D), p.value = !0;
        }
      }
    }, T = (y, w) => {
      if (!x.value) return;
      const E = y.canvas, D = y.getImageData(0, 0, E.width, E.height), H = D.data, W = x.value.data, R = Math.floor(20 * w), j = Math.floor(Math.random() * R), ae = Math.floor(Math.random() * R);
      for (let le = 0; le < E.height; le++)
        for (let ne = 0; ne < E.width; ne++) {
          const ee = (le * E.width + ne) * 4, se = Math.min(Math.max(ne + j, 0), E.width - 1), Ce = (Math.min(Math.max(le + ae, 0), E.height - 1) * E.width + se) * 4;
          H[ee] = W[Ce];
          const _e = Math.min(Math.max(ne - j, 0), E.width - 1), Se = (Math.min(Math.max(le - ae, 0), E.height - 1) * E.width + _e) * 4;
          H[ee + 2] = W[Se + 2], H[ee + 1] = W[ee + 1];
        }
      y.putImageData(D, 0, 0);
    }, I = (y, w) => {
      if (!x.value) return;
      const E = y.canvas;
      y.putImageData(x.value, 0, 0);
      const D = Math.max(1, Math.floor(5 / w)), H = 0.5 + w * 0.1;
      for (let W = 0; W < E.height; W += D * 2)
        y.fillStyle = `rgba(255, 255, 255, ${H})`, y.fillRect(0, W, E.width, D);
    }, A = (y, w) => {
      if (!x.value) return;
      const E = y.canvas;
      y.putImageData(x.value, 0, 0);
      const D = Math.max(4, Math.floor(w * 8));
      if (Math.random() > 0.5)
        for (let W = 0; W < E.height; W += D)
          for (let R = 0; R < E.width; R += D) {
            const j = y.getImageData(R, W, 1, 1).data;
            y.fillStyle = `rgb(${j[0]}, ${j[1]}, ${j[2]})`, y.fillRect(R, W, D, D);
          }
      else {
        const W = Math.floor(w * 3);
        for (let R = 0; R < W; R++) {
          const j = Math.floor(Math.random() * (E.width - 50)), ae = Math.floor(Math.random() * (E.height - 50)), le = Math.floor(Math.random() * 100 * w) + 30, ne = Math.floor(Math.random() * 80 * w) + 20;
          for (let ee = ae; ee < ae + ne; ee += D)
            for (let se = j; se < j + le; se += D)
              if (se < E.width && ee < E.height) {
                const ve = y.getImageData(se, ee, 1, 1).data;
                y.fillStyle = `rgb(${ve[0]}, ${ve[1]}, ${ve[2]})`, y.fillRect(se, ee, D, D);
              }
        }
      }
    }, q = (y, w) => {
      if (!x.value) return;
      const E = y.canvas, D = y.getImageData(0, 0, E.width, E.height), H = D.data, W = 0.2 + w * 0.05;
      for (let R = 0; R < H.length; R += 4)
        Math.random() < W && (Math.random() > 0.5 ? (H[R] = 255, H[R + 1] = 255, H[R + 2] = 255) : (H[R] = Math.floor(Math.random() * 256), H[R + 1] = Math.floor(Math.random() * 256), H[R + 2] = Math.floor(Math.random() * 256)));
      y.putImageData(D, 0, 0);
    }, Q = (y, w) => {
      [...["rgb-shift", "scanline", "pixelate", "noise"]].sort(() => 0.5 - Math.random()).slice(0, 2 + Math.floor(Math.random() * 2)).forEach((W) => {
        switch (W) {
          case "rgb-shift":
            T(y, w);
            break;
          case "scanline":
            I(y, w);
            break;
          case "pixelate":
            A(y, w);
            break;
          case "noise":
            q(y, w);
            break;
        }
      });
    }, m = () => {
      if (!r.value || !x.value) return;
      const w = r.value.getContext("2d");
      if (w) {
        switch (w.putImageData(x.value, 0, 0), t.glitchType) {
          case "rgb-shift":
            T(w, h.value);
            break;
          case "scanline":
            I(w, h.value);
            break;
          case "pixelate":
            A(w, h.value);
            break;
          case "noise":
            q(w, h.value);
            break;
          case "combined":
            Q(w, h.value);
            break;
        }
        b.value = !0, l("glitch-start");
      }
    }, N = () => {
      if (!r.value || !x.value) return;
      const w = r.value.getContext("2d");
      w && (w.putImageData(x.value, 0, 0), b.value = !1, l("glitch-end"));
    }, M = () => {
      C.value && clearInterval(C.value), m(), t.animated && (C.value = window.setInterval(() => {
        m();
      }, t.interval));
    }, O = () => {
      C.value && clearInterval(C.value), C.value = window.setInterval(() => {
        Math.random() < 0.5 && (m(), setTimeout(() => {
          N();
        }, 200 + Math.random() * 300));
      }, t.interval);
    }, c = () => {
      C.value && (clearInterval(C.value), C.value = null), N();
    }, $ = () => {
      t.triggerMode === "hover" && M();
    }, u = () => {
      t.triggerMode === "hover" && !t.animated && c();
    }, k = () => {
      t.triggerMode === "click" && (b.value ? c() : M());
    };
    return Z(() => [t.src, t.glitchType, t.intensity], () => {
      t.src && (v.value = !1, p.value = !1), b.value && m();
    }), J(() => {
      o.value && o.value.complete && o.value.naturalHeight !== 0 && g();
    }), re(() => {
      C.value && clearInterval(C.value);
    }), (y, w) => (n(), s("div", {
      class: B(["cp-glitch-image", { animated: e.animated }]),
      onMouseenter: $,
      onMouseleave: u,
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
          onLoad: g,
          onError: _
        }, null, 40, St),
        v.value && !p.value ? (n(), s("canvas", {
          key: 0,
          ref_key: "glitchCanvasRef",
          ref: r,
          class: "glitch-canvas"
        }, null, 512)) : V("", !0),
        !v.value && !p.value ? (n(), s("div", It, [...w[0] || (w[0] = [
          d("div", { class: "loading-text" }, "Loading...", -1)
        ])])) : V("", !0),
        p.value ? (n(), s("div", Mt, [...w[1] || (w[1] = [
          d("div", { class: "error-text" }, "Image Load Failed", -1)
        ])])) : V("", !0)
      ], 512)
    ], 34));
  }
}), Vt = /* @__PURE__ */ F(Tt, [["__scopeId", "data-v-b2947767"]]), Et = G(Vt), Bt = ["data-progress"], Lt = { class: "progress-container" }, Nt = {
  key: 0,
  class: "progress-text"
}, Ot = /* @__PURE__ */ P({
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
    const a = e, t = S(null), l = S(null), i = L(() => a.direction === "vertical" ? "vertical" : "horizontal"), o = L(() => {
      const p = a.direction === "vertical" ? "height" : "width", b = a.indeterminate ? "100%" : `${a.progress}%`;
      return {
        [p]: b,
        backgroundColor: a.color,
        boxShadow: `0 0 ${a.glitchIntensity * 2}px ${a.color}`
      };
    }), r = () => {
      if (!t.value) return;
      const p = t.value.querySelector(".glitch-effect");
      if (!p) return;
      const b = () => {
        if (!p) return;
        if (Math.random() < a.glitchIntensity / 20) {
          const x = Math.random() * a.glitchIntensity - a.glitchIntensity / 2, h = Math.random() * a.glitchIntensity - a.glitchIntensity / 2, g = Math.random() * a.glitchIntensity - a.glitchIntensity / 2, _ = Math.random() * a.glitchIntensity / 2;
          p.style.transform = `translate(${x}px, ${h}px) skew(${g}deg)`, p.style.filter = `blur(${_}px)`, p.style.opacity = "1", setTimeout(() => {
            p && (p.style.transform = "translate(0, 0) skew(0)", p.style.filter = "blur(0)", p.style.opacity = "0");
          }, 150);
        }
      };
      l.value = window.setInterval(() => {
        b();
      }, 500);
    };
    let v = a.progress;
    return Z(() => a.progress, (p) => {
      if (p !== v) {
        if (t.value) {
          const b = t.value.querySelector(".glitch-effect");
          if (b) {
            const C = Math.random() * a.glitchIntensity * 2 - a.glitchIntensity, x = Math.random() * a.glitchIntensity - a.glitchIntensity / 2;
            b.style.transform = `translate(${C}px, ${x}px)`, b.style.opacity = "1", setTimeout(() => {
              b && (b.style.transform = "translate(0, 0)", b.style.opacity = "0");
            }, 300);
          }
        }
        v = p;
      }
    }), J(() => {
      r();
    }), re(() => {
      l.value && clearInterval(l.value);
    }), (p, b) => (n(), s("div", {
      class: B(["cp-glitch-progress", i.value, { indeterminate: e.indeterminate }]),
      "data-progress": e.progress
    }, [
      d("div", Lt, [
        d("div", {
          class: "progress-bar",
          style: K(o.value),
          ref_key: "progressBarRef",
          ref: t
        }, [...b[0] || (b[0] = [
          d("div", { class: "glitch-effect" }, null, -1)
        ])], 4),
        e.showText && !e.indeterminate ? (n(), s("div", Nt, z(e.progress) + "% ", 1)) : V("", !0)
      ])
    ], 10, Bt));
  }
}), zt = /* @__PURE__ */ F(Ot, [["__scopeId", "data-v-27854e11"]]), At = G(zt), Dt = { class: "glow-text" }, Rt = /* @__PURE__ */ P({
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
}), Pt = /* @__PURE__ */ F(Rt, [["__scopeId", "data-v-7d666f1f"]]), Kt = G(Pt), Ft = ["tabindex", "aria-disabled", "aria-label"], Gt = { class: "holo-card-content" }, Ht = {
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
    pe((f) => ({
      v558892ac: l.hologramColor
    }));
    const a = Me(), t = ie(), l = e, i = S({ x: 0, y: 0 }), o = S(!1), p = ((f, T) => {
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
    }, 16), b = () => {
      o.value = !1, i.value = { x: 0, y: 0 };
    }, C = () => {
      l.disabled || (o.value = !0, i.value = { x: 0, y: 0 });
    }, x = L(() => [(() => {
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
    })()]), h = L(() => {
      const f = {};
      if (l.rounded || (f.borderRadius = "0"), l.disabled && (f.cursor = "not-allowed", f.opacity = "0.6"), !o.value || l.disabled) return f;
      const T = i.value.y * 10, I = -i.value.x * 10;
      return {
        ...f,
        transform: `perspective(1000px) rotateX(${T}deg) rotateY(${I}deg) scale3d(1.05, 1.05, 1.05)`,
        transition: "transform 0.1s ease"
      };
    }), g = L(() => {
      if (!o.value || l.disabled) return {};
      const f = Math.max(-50, Math.min(50, i.value.x * 10)), T = Math.max(-50, Math.min(50, i.value.y * 10));
      return {
        background: `radial-gradient(circle at ${50 + f}% ${50 + T}%, ${l.hologramColor}33, transparent 70%)`,
        opacity: 0.8,
        transition: "background 0.1s ease"
      };
    }), _ = L(() => {
      const f = l.glowIntensity / 100;
      return {
        boxShadow: `0 0 ${10 + l.glowIntensity / 5}px ${l.hologramColor}${Math.floor(f * 99).toString(16).padStart(2, "0")}`,
        opacity: o.value && !l.disabled ? f : f * 0.5
      };
    });
    return J(() => {
      me(() => {
      });
    }), (f, T) => (n(), s("div", {
      class: B([
        "cp-holo-card",
        `depth-${e.depth}`,
        x.value,
        `theme-${e.theme}`,
        `effect-${e.effect}`
      ]),
      style: K(h.value),
      onMousemove: T[0] || (T[0] = //@ts-ignore
      (...I) => he(p) && he(p)(...I)),
      onMouseleave: b,
      onFocus: C,
      onBlur: b,
      tabindex: e.disabled ? -1 : 0,
      role: "button",
      "aria-disabled": e.disabled,
      "aria-label": e.title
    }, [
      d("div", Gt, [
        e.title && !he(t).title ? (n(), s("div", Ht, z(e.title), 1)) : V("", !0),
        U(f.$slots, "title", {}, void 0, !0),
        U(f.$slots, "default", {}, void 0, !0),
        U(f.$slots, "footer", {}, void 0, !0)
      ]),
      d("div", {
        class: "holo-card-hologram-effect",
        style: K(g.value)
      }, null, 4),
      d("div", {
        class: "holo-card-glow",
        style: K(_.value)
      }, null, 4)
    ], 46, Ft));
  }
}), Yt = /* @__PURE__ */ F(Wt, [["__scopeId", "data-v-fe164a1d"]]), qt = G(Yt), jt = { class: "loader-container" }, Xt = {
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
    pe((p) => ({
      c40498b2: p.$props.color,
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
    }), i = S(""), o = S(0), r = S(null), v = () => {
      if (!a.text) return;
      o.value = 0, i.value = "";
      const p = () => {
        o.value < a.text.length ? (i.value += a.text[o.value], o.value++) : setTimeout(() => {
          o.value = 0, i.value = "";
        }, 1e3);
      }, b = 100 / a.speed;
      r.value = window.setInterval(p, b);
    };
    return Z(() => a.text, () => {
      r.value && clearInterval(r.value), v();
    }), J(() => {
      v();
    }), re(() => {
      r.value && clearInterval(r.value);
    }), (p, b) => (n(), s("div", {
      class: B(["cp-holo-loader", l.value, { "transparent-bg": e.transparent }])
    }, [
      d("div", jt, [
        d("div", {
          class: B(["holo-projection", `type-${e.type}`])
        }, [
          e.type === "cube" || e.type === "split" ? (n(), s("div", Xt, [...b[0] || (b[0] = [
            Te('<div class="cube" data-v-6df1b911><div class="cube-face front" data-v-6df1b911></div><div class="cube-face back" data-v-6df1b911></div><div class="cube-face right" data-v-6df1b911></div><div class="cube-face left" data-v-6df1b911></div><div class="cube-face top" data-v-6df1b911></div><div class="cube-face bottom" data-v-6df1b911></div></div>', 1)
          ])])) : e.type === "sphere" ? (n(), s("div", Ut, [
            d("div", Qt, [
              (n(), s(Y, null, X(3, (C) => d("div", {
                class: "sphere-ring",
                key: C
              })), 64))
            ])
          ])) : e.type === "datastream" ? (n(), s("div", Zt, [
            (n(), s(Y, null, X(10, (C) => d("div", {
              class: "data-line",
              key: C
            })), 64))
          ])) : e.type === "circuit" ? (n(), s("div", Jt, [
            d("div", ea, [
              (n(), s(Y, null, X(5, (C) => d("div", {
                class: "circuit-path",
                key: C
              })), 64)),
              (n(), s(Y, null, X(6, (C) => d("div", {
                class: "circuit-node",
                key: C + 10
              })), 64))
            ])
          ])) : V("", !0)
        ], 2),
        e.text ? (n(), s("div", ta, [
          d("span", aa, z(i.value), 1),
          b[1] || (b[1] = d("span", { class: "cursor" }, "_", -1))
        ])) : V("", !0),
        b[2] || (b[2] = d("div", { class: "holo-base" }, [
          d("div", { class: "base-glow" })
        ], -1))
      ])
    ], 2));
  }
}), na = /* @__PURE__ */ F(la, [["__scopeId", "data-v-6df1b911"]]), sa = G(na), oa = { class: "header-row" }, ia = { class: "header-text" }, ra = { class: "cell-text" }, ca = {
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
    const a = e, t = S(null), l = S(!1), i = S(!0), o = S(1), r = S(0), v = S(!1), p = S(0), b = Ve([]);
    a.data.length > 0 && b.splice(0, b.length, ...a.data);
    let C = 0;
    const x = () => `row-${++C}-${Date.now()}`, h = L(() => a.rowNum * a.rowHeight), g = L(() => h.value), _ = L(() => {
      const c = b.length, $ = a.rowNum;
      if (c === 0) return [];
      if (c <= $)
        return b.map((w, E) => ({
          key: w._uniqueKey || x(),
          data: w,
          index: E
        }));
      let u = [...b];
      c > $ && c < 2 * $ && (u = [...u, ...u]), u = u.map((w, E) => ({
        key: w._uniqueKey || x(),
        data: w,
        index: E,
        scroll: E
      }));
      let k = u.slice(r.value);
      return k.push(...u.slice(0, r.value)), k.slice(0, $);
    }), f = (c) => a.columns[c]?.width ? a.columns[c].width : "auto", T = (c) => c === "center" ? "center" : c === "right" ? "flex-end" : "flex-start", I = () => a.theme === "neon" ? "rgba(0, 230, 246, 0.15)" : a.theme === "hologram" ? "rgba(138, 43, 226, 0.2)" : a.theme === "terminal" ? "rgba(0, 255, 0, 0.15)" : a.theme === "matrix" ? "rgba(0, 255, 65, 0.15)" : "rgba(0, 230, 246, 0.15)", A = (c) => (r.value + c) % b.length % 2 === 0 ? "var(--table-row-bg)" : "var(--table-row-hover)", q = (c, $) => {
      const u = $.split(".");
      let k = c;
      for (const y of u)
        k = k?.[y];
      return k ?? "";
    }, Q = async () => {
      if (!(l.value || !i.value)) {
        l.value = !0;
        try {
          if (a.remoteMethod) {
            const c = await a.remoteMethod({
              page: o.value,
              size: a.bufferSize * 10
            });
            if (c.data && c.data.length > 0) {
              const $ = c.data.map((u) => (u._uniqueKey || (u._uniqueKey = x()), u));
              o.value === 1 ? b.splice(0, b.length, ...$) : b.push(...$), a.data && a.data.splice(0, a.data.length, ...b);
            }
            i.value = c.hasMore ?? !1, o.value++;
          } else a.loadMore && await a.loadMore();
        } catch (c) {
          console.error("Failed to load more data:", c), i.value = !1;
        } finally {
          l.value = !1;
        }
      }
    }, m = async () => {
      if (!a.autoScroll || v.value) return;
      const c = b.length, $ = a.rowNum;
      if (c <= $ || (await new Promise((k) => setTimeout(k, a.waitTime)), v.value)) return;
      const u = async () => {
        if (v.value) return;
        const k = p.value, y = a.scrollType === "page" ? $ : 1;
        r.value = (r.value + y) % c;
        const w = a.scrollType === "page" ? 500 : 300;
        await new Promise((E) => setTimeout(E, w)), !(p.value !== k || v.value) && (await new Promise((E) => setTimeout(E, a.waitTime)), !(p.value !== k || v.value) && u());
      };
      u();
    }, N = () => {
      p.value = (p.value + 1) % 999999;
    }, M = () => {
      a.hoverPause && (v.value = !0, N());
    }, O = () => {
      a.hoverPause && (v.value = !1, m());
    };
    return J(() => {
      a.remoteMethod && b.length === 0 && Q(), a.autoScroll && m();
    }), (c, $) => (n(), s("div", {
      class: B(["cyber-infinite-table", [`theme-${e.theme}`, `scroll-${e.scrollType}`]])
    }, [
      d("div", {
        class: "table-header",
        style: K({ backgroundColor: I() })
      }, [
        d("div", oa, [
          (n(!0), s(Y, null, X(e.columns, (u, k) => (n(), s("div", {
            key: u.field || k,
            class: "header-cell",
            style: K({
              width: f(k),
              minWidth: u.minWidth || "100px",
              textAlign: u.align || "left"
            })
          }, [
            d("div", {
              class: "header-content",
              style: K({ justifyContent: T(u.align || "left") })
            }, [
              d("span", ia, z(u.title), 1)
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
          style: K({ height: g.value + "px" })
        }, [
          oe(we, { name: "scroll-list" }, {
            default: de(() => [
              (n(!0), s(Y, null, X(_.value, (u) => (n(), s("div", {
                class: "table-row",
                key: u.key,
                style: K({
                  height: e.rowHeight + "px",
                  lineHeight: e.rowHeight + "px",
                  backgroundColor: A(u.index)
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
                  U(c.$slots, k.field, {
                    row: u.data,
                    column: k
                  }, () => [
                    d("span", ra, z(q(u.data, k.field)), 1)
                  ], !0)
                ], 4))), 128)),
                e.showScanline ? (n(), s("div", ca)) : V("", !0)
              ], 4))), 128))
            ]),
            _: 3
          })
        ], 4)
      ], 544),
      $[0] || ($[0] = d("div", { class: "table-border-effect" }, null, -1))
    ], 2));
  }
}), da = /* @__PURE__ */ F(ua, [["__scopeId", "data-v-a239aba5"]]), fa = G(da), va = /* @__PURE__ */ P({
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
    return (o, r) => (n(), s("div", {
      class: B(["cp-button-neno", i.value])
    }, [
      d("div", {
        class: B(["button", l.value, t.bg ? "show-bg" : ""])
      }, [
        r[0] || (r[0] = d("div", { class: "border" }, null, -1)),
        r[1] || (r[1] = d("div", { class: "border" }, null, -1)),
        r[2] || (r[2] = d("div", { class: "border" }, null, -1)),
        r[3] || (r[3] = d("div", { class: "border" }, null, -1)),
        U(o.$slots, "default", {}, void 0, !0)
      ], 2)
    ], 2));
  }
}), ha = /* @__PURE__ */ F(va, [["__scopeId", "data-v-5d7945c0"]]), ma = G(ha), pa = ["aria-checked", "aria-disabled"], ga = { class: "toggle-thumb" }, ya = {
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
    pe((v) => ({
      v2ad8abbc: t.inActiveColor,
      v247239f2: t.activeColor
    }));
    const t = e, l = a, i = L(() => {
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
    }), o = L(() => {
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
      l("update:modelValue", v), l("change", v);
    };
    return (v, p) => (n(), s("div", {
      class: B(["cp-neon-toggle", o.value, i.value, { active: e.modelValue, disabled: e.disabled }]),
      onClick: r,
      "aria-checked": e.modelValue,
      role: "switch",
      "aria-disabled": e.disabled
    }, [
      p[0] || (p[0] = d("div", { class: "toggle-track" }, [
        d("div", { class: "toggle-track-inner" }),
        d("div", { class: "circuit-lines" })
      ], -1)),
      d("div", ga, [
        e.pulseEffect && e.modelValue ? (n(), s("div", ya)) : V("", !0)
      ])
    ], 10, pa));
  }
}), wa = /* @__PURE__ */ F(ba, [["__scopeId", "data-v-799d9482"]]), $a = G(wa), xa = /* @__PURE__ */ P({
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
    return (o, r) => (n(), s("div", {
      class: B(["cp-button-neno", i.value])
    }, [
      d("div", {
        class: B(["button", l.value, t.bg ? "show-bg" : ""])
      }, [
        U(o.$slots, "default", {}, void 0, !0)
      ], 2)
    ], 2));
  }
}), ka = /* @__PURE__ */ F(xa, [["__scopeId", "data-v-d73343d5"]]), Ca = G(ka), _a = ["data-word"], Sa = /* @__PURE__ */ P({
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
}), Ia = /* @__PURE__ */ F(Sa, [["__scopeId", "data-v-ee14b82a"]]), Ma = G(Ia), Ta = /* @__PURE__ */ P({
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
      let r = `0px 0px ${i}`;
      for (let v = 1; v <= a.long; v++) {
        const p = l(i, v);
        r += `, ${o === "left" ? "-" : ""}${v}px ${v}px ${p}`;
      }
      return r;
    }, l = (i, o) => {
      const r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i.exec(i), v = /^rgba?\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})(,\s*([\d.]+))?\)$/i.exec(i);
      if (r) {
        const p = parseInt(r[1], 16), b = parseInt(r[2], 16), C = parseInt(r[3], 16), x = r[4] ? parseInt(r[4], 16) / 255 : 1, h = Math.max(0, x - o * 0.05);
        return `rgba(${p}, ${b}, ${C}, ${h})`;
      } else if (v) {
        const p = parseInt(v[1], 10), b = parseInt(v[2], 10), C = parseInt(v[3], 10), x = v[5] ? parseFloat(v[5]) : 1, h = Math.max(0, x - o * 0.05);
        return `rgba(${p}, ${b}, ${C}, ${h})`;
      } else
        throw new Error(`Unsupported color format: ${i}`);
    };
    return (i, o) => (n(), s("div", {
      class: B(["shadow-text", a.direction]),
      style: K({ textShadow: t(a.shadowColor, a.direction) })
    }, [
      U(i.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), Va = /* @__PURE__ */ F(Ta, [["__scopeId", "data-v-baec179b"]]), Ea = G(Va), Ba = { class: "cp-typing" }, La = { class: "content" }, Na = /* @__PURE__ */ P({
  name: "CyberTyping",
  __name: "typing",
  setup(e) {
    return (a, t) => (n(), s("div", Ba, [
      d("div", La, [
        U(a.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), Oa = /* @__PURE__ */ F(Na, [["__scopeId", "data-v-c43f79f6"]]), za = G(Oa), Aa = ["src", "alt", "loading", "crossorigin"], Da = {
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
    const a = /* @__PURE__ */ Object.assign({}), t = e, l = (h) => {
      if (h.startsWith("http://") || h.startsWith("https://") || h.startsWith("/"))
        return h;
      for (const [g, _] of Object.entries(a))
        if (g.includes(h) || h.includes(g.split("/").pop() || ""))
          return _;
      return h;
    }, i = S(!1), o = S(!1), r = S(""), v = L(() => {
      const h = {};
      return t.width !== "auto" && t.width !== void 0 && (h.width = typeof t.width == "number" ? `${t.width}px` : t.width), t.height !== "auto" && t.height !== void 0 && (h.height = typeof t.height == "number" ? `${t.height}px` : t.height), !h.width && !h.height && (h.display = "inline-block"), h;
    }), p = L(() => o.value && t.errorSrc ? `url(${t.errorSrc})` : r.value ? `url(${r.value})` : "none"), b = L(() => {
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
    }), C = () => {
      r.value = l(t.src), i.value = !0, o.value = !1;
    }, x = () => {
      if (o.value = !0, t.errorSrc && t.errorSrc !== t.src) {
        const h = new Image();
        h.crossOrigin = t.crossorigin || "", h.src = l(t.errorSrc), h.onload = () => {
          r.value = l(t.errorSrc), i.value = !0;
        }, h.onerror = () => {
          i.value = !0;
        };
      } else
        i.value = !0;
    };
    return Z(() => t.src, () => {
      i.value = !1, o.value = !1, r.value = l(t.src);
    }, { immediate: !0 }), J(() => {
      t.src && (r.value = l(t.src));
    }), (h, g) => (n(), s("div", {
      class: "cyber-image-wrapper",
      style: K(v.value)
    }, [
      e.src ? (n(), s("img", {
        key: 0,
        src: e.src,
        alt: e.alt,
        loading: e.loading,
        crossorigin: e.crossorigin,
        class: "hidden-image",
        onLoad: C,
        onError: x
      }, null, 40, Aa)) : V("", !0),
      d("div", {
        class: B(["glitch", {
          "is-loaded": i.value && !o.value,
          "is-loading": !i.value && !o.value,
          "is-error": o.value,
          "no-glitch": e.disableGlitch
        }]),
        style: K({
          backgroundImage: p.value,
          backgroundSize: b.value,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        })
      }, [
        i.value && !o.value && !e.disableGlitch ? (n(), s("div", {
          key: 0,
          class: "glitch-layer",
          style: K({ backgroundImage: p.value })
        }, null, 4)) : V("", !0),
        !i.value && e.placeholder ? (n(), s("div", Da, [
          U(h.$slots, "placeholder", {}, () => [
            d("img", {
              src: e.placeholder,
              alt: "Loading..."
            }, null, 8, Ra)
          ], !0)
        ])) : o.value ? (n(), s("div", Pa, [
          U(h.$slots, "error", {}, () => [
            fe(z(e.errorContent), 1)
          ], !0)
        ])) : V("", !0),
        i.value && !o.value ? U(h.$slots, "default", { key: 3 }, void 0, !0) : V("", !0)
      ], 6)
    ], 4));
  }
}), Fa = /* @__PURE__ */ F(Ka, [["__scopeId", "data-v-c8293d7c"]]), Ga = G(Fa), Ha = { class: "cyber-magic-text" }, Wa = ["data-text"], Ya = /* @__PURE__ */ P({
  name: "CyberMagicText",
  __name: "magicText",
  setup(e) {
    const a = S(""), t = ie();
    if (t && t.default) {
      let l = t.default();
      a.value = l[0].children;
    }
    return (l, i) => (n(), s("div", Ha, [
      d("span", {
        class: "gradient-text",
        "data-text": a.value
      }, [
        U(l.$slots, "default")
      ], 8, Wa)
    ]));
  }
}), qa = G(Ya), ja = { class: "imgWrap" }, Xa = ["src"], Ua = /* @__PURE__ */ P({
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
    pe((v) => ({
      v29922088: t.value + "px"
    }));
    const a = e, t = S(a.imgHeight);
    a.shadow && (t.value = a.imgHeight * 2);
    const l = S(a.imgList.length), i = o(a.imgWidth, 360 / l.value) * 1.6;
    function o(v, p) {
      const b = p * Math.PI / 180;
      return v / (2 * Math.sin(b / 2));
    }
    const r = (v) => {
      const p = 35 + (v + 1) * (360 / l.value), b = o(a.imgWidth, 360 / l.value);
      return {
        transform: `rotateY(${p}deg) translateZ(${b}px)`
      };
    };
    return (v, p) => (n(), s("div", {
      class: "container",
      style: K({
        "--container-width": `${i}px`,
        "--img-width": `${a.imgWidth}px`,
        "--img-height": `${a.imgHeight}px`
      })
    }, [
      d("div", {
        class: B(["stage", { "has-shadow": a.shadow }])
      }, [
        d("div", {
          class: "control",
          style: K({
            "--animation-duration": `${a.animationDuration}s`
          })
        }, [
          d("div", ja, [
            (n(!0), s(Y, null, X(a.imgList, (b, C) => (n(), s("div", {
              key: C,
              class: "img",
              style: K(r(C))
            }, [
              d("img", { src: b }, null, 8, Xa)
            ], 4))), 128))
          ])
        ], 4)
      ], 2)
    ], 4));
  }
}), Qa = /* @__PURE__ */ F(Ua, [["__scopeId", "data-v-3d7f1970"]]), Za = G(Qa), Ja = ["aria-expanded", "aria-disabled"], el = { class: "select-value" }, tl = ["aria-label", "onClick"], al = {
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
    const t = e, l = a, i = S(), o = S(), r = S(!1), v = S(""), p = L(() => t.showCheck !== void 0 ? t.showCheck : t.multiple), b = L(() => {
      const u = [], k = [];
      return t.options.forEach((y, w) => {
        Array.isArray(y.options) ? u.push({
          key: `group-${w}`,
          label: _(y),
          options: y.options
        }) : k.push(y);
      }), k.length && u.unshift({
        key: "default",
        label: "",
        options: k
      }), u;
    }), C = L(() => b.value.flatMap((u) => u.options)), x = L(() => {
      const u = v.value.trim().toLowerCase();
      return u ? b.value.map((k) => ({
        ...k,
        options: k.options.filter((y) => _(y).toLowerCase().includes(u))
      })).filter((k) => k.options.length) : b.value;
    }), h = L(() => {
      const u = t.multiple ? Array.isArray(t.modelValue) ? t.modelValue : [] : Array.isArray(t.modelValue) ? [] : [t.modelValue ?? null];
      return C.value.filter((k) => u.some((y) => T(y, f(k))));
    }), g = L(() => t.multiple ? Array.isArray(t.modelValue) && t.modelValue.length > 0 : t.modelValue !== "" && t.modelValue !== null && t.modelValue !== void 0), _ = (u) => {
      const k = u[t.labelKey] ?? u.label ?? u[t.valueKey] ?? u.value ?? "";
      return String(k);
    }, f = (u) => u[t.valueKey] ?? u.value ?? null, T = (u, k) => u === k, I = (u) => {
      const k = f(u);
      return t.multiple ? (Array.isArray(t.modelValue) ? t.modelValue : []).some((w) => T(w, k)) : T(t.modelValue, k);
    }, A = (u) => {
      t.disabled || r.value === u || (r.value = u, l("visible-change", u), u && t.filterable && me(() => o.value?.focus()));
    }, q = () => {
      A(!r.value);
    }, Q = (u) => {
      if (t.disabled || u.disabled) return;
      const k = f(u);
      if (t.multiple) {
        const y = Array.isArray(t.modelValue) ? [...t.modelValue] : [], w = y.findIndex((D) => T(D, k));
        w > -1 ? y.splice(w, 1) : y.push(k);
        const E = C.value.filter((D) => y.some((H) => T(H, f(D))));
        l("update:modelValue", y), l("change", y, E);
        return;
      }
      l("update:modelValue", k), l("change", k, u), A(!1);
    }, m = (u) => {
      if (!t.multiple || t.disabled) return;
      const k = f(u), w = (Array.isArray(t.modelValue) ? [...t.modelValue] : []).filter((D) => !T(D, k)), E = C.value.filter((D) => w.some((H) => T(H, f(D))));
      l("update:modelValue", w), l("change", w, E);
    }, N = () => {
      const u = t.multiple ? [] : "";
      l("update:modelValue", u), l("change", u, t.multiple ? [] : void 0), l("clear"), v.value = "";
    }, M = (u) => {
      t.disabled || l("focus", u);
    }, O = (u) => {
      l("blur", u);
    }, c = (u) => {
      t.disabled || ((u.key === "Enter" || u.key === " ") && (r.value || (u.preventDefault(), A(!0))), u.key === "Escape" && A(!1));
    }, $ = (u) => {
      i.value?.contains(u.target) || A(!1);
    };
    return Z(r, (u) => {
      u || (v.value = "");
    }), Z(() => t.multiple, (u) => {
      u && !Array.isArray(t.modelValue) && l("update:modelValue", []);
    }), J(() => {
      document.addEventListener("click", $);
    }), xe(() => {
      document.removeEventListener("click", $);
    }), (u, k) => (n(), s("div", {
      ref_key: "selectRef",
      ref: i,
      class: B(["cp-cyber-select", [
        `theme-${e.theme}`,
        `size-${e.size}`,
        {
          "is-open": r.value,
          "is-disabled": e.disabled,
          "is-multiple": e.multiple
        }
      ]])
    }, [
      d("div", {
        class: "select-control",
        tabindex: "0",
        role: "combobox",
        "aria-expanded": r.value,
        "aria-disabled": e.disabled,
        onClick: q,
        onFocus: M,
        onBlur: O,
        onKeydown: c
      }, [
        d("div", el, [
          e.multiple && h.value.length ? (n(!0), s(Y, { key: 0 }, X(h.value, (y) => (n(), s("span", {
            key: String(f(y)),
            class: "select-tag",
            onClick: k[0] || (k[0] = te(() => {
            }, ["stop"]))
          }, [
            fe(z(_(y)) + " ", 1),
            d("button", {
              class: "tag-close",
              type: "button",
              "aria-label": `Remove ${_(y)}`,
              onClick: te((w) => m(y), ["stop"])
            }, null, 8, tl)
          ]))), 128)) : !e.multiple && h.value.length ? (n(), s("span", al, z(_(h.value[0])), 1)) : (n(), s("span", ll, z(e.placeholder), 1))
        ]),
        e.clearable && g.value && !e.disabled ? (n(), s("button", {
          key: 0,
          class: "clear-button",
          type: "button",
          "aria-label": "Clear selected value",
          onClick: te(N, ["stop"])
        })) : V("", !0),
        k[3] || (k[3] = d("span", { class: "select-arrow" }, null, -1))
      ], 40, Ja),
      oe(ye, { name: "select-dropdown" }, {
        default: de(() => [
          r.value ? (n(), s("div", nl, [
            e.filterable ? (n(), s("div", sl, [
              ge(d("input", {
                ref_key: "searchInputRef",
                ref: o,
                "onUpdate:modelValue": k[1] || (k[1] = (y) => v.value = y),
                type: "text",
                placeholder: e.searchPlaceholder,
                onClick: k[2] || (k[2] = te(() => {
                }, ["stop"])),
                onKeydown: c
              }, null, 40, ol), [
                [Ee, v.value]
              ])
            ])) : V("", !0),
            x.value.length ? (n(), s("div", il, [
              (n(!0), s(Y, null, X(x.value, (y) => (n(), s(Y, {
                key: y.key
              }, [
                y.label ? (n(), s("div", rl, z(y.label), 1)) : V("", !0),
                (n(!0), s(Y, null, X(y.options, (w) => (n(), s(Y, null, [
                  w.divider ? (n(), s("div", {
                    class: "select-divider",
                    key: `divider-${w.key || Math.random()}`
                  })) : (n(), s("button", {
                    key: `${y.key}-${String(f(w))}`,
                    class: B(["select-option", {
                      selected: I(w),
                      disabled: w.disabled
                    }]),
                    type: "button",
                    disabled: w.disabled,
                    onClick: te((E) => Q(w), ["stop"])
                  }, [
                    p.value ? (n(), s("span", ul)) : V("", !0),
                    w.icon ? (n(), s("span", dl, [
                      (n(), ue(Be(w.icon)))
                    ])) : V("", !0),
                    d("span", fl, z(_(w)), 1),
                    w.shortcut ? (n(), s("span", vl, z(w.shortcut), 1)) : V("", !0)
                  ], 10, cl))
                ], 64))), 256))
              ], 64))), 128))
            ])) : (n(), s("div", hl, z(e.noDataText), 1))
          ])) : V("", !0)
        ]),
        _: 1
      })
    ], 2));
  }
}), pl = /* @__PURE__ */ F(ml, [["__scopeId", "data-v-d196aecd"]]), gl = G(pl), yl = { class: "cascader-tree" }, bl = ["disabled", "onClick"], wl = {
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
    const t = e, l = a, i = S(/* @__PURE__ */ new Set()), o = (h) => String(h[t.labelKey] ?? h.label ?? h[t.valueKey] ?? h.value ?? ""), r = (h) => h[t.valueKey] ?? h.value ?? "", v = (h) => {
      const g = h[t.childrenKey] ?? h.children;
      return Array.isArray(g) && g.length > 0;
    }, p = (h) => h[t.childrenKey] ?? h.children ?? [], b = (h) => {
      const g = r(h);
      return t.selectedValues.includes(g);
    }, C = (h) => {
      const g = r(h);
      return i.value.has(g);
    }, x = (h) => {
      if (h.disabled) return;
      const g = r(h);
      if (v(h)) {
        const _ = new Set(i.value);
        _.has(g) ? _.delete(g) : _.add(g), i.value = _;
      } else
        l("select", { option: h, value: g });
    };
    return (h, g) => {
      const _ = ke("CascaderOptionTree");
      return n(), s("div", yl, [
        (n(!0), s(Y, null, X(e.options, (f) => (n(), s("div", {
          key: String(r(f)),
          class: "cascader-menu-item"
        }, [
          d("button", {
            class: B(["cascader-option", {
              selected: b(f),
              disabled: f.disabled,
              "has-children": v(f),
              "is-expanded": C(f)
            }]),
            type: "button",
            disabled: f.disabled,
            onClick: te((T) => x(f), ["stop"])
          }, [
            e.multiple ? (n(), s("span", wl)) : V("", !0),
            d("span", $l, z(o(f)), 1),
            v(f) ? (n(), s("span", xl)) : V("", !0)
          ], 10, bl),
          v(f) && C(f) ? (n(), s("div", kl, [
            oe(_, {
              options: p(f),
              "selected-values": e.selectedValues,
              multiple: e.multiple,
              "label-key": e.labelKey,
              "value-key": e.valueKey,
              "children-key": e.childrenKey,
              onSelect: g[0] || (g[0] = (T) => h.$emit("select", T))
            }, null, 8, ["options", "selected-values", "multiple", "label-key", "value-key", "children-key"])
          ])) : V("", !0)
        ]))), 128)),
        !e.options || e.options.length === 0 ? (n(), s("div", Cl, " 暂无数据 ")) : V("", !0)
      ]);
    };
  }
}), Il = /* @__PURE__ */ F(Sl, [["__scopeId", "data-v-6616b296"]]), Ml = ["aria-expanded", "aria-disabled"], Tl = { class: "cascader-value" }, Vl = ["aria-label", "onClick"], El = {
  key: 1,
  class: "cascader-single"
}, Bl = {
  key: 2,
  class: "cascader-placeholder"
}, Ll = { class: "cascader-options" }, Nl = /* @__PURE__ */ P({
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
    const t = e, l = a, i = S(), o = S(!1), r = S(""), v = S([]), p = L(() => t.multiple ? Array.isArray(t.modelValue) && t.modelValue.length > 0 : t.modelValue !== "" && t.modelValue !== null && t.modelValue !== void 0), b = (c) => {
      if (!t.showAllLevels) {
        const u = C(t.options, c);
        return u ? h(u) : String(c);
      }
      return x(t.options, c).map((u) => h(u)).join(" / ");
    }, C = (c, $) => {
      for (const u of c) {
        if (g(u) === $)
          return u;
        const k = _(u);
        if (k.length) {
          const y = C(k, $);
          if (y) return y;
        }
      }
      return null;
    }, x = (c, $) => {
      for (const u of c) {
        if (g(u) === $)
          return [u];
        const k = _(u);
        if (k.length) {
          const y = x(k, $);
          if (y.length)
            return [u, ...y];
        }
      }
      return [];
    }, h = (c) => String(c[t.labelKey] ?? c.label ?? c[t.valueKey] ?? c.value ?? ""), g = (c) => c[t.valueKey] ?? c.value ?? "", _ = (c) => c[t.childrenKey] ?? c.children ?? [], f = (c) => {
      t.disabled || o.value === c || (o.value = c, l("visible-change", c));
    }, T = () => {
      f(!o.value);
    }, I = ({ value: c }) => {
      if (!t.disabled)
        if (t.multiple) {
          const $ = v.value.indexOf(c);
          $ > -1 ? v.value.splice($, 1) : v.value.push(c), l("update:modelValue", [...v.value]), l("change", [...v.value]);
        } else
          r.value = c, l("update:modelValue", c), l("change", c), f(!1);
    }, A = (c) => {
      t.multiple && (v.value = v.value.filter(($) => $ !== c), l("update:modelValue", [...v.value]), l("change", [...v.value]));
    }, q = () => {
      t.multiple ? (v.value = [], l("update:modelValue", [])) : (r.value = "", l("update:modelValue", "")), l("change", t.multiple ? [] : ""), l("clear");
    }, Q = (c) => {
      t.disabled || l("focus", c);
    }, m = (c) => {
      l("blur", c);
    }, N = (c) => {
      t.disabled || ((c.key === "Enter" || c.key === " ") && (o.value || (c.preventDefault(), f(!0))), c.key === "Escape" && f(!1));
    }, M = (c) => {
      i.value?.contains(c.target) || f(!1);
    }, O = L(() => ({
      width: `${i.value?.offsetWidth || 260}px`
    }));
    return Z(() => t.modelValue, (c) => {
      t.multiple ? v.value = Array.isArray(c) ? [...c] : [] : r.value = c;
    }, { immediate: !0 }), J(() => {
      document.addEventListener("click", M);
    }), xe(() => {
      document.removeEventListener("click", M);
    }), (c, $) => (n(), s("div", {
      ref_key: "cascaderRef",
      ref: i,
      class: B(["cp-cyber-cascader", [
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
        onBlur: m,
        onKeydown: N
      }, [
        d("div", Tl, [
          e.multiple && v.value.length ? (n(!0), s(Y, { key: 0 }, X(v.value, (u, k) => (n(), s("span", {
            key: k,
            class: "cascader-tag"
          }, [
            fe(z(b(u)) + " ", 1),
            d("button", {
              class: "tag-close",
              type: "button",
              "aria-label": `移除 ${b(u)}`,
              onClick: te((y) => A(u), ["stop"])
            }, null, 8, Vl)
          ]))), 128)) : !e.multiple && r.value ? (n(), s("span", El, z(b(r.value)), 1)) : (n(), s("span", Bl, z(e.placeholder), 1))
        ]),
        e.clearable && p.value && !e.disabled ? (n(), s("button", {
          key: 0,
          class: "clear-button",
          type: "button",
          "aria-label": "清空",
          onClick: te(q, ["stop"])
        })) : V("", !0),
        $[0] || ($[0] = d("span", { class: "cascader-arrow" }, null, -1))
      ], 40, Ml),
      oe(ye, { name: "cascader-dropdown" }, {
        default: de(() => [
          o.value ? (n(), s("div", {
            key: 0,
            class: "cascader-dropdown",
            style: K(O.value)
          }, [
            d("div", Ll, [
              oe(Il, {
                options: t.options,
                "selected-values": e.multiple ? v.value : [r.value],
                multiple: e.multiple,
                "label-key": e.labelKey,
                "value-key": e.valueKey,
                "children-key": e.childrenKey,
                onSelect: I
              }, null, 8, ["options", "selected-values", "multiple", "label-key", "value-key", "children-key"])
            ])
          ], 4)) : V("", !0)
        ]),
        _: 1
      })
    ], 2));
  }
}), Ol = /* @__PURE__ */ F(Nl, [["__scopeId", "data-v-fade87c5"]]), zl = G(Ol), Al = {
  key: 0,
  class: "tree-connectors",
  "aria-hidden": "true"
}, Dl = ["onClick"], Rl = ["aria-expanded", "aria-label", "onClick"], Pl = {
  key: 1,
  class: "node-expand-placeholder"
}, Kl = { class: "node-label" }, Fl = { class: "label-text" }, Gl = ["title"], Hl = { class: "status-text" }, Wl = {
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
    const l = e, i = t, o = S([]), r = S([]), v = S(0), p = L(() => {
      const m = [], N = (M, O = 0, c) => {
        M.forEach(($, u) => {
          $._level = O, $._parent = c, $._expanded = $.expanded ?? (l.defaultExpandAll || O === 0), $._selected = $.selected ?? !1, $._isLastChild = u === M.length - 1, m.push($), $._expanded && $.children && $.children.length > 0 && N($.children, O + 1, $);
        });
      };
      return N(o.value), m;
    }), b = () => {
      const m = (N, M = 0) => {
        const O = {
          ...N,
          _expanded: N.expanded ?? (l.defaultExpandAll || M === 0),
          _selected: N.selected ?? !1,
          _level: M,
          _parent: void 0,
          _isLastChild: !1
        };
        return N.children && N.children.length > 0 && (O.children = N.children.map((c) => m(c, M + 1))), O;
      };
      o.value = l.data.map((N) => m(N)), r.value = p.value.filter((N) => N._selected);
    }, C = (m) => !m.children || m.children.length === 0, x = (m) => m._level ?? 0, h = (m) => x(m) * l.indent, g = (m) => {
      const N = x(m);
      return Array.from({ length: Math.max(N - 1, 0) }, (M, O) => O);
    }, _ = (m, N) => {
      let M = m, O = x(m);
      for (; M && O > N; )
        M = M._parent, O--;
      return M?._isLastChild ?? !1;
    }, f = (m) => {
      m._expanded = !m._expanded, m.expanded = m._expanded, m._expanded ? i("node-expand", m) : i("node-collapse", m), Q();
    }, T = (m) => {
      l.multiple ? (m._selected = !m._selected, m.selected = m._selected) : m._selected ? (m._selected = !1, m.selected = !1) : (r.value.forEach((N) => {
        N._selected = !1, N.selected = !1;
      }), m._selected = !0, m.selected = !0), I(), i("select-change", r.value), i("node-click", m), l.expandOnClick && !C(m) && f(m);
    }, I = () => {
      r.value = p.value.filter((m) => m._selected);
    }, A = (m) => m.icon ? m.icon : C(m) ? "icon-file" : m._expanded ? "icon-folder-open" : "icon-folder", q = (m) => m ? {
      online: "Online",
      offline: "Offline",
      warning: "Warning",
      error: "Error"
    }[m] : "", Q = () => {
      v.value++;
    };
    return Z(() => l.data, () => {
      b();
    }, { deep: !0, immediate: !0 }), a({
      getSelectedNodes: () => r.value,
      clearSelection: () => {
        r.value.forEach((m) => {
          m._selected = !1, m.selected = !1;
        }), r.value = [], Q();
      }
    }), (m, N) => (n(), s("div", {
      class: B(["cp-cyber-tree cyber-tree", [`theme-${e.theme}`, `effect-${e.effect}`]])
    }, [
      (n(!0), s(Y, null, X(p.value, (M) => (n(), s("div", {
        key: `${M.id}-${M._expanded}-${M._selected}-${v.value}`,
        class: B(["tree-node", {
          expanded: M._expanded,
          leaf: C(M),
          "last-child": M._isLastChild
        }]),
        style: K({ paddingLeft: `${h(M)}px` })
      }, [
        e.showConnectors && x(M) > 0 ? (n(), s("div", Al, [
          (n(!0), s(Y, null, X(g(M), (O) => (n(), s("span", {
            key: O,
            class: B(["ancestor-line", { hidden: _(M, O) }]),
            style: K({ left: `${O * e.indent + ce}px` })
          }, null, 6))), 128)),
          d("span", {
            class: B(["parent-line", { "is-last": M._isLastChild }]),
            style: K({ left: `${(x(M) - 1) * e.indent + ce}px` })
          }, null, 6),
          d("span", {
            class: "horizontal-line",
            style: K({
              left: `${(x(M) - 1) * e.indent + ce}px`,
              width: `${e.indent - ce + 20}px`
            })
          }, null, 4),
          d("span", {
            class: "connector-joint",
            style: K({ left: `${(x(M) - 1) * e.indent + ce}px` })
          }, null, 4)
        ])) : V("", !0),
        d("div", {
          class: "node-content-wrapper",
          onClick: te((O) => T(M), ["stop"])
        }, [
          d("div", {
            class: B(["node-content", { selected: M._selected }])
          }, [
            C(M) ? (n(), s("span", Pl)) : (n(), s("button", {
              key: 0,
              class: "node-expand-icon",
              type: "button",
              "aria-expanded": M._expanded,
              "aria-label": M._expanded ? "Collapse node" : "Expand node",
              onClick: te((O) => f(M), ["stop"])
            }, [
              d("span", {
                class: B(["expand-arrow", { rotated: M._expanded }])
              }, null, 2)
            ], 8, Rl)),
            d("span", {
              class: B(["node-icon", A(M)])
            }, [...N[0] || (N[0] = [
              d("span", { class: "icon-core" }, null, -1)
            ])], 2),
            d("span", Kl, [
              d("span", Fl, z(M.label), 1)
            ]),
            e.showStatus && M.status ? (n(), s("span", {
              key: 2,
              class: "node-status",
              title: q(M.status)
            }, [
              d("span", {
                class: B(["status-indicator", `status-${M.status}`])
              }, null, 2),
              d("span", Hl, z(M.status), 1)
            ], 8, Gl)) : V("", !0)
          ], 2)
        ], 8, Dl)
      ], 6))), 128)),
      p.value.length === 0 ? (n(), s("div", Wl, " No data ")) : V("", !0),
      e.showScanline && e.effect !== "static" ? (n(), s("div", Yl)) : V("", !0)
    ], 2));
  }
}), jl = /* @__PURE__ */ F(ql, [["__scopeId", "data-v-f9876722"]]), Xl = G(jl), Ul = {
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
    const a = e, t = L(() => {
      const l = {};
      return a.size && (a.direction === "horizontal" ? l.width = a.size : l.height = a.size), l;
    });
    return (l, i) => (n(), s("div", {
      class: B(["cp-divider", [`cp-divider--${e.direction}`, `cp-divider--${e.type}`]]),
      style: K(t.value)
    }, [
      e.showLeftLine ? (n(), s("div", Ul)) : V("", !0),
      l.$slots.default || e.content ? (n(), s("div", Ql, [
        U(l.$slots, "default", {}, () => [
          fe(z(e.content), 1)
        ], !0)
      ])) : V("", !0),
      e.showRightLine ? (n(), s("div", Zl)) : V("", !0)
    ], 6));
  }
}), en = /* @__PURE__ */ F(Jl, [["__scopeId", "data-v-e3e2783b"]]), tn = G(en), an = { class: "input-wrapper" }, ln = ["type", "value", "placeholder", "disabled", "readonly", "maxlength", "autocomplete"], nn = {
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
    const l = e, i = t, o = S(null), r = L(() => {
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
    }), v = L(() => {
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
    }), p = (g) => {
      const _ = g.target;
      i("update:modelValue", _.value), i("input", _.value);
    }, b = (g) => {
      i("focus", g);
    }, C = (g) => {
      i("blur", g);
    }, x = (g) => {
      i("keyup", g);
    }, h = (g) => {
      i("keydown", g);
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
    }), (g, _) => (n(), s("div", {
      class: B(["cp-input", r.value, v.value])
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
          onInput: p,
          onFocus: b,
          onBlur: C,
          onKeyup: x,
          onKeydown: h,
          class: "cyber-input"
        }, null, 40, ln),
        _[0] || (_[0] = d("div", { class: "input-border" }, null, -1)),
        e.glitchEffect ? (n(), s("div", nn)) : V("", !0),
        e.scanlineEffect ? (n(), s("div", sn)) : V("", !0)
      ])
    ], 2));
  }
}), rn = /* @__PURE__ */ F(on, [["__scopeId", "data-v-a6c7ea98"]]), cn = G(rn), un = {
  key: 0,
  class: "menu-icon"
}, dn = ["data-content"], fn = {
  key: 1,
  class: "menu-arrow"
}, vn = /* @__PURE__ */ P({
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
    const t = e, l = a, i = L(() => t.item.children && t.item.children.length > 0), o = L(() => t.activeValue === t.item.value), r = L(() => t.expandedValues.includes(t.item.value)), v = () => {
      t.item.disabled || (i.value ? l("toggle-expand", t.item.value) : l("select", t.item));
    }, p = () => {
    }, b = () => {
    };
    return (C, x) => {
      const h = ke("CyberMenuItem");
      return n(), s("li", {
        class: B([
          "menu-item",
          `depth-${e.depth}`,
          {
            "is-active": o.value,
            "is-disabled": e.item.disabled,
            "has-children": i.value,
            "is-expanded": r.value
          }
        ])
      }, [
        d("div", {
          class: "menu-item-content",
          onClick: v,
          onMouseenter: p,
          onMouseleave: b
        }, [
          e.item.icon ? (n(), s("span", un, [
            d("i", {
              class: B(e.item.icon)
            }, null, 2)
          ])) : V("", !0),
          d("span", {
            class: "menu-label",
            "data-content": e.item.label
          }, z(e.item.label), 9, dn),
          i.value ? (n(), s("span", fn, [...x[2] || (x[2] = [
            d("i", { class: "arrow-icon" }, null, -1)
          ])])) : V("", !0),
          x[3] || (x[3] = d("div", { class: "item-glitch-overlay" }, null, -1))
        ], 32),
        oe(ye, { name: "submenu-fade" }, {
          default: de(() => [
            i.value && r.value ? (n(), s("ul", {
              key: 0,
              class: B(["submenu-list", `submenu-depth-${e.depth + 1}`])
            }, [
              (n(!0), s(Y, null, X(e.item.children, (g) => (n(), ue(h, {
                key: g.value,
                item: g,
                depth: e.depth + 1,
                direction: e.direction,
                "active-value": e.activeValue,
                "expanded-values": e.expandedValues,
                onSelect: x[0] || (x[0] = (_) => C.$emit("select", _)),
                onToggleExpand: x[1] || (x[1] = (_) => C.$emit("toggle-expand", _))
              }, null, 8, ["item", "depth", "direction", "active-value", "expanded-values"]))), 128))
            ], 2)) : V("", !0)
          ]),
          _: 1
        })
      ], 2);
    };
  }
}), hn = /* @__PURE__ */ F(vn, [["__scopeId", "data-v-8dabcbe1"]]), mn = { class: "menu-list" }, pn = {
  key: 0,
  class: "menu-glitch-overlay"
}, gn = /* @__PURE__ */ P({
  name: "CyberMenu",
  __name: "menu",
  props: {
    modelValue: { default: "" },
    items: { default: () => [] },
    direction: { default: "vertical" },
    theme: { default: "neon" },
    effect: { default: "none" }
  },
  emits: ["update:modelValue", "change", "select"],
  setup(e, { emit: a }) {
    const t = e, l = a, i = S(t.modelValue), o = S([]), r = S(!1), v = S(t.items), p = (x) => {
      x.disabled || (i.value = x.value, l("update:modelValue", x.value), l("change", x.value), l("select", x), t.effect === "glitch" && C());
    }, b = (x) => {
      const h = o.value.indexOf(x);
      h > -1 ? o.value.splice(h, 1) : o.value.push(x);
    }, C = () => {
      r.value = !0, setTimeout(() => {
        r.value = !1;
      }, 300);
    };
    return Z(() => t.modelValue, (x) => {
      i.value = x;
    }), Z(() => t.items, (x) => {
      v.value = x;
    }, { deep: !0 }), (x, h) => (n(), s("div", {
      class: B([
        "cp-cyber-menu",
        `direction-${e.direction}`,
        `theme-${e.theme}`,
        `effect-${e.effect}`,
        {
          "is-horizontal": e.direction === "horizontal",
          "is-vertical": e.direction === "vertical",
          "is-glitching": r.value
        }
      ])
    }, [
      d("ul", mn, [
        (n(!0), s(Y, null, X(v.value, (g) => (n(), ue(hn, {
          key: g.value,
          item: g,
          depth: 0,
          direction: e.direction,
          "active-value": i.value,
          "expanded-values": o.value,
          onSelect: p,
          onToggleExpand: b
        }, null, 8, ["item", "direction", "active-value", "expanded-values"]))), 128))
      ]),
      e.effect === "glitch" ? (n(), s("div", pn)) : V("", !0)
    ], 2));
  }
}), yn = /* @__PURE__ */ F(gn, [["__scopeId", "data-v-9b26e2b5"]]), bn = G(yn), wn = [
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
  $a,
  ma,
  Ca,
  Ma,
  Ea,
  Kt,
  za,
  _t,
  Ga,
  qa,
  gl,
  zl,
  Xl,
  Za,
  tn,
  cn,
  bn
], $n = Le([...wn]);
console.log(
  "%c %s",
  "border: 1px solid #97E3FE;border-radius: 3px;padding: 2px 5px;color: white;font-weight:bolder;background: linear-gradient(to right, #fF717F,#CC54D1,#4EAFFA,#3DE1C3, #F7DA66)",
  "CyberPunk-UI"
);
const Cn = $n.install;
export {
  $n as default,
  Cn as install,
  Le as makeInstaller
};
