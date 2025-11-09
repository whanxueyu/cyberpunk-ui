import { defineComponent as P, useSlots as re, computed as D, createElementBlock as i, openBlock as r, normalizeClass as z, createElementVNode as n, renderSlot as Y, unref as ue, toDisplayString as V, ref as p, onUnmounted as se, createBlock as pe, Teleport as ye, createCommentVNode as F, createVNode as we, TransitionGroup as $e, withCtx as xe, Fragment as Z, renderList as J, normalizeStyle as K, watch as le, nextTick as de, onMounted as ne, withDirectives as he, createTextVNode as ge, vShow as be, watchEffect as Se, useCssVars as me, getCurrentInstance as ke, createStaticVNode as _e, vModelText as Ce } from "vue";
const Ie = (e = []) => ({
  install: (t) => {
    e.forEach((o) => t.use(o));
  }
}), G = (e, a) => (e.install = (t) => {
  for (const o of [e, ...Object.values({})])
    t.component(o.name, o);
}, e), Me = ["data-content"], Te = { key: 1 }, Ee = /* @__PURE__ */ P({
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
    const t = re(), o = e, c = D(() => {
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
    }), l = D(() => {
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
    return (d, v) => (r(), i("div", {
      class: z(["cp-button", l.value])
    }, [
      n("div", {
        class: z(["button", c.value]),
        "data-content": o.content
      }, [
        ue(t) ? Y(d.$slots, "default", { key: 0 }, void 0, !0) : (r(), i("span", Te, V(o.content), 1))
      ], 10, Me)
    ], 2));
  }
}), q = (e, a) => {
  const t = e.__vccOpts || e;
  for (const [o, c] of a)
    t[o] = c;
  return t;
}, Ne = /* @__PURE__ */ q(Ee, [["__scopeId", "data-v-c3d9b67f"]]), ze = G(Ne), Le = { class: "notification-content" }, De = {
  key: 0,
  class: "notification-icon"
}, Fe = { class: "notification-body" }, Re = {
  key: 0,
  class: "notification-title"
}, Be = { class: "notification-message" }, Ae = {
  key: 1,
  class: "notification-actions"
}, Oe = ["onClick"], He = ["onClick"], Ye = /* @__PURE__ */ P({
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
    const o = e, c = t, l = p([]), d = p(!1);
    let v = 0;
    const f = (u) => {
      const x = ++v, s = {
        id: x,
        title: u.title || "",
        message: u.message,
        type: u.type || "info",
        duration: u.duration !== void 0 ? u.duration : o.duration,
        showClose: u.showClose !== void 0 ? u.showClose : !0,
        showIcon: u.showIcon !== void 0 ? u.showIcon : !0,
        actions: u.actions || [],
        effect: u.effect || o.effect,
        onClose: u.onClose || (() => {
        })
      };
      if (l.value.push(s), d.value = !0, s.duration > 0 && setTimeout(() => {
        g(x);
      }, s.duration), l.value.length > o.maxCount) {
        const w = l.value[0];
        g(w.id);
      }
      return x;
    }, g = (u) => {
      const x = l.value.findIndex((s) => s.id === u);
      if (x !== -1) {
        const s = l.value[x];
        s.onClose && s.onClose(), l.value.splice(x, 1), c("close", u);
      }
    }, h = (u, x) => {
      x.callback && x.callback(), g(u.id);
    }, b = () => {
      l.value.length === 0 && (d.value = !1);
    }, _ = () => {
      l.value.forEach((u) => {
        u.onClose && u.onClose();
      }), l.value = [], d.value = !1;
    };
    return a({
      // 创建不同类型的通知
      info: (u) => f({ ...u, type: "info" }),
      success: (u) => f({ ...u, type: "success" }),
      warning: (u) => f({ ...u, type: "warning" }),
      error: (u) => f({ ...u, type: "error" }),
      // 通用创建方法
      create: f,
      // 关闭方法
      close: g,
      // 清除所有
      clearAll: _
    }), se(() => {
      _();
    }), (u, x) => (r(), pe(ye, { to: "body" }, [
      d.value ? (r(), i("div", {
        key: 0,
        class: z(["cp-cyber-notification-container", `position-${e.position}`])
      }, [
        we($e, {
          name: "notification",
          tag: "div",
          onAfterLeave: b
        }, {
          default: xe(() => [
            (r(!0), i(Z, null, J(l.value, (s) => (r(), i("div", {
              key: s.id,
              class: z(["cp-cyber-notification", `type-${s.type}`, `effect-${s.effect}`])
            }, [
              n("div", Le, [
                s.showIcon ? (r(), i("div", De, x[0] || (x[0] = [
                  n("div", { class: "icon-circle" }, null, -1),
                  n("div", { class: "icon-symbol" }, null, -1)
                ]))) : F("", !0),
                n("div", Fe, [
                  s.title ? (r(), i("div", Re, V(s.title), 1)) : F("", !0),
                  n("div", Be, V(s.message), 1),
                  s.actions && s.actions.length ? (r(), i("div", Ae, [
                    (r(!0), i(Z, null, J(s.actions, (w, y) => (r(), i("button", {
                      key: y,
                      class: "action-button",
                      onClick: (R) => h(s, w)
                    }, V(w.text), 9, Oe))), 128))
                  ])) : F("", !0)
                ]),
                s.showClose ? (r(), i("div", {
                  key: 1,
                  class: "notification-close",
                  onClick: (w) => g(s.id)
                }, x[1] || (x[1] = [
                  n("span", { class: "close-icon" }, "×", -1)
                ]), 8, He)) : F("", !0)
              ]),
              s.duration > 0 ? (r(), i("div", {
                key: 0,
                class: "notification-progress",
                style: K({ animationDuration: `${s.duration}ms` })
              }, null, 4)) : F("", !0),
              x[2] || (x[2] = n("div", { class: "notification-glitch-effect" }, null, -1)),
              x[3] || (x[3] = n("div", { class: "notification-hologram-effect" }, null, -1))
            ], 2))), 128))
          ]),
          _: 1
        })
      ], 2)) : F("", !0)
    ]));
  }
}), Pe = /* @__PURE__ */ q(Ye, [["__scopeId", "data-v-cc7acbbb"]]), Ge = G(Pe), Ve = { class: "tooltip-inner" }, qe = { class: "tooltip-content" }, We = /* @__PURE__ */ P({
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
    const t = e, o = a, c = p(!1), l = p(null), d = p(null), v = p(null), f = p(t.position), g = p({}), h = D(() => typeof t.width == "number" ? `${t.width}px` : t.width), b = () => {
      v.value && clearTimeout(v.value), v.value = window.setTimeout(() => {
        c.value = !0, de(() => {
          u(), o("show");
        });
      }, t.delay);
    }, _ = () => {
      v.value && clearTimeout(v.value), v.value = window.setTimeout(() => {
        c.value = !1, o("hide");
      }, 100);
    }, u = () => {
      if (!l.value || !d.value) return;
      const E = l.value.getBoundingClientRect(), M = d.value.getBoundingClientRect();
      let B = 0, W = 0;
      const U = 10;
      switch (f.value) {
        case "top":
          B = E.left + E.width / 2 - M.width / 2, W = E.top - M.height - U;
          break;
        case "right":
          B = E.right + U, W = E.top + E.height / 2 - M.height / 2;
          break;
        case "bottom":
          B = E.left + E.width / 2 - M.width / 2, W = E.bottom + U;
          break;
        case "left":
          B = E.left - M.width - U, W = E.top + E.height / 2 - M.height / 2;
          break;
      }
      (() => {
        const S = window.innerWidth, T = window.innerHeight, N = 10;
        B < N ? B = N : B + M.width > S - N && (B = S - M.width - N), W < N ? W = N : W + M.height > T - N && (W = T - M.height - N);
      })(), g.value = {
        left: `${B}px`,
        top: `${W}px`,
        width: h.value
      };
    }, x = () => {
      t.trigger === "hover" && b();
    }, s = () => {
      t.trigger === "hover" && _();
    }, w = () => {
      t.trigger === "click" && (c.value ? _() : b());
    }, y = () => {
      t.trigger === "focus" && b();
    }, R = () => {
      t.trigger === "focus" && _();
    }, O = () => {
      c.value && u();
    }, te = () => {
      c.value && u();
    };
    le(() => t.position, () => {
      c.value && de(u);
    });
    let C = [];
    const ae = (E) => {
      let M = [], B = E.parentElement;
      for (; B; ) {
        const W = window.getComputedStyle(B);
        /(auto|scroll)/.test(W.overflow + W.overflowY + W.overflowX) && M.push(B), B = B.parentElement;
      }
      return M.push(document.documentElement), M;
    };
    ne(() => {
      if (window.addEventListener("resize", O), window.addEventListener("scroll", te), document.addEventListener("click", (E) => {
        if (c.value && t.trigger === "click") {
          const M = E.target;
          d.value && !d.value.contains(M) && l.value && !l.value.contains(M) && _();
        }
      }), l.value) {
        C = ae(l.value);
        const E = () => {
          Q && clearTimeout(Q), Q = setTimeout(() => {
            c.value && u();
          }, 16);
        };
        C.forEach((M) => {
          M.addEventListener("scroll", E);
        });
      }
    });
    let Q = null;
    return se(() => {
      window.removeEventListener("resize", O), window.removeEventListener("scroll", te), C.forEach((E) => {
        E.removeEventListener("scroll", te);
      }), v.value && clearTimeout(v.value);
    }), (E, M) => (r(), i("div", null, [
      n("div", {
        ref_key: "triggerRef",
        ref: l,
        class: "tooltip-trigger",
        onMouseenter: x,
        onMouseleave: s,
        onClick: w,
        onFocus: y,
        onBlur: R
      }, [
        Y(E.$slots, "default", {}, void 0, !0)
      ], 544),
      (r(), pe(ye, { to: "body" }, [
        he(n("div", {
          ref_key: "tooltipRef",
          ref: d,
          class: z(["cp-cyber-tooltip", `theme-${e.theme}`, `effect-${e.effect}`, `position-${f.value}`]),
          style: K(g.value)
        }, [
          M[2] || (M[2] = n("div", { class: "tooltip-arrow" }, null, -1)),
          n("div", Ve, [
            n("div", qe, [
              Y(E.$slots, "content", {}, () => [
                ge(V(e.content), 1)
              ], !0)
            ]),
            M[0] || (M[0] = n("div", { class: "tooltip-scanline" }, null, -1)),
            M[1] || (M[1] = n("div", { class: "tooltip-glitch" }, null, -1))
          ])
        ], 6), [
          [be, c.value]
        ])
      ]))
    ]));
  }
}), Xe = /* @__PURE__ */ q(We, [["__scopeId", "data-v-1ae87185"]]), je = G(Xe), Ke = {
  key: 0,
  class: "prefix"
}, Ue = { class: "counter-container" }, Qe = {
  key: 0,
  class: "separator"
}, Ze = { class: "digit-top" }, Je = { class: "digit-bottom" }, et = { class: "digit-top flip-top" }, tt = { class: "digit-bottom flip-bottom" }, at = {
  key: 1,
  class: "suffix"
}, lt = /* @__PURE__ */ P({
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
    const a = e, t = p(Number(a.from)), o = p(Number(a.value)), c = p(null), l = p(null), d = p(""), v = (s) => {
      const w = Math.pow(10, a.decimal);
      let R = (Math.round(s * w) / w).toFixed(a.decimal);
      if (a.separator) {
        const O = R.split(".");
        O[0] = O[0].replace(/\B(?=(\d{3})+(?!\d))/g, a.separator), R = O.join(".");
      }
      return R;
    }, f = D(() => v(t.value)), g = D(() => f.value.split("")), h = (s) => s === a.separator || s === ".", b = (s) => !d.value || s >= d.value.length ? !1 : d.value[s] !== g.value[s] && !h(g.value[s]), _ = (s) => {
      c.value === null && (c.value = s);
      const w = s - c.value, y = Math.min(w / a.duration, 1), R = Number(a.from), O = Number(a.to !== null ? a.to : o.value), te = R + (O - R) * u(y);
      t.value = te, y < 1 ? l.value = requestAnimationFrame(_) : (t.value = O, c.value = null);
    }, u = (s) => 1 - Math.pow(1 - s, 4), x = () => {
      d.value = f.value, l.value !== null && cancelAnimationFrame(l.value), c.value = null, l.value = requestAnimationFrame(_);
    };
    return le(() => a.value, (s) => {
      o.value = Number(s), x();
    }), le(() => a.to, (s) => {
      s !== null && (o.value = Number(s), x());
    }), ne(() => {
      Number(a.from) !== Number(a.value) && x();
    }), se(() => {
      l.value !== null && cancelAnimationFrame(l.value);
    }), (s, w) => (r(), i("div", {
      class: z(["cp-digital-counter", `theme-${e.theme}`])
    }, [
      e.prefix ? (r(), i("span", Ke, V(e.prefix), 1)) : F("", !0),
      n("div", Ue, [
        (r(!0), i(Z, null, J(g.value, (y, R) => (r(), i("div", {
          key: R,
          class: "digit-container"
        }, [
          h(y) ? (r(), i("div", Qe, V(y), 1)) : (r(), i("div", {
            key: 1,
            class: z(["digit-flipper", { animate: b(R) }])
          }, [
            n("div", Ze, V(y), 1),
            n("div", Je, V(y), 1),
            n("div", et, V(y), 1),
            n("div", tt, V(y), 1)
          ], 2))
        ]))), 128))
      ]),
      e.suffix ? (r(), i("span", at, V(e.suffix), 1)) : F("", !0)
    ], 2));
  }
}), nt = /* @__PURE__ */ q(lt, [["__scopeId", "data-v-41a40b63"]]), ot = G(nt), st = {
  class: "cp-full-page",
  id: "page-scroll"
}, rt = ["onClick"], it = /* @__PURE__ */ P({
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
    const t = e, o = a, c = p();
    Se(() => {
      var C;
      (C = c.value) != null && C.style && (c.value.style.transform = d.value);
    });
    const l = D(() => {
      var ae, Q;
      v.value = !0;
      let C = 0;
      return (ae = document.getElementById("page-scroll")) != null && ae.clientHeight ? C = ((Q = document.getElementById("page-scroll")) == null ? void 0 : Q.clientHeight) ?? 0 : C = window.innerHeight, C;
    }), d = D(() => `translateY(-${y.value * l.value}px)`), v = p(!1), f = p(!0);
    function g(C) {
      v.value = !1, f.value && (f.value = !1, w(C), setTimeout(() => {
        f.value = !0;
      }, 500));
    }
    const h = p(0), b = p(0), _ = p(0);
    function u(C) {
      h.value = C.touches[0].pageY || C.changedTouches[0].pageY;
    }
    function x(C) {
      C.preventDefault(), v.value = !1, b.value = C.changedTouches[0].pageY || C.touches[0].pageY, _.value = b.value - h.value, Math.abs(_.value) >= 60 ? (y.value < t.items.length - 1 && _.value < 0 && y.value++, y.value > 0 && _.value > 0 && y.value--) : (console.log("else", -y.value * l.value), c.value.style.transform = `translateY(-${y.value * l.value}px)`);
    }
    function s(C) {
      v.value = !0, C.preventDefault(), _.value = (C.changedTouches[0].pageY || C.touches[0].pageY) - h.value, !(y.value === t.items.length - 1 && _.value < 0 || y.value === 0 && _.value > 0) && (console.log("else", -y.value * l.value + _.value * -1), c.value.style.transform = `translateY(-${y.value * l.value + _.value * -1}px)`);
    }
    function w(C) {
      C.wheelDelta < 0 ? (R(), o("change", { from: t.items[y.value - 1], to: t.items[y.value], type: "next" })) : (O(), o("change", { from: t.items[y.value + 1], to: t.items[y.value], type: "last" }));
    }
    const y = p(0);
    function R() {
      y.value < t.items.length - 1 && (y.value++, o("toNext", y.value));
    }
    function O() {
      (y.value > 1 || y.value === 1) && (y.value--, o("toLast", y.value));
    }
    function te(C) {
      v.value = !1, y.value = C;
    }
    return (C, ae) => (r(), i("div", st, [
      n("div", {
        ref_key: "element",
        ref: c,
        class: z([{ activeTranstion: v.value }, "inner-box"]),
        onMousewheel: g,
        onTouchstart: u,
        onTouchend: x,
        onTouchmove: s
      }, [
        Y(C.$slots, "default", {}, void 0, !0)
      ], 34),
      n("div", {
        class: z(["cp-full-dot", t.position])
      }, [
        (r(!0), i(Z, null, J(t.items, (Q, E) => (r(), i("div", {
          onClick: (M) => te(E),
          class: "cp-full-dot-item"
        }, [
          n("div", {
            class: z(["cp-full-dot-item-bg", { active: E === y.value }])
          }, null, 2),
          t.showTitle ? he((r(), i("div", {
            key: 0,
            class: "show-dec"
          }, V(Q.title), 513)), [
            [be, E === y.value]
          ]) : F("", !0)
        ], 8, rt))), 256))
      ], 2)
    ]));
  }
}), ct = /* @__PURE__ */ q(it, [["__scopeId", "data-v-64d99082"]]), ut = G(ct), dt = ["src", "alt"], ft = {
  key: 1,
  class: "loading-placeholder"
}, vt = {
  key: 2,
  class: "error-placeholder"
}, ht = /* @__PURE__ */ P({
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
    const t = e, o = a, c = p(null), l = p(null), d = p(null), v = p(!1), f = p(!1), g = p(!1), h = p(null), b = p(null), _ = D(() => t.intensity / 10), u = () => {
      v.value = !0, f.value = !1, setTimeout(() => {
        s(), t.triggerMode === "auto" ? Q() : t.triggerMode === "random" && E();
      }, 0);
    }, x = () => {
      f.value = !0, v.value = !1, console.error("Failed to load image:", t.src);
    }, s = () => {
      if (!d.value || !l.value) return;
      const I = l.value, S = d.value, T = S.getContext("2d");
      if (T) {
        S.width = I.naturalWidth, S.height = I.naturalHeight;
        try {
          T.drawImage(I, 0, 0), b.value = T.getImageData(0, 0, S.width, S.height);
        } catch (N) {
          console.error("Failed to get image data (possibly CORS issue):", N), f.value = !0;
        }
      }
    }, w = (I, S) => {
      if (!b.value) return;
      const T = I.canvas, N = I.getImageData(0, 0, T.width, T.height), j = N.data, H = b.value.data, A = Math.floor(20 * S), ee = Math.floor(Math.random() * A), oe = Math.floor(Math.random() * A);
      for (let m = 0; m < T.height; m++)
        for (let $ = 0; $ < T.width; $++) {
          const k = (m * T.width + $) * 4, L = Math.min(Math.max($ + ee, 0), T.width - 1), ie = (Math.min(Math.max(m + oe, 0), T.height - 1) * T.width + L) * 4;
          j[k] = H[ie];
          const ce = Math.min(Math.max($ - ee, 0), T.width - 1), ve = (Math.min(Math.max(m - oe, 0), T.height - 1) * T.width + ce) * 4;
          j[k + 2] = H[ve + 2], j[k + 1] = H[k + 1];
        }
      I.putImageData(N, 0, 0);
    }, y = (I, S) => {
      if (!b.value) return;
      const T = I.canvas;
      I.putImageData(b.value, 0, 0);
      const N = Math.max(1, Math.floor(5 / S)), j = 0.5 + S * 0.1;
      for (let H = 0; H < T.height; H += N * 2)
        I.fillStyle = `rgba(255, 255, 255, ${j})`, I.fillRect(0, H, T.width, N);
    }, R = (I, S) => {
      if (!b.value) return;
      const T = I.canvas;
      I.putImageData(b.value, 0, 0);
      const N = Math.max(4, Math.floor(S * 8));
      if (Math.random() > 0.5)
        for (let H = 0; H < T.height; H += N)
          for (let A = 0; A < T.width; A += N) {
            const ee = I.getImageData(A, H, 1, 1).data;
            I.fillStyle = `rgb(${ee[0]}, ${ee[1]}, ${ee[2]})`, I.fillRect(A, H, N, N);
          }
      else {
        const H = Math.floor(S * 3);
        for (let A = 0; A < H; A++) {
          const ee = Math.floor(Math.random() * (T.width - 50)), oe = Math.floor(Math.random() * (T.height - 50)), m = Math.floor(Math.random() * 100 * S) + 30, $ = Math.floor(Math.random() * 80 * S) + 20;
          for (let k = oe; k < oe + $; k += N)
            for (let L = ee; L < ee + m; L += N)
              if (L < T.width && k < T.height) {
                const X = I.getImageData(L, k, 1, 1).data;
                I.fillStyle = `rgb(${X[0]}, ${X[1]}, ${X[2]})`, I.fillRect(L, k, N, N);
              }
        }
      }
    }, O = (I, S) => {
      if (!b.value) return;
      const T = I.canvas, N = I.getImageData(0, 0, T.width, T.height), j = N.data, H = 0.2 + S * 0.05;
      for (let A = 0; A < j.length; A += 4)
        Math.random() < H && (Math.random() > 0.5 ? (j[A] = 255, j[A + 1] = 255, j[A + 2] = 255) : (j[A] = Math.floor(Math.random() * 256), j[A + 1] = Math.floor(Math.random() * 256), j[A + 2] = Math.floor(Math.random() * 256)));
      I.putImageData(N, 0, 0);
    }, te = (I, S) => {
      [...["rgb-shift", "scanline", "pixelate", "noise"]].sort(() => 0.5 - Math.random()).slice(0, 2 + Math.floor(Math.random() * 2)).forEach((H) => {
        switch (H) {
          case "rgb-shift":
            w(I, S);
            break;
          case "scanline":
            y(I, S);
            break;
          case "pixelate":
            R(I, S);
            break;
          case "noise":
            O(I, S);
            break;
        }
      });
    }, C = () => {
      if (!d.value || !b.value) return;
      const S = d.value.getContext("2d");
      if (S) {
        switch (S.putImageData(b.value, 0, 0), t.glitchType) {
          case "rgb-shift":
            w(S, _.value);
            break;
          case "scanline":
            y(S, _.value);
            break;
          case "pixelate":
            R(S, _.value);
            break;
          case "noise":
            O(S, _.value);
            break;
          case "combined":
            te(S, _.value);
            break;
        }
        g.value = !0, o("glitch-start");
      }
    }, ae = () => {
      if (!d.value || !b.value) return;
      const S = d.value.getContext("2d");
      S && (S.putImageData(b.value, 0, 0), g.value = !1, o("glitch-end"));
    }, Q = () => {
      h.value && clearInterval(h.value), C(), t.animated && (h.value = window.setInterval(() => {
        C();
      }, t.interval));
    }, E = () => {
      h.value && clearInterval(h.value), h.value = window.setInterval(() => {
        Math.random() < 0.5 && (C(), setTimeout(() => {
          ae();
        }, 200 + Math.random() * 300));
      }, t.interval);
    }, M = () => {
      h.value && (clearInterval(h.value), h.value = null), ae();
    }, B = () => {
      t.triggerMode === "hover" && Q();
    }, W = () => {
      t.triggerMode === "hover" && !t.animated && M();
    }, U = () => {
      t.triggerMode === "click" && (g.value ? M() : Q());
    };
    return le(() => [t.src, t.glitchType, t.intensity], () => {
      t.src && (v.value = !1, f.value = !1), g.value && C();
    }), ne(() => {
      l.value && l.value.complete && l.value.naturalHeight !== 0 && u();
    }), se(() => {
      h.value && clearInterval(h.value);
    }), (I, S) => (r(), i("div", {
      class: z(["cp-glitch-image", { animated: e.animated }]),
      onMouseenter: B,
      onMouseleave: W,
      onClick: U
    }, [
      n("div", {
        class: "image-container",
        ref_key: "imageContainerRef",
        ref: c
      }, [
        n("img", {
          src: e.src,
          alt: e.alt,
          ref_key: "imageRef",
          ref: l,
          class: "original-image",
          crossOrigin: "anonymous",
          onLoad: u,
          onError: x
        }, null, 40, dt),
        v.value && !f.value ? (r(), i("canvas", {
          key: 0,
          ref_key: "glitchCanvasRef",
          ref: d,
          class: "glitch-canvas"
        }, null, 512)) : F("", !0),
        !v.value && !f.value ? (r(), i("div", ft, S[0] || (S[0] = [
          n("div", { class: "loading-text" }, "Loading...", -1)
        ]))) : F("", !0),
        f.value ? (r(), i("div", vt, S[1] || (S[1] = [
          n("div", { class: "error-text" }, "Image Load Failed", -1)
        ]))) : F("", !0)
      ], 512)
    ], 34));
  }
}), gt = /* @__PURE__ */ q(ht, [["__scopeId", "data-v-b537a1f3"]]), mt = G(gt), pt = ["data-progress"], yt = { class: "progress-container" }, bt = {
  key: 0,
  class: "progress-text"
}, wt = /* @__PURE__ */ P({
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
    const a = e, t = p(null), o = p(null), c = D(() => a.direction === "vertical" ? "vertical" : "horizontal"), l = D(() => {
      const f = a.direction === "vertical" ? "height" : "width", g = a.indeterminate ? "100%" : `${a.progress}%`;
      return {
        [f]: g,
        backgroundColor: a.color,
        boxShadow: `0 0 ${a.glitchIntensity * 2}px ${a.color}`
      };
    }), d = () => {
      if (!t.value) return;
      const f = t.value.querySelector(".glitch-effect");
      if (!f) return;
      const g = () => {
        if (!f) return;
        if (Math.random() < a.glitchIntensity / 20) {
          const b = Math.random() * a.glitchIntensity - a.glitchIntensity / 2, _ = Math.random() * a.glitchIntensity - a.glitchIntensity / 2, u = Math.random() * a.glitchIntensity - a.glitchIntensity / 2, x = Math.random() * a.glitchIntensity / 2;
          f.style.transform = `translate(${b}px, ${_}px) skew(${u}deg)`, f.style.filter = `blur(${x}px)`, f.style.opacity = "1", setTimeout(() => {
            f && (f.style.transform = "translate(0, 0) skew(0)", f.style.filter = "blur(0)", f.style.opacity = "0");
          }, 150);
        }
      };
      o.value = window.setInterval(() => {
        g();
      }, 500);
    };
    let v = a.progress;
    return le(() => a.progress, (f) => {
      if (f !== v) {
        if (t.value) {
          const g = t.value.querySelector(".glitch-effect");
          if (g) {
            const h = Math.random() * a.glitchIntensity * 2 - a.glitchIntensity, b = Math.random() * a.glitchIntensity - a.glitchIntensity / 2;
            g.style.transform = `translate(${h}px, ${b}px)`, g.style.opacity = "1", setTimeout(() => {
              g && (g.style.transform = "translate(0, 0)", g.style.opacity = "0");
            }, 300);
          }
        }
        v = f;
      }
    }), ne(() => {
      d();
    }), se(() => {
      o.value && clearInterval(o.value);
    }), (f, g) => (r(), i("div", {
      class: z(["cp-glitch-progress", c.value, { indeterminate: e.indeterminate }]),
      "data-progress": e.progress
    }, [
      n("div", yt, [
        n("div", {
          class: "progress-bar",
          style: K(l.value),
          ref_key: "progressBarRef",
          ref: t
        }, g[0] || (g[0] = [
          n("div", { class: "glitch-effect" }, null, -1)
        ]), 4),
        e.showText && !e.indeterminate ? (r(), i("div", bt, V(e.progress) + "% ", 1)) : F("", !0)
      ])
    ], 10, pt));
  }
}), $t = /* @__PURE__ */ q(wt, [["__scopeId", "data-v-27854e11"]]), xt = G($t), St = { class: "glow-text" }, kt = /* @__PURE__ */ P({
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
    return ne(() => {
      document.documentElement.style.setProperty("--child-color", a.color);
    }), (t, o) => (r(), i("div", St, [
      Y(t.$slots, "default", {}, void 0, !0)
    ]));
  }
}), _t = /* @__PURE__ */ q(kt, [["__scopeId", "data-v-986b354d"]]), Ct = G(_t), It = ["tabindex", "aria-disabled", "aria-label"], Mt = { class: "holo-card-content" }, Tt = {
  key: 0,
  class: "card-title"
}, Et = /* @__PURE__ */ P({
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
    me((s) => ({
      "6fc87eab": o.hologramColor
    }));
    const a = ke(), t = re(), o = e, c = p({ x: 0, y: 0 }), l = p(!1), f = ((s, w) => {
      let y;
      return function() {
        const R = arguments, O = a;
        y || (s.apply(O, R), y = !0, setTimeout(() => y = !1, w));
      };
    })((s) => {
      if (o.disabled) return;
      const w = s.currentTarget.getBoundingClientRect();
      c.value = {
        x: (s.clientX - w.left) / w.width * 2 - 1,
        y: (s.clientY - w.top) / w.height * 2 - 1
      }, l.value = !0;
    }, 16), g = () => {
      l.value = !1, c.value = { x: 0, y: 0 };
    }, h = () => {
      o.disabled || (l.value = !0, c.value = { x: 0, y: 0 });
    }, b = D(() => [(() => {
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
    })()]), _ = D(() => {
      const s = {};
      if (o.rounded || (s.borderRadius = "0"), o.disabled && (s.cursor = "not-allowed", s.opacity = "0.6"), !l.value || o.disabled) return s;
      const w = c.value.y * 10, y = -c.value.x * 10;
      return {
        ...s,
        transform: `perspective(1000px) rotateX(${w}deg) rotateY(${y}deg) scale3d(1.05, 1.05, 1.05)`,
        transition: "transform 0.1s ease"
      };
    }), u = D(() => {
      if (!l.value || o.disabled) return {};
      const s = Math.max(-50, Math.min(50, c.value.x * 10)), w = Math.max(-50, Math.min(50, c.value.y * 10));
      return {
        background: `radial-gradient(circle at ${50 + s}% ${50 + w}%, ${o.hologramColor}33, transparent 70%)`,
        opacity: 0.8,
        transition: "background 0.1s ease"
      };
    }), x = D(() => {
      const s = o.glowIntensity / 100;
      return {
        boxShadow: `0 0 ${10 + o.glowIntensity / 5}px ${o.hologramColor}${Math.floor(s * 99).toString(16).padStart(2, "0")}`,
        opacity: l.value && !o.disabled ? s : s * 0.5
      };
    });
    return ne(() => {
      de(() => {
      });
    }), (s, w) => (r(), i("div", {
      class: z([
        "cp-holo-card",
        `depth-${e.depth}`,
        b.value,
        `theme-${e.theme}`,
        `effect-${e.effect}`
      ]),
      style: K(_.value),
      onMousemove: w[0] || (w[0] = //@ts-ignore
      (...y) => ue(f) && ue(f)(...y)),
      onMouseleave: g,
      onFocus: h,
      onBlur: g,
      tabindex: e.disabled ? -1 : 0,
      role: "button",
      "aria-disabled": e.disabled,
      "aria-label": e.title
    }, [
      n("div", Mt, [
        e.title && !ue(t).title ? (r(), i("div", Tt, V(e.title), 1)) : F("", !0),
        Y(s.$slots, "title", {}, void 0, !0),
        Y(s.$slots, "default", {}, void 0, !0),
        Y(s.$slots, "footer", {}, void 0, !0)
      ]),
      n("div", {
        class: "holo-card-hologram-effect",
        style: K(u.value)
      }, null, 4),
      n("div", {
        class: "holo-card-glow",
        style: K(x.value)
      }, null, 4)
    ], 46, It));
  }
}), Nt = /* @__PURE__ */ q(Et, [["__scopeId", "data-v-30c0c309"]]), zt = G(Nt), Lt = { class: "loader-container" }, Dt = {
  key: 0,
  class: "cube-loader"
}, Ft = {
  key: 1,
  class: "sphere-loader"
}, Rt = { class: "sphere" }, Bt = {
  key: 2,
  class: "datastream-loader"
}, At = {
  key: 3,
  class: "circuit-loader"
}, Ot = { class: "circuit-board" }, Ht = {
  key: 0,
  class: "loader-text"
}, Yt = { class: "typing-text" }, Pt = /* @__PURE__ */ P({
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
    me((f) => ({
      c40498b2: f.$props.color,
      "7f665050": t
    }));
    const a = e, t = (6 / a.speed).toString() + "s", o = D(() => {
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
    }), c = p(""), l = p(0), d = p(null), v = () => {
      if (!a.text) return;
      l.value = 0, c.value = "";
      const f = () => {
        l.value < a.text.length ? (c.value += a.text[l.value], l.value++) : setTimeout(() => {
          l.value = 0, c.value = "";
        }, 1e3);
      }, g = 100 / a.speed;
      d.value = window.setInterval(f, g);
    };
    return le(() => a.text, () => {
      d.value && clearInterval(d.value), v();
    }), ne(() => {
      v();
    }), se(() => {
      d.value && clearInterval(d.value);
    }), (f, g) => (r(), i("div", {
      class: z(["cp-holo-loader", o.value, { "transparent-bg": e.transparent }])
    }, [
      n("div", Lt, [
        n("div", {
          class: z(["holo-projection", `type-${e.type}`])
        }, [
          e.type === "cube" || e.type === "split" ? (r(), i("div", Dt, g[0] || (g[0] = [
            _e('<div class="cube" data-v-6df1b911><div class="cube-face front" data-v-6df1b911></div><div class="cube-face back" data-v-6df1b911></div><div class="cube-face right" data-v-6df1b911></div><div class="cube-face left" data-v-6df1b911></div><div class="cube-face top" data-v-6df1b911></div><div class="cube-face bottom" data-v-6df1b911></div></div>', 1)
          ]))) : e.type === "sphere" ? (r(), i("div", Ft, [
            n("div", Rt, [
              (r(), i(Z, null, J(3, (h) => n("div", {
                class: "sphere-ring",
                key: h
              })), 64))
            ])
          ])) : e.type === "datastream" ? (r(), i("div", Bt, [
            (r(), i(Z, null, J(10, (h) => n("div", {
              class: "data-line",
              key: h
            })), 64))
          ])) : e.type === "circuit" ? (r(), i("div", At, [
            n("div", Ot, [
              (r(), i(Z, null, J(5, (h) => n("div", {
                class: "circuit-path",
                key: h
              })), 64)),
              (r(), i(Z, null, J(6, (h) => n("div", {
                class: "circuit-node",
                key: h + 10
              })), 64))
            ])
          ])) : F("", !0)
        ], 2),
        e.text ? (r(), i("div", Ht, [
          n("span", Yt, V(c.value), 1),
          g[1] || (g[1] = n("span", { class: "cursor" }, "_", -1))
        ])) : F("", !0),
        g[2] || (g[2] = n("div", { class: "holo-base" }, [
          n("div", { class: "base-glow" })
        ], -1))
      ])
    ], 2));
  }
}), Gt = /* @__PURE__ */ q(Pt, [["__scopeId", "data-v-6df1b911"]]), Vt = G(Gt), qt = ["onClick"], Wt = { class: "th-content" }, Xt = {
  key: 0,
  class: "sort-icon"
}, jt = ["onClick"], Kt = {
  key: 0,
  class: "loading-overlay"
}, Ut = {
  key: 1,
  class: "empty-data"
}, Qt = {
  key: 0,
  class: "table-controls"
}, Zt = { key: 0 }, Jt = { key: 1 }, ea = { class: "control-speed" }, ta = {
  key: 1,
  class: "table-footer"
}, aa = /* @__PURE__ */ P({
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
      default: 1.5,
      validator: (e) => e >= 0.1 && e <= 5
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
    var ee, oe;
    const t = e, o = a, c = p(null), l = p(null), d = p(0), v = p(0), f = p(0), g = p(0), h = p(!1), b = p(!1), _ = p(t.speed), u = p(null), x = p(0), s = p(!1), w = p({
      key: ((ee = t.defaultSort) == null ? void 0 : ee.key) || "",
      order: ((oe = t.defaultSort) == null ? void 0 : oe.order) || ""
    }), y = D(() => {
      var m;
      return (((m = t.data) == null ? void 0 : m.length) || 0) * t.rowHeight;
    }), R = D(() => {
      if (!t.data || t.data.length === 0) return [];
      let m = [...t.data];
      return w.value.key && w.value.order && m.sort(($, k) => {
        const L = $[w.value.key], X = k[w.value.key];
        return w.value.order === "asc" ? L > X ? 1 : -1 : L < X ? 1 : -1;
      }), m.slice(d.value, v.value);
    }), O = (m, $) => typeof t.rowKey == "function" ? t.rowKey(m) : typeof t.rowKey == "string" ? m[t.rowKey] : `row-${$}`, te = (m, $) => $.formatter ? $.formatter(m, $, t.data.indexOf(m)) : m[$.key], C = (m) => m.width ? { width: typeof m.width == "number" ? `${m.width}px` : m.width } : {}, ae = (m) => {
      if (!t.selectedRows || t.selectedRows.length === 0) return !1;
      const $ = O(m, t.data.indexOf(m));
      return t.selectedRows.some((k) => {
        const L = O(k, t.data.indexOf(k));
        return $ === L;
      });
    }, Q = (m) => {
      o("row-click", m);
    }, E = (m) => {
      if (!m.sortable) return;
      let $ = "asc";
      w.value.key === m.key && (w.value.order === "asc" ? $ = "desc" : w.value.order === "desc" ? $ = "" : $ = "asc"), w.value = {
        key: m.key,
        order: $
      }, o("sort-change", { ...w.value });
    }, M = () => {
      if (!l.value) return;
      const m = l.value.scrollTop, $ = l.value.clientHeight, k = Math.max(0, Math.floor(m / t.rowHeight) - t.bufferSize), L = Math.min(
        t.data.length,
        Math.ceil((m + $) / t.rowHeight) + t.bufferSize
      ), X = k * t.rowHeight;
      d.value = k, v.value = L, f.value = X, L >= t.data.length - 10 && !t.loading && o("load-more");
    }, B = () => {
      if (!l.value) return;
      const m = l.value.clientHeight;
      g.value = Math.ceil(m / t.rowHeight) + 2 * t.bufferSize, v.value = Math.min(t.data.length, g.value);
    }, W = () => {
      !c.value || !l.value || (c.value.scrollLeft = l.value.scrollLeft);
    }, U = () => {
      if (!l.value || b.value || s.value)
        return;
      const m = Date.now(), $ = m - x.value;
      x.value = m;
      const k = _.value * $ / 16;
      if (l.value.scrollTop += k, l.value.scrollTop + l.value.clientHeight >= l.value.scrollHeight)
        if (t.loop)
          I(0, 300);
        else {
          h.value = !1;
          return;
        }
      u.value = requestAnimationFrame(U);
    }, I = (m, $ = 300) => {
      if (!l.value) return;
      const k = l.value.scrollTop, L = performance.now(), X = (ie) => {
        const ce = ie - L, fe = Math.min(ce / $, 1), ve = fe * (2 - fe);
        l.value && (l.value.scrollTop = k + (m - k) * ve), ce < $ ? requestAnimationFrame(X) : (l.value && (l.value.scrollTop = m), x.value = Date.now(), t.autoScroll && !b.value && (u.value = requestAnimationFrame(U)));
      };
      u.value && (cancelAnimationFrame(u.value), u.value = null), requestAnimationFrame(X);
    }, S = () => {
      b.value = !b.value, b.value ? (u.value && (cancelAnimationFrame(u.value), u.value = null), o("scroll-pause")) : (x.value = Date.now(), u.value = requestAnimationFrame(U), o("scroll-resume"));
    }, T = (m) => {
      const $ = m.target;
      _.value = parseFloat($.value);
    }, N = () => {
      t.pauseOnHover && !s.value && (b.value = !0);
    }, j = () => {
      t.pauseOnHover && !s.value && !b.value && (x.value = Date.now(), u.value = requestAnimationFrame(U));
    }, H = () => {
      s.value = !0, b.value || (b.value = !0, u.value && (cancelAnimationFrame(u.value), u.value = null));
    }, A = () => {
      s.value = !1, !b.value && t.autoScroll && (x.value = Date.now(), u.value = requestAnimationFrame(U));
    };
    return le(() => t.data, () => {
      de(() => {
        M(), t.autoScroll && !b.value && !s.value && (x.value = Date.now(), u.value = requestAnimationFrame(U));
      });
    }, { deep: !0 }), le(() => t.defaultSort, (m) => {
      m && m.key && (w.value = { ...m });
    }, { deep: !0 }), le(() => t.autoScroll, (m) => {
      m && !b.value && !s.value ? (x.value = Date.now(), u.value = requestAnimationFrame(U)) : u.value && (cancelAnimationFrame(u.value), u.value = null);
    }), ne(() => {
      B(), l.value && (l.value.addEventListener("scroll", M), l.value.addEventListener("scroll", W)), window.addEventListener("resize", B), t.autoScroll && (h.value = !0, x.value = Date.now(), u.value = requestAnimationFrame(U));
    }), se(() => {
      u.value && (cancelAnimationFrame(u.value), u.value = null), l.value && (l.value.removeEventListener("scroll", M), l.value.removeEventListener("scroll", W)), window.removeEventListener("resize", B);
    }), (m, $) => (r(), i("div", {
      class: z(["cp-auto-scroll-table", { scrolling: h.value, paused: b.value, loading: e.loading }])
    }, [
      n("div", {
        class: "table-header",
        ref_key: "headerRef",
        ref: c
      }, [
        n("table", null, [
          n("colgroup", null, [
            (r(!0), i(Z, null, J(e.columns, (k, L) => (r(), i("col", {
              key: `col-${L}`,
              style: K(C(k))
            }, null, 4))), 128))
          ]),
          n("thead", null, [
            n("tr", null, [
              (r(!0), i(Z, null, J(e.columns, (k, L) => (r(), i("th", {
                key: `header-${L}`,
                class: z({ sortable: k.sortable }),
                onClick: (X) => E(k)
              }, [
                n("div", Wt, [
                  n("span", null, V(k.title), 1),
                  k.sortable ? (r(), i("span", Xt, [
                    n("span", {
                      class: z(["sort-up", { active: w.value.key === k.key && w.value.order === "asc" }])
                    }, "▲", 2),
                    n("span", {
                      class: z(["sort-down", { active: w.value.key === k.key && w.value.order === "desc" }])
                    }, "▼", 2)
                  ])) : F("", !0)
                ])
              ], 10, qt))), 128))
            ])
          ])
        ])
      ], 512),
      n("div", {
        class: "table-body",
        ref_key: "bodyRef",
        ref: l,
        onMouseenter: N,
        onMouseleave: j,
        onTouchstart: H,
        onTouchend: A
      }, [
        n("div", {
          class: "scroll-container",
          style: K({ height: `${y.value}px` })
        }, [
          n("table", {
            style: K({ transform: `translateY(${f.value}px)` })
          }, [
            n("colgroup", null, [
              (r(!0), i(Z, null, J(e.columns, (k, L) => (r(), i("col", {
                key: `col-${L}`,
                style: K(C(k))
              }, null, 4))), 128))
            ]),
            n("tbody", null, [
              (r(!0), i(Z, null, J(R.value, (k, L) => (r(), i("tr", {
                key: O(k, L),
                class: z({ selected: ae(k) }),
                onClick: (X) => Q(k)
              }, [
                (r(!0), i(Z, null, J(e.columns, (X, ie) => (r(), i("td", {
                  key: `cell-${L}-${ie}`
                }, [
                  Y(m.$slots, `cell-${X.key}`, {
                    row: k,
                    column: X,
                    index: d.value + L
                  }, () => [
                    ge(V(te(k, X)), 1)
                  ], !0)
                ]))), 128))
              ], 10, jt))), 128))
            ])
          ], 4)
        ], 4),
        e.loading ? (r(), i("div", Kt, $[1] || ($[1] = [
          n("div", { class: "loading-spinner" }, [
            n("div", { class: "spinner-circle" }),
            n("div", { class: "spinner-text" }, "加载中...")
          ], -1)
        ]))) : F("", !0),
        !e.loading && (!e.data || e.data.length === 0) ? (r(), i("div", Ut, [
          Y(m.$slots, "empty", {}, () => [
            $[2] || ($[2] = n("div", { class: "empty-content" }, [
              n("div", { class: "empty-icon" }, "⚠"),
              n("div", { class: "empty-text" }, "暂无数据")
            ], -1))
          ], !0)
        ])) : F("", !0)
      ], 544),
      e.showControls ? (r(), i("div", Qt, [
        n("div", {
          class: "control-button",
          onClick: S
        }, [
          b.value ? (r(), i("span", Zt, "▶")) : (r(), i("span", Jt, "⏸"))
        ]),
        n("div", ea, [
          $[3] || ($[3] = n("span", null, "速度:", -1)),
          he(n("input", {
            type: "range",
            min: "0.1",
            max: "5",
            step: "0.1",
            "onUpdate:modelValue": $[0] || ($[0] = (k) => _.value = k),
            onInput: T
          }, null, 544), [
            [Ce, _.value]
          ])
        ])
      ])) : F("", !0),
      m.$slots.footer ? (r(), i("div", ta, [
        Y(m.$slots, "footer", {}, void 0, !0)
      ])) : F("", !0),
      $[4] || ($[4] = n("div", { class: "table-scanline" }, null, -1)),
      $[5] || ($[5] = n("div", { class: "table-glitch-effect" }, null, -1))
    ], 2));
  }
}), la = /* @__PURE__ */ q(aa, [["__scopeId", "data-v-7e5919a7"]]), na = G(la), oa = /* @__PURE__ */ P({
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
    const t = e, o = D(() => {
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
    }), c = D(() => {
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
    return (l, d) => (r(), i("div", {
      class: z(["cp-button-neno", c.value])
    }, [
      n("div", {
        class: z(["button", o.value, t.bg ? "show-bg" : ""])
      }, [
        d[0] || (d[0] = n("div", { class: "border" }, null, -1)),
        d[1] || (d[1] = n("div", { class: "border" }, null, -1)),
        d[2] || (d[2] = n("div", { class: "border" }, null, -1)),
        d[3] || (d[3] = n("div", { class: "border" }, null, -1)),
        Y(l.$slots, "default", {}, void 0, !0)
      ], 2)
    ], 2));
  }
}), sa = /* @__PURE__ */ q(oa, [["__scopeId", "data-v-c8c24548"]]), ra = G(sa), ia = ["aria-checked", "aria-disabled"], ca = { class: "toggle-thumb" }, ua = {
  key: 0,
  class: "pulse-effect"
}, da = /* @__PURE__ */ P({
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
    me((v) => ({
      "2ad8abbc": t.inActiveColor,
      "247239f2": t.activeColor
    }));
    const t = e, o = a, c = D(() => {
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
    }), l = D(() => {
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
    }), d = () => {
      if (t.disabled) return;
      const v = !t.modelValue;
      o("update:modelValue", v), o("change", v);
    };
    return (v, f) => (r(), i("div", {
      class: z(["cp-neon-toggle", l.value, c.value, { active: e.modelValue, disabled: e.disabled }]),
      onClick: d,
      "aria-checked": e.modelValue,
      role: "switch",
      "aria-disabled": e.disabled
    }, [
      f[0] || (f[0] = n("div", { class: "toggle-track" }, [
        n("div", { class: "toggle-track-inner" }),
        n("div", { class: "circuit-lines" })
      ], -1)),
      n("div", ca, [
        e.pulseEffect && e.modelValue ? (r(), i("div", ua)) : F("", !0)
      ])
    ], 10, ia));
  }
}), fa = /* @__PURE__ */ q(da, [["__scopeId", "data-v-799d9482"]]), va = G(fa), ha = /* @__PURE__ */ P({
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
    const t = e, o = D(() => {
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
    }), c = D(() => {
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
    return (l, d) => (r(), i("div", {
      class: z(["cp-button-neno", c.value])
    }, [
      n("div", {
        class: z(["button", o.value, t.bg ? "show-bg" : ""])
      }, [
        Y(l.$slots, "default", {}, void 0, !0)
      ], 2)
    ], 2));
  }
}), ga = /* @__PURE__ */ q(ha, [["__scopeId", "data-v-f4ab33ea"]]), ma = G(ga), pa = ["data-word"], ya = /* @__PURE__ */ P({
  name: "CyberText",
  __name: "text",
  props: {
    lineColor: {
      type: String,
      default: "#fff"
    }
  },
  setup(e) {
    const a = p(""), t = re();
    if (t && t.default) {
      let c = t.default();
      a.value = c[0].children;
    }
    const o = e;
    return (c, l) => (r(), i("div", {
      class: "cp-text",
      "data-word": a.value
    }, [
      Y(c.$slots, "default", {}, void 0, !0),
      n("div", {
        class: "cp-text-line",
        style: K("background: " + o.lineColor)
      }, null, 4)
    ], 8, pa));
  }
}), ba = /* @__PURE__ */ q(ya, [["__scopeId", "data-v-3aa7f29f"]]), wa = G(ba), $a = /* @__PURE__ */ P({
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
    const a = e, t = (c, l) => {
      let d = `0px 0px ${c}`;
      for (let v = 1; v <= a.long; v++) {
        const f = o(c, v);
        d += `, ${l === "left" ? "-" : ""}${v}px ${v}px ${f}`;
      }
      return d;
    }, o = (c, l) => {
      const d = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i.exec(c), v = /^rgba?\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})(,\s*([\d.]+))?\)$/i.exec(c);
      if (d) {
        const f = parseInt(d[1], 16), g = parseInt(d[2], 16), h = parseInt(d[3], 16), b = d[4] ? parseInt(d[4], 16) / 255 : 1, _ = Math.max(0, b - l * 0.05);
        return `rgba(${f}, ${g}, ${h}, ${_})`;
      } else if (v) {
        const f = parseInt(v[1], 10), g = parseInt(v[2], 10), h = parseInt(v[3], 10), b = v[5] ? parseFloat(v[5]) : 1, _ = Math.max(0, b - l * 0.05);
        return `rgba(${f}, ${g}, ${h}, ${_})`;
      } else
        throw new Error(`Unsupported color format: ${c}`);
    };
    return (c, l) => (r(), i("div", {
      class: z(["shadow-text", a.direction]),
      style: K({ textShadow: t(a.shadowColor, a.direction) })
    }, [
      Y(c.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), xa = /* @__PURE__ */ q($a, [["__scopeId", "data-v-baec179b"]]), Sa = G(xa), ka = { class: "cp-typing" }, _a = { class: "content" }, Ca = /* @__PURE__ */ P({
  name: "CyberTyping",
  __name: "typing",
  setup(e) {
    return (a, t) => (r(), i("div", ka, [
      n("div", _a, [
        Y(a.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), Ia = /* @__PURE__ */ q(Ca, [["__scopeId", "data-v-c43f79f6"]]), Ma = G(Ia), Ta = ["aria-label", "aria-busy"], Ea = ["src", "alt", "loading", "crossorigin"], Na = {
  key: 1,
  class: "placeholder"
}, za = ["src"], La = {
  key: 2,
  class: "error"
}, Da = /* @__PURE__ */ P({
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
    const a = e, t = p(!1), o = p(!1), c = p(a.src), l = D(
      () => typeof a.width == "number" ? `${a.width}px` : a.width
    ), d = D(
      () => typeof a.height == "number" ? `${a.height}px` : a.height
    ), v = D(() => o.value && a.errorSrc ? `url(${a.errorSrc}) no-repeat` : `url(${c.value}) no-repeat`), f = () => {
      if (!a.src) return;
      t.value = !1, o.value = !1;
      const h = new Image();
      a.crossorigin && (h.crossOrigin = a.crossorigin), h.src = a.src, h.onload = () => {
        c.value = a.src, t.value = !0;
      }, h.onerror = () => {
        if (o.value = !0, a.errorSrc && a.errorSrc !== a.src) {
          c.value = a.errorSrc;
          const b = new Image();
          b.src = a.errorSrc, b.onload = () => t.value = !0;
        } else
          t.value = !0;
      };
    }, g = D(() => {
      switch (a.fit) {
        case "fill":
          return "100% 100%";
        case "scale-down":
          return "contain";
        default:
          return a.fit;
      }
    });
    return le(() => a.src, f), ne(f), (h, b) => (r(), i("div", null, [
      n("div", {
        class: "imgbox",
        style: K({ width: l.value, height: d.value }),
        role: "img",
        "aria-label": h.alt || void 0,
        "aria-busy": !t.value && !o.value
      }, [
        h.src ? (r(), i("img", {
          key: 0,
          src: h.src,
          alt: h.alt,
          loading: h.loading,
          crossorigin: h.crossorigin,
          class: "hidden-image"
        }, null, 8, Ea)) : F("", !0),
        n("div", {
          class: z(["cyberimg", {
            loaded: t.value && !o.value,
            loading: !t.value && !o.value,
            error: o.value,
            "no-glitch": h.disableGlitch
          }]),
          style: K({
            background: v.value,
            backgroundSize: g.value
          })
        }, [
          t.value && !o.value ? Y(h.$slots, "default", { key: 0 }, void 0, !0) : !t.value && h.placeholder ? (r(), i("div", Na, [
            Y(h.$slots, "placeholder", {}, () => [
              n("img", {
                src: h.placeholder,
                alt: "Loading..."
              }, null, 8, za)
            ], !0)
          ])) : o.value ? (r(), i("div", La, [
            Y(h.$slots, "error", {}, () => [
              ge(V(h.errorContent), 1)
            ], !0)
          ])) : F("", !0)
        ], 6)
      ], 12, Ta)
    ]));
  }
}), Fa = /* @__PURE__ */ q(Da, [["__scopeId", "data-v-5faae0c2"]]), Ra = G(Fa), Ba = { class: "text-container" }, Aa = ["data-text"], Oa = /* @__PURE__ */ P({
  name: "CyberMagicText",
  __name: "magicText",
  setup(e) {
    const a = p(""), t = re();
    if (t && t.default) {
      let o = t.default();
      a.value = o[0].children;
    }
    return (o, c) => (r(), i("div", Ba, [
      n("span", {
        class: "gradient-text",
        "data-text": a.value
      }, [
        Y(o.$slots, "default")
      ], 8, Aa)
    ]));
  }
}), Ha = G(Oa), Ya = { class: "imgWrap" }, Pa = ["src"], Ga = /* @__PURE__ */ P({
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
    const a = e, t = p(a.imgList.length), o = c(a.imgWidth, 360 / t.value) * 1.6;
    function c(d, v) {
      const f = v * Math.PI / 180;
      return d / (2 * Math.sin(f / 2));
    }
    const l = (d) => {
      const v = 35 + (d + 1) * (360 / t.value), f = c(a.imgWidth, 360 / t.value);
      return {
        transform: `rotateY(${v}deg) translateZ(${f}px)`
      };
    };
    return (d, v) => (r(), i("div", {
      class: "container",
      style: K({
        "--container-width": `${o}px`,
        "--img-width": `${a.imgWidth}px`,
        "--img-height": `${a.imgHeight}px`
      })
    }, [
      n("div", {
        class: z(["stage", { "has-shadow": a.shadow }])
      }, [
        n("div", {
          class: "control",
          style: K({
            "--animation-duration": `${a.animationDuration}s`
          })
        }, [
          n("div", Ya, [
            (r(!0), i(Z, null, J(a.imgList, (f, g) => (r(), i("div", {
              key: g,
              class: "img",
              style: K(l(g))
            }, [
              n("img", { src: f }, null, 8, Pa)
            ], 4))), 128))
          ])
        ], 4)
      ], 2)
    ], 4));
  }
}), Va = /* @__PURE__ */ q(Ga, [["__scopeId", "data-v-15a0847c"]]), qa = G(Va), Wa = [
  ze,
  Ge,
  je,
  ot,
  mt,
  xt,
  zt,
  Vt,
  na,
  va,
  ra,
  ma,
  wa,
  Sa,
  Ct,
  Ma,
  ut,
  Ra,
  Ha,
  qa
], Xa = Ie([...Wa]);
console.log(
  "%c %s",
  "border: 1px solid #97E3FE;border-radius: 3px;padding: 2px 5px;color: white;font-weight:bolder;background: linear-gradient(to right, #fF717F,#CC54D1,#4EAFFA,#3DE1C3, #F7DA66)",
  "CyberPunk-UI"
);
const Ka = Xa.install;
export {
  Xa as default,
  Ka as install,
  Ie as makeInstaller
};
