import { defineComponent as F, useSlots as ne, computed as E, createElementBlock as d, openBlock as c, normalizeClass as T, createElementVNode as n, renderSlot as X, unref as de, toDisplayString as P, ref as w, onUnmounted as ee, createBlock as se, Teleport as oe, createCommentVNode as Y, createVNode as fe, TransitionGroup as ve, withCtx as he, Fragment as K, renderList as j, normalizeStyle as W, watch as Z, nextTick as le, onMounted as te, withDirectives as ge, createTextVNode as re, vShow as pe, watchEffect as me, createStaticVNode as ye, useCssVars as be } from "vue";
const we = (e = []) => ({
  install: (t) => {
    e.forEach((f) => t.use(f));
  }
}), V = (e, a) => (e.install = (t) => {
  for (const f of [e, ...Object.values({})])
    t.component(f.name, f);
}, e), $e = ["data-content"], xe = { key: 1 }, ke = /* @__PURE__ */ F({
  name: "CpButton",
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
    const t = ne(), f = e, r = E(() => {
      switch (f.type) {
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
    }), l = E(() => {
      switch (f.size) {
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
    return (i, g) => (c(), d("div", {
      class: T(["cp-button", l.value])
    }, [
      n("div", {
        class: T(["button", r.value]),
        "data-content": f.content
      }, [
        de(t) ? X(i.$slots, "default", { key: 0 }, void 0, !0) : (c(), d("span", xe, P(f.content), 1))
      ], 10, $e)
    ], 2));
  }
}), G = (e, a) => {
  const t = e.__vccOpts || e;
  for (const [f, r] of a)
    t[f] = r;
  return t;
}, _e = /* @__PURE__ */ G(ke, [["__scopeId", "data-v-d46d992d"]]), Ce = V(_e), Se = { class: "notification-content" }, Ie = {
  key: 0,
  class: "notification-icon"
}, Me = { class: "notification-body" }, Te = {
  key: 0,
  class: "notification-title"
}, Ne = { class: "notification-message" }, Ee = {
  key: 1,
  class: "notification-actions"
}, ze = ["onClick"], De = ["onClick"], Le = /* @__PURE__ */ F({
  name: "CpCyberNotification",
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
    const f = e, r = t, l = w([]), i = w(!1);
    let g = 0;
    const o = (b) => {
      const S = ++g, x = {
        id: S,
        title: b.title || "",
        message: b.message,
        type: b.type || "info",
        duration: b.duration !== void 0 ? b.duration : f.duration,
        showClose: b.showClose !== void 0 ? b.showClose : !0,
        showIcon: b.showIcon !== void 0 ? b.showIcon : !0,
        actions: b.actions || [],
        effect: b.effect || f.effect,
        onClose: b.onClose || (() => {
        })
      };
      if (l.value.push(x), i.value = !0, x.duration > 0 && setTimeout(() => {
        v(S);
      }, x.duration), l.value.length > f.maxCount) {
        const $ = l.value[0];
        v($.id);
      }
      return S;
    }, v = (b) => {
      const S = l.value.findIndex((x) => x.id === b);
      if (S !== -1) {
        const x = l.value[S];
        x.onClose && x.onClose(), l.value.splice(S, 1), r("close", b);
      }
    }, p = (b, S) => {
      S.callback && S.callback(), v(b.id);
    }, _ = () => {
      l.value.length === 0 && (i.value = !1);
    }, M = () => {
      l.value.forEach((b) => {
        b.onClose && b.onClose();
      }), l.value = [], i.value = !1;
    };
    return a({
      // 创建不同类型的通知
      info: (b) => o({ ...b, type: "info" }),
      success: (b) => o({ ...b, type: "success" }),
      warning: (b) => o({ ...b, type: "warning" }),
      error: (b) => o({ ...b, type: "error" }),
      // 通用创建方法
      create: o,
      // 关闭方法
      close: v,
      // 清除所有
      clearAll: M
    }), ee(() => {
      M();
    }), (b, S) => (c(), se(oe, { to: "body" }, [
      i.value ? (c(), d("div", {
        key: 0,
        class: T(["cp-cyber-notification-container", `position-${e.position}`])
      }, [
        fe(ve, {
          name: "notification",
          tag: "div",
          onAfterLeave: _
        }, {
          default: he(() => [
            (c(!0), d(K, null, j(l.value, (x) => (c(), d("div", {
              key: x.id,
              class: T(["cp-cyber-notification", `type-${x.type}`, `effect-${x.effect}`])
            }, [
              n("div", Se, [
                x.showIcon ? (c(), d("div", Ie, S[0] || (S[0] = [
                  n("div", { class: "icon-circle" }, null, -1),
                  n("div", { class: "icon-symbol" }, null, -1)
                ]))) : Y("", !0),
                n("div", Me, [
                  x.title ? (c(), d("div", Te, P(x.title), 1)) : Y("", !0),
                  n("div", Ne, P(x.message), 1),
                  x.actions && x.actions.length ? (c(), d("div", Ee, [
                    (c(!0), d(K, null, j(x.actions, ($, k) => (c(), d("button", {
                      key: k,
                      class: "action-button",
                      onClick: (z) => p(x, $)
                    }, P($.text), 9, ze))), 128))
                  ])) : Y("", !0)
                ]),
                x.showClose ? (c(), d("div", {
                  key: 1,
                  class: "notification-close",
                  onClick: ($) => v(x.id)
                }, S[1] || (S[1] = [
                  n("span", { class: "close-icon" }, "×", -1)
                ]), 8, De)) : Y("", !0)
              ]),
              x.duration > 0 ? (c(), d("div", {
                key: 0,
                class: "notification-progress",
                style: W({ animationDuration: `${x.duration}ms` })
              }, null, 4)) : Y("", !0),
              S[2] || (S[2] = n("div", { class: "notification-glitch-effect" }, null, -1)),
              S[3] || (S[3] = n("div", { class: "notification-hologram-effect" }, null, -1))
            ], 2))), 128))
          ]),
          _: 1
        })
      ], 2)) : Y("", !0)
    ]));
  }
}), Re = /* @__PURE__ */ G(Le, [["__scopeId", "data-v-04ca6ac3"]]), Be = V(Re), Oe = { class: "tooltip-inner" }, Ye = { class: "tooltip-content" }, He = /* @__PURE__ */ F({
  name: "CpCyberTooltip",
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
    const t = e, f = a, r = w(!1), l = w(null), i = w(null), g = w(null), o = w(t.position), v = w({}), p = E(() => typeof t.width == "number" ? `${t.width}px` : t.width), _ = () => {
      g.value && clearTimeout(g.value), g.value = window.setTimeout(() => {
        r.value = !0, le(() => {
          b(), f("show");
        });
      }, t.delay);
    }, M = () => {
      g.value && clearTimeout(g.value), g.value = window.setTimeout(() => {
        r.value = !1, f("hide");
      }, 100);
    }, b = () => {
      if (!l.value || !i.value) return;
      const h = l.value.getBoundingClientRect(), I = i.value.getBoundingClientRect(), A = document.documentElement.scrollTop || document.body.scrollTop, m = document.documentElement.scrollLeft || document.body.scrollLeft, C = window.innerWidth, u = window.innerHeight;
      if (t.position === "auto") {
        const O = h.top, N = u - h.bottom, q = h.left, L = C - h.right, H = Math.max(O, L, N, q);
        H === O ? o.value = "top" : H === L ? o.value = "right" : H === N ? o.value = "bottom" : o.value = "left";
      } else
        o.value = t.position;
      let s = 0, y = 0;
      switch (o.value) {
        case "top":
          s = h.left + h.width / 2 - I.width / 2 + m, y = h.top - I.height - 10 + A;
          break;
        case "right":
          s = h.right + 10 + m, y = h.top + h.height / 2 - I.height / 2 + A;
          break;
        case "bottom":
          s = h.left + h.width / 2 - I.width / 2 + m, y = h.bottom + 10 + A;
          break;
        case "left":
          s = h.left - I.width - 10 + m, y = h.top + h.height / 2 - I.height / 2 + A;
          break;
      }
      s < 0 ? s = 10 : s + I.width > C && (s = C - I.width - 10), y < 0 ? y = 10 : y + I.height > u + A && (y = u + A - I.height - 10), v.value = {
        left: `${s}px`,
        top: `${y}px`,
        width: p.value
      };
    }, S = () => {
      t.trigger === "hover" && _();
    }, x = () => {
      t.trigger === "hover" && M();
    }, $ = () => {
      t.trigger === "click" && (r.value ? M() : _());
    }, k = () => {
      t.trigger === "focus" && _();
    }, z = () => {
      t.trigger === "focus" && M();
    }, D = () => {
      r.value && b();
    }, B = () => {
      r.value && b();
    };
    return Z(() => t.position, () => {
      r.value && le(b);
    }), te(() => {
      window.addEventListener("resize", D), window.addEventListener("scroll", B), document.addEventListener("click", (h) => {
        if (r.value && t.trigger === "click") {
          const I = h.target;
          i.value && !i.value.contains(I) && l.value && !l.value.contains(I) && M();
        }
      });
    }), ee(() => {
      window.removeEventListener("resize", D), window.removeEventListener("scroll", B), g.value && clearTimeout(g.value);
    }), (h, I) => (c(), d("div", null, [
      n("div", {
        ref_key: "triggerRef",
        ref: l,
        class: "tooltip-trigger",
        onMouseenter: S,
        onMouseleave: x,
        onClick: $,
        onFocus: k,
        onBlur: z
      }, [
        X(h.$slots, "default", {}, void 0, !0)
      ], 544),
      (c(), se(oe, { to: "body" }, [
        ge(n("div", {
          ref_key: "tooltipRef",
          ref: i,
          class: T(["cp-cyber-tooltip", `theme-${e.theme}`, `effect-${e.effect}`, `position-${o.value}`]),
          style: W(v.value)
        }, [
          I[2] || (I[2] = n("div", { class: "tooltip-arrow" }, null, -1)),
          n("div", Oe, [
            n("div", Ye, [
              X(h.$slots, "content", {}, () => [
                re(P(e.content), 1)
              ], !0)
            ]),
            I[0] || (I[0] = n("div", { class: "tooltip-scanline" }, null, -1)),
            I[1] || (I[1] = n("div", { class: "tooltip-glitch" }, null, -1))
          ])
        ], 6), [
          [pe, r.value]
        ])
      ]))
    ]));
  }
}), Fe = /* @__PURE__ */ G(He, [["__scopeId", "data-v-beacee69"]]), Ve = V(Fe), Ge = {
  key: 0,
  class: "prefix"
}, Pe = { class: "counter-container" }, Ae = {
  key: 0,
  class: "separator"
}, qe = { class: "digit-top" }, Xe = { class: "digit-bottom" }, Ke = { class: "digit-top flip-top" }, je = { class: "digit-bottom flip-bottom" }, We = {
  key: 1,
  class: "suffix"
}, Ue = /* @__PURE__ */ F({
  name: "CpDigitalCounter",
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
    }
  },
  setup(e) {
    const a = e, t = w(Number(a.from)), f = w(Number(a.value)), r = w(null), l = w(null), i = w(""), g = ($) => {
      const k = Math.pow(10, a.decimal);
      let D = (Math.round($ * k) / k).toFixed(a.decimal);
      if (a.separator) {
        const B = D.split(".");
        B[0] = B[0].replace(/\B(?=(\d{3})+(?!\d))/g, a.separator), D = B.join(".");
      }
      return D;
    }, o = E(() => g(t.value)), v = E(() => o.value.split("")), p = ($) => $ === a.separator || $ === ".", _ = ($) => !i.value || $ >= i.value.length ? v.value[$] : i.value[$], M = ($) => !i.value || $ >= i.value.length ? !1 : i.value[$] !== v.value[$] && !p(v.value[$]), b = ($) => {
      r.value === null && (r.value = $);
      const k = $ - r.value, z = Math.min(k / a.duration, 1), D = Number(a.from), B = Number(a.to !== null ? a.to : f.value), h = D + (B - D) * S(z);
      t.value = h, z < 1 ? l.value = requestAnimationFrame(b) : (t.value = B, r.value = null);
    }, S = ($) => 1 - Math.pow(1 - $, 4), x = () => {
      i.value = o.value, l.value !== null && cancelAnimationFrame(l.value), r.value = null, l.value = requestAnimationFrame(b);
    };
    return Z(() => a.value, ($) => {
      f.value = Number($), x();
    }), Z(() => a.to, ($) => {
      $ !== null && (f.value = Number($), x());
    }), te(() => {
      Number(a.from) !== Number(a.value) && x();
    }), ee(() => {
      l.value !== null && cancelAnimationFrame(l.value);
    }), ($, k) => (c(), d("div", {
      class: T(["cp-digital-counter", `theme-${e.theme}`])
    }, [
      e.prefix ? (c(), d("span", Ge, P(e.prefix), 1)) : Y("", !0),
      n("div", Pe, [
        (c(!0), d(K, null, j(v.value, (z, D) => (c(), d("div", {
          key: D,
          class: "digit-container"
        }, [
          p(z) ? (c(), d("div", Ae, P(z), 1)) : (c(), d("div", {
            key: 1,
            class: T(["digit-flipper", { animate: M(D) }])
          }, [
            n("div", qe, P(z), 1),
            n("div", Xe, P(z), 1),
            n("div", Ke, P(_(D)), 1),
            n("div", je, P(z), 1)
          ], 2))
        ]))), 128))
      ]),
      e.suffix ? (c(), d("span", We, P(e.suffix), 1)) : Y("", !0)
    ], 2));
  }
}), Qe = /* @__PURE__ */ G(Ue, [["__scopeId", "data-v-13db26c5"]]), Je = V(Qe), Ze = {
  class: "cp-full-page",
  id: "page-scroll"
}, et = ["onClick"], tt = /* @__PURE__ */ F({
  name: "CpFullPage",
  __name: "fullPage",
  props: ["pageNum", "position"],
  emits: ["toNext", "toLast", "change"],
  setup(e, { emit: a }) {
    const t = e, f = a, r = w();
    me(() => {
      var h;
      (h = r.value) != null && h.style && (console.log("watch", i.value), r.value.style.transform = i.value);
    });
    const l = E(() => {
      var I, A;
      g.value = !0;
      let h = 0;
      return (I = document.getElementById("page-scroll")) != null && I.clientHeight ? h = ((A = document.getElementById("page-scroll")) == null ? void 0 : A.clientHeight) ?? 0 : h = window.innerHeight, h;
    }), i = E(() => (console.log(k.value, l.value), `translateY(-${k.value * l.value}px)`)), g = w(!1), o = w(!0);
    function v(h) {
      g.value = !1, o.value && (o.value = !1, $(h), setTimeout(() => {
        o.value = !0;
      }, 500));
    }
    const p = w(0), _ = w(0), M = w(0);
    function b(h) {
      p.value = h.touches[0].pageY || h.changedTouches[0].pageY;
    }
    function S(h) {
      h.preventDefault(), g.value = !1, _.value = h.changedTouches[0].pageY || h.touches[0].pageY, M.value = _.value - p.value, Math.abs(M.value) >= 60 ? (k.value < t.pageNum - 1 && M.value < 0 && k.value++, k.value > 0 && M.value > 0 && k.value--) : (console.log("else", -k.value * l.value), r.value.style.transform = `translateY(-${k.value * l.value}px)`);
    }
    function x(h) {
      g.value = !0, h.preventDefault(), M.value = (h.changedTouches[0].pageY || h.touches[0].pageY) - p.value, !(k.value === t.pageNum - 1 && M.value < 0 || k.value === 0 && M.value > 0) && (console.log("else", -k.value * l.value + M.value * -1), r.value.style.transform = `translateY(-${k.value * l.value + M.value * -1}px)`);
    }
    function $(h) {
      f("change", h.wheelDelta), h.wheelDelta < 0 ? z() : D();
    }
    const k = w(0);
    function z() {
      k.value < t.pageNum - 1 && (k.value++, f("toNext", k.value));
    }
    function D() {
      (k.value > 1 || k.value === 1) && (k.value--, f("toLast", k.value));
    }
    function B(h) {
      console.log(h), g.value = !1, k.value = h;
    }
    return (h, I) => (c(), d("div", Ze, [
      n("div", {
        ref_key: "element",
        ref: r,
        class: T([{ activeTranstion: g.value }, "inner-box"]),
        onMousewheel: v,
        onTouchstart: b,
        onTouchend: S,
        onTouchmove: x
      }, [
        X(h.$slots, "default", {}, void 0, !0)
      ], 34),
      n("div", {
        class: T(["cp-full-dot", t.position])
      }, [
        (c(!0), d(K, null, j(t.pageNum, (A, m) => (c(), d("div", {
          onClick: (C) => B(m),
          class: "cp-full-dot-item"
        }, [
          n("div", {
            class: T(["cp-full-dot-item-bg", { active: m === k.value }])
          }, null, 2),
          X(h.$slots, "dot", {}, void 0, !0)
        ], 8, et))), 256))
      ], 2)
    ]));
  }
}), at = /* @__PURE__ */ G(tt, [["__scopeId", "data-v-17ff55ac"]]), nt = V(at), lt = ["src", "alt"], st = {
  key: 1,
  class: "loading-placeholder"
}, ot = /* @__PURE__ */ F({
  name: "CpGlitchImage",
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
    const t = e, f = a, r = w(null), l = w(null), i = w(!1), g = w(!1), o = w(null), v = w(null), p = E(() => t.intensity / 10), _ = () => {
      i.value = !0, setTimeout(() => {
        M(), t.triggerMode === "auto" ? B() : t.triggerMode === "random" && h();
      }, 0);
    }, M = () => {
      if (!l.value || !r.value) return;
      const u = r.value.querySelector("img");
      if (!u) return;
      const s = l.value, y = s.getContext("2d");
      y && (s.width = u.naturalWidth, s.height = u.naturalHeight, y.drawImage(u, 0, 0), v.value = y.getImageData(0, 0, s.width, s.height));
    }, b = (u, s) => {
      if (!v.value) return;
      const y = u.canvas, O = u.getImageData(0, 0, y.width, y.height), N = O.data, q = v.value.data, L = Math.floor(Math.random() * 10 * s), H = Math.floor(Math.random() * 10 * s);
      for (let Q = 0; Q < y.height; Q++)
        for (let U = 0; U < y.width; U++) {
          const R = (Q * y.width + U) * 4, J = Math.min(Math.max(U + L, 0), y.width - 1), ie = (Q * y.width + J) * 4;
          N[R] = q[ie], N[R + 1] = q[R + 1];
          const ce = Math.min(Math.max(U - L, 0), y.width - 1), ue = (Math.min(Math.max(Q + H, 0), y.height - 1) * y.width + ce) * 4;
          N[R + 2] = q[ue + 2], N[R + 3] = q[R + 3];
        }
      u.putImageData(O, 0, 0);
    }, S = (u, s) => {
      if (!v.value) return;
      const y = u.canvas, O = u.getImageData(0, 0, y.width, y.height), N = O.data, q = Math.max(2, Math.floor(10 / s)), L = 0.3 + s * 0.07;
      for (let H = 0; H < y.height; H++)
        if (H % q === 0)
          for (let U = 0; U < y.width; U++) {
            const R = (H * y.width + U) * 4;
            N[R] = Math.min(255, N[R] * (1 + L)), N[R + 1] = Math.min(255, N[R + 1] * (1 + L)), N[R + 2] = Math.min(255, N[R + 2] * (1 + L));
          }
      u.putImageData(O, 0, 0);
    }, x = (u, s) => {
      if (!v.value) return;
      const y = u.canvas;
      u.putImageData(v.value, 0, 0);
      const O = Math.max(2, Math.floor(s * 3)), N = Math.floor(s * 2);
      for (let q = 0; q < N; q++) {
        const L = Math.floor(Math.random() * y.width), H = Math.floor(Math.random() * y.height), Q = Math.floor(Math.random() * 50 * s) + 20, U = Math.floor(Math.random() * 30 * s) + 10;
        for (let R = H; R < H + U; R += O)
          for (let J = L; J < L + Q; J += O)
            if (J >= 0 && J < y.width && R >= 0 && R < y.height) {
              const ae = u.getImageData(J, R, 1, 1).data;
              u.fillStyle = `rgba(${ae[0]}, ${ae[1]}, ${ae[2]}, ${ae[3] / 255})`, u.fillRect(J, R, O, O);
            }
      }
    }, $ = (u, s) => {
      if (!v.value) return;
      const y = u.canvas, O = u.getImageData(0, 0, y.width, y.height), N = O.data, q = s * 30;
      for (let L = 0; L < N.length; L += 4)
        if (Math.random() < 0.1 * s) {
          const H = (Math.random() - 0.5) * q;
          N[L] = Math.min(255, Math.max(0, N[L] + H)), N[L + 1] = Math.min(255, Math.max(0, N[L + 1] + H)), N[L + 2] = Math.min(255, Math.max(0, N[L + 2] + H));
        }
      u.putImageData(O, 0, 0);
    }, k = (u, s) => {
      [...["rgb-shift", "scanline", "pixelate", "noise"]].sort(() => 0.5 - Math.random()).slice(0, 2 + Math.floor(Math.random() * 2)).forEach((q) => {
        switch (q) {
          case "rgb-shift":
            b(u, s * 0.8);
            break;
          case "scanline":
            S(u, s);
            break;
          case "pixelate":
            x(u, s * 0.7);
            break;
          case "noise":
            $(u, s * 0.9);
            break;
        }
      });
    }, z = () => {
      if (!l.value || !v.value) return;
      const s = l.value.getContext("2d");
      if (s) {
        switch (s.putImageData(v.value, 0, 0), t.glitchType) {
          case "rgb-shift":
            b(s, p.value);
            break;
          case "scanline":
            S(s, p.value);
            break;
          case "pixelate":
            x(s, p.value);
            break;
          case "noise":
            $(s, p.value);
            break;
          case "combined":
            k(s, p.value);
            break;
        }
        g.value = !0, f("glitch-start");
      }
    }, D = () => {
      if (!l.value || !v.value) return;
      const s = l.value.getContext("2d");
      s && (s.putImageData(v.value, 0, 0), g.value = !1, f("glitch-end"));
    }, B = () => {
      o.value && clearInterval(o.value), z(), t.animated && (o.value = window.setInterval(() => {
        z();
      }, t.interval));
    }, h = () => {
      o.value && clearInterval(o.value), o.value = window.setInterval(() => {
        Math.random() < 0.3 && (z(), setTimeout(() => {
          D();
        }, 300 + Math.random() * 700));
      }, t.interval);
    }, I = () => {
      o.value && (clearInterval(o.value), o.value = null), D();
    }, A = () => {
      t.triggerMode === "hover" && B();
    }, m = () => {
      t.triggerMode === "hover" && !t.animated && I();
    }, C = () => {
      t.triggerMode === "click" && (g.value && !t.animated ? I() : B());
    };
    return Z(() => [t.src, t.glitchType, t.intensity], () => {
      t.src && (i.value = !1), g.value && z();
    }), te(() => {
      var s;
      const u = (s = r.value) == null ? void 0 : s.querySelector("img");
      u && u.complete && _();
    }), ee(() => {
      o.value && clearInterval(o.value);
    }), (u, s) => (c(), d("div", {
      class: T(["cp-glitch-image", { animated: e.animated }]),
      onMouseenter: A,
      onMouseleave: m,
      onClick: C
    }, [
      n("div", {
        class: "image-container",
        ref_key: "imageContainerRef",
        ref: r
      }, [
        n("img", {
          src: e.src,
          alt: e.alt,
          class: "original-image",
          onLoad: _
        }, null, 40, lt),
        i.value ? (c(), d("canvas", {
          key: 0,
          ref_key: "glitchCanvasRef",
          ref: l,
          class: "glitch-canvas"
        }, null, 512)) : Y("", !0),
        i.value ? Y("", !0) : (c(), d("div", st, s[0] || (s[0] = [
          n("div", { class: "loading-text" }, "Loading...", -1)
        ])))
      ], 512)
    ], 34));
  }
}), rt = /* @__PURE__ */ G(ot, [["__scopeId", "data-v-aaaebb87"]]), it = V(rt), ct = ["data-progress"], ut = { class: "progress-container" }, dt = {
  key: 0,
  class: "progress-text"
}, ft = /* @__PURE__ */ F({
  name: "CpGlitchProgress",
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
      default: "#00e6f6"
    },
    showText: {
      type: Boolean,
      default: !0
    }
  },
  setup(e) {
    const a = e, t = w(null), f = w(null), r = E(() => a.direction === "vertical" ? "vertical" : "horizontal"), l = E(() => {
      const o = a.direction === "vertical" ? "height" : "width", v = a.indeterminate ? "100%" : `${a.progress}%`;
      return {
        [o]: v,
        backgroundColor: a.color,
        boxShadow: `0 0 ${a.glitchIntensity * 2}px ${a.color}`
      };
    }), i = () => {
      if (!t.value) return;
      const o = t.value.querySelector(".glitch-effect");
      if (!o) return;
      const v = () => {
        if (!o) return;
        if (Math.random() < a.glitchIntensity / 20) {
          const _ = Math.random() * a.glitchIntensity - a.glitchIntensity / 2, M = Math.random() * a.glitchIntensity - a.glitchIntensity / 2, b = Math.random() * a.glitchIntensity - a.glitchIntensity / 2, S = Math.random() * a.glitchIntensity / 2;
          o.style.transform = `translate(${_}px, ${M}px) skew(${b}deg)`, o.style.filter = `blur(${S}px)`, o.style.opacity = "1", setTimeout(() => {
            o && (o.style.transform = "translate(0, 0) skew(0)", o.style.filter = "blur(0)", o.style.opacity = "0");
          }, 150);
        }
      };
      f.value = window.setInterval(() => {
        v();
      }, 500);
    };
    let g = a.progress;
    return Z(() => a.progress, (o) => {
      if (o !== g) {
        if (t.value) {
          const v = t.value.querySelector(".glitch-effect");
          if (v) {
            const p = Math.random() * a.glitchIntensity * 2 - a.glitchIntensity, _ = Math.random() * a.glitchIntensity - a.glitchIntensity / 2;
            v.style.transform = `translate(${p}px, ${_}px)`, v.style.opacity = "1", setTimeout(() => {
              v && (v.style.transform = "translate(0, 0)", v.style.opacity = "0");
            }, 300);
          }
        }
        g = o;
      }
    }), te(() => {
      i();
    }), ee(() => {
      f.value && clearInterval(f.value);
    }), (o, v) => (c(), d("div", {
      class: T(["cp-glitch-progress", r.value, { indeterminate: e.indeterminate }]),
      "data-progress": e.progress
    }, [
      n("div", ut, [
        n("div", {
          class: "progress-bar",
          style: W(l.value),
          ref_key: "progressBarRef",
          ref: t
        }, v[0] || (v[0] = [
          n("div", { class: "glitch-effect" }, null, -1)
        ]), 4),
        e.showText && !e.indeterminate ? (c(), d("div", dt, P(e.progress) + "% ", 1)) : Y("", !0)
      ])
    ], 10, ct));
  }
}), vt = /* @__PURE__ */ G(ft, [["__scopeId", "data-v-6cf16c79"]]), ht = V(vt), gt = { class: "glow-text" }, pt = /* @__PURE__ */ F({
  name: "CpGlowText",
  __name: "glowText",
  props: {
    color: {
      type: String,
      default: "#e91e84"
    }
  },
  setup(e) {
    const a = e;
    return te(() => {
      document.documentElement.style.setProperty("--child-color", a.color);
    }), (t, f) => (c(), d("div", gt, [
      X(t.$slots, "default", {}, void 0, !0)
    ]));
  }
}), mt = /* @__PURE__ */ G(pt, [["__scopeId", "data-v-7fcfc9f8"]]), yt = V(mt), bt = { class: "holo-card-content" }, wt = /* @__PURE__ */ F({
  name: "CpHoloCard",
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
    }
  },
  setup(e) {
    ne();
    const a = e, t = w({ x: 0, y: 0 }), f = w(!1), r = (p) => {
      const _ = p.currentTarget.getBoundingClientRect();
      t.value = {
        x: (p.clientX - _.left) / _.width * 2 - 1,
        y: (p.clientY - _.top) / _.height * 2 - 1
      }, f.value = !0;
    }, l = () => {
      f.value = !1, t.value = { x: 0, y: 0 };
    }, i = E(() => {
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
    }), g = E(() => {
      if (!f.value) return {};
      const p = t.value.y * 10, _ = -t.value.x * 10;
      return {
        transform: `perspective(1000px) rotateX(${p}deg) rotateY(${_}deg) scale3d(1.05, 1.05, 1.05)`,
        transition: "transform 0.1s ease"
      };
    }), o = E(() => {
      if (!f.value) return {};
      const p = t.value.x * 10, _ = t.value.y * 10;
      return {
        background: `radial-gradient(circle at ${50 + p}% ${50 + _}%, ${a.hologramColor}33, transparent 70%)`,
        opacity: 0.8,
        transition: "background 0.1s ease"
      };
    }), v = E(() => {
      const p = a.glowIntensity / 100;
      return {
        boxShadow: `0 0 ${10 + a.glowIntensity / 5}px ${a.hologramColor}${Math.floor(p * 99).toString(16).padStart(2, "0")}`,
        opacity: f.value ? p : p * 0.5
      };
    });
    return (p, _) => (c(), d("div", {
      class: T(["cp-holo-card", `depth-${e.depth}`, i.value]),
      style: W(g.value),
      onMousemove: r,
      onMouseleave: l
    }, [
      n("div", bt, [
        X(p.$slots, "default", {}, void 0, !0)
      ]),
      n("div", {
        class: "holo-card-hologram-effect",
        style: W(o.value)
      }, null, 4),
      n("div", {
        class: "holo-card-glow",
        style: W(v.value)
      }, null, 4)
    ], 38));
  }
}), $t = /* @__PURE__ */ G(wt, [["__scopeId", "data-v-a585ad0e"]]), xt = V($t), kt = { class: "loader-container" }, _t = {
  key: 0,
  class: "cube-loader"
}, Ct = {
  key: 1,
  class: "sphere-loader"
}, St = { class: "sphere" }, It = {
  key: 2,
  class: "datastream-loader"
}, Mt = {
  key: 3,
  class: "circuit-loader"
}, Tt = { class: "circuit-board" }, Nt = {
  key: 0,
  class: "loader-text"
}, Et = { class: "typing-text" }, zt = /* @__PURE__ */ F({
  name: "CpHoloLoader",
  __name: "holoLoader",
  props: {
    type: {
      type: String,
      default: "cube",
      validator: (e) => ["cube", "sphere", "datastream", "circuit"].indexOf(e) !== -1
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
    }
  },
  setup(e) {
    const a = e, t = E(() => {
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
    }), f = w(""), r = w(0), l = w(null), i = () => {
      if (!a.text) return;
      r.value = 0, f.value = "";
      const g = () => {
        r.value < a.text.length ? (f.value += a.text[r.value], r.value++) : setTimeout(() => {
          r.value = 0, f.value = "";
        }, 1e3);
      }, o = 100 / a.speed;
      l.value = window.setInterval(g, o);
    };
    return Z(() => a.text, () => {
      l.value && clearInterval(l.value), i();
    }), te(() => {
      i();
    }), ee(() => {
      l.value && clearInterval(l.value);
    }), (g, o) => (c(), d("div", {
      class: T(["cp-holo-loader", t.value, { "transparent-bg": e.transparent }])
    }, [
      n("div", kt, [
        n("div", {
          class: T(["holo-projection", `type-${e.type}`])
        }, [
          e.type === "cube" ? (c(), d("div", _t, o[0] || (o[0] = [
            ye('<div class="cube" data-v-82a07bb5><div class="cube-face front" data-v-82a07bb5></div><div class="cube-face back" data-v-82a07bb5></div><div class="cube-face right" data-v-82a07bb5></div><div class="cube-face left" data-v-82a07bb5></div><div class="cube-face top" data-v-82a07bb5></div><div class="cube-face bottom" data-v-82a07bb5></div></div>', 1)
          ]))) : e.type === "sphere" ? (c(), d("div", Ct, [
            n("div", St, [
              (c(), d(K, null, j(3, (v) => n("div", {
                class: "sphere-ring",
                key: v
              })), 64))
            ])
          ])) : e.type === "datastream" ? (c(), d("div", It, [
            (c(), d(K, null, j(10, (v) => n("div", {
              class: "data-line",
              key: v
            })), 64))
          ])) : e.type === "circuit" ? (c(), d("div", Mt, [
            n("div", Tt, [
              (c(), d(K, null, j(5, (v) => n("div", {
                class: "circuit-path",
                key: v
              })), 64)),
              (c(), d(K, null, j(6, (v) => n("div", {
                class: "circuit-node",
                key: v + 10
              })), 64))
            ])
          ])) : Y("", !0)
        ], 2),
        e.text ? (c(), d("div", Nt, [
          n("span", Et, P(f.value), 1),
          o[1] || (o[1] = n("span", { class: "cursor" }, "_", -1))
        ])) : Y("", !0),
        o[2] || (o[2] = n("div", { class: "holo-base" }, [
          n("div", { class: "base-glow" })
        ], -1))
      ])
    ], 2));
  }
}), Dt = /* @__PURE__ */ G(zt, [["__scopeId", "data-v-82a07bb5"]]), Lt = V(Dt), Rt = ["onClick"], Bt = { class: "th-content" }, Ot = {
  key: 0,
  class: "sort-icon"
}, Yt = ["onClick"], Ht = {
  key: 0,
  class: "loading-overlay"
}, Ft = {
  key: 1,
  class: "empty-data"
}, Vt = {
  key: 0,
  class: "table-footer"
}, Gt = /* @__PURE__ */ F({
  name: "CpInfiniteTable",
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
    // 虚拟滚动相关
    bufferSize: {
      type: Number,
      default: 5
    }
  },
  emits: ["row-click", "sort-change", "load-more"],
  setup(e, { emit: a }) {
    var I, A;
    const t = e, f = a, r = w(null), l = w(null), i = w(0), g = w(0), o = w(0), v = w(0), p = w({
      key: ((I = t.defaultSort) == null ? void 0 : I.key) || "",
      order: ((A = t.defaultSort) == null ? void 0 : A.order) || ""
    }), _ = E(() => {
      var m;
      return (((m = t.data) == null ? void 0 : m.length) || 0) * t.rowHeight;
    }), M = E(() => {
      if (!t.data || t.data.length === 0) return [];
      let m = [...t.data];
      return p.value.key && p.value.order && m.sort((C, u) => {
        const s = C[p.value.key], y = u[p.value.key];
        return p.value.order === "asc" ? s > y ? 1 : -1 : s < y ? 1 : -1;
      }), m.slice(i.value, g.value);
    }), b = (m, C) => typeof t.rowKey == "function" ? t.rowKey(m) : typeof t.rowKey == "string" ? m[t.rowKey] : `row-${C}`, S = (m, C) => C.formatter ? C.formatter(m, C, t.data.indexOf(m)) : m[C.key], x = (m) => m.width ? { width: typeof m.width == "number" ? `${m.width}px` : m.width } : {}, $ = (m) => {
      if (!t.selectedRows || t.selectedRows.length === 0) return !1;
      const C = b(m, t.data.indexOf(m));
      return t.selectedRows.some((u) => {
        const s = b(u, t.data.indexOf(u));
        return C === s;
      });
    }, k = (m) => {
      f("row-click", m);
    }, z = (m) => {
      if (!m.sortable) return;
      let C = "asc";
      p.value.key === m.key && (p.value.order === "asc" ? C = "desc" : p.value.order === "desc" ? C = "" : C = "asc"), p.value = {
        key: m.key,
        order: C
      }, f("sort-change", { ...p.value });
    }, D = () => {
      if (!l.value) return;
      const m = l.value.scrollTop, C = l.value.clientHeight, u = Math.max(0, Math.floor(m / t.rowHeight) - t.bufferSize), s = Math.min(
        t.data.length,
        Math.ceil((m + C) / t.rowHeight) + t.bufferSize
      ), y = u * t.rowHeight;
      i.value = u, g.value = s, o.value = y, s >= t.data.length - 10 && !t.loading && f("load-more");
    }, B = () => {
      if (!l.value) return;
      const m = l.value.clientHeight;
      v.value = Math.ceil(m / t.rowHeight) + 2 * t.bufferSize, g.value = Math.min(t.data.length, v.value);
    }, h = () => {
      !r.value || !l.value || (r.value.scrollLeft = l.value.scrollLeft);
    };
    return Z(() => t.data, () => {
      le(() => {
        D();
      });
    }, { deep: !0 }), Z(() => t.defaultSort, (m) => {
      m && m.key && (p.value = { ...m });
    }, { deep: !0 }), te(() => {
      B(), l.value && l.value.addEventListener("scroll", h), window.addEventListener("resize", B);
    }), ee(() => {
      l.value && l.value.removeEventListener("scroll", h), window.removeEventListener("resize", B);
    }), (m, C) => (c(), d("div", {
      class: T(["cp-infinite-table", { loading: e.loading }])
    }, [
      n("div", {
        class: "table-header",
        ref_key: "headerRef",
        ref: r
      }, [
        n("table", null, [
          n("colgroup", null, [
            (c(!0), d(K, null, j(e.columns, (u, s) => (c(), d("col", {
              key: `col-${s}`,
              style: W(x(u))
            }, null, 4))), 128))
          ]),
          n("thead", null, [
            n("tr", null, [
              (c(!0), d(K, null, j(e.columns, (u, s) => (c(), d("th", {
                key: `header-${s}`,
                class: T({ sortable: u.sortable }),
                onClick: (y) => z(u)
              }, [
                n("div", Bt, [
                  n("span", null, P(u.title), 1),
                  u.sortable ? (c(), d("span", Ot, [
                    n("span", {
                      class: T(["sort-up", { active: p.value.key === u.key && p.value.order === "asc" }])
                    }, "▲", 2),
                    n("span", {
                      class: T(["sort-down", { active: p.value.key === u.key && p.value.order === "desc" }])
                    }, "▼", 2)
                  ])) : Y("", !0)
                ])
              ], 10, Rt))), 128))
            ])
          ])
        ])
      ], 512),
      n("div", {
        class: "table-body",
        ref_key: "bodyRef",
        ref: l,
        onScroll: D
      }, [
        n("div", {
          class: "scroll-container",
          style: W({ height: `${_.value}px` })
        }, [
          n("table", {
            style: W({ transform: `translateY(${o.value}px)` })
          }, [
            n("colgroup", null, [
              (c(!0), d(K, null, j(e.columns, (u, s) => (c(), d("col", {
                key: `col-${s}`,
                style: W(x(u))
              }, null, 4))), 128))
            ]),
            n("tbody", null, [
              (c(!0), d(K, null, j(M.value, (u, s) => (c(), d("tr", {
                key: b(u, s),
                class: T({ selected: $(u) }),
                onClick: (y) => k(u)
              }, [
                (c(!0), d(K, null, j(e.columns, (y, O) => (c(), d("td", {
                  key: `cell-${s}-${O}`
                }, [
                  X(m.$slots, `cell-${y.key}`, {
                    row: u,
                    column: y,
                    index: i.value + s
                  }, () => [
                    re(P(S(u, y)), 1)
                  ], !0)
                ]))), 128))
              ], 10, Yt))), 128))
            ])
          ], 4)
        ], 4),
        e.loading ? (c(), d("div", Ht, C[0] || (C[0] = [
          n("div", { class: "loading-spinner" }, [
            n("div", { class: "spinner-circle" }),
            n("div", { class: "spinner-text" }, "加载中...")
          ], -1)
        ]))) : Y("", !0),
        !e.loading && (!e.data || e.data.length === 0) ? (c(), d("div", Ft, [
          X(m.$slots, "empty", {}, () => [
            C[1] || (C[1] = n("div", { class: "empty-content" }, [
              n("div", { class: "empty-icon" }, "⚠"),
              n("div", { class: "empty-text" }, "暂无数据")
            ], -1))
          ], !0)
        ])) : Y("", !0)
      ], 544),
      m.$slots.footer ? (c(), d("div", Vt, [
        X(m.$slots, "footer", {}, void 0, !0)
      ])) : Y("", !0),
      C[2] || (C[2] = n("div", { class: "table-scanline" }, null, -1)),
      C[3] || (C[3] = n("div", { class: "table-glitch-effect" }, null, -1))
    ], 2));
  }
}), Pt = /* @__PURE__ */ G(Gt, [["__scopeId", "data-v-d9683805"]]), At = V(Pt), qt = /* @__PURE__ */ F({
  name: "CpNenobutton",
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
    const t = e, f = E(() => {
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
    }), r = E(() => {
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
    return (l, i) => (c(), d("div", {
      class: T(["cp-button-neno", r.value])
    }, [
      n("div", {
        class: T(["button", f.value, t.bg ? "show-bg" : ""])
      }, [
        i[0] || (i[0] = n("div", { class: "border" }, null, -1)),
        i[1] || (i[1] = n("div", { class: "border" }, null, -1)),
        i[2] || (i[2] = n("div", { class: "border" }, null, -1)),
        i[3] || (i[3] = n("div", { class: "border" }, null, -1)),
        X(l.$slots, "default", {}, void 0, !0)
      ], 2)
    ], 2));
  }
}), Xt = /* @__PURE__ */ G(qt, [["__scopeId", "data-v-2d8e5fb3"]]), Kt = V(Xt), jt = ["aria-checked", "aria-disabled"], Wt = { class: "toggle-thumb" }, Ut = {
  key: 0,
  class: "pulse-effect"
}, Qt = /* @__PURE__ */ F({
  name: "CpNeonToggle",
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
      default: "#00e6f6"
    },
    pulseEffect: {
      type: Boolean,
      default: !0
    },
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:modelValue", "change"],
  setup(e, { emit: a }) {
    be((i) => ({
      aa9e1b70: t.activeColor
    }));
    const t = e, f = a, r = E(() => {
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
      const i = !t.modelValue;
      f("update:modelValue", i), f("change", i);
    };
    return (i, g) => (c(), d("div", {
      class: T(["cp-neon-toggle", r.value, { active: e.modelValue, disabled: e.disabled }]),
      onClick: l,
      "aria-checked": e.modelValue,
      role: "switch",
      "aria-disabled": e.disabled
    }, [
      g[0] || (g[0] = n("div", { class: "toggle-track" }, [
        n("div", { class: "toggle-track-inner" }),
        n("div", { class: "circuit-lines" })
      ], -1)),
      n("div", Wt, [
        e.pulseEffect && e.modelValue ? (c(), d("div", Ut)) : Y("", !0)
      ])
    ], 10, jt));
  }
}), Jt = /* @__PURE__ */ G(Qt, [["__scopeId", "data-v-aaeae84f"]]), Zt = V(Jt), ea = /* @__PURE__ */ F({
  name: "CpReflectbutton",
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
    const t = e, f = E(() => {
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
    }), r = E(() => {
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
    return (l, i) => (c(), d("div", {
      class: T(["cp-button-neno", r.value])
    }, [
      n("div", {
        class: T(["button", f.value, t.bg ? "show-bg" : ""])
      }, [
        X(l.$slots, "default", {}, void 0, !0)
      ], 2)
    ], 2));
  }
}), ta = /* @__PURE__ */ G(ea, [["__scopeId", "data-v-84e2275b"]]), aa = V(ta), na = ["data-word"], la = /* @__PURE__ */ F({
  name: "CpText",
  __name: "text",
  props: {
    lineColor: {
      type: String,
      default: "#fff"
    }
  },
  setup(e) {
    const a = w(""), t = ne();
    if (t && t.default) {
      let r = t.default();
      a.value = r[0].children;
    }
    const f = e;
    return (r, l) => (c(), d("div", {
      class: "cp-text",
      "data-word": a.value
    }, [
      X(r.$slots, "default", {}, void 0, !0),
      n("div", {
        class: "cp-text-line",
        style: W("background: " + f.lineColor)
      }, null, 4)
    ], 8, na));
  }
}), sa = /* @__PURE__ */ G(la, [["__scopeId", "data-v-211785a2"]]), oa = V(sa), ra = /* @__PURE__ */ F({
  name: "CpShadowText",
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
    const a = e, t = (r, l) => {
      let i = `0px 0px ${r}`;
      for (let g = 1; g <= a.long; g++) {
        const o = f(r, g);
        i += `, ${l === "left" ? "-" : ""}${g}px ${g}px ${o}`;
      }
      return i;
    }, f = (r, l) => {
      const i = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i.exec(r), g = /^rgba?\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})(,\s*([\d.]+))?\)$/i.exec(r);
      if (i) {
        const o = parseInt(i[1], 16), v = parseInt(i[2], 16), p = parseInt(i[3], 16), _ = i[4] ? parseInt(i[4], 16) / 255 : 1, M = Math.max(0, _ - l * 0.05);
        return `rgba(${o}, ${v}, ${p}, ${M})`;
      } else if (g) {
        const o = parseInt(g[1], 10), v = parseInt(g[2], 10), p = parseInt(g[3], 10), _ = g[5] ? parseFloat(g[5]) : 1, M = Math.max(0, _ - l * 0.05);
        return `rgba(${o}, ${v}, ${p}, ${M})`;
      } else
        throw new Error(`Unsupported color format: ${r}`);
    };
    return (r, l) => (c(), d("div", {
      class: T(["shadow-text", a.direction]),
      style: W({ textShadow: t(a.shadowColor, a.direction) })
    }, [
      X(r.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), ia = /* @__PURE__ */ G(ra, [["__scopeId", "data-v-1b5810e2"]]), ca = V(ia), ua = { class: "cp-typing" }, da = { class: "content" }, fa = /* @__PURE__ */ F({
  name: "CpTyping",
  __name: "typing",
  setup(e) {
    return (a, t) => (c(), d("div", ua, [
      n("div", da, [
        X(a.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), va = /* @__PURE__ */ G(fa, [["__scopeId", "data-v-78fd0bd6"]]), ha = V(va), ga = [
  Ce,
  Be,
  Ve,
  Je,
  it,
  ht,
  xt,
  Lt,
  At,
  Zt,
  Kt,
  aa,
  oa,
  ca,
  yt,
  ha,
  nt
], pa = we([...ga]);
console.log(
  "%c %s",
  "border: 1px solid #97E3FE;border-radius: 3px;padding: 2px 5px;color: white;font-weight:bolder;background: linear-gradient(to right, #fF717F,#CC54D1,#4EAFFA,#3DE1C3, #F7DA66)",
  "CyberPunk-UI"
);
const ba = pa.install;
export {
  pa as default,
  ba as install,
  we as makeInstaller
};
