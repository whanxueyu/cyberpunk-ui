import { defineComponent as K, useSlots as ie, computed as z, openBlock as n, createElementBlock as s, normalizeClass as B, createElementVNode as c, unref as he, renderSlot as U, toDisplayString as A, ref as _, onUnmounted as re, createBlock as ue, Teleport as be, createVNode as oe, TransitionGroup as we, withCtx as de, Fragment as j, renderList as X, createCommentVNode as T, normalizeStyle as F, watch as Z, nextTick as pe, onMounted as ee, withDirectives as ge, createTextVNode as fe, vShow as xe, watchEffect as Ie, useCssVars as me, getCurrentInstance as Me, createStaticVNode as Te, reactive as Ve, onBeforeUnmount as $e, withModifiers as J, Transition as ye, vModelText as Ee, resolveDynamicComponent as Be, resolveComponent as ke } from "vue";
const Le = (e = []) => ({
  install: (t) => {
    e.forEach((a) => t.use(a));
  }
}), G = (e, l) => (e.install = (t) => {
  for (const a of [e, ...Object.values({})])
    t.component(a.name, a);
}, e), ze = ["data-content"], Ne = { key: 1 }, Oe = /* @__PURE__ */ K({
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
  setup(e, { emit: l }) {
    const t = ie(), a = e, i = z(() => {
      switch (a.type) {
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
    }), o = z(() => {
      switch (a.size) {
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
    return (r, h) => (n(), s("div", {
      class: B(["cp-button", o.value])
    }, [
      c("div", {
        class: B(["button", i.value]),
        "data-content": a.content
      }, [
        he(t) ? U(r.$slots, "default", { key: 0 }, void 0, !0) : (n(), s("span", Ne, A(a.content), 1))
      ], 10, ze)
    ], 2));
  }
}), H = (e, l) => {
  const t = e.__vccOpts || e;
  for (const [a, i] of l)
    t[a] = i;
  return t;
}, Ae = /* @__PURE__ */ H(Oe, [["__scopeId", "data-v-6fea0e49"]]), De = G(Ae), Re = { class: "notification-content" }, Pe = {
  key: 0,
  class: "notification-icon"
}, Ke = { class: "notification-body" }, Fe = {
  key: 0,
  class: "notification-title"
}, He = { class: "notification-message" }, Ge = {
  key: 1,
  class: "notification-actions"
}, We = ["onClick"], Ye = ["onClick"], je = /* @__PURE__ */ K({
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
  setup(e, { expose: l, emit: t }) {
    const a = e, i = t, o = _([]), r = _(!1);
    let h = 0;
    const p = (b) => {
      const M = ++h, f = b.actions && b.actions.length > 0, I = {
        id: M,
        title: b.title || "",
        message: b.message,
        type: b.type || "info",
        duration: b.duration !== void 0 ? b.duration : f ? 0 : a.duration,
        showClose: b.showClose !== void 0 ? b.showClose : !0,
        showIcon: b.showIcon !== void 0 ? b.showIcon : !0,
        actions: b.actions || [],
        effect: b.effect || a.effect,
        onClose: b.onClose || (() => {
        })
      };
      if (o.value.push(I), r.value = !0, I.duration > 0 && setTimeout(() => {
        y(M);
      }, I.duration), o.value.length > a.maxCount) {
        const k = o.value[0];
        y(k.id);
      }
      return M;
    }, y = (b) => {
      const M = o.value.findIndex((f) => f.id === b);
      if (M !== -1) {
        const f = o.value[M];
        f.onClose && f.onClose(), o.value.splice(M, 1), i("close", b);
      }
    }, S = (b, M) => {
      M.callback && M.callback(), y(b.id);
    }, $ = () => {
      o.value.length === 0 && (r.value = !1);
    }, v = () => {
      o.value.forEach((b) => {
        b.onClose && b.onClose();
      }), o.value = [], r.value = !1;
    };
    return l({
      // 创建不同类型的通知
      info: (b) => p({ ...b, type: "info" }),
      success: (b) => p({ ...b, type: "success" }),
      warning: (b) => p({ ...b, type: "warning" }),
      error: (b) => p({ ...b, type: "error" }),
      // 通用创建方法
      create: p,
      // 关闭方法
      close: y,
      // 清除所有
      clearAll: v
    }), re(() => {
      v();
    }), (b, M) => (n(), ue(be, { to: "body" }, [
      r.value ? (n(), s("div", {
        key: 0,
        class: B(["cp-cyber-notification-container", `position-${e.position}`])
      }, [
        oe(we, {
          name: "notification",
          tag: "div",
          onAfterLeave: $
        }, {
          default: de(() => [
            (n(!0), s(j, null, X(o.value, (f) => (n(), s("div", {
              key: f.id,
              class: B(["cp-cyber-notification", `type-${f.type}`, `effect-${f.effect}`])
            }, [
              c("div", Re, [
                f.showIcon ? (n(), s("div", Pe, [...M[0] || (M[0] = [
                  c("div", { class: "icon-circle" }, null, -1),
                  c("div", { class: "icon-symbol" }, null, -1)
                ])])) : T("", !0),
                c("div", Ke, [
                  f.title ? (n(), s("div", Fe, A(f.title), 1)) : T("", !0),
                  c("div", He, A(f.message), 1),
                  f.actions && f.actions.length ? (n(), s("div", Ge, [
                    (n(!0), s(j, null, X(f.actions, (I, k) => (n(), s("button", {
                      key: k,
                      class: "action-button",
                      onClick: (L) => S(f, I)
                    }, A(I.text), 9, We))), 128))
                  ])) : T("", !0)
                ]),
                f.showClose ? (n(), s("div", {
                  key: 1,
                  class: "notification-close",
                  onClick: (I) => y(f.id)
                }, [...M[1] || (M[1] = [
                  c("span", { class: "close-icon" }, "×", -1)
                ])], 8, Ye)) : T("", !0)
              ]),
              f.duration > 0 ? (n(), s("div", {
                key: 0,
                class: "notification-progress",
                style: F({ animationDuration: `${f.duration}ms` })
              }, null, 4)) : T("", !0),
              M[2] || (M[2] = c("div", { class: "notification-glitch-effect" }, null, -1)),
              M[3] || (M[3] = c("div", { class: "notification-hologram-effect" }, null, -1))
            ], 2))), 128))
          ]),
          _: 1
        })
      ], 2)) : T("", !0)
    ]));
  }
}), qe = /* @__PURE__ */ H(je, [["__scopeId", "data-v-45ec4447"]]), Xe = G(qe), Ue = { class: "tooltip-inner" }, Qe = { class: "tooltip-content" }, Ze = /* @__PURE__ */ K({
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
  setup(e, { emit: l }) {
    const t = e, a = l, i = _(!1), o = _(null), r = _(null), h = _(null), p = _(t.position), y = _({}), S = () => {
      if (!o.value || !r.value || t.position !== "auto")
        return t.position;
      const u = o.value.getBoundingClientRect(), x = r.value.getBoundingClientRect(), d = window.innerWidth, C = window.innerHeight, g = u.top, w = d - u.right, E = C - u.bottom, R = u.left, W = [
        { position: "top", space: g },
        { position: "right", space: w },
        { position: "bottom", space: E },
        { position: "left", space: R }
      ];
      W.sort((q, ae) => ae.space - q.space);
      const Y = x.height || 50, P = x.width || 150;
      for (const q of W)
        if (q.position === "top" && q.space >= Y + 10 || q.position === "bottom" && q.space >= Y + 10 || q.position === "left" && q.space >= P + 10 || q.position === "right" && q.space >= P + 10)
          return q.position;
      return "top";
    }, $ = z(() => typeof t.width == "number" ? `${t.width}px` : t.width), v = () => {
      h.value && clearTimeout(h.value), h.value = window.setTimeout(() => {
        i.value = !0, pe(() => {
          t.position === "auto" ? p.value = S() : p.value = t.position, M(), a("show");
        });
      }, t.delay);
    }, b = () => {
      h.value && clearTimeout(h.value), h.value = window.setTimeout(() => {
        i.value = !1, a("hide");
      }, 100);
    }, M = () => {
      if (!o.value || !r.value) return;
      const u = o.value.getBoundingClientRect(), x = r.value.getBoundingClientRect(), d = window.pageYOffset || document.documentElement.scrollTop, C = window.pageXOffset || document.documentElement.scrollLeft;
      let g = 0, w = 0;
      const E = 10;
      switch (p.value) {
        case "top":
          g = u.left + u.width / 2 - x.width / 2 + C, w = u.top - x.height - E + d;
          break;
        case "right":
          g = u.right + E + C, w = u.top + u.height / 2 - x.height / 2 + d;
          break;
        case "bottom":
          g = u.left + u.width / 2 - x.width / 2 + C, w = u.bottom + E + d;
          break;
        case "left":
          g = u.left - x.width - E + C, w = u.top + u.height / 2 - x.height / 2 + d;
          break;
      }
      (() => {
        const W = window.innerWidth, Y = window.innerHeight, P = 10;
        g < P ? g = P : g + x.width > W - P && (g = W - x.width - P), w < P ? w = P : w + x.height > Y - P && (w = Y - x.height - P);
      })(), y.value = {
        left: `${g}px`,
        top: `${w}px`,
        width: $.value
      };
    }, f = () => {
      t.trigger === "hover" && v();
    }, I = () => {
      t.trigger === "hover" && b();
    }, k = () => {
      t.trigger === "click" && (i.value ? b() : v());
    }, L = () => {
      t.trigger === "focus" && v();
    }, D = () => {
      t.trigger === "focus" && b();
    }, Q = () => {
      i.value && (t.position === "auto" && (p.value = S()), M());
    }, m = () => {
      i.value && (O && clearTimeout(O), O = setTimeout(() => {
        M();
      }, 16));
    };
    Z(
      () => t.position,
      (u) => {
        i.value && pe(() => {
          u === "auto" ? p.value = S() : p.value = u, M();
        });
      }
    );
    let N = [];
    const V = (u) => {
      let x = [], d = u.parentElement;
      for (; d; ) {
        const C = window.getComputedStyle(d);
        /(auto|scroll)/.test(C.overflow + C.overflowY + C.overflowX) && x.push(d), d = d.parentElement;
      }
      return x.push(document.documentElement), x;
    };
    ee(() => {
      if (window.addEventListener("resize", Q), window.addEventListener("scroll", m, { passive: !0 }), document.addEventListener("click", (u) => {
        if (i.value && t.trigger === "click") {
          const x = u.target;
          r.value && !r.value.contains(x) && o.value && !o.value.contains(x) && b();
        }
      }), o.value) {
        N = V(o.value);
        const u = () => {
          O && clearTimeout(O), O = setTimeout(() => {
            i.value && M();
          }, 16);
        };
        N.forEach((x) => {
          x.addEventListener("scroll", u);
        });
      }
    });
    let O = null;
    return re(() => {
      window.removeEventListener("resize", Q), window.removeEventListener("scroll", m), N.forEach((u) => {
        u.removeEventListener("scroll", m);
      }), h.value && clearTimeout(h.value), O && clearTimeout(O);
    }), (u, x) => (n(), s("div", null, [
      c("div", {
        ref_key: "triggerRef",
        ref: o,
        class: "tooltip-trigger",
        onMouseenter: f,
        onMouseleave: I,
        onClick: k,
        onFocus: L,
        onBlur: D
      }, [
        U(u.$slots, "default", {}, void 0, !0)
      ], 544),
      (n(), ue(be, { to: "body" }, [
        ge(c("div", {
          ref_key: "tooltipRef",
          ref: r,
          class: B([
            "cp-cyber-tooltip",
            `theme-${e.theme}`,
            `effect-${e.effect}`,
            `position-${p.value}`
          ]),
          style: F(y.value)
        }, [
          x[2] || (x[2] = c("div", { class: "tooltip-arrow" }, null, -1)),
          c("div", Ue, [
            c("div", Qe, [
              U(u.$slots, "content", {}, () => [
                fe(A(e.content), 1)
              ], !0)
            ]),
            x[0] || (x[0] = c("div", { class: "tooltip-scanline" }, null, -1)),
            x[1] || (x[1] = c("div", { class: "tooltip-glitch" }, null, -1))
          ])
        ], 6), [
          [xe, i.value]
        ])
      ]))
    ]));
  }
}), Je = /* @__PURE__ */ H(Ze, [["__scopeId", "data-v-3de3033d"]]), et = G(Je), tt = { class: "progress-track" }, at = {
  key: 0,
  class: "percentage-inside"
}, lt = { class: "tick-marks" }, nt = {
  key: 0,
  class: "percentage-outside"
}, st = {
  key: 1,
  class: "status-indicator"
}, ot = { class: "status-text" }, it = /* @__PURE__ */ K({
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
    const l = e, t = z(() => Math.min(100, Math.max(0, l.percentage)).toFixed(0)), a = z(() => {
      const i = Number(t.value);
      return i < 30 ? "INITIALIZING" : i < 60 ? "PROCESSING" : i < 90 ? "LOADING" : i < 100 ? "ALMOST" : "COMPLETE";
    });
    return (i, o) => (n(), s("div", {
      class: B(["cyber-progress", [`theme-${e.theme}`, { animated: e.animated }]])
    }, [
      c("div", tt, [
        o[0] || (o[0] = c("div", { class: "track-grid" }, null, -1)),
        c("div", {
          class: "progress-bar",
          style: F({ width: e.percentage + "%" })
        }, [
          e.showPercentage && e.percentagePosition === "inside" ? (n(), s("span", at, A(t.value) + "% ", 1)) : T("", !0)
        ], 4),
        c("div", lt, [
          (n(), s(j, null, X(10, (r) => c("span", {
            key: r,
            class: B(["tick", { active: r * 10 <= e.percentage }])
          }, null, 2)), 64))
        ])
      ]),
      e.showPercentage && e.percentagePosition === "outside" ? (n(), s("span", nt, A(t.value) + "% ", 1)) : T("", !0),
      e.showStatus ? (n(), s("div", st, [
        o[1] || (o[1] = c("div", { class: "indicator-dot" }, null, -1)),
        c("span", ot, A(a.value), 1)
      ])) : T("", !0)
    ], 2));
  }
}), rt = /* @__PURE__ */ H(it, [["__scopeId", "data-v-44363fb0"]]), ct = G(rt), ut = {
  key: 0,
  class: "prefix"
}, dt = { class: "counter-container" }, ft = {
  key: 0,
  class: "separator"
}, vt = { class: "digit-top" }, ht = { class: "digit-bottom" }, pt = { class: "digit-top flip-top" }, mt = { class: "digit-bottom flip-bottom" }, gt = {
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
    const l = e, t = _(Number(l.from)), a = _(Number(l.value)), i = _(null), o = _(null), r = _(""), h = (f) => {
      const I = Math.pow(10, l.decimal);
      let L = (Math.round(f * I) / I).toFixed(l.decimal);
      if (l.separator) {
        const D = L.split(".");
        D[0] = D[0].replace(/\B(?=(\d{3})+(?!\d))/g, l.separator), L = D.join(".");
      }
      return L;
    }, p = z(() => h(t.value)), y = z(() => p.value.split("")), S = (f) => f === l.separator || f === ".", $ = (f) => !r.value || f >= r.value.length ? !1 : r.value[f] !== y.value[f] && !S(y.value[f]), v = (f) => {
      i.value === null && (i.value = f);
      const I = f - i.value, k = Math.min(I / l.duration, 1), L = Number(l.from), D = Number(l.to !== null ? l.to : a.value), Q = L + (D - L) * b(k);
      t.value = Q, k < 1 ? o.value = requestAnimationFrame(v) : (t.value = D, i.value = null);
    }, b = (f) => 1 - Math.pow(1 - f, 4), M = () => {
      r.value = p.value, o.value !== null && cancelAnimationFrame(o.value), i.value = null, o.value = requestAnimationFrame(v);
    };
    return Z(() => l.value, (f) => {
      a.value = Number(f), M();
    }), Z(() => l.to, (f) => {
      f !== null && (a.value = Number(f), M());
    }), ee(() => {
      Number(l.from) !== Number(l.value) && M();
    }), re(() => {
      o.value !== null && cancelAnimationFrame(o.value);
    }), (f, I) => (n(), s("div", {
      class: B(["cp-digital-counter", `theme-${e.theme}`])
    }, [
      e.prefix ? (n(), s("span", ut, A(e.prefix), 1)) : T("", !0),
      c("div", dt, [
        (n(!0), s(j, null, X(y.value, (k, L) => (n(), s("div", {
          key: L,
          class: "digit-container"
        }, [
          S(k) ? (n(), s("div", ft, A(k), 1)) : (n(), s("div", {
            key: 1,
            class: B(["digit-flipper", { animate: $(L) }])
          }, [
            c("div", vt, A(k), 1),
            c("div", ht, A(k), 1),
            c("div", pt, A(k), 1),
            c("div", mt, A(k), 1)
          ], 2))
        ]))), 128))
      ]),
      e.suffix ? (n(), s("span", gt, A(e.suffix), 1)) : T("", !0)
    ], 2));
  }
}), bt = /* @__PURE__ */ H(yt, [["__scopeId", "data-v-99c23541"]]), wt = G(bt), xt = {
  class: "cp-full-page",
  id: "page-scroll"
}, $t = ["onClick"], kt = /* @__PURE__ */ K({
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
  setup(e, { emit: l }) {
    const t = e, a = l, i = _();
    Ie(() => {
      i.value?.style && (i.value.style.transform = r.value);
    });
    const o = z(() => {
      h.value = !0;
      let m = 0;
      return document.getElementById("page-scroll")?.clientHeight ? m = document.getElementById("page-scroll")?.clientHeight ?? 0 : m = window.innerHeight, m;
    }), r = z(() => `translateY(-${k.value * o.value}px)`), h = _(!1), p = _(!0);
    function y(m) {
      m.preventDefault(), m.stopPropagation(), h.value = !1, p.value && (p.value = !1, I(m), setTimeout(() => {
        p.value = !0;
      }, 500));
    }
    const S = _(0), $ = _(0), v = _(0);
    function b(m) {
      S.value = m.touches[0].pageY || m.changedTouches[0].pageY;
    }
    function M(m) {
      m.preventDefault(), h.value = !1, $.value = m.changedTouches[0].pageY || m.touches[0].pageY, v.value = $.value - S.value, Math.abs(v.value) >= 60 ? (k.value < t.items.length - 1 && v.value < 0 && k.value++, k.value > 0 && v.value > 0 && k.value--) : (console.log("else", -k.value * o.value), i.value.style.transform = `translateY(-${k.value * o.value}px)`);
    }
    function f(m) {
      h.value = !0, m.preventDefault(), v.value = (m.changedTouches[0].pageY || m.touches[0].pageY) - S.value, !(k.value === t.items.length - 1 && v.value < 0 || k.value === 0 && v.value > 0) && (console.log("else", -k.value * o.value + v.value * -1), i.value.style.transform = `translateY(-${k.value * o.value + v.value * -1}px)`);
    }
    function I(m) {
      m.wheelDelta < 0 ? (L(), a("change", { from: t.items[k.value - 1], to: t.items[k.value], type: "next" })) : (D(), a("change", { from: t.items[k.value + 1], to: t.items[k.value], type: "last" }));
    }
    const k = _(0);
    function L() {
      k.value < t.items.length - 1 && (k.value++, a("toNext", k.value));
    }
    function D() {
      (k.value > 1 || k.value === 1) && (k.value--, a("toLast", k.value));
    }
    function Q(m) {
      h.value = !1, k.value = m;
    }
    return (m, N) => (n(), s("div", xt, [
      c("div", {
        ref_key: "element",
        ref: i,
        class: B([{ activeTranstion: h.value }, "inner-box"]),
        onMousewheel: y,
        onTouchstart: b,
        onTouchend: M,
        onTouchmove: f
      }, [
        U(m.$slots, "default", {}, void 0, !0)
      ], 34),
      c("div", {
        class: B(["cp-full-dot", t.position])
      }, [
        (n(!0), s(j, null, X(t.items, (V, O) => (n(), s("div", {
          onClick: (u) => Q(O),
          class: "cp-full-dot-item"
        }, [
          c("div", {
            class: B(["cp-full-dot-item-bg", { active: O === k.value }])
          }, null, 2),
          t.showTitle ? ge((n(), s("div", {
            key: 0,
            class: "show-dec"
          }, A(V.title), 513)), [
            [xe, O === k.value]
          ]) : T("", !0)
        ], 8, $t))), 256))
      ], 2)
    ]));
  }
}), Ct = /* @__PURE__ */ H(kt, [["__scopeId", "data-v-a87fdb91"]]), St = G(Ct), _t = ["src", "alt"], It = {
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
  setup(e, { emit: l }) {
    const t = e, a = l, i = _(null), o = _(null), r = _(null), h = _(!1), p = _(!1), y = _(!1), S = _(null), $ = _(null), v = z(() => t.intensity / 10), b = () => {
      h.value = !0, p.value = !1, setTimeout(() => {
        f(), t.triggerMode === "auto" ? V() : t.triggerMode === "random" && O();
      }, 0);
    }, M = () => {
      p.value = !0, h.value = !1, console.error("Failed to load image:", t.src);
    }, f = () => {
      if (!r.value || !o.value) return;
      const g = o.value, w = r.value, E = w.getContext("2d");
      if (E) {
        w.width = g.naturalWidth, w.height = g.naturalHeight;
        try {
          E.drawImage(g, 0, 0), $.value = E.getImageData(0, 0, w.width, w.height);
        } catch (R) {
          console.error("Failed to get image data (possibly CORS issue):", R), p.value = !0;
        }
      }
    }, I = (g, w) => {
      if (!$.value) return;
      const E = g.canvas, R = g.getImageData(0, 0, E.width, E.height), W = R.data, Y = $.value.data, P = Math.floor(20 * w), q = Math.floor(Math.random() * P), ae = Math.floor(Math.random() * P);
      for (let le = 0; le < E.height; le++)
        for (let ne = 0; ne < E.width; ne++) {
          const te = (le * E.width + ne) * 4, se = Math.min(Math.max(ne + q, 0), E.width - 1), Ce = (Math.min(Math.max(le + ae, 0), E.height - 1) * E.width + se) * 4;
          W[te] = Y[Ce];
          const Se = Math.min(Math.max(ne - q, 0), E.width - 1), _e = (Math.min(Math.max(le - ae, 0), E.height - 1) * E.width + Se) * 4;
          W[te + 2] = Y[_e + 2], W[te + 1] = Y[te + 1];
        }
      g.putImageData(R, 0, 0);
    }, k = (g, w) => {
      if (!$.value) return;
      const E = g.canvas;
      g.putImageData($.value, 0, 0);
      const R = Math.max(1, Math.floor(5 / w)), W = 0.5 + w * 0.1;
      for (let Y = 0; Y < E.height; Y += R * 2)
        g.fillStyle = `rgba(255, 255, 255, ${W})`, g.fillRect(0, Y, E.width, R);
    }, L = (g, w) => {
      if (!$.value) return;
      const E = g.canvas;
      g.putImageData($.value, 0, 0);
      const R = Math.max(4, Math.floor(w * 8));
      if (Math.random() > 0.5)
        for (let Y = 0; Y < E.height; Y += R)
          for (let P = 0; P < E.width; P += R) {
            const q = g.getImageData(P, Y, 1, 1).data;
            g.fillStyle = `rgb(${q[0]}, ${q[1]}, ${q[2]})`, g.fillRect(P, Y, R, R);
          }
      else {
        const Y = Math.floor(w * 3);
        for (let P = 0; P < Y; P++) {
          const q = Math.floor(Math.random() * (E.width - 50)), ae = Math.floor(Math.random() * (E.height - 50)), le = Math.floor(Math.random() * 100 * w) + 30, ne = Math.floor(Math.random() * 80 * w) + 20;
          for (let te = ae; te < ae + ne; te += R)
            for (let se = q; se < q + le; se += R)
              if (se < E.width && te < E.height) {
                const ve = g.getImageData(se, te, 1, 1).data;
                g.fillStyle = `rgb(${ve[0]}, ${ve[1]}, ${ve[2]})`, g.fillRect(se, te, R, R);
              }
        }
      }
    }, D = (g, w) => {
      if (!$.value) return;
      const E = g.canvas, R = g.getImageData(0, 0, E.width, E.height), W = R.data, Y = 0.2 + w * 0.05;
      for (let P = 0; P < W.length; P += 4)
        Math.random() < Y && (Math.random() > 0.5 ? (W[P] = 255, W[P + 1] = 255, W[P + 2] = 255) : (W[P] = Math.floor(Math.random() * 256), W[P + 1] = Math.floor(Math.random() * 256), W[P + 2] = Math.floor(Math.random() * 256)));
      g.putImageData(R, 0, 0);
    }, Q = (g, w) => {
      [...["rgb-shift", "scanline", "pixelate", "noise"]].sort(() => 0.5 - Math.random()).slice(0, 2 + Math.floor(Math.random() * 2)).forEach((Y) => {
        switch (Y) {
          case "rgb-shift":
            I(g, w);
            break;
          case "scanline":
            k(g, w);
            break;
          case "pixelate":
            L(g, w);
            break;
          case "noise":
            D(g, w);
            break;
        }
      });
    }, m = () => {
      if (!r.value || !$.value) return;
      const w = r.value.getContext("2d");
      if (w) {
        switch (w.putImageData($.value, 0, 0), t.glitchType) {
          case "rgb-shift":
            I(w, v.value);
            break;
          case "scanline":
            k(w, v.value);
            break;
          case "pixelate":
            L(w, v.value);
            break;
          case "noise":
            D(w, v.value);
            break;
          case "combined":
            Q(w, v.value);
            break;
        }
        y.value = !0, a("glitch-start");
      }
    }, N = () => {
      if (!r.value || !$.value) return;
      const w = r.value.getContext("2d");
      w && (w.putImageData($.value, 0, 0), y.value = !1, a("glitch-end"));
    }, V = () => {
      S.value && clearInterval(S.value), m(), t.animated && (S.value = window.setInterval(() => {
        m();
      }, t.interval));
    }, O = () => {
      S.value && clearInterval(S.value), S.value = window.setInterval(() => {
        Math.random() < 0.5 && (m(), setTimeout(() => {
          N();
        }, 200 + Math.random() * 300));
      }, t.interval);
    }, u = () => {
      S.value && (clearInterval(S.value), S.value = null), N();
    }, x = () => {
      t.triggerMode === "hover" && V();
    }, d = () => {
      t.triggerMode === "hover" && !t.animated && u();
    }, C = () => {
      t.triggerMode === "click" && (y.value ? u() : V());
    };
    return Z(() => [t.src, t.glitchType, t.intensity], () => {
      t.src && (h.value = !1, p.value = !1), y.value && m();
    }), ee(() => {
      o.value && o.value.complete && o.value.naturalHeight !== 0 && b();
    }), re(() => {
      S.value && clearInterval(S.value);
    }), (g, w) => (n(), s("div", {
      class: B(["cp-glitch-image", { animated: e.animated }]),
      onMouseenter: x,
      onMouseleave: d,
      onClick: C
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
          ref: o,
          class: "original-image",
          crossOrigin: "anonymous",
          onLoad: b,
          onError: M
        }, null, 40, _t),
        h.value && !p.value ? (n(), s("canvas", {
          key: 0,
          ref_key: "glitchCanvasRef",
          ref: r,
          class: "glitch-canvas"
        }, null, 512)) : T("", !0),
        !h.value && !p.value ? (n(), s("div", It, [...w[0] || (w[0] = [
          c("div", { class: "loading-text" }, "Loading...", -1)
        ])])) : T("", !0),
        p.value ? (n(), s("div", Mt, [...w[1] || (w[1] = [
          c("div", { class: "error-text" }, "Image Load Failed", -1)
        ])])) : T("", !0)
      ], 512)
    ], 34));
  }
}), Vt = /* @__PURE__ */ H(Tt, [["__scopeId", "data-v-b2947767"]]), Et = G(Vt), Bt = ["data-progress"], Lt = { class: "progress-container" }, zt = {
  key: 0,
  class: "progress-text"
}, Nt = /* @__PURE__ */ K({
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
    const l = e, t = _(null), a = _(null), i = z(() => l.direction === "vertical" ? "vertical" : "horizontal"), o = z(() => {
      const p = l.direction === "vertical" ? "height" : "width", y = l.indeterminate ? "100%" : `${l.progress}%`;
      return {
        [p]: y,
        backgroundColor: l.color,
        boxShadow: `0 0 ${l.glitchIntensity * 2}px ${l.color}`
      };
    }), r = () => {
      if (!t.value) return;
      const p = t.value.querySelector(".glitch-effect");
      if (!p) return;
      const y = () => {
        if (!p) return;
        if (Math.random() < l.glitchIntensity / 20) {
          const $ = Math.random() * l.glitchIntensity - l.glitchIntensity / 2, v = Math.random() * l.glitchIntensity - l.glitchIntensity / 2, b = Math.random() * l.glitchIntensity - l.glitchIntensity / 2, M = Math.random() * l.glitchIntensity / 2;
          p.style.transform = `translate(${$}px, ${v}px) skew(${b}deg)`, p.style.filter = `blur(${M}px)`, p.style.opacity = "1", setTimeout(() => {
            p && (p.style.transform = "translate(0, 0) skew(0)", p.style.filter = "blur(0)", p.style.opacity = "0");
          }, 150);
        }
      };
      a.value = window.setInterval(() => {
        y();
      }, 500);
    };
    let h = l.progress;
    return Z(() => l.progress, (p) => {
      if (p !== h) {
        if (t.value) {
          const y = t.value.querySelector(".glitch-effect");
          if (y) {
            const S = Math.random() * l.glitchIntensity * 2 - l.glitchIntensity, $ = Math.random() * l.glitchIntensity - l.glitchIntensity / 2;
            y.style.transform = `translate(${S}px, ${$}px)`, y.style.opacity = "1", setTimeout(() => {
              y && (y.style.transform = "translate(0, 0)", y.style.opacity = "0");
            }, 300);
          }
        }
        h = p;
      }
    }), ee(() => {
      r();
    }), re(() => {
      a.value && clearInterval(a.value);
    }), (p, y) => (n(), s("div", {
      class: B(["cp-glitch-progress", i.value, { indeterminate: e.indeterminate }]),
      "data-progress": e.progress
    }, [
      c("div", Lt, [
        c("div", {
          class: "progress-bar",
          style: F(o.value),
          ref_key: "progressBarRef",
          ref: t
        }, [...y[0] || (y[0] = [
          c("div", { class: "glitch-effect" }, null, -1)
        ])], 4),
        e.showText && !e.indeterminate ? (n(), s("div", zt, A(e.progress) + "% ", 1)) : T("", !0)
      ])
    ], 10, Bt));
  }
}), Ot = /* @__PURE__ */ H(Nt, [["__scopeId", "data-v-27854e11"]]), At = G(Ot), Dt = { class: "glow-text" }, Rt = /* @__PURE__ */ K({
  name: "CyberGlowText",
  __name: "glowText",
  props: {
    color: {
      type: String,
      default: "#e91e84"
    }
  },
  setup(e) {
    const l = e;
    return ee(() => {
      document.documentElement.style.setProperty("--child-color", l.color);
    }), (t, a) => (n(), s("div", Dt, [
      U(t.$slots, "default", {}, void 0, !0)
    ]));
  }
}), Pt = /* @__PURE__ */ H(Rt, [["__scopeId", "data-v-7d666f1f"]]), Kt = G(Pt), Ft = ["tabindex", "aria-disabled", "aria-label"], Ht = { class: "holo-card-content" }, Gt = {
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
    me((f) => ({
      v558892ac: a.hologramColor
    }));
    const l = Me(), t = ie(), a = e, i = _({ x: 0, y: 0 }), o = _(!1), p = ((f, I) => {
      let k;
      return function() {
        const L = arguments, D = l;
        k || (f.apply(D, L), k = !0, setTimeout(() => k = !1, I));
      };
    })((f) => {
      if (a.disabled) return;
      const I = f.currentTarget.getBoundingClientRect();
      i.value = {
        x: (f.clientX - I.left) / I.width * 2 - 1,
        y: (f.clientY - I.top) / I.height * 2 - 1
      }, o.value = !0;
    }, 16), y = () => {
      o.value = !1, i.value = { x: 0, y: 0 };
    }, S = () => {
      a.disabled || (o.value = !0, i.value = { x: 0, y: 0 });
    }, $ = z(() => [(() => {
      switch (a.type) {
        case "basic":
          return "basic-type";
        case "media":
          return "media-type";
        case "action":
          return "action-type";
        default:
          return "basic-type";
      }
    })()]), v = z(() => {
      const f = {};
      if (a.rounded || (f.borderRadius = "0"), a.disabled && (f.cursor = "not-allowed", f.opacity = "0.6"), !o.value || a.disabled) return f;
      const I = i.value.y * 10, k = -i.value.x * 10;
      return {
        ...f,
        transform: `perspective(1000px) rotateX(${I}deg) rotateY(${k}deg) scale3d(1.05, 1.05, 1.05)`,
        transition: "transform 0.1s ease"
      };
    }), b = z(() => {
      if (!o.value || a.disabled) return {};
      const f = Math.max(-50, Math.min(50, i.value.x * 10)), I = Math.max(-50, Math.min(50, i.value.y * 10));
      return {
        background: `radial-gradient(circle at ${50 + f}% ${50 + I}%, ${a.hologramColor}33, transparent 70%)`,
        opacity: 0.8,
        transition: "background 0.1s ease"
      };
    }), M = z(() => {
      const f = a.glowIntensity / 100;
      return {
        boxShadow: `0 0 ${10 + a.glowIntensity / 5}px ${a.hologramColor}${Math.floor(f * 99).toString(16).padStart(2, "0")}`,
        opacity: o.value && !a.disabled ? f : f * 0.5
      };
    });
    return ee(() => {
      pe(() => {
      });
    }), (f, I) => (n(), s("div", {
      class: B([
        "cp-holo-card",
        `depth-${e.depth}`,
        $.value,
        `theme-${e.theme}`,
        `effect-${e.effect}`
      ]),
      style: F(v.value),
      onMousemove: I[0] || (I[0] = //@ts-ignore
      (...k) => he(p) && he(p)(...k)),
      onMouseleave: y,
      onFocus: S,
      onBlur: y,
      tabindex: e.disabled ? -1 : 0,
      role: "button",
      "aria-disabled": e.disabled,
      "aria-label": e.title
    }, [
      c("div", Ht, [
        e.title && !he(t).title ? (n(), s("div", Gt, A(e.title), 1)) : T("", !0),
        U(f.$slots, "title", {}, void 0, !0),
        U(f.$slots, "default", {}, void 0, !0),
        U(f.$slots, "footer", {}, void 0, !0)
      ]),
      c("div", {
        class: "holo-card-hologram-effect",
        style: F(b.value)
      }, null, 4),
      c("div", {
        class: "holo-card-glow",
        style: F(M.value)
      }, null, 4)
    ], 46, Ft));
  }
}), Yt = /* @__PURE__ */ H(Wt, [["__scopeId", "data-v-fe164a1d"]]), jt = G(Yt), qt = { class: "loader-container" }, Xt = {
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
    me((p) => ({
      c40498b2: p.$props.color,
      v7f665050: t
    }));
    const l = e, t = (6 / l.speed).toString() + "s", a = z(() => {
      switch (l.size) {
        case "small":
          return "small-size";
        case "default":
          return "default-size";
        case "large":
          return "large-size";
        default:
          return "default-size";
      }
    }), i = _(""), o = _(0), r = _(null), h = () => {
      if (!l.text) return;
      o.value = 0, i.value = "";
      const p = () => {
        o.value < l.text.length ? (i.value += l.text[o.value], o.value++) : setTimeout(() => {
          o.value = 0, i.value = "";
        }, 1e3);
      }, y = 100 / l.speed;
      r.value = window.setInterval(p, y);
    };
    return Z(() => l.text, () => {
      r.value && clearInterval(r.value), h();
    }), ee(() => {
      h();
    }), re(() => {
      r.value && clearInterval(r.value);
    }), (p, y) => (n(), s("div", {
      class: B(["cp-holo-loader", a.value, { "transparent-bg": e.transparent }])
    }, [
      c("div", qt, [
        c("div", {
          class: B(["holo-projection", `type-${e.type}`])
        }, [
          e.type === "cube" || e.type === "split" ? (n(), s("div", Xt, [...y[0] || (y[0] = [
            Te('<div class="cube" data-v-6df1b911><div class="cube-face front" data-v-6df1b911></div><div class="cube-face back" data-v-6df1b911></div><div class="cube-face right" data-v-6df1b911></div><div class="cube-face left" data-v-6df1b911></div><div class="cube-face top" data-v-6df1b911></div><div class="cube-face bottom" data-v-6df1b911></div></div>', 1)
          ])])) : e.type === "sphere" ? (n(), s("div", Ut, [
            c("div", Qt, [
              (n(), s(j, null, X(3, (S) => c("div", {
                class: "sphere-ring",
                key: S
              })), 64))
            ])
          ])) : e.type === "datastream" ? (n(), s("div", Zt, [
            (n(), s(j, null, X(10, (S) => c("div", {
              class: "data-line",
              key: S
            })), 64))
          ])) : e.type === "circuit" ? (n(), s("div", Jt, [
            c("div", ea, [
              (n(), s(j, null, X(5, (S) => c("div", {
                class: "circuit-path",
                key: S
              })), 64)),
              (n(), s(j, null, X(6, (S) => c("div", {
                class: "circuit-node",
                key: S + 10
              })), 64))
            ])
          ])) : T("", !0)
        ], 2),
        e.text ? (n(), s("div", ta, [
          c("span", aa, A(i.value), 1),
          y[1] || (y[1] = c("span", { class: "cursor" }, "_", -1))
        ])) : T("", !0),
        y[2] || (y[2] = c("div", { class: "holo-base" }, [
          c("div", { class: "base-glow" })
        ], -1))
      ])
    ], 2));
  }
}), na = /* @__PURE__ */ H(la, [["__scopeId", "data-v-6df1b911"]]), sa = G(na), oa = { class: "header-row" }, ia = { class: "header-text" }, ra = { class: "cell-text" }, ca = {
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
    const l = e, t = _(null), a = _(!1), i = _(!0), o = _(1), r = _(0), h = _(!1), p = _(0), y = Ve([]);
    l.data.length > 0 && y.splice(0, y.length, ...l.data);
    let S = 0;
    const $ = () => `row-${++S}-${Date.now()}`, v = z(() => l.rowNum * l.rowHeight), b = z(() => v.value), M = z(() => {
      const u = y.length, x = l.rowNum;
      if (u === 0) return [];
      if (u <= x)
        return y.map((w, E) => ({
          key: w._uniqueKey || $(),
          data: w,
          index: E
        }));
      let d = [...y];
      u > x && u < 2 * x && (d = [...d, ...d]), d = d.map((w, E) => ({
        key: w._uniqueKey || $(),
        data: w,
        index: E,
        scroll: E
      }));
      let C = d.slice(r.value);
      return C.push(...d.slice(0, r.value)), C.slice(0, x);
    }), f = (u) => l.columns[u]?.width ? l.columns[u].width : "auto", I = (u) => u === "center" ? "center" : u === "right" ? "flex-end" : "flex-start", k = () => l.theme === "neon" ? "rgba(0, 230, 246, 0.15)" : l.theme === "hologram" ? "rgba(138, 43, 226, 0.2)" : l.theme === "terminal" ? "rgba(0, 255, 0, 0.15)" : l.theme === "matrix" ? "rgba(0, 255, 65, 0.15)" : "rgba(0, 230, 246, 0.15)", L = (u) => (r.value + u) % y.length % 2 === 0 ? "var(--table-row-bg)" : "var(--table-row-hover)", D = (u, x) => {
      const d = x.split(".");
      let C = u;
      for (const g of d)
        C = C?.[g];
      return C ?? "";
    }, Q = async () => {
      if (!(a.value || !i.value)) {
        a.value = !0;
        try {
          if (l.remoteMethod) {
            const u = await l.remoteMethod({
              page: o.value,
              size: l.bufferSize * 10
            });
            if (u.data && u.data.length > 0) {
              const x = u.data.map((d) => (d._uniqueKey || (d._uniqueKey = $()), d));
              o.value === 1 ? y.splice(0, y.length, ...x) : y.push(...x), l.data && l.data.splice(0, l.data.length, ...y);
            }
            i.value = u.hasMore ?? !1, o.value++;
          } else l.loadMore && await l.loadMore();
        } catch (u) {
          console.error("Failed to load more data:", u), i.value = !1;
        } finally {
          a.value = !1;
        }
      }
    }, m = async () => {
      if (!l.autoScroll || h.value) return;
      const u = y.length, x = l.rowNum;
      if (u <= x || (await new Promise((C) => setTimeout(C, l.waitTime)), h.value)) return;
      const d = async () => {
        if (h.value) return;
        const C = p.value, g = l.scrollType === "page" ? x : 1;
        r.value = (r.value + g) % u;
        const w = l.scrollType === "page" ? 500 : 300;
        await new Promise((E) => setTimeout(E, w)), !(p.value !== C || h.value) && (await new Promise((E) => setTimeout(E, l.waitTime)), !(p.value !== C || h.value) && d());
      };
      d();
    }, N = () => {
      p.value = (p.value + 1) % 999999;
    }, V = () => {
      l.hoverPause && (h.value = !0, N());
    }, O = () => {
      l.hoverPause && (h.value = !1, m());
    };
    return ee(() => {
      l.remoteMethod && y.length === 0 && Q(), l.autoScroll && m();
    }), (u, x) => (n(), s("div", {
      class: B(["cyber-infinite-table", [`theme-${e.theme}`, `scroll-${e.scrollType}`]])
    }, [
      c("div", {
        class: "table-header",
        style: F({ backgroundColor: k() })
      }, [
        c("div", oa, [
          (n(!0), s(j, null, X(e.columns, (d, C) => (n(), s("div", {
            key: d.field || C,
            class: "header-cell",
            style: F({
              width: f(C),
              minWidth: d.minWidth || "100px",
              textAlign: d.align || "left"
            })
          }, [
            c("div", {
              class: "header-content",
              style: F({ justifyContent: I(d.align || "left") })
            }, [
              c("span", ia, A(d.title), 1)
            ], 4)
          ], 4))), 128))
        ])
      ], 4),
      c("div", {
        class: "table-body",
        ref_key: "bodyRef",
        ref: t,
        onMouseenter: V,
        onMouseleave: O
      }, [
        c("div", {
          class: "rows-container",
          style: F({ height: b.value + "px" })
        }, [
          oe(we, { name: "scroll-list" }, {
            default: de(() => [
              (n(!0), s(j, null, X(M.value, (d) => (n(), s("div", {
                class: "table-row",
                key: d.key,
                style: F({
                  height: e.rowHeight + "px",
                  lineHeight: e.rowHeight + "px",
                  backgroundColor: L(d.index)
                })
              }, [
                (n(!0), s(j, null, X(e.columns, (C, g) => (n(), s("div", {
                  key: C.field || g,
                  class: "table-cell",
                  style: F({
                    width: f(g),
                    minWidth: C.minWidth || "100px",
                    justifyContent: I(C.align || "left")
                  })
                }, [
                  U(u.$slots, C.field, {
                    row: d.data,
                    column: C
                  }, () => [
                    c("span", ra, A(D(d.data, C.field)), 1)
                  ], !0)
                ], 4))), 128)),
                e.showScanline ? (n(), s("div", ca)) : T("", !0)
              ], 4))), 128))
            ]),
            _: 3
          })
        ], 4)
      ], 544),
      x[0] || (x[0] = c("div", { class: "table-border-effect" }, null, -1))
    ], 2));
  }
}), da = /* @__PURE__ */ H(ua, [["__scopeId", "data-v-41085088"]]), fa = G(da), va = /* @__PURE__ */ K({
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
  setup(e, { emit: l }) {
    ie();
    const t = e, a = z(() => {
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
    }), i = z(() => {
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
      c("div", {
        class: B(["button", a.value, t.bg ? "show-bg" : ""])
      }, [
        r[0] || (r[0] = c("div", { class: "border" }, null, -1)),
        r[1] || (r[1] = c("div", { class: "border" }, null, -1)),
        r[2] || (r[2] = c("div", { class: "border" }, null, -1)),
        r[3] || (r[3] = c("div", { class: "border" }, null, -1)),
        U(o.$slots, "default", {}, void 0, !0)
      ], 2)
    ], 2));
  }
}), ha = /* @__PURE__ */ H(va, [["__scopeId", "data-v-5d7945c0"]]), pa = G(ha), ma = ["aria-checked", "aria-disabled"], ga = { class: "toggle-thumb" }, ya = {
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
  setup(e, { emit: l }) {
    me((h) => ({
      v2ad8abbc: t.inActiveColor,
      v247239f2: t.activeColor
    }));
    const t = e, a = l, i = z(() => {
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
    }), o = z(() => {
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
      const h = !t.modelValue;
      a("update:modelValue", h), a("change", h);
    };
    return (h, p) => (n(), s("div", {
      class: B(["cp-neon-toggle", o.value, i.value, { active: e.modelValue, disabled: e.disabled }]),
      onClick: r,
      "aria-checked": e.modelValue,
      role: "switch",
      "aria-disabled": e.disabled
    }, [
      p[0] || (p[0] = c("div", { class: "toggle-track" }, [
        c("div", { class: "toggle-track-inner" }),
        c("div", { class: "circuit-lines" })
      ], -1)),
      c("div", ga, [
        e.pulseEffect && e.modelValue ? (n(), s("div", ya)) : T("", !0)
      ])
    ], 10, ma));
  }
}), wa = /* @__PURE__ */ H(ba, [["__scopeId", "data-v-799d9482"]]), xa = G(wa), $a = /* @__PURE__ */ K({
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
  setup(e, { emit: l }) {
    ie();
    const t = e, a = z(() => {
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
    }), i = z(() => {
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
      c("div", {
        class: B(["button", a.value, t.bg ? "show-bg" : ""])
      }, [
        U(o.$slots, "default", {}, void 0, !0)
      ], 2)
    ], 2));
  }
}), ka = /* @__PURE__ */ H($a, [["__scopeId", "data-v-d73343d5"]]), Ca = G(ka), Sa = ["data-word"], _a = /* @__PURE__ */ K({
  name: "CyberText",
  __name: "text",
  props: {
    lineColor: {
      type: String,
      default: "#0000"
    }
  },
  setup(e) {
    const l = _(""), t = ie();
    if (t && t.default) {
      let i = t.default();
      l.value = i[0].children;
    }
    const a = e;
    return (i, o) => (n(), s("div", {
      class: "cp-text",
      "data-word": l.value
    }, [
      U(i.$slots, "default", {}, void 0, !0),
      c("div", {
        class: "cp-text-line",
        style: F("background: " + a.lineColor)
      }, null, 4)
    ], 8, Sa));
  }
}), Ia = /* @__PURE__ */ H(_a, [["__scopeId", "data-v-ee14b82a"]]), Ma = G(Ia), Ta = /* @__PURE__ */ K({
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
    const l = e, t = (i, o) => {
      let r = `0px 0px ${i}`;
      for (let h = 1; h <= l.long; h++) {
        const p = a(i, h);
        r += `, ${o === "left" ? "-" : ""}${h}px ${h}px ${p}`;
      }
      return r;
    }, a = (i, o) => {
      const r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i.exec(i), h = /^rgba?\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})(,\s*([\d.]+))?\)$/i.exec(i);
      if (r) {
        const p = parseInt(r[1], 16), y = parseInt(r[2], 16), S = parseInt(r[3], 16), $ = r[4] ? parseInt(r[4], 16) / 255 : 1, v = Math.max(0, $ - o * 0.05);
        return `rgba(${p}, ${y}, ${S}, ${v})`;
      } else if (h) {
        const p = parseInt(h[1], 10), y = parseInt(h[2], 10), S = parseInt(h[3], 10), $ = h[5] ? parseFloat(h[5]) : 1, v = Math.max(0, $ - o * 0.05);
        return `rgba(${p}, ${y}, ${S}, ${v})`;
      } else
        throw new Error(`Unsupported color format: ${i}`);
    };
    return (i, o) => (n(), s("div", {
      class: B(["shadow-text", l.direction]),
      style: F({ textShadow: t(l.shadowColor, l.direction) })
    }, [
      U(i.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), Va = /* @__PURE__ */ H(Ta, [["__scopeId", "data-v-baec179b"]]), Ea = G(Va), Ba = { class: "cp-typing" }, La = { class: "content" }, za = /* @__PURE__ */ K({
  name: "CyberTyping",
  __name: "typing",
  setup(e) {
    return (l, t) => (n(), s("div", Ba, [
      c("div", La, [
        U(l.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), Na = /* @__PURE__ */ H(za, [["__scopeId", "data-v-c43f79f6"]]), Oa = G(Na), Aa = ["src", "alt", "loading", "crossorigin"], Da = {
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
    const l = /* @__PURE__ */ Object.assign({}), t = e, a = (v) => {
      if (v.startsWith("http://") || v.startsWith("https://") || v.startsWith("/"))
        return v;
      for (const [b, M] of Object.entries(l))
        if (b.includes(v) || v.includes(b.split("/").pop() || ""))
          return M;
      return v;
    }, i = _(!1), o = _(!1), r = _(""), h = z(() => {
      const v = {};
      return t.width !== "auto" && t.width !== void 0 && (v.width = typeof t.width == "number" ? `${t.width}px` : t.width), t.height !== "auto" && t.height !== void 0 && (v.height = typeof t.height == "number" ? `${t.height}px` : t.height), !v.width && !v.height && (v.display = "inline-block"), v;
    }), p = z(() => o.value && t.errorSrc ? `url(${t.errorSrc})` : r.value ? `url(${r.value})` : "none"), y = z(() => {
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
    }), S = () => {
      r.value = a(t.src), i.value = !0, o.value = !1;
    }, $ = () => {
      if (o.value = !0, t.errorSrc && t.errorSrc !== t.src) {
        const v = new Image();
        v.crossOrigin = t.crossorigin || "", v.src = a(t.errorSrc), v.onload = () => {
          r.value = a(t.errorSrc), i.value = !0;
        }, v.onerror = () => {
          i.value = !0;
        };
      } else
        i.value = !0;
    };
    return Z(() => t.src, () => {
      i.value = !1, o.value = !1, r.value = a(t.src);
    }, { immediate: !0 }), ee(() => {
      t.src && (r.value = a(t.src));
    }), (v, b) => (n(), s("div", {
      class: "cyber-image-wrapper",
      style: F(h.value)
    }, [
      e.src ? (n(), s("img", {
        key: 0,
        src: e.src,
        alt: e.alt,
        loading: e.loading,
        crossorigin: e.crossorigin,
        class: "hidden-image",
        onLoad: S,
        onError: $
      }, null, 40, Aa)) : T("", !0),
      c("div", {
        class: B(["glitch", {
          "is-loaded": i.value && !o.value,
          "is-loading": !i.value && !o.value,
          "is-error": o.value,
          "no-glitch": e.disableGlitch
        }]),
        style: F({
          backgroundImage: p.value,
          backgroundSize: y.value,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        })
      }, [
        i.value && !o.value && !e.disableGlitch ? (n(), s("div", {
          key: 0,
          class: "glitch-layer",
          style: F({ backgroundImage: p.value })
        }, null, 4)) : T("", !0),
        !i.value && e.placeholder ? (n(), s("div", Da, [
          U(v.$slots, "placeholder", {}, () => [
            c("img", {
              src: e.placeholder,
              alt: "Loading..."
            }, null, 8, Ra)
          ], !0)
        ])) : o.value ? (n(), s("div", Pa, [
          U(v.$slots, "error", {}, () => [
            fe(A(e.errorContent), 1)
          ], !0)
        ])) : T("", !0),
        i.value && !o.value ? U(v.$slots, "default", { key: 3 }, void 0, !0) : T("", !0)
      ], 6)
    ], 4));
  }
}), Fa = /* @__PURE__ */ H(Ka, [["__scopeId", "data-v-69e91b87"]]), Ha = G(Fa), Ga = { class: "cyber-magic-text" }, Wa = ["data-text"], Ya = /* @__PURE__ */ K({
  name: "CyberMagicText",
  __name: "magicText",
  setup(e) {
    const l = _(""), t = ie();
    if (t && t.default) {
      let a = t.default();
      l.value = a[0].children;
    }
    return (a, i) => (n(), s("div", Ga, [
      c("span", {
        class: "gradient-text",
        "data-text": l.value
      }, [
        U(a.$slots, "default")
      ], 8, Wa)
    ]));
  }
}), ja = G(Ya), qa = { class: "imgWrap" }, Xa = ["src"], Ua = /* @__PURE__ */ K({
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
    me((h) => ({
      v29922088: t.value + "px"
    }));
    const l = e, t = _(l.imgHeight);
    l.shadow && (t.value = l.imgHeight * 2);
    const a = _(l.imgList.length), i = o(l.imgWidth, 360 / a.value) * 1.6;
    function o(h, p) {
      const y = p * Math.PI / 180;
      return h / (2 * Math.sin(y / 2));
    }
    const r = (h) => {
      const p = 35 + (h + 1) * (360 / a.value), y = o(l.imgWidth, 360 / a.value);
      return {
        transform: `rotateY(${p}deg) translateZ(${y}px)`
      };
    };
    return (h, p) => (n(), s("div", {
      class: "container",
      style: F({
        "--container-width": `${i}px`,
        "--img-width": `${l.imgWidth}px`,
        "--img-height": `${l.imgHeight}px`
      })
    }, [
      c("div", {
        class: B(["stage", { "has-shadow": l.shadow }])
      }, [
        c("div", {
          class: "control",
          style: F({
            "--animation-duration": `${l.animationDuration}s`
          })
        }, [
          c("div", qa, [
            (n(!0), s(j, null, X(l.imgList, (y, S) => (n(), s("div", {
              key: S,
              class: "img",
              style: F(r(S))
            }, [
              c("img", { src: y }, null, 8, Xa)
            ], 4))), 128))
          ])
        ], 4)
      ], 2)
    ], 4));
  }
}), Qa = /* @__PURE__ */ H(Ua, [["__scopeId", "data-v-3d7f1970"]]), Za = G(Qa), Ja = ["aria-expanded", "aria-disabled"], el = { class: "select-value" }, tl = ["aria-label", "onClick"], al = {
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
  setup(e, { emit: l }) {
    const t = e, a = l, i = _(), o = _(), r = _(!1), h = _(""), p = z(() => t.showCheck !== void 0 ? t.showCheck : t.multiple), y = z(() => {
      const d = [], C = [];
      return t.options.forEach((g, w) => {
        Array.isArray(g.options) ? d.push({
          key: `group-${w}`,
          label: M(g),
          options: g.options
        }) : C.push(g);
      }), C.length && d.unshift({
        key: "default",
        label: "",
        options: C
      }), d;
    }), S = z(() => y.value.flatMap((d) => d.options)), $ = z(() => {
      const d = h.value.trim().toLowerCase();
      return d ? y.value.map((C) => ({
        ...C,
        options: C.options.filter((g) => M(g).toLowerCase().includes(d))
      })).filter((C) => C.options.length) : y.value;
    }), v = z(() => {
      const d = t.multiple ? Array.isArray(t.modelValue) ? t.modelValue : [] : Array.isArray(t.modelValue) ? [] : [t.modelValue ?? null];
      return S.value.filter((C) => d.some((g) => I(g, f(C))));
    }), b = z(() => t.multiple ? Array.isArray(t.modelValue) && t.modelValue.length > 0 : t.modelValue !== "" && t.modelValue !== null && t.modelValue !== void 0), M = (d) => {
      const C = d[t.labelKey] ?? d.label ?? d[t.valueKey] ?? d.value ?? "";
      return String(C);
    }, f = (d) => d[t.valueKey] ?? d.value ?? null, I = (d, C) => d === C, k = (d) => {
      const C = f(d);
      return t.multiple ? (Array.isArray(t.modelValue) ? t.modelValue : []).some((w) => I(w, C)) : I(t.modelValue, C);
    }, L = (d) => {
      t.disabled || r.value === d || (r.value = d, a("visible-change", d), d && t.filterable && pe(() => o.value?.focus()));
    }, D = () => {
      L(!r.value);
    }, Q = (d) => {
      if (t.disabled || d.disabled) return;
      const C = f(d);
      if (t.multiple) {
        const g = Array.isArray(t.modelValue) ? [...t.modelValue] : [], w = g.findIndex((R) => I(R, C));
        w > -1 ? g.splice(w, 1) : g.push(C);
        const E = S.value.filter((R) => g.some((W) => I(W, f(R))));
        a("update:modelValue", g), a("change", g, E);
        return;
      }
      a("update:modelValue", C), a("change", C, d), L(!1);
    }, m = (d) => {
      if (!t.multiple || t.disabled) return;
      const C = f(d), w = (Array.isArray(t.modelValue) ? [...t.modelValue] : []).filter((R) => !I(R, C)), E = S.value.filter((R) => w.some((W) => I(W, f(R))));
      a("update:modelValue", w), a("change", w, E);
    }, N = () => {
      const d = t.multiple ? [] : "";
      a("update:modelValue", d), a("change", d, t.multiple ? [] : void 0), a("clear"), h.value = "";
    }, V = (d) => {
      t.disabled || a("focus", d);
    }, O = (d) => {
      a("blur", d);
    }, u = (d) => {
      t.disabled || ((d.key === "Enter" || d.key === " ") && (r.value || (d.preventDefault(), L(!0))), d.key === "Escape" && L(!1));
    }, x = (d) => {
      i.value?.contains(d.target) || L(!1);
    };
    return Z(r, (d) => {
      d || (h.value = "");
    }), Z(() => t.multiple, (d) => {
      d && !Array.isArray(t.modelValue) && a("update:modelValue", []);
    }), ee(() => {
      document.addEventListener("click", x);
    }), $e(() => {
      document.removeEventListener("click", x);
    }), (d, C) => (n(), s("div", {
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
      c("div", {
        class: "select-control",
        tabindex: "0",
        role: "combobox",
        "aria-expanded": r.value,
        "aria-disabled": e.disabled,
        onClick: D,
        onFocus: V,
        onBlur: O,
        onKeydown: u
      }, [
        c("div", el, [
          e.multiple && v.value.length ? (n(!0), s(j, { key: 0 }, X(v.value, (g) => (n(), s("span", {
            key: String(f(g)),
            class: "select-tag",
            onClick: C[0] || (C[0] = J(() => {
            }, ["stop"]))
          }, [
            fe(A(M(g)) + " ", 1),
            c("button", {
              class: "tag-close",
              type: "button",
              "aria-label": `Remove ${M(g)}`,
              onClick: J((w) => m(g), ["stop"])
            }, null, 8, tl)
          ]))), 128)) : !e.multiple && v.value.length ? (n(), s("span", al, A(M(v.value[0])), 1)) : (n(), s("span", ll, A(e.placeholder), 1))
        ]),
        e.clearable && b.value && !e.disabled ? (n(), s("button", {
          key: 0,
          class: "clear-button",
          type: "button",
          "aria-label": "Clear selected value",
          onClick: J(N, ["stop"])
        })) : T("", !0),
        C[3] || (C[3] = c("span", { class: "select-arrow" }, null, -1))
      ], 40, Ja),
      oe(ye, { name: "select-dropdown" }, {
        default: de(() => [
          r.value ? (n(), s("div", nl, [
            e.filterable ? (n(), s("div", sl, [
              ge(c("input", {
                ref_key: "searchInputRef",
                ref: o,
                "onUpdate:modelValue": C[1] || (C[1] = (g) => h.value = g),
                type: "text",
                placeholder: e.searchPlaceholder,
                onClick: C[2] || (C[2] = J(() => {
                }, ["stop"])),
                onKeydown: u
              }, null, 40, ol), [
                [Ee, h.value]
              ])
            ])) : T("", !0),
            $.value.length ? (n(), s("div", il, [
              (n(!0), s(j, null, X($.value, (g) => (n(), s(j, {
                key: g.key
              }, [
                g.label ? (n(), s("div", rl, A(g.label), 1)) : T("", !0),
                (n(!0), s(j, null, X(g.options, (w) => (n(), s(j, null, [
                  w.divider ? (n(), s("div", {
                    class: "select-divider",
                    key: `divider-${w.key || Math.random()}`
                  })) : (n(), s("button", {
                    key: `${g.key}-${String(f(w))}`,
                    class: B(["select-option", {
                      selected: k(w),
                      disabled: w.disabled
                    }]),
                    type: "button",
                    disabled: w.disabled,
                    onClick: J((E) => Q(w), ["stop"])
                  }, [
                    p.value ? (n(), s("span", ul)) : T("", !0),
                    w.icon ? (n(), s("span", dl, [
                      (n(), ue(Be(w.icon)))
                    ])) : T("", !0),
                    c("span", fl, A(M(w)), 1),
                    w.shortcut ? (n(), s("span", vl, A(w.shortcut), 1)) : T("", !0)
                  ], 10, cl))
                ], 64))), 256))
              ], 64))), 128))
            ])) : (n(), s("div", hl, A(e.noDataText), 1))
          ])) : T("", !0)
        ]),
        _: 1
      })
    ], 2));
  }
}), ml = /* @__PURE__ */ H(pl, [["__scopeId", "data-v-f122bad9"]]), gl = G(ml), yl = { class: "cascader-tree" }, bl = ["disabled", "onClick"], wl = {
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
}, Sl = K({
  name: "CascaderOptionTree"
}), _l = /* @__PURE__ */ K({
  ...Sl,
  props: {
    options: {},
    selectedValues: {},
    multiple: { type: Boolean },
    labelKey: {},
    valueKey: {},
    childrenKey: {}
  },
  emits: ["select"],
  setup(e, { emit: l }) {
    const t = e, a = l, i = _(/* @__PURE__ */ new Set()), o = (v) => String(v[t.labelKey] ?? v.label ?? v[t.valueKey] ?? v.value ?? ""), r = (v) => v[t.valueKey] ?? v.value ?? "", h = (v) => {
      const b = v[t.childrenKey] ?? v.children;
      return Array.isArray(b) && b.length > 0;
    }, p = (v) => v[t.childrenKey] ?? v.children ?? [], y = (v) => {
      const b = r(v);
      return t.selectedValues.includes(b);
    }, S = (v) => {
      const b = r(v);
      return i.value.has(b);
    }, $ = (v) => {
      if (v.disabled) return;
      const b = r(v);
      if (h(v)) {
        const M = new Set(i.value);
        M.has(b) ? M.delete(b) : M.add(b), i.value = M;
      } else
        a("select", { option: v, value: b });
    };
    return (v, b) => {
      const M = ke("CascaderOptionTree");
      return n(), s("div", yl, [
        (n(!0), s(j, null, X(e.options, (f) => (n(), s("div", {
          key: String(r(f)),
          class: "cascader-menu-item"
        }, [
          c("button", {
            class: B(["cascader-option", {
              selected: y(f),
              disabled: f.disabled,
              "has-children": h(f),
              "is-expanded": S(f)
            }]),
            type: "button",
            disabled: f.disabled,
            onClick: J((I) => $(f), ["stop"])
          }, [
            e.multiple ? (n(), s("span", wl)) : T("", !0),
            c("span", xl, A(o(f)), 1),
            h(f) ? (n(), s("span", $l)) : T("", !0)
          ], 10, bl),
          h(f) && S(f) ? (n(), s("div", kl, [
            oe(M, {
              options: p(f),
              "selected-values": e.selectedValues,
              multiple: e.multiple,
              "label-key": e.labelKey,
              "value-key": e.valueKey,
              "children-key": e.childrenKey,
              onSelect: b[0] || (b[0] = (I) => v.$emit("select", I))
            }, null, 8, ["options", "selected-values", "multiple", "label-key", "value-key", "children-key"])
          ])) : T("", !0)
        ]))), 128)),
        !e.options || e.options.length === 0 ? (n(), s("div", Cl, " 暂无数据 ")) : T("", !0)
      ]);
    };
  }
}), Il = /* @__PURE__ */ H(_l, [["__scopeId", "data-v-561a8a0d"]]), Ml = ["aria-expanded", "aria-disabled"], Tl = { class: "cascader-value" }, Vl = ["aria-label", "onClick"], El = {
  key: 1,
  class: "cascader-single"
}, Bl = {
  key: 2,
  class: "cascader-placeholder"
}, Ll = { class: "cascader-options" }, zl = /* @__PURE__ */ K({
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
  setup(e, { emit: l }) {
    const t = e, a = l, i = _(), o = _(!1), r = _(""), h = _([]), p = z(() => t.multiple ? Array.isArray(t.modelValue) && t.modelValue.length > 0 : t.modelValue !== "" && t.modelValue !== null && t.modelValue !== void 0), y = (u) => {
      if (!t.showAllLevels) {
        const d = S(t.options, u);
        return d ? v(d) : String(u);
      }
      return $(t.options, u).map((d) => v(d)).join(" / ");
    }, S = (u, x) => {
      for (const d of u) {
        if (b(d) === x)
          return d;
        const C = M(d);
        if (C.length) {
          const g = S(C, x);
          if (g) return g;
        }
      }
      return null;
    }, $ = (u, x) => {
      for (const d of u) {
        if (b(d) === x)
          return [d];
        const C = M(d);
        if (C.length) {
          const g = $(C, x);
          if (g.length)
            return [d, ...g];
        }
      }
      return [];
    }, v = (u) => String(u[t.labelKey] ?? u.label ?? u[t.valueKey] ?? u.value ?? ""), b = (u) => u[t.valueKey] ?? u.value ?? "", M = (u) => u[t.childrenKey] ?? u.children ?? [], f = (u) => {
      t.disabled || o.value === u || (o.value = u, a("visible-change", u));
    }, I = () => {
      f(!o.value);
    }, k = ({ value: u }) => {
      if (!t.disabled)
        if (t.multiple) {
          const x = h.value.indexOf(u);
          x > -1 ? h.value.splice(x, 1) : h.value.push(u), a("update:modelValue", [...h.value]), a("change", [...h.value]);
        } else
          r.value = u, a("update:modelValue", u), a("change", u), f(!1);
    }, L = (u) => {
      t.multiple && (h.value = h.value.filter((x) => x !== u), a("update:modelValue", [...h.value]), a("change", [...h.value]));
    }, D = () => {
      t.multiple ? (h.value = [], a("update:modelValue", [])) : (r.value = "", a("update:modelValue", "")), a("change", t.multiple ? [] : ""), a("clear");
    }, Q = (u) => {
      t.disabled || a("focus", u);
    }, m = (u) => {
      a("blur", u);
    }, N = (u) => {
      t.disabled || ((u.key === "Enter" || u.key === " ") && (o.value || (u.preventDefault(), f(!0))), u.key === "Escape" && f(!1));
    }, V = (u) => {
      i.value?.contains(u.target) || f(!1);
    }, O = z(() => ({
      width: `${i.value?.offsetWidth || 260}px`
    }));
    return Z(() => t.modelValue, (u) => {
      t.multiple ? h.value = Array.isArray(u) ? [...u] : [] : r.value = u;
    }, { immediate: !0 }), ee(() => {
      document.addEventListener("click", V);
    }), $e(() => {
      document.removeEventListener("click", V);
    }), (u, x) => (n(), s("div", {
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
      c("div", {
        class: "cascader-control",
        tabindex: "0",
        role: "combobox",
        "aria-expanded": o.value,
        "aria-disabled": e.disabled,
        onClick: I,
        onFocus: Q,
        onBlur: m,
        onKeydown: N
      }, [
        c("div", Tl, [
          e.multiple && h.value.length ? (n(!0), s(j, { key: 0 }, X(h.value, (d, C) => (n(), s("span", {
            key: C,
            class: "cascader-tag"
          }, [
            fe(A(y(d)) + " ", 1),
            c("button", {
              class: "tag-close",
              type: "button",
              "aria-label": `移除 ${y(d)}`,
              onClick: J((g) => L(d), ["stop"])
            }, null, 8, Vl)
          ]))), 128)) : !e.multiple && r.value ? (n(), s("span", El, A(y(r.value)), 1)) : (n(), s("span", Bl, A(e.placeholder), 1))
        ]),
        e.clearable && p.value && !e.disabled ? (n(), s("button", {
          key: 0,
          class: "clear-button",
          type: "button",
          "aria-label": "清空",
          onClick: J(D, ["stop"])
        })) : T("", !0),
        x[0] || (x[0] = c("span", { class: "cascader-arrow" }, null, -1))
      ], 40, Ml),
      oe(ye, { name: "cascader-dropdown" }, {
        default: de(() => [
          o.value ? (n(), s("div", {
            key: 0,
            class: "cascader-dropdown",
            style: F(O.value)
          }, [
            c("div", Ll, [
              oe(Il, {
                options: t.options,
                "selected-values": e.multiple ? h.value : [r.value],
                multiple: e.multiple,
                "label-key": e.labelKey,
                "value-key": e.valueKey,
                "children-key": e.childrenKey,
                onSelect: k
              }, null, 8, ["options", "selected-values", "multiple", "label-key", "value-key", "children-key"])
            ])
          ], 4)) : T("", !0)
        ]),
        _: 1
      })
    ], 2));
  }
}), Nl = /* @__PURE__ */ H(zl, [["__scopeId", "data-v-46b8205f"]]), Ol = G(Nl), Al = {
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
}, ce = 14, jl = /* @__PURE__ */ K({
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
  setup(e, { expose: l, emit: t }) {
    const a = e, i = t, o = _([]), r = _([]), h = _(0), p = z(() => {
      const m = [], N = (V, O = 0, u) => {
        V.forEach((x, d) => {
          x._level = O, x._parent = u, x._expanded = x.expanded ?? (a.defaultExpandAll || O === 0), x._selected = x.selected ?? !1, x._isLastChild = d === V.length - 1, m.push(x), x._expanded && x.children && x.children.length > 0 && N(x.children, O + 1, x);
        });
      };
      return N(o.value), m;
    }), y = () => {
      const m = (N, V = 0) => {
        const O = {
          ...N,
          _expanded: N.expanded ?? (a.defaultExpandAll || V === 0),
          _selected: N.selected ?? !1,
          _level: V,
          _parent: void 0,
          _isLastChild: !1
        };
        return N.children && N.children.length > 0 && (O.children = N.children.map((u) => m(u, V + 1))), O;
      };
      o.value = a.data.map((N) => m(N)), r.value = p.value.filter((N) => N._selected);
    }, S = (m) => !m.children || m.children.length === 0, $ = (m) => m._level ?? 0, v = (m) => $(m) * a.indent, b = (m) => {
      const N = $(m);
      return Array.from({ length: Math.max(N - 1, 0) }, (V, O) => O);
    }, M = (m, N) => {
      let V = m, O = $(m);
      for (; V && O > N; )
        V = V._parent, O--;
      return V?._isLastChild ?? !1;
    }, f = (m) => {
      m._expanded = !m._expanded, m.expanded = m._expanded, m._expanded ? i("node-expand", m) : i("node-collapse", m), Q();
    }, I = (m) => {
      a.multiple ? (m._selected = !m._selected, m.selected = m._selected) : m._selected ? (m._selected = !1, m.selected = !1) : (r.value.forEach((N) => {
        N._selected = !1, N.selected = !1;
      }), m._selected = !0, m.selected = !0), k(), i("select-change", r.value), i("node-click", m), a.expandOnClick && !S(m) && f(m);
    }, k = () => {
      r.value = p.value.filter((m) => m._selected);
    }, L = (m) => m.icon ? m.icon : S(m) ? "icon-file" : m._expanded ? "icon-folder-open" : "icon-folder", D = (m) => m ? {
      online: "Online",
      offline: "Offline",
      warning: "Warning",
      error: "Error"
    }[m] : "", Q = () => {
      h.value++;
    };
    return Z(() => a.data, () => {
      y();
    }, { deep: !0, immediate: !0 }), l({
      getSelectedNodes: () => r.value,
      clearSelection: () => {
        r.value.forEach((m) => {
          m._selected = !1, m.selected = !1;
        }), r.value = [], Q();
      }
    }), (m, N) => (n(), s("div", {
      class: B(["cp-cyber-tree cyber-tree", [`theme-${e.theme}`, `effect-${e.effect}`]])
    }, [
      (n(!0), s(j, null, X(p.value, (V) => (n(), s("div", {
        key: `${V.id}-${V._expanded}-${V._selected}-${h.value}`,
        class: B(["tree-node", {
          expanded: V._expanded,
          leaf: S(V),
          "last-child": V._isLastChild
        }]),
        style: F({ paddingLeft: `${v(V)}px` })
      }, [
        e.showConnectors && $(V) > 0 ? (n(), s("div", Al, [
          (n(!0), s(j, null, X(b(V), (O) => (n(), s("span", {
            key: O,
            class: B(["ancestor-line", { hidden: M(V, O) }]),
            style: F({ left: `${O * e.indent + ce}px` })
          }, null, 6))), 128)),
          c("span", {
            class: B(["parent-line", { "is-last": V._isLastChild }]),
            style: F({ left: `${($(V) - 1) * e.indent + ce}px` })
          }, null, 6),
          c("span", {
            class: "horizontal-line",
            style: F({
              left: `${($(V) - 1) * e.indent + ce}px`,
              width: `${e.indent - ce + 20}px`
            })
          }, null, 4),
          c("span", {
            class: "connector-joint",
            style: F({ left: `${($(V) - 1) * e.indent + ce}px` })
          }, null, 4)
        ])) : T("", !0),
        c("div", {
          class: "node-content-wrapper",
          onClick: J((O) => I(V), ["stop"])
        }, [
          c("div", {
            class: B(["node-content", { selected: V._selected }])
          }, [
            S(V) ? (n(), s("span", Pl)) : (n(), s("button", {
              key: 0,
              class: "node-expand-icon",
              type: "button",
              "aria-expanded": V._expanded,
              "aria-label": V._expanded ? "Collapse node" : "Expand node",
              onClick: J((O) => f(V), ["stop"])
            }, [
              c("span", {
                class: B(["expand-arrow", { rotated: V._expanded }])
              }, null, 2)
            ], 8, Rl)),
            c("span", {
              class: B(["node-icon", L(V)])
            }, [...N[0] || (N[0] = [
              c("span", { class: "icon-core" }, null, -1)
            ])], 2),
            c("span", Kl, [
              c("span", Fl, A(V.label), 1)
            ]),
            e.showStatus && V.status ? (n(), s("span", {
              key: 2,
              class: "node-status",
              title: D(V.status)
            }, [
              c("span", {
                class: B(["status-indicator", `status-${V.status}`])
              }, null, 2),
              c("span", Gl, A(V.status), 1)
            ], 8, Hl)) : T("", !0)
          ], 2)
        ], 8, Dl)
      ], 6))), 128)),
      p.value.length === 0 ? (n(), s("div", Wl, " No data ")) : T("", !0),
      e.showScanline && e.effect !== "static" ? (n(), s("div", Yl)) : T("", !0)
    ], 2));
  }
}), ql = /* @__PURE__ */ H(jl, [["__scopeId", "data-v-4cbff7be"]]), Xl = G(ql), Ul = {
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
    const l = e, t = z(() => {
      const a = {};
      return l.size && (l.direction === "horizontal" ? a.width = l.size : a.height = l.size), a;
    });
    return (a, i) => (n(), s("div", {
      class: B(["cp-divider", [`cp-divider--${e.direction}`, `cp-divider--${e.type}`]]),
      style: F(t.value)
    }, [
      e.showLeftLine ? (n(), s("div", Ul)) : T("", !0),
      a.$slots.default || e.content ? (n(), s("div", Ql, [
        U(a.$slots, "default", {}, () => [
          fe(A(e.content), 1)
        ], !0)
      ])) : T("", !0),
      e.showRightLine ? (n(), s("div", Zl)) : T("", !0)
    ], 6));
  }
}), en = /* @__PURE__ */ H(Jl, [["__scopeId", "data-v-e3e2783b"]]), tn = G(en), an = { class: "cp-input-wrapper" }, ln = {
  key: 0,
  class: "cp-input-prefix"
}, nn = ["type", "value", "placeholder", "disabled", "readonly", "maxlength", "autocomplete"], sn = {
  key: 0,
  viewBox: "0 0 24 24",
  class: "cp-input-icon"
}, on = {
  key: 1,
  viewBox: "0 0 24 24",
  class: "cp-input-icon"
}, rn = {
  key: 3,
  class: "cp-input-suffix"
}, cn = {
  key: 4,
  class: "cp-input-scanline"
}, un = {
  key: 0,
  class: "cp-input-glitch"
}, dn = /* @__PURE__ */ K({
  name: "CyberInput",
  __name: "input",
  props: {
    modelValue: { default: "" },
    type: { default: "text" },
    placeholder: { default: "请输入..." },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    maxlength: { default: void 0 },
    autocomplete: { default: "off" },
    size: { default: "default" },
    theme: { default: "primary" },
    glitchEffect: { type: Boolean, default: !0 },
    scanlineEffect: { type: Boolean, default: !0 },
    clearable: { type: Boolean, default: !1 },
    showPassword: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "input", "change", "focus", "blur", "keyup", "keydown", "clear"],
  setup(e, { expose: l, emit: t }) {
    const a = e, i = t, o = _(null), r = _(!1), h = _(!1), p = _(""), y = z(() => a.type === "password" && h.value ? "text" : a.type), S = () => {
      h.value = !h.value;
    }, $ = (k) => {
      const L = k.target;
      i("update:modelValue", L.value), i("input", L.value);
    }, v = (k) => {
      r.value = !0, p.value = a.modelValue ?? "", i("focus", k);
    }, b = (k) => {
      r.value = !1, a.modelValue !== p.value && i("change", a.modelValue ?? ""), i("blur", k);
    }, M = (k) => {
      i("keyup", k);
    }, f = (k) => {
      i("keydown", k);
    }, I = () => {
      i("update:modelValue", ""), i("input", ""), i("change", ""), i("clear"), o.value?.focus();
    };
    return l({
      focus: () => {
        o.value?.focus();
      },
      blur: () => {
        o.value?.blur();
      },
      select: () => {
        o.value?.select();
      },
      clear: () => {
        I();
      },
      ref: o
    }), (k, L) => (n(), s("div", {
      class: B([
        "cp-input",
        `cp-input--${e.size}`,
        `cp-input--${e.theme}`,
        {
          "cp-input--disabled": e.disabled,
          "cp-input--focused": r.value,
          "cp-input--has-value": e.modelValue !== "" && e.modelValue != null
        }
      ])
    }, [
      c("div", an, [
        k.$slots.prefix ? (n(), s("span", ln, [
          U(k.$slots, "prefix", {}, void 0, !0)
        ])) : T("", !0),
        c("input", {
          ref_key: "inputRef",
          ref: o,
          type: y.value,
          value: e.modelValue,
          placeholder: e.placeholder,
          disabled: e.disabled,
          readonly: e.readonly,
          maxlength: e.maxlength,
          autocomplete: e.autocomplete,
          class: "cp-input-inner",
          onInput: $,
          onFocus: v,
          onBlur: b,
          onKeyup: M,
          onKeydown: f
        }, null, 40, nn),
        e.clearable && e.modelValue && !e.disabled ? (n(), s("span", {
          key: 1,
          class: "cp-input-clear",
          onMousedown: J(I, ["prevent"])
        }, [...L[0] || (L[0] = [
          c("svg", {
            viewBox: "0 0 16 16",
            class: "cp-input-icon"
          }, [
            c("path", { d: "M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" })
          ], -1)
        ])], 32)) : T("", !0),
        e.type === "password" && e.showPassword ? (n(), s("span", {
          key: 2,
          class: "cp-input-password-toggle",
          onMousedown: J(S, ["prevent"])
        }, [
          h.value ? (n(), s("svg", sn, [...L[1] || (L[1] = [
            c("path", { d: "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" }, null, -1)
          ])])) : (n(), s("svg", on, [...L[2] || (L[2] = [
            c("path", { d: "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5z" }, null, -1),
            c("line", {
              x1: "1.5",
              y1: "1.5",
              x2: "22.5",
              y2: "22.5",
              stroke: "currentColor",
              "stroke-width": "2"
            }, null, -1)
          ])]))
        ], 32)) : T("", !0),
        k.$slots.suffix ? (n(), s("span", rn, [
          U(k.$slots, "suffix", {}, void 0, !0)
        ])) : T("", !0),
        e.scanlineEffect ? (n(), s("div", cn)) : T("", !0)
      ]),
      e.glitchEffect ? (n(), s("div", un)) : T("", !0)
    ], 2));
  }
}), fn = /* @__PURE__ */ H(dn, [["__scopeId", "data-v-8f17d18a"]]), vn = G(fn), hn = ["tabindex", "aria-disabled", "aria-expanded"], pn = {
  key: 0,
  class: "cp-menu-item-indicator"
}, mn = {
  key: 1,
  class: "cp-menu-item-icon"
}, gn = { class: "cp-menu-item-label" }, yn = {
  key: 2,
  class: "cp-menu-item-arrow"
}, bn = /* @__PURE__ */ K({
  name: "CyberMenuItem",
  __name: "menu-item",
  props: {
    item: {},
    depth: {},
    direction: {},
    activeValue: {},
    expandedValues: {}
  },
  emits: ["select", "toggle-expand", "expand", "collapse"],
  setup(e, { emit: l }) {
    const t = e, a = l, i = _(!1), o = _(null), r = z(() => !!(t.item.children && t.item.children.length > 0)), h = z(() => t.activeValue === t.item.value), p = z(() => t.expandedValues.includes(t.item.value)), y = (f) => {
      t.item.disabled || (f.stopPropagation(), r.value ? a("toggle-expand", t.item.value) : a("select", t.item));
    }, S = () => {
      t.item.disabled || (i.value = !0, M(), t.direction === "horizontal" && r.value && a("expand", t.item.value));
    }, $ = () => {
      i.value = !1, t.direction === "horizontal" && r.value && (o.value = setTimeout(() => {
        a("collapse", t.item.value);
      }, 180));
    }, v = () => {
      M();
    }, b = () => {
      t.direction === "horizontal" && r.value && (o.value = setTimeout(() => {
        a("collapse", t.item.value);
      }, 150));
    }, M = () => {
      o.value && (clearTimeout(o.value), o.value = null);
    };
    return (f, I) => {
      const k = ke("CyberMenuItem");
      return n(), s("li", {
        class: B([
          "cp-menu-item",
          `cp-menu-item--depth-${e.depth}`,
          {
            "is-active": h.value,
            "is-disabled": e.item.disabled,
            "has-children": r.value,
            "is-expanded": p.value,
            "is-horizontal": e.direction === "horizontal",
            "is-vertical": e.direction === "vertical"
          }
        ]),
        onMouseenter: S,
        onMouseleave: $
      }, [
        c("div", {
          class: B(["cp-menu-item-content", { "cp-menu-item-content--active": h.value }]),
          onClick: y,
          tabindex: e.item.disabled ? -1 : 0,
          "aria-disabled": e.item.disabled,
          "aria-expanded": r.value ? p.value : void 0
        }, [
          h.value && e.depth === 0 ? (n(), s("span", pn)) : T("", !0),
          e.item.icon ? (n(), s("span", mn, [
            c("i", {
              class: B(e.item.icon)
            }, null, 2)
          ])) : T("", !0),
          c("span", gn, A(e.item.label), 1),
          r.value ? (n(), s("span", yn, [...I[4] || (I[4] = [
            c("svg", {
              viewBox: "0 0 16 16",
              class: "cp-menu-item-arrow-icon"
            }, [
              c("path", {
                d: "M5.5 2.5 L10.5 8 L5.5 13.5",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
              })
            ], -1)
          ])])) : T("", !0)
        ], 10, hn),
        oe(ye, { name: "cp-submenu" }, {
          default: de(() => [
            r.value && p.value ? (n(), s("ul", {
              key: 0,
              class: B(["cp-submenu-list", `cp-submenu-list--depth-${e.depth + 1}`]),
              onMouseenter: v,
              onMouseleave: b
            }, [
              (n(!0), s(j, null, X(e.item.children, (L) => (n(), ue(k, {
                key: L.value,
                item: L,
                depth: e.depth + 1,
                direction: e.direction,
                "active-value": e.activeValue,
                "expanded-values": e.expandedValues,
                onSelect: I[0] || (I[0] = (D) => a("select", D)),
                onToggleExpand: I[1] || (I[1] = (D) => a("toggle-expand", D)),
                onExpand: I[2] || (I[2] = (D) => a("expand", D)),
                onCollapse: I[3] || (I[3] = (D) => a("collapse", D))
              }, null, 8, ["item", "depth", "direction", "active-value", "expanded-values"]))), 128))
            ], 34)) : T("", !0)
          ]),
          _: 1
        })
      ], 34);
    };
  }
}), wn = /* @__PURE__ */ H(bn, [["__scopeId", "data-v-0a500770"]]), xn = { class: "cp-cyber-menu-list" }, $n = {
  key: 0,
  class: "cp-cyber-menu-scanline"
}, kn = /* @__PURE__ */ K({
  name: "CyberMenu",
  __name: "menu",
  props: {
    modelValue: { default: "" },
    items: { default: () => [] },
    direction: { default: "vertical" },
    theme: { default: "neon" },
    effect: { default: "none" },
    expandedValues: { default: () => [] }
  },
  emits: ["update:modelValue", "change", "select", "update:expandedValues"],
  setup(e, { emit: l }) {
    const t = e, a = l, i = _(t.modelValue), o = _([...t.expandedValues]), r = _([...t.items]), h = ($) => {
      i.value = $.value, a("update:modelValue", $.value), a("change", $.value), a("select", $);
    }, p = ($) => {
      t.direction === "horizontal" ? o.value = [$] : o.value.includes($) || (o.value = [...o.value, $]), a("update:expandedValues", [...o.value]);
    }, y = ($) => {
      o.value = o.value.filter((v) => v !== $), a("update:expandedValues", [...o.value]);
    }, S = ($) => {
      const v = [...o.value], b = v.indexOf($);
      b > -1 ? v.splice(b, 1) : (t.direction === "horizontal" && (v.length = 0), v.push($)), o.value = v, a("update:expandedValues", [...v]);
    };
    return Z(() => t.modelValue, ($) => {
      i.value = $;
    }), Z(() => t.items, ($) => {
      r.value = [...$];
    }, { deep: !0, immediate: !0 }), Z(() => t.expandedValues, ($) => {
      o.value = [...$];
    }, { deep: !0, immediate: !0 }), ($, v) => (n(), s("div", {
      class: B([
        "cp-cyber-menu",
        `cp-cyber-menu--${e.direction}`,
        `cp-cyber-menu--${e.theme}`,
        {
          [`cp-cyber-menu--${e.effect}`]: e.effect !== "none"
        }
      ])
    }, [
      c("ul", xn, [
        (n(!0), s(j, null, X(r.value, (b) => (n(), ue(wn, {
          key: b.value,
          item: b,
          depth: 0,
          direction: e.direction,
          "active-value": i.value,
          "expanded-values": o.value,
          onSelect: h,
          onToggleExpand: S,
          onExpand: p,
          onCollapse: y
        }, null, 8, ["item", "direction", "active-value", "expanded-values"]))), 128))
      ]),
      e.effect === "scanline" ? (n(), s("div", $n)) : T("", !0)
    ], 2));
  }
}), Cn = /* @__PURE__ */ H(kn, [["__scopeId", "data-v-69f0c141"]]), Sn = G(Cn), _n = [
  De,
  Xe,
  et,
  ct,
  wt,
  Et,
  At,
  jt,
  sa,
  fa,
  xa,
  pa,
  Ca,
  Ma,
  Ea,
  Kt,
  Oa,
  St,
  Ha,
  ja,
  gl,
  Ol,
  Xl,
  Za,
  tn,
  vn,
  Sn
], In = Le([..._n]);
console.log(
  "%c %s",
  "border: 1px solid #97E3FE;border-radius: 3px;padding: 2px 5px;color: white;font-weight:bolder;background: linear-gradient(to right, #fF717F,#CC54D1,#4EAFFA,#3DE1C3, #F7DA66)",
  "CyberPunk-UI"
);
const Vn = In.install;
export {
  In as default,
  Vn as install,
  Le as makeInstaller
};
