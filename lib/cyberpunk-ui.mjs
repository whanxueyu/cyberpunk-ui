import { defineComponent as Y, useSlots as ke, computed as E, openBlock as s, createElementBlock as o, normalizeClass as H, createElementVNode as u, unref as he, renderSlot as J, toDisplayString as P, ref as I, onUnmounted as ue, createBlock as de, Teleport as _e, createVNode as me, TransitionGroup as Ve, withCtx as fe, Fragment as U, renderList as Q, createCommentVNode as B, normalizeStyle as D, watch as ne, nextTick as $e, onMounted as re, withDirectives as pe, createTextVNode as ge, vShow as xe, watchEffect as Le, resolveDynamicComponent as Ce, useCssVars as Se, getCurrentInstance as ze, createStaticVNode as Re, reactive as Ne, onBeforeUnmount as Ee, withModifiers as se, Transition as Te, vModelText as Oe, resolveComponent as Be } from "vue";
const He = (e = []) => ({
  install: (t) => {
    e.forEach((a) => t.use(a));
  }
}), j = (e, l) => (e.install = (t) => {
  for (const a of [e, ...Object.values({})])
    t.component(a.name, a);
}, e), Ae = ["data-content"], De = { key: 1 }, Pe = /* @__PURE__ */ Y({
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
    const t = ke(), a = e, c = E(() => {
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
    }), r = E(() => {
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
    return (n, i) => (s(), o("div", {
      class: H(["cp-button", r.value])
    }, [
      u("div", {
        class: H(["button", c.value]),
        "data-content": a.content
      }, [
        he(t) ? J(n.$slots, "default", { key: 0 }, void 0, !0) : (s(), o("span", De, P(a.content), 1))
      ], 10, Ae)
    ], 2));
  }
}), G = (e, l) => {
  const t = e.__vccOpts || e;
  for (const [a, c] of l)
    t[a] = c;
  return t;
}, We = /* @__PURE__ */ G(Pe, [["__scopeId", "data-v-d2f02d56"]]), Fe = j(We), Ke = { class: "notification-content" }, Ye = {
  key: 0,
  class: "notification-icon"
}, Ge = { class: "notification-body" }, je = {
  key: 0,
  class: "notification-title"
}, Xe = { class: "notification-message" }, qe = {
  key: 1,
  class: "notification-actions"
}, Ue = ["onClick"], Ze = ["onClick"], Qe = /* @__PURE__ */ Y({
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
    const a = e, c = t, r = I([]), n = I(!1);
    let i = 0;
    const m = (d) => {
      const T = ++i, p = d.actions && d.actions.length > 0, w = {
        id: T,
        title: d.title || "",
        message: d.message,
        type: d.type || "info",
        duration: d.duration !== void 0 ? d.duration : p ? 0 : a.duration,
        showClose: d.showClose !== void 0 ? d.showClose : !0,
        showIcon: d.showIcon !== void 0 ? d.showIcon : !0,
        actions: d.actions || [],
        effect: d.effect || a.effect,
        onClose: d.onClose || (() => {
        })
      };
      if (r.value.push(w), n.value = !0, w.duration > 0 && setTimeout(() => {
        h(T);
      }, w.duration), r.value.length > a.maxCount) {
        const $ = r.value[0];
        h($.id);
      }
      return T;
    }, h = (d) => {
      const T = r.value.findIndex((p) => p.id === d);
      if (T !== -1) {
        const p = r.value[T];
        p.onClose && p.onClose(), r.value.splice(T, 1), c("close", d);
      }
    }, k = (d, T) => {
      T.callback && T.callback(), h(d.id);
    }, C = () => {
      r.value.length === 0 && (n.value = !1);
    }, y = () => {
      r.value.forEach((d) => {
        d.onClose && d.onClose();
      }), r.value = [], n.value = !1;
    };
    return l({
      // 创建不同类型的通知
      info: (d) => m({ ...d, type: "info" }),
      success: (d) => m({ ...d, type: "success" }),
      warning: (d) => m({ ...d, type: "warning" }),
      error: (d) => m({ ...d, type: "error" }),
      // 通用创建方法
      create: m,
      // 关闭方法
      close: h,
      // 清除所有
      clearAll: y
    }), ue(() => {
      y();
    }), (d, T) => (s(), de(_e, { to: "body" }, [
      n.value ? (s(), o("div", {
        key: 0,
        class: H(["cp-cyber-notification-container", `position-${e.position}`])
      }, [
        me(Ve, {
          name: "notification",
          tag: "div",
          onAfterLeave: C
        }, {
          default: fe(() => [
            (s(!0), o(U, null, Q(r.value, (p) => (s(), o("div", {
              key: p.id,
              class: H(["cp-cyber-notification", `type-${p.type}`, `effect-${p.effect}`])
            }, [
              u("div", Ke, [
                p.showIcon ? (s(), o("div", Ye, [...T[0] || (T[0] = [
                  u("div", { class: "icon-circle" }, null, -1),
                  u("div", { class: "icon-symbol" }, null, -1)
                ])])) : B("", !0),
                u("div", Ge, [
                  p.title ? (s(), o("div", je, P(p.title), 1)) : B("", !0),
                  u("div", Xe, P(p.message), 1),
                  p.actions && p.actions.length ? (s(), o("div", qe, [
                    (s(!0), o(U, null, Q(p.actions, (w, $) => (s(), o("button", {
                      key: $,
                      class: "action-button",
                      onClick: (_) => k(p, w)
                    }, P(w.text), 9, Ue))), 128))
                  ])) : B("", !0)
                ]),
                p.showClose ? (s(), o("div", {
                  key: 1,
                  class: "notification-close",
                  onClick: (w) => h(p.id)
                }, [...T[1] || (T[1] = [
                  u("span", { class: "close-icon" }, "×", -1)
                ])], 8, Ze)) : B("", !0)
              ]),
              p.duration > 0 ? (s(), o("div", {
                key: 0,
                class: "notification-progress",
                style: D({ animationDuration: `${p.duration}ms` })
              }, null, 4)) : B("", !0),
              T[2] || (T[2] = u("div", { class: "notification-glitch-effect" }, null, -1)),
              T[3] || (T[3] = u("div", { class: "notification-hologram-effect" }, null, -1))
            ], 2))), 128))
          ]),
          _: 1
        })
      ], 2)) : B("", !0)
    ]));
  }
}), Je = /* @__PURE__ */ G(Qe, [["__scopeId", "data-v-45ec4447"]]), et = j(Je), tt = { class: "tooltip-inner" }, at = { class: "tooltip-content" }, lt = /* @__PURE__ */ Y({
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
    const t = e, a = l, c = I(!1), r = I(null), n = I(null), i = I(null), m = I(t.position), h = I({}), k = () => {
      if (!r.value || !n.value || t.position !== "auto")
        return t.position;
      const f = r.value.getBoundingClientRect(), x = n.value.getBoundingClientRect(), v = window.innerWidth, S = window.innerHeight, b = f.top, M = v - f.right, L = S - f.bottom, X = f.left, W = [
        { position: "top", space: b },
        { position: "right", space: M },
        { position: "bottom", space: L },
        { position: "left", space: X }
      ];
      W.sort((F, O) => O.space - F.space);
      const K = x.height || 50, Z = x.width || 150;
      for (const F of W)
        if (F.position === "top" && F.space >= K + 10 || F.position === "bottom" && F.space >= K + 10 || F.position === "left" && F.space >= Z + 10 || F.position === "right" && F.space >= Z + 10)
          return F.position;
      return "top";
    }, C = E(() => typeof t.width == "number" ? `${t.width}px` : t.width), y = () => {
      i.value && clearTimeout(i.value), i.value = window.setTimeout(() => {
        c.value = !0, $e(() => {
          t.position === "auto" ? m.value = k() : m.value = t.position, T(), a("show");
        });
      }, t.delay);
    }, d = () => {
      i.value && clearTimeout(i.value), i.value = window.setTimeout(() => {
        c.value = !1, a("hide");
      }, 100);
    }, T = () => {
      if (!r.value || !n.value) return;
      const f = r.value.getBoundingClientRect(), x = n.value.getBoundingClientRect(), v = window.pageYOffset || document.documentElement.scrollTop, S = window.pageXOffset || document.documentElement.scrollLeft;
      let b = 0, M = 0;
      const L = 10;
      switch (m.value) {
        case "top":
          b = f.left + f.width / 2 - x.width / 2 + S, M = f.top - x.height - L + v;
          break;
        case "right":
          b = f.right + L + S, M = f.top + f.height / 2 - x.height / 2 + v;
          break;
        case "bottom":
          b = f.left + f.width / 2 - x.width / 2 + S, M = f.bottom + L + v;
          break;
        case "left":
          b = f.left - x.width - L + S, M = f.top + f.height / 2 - x.height / 2 + v;
          break;
      }
      (() => {
        const W = window.innerWidth, K = window.innerHeight, Z = 10;
        b < Z ? b = Z : b + x.width > W - Z && (b = W - x.width - Z), M < Z ? M = Z : M + x.height > K - Z && (M = K - x.height - Z);
      })(), h.value = {
        left: `${b}px`,
        top: `${M}px`,
        width: C.value
      };
    }, p = () => {
      t.trigger === "hover" && y();
    }, w = () => {
      t.trigger === "hover" && d();
    }, $ = () => {
      t.trigger === "click" && (c.value ? d() : y());
    }, _ = () => {
      t.trigger === "focus" && y();
    }, z = () => {
      t.trigger === "focus" && d();
    }, A = () => {
      c.value && (t.position === "auto" && (m.value = k()), T());
    }, g = () => {
      c.value && (N && clearTimeout(N), N = setTimeout(() => {
        T();
      }, 16));
    };
    ne(
      () => t.position,
      (f) => {
        c.value && $e(() => {
          f === "auto" ? m.value = k() : m.value = f, T();
        });
      }
    );
    let R = [];
    const V = (f) => {
      let x = [], v = f.parentElement;
      for (; v; ) {
        const S = window.getComputedStyle(v);
        /(auto|scroll)/.test(S.overflow + S.overflowY + S.overflowX) && x.push(v), v = v.parentElement;
      }
      return x.push(document.documentElement), x;
    };
    re(() => {
      if (window.addEventListener("resize", A), window.addEventListener("scroll", g, { passive: !0 }), document.addEventListener("click", (f) => {
        if (c.value && t.trigger === "click") {
          const x = f.target;
          n.value && !n.value.contains(x) && r.value && !r.value.contains(x) && d();
        }
      }), r.value) {
        R = V(r.value);
        const f = () => {
          N && clearTimeout(N), N = setTimeout(() => {
            c.value && T();
          }, 16);
        };
        R.forEach((x) => {
          x.addEventListener("scroll", f);
        });
      }
    });
    let N = null;
    return ue(() => {
      window.removeEventListener("resize", A), window.removeEventListener("scroll", g), R.forEach((f) => {
        f.removeEventListener("scroll", g);
      }), i.value && clearTimeout(i.value), N && clearTimeout(N);
    }), (f, x) => (s(), o("div", null, [
      u("div", {
        ref_key: "triggerRef",
        ref: r,
        class: "tooltip-trigger",
        onMouseenter: p,
        onMouseleave: w,
        onClick: $,
        onFocus: _,
        onBlur: z
      }, [
        J(f.$slots, "default", {}, void 0, !0)
      ], 544),
      (s(), de(_e, { to: "body" }, [
        pe(u("div", {
          ref_key: "tooltipRef",
          ref: n,
          class: H([
            "cp-cyber-tooltip",
            `theme-${e.theme}`,
            `effect-${e.effect}`,
            `position-${m.value}`
          ]),
          style: D(h.value)
        }, [
          x[2] || (x[2] = u("div", { class: "tooltip-arrow" }, null, -1)),
          u("div", tt, [
            u("div", at, [
              J(f.$slots, "content", {}, () => [
                ge(P(e.content), 1)
              ], !0)
            ]),
            x[0] || (x[0] = u("div", { class: "tooltip-scanline" }, null, -1)),
            x[1] || (x[1] = u("div", { class: "tooltip-glitch" }, null, -1))
          ])
        ], 6), [
          [xe, c.value]
        ])
      ]))
    ]));
  }
}), nt = /* @__PURE__ */ G(lt, [["__scopeId", "data-v-8d1082ff"]]), st = j(nt), ot = ["aria-valuenow", "aria-label"], rt = { class: "pipe-container" }, it = { class: "pipe-track" }, ct = { class: "pipe-wall" }, ut = { class: "pipe-lumen" }, dt = { class: "fill-particles" }, ft = {
  key: 0,
  class: "percentage-inside"
}, vt = { class: "tick-marks" }, ht = {
  key: 0,
  class: "percentage-outside"
}, mt = {
  key: 1,
  class: "status-indicator"
}, pt = { class: "status-text" }, gt = /* @__PURE__ */ Y({
  name: "CyberProgress",
  __name: "progress",
  props: {
    percentage: { default: 0 },
    theme: { default: "neon" },
    animated: { type: Boolean, default: !0 },
    showPercentage: { type: Boolean, default: !0 },
    percentagePosition: { default: "outside" },
    showStatus: { type: Boolean, default: !1 },
    indeterminate: { type: Boolean, default: !1 },
    direction: { default: "horizontal" },
    color: {},
    height: { default: 24 },
    glowIntensity: { default: 5 }
  },
  setup(e) {
    const l = e, t = E(() => Math.min(100, Math.max(0, l.percentage)).toFixed(0)), a = E(() => {
      if (l.indeterminate) return "处理中";
      const y = Number(t.value);
      return y < 30 ? "初始化" : y < 60 ? "处理中" : y < 90 ? "加载中" : y < 100 ? "即将完成" : "已完成";
    }), c = E(() => !!l.color), r = E(() => ({
      [`theme-${l.theme}`]: !c.value,
      "is-custom-color": c.value,
      "is-animated": l.animated,
      "is-indeterminate": l.indeterminate,
      "is-vertical": l.direction === "vertical",
      "is-complete": Number(t.value) >= 100
    })), n = E(() => `${l.glowIntensity * 4}px`), i = E(() => `${l.glowIntensity * 2}px`);
    function m(y) {
      const d = y.replace("#", "");
      return d.length === 3 ? [
        parseInt(d[0] + d[0], 16),
        parseInt(d[1] + d[1], 16),
        parseInt(d[2] + d[2], 16)
      ].join(", ") : [
        parseInt(d.substring(0, 2), 16),
        parseInt(d.substring(2, 4), 16),
        parseInt(d.substring(4, 6), 16)
      ].join(", ");
    }
    const h = E(() => l.color ? {
      "--progress-primary": l.color,
      "--progress-primary-rgb": m(l.color)
    } : {}), k = E(() => ({
      ...h.value,
      "--pipe-height": `${l.height}px`,
      "--glow-radius": n.value,
      "--glow-spread": i.value
    })), C = E(() => {
      if (l.indeterminate) return;
      const y = Number(t.value);
      return l.direction === "vertical" ? { height: `${y}%` } : { width: `${y}%` };
    });
    return (y, d) => (s(), o("div", {
      class: H(["cyber-progress", r.value]),
      style: D(k.value),
      role: "progressbar",
      "aria-valuenow": e.indeterminate ? void 0 : Number(t.value),
      "aria-valuemin": 0,
      "aria-valuemax": 100,
      "aria-label": e.indeterminate ? "加载中" : `进度 ${t.value}%`
    }, [
      u("div", rt, [
        u("div", it, [
          u("div", ct, [
            u("div", ut, [
              d[2] || (d[2] = u("div", { class: "track-grid" }, null, -1)),
              u("div", {
                class: "progress-fill",
                style: D(C.value)
              }, [
                d[0] || (d[0] = u("div", { class: "fill-highlight" }, null, -1)),
                d[1] || (d[1] = u("div", { class: "fill-scanline" }, null, -1)),
                u("div", dt, [
                  (s(), o(U, null, Q(3, (T) => u("span", {
                    key: T,
                    class: "particle"
                  })), 64))
                ]),
                e.showPercentage && e.percentagePosition === "inside" ? (s(), o("span", ft, P(t.value) + "% ", 1)) : B("", !0)
              ], 4),
              u("div", vt, [
                (s(), o(U, null, Q(10, (T) => u("span", {
                  key: T,
                  class: H(["tick", { active: T * 10 <= e.percentage }])
                }, null, 2)), 64))
              ])
            ]),
            d[3] || (d[3] = u("div", { class: "pipe-port port-start" }, null, -1)),
            d[4] || (d[4] = u("div", { class: "pipe-port port-end" }, null, -1))
          ])
        ])
      ]),
      e.showPercentage && e.percentagePosition === "outside" ? (s(), o("span", ht, P(t.value) + "% ", 1)) : B("", !0),
      e.showStatus ? (s(), o("div", mt, [
        d[5] || (d[5] = u("div", { class: "indicator-dot" }, null, -1)),
        u("span", pt, P(a.value), 1)
      ])) : B("", !0)
    ], 14, ot));
  }
}), yt = /* @__PURE__ */ G(gt, [["__scopeId", "data-v-89c96300"]]), bt = j(yt), wt = {
  key: 0,
  class: "prefix"
}, xt = { class: "counter-container" }, $t = {
  key: 0,
  class: "separator"
}, kt = { class: "digit-top" }, Ct = { class: "digit-bottom" }, St = { class: "digit-top flip-top" }, Mt = { class: "digit-bottom flip-bottom" }, It = {
  key: 1,
  class: "suffix"
}, Tt = /* @__PURE__ */ Y({
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
    const l = e, t = I(Number(l.from)), a = I(Number(l.value)), c = I(null), r = I(null), n = I(""), i = (p) => {
      const w = Math.pow(10, l.decimal);
      let _ = (Math.round(p * w) / w).toFixed(l.decimal);
      if (l.separator) {
        const z = _.split(".");
        z[0] = z[0].replace(/\B(?=(\d{3})+(?!\d))/g, l.separator), _ = z.join(".");
      }
      return _;
    }, m = E(() => i(t.value)), h = E(() => m.value.split("")), k = (p) => p === l.separator || p === ".", C = (p) => !n.value || p >= n.value.length ? !1 : n.value[p] !== h.value[p] && !k(h.value[p]), y = (p) => {
      c.value === null && (c.value = p);
      const w = p - c.value, $ = Math.min(w / l.duration, 1), _ = Number(l.from), z = Number(l.to !== null ? l.to : a.value), A = _ + (z - _) * d($);
      t.value = A, $ < 1 ? r.value = requestAnimationFrame(y) : (t.value = z, c.value = null);
    }, d = (p) => 1 - Math.pow(1 - p, 4), T = () => {
      n.value = m.value, r.value !== null && cancelAnimationFrame(r.value), c.value = null, r.value = requestAnimationFrame(y);
    };
    return ne(() => l.value, (p) => {
      a.value = Number(p), T();
    }), ne(() => l.to, (p) => {
      p !== null && (a.value = Number(p), T());
    }), re(() => {
      Number(l.from) !== Number(l.value) && T();
    }), ue(() => {
      r.value !== null && cancelAnimationFrame(r.value);
    }), (p, w) => (s(), o("div", {
      class: H(["cp-digital-counter", `theme-${e.theme}`])
    }, [
      e.prefix ? (s(), o("span", wt, P(e.prefix), 1)) : B("", !0),
      u("div", xt, [
        (s(!0), o(U, null, Q(h.value, ($, _) => (s(), o("div", {
          key: _,
          class: "digit-container"
        }, [
          k($) ? (s(), o("div", $t, P($), 1)) : (s(), o("div", {
            key: 1,
            class: H(["digit-flipper", { animate: C(_) }])
          }, [
            u("div", kt, P($), 1),
            u("div", Ct, P($), 1),
            u("div", St, P($), 1),
            u("div", Mt, P($), 1)
          ], 2))
        ]))), 128))
      ]),
      e.suffix ? (s(), o("span", It, P(e.suffix), 1)) : B("", !0)
    ], 2));
  }
}), _t = /* @__PURE__ */ G(Tt, [["__scopeId", "data-v-bdcaf151"]]), Vt = j(_t), Et = {
  class: "cp-full-page",
  id: "page-scroll"
}, Bt = ["onClick"], Lt = /* @__PURE__ */ Y({
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
    const t = e, a = l, c = I();
    Le(() => {
      c.value?.style && (c.value.style.transform = n.value);
    });
    const r = E(() => {
      i.value = !0;
      let g = 0;
      return document.getElementById("page-scroll")?.clientHeight ? g = document.getElementById("page-scroll")?.clientHeight ?? 0 : g = window.innerHeight, g;
    }), n = E(() => `translateY(-${$.value * r.value}px)`), i = I(!1), m = I(!0);
    function h(g) {
      g.preventDefault(), g.stopPropagation(), i.value = !1, m.value && (m.value = !1, w(g), setTimeout(() => {
        m.value = !0;
      }, 500));
    }
    const k = I(0), C = I(0), y = I(0);
    function d(g) {
      k.value = g.touches[0].pageY || g.changedTouches[0].pageY;
    }
    function T(g) {
      g.preventDefault(), i.value = !1, C.value = g.changedTouches[0].pageY || g.touches[0].pageY, y.value = C.value - k.value, Math.abs(y.value) >= 60 ? ($.value < t.items.length - 1 && y.value < 0 && $.value++, $.value > 0 && y.value > 0 && $.value--) : (console.log("else", -$.value * r.value), c.value.style.transform = `translateY(-${$.value * r.value}px)`);
    }
    function p(g) {
      i.value = !0, g.preventDefault(), y.value = (g.changedTouches[0].pageY || g.touches[0].pageY) - k.value, !($.value === t.items.length - 1 && y.value < 0 || $.value === 0 && y.value > 0) && (console.log("else", -$.value * r.value + y.value * -1), c.value.style.transform = `translateY(-${$.value * r.value + y.value * -1}px)`);
    }
    function w(g) {
      g.wheelDelta < 0 ? (_(), a("change", { from: t.items[$.value - 1], to: t.items[$.value], type: "next" })) : (z(), a("change", { from: t.items[$.value + 1], to: t.items[$.value], type: "last" }));
    }
    const $ = I(0);
    function _() {
      $.value < t.items.length - 1 && ($.value++, a("toNext", $.value));
    }
    function z() {
      ($.value > 1 || $.value === 1) && ($.value--, a("toLast", $.value));
    }
    function A(g) {
      i.value = !1, $.value = g;
    }
    return (g, R) => (s(), o("div", Et, [
      u("div", {
        ref_key: "element",
        ref: c,
        class: H([{ activeTranstion: i.value }, "inner-box"]),
        onMousewheel: h,
        onTouchstart: d,
        onTouchend: T,
        onTouchmove: p
      }, [
        J(g.$slots, "default", {}, void 0, !0)
      ], 34),
      u("div", {
        class: H(["cp-full-dot", t.position])
      }, [
        (s(!0), o(U, null, Q(t.items, (V, N) => (s(), o("div", {
          onClick: (f) => A(N),
          class: "cp-full-dot-item"
        }, [
          u("div", {
            class: H(["cp-full-dot-item-bg", { active: N === $.value }])
          }, null, 2),
          t.showTitle ? pe((s(), o("div", {
            key: 0,
            class: "show-dec"
          }, P(V.title), 513)), [
            [xe, N === $.value]
          ]) : B("", !0)
        ], 8, Bt))), 256))
      ], 2)
    ]));
  }
}), zt = /* @__PURE__ */ G(Lt, [["__scopeId", "data-v-47f2369a"]]), Rt = j(zt), Nt = ["src", "alt"], Ot = {
  key: 1,
  class: "loading-placeholder"
}, Ht = {
  key: 2,
  class: "error-placeholder"
}, At = /* @__PURE__ */ Y({
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
    const t = e, a = l, c = I(null), r = I(null), n = I(null), i = I(!1), m = I(!1), h = I(!1), k = I(null), C = I(null), y = E(() => t.intensity / 10), d = () => {
      i.value = !0, m.value = !1, setTimeout(() => {
        p(), t.triggerMode === "auto" ? V() : t.triggerMode === "random" && N();
      }, 0);
    }, T = () => {
      m.value = !0, i.value = !1, console.error("Failed to load image:", t.src);
    }, p = () => {
      if (!n.value || !r.value) return;
      const b = r.value, M = n.value, L = M.getContext("2d");
      if (L) {
        M.width = b.naturalWidth, M.height = b.naturalHeight;
        try {
          L.drawImage(b, 0, 0), C.value = L.getImageData(0, 0, M.width, M.height);
        } catch (X) {
          console.error("Failed to get image data (possibly CORS issue):", X), m.value = !0;
        }
      }
    }, w = (b, M) => {
      if (!C.value) return;
      const L = b.canvas, X = b.getImageData(0, 0, L.width, L.height), W = X.data, K = C.value.data, Z = Math.floor(8 + 25 * M), F = Math.floor(8 + M * 20), O = Math.max(2, Math.floor(L.height / F));
      for (let q = 0; q < F; q++) {
        const ee = q * O, te = Math.min(ee + O, L.height), ae = Math.floor((Math.random() - 0.5) * 2 * Z), oe = Math.floor((Math.random() - 0.5) * 2 * Z);
        for (let le = ee; le < te; le++)
          for (let ve = 0; ve < L.width; ve++) {
            const ce = (le * L.width + ve) * 4, ye = Math.min(Math.max(ve + ae, 0), L.width - 1);
            W[ce] = K[(le * L.width + ye) * 4];
            const ie = Math.min(Math.max(ve + oe, 0), L.width - 1);
            W[ce + 2] = K[(le * L.width + ie) * 4 + 2], W[ce + 1] = K[ce + 1];
          }
      }
      b.putImageData(X, 0, 0);
    }, $ = (b, M) => {
      if (!C.value) return;
      const L = b.canvas;
      b.putImageData(C.value, 0, 0);
      const X = Math.max(2, Math.floor(6 - M * 0.4));
      for (let K = 0; K < L.height; K += X)
        b.fillStyle = `rgba(0, 0, 0, ${0.15 + M * 0.05})`, b.fillRect(0, K, L.width, Math.max(1, Math.floor(X / 3)));
      const W = Math.floor(M * 3);
      for (let K = 0; K < W; K++) {
        const Z = Math.floor(Math.random() * L.height), F = 1 + Math.floor(Math.random() * 3);
        b.fillStyle = `rgba(255, 255, 255, ${0.1 + Math.random() * 0.2})`, b.fillRect(0, Z, L.width, F);
      }
    }, _ = (b, M) => {
      if (!C.value) return;
      const L = b.canvas;
      b.putImageData(C.value, 0, 0);
      const X = Math.max(2, Math.floor(4 + M * 6)), W = Math.floor(2 + M * 3);
      for (let K = 0; K < W; K++) {
        const Z = Math.floor(Math.random() * (L.height - 20)), F = Math.floor(10 + Math.random() * 50 * M), O = document.createElement("canvas");
        O.width = Math.max(2, Math.ceil(L.width / X)), O.height = Math.max(2, Math.ceil(F / X));
        const q = O.getContext("2d");
        q.imageSmoothingEnabled = !1, q.drawImage(L, 0, Z, L.width, F, 0, 0, O.width, O.height), b.imageSmoothingEnabled = !1, b.drawImage(O, 0, 0, O.width, O.height, 0, Z, L.width, F), b.imageSmoothingEnabled = !0;
      }
    }, z = (b, M) => {
      if (!C.value) return;
      const L = b.canvas, X = b.getImageData(0, 0, L.width, L.height), W = X.data, K = 0.03 + M * 0.03;
      for (let F = 0; F < W.length; F += 4)
        if (Math.random() < K)
          if (Math.random() < 0.7) {
            const O = Math.floor(Math.random() * 160 + 95);
            W[F] = O, W[F + 1] = O, W[F + 2] = O;
          } else
            W[F] = Math.floor(Math.random() * 256), W[F + 1] = Math.floor(Math.random() * 256), W[F + 2] = Math.floor(Math.random() * 256);
      b.putImageData(X, 0, 0);
      const Z = Math.floor(M * 4);
      for (let F = 0; F < Z; F++) {
        const O = Math.floor(Math.random() * L.height), q = 1 + Math.floor(Math.random() * 3), ee = 0.1 + Math.random() * 0.2, te = Math.random() > 0.5;
        b.fillStyle = te ? `rgba(0, 0, 0, ${ee})` : `rgba(255, 255, 255, ${ee})`, b.fillRect(0, O, L.width, q);
      }
    }, A = (b, M) => {
      w(b, M);
      const L = ["scanline", "pixelate", "noise"], X = 1 + Math.floor(Math.random() * 2);
      for (let W = L.length - 1; W > 0; W--) {
        const K = Math.floor(Math.random() * (W + 1));
        [L[W], L[K]] = [L[K], L[W]];
      }
      L.slice(0, X).forEach((W) => {
        const K = M * 0.6;
        switch (W) {
          case "scanline":
            $(b, K);
            break;
          case "pixelate":
            _(b, K);
            break;
          case "noise":
            z(b, K);
            break;
        }
      });
    }, g = () => {
      if (!n.value || !C.value) return;
      const M = n.value.getContext("2d");
      if (M) {
        switch (M.putImageData(C.value, 0, 0), t.glitchType) {
          case "rgb-shift":
            w(M, y.value);
            break;
          case "scanline":
            $(M, y.value);
            break;
          case "pixelate":
            _(M, y.value);
            break;
          case "noise":
            z(M, y.value);
            break;
          case "combined":
            A(M, y.value);
            break;
        }
        h.value = !0, a("glitch-start");
      }
    }, R = () => {
      if (!n.value || !C.value) return;
      const M = n.value.getContext("2d");
      M && (M.putImageData(C.value, 0, 0), h.value = !1, a("glitch-end"));
    }, V = () => {
      k.value && clearInterval(k.value), g(), t.animated && (k.value = window.setInterval(() => {
        g();
      }, t.interval));
    }, N = () => {
      k.value && clearInterval(k.value), k.value = window.setInterval(() => {
        Math.random() < 0.5 && (g(), setTimeout(() => {
          R();
        }, 200 + Math.random() * 300));
      }, t.interval);
    }, f = () => {
      k.value && (clearInterval(k.value), k.value = null), R();
    }, x = () => {
      t.triggerMode === "hover" && V();
    }, v = () => {
      t.triggerMode === "hover" && !t.animated && f();
    }, S = () => {
      t.triggerMode === "click" && (h.value ? f() : V());
    };
    return ne(() => [t.src, t.glitchType, t.intensity], () => {
      t.src && (i.value = !1, m.value = !1), h.value && g();
    }), re(() => {
      r.value && r.value.complete && r.value.naturalHeight !== 0 && d();
    }), ue(() => {
      k.value && clearInterval(k.value);
    }), (b, M) => (s(), o("div", {
      class: H(["cp-glitch-image", { animated: e.animated }]),
      onMouseenter: x,
      onMouseleave: v,
      onClick: S
    }, [
      u("div", {
        class: "image-container",
        ref_key: "imageContainerRef",
        ref: c
      }, [
        u("img", {
          src: e.src,
          alt: e.alt,
          ref_key: "imageRef",
          ref: r,
          class: "original-image",
          crossOrigin: "anonymous",
          onLoad: d,
          onError: T
        }, null, 40, Nt),
        i.value && !m.value ? (s(), o("canvas", {
          key: 0,
          ref_key: "glitchCanvasRef",
          ref: n,
          class: "glitch-canvas"
        }, null, 512)) : B("", !0),
        !i.value && !m.value ? (s(), o("div", Ot, [...M[0] || (M[0] = [
          u("div", { class: "loading-text" }, "Loading...", -1)
        ])])) : B("", !0),
        m.value ? (s(), o("div", Ht, [...M[1] || (M[1] = [
          u("div", { class: "error-text" }, "Image Load Failed", -1)
        ])])) : B("", !0)
      ], 512)
    ], 34));
  }
}), Dt = /* @__PURE__ */ G(At, [["__scopeId", "data-v-4129f767"]]), Pt = j(Dt), Wt = ["data-progress"], Ft = { class: "progress-container" }, Kt = {
  key: 0,
  class: "progress-text"
}, Yt = /* @__PURE__ */ Y({
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
    const l = e, t = I(null), a = I(null), c = E(() => l.direction === "vertical" ? "vertical" : "horizontal"), r = E(() => {
      const m = l.direction === "vertical" ? "height" : "width", h = l.indeterminate ? "100%" : `${l.progress}%`;
      return {
        [m]: h,
        backgroundColor: l.color,
        boxShadow: `0 0 ${l.glitchIntensity * 2}px ${l.color}`
      };
    }), n = () => {
      if (!t.value) return;
      const m = t.value.querySelector(".glitch-effect");
      if (!m) return;
      const h = () => {
        if (!m) return;
        if (Math.random() < l.glitchIntensity / 20) {
          const C = Math.random() * l.glitchIntensity - l.glitchIntensity / 2, y = Math.random() * l.glitchIntensity - l.glitchIntensity / 2, d = Math.random() * l.glitchIntensity - l.glitchIntensity / 2, T = Math.random() * l.glitchIntensity / 2;
          m.style.transform = `translate(${C}px, ${y}px) skew(${d}deg)`, m.style.filter = `blur(${T}px)`, m.style.opacity = "1", setTimeout(() => {
            m && (m.style.transform = "translate(0, 0) skew(0)", m.style.filter = "blur(0)", m.style.opacity = "0");
          }, 150);
        }
      };
      a.value = window.setInterval(() => {
        h();
      }, 500);
    };
    let i = l.progress;
    return ne(() => l.progress, (m) => {
      if (m !== i) {
        if (t.value) {
          const h = t.value.querySelector(".glitch-effect");
          if (h) {
            const k = Math.random() * l.glitchIntensity * 2 - l.glitchIntensity, C = Math.random() * l.glitchIntensity - l.glitchIntensity / 2;
            h.style.transform = `translate(${k}px, ${C}px)`, h.style.opacity = "1", setTimeout(() => {
              h && (h.style.transform = "translate(0, 0)", h.style.opacity = "0");
            }, 300);
          }
        }
        i = m;
      }
    }), re(() => {
      n();
    }), ue(() => {
      a.value && clearInterval(a.value);
    }), (m, h) => (s(), o("div", {
      class: H(["cp-glitch-progress", c.value, { indeterminate: e.indeterminate }]),
      "data-progress": e.progress
    }, [
      u("div", Ft, [
        u("div", {
          class: "progress-bar",
          style: D(r.value),
          ref_key: "progressBarRef",
          ref: t
        }, [...h[0] || (h[0] = [
          u("div", { class: "glitch-effect" }, null, -1)
        ])], 4),
        e.showText && !e.indeterminate ? (s(), o("div", Kt, P(e.progress) + "% ", 1)) : B("", !0)
      ])
    ], 10, Wt));
  }
}), Gt = /* @__PURE__ */ G(Yt, [["__scopeId", "data-v-0dd75ff2"]]), jt = j(Gt), Xt = /* @__PURE__ */ Y({
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
    const l = e, t = E(() => ({
      "--glow-color": l.color
    }));
    return (a, c) => (s(), de(Ce(e.tag), {
      class: H([
        "cp-glow-text",
        `cp-glow-text--${e.effect}`,
        `cp-glow-text--${e.animationSpeed}`,
        {
          "cp-glow-text--glowing": e.glowing,
          "cp-glow-text--disabled": e.disabled
        }
      ]),
      style: D(t.value)
    }, {
      default: fe(() => [
        J(a.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class", "style"]));
  }
}), qt = /* @__PURE__ */ G(Xt, [["__scopeId", "data-v-4baf23ec"]]), Ut = j(qt), Zt = ["tabindex", "aria-disabled", "aria-label"], Qt = { class: "holo-card-content" }, Jt = {
  key: 0,
  class: "card-title"
}, ea = /* @__PURE__ */ Y({
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
    Se((p) => ({
      v71b0484a: a.hologramColor
    }));
    const l = ze(), t = ke(), a = e, c = I({ x: 0, y: 0 }), r = I(!1), m = ((p, w) => {
      let $;
      return function() {
        const _ = arguments, z = l;
        $ || (p.apply(z, _), $ = !0, setTimeout(() => $ = !1, w));
      };
    })((p) => {
      if (a.disabled) return;
      const w = p.currentTarget.getBoundingClientRect();
      c.value = {
        x: (p.clientX - w.left) / w.width * 2 - 1,
        y: (p.clientY - w.top) / w.height * 2 - 1
      }, r.value = !0;
    }, 16), h = () => {
      r.value = !1, c.value = { x: 0, y: 0 };
    }, k = () => {
      a.disabled || (r.value = !0, c.value = { x: 0, y: 0 });
    }, C = E(() => [(() => {
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
    })()]), y = E(() => {
      const p = {};
      if (a.rounded || (p.borderRadius = "0"), a.disabled && (p.cursor = "not-allowed", p.opacity = "0.6"), !r.value || a.disabled) return p;
      const w = c.value.y * 10, $ = -c.value.x * 10;
      return {
        ...p,
        transform: `perspective(1000px) rotateX(${w}deg) rotateY(${$}deg) scale3d(1.05, 1.05, 1.05)`,
        transition: "transform 0.1s ease"
      };
    }), d = E(() => {
      if (!r.value || a.disabled) return {};
      const p = Math.max(-50, Math.min(50, c.value.x * 10)), w = Math.max(-50, Math.min(50, c.value.y * 10));
      return {
        background: `radial-gradient(circle at ${50 + p}% ${50 + w}%, ${a.hologramColor}33, transparent 70%)`,
        opacity: 0.8,
        transition: "background 0.1s ease"
      };
    }), T = E(() => {
      const p = a.glowIntensity / 100;
      return {
        boxShadow: `0 0 ${10 + a.glowIntensity / 5}px ${a.hologramColor}${Math.floor(p * 99).toString(16).padStart(2, "0")}`,
        opacity: r.value && !a.disabled ? p : p * 0.5
      };
    });
    return re(() => {
      $e(() => {
      });
    }), (p, w) => (s(), o("div", {
      class: H([
        "cp-holo-card",
        `depth-${e.depth}`,
        C.value,
        `theme-${e.theme}`,
        `effect-${e.effect}`
      ]),
      style: D(y.value),
      onMousemove: w[0] || (w[0] = //@ts-ignore
      (...$) => he(m) && he(m)(...$)),
      onMouseleave: h,
      onFocus: k,
      onBlur: h,
      tabindex: e.disabled ? -1 : 0,
      role: "button",
      "aria-disabled": e.disabled,
      "aria-label": e.title
    }, [
      u("div", Qt, [
        e.title && !he(t).title ? (s(), o("div", Jt, P(e.title), 1)) : B("", !0),
        J(p.$slots, "title", {}, void 0, !0),
        J(p.$slots, "default", {}, void 0, !0),
        J(p.$slots, "footer", {}, void 0, !0)
      ]),
      u("div", {
        class: "holo-card-hologram-effect",
        style: D(d.value)
      }, null, 4),
      u("div", {
        class: "holo-card-glow",
        style: D(T.value)
      }, null, 4)
    ], 46, Zt));
  }
}), ta = /* @__PURE__ */ G(ea, [["__scopeId", "data-v-37a03c6f"]]), aa = j(ta), la = { class: "loader-container" }, na = {
  key: 0,
  class: "cube-loader"
}, sa = {
  key: 1,
  class: "sphere-loader"
}, oa = { class: "sphere" }, ra = {
  key: 2,
  class: "datastream-loader"
}, ia = {
  key: 3,
  class: "circuit-loader"
}, ca = { class: "circuit-board" }, ua = {
  key: 0,
  class: "loader-text"
}, da = { class: "typing-text" }, fa = /* @__PURE__ */ Y({
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
    Se((m) => ({
      ec52a5fc: m.$props.color,
      v43502f2b: t
    }));
    const l = e, t = (6 / l.speed).toString() + "s", a = E(() => {
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
    }), c = I(""), r = I(0), n = I(null), i = () => {
      if (!l.text) return;
      r.value = 0, c.value = "";
      const m = () => {
        r.value < l.text.length ? (c.value += l.text[r.value], r.value++) : setTimeout(() => {
          r.value = 0, c.value = "";
        }, 1e3);
      }, h = 100 / l.speed;
      n.value = window.setInterval(m, h);
    };
    return ne(() => l.text, () => {
      n.value && clearInterval(n.value), i();
    }), re(() => {
      i();
    }), ue(() => {
      n.value && clearInterval(n.value);
    }), (m, h) => (s(), o("div", {
      class: H(["cp-holo-loader", a.value, { "transparent-bg": e.transparent }])
    }, [
      u("div", la, [
        u("div", {
          class: H(["holo-projection", `type-${e.type}`])
        }, [
          e.type === "cube" || e.type === "split" ? (s(), o("div", na, [...h[0] || (h[0] = [
            Re('<div class="cube" data-v-8f86dded><div class="cube-face front" data-v-8f86dded></div><div class="cube-face back" data-v-8f86dded></div><div class="cube-face right" data-v-8f86dded></div><div class="cube-face left" data-v-8f86dded></div><div class="cube-face top" data-v-8f86dded></div><div class="cube-face bottom" data-v-8f86dded></div></div>', 1)
          ])])) : e.type === "sphere" ? (s(), o("div", sa, [
            u("div", oa, [
              (s(), o(U, null, Q(3, (k) => u("div", {
                class: "sphere-ring",
                key: k
              })), 64))
            ])
          ])) : e.type === "datastream" ? (s(), o("div", ra, [
            (s(), o(U, null, Q(10, (k) => u("div", {
              class: "data-line",
              key: k
            })), 64))
          ])) : e.type === "circuit" ? (s(), o("div", ia, [
            u("div", ca, [
              (s(), o(U, null, Q(5, (k) => u("div", {
                class: "circuit-path",
                key: k
              })), 64)),
              (s(), o(U, null, Q(6, (k) => u("div", {
                class: "circuit-node",
                key: k + 10
              })), 64))
            ])
          ])) : B("", !0)
        ], 2),
        e.text ? (s(), o("div", ua, [
          u("span", da, P(c.value), 1),
          h[1] || (h[1] = u("span", { class: "cursor" }, "_", -1))
        ])) : B("", !0),
        h[2] || (h[2] = u("div", { class: "holo-base" }, [
          u("div", { class: "base-glow" })
        ], -1))
      ])
    ], 2));
  }
}), va = /* @__PURE__ */ G(fa, [["__scopeId", "data-v-8f86dded"]]), ha = j(va), ma = { class: "header-row" }, pa = { class: "header-text" }, ga = { class: "cell-text" }, ya = {
  key: 0,
  class: "row-scanline"
}, ba = /* @__PURE__ */ Y({
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
    const l = e, t = I(null), a = I(!1), c = I(!0), r = I(1), n = I(0), i = I(!1), m = I(0), h = Ne([]);
    l.data.length > 0 && h.splice(0, h.length, ...l.data);
    let k = 0;
    const C = () => `row-${++k}-${Date.now()}`, y = E(() => l.rowNum * l.rowHeight), d = E(() => y.value), T = E(() => {
      const f = h.length, x = l.rowNum;
      if (f === 0) return [];
      if (f <= x)
        return h.map((M, L) => ({
          key: M._uniqueKey || C(),
          data: M,
          index: L
        }));
      let v = [...h];
      f > x && f < 2 * x && (v = [...v, ...v]), v = v.map((M, L) => ({
        key: M._uniqueKey || C(),
        data: M,
        index: L,
        scroll: L
      }));
      let S = v.slice(n.value);
      return S.push(...v.slice(0, n.value)), S.slice(0, x);
    }), p = (f) => l.columns[f]?.width ? l.columns[f].width : "auto", w = (f) => f === "center" ? "center" : f === "right" ? "flex-end" : "flex-start", $ = () => l.theme === "neon" ? "rgba(0, 230, 246, 0.15)" : l.theme === "hologram" ? "rgba(138, 43, 226, 0.2)" : l.theme === "terminal" ? "rgba(0, 255, 0, 0.15)" : l.theme === "matrix" ? "rgba(0, 255, 65, 0.15)" : "rgba(0, 230, 246, 0.15)", _ = (f) => (n.value + f) % h.length % 2 === 0 ? "var(--table-row-bg)" : "var(--table-row-hover)", z = (f, x) => {
      const v = x.split(".");
      let S = f;
      for (const b of v)
        S = S?.[b];
      return S ?? "";
    }, A = async () => {
      if (!(a.value || !c.value)) {
        a.value = !0;
        try {
          if (l.remoteMethod) {
            const f = await l.remoteMethod({
              page: r.value,
              size: l.bufferSize * 10
            });
            if (f.data && f.data.length > 0) {
              const x = f.data.map((v) => (v._uniqueKey || (v._uniqueKey = C()), v));
              r.value === 1 ? h.splice(0, h.length, ...x) : h.push(...x), l.data && l.data.splice(0, l.data.length, ...h);
            }
            c.value = f.hasMore ?? !1, r.value++;
          } else l.loadMore && await l.loadMore();
        } catch (f) {
          console.error("Failed to load more data:", f), c.value = !1;
        } finally {
          a.value = !1;
        }
      }
    }, g = async () => {
      if (!l.autoScroll || i.value) return;
      const f = h.length, x = l.rowNum;
      if (f <= x || (await new Promise((S) => setTimeout(S, l.waitTime)), i.value)) return;
      const v = async () => {
        if (i.value) return;
        const S = m.value, b = l.scrollType === "page" ? x : 1;
        n.value = (n.value + b) % f;
        const M = l.scrollType === "page" ? 500 : 300;
        await new Promise((L) => setTimeout(L, M)), !(m.value !== S || i.value) && (await new Promise((L) => setTimeout(L, l.waitTime)), !(m.value !== S || i.value) && v());
      };
      v();
    }, R = () => {
      m.value = (m.value + 1) % 999999;
    }, V = () => {
      l.hoverPause && (i.value = !0, R());
    }, N = () => {
      l.hoverPause && (i.value = !1, g());
    };
    return re(() => {
      l.remoteMethod && h.length === 0 && A(), l.autoScroll && g();
    }), (f, x) => (s(), o("div", {
      class: H(["cyber-infinite-table", [`theme-${e.theme}`, `scroll-${e.scrollType}`]])
    }, [
      u("div", {
        class: "table-header",
        style: D({ backgroundColor: $() })
      }, [
        u("div", ma, [
          (s(!0), o(U, null, Q(e.columns, (v, S) => (s(), o("div", {
            key: v.field || S,
            class: "header-cell",
            style: D({
              width: p(S),
              minWidth: v.minWidth || "100px",
              textAlign: v.align || "left"
            })
          }, [
            u("div", {
              class: "header-content",
              style: D({ justifyContent: w(v.align || "left") })
            }, [
              u("span", pa, P(v.title), 1)
            ], 4)
          ], 4))), 128))
        ])
      ], 4),
      u("div", {
        class: "table-body",
        ref_key: "bodyRef",
        ref: t,
        onMouseenter: V,
        onMouseleave: N
      }, [
        u("div", {
          class: "rows-container",
          style: D({ height: d.value + "px" })
        }, [
          me(Ve, { name: "scroll-list" }, {
            default: fe(() => [
              (s(!0), o(U, null, Q(T.value, (v) => (s(), o("div", {
                class: "table-row",
                key: v.key,
                style: D({
                  height: e.rowHeight + "px",
                  lineHeight: e.rowHeight + "px",
                  backgroundColor: _(v.index)
                })
              }, [
                (s(!0), o(U, null, Q(e.columns, (S, b) => (s(), o("div", {
                  key: S.field || b,
                  class: "table-cell",
                  style: D({
                    width: p(b),
                    minWidth: S.minWidth || "100px",
                    justifyContent: w(S.align || "left")
                  })
                }, [
                  J(f.$slots, S.field, {
                    row: v.data,
                    column: S
                  }, () => [
                    u("span", ga, P(z(v.data, S.field)), 1)
                  ], !0)
                ], 4))), 128)),
                e.showScanline ? (s(), o("div", ya)) : B("", !0)
              ], 4))), 128))
            ]),
            _: 3
          })
        ], 4)
      ], 544),
      x[0] || (x[0] = u("div", { class: "table-border-effect" }, null, -1))
    ], 2));
  }
}), wa = /* @__PURE__ */ G(ba, [["__scopeId", "data-v-f7e02c8a"]]), xa = j(wa), $a = /* @__PURE__ */ Y({
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
    ke();
    const t = e, a = E(() => {
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
    }), c = E(() => {
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
    return (r, n) => (s(), o("div", {
      class: H(["cp-button-neno", c.value])
    }, [
      u("div", {
        class: H(["button", a.value, t.bg ? "show-bg" : ""])
      }, [
        n[0] || (n[0] = u("div", { class: "border" }, null, -1)),
        n[1] || (n[1] = u("div", { class: "border" }, null, -1)),
        n[2] || (n[2] = u("div", { class: "border" }, null, -1)),
        n[3] || (n[3] = u("div", { class: "border" }, null, -1)),
        J(r.$slots, "default", {}, void 0, !0)
      ], 2)
    ], 2));
  }
}), ka = /* @__PURE__ */ G($a, [["__scopeId", "data-v-5d7945c0"]]), Ca = j(ka), Sa = ["aria-checked", "aria-disabled"], Ma = { class: "toggle-thumb" }, Ia = {
  key: 0,
  class: "pulse-effect"
}, Ta = /* @__PURE__ */ Y({
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
    Se((i) => ({
      de199364: t.inActiveColor,
      c698eb9a: t.activeColor
    }));
    const t = e, a = l, c = E(() => {
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
    }), r = E(() => {
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
    }), n = () => {
      if (t.disabled) return;
      const i = !t.modelValue;
      a("update:modelValue", i), a("change", i);
    };
    return (i, m) => (s(), o("div", {
      class: H(["cp-neon-toggle", r.value, c.value, { active: e.modelValue, disabled: e.disabled }]),
      onClick: n,
      "aria-checked": e.modelValue,
      role: "switch",
      "aria-disabled": e.disabled
    }, [
      m[0] || (m[0] = u("div", { class: "toggle-track" }, [
        u("div", { class: "toggle-track-inner" }),
        u("div", { class: "circuit-lines" })
      ], -1)),
      u("div", Ma, [
        e.pulseEffect && e.modelValue ? (s(), o("div", Ia)) : B("", !0)
      ])
    ], 10, Sa));
  }
}), _a = /* @__PURE__ */ G(Ta, [["__scopeId", "data-v-57987af1"]]), Va = j(_a), Ea = /* @__PURE__ */ Y({
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
    ke();
    const t = e, a = E(() => {
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
    }), c = E(() => {
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
    return (r, n) => (s(), o("div", {
      class: H(["cp-button-neno", c.value])
    }, [
      u("div", {
        class: H(["button", a.value, t.bg ? "show-bg" : ""])
      }, [
        J(r.$slots, "default", {}, void 0, !0)
      ], 2)
    ], 2));
  }
}), Ba = /* @__PURE__ */ G(Ea, [["__scopeId", "data-v-d73343d5"]]), La = j(Ba), za = {
  key: 0,
  class: "cp-text-line"
}, Ra = /* @__PURE__ */ Y({
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
    const l = e, t = E(() => l.text || ""), a = E(() => ({
      "--shadow-color": l.shadowColor,
      "--glitch-color": l.glitchColor,
      "--line-color": l.lineColor
    }));
    return (c, r) => (s(), de(Ce(e.tag), {
      class: H([
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
      style: D(a.value)
    }, {
      default: fe(() => [
        J(c.$slots, "default", {}, () => [
          ge(P(e.text), 1)
        ], !0),
        e.lineVisible ? (s(), o("div", za)) : B("", !0)
      ]),
      _: 3
    }, 8, ["class", "data-word", "style"]));
  }
}), Na = /* @__PURE__ */ G(Ra, [["__scopeId", "data-v-8e6d2d5b"]]), Oa = j(Na), Ha = /* @__PURE__ */ Y({
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
    const l = e, t = (c, r) => {
      let n = `0px 0px ${c}`;
      for (let i = 1; i <= l.long; i++) {
        const m = a(c, i);
        n += `, ${r === "left" ? "-" : ""}${i}px ${i}px ${m}`;
      }
      return n;
    }, a = (c, r) => {
      const n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i.exec(c), i = /^rgba?\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})(,\s*([\d.]+))?\)$/i.exec(c);
      if (n) {
        const m = parseInt(n[1], 16), h = parseInt(n[2], 16), k = parseInt(n[3], 16), C = n[4] ? parseInt(n[4], 16) / 255 : 1, y = Math.max(0, C - r * 0.05);
        return `rgba(${m}, ${h}, ${k}, ${y})`;
      } else if (i) {
        const m = parseInt(i[1], 10), h = parseInt(i[2], 10), k = parseInt(i[3], 10), C = i[5] ? parseFloat(i[5]) : 1, y = Math.max(0, C - r * 0.05);
        return `rgba(${m}, ${h}, ${k}, ${y})`;
      } else
        throw new Error(`Unsupported color format: ${c}`);
    };
    return (c, r) => (s(), o("div", {
      class: H(["shadow-text", l.direction]),
      style: D({ textShadow: t(l.shadowColor, l.direction) })
    }, [
      J(c.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), Aa = /* @__PURE__ */ G(Ha, [["__scopeId", "data-v-be008294"]]), Da = j(Aa), Pa = { class: "cp-typing" }, Wa = {
  key: 0,
  class: "typing-text"
}, Fa = {
  key: 2,
  class: "typing-text"
}, Ka = /* @__PURE__ */ Y({
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
  setup(e, { emit: l }) {
    const t = e, a = l, c = I("");
    let r = null, n = null, i = 0;
    const m = () => {
      r && (clearInterval(r), r = null), n && (clearTimeout(n), n = null);
    }, h = (d) => {
      i++, c.value = d.slice(0, i), i >= d.length && (clearInterval(r), r = null, a("finish"), t.loop && (n = setTimeout(() => {
        y(d);
      }, t.loopDelay)));
    }, k = (d) => {
      i--, c.value = d.slice(0, i), i <= 0 && (clearInterval(r), r = null, c.value = "", n = setTimeout(() => C(d), 500));
    }, C = (d) => {
      d && (i = 0, c.value = "", r = setInterval(() => h(d), t.speed));
    }, y = (d) => {
      r = setInterval(() => k(d), Math.max(t.speed / 2, 30));
    };
    return ne(() => t.text, (d) => {
      m(), c.value = "", d && (n = setTimeout(() => C(d), t.delay));
    }), re(() => {
      t.text && (n = setTimeout(() => C(t.text), t.delay));
    }), ue(() => {
      m();
    }), (d, T) => (s(), o("div", Pa, [
      e.text ? (s(), o("span", Wa, P(c.value), 1)) : B("", !0),
      e.cursor ? (s(), o("span", {
        key: 1,
        class: "typing-cursor",
        style: D({ backgroundColor: e.cursorColor })
      }, null, 4)) : B("", !0),
      e.text ? B("", !0) : (s(), o("span", Fa, [
        J(d.$slots, "default", {}, void 0, !0)
      ]))
    ]));
  }
}), Ya = /* @__PURE__ */ G(Ka, [["__scopeId", "data-v-f194c3e2"]]), Ga = j(Ya), ja = ["src", "alt", "loading", "crossorigin"], Xa = {
  key: 1,
  class: "placeholder"
}, qa = ["src"], Ua = {
  key: 2,
  class: "error-content"
}, Za = /* @__PURE__ */ Y({
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
    const l = /* @__PURE__ */ Object.assign({}), t = Math.random(), a = (t * 20).toFixed(2), c = ((t * 17 + 3) % 20).toFixed(2), r = ((t * 13 + 7) % 20).toFixed(2), n = e, i = (w) => {
      if (w.startsWith("http://") || w.startsWith("https://") || w.startsWith("/"))
        return w;
      for (const [$, _] of Object.entries(l))
        if ($.includes(w) || w.includes($.split("/").pop() || ""))
          return _;
      return w;
    }, m = I(!1), h = I(!1), k = I(""), C = E(() => {
      const w = {};
      return n.width !== "auto" && n.width !== void 0 && (w.width = typeof n.width == "number" ? `${n.width}px` : n.width), n.height !== "auto" && n.height !== void 0 && (w.height = typeof n.height == "number" ? `${n.height}px` : n.height), !w.width && !w.height && (w.display = "inline-block"), w;
    }), y = E(() => h.value && n.errorSrc ? `url(${n.errorSrc})` : k.value ? `url(${k.value})` : "none"), d = E(() => {
      if (!n.fit) return "cover";
      switch (n.fit) {
        case "fill":
          return "100% 100%";
        // 完全填充（可能变形）
        case "scale-down":
          return "contain";
        // 保持比例
        default:
          return n.fit;
      }
    }), T = () => {
      k.value = i(n.src), m.value = !0, h.value = !1;
    }, p = () => {
      if (h.value = !0, n.errorSrc && n.errorSrc !== n.src) {
        const w = new Image();
        w.crossOrigin = n.crossorigin || "", w.src = i(n.errorSrc), w.onload = () => {
          k.value = i(n.errorSrc), m.value = !0;
        }, w.onerror = () => {
          m.value = !0;
        };
      } else
        m.value = !0;
    };
    return ne(() => n.src, () => {
      m.value = !1, h.value = !1, k.value = i(n.src);
    }, { immediate: !0 }), re(() => {
      n.src && (k.value = i(n.src));
    }), (w, $) => (s(), o("div", {
      class: "cyber-image-wrapper",
      style: D(C.value)
    }, [
      e.src ? (s(), o("img", {
        key: 0,
        src: e.src,
        alt: e.alt,
        loading: e.loading,
        crossorigin: e.crossorigin,
        class: "hidden-image",
        onLoad: T,
        onError: p
      }, null, 40, ja)) : B("", !0),
      u("div", {
        class: H(["glitch", {
          "is-loaded": m.value && !h.value,
          "is-loading": !m.value && !h.value,
          "is-error": h.value,
          "no-glitch": e.disableGlitch
        }]),
        style: D({
          backgroundImage: y.value,
          backgroundSize: d.value,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          animationDelay: `-${he(a)}s`
        })
      }, [
        m.value && !h.value && !e.disableGlitch ? (s(), o("div", {
          key: 0,
          class: "glitch-layer",
          style: D({
            backgroundImage: y.value,
            animationDelay: `-${he(c)}s`,
            "--glitch-delay": `-${he(r)}s`
          })
        }, null, 4)) : B("", !0),
        !m.value && e.placeholder ? (s(), o("div", Xa, [
          J(w.$slots, "placeholder", {}, () => [
            u("img", {
              src: e.placeholder,
              alt: "Loading..."
            }, null, 8, qa)
          ], !0)
        ])) : h.value ? (s(), o("div", Ua, [
          J(w.$slots, "error", {}, () => [
            ge(P(e.errorContent), 1)
          ], !0)
        ])) : B("", !0),
        m.value && !h.value ? J(w.$slots, "default", { key: 3 }, void 0, !0) : B("", !0)
      ], 6)
    ], 4));
  }
}), Qa = /* @__PURE__ */ G(Za, [["__scopeId", "data-v-5749237a"]]), Ja = j(Qa), el = /* @__PURE__ */ Y({
  name: "CyberMagicText",
  __name: "magicText",
  props: {
    speed: { default: "normal" },
    duration: {},
    gradient: { default: "cyberpunk" },
    gradientColors: {},
    gradientAngle: { default: "45deg" },
    glowColor: { default: "#fff" },
    glowSize: { default: "25%" },
    strokeColor: { default: "#2b2b50" },
    strokeWidth: { default: "1px" },
    blendMode: { default: "color-dodge" },
    fontWeight: { default: "bold" },
    fontFamily: { default: "Arial, sans-serif" },
    tag: { default: "span" },
    disabled: { type: Boolean, default: !1 },
    direction: { default: "normal" }
  },
  setup(e) {
    const l = ke(), t = {
      cyberpunk: "linear-gradient(var(--mt-gradient-angle, 45deg), #ff269b, #2ab5f5, #ffbf00)",
      aurora: "linear-gradient(var(--mt-gradient-angle, 45deg), #00ff87, #00d4ff, #7b2fbe)",
      fire: "linear-gradient(var(--mt-gradient-angle, 45deg), #ff004c, #ff6b00, #ffe600)",
      ocean: "linear-gradient(var(--mt-gradient-angle, 45deg), #001f5b, #00a8cc, #7efff5)",
      sunset: "linear-gradient(var(--mt-gradient-angle, 45deg), #7b2fbe, #ff269b, #ffbf00)",
      neon: "linear-gradient(var(--mt-gradient-angle, 45deg), #ff00ff, #00ffff, #ff00ff)"
    }, a = e, c = E(() => {
      if (!l.default) return "";
      const i = l.default();
      if (!i || i.length === 0) return "";
      const m = (h) => {
        if (typeof h == "string") return h;
        if (typeof h == "number") return String(h);
        if (h.children) {
          if (typeof h.children == "string") return h.children;
          if (Array.isArray(h.children)) return h.children.map(m).join("");
        }
        return "";
      };
      return i.map(m).join("");
    }), r = E(() => {
      if (a.gradientColors && a.gradientColors.length > 0) {
        const i = a.gradientColors.join(", ");
        return `linear-gradient(${a.gradientAngle}, ${i})`;
      }
      return t[a.gradient];
    }), n = E(() => {
      const i = {
        "--mt-gradient": r.value,
        "--mt-gradient-angle": a.gradientAngle,
        "--mt-glow-color": a.glowColor,
        "--mt-glow-size": a.glowSize,
        "--mt-stroke-color": a.strokeColor,
        "--mt-stroke-width": a.strokeWidth,
        "--mt-blend-mode": a.blendMode,
        "--mt-font-weight": String(a.fontWeight),
        "--mt-font-family": a.fontFamily
      };
      return a.duration !== void 0 && a.duration > 0 && (i["--mt-duration"] = `${a.duration}s`), i;
    });
    return (i, m) => (s(), de(Ce(e.tag), {
      class: H([
        "cp-magic-text",
        `cp-magic-text--${e.speed}`,
        {
          "cp-magic-text--disabled": e.disabled
        }
      ]),
      "data-text": c.value,
      style: D(n.value)
    }, {
      default: fe(() => [
        J(i.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class", "data-text", "style"]));
  }
}), tl = /* @__PURE__ */ G(el, [["__scopeId", "data-v-a91647d4"]]), al = j(tl), ll = { class: "imgWrap" }, nl = ["src"], sl = /* @__PURE__ */ Y({
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
    Se((i) => ({
      v29922088: t.value + "px"
    }));
    const l = e, t = I(l.imgHeight);
    l.shadow && (t.value = l.imgHeight * 2);
    const a = I(l.imgList.length), c = r(l.imgWidth, 360 / a.value) * 1.6;
    function r(i, m) {
      const h = m * Math.PI / 180;
      return i / (2 * Math.sin(h / 2));
    }
    const n = (i) => {
      const m = 35 + (i + 1) * (360 / a.value), h = r(l.imgWidth, 360 / a.value);
      return {
        transform: `rotateY(${m}deg) translateZ(${h}px)`
      };
    };
    return (i, m) => (s(), o("div", {
      class: "container",
      style: D({
        "--container-width": `${c}px`,
        "--img-width": `${l.imgWidth}px`,
        "--img-height": `${l.imgHeight}px`
      })
    }, [
      u("div", {
        class: H(["stage", { "has-shadow": l.shadow }])
      }, [
        u("div", {
          class: "control",
          style: D({
            "--animation-duration": `${l.animationDuration}s`
          })
        }, [
          u("div", ll, [
            (s(!0), o(U, null, Q(l.imgList, (h, k) => (s(), o("div", {
              key: k,
              class: "img",
              style: D(n(k))
            }, [
              u("img", { src: h }, null, 8, nl)
            ], 4))), 128))
          ])
        ], 4)
      ], 2)
    ], 4));
  }
}), ol = /* @__PURE__ */ G(sl, [["__scopeId", "data-v-3d7f1970"]]), rl = j(ol), il = ["aria-expanded", "aria-disabled"], cl = { class: "select-value" }, ul = ["aria-label", "onClick"], dl = {
  key: 1,
  class: "select-single"
}, fl = {
  key: 2,
  class: "select-placeholder"
}, vl = {
  key: 0,
  class: "select-dropdown"
}, hl = {
  key: 0,
  class: "select-search"
}, ml = ["placeholder"], pl = {
  key: 1,
  class: "select-options"
}, gl = {
  key: 0,
  class: "select-group-label"
}, yl = ["disabled", "onClick"], bl = {
  key: 0,
  class: "option-check"
}, wl = {
  key: 1,
  class: "option-icon"
}, xl = { class: "option-label" }, $l = {
  key: 2,
  class: "option-shortcut"
}, kl = {
  key: 2,
  class: "select-empty"
}, Cl = /* @__PURE__ */ Y({
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
    const t = e, a = l, c = I(), r = I(), n = I(!1), i = I(""), m = E(() => t.showCheck !== void 0 ? t.showCheck : t.multiple), h = E(() => {
      const v = [], S = [];
      return t.options.forEach((b, M) => {
        Array.isArray(b.options) ? v.push({
          key: `group-${M}`,
          label: T(b),
          options: b.options
        }) : S.push(b);
      }), S.length && v.unshift({
        key: "default",
        label: "",
        options: S
      }), v;
    }), k = E(() => h.value.flatMap((v) => v.options)), C = E(() => {
      const v = i.value.trim().toLowerCase();
      return v ? h.value.map((S) => ({
        ...S,
        options: S.options.filter((b) => T(b).toLowerCase().includes(v))
      })).filter((S) => S.options.length) : h.value;
    }), y = E(() => {
      const v = t.multiple ? Array.isArray(t.modelValue) ? t.modelValue : [] : Array.isArray(t.modelValue) ? [] : [t.modelValue ?? null];
      return k.value.filter((S) => v.some((b) => w(b, p(S))));
    }), d = E(() => t.multiple ? Array.isArray(t.modelValue) && t.modelValue.length > 0 : t.modelValue !== "" && t.modelValue !== null && t.modelValue !== void 0), T = (v) => {
      const S = v[t.labelKey] ?? v.label ?? v[t.valueKey] ?? v.value ?? "";
      return String(S);
    }, p = (v) => v[t.valueKey] ?? v.value ?? null, w = (v, S) => v === S, $ = (v) => {
      const S = p(v);
      return t.multiple ? (Array.isArray(t.modelValue) ? t.modelValue : []).some((M) => w(M, S)) : w(t.modelValue, S);
    }, _ = (v) => {
      t.disabled || n.value === v || (n.value = v, a("visible-change", v), v && t.filterable && $e(() => r.value?.focus()));
    }, z = () => {
      _(!n.value);
    }, A = (v) => {
      if (t.disabled || v.disabled) return;
      const S = p(v);
      if (t.multiple) {
        const b = Array.isArray(t.modelValue) ? [...t.modelValue] : [], M = b.findIndex((X) => w(X, S));
        M > -1 ? b.splice(M, 1) : b.push(S);
        const L = k.value.filter((X) => b.some((W) => w(W, p(X))));
        a("update:modelValue", b), a("change", b, L);
        return;
      }
      a("update:modelValue", S), a("change", S, v), _(!1);
    }, g = (v) => {
      if (!t.multiple || t.disabled) return;
      const S = p(v), M = (Array.isArray(t.modelValue) ? [...t.modelValue] : []).filter((X) => !w(X, S)), L = k.value.filter((X) => M.some((W) => w(W, p(X))));
      a("update:modelValue", M), a("change", M, L);
    }, R = () => {
      const v = t.multiple ? [] : "";
      a("update:modelValue", v), a("change", v, t.multiple ? [] : void 0), a("clear"), i.value = "";
    }, V = (v) => {
      t.disabled || a("focus", v);
    }, N = (v) => {
      a("blur", v);
    }, f = (v) => {
      t.disabled || ((v.key === "Enter" || v.key === " ") && (n.value || (v.preventDefault(), _(!0))), v.key === "Escape" && _(!1));
    }, x = (v) => {
      c.value?.contains(v.target) || _(!1);
    };
    return ne(n, (v) => {
      v || (i.value = "");
    }), ne(() => t.multiple, (v) => {
      v && !Array.isArray(t.modelValue) && a("update:modelValue", []);
    }), re(() => {
      document.addEventListener("click", x);
    }), Ee(() => {
      document.removeEventListener("click", x);
    }), (v, S) => (s(), o("div", {
      ref_key: "selectRef",
      ref: c,
      class: H(["cp-cyber-select", [
        `theme-${e.theme}`,
        `size-${e.size}`,
        {
          "is-open": n.value,
          "is-disabled": e.disabled,
          "is-multiple": e.multiple
        }
      ]])
    }, [
      u("div", {
        class: "select-control",
        tabindex: "0",
        role: "combobox",
        "aria-expanded": n.value,
        "aria-disabled": e.disabled,
        onClick: z,
        onFocus: V,
        onBlur: N,
        onKeydown: f
      }, [
        u("div", cl, [
          e.multiple && y.value.length ? (s(!0), o(U, { key: 0 }, Q(y.value, (b) => (s(), o("span", {
            key: String(p(b)),
            class: "select-tag",
            onClick: S[0] || (S[0] = se(() => {
            }, ["stop"]))
          }, [
            ge(P(T(b)) + " ", 1),
            u("button", {
              class: "tag-close",
              type: "button",
              "aria-label": `Remove ${T(b)}`,
              onClick: se((M) => g(b), ["stop"])
            }, null, 8, ul)
          ]))), 128)) : !e.multiple && y.value.length ? (s(), o("span", dl, P(T(y.value[0])), 1)) : (s(), o("span", fl, P(e.placeholder), 1))
        ]),
        e.clearable && d.value && !e.disabled ? (s(), o("button", {
          key: 0,
          class: "clear-button",
          type: "button",
          "aria-label": "Clear selected value",
          onClick: se(R, ["stop"])
        })) : B("", !0),
        S[3] || (S[3] = u("span", { class: "select-arrow" }, null, -1))
      ], 40, il),
      me(Te, { name: "select-dropdown" }, {
        default: fe(() => [
          n.value ? (s(), o("div", vl, [
            e.filterable ? (s(), o("div", hl, [
              pe(u("input", {
                ref_key: "searchInputRef",
                ref: r,
                "onUpdate:modelValue": S[1] || (S[1] = (b) => i.value = b),
                type: "text",
                placeholder: e.searchPlaceholder,
                onClick: S[2] || (S[2] = se(() => {
                }, ["stop"])),
                onKeydown: f
              }, null, 40, ml), [
                [Oe, i.value]
              ])
            ])) : B("", !0),
            C.value.length ? (s(), o("div", pl, [
              (s(!0), o(U, null, Q(C.value, (b) => (s(), o(U, {
                key: b.key
              }, [
                b.label ? (s(), o("div", gl, P(b.label), 1)) : B("", !0),
                (s(!0), o(U, null, Q(b.options, (M) => (s(), o(U, null, [
                  M.divider ? (s(), o("div", {
                    class: "select-divider",
                    key: `divider-${M.key || Math.random()}`
                  })) : (s(), o("button", {
                    key: `${b.key}-${String(p(M))}`,
                    class: H(["select-option", {
                      selected: $(M),
                      disabled: M.disabled
                    }]),
                    type: "button",
                    disabled: M.disabled,
                    onClick: se((L) => A(M), ["stop"])
                  }, [
                    m.value ? (s(), o("span", bl)) : B("", !0),
                    M.icon ? (s(), o("span", wl, [
                      (s(), de(Ce(M.icon)))
                    ])) : B("", !0),
                    u("span", xl, P(T(M)), 1),
                    M.shortcut ? (s(), o("span", $l, P(M.shortcut), 1)) : B("", !0)
                  ], 10, yl))
                ], 64))), 256))
              ], 64))), 128))
            ])) : (s(), o("div", kl, P(e.noDataText), 1))
          ])) : B("", !0)
        ]),
        _: 1
      })
    ], 2));
  }
}), Sl = /* @__PURE__ */ G(Cl, [["__scopeId", "data-v-b891fb97"]]), Ml = j(Sl), Il = { class: "cascader-tree" }, Tl = ["disabled", "onClick"], _l = {
  key: 0,
  class: "option-check"
}, Vl = { class: "option-label" }, El = {
  key: 1,
  class: "option-arrow"
}, Bl = {
  key: 0,
  class: "cascader-submenu"
}, Ll = {
  key: 0,
  class: "cascader-empty"
}, zl = Y({
  name: "CascaderOptionTree"
}), Rl = /* @__PURE__ */ Y({
  ...zl,
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
    const t = e, a = l, c = I(/* @__PURE__ */ new Set()), r = (y) => String(y[t.labelKey] ?? y.label ?? y[t.valueKey] ?? y.value ?? ""), n = (y) => y[t.valueKey] ?? y.value ?? "", i = (y) => {
      const d = y[t.childrenKey] ?? y.children;
      return Array.isArray(d) && d.length > 0;
    }, m = (y) => y[t.childrenKey] ?? y.children ?? [], h = (y) => {
      const d = n(y);
      return t.selectedValues.includes(d);
    }, k = (y) => {
      const d = n(y);
      return c.value.has(d);
    }, C = (y) => {
      if (y.disabled) return;
      const d = n(y);
      if (i(y)) {
        const T = new Set(c.value);
        T.has(d) ? T.delete(d) : T.add(d), c.value = T;
      } else
        a("select", { option: y, value: d });
    };
    return (y, d) => {
      const T = Be("CascaderOptionTree");
      return s(), o("div", Il, [
        (s(!0), o(U, null, Q(e.options, (p) => (s(), o("div", {
          key: String(n(p)),
          class: "cascader-menu-item"
        }, [
          u("button", {
            class: H(["cascader-option", {
              selected: h(p),
              disabled: p.disabled,
              "has-children": i(p),
              "is-expanded": k(p)
            }]),
            type: "button",
            disabled: p.disabled,
            onClick: se((w) => C(p), ["stop"])
          }, [
            e.multiple ? (s(), o("span", _l)) : B("", !0),
            u("span", Vl, P(r(p)), 1),
            i(p) ? (s(), o("span", El)) : B("", !0)
          ], 10, Tl),
          i(p) && k(p) ? (s(), o("div", Bl, [
            me(T, {
              options: m(p),
              "selected-values": e.selectedValues,
              multiple: e.multiple,
              "label-key": e.labelKey,
              "value-key": e.valueKey,
              "children-key": e.childrenKey,
              onSelect: d[0] || (d[0] = (w) => y.$emit("select", w))
            }, null, 8, ["options", "selected-values", "multiple", "label-key", "value-key", "children-key"])
          ])) : B("", !0)
        ]))), 128)),
        !e.options || e.options.length === 0 ? (s(), o("div", Ll, " 暂无数据 ")) : B("", !0)
      ]);
    };
  }
}), Nl = /* @__PURE__ */ G(Rl, [["__scopeId", "data-v-561a8a0d"]]), Ol = ["aria-expanded", "aria-disabled"], Hl = { class: "cascader-value" }, Al = ["aria-label", "onClick"], Dl = {
  key: 1,
  class: "cascader-single"
}, Pl = {
  key: 2,
  class: "cascader-placeholder"
}, Wl = { class: "cascader-options" }, Fl = /* @__PURE__ */ Y({
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
    const t = e, a = l, c = I(), r = I(!1), n = I(""), i = I([]), m = E(() => t.multiple ? Array.isArray(t.modelValue) && t.modelValue.length > 0 : t.modelValue !== "" && t.modelValue !== null && t.modelValue !== void 0), h = (f) => {
      if (!t.showAllLevels) {
        const v = k(t.options, f);
        return v ? y(v) : String(f);
      }
      return C(t.options, f).map((v) => y(v)).join(" / ");
    }, k = (f, x) => {
      for (const v of f) {
        if (d(v) === x)
          return v;
        const S = T(v);
        if (S.length) {
          const b = k(S, x);
          if (b) return b;
        }
      }
      return null;
    }, C = (f, x) => {
      for (const v of f) {
        if (d(v) === x)
          return [v];
        const S = T(v);
        if (S.length) {
          const b = C(S, x);
          if (b.length)
            return [v, ...b];
        }
      }
      return [];
    }, y = (f) => String(f[t.labelKey] ?? f.label ?? f[t.valueKey] ?? f.value ?? ""), d = (f) => f[t.valueKey] ?? f.value ?? "", T = (f) => f[t.childrenKey] ?? f.children ?? [], p = (f) => {
      t.disabled || r.value === f || (r.value = f, a("visible-change", f));
    }, w = () => {
      p(!r.value);
    }, $ = ({ value: f }) => {
      if (!t.disabled)
        if (t.multiple) {
          const x = i.value.indexOf(f);
          x > -1 ? i.value.splice(x, 1) : i.value.push(f), a("update:modelValue", [...i.value]), a("change", [...i.value]);
        } else
          n.value = f, a("update:modelValue", f), a("change", f), p(!1);
    }, _ = (f) => {
      t.multiple && (i.value = i.value.filter((x) => x !== f), a("update:modelValue", [...i.value]), a("change", [...i.value]));
    }, z = () => {
      t.multiple ? (i.value = [], a("update:modelValue", [])) : (n.value = "", a("update:modelValue", "")), a("change", t.multiple ? [] : ""), a("clear");
    }, A = (f) => {
      t.disabled || a("focus", f);
    }, g = (f) => {
      a("blur", f);
    }, R = (f) => {
      t.disabled || ((f.key === "Enter" || f.key === " ") && (r.value || (f.preventDefault(), p(!0))), f.key === "Escape" && p(!1));
    }, V = (f) => {
      c.value?.contains(f.target) || p(!1);
    }, N = E(() => ({
      width: `${c.value?.offsetWidth || 260}px`
    }));
    return ne(() => t.modelValue, (f) => {
      t.multiple ? i.value = Array.isArray(f) ? [...f] : [] : n.value = f;
    }, { immediate: !0 }), re(() => {
      document.addEventListener("click", V);
    }), Ee(() => {
      document.removeEventListener("click", V);
    }), (f, x) => (s(), o("div", {
      ref_key: "cascaderRef",
      ref: c,
      class: H(["cp-cyber-cascader", [
        `theme-${e.theme}`,
        `size-${e.size}`,
        {
          "is-open": r.value,
          "is-disabled": e.disabled,
          "is-multiple": e.multiple
        }
      ]])
    }, [
      u("div", {
        class: "cascader-control",
        tabindex: "0",
        role: "combobox",
        "aria-expanded": r.value,
        "aria-disabled": e.disabled,
        onClick: w,
        onFocus: A,
        onBlur: g,
        onKeydown: R
      }, [
        u("div", Hl, [
          e.multiple && i.value.length ? (s(!0), o(U, { key: 0 }, Q(i.value, (v, S) => (s(), o("span", {
            key: S,
            class: "cascader-tag"
          }, [
            ge(P(h(v)) + " ", 1),
            u("button", {
              class: "tag-close",
              type: "button",
              "aria-label": `移除 ${h(v)}`,
              onClick: se((b) => _(v), ["stop"])
            }, null, 8, Al)
          ]))), 128)) : !e.multiple && n.value ? (s(), o("span", Dl, P(h(n.value)), 1)) : (s(), o("span", Pl, P(e.placeholder), 1))
        ]),
        e.clearable && m.value && !e.disabled ? (s(), o("button", {
          key: 0,
          class: "clear-button",
          type: "button",
          "aria-label": "清空",
          onClick: se(z, ["stop"])
        })) : B("", !0),
        x[0] || (x[0] = u("span", { class: "cascader-arrow" }, null, -1))
      ], 40, Ol),
      me(Te, { name: "cascader-dropdown" }, {
        default: fe(() => [
          r.value ? (s(), o("div", {
            key: 0,
            class: "cascader-dropdown",
            style: D(N.value)
          }, [
            u("div", Wl, [
              me(Nl, {
                options: t.options,
                "selected-values": e.multiple ? i.value : [n.value],
                multiple: e.multiple,
                "label-key": e.labelKey,
                "value-key": e.valueKey,
                "children-key": e.childrenKey,
                onSelect: $
              }, null, 8, ["options", "selected-values", "multiple", "label-key", "value-key", "children-key"])
            ])
          ], 4)) : B("", !0)
        ]),
        _: 1
      })
    ], 2));
  }
}), Kl = /* @__PURE__ */ G(Fl, [["__scopeId", "data-v-46b8205f"]]), Yl = j(Kl), Gl = {
  key: 0,
  class: "tree-connectors",
  "aria-hidden": "true"
}, jl = ["onClick"], Xl = ["aria-expanded", "aria-label", "onClick"], ql = {
  key: 1,
  class: "node-expand-placeholder"
}, Ul = { class: "node-label" }, Zl = { class: "label-text" }, Ql = ["title"], Jl = { class: "status-text" }, en = {
  key: 0,
  class: "tree-empty"
}, tn = {
  key: 1,
  class: "tree-scanline"
}, we = 14, an = /* @__PURE__ */ Y({
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
    const a = e, c = t, r = I([]), n = I([]), i = I(0), m = E(() => {
      const g = [], R = (V, N = 0, f) => {
        V.forEach((x, v) => {
          x._level = N, x._parent = f, x._expanded = x.expanded ?? (a.defaultExpandAll || N === 0), x._selected = x.selected ?? !1, x._isLastChild = v === V.length - 1, g.push(x), x._expanded && x.children && x.children.length > 0 && R(x.children, N + 1, x);
        });
      };
      return R(r.value), g;
    }), h = () => {
      const g = (R, V = 0) => {
        const N = {
          ...R,
          _expanded: R.expanded ?? (a.defaultExpandAll || V === 0),
          _selected: R.selected ?? !1,
          _level: V,
          _parent: void 0,
          _isLastChild: !1
        };
        return R.children && R.children.length > 0 && (N.children = R.children.map((f) => g(f, V + 1))), N;
      };
      r.value = a.data.map((R) => g(R)), n.value = m.value.filter((R) => R._selected);
    }, k = (g) => !g.children || g.children.length === 0, C = (g) => g._level ?? 0, y = (g) => C(g) * a.indent, d = (g) => {
      const R = C(g);
      return Array.from({ length: Math.max(R - 1, 0) }, (V, N) => N);
    }, T = (g, R) => {
      let V = g, N = C(g);
      for (; V && N > R; )
        V = V._parent, N--;
      return V?._isLastChild ?? !1;
    }, p = (g) => {
      g._expanded = !g._expanded, g.expanded = g._expanded, g._expanded ? c("node-expand", g) : c("node-collapse", g), A();
    }, w = (g) => {
      a.multiple ? (g._selected = !g._selected, g.selected = g._selected) : g._selected ? (g._selected = !1, g.selected = !1) : (n.value.forEach((R) => {
        R._selected = !1, R.selected = !1;
      }), g._selected = !0, g.selected = !0), $(), c("select-change", n.value), c("node-click", g), a.expandOnClick && !k(g) && p(g);
    }, $ = () => {
      n.value = m.value.filter((g) => g._selected);
    }, _ = (g) => g.icon ? g.icon : k(g) ? "icon-file" : g._expanded ? "icon-folder-open" : "icon-folder", z = (g) => g ? {
      online: "Online",
      offline: "Offline",
      warning: "Warning",
      error: "Error"
    }[g] : "", A = () => {
      i.value++;
    };
    return ne(() => a.data, () => {
      h();
    }, { deep: !0, immediate: !0 }), l({
      getSelectedNodes: () => n.value,
      clearSelection: () => {
        n.value.forEach((g) => {
          g._selected = !1, g.selected = !1;
        }), n.value = [], A();
      }
    }), (g, R) => (s(), o("div", {
      class: H(["cp-cyber-tree cyber-tree", [`theme-${e.theme}`, `effect-${e.effect}`]])
    }, [
      (s(!0), o(U, null, Q(m.value, (V) => (s(), o("div", {
        key: `${V.id}-${V._expanded}-${V._selected}-${i.value}`,
        class: H(["tree-node", {
          expanded: V._expanded,
          leaf: k(V),
          "last-child": V._isLastChild
        }]),
        style: D({ paddingLeft: `${y(V)}px` })
      }, [
        e.showConnectors && C(V) > 0 ? (s(), o("div", Gl, [
          (s(!0), o(U, null, Q(d(V), (N) => (s(), o("span", {
            key: N,
            class: H(["ancestor-line", { hidden: T(V, N) }]),
            style: D({ left: `${N * e.indent + we}px` })
          }, null, 6))), 128)),
          u("span", {
            class: H(["parent-line", { "is-last": V._isLastChild }]),
            style: D({ left: `${(C(V) - 1) * e.indent + we}px` })
          }, null, 6),
          u("span", {
            class: "horizontal-line",
            style: D({
              left: `${(C(V) - 1) * e.indent + we}px`,
              width: `${e.indent - we + 20}px`
            })
          }, null, 4),
          u("span", {
            class: "connector-joint",
            style: D({ left: `${(C(V) - 1) * e.indent + we}px` })
          }, null, 4)
        ])) : B("", !0),
        u("div", {
          class: "node-content-wrapper",
          onClick: se((N) => w(V), ["stop"])
        }, [
          u("div", {
            class: H(["node-content", { selected: V._selected }])
          }, [
            k(V) ? (s(), o("span", ql)) : (s(), o("button", {
              key: 0,
              class: "node-expand-icon",
              type: "button",
              "aria-expanded": V._expanded,
              "aria-label": V._expanded ? "Collapse node" : "Expand node",
              onClick: se((N) => p(V), ["stop"])
            }, [
              u("span", {
                class: H(["expand-arrow", { rotated: V._expanded }])
              }, null, 2)
            ], 8, Xl)),
            u("span", {
              class: H(["node-icon", _(V)])
            }, [...R[0] || (R[0] = [
              u("span", { class: "icon-core" }, null, -1)
            ])], 2),
            u("span", Ul, [
              u("span", Zl, P(V.label), 1)
            ]),
            e.showStatus && V.status ? (s(), o("span", {
              key: 2,
              class: "node-status",
              title: z(V.status)
            }, [
              u("span", {
                class: H(["status-indicator", `status-${V.status}`])
              }, null, 2),
              u("span", Jl, P(V.status), 1)
            ], 8, Ql)) : B("", !0)
          ], 2)
        ], 8, jl)
      ], 6))), 128)),
      m.value.length === 0 ? (s(), o("div", en, " No data ")) : B("", !0),
      e.showScanline && e.effect !== "static" ? (s(), o("div", tn)) : B("", !0)
    ], 2));
  }
}), ln = /* @__PURE__ */ G(an, [["__scopeId", "data-v-c0ef85ea"]]), nn = j(ln), sn = {
  key: 0,
  class: "cp-divider__line cp-divider__line--left"
}, on = {
  key: 1,
  class: "cp-divider__content"
}, rn = {
  key: 2,
  class: "cp-divider__line cp-divider__line--right"
}, cn = /* @__PURE__ */ Y({
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
    const l = e, t = E(() => {
      const a = {};
      return l.size && (l.direction === "horizontal" ? a.width = l.size : a.height = l.size), a;
    });
    return (a, c) => (s(), o("div", {
      class: H(["cp-divider", [`cp-divider--${e.direction}`, `cp-divider--${e.type}`]]),
      style: D(t.value)
    }, [
      e.showLeftLine ? (s(), o("div", sn)) : B("", !0),
      a.$slots.default || e.content ? (s(), o("div", on, [
        J(a.$slots, "default", {}, () => [
          ge(P(e.content), 1)
        ], !0)
      ])) : B("", !0),
      e.showRightLine ? (s(), o("div", rn)) : B("", !0)
    ], 6));
  }
}), un = /* @__PURE__ */ G(cn, [["__scopeId", "data-v-e3e2783b"]]), dn = j(un), fn = { class: "cp-input-wrapper" }, vn = {
  key: 0,
  class: "cp-input-prefix"
}, hn = ["type", "value", "placeholder", "disabled", "readonly", "maxlength", "autocomplete", "name"], mn = {
  key: 0,
  viewBox: "0 0 24 24",
  class: "cp-input-icon"
}, pn = {
  key: 1,
  viewBox: "0 0 24 24",
  class: "cp-input-icon"
}, gn = {
  key: 3,
  class: "cp-input-suffix"
}, yn = {
  key: 4,
  class: "cp-input-scanline"
}, bn = {
  key: 0,
  class: "cp-input-glitch"
}, wn = /* @__PURE__ */ Y({
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
    name: { default: void 0 },
    size: { default: "default" },
    theme: { default: "primary" },
    glitchEffect: { type: Boolean, default: !0 },
    scanlineEffect: { type: Boolean, default: !0 },
    clearable: { type: Boolean, default: !1 },
    showPassword: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "input", "change", "focus", "blur", "keyup", "keydown", "clear"],
  setup(e, { expose: l, emit: t }) {
    const a = e, c = t, r = I(null), n = I(!1), i = I(!1), m = I(""), h = E(() => a.type === "password" && i.value ? "text" : a.type), k = () => {
      i.value = !i.value;
    }, C = ($) => {
      const _ = $.target;
      c("update:modelValue", _.value), c("input", _.value);
    }, y = ($) => {
      n.value = !0, m.value = a.modelValue ?? "", c("focus", $);
    }, d = ($) => {
      n.value = !1, a.modelValue !== m.value && c("change", a.modelValue ?? ""), c("blur", $);
    }, T = ($) => {
      c("keyup", $);
    }, p = ($) => {
      c("keydown", $);
    }, w = () => {
      c("update:modelValue", ""), c("input", ""), c("change", ""), c("clear"), r.value?.focus();
    };
    return l({
      focus: () => {
        r.value?.focus();
      },
      blur: () => {
        r.value?.blur();
      },
      select: () => {
        r.value?.select();
      },
      clear: () => {
        w();
      },
      ref: r
    }), ($, _) => (s(), o("div", {
      class: H([
        "cp-input",
        `cp-input--${e.size}`,
        `cp-input--${e.theme}`,
        {
          "cp-input--disabled": e.disabled,
          "cp-input--focused": n.value,
          "cp-input--has-value": e.modelValue !== "" && e.modelValue != null
        }
      ])
    }, [
      u("div", fn, [
        $.$slots.prefix ? (s(), o("span", vn, [
          J($.$slots, "prefix", {}, void 0, !0)
        ])) : B("", !0),
        u("input", {
          ref_key: "inputRef",
          ref: r,
          type: h.value,
          value: e.modelValue,
          placeholder: e.placeholder,
          disabled: e.disabled,
          readonly: e.readonly,
          maxlength: e.maxlength,
          autocomplete: e.autocomplete,
          name: e.name,
          class: "cp-input-inner",
          onInput: C,
          onFocus: y,
          onBlur: d,
          onKeyup: T,
          onKeydown: p
        }, null, 40, hn),
        e.clearable && e.modelValue && !e.disabled ? (s(), o("span", {
          key: 1,
          class: "cp-input-clear",
          onMousedown: se(w, ["prevent"])
        }, [..._[0] || (_[0] = [
          u("svg", {
            viewBox: "0 0 16 16",
            class: "cp-input-icon"
          }, [
            u("path", { d: "M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" })
          ], -1)
        ])], 32)) : B("", !0),
        e.type === "password" && e.showPassword ? (s(), o("span", {
          key: 2,
          class: "cp-input-password-toggle",
          onMousedown: se(k, ["prevent"])
        }, [
          i.value ? (s(), o("svg", mn, [..._[1] || (_[1] = [
            u("path", { d: "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" }, null, -1)
          ])])) : (s(), o("svg", pn, [..._[2] || (_[2] = [
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
        ], 32)) : B("", !0),
        $.$slots.suffix ? (s(), o("span", gn, [
          J($.$slots, "suffix", {}, void 0, !0)
        ])) : B("", !0),
        e.scanlineEffect ? (s(), o("div", yn)) : B("", !0)
      ]),
      e.glitchEffect ? (s(), o("div", bn)) : B("", !0)
    ], 2));
  }
}), xn = /* @__PURE__ */ G(wn, [["__scopeId", "data-v-f114f0f1"]]), $n = j(xn), kn = ["tabindex", "aria-disabled", "aria-expanded"], Cn = {
  key: 0,
  class: "cp-menu-item-indicator"
}, Sn = {
  key: 1,
  class: "cp-menu-item-icon"
}, Mn = { class: "cp-menu-item-label" }, In = {
  key: 2,
  class: "cp-menu-item-arrow"
}, Tn = /* @__PURE__ */ Y({
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
    const t = e, a = l, c = I(!1), r = I(null), n = E(() => !!(t.item.children && t.item.children.length > 0)), i = E(() => t.activeValue === t.item.value), m = E(() => t.expandedValues.includes(t.item.value)), h = (p) => {
      t.item.disabled || (p.stopPropagation(), n.value ? a("toggle-expand", t.item.value) : a("select", t.item));
    }, k = () => {
      t.item.disabled || (c.value = !0, T(), t.direction === "horizontal" && n.value && a("expand", t.item.value));
    }, C = () => {
      c.value = !1, t.direction === "horizontal" && n.value && (r.value = setTimeout(() => {
        a("collapse", t.item.value);
      }, 180));
    }, y = () => {
      T();
    }, d = () => {
      t.direction === "horizontal" && n.value && (r.value = setTimeout(() => {
        a("collapse", t.item.value);
      }, 150));
    }, T = () => {
      r.value && (clearTimeout(r.value), r.value = null);
    };
    return (p, w) => {
      const $ = Be("CyberMenuItem");
      return s(), o("li", {
        class: H([
          "cp-menu-item",
          `cp-menu-item--depth-${e.depth}`,
          {
            "is-active": i.value,
            "is-disabled": e.item.disabled,
            "has-children": n.value,
            "is-expanded": m.value,
            "is-horizontal": e.direction === "horizontal",
            "is-vertical": e.direction === "vertical"
          }
        ]),
        onMouseenter: k,
        onMouseleave: C
      }, [
        u("div", {
          class: H(["cp-menu-item-content", { "cp-menu-item-content--active": i.value }]),
          onClick: h,
          tabindex: e.item.disabled ? -1 : 0,
          "aria-disabled": e.item.disabled,
          "aria-expanded": n.value ? m.value : void 0
        }, [
          i.value && e.depth === 0 ? (s(), o("span", Cn)) : B("", !0),
          e.item.icon ? (s(), o("span", Sn, [
            u("i", {
              class: H(e.item.icon)
            }, null, 2)
          ])) : B("", !0),
          u("span", Mn, P(e.item.label), 1),
          n.value ? (s(), o("span", In, [...w[4] || (w[4] = [
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
          ])])) : B("", !0)
        ], 10, kn),
        me(Te, { name: "cp-submenu" }, {
          default: fe(() => [
            n.value && m.value ? (s(), o("ul", {
              key: 0,
              class: H(["cp-submenu-list", `cp-submenu-list--depth-${e.depth + 1}`]),
              onMouseenter: y,
              onMouseleave: d
            }, [
              (s(!0), o(U, null, Q(e.item.children, (_) => (s(), de($, {
                key: _.value,
                item: _,
                depth: e.depth + 1,
                direction: e.direction,
                "active-value": e.activeValue,
                "expanded-values": e.expandedValues,
                onSelect: w[0] || (w[0] = (z) => a("select", z)),
                onToggleExpand: w[1] || (w[1] = (z) => a("toggle-expand", z)),
                onExpand: w[2] || (w[2] = (z) => a("expand", z)),
                onCollapse: w[3] || (w[3] = (z) => a("collapse", z))
              }, null, 8, ["item", "depth", "direction", "active-value", "expanded-values"]))), 128))
            ], 34)) : B("", !0)
          ]),
          _: 1
        })
      ], 34);
    };
  }
}), _n = /* @__PURE__ */ G(Tn, [["__scopeId", "data-v-ffda69c8"]]), Vn = { class: "cp-cyber-menu-list" }, En = {
  key: 0,
  class: "cp-cyber-menu-scanline"
}, Bn = /* @__PURE__ */ Y({
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
    const t = e, a = l, c = I(t.modelValue), r = I([...t.expandedValues]), n = I([...t.items]), i = (C) => {
      c.value = C.value, a("update:modelValue", C.value), a("change", C.value), a("select", C);
    }, m = (C) => {
      t.direction === "horizontal" ? r.value = [C] : r.value.includes(C) || (r.value = [...r.value, C]), a("update:expandedValues", [...r.value]);
    }, h = (C) => {
      r.value = r.value.filter((y) => y !== C), a("update:expandedValues", [...r.value]);
    }, k = (C) => {
      const y = [...r.value], d = y.indexOf(C);
      d > -1 ? y.splice(d, 1) : (t.direction === "horizontal" && (y.length = 0), y.push(C)), r.value = y, a("update:expandedValues", [...y]);
    };
    return ne(() => t.modelValue, (C) => {
      c.value = C;
    }), ne(() => t.items, (C) => {
      n.value = [...C];
    }, { deep: !0, immediate: !0 }), ne(() => t.expandedValues, (C) => {
      r.value = [...C];
    }, { deep: !0, immediate: !0 }), (C, y) => (s(), o("div", {
      class: H([
        "cp-cyber-menu",
        `cp-cyber-menu--${e.direction}`,
        `cp-cyber-menu--${e.theme}`,
        {
          [`cp-cyber-menu--${e.effect}`]: e.effect !== "none"
        }
      ])
    }, [
      u("ul", Vn, [
        (s(!0), o(U, null, Q(n.value, (d) => (s(), de(_n, {
          key: d.value,
          item: d,
          depth: 0,
          direction: e.direction,
          "active-value": c.value,
          "expanded-values": r.value,
          onSelect: i,
          onToggleExpand: k,
          onExpand: m,
          onCollapse: h
        }, null, 8, ["item", "direction", "active-value", "expanded-values"]))), 128))
      ]),
      e.effect === "scanline" ? (s(), o("div", En)) : B("", !0)
    ], 2));
  }
}), Ln = /* @__PURE__ */ G(Bn, [["__scopeId", "data-v-d0bf3420"]]), zn = j(Ln), Rn = { class: "cp-scrollbar__corner" }, Nn = /* @__PURE__ */ Y({
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
  setup(e, { expose: l }) {
    const t = e, a = I(null), c = I(null), r = I(null), n = I(null), i = I(null), m = I(null), h = I(0), k = I(0), C = I(0), y = I(0), d = I(20), T = I(20), p = I(!1), w = I(!1);
    let $ = !1, _ = "v", z = 0, A = 0, g = null;
    const R = { small: 5, default: 7, large: 10 }, V = E(() => {
      const O = {};
      return t.height && (O.height = typeof t.height == "number" ? `${t.height}px` : t.height), t.maxHeight && (O.maxHeight = typeof t.maxHeight == "number" ? `${t.maxHeight}px` : t.maxHeight), O;
    }), N = E(() => ({
      height: `${d.value}px`,
      transform: `translateY(${C.value}px)`
    })), f = E(() => ({
      width: `${T.value}px`,
      transform: `translateX(${y.value}px)`
    })), x = () => {
      if (!a.value || !c.value) return;
      const O = a.value, q = c.value, ee = O.clientHeight, te = O.clientWidth, ae = q.scrollHeight, oe = q.scrollWidth, le = R[t.size] + 4, ve = R[t.size] + 4, ce = ae > ee, ye = oe > te;
      if (p.value = ce || t.always, w.value = ye || t.always, ce || t.always) {
        const ie = ye ? ee - ve : ee, Me = ie / ae;
        d.value = Math.max(18, ie * Me);
        const Ie = ie - d.value, be = ae - ee;
        C.value = be > 0 ? h.value / be * Ie : 0;
      }
      if (ye || t.always) {
        const ie = ce ? te - le : te, Me = ie / oe;
        T.value = Math.max(18, ie * Me);
        const Ie = ie - T.value, be = oe - te;
        y.value = be > 0 ? k.value / be * Ie : 0;
      }
    }, v = (O) => {
      if (!a.value || !c.value) return;
      const q = c.value.scrollHeight - a.value.clientHeight;
      h.value = Math.max(0, Math.min(O, q)), a.value.scrollTop = h.value;
    }, S = (O) => {
      if (!a.value || !c.value) return;
      const q = c.value.scrollWidth - a.value.clientWidth;
      k.value = Math.max(0, Math.min(O, q)), a.value.scrollLeft = k.value;
    }, b = () => {
      !a.value || $ || (h.value = a.value.scrollTop, k.value = a.value.scrollLeft, x());
    }, M = (O) => {
      if (!a.value || !c.value) return;
      const q = a.value, ee = c.value, te = ee.scrollHeight - q.clientHeight, ae = ee.scrollWidth - q.clientWidth;
      if (Math.abs(O.deltaX) > Math.abs(O.deltaY) && ae > 0) {
        S(k.value + O.deltaX);
        return;
      }
      te > 0 ? v(h.value + O.deltaY) : ae > 0 && S(k.value + O.deltaY);
    }, L = (O) => {
      $ = !0, _ = "v", z = O.clientY, A = h.value, document.addEventListener("mousemove", W), document.addEventListener("mouseup", K);
    }, X = (O) => {
      $ = !0, _ = "h", z = O.clientX, A = k.value, document.addEventListener("mousemove", W), document.addEventListener("mouseup", K);
    }, W = (O) => {
      if (!$ || !a.value || !c.value) return;
      const q = a.value, ee = c.value;
      if (_ === "v") {
        const te = O.clientY - z, ae = (r.value?.clientHeight || 0) - d.value, oe = ee.scrollHeight - q.clientHeight;
        if (ae > 0) {
          const le = oe / ae;
          v(A + te * le);
        }
      } else {
        const te = O.clientX - z, ae = (i.value?.clientWidth || 0) - T.value, oe = ee.scrollWidth - q.clientWidth;
        if (ae > 0) {
          const le = oe / ae;
          S(A + te * le);
        }
      }
      x();
    }, K = () => {
      $ = !1, document.removeEventListener("mousemove", W), document.removeEventListener("mouseup", K);
    }, Z = (O) => {
      if (!r.value || !a.value || !c.value || O.target === n.value) return;
      const q = r.value, ee = a.value, te = c.value, ae = O.clientY - q.getBoundingClientRect().top - d.value / 2, oe = q.clientHeight - d.value, le = ae / oe;
      v(le * (te.scrollHeight - ee.clientHeight));
    }, F = (O) => {
      if (!i.value || !a.value || !c.value || O.target === m.value) return;
      const q = i.value, ee = a.value, te = c.value, ae = O.clientX - q.getBoundingClientRect().left - T.value / 2, oe = q.clientWidth - T.value, le = ae / oe;
      S(le * (te.scrollWidth - ee.clientWidth));
    };
    return re(async () => {
      await $e(), a.value && (a.value.addEventListener("scroll", b), c.value && (g = new ResizeObserver(() => x()), g.observe(c.value), g.observe(a.value)), x());
    }), ue(() => {
      a.value?.removeEventListener("scroll", b), g?.disconnect(), document.removeEventListener("mousemove", W), document.removeEventListener("mouseup", K);
    }), l({
      update: x,
      scrollToY: v,
      scrollToX: S,
      wrapRef: a
    }), (O, q) => (s(), o("div", {
      class: H(["cp-scrollbar", [`theme-${e.theme}`, `size-${e.size}`, { "is-always": e.always }]]),
      style: D(V.value)
    }, [
      u("div", {
        ref_key: "wrapRef",
        ref: a,
        class: "cp-scrollbar__wrap",
        onWheelPassive: M
      }, [
        u("div", {
          ref_key: "viewRef",
          ref: c,
          class: "cp-scrollbar__view"
        }, [
          J(O.$slots, "default", {}, void 0, !0)
        ], 512)
      ], 544),
      pe(u("div", {
        ref_key: "vTrackRef",
        ref: r,
        class: "cp-scrollbar__track is-vertical",
        onMousedown: Z
      }, [
        u("div", {
          ref_key: "vThumbRef",
          ref: n,
          class: "cp-scrollbar__thumb is-vertical",
          style: D(N.value),
          onMousedown: se(L, ["prevent"])
        }, null, 36)
      ], 544), [
        [xe, p.value]
      ]),
      pe(u("div", {
        ref_key: "hTrackRef",
        ref: i,
        class: "cp-scrollbar__track is-horizontal",
        onMousedown: F
      }, [
        u("div", {
          ref_key: "hThumbRef",
          ref: m,
          class: "cp-scrollbar__thumb is-horizontal",
          style: D(f.value),
          onMousedown: se(X, ["prevent"])
        }, null, 36)
      ], 544), [
        [xe, w.value]
      ]),
      pe(u("div", Rn, null, 512), [
        [xe, p.value && w.value]
      ])
    ], 6));
  }
}), On = /* @__PURE__ */ G(Nn, [["__scopeId", "data-v-337d4315"]]), Hn = j(On), An = {
  key: 0,
  class: "progress-info"
}, Dn = {
  key: 0,
  class: "progress-label loading-text"
}, Pn = {
  key: 1,
  class: "progress-label"
}, Wn = /* @__PURE__ */ Y({
  name: "CyberCubicProgress",
  __name: "cubicProgress",
  props: {
    percent: { default: 0 },
    color: { default: "pink" },
    pipeWidth: { default: 600 },
    pipeHeight: { default: 100 },
    perspective: { default: 520 },
    rotateX: { default: -33.5 },
    indeterminate: { type: Boolean, default: !1 },
    showText: { type: Boolean, default: !0 },
    glowIntensity: { default: 5 }
  },
  setup(e) {
    const l = e, t = {
      /** 赛博粉紫 — 经典霓虹粉 */
      pink: {
        primary: "#ff226d",
        secondary: "#ffd922",
        empty: "#ff226d"
      },
      /** 赛博青蓝 — 数字海洋 */
      cyan: {
        primary: "#00e6f6",
        secondary: "#0055ff",
        empty: "#00e6f6"
      },
      /** 矩阵绿 — 黑客帝国 */
      green: {
        primary: "#00ff41",
        secondary: "#1a8a3a",
        empty: "#00ff41"
      },
      /** 赛博金 — 废土黄昏 */
      gold: {
        primary: "#ffb800",
        secondary: "#ff4500",
        empty: "#ffb800"
      },
      /** 霓虹紫 — 合成意识 */
      purple: {
        primary: "#b300ff",
        secondary: "#ff00e6",
        empty: "#b300ff"
      }
    };
    function a(_) {
      const z = _.replace("#", "");
      return z.length !== 6 ? null : {
        r: parseInt(z.slice(0, 2), 16),
        g: parseInt(z.slice(2, 4), 16),
        b: parseInt(z.slice(4, 6), 16)
      };
    }
    function c(_) {
      if (t[_])
        return t[_];
      if (_.startsWith("#") && _.length === 7) {
        const z = a(_);
        if (z) {
          const A = r(z);
          return {
            primary: _,
            secondary: A,
            empty: _
          };
        }
      }
      return t.pink;
    }
    function r(_) {
      const { h: z, s: A, l: g } = n(_.r, _.g, _.b), R = (z + 40) % 360, { r: V, g: N, b: f } = i(R, Math.min(A + 0.05, 1), Math.min(g + 0.08, 1));
      return `#${[V, N, f].map((x) => x.toString(16).padStart(2, "0")).join("")}`;
    }
    function n(_, z, A) {
      const g = _ / 255, R = z / 255, V = A / 255, N = Math.max(g, R, V), f = Math.min(g, R, V), x = (N + f) / 2;
      if (N === f) return { h: 0, s: 0, l: x };
      const v = N - f, S = x > 0.5 ? v / (2 - N - f) : v / (N + f);
      let b = 0;
      switch (N) {
        case g:
          b = ((R - V) / v + (R < V ? 6 : 0)) / 6;
          break;
        case R:
          b = ((V - g) / v + 2) / 6;
          break;
        case V:
          b = ((g - R) / v + 4) / 6;
          break;
      }
      return { h: b * 360, s: S, l: x };
    }
    function i(_, z, A) {
      const g = (f, x, v) => (v < 0 && (v += 1), v > 1 && (v -= 1), v < 0.16666666666666666 ? f + (x - f) * 6 * v : v < 0.5 ? x : v < 0.6666666666666666 ? f + (x - f) * (0.6666666666666666 - v) * 6 : f), R = _ / 360;
      if (z === 0) {
        const f = Math.round(A * 255);
        return { r: f, g: f, b: f };
      }
      const V = A < 0.5 ? A * (1 + z) : A + z - A * z, N = 2 * A - V;
      return {
        r: Math.round(g(N, V, R + 1 / 3) * 255),
        g: Math.round(g(N, V, R) * 255),
        b: Math.round(g(N, V, R - 1 / 3) * 255)
      };
    }
    const m = E(() => c(l.color)), h = E(() => l.pipeHeight / 2), k = E(() => ({
      "--cp-primary": m.value.primary,
      "--cp-secondary": m.value.secondary,
      "--cp-glow": `${l.glowIntensity * 2}px`
    })), C = E(() => ({
      perspective: `${l.perspective}px`,
      height: `${l.pipeHeight * 2.5}px`
    })), y = E(() => ({
      width: `${l.pipeWidth}px`,
      height: `${l.pipeHeight}px`,
      transformOrigin: `${h.value}px ${h.value}px`,
      transform: `translate(-50%, -50%) rotateX(${l.rotateX}deg)`
    })), d = E(() => {
      const _ = m.value.primary, z = m.value.secondary, A = m.value.empty;
      if (l.indeterminate)
        return {
          background: `linear-gradient(90deg,
        ${A}1a 0%,
        ${A}1a 35%,
        ${_}cc 45%,
        ${z}99 50%,
        ${_}cc 55%,
        ${A}1a 65%,
        ${A}1a 100%)`,
          backgroundSize: "250% 100%"
        };
      const g = Math.max(0, Math.min(100, l.percent));
      return {
        background: `linear-gradient(90deg,
      ${z}99 0%,
      ${_}cc ${g}%,
      ${A}1a ${g}%,
      ${A}1a 100%)`
      };
    }), T = E(() => ({
      ...d.value,
      transform: `rotateX(90deg) translateZ(${h.value}px)`
    })), p = E(() => ({
      ...d.value,
      transform: `rotateX(-90deg) translateZ(${h.value}px)`
    })), w = E(() => ({
      ...d.value,
      transform: `translateZ(${h.value}px)`
    })), $ = E(() => ({
      ...d.value,
      transform: `rotateX(-180deg) translateZ(${h.value}px)`
    }));
    return (_, z) => (s(), o("div", {
      class: H(["cp-cubic-progress", { indeterminate: e.indeterminate }]),
      style: D(k.value)
    }, [
      u("div", {
        class: "perspective-wrapper",
        style: D(C.value)
      }, [
        u("ul", {
          class: "pipe",
          style: D(y.value)
        }, [
          u("li", {
            class: "face top",
            style: D(T.value)
          }, null, 4),
          u("li", {
            class: "face bottom",
            style: D(p.value)
          }, null, 4),
          u("li", {
            class: "face front",
            style: D(w.value)
          }, null, 4),
          u("li", {
            class: "face back",
            style: D($.value)
          }, null, 4)
        ], 4)
      ], 4),
      e.showText ? (s(), o("div", An, [
        e.indeterminate ? (s(), o("span", Dn, "LOADING")) : (s(), o("span", Pn, P(e.percent) + "%", 1))
      ])) : B("", !0)
    ], 6));
  }
}), Fn = /* @__PURE__ */ G(Wn, [["__scopeId", "data-v-dc3f7000"]]), Kn = j(Fn), Yn = [
  Fe,
  et,
  st,
  bt,
  Vt,
  Pt,
  jt,
  aa,
  ha,
  xa,
  Va,
  Ca,
  La,
  Oa,
  Da,
  Ut,
  Ga,
  Rt,
  Ja,
  al,
  Ml,
  Yl,
  nn,
  rl,
  dn,
  $n,
  zn,
  Hn,
  Kn
], Gn = He([...Yn]);
console.log(
  "%c %s",
  "border: 1px solid #97E3FE;border-radius: 3px;padding: 2px 5px;color: white;font-weight:bolder;background: linear-gradient(to right, #fF717F,#CC54D1,#4EAFFA,#3DE1C3, #F7DA66)",
  "CyberPunk-UI"
);
const Xn = Gn.install;
export {
  Gn as default,
  Xn as install,
  He as makeInstaller
};
