import { defineComponent as G, useSlots as ne, computed as z, openBlock as i, createElementBlock as c, normalizeClass as L, createElementVNode as s, unref as ie, renderSlot as U, toDisplayString as F, ref as x, onUnmounted as oe, createBlock as fe, Teleport as ve, createVNode as he, TransitionGroup as ge, withCtx as pe, Fragment as K, renderList as Z, createCommentVNode as R, normalizeStyle as O, watch as ee, nextTick as ce, onMounted as J, withDirectives as me, createTextVNode as ye, vShow as be, watchEffect as _e, useCssVars as ue, getCurrentInstance as Ce, createStaticVNode as ke, reactive as Se, withModifiers as de } from "vue";
const Ie = (e = []) => ({
  install: (a) => {
    e.forEach((l) => a.use(l));
  }
}), Y = (e, t) => (e.install = (a) => {
  for (const l of [e, ...Object.values({})])
    a.component(l.name, l);
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
  setup(e, { emit: t }) {
    const a = ne(), l = e, n = z(() => {
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
    }), o = z(() => {
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
    return (r, h) => (i(), c("div", {
      class: L(["cp-button", o.value])
    }, [
      s("div", {
        class: L(["button", n.value]),
        "data-content": l.content
      }, [
        ie(a) ? U(r.$slots, "default", { key: 0 }, void 0, !0) : (i(), c("span", Te, F(l.content), 1))
      ], 10, Me)
    ], 2));
  }
}), q = (e, t) => {
  const a = e.__vccOpts || e;
  for (const [l, n] of t)
    a[l] = n;
  return a;
}, Ee = /* @__PURE__ */ q(Ne, [["__scopeId", "data-v-c3d9b67f"]]), Le = Y(Ee), Be = { class: "notification-content" }, ze = {
  key: 0,
  class: "notification-icon"
}, Re = { class: "notification-body" }, De = {
  key: 0,
  class: "notification-title"
}, Pe = { class: "notification-message" }, Oe = {
  key: 1,
  class: "notification-actions"
}, Ae = ["onClick"], He = ["onClick"], Fe = /* @__PURE__ */ G({
  name: "CyberNotification",
  __name: "cyberNotification",
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
  setup(e, { expose: t, emit: a }) {
    const l = e, n = a, o = x([]), r = x(!1);
    let h = 0;
    const d = (_) => {
      const M = ++h, u = {
        id: M,
        title: _.title || "",
        message: _.message,
        type: _.type || "info",
        duration: _.duration !== void 0 ? _.duration : l.duration,
        showClose: _.showClose !== void 0 ? _.showClose : !0,
        showIcon: _.showIcon !== void 0 ? _.showIcon : !0,
        actions: _.actions || [],
        effect: _.effect || l.effect,
        onClose: _.onClose || (() => {
        })
      };
      if (o.value.push(u), r.value = !0, u.duration > 0 && setTimeout(() => {
        v(M);
      }, u.duration), o.value.length > l.maxCount) {
        const N = o.value[0];
        v(N.id);
      }
      return M;
    }, v = (_) => {
      const M = o.value.findIndex((u) => u.id === _);
      if (M !== -1) {
        const u = o.value[M];
        u.onClose && u.onClose(), o.value.splice(M, 1), n("close", _);
      }
    }, m = (_, M) => {
      M.callback && M.callback(), v(_.id);
    }, S = () => {
      o.value.length === 0 && (r.value = !1);
    }, T = () => {
      o.value.forEach((_) => {
        _.onClose && _.onClose();
      }), o.value = [], r.value = !1;
    };
    return t({
      // 创建不同类型的通知
      info: (_) => d({ ..._, type: "info" }),
      success: (_) => d({ ..._, type: "success" }),
      warning: (_) => d({ ..._, type: "warning" }),
      error: (_) => d({ ..._, type: "error" }),
      // 通用创建方法
      create: d,
      // 关闭方法
      close: v,
      // 清除所有
      clearAll: T
    }), oe(() => {
      T();
    }), (_, M) => (i(), fe(ve, { to: "body" }, [
      r.value ? (i(), c("div", {
        key: 0,
        class: L(["cp-cyber-notification-container", `position-${e.position}`])
      }, [
        he(ge, {
          name: "notification",
          tag: "div",
          onAfterLeave: S
        }, {
          default: pe(() => [
            (i(!0), c(K, null, Z(o.value, (u) => (i(), c("div", {
              key: u.id,
              class: L(["cp-cyber-notification", `type-${u.type}`, `effect-${u.effect}`])
            }, [
              s("div", Be, [
                u.showIcon ? (i(), c("div", ze, [...M[0] || (M[0] = [
                  s("div", { class: "icon-circle" }, null, -1),
                  s("div", { class: "icon-symbol" }, null, -1)
                ])])) : R("", !0),
                s("div", Re, [
                  u.title ? (i(), c("div", De, F(u.title), 1)) : R("", !0),
                  s("div", Pe, F(u.message), 1),
                  u.actions && u.actions.length ? (i(), c("div", Oe, [
                    (i(!0), c(K, null, Z(u.actions, (N, b) => (i(), c("button", {
                      key: b,
                      class: "action-button",
                      onClick: (A) => m(u, N)
                    }, F(N.text), 9, Ae))), 128))
                  ])) : R("", !0)
                ]),
                u.showClose ? (i(), c("div", {
                  key: 1,
                  class: "notification-close",
                  onClick: (N) => v(u.id)
                }, [...M[1] || (M[1] = [
                  s("span", { class: "close-icon" }, "×", -1)
                ])], 8, He)) : R("", !0)
              ]),
              u.duration > 0 ? (i(), c("div", {
                key: 0,
                class: "notification-progress",
                style: O({ animationDuration: `${u.duration}ms` })
              }, null, 4)) : R("", !0),
              M[2] || (M[2] = s("div", { class: "notification-glitch-effect" }, null, -1)),
              M[3] || (M[3] = s("div", { class: "notification-hologram-effect" }, null, -1))
            ], 2))), 128))
          ]),
          _: 1
        })
      ], 2)) : R("", !0)
    ]));
  }
}), Ge = /* @__PURE__ */ q(Fe, [["__scopeId", "data-v-5ed37d60"]]), Ye = Y(Ge), We = { class: "tooltip-inner" }, Ve = { class: "tooltip-content" }, qe = /* @__PURE__ */ G({
  name: "CyberTooltip",
  __name: "cyberTooltip",
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
  setup(e, { emit: t }) {
    const a = e, l = t, n = x(!1), o = x(null), r = x(null), h = x(null), d = x(a.position), v = x({}), m = () => {
      if (!o.value || !r.value || a.position !== "auto")
        return a.position;
      const f = o.value.getBoundingClientRect(), $ = r.value.getBoundingClientRect(), I = window.innerWidth, E = window.innerHeight, w = f.top, p = I - f.right, k = E - f.bottom, H = f.left, V = [
        { position: "top", space: w },
        { position: "right", space: p },
        { position: "bottom", space: k },
        { position: "left", space: H }
      ];
      V.sort((W, te) => te.space - W.space);
      const P = $.height || 50, B = $.width || 150;
      for (const W of V)
        if (W.position === "top" && W.space >= P + 10 || W.position === "bottom" && W.space >= P + 10 || W.position === "left" && W.space >= B + 10 || W.position === "right" && W.space >= B + 10)
          return W.position;
      return "top";
    }, S = z(() => typeof a.width == "number" ? `${a.width}px` : a.width), T = () => {
      h.value && clearTimeout(h.value), h.value = window.setTimeout(() => {
        n.value = !0, ce(() => {
          a.position === "auto" ? d.value = m() : d.value = a.position, M(), l("show");
        });
      }, a.delay);
    }, _ = () => {
      h.value && clearTimeout(h.value), h.value = window.setTimeout(() => {
        n.value = !1, l("hide");
      }, 100);
    }, M = () => {
      if (!o.value || !r.value) return;
      const f = o.value.getBoundingClientRect(), $ = r.value.getBoundingClientRect(), I = window.pageYOffset || document.documentElement.scrollTop, E = window.pageXOffset || document.documentElement.scrollLeft;
      let w = 0, p = 0;
      const k = 10;
      switch (d.value) {
        case "top":
          w = f.left + f.width / 2 - $.width / 2 + E, p = f.top - $.height - k + I;
          break;
        case "right":
          w = f.right + k + E, p = f.top + f.height / 2 - $.height / 2 + I;
          break;
        case "bottom":
          w = f.left + f.width / 2 - $.width / 2 + E, p = f.bottom + k + I;
          break;
        case "left":
          w = f.left - $.width - k + E, p = f.top + f.height / 2 - $.height / 2 + I;
          break;
      }
      (() => {
        const V = window.innerWidth, P = window.innerHeight, B = 10;
        w < B ? w = B : w + $.width > V - B && (w = V - $.width - B), p < B ? p = B : p + $.height > P - B && (p = P - $.height - B);
      })(), v.value = {
        left: `${w}px`,
        top: `${p}px`,
        width: S.value
      };
    }, u = () => {
      a.trigger === "hover" && T();
    }, N = () => {
      a.trigger === "hover" && _();
    }, b = () => {
      a.trigger === "click" && (n.value ? _() : T());
    }, A = () => {
      a.trigger === "focus" && T();
    }, X = () => {
      a.trigger === "focus" && _();
    }, g = () => {
      n.value && (a.position === "auto" && (d.value = m()), M());
    }, y = () => {
      n.value && (D && clearTimeout(D), D = setTimeout(() => {
        M();
      }, 16));
    };
    ee(
      () => a.position,
      (f) => {
        n.value && ce(() => {
          f === "auto" ? d.value = m() : d.value = f, M();
        });
      }
    );
    let C = [];
    const j = (f) => {
      let $ = [], I = f.parentElement;
      for (; I; ) {
        const E = window.getComputedStyle(I);
        /(auto|scroll)/.test(E.overflow + E.overflowY + E.overflowX) && $.push(I), I = I.parentElement;
      }
      return $.push(document.documentElement), $;
    };
    J(() => {
      if (window.addEventListener("resize", g), window.addEventListener("scroll", y, { passive: !0 }), document.addEventListener("click", (f) => {
        if (n.value && a.trigger === "click") {
          const $ = f.target;
          r.value && !r.value.contains($) && o.value && !o.value.contains($) && _();
        }
      }), o.value) {
        C = j(o.value);
        const f = () => {
          D && clearTimeout(D), D = setTimeout(() => {
            n.value && M();
          }, 16);
        };
        C.forEach(($) => {
          $.addEventListener("scroll", f);
        });
      }
    });
    let D = null;
    return oe(() => {
      window.removeEventListener("resize", g), window.removeEventListener("scroll", y), C.forEach((f) => {
        f.removeEventListener("scroll", y);
      }), h.value && clearTimeout(h.value), D && clearTimeout(D);
    }), (f, $) => (i(), c("div", null, [
      s("div", {
        ref_key: "triggerRef",
        ref: o,
        class: "tooltip-trigger",
        onMouseenter: u,
        onMouseleave: N,
        onClick: b,
        onFocus: A,
        onBlur: X
      }, [
        U(f.$slots, "default", {}, void 0, !0)
      ], 544),
      (i(), fe(ve, { to: "body" }, [
        me(s("div", {
          ref_key: "tooltipRef",
          ref: r,
          class: L([
            "cp-cyber-tooltip",
            `theme-${e.theme}`,
            `effect-${e.effect}`,
            `position-${d.value}`
          ]),
          style: O(v.value)
        }, [
          $[2] || ($[2] = s("div", { class: "tooltip-arrow" }, null, -1)),
          s("div", We, [
            s("div", Ve, [
              U(f.$slots, "content", {}, () => [
                ye(F(e.content), 1)
              ], !0)
            ]),
            $[0] || ($[0] = s("div", { class: "tooltip-scanline" }, null, -1)),
            $[1] || ($[1] = s("div", { class: "tooltip-glitch" }, null, -1))
          ])
        ], 6), [
          [be, n.value]
        ])
      ]))
    ]));
  }
}), Xe = /* @__PURE__ */ q(qe, [["__scopeId", "data-v-82a4305f"]]), je = Y(Xe), Ue = { class: "progress-track" }, Ke = {
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
  __name: "cyberProgress",
  props: {
    percentage: { default: 0 },
    theme: { default: "neon" },
    animated: { type: Boolean, default: !0 },
    showPercentage: { type: Boolean, default: !0 },
    percentagePosition: { default: "outside" },
    showStatus: { type: Boolean }
  },
  setup(e) {
    const t = e, a = z(() => Math.min(100, Math.max(0, t.percentage)).toFixed(0)), l = z(() => {
      const n = Number(a.value);
      return n < 30 ? "INITIALIZING" : n < 60 ? "PROCESSING" : n < 90 ? "LOADING" : n < 100 ? "ALMOST" : "COMPLETE";
    });
    return (n, o) => (i(), c("div", {
      class: L(["cyber-progress", [`theme-${e.theme}`, { animated: e.animated }]])
    }, [
      s("div", Ue, [
        o[0] || (o[0] = s("div", { class: "track-grid" }, null, -1)),
        s("div", {
          class: "progress-bar",
          style: O({ width: e.percentage + "%" })
        }, [
          e.showPercentage && e.percentagePosition === "inside" ? (i(), c("span", Ke, F(a.value) + "% ", 1)) : R("", !0)
        ], 4),
        s("div", Ze, [
          (i(), c(K, null, Z(10, (r) => s("span", {
            key: r,
            class: L(["tick", { active: r * 10 <= e.percentage }])
          }, null, 2)), 64))
        ])
      ]),
      e.showPercentage && e.percentagePosition === "outside" ? (i(), c("span", Qe, F(a.value) + "% ", 1)) : R("", !0),
      e.showStatus ? (i(), c("div", Je, [
        o[1] || (o[1] = s("div", { class: "indicator-dot" }, null, -1)),
        s("span", et, F(l.value), 1)
      ])) : R("", !0)
    ], 2));
  }
}), at = /* @__PURE__ */ q(tt, [["__scopeId", "data-v-308e0558"]]), lt = Y(at), st = {
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
    const t = e, a = x(Number(t.from)), l = x(Number(t.value)), n = x(null), o = x(null), r = x(""), h = (u) => {
      const N = Math.pow(10, t.decimal);
      let A = (Math.round(u * N) / N).toFixed(t.decimal);
      if (t.separator) {
        const X = A.split(".");
        X[0] = X[0].replace(/\B(?=(\d{3})+(?!\d))/g, t.separator), A = X.join(".");
      }
      return A;
    }, d = z(() => h(a.value)), v = z(() => d.value.split("")), m = (u) => u === t.separator || u === ".", S = (u) => !r.value || u >= r.value.length ? !1 : r.value[u] !== v.value[u] && !m(v.value[u]), T = (u) => {
      n.value === null && (n.value = u);
      const N = u - n.value, b = Math.min(N / t.duration, 1), A = Number(t.from), X = Number(t.to !== null ? t.to : l.value), g = A + (X - A) * _(b);
      a.value = g, b < 1 ? o.value = requestAnimationFrame(T) : (a.value = X, n.value = null);
    }, _ = (u) => 1 - Math.pow(1 - u, 4), M = () => {
      r.value = d.value, o.value !== null && cancelAnimationFrame(o.value), n.value = null, o.value = requestAnimationFrame(T);
    };
    return ee(() => t.value, (u) => {
      l.value = Number(u), M();
    }), ee(() => t.to, (u) => {
      u !== null && (l.value = Number(u), M());
    }), J(() => {
      Number(t.from) !== Number(t.value) && M();
    }), oe(() => {
      o.value !== null && cancelAnimationFrame(o.value);
    }), (u, N) => (i(), c("div", {
      class: L(["cp-digital-counter", `theme-${e.theme}`])
    }, [
      e.prefix ? (i(), c("span", st, F(e.prefix), 1)) : R("", !0),
      s("div", nt, [
        (i(!0), c(K, null, Z(v.value, (b, A) => (i(), c("div", {
          key: A,
          class: "digit-container"
        }, [
          m(b) ? (i(), c("div", ot, F(b), 1)) : (i(), c("div", {
            key: 1,
            class: L(["digit-flipper", { animate: S(A) }])
          }, [
            s("div", rt, F(b), 1),
            s("div", it, F(b), 1),
            s("div", ct, F(b), 1),
            s("div", ut, F(b), 1)
          ], 2))
        ]))), 128))
      ]),
      e.suffix ? (i(), c("span", dt, F(e.suffix), 1)) : R("", !0)
    ], 2));
  }
}), vt = /* @__PURE__ */ q(ft, [["__scopeId", "data-v-41a40b63"]]), ht = Y(vt), gt = {
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
  setup(e, { emit: t }) {
    const a = e, l = t, n = x();
    _e(() => {
      n.value?.style && (n.value.style.transform = r.value);
    });
    const o = z(() => {
      h.value = !0;
      let y = 0;
      return document.getElementById("page-scroll")?.clientHeight ? y = document.getElementById("page-scroll")?.clientHeight ?? 0 : y = window.innerHeight, y;
    }), r = z(() => `translateY(-${b.value * o.value}px)`), h = x(!1), d = x(!0);
    function v(y) {
      h.value = !1, d.value && (d.value = !1, N(y), setTimeout(() => {
        d.value = !0;
      }, 500));
    }
    const m = x(0), S = x(0), T = x(0);
    function _(y) {
      m.value = y.touches[0].pageY || y.changedTouches[0].pageY;
    }
    function M(y) {
      y.preventDefault(), h.value = !1, S.value = y.changedTouches[0].pageY || y.touches[0].pageY, T.value = S.value - m.value, Math.abs(T.value) >= 60 ? (b.value < a.items.length - 1 && T.value < 0 && b.value++, b.value > 0 && T.value > 0 && b.value--) : (console.log("else", -b.value * o.value), n.value.style.transform = `translateY(-${b.value * o.value}px)`);
    }
    function u(y) {
      h.value = !0, y.preventDefault(), T.value = (y.changedTouches[0].pageY || y.touches[0].pageY) - m.value, !(b.value === a.items.length - 1 && T.value < 0 || b.value === 0 && T.value > 0) && (console.log("else", -b.value * o.value + T.value * -1), n.value.style.transform = `translateY(-${b.value * o.value + T.value * -1}px)`);
    }
    function N(y) {
      y.wheelDelta < 0 ? (A(), l("change", { from: a.items[b.value - 1], to: a.items[b.value], type: "next" })) : (X(), l("change", { from: a.items[b.value + 1], to: a.items[b.value], type: "last" }));
    }
    const b = x(0);
    function A() {
      b.value < a.items.length - 1 && (b.value++, l("toNext", b.value));
    }
    function X() {
      (b.value > 1 || b.value === 1) && (b.value--, l("toLast", b.value));
    }
    function g(y) {
      h.value = !1, b.value = y;
    }
    return (y, C) => (i(), c("div", gt, [
      s("div", {
        ref_key: "element",
        ref: n,
        class: L([{ activeTranstion: h.value }, "inner-box"]),
        onMousewheel: v,
        onTouchstart: _,
        onTouchend: M,
        onTouchmove: u
      }, [
        U(y.$slots, "default", {}, void 0, !0)
      ], 34),
      s("div", {
        class: L(["cp-full-dot", a.position])
      }, [
        (i(!0), c(K, null, Z(a.items, (j, D) => (i(), c("div", {
          onClick: (f) => g(D),
          class: "cp-full-dot-item"
        }, [
          s("div", {
            class: L(["cp-full-dot-item-bg", { active: D === b.value }])
          }, null, 2),
          a.showTitle ? me((i(), c("div", {
            key: 0,
            class: "show-dec"
          }, F(j.title), 513)), [
            [be, D === b.value]
          ]) : R("", !0)
        ], 8, pt))), 256))
      ], 2)
    ]));
  }
}), yt = /* @__PURE__ */ q(mt, [["__scopeId", "data-v-93eb8a4b"]]), bt = Y(yt), wt = ["src", "alt"], xt = {
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
  setup(e, { emit: t }) {
    const a = e, l = t, n = x(null), o = x(null), r = x(null), h = x(!1), d = x(!1), v = x(!1), m = x(null), S = x(null), T = z(() => a.intensity / 10), _ = () => {
      h.value = !0, d.value = !1, setTimeout(() => {
        u(), a.triggerMode === "auto" ? j() : a.triggerMode === "random" && D();
      }, 0);
    }, M = () => {
      d.value = !0, h.value = !1, console.error("Failed to load image:", a.src);
    }, u = () => {
      if (!r.value || !o.value) return;
      const w = o.value, p = r.value, k = p.getContext("2d");
      if (k) {
        p.width = w.naturalWidth, p.height = w.naturalHeight;
        try {
          k.drawImage(w, 0, 0), S.value = k.getImageData(0, 0, p.width, p.height);
        } catch (H) {
          console.error("Failed to get image data (possibly CORS issue):", H), d.value = !0;
        }
      }
    }, N = (w, p) => {
      if (!S.value) return;
      const k = w.canvas, H = w.getImageData(0, 0, k.width, k.height), V = H.data, P = S.value.data, B = Math.floor(20 * p), W = Math.floor(Math.random() * B), te = Math.floor(Math.random() * B);
      for (let ae = 0; ae < k.height; ae++)
        for (let le = 0; le < k.width; le++) {
          const Q = (ae * k.width + le) * 4, se = Math.min(Math.max(le + W, 0), k.width - 1), we = (Math.min(Math.max(ae + te, 0), k.height - 1) * k.width + se) * 4;
          V[Q] = P[we];
          const xe = Math.min(Math.max(le - W, 0), k.width - 1), $e = (Math.min(Math.max(ae - te, 0), k.height - 1) * k.width + xe) * 4;
          V[Q + 2] = P[$e + 2], V[Q + 1] = P[Q + 1];
        }
      w.putImageData(H, 0, 0);
    }, b = (w, p) => {
      if (!S.value) return;
      const k = w.canvas;
      w.putImageData(S.value, 0, 0);
      const H = Math.max(1, Math.floor(5 / p)), V = 0.5 + p * 0.1;
      for (let P = 0; P < k.height; P += H * 2)
        w.fillStyle = `rgba(255, 255, 255, ${V})`, w.fillRect(0, P, k.width, H);
    }, A = (w, p) => {
      if (!S.value) return;
      const k = w.canvas;
      w.putImageData(S.value, 0, 0);
      const H = Math.max(4, Math.floor(p * 8));
      if (Math.random() > 0.5)
        for (let P = 0; P < k.height; P += H)
          for (let B = 0; B < k.width; B += H) {
            const W = w.getImageData(B, P, 1, 1).data;
            w.fillStyle = `rgb(${W[0]}, ${W[1]}, ${W[2]})`, w.fillRect(B, P, H, H);
          }
      else {
        const P = Math.floor(p * 3);
        for (let B = 0; B < P; B++) {
          const W = Math.floor(Math.random() * (k.width - 50)), te = Math.floor(Math.random() * (k.height - 50)), ae = Math.floor(Math.random() * 100 * p) + 30, le = Math.floor(Math.random() * 80 * p) + 20;
          for (let Q = te; Q < te + le; Q += H)
            for (let se = W; se < W + ae; se += H)
              if (se < k.width && Q < k.height) {
                const re = w.getImageData(se, Q, 1, 1).data;
                w.fillStyle = `rgb(${re[0]}, ${re[1]}, ${re[2]})`, w.fillRect(se, Q, H, H);
              }
        }
      }
    }, X = (w, p) => {
      if (!S.value) return;
      const k = w.canvas, H = w.getImageData(0, 0, k.width, k.height), V = H.data, P = 0.2 + p * 0.05;
      for (let B = 0; B < V.length; B += 4)
        Math.random() < P && (Math.random() > 0.5 ? (V[B] = 255, V[B + 1] = 255, V[B + 2] = 255) : (V[B] = Math.floor(Math.random() * 256), V[B + 1] = Math.floor(Math.random() * 256), V[B + 2] = Math.floor(Math.random() * 256)));
      w.putImageData(H, 0, 0);
    }, g = (w, p) => {
      [...["rgb-shift", "scanline", "pixelate", "noise"]].sort(() => 0.5 - Math.random()).slice(0, 2 + Math.floor(Math.random() * 2)).forEach((P) => {
        switch (P) {
          case "rgb-shift":
            N(w, p);
            break;
          case "scanline":
            b(w, p);
            break;
          case "pixelate":
            A(w, p);
            break;
          case "noise":
            X(w, p);
            break;
        }
      });
    }, y = () => {
      if (!r.value || !S.value) return;
      const p = r.value.getContext("2d");
      if (p) {
        switch (p.putImageData(S.value, 0, 0), a.glitchType) {
          case "rgb-shift":
            N(p, T.value);
            break;
          case "scanline":
            b(p, T.value);
            break;
          case "pixelate":
            A(p, T.value);
            break;
          case "noise":
            X(p, T.value);
            break;
          case "combined":
            g(p, T.value);
            break;
        }
        v.value = !0, l("glitch-start");
      }
    }, C = () => {
      if (!r.value || !S.value) return;
      const p = r.value.getContext("2d");
      p && (p.putImageData(S.value, 0, 0), v.value = !1, l("glitch-end"));
    }, j = () => {
      m.value && clearInterval(m.value), y(), a.animated && (m.value = window.setInterval(() => {
        y();
      }, a.interval));
    }, D = () => {
      m.value && clearInterval(m.value), m.value = window.setInterval(() => {
        Math.random() < 0.5 && (y(), setTimeout(() => {
          C();
        }, 200 + Math.random() * 300));
      }, a.interval);
    }, f = () => {
      m.value && (clearInterval(m.value), m.value = null), C();
    }, $ = () => {
      a.triggerMode === "hover" && j();
    }, I = () => {
      a.triggerMode === "hover" && !a.animated && f();
    }, E = () => {
      a.triggerMode === "click" && (v.value ? f() : j());
    };
    return ee(() => [a.src, a.glitchType, a.intensity], () => {
      a.src && (h.value = !1, d.value = !1), v.value && y();
    }), J(() => {
      o.value && o.value.complete && o.value.naturalHeight !== 0 && _();
    }), oe(() => {
      m.value && clearInterval(m.value);
    }), (w, p) => (i(), c("div", {
      class: L(["cp-glitch-image", { animated: e.animated }]),
      onMouseenter: $,
      onMouseleave: I,
      onClick: E
    }, [
      s("div", {
        class: "image-container",
        ref_key: "imageContainerRef",
        ref: n
      }, [
        s("img", {
          src: e.src,
          alt: e.alt,
          ref_key: "imageRef",
          ref: o,
          class: "original-image",
          crossOrigin: "anonymous",
          onLoad: _,
          onError: M
        }, null, 40, wt),
        h.value && !d.value ? (i(), c("canvas", {
          key: 0,
          ref_key: "glitchCanvasRef",
          ref: r,
          class: "glitch-canvas"
        }, null, 512)) : R("", !0),
        !h.value && !d.value ? (i(), c("div", xt, [...p[0] || (p[0] = [
          s("div", { class: "loading-text" }, "Loading...", -1)
        ])])) : R("", !0),
        d.value ? (i(), c("div", $t, [...p[1] || (p[1] = [
          s("div", { class: "error-text" }, "Image Load Failed", -1)
        ])])) : R("", !0)
      ], 512)
    ], 34));
  }
}), Ct = /* @__PURE__ */ q(_t, [["__scopeId", "data-v-b537a1f3"]]), kt = Y(Ct), St = ["data-progress"], It = { class: "progress-container" }, Mt = {
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
    const t = e, a = x(null), l = x(null), n = z(() => t.direction === "vertical" ? "vertical" : "horizontal"), o = z(() => {
      const d = t.direction === "vertical" ? "height" : "width", v = t.indeterminate ? "100%" : `${t.progress}%`;
      return {
        [d]: v,
        backgroundColor: t.color,
        boxShadow: `0 0 ${t.glitchIntensity * 2}px ${t.color}`
      };
    }), r = () => {
      if (!a.value) return;
      const d = a.value.querySelector(".glitch-effect");
      if (!d) return;
      const v = () => {
        if (!d) return;
        if (Math.random() < t.glitchIntensity / 20) {
          const S = Math.random() * t.glitchIntensity - t.glitchIntensity / 2, T = Math.random() * t.glitchIntensity - t.glitchIntensity / 2, _ = Math.random() * t.glitchIntensity - t.glitchIntensity / 2, M = Math.random() * t.glitchIntensity / 2;
          d.style.transform = `translate(${S}px, ${T}px) skew(${_}deg)`, d.style.filter = `blur(${M}px)`, d.style.opacity = "1", setTimeout(() => {
            d && (d.style.transform = "translate(0, 0) skew(0)", d.style.filter = "blur(0)", d.style.opacity = "0");
          }, 150);
        }
      };
      l.value = window.setInterval(() => {
        v();
      }, 500);
    };
    let h = t.progress;
    return ee(() => t.progress, (d) => {
      if (d !== h) {
        if (a.value) {
          const v = a.value.querySelector(".glitch-effect");
          if (v) {
            const m = Math.random() * t.glitchIntensity * 2 - t.glitchIntensity, S = Math.random() * t.glitchIntensity - t.glitchIntensity / 2;
            v.style.transform = `translate(${m}px, ${S}px)`, v.style.opacity = "1", setTimeout(() => {
              v && (v.style.transform = "translate(0, 0)", v.style.opacity = "0");
            }, 300);
          }
        }
        h = d;
      }
    }), J(() => {
      r();
    }), oe(() => {
      l.value && clearInterval(l.value);
    }), (d, v) => (i(), c("div", {
      class: L(["cp-glitch-progress", n.value, { indeterminate: e.indeterminate }]),
      "data-progress": e.progress
    }, [
      s("div", It, [
        s("div", {
          class: "progress-bar",
          style: O(o.value),
          ref_key: "progressBarRef",
          ref: a
        }, [...v[0] || (v[0] = [
          s("div", { class: "glitch-effect" }, null, -1)
        ])], 4),
        e.showText && !e.indeterminate ? (i(), c("div", Mt, F(e.progress) + "% ", 1)) : R("", !0)
      ])
    ], 10, St));
  }
}), Nt = /* @__PURE__ */ q(Tt, [["__scopeId", "data-v-27854e11"]]), Et = Y(Nt), Lt = { class: "glow-text" }, Bt = /* @__PURE__ */ G({
  name: "CyberGlowText",
  __name: "glowText",
  props: {
    color: {
      type: String,
      default: "#e91e84"
    }
  },
  setup(e) {
    const t = e;
    return J(() => {
      document.documentElement.style.setProperty("--child-color", t.color);
    }), (a, l) => (i(), c("div", Lt, [
      U(a.$slots, "default", {}, void 0, !0)
    ]));
  }
}), zt = /* @__PURE__ */ q(Bt, [["__scopeId", "data-v-986b354d"]]), Rt = Y(zt), Dt = ["tabindex", "aria-disabled", "aria-label"], Pt = { class: "holo-card-content" }, Ot = {
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
    ue((u) => ({
      v6fc87eab: l.hologramColor
    }));
    const t = Ce(), a = ne(), l = e, n = x({ x: 0, y: 0 }), o = x(!1), d = ((u, N) => {
      let b;
      return function() {
        const A = arguments, X = t;
        b || (u.apply(X, A), b = !0, setTimeout(() => b = !1, N));
      };
    })((u) => {
      if (l.disabled) return;
      const N = u.currentTarget.getBoundingClientRect();
      n.value = {
        x: (u.clientX - N.left) / N.width * 2 - 1,
        y: (u.clientY - N.top) / N.height * 2 - 1
      }, o.value = !0;
    }, 16), v = () => {
      o.value = !1, n.value = { x: 0, y: 0 };
    }, m = () => {
      l.disabled || (o.value = !0, n.value = { x: 0, y: 0 });
    }, S = z(() => [(() => {
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
    })()]), T = z(() => {
      const u = {};
      if (l.rounded || (u.borderRadius = "0"), l.disabled && (u.cursor = "not-allowed", u.opacity = "0.6"), !o.value || l.disabled) return u;
      const N = n.value.y * 10, b = -n.value.x * 10;
      return {
        ...u,
        transform: `perspective(1000px) rotateX(${N}deg) rotateY(${b}deg) scale3d(1.05, 1.05, 1.05)`,
        transition: "transform 0.1s ease"
      };
    }), _ = z(() => {
      if (!o.value || l.disabled) return {};
      const u = Math.max(-50, Math.min(50, n.value.x * 10)), N = Math.max(-50, Math.min(50, n.value.y * 10));
      return {
        background: `radial-gradient(circle at ${50 + u}% ${50 + N}%, ${l.hologramColor}33, transparent 70%)`,
        opacity: 0.8,
        transition: "background 0.1s ease"
      };
    }), M = z(() => {
      const u = l.glowIntensity / 100;
      return {
        boxShadow: `0 0 ${10 + l.glowIntensity / 5}px ${l.hologramColor}${Math.floor(u * 99).toString(16).padStart(2, "0")}`,
        opacity: o.value && !l.disabled ? u : u * 0.5
      };
    });
    return J(() => {
      ce(() => {
      });
    }), (u, N) => (i(), c("div", {
      class: L([
        "cp-holo-card",
        `depth-${e.depth}`,
        S.value,
        `theme-${e.theme}`,
        `effect-${e.effect}`
      ]),
      style: O(T.value),
      onMousemove: N[0] || (N[0] = //@ts-ignore
      (...b) => ie(d) && ie(d)(...b)),
      onMouseleave: v,
      onFocus: m,
      onBlur: v,
      tabindex: e.disabled ? -1 : 0,
      role: "button",
      "aria-disabled": e.disabled,
      "aria-label": e.title
    }, [
      s("div", Pt, [
        e.title && !ie(a).title ? (i(), c("div", Ot, F(e.title), 1)) : R("", !0),
        U(u.$slots, "title", {}, void 0, !0),
        U(u.$slots, "default", {}, void 0, !0),
        U(u.$slots, "footer", {}, void 0, !0)
      ]),
      s("div", {
        class: "holo-card-hologram-effect",
        style: O(_.value)
      }, null, 4),
      s("div", {
        class: "holo-card-glow",
        style: O(M.value)
      }, null, 4)
    ], 46, Dt));
  }
}), Ht = /* @__PURE__ */ q(At, [["__scopeId", "data-v-30c0c309"]]), Ft = Y(Ht), Gt = { class: "loader-container" }, Yt = {
  key: 0,
  class: "cube-loader"
}, Wt = {
  key: 1,
  class: "sphere-loader"
}, Vt = { class: "sphere" }, qt = {
  key: 2,
  class: "datastream-loader"
}, Xt = {
  key: 3,
  class: "circuit-loader"
}, jt = { class: "circuit-board" }, Ut = {
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
    ue((d) => ({
      c40498b2: d.$props.color,
      v7f665050: a
    }));
    const t = e, a = (6 / t.speed).toString() + "s", l = z(() => {
      switch (t.size) {
        case "small":
          return "small-size";
        case "default":
          return "default-size";
        case "large":
          return "large-size";
        default:
          return "default-size";
      }
    }), n = x(""), o = x(0), r = x(null), h = () => {
      if (!t.text) return;
      o.value = 0, n.value = "";
      const d = () => {
        o.value < t.text.length ? (n.value += t.text[o.value], o.value++) : setTimeout(() => {
          o.value = 0, n.value = "";
        }, 1e3);
      }, v = 100 / t.speed;
      r.value = window.setInterval(d, v);
    };
    return ee(() => t.text, () => {
      r.value && clearInterval(r.value), h();
    }), J(() => {
      h();
    }), oe(() => {
      r.value && clearInterval(r.value);
    }), (d, v) => (i(), c("div", {
      class: L(["cp-holo-loader", l.value, { "transparent-bg": e.transparent }])
    }, [
      s("div", Gt, [
        s("div", {
          class: L(["holo-projection", `type-${e.type}`])
        }, [
          e.type === "cube" || e.type === "split" ? (i(), c("div", Yt, [...v[0] || (v[0] = [
            ke('<div class="cube" data-v-6df1b911><div class="cube-face front" data-v-6df1b911></div><div class="cube-face back" data-v-6df1b911></div><div class="cube-face right" data-v-6df1b911></div><div class="cube-face left" data-v-6df1b911></div><div class="cube-face top" data-v-6df1b911></div><div class="cube-face bottom" data-v-6df1b911></div></div>', 1)
          ])])) : e.type === "sphere" ? (i(), c("div", Wt, [
            s("div", Vt, [
              (i(), c(K, null, Z(3, (m) => s("div", {
                class: "sphere-ring",
                key: m
              })), 64))
            ])
          ])) : e.type === "datastream" ? (i(), c("div", qt, [
            (i(), c(K, null, Z(10, (m) => s("div", {
              class: "data-line",
              key: m
            })), 64))
          ])) : e.type === "circuit" ? (i(), c("div", Xt, [
            s("div", jt, [
              (i(), c(K, null, Z(5, (m) => s("div", {
                class: "circuit-path",
                key: m
              })), 64)),
              (i(), c(K, null, Z(6, (m) => s("div", {
                class: "circuit-node",
                key: m + 10
              })), 64))
            ])
          ])) : R("", !0)
        ], 2),
        e.text ? (i(), c("div", Ut, [
          s("span", Kt, F(n.value), 1),
          v[1] || (v[1] = s("span", { class: "cursor" }, "_", -1))
        ])) : R("", !0),
        v[2] || (v[2] = s("div", { class: "holo-base" }, [
          s("div", { class: "base-glow" })
        ], -1))
      ])
    ], 2));
  }
}), Qt = /* @__PURE__ */ q(Zt, [["__scopeId", "data-v-6df1b911"]]), Jt = Y(Qt), ea = { class: "header-row" }, ta = { class: "header-text" }, aa = { class: "cell-text" }, la = {
  key: 0,
  class: "row-scanline"
}, sa = /* @__PURE__ */ G({
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
    const t = e, a = x(null), l = x(!1), n = x(!0), o = x(1), r = x(0), h = x(!1), d = x(0), v = Se([]);
    t.data.length > 0 && v.splice(0, v.length, ...t.data);
    let m = 0;
    const S = () => `row-${++m}-${Date.now()}`, T = z(() => t.rowNum * t.rowHeight), _ = z(() => T.value), M = z(() => {
      const f = v.length, $ = t.rowNum;
      if (f === 0) return [];
      if (f <= $)
        return v.map((p, k) => ({
          key: p._uniqueKey || S(),
          data: p,
          index: k
        }));
      let I = [...v];
      f > $ && f < 2 * $ && (I = [...I, ...I]), I = I.map((p, k) => ({
        key: p._uniqueKey || S(),
        data: p,
        index: k,
        scroll: k
      }));
      let E = I.slice(r.value);
      return E.push(...I.slice(0, r.value)), E.slice(0, $);
    }), u = (f) => t.columns[f]?.width ? t.columns[f].width : "auto", N = (f) => f === "center" ? "center" : f === "right" ? "flex-end" : "flex-start", b = () => t.theme === "neon" ? "rgba(0, 230, 246, 0.15)" : t.theme === "hologram" ? "rgba(138, 43, 226, 0.2)" : t.theme === "terminal" ? "rgba(0, 255, 0, 0.15)" : t.theme === "matrix" ? "rgba(0, 255, 65, 0.15)" : "rgba(0, 230, 246, 0.15)", A = (f) => (r.value + f) % v.length % 2 === 0 ? "var(--table-row-bg)" : "var(--table-row-hover)", X = (f, $) => {
      const I = $.split(".");
      let E = f;
      for (const w of I)
        E = E?.[w];
      return E ?? "";
    }, g = async () => {
      if (!(l.value || !n.value)) {
        l.value = !0;
        try {
          if (t.remoteMethod) {
            const f = await t.remoteMethod({
              page: o.value,
              size: t.bufferSize * 10
            });
            if (f.data && f.data.length > 0) {
              const $ = f.data.map((I) => (I._uniqueKey || (I._uniqueKey = S()), I));
              o.value === 1 ? v.splice(0, v.length, ...$) : v.push(...$), t.data && t.data.splice(0, t.data.length, ...v);
            }
            n.value = f.hasMore ?? !1, o.value++;
          } else t.loadMore && await t.loadMore();
        } catch (f) {
          console.error("Failed to load more data:", f), n.value = !1;
        } finally {
          l.value = !1;
        }
      }
    }, y = async () => {
      if (!t.autoScroll || h.value) return;
      const f = v.length, $ = t.rowNum;
      if (f <= $ || (await new Promise((E) => setTimeout(E, t.waitTime)), h.value)) return;
      const I = async () => {
        if (h.value) return;
        const E = d.value, w = t.scrollType === "page" ? $ : 1;
        r.value = (r.value + w) % f;
        const p = t.scrollType === "page" ? 500 : 300;
        await new Promise((k) => setTimeout(k, p)), !(d.value !== E || h.value) && (await new Promise((k) => setTimeout(k, t.waitTime)), !(d.value !== E || h.value) && I());
      };
      I();
    }, C = () => {
      d.value = (d.value + 1) % 999999;
    }, j = () => {
      t.hoverPause && (h.value = !0, C());
    }, D = () => {
      t.hoverPause && (h.value = !1, y());
    };
    return J(() => {
      t.remoteMethod && v.length === 0 && g(), t.autoScroll && y();
    }), (f, $) => (i(), c("div", {
      class: L(["cyber-infinite-table", [`theme-${e.theme}`, `scroll-${e.scrollType}`]])
    }, [
      s("div", {
        class: "table-header",
        style: O({ backgroundColor: b() })
      }, [
        s("div", ea, [
          (i(!0), c(K, null, Z(e.columns, (I, E) => (i(), c("div", {
            key: I.field || E,
            class: "header-cell",
            style: O({
              width: u(E),
              minWidth: I.minWidth || "100px",
              textAlign: I.align || "left"
            })
          }, [
            s("div", {
              class: "header-content",
              style: O({ justifyContent: N(I.align || "left") })
            }, [
              s("span", ta, F(I.title), 1)
            ], 4)
          ], 4))), 128))
        ])
      ], 4),
      s("div", {
        class: "table-body",
        ref_key: "bodyRef",
        ref: a,
        onMouseenter: j,
        onMouseleave: D
      }, [
        s("div", {
          class: "rows-container",
          style: O({ height: _.value + "px" })
        }, [
          he(ge, { name: "scroll-list" }, {
            default: pe(() => [
              (i(!0), c(K, null, Z(M.value, (I) => (i(), c("div", {
                class: "table-row",
                key: I.key,
                style: O({
                  height: e.rowHeight + "px",
                  lineHeight: e.rowHeight + "px",
                  backgroundColor: A(I.index)
                })
              }, [
                (i(!0), c(K, null, Z(e.columns, (E, w) => (i(), c("div", {
                  key: E.field || w,
                  class: "table-cell",
                  style: O({
                    width: u(w),
                    minWidth: E.minWidth || "100px",
                    justifyContent: N(E.align || "left")
                  })
                }, [
                  U(f.$slots, E.field, {
                    row: I.data,
                    column: E
                  }, () => [
                    s("span", aa, F(X(I.data, E.field)), 1)
                  ], !0)
                ], 4))), 128)),
                e.showScanline ? (i(), c("div", la)) : R("", !0)
              ], 4))), 128))
            ]),
            _: 3
          })
        ], 4)
      ], 544),
      $[0] || ($[0] = s("div", { class: "table-border-effect" }, null, -1))
    ], 2));
  }
}), na = /* @__PURE__ */ q(sa, [["__scopeId", "data-v-02f0dd14"]]), oa = Y(na), ra = /* @__PURE__ */ G({
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
  setup(e, { emit: t }) {
    ne();
    const a = e, l = z(() => {
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
    }), n = z(() => {
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
    return (o, r) => (i(), c("div", {
      class: L(["cp-button-neno", n.value])
    }, [
      s("div", {
        class: L(["button", l.value, a.bg ? "show-bg" : ""])
      }, [
        r[0] || (r[0] = s("div", { class: "border" }, null, -1)),
        r[1] || (r[1] = s("div", { class: "border" }, null, -1)),
        r[2] || (r[2] = s("div", { class: "border" }, null, -1)),
        r[3] || (r[3] = s("div", { class: "border" }, null, -1)),
        U(o.$slots, "default", {}, void 0, !0)
      ], 2)
    ], 2));
  }
}), ia = /* @__PURE__ */ q(ra, [["__scopeId", "data-v-c8c24548"]]), ca = Y(ia), ua = ["aria-checked", "aria-disabled"], da = { class: "toggle-thumb" }, fa = {
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
  setup(e, { emit: t }) {
    ue((h) => ({
      v2ad8abbc: a.inActiveColor,
      v247239f2: a.activeColor
    }));
    const a = e, l = t, n = z(() => {
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
    }), o = z(() => {
      switch (a.shape) {
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
      if (a.disabled) return;
      const h = !a.modelValue;
      l("update:modelValue", h), l("change", h);
    };
    return (h, d) => (i(), c("div", {
      class: L(["cp-neon-toggle", o.value, n.value, { active: e.modelValue, disabled: e.disabled }]),
      onClick: r,
      "aria-checked": e.modelValue,
      role: "switch",
      "aria-disabled": e.disabled
    }, [
      d[0] || (d[0] = s("div", { class: "toggle-track" }, [
        s("div", { class: "toggle-track-inner" }),
        s("div", { class: "circuit-lines" })
      ], -1)),
      s("div", da, [
        e.pulseEffect && e.modelValue ? (i(), c("div", fa)) : R("", !0)
      ])
    ], 10, ua));
  }
}), ha = /* @__PURE__ */ q(va, [["__scopeId", "data-v-799d9482"]]), ga = Y(ha), pa = /* @__PURE__ */ G({
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
  setup(e, { emit: t }) {
    ne();
    const a = e, l = z(() => {
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
    }), n = z(() => {
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
    return (o, r) => (i(), c("div", {
      class: L(["cp-button-neno", n.value])
    }, [
      s("div", {
        class: L(["button", l.value, a.bg ? "show-bg" : ""])
      }, [
        U(o.$slots, "default", {}, void 0, !0)
      ], 2)
    ], 2));
  }
}), ma = /* @__PURE__ */ q(pa, [["__scopeId", "data-v-f4ab33ea"]]), ya = Y(ma), ba = ["data-word"], wa = /* @__PURE__ */ G({
  name: "CyberText",
  __name: "text",
  props: {
    lineColor: {
      type: String,
      default: "#fff"
    }
  },
  setup(e) {
    const t = x(""), a = ne();
    if (a && a.default) {
      let n = a.default();
      t.value = n[0].children;
    }
    const l = e;
    return (n, o) => (i(), c("div", {
      class: "cp-text",
      "data-word": t.value
    }, [
      U(n.$slots, "default", {}, void 0, !0),
      s("div", {
        class: "cp-text-line",
        style: O("background: " + l.lineColor)
      }, null, 4)
    ], 8, ba));
  }
}), xa = /* @__PURE__ */ q(wa, [["__scopeId", "data-v-3aa7f29f"]]), $a = Y(xa), _a = /* @__PURE__ */ G({
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
    const t = e, a = (n, o) => {
      let r = `0px 0px ${n}`;
      for (let h = 1; h <= t.long; h++) {
        const d = l(n, h);
        r += `, ${o === "left" ? "-" : ""}${h}px ${h}px ${d}`;
      }
      return r;
    }, l = (n, o) => {
      const r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i.exec(n), h = /^rgba?\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})(,\s*([\d.]+))?\)$/i.exec(n);
      if (r) {
        const d = parseInt(r[1], 16), v = parseInt(r[2], 16), m = parseInt(r[3], 16), S = r[4] ? parseInt(r[4], 16) / 255 : 1, T = Math.max(0, S - o * 0.05);
        return `rgba(${d}, ${v}, ${m}, ${T})`;
      } else if (h) {
        const d = parseInt(h[1], 10), v = parseInt(h[2], 10), m = parseInt(h[3], 10), S = h[5] ? parseFloat(h[5]) : 1, T = Math.max(0, S - o * 0.05);
        return `rgba(${d}, ${v}, ${m}, ${T})`;
      } else
        throw new Error(`Unsupported color format: ${n}`);
    };
    return (n, o) => (i(), c("div", {
      class: L(["shadow-text", t.direction]),
      style: O({ textShadow: a(t.shadowColor, t.direction) })
    }, [
      U(n.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), Ca = /* @__PURE__ */ q(_a, [["__scopeId", "data-v-baec179b"]]), ka = Y(Ca), Sa = { class: "cp-typing" }, Ia = { class: "content" }, Ma = /* @__PURE__ */ G({
  name: "CyberTyping",
  __name: "typing",
  setup(e) {
    return (t, a) => (i(), c("div", Sa, [
      s("div", Ia, [
        U(t.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), Ta = /* @__PURE__ */ q(Ma, [["__scopeId", "data-v-c43f79f6"]]), Na = Y(Ta), Ea = ["aria-label", "aria-busy"], La = ["src", "alt", "loading", "crossorigin"], Ba = {
  key: 1,
  class: "placeholder"
}, za = ["src"], Ra = {
  key: 2,
  class: "error"
}, Da = /* @__PURE__ */ G({
  name: "CyberImage",
  __name: "image",
  props: {
    src: { default: "" },
    alt: { default: "" },
    width: { default: "100%" },
    height: { default: "100%" },
    fit: { default: "cover" },
    loading: { default: "lazy" },
    crossorigin: { default: "anonymous" },
    placeholder: {},
    errorSrc: { default: "" },
    errorContent: { default: "Image failed to load" },
    disableGlitch: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = e, a = x(!1), l = x(!1), n = x(t.src), o = z(
      () => typeof t.width == "number" ? `${t.width}px` : t.width
    ), r = z(
      () => typeof t.height == "number" ? `${t.height}px` : t.height
    ), h = z(() => l.value && t.errorSrc ? `url(${t.errorSrc}) no-repeat` : `url(${n.value}) no-repeat`), d = () => {
      if (!t.src) return;
      a.value = !1, l.value = !1;
      const m = new Image();
      t.crossorigin && (m.crossOrigin = t.crossorigin), m.src = t.src, m.onload = () => {
        n.value = t.src, a.value = !0;
      }, m.onerror = () => {
        if (l.value = !0, t.errorSrc && t.errorSrc !== t.src) {
          n.value = t.errorSrc;
          const S = new Image();
          S.src = t.errorSrc, S.onload = () => a.value = !0;
        } else
          a.value = !0;
      };
    }, v = z(() => {
      switch (t.fit) {
        case "fill":
          return "100% 100%";
        // 完全填充（可能变形）
        case "scale-down":
          return "contain";
        // 作为替代方案（保持比例）
        default:
          return t.fit;
      }
    });
    return ee(() => t.src, d), J(d), (m, S) => (i(), c("div", null, [
      s("div", {
        class: "imgbox",
        style: O({ width: o.value, height: r.value }),
        role: "img",
        "aria-label": e.alt || void 0,
        "aria-busy": !a.value && !l.value
      }, [
        e.src ? (i(), c("img", {
          key: 0,
          src: e.src,
          alt: e.alt,
          loading: e.loading,
          crossorigin: e.crossorigin,
          class: "hidden-image"
        }, null, 8, La)) : R("", !0),
        s("div", {
          class: L(["cyberimg", {
            loaded: a.value && !l.value,
            loading: !a.value && !l.value,
            error: l.value,
            "no-glitch": e.disableGlitch
          }]),
          style: O({
            background: h.value,
            backgroundSize: v.value
          })
        }, [
          a.value && !l.value ? U(m.$slots, "default", { key: 0 }, void 0, !0) : !a.value && e.placeholder ? (i(), c("div", Ba, [
            U(m.$slots, "placeholder", {}, () => [
              s("img", {
                src: e.placeholder,
                alt: "Loading..."
              }, null, 8, za)
            ], !0)
          ])) : l.value ? (i(), c("div", Ra, [
            U(m.$slots, "error", {}, () => [
              ye(F(e.errorContent), 1)
            ], !0)
          ])) : R("", !0)
        ], 6)
      ], 12, Ea)
    ]));
  }
}), Pa = /* @__PURE__ */ q(Da, [["__scopeId", "data-v-9a138aba"]]), Oa = Y(Pa), Aa = { class: "text-container" }, Ha = ["data-text"], Fa = /* @__PURE__ */ G({
  name: "CyberMagicText",
  __name: "magicText",
  setup(e) {
    const t = x(""), a = ne();
    if (a && a.default) {
      let l = a.default();
      t.value = l[0].children;
    }
    return (l, n) => (i(), c("div", Aa, [
      s("span", {
        class: "gradient-text",
        "data-text": t.value
      }, [
        U(l.$slots, "default")
      ], 8, Ha)
    ]));
  }
}), Ga = Y(Fa), Ya = { class: "imgWrap" }, Wa = ["src"], Va = /* @__PURE__ */ G({
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
    const t = e, a = x(t.imgList.length), l = n(t.imgWidth, 360 / a.value) * 1.6;
    function n(r, h) {
      const d = h * Math.PI / 180;
      return r / (2 * Math.sin(d / 2));
    }
    const o = (r) => {
      const h = 35 + (r + 1) * (360 / a.value), d = n(t.imgWidth, 360 / a.value);
      return {
        transform: `rotateY(${h}deg) translateZ(${d}px)`
      };
    };
    return (r, h) => (i(), c("div", {
      class: "container",
      style: O({
        "--container-width": `${l}px`,
        "--img-width": `${t.imgWidth}px`,
        "--img-height": `${t.imgHeight}px`
      })
    }, [
      s("div", {
        class: L(["stage", { "has-shadow": t.shadow }])
      }, [
        s("div", {
          class: "control",
          style: O({
            "--animation-duration": `${t.animationDuration}s`
          })
        }, [
          s("div", Ya, [
            (i(!0), c(K, null, Z(t.imgList, (d, v) => (i(), c("div", {
              key: v,
              class: "img",
              style: O(o(v))
            }, [
              s("img", { src: d }, null, 8, Wa)
            ], 4))), 128))
          ])
        ], 4)
      ], 2)
    ], 4));
  }
}), qa = /* @__PURE__ */ q(Va, [["__scopeId", "data-v-15a0847c"]]), Xa = Y(qa), ja = /* @__PURE__ */ G({
  name: "CyberSelect",
  __name: "select",
  setup(e) {
    return (t, a) => (i(), c("div"));
  }
}), Ua = Y(ja), Ka = { class: "node-connectors" }, Za = ["onClick"], Qa = ["onClick"], Ja = { class: "node-icon" }, el = { class: "node-label" }, tl = { class: "label-text" }, al = {
  key: 0,
  class: "label-underline"
}, ll = {
  key: 0,
  class: "node-status"
}, sl = {
  key: 0,
  class: "tree-scanline"
}, nl = /* @__PURE__ */ G({
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
  setup(e, { expose: t, emit: a }) {
    const l = e, n = a, o = x([]), r = x([]), h = x(0), d = z(() => {
      const g = [], y = (C, j = 0, D) => {
        C.forEach((f, $) => {
          f._level = j, f._parent = D, f._expanded = f.expanded ?? (l.defaultExpandAll || j === 0), f._selected = f.selected ?? !1, f._isLastChild = $ === C.length - 1, g.push(f), f._expanded && f.children && f.children.length > 0 && y(f.children, j + 1, f);
        });
      };
      return y(o.value), g;
    }), v = () => {
      const g = (y, C = 0) => {
        const j = {
          ...y,
          _expanded: y.expanded ?? (l.defaultExpandAll || C === 0),
          _selected: y.selected ?? !1,
          _level: C,
          _parent: void 0,
          _isLastChild: !1
        };
        return y.children && y.children.length > 0 && (j.children = y.children.map((D) => g(D, C + 1))), j;
      };
      o.value = l.data.map((y) => g(y)), r.value = [];
    }, m = (g) => !g.children || g.children.length === 0, S = (g) => g._level ?? 0, T = (g) => S(g) * l.indent, _ = (g, y) => g._isLastChild, M = (g, y) => {
      if (!l.showConnectors) return !0;
      let C = g, j = S(g);
      for (; C && j > y; )
        C = C._parent, j--;
      return C?._isLastChild ?? !1;
    }, u = (g) => {
      g._expanded = !g._expanded, g.expanded = g._expanded, g._expanded ? n("node-expand", g) : n("node-collapse", g), X();
    }, N = (g) => {
      l.multiple ? (g._selected = !g._selected, g.selected = g._selected) : g._selected ? (g._selected = !1, g.selected = !1) : (r.value.forEach((y) => {
        y._selected = !1, y.selected = !1;
      }), g._selected = !0, g.selected = !0), b(), n("select-change", r.value), n("node-click", g), l.expandOnClick && !m(g) && u(g);
    }, b = () => {
      r.value = d.value.filter((g) => g._selected);
    }, A = (g) => g.icon ? g.icon : m(g) ? "icon-file" : g._expanded ? "icon-folder-open" : "icon-folder", X = () => {
      h.value++;
    };
    return J(() => {
      v();
    }), ee(() => l.data, () => {
      v();
    }, { deep: !0 }), t({
      getSelectedNodes: () => r.value,
      clearSelection: () => {
        r.value.forEach((g) => {
          g._selected = !1, g.selected = !1;
        }), r.value = [], X();
      }
    }), (g, y) => (i(), c("div", {
      class: L(["cyber-tree", [`theme-${e.theme}`, `effect-${e.effect}`]])
    }, [
      (i(!0), c(K, null, Z(d.value, (C, j) => (i(), c("div", {
        key: `${C.id}-${C._expanded}-${h.value}`,
        class: L(["tree-node", { expanded: C._expanded, leaf: m(C), "last-child": _(C) }]),
        style: O({ paddingLeft: `${T(C)}px` })
      }, [
        s("div", Ka, [
          (i(!0), c(K, null, Z(S(C), (D) => (i(), c("div", {
            key: D,
            class: L(["vertical-line", { hidden: M(C, D) }]),
            style: O({ left: `${T(C) - 12}px` })
          }, null, 6))), 128))
        ]),
        m(C) ? R("", !0) : (i(), c("div", {
          key: 0,
          class: "node-toggle",
          onClick: de((D) => u(C), ["stop"]),
          style: O({ left: `${T(C) - 20}px` })
        }, [
          s("div", {
            class: L(["toggle-icon", { rotated: C._expanded }])
          }, [...y[0] || (y[0] = [
            s("div", { class: "icon-line vertical" }, null, -1),
            s("div", { class: "icon-line horizontal" }, null, -1)
          ])], 2)
        ], 12, Za)),
        s("div", {
          class: "node-content-wrapper",
          onClick: de((D) => N(C), ["stop"])
        }, [
          s("div", {
            class: L(["node-content", { selected: C._selected }])
          }, [
            s("div", Ja, [
              y[1] || (y[1] = s("div", { class: "icon-glow" }, null, -1)),
              s("div", {
                class: L(["icon-core", A(C)])
              }, null, 2)
            ]),
            s("div", el, [
              s("span", tl, F(C.label), 1),
              C._selected ? (i(), c("div", al)) : R("", !0)
            ]),
            e.showStatus && C.status ? (i(), c("div", ll, [
              s("div", {
                class: L(["status-indicator", `status-${C.status}`])
              }, null, 2)
            ])) : R("", !0)
          ], 2)
        ], 8, Qa),
        S(C) > 0 ? (i(), c("div", {
          key: 1,
          class: "horizontal-connector",
          style: O({ left: `${T(C) - 12}px` })
        }, null, 4)) : R("", !0)
      ], 6))), 128)),
      e.showScanline ? (i(), c("div", sl)) : R("", !0)
    ], 2));
  }
}), ol = /* @__PURE__ */ q(nl, [["__scopeId", "data-v-054d861d"]]), rl = Y(ol), il = [
  Le,
  Ye,
  je,
  lt,
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
  Rt,
  Na,
  bt,
  Oa,
  Ga,
  Ua,
  rl,
  Xa
], cl = Ie([...il]);
console.log(
  "%c %s",
  "border: 1px solid #97E3FE;border-radius: 3px;padding: 2px 5px;color: white;font-weight:bolder;background: linear-gradient(to right, #fF717F,#CC54D1,#4EAFFA,#3DE1C3, #F7DA66)",
  "CyberPunk-UI"
);
const fl = cl.install;
export {
  cl as default,
  fl as install,
  Ie as makeInstaller
};
