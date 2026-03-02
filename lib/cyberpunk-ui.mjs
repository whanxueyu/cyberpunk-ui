import { defineComponent as j, useSlots as re, computed as O, createElementBlock as n, openBlock as s, normalizeClass as z, createElementVNode as l, renderSlot as Z, unref as de, toDisplayString as q, ref as b, onUnmounted as oe, createBlock as ye, Teleport as be, createCommentVNode as L, createVNode as $e, TransitionGroup as xe, withCtx as _e, Fragment as ee, renderList as te, normalizeStyle as G, watch as ne, nextTick as ve, onMounted as ae, withDirectives as he, createTextVNode as ge, vShow as we, watchEffect as ke, useCssVars as pe, getCurrentInstance as Ce, createStaticVNode as Se, isMemoSame as Ie, vModelText as Me, withModifiers as me } from "vue";
const Te = (e = []) => ({
  install: (t) => {
    e.forEach((o) => t.use(o));
  }
}), X = (e, a) => (e.install = (t) => {
  for (const o of [e, ...Object.values({})])
    t.component(o.name, o);
}, e), Ee = ["data-content"], Ne = { key: 1 }, ze = /* @__PURE__ */ j({
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
    const t = re(), o = e, u = O(() => {
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
    }), i = O(() => {
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
    return (c, f) => (s(), n("div", {
      class: z(["cp-button", i.value])
    }, [
      l("div", {
        class: z(["button", u.value]),
        "data-content": o.content
      }, [
        de(t) ? Z(c.$slots, "default", { key: 0 }, void 0, !0) : (s(), n("span", Ne, q(o.content), 1))
      ], 10, Ee)
    ], 2));
  }
}), J = (e, a) => {
  const t = e.__vccOpts || e;
  for (const [o, u] of a)
    t[o] = u;
  return t;
}, Re = /* @__PURE__ */ J(ze, [["__scopeId", "data-v-c3d9b67f"]]), Be = X(Re), Le = { class: "notification-content" }, Oe = {
  key: 0,
  class: "notification-icon"
}, De = { class: "notification-body" }, He = {
  key: 0,
  class: "notification-title"
}, Ae = { class: "notification-message" }, Fe = {
  key: 1,
  class: "notification-actions"
}, Ye = ["onClick"], Pe = ["onClick"], Ge = /* @__PURE__ */ j({
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
  setup(e, { expose: a, emit: t }) {
    const o = e, u = t, i = b([]), c = b(!1);
    let f = 0;
    const d = (m) => {
      const I = ++f, r = {
        id: I,
        title: m.title || "",
        message: m.message,
        type: m.type || "info",
        duration: m.duration !== void 0 ? m.duration : o.duration,
        showClose: m.showClose !== void 0 ? m.showClose : !0,
        showIcon: m.showIcon !== void 0 ? m.showIcon : !0,
        actions: m.actions || [],
        effect: m.effect || o.effect,
        onClose: m.onClose || (() => {
        })
      };
      if (i.value.push(r), c.value = !0, r.duration > 0 && setTimeout(() => {
        v(I);
      }, r.duration), i.value.length > o.maxCount) {
        const T = i.value[0];
        v(T.id);
      }
      return I;
    }, v = (m) => {
      const I = i.value.findIndex((r) => r.id === m);
      if (I !== -1) {
        const r = i.value[I];
        r.onClose && r.onClose(), i.value.splice(I, 1), u("close", m);
      }
    }, h = (m, I) => {
      I.callback && I.callback(), v(m.id);
    }, w = () => {
      i.value.length === 0 && (c.value = !1);
    }, S = () => {
      i.value.forEach((m) => {
        m.onClose && m.onClose();
      }), i.value = [], c.value = !1;
    };
    return a({
      // 创建不同类型的通知
      info: (m) => d({ ...m, type: "info" }),
      success: (m) => d({ ...m, type: "success" }),
      warning: (m) => d({ ...m, type: "warning" }),
      error: (m) => d({ ...m, type: "error" }),
      // 通用创建方法
      create: d,
      // 关闭方法
      close: v,
      // 清除所有
      clearAll: S
    }), oe(() => {
      S();
    }), (m, I) => (s(), ye(be, { to: "body" }, [
      c.value ? (s(), n("div", {
        key: 0,
        class: z(["cp-cyber-notification-container", `position-${e.position}`])
      }, [
        $e(xe, {
          name: "notification",
          tag: "div",
          onAfterLeave: w
        }, {
          default: _e(() => [
            (s(!0), n(ee, null, te(i.value, (r) => (s(), n("div", {
              key: r.id,
              class: z(["cp-cyber-notification", `type-${r.type}`, `effect-${r.effect}`])
            }, [
              l("div", Le, [
                r.showIcon ? (s(), n("div", Oe, [...I[0] || (I[0] = [
                  l("div", { class: "icon-circle" }, null, -1),
                  l("div", { class: "icon-symbol" }, null, -1)
                ])])) : L("", !0),
                l("div", De, [
                  r.title ? (s(), n("div", He, q(r.title), 1)) : L("", !0),
                  l("div", Ae, q(r.message), 1),
                  r.actions && r.actions.length ? (s(), n("div", Fe, [
                    (s(!0), n(ee, null, te(r.actions, (T, y) => (s(), n("button", {
                      key: y,
                      class: "action-button",
                      onClick: (P) => h(r, T)
                    }, q(T.text), 9, Ye))), 128))
                  ])) : L("", !0)
                ]),
                r.showClose ? (s(), n("div", {
                  key: 1,
                  class: "notification-close",
                  onClick: (T) => v(r.id)
                }, [...I[1] || (I[1] = [
                  l("span", { class: "close-icon" }, "×", -1)
                ])], 8, Pe)) : L("", !0)
              ]),
              r.duration > 0 ? (s(), n("div", {
                key: 0,
                class: "notification-progress",
                style: G({ animationDuration: `${r.duration}ms` })
              }, null, 4)) : L("", !0),
              I[2] || (I[2] = l("div", { class: "notification-glitch-effect" }, null, -1)),
              I[3] || (I[3] = l("div", { class: "notification-hologram-effect" }, null, -1))
            ], 2))), 128))
          ]),
          _: 1
        })
      ], 2)) : L("", !0)
    ]));
  }
}), Ve = /* @__PURE__ */ J(Ge, [["__scopeId", "data-v-5ed37d60"]]), We = X(Ve), qe = { class: "tooltip-inner" }, je = { class: "tooltip-content" }, Xe = /* @__PURE__ */ j({
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
  setup(e, { emit: a }) {
    const t = e, o = a, u = b(!1), i = b(null), c = b(null), f = b(null), d = b(t.position), v = b({}), h = () => {
      if (!i.value || !c.value || t.position !== "auto")
        return t.position;
      const k = i.value.getBoundingClientRect(), N = c.value.getBoundingClientRect(), U = window.innerWidth, Q = window.innerHeight, C = k.top, x = U - k.right, E = Q - k.bottom, A = k.left, W = [
        { position: "top", space: C },
        { position: "right", space: x },
        { position: "bottom", space: E },
        { position: "left", space: A }
      ];
      W.sort((F, $) => $.space - F.space);
      const H = N.height || 50, R = N.width || 150;
      for (const F of W)
        if (F.position === "top" && F.space >= H + 10 || F.position === "bottom" && F.space >= H + 10 || F.position === "left" && F.space >= R + 10 || F.position === "right" && F.space >= R + 10)
          return F.position;
      return "top";
    }, w = O(() => typeof t.width == "number" ? `${t.width}px` : t.width), S = () => {
      f.value && clearTimeout(f.value), f.value = window.setTimeout(() => {
        u.value = !0, ve(() => {
          t.position === "auto" ? d.value = h() : d.value = t.position, I(), o("show");
        });
      }, t.delay);
    }, m = () => {
      f.value && clearTimeout(f.value), f.value = window.setTimeout(() => {
        u.value = !1, o("hide");
      }, 100);
    }, I = () => {
      if (!i.value || !c.value) return;
      const k = i.value.getBoundingClientRect(), N = c.value.getBoundingClientRect(), U = window.pageYOffset || document.documentElement.scrollTop, Q = window.pageXOffset || document.documentElement.scrollLeft;
      let C = 0, x = 0;
      const E = 10;
      switch (d.value) {
        case "top":
          C = k.left + k.width / 2 - N.width / 2 + Q, x = k.top - N.height - E + U;
          break;
        case "right":
          C = k.right + E + Q, x = k.top + k.height / 2 - N.height / 2 + U;
          break;
        case "bottom":
          C = k.left + k.width / 2 - N.width / 2 + Q, x = k.bottom + E + U;
          break;
        case "left":
          C = k.left - N.width - E + Q, x = k.top + k.height / 2 - N.height / 2 + U;
          break;
      }
      (() => {
        const W = window.innerWidth, H = window.innerHeight, R = 10;
        C < R ? C = R : C + N.width > W - R && (C = W - N.width - R), x < R ? x = R : x + N.height > H - R && (x = H - N.height - R);
      })(), v.value = {
        left: `${C}px`,
        top: `${x}px`,
        width: w.value
      };
    }, r = () => {
      t.trigger === "hover" && S();
    }, T = () => {
      t.trigger === "hover" && m();
    }, y = () => {
      t.trigger === "click" && (u.value ? m() : S());
    }, P = () => {
      t.trigger === "focus" && S();
    }, K = () => {
      t.trigger === "focus" && m();
    }, g = () => {
      u.value && (t.position === "auto" && (d.value = h()), I());
    }, p = () => {
      u.value && (D && clearTimeout(D), D = setTimeout(() => {
        I();
      }, 16));
    };
    ne(
      () => t.position,
      (k) => {
        u.value && ve(() => {
          k === "auto" ? d.value = h() : d.value = k, I();
        });
      }
    );
    let _ = [];
    const V = (k) => {
      let N = [], U = k.parentElement;
      for (; U; ) {
        const Q = window.getComputedStyle(U);
        /(auto|scroll)/.test(Q.overflow + Q.overflowY + Q.overflowX) && N.push(U), U = U.parentElement;
      }
      return N.push(document.documentElement), N;
    };
    ae(() => {
      if (window.addEventListener("resize", g), window.addEventListener("scroll", p, { passive: !0 }), document.addEventListener("click", (k) => {
        if (u.value && t.trigger === "click") {
          const N = k.target;
          c.value && !c.value.contains(N) && i.value && !i.value.contains(N) && m();
        }
      }), i.value) {
        _ = V(i.value);
        const k = () => {
          D && clearTimeout(D), D = setTimeout(() => {
            u.value && I();
          }, 16);
        };
        _.forEach((N) => {
          N.addEventListener("scroll", k);
        });
      }
    });
    let D = null;
    return oe(() => {
      window.removeEventListener("resize", g), window.removeEventListener("scroll", p), _.forEach((k) => {
        k.removeEventListener("scroll", p);
      }), f.value && clearTimeout(f.value), D && clearTimeout(D);
    }), (k, N) => (s(), n("div", null, [
      l("div", {
        ref_key: "triggerRef",
        ref: i,
        class: "tooltip-trigger",
        onMouseenter: r,
        onMouseleave: T,
        onClick: y,
        onFocus: P,
        onBlur: K
      }, [
        Z(k.$slots, "default", {}, void 0, !0)
      ], 544),
      (s(), ye(be, { to: "body" }, [
        he(l("div", {
          ref_key: "tooltipRef",
          ref: c,
          class: z([
            "cp-cyber-tooltip",
            `theme-${e.theme}`,
            `effect-${e.effect}`,
            `position-${d.value}`
          ]),
          style: G(v.value)
        }, [
          N[2] || (N[2] = l("div", { class: "tooltip-arrow" }, null, -1)),
          l("div", qe, [
            l("div", je, [
              Z(k.$slots, "content", {}, () => [
                ge(q(e.content), 1)
              ], !0)
            ]),
            N[0] || (N[0] = l("div", { class: "tooltip-scanline" }, null, -1)),
            N[1] || (N[1] = l("div", { class: "tooltip-glitch" }, null, -1))
          ])
        ], 6), [
          [we, u.value]
        ])
      ]))
    ]));
  }
}), Ke = /* @__PURE__ */ J(Xe, [["__scopeId", "data-v-82a4305f"]]), Ue = X(Ke), Qe = {
  key: 0,
  class: "prefix"
}, Ze = { class: "counter-container" }, Je = {
  key: 0,
  class: "separator"
}, et = { class: "digit-top" }, tt = { class: "digit-bottom" }, at = { class: "digit-top flip-top" }, lt = { class: "digit-bottom flip-bottom" }, st = {
  key: 1,
  class: "suffix"
}, nt = /* @__PURE__ */ j({
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
    const a = e, t = b(Number(a.from)), o = b(Number(a.value)), u = b(null), i = b(null), c = b(""), f = (r) => {
      const T = Math.pow(10, a.decimal);
      let P = (Math.round(r * T) / T).toFixed(a.decimal);
      if (a.separator) {
        const K = P.split(".");
        K[0] = K[0].replace(/\B(?=(\d{3})+(?!\d))/g, a.separator), P = K.join(".");
      }
      return P;
    }, d = O(() => f(t.value)), v = O(() => d.value.split("")), h = (r) => r === a.separator || r === ".", w = (r) => !c.value || r >= c.value.length ? !1 : c.value[r] !== v.value[r] && !h(v.value[r]), S = (r) => {
      u.value === null && (u.value = r);
      const T = r - u.value, y = Math.min(T / a.duration, 1), P = Number(a.from), K = Number(a.to !== null ? a.to : o.value), g = P + (K - P) * m(y);
      t.value = g, y < 1 ? i.value = requestAnimationFrame(S) : (t.value = K, u.value = null);
    }, m = (r) => 1 - Math.pow(1 - r, 4), I = () => {
      c.value = d.value, i.value !== null && cancelAnimationFrame(i.value), u.value = null, i.value = requestAnimationFrame(S);
    };
    return ne(() => a.value, (r) => {
      o.value = Number(r), I();
    }), ne(() => a.to, (r) => {
      r !== null && (o.value = Number(r), I());
    }), ae(() => {
      Number(a.from) !== Number(a.value) && I();
    }), oe(() => {
      i.value !== null && cancelAnimationFrame(i.value);
    }), (r, T) => (s(), n("div", {
      class: z(["cp-digital-counter", `theme-${e.theme}`])
    }, [
      e.prefix ? (s(), n("span", Qe, q(e.prefix), 1)) : L("", !0),
      l("div", Ze, [
        (s(!0), n(ee, null, te(v.value, (y, P) => (s(), n("div", {
          key: P,
          class: "digit-container"
        }, [
          h(y) ? (s(), n("div", Je, q(y), 1)) : (s(), n("div", {
            key: 1,
            class: z(["digit-flipper", { animate: w(P) }])
          }, [
            l("div", et, q(y), 1),
            l("div", tt, q(y), 1),
            l("div", at, q(y), 1),
            l("div", lt, q(y), 1)
          ], 2))
        ]))), 128))
      ]),
      e.suffix ? (s(), n("span", st, q(e.suffix), 1)) : L("", !0)
    ], 2));
  }
}), ot = /* @__PURE__ */ J(nt, [["__scopeId", "data-v-41a40b63"]]), rt = X(ot), it = {
  class: "cp-full-page",
  id: "page-scroll"
}, ct = ["onClick"], ut = /* @__PURE__ */ j({
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
    const t = e, o = a, u = b();
    ke(() => {
      var p;
      (p = u.value) != null && p.style && (u.value.style.transform = c.value);
    });
    const i = O(() => {
      var _, V;
      f.value = !0;
      let p = 0;
      return (_ = document.getElementById("page-scroll")) != null && _.clientHeight ? p = ((V = document.getElementById("page-scroll")) == null ? void 0 : V.clientHeight) ?? 0 : p = window.innerHeight, p;
    }), c = O(() => `translateY(-${y.value * i.value}px)`), f = b(!1), d = b(!0);
    function v(p) {
      f.value = !1, d.value && (d.value = !1, T(p), setTimeout(() => {
        d.value = !0;
      }, 500));
    }
    const h = b(0), w = b(0), S = b(0);
    function m(p) {
      h.value = p.touches[0].pageY || p.changedTouches[0].pageY;
    }
    function I(p) {
      p.preventDefault(), f.value = !1, w.value = p.changedTouches[0].pageY || p.touches[0].pageY, S.value = w.value - h.value, Math.abs(S.value) >= 60 ? (y.value < t.items.length - 1 && S.value < 0 && y.value++, y.value > 0 && S.value > 0 && y.value--) : (console.log("else", -y.value * i.value), u.value.style.transform = `translateY(-${y.value * i.value}px)`);
    }
    function r(p) {
      f.value = !0, p.preventDefault(), S.value = (p.changedTouches[0].pageY || p.touches[0].pageY) - h.value, !(y.value === t.items.length - 1 && S.value < 0 || y.value === 0 && S.value > 0) && (console.log("else", -y.value * i.value + S.value * -1), u.value.style.transform = `translateY(-${y.value * i.value + S.value * -1}px)`);
    }
    function T(p) {
      p.wheelDelta < 0 ? (P(), o("change", { from: t.items[y.value - 1], to: t.items[y.value], type: "next" })) : (K(), o("change", { from: t.items[y.value + 1], to: t.items[y.value], type: "last" }));
    }
    const y = b(0);
    function P() {
      y.value < t.items.length - 1 && (y.value++, o("toNext", y.value));
    }
    function K() {
      (y.value > 1 || y.value === 1) && (y.value--, o("toLast", y.value));
    }
    function g(p) {
      f.value = !1, y.value = p;
    }
    return (p, _) => (s(), n("div", it, [
      l("div", {
        ref_key: "element",
        ref: u,
        class: z([{ activeTranstion: f.value }, "inner-box"]),
        onMousewheel: v,
        onTouchstart: m,
        onTouchend: I,
        onTouchmove: r
      }, [
        Z(p.$slots, "default", {}, void 0, !0)
      ], 34),
      l("div", {
        class: z(["cp-full-dot", t.position])
      }, [
        (s(!0), n(ee, null, te(t.items, (V, D) => (s(), n("div", {
          onClick: (k) => g(D),
          class: "cp-full-dot-item"
        }, [
          l("div", {
            class: z(["cp-full-dot-item-bg", { active: D === y.value }])
          }, null, 2),
          t.showTitle ? he((s(), n("div", {
            key: 0,
            class: "show-dec"
          }, q(V.title), 513)), [
            [we, D === y.value]
          ]) : L("", !0)
        ], 8, ct))), 256))
      ], 2)
    ]));
  }
}), dt = /* @__PURE__ */ J(ut, [["__scopeId", "data-v-93eb8a4b"]]), ft = X(dt), vt = ["src", "alt"], ht = {
  key: 1,
  class: "loading-placeholder"
}, gt = {
  key: 2,
  class: "error-placeholder"
}, pt = /* @__PURE__ */ j({
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
    const t = e, o = a, u = b(null), i = b(null), c = b(null), f = b(!1), d = b(!1), v = b(!1), h = b(null), w = b(null), S = O(() => t.intensity / 10), m = () => {
      f.value = !0, d.value = !1, setTimeout(() => {
        r(), t.triggerMode === "auto" ? V() : t.triggerMode === "random" && D();
      }, 0);
    }, I = () => {
      d.value = !0, f.value = !1, console.error("Failed to load image:", t.src);
    }, r = () => {
      if (!c.value || !i.value) return;
      const C = i.value, x = c.value, E = x.getContext("2d");
      if (E) {
        x.width = C.naturalWidth, x.height = C.naturalHeight;
        try {
          E.drawImage(C, 0, 0), w.value = E.getImageData(0, 0, x.width, x.height);
        } catch (A) {
          console.error("Failed to get image data (possibly CORS issue):", A), d.value = !0;
        }
      }
    }, T = (C, x) => {
      if (!w.value) return;
      const E = C.canvas, A = C.getImageData(0, 0, E.width, E.height), W = A.data, H = w.value.data, R = Math.floor(20 * x), F = Math.floor(Math.random() * R), $ = Math.floor(Math.random() * R);
      for (let M = 0; M < E.height; M++)
        for (let B = 0; B < E.width; B++) {
          const Y = (M * E.width + B) * 4, le = Math.min(Math.max(B + F, 0), E.width - 1), ce = (Math.min(Math.max(M + $, 0), E.height - 1) * E.width + le) * 4;
          W[Y] = H[ce];
          const ue = Math.min(Math.max(B - F, 0), E.width - 1), fe = (Math.min(Math.max(M - $, 0), E.height - 1) * E.width + ue) * 4;
          W[Y + 2] = H[fe + 2], W[Y + 1] = H[Y + 1];
        }
      C.putImageData(A, 0, 0);
    }, y = (C, x) => {
      if (!w.value) return;
      const E = C.canvas;
      C.putImageData(w.value, 0, 0);
      const A = Math.max(1, Math.floor(5 / x)), W = 0.5 + x * 0.1;
      for (let H = 0; H < E.height; H += A * 2)
        C.fillStyle = `rgba(255, 255, 255, ${W})`, C.fillRect(0, H, E.width, A);
    }, P = (C, x) => {
      if (!w.value) return;
      const E = C.canvas;
      C.putImageData(w.value, 0, 0);
      const A = Math.max(4, Math.floor(x * 8));
      if (Math.random() > 0.5)
        for (let H = 0; H < E.height; H += A)
          for (let R = 0; R < E.width; R += A) {
            const F = C.getImageData(R, H, 1, 1).data;
            C.fillStyle = `rgb(${F[0]}, ${F[1]}, ${F[2]})`, C.fillRect(R, H, A, A);
          }
      else {
        const H = Math.floor(x * 3);
        for (let R = 0; R < H; R++) {
          const F = Math.floor(Math.random() * (E.width - 50)), $ = Math.floor(Math.random() * (E.height - 50)), M = Math.floor(Math.random() * 100 * x) + 30, B = Math.floor(Math.random() * 80 * x) + 20;
          for (let Y = $; Y < $ + B; Y += A)
            for (let le = F; le < F + M; le += A)
              if (le < E.width && Y < E.height) {
                const se = C.getImageData(le, Y, 1, 1).data;
                C.fillStyle = `rgb(${se[0]}, ${se[1]}, ${se[2]})`, C.fillRect(le, Y, A, A);
              }
        }
      }
    }, K = (C, x) => {
      if (!w.value) return;
      const E = C.canvas, A = C.getImageData(0, 0, E.width, E.height), W = A.data, H = 0.2 + x * 0.05;
      for (let R = 0; R < W.length; R += 4)
        Math.random() < H && (Math.random() > 0.5 ? (W[R] = 255, W[R + 1] = 255, W[R + 2] = 255) : (W[R] = Math.floor(Math.random() * 256), W[R + 1] = Math.floor(Math.random() * 256), W[R + 2] = Math.floor(Math.random() * 256)));
      C.putImageData(A, 0, 0);
    }, g = (C, x) => {
      [...["rgb-shift", "scanline", "pixelate", "noise"]].sort(() => 0.5 - Math.random()).slice(0, 2 + Math.floor(Math.random() * 2)).forEach((H) => {
        switch (H) {
          case "rgb-shift":
            T(C, x);
            break;
          case "scanline":
            y(C, x);
            break;
          case "pixelate":
            P(C, x);
            break;
          case "noise":
            K(C, x);
            break;
        }
      });
    }, p = () => {
      if (!c.value || !w.value) return;
      const x = c.value.getContext("2d");
      if (x) {
        switch (x.putImageData(w.value, 0, 0), t.glitchType) {
          case "rgb-shift":
            T(x, S.value);
            break;
          case "scanline":
            y(x, S.value);
            break;
          case "pixelate":
            P(x, S.value);
            break;
          case "noise":
            K(x, S.value);
            break;
          case "combined":
            g(x, S.value);
            break;
        }
        v.value = !0, o("glitch-start");
      }
    }, _ = () => {
      if (!c.value || !w.value) return;
      const x = c.value.getContext("2d");
      x && (x.putImageData(w.value, 0, 0), v.value = !1, o("glitch-end"));
    }, V = () => {
      h.value && clearInterval(h.value), p(), t.animated && (h.value = window.setInterval(() => {
        p();
      }, t.interval));
    }, D = () => {
      h.value && clearInterval(h.value), h.value = window.setInterval(() => {
        Math.random() < 0.5 && (p(), setTimeout(() => {
          _();
        }, 200 + Math.random() * 300));
      }, t.interval);
    }, k = () => {
      h.value && (clearInterval(h.value), h.value = null), _();
    }, N = () => {
      t.triggerMode === "hover" && V();
    }, U = () => {
      t.triggerMode === "hover" && !t.animated && k();
    }, Q = () => {
      t.triggerMode === "click" && (v.value ? k() : V());
    };
    return ne(() => [t.src, t.glitchType, t.intensity], () => {
      t.src && (f.value = !1, d.value = !1), v.value && p();
    }), ae(() => {
      i.value && i.value.complete && i.value.naturalHeight !== 0 && m();
    }), oe(() => {
      h.value && clearInterval(h.value);
    }), (C, x) => (s(), n("div", {
      class: z(["cp-glitch-image", { animated: e.animated }]),
      onMouseenter: N,
      onMouseleave: U,
      onClick: Q
    }, [
      l("div", {
        class: "image-container",
        ref_key: "imageContainerRef",
        ref: u
      }, [
        l("img", {
          src: e.src,
          alt: e.alt,
          ref_key: "imageRef",
          ref: i,
          class: "original-image",
          crossOrigin: "anonymous",
          onLoad: m,
          onError: I
        }, null, 40, vt),
        f.value && !d.value ? (s(), n("canvas", {
          key: 0,
          ref_key: "glitchCanvasRef",
          ref: c,
          class: "glitch-canvas"
        }, null, 512)) : L("", !0),
        !f.value && !d.value ? (s(), n("div", ht, [...x[0] || (x[0] = [
          l("div", { class: "loading-text" }, "Loading...", -1)
        ])])) : L("", !0),
        d.value ? (s(), n("div", gt, [...x[1] || (x[1] = [
          l("div", { class: "error-text" }, "Image Load Failed", -1)
        ])])) : L("", !0)
      ], 512)
    ], 34));
  }
}), mt = /* @__PURE__ */ J(pt, [["__scopeId", "data-v-b537a1f3"]]), yt = X(mt), bt = ["data-progress"], wt = { class: "progress-container" }, $t = {
  key: 0,
  class: "progress-text"
}, xt = /* @__PURE__ */ j({
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
    const a = e, t = b(null), o = b(null), u = O(() => a.direction === "vertical" ? "vertical" : "horizontal"), i = O(() => {
      const d = a.direction === "vertical" ? "height" : "width", v = a.indeterminate ? "100%" : `${a.progress}%`;
      return {
        [d]: v,
        backgroundColor: a.color,
        boxShadow: `0 0 ${a.glitchIntensity * 2}px ${a.color}`
      };
    }), c = () => {
      if (!t.value) return;
      const d = t.value.querySelector(".glitch-effect");
      if (!d) return;
      const v = () => {
        if (!d) return;
        if (Math.random() < a.glitchIntensity / 20) {
          const w = Math.random() * a.glitchIntensity - a.glitchIntensity / 2, S = Math.random() * a.glitchIntensity - a.glitchIntensity / 2, m = Math.random() * a.glitchIntensity - a.glitchIntensity / 2, I = Math.random() * a.glitchIntensity / 2;
          d.style.transform = `translate(${w}px, ${S}px) skew(${m}deg)`, d.style.filter = `blur(${I}px)`, d.style.opacity = "1", setTimeout(() => {
            d && (d.style.transform = "translate(0, 0) skew(0)", d.style.filter = "blur(0)", d.style.opacity = "0");
          }, 150);
        }
      };
      o.value = window.setInterval(() => {
        v();
      }, 500);
    };
    let f = a.progress;
    return ne(() => a.progress, (d) => {
      if (d !== f) {
        if (t.value) {
          const v = t.value.querySelector(".glitch-effect");
          if (v) {
            const h = Math.random() * a.glitchIntensity * 2 - a.glitchIntensity, w = Math.random() * a.glitchIntensity - a.glitchIntensity / 2;
            v.style.transform = `translate(${h}px, ${w}px)`, v.style.opacity = "1", setTimeout(() => {
              v && (v.style.transform = "translate(0, 0)", v.style.opacity = "0");
            }, 300);
          }
        }
        f = d;
      }
    }), ae(() => {
      c();
    }), oe(() => {
      o.value && clearInterval(o.value);
    }), (d, v) => (s(), n("div", {
      class: z(["cp-glitch-progress", u.value, { indeterminate: e.indeterminate }]),
      "data-progress": e.progress
    }, [
      l("div", wt, [
        l("div", {
          class: "progress-bar",
          style: G(i.value),
          ref_key: "progressBarRef",
          ref: t
        }, [...v[0] || (v[0] = [
          l("div", { class: "glitch-effect" }, null, -1)
        ])], 4),
        e.showText && !e.indeterminate ? (s(), n("div", $t, q(e.progress) + "% ", 1)) : L("", !0)
      ])
    ], 10, bt));
  }
}), _t = /* @__PURE__ */ J(xt, [["__scopeId", "data-v-27854e11"]]), kt = X(_t), Ct = { class: "glow-text" }, St = /* @__PURE__ */ j({
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
    }), (t, o) => (s(), n("div", Ct, [
      Z(t.$slots, "default", {}, void 0, !0)
    ]));
  }
}), It = /* @__PURE__ */ J(St, [["__scopeId", "data-v-986b354d"]]), Mt = X(It), Tt = ["tabindex", "aria-disabled", "aria-label"], Et = { class: "holo-card-content" }, Nt = {
  key: 0,
  class: "card-title"
}, zt = /* @__PURE__ */ j({
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
    pe((r) => ({
      v6fc87eab: o.hologramColor
    }));
    const a = Ce(), t = re(), o = e, u = b({ x: 0, y: 0 }), i = b(!1), d = ((r, T) => {
      let y;
      return function() {
        const P = arguments, K = a;
        y || (r.apply(K, P), y = !0, setTimeout(() => y = !1, T));
      };
    })((r) => {
      if (o.disabled) return;
      const T = r.currentTarget.getBoundingClientRect();
      u.value = {
        x: (r.clientX - T.left) / T.width * 2 - 1,
        y: (r.clientY - T.top) / T.height * 2 - 1
      }, i.value = !0;
    }, 16), v = () => {
      i.value = !1, u.value = { x: 0, y: 0 };
    }, h = () => {
      o.disabled || (i.value = !0, u.value = { x: 0, y: 0 });
    }, w = O(() => [(() => {
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
    })()]), S = O(() => {
      const r = {};
      if (o.rounded || (r.borderRadius = "0"), o.disabled && (r.cursor = "not-allowed", r.opacity = "0.6"), !i.value || o.disabled) return r;
      const T = u.value.y * 10, y = -u.value.x * 10;
      return {
        ...r,
        transform: `perspective(1000px) rotateX(${T}deg) rotateY(${y}deg) scale3d(1.05, 1.05, 1.05)`,
        transition: "transform 0.1s ease"
      };
    }), m = O(() => {
      if (!i.value || o.disabled) return {};
      const r = Math.max(-50, Math.min(50, u.value.x * 10)), T = Math.max(-50, Math.min(50, u.value.y * 10));
      return {
        background: `radial-gradient(circle at ${50 + r}% ${50 + T}%, ${o.hologramColor}33, transparent 70%)`,
        opacity: 0.8,
        transition: "background 0.1s ease"
      };
    }), I = O(() => {
      const r = o.glowIntensity / 100;
      return {
        boxShadow: `0 0 ${10 + o.glowIntensity / 5}px ${o.hologramColor}${Math.floor(r * 99).toString(16).padStart(2, "0")}`,
        opacity: i.value && !o.disabled ? r : r * 0.5
      };
    });
    return ae(() => {
      ve(() => {
      });
    }), (r, T) => (s(), n("div", {
      class: z([
        "cp-holo-card",
        `depth-${e.depth}`,
        w.value,
        `theme-${e.theme}`,
        `effect-${e.effect}`
      ]),
      style: G(S.value),
      onMousemove: T[0] || (T[0] = //@ts-ignore
      (...y) => de(d) && de(d)(...y)),
      onMouseleave: v,
      onFocus: h,
      onBlur: v,
      tabindex: e.disabled ? -1 : 0,
      role: "button",
      "aria-disabled": e.disabled,
      "aria-label": e.title
    }, [
      l("div", Et, [
        e.title && !de(t).title ? (s(), n("div", Nt, q(e.title), 1)) : L("", !0),
        Z(r.$slots, "title", {}, void 0, !0),
        Z(r.$slots, "default", {}, void 0, !0),
        Z(r.$slots, "footer", {}, void 0, !0)
      ]),
      l("div", {
        class: "holo-card-hologram-effect",
        style: G(m.value)
      }, null, 4),
      l("div", {
        class: "holo-card-glow",
        style: G(I.value)
      }, null, 4)
    ], 46, Tt));
  }
}), Rt = /* @__PURE__ */ J(zt, [["__scopeId", "data-v-30c0c309"]]), Bt = X(Rt), Lt = { class: "loader-container" }, Ot = {
  key: 0,
  class: "cube-loader"
}, Dt = {
  key: 1,
  class: "sphere-loader"
}, Ht = { class: "sphere" }, At = {
  key: 2,
  class: "datastream-loader"
}, Ft = {
  key: 3,
  class: "circuit-loader"
}, Yt = { class: "circuit-board" }, Pt = {
  key: 0,
  class: "loader-text"
}, Gt = { class: "typing-text" }, Vt = /* @__PURE__ */ j({
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
    pe((d) => ({
      c40498b2: d.$props.color,
      v7f665050: t
    }));
    const a = e, t = (6 / a.speed).toString() + "s", o = O(() => {
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
    }), u = b(""), i = b(0), c = b(null), f = () => {
      if (!a.text) return;
      i.value = 0, u.value = "";
      const d = () => {
        i.value < a.text.length ? (u.value += a.text[i.value], i.value++) : setTimeout(() => {
          i.value = 0, u.value = "";
        }, 1e3);
      }, v = 100 / a.speed;
      c.value = window.setInterval(d, v);
    };
    return ne(() => a.text, () => {
      c.value && clearInterval(c.value), f();
    }), ae(() => {
      f();
    }), oe(() => {
      c.value && clearInterval(c.value);
    }), (d, v) => (s(), n("div", {
      class: z(["cp-holo-loader", o.value, { "transparent-bg": e.transparent }])
    }, [
      l("div", Lt, [
        l("div", {
          class: z(["holo-projection", `type-${e.type}`])
        }, [
          e.type === "cube" || e.type === "split" ? (s(), n("div", Ot, [...v[0] || (v[0] = [
            Se('<div class="cube" data-v-6df1b911><div class="cube-face front" data-v-6df1b911></div><div class="cube-face back" data-v-6df1b911></div><div class="cube-face right" data-v-6df1b911></div><div class="cube-face left" data-v-6df1b911></div><div class="cube-face top" data-v-6df1b911></div><div class="cube-face bottom" data-v-6df1b911></div></div>', 1)
          ])])) : e.type === "sphere" ? (s(), n("div", Dt, [
            l("div", Ht, [
              (s(), n(ee, null, te(3, (h) => l("div", {
                class: "sphere-ring",
                key: h
              })), 64))
            ])
          ])) : e.type === "datastream" ? (s(), n("div", At, [
            (s(), n(ee, null, te(10, (h) => l("div", {
              class: "data-line",
              key: h
            })), 64))
          ])) : e.type === "circuit" ? (s(), n("div", Ft, [
            l("div", Yt, [
              (s(), n(ee, null, te(5, (h) => l("div", {
                class: "circuit-path",
                key: h
              })), 64)),
              (s(), n(ee, null, te(6, (h) => l("div", {
                class: "circuit-node",
                key: h + 10
              })), 64))
            ])
          ])) : L("", !0)
        ], 2),
        e.text ? (s(), n("div", Pt, [
          l("span", Gt, q(u.value), 1),
          v[1] || (v[1] = l("span", { class: "cursor" }, "_", -1))
        ])) : L("", !0),
        v[2] || (v[2] = l("div", { class: "holo-base" }, [
          l("div", { class: "base-glow" })
        ], -1))
      ])
    ], 2));
  }
}), Wt = /* @__PURE__ */ J(Vt, [["__scopeId", "data-v-6df1b911"]]), qt = X(Wt), jt = ["onClick"], Xt = { class: "th-content" }, Kt = {
  key: 0,
  class: "sort-icon"
}, Ut = {
  key: 0,
  class: "loading-overlay"
}, Qt = {
  key: 1,
  class: "empty-data"
}, Zt = {
  key: 0,
  class: "table-controls"
}, Jt = { key: 0 }, ea = { key: 1 }, ta = { class: "control-speed" }, aa = {
  key: 1,
  class: "table-footer"
}, la = /* @__PURE__ */ j({
  name: "CyberInfiniteTable",
  __name: "infiniteTable",
  props: {
    data: {
      type: Array,
      default: () => []
    },
    columns: {
      type: Array,
      required: !0
    },
    rowKey: {
      type: [String, Function],
      default: "id"
    },
    rowHeight: {
      type: Number,
      default: 40
    },
    loading: {
      type: Boolean,
      default: !1
    },
    selectedRows: {
      type: Array,
      default: () => []
    },
    defaultSort: {
      type: Object,
      default: () => ({ key: "", order: "asc" })
    },
    // 自动滚动相关配置
    autoScroll: {
      type: Boolean,
      default: !0
    },
    speed: {
      type: Number,
      default: 1,
      validator: (e) => e >= 0.5 && e <= 5
    },
    loop: {
      type: Boolean,
      default: !0
    },
    pauseOnHover: {
      type: Boolean,
      default: !0
    },
    showControls: {
      type: Boolean,
      default: !0
    },
    // 虚拟滚动相关
    bufferSize: {
      type: Number,
      default: 5
    }
  },
  emits: ["row-click", "sort-change", "load-more", "scroll-pause", "scroll-resume"],
  setup(e, { emit: a }) {
    var R, F;
    const t = e, o = a, u = b(null), i = b(null), c = b(!1), f = b(!1), d = b(!1), v = b(t.speed), h = b(null), w = b(0), S = b(!1), m = b({
      key: ((R = t.defaultSort) == null ? void 0 : R.key) || "",
      order: ((F = t.defaultSort) == null ? void 0 : F.order) || ""
    }), I = O(() => (t.data.length + (t.loop ? 2 : 0)) * t.rowHeight), r = ($) => typeof t.rowKey == "function" ? t.rowKey($) : typeof t.rowKey == "string" ? $[t.rowKey] : String($.id ?? $._id ?? Math.random().toString(36).substr(2, 9)), T = ($) => K.value + $, y = ($, M) => M.formatter ? M.formatter($, M, t.data.indexOf($)) : $[M.key], P = ($) => $.width ? { width: typeof $.width == "number" ? `${$.width}px` : $.width } : {}, K = O(() => Math.max(0, w.value - t.bufferSize)), g = O(() => Math.min(t.data.length, w.value + t.bufferSize + 1)), p = O(() => t.data.length === 0 ? [] : t.data.slice(K.value, g.value)), _ = ($) => {
      if (!t.selectedRows || t.selectedRows.length === 0) return !1;
      const M = r($);
      return t.selectedRows.some(
        (B) => r(B) === M
      );
    }, V = ($) => {
      o("row-click", $);
    }, D = ($) => {
      if (!$.sortable) return;
      let M = "asc";
      m.value.key === $.key && (m.value.order === "asc" ? M = "desc" : m.value.order === "desc" ? M = "" : M = "asc"), m.value = {
        key: $.key,
        order: M
      }, o("sort-change", { ...m.value });
    }, k = O(() => -(t.loop ? w.value + 1 : w.value) * t.rowHeight), N = () => {
      if (f.value || S.value || t.data.length === 0)
        return;
      c.value = !0;
      let $ = w.value + 1;
      if (t.loop)
        $ > t.data.length ? (S.value = !0, w.value = 0, setTimeout(() => {
          S.value = !1;
        }, 50)) : w.value = $;
      else if ($ < t.data.length)
        w.value = $;
      else {
        Q();
        return;
      }
      const M = 1e3 / (60 * v.value);
      h.value = window.setTimeout(() => {
        window.requestAnimationFrame(N);
      }, M);
    }, U = () => {
      h.value || t.data.length === 0 || N();
    }, Q = () => {
      h.value && (clearTimeout(h.value), h.value = null), c.value = !1;
    }, C = () => {
      f.value = !f.value, f.value ? (Q(), o("scroll-pause")) : (U(), o("scroll-resume"));
    }, x = ($) => {
      const M = $.target;
      v.value = parseFloat(M.value), f.value || (Q(), U());
    }, E = () => {
      t.pauseOnHover && !f.value && (f.value = !0, Q());
    }, A = () => {
      t.pauseOnHover && f.value && t.autoScroll && (f.value = !1, U());
    }, W = () => {
      f.value || (f.value = !0, d.value = !0, Q());
    }, H = () => {
      d.value && (f.value = !1, d.value = !1, t.autoScroll && U());
    };
    return ne(() => t.data.length, ($, M) => {
      $ !== M && (w.value = 0, t.autoScroll && !f.value && (Q(), U()));
    }), ae(() => {
      const $ = () => {
        w.value = Math.min(w.value, t.data.length - 1);
      };
      window.addEventListener("resize", $), window.__cyberInfiniteTableResizeHandler = $, t.autoScroll && U();
    }), oe(() => {
      Q();
      const $ = window.__cyberInfiniteTableResizeHandler;
      $ && (window.removeEventListener("resize", $), delete window.__cyberInfiniteTableResizeHandler);
    }), ($, M) => (s(), n("div", {
      class: z(["cp-infinite-table", { loading: e.loading }])
    }, [
      l("div", {
        class: "table-header",
        ref_key: "headerRef",
        ref: u
      }, [
        l("table", null, [
          l("colgroup", null, [
            (s(!0), n(ee, null, te(e.columns, (B, Y) => (s(), n("col", {
              key: `col-${Y}`,
              style: G(P(B))
            }, null, 4))), 128))
          ]),
          l("thead", null, [
            l("tr", null, [
              (s(!0), n(ee, null, te(e.columns, (B, Y) => (s(), n("th", {
                key: `header-${Y}`,
                class: z({ sortable: B.sortable }),
                onClick: (le) => D(B)
              }, [
                l("div", Xt, [
                  l("span", null, q(B.title), 1),
                  B.sortable ? (s(), n("span", Kt, [
                    l("span", {
                      class: z(["sort-up", { active: m.value.key === B.key && m.value.order === "asc" }])
                    }, "▲", 2),
                    l("span", {
                      class: z(["sort-down", { active: m.value.key === B.key && m.value.order === "desc" }])
                    }, "▼", 2)
                  ])) : L("", !0)
                ])
              ], 10, jt))), 128))
            ])
          ])
        ])
      ], 512),
      l("div", {
        class: "table-body",
        ref_key: "bodyRef",
        ref: i,
        onMouseenter: E,
        onMouseleave: A,
        onTouchstart: W,
        onTouchend: H
      }, [
        l("div", {
          class: "scroll-container",
          style: G({ height: `${I.value}px` })
        }, [
          l("table", {
            style: G({ transform: `translateY(${k.value}px)`, transition: c.value ? "transform 0.3s ease-out" : "none" })
          }, [
            l("colgroup", null, [
              (s(!0), n(ee, null, te(e.columns, (B, Y) => (s(), n("col", {
                key: `col-${Y}`,
                style: G(P(B))
              }, null, 4))), 128))
            ]),
            l("tbody", null, [
              e.loop && e.data.length > 0 ? (s(), n("tr", {
                key: "clone-first",
                class: "clone-row",
                style: G({ height: `${e.rowHeight}px` })
              }, [
                (s(!0), n(ee, null, te(e.columns, (B, Y) => (s(), n("td", { key: Y }, q(y(e.data[e.data.length - 1], B)), 1))), 128))
              ], 4)) : L("", !0),
              (s(!0), n(ee, null, te(p.value, (B, Y, le, se) => {
                const ce = [B, m.value];
                if (se && se.key === `row-${T(Y)}` && Ie(se, ce)) return se;
                const ue = (s(), n("tr", {
                  key: `row-${T(Y)}`,
                  class: z({ selected: _(B) }),
                  style: G({ height: `${e.rowHeight}px` }),
                  onClick: (ie) => V(B)
                }, [
                  (s(!0), n(ee, null, te(e.columns, (ie, fe) => (s(), n("td", {
                    key: `cell-${Y}-${fe}`
                  }, [
                    Z($.$slots, `cell-${ie.key}`, {
                      row: B,
                      column: ie,
                      index: T(Y)
                    }, () => [
                      ge(q(y(B, ie)), 1)
                    ], !0)
                  ]))), 128))
                ], 14, ["onClick"]));
                return ue.memo = ce, ue;
              }, M, 0), 128)),
              e.loop && e.data.length > 0 ? (s(), n("tr", {
                key: "clone-last",
                class: "clone-row",
                style: G({ height: `${e.rowHeight}px` })
              }, [
                (s(!0), n(ee, null, te(e.columns, (B, Y) => (s(), n("td", { key: Y }, q(y(e.data[0], B)), 1))), 128))
              ], 4)) : L("", !0)
            ])
          ], 4)
        ], 4),
        e.loading ? (s(), n("div", Ut, [...M[3] || (M[3] = [
          l("div", { class: "loading-spinner" }, [
            l("div", { class: "spinner-circle" }),
            l("div", { class: "spinner-text" }, "加载中...")
          ], -1)
        ])])) : L("", !0),
        !e.loading && (!e.data || e.data.length === 0) ? (s(), n("div", Qt, [
          Z($.$slots, "empty", {}, () => [
            M[4] || (M[4] = l("div", { class: "empty-content" }, [
              l("div", { class: "empty-icon" }, "⚠"),
              l("div", { class: "empty-text" }, "暂无数据")
            ], -1))
          ], !0)
        ])) : L("", !0)
      ], 544),
      e.showControls ? (s(), n("div", Zt, [
        l("div", {
          class: "control-button",
          onClick: C
        }, [
          f.value ? (s(), n("span", Jt, "▶")) : (s(), n("span", ea, "⏸"))
        ]),
        l("div", ta, [
          M[5] || (M[5] = l("span", null, "速度:", -1)),
          he(l("input", {
            type: "range",
            min: "0.5",
            max: "5",
            step: "0.5",
            "onUpdate:modelValue": M[2] || (M[2] = (B) => v.value = B),
            onInput: x
          }, null, 544), [
            [Me, v.value]
          ])
        ])
      ])) : L("", !0),
      $.$slots.footer ? (s(), n("div", aa, [
        Z($.$slots, "footer", {}, void 0, !0)
      ])) : L("", !0),
      M[6] || (M[6] = l("div", { class: "table-scanline" }, null, -1)),
      M[7] || (M[7] = l("div", { class: "table-glitch-effect" }, null, -1))
    ], 2));
  }
}), sa = /* @__PURE__ */ J(la, [["__scopeId", "data-v-f10c1bd1"]]), na = X(sa), oa = /* @__PURE__ */ j({
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
    const t = e, o = O(() => {
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
    }), u = O(() => {
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
    return (i, c) => (s(), n("div", {
      class: z(["cp-button-neno", u.value])
    }, [
      l("div", {
        class: z(["button", o.value, t.bg ? "show-bg" : ""])
      }, [
        c[0] || (c[0] = l("div", { class: "border" }, null, -1)),
        c[1] || (c[1] = l("div", { class: "border" }, null, -1)),
        c[2] || (c[2] = l("div", { class: "border" }, null, -1)),
        c[3] || (c[3] = l("div", { class: "border" }, null, -1)),
        Z(i.$slots, "default", {}, void 0, !0)
      ], 2)
    ], 2));
  }
}), ra = /* @__PURE__ */ J(oa, [["__scopeId", "data-v-c8c24548"]]), ia = X(ra), ca = ["aria-checked", "aria-disabled"], ua = { class: "toggle-thumb" }, da = {
  key: 0,
  class: "pulse-effect"
}, fa = /* @__PURE__ */ j({
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
    pe((f) => ({
      v2ad8abbc: t.inActiveColor,
      v247239f2: t.activeColor
    }));
    const t = e, o = a, u = O(() => {
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
    }), i = O(() => {
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
    }), c = () => {
      if (t.disabled) return;
      const f = !t.modelValue;
      o("update:modelValue", f), o("change", f);
    };
    return (f, d) => (s(), n("div", {
      class: z(["cp-neon-toggle", i.value, u.value, { active: e.modelValue, disabled: e.disabled }]),
      onClick: c,
      "aria-checked": e.modelValue,
      role: "switch",
      "aria-disabled": e.disabled
    }, [
      d[0] || (d[0] = l("div", { class: "toggle-track" }, [
        l("div", { class: "toggle-track-inner" }),
        l("div", { class: "circuit-lines" })
      ], -1)),
      l("div", ua, [
        e.pulseEffect && e.modelValue ? (s(), n("div", da)) : L("", !0)
      ])
    ], 10, ca));
  }
}), va = /* @__PURE__ */ J(fa, [["__scopeId", "data-v-799d9482"]]), ha = X(va), ga = /* @__PURE__ */ j({
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
    const t = e, o = O(() => {
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
    }), u = O(() => {
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
    return (i, c) => (s(), n("div", {
      class: z(["cp-button-neno", u.value])
    }, [
      l("div", {
        class: z(["button", o.value, t.bg ? "show-bg" : ""])
      }, [
        Z(i.$slots, "default", {}, void 0, !0)
      ], 2)
    ], 2));
  }
}), pa = /* @__PURE__ */ J(ga, [["__scopeId", "data-v-f4ab33ea"]]), ma = X(pa), ya = ["data-word"], ba = /* @__PURE__ */ j({
  name: "CyberText",
  __name: "text",
  props: {
    lineColor: {
      type: String,
      default: "#fff"
    }
  },
  setup(e) {
    const a = b(""), t = re();
    if (t && t.default) {
      let u = t.default();
      a.value = u[0].children;
    }
    const o = e;
    return (u, i) => (s(), n("div", {
      class: "cp-text",
      "data-word": a.value
    }, [
      Z(u.$slots, "default", {}, void 0, !0),
      l("div", {
        class: "cp-text-line",
        style: G("background: " + o.lineColor)
      }, null, 4)
    ], 8, ya));
  }
}), wa = /* @__PURE__ */ J(ba, [["__scopeId", "data-v-3aa7f29f"]]), $a = X(wa), xa = /* @__PURE__ */ j({
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
      let c = `0px 0px ${u}`;
      for (let f = 1; f <= a.long; f++) {
        const d = o(u, f);
        c += `, ${i === "left" ? "-" : ""}${f}px ${f}px ${d}`;
      }
      return c;
    }, o = (u, i) => {
      const c = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i.exec(u), f = /^rgba?\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})(,\s*([\d.]+))?\)$/i.exec(u);
      if (c) {
        const d = parseInt(c[1], 16), v = parseInt(c[2], 16), h = parseInt(c[3], 16), w = c[4] ? parseInt(c[4], 16) / 255 : 1, S = Math.max(0, w - i * 0.05);
        return `rgba(${d}, ${v}, ${h}, ${S})`;
      } else if (f) {
        const d = parseInt(f[1], 10), v = parseInt(f[2], 10), h = parseInt(f[3], 10), w = f[5] ? parseFloat(f[5]) : 1, S = Math.max(0, w - i * 0.05);
        return `rgba(${d}, ${v}, ${h}, ${S})`;
      } else
        throw new Error(`Unsupported color format: ${u}`);
    };
    return (u, i) => (s(), n("div", {
      class: z(["shadow-text", a.direction]),
      style: G({ textShadow: t(a.shadowColor, a.direction) })
    }, [
      Z(u.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), _a = /* @__PURE__ */ J(xa, [["__scopeId", "data-v-baec179b"]]), ka = X(_a), Ca = { class: "cp-typing" }, Sa = { class: "content" }, Ia = /* @__PURE__ */ j({
  name: "CyberTyping",
  __name: "typing",
  setup(e) {
    return (a, t) => (s(), n("div", Ca, [
      l("div", Sa, [
        Z(a.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), Ma = /* @__PURE__ */ J(Ia, [["__scopeId", "data-v-c43f79f6"]]), Ta = X(Ma), Ea = ["aria-label", "aria-busy"], Na = ["src", "alt", "loading", "crossorigin"], za = {
  key: 1,
  class: "placeholder"
}, Ra = ["src"], Ba = {
  key: 2,
  class: "error"
}, La = /* @__PURE__ */ j({
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
    const a = e, t = b(!1), o = b(!1), u = b(a.src), i = O(
      () => typeof a.width == "number" ? `${a.width}px` : a.width
    ), c = O(
      () => typeof a.height == "number" ? `${a.height}px` : a.height
    ), f = O(() => o.value && a.errorSrc ? `url(${a.errorSrc}) no-repeat` : `url(${u.value}) no-repeat`), d = () => {
      if (!a.src) return;
      t.value = !1, o.value = !1;
      const h = new Image();
      a.crossorigin && (h.crossOrigin = a.crossorigin), h.src = a.src, h.onload = () => {
        u.value = a.src, t.value = !0;
      }, h.onerror = () => {
        if (o.value = !0, a.errorSrc && a.errorSrc !== a.src) {
          u.value = a.errorSrc;
          const w = new Image();
          w.src = a.errorSrc, w.onload = () => t.value = !0;
        } else
          t.value = !0;
      };
    }, v = O(() => {
      switch (a.fit) {
        case "fill":
          return "100% 100%";
        case "scale-down":
          return "contain";
        default:
          return a.fit;
      }
    });
    return ne(() => a.src, d), ae(d), (h, w) => (s(), n("div", null, [
      l("div", {
        class: "imgbox",
        style: G({ width: i.value, height: c.value }),
        role: "img",
        "aria-label": e.alt || void 0,
        "aria-busy": !t.value && !o.value
      }, [
        e.src ? (s(), n("img", {
          key: 0,
          src: e.src,
          alt: e.alt,
          loading: e.loading,
          crossorigin: e.crossorigin,
          class: "hidden-image"
        }, null, 8, Na)) : L("", !0),
        l("div", {
          class: z(["cyberimg", {
            loaded: t.value && !o.value,
            loading: !t.value && !o.value,
            error: o.value,
            "no-glitch": e.disableGlitch
          }]),
          style: G({
            background: f.value,
            backgroundSize: v.value
          })
        }, [
          t.value && !o.value ? Z(h.$slots, "default", { key: 0 }, void 0, !0) : !t.value && e.placeholder ? (s(), n("div", za, [
            Z(h.$slots, "placeholder", {}, () => [
              l("img", {
                src: e.placeholder,
                alt: "Loading..."
              }, null, 8, Ra)
            ], !0)
          ])) : o.value ? (s(), n("div", Ba, [
            Z(h.$slots, "error", {}, () => [
              ge(q(e.errorContent), 1)
            ], !0)
          ])) : L("", !0)
        ], 6)
      ], 12, Ea)
    ]));
  }
}), Oa = /* @__PURE__ */ J(La, [["__scopeId", "data-v-9a138aba"]]), Da = X(Oa), Ha = { class: "text-container" }, Aa = ["data-text"], Fa = /* @__PURE__ */ j({
  name: "CyberMagicText",
  __name: "magicText",
  setup(e) {
    const a = b(""), t = re();
    if (t && t.default) {
      let o = t.default();
      a.value = o[0].children;
    }
    return (o, u) => (s(), n("div", Ha, [
      l("span", {
        class: "gradient-text",
        "data-text": a.value
      }, [
        Z(o.$slots, "default")
      ], 8, Aa)
    ]));
  }
}), Ya = X(Fa), Pa = { class: "imgWrap" }, Ga = ["src"], Va = /* @__PURE__ */ j({
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
    const a = e, t = b(a.imgList.length), o = u(a.imgWidth, 360 / t.value) * 1.6;
    function u(c, f) {
      const d = f * Math.PI / 180;
      return c / (2 * Math.sin(d / 2));
    }
    const i = (c) => {
      const f = 35 + (c + 1) * (360 / t.value), d = u(a.imgWidth, 360 / t.value);
      return {
        transform: `rotateY(${f}deg) translateZ(${d}px)`
      };
    };
    return (c, f) => (s(), n("div", {
      class: "container",
      style: G({
        "--container-width": `${o}px`,
        "--img-width": `${a.imgWidth}px`,
        "--img-height": `${a.imgHeight}px`
      })
    }, [
      l("div", {
        class: z(["stage", { "has-shadow": a.shadow }])
      }, [
        l("div", {
          class: "control",
          style: G({
            "--animation-duration": `${a.animationDuration}s`
          })
        }, [
          l("div", Pa, [
            (s(!0), n(ee, null, te(a.imgList, (d, v) => (s(), n("div", {
              key: v,
              class: "img",
              style: G(i(v))
            }, [
              l("img", { src: d }, null, 8, Ga)
            ], 4))), 128))
          ])
        ], 4)
      ], 2)
    ], 4));
  }
}), Wa = /* @__PURE__ */ J(Va, [["__scopeId", "data-v-15a0847c"]]), qa = X(Wa), ja = /* @__PURE__ */ j({
  name: "CyberSelect",
  __name: "select",
  setup(e) {
    return (a, t) => (s(), n("div"));
  }
}), Xa = X(ja), Ka = { class: "node-connectors" }, Ua = ["onClick"], Qa = ["onClick"], Za = { class: "node-icon" }, Ja = { class: "node-label" }, el = { class: "label-text" }, tl = {
  key: 0,
  class: "label-underline"
}, al = {
  key: 0,
  class: "node-status"
}, ll = {
  key: 0,
  class: "tree-scanline"
}, sl = /* @__PURE__ */ j({
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
    const o = e, u = t, i = b([]), c = b([]), f = b(0), d = O(() => {
      const g = [], p = (_, V = 0, D) => {
        _.forEach((k, N) => {
          k._level = V, k._parent = D, k._expanded = k.expanded ?? (o.defaultExpandAll || V === 0), k._selected = k.selected ?? !1, k._isLastChild = N === _.length - 1, g.push(k), k._expanded && k.children && k.children.length > 0 && p(k.children, V + 1, k);
        });
      };
      return p(i.value), g;
    }), v = () => {
      const g = (p, _ = 0) => {
        const V = {
          ...p,
          _expanded: p.expanded ?? (o.defaultExpandAll || _ === 0),
          _selected: p.selected ?? !1,
          _level: _,
          _parent: void 0,
          _isLastChild: !1
        };
        return p.children && p.children.length > 0 && (V.children = p.children.map((D) => g(D, _ + 1))), V;
      };
      i.value = o.data.map((p) => g(p)), c.value = [];
    }, h = (g) => !g.children || g.children.length === 0, w = (g) => g._level ?? 0, S = (g) => w(g) * o.indent, m = (g, p) => g._isLastChild, I = (g, p) => {
      if (!o.showConnectors) return !0;
      let _ = g, V = w(g);
      for (; _ && V > p; )
        _ = _._parent, V--;
      return (_ == null ? void 0 : _._isLastChild) ?? !1;
    }, r = (g) => {
      g._expanded = !g._expanded, g.expanded = g._expanded, g._expanded ? u("node-expand", g) : u("node-collapse", g), K();
    }, T = (g) => {
      o.multiple ? (g._selected = !g._selected, g.selected = g._selected) : g._selected ? (g._selected = !1, g.selected = !1) : (c.value.forEach((p) => {
        p._selected = !1, p.selected = !1;
      }), g._selected = !0, g.selected = !0), y(), u("select-change", c.value), u("node-click", g), o.expandOnClick && !h(g) && r(g);
    }, y = () => {
      c.value = d.value.filter((g) => g._selected);
    }, P = (g) => g.icon ? g.icon : h(g) ? "icon-file" : g._expanded ? "icon-folder-open" : "icon-folder", K = () => {
      f.value++;
    };
    return ae(() => {
      v();
    }), ne(() => o.data, () => {
      v();
    }, { deep: !0 }), a({
      getSelectedNodes: () => c.value,
      clearSelection: () => {
        c.value.forEach((g) => {
          g._selected = !1, g.selected = !1;
        }), c.value = [], K();
      }
    }), (g, p) => (s(), n("div", {
      class: z(["cyber-tree", [`theme-${e.theme}`, `effect-${e.effect}`]])
    }, [
      (s(!0), n(ee, null, te(d.value, (_, V) => (s(), n("div", {
        key: `${_.id}-${_._expanded}-${f.value}`,
        class: z(["tree-node", { expanded: _._expanded, leaf: h(_), "last-child": m(_) }]),
        style: G({ paddingLeft: `${S(_)}px` })
      }, [
        l("div", Ka, [
          (s(!0), n(ee, null, te(w(_), (D) => (s(), n("div", {
            key: D,
            class: z(["vertical-line", { hidden: I(_, D) }]),
            style: G({ left: `${(D - 1) * e.indent + S(_)}px` })
          }, null, 6))), 128))
        ]),
        h(_) ? L("", !0) : (s(), n("div", {
          key: 0,
          class: "node-toggle",
          onClick: me((D) => r(_), ["stop"]),
          style: G({ left: `${S(_) - 20}px` })
        }, [
          l("div", {
            class: z(["toggle-icon", { rotated: _._expanded }])
          }, [...p[0] || (p[0] = [
            l("div", { class: "icon-line vertical" }, null, -1),
            l("div", { class: "icon-line horizontal" }, null, -1)
          ])], 2)
        ], 12, Ua)),
        l("div", {
          class: "node-content-wrapper",
          onClick: me((D) => T(_), ["stop"])
        }, [
          l("div", {
            class: z(["node-content", { selected: _._selected }])
          }, [
            l("div", Za, [
              p[1] || (p[1] = l("div", { class: "icon-glow" }, null, -1)),
              l("div", {
                class: z(["icon-core", P(_)])
              }, null, 2)
            ]),
            l("div", Ja, [
              l("span", el, q(_.label), 1),
              _._selected ? (s(), n("div", tl)) : L("", !0)
            ]),
            e.showStatus && _.status ? (s(), n("div", al, [
              l("div", {
                class: z(["status-indicator", `status-${_.status}`])
              }, null, 2)
            ])) : L("", !0)
          ], 2)
        ], 8, Qa),
        w(_) > 0 ? (s(), n("div", {
          key: 1,
          class: "horizontal-connector",
          style: G({ left: `${(w(_) - 1) * e.indent + S(_) - 12}px` })
        }, null, 4)) : L("", !0)
      ], 6))), 128)),
      e.showScanline ? (s(), n("div", ll)) : L("", !0)
    ], 2));
  }
}), nl = /* @__PURE__ */ J(sl, [["__scopeId", "data-v-da973d56"]]), ol = X(nl), rl = [
  Be,
  We,
  Ue,
  rt,
  yt,
  kt,
  Bt,
  qt,
  na,
  ha,
  ia,
  ma,
  $a,
  ka,
  Mt,
  Ta,
  ft,
  Da,
  Ya,
  Xa,
  ol,
  qa
], il = Te([...rl]);
console.log(
  "%c %s",
  "border: 1px solid #97E3FE;border-radius: 3px;padding: 2px 5px;color: white;font-weight:bolder;background: linear-gradient(to right, #fF717F,#CC54D1,#4EAFFA,#3DE1C3, #F7DA66)",
  "CyberPunk-UI"
);
const ul = il.install;
export {
  il as default,
  ul as install,
  Te as makeInstaller
};
