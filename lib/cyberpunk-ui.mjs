import { defineComponent as G, useSlots as ne, computed as P, openBlock as c, createElementBlock as u, normalizeClass as B, createElementVNode as n, unref as ce, renderSlot as X, toDisplayString as A, ref as _, onUnmounted as oe, createBlock as he, Teleport as ve, createVNode as ge, TransitionGroup as pe, withCtx as me, Fragment as U, renderList as K, createCommentVNode as R, normalizeStyle as D, watch as ee, nextTick as de, onMounted as J, withDirectives as ye, createTextVNode as be, vShow as we, watchEffect as Ce, useCssVars as ue, getCurrentInstance as ke, createStaticVNode as Se, reactive as Ie, withModifiers as fe } from "vue";
const Me = (e = []) => ({
  install: (t) => {
    e.forEach((o) => t.use(o));
  }
}), W = (e, a) => (e.install = (t) => {
  for (const o of [e, ...Object.values({})])
    t.component(o.name, o);
}, e), Te = ["data-content"], Ne = { key: 1 }, Ee = /* @__PURE__ */ G({
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
    const t = ne(), o = e, l = P(() => {
      switch (o.type) {
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
    }), s = P(() => {
      switch (o.size) {
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
    return (i, v) => (c(), u("div", {
      class: B(["cp-button", s.value])
    }, [
      n("div", {
        class: B(["button", l.value]),
        "data-content": o.content
      }, [
        ce(t) ? X(i.$slots, "default", { key: 0 }, void 0, !0) : (c(), u("span", Ne, A(o.content), 1))
      ], 10, Te)
    ], 2));
  }
}), q = (e, a) => {
  const t = e.__vccOpts || e;
  for (const [o, l] of a)
    t[o] = l;
  return t;
}, Le = /* @__PURE__ */ q(Ee, [["__scopeId", "data-v-c3d9b67f"]]), Be = W(Le), ze = { class: "notification-content" }, Pe = {
  key: 0,
  class: "notification-icon"
}, Re = { class: "notification-body" }, De = {
  key: 0,
  class: "notification-title"
}, Oe = { class: "notification-message" }, Ae = {
  key: 1,
  class: "notification-actions"
}, He = ["onClick"], Fe = ["onClick"], Ge = /* @__PURE__ */ G({
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
    const o = e, l = t, s = _([]), i = _(!1);
    let v = 0;
    const d = (w) => {
      const M = ++v, f = w.actions && w.actions.length > 0, T = {
        id: M,
        title: w.title || "",
        message: w.message,
        type: w.type || "info",
        duration: w.duration !== void 0 ? w.duration : f ? 0 : o.duration,
        showClose: w.showClose !== void 0 ? w.showClose : !0,
        showIcon: w.showIcon !== void 0 ? w.showIcon : !0,
        actions: w.actions || [],
        effect: w.effect || o.effect,
        onClose: w.onClose || (() => {
        })
      };
      if (s.value.push(T), i.value = !0, T.duration > 0 && setTimeout(() => {
        h(M);
      }, T.duration), s.value.length > o.maxCount) {
        const b = s.value[0];
        h(b.id);
      }
      return M;
    }, h = (w) => {
      const M = s.value.findIndex((f) => f.id === w);
      if (M !== -1) {
        const f = s.value[M];
        f.onClose && f.onClose(), s.value.splice(M, 1), l("close", w);
      }
    }, x = (w, M) => {
      M.callback && M.callback(), h(w.id);
    }, k = () => {
      s.value.length === 0 && (i.value = !1);
    }, m = () => {
      s.value.forEach((w) => {
        w.onClose && w.onClose();
      }), s.value = [], i.value = !1;
    };
    return a({
      // 创建不同类型的通知
      info: (w) => d({ ...w, type: "info" }),
      success: (w) => d({ ...w, type: "success" }),
      warning: (w) => d({ ...w, type: "warning" }),
      error: (w) => d({ ...w, type: "error" }),
      // 通用创建方法
      create: d,
      // 关闭方法
      close: h,
      // 清除所有
      clearAll: m
    }), oe(() => {
      m();
    }), (w, M) => (c(), he(ve, { to: "body" }, [
      i.value ? (c(), u("div", {
        key: 0,
        class: B(["cp-cyber-notification-container", `position-${e.position}`])
      }, [
        ge(pe, {
          name: "notification",
          tag: "div",
          onAfterLeave: k
        }, {
          default: me(() => [
            (c(!0), u(U, null, K(s.value, (f) => (c(), u("div", {
              key: f.id,
              class: B(["cp-cyber-notification", `type-${f.type}`, `effect-${f.effect}`])
            }, [
              n("div", ze, [
                f.showIcon ? (c(), u("div", Pe, [...M[0] || (M[0] = [
                  n("div", { class: "icon-circle" }, null, -1),
                  n("div", { class: "icon-symbol" }, null, -1)
                ])])) : R("", !0),
                n("div", Re, [
                  f.title ? (c(), u("div", De, A(f.title), 1)) : R("", !0),
                  n("div", Oe, A(f.message), 1),
                  f.actions && f.actions.length ? (c(), u("div", Ae, [
                    (c(!0), u(U, null, K(f.actions, (T, b) => (c(), u("button", {
                      key: b,
                      class: "action-button",
                      onClick: (H) => x(f, T)
                    }, A(T.text), 9, He))), 128))
                  ])) : R("", !0)
                ]),
                f.showClose ? (c(), u("div", {
                  key: 1,
                  class: "notification-close",
                  onClick: (T) => h(f.id)
                }, [...M[1] || (M[1] = [
                  n("span", { class: "close-icon" }, "×", -1)
                ])], 8, Fe)) : R("", !0)
              ]),
              f.duration > 0 ? (c(), u("div", {
                key: 0,
                class: "notification-progress",
                style: D({ animationDuration: `${f.duration}ms` })
              }, null, 4)) : R("", !0),
              M[2] || (M[2] = n("div", { class: "notification-glitch-effect" }, null, -1)),
              M[3] || (M[3] = n("div", { class: "notification-hologram-effect" }, null, -1))
            ], 2))), 128))
          ]),
          _: 1
        })
      ], 2)) : R("", !0)
    ]));
  }
}), We = /* @__PURE__ */ q(Ge, [["__scopeId", "data-v-5b833339"]]), Ye = W(We), Ve = { class: "tooltip-inner" }, qe = { class: "tooltip-content" }, je = /* @__PURE__ */ G({
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
    const t = e, o = a, l = _(!1), s = _(null), i = _(null), v = _(null), d = _(t.position), h = _({}), x = () => {
      if (!s.value || !i.value || t.position !== "auto")
        return t.position;
      const g = s.value.getBoundingClientRect(), p = i.value.getBoundingClientRect(), I = window.innerWidth, L = window.innerHeight, $ = g.top, y = I - g.right, S = L - g.bottom, F = g.left, V = [
        { position: "top", space: $ },
        { position: "right", space: y },
        { position: "bottom", space: S },
        { position: "left", space: F }
      ];
      V.sort((Y, te) => te.space - Y.space);
      const O = p.height || 50, z = p.width || 150;
      for (const Y of V)
        if (Y.position === "top" && Y.space >= O + 10 || Y.position === "bottom" && Y.space >= O + 10 || Y.position === "left" && Y.space >= z + 10 || Y.position === "right" && Y.space >= z + 10)
          return Y.position;
      return "top";
    }, k = P(() => typeof t.width == "number" ? `${t.width}px` : t.width), m = () => {
      v.value && clearTimeout(v.value), v.value = window.setTimeout(() => {
        l.value = !0, de(() => {
          t.position === "auto" ? d.value = x() : d.value = t.position, M(), o("show");
        });
      }, t.delay);
    }, w = () => {
      v.value && clearTimeout(v.value), v.value = window.setTimeout(() => {
        l.value = !1, o("hide");
      }, 100);
    }, M = () => {
      if (!s.value || !i.value) return;
      const g = s.value.getBoundingClientRect(), p = i.value.getBoundingClientRect(), I = window.pageYOffset || document.documentElement.scrollTop, L = window.pageXOffset || document.documentElement.scrollLeft;
      let $ = 0, y = 0;
      const S = 10;
      switch (d.value) {
        case "top":
          $ = g.left + g.width / 2 - p.width / 2 + L, y = g.top - p.height - S + I;
          break;
        case "right":
          $ = g.right + S + L, y = g.top + g.height / 2 - p.height / 2 + I;
          break;
        case "bottom":
          $ = g.left + g.width / 2 - p.width / 2 + L, y = g.bottom + S + I;
          break;
        case "left":
          $ = g.left - p.width - S + L, y = g.top + g.height / 2 - p.height / 2 + I;
          break;
      }
      (() => {
        const V = window.innerWidth, O = window.innerHeight, z = 10;
        $ < z ? $ = z : $ + p.width > V - z && ($ = V - p.width - z), y < z ? y = z : y + p.height > O - z && (y = O - p.height - z);
      })(), h.value = {
        left: `${$}px`,
        top: `${y}px`,
        width: k.value
      };
    }, f = () => {
      t.trigger === "hover" && m();
    }, T = () => {
      t.trigger === "hover" && w();
    }, b = () => {
      t.trigger === "click" && (l.value ? w() : m());
    }, H = () => {
      t.trigger === "focus" && m();
    }, j = () => {
      t.trigger === "focus" && w();
    }, Z = () => {
      l.value && (t.position === "auto" && (d.value = x()), M());
    }, r = () => {
      l.value && (E && clearTimeout(E), E = setTimeout(() => {
        M();
      }, 16));
    };
    ee(
      () => t.position,
      (g) => {
        l.value && de(() => {
          g === "auto" ? d.value = x() : d.value = g, M();
        });
      }
    );
    let N = [];
    const C = (g) => {
      let p = [], I = g.parentElement;
      for (; I; ) {
        const L = window.getComputedStyle(I);
        /(auto|scroll)/.test(L.overflow + L.overflowY + L.overflowX) && p.push(I), I = I.parentElement;
      }
      return p.push(document.documentElement), p;
    };
    J(() => {
      if (window.addEventListener("resize", Z), window.addEventListener("scroll", r, { passive: !0 }), document.addEventListener("click", (g) => {
        if (l.value && t.trigger === "click") {
          const p = g.target;
          i.value && !i.value.contains(p) && s.value && !s.value.contains(p) && w();
        }
      }), s.value) {
        N = C(s.value);
        const g = () => {
          E && clearTimeout(E), E = setTimeout(() => {
            l.value && M();
          }, 16);
        };
        N.forEach((p) => {
          p.addEventListener("scroll", g);
        });
      }
    });
    let E = null;
    return oe(() => {
      window.removeEventListener("resize", Z), window.removeEventListener("scroll", r), N.forEach((g) => {
        g.removeEventListener("scroll", r);
      }), v.value && clearTimeout(v.value), E && clearTimeout(E);
    }), (g, p) => (c(), u("div", null, [
      n("div", {
        ref_key: "triggerRef",
        ref: s,
        class: "tooltip-trigger",
        onMouseenter: f,
        onMouseleave: T,
        onClick: b,
        onFocus: H,
        onBlur: j
      }, [
        X(g.$slots, "default", {}, void 0, !0)
      ], 544),
      (c(), he(ve, { to: "body" }, [
        ye(n("div", {
          ref_key: "tooltipRef",
          ref: i,
          class: B([
            "cp-cyber-tooltip",
            `theme-${e.theme}`,
            `effect-${e.effect}`,
            `position-${d.value}`
          ]),
          style: D(h.value)
        }, [
          p[2] || (p[2] = n("div", { class: "tooltip-arrow" }, null, -1)),
          n("div", Ve, [
            n("div", qe, [
              X(g.$slots, "content", {}, () => [
                be(A(e.content), 1)
              ], !0)
            ]),
            p[0] || (p[0] = n("div", { class: "tooltip-scanline" }, null, -1)),
            p[1] || (p[1] = n("div", { class: "tooltip-glitch" }, null, -1))
          ])
        ], 6), [
          [we, l.value]
        ])
      ]))
    ]));
  }
}), Xe = /* @__PURE__ */ q(je, [["__scopeId", "data-v-3de3033d"]]), Ue = W(Xe), Ke = { class: "progress-track" }, Ze = {
  key: 0,
  class: "percentage-inside"
}, Qe = { class: "tick-marks" }, Je = {
  key: 0,
  class: "percentage-outside"
}, et = {
  key: 1,
  class: "status-indicator"
}, tt = { class: "status-text" }, at = /* @__PURE__ */ G({
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
    const a = e, t = P(() => Math.min(100, Math.max(0, a.percentage)).toFixed(0)), o = P(() => {
      const l = Number(t.value);
      return l < 30 ? "INITIALIZING" : l < 60 ? "PROCESSING" : l < 90 ? "LOADING" : l < 100 ? "ALMOST" : "COMPLETE";
    });
    return (l, s) => (c(), u("div", {
      class: B(["cyber-progress", [`theme-${e.theme}`, { animated: e.animated }]])
    }, [
      n("div", Ke, [
        s[0] || (s[0] = n("div", { class: "track-grid" }, null, -1)),
        n("div", {
          class: "progress-bar",
          style: D({ width: e.percentage + "%" })
        }, [
          e.showPercentage && e.percentagePosition === "inside" ? (c(), u("span", Ze, A(t.value) + "% ", 1)) : R("", !0)
        ], 4),
        n("div", Qe, [
          (c(), u(U, null, K(10, (i) => n("span", {
            key: i,
            class: B(["tick", { active: i * 10 <= e.percentage }])
          }, null, 2)), 64))
        ])
      ]),
      e.showPercentage && e.percentagePosition === "outside" ? (c(), u("span", Je, A(t.value) + "% ", 1)) : R("", !0),
      e.showStatus ? (c(), u("div", et, [
        s[1] || (s[1] = n("div", { class: "indicator-dot" }, null, -1)),
        n("span", tt, A(o.value), 1)
      ])) : R("", !0)
    ], 2));
  }
}), st = /* @__PURE__ */ q(at, [["__scopeId", "data-v-44363fb0"]]), lt = W(st), nt = {
  key: 0,
  class: "prefix"
}, ot = { class: "counter-container" }, rt = {
  key: 0,
  class: "separator"
}, it = { class: "digit-top" }, ct = { class: "digit-bottom" }, ut = { class: "digit-top flip-top" }, dt = { class: "digit-bottom flip-bottom" }, ft = {
  key: 1,
  class: "suffix"
}, ht = /* @__PURE__ */ G({
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
    const a = e, t = _(Number(a.from)), o = _(Number(a.value)), l = _(null), s = _(null), i = _(""), v = (f) => {
      const T = Math.pow(10, a.decimal);
      let H = (Math.round(f * T) / T).toFixed(a.decimal);
      if (a.separator) {
        const j = H.split(".");
        j[0] = j[0].replace(/\B(?=(\d{3})+(?!\d))/g, a.separator), H = j.join(".");
      }
      return H;
    }, d = P(() => v(t.value)), h = P(() => d.value.split("")), x = (f) => f === a.separator || f === ".", k = (f) => !i.value || f >= i.value.length ? !1 : i.value[f] !== h.value[f] && !x(h.value[f]), m = (f) => {
      l.value === null && (l.value = f);
      const T = f - l.value, b = Math.min(T / a.duration, 1), H = Number(a.from), j = Number(a.to !== null ? a.to : o.value), Z = H + (j - H) * w(b);
      t.value = Z, b < 1 ? s.value = requestAnimationFrame(m) : (t.value = j, l.value = null);
    }, w = (f) => 1 - Math.pow(1 - f, 4), M = () => {
      i.value = d.value, s.value !== null && cancelAnimationFrame(s.value), l.value = null, s.value = requestAnimationFrame(m);
    };
    return ee(() => a.value, (f) => {
      o.value = Number(f), M();
    }), ee(() => a.to, (f) => {
      f !== null && (o.value = Number(f), M());
    }), J(() => {
      Number(a.from) !== Number(a.value) && M();
    }), oe(() => {
      s.value !== null && cancelAnimationFrame(s.value);
    }), (f, T) => (c(), u("div", {
      class: B(["cp-digital-counter", `theme-${e.theme}`])
    }, [
      e.prefix ? (c(), u("span", nt, A(e.prefix), 1)) : R("", !0),
      n("div", ot, [
        (c(!0), u(U, null, K(h.value, (b, H) => (c(), u("div", {
          key: H,
          class: "digit-container"
        }, [
          x(b) ? (c(), u("div", rt, A(b), 1)) : (c(), u("div", {
            key: 1,
            class: B(["digit-flipper", { animate: k(H) }])
          }, [
            n("div", it, A(b), 1),
            n("div", ct, A(b), 1),
            n("div", ut, A(b), 1),
            n("div", dt, A(b), 1)
          ], 2))
        ]))), 128))
      ]),
      e.suffix ? (c(), u("span", ft, A(e.suffix), 1)) : R("", !0)
    ], 2));
  }
}), vt = /* @__PURE__ */ q(ht, [["__scopeId", "data-v-41a40b63"]]), gt = W(vt), pt = {
  class: "cp-full-page",
  id: "page-scroll"
}, mt = ["onClick"], yt = /* @__PURE__ */ G({
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
    const t = e, o = a, l = _();
    Ce(() => {
      l.value?.style && (l.value.style.transform = i.value);
    });
    const s = P(() => {
      v.value = !0;
      let r = 0;
      return document.getElementById("page-scroll")?.clientHeight ? r = document.getElementById("page-scroll")?.clientHeight ?? 0 : r = window.innerHeight, r;
    }), i = P(() => `translateY(-${b.value * s.value}px)`), v = _(!1), d = _(!0);
    function h(r) {
      v.value = !1, d.value && (d.value = !1, T(r), setTimeout(() => {
        d.value = !0;
      }, 500));
    }
    const x = _(0), k = _(0), m = _(0);
    function w(r) {
      x.value = r.touches[0].pageY || r.changedTouches[0].pageY;
    }
    function M(r) {
      r.preventDefault(), v.value = !1, k.value = r.changedTouches[0].pageY || r.touches[0].pageY, m.value = k.value - x.value, Math.abs(m.value) >= 60 ? (b.value < t.items.length - 1 && m.value < 0 && b.value++, b.value > 0 && m.value > 0 && b.value--) : (console.log("else", -b.value * s.value), l.value.style.transform = `translateY(-${b.value * s.value}px)`);
    }
    function f(r) {
      v.value = !0, r.preventDefault(), m.value = (r.changedTouches[0].pageY || r.touches[0].pageY) - x.value, !(b.value === t.items.length - 1 && m.value < 0 || b.value === 0 && m.value > 0) && (console.log("else", -b.value * s.value + m.value * -1), l.value.style.transform = `translateY(-${b.value * s.value + m.value * -1}px)`);
    }
    function T(r) {
      r.wheelDelta < 0 ? (H(), o("change", { from: t.items[b.value - 1], to: t.items[b.value], type: "next" })) : (j(), o("change", { from: t.items[b.value + 1], to: t.items[b.value], type: "last" }));
    }
    const b = _(0);
    function H() {
      b.value < t.items.length - 1 && (b.value++, o("toNext", b.value));
    }
    function j() {
      (b.value > 1 || b.value === 1) && (b.value--, o("toLast", b.value));
    }
    function Z(r) {
      v.value = !1, b.value = r;
    }
    return (r, N) => (c(), u("div", pt, [
      n("div", {
        ref_key: "element",
        ref: l,
        class: B([{ activeTranstion: v.value }, "inner-box"]),
        onMousewheel: h,
        onTouchstart: w,
        onTouchend: M,
        onTouchmove: f
      }, [
        X(r.$slots, "default", {}, void 0, !0)
      ], 34),
      n("div", {
        class: B(["cp-full-dot", t.position])
      }, [
        (c(!0), u(U, null, K(t.items, (C, E) => (c(), u("div", {
          onClick: (g) => Z(E),
          class: "cp-full-dot-item"
        }, [
          n("div", {
            class: B(["cp-full-dot-item-bg", { active: E === b.value }])
          }, null, 2),
          t.showTitle ? ye((c(), u("div", {
            key: 0,
            class: "show-dec"
          }, A(C.title), 513)), [
            [we, E === b.value]
          ]) : R("", !0)
        ], 8, mt))), 256))
      ], 2)
    ]));
  }
}), bt = /* @__PURE__ */ q(yt, [["__scopeId", "data-v-7495e5be"]]), wt = W(bt), xt = ["src", "alt"], $t = {
  key: 1,
  class: "loading-placeholder"
}, _t = {
  key: 2,
  class: "error-placeholder"
}, Ct = /* @__PURE__ */ G({
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
    const t = e, o = a, l = _(null), s = _(null), i = _(null), v = _(!1), d = _(!1), h = _(!1), x = _(null), k = _(null), m = P(() => t.intensity / 10), w = () => {
      v.value = !0, d.value = !1, setTimeout(() => {
        f(), t.triggerMode === "auto" ? C() : t.triggerMode === "random" && E();
      }, 0);
    }, M = () => {
      d.value = !0, v.value = !1, console.error("Failed to load image:", t.src);
    }, f = () => {
      if (!i.value || !s.value) return;
      const $ = s.value, y = i.value, S = y.getContext("2d");
      if (S) {
        y.width = $.naturalWidth, y.height = $.naturalHeight;
        try {
          S.drawImage($, 0, 0), k.value = S.getImageData(0, 0, y.width, y.height);
        } catch (F) {
          console.error("Failed to get image data (possibly CORS issue):", F), d.value = !0;
        }
      }
    }, T = ($, y) => {
      if (!k.value) return;
      const S = $.canvas, F = $.getImageData(0, 0, S.width, S.height), V = F.data, O = k.value.data, z = Math.floor(20 * y), Y = Math.floor(Math.random() * z), te = Math.floor(Math.random() * z);
      for (let ae = 0; ae < S.height; ae++)
        for (let se = 0; se < S.width; se++) {
          const Q = (ae * S.width + se) * 4, le = Math.min(Math.max(se + Y, 0), S.width - 1), xe = (Math.min(Math.max(ae + te, 0), S.height - 1) * S.width + le) * 4;
          V[Q] = O[xe];
          const $e = Math.min(Math.max(se - Y, 0), S.width - 1), _e = (Math.min(Math.max(ae - te, 0), S.height - 1) * S.width + $e) * 4;
          V[Q + 2] = O[_e + 2], V[Q + 1] = O[Q + 1];
        }
      $.putImageData(F, 0, 0);
    }, b = ($, y) => {
      if (!k.value) return;
      const S = $.canvas;
      $.putImageData(k.value, 0, 0);
      const F = Math.max(1, Math.floor(5 / y)), V = 0.5 + y * 0.1;
      for (let O = 0; O < S.height; O += F * 2)
        $.fillStyle = `rgba(255, 255, 255, ${V})`, $.fillRect(0, O, S.width, F);
    }, H = ($, y) => {
      if (!k.value) return;
      const S = $.canvas;
      $.putImageData(k.value, 0, 0);
      const F = Math.max(4, Math.floor(y * 8));
      if (Math.random() > 0.5)
        for (let O = 0; O < S.height; O += F)
          for (let z = 0; z < S.width; z += F) {
            const Y = $.getImageData(z, O, 1, 1).data;
            $.fillStyle = `rgb(${Y[0]}, ${Y[1]}, ${Y[2]})`, $.fillRect(z, O, F, F);
          }
      else {
        const O = Math.floor(y * 3);
        for (let z = 0; z < O; z++) {
          const Y = Math.floor(Math.random() * (S.width - 50)), te = Math.floor(Math.random() * (S.height - 50)), ae = Math.floor(Math.random() * 100 * y) + 30, se = Math.floor(Math.random() * 80 * y) + 20;
          for (let Q = te; Q < te + se; Q += F)
            for (let le = Y; le < Y + ae; le += F)
              if (le < S.width && Q < S.height) {
                const ie = $.getImageData(le, Q, 1, 1).data;
                $.fillStyle = `rgb(${ie[0]}, ${ie[1]}, ${ie[2]})`, $.fillRect(le, Q, F, F);
              }
        }
      }
    }, j = ($, y) => {
      if (!k.value) return;
      const S = $.canvas, F = $.getImageData(0, 0, S.width, S.height), V = F.data, O = 0.2 + y * 0.05;
      for (let z = 0; z < V.length; z += 4)
        Math.random() < O && (Math.random() > 0.5 ? (V[z] = 255, V[z + 1] = 255, V[z + 2] = 255) : (V[z] = Math.floor(Math.random() * 256), V[z + 1] = Math.floor(Math.random() * 256), V[z + 2] = Math.floor(Math.random() * 256)));
      $.putImageData(F, 0, 0);
    }, Z = ($, y) => {
      [...["rgb-shift", "scanline", "pixelate", "noise"]].sort(() => 0.5 - Math.random()).slice(0, 2 + Math.floor(Math.random() * 2)).forEach((O) => {
        switch (O) {
          case "rgb-shift":
            T($, y);
            break;
          case "scanline":
            b($, y);
            break;
          case "pixelate":
            H($, y);
            break;
          case "noise":
            j($, y);
            break;
        }
      });
    }, r = () => {
      if (!i.value || !k.value) return;
      const y = i.value.getContext("2d");
      if (y) {
        switch (y.putImageData(k.value, 0, 0), t.glitchType) {
          case "rgb-shift":
            T(y, m.value);
            break;
          case "scanline":
            b(y, m.value);
            break;
          case "pixelate":
            H(y, m.value);
            break;
          case "noise":
            j(y, m.value);
            break;
          case "combined":
            Z(y, m.value);
            break;
        }
        h.value = !0, o("glitch-start");
      }
    }, N = () => {
      if (!i.value || !k.value) return;
      const y = i.value.getContext("2d");
      y && (y.putImageData(k.value, 0, 0), h.value = !1, o("glitch-end"));
    }, C = () => {
      x.value && clearInterval(x.value), r(), t.animated && (x.value = window.setInterval(() => {
        r();
      }, t.interval));
    }, E = () => {
      x.value && clearInterval(x.value), x.value = window.setInterval(() => {
        Math.random() < 0.5 && (r(), setTimeout(() => {
          N();
        }, 200 + Math.random() * 300));
      }, t.interval);
    }, g = () => {
      x.value && (clearInterval(x.value), x.value = null), N();
    }, p = () => {
      t.triggerMode === "hover" && C();
    }, I = () => {
      t.triggerMode === "hover" && !t.animated && g();
    }, L = () => {
      t.triggerMode === "click" && (h.value ? g() : C());
    };
    return ee(() => [t.src, t.glitchType, t.intensity], () => {
      t.src && (v.value = !1, d.value = !1), h.value && r();
    }), J(() => {
      s.value && s.value.complete && s.value.naturalHeight !== 0 && w();
    }), oe(() => {
      x.value && clearInterval(x.value);
    }), ($, y) => (c(), u("div", {
      class: B(["cp-glitch-image", { animated: e.animated }]),
      onMouseenter: p,
      onMouseleave: I,
      onClick: L
    }, [
      n("div", {
        class: "image-container",
        ref_key: "imageContainerRef",
        ref: l
      }, [
        n("img", {
          src: e.src,
          alt: e.alt,
          ref_key: "imageRef",
          ref: s,
          class: "original-image",
          crossOrigin: "anonymous",
          onLoad: w,
          onError: M
        }, null, 40, xt),
        v.value && !d.value ? (c(), u("canvas", {
          key: 0,
          ref_key: "glitchCanvasRef",
          ref: i,
          class: "glitch-canvas"
        }, null, 512)) : R("", !0),
        !v.value && !d.value ? (c(), u("div", $t, [...y[0] || (y[0] = [
          n("div", { class: "loading-text" }, "Loading...", -1)
        ])])) : R("", !0),
        d.value ? (c(), u("div", _t, [...y[1] || (y[1] = [
          n("div", { class: "error-text" }, "Image Load Failed", -1)
        ])])) : R("", !0)
      ], 512)
    ], 34));
  }
}), kt = /* @__PURE__ */ q(Ct, [["__scopeId", "data-v-b2947767"]]), St = W(kt), It = ["data-progress"], Mt = { class: "progress-container" }, Tt = {
  key: 0,
  class: "progress-text"
}, Nt = /* @__PURE__ */ G({
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
    const a = e, t = _(null), o = _(null), l = P(() => a.direction === "vertical" ? "vertical" : "horizontal"), s = P(() => {
      const d = a.direction === "vertical" ? "height" : "width", h = a.indeterminate ? "100%" : `${a.progress}%`;
      return {
        [d]: h,
        backgroundColor: a.color,
        boxShadow: `0 0 ${a.glitchIntensity * 2}px ${a.color}`
      };
    }), i = () => {
      if (!t.value) return;
      const d = t.value.querySelector(".glitch-effect");
      if (!d) return;
      const h = () => {
        if (!d) return;
        if (Math.random() < a.glitchIntensity / 20) {
          const k = Math.random() * a.glitchIntensity - a.glitchIntensity / 2, m = Math.random() * a.glitchIntensity - a.glitchIntensity / 2, w = Math.random() * a.glitchIntensity - a.glitchIntensity / 2, M = Math.random() * a.glitchIntensity / 2;
          d.style.transform = `translate(${k}px, ${m}px) skew(${w}deg)`, d.style.filter = `blur(${M}px)`, d.style.opacity = "1", setTimeout(() => {
            d && (d.style.transform = "translate(0, 0) skew(0)", d.style.filter = "blur(0)", d.style.opacity = "0");
          }, 150);
        }
      };
      o.value = window.setInterval(() => {
        h();
      }, 500);
    };
    let v = a.progress;
    return ee(() => a.progress, (d) => {
      if (d !== v) {
        if (t.value) {
          const h = t.value.querySelector(".glitch-effect");
          if (h) {
            const x = Math.random() * a.glitchIntensity * 2 - a.glitchIntensity, k = Math.random() * a.glitchIntensity - a.glitchIntensity / 2;
            h.style.transform = `translate(${x}px, ${k}px)`, h.style.opacity = "1", setTimeout(() => {
              h && (h.style.transform = "translate(0, 0)", h.style.opacity = "0");
            }, 300);
          }
        }
        v = d;
      }
    }), J(() => {
      i();
    }), oe(() => {
      o.value && clearInterval(o.value);
    }), (d, h) => (c(), u("div", {
      class: B(["cp-glitch-progress", l.value, { indeterminate: e.indeterminate }]),
      "data-progress": e.progress
    }, [
      n("div", Mt, [
        n("div", {
          class: "progress-bar",
          style: D(s.value),
          ref_key: "progressBarRef",
          ref: t
        }, [...h[0] || (h[0] = [
          n("div", { class: "glitch-effect" }, null, -1)
        ])], 4),
        e.showText && !e.indeterminate ? (c(), u("div", Tt, A(e.progress) + "% ", 1)) : R("", !0)
      ])
    ], 10, It));
  }
}), Et = /* @__PURE__ */ q(Nt, [["__scopeId", "data-v-27854e11"]]), Lt = W(Et), Bt = { class: "glow-text" }, zt = /* @__PURE__ */ G({
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
    }), (t, o) => (c(), u("div", Bt, [
      X(t.$slots, "default", {}, void 0, !0)
    ]));
  }
}), Pt = /* @__PURE__ */ q(zt, [["__scopeId", "data-v-7d666f1f"]]), Rt = W(Pt), Dt = ["tabindex", "aria-disabled", "aria-label"], Ot = { class: "holo-card-content" }, At = {
  key: 0,
  class: "card-title"
}, Ht = /* @__PURE__ */ G({
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
    ue((f) => ({
      v558892ac: o.hologramColor
    }));
    const a = ke(), t = ne(), o = e, l = _({ x: 0, y: 0 }), s = _(!1), d = ((f, T) => {
      let b;
      return function() {
        const H = arguments, j = a;
        b || (f.apply(j, H), b = !0, setTimeout(() => b = !1, T));
      };
    })((f) => {
      if (o.disabled) return;
      const T = f.currentTarget.getBoundingClientRect();
      l.value = {
        x: (f.clientX - T.left) / T.width * 2 - 1,
        y: (f.clientY - T.top) / T.height * 2 - 1
      }, s.value = !0;
    }, 16), h = () => {
      s.value = !1, l.value = { x: 0, y: 0 };
    }, x = () => {
      o.disabled || (s.value = !0, l.value = { x: 0, y: 0 });
    }, k = P(() => [(() => {
      switch (o.type) {
        case "basic":
          return "basic-type";
        case "media":
          return "media-type";
        case "action":
          return "action-type";
        default:
          return "basic-type";
      }
    })()]), m = P(() => {
      const f = {};
      if (o.rounded || (f.borderRadius = "0"), o.disabled && (f.cursor = "not-allowed", f.opacity = "0.6"), !s.value || o.disabled) return f;
      const T = l.value.y * 10, b = -l.value.x * 10;
      return {
        ...f,
        transform: `perspective(1000px) rotateX(${T}deg) rotateY(${b}deg) scale3d(1.05, 1.05, 1.05)`,
        transition: "transform 0.1s ease"
      };
    }), w = P(() => {
      if (!s.value || o.disabled) return {};
      const f = Math.max(-50, Math.min(50, l.value.x * 10)), T = Math.max(-50, Math.min(50, l.value.y * 10));
      return {
        background: `radial-gradient(circle at ${50 + f}% ${50 + T}%, ${o.hologramColor}33, transparent 70%)`,
        opacity: 0.8,
        transition: "background 0.1s ease"
      };
    }), M = P(() => {
      const f = o.glowIntensity / 100;
      return {
        boxShadow: `0 0 ${10 + o.glowIntensity / 5}px ${o.hologramColor}${Math.floor(f * 99).toString(16).padStart(2, "0")}`,
        opacity: s.value && !o.disabled ? f : f * 0.5
      };
    });
    return J(() => {
      de(() => {
      });
    }), (f, T) => (c(), u("div", {
      class: B([
        "cp-holo-card",
        `depth-${e.depth}`,
        k.value,
        `theme-${e.theme}`,
        `effect-${e.effect}`
      ]),
      style: D(m.value),
      onMousemove: T[0] || (T[0] = //@ts-ignore
      (...b) => ce(d) && ce(d)(...b)),
      onMouseleave: h,
      onFocus: x,
      onBlur: h,
      tabindex: e.disabled ? -1 : 0,
      role: "button",
      "aria-disabled": e.disabled,
      "aria-label": e.title
    }, [
      n("div", Ot, [
        e.title && !ce(t).title ? (c(), u("div", At, A(e.title), 1)) : R("", !0),
        X(f.$slots, "title", {}, void 0, !0),
        X(f.$slots, "default", {}, void 0, !0),
        X(f.$slots, "footer", {}, void 0, !0)
      ]),
      n("div", {
        class: "holo-card-hologram-effect",
        style: D(w.value)
      }, null, 4),
      n("div", {
        class: "holo-card-glow",
        style: D(M.value)
      }, null, 4)
    ], 46, Dt));
  }
}), Ft = /* @__PURE__ */ q(Ht, [["__scopeId", "data-v-fe164a1d"]]), Gt = W(Ft), Wt = { class: "loader-container" }, Yt = {
  key: 0,
  class: "cube-loader"
}, Vt = {
  key: 1,
  class: "sphere-loader"
}, qt = { class: "sphere" }, jt = {
  key: 2,
  class: "datastream-loader"
}, Xt = {
  key: 3,
  class: "circuit-loader"
}, Ut = { class: "circuit-board" }, Kt = {
  key: 0,
  class: "loader-text"
}, Zt = { class: "typing-text" }, Qt = /* @__PURE__ */ G({
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
      v7f665050: t
    }));
    const a = e, t = (6 / a.speed).toString() + "s", o = P(() => {
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
    }), l = _(""), s = _(0), i = _(null), v = () => {
      if (!a.text) return;
      s.value = 0, l.value = "";
      const d = () => {
        s.value < a.text.length ? (l.value += a.text[s.value], s.value++) : setTimeout(() => {
          s.value = 0, l.value = "";
        }, 1e3);
      }, h = 100 / a.speed;
      i.value = window.setInterval(d, h);
    };
    return ee(() => a.text, () => {
      i.value && clearInterval(i.value), v();
    }), J(() => {
      v();
    }), oe(() => {
      i.value && clearInterval(i.value);
    }), (d, h) => (c(), u("div", {
      class: B(["cp-holo-loader", o.value, { "transparent-bg": e.transparent }])
    }, [
      n("div", Wt, [
        n("div", {
          class: B(["holo-projection", `type-${e.type}`])
        }, [
          e.type === "cube" || e.type === "split" ? (c(), u("div", Yt, [...h[0] || (h[0] = [
            Se('<div class="cube" data-v-6df1b911><div class="cube-face front" data-v-6df1b911></div><div class="cube-face back" data-v-6df1b911></div><div class="cube-face right" data-v-6df1b911></div><div class="cube-face left" data-v-6df1b911></div><div class="cube-face top" data-v-6df1b911></div><div class="cube-face bottom" data-v-6df1b911></div></div>', 1)
          ])])) : e.type === "sphere" ? (c(), u("div", Vt, [
            n("div", qt, [
              (c(), u(U, null, K(3, (x) => n("div", {
                class: "sphere-ring",
                key: x
              })), 64))
            ])
          ])) : e.type === "datastream" ? (c(), u("div", jt, [
            (c(), u(U, null, K(10, (x) => n("div", {
              class: "data-line",
              key: x
            })), 64))
          ])) : e.type === "circuit" ? (c(), u("div", Xt, [
            n("div", Ut, [
              (c(), u(U, null, K(5, (x) => n("div", {
                class: "circuit-path",
                key: x
              })), 64)),
              (c(), u(U, null, K(6, (x) => n("div", {
                class: "circuit-node",
                key: x + 10
              })), 64))
            ])
          ])) : R("", !0)
        ], 2),
        e.text ? (c(), u("div", Kt, [
          n("span", Zt, A(l.value), 1),
          h[1] || (h[1] = n("span", { class: "cursor" }, "_", -1))
        ])) : R("", !0),
        h[2] || (h[2] = n("div", { class: "holo-base" }, [
          n("div", { class: "base-glow" })
        ], -1))
      ])
    ], 2));
  }
}), Jt = /* @__PURE__ */ q(Qt, [["__scopeId", "data-v-6df1b911"]]), ea = W(Jt), ta = { class: "header-row" }, aa = { class: "header-text" }, sa = { class: "cell-text" }, la = {
  key: 0,
  class: "row-scanline"
}, na = /* @__PURE__ */ G({
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
    const a = e, t = _(null), o = _(!1), l = _(!0), s = _(1), i = _(0), v = _(!1), d = _(0), h = Ie([]);
    a.data.length > 0 && h.splice(0, h.length, ...a.data);
    let x = 0;
    const k = () => `row-${++x}-${Date.now()}`, m = P(() => a.rowNum * a.rowHeight), w = P(() => m.value), M = P(() => {
      const g = h.length, p = a.rowNum;
      if (g === 0) return [];
      if (g <= p)
        return h.map((y, S) => ({
          key: y._uniqueKey || k(),
          data: y,
          index: S
        }));
      let I = [...h];
      g > p && g < 2 * p && (I = [...I, ...I]), I = I.map((y, S) => ({
        key: y._uniqueKey || k(),
        data: y,
        index: S,
        scroll: S
      }));
      let L = I.slice(i.value);
      return L.push(...I.slice(0, i.value)), L.slice(0, p);
    }), f = (g) => a.columns[g]?.width ? a.columns[g].width : "auto", T = (g) => g === "center" ? "center" : g === "right" ? "flex-end" : "flex-start", b = () => a.theme === "neon" ? "rgba(0, 230, 246, 0.15)" : a.theme === "hologram" ? "rgba(138, 43, 226, 0.2)" : a.theme === "terminal" ? "rgba(0, 255, 0, 0.15)" : a.theme === "matrix" ? "rgba(0, 255, 65, 0.15)" : "rgba(0, 230, 246, 0.15)", H = (g) => (i.value + g) % h.length % 2 === 0 ? "var(--table-row-bg)" : "var(--table-row-hover)", j = (g, p) => {
      const I = p.split(".");
      let L = g;
      for (const $ of I)
        L = L?.[$];
      return L ?? "";
    }, Z = async () => {
      if (!(o.value || !l.value)) {
        o.value = !0;
        try {
          if (a.remoteMethod) {
            const g = await a.remoteMethod({
              page: s.value,
              size: a.bufferSize * 10
            });
            if (g.data && g.data.length > 0) {
              const p = g.data.map((I) => (I._uniqueKey || (I._uniqueKey = k()), I));
              s.value === 1 ? h.splice(0, h.length, ...p) : h.push(...p), a.data && a.data.splice(0, a.data.length, ...h);
            }
            l.value = g.hasMore ?? !1, s.value++;
          } else a.loadMore && await a.loadMore();
        } catch (g) {
          console.error("Failed to load more data:", g), l.value = !1;
        } finally {
          o.value = !1;
        }
      }
    }, r = async () => {
      if (!a.autoScroll || v.value) return;
      const g = h.length, p = a.rowNum;
      if (g <= p || (await new Promise((L) => setTimeout(L, a.waitTime)), v.value)) return;
      const I = async () => {
        if (v.value) return;
        const L = d.value, $ = a.scrollType === "page" ? p : 1;
        i.value = (i.value + $) % g;
        const y = a.scrollType === "page" ? 500 : 300;
        await new Promise((S) => setTimeout(S, y)), !(d.value !== L || v.value) && (await new Promise((S) => setTimeout(S, a.waitTime)), !(d.value !== L || v.value) && I());
      };
      I();
    }, N = () => {
      d.value = (d.value + 1) % 999999;
    }, C = () => {
      a.hoverPause && (v.value = !0, N());
    }, E = () => {
      a.hoverPause && (v.value = !1, r());
    };
    return J(() => {
      a.remoteMethod && h.length === 0 && Z(), a.autoScroll && r();
    }), (g, p) => (c(), u("div", {
      class: B(["cyber-infinite-table", [`theme-${e.theme}`, `scroll-${e.scrollType}`]])
    }, [
      n("div", {
        class: "table-header",
        style: D({ backgroundColor: b() })
      }, [
        n("div", ta, [
          (c(!0), u(U, null, K(e.columns, (I, L) => (c(), u("div", {
            key: I.field || L,
            class: "header-cell",
            style: D({
              width: f(L),
              minWidth: I.minWidth || "100px",
              textAlign: I.align || "left"
            })
          }, [
            n("div", {
              class: "header-content",
              style: D({ justifyContent: T(I.align || "left") })
            }, [
              n("span", aa, A(I.title), 1)
            ], 4)
          ], 4))), 128))
        ])
      ], 4),
      n("div", {
        class: "table-body",
        ref_key: "bodyRef",
        ref: t,
        onMouseenter: C,
        onMouseleave: E
      }, [
        n("div", {
          class: "rows-container",
          style: D({ height: w.value + "px" })
        }, [
          ge(pe, { name: "scroll-list" }, {
            default: me(() => [
              (c(!0), u(U, null, K(M.value, (I) => (c(), u("div", {
                class: "table-row",
                key: I.key,
                style: D({
                  height: e.rowHeight + "px",
                  lineHeight: e.rowHeight + "px",
                  backgroundColor: H(I.index)
                })
              }, [
                (c(!0), u(U, null, K(e.columns, (L, $) => (c(), u("div", {
                  key: L.field || $,
                  class: "table-cell",
                  style: D({
                    width: f($),
                    minWidth: L.minWidth || "100px",
                    justifyContent: T(L.align || "left")
                  })
                }, [
                  X(g.$slots, L.field, {
                    row: I.data,
                    column: L
                  }, () => [
                    n("span", sa, A(j(I.data, L.field)), 1)
                  ], !0)
                ], 4))), 128)),
                e.showScanline ? (c(), u("div", la)) : R("", !0)
              ], 4))), 128))
            ]),
            _: 3
          })
        ], 4)
      ], 544),
      p[0] || (p[0] = n("div", { class: "table-border-effect" }, null, -1))
    ], 2));
  }
}), oa = /* @__PURE__ */ q(na, [["__scopeId", "data-v-a239aba5"]]), ra = W(oa), ia = /* @__PURE__ */ G({
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
    const t = e, o = P(() => {
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
    }), l = P(() => {
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
    return (s, i) => (c(), u("div", {
      class: B(["cp-button-neno", l.value])
    }, [
      n("div", {
        class: B(["button", o.value, t.bg ? "show-bg" : ""])
      }, [
        i[0] || (i[0] = n("div", { class: "border" }, null, -1)),
        i[1] || (i[1] = n("div", { class: "border" }, null, -1)),
        i[2] || (i[2] = n("div", { class: "border" }, null, -1)),
        i[3] || (i[3] = n("div", { class: "border" }, null, -1)),
        X(s.$slots, "default", {}, void 0, !0)
      ], 2)
    ], 2));
  }
}), ca = /* @__PURE__ */ q(ia, [["__scopeId", "data-v-c8c24548"]]), ua = W(ca), da = ["aria-checked", "aria-disabled"], fa = { class: "toggle-thumb" }, ha = {
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
    ue((v) => ({
      v2ad8abbc: t.inActiveColor,
      v247239f2: t.activeColor
    }));
    const t = e, o = a, l = P(() => {
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
    }), s = P(() => {
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
    }), i = () => {
      if (t.disabled) return;
      const v = !t.modelValue;
      o("update:modelValue", v), o("change", v);
    };
    return (v, d) => (c(), u("div", {
      class: B(["cp-neon-toggle", s.value, l.value, { active: e.modelValue, disabled: e.disabled }]),
      onClick: i,
      "aria-checked": e.modelValue,
      role: "switch",
      "aria-disabled": e.disabled
    }, [
      d[0] || (d[0] = n("div", { class: "toggle-track" }, [
        n("div", { class: "toggle-track-inner" }),
        n("div", { class: "circuit-lines" })
      ], -1)),
      n("div", fa, [
        e.pulseEffect && e.modelValue ? (c(), u("div", ha)) : R("", !0)
      ])
    ], 10, da));
  }
}), ga = /* @__PURE__ */ q(va, [["__scopeId", "data-v-799d9482"]]), pa = W(ga), ma = /* @__PURE__ */ G({
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
    const t = e, o = P(() => {
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
    }), l = P(() => {
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
    return (s, i) => (c(), u("div", {
      class: B(["cp-button-neno", l.value])
    }, [
      n("div", {
        class: B(["button", o.value, t.bg ? "show-bg" : ""])
      }, [
        X(s.$slots, "default", {}, void 0, !0)
      ], 2)
    ], 2));
  }
}), ya = /* @__PURE__ */ q(ma, [["__scopeId", "data-v-f4ab33ea"]]), ba = W(ya), wa = ["data-word"], xa = /* @__PURE__ */ G({
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
    const o = e;
    return (l, s) => (c(), u("div", {
      class: "cp-text",
      "data-word": a.value
    }, [
      X(l.$slots, "default", {}, void 0, !0),
      n("div", {
        class: "cp-text-line",
        style: D("background: " + o.lineColor)
      }, null, 4)
    ], 8, wa));
  }
}), $a = /* @__PURE__ */ q(xa, [["__scopeId", "data-v-09017b4b"]]), _a = W($a), Ca = /* @__PURE__ */ G({
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
      let i = `0px 0px ${l}`;
      for (let v = 1; v <= a.long; v++) {
        const d = o(l, v);
        i += `, ${s === "left" ? "-" : ""}${v}px ${v}px ${d}`;
      }
      return i;
    }, o = (l, s) => {
      const i = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i.exec(l), v = /^rgba?\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})(,\s*([\d.]+))?\)$/i.exec(l);
      if (i) {
        const d = parseInt(i[1], 16), h = parseInt(i[2], 16), x = parseInt(i[3], 16), k = i[4] ? parseInt(i[4], 16) / 255 : 1, m = Math.max(0, k - s * 0.05);
        return `rgba(${d}, ${h}, ${x}, ${m})`;
      } else if (v) {
        const d = parseInt(v[1], 10), h = parseInt(v[2], 10), x = parseInt(v[3], 10), k = v[5] ? parseFloat(v[5]) : 1, m = Math.max(0, k - s * 0.05);
        return `rgba(${d}, ${h}, ${x}, ${m})`;
      } else
        throw new Error(`Unsupported color format: ${l}`);
    };
    return (l, s) => (c(), u("div", {
      class: B(["shadow-text", a.direction]),
      style: D({ textShadow: t(a.shadowColor, a.direction) })
    }, [
      X(l.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), ka = /* @__PURE__ */ q(Ca, [["__scopeId", "data-v-baec179b"]]), Sa = W(ka), Ia = { class: "cp-typing" }, Ma = { class: "content" }, Ta = /* @__PURE__ */ G({
  name: "CyberTyping",
  __name: "typing",
  setup(e) {
    return (a, t) => (c(), u("div", Ia, [
      n("div", Ma, [
        X(a.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), Na = /* @__PURE__ */ q(Ta, [["__scopeId", "data-v-c43f79f6"]]), Ea = W(Na), La = ["src", "alt", "loading", "crossorigin"], Ba = {
  key: 1,
  class: "placeholder"
}, za = ["src"], Pa = {
  key: 2,
  class: "error-content"
}, Ra = /* @__PURE__ */ G({
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
    const a = /* @__PURE__ */ Object.assign({}), t = e, o = (m) => {
      if (m.startsWith("http://") || m.startsWith("https://") || m.startsWith("/"))
        return m;
      for (const [w, M] of Object.entries(a))
        if (w.includes(m) || m.includes(w.split("/").pop() || ""))
          return M;
      return m;
    }, l = _(!1), s = _(!1), i = _(""), v = P(() => {
      const m = {};
      return t.width !== "auto" && t.width !== void 0 && (m.width = typeof t.width == "number" ? `${t.width}px` : t.width), t.height !== "auto" && t.height !== void 0 && (m.height = typeof t.height == "number" ? `${t.height}px` : t.height), !m.width && !m.height && (m.display = "inline-block"), m;
    }), d = P(() => s.value && t.errorSrc ? `url(${t.errorSrc})` : i.value ? `url(${i.value})` : "none"), h = P(() => {
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
    }), x = () => {
      i.value = o(t.src), l.value = !0, s.value = !1;
    }, k = () => {
      if (s.value = !0, t.errorSrc && t.errorSrc !== t.src) {
        const m = new Image();
        m.crossOrigin = t.crossorigin || "", m.src = o(t.errorSrc), m.onload = () => {
          i.value = o(t.errorSrc), l.value = !0;
        }, m.onerror = () => {
          l.value = !0;
        };
      } else
        l.value = !0;
    };
    return ee(() => t.src, () => {
      l.value = !1, s.value = !1, i.value = o(t.src);
    }, { immediate: !0 }), J(() => {
      t.src && (i.value = o(t.src));
    }), (m, w) => (c(), u("div", {
      class: "cyber-image-wrapper",
      style: D(v.value)
    }, [
      e.src ? (c(), u("img", {
        key: 0,
        src: e.src,
        alt: e.alt,
        loading: e.loading,
        crossorigin: e.crossorigin,
        class: "hidden-image",
        onLoad: x,
        onError: k
      }, null, 40, La)) : R("", !0),
      n("div", {
        class: B(["glitch", {
          "is-loaded": l.value && !s.value,
          "is-loading": !l.value && !s.value,
          "is-error": s.value,
          "no-glitch": e.disableGlitch
        }]),
        style: D({
          backgroundImage: d.value,
          backgroundSize: h.value,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        })
      }, [
        l.value && !s.value && !e.disableGlitch ? (c(), u("div", {
          key: 0,
          class: "glitch-layer",
          style: D({ backgroundImage: d.value })
        }, null, 4)) : R("", !0),
        !l.value && e.placeholder ? (c(), u("div", Ba, [
          X(m.$slots, "placeholder", {}, () => [
            n("img", {
              src: e.placeholder,
              alt: "Loading..."
            }, null, 8, za)
          ], !0)
        ])) : s.value ? (c(), u("div", Pa, [
          X(m.$slots, "error", {}, () => [
            be(A(e.errorContent), 1)
          ], !0)
        ])) : R("", !0),
        l.value && !s.value ? X(m.$slots, "default", { key: 3 }, void 0, !0) : R("", !0)
      ], 6)
    ], 4));
  }
}), Da = /* @__PURE__ */ q(Ra, [["__scopeId", "data-v-c8293d7c"]]), Oa = W(Da), Aa = { class: "cyber-magic-text" }, Ha = ["data-text"], Fa = /* @__PURE__ */ G({
  name: "CyberMagicText",
  __name: "magicText",
  setup(e) {
    const a = _(""), t = ne();
    if (t && t.default) {
      let o = t.default();
      a.value = o[0].children;
    }
    return (o, l) => (c(), u("div", Aa, [
      n("span", {
        class: "gradient-text",
        "data-text": a.value
      }, [
        X(o.$slots, "default")
      ], 8, Ha)
    ]));
  }
}), Ga = W(Fa), Wa = { class: "imgWrap" }, Ya = ["src"], Va = /* @__PURE__ */ G({
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
    ue((v) => ({
      v29922088: t.value + "px"
    }));
    const a = e, t = _(a.imgHeight);
    a.shadow && (t.value = a.imgHeight * 2);
    const o = _(a.imgList.length), l = s(a.imgWidth, 360 / o.value) * 1.6;
    function s(v, d) {
      const h = d * Math.PI / 180;
      return v / (2 * Math.sin(h / 2));
    }
    const i = (v) => {
      const d = 35 + (v + 1) * (360 / o.value), h = s(a.imgWidth, 360 / o.value);
      return {
        transform: `rotateY(${d}deg) translateZ(${h}px)`
      };
    };
    return (v, d) => (c(), u("div", {
      class: "container",
      style: D({
        "--container-width": `${l}px`,
        "--img-width": `${a.imgWidth}px`,
        "--img-height": `${a.imgHeight}px`
      })
    }, [
      n("div", {
        class: B(["stage", { "has-shadow": a.shadow }])
      }, [
        n("div", {
          class: "control",
          style: D({
            "--animation-duration": `${a.animationDuration}s`
          })
        }, [
          n("div", Wa, [
            (c(!0), u(U, null, K(a.imgList, (h, x) => (c(), u("div", {
              key: x,
              class: "img",
              style: D(i(x))
            }, [
              n("img", { src: h }, null, 8, Ya)
            ], 4))), 128))
          ])
        ], 4)
      ], 2)
    ], 4));
  }
}), qa = /* @__PURE__ */ q(Va, [["__scopeId", "data-v-3d7f1970"]]), ja = W(qa), Xa = /* @__PURE__ */ G({
  name: "CyberSelect",
  __name: "select",
  setup(e) {
    return (a, t) => (c(), u("div"));
  }
}), Ua = W(Xa), Ka = {
  key: 0,
  class: "tree-connectors",
  "aria-hidden": "true"
}, Za = ["onClick"], Qa = ["aria-expanded", "aria-label", "onClick"], Ja = {
  key: 1,
  class: "node-expand-placeholder"
}, es = { class: "node-label" }, ts = { class: "label-text" }, as = ["title"], ss = { class: "status-text" }, ls = {
  key: 0,
  class: "tree-empty"
}, ns = {
  key: 1,
  class: "tree-scanline"
}, re = 14, os = /* @__PURE__ */ G({
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
    const o = e, l = t, s = _([]), i = _([]), v = _(0), d = P(() => {
      const r = [], N = (C, E = 0, g) => {
        C.forEach((p, I) => {
          p._level = E, p._parent = g, p._expanded = p.expanded ?? (o.defaultExpandAll || E === 0), p._selected = p.selected ?? !1, p._isLastChild = I === C.length - 1, r.push(p), p._expanded && p.children && p.children.length > 0 && N(p.children, E + 1, p);
        });
      };
      return N(s.value), r;
    }), h = () => {
      const r = (N, C = 0) => {
        const E = {
          ...N,
          _expanded: N.expanded ?? (o.defaultExpandAll || C === 0),
          _selected: N.selected ?? !1,
          _level: C,
          _parent: void 0,
          _isLastChild: !1
        };
        return N.children && N.children.length > 0 && (E.children = N.children.map((g) => r(g, C + 1))), E;
      };
      s.value = o.data.map((N) => r(N)), i.value = d.value.filter((N) => N._selected);
    }, x = (r) => !r.children || r.children.length === 0, k = (r) => r._level ?? 0, m = (r) => k(r) * o.indent, w = (r) => {
      const N = k(r);
      return Array.from({ length: Math.max(N - 1, 0) }, (C, E) => E);
    }, M = (r, N) => {
      let C = r, E = k(r);
      for (; C && E > N; )
        C = C._parent, E--;
      return C?._isLastChild ?? !1;
    }, f = (r) => {
      r._expanded = !r._expanded, r.expanded = r._expanded, r._expanded ? l("node-expand", r) : l("node-collapse", r), Z();
    }, T = (r) => {
      o.multiple ? (r._selected = !r._selected, r.selected = r._selected) : r._selected ? (r._selected = !1, r.selected = !1) : (i.value.forEach((N) => {
        N._selected = !1, N.selected = !1;
      }), r._selected = !0, r.selected = !0), b(), l("select-change", i.value), l("node-click", r), o.expandOnClick && !x(r) && f(r);
    }, b = () => {
      i.value = d.value.filter((r) => r._selected);
    }, H = (r) => r.icon ? r.icon : x(r) ? "icon-file" : r._expanded ? "icon-folder-open" : "icon-folder", j = (r) => r ? {
      online: "Online",
      offline: "Offline",
      warning: "Warning",
      error: "Error"
    }[r] : "", Z = () => {
      v.value++;
    };
    return ee(() => o.data, () => {
      h();
    }, { deep: !0, immediate: !0 }), a({
      getSelectedNodes: () => i.value,
      clearSelection: () => {
        i.value.forEach((r) => {
          r._selected = !1, r.selected = !1;
        }), i.value = [], Z();
      }
    }), (r, N) => (c(), u("div", {
      class: B(["cp-cyber-tree cyber-tree", [`theme-${e.theme}`, `effect-${e.effect}`]])
    }, [
      (c(!0), u(U, null, K(d.value, (C) => (c(), u("div", {
        key: `${C.id}-${C._expanded}-${C._selected}-${v.value}`,
        class: B(["tree-node", {
          expanded: C._expanded,
          leaf: x(C),
          "last-child": C._isLastChild
        }]),
        style: D({ paddingLeft: `${m(C)}px` })
      }, [
        e.showConnectors && k(C) > 0 ? (c(), u("div", Ka, [
          (c(!0), u(U, null, K(w(C), (E) => (c(), u("span", {
            key: E,
            class: B(["ancestor-line", { hidden: M(C, E) }]),
            style: D({ left: `${E * e.indent + re}px` })
          }, null, 6))), 128)),
          n("span", {
            class: B(["parent-line", { "is-last": C._isLastChild }]),
            style: D({ left: `${(k(C) - 1) * e.indent + re}px` })
          }, null, 6),
          n("span", {
            class: "horizontal-line",
            style: D({
              left: `${(k(C) - 1) * e.indent + re}px`,
              width: `${e.indent - re + 20}px`
            })
          }, null, 4),
          n("span", {
            class: "connector-joint",
            style: D({ left: `${(k(C) - 1) * e.indent + re}px` })
          }, null, 4)
        ])) : R("", !0),
        n("div", {
          class: "node-content-wrapper",
          onClick: fe((E) => T(C), ["stop"])
        }, [
          n("div", {
            class: B(["node-content", { selected: C._selected }])
          }, [
            x(C) ? (c(), u("span", Ja)) : (c(), u("button", {
              key: 0,
              class: "node-expand-icon",
              type: "button",
              "aria-expanded": C._expanded,
              "aria-label": C._expanded ? "Collapse node" : "Expand node",
              onClick: fe((E) => f(C), ["stop"])
            }, [
              n("span", {
                class: B(["expand-arrow", { rotated: C._expanded }])
              }, null, 2)
            ], 8, Qa)),
            n("span", {
              class: B(["node-icon", H(C)])
            }, [...N[0] || (N[0] = [
              n("span", { class: "icon-core" }, null, -1)
            ])], 2),
            n("span", es, [
              n("span", ts, A(C.label), 1)
            ]),
            e.showStatus && C.status ? (c(), u("span", {
              key: 2,
              class: "node-status",
              title: j(C.status)
            }, [
              n("span", {
                class: B(["status-indicator", `status-${C.status}`])
              }, null, 2),
              n("span", ss, A(C.status), 1)
            ], 8, as)) : R("", !0)
          ], 2)
        ], 8, Za)
      ], 6))), 128)),
      d.value.length === 0 ? (c(), u("div", ls, " No data ")) : R("", !0),
      e.showScanline && e.effect !== "static" ? (c(), u("div", ns)) : R("", !0)
    ], 2));
  }
}), rs = /* @__PURE__ */ q(os, [["__scopeId", "data-v-f9876722"]]), is = W(rs), cs = [
  Be,
  Ye,
  Ue,
  lt,
  gt,
  St,
  Lt,
  Gt,
  ea,
  ra,
  pa,
  ua,
  ba,
  _a,
  Sa,
  Rt,
  Ea,
  wt,
  Oa,
  Ga,
  Ua,
  is,
  ja
], us = Me([...cs]);
console.log(
  "%c %s",
  "border: 1px solid #97E3FE;border-radius: 3px;padding: 2px 5px;color: white;font-weight:bolder;background: linear-gradient(to right, #fF717F,#CC54D1,#4EAFFA,#3DE1C3, #F7DA66)",
  "CyberPunk-UI"
);
const hs = us.install;
export {
  us as default,
  hs as install,
  Me as makeInstaller
};
