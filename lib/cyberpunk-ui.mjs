import { defineComponent as F, useSlots as $e, computed as z, openBlock as n, createElementBlock as o, normalizeClass as N, createElementVNode as u, unref as fe, renderSlot as J, toDisplayString as D, ref as M, onUnmounted as ue, createBlock as he, Teleport as _e, createVNode as ve, TransitionGroup as Ve, withCtx as me, Fragment as X, renderList as Z, createCommentVNode as V, normalizeStyle as K, watch as ne, nextTick as ke, onMounted as ie, withDirectives as pe, createTextVNode as ge, vShow as xe, watchEffect as Be, resolveDynamicComponent as Ie, useCssVars as Ce, getCurrentInstance as ze, createStaticVNode as Ne, reactive as Oe, onBeforeUnmount as Ee, withModifiers as se, Transition as Te, vModelText as Re, resolveComponent as Le } from "vue";
const De = (e = []) => ({
  install: (t) => {
    e.forEach((a) => t.use(a));
  }
}), q = (e, s) => (e.install = (t) => {
  for (const a of [e, ...Object.values({})])
    t.component(a.name, a);
}, e), Ae = ["data-content"], He = { key: 1 }, Pe = /* @__PURE__ */ F({
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
  setup(e, { emit: s }) {
    const t = $e(), a = e, r = z(() => {
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
    }), i = z(() => {
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
    return (l, c) => (n(), o("div", {
      class: N(["cp-button", i.value])
    }, [
      u("div", {
        class: N(["button", r.value]),
        "data-content": a.content
      }, [
        fe(t) ? J(l.$slots, "default", { key: 0 }, void 0, !0) : (n(), o("span", He, D(a.content), 1))
      ], 10, Ae)
    ], 2));
  }
}), Y = (e, s) => {
  const t = e.__vccOpts || e;
  for (const [a, r] of s)
    t[a] = r;
  return t;
}, We = /* @__PURE__ */ Y(Pe, [["__scopeId", "data-v-6fea0e49"]]), Ke = q(We), Fe = { class: "notification-content" }, Ye = {
  key: 0,
  class: "notification-icon"
}, Ge = { class: "notification-body" }, je = {
  key: 0,
  class: "notification-title"
}, qe = { class: "notification-message" }, Xe = {
  key: 1,
  class: "notification-actions"
}, Ue = ["onClick"], Qe = ["onClick"], Ze = /* @__PURE__ */ F({
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
  setup(e, { expose: s, emit: t }) {
    const a = e, r = t, i = M([]), l = M(!1);
    let c = 0;
    const h = (m) => {
      const T = ++c, f = m.actions && m.actions.length > 0, b = {
        id: T,
        title: m.title || "",
        message: m.message,
        type: m.type || "info",
        duration: m.duration !== void 0 ? m.duration : f ? 0 : a.duration,
        showClose: m.showClose !== void 0 ? m.showClose : !0,
        showIcon: m.showIcon !== void 0 ? m.showIcon : !0,
        actions: m.actions || [],
        effect: m.effect || a.effect,
        onClose: m.onClose || (() => {
        })
      };
      if (i.value.push(b), l.value = !0, b.duration > 0 && setTimeout(() => {
        p(T);
      }, b.duration), i.value.length > a.maxCount) {
        const x = i.value[0];
        p(x.id);
      }
      return T;
    }, p = (m) => {
      const T = i.value.findIndex((f) => f.id === m);
      if (T !== -1) {
        const f = i.value[T];
        f.onClose && f.onClose(), i.value.splice(T, 1), r("close", m);
      }
    }, $ = (m, T) => {
      T.callback && T.callback(), p(m.id);
    }, C = () => {
      i.value.length === 0 && (l.value = !1);
    }, w = () => {
      i.value.forEach((m) => {
        m.onClose && m.onClose();
      }), i.value = [], l.value = !1;
    };
    return s({
      // 创建不同类型的通知
      info: (m) => h({ ...m, type: "info" }),
      success: (m) => h({ ...m, type: "success" }),
      warning: (m) => h({ ...m, type: "warning" }),
      error: (m) => h({ ...m, type: "error" }),
      // 通用创建方法
      create: h,
      // 关闭方法
      close: p,
      // 清除所有
      clearAll: w
    }), ue(() => {
      w();
    }), (m, T) => (n(), he(_e, { to: "body" }, [
      l.value ? (n(), o("div", {
        key: 0,
        class: N(["cp-cyber-notification-container", `position-${e.position}`])
      }, [
        ve(Ve, {
          name: "notification",
          tag: "div",
          onAfterLeave: C
        }, {
          default: me(() => [
            (n(!0), o(X, null, Z(i.value, (f) => (n(), o("div", {
              key: f.id,
              class: N(["cp-cyber-notification", `type-${f.type}`, `effect-${f.effect}`])
            }, [
              u("div", Fe, [
                f.showIcon ? (n(), o("div", Ye, [...T[0] || (T[0] = [
                  u("div", { class: "icon-circle" }, null, -1),
                  u("div", { class: "icon-symbol" }, null, -1)
                ])])) : V("", !0),
                u("div", Ge, [
                  f.title ? (n(), o("div", je, D(f.title), 1)) : V("", !0),
                  u("div", qe, D(f.message), 1),
                  f.actions && f.actions.length ? (n(), o("div", Xe, [
                    (n(!0), o(X, null, Z(f.actions, (b, x) => (n(), o("button", {
                      key: x,
                      class: "action-button",
                      onClick: (B) => $(f, b)
                    }, D(b.text), 9, Ue))), 128))
                  ])) : V("", !0)
                ]),
                f.showClose ? (n(), o("div", {
                  key: 1,
                  class: "notification-close",
                  onClick: (b) => p(f.id)
                }, [...T[1] || (T[1] = [
                  u("span", { class: "close-icon" }, "×", -1)
                ])], 8, Qe)) : V("", !0)
              ]),
              f.duration > 0 ? (n(), o("div", {
                key: 0,
                class: "notification-progress",
                style: K({ animationDuration: `${f.duration}ms` })
              }, null, 4)) : V("", !0),
              T[2] || (T[2] = u("div", { class: "notification-glitch-effect" }, null, -1)),
              T[3] || (T[3] = u("div", { class: "notification-hologram-effect" }, null, -1))
            ], 2))), 128))
          ]),
          _: 1
        })
      ], 2)) : V("", !0)
    ]));
  }
}), Je = /* @__PURE__ */ Y(Ze, [["__scopeId", "data-v-45ec4447"]]), et = q(Je), tt = { class: "tooltip-inner" }, at = { class: "tooltip-content" }, lt = /* @__PURE__ */ F({
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
  setup(e, { emit: s }) {
    const t = e, a = s, r = M(!1), i = M(null), l = M(null), c = M(null), h = M(t.position), p = M({}), $ = () => {
      if (!i.value || !l.value || t.position !== "auto")
        return t.position;
      const v = i.value.getBoundingClientRect(), k = l.value.getBoundingClientRect(), d = window.innerWidth, I = window.innerHeight, y = v.top, S = d - v.right, _ = I - v.bottom, G = v.left, A = [
        { position: "top", space: y },
        { position: "right", space: S },
        { position: "bottom", space: _ },
        { position: "left", space: G }
      ];
      A.sort((P, L) => L.space - P.space);
      const W = k.height || 50, U = k.width || 150;
      for (const P of A)
        if (P.position === "top" && P.space >= W + 10 || P.position === "bottom" && P.space >= W + 10 || P.position === "left" && P.space >= U + 10 || P.position === "right" && P.space >= U + 10)
          return P.position;
      return "top";
    }, C = z(() => typeof t.width == "number" ? `${t.width}px` : t.width), w = () => {
      c.value && clearTimeout(c.value), c.value = window.setTimeout(() => {
        r.value = !0, ke(() => {
          t.position === "auto" ? h.value = $() : h.value = t.position, T(), a("show");
        });
      }, t.delay);
    }, m = () => {
      c.value && clearTimeout(c.value), c.value = window.setTimeout(() => {
        r.value = !1, a("hide");
      }, 100);
    }, T = () => {
      if (!i.value || !l.value) return;
      const v = i.value.getBoundingClientRect(), k = l.value.getBoundingClientRect(), d = window.pageYOffset || document.documentElement.scrollTop, I = window.pageXOffset || document.documentElement.scrollLeft;
      let y = 0, S = 0;
      const _ = 10;
      switch (h.value) {
        case "top":
          y = v.left + v.width / 2 - k.width / 2 + I, S = v.top - k.height - _ + d;
          break;
        case "right":
          y = v.right + _ + I, S = v.top + v.height / 2 - k.height / 2 + d;
          break;
        case "bottom":
          y = v.left + v.width / 2 - k.width / 2 + I, S = v.bottom + _ + d;
          break;
        case "left":
          y = v.left - k.width - _ + I, S = v.top + v.height / 2 - k.height / 2 + d;
          break;
      }
      (() => {
        const A = window.innerWidth, W = window.innerHeight, U = 10;
        y < U ? y = U : y + k.width > A - U && (y = A - k.width - U), S < U ? S = U : S + k.height > W - U && (S = W - k.height - U);
      })(), p.value = {
        left: `${y}px`,
        top: `${S}px`,
        width: C.value
      };
    }, f = () => {
      t.trigger === "hover" && w();
    }, b = () => {
      t.trigger === "hover" && m();
    }, x = () => {
      t.trigger === "click" && (r.value ? m() : w());
    }, B = () => {
      t.trigger === "focus" && w();
    }, H = () => {
      t.trigger === "focus" && m();
    }, Q = () => {
      r.value && (t.position === "auto" && (h.value = $()), T());
    }, g = () => {
      r.value && (R && clearTimeout(R), R = setTimeout(() => {
        T();
      }, 16));
    };
    ne(
      () => t.position,
      (v) => {
        r.value && ke(() => {
          v === "auto" ? h.value = $() : h.value = v, T();
        });
      }
    );
    let O = [];
    const E = (v) => {
      let k = [], d = v.parentElement;
      for (; d; ) {
        const I = window.getComputedStyle(d);
        /(auto|scroll)/.test(I.overflow + I.overflowY + I.overflowX) && k.push(d), d = d.parentElement;
      }
      return k.push(document.documentElement), k;
    };
    ie(() => {
      if (window.addEventListener("resize", Q), window.addEventListener("scroll", g, { passive: !0 }), document.addEventListener("click", (v) => {
        if (r.value && t.trigger === "click") {
          const k = v.target;
          l.value && !l.value.contains(k) && i.value && !i.value.contains(k) && m();
        }
      }), i.value) {
        O = E(i.value);
        const v = () => {
          R && clearTimeout(R), R = setTimeout(() => {
            r.value && T();
          }, 16);
        };
        O.forEach((k) => {
          k.addEventListener("scroll", v);
        });
      }
    });
    let R = null;
    return ue(() => {
      window.removeEventListener("resize", Q), window.removeEventListener("scroll", g), O.forEach((v) => {
        v.removeEventListener("scroll", g);
      }), c.value && clearTimeout(c.value), R && clearTimeout(R);
    }), (v, k) => (n(), o("div", null, [
      u("div", {
        ref_key: "triggerRef",
        ref: i,
        class: "tooltip-trigger",
        onMouseenter: f,
        onMouseleave: b,
        onClick: x,
        onFocus: B,
        onBlur: H
      }, [
        J(v.$slots, "default", {}, void 0, !0)
      ], 544),
      (n(), he(_e, { to: "body" }, [
        pe(u("div", {
          ref_key: "tooltipRef",
          ref: l,
          class: N([
            "cp-cyber-tooltip",
            `theme-${e.theme}`,
            `effect-${e.effect}`,
            `position-${h.value}`
          ]),
          style: K(p.value)
        }, [
          k[2] || (k[2] = u("div", { class: "tooltip-arrow" }, null, -1)),
          u("div", tt, [
            u("div", at, [
              J(v.$slots, "content", {}, () => [
                ge(D(e.content), 1)
              ], !0)
            ]),
            k[0] || (k[0] = u("div", { class: "tooltip-scanline" }, null, -1)),
            k[1] || (k[1] = u("div", { class: "tooltip-glitch" }, null, -1))
          ])
        ], 6), [
          [xe, r.value]
        ])
      ]))
    ]));
  }
}), nt = /* @__PURE__ */ Y(lt, [["__scopeId", "data-v-3de3033d"]]), st = q(nt), ot = { class: "progress-track" }, it = {
  key: 0,
  class: "percentage-inside"
}, rt = { class: "tick-marks" }, ct = {
  key: 0,
  class: "percentage-outside"
}, ut = {
  key: 1,
  class: "status-indicator"
}, dt = { class: "status-text" }, ft = /* @__PURE__ */ F({
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
    const s = e, t = z(() => Math.min(100, Math.max(0, s.percentage)).toFixed(0)), a = z(() => {
      const r = Number(t.value);
      return r < 30 ? "INITIALIZING" : r < 60 ? "PROCESSING" : r < 90 ? "LOADING" : r < 100 ? "ALMOST" : "COMPLETE";
    });
    return (r, i) => (n(), o("div", {
      class: N(["cyber-progress", [`theme-${e.theme}`, { animated: e.animated }]])
    }, [
      u("div", ot, [
        i[0] || (i[0] = u("div", { class: "track-grid" }, null, -1)),
        u("div", {
          class: "progress-bar",
          style: K({ width: e.percentage + "%" })
        }, [
          e.showPercentage && e.percentagePosition === "inside" ? (n(), o("span", it, D(t.value) + "% ", 1)) : V("", !0)
        ], 4),
        u("div", rt, [
          (n(), o(X, null, Z(10, (l) => u("span", {
            key: l,
            class: N(["tick", { active: l * 10 <= e.percentage }])
          }, null, 2)), 64))
        ])
      ]),
      e.showPercentage && e.percentagePosition === "outside" ? (n(), o("span", ct, D(t.value) + "% ", 1)) : V("", !0),
      e.showStatus ? (n(), o("div", ut, [
        i[1] || (i[1] = u("div", { class: "indicator-dot" }, null, -1)),
        u("span", dt, D(a.value), 1)
      ])) : V("", !0)
    ], 2));
  }
}), vt = /* @__PURE__ */ Y(ft, [["__scopeId", "data-v-44363fb0"]]), ht = q(vt), mt = {
  key: 0,
  class: "prefix"
}, pt = { class: "counter-container" }, gt = {
  key: 0,
  class: "separator"
}, yt = { class: "digit-top" }, bt = { class: "digit-bottom" }, wt = { class: "digit-top flip-top" }, xt = { class: "digit-bottom flip-bottom" }, kt = {
  key: 1,
  class: "suffix"
}, $t = /* @__PURE__ */ F({
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
    const s = e, t = M(Number(s.from)), a = M(Number(s.value)), r = M(null), i = M(null), l = M(""), c = (f) => {
      const b = Math.pow(10, s.decimal);
      let B = (Math.round(f * b) / b).toFixed(s.decimal);
      if (s.separator) {
        const H = B.split(".");
        H[0] = H[0].replace(/\B(?=(\d{3})+(?!\d))/g, s.separator), B = H.join(".");
      }
      return B;
    }, h = z(() => c(t.value)), p = z(() => h.value.split("")), $ = (f) => f === s.separator || f === ".", C = (f) => !l.value || f >= l.value.length ? !1 : l.value[f] !== p.value[f] && !$(p.value[f]), w = (f) => {
      r.value === null && (r.value = f);
      const b = f - r.value, x = Math.min(b / s.duration, 1), B = Number(s.from), H = Number(s.to !== null ? s.to : a.value), Q = B + (H - B) * m(x);
      t.value = Q, x < 1 ? i.value = requestAnimationFrame(w) : (t.value = H, r.value = null);
    }, m = (f) => 1 - Math.pow(1 - f, 4), T = () => {
      l.value = h.value, i.value !== null && cancelAnimationFrame(i.value), r.value = null, i.value = requestAnimationFrame(w);
    };
    return ne(() => s.value, (f) => {
      a.value = Number(f), T();
    }), ne(() => s.to, (f) => {
      f !== null && (a.value = Number(f), T());
    }), ie(() => {
      Number(s.from) !== Number(s.value) && T();
    }), ue(() => {
      i.value !== null && cancelAnimationFrame(i.value);
    }), (f, b) => (n(), o("div", {
      class: N(["cp-digital-counter", `theme-${e.theme}`])
    }, [
      e.prefix ? (n(), o("span", mt, D(e.prefix), 1)) : V("", !0),
      u("div", pt, [
        (n(!0), o(X, null, Z(p.value, (x, B) => (n(), o("div", {
          key: B,
          class: "digit-container"
        }, [
          $(x) ? (n(), o("div", gt, D(x), 1)) : (n(), o("div", {
            key: 1,
            class: N(["digit-flipper", { animate: C(B) }])
          }, [
            u("div", yt, D(x), 1),
            u("div", bt, D(x), 1),
            u("div", wt, D(x), 1),
            u("div", xt, D(x), 1)
          ], 2))
        ]))), 128))
      ]),
      e.suffix ? (n(), o("span", kt, D(e.suffix), 1)) : V("", !0)
    ], 2));
  }
}), Ct = /* @__PURE__ */ Y($t, [["__scopeId", "data-v-99c23541"]]), St = q(Ct), Mt = {
  class: "cp-full-page",
  id: "page-scroll"
}, It = ["onClick"], Tt = /* @__PURE__ */ F({
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
  setup(e, { emit: s }) {
    const t = e, a = s, r = M();
    Be(() => {
      r.value?.style && (r.value.style.transform = l.value);
    });
    const i = z(() => {
      c.value = !0;
      let g = 0;
      return document.getElementById("page-scroll")?.clientHeight ? g = document.getElementById("page-scroll")?.clientHeight ?? 0 : g = window.innerHeight, g;
    }), l = z(() => `translateY(-${x.value * i.value}px)`), c = M(!1), h = M(!0);
    function p(g) {
      g.preventDefault(), g.stopPropagation(), c.value = !1, h.value && (h.value = !1, b(g), setTimeout(() => {
        h.value = !0;
      }, 500));
    }
    const $ = M(0), C = M(0), w = M(0);
    function m(g) {
      $.value = g.touches[0].pageY || g.changedTouches[0].pageY;
    }
    function T(g) {
      g.preventDefault(), c.value = !1, C.value = g.changedTouches[0].pageY || g.touches[0].pageY, w.value = C.value - $.value, Math.abs(w.value) >= 60 ? (x.value < t.items.length - 1 && w.value < 0 && x.value++, x.value > 0 && w.value > 0 && x.value--) : (console.log("else", -x.value * i.value), r.value.style.transform = `translateY(-${x.value * i.value}px)`);
    }
    function f(g) {
      c.value = !0, g.preventDefault(), w.value = (g.changedTouches[0].pageY || g.touches[0].pageY) - $.value, !(x.value === t.items.length - 1 && w.value < 0 || x.value === 0 && w.value > 0) && (console.log("else", -x.value * i.value + w.value * -1), r.value.style.transform = `translateY(-${x.value * i.value + w.value * -1}px)`);
    }
    function b(g) {
      g.wheelDelta < 0 ? (B(), a("change", { from: t.items[x.value - 1], to: t.items[x.value], type: "next" })) : (H(), a("change", { from: t.items[x.value + 1], to: t.items[x.value], type: "last" }));
    }
    const x = M(0);
    function B() {
      x.value < t.items.length - 1 && (x.value++, a("toNext", x.value));
    }
    function H() {
      (x.value > 1 || x.value === 1) && (x.value--, a("toLast", x.value));
    }
    function Q(g) {
      c.value = !1, x.value = g;
    }
    return (g, O) => (n(), o("div", Mt, [
      u("div", {
        ref_key: "element",
        ref: r,
        class: N([{ activeTranstion: c.value }, "inner-box"]),
        onMousewheel: p,
        onTouchstart: m,
        onTouchend: T,
        onTouchmove: f
      }, [
        J(g.$slots, "default", {}, void 0, !0)
      ], 34),
      u("div", {
        class: N(["cp-full-dot", t.position])
      }, [
        (n(!0), o(X, null, Z(t.items, (E, R) => (n(), o("div", {
          onClick: (v) => Q(R),
          class: "cp-full-dot-item"
        }, [
          u("div", {
            class: N(["cp-full-dot-item-bg", { active: R === x.value }])
          }, null, 2),
          t.showTitle ? pe((n(), o("div", {
            key: 0,
            class: "show-dec"
          }, D(E.title), 513)), [
            [xe, R === x.value]
          ]) : V("", !0)
        ], 8, It))), 256))
      ], 2)
    ]));
  }
}), _t = /* @__PURE__ */ Y(Tt, [["__scopeId", "data-v-a87fdb91"]]), Vt = q(_t), Et = ["src", "alt"], Lt = {
  key: 1,
  class: "loading-placeholder"
}, Bt = {
  key: 2,
  class: "error-placeholder"
}, zt = /* @__PURE__ */ F({
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
  setup(e, { emit: s }) {
    const t = e, a = s, r = M(null), i = M(null), l = M(null), c = M(!1), h = M(!1), p = M(!1), $ = M(null), C = M(null), w = z(() => t.intensity / 10), m = () => {
      c.value = !0, h.value = !1, setTimeout(() => {
        f(), t.triggerMode === "auto" ? E() : t.triggerMode === "random" && R();
      }, 0);
    }, T = () => {
      h.value = !0, c.value = !1, console.error("Failed to load image:", t.src);
    }, f = () => {
      if (!l.value || !i.value) return;
      const y = i.value, S = l.value, _ = S.getContext("2d");
      if (_) {
        S.width = y.naturalWidth, S.height = y.naturalHeight;
        try {
          _.drawImage(y, 0, 0), C.value = _.getImageData(0, 0, S.width, S.height);
        } catch (G) {
          console.error("Failed to get image data (possibly CORS issue):", G), h.value = !0;
        }
      }
    }, b = (y, S) => {
      if (!C.value) return;
      const _ = y.canvas, G = y.getImageData(0, 0, _.width, _.height), A = G.data, W = C.value.data, U = Math.floor(8 + 25 * S), P = Math.floor(8 + S * 20), L = Math.max(2, Math.floor(_.height / P));
      for (let j = 0; j < P; j++) {
        const ee = j * L, te = Math.min(ee + L, _.height), ae = Math.floor((Math.random() - 0.5) * 2 * U), oe = Math.floor((Math.random() - 0.5) * 2 * U);
        for (let le = ee; le < te; le++)
          for (let de = 0; de < _.width; de++) {
            const ce = (le * _.width + de) * 4, ye = Math.min(Math.max(de + ae, 0), _.width - 1);
            A[ce] = W[(le * _.width + ye) * 4];
            const re = Math.min(Math.max(de + oe, 0), _.width - 1);
            A[ce + 2] = W[(le * _.width + re) * 4 + 2], A[ce + 1] = W[ce + 1];
          }
      }
      y.putImageData(G, 0, 0);
    }, x = (y, S) => {
      if (!C.value) return;
      const _ = y.canvas;
      y.putImageData(C.value, 0, 0);
      const G = Math.max(2, Math.floor(6 - S * 0.4));
      for (let W = 0; W < _.height; W += G)
        y.fillStyle = `rgba(0, 0, 0, ${0.15 + S * 0.05})`, y.fillRect(0, W, _.width, Math.max(1, Math.floor(G / 3)));
      const A = Math.floor(S * 3);
      for (let W = 0; W < A; W++) {
        const U = Math.floor(Math.random() * _.height), P = 1 + Math.floor(Math.random() * 3);
        y.fillStyle = `rgba(255, 255, 255, ${0.1 + Math.random() * 0.2})`, y.fillRect(0, U, _.width, P);
      }
    }, B = (y, S) => {
      if (!C.value) return;
      const _ = y.canvas;
      y.putImageData(C.value, 0, 0);
      const G = Math.max(2, Math.floor(4 + S * 6)), A = Math.floor(2 + S * 3);
      for (let W = 0; W < A; W++) {
        const U = Math.floor(Math.random() * (_.height - 20)), P = Math.floor(10 + Math.random() * 50 * S), L = document.createElement("canvas");
        L.width = Math.max(2, Math.ceil(_.width / G)), L.height = Math.max(2, Math.ceil(P / G));
        const j = L.getContext("2d");
        j.imageSmoothingEnabled = !1, j.drawImage(_, 0, U, _.width, P, 0, 0, L.width, L.height), y.imageSmoothingEnabled = !1, y.drawImage(L, 0, 0, L.width, L.height, 0, U, _.width, P), y.imageSmoothingEnabled = !0;
      }
    }, H = (y, S) => {
      if (!C.value) return;
      const _ = y.canvas, G = y.getImageData(0, 0, _.width, _.height), A = G.data, W = 0.03 + S * 0.03;
      for (let P = 0; P < A.length; P += 4)
        if (Math.random() < W)
          if (Math.random() < 0.7) {
            const L = Math.floor(Math.random() * 160 + 95);
            A[P] = L, A[P + 1] = L, A[P + 2] = L;
          } else
            A[P] = Math.floor(Math.random() * 256), A[P + 1] = Math.floor(Math.random() * 256), A[P + 2] = Math.floor(Math.random() * 256);
      y.putImageData(G, 0, 0);
      const U = Math.floor(S * 4);
      for (let P = 0; P < U; P++) {
        const L = Math.floor(Math.random() * _.height), j = 1 + Math.floor(Math.random() * 3), ee = 0.1 + Math.random() * 0.2, te = Math.random() > 0.5;
        y.fillStyle = te ? `rgba(0, 0, 0, ${ee})` : `rgba(255, 255, 255, ${ee})`, y.fillRect(0, L, _.width, j);
      }
    }, Q = (y, S) => {
      b(y, S);
      const _ = ["scanline", "pixelate", "noise"], G = 1 + Math.floor(Math.random() * 2);
      for (let A = _.length - 1; A > 0; A--) {
        const W = Math.floor(Math.random() * (A + 1));
        [_[A], _[W]] = [_[W], _[A]];
      }
      _.slice(0, G).forEach((A) => {
        const W = S * 0.6;
        switch (A) {
          case "scanline":
            x(y, W);
            break;
          case "pixelate":
            B(y, W);
            break;
          case "noise":
            H(y, W);
            break;
        }
      });
    }, g = () => {
      if (!l.value || !C.value) return;
      const S = l.value.getContext("2d");
      if (S) {
        switch (S.putImageData(C.value, 0, 0), t.glitchType) {
          case "rgb-shift":
            b(S, w.value);
            break;
          case "scanline":
            x(S, w.value);
            break;
          case "pixelate":
            B(S, w.value);
            break;
          case "noise":
            H(S, w.value);
            break;
          case "combined":
            Q(S, w.value);
            break;
        }
        p.value = !0, a("glitch-start");
      }
    }, O = () => {
      if (!l.value || !C.value) return;
      const S = l.value.getContext("2d");
      S && (S.putImageData(C.value, 0, 0), p.value = !1, a("glitch-end"));
    }, E = () => {
      $.value && clearInterval($.value), g(), t.animated && ($.value = window.setInterval(() => {
        g();
      }, t.interval));
    }, R = () => {
      $.value && clearInterval($.value), $.value = window.setInterval(() => {
        Math.random() < 0.5 && (g(), setTimeout(() => {
          O();
        }, 200 + Math.random() * 300));
      }, t.interval);
    }, v = () => {
      $.value && (clearInterval($.value), $.value = null), O();
    }, k = () => {
      t.triggerMode === "hover" && E();
    }, d = () => {
      t.triggerMode === "hover" && !t.animated && v();
    }, I = () => {
      t.triggerMode === "click" && (p.value ? v() : E());
    };
    return ne(() => [t.src, t.glitchType, t.intensity], () => {
      t.src && (c.value = !1, h.value = !1), p.value && g();
    }), ie(() => {
      i.value && i.value.complete && i.value.naturalHeight !== 0 && m();
    }), ue(() => {
      $.value && clearInterval($.value);
    }), (y, S) => (n(), o("div", {
      class: N(["cp-glitch-image", { animated: e.animated }]),
      onMouseenter: k,
      onMouseleave: d,
      onClick: I
    }, [
      u("div", {
        class: "image-container",
        ref_key: "imageContainerRef",
        ref: r
      }, [
        u("img", {
          src: e.src,
          alt: e.alt,
          ref_key: "imageRef",
          ref: i,
          class: "original-image",
          crossOrigin: "anonymous",
          onLoad: m,
          onError: T
        }, null, 40, Et),
        c.value && !h.value ? (n(), o("canvas", {
          key: 0,
          ref_key: "glitchCanvasRef",
          ref: l,
          class: "glitch-canvas"
        }, null, 512)) : V("", !0),
        !c.value && !h.value ? (n(), o("div", Lt, [...S[0] || (S[0] = [
          u("div", { class: "loading-text" }, "Loading...", -1)
        ])])) : V("", !0),
        h.value ? (n(), o("div", Bt, [...S[1] || (S[1] = [
          u("div", { class: "error-text" }, "Image Load Failed", -1)
        ])])) : V("", !0)
      ], 512)
    ], 34));
  }
}), Nt = /* @__PURE__ */ Y(zt, [["__scopeId", "data-v-c4f1a5fc"]]), Ot = q(Nt), Rt = ["data-progress"], Dt = { class: "progress-container" }, At = {
  key: 0,
  class: "progress-text"
}, Ht = /* @__PURE__ */ F({
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
    const s = e, t = M(null), a = M(null), r = z(() => s.direction === "vertical" ? "vertical" : "horizontal"), i = z(() => {
      const h = s.direction === "vertical" ? "height" : "width", p = s.indeterminate ? "100%" : `${s.progress}%`;
      return {
        [h]: p,
        backgroundColor: s.color,
        boxShadow: `0 0 ${s.glitchIntensity * 2}px ${s.color}`
      };
    }), l = () => {
      if (!t.value) return;
      const h = t.value.querySelector(".glitch-effect");
      if (!h) return;
      const p = () => {
        if (!h) return;
        if (Math.random() < s.glitchIntensity / 20) {
          const C = Math.random() * s.glitchIntensity - s.glitchIntensity / 2, w = Math.random() * s.glitchIntensity - s.glitchIntensity / 2, m = Math.random() * s.glitchIntensity - s.glitchIntensity / 2, T = Math.random() * s.glitchIntensity / 2;
          h.style.transform = `translate(${C}px, ${w}px) skew(${m}deg)`, h.style.filter = `blur(${T}px)`, h.style.opacity = "1", setTimeout(() => {
            h && (h.style.transform = "translate(0, 0) skew(0)", h.style.filter = "blur(0)", h.style.opacity = "0");
          }, 150);
        }
      };
      a.value = window.setInterval(() => {
        p();
      }, 500);
    };
    let c = s.progress;
    return ne(() => s.progress, (h) => {
      if (h !== c) {
        if (t.value) {
          const p = t.value.querySelector(".glitch-effect");
          if (p) {
            const $ = Math.random() * s.glitchIntensity * 2 - s.glitchIntensity, C = Math.random() * s.glitchIntensity - s.glitchIntensity / 2;
            p.style.transform = `translate(${$}px, ${C}px)`, p.style.opacity = "1", setTimeout(() => {
              p && (p.style.transform = "translate(0, 0)", p.style.opacity = "0");
            }, 300);
          }
        }
        c = h;
      }
    }), ie(() => {
      l();
    }), ue(() => {
      a.value && clearInterval(a.value);
    }), (h, p) => (n(), o("div", {
      class: N(["cp-glitch-progress", r.value, { indeterminate: e.indeterminate }]),
      "data-progress": e.progress
    }, [
      u("div", Dt, [
        u("div", {
          class: "progress-bar",
          style: K(i.value),
          ref_key: "progressBarRef",
          ref: t
        }, [...p[0] || (p[0] = [
          u("div", { class: "glitch-effect" }, null, -1)
        ])], 4),
        e.showText && !e.indeterminate ? (n(), o("div", At, D(e.progress) + "% ", 1)) : V("", !0)
      ])
    ], 10, Rt));
  }
}), Pt = /* @__PURE__ */ Y(Ht, [["__scopeId", "data-v-27854e11"]]), Wt = q(Pt), Kt = /* @__PURE__ */ F({
  name: "CyberGlowText",
  __name: "glowText",
  props: {
    color: { default: "#e91e84" },
    glowing: { type: Boolean, default: !1 },
    effect: { default: "neon" },
    animationSpeed: { default: "normal" },
    tag: { default: "span" },
    disabled: { type: Boolean, default: !1 }
  },
  setup(e) {
    const s = e, t = z(() => ({
      "--glow-color": s.color
    }));
    return (a, r) => (n(), he(Ie(e.tag), {
      class: N([
        "cp-glow-text",
        `cp-glow-text--${e.effect}`,
        `cp-glow-text--${e.animationSpeed}`,
        {
          "cp-glow-text--glowing": e.glowing,
          "cp-glow-text--disabled": e.disabled
        }
      ]),
      style: K(t.value)
    }, {
      default: me(() => [
        J(a.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class", "style"]));
  }
}), Ft = /* @__PURE__ */ Y(Kt, [["__scopeId", "data-v-3d88715b"]]), Yt = q(Ft), Gt = ["tabindex", "aria-disabled", "aria-label"], jt = { class: "holo-card-content" }, qt = {
  key: 0,
  class: "card-title"
}, Xt = /* @__PURE__ */ F({
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
    Ce((f) => ({
      v558892ac: a.hologramColor
    }));
    const s = ze(), t = $e(), a = e, r = M({ x: 0, y: 0 }), i = M(!1), h = ((f, b) => {
      let x;
      return function() {
        const B = arguments, H = s;
        x || (f.apply(H, B), x = !0, setTimeout(() => x = !1, b));
      };
    })((f) => {
      if (a.disabled) return;
      const b = f.currentTarget.getBoundingClientRect();
      r.value = {
        x: (f.clientX - b.left) / b.width * 2 - 1,
        y: (f.clientY - b.top) / b.height * 2 - 1
      }, i.value = !0;
    }, 16), p = () => {
      i.value = !1, r.value = { x: 0, y: 0 };
    }, $ = () => {
      a.disabled || (i.value = !0, r.value = { x: 0, y: 0 });
    }, C = z(() => [(() => {
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
    })()]), w = z(() => {
      const f = {};
      if (a.rounded || (f.borderRadius = "0"), a.disabled && (f.cursor = "not-allowed", f.opacity = "0.6"), !i.value || a.disabled) return f;
      const b = r.value.y * 10, x = -r.value.x * 10;
      return {
        ...f,
        transform: `perspective(1000px) rotateX(${b}deg) rotateY(${x}deg) scale3d(1.05, 1.05, 1.05)`,
        transition: "transform 0.1s ease"
      };
    }), m = z(() => {
      if (!i.value || a.disabled) return {};
      const f = Math.max(-50, Math.min(50, r.value.x * 10)), b = Math.max(-50, Math.min(50, r.value.y * 10));
      return {
        background: `radial-gradient(circle at ${50 + f}% ${50 + b}%, ${a.hologramColor}33, transparent 70%)`,
        opacity: 0.8,
        transition: "background 0.1s ease"
      };
    }), T = z(() => {
      const f = a.glowIntensity / 100;
      return {
        boxShadow: `0 0 ${10 + a.glowIntensity / 5}px ${a.hologramColor}${Math.floor(f * 99).toString(16).padStart(2, "0")}`,
        opacity: i.value && !a.disabled ? f : f * 0.5
      };
    });
    return ie(() => {
      ke(() => {
      });
    }), (f, b) => (n(), o("div", {
      class: N([
        "cp-holo-card",
        `depth-${e.depth}`,
        C.value,
        `theme-${e.theme}`,
        `effect-${e.effect}`
      ]),
      style: K(w.value),
      onMousemove: b[0] || (b[0] = //@ts-ignore
      (...x) => fe(h) && fe(h)(...x)),
      onMouseleave: p,
      onFocus: $,
      onBlur: p,
      tabindex: e.disabled ? -1 : 0,
      role: "button",
      "aria-disabled": e.disabled,
      "aria-label": e.title
    }, [
      u("div", jt, [
        e.title && !fe(t).title ? (n(), o("div", qt, D(e.title), 1)) : V("", !0),
        J(f.$slots, "title", {}, void 0, !0),
        J(f.$slots, "default", {}, void 0, !0),
        J(f.$slots, "footer", {}, void 0, !0)
      ]),
      u("div", {
        class: "holo-card-hologram-effect",
        style: K(m.value)
      }, null, 4),
      u("div", {
        class: "holo-card-glow",
        style: K(T.value)
      }, null, 4)
    ], 46, Gt));
  }
}), Ut = /* @__PURE__ */ Y(Xt, [["__scopeId", "data-v-fe164a1d"]]), Qt = q(Ut), Zt = { class: "loader-container" }, Jt = {
  key: 0,
  class: "cube-loader"
}, ea = {
  key: 1,
  class: "sphere-loader"
}, ta = { class: "sphere" }, aa = {
  key: 2,
  class: "datastream-loader"
}, la = {
  key: 3,
  class: "circuit-loader"
}, na = { class: "circuit-board" }, sa = {
  key: 0,
  class: "loader-text"
}, oa = { class: "typing-text" }, ia = /* @__PURE__ */ F({
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
    Ce((h) => ({
      c40498b2: h.$props.color,
      v7f665050: t
    }));
    const s = e, t = (6 / s.speed).toString() + "s", a = z(() => {
      switch (s.size) {
        case "small":
          return "small-size";
        case "default":
          return "default-size";
        case "large":
          return "large-size";
        default:
          return "default-size";
      }
    }), r = M(""), i = M(0), l = M(null), c = () => {
      if (!s.text) return;
      i.value = 0, r.value = "";
      const h = () => {
        i.value < s.text.length ? (r.value += s.text[i.value], i.value++) : setTimeout(() => {
          i.value = 0, r.value = "";
        }, 1e3);
      }, p = 100 / s.speed;
      l.value = window.setInterval(h, p);
    };
    return ne(() => s.text, () => {
      l.value && clearInterval(l.value), c();
    }), ie(() => {
      c();
    }), ue(() => {
      l.value && clearInterval(l.value);
    }), (h, p) => (n(), o("div", {
      class: N(["cp-holo-loader", a.value, { "transparent-bg": e.transparent }])
    }, [
      u("div", Zt, [
        u("div", {
          class: N(["holo-projection", `type-${e.type}`])
        }, [
          e.type === "cube" || e.type === "split" ? (n(), o("div", Jt, [...p[0] || (p[0] = [
            Ne('<div class="cube" data-v-6df1b911><div class="cube-face front" data-v-6df1b911></div><div class="cube-face back" data-v-6df1b911></div><div class="cube-face right" data-v-6df1b911></div><div class="cube-face left" data-v-6df1b911></div><div class="cube-face top" data-v-6df1b911></div><div class="cube-face bottom" data-v-6df1b911></div></div>', 1)
          ])])) : e.type === "sphere" ? (n(), o("div", ea, [
            u("div", ta, [
              (n(), o(X, null, Z(3, ($) => u("div", {
                class: "sphere-ring",
                key: $
              })), 64))
            ])
          ])) : e.type === "datastream" ? (n(), o("div", aa, [
            (n(), o(X, null, Z(10, ($) => u("div", {
              class: "data-line",
              key: $
            })), 64))
          ])) : e.type === "circuit" ? (n(), o("div", la, [
            u("div", na, [
              (n(), o(X, null, Z(5, ($) => u("div", {
                class: "circuit-path",
                key: $
              })), 64)),
              (n(), o(X, null, Z(6, ($) => u("div", {
                class: "circuit-node",
                key: $ + 10
              })), 64))
            ])
          ])) : V("", !0)
        ], 2),
        e.text ? (n(), o("div", sa, [
          u("span", oa, D(r.value), 1),
          p[1] || (p[1] = u("span", { class: "cursor" }, "_", -1))
        ])) : V("", !0),
        p[2] || (p[2] = u("div", { class: "holo-base" }, [
          u("div", { class: "base-glow" })
        ], -1))
      ])
    ], 2));
  }
}), ra = /* @__PURE__ */ Y(ia, [["__scopeId", "data-v-6df1b911"]]), ca = q(ra), ua = { class: "header-row" }, da = { class: "header-text" }, fa = { class: "cell-text" }, va = {
  key: 0,
  class: "row-scanline"
}, ha = /* @__PURE__ */ F({
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
    const s = e, t = M(null), a = M(!1), r = M(!0), i = M(1), l = M(0), c = M(!1), h = M(0), p = Oe([]);
    s.data.length > 0 && p.splice(0, p.length, ...s.data);
    let $ = 0;
    const C = () => `row-${++$}-${Date.now()}`, w = z(() => s.rowNum * s.rowHeight), m = z(() => w.value), T = z(() => {
      const v = p.length, k = s.rowNum;
      if (v === 0) return [];
      if (v <= k)
        return p.map((S, _) => ({
          key: S._uniqueKey || C(),
          data: S,
          index: _
        }));
      let d = [...p];
      v > k && v < 2 * k && (d = [...d, ...d]), d = d.map((S, _) => ({
        key: S._uniqueKey || C(),
        data: S,
        index: _,
        scroll: _
      }));
      let I = d.slice(l.value);
      return I.push(...d.slice(0, l.value)), I.slice(0, k);
    }), f = (v) => s.columns[v]?.width ? s.columns[v].width : "auto", b = (v) => v === "center" ? "center" : v === "right" ? "flex-end" : "flex-start", x = () => s.theme === "neon" ? "rgba(0, 230, 246, 0.15)" : s.theme === "hologram" ? "rgba(138, 43, 226, 0.2)" : s.theme === "terminal" ? "rgba(0, 255, 0, 0.15)" : s.theme === "matrix" ? "rgba(0, 255, 65, 0.15)" : "rgba(0, 230, 246, 0.15)", B = (v) => (l.value + v) % p.length % 2 === 0 ? "var(--table-row-bg)" : "var(--table-row-hover)", H = (v, k) => {
      const d = k.split(".");
      let I = v;
      for (const y of d)
        I = I?.[y];
      return I ?? "";
    }, Q = async () => {
      if (!(a.value || !r.value)) {
        a.value = !0;
        try {
          if (s.remoteMethod) {
            const v = await s.remoteMethod({
              page: i.value,
              size: s.bufferSize * 10
            });
            if (v.data && v.data.length > 0) {
              const k = v.data.map((d) => (d._uniqueKey || (d._uniqueKey = C()), d));
              i.value === 1 ? p.splice(0, p.length, ...k) : p.push(...k), s.data && s.data.splice(0, s.data.length, ...p);
            }
            r.value = v.hasMore ?? !1, i.value++;
          } else s.loadMore && await s.loadMore();
        } catch (v) {
          console.error("Failed to load more data:", v), r.value = !1;
        } finally {
          a.value = !1;
        }
      }
    }, g = async () => {
      if (!s.autoScroll || c.value) return;
      const v = p.length, k = s.rowNum;
      if (v <= k || (await new Promise((I) => setTimeout(I, s.waitTime)), c.value)) return;
      const d = async () => {
        if (c.value) return;
        const I = h.value, y = s.scrollType === "page" ? k : 1;
        l.value = (l.value + y) % v;
        const S = s.scrollType === "page" ? 500 : 300;
        await new Promise((_) => setTimeout(_, S)), !(h.value !== I || c.value) && (await new Promise((_) => setTimeout(_, s.waitTime)), !(h.value !== I || c.value) && d());
      };
      d();
    }, O = () => {
      h.value = (h.value + 1) % 999999;
    }, E = () => {
      s.hoverPause && (c.value = !0, O());
    }, R = () => {
      s.hoverPause && (c.value = !1, g());
    };
    return ie(() => {
      s.remoteMethod && p.length === 0 && Q(), s.autoScroll && g();
    }), (v, k) => (n(), o("div", {
      class: N(["cyber-infinite-table", [`theme-${e.theme}`, `scroll-${e.scrollType}`]])
    }, [
      u("div", {
        class: "table-header",
        style: K({ backgroundColor: x() })
      }, [
        u("div", ua, [
          (n(!0), o(X, null, Z(e.columns, (d, I) => (n(), o("div", {
            key: d.field || I,
            class: "header-cell",
            style: K({
              width: f(I),
              minWidth: d.minWidth || "100px",
              textAlign: d.align || "left"
            })
          }, [
            u("div", {
              class: "header-content",
              style: K({ justifyContent: b(d.align || "left") })
            }, [
              u("span", da, D(d.title), 1)
            ], 4)
          ], 4))), 128))
        ])
      ], 4),
      u("div", {
        class: "table-body",
        ref_key: "bodyRef",
        ref: t,
        onMouseenter: E,
        onMouseleave: R
      }, [
        u("div", {
          class: "rows-container",
          style: K({ height: m.value + "px" })
        }, [
          ve(Ve, { name: "scroll-list" }, {
            default: me(() => [
              (n(!0), o(X, null, Z(T.value, (d) => (n(), o("div", {
                class: "table-row",
                key: d.key,
                style: K({
                  height: e.rowHeight + "px",
                  lineHeight: e.rowHeight + "px",
                  backgroundColor: B(d.index)
                })
              }, [
                (n(!0), o(X, null, Z(e.columns, (I, y) => (n(), o("div", {
                  key: I.field || y,
                  class: "table-cell",
                  style: K({
                    width: f(y),
                    minWidth: I.minWidth || "100px",
                    justifyContent: b(I.align || "left")
                  })
                }, [
                  J(v.$slots, I.field, {
                    row: d.data,
                    column: I
                  }, () => [
                    u("span", fa, D(H(d.data, I.field)), 1)
                  ], !0)
                ], 4))), 128)),
                e.showScanline ? (n(), o("div", va)) : V("", !0)
              ], 4))), 128))
            ]),
            _: 3
          })
        ], 4)
      ], 544),
      k[0] || (k[0] = u("div", { class: "table-border-effect" }, null, -1))
    ], 2));
  }
}), ma = /* @__PURE__ */ Y(ha, [["__scopeId", "data-v-41085088"]]), pa = q(ma), ga = /* @__PURE__ */ F({
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
  setup(e, { emit: s }) {
    $e();
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
    }), r = z(() => {
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
    return (i, l) => (n(), o("div", {
      class: N(["cp-button-neno", r.value])
    }, [
      u("div", {
        class: N(["button", a.value, t.bg ? "show-bg" : ""])
      }, [
        l[0] || (l[0] = u("div", { class: "border" }, null, -1)),
        l[1] || (l[1] = u("div", { class: "border" }, null, -1)),
        l[2] || (l[2] = u("div", { class: "border" }, null, -1)),
        l[3] || (l[3] = u("div", { class: "border" }, null, -1)),
        J(i.$slots, "default", {}, void 0, !0)
      ], 2)
    ], 2));
  }
}), ya = /* @__PURE__ */ Y(ga, [["__scopeId", "data-v-5d7945c0"]]), ba = q(ya), wa = ["aria-checked", "aria-disabled"], xa = { class: "toggle-thumb" }, ka = {
  key: 0,
  class: "pulse-effect"
}, $a = /* @__PURE__ */ F({
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
  setup(e, { emit: s }) {
    Ce((c) => ({
      v2ad8abbc: t.inActiveColor,
      v247239f2: t.activeColor
    }));
    const t = e, a = s, r = z(() => {
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
    }), i = z(() => {
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
    }), l = () => {
      if (t.disabled) return;
      const c = !t.modelValue;
      a("update:modelValue", c), a("change", c);
    };
    return (c, h) => (n(), o("div", {
      class: N(["cp-neon-toggle", i.value, r.value, { active: e.modelValue, disabled: e.disabled }]),
      onClick: l,
      "aria-checked": e.modelValue,
      role: "switch",
      "aria-disabled": e.disabled
    }, [
      h[0] || (h[0] = u("div", { class: "toggle-track" }, [
        u("div", { class: "toggle-track-inner" }),
        u("div", { class: "circuit-lines" })
      ], -1)),
      u("div", xa, [
        e.pulseEffect && e.modelValue ? (n(), o("div", ka)) : V("", !0)
      ])
    ], 10, wa));
  }
}), Ca = /* @__PURE__ */ Y($a, [["__scopeId", "data-v-799d9482"]]), Sa = q(Ca), Ma = /* @__PURE__ */ F({
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
  setup(e, { emit: s }) {
    $e();
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
    }), r = z(() => {
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
    return (i, l) => (n(), o("div", {
      class: N(["cp-button-neno", r.value])
    }, [
      u("div", {
        class: N(["button", a.value, t.bg ? "show-bg" : ""])
      }, [
        J(i.$slots, "default", {}, void 0, !0)
      ], 2)
    ], 2));
  }
}), Ia = /* @__PURE__ */ Y(Ma, [["__scopeId", "data-v-d73343d5"]]), Ta = q(Ia), _a = {
  key: 0,
  class: "cp-text-line"
}, Va = /* @__PURE__ */ F({
  name: "CyberText",
  __name: "text",
  props: {
    text: { default: "" },
    shadowColor: { default: "#ff00b3" },
    glitchColor: { default: "#00c3ff" },
    lineColor: { default: "transparent" },
    effect: { default: "glitch" },
    glowing: { type: Boolean, default: !1 },
    animationSpeed: { default: "normal" },
    lineVisible: { type: Boolean, default: !0 },
    tag: { default: "div" },
    disabled: { type: Boolean, default: !1 }
  },
  setup(e) {
    const s = e, t = z(() => s.text || ""), a = z(() => ({
      "--shadow-color": s.shadowColor,
      "--glitch-color": s.glitchColor,
      "--line-color": s.lineColor
    }));
    return (r, i) => (n(), he(Ie(e.tag), {
      class: N([
        "cp-text",
        `cp-text--${e.effect}`,
        `cp-text--${e.animationSpeed}`,
        {
          "cp-text--glowing": e.glowing,
          "cp-text--disabled": e.disabled,
          "cp-text--line-hidden": !e.lineVisible
        }
      ]),
      "data-word": t.value,
      style: K(a.value)
    }, {
      default: me(() => [
        J(r.$slots, "default", {}, () => [
          ge(D(e.text), 1)
        ], !0),
        e.lineVisible ? (n(), o("div", _a)) : V("", !0)
      ]),
      _: 3
    }, 8, ["class", "data-word", "style"]));
  }
}), Ea = /* @__PURE__ */ Y(Va, [["__scopeId", "data-v-0ead2f93"]]), La = q(Ea), Ba = /* @__PURE__ */ F({
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
    const s = e, t = (r, i) => {
      let l = `0px 0px ${r}`;
      for (let c = 1; c <= s.long; c++) {
        const h = a(r, c);
        l += `, ${i === "left" ? "-" : ""}${c}px ${c}px ${h}`;
      }
      return l;
    }, a = (r, i) => {
      const l = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i.exec(r), c = /^rgba?\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})(,\s*([\d.]+))?\)$/i.exec(r);
      if (l) {
        const h = parseInt(l[1], 16), p = parseInt(l[2], 16), $ = parseInt(l[3], 16), C = l[4] ? parseInt(l[4], 16) / 255 : 1, w = Math.max(0, C - i * 0.05);
        return `rgba(${h}, ${p}, ${$}, ${w})`;
      } else if (c) {
        const h = parseInt(c[1], 10), p = parseInt(c[2], 10), $ = parseInt(c[3], 10), C = c[5] ? parseFloat(c[5]) : 1, w = Math.max(0, C - i * 0.05);
        return `rgba(${h}, ${p}, ${$}, ${w})`;
      } else
        throw new Error(`Unsupported color format: ${r}`);
    };
    return (r, i) => (n(), o("div", {
      class: N(["shadow-text", s.direction]),
      style: K({ textShadow: t(s.shadowColor, s.direction) })
    }, [
      J(r.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), za = /* @__PURE__ */ Y(Ba, [["__scopeId", "data-v-baec179b"]]), Na = q(za), Oa = { class: "cp-typing" }, Ra = {
  key: 0,
  class: "typing-text"
}, Da = {
  key: 2,
  class: "typing-text"
}, Aa = /* @__PURE__ */ F({
  name: "CyberTyping",
  __name: "typing",
  props: {
    text: {
      type: String,
      default: ""
    },
    speed: {
      type: Number,
      default: 80
    },
    delay: {
      type: Number,
      default: 500
    },
    loop: {
      type: Boolean,
      default: !1
    },
    loopDelay: {
      type: Number,
      default: 2e3
    },
    cursor: {
      type: Boolean,
      default: !0
    },
    cursorColor: {
      type: String,
      default: "#00e6f6"
    }
  },
  emits: ["finish"],
  setup(e, { emit: s }) {
    const t = e, a = s, r = M("");
    let i = null, l = null, c = 0;
    const h = () => {
      i && (clearInterval(i), i = null), l && (clearTimeout(l), l = null);
    }, p = (m) => {
      c++, r.value = m.slice(0, c), c >= m.length && (clearInterval(i), i = null, a("finish"), t.loop && (l = setTimeout(() => {
        w(m);
      }, t.loopDelay)));
    }, $ = (m) => {
      c--, r.value = m.slice(0, c), c <= 0 && (clearInterval(i), i = null, r.value = "", l = setTimeout(() => C(m), 500));
    }, C = (m) => {
      m && (c = 0, r.value = "", i = setInterval(() => p(m), t.speed));
    }, w = (m) => {
      i = setInterval(() => $(m), Math.max(t.speed / 2, 30));
    };
    return ne(() => t.text, (m) => {
      h(), r.value = "", m && (l = setTimeout(() => C(m), t.delay));
    }), ie(() => {
      t.text && (l = setTimeout(() => C(t.text), t.delay));
    }), ue(() => {
      h();
    }), (m, T) => (n(), o("div", Oa, [
      e.text ? (n(), o("span", Ra, D(r.value), 1)) : V("", !0),
      e.cursor ? (n(), o("span", {
        key: 1,
        class: "typing-cursor",
        style: K({ backgroundColor: e.cursorColor })
      }, null, 4)) : V("", !0),
      e.text ? V("", !0) : (n(), o("span", Da, [
        J(m.$slots, "default", {}, void 0, !0)
      ]))
    ]));
  }
}), Ha = /* @__PURE__ */ Y(Aa, [["__scopeId", "data-v-d20d8455"]]), Pa = q(Ha), Wa = ["src", "alt", "loading", "crossorigin"], Ka = {
  key: 1,
  class: "placeholder"
}, Fa = ["src"], Ya = {
  key: 2,
  class: "error-content"
}, Ga = /* @__PURE__ */ F({
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
    const s = /* @__PURE__ */ Object.assign({}), t = Math.random(), a = (t * 20).toFixed(2), r = ((t * 17 + 3) % 20).toFixed(2), i = ((t * 13 + 7) % 20).toFixed(2), l = e, c = (b) => {
      if (b.startsWith("http://") || b.startsWith("https://") || b.startsWith("/"))
        return b;
      for (const [x, B] of Object.entries(s))
        if (x.includes(b) || b.includes(x.split("/").pop() || ""))
          return B;
      return b;
    }, h = M(!1), p = M(!1), $ = M(""), C = z(() => {
      const b = {};
      return l.width !== "auto" && l.width !== void 0 && (b.width = typeof l.width == "number" ? `${l.width}px` : l.width), l.height !== "auto" && l.height !== void 0 && (b.height = typeof l.height == "number" ? `${l.height}px` : l.height), !b.width && !b.height && (b.display = "inline-block"), b;
    }), w = z(() => p.value && l.errorSrc ? `url(${l.errorSrc})` : $.value ? `url(${$.value})` : "none"), m = z(() => {
      if (!l.fit) return "cover";
      switch (l.fit) {
        case "fill":
          return "100% 100%";
        // 完全填充（可能变形）
        case "scale-down":
          return "contain";
        // 保持比例
        default:
          return l.fit;
      }
    }), T = () => {
      $.value = c(l.src), h.value = !0, p.value = !1;
    }, f = () => {
      if (p.value = !0, l.errorSrc && l.errorSrc !== l.src) {
        const b = new Image();
        b.crossOrigin = l.crossorigin || "", b.src = c(l.errorSrc), b.onload = () => {
          $.value = c(l.errorSrc), h.value = !0;
        }, b.onerror = () => {
          h.value = !0;
        };
      } else
        h.value = !0;
    };
    return ne(() => l.src, () => {
      h.value = !1, p.value = !1, $.value = c(l.src);
    }, { immediate: !0 }), ie(() => {
      l.src && ($.value = c(l.src));
    }), (b, x) => (n(), o("div", {
      class: "cyber-image-wrapper",
      style: K(C.value)
    }, [
      e.src ? (n(), o("img", {
        key: 0,
        src: e.src,
        alt: e.alt,
        loading: e.loading,
        crossorigin: e.crossorigin,
        class: "hidden-image",
        onLoad: T,
        onError: f
      }, null, 40, Wa)) : V("", !0),
      u("div", {
        class: N(["glitch", {
          "is-loaded": h.value && !p.value,
          "is-loading": !h.value && !p.value,
          "is-error": p.value,
          "no-glitch": e.disableGlitch
        }]),
        style: K({
          backgroundImage: w.value,
          backgroundSize: m.value,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          animationDelay: `-${fe(a)}s`
        })
      }, [
        h.value && !p.value && !e.disableGlitch ? (n(), o("div", {
          key: 0,
          class: "glitch-layer",
          style: K({
            backgroundImage: w.value,
            animationDelay: `-${fe(r)}s`,
            "--glitch-delay": `-${fe(i)}s`
          })
        }, null, 4)) : V("", !0),
        !h.value && e.placeholder ? (n(), o("div", Ka, [
          J(b.$slots, "placeholder", {}, () => [
            u("img", {
              src: e.placeholder,
              alt: "Loading..."
            }, null, 8, Fa)
          ], !0)
        ])) : p.value ? (n(), o("div", Ya, [
          J(b.$slots, "error", {}, () => [
            ge(D(e.errorContent), 1)
          ], !0)
        ])) : V("", !0),
        h.value && !p.value ? J(b.$slots, "default", { key: 3 }, void 0, !0) : V("", !0)
      ], 6)
    ], 4));
  }
}), ja = /* @__PURE__ */ Y(Ga, [["__scopeId", "data-v-5749237a"]]), qa = q(ja), Xa = { class: "cyber-magic-text" }, Ua = ["data-text"], Qa = /* @__PURE__ */ F({
  name: "CyberMagicText",
  __name: "magicText",
  setup(e) {
    const s = M(""), t = $e();
    if (t && t.default) {
      let a = t.default();
      s.value = a[0].children;
    }
    return (a, r) => (n(), o("div", Xa, [
      u("span", {
        class: "gradient-text",
        "data-text": s.value
      }, [
        J(a.$slots, "default")
      ], 8, Ua)
    ]));
  }
}), Za = q(Qa), Ja = { class: "imgWrap" }, el = ["src"], tl = /* @__PURE__ */ F({
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
    Ce((c) => ({
      v29922088: t.value + "px"
    }));
    const s = e, t = M(s.imgHeight);
    s.shadow && (t.value = s.imgHeight * 2);
    const a = M(s.imgList.length), r = i(s.imgWidth, 360 / a.value) * 1.6;
    function i(c, h) {
      const p = h * Math.PI / 180;
      return c / (2 * Math.sin(p / 2));
    }
    const l = (c) => {
      const h = 35 + (c + 1) * (360 / a.value), p = i(s.imgWidth, 360 / a.value);
      return {
        transform: `rotateY(${h}deg) translateZ(${p}px)`
      };
    };
    return (c, h) => (n(), o("div", {
      class: "container",
      style: K({
        "--container-width": `${r}px`,
        "--img-width": `${s.imgWidth}px`,
        "--img-height": `${s.imgHeight}px`
      })
    }, [
      u("div", {
        class: N(["stage", { "has-shadow": s.shadow }])
      }, [
        u("div", {
          class: "control",
          style: K({
            "--animation-duration": `${s.animationDuration}s`
          })
        }, [
          u("div", Ja, [
            (n(!0), o(X, null, Z(s.imgList, (p, $) => (n(), o("div", {
              key: $,
              class: "img",
              style: K(l($))
            }, [
              u("img", { src: p }, null, 8, el)
            ], 4))), 128))
          ])
        ], 4)
      ], 2)
    ], 4));
  }
}), al = /* @__PURE__ */ Y(tl, [["__scopeId", "data-v-3d7f1970"]]), ll = q(al), nl = ["aria-expanded", "aria-disabled"], sl = { class: "select-value" }, ol = ["aria-label", "onClick"], il = {
  key: 1,
  class: "select-single"
}, rl = {
  key: 2,
  class: "select-placeholder"
}, cl = {
  key: 0,
  class: "select-dropdown"
}, ul = {
  key: 0,
  class: "select-search"
}, dl = ["placeholder"], fl = {
  key: 1,
  class: "select-options"
}, vl = {
  key: 0,
  class: "select-group-label"
}, hl = ["disabled", "onClick"], ml = {
  key: 0,
  class: "option-check"
}, pl = {
  key: 1,
  class: "option-icon"
}, gl = { class: "option-label" }, yl = {
  key: 2,
  class: "option-shortcut"
}, bl = {
  key: 2,
  class: "select-empty"
}, wl = /* @__PURE__ */ F({
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
  setup(e, { emit: s }) {
    const t = e, a = s, r = M(), i = M(), l = M(!1), c = M(""), h = z(() => t.showCheck !== void 0 ? t.showCheck : t.multiple), p = z(() => {
      const d = [], I = [];
      return t.options.forEach((y, S) => {
        Array.isArray(y.options) ? d.push({
          key: `group-${S}`,
          label: T(y),
          options: y.options
        }) : I.push(y);
      }), I.length && d.unshift({
        key: "default",
        label: "",
        options: I
      }), d;
    }), $ = z(() => p.value.flatMap((d) => d.options)), C = z(() => {
      const d = c.value.trim().toLowerCase();
      return d ? p.value.map((I) => ({
        ...I,
        options: I.options.filter((y) => T(y).toLowerCase().includes(d))
      })).filter((I) => I.options.length) : p.value;
    }), w = z(() => {
      const d = t.multiple ? Array.isArray(t.modelValue) ? t.modelValue : [] : Array.isArray(t.modelValue) ? [] : [t.modelValue ?? null];
      return $.value.filter((I) => d.some((y) => b(y, f(I))));
    }), m = z(() => t.multiple ? Array.isArray(t.modelValue) && t.modelValue.length > 0 : t.modelValue !== "" && t.modelValue !== null && t.modelValue !== void 0), T = (d) => {
      const I = d[t.labelKey] ?? d.label ?? d[t.valueKey] ?? d.value ?? "";
      return String(I);
    }, f = (d) => d[t.valueKey] ?? d.value ?? null, b = (d, I) => d === I, x = (d) => {
      const I = f(d);
      return t.multiple ? (Array.isArray(t.modelValue) ? t.modelValue : []).some((S) => b(S, I)) : b(t.modelValue, I);
    }, B = (d) => {
      t.disabled || l.value === d || (l.value = d, a("visible-change", d), d && t.filterable && ke(() => i.value?.focus()));
    }, H = () => {
      B(!l.value);
    }, Q = (d) => {
      if (t.disabled || d.disabled) return;
      const I = f(d);
      if (t.multiple) {
        const y = Array.isArray(t.modelValue) ? [...t.modelValue] : [], S = y.findIndex((G) => b(G, I));
        S > -1 ? y.splice(S, 1) : y.push(I);
        const _ = $.value.filter((G) => y.some((A) => b(A, f(G))));
        a("update:modelValue", y), a("change", y, _);
        return;
      }
      a("update:modelValue", I), a("change", I, d), B(!1);
    }, g = (d) => {
      if (!t.multiple || t.disabled) return;
      const I = f(d), S = (Array.isArray(t.modelValue) ? [...t.modelValue] : []).filter((G) => !b(G, I)), _ = $.value.filter((G) => S.some((A) => b(A, f(G))));
      a("update:modelValue", S), a("change", S, _);
    }, O = () => {
      const d = t.multiple ? [] : "";
      a("update:modelValue", d), a("change", d, t.multiple ? [] : void 0), a("clear"), c.value = "";
    }, E = (d) => {
      t.disabled || a("focus", d);
    }, R = (d) => {
      a("blur", d);
    }, v = (d) => {
      t.disabled || ((d.key === "Enter" || d.key === " ") && (l.value || (d.preventDefault(), B(!0))), d.key === "Escape" && B(!1));
    }, k = (d) => {
      r.value?.contains(d.target) || B(!1);
    };
    return ne(l, (d) => {
      d || (c.value = "");
    }), ne(() => t.multiple, (d) => {
      d && !Array.isArray(t.modelValue) && a("update:modelValue", []);
    }), ie(() => {
      document.addEventListener("click", k);
    }), Ee(() => {
      document.removeEventListener("click", k);
    }), (d, I) => (n(), o("div", {
      ref_key: "selectRef",
      ref: r,
      class: N(["cp-cyber-select", [
        `theme-${e.theme}`,
        `size-${e.size}`,
        {
          "is-open": l.value,
          "is-disabled": e.disabled,
          "is-multiple": e.multiple
        }
      ]])
    }, [
      u("div", {
        class: "select-control",
        tabindex: "0",
        role: "combobox",
        "aria-expanded": l.value,
        "aria-disabled": e.disabled,
        onClick: H,
        onFocus: E,
        onBlur: R,
        onKeydown: v
      }, [
        u("div", sl, [
          e.multiple && w.value.length ? (n(!0), o(X, { key: 0 }, Z(w.value, (y) => (n(), o("span", {
            key: String(f(y)),
            class: "select-tag",
            onClick: I[0] || (I[0] = se(() => {
            }, ["stop"]))
          }, [
            ge(D(T(y)) + " ", 1),
            u("button", {
              class: "tag-close",
              type: "button",
              "aria-label": `Remove ${T(y)}`,
              onClick: se((S) => g(y), ["stop"])
            }, null, 8, ol)
          ]))), 128)) : !e.multiple && w.value.length ? (n(), o("span", il, D(T(w.value[0])), 1)) : (n(), o("span", rl, D(e.placeholder), 1))
        ]),
        e.clearable && m.value && !e.disabled ? (n(), o("button", {
          key: 0,
          class: "clear-button",
          type: "button",
          "aria-label": "Clear selected value",
          onClick: se(O, ["stop"])
        })) : V("", !0),
        I[3] || (I[3] = u("span", { class: "select-arrow" }, null, -1))
      ], 40, nl),
      ve(Te, { name: "select-dropdown" }, {
        default: me(() => [
          l.value ? (n(), o("div", cl, [
            e.filterable ? (n(), o("div", ul, [
              pe(u("input", {
                ref_key: "searchInputRef",
                ref: i,
                "onUpdate:modelValue": I[1] || (I[1] = (y) => c.value = y),
                type: "text",
                placeholder: e.searchPlaceholder,
                onClick: I[2] || (I[2] = se(() => {
                }, ["stop"])),
                onKeydown: v
              }, null, 40, dl), [
                [Re, c.value]
              ])
            ])) : V("", !0),
            C.value.length ? (n(), o("div", fl, [
              (n(!0), o(X, null, Z(C.value, (y) => (n(), o(X, {
                key: y.key
              }, [
                y.label ? (n(), o("div", vl, D(y.label), 1)) : V("", !0),
                (n(!0), o(X, null, Z(y.options, (S) => (n(), o(X, null, [
                  S.divider ? (n(), o("div", {
                    class: "select-divider",
                    key: `divider-${S.key || Math.random()}`
                  })) : (n(), o("button", {
                    key: `${y.key}-${String(f(S))}`,
                    class: N(["select-option", {
                      selected: x(S),
                      disabled: S.disabled
                    }]),
                    type: "button",
                    disabled: S.disabled,
                    onClick: se((_) => Q(S), ["stop"])
                  }, [
                    h.value ? (n(), o("span", ml)) : V("", !0),
                    S.icon ? (n(), o("span", pl, [
                      (n(), he(Ie(S.icon)))
                    ])) : V("", !0),
                    u("span", gl, D(T(S)), 1),
                    S.shortcut ? (n(), o("span", yl, D(S.shortcut), 1)) : V("", !0)
                  ], 10, hl))
                ], 64))), 256))
              ], 64))), 128))
            ])) : (n(), o("div", bl, D(e.noDataText), 1))
          ])) : V("", !0)
        ]),
        _: 1
      })
    ], 2));
  }
}), xl = /* @__PURE__ */ Y(wl, [["__scopeId", "data-v-f122bad9"]]), kl = q(xl), $l = { class: "cascader-tree" }, Cl = ["disabled", "onClick"], Sl = {
  key: 0,
  class: "option-check"
}, Ml = { class: "option-label" }, Il = {
  key: 1,
  class: "option-arrow"
}, Tl = {
  key: 0,
  class: "cascader-submenu"
}, _l = {
  key: 0,
  class: "cascader-empty"
}, Vl = F({
  name: "CascaderOptionTree"
}), El = /* @__PURE__ */ F({
  ...Vl,
  props: {
    options: {},
    selectedValues: {},
    multiple: { type: Boolean },
    labelKey: {},
    valueKey: {},
    childrenKey: {}
  },
  emits: ["select"],
  setup(e, { emit: s }) {
    const t = e, a = s, r = M(/* @__PURE__ */ new Set()), i = (w) => String(w[t.labelKey] ?? w.label ?? w[t.valueKey] ?? w.value ?? ""), l = (w) => w[t.valueKey] ?? w.value ?? "", c = (w) => {
      const m = w[t.childrenKey] ?? w.children;
      return Array.isArray(m) && m.length > 0;
    }, h = (w) => w[t.childrenKey] ?? w.children ?? [], p = (w) => {
      const m = l(w);
      return t.selectedValues.includes(m);
    }, $ = (w) => {
      const m = l(w);
      return r.value.has(m);
    }, C = (w) => {
      if (w.disabled) return;
      const m = l(w);
      if (c(w)) {
        const T = new Set(r.value);
        T.has(m) ? T.delete(m) : T.add(m), r.value = T;
      } else
        a("select", { option: w, value: m });
    };
    return (w, m) => {
      const T = Le("CascaderOptionTree");
      return n(), o("div", $l, [
        (n(!0), o(X, null, Z(e.options, (f) => (n(), o("div", {
          key: String(l(f)),
          class: "cascader-menu-item"
        }, [
          u("button", {
            class: N(["cascader-option", {
              selected: p(f),
              disabled: f.disabled,
              "has-children": c(f),
              "is-expanded": $(f)
            }]),
            type: "button",
            disabled: f.disabled,
            onClick: se((b) => C(f), ["stop"])
          }, [
            e.multiple ? (n(), o("span", Sl)) : V("", !0),
            u("span", Ml, D(i(f)), 1),
            c(f) ? (n(), o("span", Il)) : V("", !0)
          ], 10, Cl),
          c(f) && $(f) ? (n(), o("div", Tl, [
            ve(T, {
              options: h(f),
              "selected-values": e.selectedValues,
              multiple: e.multiple,
              "label-key": e.labelKey,
              "value-key": e.valueKey,
              "children-key": e.childrenKey,
              onSelect: m[0] || (m[0] = (b) => w.$emit("select", b))
            }, null, 8, ["options", "selected-values", "multiple", "label-key", "value-key", "children-key"])
          ])) : V("", !0)
        ]))), 128)),
        !e.options || e.options.length === 0 ? (n(), o("div", _l, " 暂无数据 ")) : V("", !0)
      ]);
    };
  }
}), Ll = /* @__PURE__ */ Y(El, [["__scopeId", "data-v-561a8a0d"]]), Bl = ["aria-expanded", "aria-disabled"], zl = { class: "cascader-value" }, Nl = ["aria-label", "onClick"], Ol = {
  key: 1,
  class: "cascader-single"
}, Rl = {
  key: 2,
  class: "cascader-placeholder"
}, Dl = { class: "cascader-options" }, Al = /* @__PURE__ */ F({
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
  setup(e, { emit: s }) {
    const t = e, a = s, r = M(), i = M(!1), l = M(""), c = M([]), h = z(() => t.multiple ? Array.isArray(t.modelValue) && t.modelValue.length > 0 : t.modelValue !== "" && t.modelValue !== null && t.modelValue !== void 0), p = (v) => {
      if (!t.showAllLevels) {
        const d = $(t.options, v);
        return d ? w(d) : String(v);
      }
      return C(t.options, v).map((d) => w(d)).join(" / ");
    }, $ = (v, k) => {
      for (const d of v) {
        if (m(d) === k)
          return d;
        const I = T(d);
        if (I.length) {
          const y = $(I, k);
          if (y) return y;
        }
      }
      return null;
    }, C = (v, k) => {
      for (const d of v) {
        if (m(d) === k)
          return [d];
        const I = T(d);
        if (I.length) {
          const y = C(I, k);
          if (y.length)
            return [d, ...y];
        }
      }
      return [];
    }, w = (v) => String(v[t.labelKey] ?? v.label ?? v[t.valueKey] ?? v.value ?? ""), m = (v) => v[t.valueKey] ?? v.value ?? "", T = (v) => v[t.childrenKey] ?? v.children ?? [], f = (v) => {
      t.disabled || i.value === v || (i.value = v, a("visible-change", v));
    }, b = () => {
      f(!i.value);
    }, x = ({ value: v }) => {
      if (!t.disabled)
        if (t.multiple) {
          const k = c.value.indexOf(v);
          k > -1 ? c.value.splice(k, 1) : c.value.push(v), a("update:modelValue", [...c.value]), a("change", [...c.value]);
        } else
          l.value = v, a("update:modelValue", v), a("change", v), f(!1);
    }, B = (v) => {
      t.multiple && (c.value = c.value.filter((k) => k !== v), a("update:modelValue", [...c.value]), a("change", [...c.value]));
    }, H = () => {
      t.multiple ? (c.value = [], a("update:modelValue", [])) : (l.value = "", a("update:modelValue", "")), a("change", t.multiple ? [] : ""), a("clear");
    }, Q = (v) => {
      t.disabled || a("focus", v);
    }, g = (v) => {
      a("blur", v);
    }, O = (v) => {
      t.disabled || ((v.key === "Enter" || v.key === " ") && (i.value || (v.preventDefault(), f(!0))), v.key === "Escape" && f(!1));
    }, E = (v) => {
      r.value?.contains(v.target) || f(!1);
    }, R = z(() => ({
      width: `${r.value?.offsetWidth || 260}px`
    }));
    return ne(() => t.modelValue, (v) => {
      t.multiple ? c.value = Array.isArray(v) ? [...v] : [] : l.value = v;
    }, { immediate: !0 }), ie(() => {
      document.addEventListener("click", E);
    }), Ee(() => {
      document.removeEventListener("click", E);
    }), (v, k) => (n(), o("div", {
      ref_key: "cascaderRef",
      ref: r,
      class: N(["cp-cyber-cascader", [
        `theme-${e.theme}`,
        `size-${e.size}`,
        {
          "is-open": i.value,
          "is-disabled": e.disabled,
          "is-multiple": e.multiple
        }
      ]])
    }, [
      u("div", {
        class: "cascader-control",
        tabindex: "0",
        role: "combobox",
        "aria-expanded": i.value,
        "aria-disabled": e.disabled,
        onClick: b,
        onFocus: Q,
        onBlur: g,
        onKeydown: O
      }, [
        u("div", zl, [
          e.multiple && c.value.length ? (n(!0), o(X, { key: 0 }, Z(c.value, (d, I) => (n(), o("span", {
            key: I,
            class: "cascader-tag"
          }, [
            ge(D(p(d)) + " ", 1),
            u("button", {
              class: "tag-close",
              type: "button",
              "aria-label": `移除 ${p(d)}`,
              onClick: se((y) => B(d), ["stop"])
            }, null, 8, Nl)
          ]))), 128)) : !e.multiple && l.value ? (n(), o("span", Ol, D(p(l.value)), 1)) : (n(), o("span", Rl, D(e.placeholder), 1))
        ]),
        e.clearable && h.value && !e.disabled ? (n(), o("button", {
          key: 0,
          class: "clear-button",
          type: "button",
          "aria-label": "清空",
          onClick: se(H, ["stop"])
        })) : V("", !0),
        k[0] || (k[0] = u("span", { class: "cascader-arrow" }, null, -1))
      ], 40, Bl),
      ve(Te, { name: "cascader-dropdown" }, {
        default: me(() => [
          i.value ? (n(), o("div", {
            key: 0,
            class: "cascader-dropdown",
            style: K(R.value)
          }, [
            u("div", Dl, [
              ve(Ll, {
                options: t.options,
                "selected-values": e.multiple ? c.value : [l.value],
                multiple: e.multiple,
                "label-key": e.labelKey,
                "value-key": e.valueKey,
                "children-key": e.childrenKey,
                onSelect: x
              }, null, 8, ["options", "selected-values", "multiple", "label-key", "value-key", "children-key"])
            ])
          ], 4)) : V("", !0)
        ]),
        _: 1
      })
    ], 2));
  }
}), Hl = /* @__PURE__ */ Y(Al, [["__scopeId", "data-v-46b8205f"]]), Pl = q(Hl), Wl = {
  key: 0,
  class: "tree-connectors",
  "aria-hidden": "true"
}, Kl = ["onClick"], Fl = ["aria-expanded", "aria-label", "onClick"], Yl = {
  key: 1,
  class: "node-expand-placeholder"
}, Gl = { class: "node-label" }, jl = { class: "label-text" }, ql = ["title"], Xl = { class: "status-text" }, Ul = {
  key: 0,
  class: "tree-empty"
}, Ql = {
  key: 1,
  class: "tree-scanline"
}, we = 14, Zl = /* @__PURE__ */ F({
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
  setup(e, { expose: s, emit: t }) {
    const a = e, r = t, i = M([]), l = M([]), c = M(0), h = z(() => {
      const g = [], O = (E, R = 0, v) => {
        E.forEach((k, d) => {
          k._level = R, k._parent = v, k._expanded = k.expanded ?? (a.defaultExpandAll || R === 0), k._selected = k.selected ?? !1, k._isLastChild = d === E.length - 1, g.push(k), k._expanded && k.children && k.children.length > 0 && O(k.children, R + 1, k);
        });
      };
      return O(i.value), g;
    }), p = () => {
      const g = (O, E = 0) => {
        const R = {
          ...O,
          _expanded: O.expanded ?? (a.defaultExpandAll || E === 0),
          _selected: O.selected ?? !1,
          _level: E,
          _parent: void 0,
          _isLastChild: !1
        };
        return O.children && O.children.length > 0 && (R.children = O.children.map((v) => g(v, E + 1))), R;
      };
      i.value = a.data.map((O) => g(O)), l.value = h.value.filter((O) => O._selected);
    }, $ = (g) => !g.children || g.children.length === 0, C = (g) => g._level ?? 0, w = (g) => C(g) * a.indent, m = (g) => {
      const O = C(g);
      return Array.from({ length: Math.max(O - 1, 0) }, (E, R) => R);
    }, T = (g, O) => {
      let E = g, R = C(g);
      for (; E && R > O; )
        E = E._parent, R--;
      return E?._isLastChild ?? !1;
    }, f = (g) => {
      g._expanded = !g._expanded, g.expanded = g._expanded, g._expanded ? r("node-expand", g) : r("node-collapse", g), Q();
    }, b = (g) => {
      a.multiple ? (g._selected = !g._selected, g.selected = g._selected) : g._selected ? (g._selected = !1, g.selected = !1) : (l.value.forEach((O) => {
        O._selected = !1, O.selected = !1;
      }), g._selected = !0, g.selected = !0), x(), r("select-change", l.value), r("node-click", g), a.expandOnClick && !$(g) && f(g);
    }, x = () => {
      l.value = h.value.filter((g) => g._selected);
    }, B = (g) => g.icon ? g.icon : $(g) ? "icon-file" : g._expanded ? "icon-folder-open" : "icon-folder", H = (g) => g ? {
      online: "Online",
      offline: "Offline",
      warning: "Warning",
      error: "Error"
    }[g] : "", Q = () => {
      c.value++;
    };
    return ne(() => a.data, () => {
      p();
    }, { deep: !0, immediate: !0 }), s({
      getSelectedNodes: () => l.value,
      clearSelection: () => {
        l.value.forEach((g) => {
          g._selected = !1, g.selected = !1;
        }), l.value = [], Q();
      }
    }), (g, O) => (n(), o("div", {
      class: N(["cp-cyber-tree cyber-tree", [`theme-${e.theme}`, `effect-${e.effect}`]])
    }, [
      (n(!0), o(X, null, Z(h.value, (E) => (n(), o("div", {
        key: `${E.id}-${E._expanded}-${E._selected}-${c.value}`,
        class: N(["tree-node", {
          expanded: E._expanded,
          leaf: $(E),
          "last-child": E._isLastChild
        }]),
        style: K({ paddingLeft: `${w(E)}px` })
      }, [
        e.showConnectors && C(E) > 0 ? (n(), o("div", Wl, [
          (n(!0), o(X, null, Z(m(E), (R) => (n(), o("span", {
            key: R,
            class: N(["ancestor-line", { hidden: T(E, R) }]),
            style: K({ left: `${R * e.indent + we}px` })
          }, null, 6))), 128)),
          u("span", {
            class: N(["parent-line", { "is-last": E._isLastChild }]),
            style: K({ left: `${(C(E) - 1) * e.indent + we}px` })
          }, null, 6),
          u("span", {
            class: "horizontal-line",
            style: K({
              left: `${(C(E) - 1) * e.indent + we}px`,
              width: `${e.indent - we + 20}px`
            })
          }, null, 4),
          u("span", {
            class: "connector-joint",
            style: K({ left: `${(C(E) - 1) * e.indent + we}px` })
          }, null, 4)
        ])) : V("", !0),
        u("div", {
          class: "node-content-wrapper",
          onClick: se((R) => b(E), ["stop"])
        }, [
          u("div", {
            class: N(["node-content", { selected: E._selected }])
          }, [
            $(E) ? (n(), o("span", Yl)) : (n(), o("button", {
              key: 0,
              class: "node-expand-icon",
              type: "button",
              "aria-expanded": E._expanded,
              "aria-label": E._expanded ? "Collapse node" : "Expand node",
              onClick: se((R) => f(E), ["stop"])
            }, [
              u("span", {
                class: N(["expand-arrow", { rotated: E._expanded }])
              }, null, 2)
            ], 8, Fl)),
            u("span", {
              class: N(["node-icon", B(E)])
            }, [...O[0] || (O[0] = [
              u("span", { class: "icon-core" }, null, -1)
            ])], 2),
            u("span", Gl, [
              u("span", jl, D(E.label), 1)
            ]),
            e.showStatus && E.status ? (n(), o("span", {
              key: 2,
              class: "node-status",
              title: H(E.status)
            }, [
              u("span", {
                class: N(["status-indicator", `status-${E.status}`])
              }, null, 2),
              u("span", Xl, D(E.status), 1)
            ], 8, ql)) : V("", !0)
          ], 2)
        ], 8, Kl)
      ], 6))), 128)),
      h.value.length === 0 ? (n(), o("div", Ul, " No data ")) : V("", !0),
      e.showScanline && e.effect !== "static" ? (n(), o("div", Ql)) : V("", !0)
    ], 2));
  }
}), Jl = /* @__PURE__ */ Y(Zl, [["__scopeId", "data-v-4cbff7be"]]), en = q(Jl), tn = {
  key: 0,
  class: "cp-divider__line cp-divider__line--left"
}, an = {
  key: 1,
  class: "cp-divider__content"
}, ln = {
  key: 2,
  class: "cp-divider__line cp-divider__line--right"
}, nn = /* @__PURE__ */ F({
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
    const s = e, t = z(() => {
      const a = {};
      return s.size && (s.direction === "horizontal" ? a.width = s.size : a.height = s.size), a;
    });
    return (a, r) => (n(), o("div", {
      class: N(["cp-divider", [`cp-divider--${e.direction}`, `cp-divider--${e.type}`]]),
      style: K(t.value)
    }, [
      e.showLeftLine ? (n(), o("div", tn)) : V("", !0),
      a.$slots.default || e.content ? (n(), o("div", an, [
        J(a.$slots, "default", {}, () => [
          ge(D(e.content), 1)
        ], !0)
      ])) : V("", !0),
      e.showRightLine ? (n(), o("div", ln)) : V("", !0)
    ], 6));
  }
}), sn = /* @__PURE__ */ Y(nn, [["__scopeId", "data-v-e3e2783b"]]), on = q(sn), rn = { class: "cp-input-wrapper" }, cn = {
  key: 0,
  class: "cp-input-prefix"
}, un = ["type", "value", "placeholder", "disabled", "readonly", "maxlength", "autocomplete"], dn = {
  key: 0,
  viewBox: "0 0 24 24",
  class: "cp-input-icon"
}, fn = {
  key: 1,
  viewBox: "0 0 24 24",
  class: "cp-input-icon"
}, vn = {
  key: 3,
  class: "cp-input-suffix"
}, hn = {
  key: 4,
  class: "cp-input-scanline"
}, mn = {
  key: 0,
  class: "cp-input-glitch"
}, pn = /* @__PURE__ */ F({
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
  setup(e, { expose: s, emit: t }) {
    const a = e, r = t, i = M(null), l = M(!1), c = M(!1), h = M(""), p = z(() => a.type === "password" && c.value ? "text" : a.type), $ = () => {
      c.value = !c.value;
    }, C = (x) => {
      const B = x.target;
      r("update:modelValue", B.value), r("input", B.value);
    }, w = (x) => {
      l.value = !0, h.value = a.modelValue ?? "", r("focus", x);
    }, m = (x) => {
      l.value = !1, a.modelValue !== h.value && r("change", a.modelValue ?? ""), r("blur", x);
    }, T = (x) => {
      r("keyup", x);
    }, f = (x) => {
      r("keydown", x);
    }, b = () => {
      r("update:modelValue", ""), r("input", ""), r("change", ""), r("clear"), i.value?.focus();
    };
    return s({
      focus: () => {
        i.value?.focus();
      },
      blur: () => {
        i.value?.blur();
      },
      select: () => {
        i.value?.select();
      },
      clear: () => {
        b();
      },
      ref: i
    }), (x, B) => (n(), o("div", {
      class: N([
        "cp-input",
        `cp-input--${e.size}`,
        `cp-input--${e.theme}`,
        {
          "cp-input--disabled": e.disabled,
          "cp-input--focused": l.value,
          "cp-input--has-value": e.modelValue !== "" && e.modelValue != null
        }
      ])
    }, [
      u("div", rn, [
        x.$slots.prefix ? (n(), o("span", cn, [
          J(x.$slots, "prefix", {}, void 0, !0)
        ])) : V("", !0),
        u("input", {
          ref_key: "inputRef",
          ref: i,
          type: p.value,
          value: e.modelValue,
          placeholder: e.placeholder,
          disabled: e.disabled,
          readonly: e.readonly,
          maxlength: e.maxlength,
          autocomplete: e.autocomplete,
          class: "cp-input-inner",
          onInput: C,
          onFocus: w,
          onBlur: m,
          onKeyup: T,
          onKeydown: f
        }, null, 40, un),
        e.clearable && e.modelValue && !e.disabled ? (n(), o("span", {
          key: 1,
          class: "cp-input-clear",
          onMousedown: se(b, ["prevent"])
        }, [...B[0] || (B[0] = [
          u("svg", {
            viewBox: "0 0 16 16",
            class: "cp-input-icon"
          }, [
            u("path", { d: "M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" })
          ], -1)
        ])], 32)) : V("", !0),
        e.type === "password" && e.showPassword ? (n(), o("span", {
          key: 2,
          class: "cp-input-password-toggle",
          onMousedown: se($, ["prevent"])
        }, [
          c.value ? (n(), o("svg", dn, [...B[1] || (B[1] = [
            u("path", { d: "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" }, null, -1)
          ])])) : (n(), o("svg", fn, [...B[2] || (B[2] = [
            u("path", { d: "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5z" }, null, -1),
            u("line", {
              x1: "1.5",
              y1: "1.5",
              x2: "22.5",
              y2: "22.5",
              stroke: "currentColor",
              "stroke-width": "2"
            }, null, -1)
          ])]))
        ], 32)) : V("", !0),
        x.$slots.suffix ? (n(), o("span", vn, [
          J(x.$slots, "suffix", {}, void 0, !0)
        ])) : V("", !0),
        e.scanlineEffect ? (n(), o("div", hn)) : V("", !0)
      ]),
      e.glitchEffect ? (n(), o("div", mn)) : V("", !0)
    ], 2));
  }
}), gn = /* @__PURE__ */ Y(pn, [["__scopeId", "data-v-8f17d18a"]]), yn = q(gn), bn = ["tabindex", "aria-disabled", "aria-expanded"], wn = {
  key: 0,
  class: "cp-menu-item-indicator"
}, xn = {
  key: 1,
  class: "cp-menu-item-icon"
}, kn = { class: "cp-menu-item-label" }, $n = {
  key: 2,
  class: "cp-menu-item-arrow"
}, Cn = /* @__PURE__ */ F({
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
  setup(e, { emit: s }) {
    const t = e, a = s, r = M(!1), i = M(null), l = z(() => !!(t.item.children && t.item.children.length > 0)), c = z(() => t.activeValue === t.item.value), h = z(() => t.expandedValues.includes(t.item.value)), p = (f) => {
      t.item.disabled || (f.stopPropagation(), l.value ? a("toggle-expand", t.item.value) : a("select", t.item));
    }, $ = () => {
      t.item.disabled || (r.value = !0, T(), t.direction === "horizontal" && l.value && a("expand", t.item.value));
    }, C = () => {
      r.value = !1, t.direction === "horizontal" && l.value && (i.value = setTimeout(() => {
        a("collapse", t.item.value);
      }, 180));
    }, w = () => {
      T();
    }, m = () => {
      t.direction === "horizontal" && l.value && (i.value = setTimeout(() => {
        a("collapse", t.item.value);
      }, 150));
    }, T = () => {
      i.value && (clearTimeout(i.value), i.value = null);
    };
    return (f, b) => {
      const x = Le("CyberMenuItem");
      return n(), o("li", {
        class: N([
          "cp-menu-item",
          `cp-menu-item--depth-${e.depth}`,
          {
            "is-active": c.value,
            "is-disabled": e.item.disabled,
            "has-children": l.value,
            "is-expanded": h.value,
            "is-horizontal": e.direction === "horizontal",
            "is-vertical": e.direction === "vertical"
          }
        ]),
        onMouseenter: $,
        onMouseleave: C
      }, [
        u("div", {
          class: N(["cp-menu-item-content", { "cp-menu-item-content--active": c.value }]),
          onClick: p,
          tabindex: e.item.disabled ? -1 : 0,
          "aria-disabled": e.item.disabled,
          "aria-expanded": l.value ? h.value : void 0
        }, [
          c.value && e.depth === 0 ? (n(), o("span", wn)) : V("", !0),
          e.item.icon ? (n(), o("span", xn, [
            u("i", {
              class: N(e.item.icon)
            }, null, 2)
          ])) : V("", !0),
          u("span", kn, D(e.item.label), 1),
          l.value ? (n(), o("span", $n, [...b[4] || (b[4] = [
            u("svg", {
              viewBox: "0 0 16 16",
              class: "cp-menu-item-arrow-icon"
            }, [
              u("path", {
                d: "M5.5 2.5 L10.5 8 L5.5 13.5",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
              })
            ], -1)
          ])])) : V("", !0)
        ], 10, bn),
        ve(Te, { name: "cp-submenu" }, {
          default: me(() => [
            l.value && h.value ? (n(), o("ul", {
              key: 0,
              class: N(["cp-submenu-list", `cp-submenu-list--depth-${e.depth + 1}`]),
              onMouseenter: w,
              onMouseleave: m
            }, [
              (n(!0), o(X, null, Z(e.item.children, (B) => (n(), he(x, {
                key: B.value,
                item: B,
                depth: e.depth + 1,
                direction: e.direction,
                "active-value": e.activeValue,
                "expanded-values": e.expandedValues,
                onSelect: b[0] || (b[0] = (H) => a("select", H)),
                onToggleExpand: b[1] || (b[1] = (H) => a("toggle-expand", H)),
                onExpand: b[2] || (b[2] = (H) => a("expand", H)),
                onCollapse: b[3] || (b[3] = (H) => a("collapse", H))
              }, null, 8, ["item", "depth", "direction", "active-value", "expanded-values"]))), 128))
            ], 34)) : V("", !0)
          ]),
          _: 1
        })
      ], 34);
    };
  }
}), Sn = /* @__PURE__ */ Y(Cn, [["__scopeId", "data-v-0a500770"]]), Mn = { class: "cp-cyber-menu-list" }, In = {
  key: 0,
  class: "cp-cyber-menu-scanline"
}, Tn = /* @__PURE__ */ F({
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
  setup(e, { emit: s }) {
    const t = e, a = s, r = M(t.modelValue), i = M([...t.expandedValues]), l = M([...t.items]), c = (C) => {
      r.value = C.value, a("update:modelValue", C.value), a("change", C.value), a("select", C);
    }, h = (C) => {
      t.direction === "horizontal" ? i.value = [C] : i.value.includes(C) || (i.value = [...i.value, C]), a("update:expandedValues", [...i.value]);
    }, p = (C) => {
      i.value = i.value.filter((w) => w !== C), a("update:expandedValues", [...i.value]);
    }, $ = (C) => {
      const w = [...i.value], m = w.indexOf(C);
      m > -1 ? w.splice(m, 1) : (t.direction === "horizontal" && (w.length = 0), w.push(C)), i.value = w, a("update:expandedValues", [...w]);
    };
    return ne(() => t.modelValue, (C) => {
      r.value = C;
    }), ne(() => t.items, (C) => {
      l.value = [...C];
    }, { deep: !0, immediate: !0 }), ne(() => t.expandedValues, (C) => {
      i.value = [...C];
    }, { deep: !0, immediate: !0 }), (C, w) => (n(), o("div", {
      class: N([
        "cp-cyber-menu",
        `cp-cyber-menu--${e.direction}`,
        `cp-cyber-menu--${e.theme}`,
        {
          [`cp-cyber-menu--${e.effect}`]: e.effect !== "none"
        }
      ])
    }, [
      u("ul", Mn, [
        (n(!0), o(X, null, Z(l.value, (m) => (n(), he(Sn, {
          key: m.value,
          item: m,
          depth: 0,
          direction: e.direction,
          "active-value": r.value,
          "expanded-values": i.value,
          onSelect: c,
          onToggleExpand: $,
          onExpand: h,
          onCollapse: p
        }, null, 8, ["item", "direction", "active-value", "expanded-values"]))), 128))
      ]),
      e.effect === "scanline" ? (n(), o("div", In)) : V("", !0)
    ], 2));
  }
}), _n = /* @__PURE__ */ Y(Tn, [["__scopeId", "data-v-69f0c141"]]), Vn = q(_n), En = { class: "cp-scrollbar__corner" }, Ln = /* @__PURE__ */ F({
  name: "CyberScrollbar",
  __name: "scrollbar",
  props: {
    height: {
      type: [String, Number],
      default: ""
    },
    maxHeight: {
      type: [String, Number],
      default: ""
    },
    theme: {
      type: String,
      default: "primary",
      validator: (e) => ["primary", "success", "warning", "danger", "info"].includes(e)
    },
    size: {
      type: String,
      default: "default",
      validator: (e) => ["small", "default", "large"].includes(e)
    },
    always: {
      type: Boolean,
      default: !1
    }
  },
  setup(e, { expose: s }) {
    const t = e, a = M(null), r = M(null), i = M(null), l = M(null), c = M(null), h = M(null), p = M(0), $ = M(0), C = M(0), w = M(0), m = M(20), T = M(20), f = M(!1), b = M(!1);
    let x = !1, B = "v", H = 0, Q = 0, g = null;
    const O = { small: 5, default: 7, large: 10 }, E = z(() => {
      const L = {};
      return t.height && (L.height = typeof t.height == "number" ? `${t.height}px` : t.height), t.maxHeight && (L.maxHeight = typeof t.maxHeight == "number" ? `${t.maxHeight}px` : t.maxHeight), L;
    }), R = z(() => ({
      height: `${m.value}px`,
      transform: `translateY(${C.value}px)`
    })), v = z(() => ({
      width: `${T.value}px`,
      transform: `translateX(${w.value}px)`
    })), k = () => {
      if (!a.value || !r.value) return;
      const L = a.value, j = r.value, ee = L.clientHeight, te = L.clientWidth, ae = j.scrollHeight, oe = j.scrollWidth, le = O[t.size] + 4, de = O[t.size] + 4, ce = ae > ee, ye = oe > te;
      if (f.value = ce || t.always, b.value = ye || t.always, ce || t.always) {
        const re = ye ? ee - de : ee, Se = re / ae;
        m.value = Math.max(18, re * Se);
        const Me = re - m.value, be = ae - ee;
        C.value = be > 0 ? p.value / be * Me : 0;
      }
      if (ye || t.always) {
        const re = ce ? te - le : te, Se = re / oe;
        T.value = Math.max(18, re * Se);
        const Me = re - T.value, be = oe - te;
        w.value = be > 0 ? $.value / be * Me : 0;
      }
    }, d = (L) => {
      if (!a.value || !r.value) return;
      const j = r.value.scrollHeight - a.value.clientHeight;
      p.value = Math.max(0, Math.min(L, j)), a.value.scrollTop = p.value;
    }, I = (L) => {
      if (!a.value || !r.value) return;
      const j = r.value.scrollWidth - a.value.clientWidth;
      $.value = Math.max(0, Math.min(L, j)), a.value.scrollLeft = $.value;
    }, y = () => {
      !a.value || x || (p.value = a.value.scrollTop, $.value = a.value.scrollLeft, k());
    }, S = (L) => {
      if (!a.value || !r.value) return;
      const j = a.value, ee = r.value, te = ee.scrollHeight - j.clientHeight, ae = ee.scrollWidth - j.clientWidth;
      if (Math.abs(L.deltaX) > Math.abs(L.deltaY) && ae > 0) {
        I($.value + L.deltaX);
        return;
      }
      te > 0 ? d(p.value + L.deltaY) : ae > 0 && I($.value + L.deltaY);
    }, _ = (L) => {
      x = !0, B = "v", H = L.clientY, Q = p.value, document.addEventListener("mousemove", A), document.addEventListener("mouseup", W);
    }, G = (L) => {
      x = !0, B = "h", H = L.clientX, Q = $.value, document.addEventListener("mousemove", A), document.addEventListener("mouseup", W);
    }, A = (L) => {
      if (!x || !a.value || !r.value) return;
      const j = a.value, ee = r.value;
      if (B === "v") {
        const te = L.clientY - H, ae = (i.value?.clientHeight || 0) - m.value, oe = ee.scrollHeight - j.clientHeight;
        if (ae > 0) {
          const le = oe / ae;
          d(Q + te * le);
        }
      } else {
        const te = L.clientX - H, ae = (c.value?.clientWidth || 0) - T.value, oe = ee.scrollWidth - j.clientWidth;
        if (ae > 0) {
          const le = oe / ae;
          I(Q + te * le);
        }
      }
      k();
    }, W = () => {
      x = !1, document.removeEventListener("mousemove", A), document.removeEventListener("mouseup", W);
    }, U = (L) => {
      if (!i.value || !a.value || !r.value || L.target === l.value) return;
      const j = i.value, ee = a.value, te = r.value, ae = L.clientY - j.getBoundingClientRect().top - m.value / 2, oe = j.clientHeight - m.value, le = ae / oe;
      d(le * (te.scrollHeight - ee.clientHeight));
    }, P = (L) => {
      if (!c.value || !a.value || !r.value || L.target === h.value) return;
      const j = c.value, ee = a.value, te = r.value, ae = L.clientX - j.getBoundingClientRect().left - T.value / 2, oe = j.clientWidth - T.value, le = ae / oe;
      I(le * (te.scrollWidth - ee.clientWidth));
    };
    return ie(async () => {
      await ke(), a.value && (a.value.addEventListener("scroll", y), r.value && (g = new ResizeObserver(() => k()), g.observe(r.value), g.observe(a.value)), k());
    }), ue(() => {
      a.value?.removeEventListener("scroll", y), g?.disconnect(), document.removeEventListener("mousemove", A), document.removeEventListener("mouseup", W);
    }), s({
      update: k,
      scrollToY: d,
      scrollToX: I,
      wrapRef: a
    }), (L, j) => (n(), o("div", {
      class: N(["cp-scrollbar", [`theme-${e.theme}`, `size-${e.size}`, { "is-always": e.always }]]),
      style: K(E.value)
    }, [
      u("div", {
        ref_key: "wrapRef",
        ref: a,
        class: "cp-scrollbar__wrap",
        onWheelPassive: S
      }, [
        u("div", {
          ref_key: "viewRef",
          ref: r,
          class: "cp-scrollbar__view"
        }, [
          J(L.$slots, "default", {}, void 0, !0)
        ], 512)
      ], 544),
      pe(u("div", {
        ref_key: "vTrackRef",
        ref: i,
        class: "cp-scrollbar__track is-vertical",
        onMousedown: U
      }, [
        u("div", {
          ref_key: "vThumbRef",
          ref: l,
          class: "cp-scrollbar__thumb is-vertical",
          style: K(R.value),
          onMousedown: se(_, ["prevent"])
        }, null, 36)
      ], 544), [
        [xe, f.value]
      ]),
      pe(u("div", {
        ref_key: "hTrackRef",
        ref: c,
        class: "cp-scrollbar__track is-horizontal",
        onMousedown: P
      }, [
        u("div", {
          ref_key: "hThumbRef",
          ref: h,
          class: "cp-scrollbar__thumb is-horizontal",
          style: K(v.value),
          onMousedown: se(G, ["prevent"])
        }, null, 36)
      ], 544), [
        [xe, b.value]
      ]),
      pe(u("div", En, null, 512), [
        [xe, f.value && b.value]
      ])
    ], 6));
  }
}), Bn = /* @__PURE__ */ Y(Ln, [["__scopeId", "data-v-e1fd3dbc"]]), zn = q(Bn), Nn = [
  Ke,
  et,
  st,
  ht,
  St,
  Ot,
  Wt,
  Qt,
  ca,
  pa,
  Sa,
  ba,
  Ta,
  La,
  Na,
  Yt,
  Pa,
  Vt,
  qa,
  Za,
  kl,
  Pl,
  en,
  ll,
  on,
  yn,
  Vn,
  zn
], On = De([...Nn]);
console.log(
  "%c %s",
  "border: 1px solid #97E3FE;border-radius: 3px;padding: 2px 5px;color: white;font-weight:bolder;background: linear-gradient(to right, #fF717F,#CC54D1,#4EAFFA,#3DE1C3, #F7DA66)",
  "CyberPunk-UI"
);
const Dn = On.install;
export {
  On as default,
  Dn as install,
  De as makeInstaller
};
