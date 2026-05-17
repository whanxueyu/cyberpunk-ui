import { defineComponent as H, useSlots as oe, computed as O, openBlock as n, createElementBlock as o, normalizeClass as B, createElementVNode as i, unref as ue, renderSlot as X, toDisplayString as D, ref as C, onUnmounted as re, createBlock as me, Teleport as ye, createVNode as he, TransitionGroup as be, withCtx as ge, Fragment as K, renderList as U, createCommentVNode as z, normalizeStyle as V, watch as J, nextTick as de, onMounted as ee, withDirectives as pe, createTextVNode as fe, vShow as we, watchEffect as ke, useCssVars as ve, getCurrentInstance as Ce, createStaticVNode as Se, reactive as Ie, onBeforeUnmount as Me, withModifiers as ne, Transition as Te, vModelText as Ee } from "vue";
const Ne = (e = []) => ({
  install: (t) => {
    e.forEach((s) => t.use(s));
  }
}), G = (e, a) => (e.install = (t) => {
  for (const s of [e, ...Object.values({})])
    t.component(s.name, s);
}, e), Le = ["data-content"], Be = { key: 1 }, ze = /* @__PURE__ */ H({
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
    const t = oe(), s = e, c = O(() => {
      switch (s.type) {
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
    }), r = O(() => {
      switch (s.size) {
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
    return (u, g) => (n(), o("div", {
      class: B(["cp-button", r.value])
    }, [
      i("div", {
        class: B(["button", c.value]),
        "data-content": s.content
      }, [
        ue(t) ? X(u.$slots, "default", { key: 0 }, void 0, !0) : (n(), o("span", Be, D(s.content), 1))
      ], 10, Le)
    ], 2));
  }
}), W = (e, a) => {
  const t = e.__vccOpts || e;
  for (const [s, c] of a)
    t[s] = c;
  return t;
}, Oe = /* @__PURE__ */ W(ze, [["__scopeId", "data-v-c3d9b67f"]]), Re = G(Oe), De = { class: "notification-content" }, Ae = {
  key: 0,
  class: "notification-icon"
}, Ve = { class: "notification-body" }, Pe = {
  key: 0,
  class: "notification-title"
}, Fe = { class: "notification-message" }, He = {
  key: 1,
  class: "notification-actions"
}, Ge = ["onClick"], We = ["onClick"], Ye = /* @__PURE__ */ H({
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
    const s = e, c = t, r = C([]), u = C(!1);
    let g = 0;
    const v = (_) => {
      const I = ++g, f = _.actions && _.actions.length > 0, E = {
        id: I,
        title: _.title || "",
        message: _.message,
        type: _.type || "info",
        duration: _.duration !== void 0 ? _.duration : f ? 0 : s.duration,
        showClose: _.showClose !== void 0 ? _.showClose : !0,
        showIcon: _.showIcon !== void 0 ? _.showIcon : !0,
        actions: _.actions || [],
        effect: _.effect || s.effect,
        onClose: _.onClose || (() => {
        })
      };
      if (r.value.push(E), u.value = !0, E.duration > 0 && setTimeout(() => {
        p(I);
      }, E.duration), r.value.length > s.maxCount) {
        const $ = r.value[0];
        p($.id);
      }
      return I;
    }, p = (_) => {
      const I = r.value.findIndex((f) => f.id === _);
      if (I !== -1) {
        const f = r.value[I];
        f.onClose && f.onClose(), r.value.splice(I, 1), c("close", _);
      }
    }, k = (_, I) => {
      I.callback && I.callback(), p(_.id);
    }, T = () => {
      r.value.length === 0 && (u.value = !1);
    }, w = () => {
      r.value.forEach((_) => {
        _.onClose && _.onClose();
      }), r.value = [], u.value = !1;
    };
    return a({
      // 创建不同类型的通知
      info: (_) => v({ ..._, type: "info" }),
      success: (_) => v({ ..._, type: "success" }),
      warning: (_) => v({ ..._, type: "warning" }),
      error: (_) => v({ ..._, type: "error" }),
      // 通用创建方法
      create: v,
      // 关闭方法
      close: p,
      // 清除所有
      clearAll: w
    }), re(() => {
      w();
    }), (_, I) => (n(), me(ye, { to: "body" }, [
      u.value ? (n(), o("div", {
        key: 0,
        class: B(["cp-cyber-notification-container", `position-${e.position}`])
      }, [
        he(be, {
          name: "notification",
          tag: "div",
          onAfterLeave: T
        }, {
          default: ge(() => [
            (n(!0), o(K, null, U(r.value, (f) => (n(), o("div", {
              key: f.id,
              class: B(["cp-cyber-notification", `type-${f.type}`, `effect-${f.effect}`])
            }, [
              i("div", De, [
                f.showIcon ? (n(), o("div", Ae, [...I[0] || (I[0] = [
                  i("div", { class: "icon-circle" }, null, -1),
                  i("div", { class: "icon-symbol" }, null, -1)
                ])])) : z("", !0),
                i("div", Ve, [
                  f.title ? (n(), o("div", Pe, D(f.title), 1)) : z("", !0),
                  i("div", Fe, D(f.message), 1),
                  f.actions && f.actions.length ? (n(), o("div", He, [
                    (n(!0), o(K, null, U(f.actions, (E, $) => (n(), o("button", {
                      key: $,
                      class: "action-button",
                      onClick: (P) => k(f, E)
                    }, D(E.text), 9, Ge))), 128))
                  ])) : z("", !0)
                ]),
                f.showClose ? (n(), o("div", {
                  key: 1,
                  class: "notification-close",
                  onClick: (E) => p(f.id)
                }, [...I[1] || (I[1] = [
                  i("span", { class: "close-icon" }, "×", -1)
                ])], 8, We)) : z("", !0)
              ]),
              f.duration > 0 ? (n(), o("div", {
                key: 0,
                class: "notification-progress",
                style: V({ animationDuration: `${f.duration}ms` })
              }, null, 4)) : z("", !0),
              I[2] || (I[2] = i("div", { class: "notification-glitch-effect" }, null, -1)),
              I[3] || (I[3] = i("div", { class: "notification-hologram-effect" }, null, -1))
            ], 2))), 128))
          ]),
          _: 1
        })
      ], 2)) : z("", !0)
    ]));
  }
}), qe = /* @__PURE__ */ W(Ye, [["__scopeId", "data-v-5b833339"]]), je = G(qe), Ke = { class: "tooltip-inner" }, Xe = { class: "tooltip-content" }, Ue = /* @__PURE__ */ H({
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
    const t = e, s = a, c = C(!1), r = C(null), u = C(null), g = C(null), v = C(t.position), p = C({}), k = () => {
      if (!r.value || !u.value || t.position !== "auto")
        return t.position;
      const y = r.value.getBoundingClientRect(), l = u.value.getBoundingClientRect(), h = window.innerWidth, b = window.innerHeight, m = y.top, x = h - y.right, S = b - y.bottom, A = y.left, j = [
        { position: "top", space: m },
        { position: "right", space: x },
        { position: "bottom", space: S },
        { position: "left", space: A }
      ];
      j.sort((Y, te) => te.space - Y.space);
      const F = l.height || 50, R = l.width || 150;
      for (const Y of j)
        if (Y.position === "top" && Y.space >= F + 10 || Y.position === "bottom" && Y.space >= F + 10 || Y.position === "left" && Y.space >= R + 10 || Y.position === "right" && Y.space >= R + 10)
          return Y.position;
      return "top";
    }, T = O(() => typeof t.width == "number" ? `${t.width}px` : t.width), w = () => {
      g.value && clearTimeout(g.value), g.value = window.setTimeout(() => {
        c.value = !0, de(() => {
          t.position === "auto" ? v.value = k() : v.value = t.position, I(), s("show");
        });
      }, t.delay);
    }, _ = () => {
      g.value && clearTimeout(g.value), g.value = window.setTimeout(() => {
        c.value = !1, s("hide");
      }, 100);
    }, I = () => {
      if (!r.value || !u.value) return;
      const y = r.value.getBoundingClientRect(), l = u.value.getBoundingClientRect(), h = window.pageYOffset || document.documentElement.scrollTop, b = window.pageXOffset || document.documentElement.scrollLeft;
      let m = 0, x = 0;
      const S = 10;
      switch (v.value) {
        case "top":
          m = y.left + y.width / 2 - l.width / 2 + b, x = y.top - l.height - S + h;
          break;
        case "right":
          m = y.right + S + b, x = y.top + y.height / 2 - l.height / 2 + h;
          break;
        case "bottom":
          m = y.left + y.width / 2 - l.width / 2 + b, x = y.bottom + S + h;
          break;
        case "left":
          m = y.left - l.width - S + b, x = y.top + y.height / 2 - l.height / 2 + h;
          break;
      }
      (() => {
        const j = window.innerWidth, F = window.innerHeight, R = 10;
        m < R ? m = R : m + l.width > j - R && (m = j - l.width - R), x < R ? x = R : x + l.height > F - R && (x = F - l.height - R);
      })(), p.value = {
        left: `${m}px`,
        top: `${x}px`,
        width: T.value
      };
    }, f = () => {
      t.trigger === "hover" && w();
    }, E = () => {
      t.trigger === "hover" && _();
    }, $ = () => {
      t.trigger === "click" && (c.value ? _() : w());
    }, P = () => {
      t.trigger === "focus" && w();
    }, q = () => {
      t.trigger === "focus" && _();
    }, Q = () => {
      c.value && (t.position === "auto" && (v.value = k()), I());
    }, d = () => {
      c.value && (L && clearTimeout(L), L = setTimeout(() => {
        I();
      }, 16));
    };
    J(
      () => t.position,
      (y) => {
        c.value && de(() => {
          y === "auto" ? v.value = k() : v.value = y, I();
        });
      }
    );
    let N = [];
    const M = (y) => {
      let l = [], h = y.parentElement;
      for (; h; ) {
        const b = window.getComputedStyle(h);
        /(auto|scroll)/.test(b.overflow + b.overflowY + b.overflowX) && l.push(h), h = h.parentElement;
      }
      return l.push(document.documentElement), l;
    };
    ee(() => {
      if (window.addEventListener("resize", Q), window.addEventListener("scroll", d, { passive: !0 }), document.addEventListener("click", (y) => {
        if (c.value && t.trigger === "click") {
          const l = y.target;
          u.value && !u.value.contains(l) && r.value && !r.value.contains(l) && _();
        }
      }), r.value) {
        N = M(r.value);
        const y = () => {
          L && clearTimeout(L), L = setTimeout(() => {
            c.value && I();
          }, 16);
        };
        N.forEach((l) => {
          l.addEventListener("scroll", y);
        });
      }
    });
    let L = null;
    return re(() => {
      window.removeEventListener("resize", Q), window.removeEventListener("scroll", d), N.forEach((y) => {
        y.removeEventListener("scroll", d);
      }), g.value && clearTimeout(g.value), L && clearTimeout(L);
    }), (y, l) => (n(), o("div", null, [
      i("div", {
        ref_key: "triggerRef",
        ref: r,
        class: "tooltip-trigger",
        onMouseenter: f,
        onMouseleave: E,
        onClick: $,
        onFocus: P,
        onBlur: q
      }, [
        X(y.$slots, "default", {}, void 0, !0)
      ], 544),
      (n(), me(ye, { to: "body" }, [
        pe(i("div", {
          ref_key: "tooltipRef",
          ref: u,
          class: B([
            "cp-cyber-tooltip",
            `theme-${e.theme}`,
            `effect-${e.effect}`,
            `position-${v.value}`
          ]),
          style: V(p.value)
        }, [
          l[2] || (l[2] = i("div", { class: "tooltip-arrow" }, null, -1)),
          i("div", Ke, [
            i("div", Xe, [
              X(y.$slots, "content", {}, () => [
                fe(D(e.content), 1)
              ], !0)
            ]),
            l[0] || (l[0] = i("div", { class: "tooltip-scanline" }, null, -1)),
            l[1] || (l[1] = i("div", { class: "tooltip-glitch" }, null, -1))
          ])
        ], 6), [
          [we, c.value]
        ])
      ]))
    ]));
  }
}), Qe = /* @__PURE__ */ W(Ue, [["__scopeId", "data-v-3de3033d"]]), Ze = G(Qe), Je = { class: "progress-track" }, et = {
  key: 0,
  class: "percentage-inside"
}, tt = { class: "tick-marks" }, at = {
  key: 0,
  class: "percentage-outside"
}, lt = {
  key: 1,
  class: "status-indicator"
}, st = { class: "status-text" }, nt = /* @__PURE__ */ H({
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
    const a = e, t = O(() => Math.min(100, Math.max(0, a.percentage)).toFixed(0)), s = O(() => {
      const c = Number(t.value);
      return c < 30 ? "INITIALIZING" : c < 60 ? "PROCESSING" : c < 90 ? "LOADING" : c < 100 ? "ALMOST" : "COMPLETE";
    });
    return (c, r) => (n(), o("div", {
      class: B(["cyber-progress", [`theme-${e.theme}`, { animated: e.animated }]])
    }, [
      i("div", Je, [
        r[0] || (r[0] = i("div", { class: "track-grid" }, null, -1)),
        i("div", {
          class: "progress-bar",
          style: V({ width: e.percentage + "%" })
        }, [
          e.showPercentage && e.percentagePosition === "inside" ? (n(), o("span", et, D(t.value) + "% ", 1)) : z("", !0)
        ], 4),
        i("div", tt, [
          (n(), o(K, null, U(10, (u) => i("span", {
            key: u,
            class: B(["tick", { active: u * 10 <= e.percentage }])
          }, null, 2)), 64))
        ])
      ]),
      e.showPercentage && e.percentagePosition === "outside" ? (n(), o("span", at, D(t.value) + "% ", 1)) : z("", !0),
      e.showStatus ? (n(), o("div", lt, [
        r[1] || (r[1] = i("div", { class: "indicator-dot" }, null, -1)),
        i("span", st, D(s.value), 1)
      ])) : z("", !0)
    ], 2));
  }
}), ot = /* @__PURE__ */ W(nt, [["__scopeId", "data-v-44363fb0"]]), rt = G(ot), it = {
  key: 0,
  class: "prefix"
}, ct = { class: "counter-container" }, ut = {
  key: 0,
  class: "separator"
}, dt = { class: "digit-top" }, ft = { class: "digit-bottom" }, vt = { class: "digit-top flip-top" }, ht = { class: "digit-bottom flip-bottom" }, gt = {
  key: 1,
  class: "suffix"
}, pt = /* @__PURE__ */ H({
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
    const a = e, t = C(Number(a.from)), s = C(Number(a.value)), c = C(null), r = C(null), u = C(""), g = (f) => {
      const E = Math.pow(10, a.decimal);
      let P = (Math.round(f * E) / E).toFixed(a.decimal);
      if (a.separator) {
        const q = P.split(".");
        q[0] = q[0].replace(/\B(?=(\d{3})+(?!\d))/g, a.separator), P = q.join(".");
      }
      return P;
    }, v = O(() => g(t.value)), p = O(() => v.value.split("")), k = (f) => f === a.separator || f === ".", T = (f) => !u.value || f >= u.value.length ? !1 : u.value[f] !== p.value[f] && !k(p.value[f]), w = (f) => {
      c.value === null && (c.value = f);
      const E = f - c.value, $ = Math.min(E / a.duration, 1), P = Number(a.from), q = Number(a.to !== null ? a.to : s.value), Q = P + (q - P) * _($);
      t.value = Q, $ < 1 ? r.value = requestAnimationFrame(w) : (t.value = q, c.value = null);
    }, _ = (f) => 1 - Math.pow(1 - f, 4), I = () => {
      u.value = v.value, r.value !== null && cancelAnimationFrame(r.value), c.value = null, r.value = requestAnimationFrame(w);
    };
    return J(() => a.value, (f) => {
      s.value = Number(f), I();
    }), J(() => a.to, (f) => {
      f !== null && (s.value = Number(f), I());
    }), ee(() => {
      Number(a.from) !== Number(a.value) && I();
    }), re(() => {
      r.value !== null && cancelAnimationFrame(r.value);
    }), (f, E) => (n(), o("div", {
      class: B(["cp-digital-counter", `theme-${e.theme}`])
    }, [
      e.prefix ? (n(), o("span", it, D(e.prefix), 1)) : z("", !0),
      i("div", ct, [
        (n(!0), o(K, null, U(p.value, ($, P) => (n(), o("div", {
          key: P,
          class: "digit-container"
        }, [
          k($) ? (n(), o("div", ut, D($), 1)) : (n(), o("div", {
            key: 1,
            class: B(["digit-flipper", { animate: T(P) }])
          }, [
            i("div", dt, D($), 1),
            i("div", ft, D($), 1),
            i("div", vt, D($), 1),
            i("div", ht, D($), 1)
          ], 2))
        ]))), 128))
      ]),
      e.suffix ? (n(), o("span", gt, D(e.suffix), 1)) : z("", !0)
    ], 2));
  }
}), mt = /* @__PURE__ */ W(pt, [["__scopeId", "data-v-99c23541"]]), yt = G(mt), bt = {
  class: "cp-full-page",
  id: "page-scroll"
}, wt = ["onClick"], $t = /* @__PURE__ */ H({
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
    const t = e, s = a, c = C();
    ke(() => {
      c.value?.style && (c.value.style.transform = u.value);
    });
    const r = O(() => {
      g.value = !0;
      let d = 0;
      return document.getElementById("page-scroll")?.clientHeight ? d = document.getElementById("page-scroll")?.clientHeight ?? 0 : d = window.innerHeight, d;
    }), u = O(() => `translateY(-${$.value * r.value}px)`), g = C(!1), v = C(!0);
    function p(d) {
      d.preventDefault(), d.stopPropagation(), g.value = !1, v.value && (v.value = !1, E(d), setTimeout(() => {
        v.value = !0;
      }, 500));
    }
    const k = C(0), T = C(0), w = C(0);
    function _(d) {
      k.value = d.touches[0].pageY || d.changedTouches[0].pageY;
    }
    function I(d) {
      d.preventDefault(), g.value = !1, T.value = d.changedTouches[0].pageY || d.touches[0].pageY, w.value = T.value - k.value, Math.abs(w.value) >= 60 ? ($.value < t.items.length - 1 && w.value < 0 && $.value++, $.value > 0 && w.value > 0 && $.value--) : (console.log("else", -$.value * r.value), c.value.style.transform = `translateY(-${$.value * r.value}px)`);
    }
    function f(d) {
      g.value = !0, d.preventDefault(), w.value = (d.changedTouches[0].pageY || d.touches[0].pageY) - k.value, !($.value === t.items.length - 1 && w.value < 0 || $.value === 0 && w.value > 0) && (console.log("else", -$.value * r.value + w.value * -1), c.value.style.transform = `translateY(-${$.value * r.value + w.value * -1}px)`);
    }
    function E(d) {
      d.wheelDelta < 0 ? (P(), s("change", { from: t.items[$.value - 1], to: t.items[$.value], type: "next" })) : (q(), s("change", { from: t.items[$.value + 1], to: t.items[$.value], type: "last" }));
    }
    const $ = C(0);
    function P() {
      $.value < t.items.length - 1 && ($.value++, s("toNext", $.value));
    }
    function q() {
      ($.value > 1 || $.value === 1) && ($.value--, s("toLast", $.value));
    }
    function Q(d) {
      g.value = !1, $.value = d;
    }
    return (d, N) => (n(), o("div", bt, [
      i("div", {
        ref_key: "element",
        ref: c,
        class: B([{ activeTranstion: g.value }, "inner-box"]),
        onMousewheel: p,
        onTouchstart: _,
        onTouchend: I,
        onTouchmove: f
      }, [
        X(d.$slots, "default", {}, void 0, !0)
      ], 34),
      i("div", {
        class: B(["cp-full-dot", t.position])
      }, [
        (n(!0), o(K, null, U(t.items, (M, L) => (n(), o("div", {
          onClick: (y) => Q(L),
          class: "cp-full-dot-item"
        }, [
          i("div", {
            class: B(["cp-full-dot-item-bg", { active: L === $.value }])
          }, null, 2),
          t.showTitle ? pe((n(), o("div", {
            key: 0,
            class: "show-dec"
          }, D(M.title), 513)), [
            [we, L === $.value]
          ]) : z("", !0)
        ], 8, wt))), 256))
      ], 2)
    ]));
  }
}), xt = /* @__PURE__ */ W($t, [["__scopeId", "data-v-ee83c807"]]), _t = G(xt), kt = ["src", "alt"], Ct = {
  key: 1,
  class: "loading-placeholder"
}, St = {
  key: 2,
  class: "error-placeholder"
}, It = /* @__PURE__ */ H({
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
    const t = e, s = a, c = C(null), r = C(null), u = C(null), g = C(!1), v = C(!1), p = C(!1), k = C(null), T = C(null), w = O(() => t.intensity / 10), _ = () => {
      g.value = !0, v.value = !1, setTimeout(() => {
        f(), t.triggerMode === "auto" ? M() : t.triggerMode === "random" && L();
      }, 0);
    }, I = () => {
      v.value = !0, g.value = !1, console.error("Failed to load image:", t.src);
    }, f = () => {
      if (!u.value || !r.value) return;
      const m = r.value, x = u.value, S = x.getContext("2d");
      if (S) {
        x.width = m.naturalWidth, x.height = m.naturalHeight;
        try {
          S.drawImage(m, 0, 0), T.value = S.getImageData(0, 0, x.width, x.height);
        } catch (A) {
          console.error("Failed to get image data (possibly CORS issue):", A), v.value = !0;
        }
      }
    }, E = (m, x) => {
      if (!T.value) return;
      const S = m.canvas, A = m.getImageData(0, 0, S.width, S.height), j = A.data, F = T.value.data, R = Math.floor(20 * x), Y = Math.floor(Math.random() * R), te = Math.floor(Math.random() * R);
      for (let ae = 0; ae < S.height; ae++)
        for (let le = 0; le < S.width; le++) {
          const Z = (ae * S.width + le) * 4, se = Math.min(Math.max(le + Y, 0), S.width - 1), $e = (Math.min(Math.max(ae + te, 0), S.height - 1) * S.width + se) * 4;
          j[Z] = F[$e];
          const xe = Math.min(Math.max(le - Y, 0), S.width - 1), _e = (Math.min(Math.max(ae - te, 0), S.height - 1) * S.width + xe) * 4;
          j[Z + 2] = F[_e + 2], j[Z + 1] = F[Z + 1];
        }
      m.putImageData(A, 0, 0);
    }, $ = (m, x) => {
      if (!T.value) return;
      const S = m.canvas;
      m.putImageData(T.value, 0, 0);
      const A = Math.max(1, Math.floor(5 / x)), j = 0.5 + x * 0.1;
      for (let F = 0; F < S.height; F += A * 2)
        m.fillStyle = `rgba(255, 255, 255, ${j})`, m.fillRect(0, F, S.width, A);
    }, P = (m, x) => {
      if (!T.value) return;
      const S = m.canvas;
      m.putImageData(T.value, 0, 0);
      const A = Math.max(4, Math.floor(x * 8));
      if (Math.random() > 0.5)
        for (let F = 0; F < S.height; F += A)
          for (let R = 0; R < S.width; R += A) {
            const Y = m.getImageData(R, F, 1, 1).data;
            m.fillStyle = `rgb(${Y[0]}, ${Y[1]}, ${Y[2]})`, m.fillRect(R, F, A, A);
          }
      else {
        const F = Math.floor(x * 3);
        for (let R = 0; R < F; R++) {
          const Y = Math.floor(Math.random() * (S.width - 50)), te = Math.floor(Math.random() * (S.height - 50)), ae = Math.floor(Math.random() * 100 * x) + 30, le = Math.floor(Math.random() * 80 * x) + 20;
          for (let Z = te; Z < te + le; Z += A)
            for (let se = Y; se < Y + ae; se += A)
              if (se < S.width && Z < S.height) {
                const ce = m.getImageData(se, Z, 1, 1).data;
                m.fillStyle = `rgb(${ce[0]}, ${ce[1]}, ${ce[2]})`, m.fillRect(se, Z, A, A);
              }
        }
      }
    }, q = (m, x) => {
      if (!T.value) return;
      const S = m.canvas, A = m.getImageData(0, 0, S.width, S.height), j = A.data, F = 0.2 + x * 0.05;
      for (let R = 0; R < j.length; R += 4)
        Math.random() < F && (Math.random() > 0.5 ? (j[R] = 255, j[R + 1] = 255, j[R + 2] = 255) : (j[R] = Math.floor(Math.random() * 256), j[R + 1] = Math.floor(Math.random() * 256), j[R + 2] = Math.floor(Math.random() * 256)));
      m.putImageData(A, 0, 0);
    }, Q = (m, x) => {
      [...["rgb-shift", "scanline", "pixelate", "noise"]].sort(() => 0.5 - Math.random()).slice(0, 2 + Math.floor(Math.random() * 2)).forEach((F) => {
        switch (F) {
          case "rgb-shift":
            E(m, x);
            break;
          case "scanline":
            $(m, x);
            break;
          case "pixelate":
            P(m, x);
            break;
          case "noise":
            q(m, x);
            break;
        }
      });
    }, d = () => {
      if (!u.value || !T.value) return;
      const x = u.value.getContext("2d");
      if (x) {
        switch (x.putImageData(T.value, 0, 0), t.glitchType) {
          case "rgb-shift":
            E(x, w.value);
            break;
          case "scanline":
            $(x, w.value);
            break;
          case "pixelate":
            P(x, w.value);
            break;
          case "noise":
            q(x, w.value);
            break;
          case "combined":
            Q(x, w.value);
            break;
        }
        p.value = !0, s("glitch-start");
      }
    }, N = () => {
      if (!u.value || !T.value) return;
      const x = u.value.getContext("2d");
      x && (x.putImageData(T.value, 0, 0), p.value = !1, s("glitch-end"));
    }, M = () => {
      k.value && clearInterval(k.value), d(), t.animated && (k.value = window.setInterval(() => {
        d();
      }, t.interval));
    }, L = () => {
      k.value && clearInterval(k.value), k.value = window.setInterval(() => {
        Math.random() < 0.5 && (d(), setTimeout(() => {
          N();
        }, 200 + Math.random() * 300));
      }, t.interval);
    }, y = () => {
      k.value && (clearInterval(k.value), k.value = null), N();
    }, l = () => {
      t.triggerMode === "hover" && M();
    }, h = () => {
      t.triggerMode === "hover" && !t.animated && y();
    }, b = () => {
      t.triggerMode === "click" && (p.value ? y() : M());
    };
    return J(() => [t.src, t.glitchType, t.intensity], () => {
      t.src && (g.value = !1, v.value = !1), p.value && d();
    }), ee(() => {
      r.value && r.value.complete && r.value.naturalHeight !== 0 && _();
    }), re(() => {
      k.value && clearInterval(k.value);
    }), (m, x) => (n(), o("div", {
      class: B(["cp-glitch-image", { animated: e.animated }]),
      onMouseenter: l,
      onMouseleave: h,
      onClick: b
    }, [
      i("div", {
        class: "image-container",
        ref_key: "imageContainerRef",
        ref: c
      }, [
        i("img", {
          src: e.src,
          alt: e.alt,
          ref_key: "imageRef",
          ref: r,
          class: "original-image",
          crossOrigin: "anonymous",
          onLoad: _,
          onError: I
        }, null, 40, kt),
        g.value && !v.value ? (n(), o("canvas", {
          key: 0,
          ref_key: "glitchCanvasRef",
          ref: u,
          class: "glitch-canvas"
        }, null, 512)) : z("", !0),
        !g.value && !v.value ? (n(), o("div", Ct, [...x[0] || (x[0] = [
          i("div", { class: "loading-text" }, "Loading...", -1)
        ])])) : z("", !0),
        v.value ? (n(), o("div", St, [...x[1] || (x[1] = [
          i("div", { class: "error-text" }, "Image Load Failed", -1)
        ])])) : z("", !0)
      ], 512)
    ], 34));
  }
}), Mt = /* @__PURE__ */ W(It, [["__scopeId", "data-v-b2947767"]]), Tt = G(Mt), Et = ["data-progress"], Nt = { class: "progress-container" }, Lt = {
  key: 0,
  class: "progress-text"
}, Bt = /* @__PURE__ */ H({
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
    const a = e, t = C(null), s = C(null), c = O(() => a.direction === "vertical" ? "vertical" : "horizontal"), r = O(() => {
      const v = a.direction === "vertical" ? "height" : "width", p = a.indeterminate ? "100%" : `${a.progress}%`;
      return {
        [v]: p,
        backgroundColor: a.color,
        boxShadow: `0 0 ${a.glitchIntensity * 2}px ${a.color}`
      };
    }), u = () => {
      if (!t.value) return;
      const v = t.value.querySelector(".glitch-effect");
      if (!v) return;
      const p = () => {
        if (!v) return;
        if (Math.random() < a.glitchIntensity / 20) {
          const T = Math.random() * a.glitchIntensity - a.glitchIntensity / 2, w = Math.random() * a.glitchIntensity - a.glitchIntensity / 2, _ = Math.random() * a.glitchIntensity - a.glitchIntensity / 2, I = Math.random() * a.glitchIntensity / 2;
          v.style.transform = `translate(${T}px, ${w}px) skew(${_}deg)`, v.style.filter = `blur(${I}px)`, v.style.opacity = "1", setTimeout(() => {
            v && (v.style.transform = "translate(0, 0) skew(0)", v.style.filter = "blur(0)", v.style.opacity = "0");
          }, 150);
        }
      };
      s.value = window.setInterval(() => {
        p();
      }, 500);
    };
    let g = a.progress;
    return J(() => a.progress, (v) => {
      if (v !== g) {
        if (t.value) {
          const p = t.value.querySelector(".glitch-effect");
          if (p) {
            const k = Math.random() * a.glitchIntensity * 2 - a.glitchIntensity, T = Math.random() * a.glitchIntensity - a.glitchIntensity / 2;
            p.style.transform = `translate(${k}px, ${T}px)`, p.style.opacity = "1", setTimeout(() => {
              p && (p.style.transform = "translate(0, 0)", p.style.opacity = "0");
            }, 300);
          }
        }
        g = v;
      }
    }), ee(() => {
      u();
    }), re(() => {
      s.value && clearInterval(s.value);
    }), (v, p) => (n(), o("div", {
      class: B(["cp-glitch-progress", c.value, { indeterminate: e.indeterminate }]),
      "data-progress": e.progress
    }, [
      i("div", Nt, [
        i("div", {
          class: "progress-bar",
          style: V(r.value),
          ref_key: "progressBarRef",
          ref: t
        }, [...p[0] || (p[0] = [
          i("div", { class: "glitch-effect" }, null, -1)
        ])], 4),
        e.showText && !e.indeterminate ? (n(), o("div", Lt, D(e.progress) + "% ", 1)) : z("", !0)
      ])
    ], 10, Et));
  }
}), zt = /* @__PURE__ */ W(Bt, [["__scopeId", "data-v-27854e11"]]), Ot = G(zt), Rt = { class: "glow-text" }, Dt = /* @__PURE__ */ H({
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
    }), (t, s) => (n(), o("div", Rt, [
      X(t.$slots, "default", {}, void 0, !0)
    ]));
  }
}), At = /* @__PURE__ */ W(Dt, [["__scopeId", "data-v-7d666f1f"]]), Vt = G(At), Pt = ["tabindex", "aria-disabled", "aria-label"], Ft = { class: "holo-card-content" }, Ht = {
  key: 0,
  class: "card-title"
}, Gt = /* @__PURE__ */ H({
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
      v558892ac: s.hologramColor
    }));
    const a = Ce(), t = oe(), s = e, c = C({ x: 0, y: 0 }), r = C(!1), v = ((f, E) => {
      let $;
      return function() {
        const P = arguments, q = a;
        $ || (f.apply(q, P), $ = !0, setTimeout(() => $ = !1, E));
      };
    })((f) => {
      if (s.disabled) return;
      const E = f.currentTarget.getBoundingClientRect();
      c.value = {
        x: (f.clientX - E.left) / E.width * 2 - 1,
        y: (f.clientY - E.top) / E.height * 2 - 1
      }, r.value = !0;
    }, 16), p = () => {
      r.value = !1, c.value = { x: 0, y: 0 };
    }, k = () => {
      s.disabled || (r.value = !0, c.value = { x: 0, y: 0 });
    }, T = O(() => [(() => {
      switch (s.type) {
        case "basic":
          return "basic-type";
        case "media":
          return "media-type";
        case "action":
          return "action-type";
        default:
          return "basic-type";
      }
    })()]), w = O(() => {
      const f = {};
      if (s.rounded || (f.borderRadius = "0"), s.disabled && (f.cursor = "not-allowed", f.opacity = "0.6"), !r.value || s.disabled) return f;
      const E = c.value.y * 10, $ = -c.value.x * 10;
      return {
        ...f,
        transform: `perspective(1000px) rotateX(${E}deg) rotateY(${$}deg) scale3d(1.05, 1.05, 1.05)`,
        transition: "transform 0.1s ease"
      };
    }), _ = O(() => {
      if (!r.value || s.disabled) return {};
      const f = Math.max(-50, Math.min(50, c.value.x * 10)), E = Math.max(-50, Math.min(50, c.value.y * 10));
      return {
        background: `radial-gradient(circle at ${50 + f}% ${50 + E}%, ${s.hologramColor}33, transparent 70%)`,
        opacity: 0.8,
        transition: "background 0.1s ease"
      };
    }), I = O(() => {
      const f = s.glowIntensity / 100;
      return {
        boxShadow: `0 0 ${10 + s.glowIntensity / 5}px ${s.hologramColor}${Math.floor(f * 99).toString(16).padStart(2, "0")}`,
        opacity: r.value && !s.disabled ? f : f * 0.5
      };
    });
    return ee(() => {
      de(() => {
      });
    }), (f, E) => (n(), o("div", {
      class: B([
        "cp-holo-card",
        `depth-${e.depth}`,
        T.value,
        `theme-${e.theme}`,
        `effect-${e.effect}`
      ]),
      style: V(w.value),
      onMousemove: E[0] || (E[0] = //@ts-ignore
      (...$) => ue(v) && ue(v)(...$)),
      onMouseleave: p,
      onFocus: k,
      onBlur: p,
      tabindex: e.disabled ? -1 : 0,
      role: "button",
      "aria-disabled": e.disabled,
      "aria-label": e.title
    }, [
      i("div", Ft, [
        e.title && !ue(t).title ? (n(), o("div", Ht, D(e.title), 1)) : z("", !0),
        X(f.$slots, "title", {}, void 0, !0),
        X(f.$slots, "default", {}, void 0, !0),
        X(f.$slots, "footer", {}, void 0, !0)
      ]),
      i("div", {
        class: "holo-card-hologram-effect",
        style: V(_.value)
      }, null, 4),
      i("div", {
        class: "holo-card-glow",
        style: V(I.value)
      }, null, 4)
    ], 46, Pt));
  }
}), Wt = /* @__PURE__ */ W(Gt, [["__scopeId", "data-v-fe164a1d"]]), Yt = G(Wt), qt = { class: "loader-container" }, jt = {
  key: 0,
  class: "cube-loader"
}, Kt = {
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
}, ea = { class: "typing-text" }, ta = /* @__PURE__ */ H({
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
    const a = e, t = (6 / a.speed).toString() + "s", s = O(() => {
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
    }), c = C(""), r = C(0), u = C(null), g = () => {
      if (!a.text) return;
      r.value = 0, c.value = "";
      const v = () => {
        r.value < a.text.length ? (c.value += a.text[r.value], r.value++) : setTimeout(() => {
          r.value = 0, c.value = "";
        }, 1e3);
      }, p = 100 / a.speed;
      u.value = window.setInterval(v, p);
    };
    return J(() => a.text, () => {
      u.value && clearInterval(u.value), g();
    }), ee(() => {
      g();
    }), re(() => {
      u.value && clearInterval(u.value);
    }), (v, p) => (n(), o("div", {
      class: B(["cp-holo-loader", s.value, { "transparent-bg": e.transparent }])
    }, [
      i("div", qt, [
        i("div", {
          class: B(["holo-projection", `type-${e.type}`])
        }, [
          e.type === "cube" || e.type === "split" ? (n(), o("div", jt, [...p[0] || (p[0] = [
            Se('<div class="cube" data-v-6df1b911><div class="cube-face front" data-v-6df1b911></div><div class="cube-face back" data-v-6df1b911></div><div class="cube-face right" data-v-6df1b911></div><div class="cube-face left" data-v-6df1b911></div><div class="cube-face top" data-v-6df1b911></div><div class="cube-face bottom" data-v-6df1b911></div></div>', 1)
          ])])) : e.type === "sphere" ? (n(), o("div", Kt, [
            i("div", Xt, [
              (n(), o(K, null, U(3, (k) => i("div", {
                class: "sphere-ring",
                key: k
              })), 64))
            ])
          ])) : e.type === "datastream" ? (n(), o("div", Ut, [
            (n(), o(K, null, U(10, (k) => i("div", {
              class: "data-line",
              key: k
            })), 64))
          ])) : e.type === "circuit" ? (n(), o("div", Qt, [
            i("div", Zt, [
              (n(), o(K, null, U(5, (k) => i("div", {
                class: "circuit-path",
                key: k
              })), 64)),
              (n(), o(K, null, U(6, (k) => i("div", {
                class: "circuit-node",
                key: k + 10
              })), 64))
            ])
          ])) : z("", !0)
        ], 2),
        e.text ? (n(), o("div", Jt, [
          i("span", ea, D(c.value), 1),
          p[1] || (p[1] = i("span", { class: "cursor" }, "_", -1))
        ])) : z("", !0),
        p[2] || (p[2] = i("div", { class: "holo-base" }, [
          i("div", { class: "base-glow" })
        ], -1))
      ])
    ], 2));
  }
}), aa = /* @__PURE__ */ W(ta, [["__scopeId", "data-v-6df1b911"]]), la = G(aa), sa = { class: "header-row" }, na = { class: "header-text" }, oa = { class: "cell-text" }, ra = {
  key: 0,
  class: "row-scanline"
}, ia = /* @__PURE__ */ H({
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
    const a = e, t = C(null), s = C(!1), c = C(!0), r = C(1), u = C(0), g = C(!1), v = C(0), p = Ie([]);
    a.data.length > 0 && p.splice(0, p.length, ...a.data);
    let k = 0;
    const T = () => `row-${++k}-${Date.now()}`, w = O(() => a.rowNum * a.rowHeight), _ = O(() => w.value), I = O(() => {
      const y = p.length, l = a.rowNum;
      if (y === 0) return [];
      if (y <= l)
        return p.map((x, S) => ({
          key: x._uniqueKey || T(),
          data: x,
          index: S
        }));
      let h = [...p];
      y > l && y < 2 * l && (h = [...h, ...h]), h = h.map((x, S) => ({
        key: x._uniqueKey || T(),
        data: x,
        index: S,
        scroll: S
      }));
      let b = h.slice(u.value);
      return b.push(...h.slice(0, u.value)), b.slice(0, l);
    }), f = (y) => a.columns[y]?.width ? a.columns[y].width : "auto", E = (y) => y === "center" ? "center" : y === "right" ? "flex-end" : "flex-start", $ = () => a.theme === "neon" ? "rgba(0, 230, 246, 0.15)" : a.theme === "hologram" ? "rgba(138, 43, 226, 0.2)" : a.theme === "terminal" ? "rgba(0, 255, 0, 0.15)" : a.theme === "matrix" ? "rgba(0, 255, 65, 0.15)" : "rgba(0, 230, 246, 0.15)", P = (y) => (u.value + y) % p.length % 2 === 0 ? "var(--table-row-bg)" : "var(--table-row-hover)", q = (y, l) => {
      const h = l.split(".");
      let b = y;
      for (const m of h)
        b = b?.[m];
      return b ?? "";
    }, Q = async () => {
      if (!(s.value || !c.value)) {
        s.value = !0;
        try {
          if (a.remoteMethod) {
            const y = await a.remoteMethod({
              page: r.value,
              size: a.bufferSize * 10
            });
            if (y.data && y.data.length > 0) {
              const l = y.data.map((h) => (h._uniqueKey || (h._uniqueKey = T()), h));
              r.value === 1 ? p.splice(0, p.length, ...l) : p.push(...l), a.data && a.data.splice(0, a.data.length, ...p);
            }
            c.value = y.hasMore ?? !1, r.value++;
          } else a.loadMore && await a.loadMore();
        } catch (y) {
          console.error("Failed to load more data:", y), c.value = !1;
        } finally {
          s.value = !1;
        }
      }
    }, d = async () => {
      if (!a.autoScroll || g.value) return;
      const y = p.length, l = a.rowNum;
      if (y <= l || (await new Promise((b) => setTimeout(b, a.waitTime)), g.value)) return;
      const h = async () => {
        if (g.value) return;
        const b = v.value, m = a.scrollType === "page" ? l : 1;
        u.value = (u.value + m) % y;
        const x = a.scrollType === "page" ? 500 : 300;
        await new Promise((S) => setTimeout(S, x)), !(v.value !== b || g.value) && (await new Promise((S) => setTimeout(S, a.waitTime)), !(v.value !== b || g.value) && h());
      };
      h();
    }, N = () => {
      v.value = (v.value + 1) % 999999;
    }, M = () => {
      a.hoverPause && (g.value = !0, N());
    }, L = () => {
      a.hoverPause && (g.value = !1, d());
    };
    return ee(() => {
      a.remoteMethod && p.length === 0 && Q(), a.autoScroll && d();
    }), (y, l) => (n(), o("div", {
      class: B(["cyber-infinite-table", [`theme-${e.theme}`, `scroll-${e.scrollType}`]])
    }, [
      i("div", {
        class: "table-header",
        style: V({ backgroundColor: $() })
      }, [
        i("div", sa, [
          (n(!0), o(K, null, U(e.columns, (h, b) => (n(), o("div", {
            key: h.field || b,
            class: "header-cell",
            style: V({
              width: f(b),
              minWidth: h.minWidth || "100px",
              textAlign: h.align || "left"
            })
          }, [
            i("div", {
              class: "header-content",
              style: V({ justifyContent: E(h.align || "left") })
            }, [
              i("span", na, D(h.title), 1)
            ], 4)
          ], 4))), 128))
        ])
      ], 4),
      i("div", {
        class: "table-body",
        ref_key: "bodyRef",
        ref: t,
        onMouseenter: M,
        onMouseleave: L
      }, [
        i("div", {
          class: "rows-container",
          style: V({ height: _.value + "px" })
        }, [
          he(be, { name: "scroll-list" }, {
            default: ge(() => [
              (n(!0), o(K, null, U(I.value, (h) => (n(), o("div", {
                class: "table-row",
                key: h.key,
                style: V({
                  height: e.rowHeight + "px",
                  lineHeight: e.rowHeight + "px",
                  backgroundColor: P(h.index)
                })
              }, [
                (n(!0), o(K, null, U(e.columns, (b, m) => (n(), o("div", {
                  key: b.field || m,
                  class: "table-cell",
                  style: V({
                    width: f(m),
                    minWidth: b.minWidth || "100px",
                    justifyContent: E(b.align || "left")
                  })
                }, [
                  X(y.$slots, b.field, {
                    row: h.data,
                    column: b
                  }, () => [
                    i("span", oa, D(q(h.data, b.field)), 1)
                  ], !0)
                ], 4))), 128)),
                e.showScanline ? (n(), o("div", ra)) : z("", !0)
              ], 4))), 128))
            ]),
            _: 3
          })
        ], 4)
      ], 544),
      l[0] || (l[0] = i("div", { class: "table-border-effect" }, null, -1))
    ], 2));
  }
}), ca = /* @__PURE__ */ W(ia, [["__scopeId", "data-v-a239aba5"]]), ua = G(ca), da = /* @__PURE__ */ H({
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
    const t = e, s = O(() => {
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
    }), c = O(() => {
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
    return (r, u) => (n(), o("div", {
      class: B(["cp-button-neno", c.value])
    }, [
      i("div", {
        class: B(["button", s.value, t.bg ? "show-bg" : ""])
      }, [
        u[0] || (u[0] = i("div", { class: "border" }, null, -1)),
        u[1] || (u[1] = i("div", { class: "border" }, null, -1)),
        u[2] || (u[2] = i("div", { class: "border" }, null, -1)),
        u[3] || (u[3] = i("div", { class: "border" }, null, -1)),
        X(r.$slots, "default", {}, void 0, !0)
      ], 2)
    ], 2));
  }
}), fa = /* @__PURE__ */ W(da, [["__scopeId", "data-v-c8c24548"]]), va = G(fa), ha = ["aria-checked", "aria-disabled"], ga = { class: "toggle-thumb" }, pa = {
  key: 0,
  class: "pulse-effect"
}, ma = /* @__PURE__ */ H({
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
    ve((g) => ({
      v2ad8abbc: t.inActiveColor,
      v247239f2: t.activeColor
    }));
    const t = e, s = a, c = O(() => {
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
    }), r = O(() => {
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
      const g = !t.modelValue;
      s("update:modelValue", g), s("change", g);
    };
    return (g, v) => (n(), o("div", {
      class: B(["cp-neon-toggle", r.value, c.value, { active: e.modelValue, disabled: e.disabled }]),
      onClick: u,
      "aria-checked": e.modelValue,
      role: "switch",
      "aria-disabled": e.disabled
    }, [
      v[0] || (v[0] = i("div", { class: "toggle-track" }, [
        i("div", { class: "toggle-track-inner" }),
        i("div", { class: "circuit-lines" })
      ], -1)),
      i("div", ga, [
        e.pulseEffect && e.modelValue ? (n(), o("div", pa)) : z("", !0)
      ])
    ], 10, ha));
  }
}), ya = /* @__PURE__ */ W(ma, [["__scopeId", "data-v-799d9482"]]), ba = G(ya), wa = /* @__PURE__ */ H({
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
    const t = e, s = O(() => {
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
    }), c = O(() => {
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
    return (r, u) => (n(), o("div", {
      class: B(["cp-button-neno", c.value])
    }, [
      i("div", {
        class: B(["button", s.value, t.bg ? "show-bg" : ""])
      }, [
        X(r.$slots, "default", {}, void 0, !0)
      ], 2)
    ], 2));
  }
}), $a = /* @__PURE__ */ W(wa, [["__scopeId", "data-v-f4ab33ea"]]), xa = G($a), _a = ["data-word"], ka = /* @__PURE__ */ H({
  name: "CyberText",
  __name: "text",
  props: {
    lineColor: {
      type: String,
      default: "#0000"
    }
  },
  setup(e) {
    const a = C(""), t = oe();
    if (t && t.default) {
      let c = t.default();
      a.value = c[0].children;
    }
    const s = e;
    return (c, r) => (n(), o("div", {
      class: "cp-text",
      "data-word": a.value
    }, [
      X(c.$slots, "default", {}, void 0, !0),
      i("div", {
        class: "cp-text-line",
        style: V("background: " + s.lineColor)
      }, null, 4)
    ], 8, _a));
  }
}), Ca = /* @__PURE__ */ W(ka, [["__scopeId", "data-v-ee14b82a"]]), Sa = G(Ca), Ia = /* @__PURE__ */ H({
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
    const a = e, t = (c, r) => {
      let u = `0px 0px ${c}`;
      for (let g = 1; g <= a.long; g++) {
        const v = s(c, g);
        u += `, ${r === "left" ? "-" : ""}${g}px ${g}px ${v}`;
      }
      return u;
    }, s = (c, r) => {
      const u = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i.exec(c), g = /^rgba?\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})(,\s*([\d.]+))?\)$/i.exec(c);
      if (u) {
        const v = parseInt(u[1], 16), p = parseInt(u[2], 16), k = parseInt(u[3], 16), T = u[4] ? parseInt(u[4], 16) / 255 : 1, w = Math.max(0, T - r * 0.05);
        return `rgba(${v}, ${p}, ${k}, ${w})`;
      } else if (g) {
        const v = parseInt(g[1], 10), p = parseInt(g[2], 10), k = parseInt(g[3], 10), T = g[5] ? parseFloat(g[5]) : 1, w = Math.max(0, T - r * 0.05);
        return `rgba(${v}, ${p}, ${k}, ${w})`;
      } else
        throw new Error(`Unsupported color format: ${c}`);
    };
    return (c, r) => (n(), o("div", {
      class: B(["shadow-text", a.direction]),
      style: V({ textShadow: t(a.shadowColor, a.direction) })
    }, [
      X(c.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), Ma = /* @__PURE__ */ W(Ia, [["__scopeId", "data-v-baec179b"]]), Ta = G(Ma), Ea = { class: "cp-typing" }, Na = { class: "content" }, La = /* @__PURE__ */ H({
  name: "CyberTyping",
  __name: "typing",
  setup(e) {
    return (a, t) => (n(), o("div", Ea, [
      i("div", Na, [
        X(a.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), Ba = /* @__PURE__ */ W(La, [["__scopeId", "data-v-c43f79f6"]]), za = G(Ba), Oa = ["src", "alt", "loading", "crossorigin"], Ra = {
  key: 1,
  class: "placeholder"
}, Da = ["src"], Aa = {
  key: 2,
  class: "error-content"
}, Va = /* @__PURE__ */ H({
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
    const a = /* @__PURE__ */ Object.assign({}), t = e, s = (w) => {
      if (w.startsWith("http://") || w.startsWith("https://") || w.startsWith("/"))
        return w;
      for (const [_, I] of Object.entries(a))
        if (_.includes(w) || w.includes(_.split("/").pop() || ""))
          return I;
      return w;
    }, c = C(!1), r = C(!1), u = C(""), g = O(() => {
      const w = {};
      return t.width !== "auto" && t.width !== void 0 && (w.width = typeof t.width == "number" ? `${t.width}px` : t.width), t.height !== "auto" && t.height !== void 0 && (w.height = typeof t.height == "number" ? `${t.height}px` : t.height), !w.width && !w.height && (w.display = "inline-block"), w;
    }), v = O(() => r.value && t.errorSrc ? `url(${t.errorSrc})` : u.value ? `url(${u.value})` : "none"), p = O(() => {
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
      u.value = s(t.src), c.value = !0, r.value = !1;
    }, T = () => {
      if (r.value = !0, t.errorSrc && t.errorSrc !== t.src) {
        const w = new Image();
        w.crossOrigin = t.crossorigin || "", w.src = s(t.errorSrc), w.onload = () => {
          u.value = s(t.errorSrc), c.value = !0;
        }, w.onerror = () => {
          c.value = !0;
        };
      } else
        c.value = !0;
    };
    return J(() => t.src, () => {
      c.value = !1, r.value = !1, u.value = s(t.src);
    }, { immediate: !0 }), ee(() => {
      t.src && (u.value = s(t.src));
    }), (w, _) => (n(), o("div", {
      class: "cyber-image-wrapper",
      style: V(g.value)
    }, [
      e.src ? (n(), o("img", {
        key: 0,
        src: e.src,
        alt: e.alt,
        loading: e.loading,
        crossorigin: e.crossorigin,
        class: "hidden-image",
        onLoad: k,
        onError: T
      }, null, 40, Oa)) : z("", !0),
      i("div", {
        class: B(["glitch", {
          "is-loaded": c.value && !r.value,
          "is-loading": !c.value && !r.value,
          "is-error": r.value,
          "no-glitch": e.disableGlitch
        }]),
        style: V({
          backgroundImage: v.value,
          backgroundSize: p.value,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        })
      }, [
        c.value && !r.value && !e.disableGlitch ? (n(), o("div", {
          key: 0,
          class: "glitch-layer",
          style: V({ backgroundImage: v.value })
        }, null, 4)) : z("", !0),
        !c.value && e.placeholder ? (n(), o("div", Ra, [
          X(w.$slots, "placeholder", {}, () => [
            i("img", {
              src: e.placeholder,
              alt: "Loading..."
            }, null, 8, Da)
          ], !0)
        ])) : r.value ? (n(), o("div", Aa, [
          X(w.$slots, "error", {}, () => [
            fe(D(e.errorContent), 1)
          ], !0)
        ])) : z("", !0),
        c.value && !r.value ? X(w.$slots, "default", { key: 3 }, void 0, !0) : z("", !0)
      ], 6)
    ], 4));
  }
}), Pa = /* @__PURE__ */ W(Va, [["__scopeId", "data-v-c8293d7c"]]), Fa = G(Pa), Ha = { class: "cyber-magic-text" }, Ga = ["data-text"], Wa = /* @__PURE__ */ H({
  name: "CyberMagicText",
  __name: "magicText",
  setup(e) {
    const a = C(""), t = oe();
    if (t && t.default) {
      let s = t.default();
      a.value = s[0].children;
    }
    return (s, c) => (n(), o("div", Ha, [
      i("span", {
        class: "gradient-text",
        "data-text": a.value
      }, [
        X(s.$slots, "default")
      ], 8, Ga)
    ]));
  }
}), Ya = G(Wa), qa = { class: "imgWrap" }, ja = ["src"], Ka = /* @__PURE__ */ H({
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
    ve((g) => ({
      v29922088: t.value + "px"
    }));
    const a = e, t = C(a.imgHeight);
    a.shadow && (t.value = a.imgHeight * 2);
    const s = C(a.imgList.length), c = r(a.imgWidth, 360 / s.value) * 1.6;
    function r(g, v) {
      const p = v * Math.PI / 180;
      return g / (2 * Math.sin(p / 2));
    }
    const u = (g) => {
      const v = 35 + (g + 1) * (360 / s.value), p = r(a.imgWidth, 360 / s.value);
      return {
        transform: `rotateY(${v}deg) translateZ(${p}px)`
      };
    };
    return (g, v) => (n(), o("div", {
      class: "container",
      style: V({
        "--container-width": `${c}px`,
        "--img-width": `${a.imgWidth}px`,
        "--img-height": `${a.imgHeight}px`
      })
    }, [
      i("div", {
        class: B(["stage", { "has-shadow": a.shadow }])
      }, [
        i("div", {
          class: "control",
          style: V({
            "--animation-duration": `${a.animationDuration}s`
          })
        }, [
          i("div", qa, [
            (n(!0), o(K, null, U(a.imgList, (p, k) => (n(), o("div", {
              key: k,
              class: "img",
              style: V(u(k))
            }, [
              i("img", { src: p }, null, 8, ja)
            ], 4))), 128))
          ])
        ], 4)
      ], 2)
    ], 4));
  }
}), Xa = /* @__PURE__ */ W(Ka, [["__scopeId", "data-v-3d7f1970"]]), Ua = G(Xa), Qa = ["aria-expanded", "aria-disabled"], Za = { class: "select-value" }, Ja = ["aria-label", "onClick"], el = {
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
}, sl = ["placeholder"], nl = {
  key: 1,
  class: "select-options"
}, ol = {
  key: 0,
  class: "select-group-label"
}, rl = ["disabled", "onClick"], il = { class: "option-label" }, cl = {
  key: 2,
  class: "select-empty"
}, ul = /* @__PURE__ */ H({
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
    const t = e, s = a, c = C(), r = C(), u = C(!1), g = C(""), v = O(() => {
      const l = [], h = [];
      return t.options.forEach((b, m) => {
        Array.isArray(b.options) ? l.push({
          key: `group-${m}`,
          label: _(b),
          options: b.options
        }) : h.push(b);
      }), h.length && l.unshift({
        key: "default",
        label: "",
        options: h
      }), l;
    }), p = O(() => v.value.flatMap((l) => l.options)), k = O(() => {
      const l = g.value.trim().toLowerCase();
      return l ? v.value.map((h) => ({
        ...h,
        options: h.options.filter((b) => _(b).toLowerCase().includes(l))
      })).filter((h) => h.options.length) : v.value;
    }), T = O(() => {
      const l = t.multiple ? Array.isArray(t.modelValue) ? t.modelValue : [] : Array.isArray(t.modelValue) ? [] : [t.modelValue ?? null];
      return p.value.filter((h) => l.some((b) => f(b, I(h))));
    }), w = O(() => t.multiple ? Array.isArray(t.modelValue) && t.modelValue.length > 0 : t.modelValue !== "" && t.modelValue !== null && t.modelValue !== void 0), _ = (l) => {
      const h = l[t.labelKey] ?? l.label ?? l[t.valueKey] ?? l.value ?? "";
      return String(h);
    }, I = (l) => l[t.valueKey] ?? l.value ?? null, f = (l, h) => l === h, E = (l) => {
      const h = I(l);
      return t.multiple ? (Array.isArray(t.modelValue) ? t.modelValue : []).some((m) => f(m, h)) : f(t.modelValue, h);
    }, $ = (l) => {
      t.disabled || u.value === l || (u.value = l, s("visible-change", l), l && t.filterable && de(() => r.value?.focus()));
    }, P = () => {
      $(!u.value);
    }, q = (l) => {
      if (t.disabled || l.disabled) return;
      const h = I(l);
      if (t.multiple) {
        const b = Array.isArray(t.modelValue) ? [...t.modelValue] : [], m = b.findIndex((S) => f(S, h));
        m > -1 ? b.splice(m, 1) : b.push(h);
        const x = p.value.filter((S) => b.some((A) => f(A, I(S))));
        s("update:modelValue", b), s("change", b, x);
        return;
      }
      s("update:modelValue", h), s("change", h, l), $(!1);
    }, Q = (l) => {
      if (!t.multiple || t.disabled) return;
      const h = I(l), m = (Array.isArray(t.modelValue) ? [...t.modelValue] : []).filter((S) => !f(S, h)), x = p.value.filter((S) => m.some((A) => f(A, I(S))));
      s("update:modelValue", m), s("change", m, x);
    }, d = () => {
      const l = t.multiple ? [] : "";
      s("update:modelValue", l), s("change", l, t.multiple ? [] : void 0), s("clear"), g.value = "";
    }, N = (l) => {
      t.disabled || s("focus", l);
    }, M = (l) => {
      s("blur", l);
    }, L = (l) => {
      t.disabled || ((l.key === "Enter" || l.key === " ") && (u.value || (l.preventDefault(), $(!0))), l.key === "Escape" && $(!1));
    }, y = (l) => {
      c.value?.contains(l.target) || $(!1);
    };
    return J(u, (l) => {
      l || (g.value = "");
    }), J(() => t.multiple, (l) => {
      l && !Array.isArray(t.modelValue) && s("update:modelValue", []);
    }), ee(() => {
      document.addEventListener("click", y);
    }), Me(() => {
      document.removeEventListener("click", y);
    }), (l, h) => (n(), o("div", {
      ref_key: "selectRef",
      ref: c,
      class: B(["cp-cyber-select", [
        `theme-${e.theme}`,
        `size-${e.size}`,
        {
          "is-open": u.value,
          "is-disabled": e.disabled,
          "is-multiple": e.multiple
        }
      ]])
    }, [
      i("div", {
        class: "select-control",
        tabindex: "0",
        role: "combobox",
        "aria-expanded": u.value,
        "aria-disabled": e.disabled,
        onClick: P,
        onFocus: N,
        onBlur: M,
        onKeydown: L
      }, [
        i("div", Za, [
          e.multiple && T.value.length ? (n(!0), o(K, { key: 0 }, U(T.value, (b) => (n(), o("span", {
            key: String(I(b)),
            class: "select-tag",
            onClick: h[0] || (h[0] = ne(() => {
            }, ["stop"]))
          }, [
            fe(D(_(b)) + " ", 1),
            i("button", {
              class: "tag-close",
              type: "button",
              "aria-label": `Remove ${_(b)}`,
              onClick: ne((m) => Q(b), ["stop"])
            }, null, 8, Ja)
          ]))), 128)) : !e.multiple && T.value.length ? (n(), o("span", el, D(_(T.value[0])), 1)) : (n(), o("span", tl, D(e.placeholder), 1))
        ]),
        e.clearable && w.value && !e.disabled ? (n(), o("button", {
          key: 0,
          class: "clear-button",
          type: "button",
          "aria-label": "Clear selected value",
          onClick: ne(d, ["stop"])
        })) : z("", !0),
        h[3] || (h[3] = i("span", { class: "select-arrow" }, null, -1))
      ], 40, Qa),
      he(Te, { name: "select-dropdown" }, {
        default: ge(() => [
          u.value ? (n(), o("div", al, [
            e.filterable ? (n(), o("div", ll, [
              pe(i("input", {
                ref_key: "searchInputRef",
                ref: r,
                "onUpdate:modelValue": h[1] || (h[1] = (b) => g.value = b),
                type: "text",
                placeholder: e.searchPlaceholder,
                onClick: h[2] || (h[2] = ne(() => {
                }, ["stop"])),
                onKeydown: L
              }, null, 40, sl), [
                [Ee, g.value]
              ])
            ])) : z("", !0),
            k.value.length ? (n(), o("div", nl, [
              (n(!0), o(K, null, U(k.value, (b) => (n(), o(K, {
                key: b.key
              }, [
                b.label ? (n(), o("div", ol, D(b.label), 1)) : z("", !0),
                (n(!0), o(K, null, U(b.options, (m) => (n(), o("button", {
                  key: `${b.key}-${String(I(m))}`,
                  class: B(["select-option", {
                    selected: E(m),
                    disabled: m.disabled
                  }]),
                  type: "button",
                  disabled: m.disabled,
                  onClick: ne((x) => q(m), ["stop"])
                }, [
                  h[4] || (h[4] = i("span", { class: "option-check" }, null, -1)),
                  i("span", il, D(_(m)), 1)
                ], 10, rl))), 128))
              ], 64))), 128))
            ])) : (n(), o("div", cl, D(e.noDataText), 1))
          ])) : z("", !0)
        ]),
        _: 1
      })
    ], 2));
  }
}), dl = /* @__PURE__ */ W(ul, [["__scopeId", "data-v-486e0750"]]), fl = G(dl), vl = {
  key: 0,
  class: "tree-connectors",
  "aria-hidden": "true"
}, hl = ["onClick"], gl = ["aria-expanded", "aria-label", "onClick"], pl = {
  key: 1,
  class: "node-expand-placeholder"
}, ml = { class: "node-label" }, yl = { class: "label-text" }, bl = ["title"], wl = { class: "status-text" }, $l = {
  key: 0,
  class: "tree-empty"
}, xl = {
  key: 1,
  class: "tree-scanline"
}, ie = 14, _l = /* @__PURE__ */ H({
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
    const s = e, c = t, r = C([]), u = C([]), g = C(0), v = O(() => {
      const d = [], N = (M, L = 0, y) => {
        M.forEach((l, h) => {
          l._level = L, l._parent = y, l._expanded = l.expanded ?? (s.defaultExpandAll || L === 0), l._selected = l.selected ?? !1, l._isLastChild = h === M.length - 1, d.push(l), l._expanded && l.children && l.children.length > 0 && N(l.children, L + 1, l);
        });
      };
      return N(r.value), d;
    }), p = () => {
      const d = (N, M = 0) => {
        const L = {
          ...N,
          _expanded: N.expanded ?? (s.defaultExpandAll || M === 0),
          _selected: N.selected ?? !1,
          _level: M,
          _parent: void 0,
          _isLastChild: !1
        };
        return N.children && N.children.length > 0 && (L.children = N.children.map((y) => d(y, M + 1))), L;
      };
      r.value = s.data.map((N) => d(N)), u.value = v.value.filter((N) => N._selected);
    }, k = (d) => !d.children || d.children.length === 0, T = (d) => d._level ?? 0, w = (d) => T(d) * s.indent, _ = (d) => {
      const N = T(d);
      return Array.from({ length: Math.max(N - 1, 0) }, (M, L) => L);
    }, I = (d, N) => {
      let M = d, L = T(d);
      for (; M && L > N; )
        M = M._parent, L--;
      return M?._isLastChild ?? !1;
    }, f = (d) => {
      d._expanded = !d._expanded, d.expanded = d._expanded, d._expanded ? c("node-expand", d) : c("node-collapse", d), Q();
    }, E = (d) => {
      s.multiple ? (d._selected = !d._selected, d.selected = d._selected) : d._selected ? (d._selected = !1, d.selected = !1) : (u.value.forEach((N) => {
        N._selected = !1, N.selected = !1;
      }), d._selected = !0, d.selected = !0), $(), c("select-change", u.value), c("node-click", d), s.expandOnClick && !k(d) && f(d);
    }, $ = () => {
      u.value = v.value.filter((d) => d._selected);
    }, P = (d) => d.icon ? d.icon : k(d) ? "icon-file" : d._expanded ? "icon-folder-open" : "icon-folder", q = (d) => d ? {
      online: "Online",
      offline: "Offline",
      warning: "Warning",
      error: "Error"
    }[d] : "", Q = () => {
      g.value++;
    };
    return J(() => s.data, () => {
      p();
    }, { deep: !0, immediate: !0 }), a({
      getSelectedNodes: () => u.value,
      clearSelection: () => {
        u.value.forEach((d) => {
          d._selected = !1, d.selected = !1;
        }), u.value = [], Q();
      }
    }), (d, N) => (n(), o("div", {
      class: B(["cp-cyber-tree cyber-tree", [`theme-${e.theme}`, `effect-${e.effect}`]])
    }, [
      (n(!0), o(K, null, U(v.value, (M) => (n(), o("div", {
        key: `${M.id}-${M._expanded}-${M._selected}-${g.value}`,
        class: B(["tree-node", {
          expanded: M._expanded,
          leaf: k(M),
          "last-child": M._isLastChild
        }]),
        style: V({ paddingLeft: `${w(M)}px` })
      }, [
        e.showConnectors && T(M) > 0 ? (n(), o("div", vl, [
          (n(!0), o(K, null, U(_(M), (L) => (n(), o("span", {
            key: L,
            class: B(["ancestor-line", { hidden: I(M, L) }]),
            style: V({ left: `${L * e.indent + ie}px` })
          }, null, 6))), 128)),
          i("span", {
            class: B(["parent-line", { "is-last": M._isLastChild }]),
            style: V({ left: `${(T(M) - 1) * e.indent + ie}px` })
          }, null, 6),
          i("span", {
            class: "horizontal-line",
            style: V({
              left: `${(T(M) - 1) * e.indent + ie}px`,
              width: `${e.indent - ie + 20}px`
            })
          }, null, 4),
          i("span", {
            class: "connector-joint",
            style: V({ left: `${(T(M) - 1) * e.indent + ie}px` })
          }, null, 4)
        ])) : z("", !0),
        i("div", {
          class: "node-content-wrapper",
          onClick: ne((L) => E(M), ["stop"])
        }, [
          i("div", {
            class: B(["node-content", { selected: M._selected }])
          }, [
            k(M) ? (n(), o("span", pl)) : (n(), o("button", {
              key: 0,
              class: "node-expand-icon",
              type: "button",
              "aria-expanded": M._expanded,
              "aria-label": M._expanded ? "Collapse node" : "Expand node",
              onClick: ne((L) => f(M), ["stop"])
            }, [
              i("span", {
                class: B(["expand-arrow", { rotated: M._expanded }])
              }, null, 2)
            ], 8, gl)),
            i("span", {
              class: B(["node-icon", P(M)])
            }, [...N[0] || (N[0] = [
              i("span", { class: "icon-core" }, null, -1)
            ])], 2),
            i("span", ml, [
              i("span", yl, D(M.label), 1)
            ]),
            e.showStatus && M.status ? (n(), o("span", {
              key: 2,
              class: "node-status",
              title: q(M.status)
            }, [
              i("span", {
                class: B(["status-indicator", `status-${M.status}`])
              }, null, 2),
              i("span", wl, D(M.status), 1)
            ], 8, bl)) : z("", !0)
          ], 2)
        ], 8, hl)
      ], 6))), 128)),
      v.value.length === 0 ? (n(), o("div", $l, " No data ")) : z("", !0),
      e.showScanline && e.effect !== "static" ? (n(), o("div", xl)) : z("", !0)
    ], 2));
  }
}), kl = /* @__PURE__ */ W(_l, [["__scopeId", "data-v-f9876722"]]), Cl = G(kl), Sl = {
  key: 0,
  class: "cp-divider__line cp-divider__line--left"
}, Il = {
  key: 1,
  class: "cp-divider__content"
}, Ml = {
  key: 2,
  class: "cp-divider__line cp-divider__line--right"
}, Tl = /* @__PURE__ */ H({
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
    const a = e, t = O(() => {
      const s = {};
      return a.size && (a.direction === "horizontal" ? s.width = a.size : s.height = a.size), s;
    });
    return (s, c) => (n(), o("div", {
      class: B(["cp-divider", [`cp-divider--${e.direction}`, `cp-divider--${e.type}`]]),
      style: V(t.value)
    }, [
      e.showLeftLine ? (n(), o("div", Sl)) : z("", !0),
      s.$slots.default || e.content ? (n(), o("div", Il, [
        X(s.$slots, "default", {}, () => [
          fe(D(e.content), 1)
        ], !0)
      ])) : z("", !0),
      e.showRightLine ? (n(), o("div", Ml)) : z("", !0)
    ], 6));
  }
}), El = /* @__PURE__ */ W(Tl, [["__scopeId", "data-v-4313af5a"]]), Nl = G(El), Ll = [
  Re,
  je,
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
  xa,
  Sa,
  Ta,
  Vt,
  za,
  _t,
  Fa,
  Ya,
  fl,
  Cl,
  Ua,
  Nl
], Bl = Ne([...Ll]);
console.log(
  "%c %s",
  "border: 1px solid #97E3FE;border-radius: 3px;padding: 2px 5px;color: white;font-weight:bolder;background: linear-gradient(to right, #fF717F,#CC54D1,#4EAFFA,#3DE1C3, #F7DA66)",
  "CyberPunk-UI"
);
const Rl = Bl.install;
export {
  Bl as default,
  Rl as install,
  Ne as makeInstaller
};
