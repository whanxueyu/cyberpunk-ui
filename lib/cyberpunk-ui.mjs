import { defineComponent as A, useSlots as se, computed as z, createElementBlock as d, openBlock as r, normalizeClass as E, createElementVNode as l, renderSlot as Y, unref as ie, toDisplayString as V, ref as w, onUnmounted as oe, createBlock as fe, Teleport as ve, createCommentVNode as D, createVNode as be, TransitionGroup as we, withCtx as $e, Fragment as K, renderList as U, normalizeStyle as q, watch as te, nextTick as ce, onMounted as le, withDirectives as he, createTextVNode as ue, vShow as ge, watchEffect as xe, useCssVars as de, getCurrentInstance as _e, createStaticVNode as ke } from "vue";
const Ce = (e = []) => ({
  install: (t) => {
    e.forEach((o) => t.use(o));
  }
}), G = (e, a) => (e.install = (t) => {
  for (const o of [e, ...Object.values({})])
    t.component(o.name, o);
}, e), Se = ["data-content"], Ie = { key: 1 }, Me = /* @__PURE__ */ A({
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
    const t = se(), o = e, i = z(() => {
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
    }), n = z(() => {
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
    return (u, v) => (r(), d("div", {
      class: E(["cp-button", n.value])
    }, [
      l("div", {
        class: E(["button", i.value]),
        "data-content": o.content
      }, [
        ie(t) ? Y(u.$slots, "default", { key: 0 }, void 0, !0) : (r(), d("span", Ie, V(o.content), 1))
      ], 10, Se)
    ], 2));
  }
}), W = (e, a) => {
  const t = e.__vccOpts || e;
  for (const [o, i] of a)
    t[o] = i;
  return t;
}, Te = /* @__PURE__ */ W(Me, [["__scopeId", "data-v-c3d9b67f"]]), Ne = G(Te), Ee = { class: "notification-content" }, ze = {
  key: 0,
  class: "notification-icon"
}, Le = { class: "notification-body" }, Re = {
  key: 0,
  class: "notification-title"
}, Be = { class: "notification-message" }, De = {
  key: 1,
  class: "notification-actions"
}, Oe = ["onClick"], He = ["onClick"], Fe = /* @__PURE__ */ A({
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
    const o = e, i = t, n = w([]), u = w(!1);
    let v = 0;
    const f = (y) => {
      const k = ++v, s = {
        id: k,
        title: y.title || "",
        message: y.message,
        type: y.type || "info",
        duration: y.duration !== void 0 ? y.duration : o.duration,
        showClose: y.showClose !== void 0 ? y.showClose : !0,
        showIcon: y.showIcon !== void 0 ? y.showIcon : !0,
        actions: y.actions || [],
        effect: y.effect || o.effect,
        onClose: y.onClose || (() => {
        })
      };
      if (n.value.push(s), u.value = !0, s.duration > 0 && setTimeout(() => {
        h(k);
      }, s.duration), n.value.length > o.maxCount) {
        const C = n.value[0];
        h(C.id);
      }
      return k;
    }, h = (y) => {
      const k = n.value.findIndex((s) => s.id === y);
      if (k !== -1) {
        const s = n.value[k];
        s.onClose && s.onClose(), n.value.splice(k, 1), i("close", y);
      }
    }, c = (y, k) => {
      k.callback && k.callback(), h(y.id);
    }, x = () => {
      n.value.length === 0 && (u.value = !1);
    }, _ = () => {
      n.value.forEach((y) => {
        y.onClose && y.onClose();
      }), n.value = [], u.value = !1;
    };
    return a({
      // 创建不同类型的通知
      info: (y) => f({ ...y, type: "info" }),
      success: (y) => f({ ...y, type: "success" }),
      warning: (y) => f({ ...y, type: "warning" }),
      error: (y) => f({ ...y, type: "error" }),
      // 通用创建方法
      create: f,
      // 关闭方法
      close: h,
      // 清除所有
      clearAll: _
    }), oe(() => {
      _();
    }), (y, k) => (r(), fe(ve, { to: "body" }, [
      u.value ? (r(), d("div", {
        key: 0,
        class: E(["cp-cyber-notification-container", `position-${e.position}`])
      }, [
        be(we, {
          name: "notification",
          tag: "div",
          onAfterLeave: x
        }, {
          default: $e(() => [
            (r(!0), d(K, null, U(n.value, (s) => (r(), d("div", {
              key: s.id,
              class: E(["cp-cyber-notification", `type-${s.type}`, `effect-${s.effect}`])
            }, [
              l("div", Ee, [
                s.showIcon ? (r(), d("div", ze, k[0] || (k[0] = [
                  l("div", { class: "icon-circle" }, null, -1),
                  l("div", { class: "icon-symbol" }, null, -1)
                ]))) : D("", !0),
                l("div", Le, [
                  s.title ? (r(), d("div", Re, V(s.title), 1)) : D("", !0),
                  l("div", Be, V(s.message), 1),
                  s.actions && s.actions.length ? (r(), d("div", De, [
                    (r(!0), d(K, null, U(s.actions, (C, m) => (r(), d("button", {
                      key: m,
                      class: "action-button",
                      onClick: (O) => c(s, C)
                    }, V(C.text), 9, Oe))), 128))
                  ])) : D("", !0)
                ]),
                s.showClose ? (r(), d("div", {
                  key: 1,
                  class: "notification-close",
                  onClick: (C) => h(s.id)
                }, k[1] || (k[1] = [
                  l("span", { class: "close-icon" }, "×", -1)
                ]), 8, He)) : D("", !0)
              ]),
              s.duration > 0 ? (r(), d("div", {
                key: 0,
                class: "notification-progress",
                style: q({ animationDuration: `${s.duration}ms` })
              }, null, 4)) : D("", !0),
              k[2] || (k[2] = l("div", { class: "notification-glitch-effect" }, null, -1)),
              k[3] || (k[3] = l("div", { class: "notification-hologram-effect" }, null, -1))
            ], 2))), 128))
          ]),
          _: 1
        })
      ], 2)) : D("", !0)
    ]));
  }
}), Ye = /* @__PURE__ */ W(Fe, [["__scopeId", "data-v-cc7acbbb"]]), Ae = G(Ye), Ge = { class: "tooltip-inner" }, Pe = { class: "tooltip-content" }, Ve = /* @__PURE__ */ A({
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
    const t = e, o = a, i = w(!1), n = w(null), u = w(null), v = w(null), f = w(t.position), h = w({}), c = z(() => typeof t.width == "number" ? `${t.width}px` : t.width), x = () => {
      v.value && clearTimeout(v.value), v.value = window.setTimeout(() => {
        i.value = !0, ce(() => {
          y(), o("show");
        });
      }, t.delay);
    }, _ = () => {
      v.value && clearTimeout(v.value), v.value = window.setTimeout(() => {
        i.value = !1, o("hide");
      }, 100);
    }, y = () => {
      if (!n.value || !u.value) return;
      const g = n.value.getBoundingClientRect(), M = u.value.getBoundingClientRect(), X = document.documentElement.scrollTop || document.body.scrollTop, p = document.documentElement.scrollLeft || document.body.scrollLeft, S = window.innerWidth, N = window.innerHeight, T = 10;
      if (t.position === "auto") {
        const F = g.top - T, R = N - g.bottom - T, B = g.left - T, j = S - g.right - T, ae = M.height, ee = M.width;
        var H = [];
        if (R > ae && H.push({ pos: "bottom", space: R }), F > ae && H.push({ pos: "top", space: F }), j > ee && H.push({ pos: "right", space: j }), B > ee && H.push({ pos: "left", space: B }), H.length > 0)
          H.sort((Q, J) => J.space - Q.space), f.value = H[0].pos;
        else {
          const Q = Math.max(F, j, R, B);
          Q === F ? f.value = "top" : Q === j ? f.value = "right" : Q === R ? f.value = "bottom" : f.value = "left";
        }
      } else
        f.value = t.position;
      let $ = 0, b = 0;
      const I = 10;
      switch (f.value) {
        case "top":
          $ = g.left + g.width / 2 - M.width / 2 + p, b = g.top - M.height - I + X;
          break;
        case "right":
          $ = g.right + I + p, b = g.top + g.height / 2 - M.height / 2 + X;
          break;
        case "bottom":
          $ = g.left + g.width / 2 - M.width / 2 + p, b = g.bottom + I + X;
          break;
        case "left":
          $ = g.left - M.width - I + p, b = g.top + g.height / 2 - M.height / 2 + X;
          break;
      }
      const L = () => {
        $ < T ? $ = T : $ + M.width > S - T && ($ = S - M.width - T), b < T ? b = T : b + M.height > N + X - T && (b = N + X - M.height - T);
      };
      t.position, L(), h.value = {
        left: `${$}px`,
        top: `${b}px`,
        width: c.value
      };
    }, k = () => {
      t.trigger === "hover" && x();
    }, s = () => {
      t.trigger === "hover" && _();
    }, C = () => {
      t.trigger === "click" && (i.value ? _() : x());
    }, m = () => {
      t.trigger === "focus" && x();
    }, O = () => {
      t.trigger === "focus" && _();
    }, P = () => {
      i.value && y();
    }, Z = () => {
      i.value && y();
    };
    return te(() => t.position, () => {
      i.value && ce(y);
    }), le(() => {
      window.addEventListener("resize", P), window.addEventListener("scroll", Z), document.addEventListener("click", (g) => {
        if (i.value && t.trigger === "click") {
          const M = g.target;
          u.value && !u.value.contains(M) && n.value && !n.value.contains(M) && _();
        }
      });
    }), oe(() => {
      window.removeEventListener("resize", P), window.removeEventListener("scroll", Z), v.value && clearTimeout(v.value);
    }), (g, M) => (r(), d("div", null, [
      l("div", {
        ref_key: "triggerRef",
        ref: n,
        class: "tooltip-trigger",
        onMouseenter: k,
        onMouseleave: s,
        onClick: C,
        onFocus: m,
        onBlur: O
      }, [
        Y(g.$slots, "default", {}, void 0, !0)
      ], 544),
      (r(), fe(ve, { to: "body" }, [
        he(l("div", {
          ref_key: "tooltipRef",
          ref: u,
          class: E(["cp-cyber-tooltip", `theme-${e.theme}`, `effect-${e.effect}`, `position-${f.value}`]),
          style: q(h.value)
        }, [
          M[2] || (M[2] = l("div", { class: "tooltip-arrow" }, null, -1)),
          l("div", Ge, [
            l("div", Pe, [
              Y(g.$slots, "content", {}, () => [
                ue(V(e.content), 1)
              ], !0)
            ]),
            M[0] || (M[0] = l("div", { class: "tooltip-scanline" }, null, -1)),
            M[1] || (M[1] = l("div", { class: "tooltip-glitch" }, null, -1))
          ])
        ], 6), [
          [ge, i.value]
        ])
      ]))
    ]));
  }
}), We = /* @__PURE__ */ W(Ve, [["__scopeId", "data-v-18381a70"]]), Xe = G(We), qe = {
  key: 0,
  class: "prefix"
}, je = { class: "counter-container" }, Ke = {
  key: 0,
  class: "separator"
}, Ue = { class: "digit-top" }, Qe = { class: "digit-bottom" }, Ze = { class: "digit-top flip-top" }, Je = { class: "digit-bottom flip-bottom" }, et = {
  key: 1,
  class: "suffix"
}, tt = /* @__PURE__ */ A({
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
    const a = e, t = w(Number(a.from)), o = w(Number(a.value)), i = w(null), n = w(null), u = w(""), v = (s) => {
      const C = Math.pow(10, a.decimal);
      let O = (Math.round(s * C) / C).toFixed(a.decimal);
      if (a.separator) {
        const P = O.split(".");
        P[0] = P[0].replace(/\B(?=(\d{3})+(?!\d))/g, a.separator), O = P.join(".");
      }
      return O;
    }, f = z(() => v(t.value)), h = z(() => f.value.split("")), c = (s) => s === a.separator || s === ".", x = (s) => !u.value || s >= u.value.length ? !1 : u.value[s] !== h.value[s] && !c(h.value[s]), _ = (s) => {
      i.value === null && (i.value = s);
      const C = s - i.value, m = Math.min(C / a.duration, 1), O = Number(a.from), P = Number(a.to !== null ? a.to : o.value), Z = O + (P - O) * y(m);
      t.value = Z, m < 1 ? n.value = requestAnimationFrame(_) : (t.value = P, i.value = null);
    }, y = (s) => 1 - Math.pow(1 - s, 4), k = () => {
      u.value = f.value, n.value !== null && cancelAnimationFrame(n.value), i.value = null, n.value = requestAnimationFrame(_);
    };
    return te(() => a.value, (s) => {
      o.value = Number(s), k();
    }), te(() => a.to, (s) => {
      s !== null && (o.value = Number(s), k());
    }), le(() => {
      Number(a.from) !== Number(a.value) && k();
    }), oe(() => {
      n.value !== null && cancelAnimationFrame(n.value);
    }), (s, C) => (r(), d("div", {
      class: E(["cp-digital-counter", `theme-${e.theme}`])
    }, [
      e.prefix ? (r(), d("span", qe, V(e.prefix), 1)) : D("", !0),
      l("div", je, [
        (r(!0), d(K, null, U(h.value, (m, O) => (r(), d("div", {
          key: O,
          class: "digit-container"
        }, [
          c(m) ? (r(), d("div", Ke, V(m), 1)) : (r(), d("div", {
            key: 1,
            class: E(["digit-flipper", { animate: x(O) }])
          }, [
            l("div", Ue, V(m), 1),
            l("div", Qe, V(m), 1),
            l("div", Ze, V(m), 1),
            l("div", Je, V(m), 1)
          ], 2))
        ]))), 128))
      ]),
      e.suffix ? (r(), d("span", et, V(e.suffix), 1)) : D("", !0)
    ], 2));
  }
}), at = /* @__PURE__ */ W(tt, [["__scopeId", "data-v-41a40b63"]]), lt = G(at), nt = {
  class: "cp-full-page",
  id: "page-scroll"
}, ot = ["onClick"], st = /* @__PURE__ */ A({
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
    const t = e, o = a, i = w();
    xe(() => {
      var g;
      (g = i.value) != null && g.style && (console.log("watch", u.value), i.value.style.transform = u.value);
    });
    const n = z(() => {
      var M, X;
      v.value = !0;
      let g = 0;
      return (M = document.getElementById("page-scroll")) != null && M.clientHeight ? g = ((X = document.getElementById("page-scroll")) == null ? void 0 : X.clientHeight) ?? 0 : g = window.innerHeight, g;
    }), u = z(() => (console.log(m.value, n.value), `translateY(-${m.value * n.value}px)`)), v = w(!1), f = w(!0);
    function h(g) {
      v.value = !1, f.value && (f.value = !1, C(g), setTimeout(() => {
        f.value = !0;
      }, 500));
    }
    const c = w(0), x = w(0), _ = w(0);
    function y(g) {
      c.value = g.touches[0].pageY || g.changedTouches[0].pageY;
    }
    function k(g) {
      g.preventDefault(), v.value = !1, x.value = g.changedTouches[0].pageY || g.touches[0].pageY, _.value = x.value - c.value, Math.abs(_.value) >= 60 ? (m.value < t.items.length - 1 && _.value < 0 && m.value++, m.value > 0 && _.value > 0 && m.value--) : (console.log("else", -m.value * n.value), i.value.style.transform = `translateY(-${m.value * n.value}px)`);
    }
    function s(g) {
      v.value = !0, g.preventDefault(), _.value = (g.changedTouches[0].pageY || g.touches[0].pageY) - c.value, !(m.value === t.items.length - 1 && _.value < 0 || m.value === 0 && _.value > 0) && (console.log("else", -m.value * n.value + _.value * -1), i.value.style.transform = `translateY(-${m.value * n.value + _.value * -1}px)`);
    }
    function C(g) {
      o("change", g.wheelDelta), g.wheelDelta < 0 ? O() : P();
    }
    const m = w(0);
    function O() {
      m.value < t.items.length - 1 && (m.value++, o("toNext", m.value));
    }
    function P() {
      (m.value > 1 || m.value === 1) && (m.value--, o("toLast", m.value));
    }
    function Z(g) {
      console.log(g), v.value = !1, m.value = g;
    }
    return (g, M) => (r(), d("div", nt, [
      l("div", {
        ref_key: "element",
        ref: i,
        class: E([{ activeTranstion: v.value }, "inner-box"]),
        onMousewheel: h,
        onTouchstart: y,
        onTouchend: k,
        onTouchmove: s
      }, [
        Y(g.$slots, "default", {}, void 0, !0)
      ], 34),
      l("div", {
        class: E(["cp-full-dot", t.position])
      }, [
        (r(!0), d(K, null, U(t.items, (X, p) => (r(), d("div", {
          onClick: (S) => Z(p),
          class: "cp-full-dot-item"
        }, [
          l("div", {
            class: E(["cp-full-dot-item-bg", { active: p === m.value }])
          }, null, 2),
          t.showTitle ? he((r(), d("div", {
            key: 0,
            class: "show-dec"
          }, V(X.title), 513)), [
            [ge, p === m.value]
          ]) : D("", !0)
        ], 8, ot))), 256))
      ], 2)
    ]));
  }
}), rt = /* @__PURE__ */ W(st, [["__scopeId", "data-v-41ff6c24"]]), it = G(rt), ct = ["src", "alt"], ut = {
  key: 1,
  class: "loading-placeholder"
}, dt = {
  key: 2,
  class: "error-placeholder"
}, ft = /* @__PURE__ */ A({
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
    const t = e, o = a, i = w(null), n = w(null), u = w(null), v = w(!1), f = w(!1), h = w(!1), c = w(null), x = w(null), _ = z(() => t.intensity / 10), y = () => {
      v.value = !0, f.value = !1, setTimeout(() => {
        s(), t.triggerMode === "auto" ? X() : t.triggerMode === "random" && p();
      }, 0);
    }, k = () => {
      f.value = !0, v.value = !1, console.error("Failed to load image:", t.src);
    }, s = () => {
      if (!u.value || !n.value) return;
      const $ = n.value, b = u.value, I = b.getContext("2d");
      if (I) {
        b.width = $.naturalWidth, b.height = $.naturalHeight;
        try {
          I.drawImage($, 0, 0), x.value = I.getImageData(0, 0, b.width, b.height);
        } catch (L) {
          console.error("Failed to get image data (possibly CORS issue):", L), f.value = !0;
        }
      }
    }, C = ($, b) => {
      if (!x.value) return;
      const I = $.canvas, L = $.getImageData(0, 0, I.width, I.height), F = L.data, R = x.value.data, B = Math.floor(20 * b), j = Math.floor(Math.random() * B), ae = Math.floor(Math.random() * B);
      for (let ee = 0; ee < I.height; ee++)
        for (let Q = 0; Q < I.width; Q++) {
          const J = (ee * I.width + Q) * 4, ne = Math.min(Math.max(Q + j, 0), I.width - 1), pe = (Math.min(Math.max(ee + ae, 0), I.height - 1) * I.width + ne) * 4;
          F[J] = R[pe];
          const me = Math.min(Math.max(Q - j, 0), I.width - 1), ye = (Math.min(Math.max(ee - ae, 0), I.height - 1) * I.width + me) * 4;
          F[J + 2] = R[ye + 2], F[J + 1] = R[J + 1];
        }
      $.putImageData(L, 0, 0);
    }, m = ($, b) => {
      if (!x.value) return;
      const I = $.canvas;
      $.putImageData(x.value, 0, 0);
      const L = Math.max(1, Math.floor(5 / b)), F = 0.5 + b * 0.1;
      for (let R = 0; R < I.height; R += L * 2)
        $.fillStyle = `rgba(255, 255, 255, ${F})`, $.fillRect(0, R, I.width, L);
    }, O = ($, b) => {
      if (!x.value) return;
      const I = $.canvas;
      $.putImageData(x.value, 0, 0);
      const L = Math.max(4, Math.floor(b * 8));
      if (Math.random() > 0.5)
        for (let R = 0; R < I.height; R += L)
          for (let B = 0; B < I.width; B += L) {
            const j = $.getImageData(B, R, 1, 1).data;
            $.fillStyle = `rgb(${j[0]}, ${j[1]}, ${j[2]})`, $.fillRect(B, R, L, L);
          }
      else {
        const R = Math.floor(b * 3);
        for (let B = 0; B < R; B++) {
          const j = Math.floor(Math.random() * (I.width - 50)), ae = Math.floor(Math.random() * (I.height - 50)), ee = Math.floor(Math.random() * 100 * b) + 30, Q = Math.floor(Math.random() * 80 * b) + 20;
          for (let J = ae; J < ae + Q; J += L)
            for (let ne = j; ne < j + ee; ne += L)
              if (ne < I.width && J < I.height) {
                const re = $.getImageData(ne, J, 1, 1).data;
                $.fillStyle = `rgb(${re[0]}, ${re[1]}, ${re[2]})`, $.fillRect(ne, J, L, L);
              }
        }
      }
    }, P = ($, b) => {
      if (!x.value) return;
      const I = $.canvas, L = $.getImageData(0, 0, I.width, I.height), F = L.data, R = 0.2 + b * 0.05;
      for (let B = 0; B < F.length; B += 4)
        Math.random() < R && (Math.random() > 0.5 ? (F[B] = 255, F[B + 1] = 255, F[B + 2] = 255) : (F[B] = Math.floor(Math.random() * 256), F[B + 1] = Math.floor(Math.random() * 256), F[B + 2] = Math.floor(Math.random() * 256)));
      $.putImageData(L, 0, 0);
    }, Z = ($, b) => {
      [...["rgb-shift", "scanline", "pixelate", "noise"]].sort(() => 0.5 - Math.random()).slice(0, 2 + Math.floor(Math.random() * 2)).forEach((R) => {
        switch (R) {
          case "rgb-shift":
            C($, b);
            break;
          case "scanline":
            m($, b);
            break;
          case "pixelate":
            O($, b);
            break;
          case "noise":
            P($, b);
            break;
        }
      });
    }, g = () => {
      if (!u.value || !x.value) return;
      const b = u.value.getContext("2d");
      if (b) {
        switch (b.putImageData(x.value, 0, 0), t.glitchType) {
          case "rgb-shift":
            C(b, _.value);
            break;
          case "scanline":
            m(b, _.value);
            break;
          case "pixelate":
            O(b, _.value);
            break;
          case "noise":
            P(b, _.value);
            break;
          case "combined":
            Z(b, _.value);
            break;
        }
        h.value = !0, o("glitch-start");
      }
    }, M = () => {
      if (!u.value || !x.value) return;
      const b = u.value.getContext("2d");
      b && (b.putImageData(x.value, 0, 0), h.value = !1, o("glitch-end"));
    }, X = () => {
      c.value && clearInterval(c.value), g(), t.animated && (c.value = window.setInterval(() => {
        g();
      }, t.interval));
    }, p = () => {
      c.value && clearInterval(c.value), c.value = window.setInterval(() => {
        Math.random() < 0.5 && (g(), setTimeout(() => {
          M();
        }, 200 + Math.random() * 300));
      }, t.interval);
    }, S = () => {
      c.value && (clearInterval(c.value), c.value = null), M();
    }, N = () => {
      t.triggerMode === "hover" && X();
    }, T = () => {
      t.triggerMode === "hover" && !t.animated && S();
    }, H = () => {
      t.triggerMode === "click" && (h.value ? S() : X());
    };
    return te(() => [t.src, t.glitchType, t.intensity], () => {
      t.src && (v.value = !1, f.value = !1), h.value && g();
    }), le(() => {
      n.value && n.value.complete && n.value.naturalHeight !== 0 && y();
    }), oe(() => {
      c.value && clearInterval(c.value);
    }), ($, b) => (r(), d("div", {
      class: E(["cp-glitch-image", { animated: e.animated }]),
      onMouseenter: N,
      onMouseleave: T,
      onClick: H
    }, [
      l("div", {
        class: "image-container",
        ref_key: "imageContainerRef",
        ref: i
      }, [
        l("img", {
          src: e.src,
          alt: e.alt,
          ref_key: "imageRef",
          ref: n,
          class: "original-image",
          crossOrigin: "anonymous",
          onLoad: y,
          onError: k
        }, null, 40, ct),
        v.value && !f.value ? (r(), d("canvas", {
          key: 0,
          ref_key: "glitchCanvasRef",
          ref: u,
          class: "glitch-canvas"
        }, null, 512)) : D("", !0),
        !v.value && !f.value ? (r(), d("div", ut, b[0] || (b[0] = [
          l("div", { class: "loading-text" }, "Loading...", -1)
        ]))) : D("", !0),
        f.value ? (r(), d("div", dt, b[1] || (b[1] = [
          l("div", { class: "error-text" }, "Image Load Failed", -1)
        ]))) : D("", !0)
      ], 512)
    ], 34));
  }
}), vt = /* @__PURE__ */ W(ft, [["__scopeId", "data-v-b537a1f3"]]), ht = G(vt), gt = ["data-progress"], pt = { class: "progress-container" }, mt = {
  key: 0,
  class: "progress-text"
}, yt = /* @__PURE__ */ A({
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
    const a = e, t = w(null), o = w(null), i = z(() => a.direction === "vertical" ? "vertical" : "horizontal"), n = z(() => {
      const f = a.direction === "vertical" ? "height" : "width", h = a.indeterminate ? "100%" : `${a.progress}%`;
      return {
        [f]: h,
        backgroundColor: a.color,
        boxShadow: `0 0 ${a.glitchIntensity * 2}px ${a.color}`
      };
    }), u = () => {
      if (!t.value) return;
      const f = t.value.querySelector(".glitch-effect");
      if (!f) return;
      const h = () => {
        if (!f) return;
        if (Math.random() < a.glitchIntensity / 20) {
          const x = Math.random() * a.glitchIntensity - a.glitchIntensity / 2, _ = Math.random() * a.glitchIntensity - a.glitchIntensity / 2, y = Math.random() * a.glitchIntensity - a.glitchIntensity / 2, k = Math.random() * a.glitchIntensity / 2;
          f.style.transform = `translate(${x}px, ${_}px) skew(${y}deg)`, f.style.filter = `blur(${k}px)`, f.style.opacity = "1", setTimeout(() => {
            f && (f.style.transform = "translate(0, 0) skew(0)", f.style.filter = "blur(0)", f.style.opacity = "0");
          }, 150);
        }
      };
      o.value = window.setInterval(() => {
        h();
      }, 500);
    };
    let v = a.progress;
    return te(() => a.progress, (f) => {
      if (f !== v) {
        if (t.value) {
          const h = t.value.querySelector(".glitch-effect");
          if (h) {
            const c = Math.random() * a.glitchIntensity * 2 - a.glitchIntensity, x = Math.random() * a.glitchIntensity - a.glitchIntensity / 2;
            h.style.transform = `translate(${c}px, ${x}px)`, h.style.opacity = "1", setTimeout(() => {
              h && (h.style.transform = "translate(0, 0)", h.style.opacity = "0");
            }, 300);
          }
        }
        v = f;
      }
    }), le(() => {
      u();
    }), oe(() => {
      o.value && clearInterval(o.value);
    }), (f, h) => (r(), d("div", {
      class: E(["cp-glitch-progress", i.value, { indeterminate: e.indeterminate }]),
      "data-progress": e.progress
    }, [
      l("div", pt, [
        l("div", {
          class: "progress-bar",
          style: q(n.value),
          ref_key: "progressBarRef",
          ref: t
        }, h[0] || (h[0] = [
          l("div", { class: "glitch-effect" }, null, -1)
        ]), 4),
        e.showText && !e.indeterminate ? (r(), d("div", mt, V(e.progress) + "% ", 1)) : D("", !0)
      ])
    ], 10, gt));
  }
}), bt = /* @__PURE__ */ W(yt, [["__scopeId", "data-v-27854e11"]]), wt = G(bt), $t = { class: "glow-text" }, xt = /* @__PURE__ */ A({
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
    return le(() => {
      document.documentElement.style.setProperty("--child-color", a.color);
    }), (t, o) => (r(), d("div", $t, [
      Y(t.$slots, "default", {}, void 0, !0)
    ]));
  }
}), _t = /* @__PURE__ */ W(xt, [["__scopeId", "data-v-986b354d"]]), kt = G(_t), Ct = ["tabindex", "aria-disabled", "aria-label"], St = { class: "holo-card-content" }, It = {
  key: 0,
  class: "card-title"
}, Mt = /* @__PURE__ */ A({
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
    de((s) => ({
      e2fca770: o.hologramColor
    }));
    const a = _e(), t = se(), o = e, i = w({ x: 0, y: 0 }), n = w(!1), f = ((s, C) => {
      let m;
      return function() {
        const O = arguments, P = a;
        m || (s.apply(P, O), m = !0, setTimeout(() => m = !1, C));
      };
    })((s) => {
      if (o.disabled) return;
      const C = s.currentTarget.getBoundingClientRect();
      i.value = {
        x: (s.clientX - C.left) / C.width * 2 - 1,
        y: (s.clientY - C.top) / C.height * 2 - 1
      }, n.value = !0;
    }, 16), h = () => {
      n.value = !1, i.value = { x: 0, y: 0 };
    }, c = () => {
      o.disabled || (n.value = !0, i.value = { x: 0, y: 0 });
    }, x = z(() => [(() => {
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
    })()]), _ = z(() => {
      const s = {};
      if (o.rounded || (s.borderRadius = "0"), o.disabled && (s.cursor = "not-allowed", s.opacity = "0.6"), !n.value || o.disabled) return s;
      const C = i.value.y * 10, m = -i.value.x * 10;
      return {
        ...s,
        transform: `perspective(1000px) rotateX(${C}deg) rotateY(${m}deg) scale3d(1.05, 1.05, 1.05)`,
        transition: "transform 0.1s ease"
      };
    }), y = z(() => {
      if (!n.value || o.disabled) return {};
      const s = Math.max(-50, Math.min(50, i.value.x * 10)), C = Math.max(-50, Math.min(50, i.value.y * 10));
      return {
        background: `radial-gradient(circle at ${50 + s}% ${50 + C}%, ${o.hologramColor}33, transparent 70%)`,
        opacity: 0.8,
        transition: "background 0.1s ease"
      };
    }), k = z(() => {
      const s = o.glowIntensity / 100;
      return {
        boxShadow: `0 0 ${10 + o.glowIntensity / 5}px ${o.hologramColor}${Math.floor(s * 99).toString(16).padStart(2, "0")}`,
        opacity: n.value && !o.disabled ? s : s * 0.5
      };
    });
    return (s, C) => (r(), d("div", {
      class: E([
        "cp-holo-card",
        `depth-${e.depth}`,
        x.value,
        `theme-${e.theme}`,
        `effect-${e.effect}`
      ]),
      style: q(_.value),
      onMousemove: C[0] || (C[0] = //@ts-ignore
      (...m) => ie(f) && ie(f)(...m)),
      onMouseleave: h,
      onFocus: c,
      onBlur: h,
      tabindex: e.disabled ? -1 : 0,
      role: "button",
      "aria-disabled": e.disabled,
      "aria-label": e.title
    }, [
      l("div", St, [
        e.title && !ie(t).title ? (r(), d("div", It, V(e.title), 1)) : D("", !0),
        Y(s.$slots, "title", {}, void 0, !0),
        Y(s.$slots, "default", {}, void 0, !0),
        Y(s.$slots, "footer", {}, void 0, !0)
      ]),
      l("div", {
        class: "holo-card-hologram-effect",
        style: q(y.value)
      }, null, 4),
      l("div", {
        class: "holo-card-glow",
        style: q(k.value)
      }, null, 4)
    ], 46, Ct));
  }
}), Tt = /* @__PURE__ */ W(Mt, [["__scopeId", "data-v-9f019331"]]), Nt = G(Tt), Et = { class: "loader-container" }, zt = {
  key: 0,
  class: "cube-loader"
}, Lt = {
  key: 1,
  class: "sphere-loader"
}, Rt = { class: "sphere" }, Bt = {
  key: 2,
  class: "datastream-loader"
}, Dt = {
  key: 3,
  class: "circuit-loader"
}, Ot = { class: "circuit-board" }, Ht = {
  key: 0,
  class: "loader-text"
}, Ft = { class: "typing-text" }, Yt = /* @__PURE__ */ A({
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
    de((f) => ({
      c40498b2: f.$props.color,
      "7f665050": t
    }));
    const a = e, t = (6 / a.speed).toString() + "s", o = z(() => {
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
    }), i = w(""), n = w(0), u = w(null), v = () => {
      if (!a.text) return;
      n.value = 0, i.value = "";
      const f = () => {
        n.value < a.text.length ? (i.value += a.text[n.value], n.value++) : setTimeout(() => {
          n.value = 0, i.value = "";
        }, 1e3);
      }, h = 100 / a.speed;
      u.value = window.setInterval(f, h);
    };
    return te(() => a.text, () => {
      u.value && clearInterval(u.value), v();
    }), le(() => {
      v();
    }), oe(() => {
      u.value && clearInterval(u.value);
    }), (f, h) => (r(), d("div", {
      class: E(["cp-holo-loader", o.value, { "transparent-bg": e.transparent }])
    }, [
      l("div", Et, [
        l("div", {
          class: E(["holo-projection", `type-${e.type}`])
        }, [
          e.type === "cube" || e.type === "split" ? (r(), d("div", zt, h[0] || (h[0] = [
            ke('<div class="cube" data-v-6df1b911><div class="cube-face front" data-v-6df1b911></div><div class="cube-face back" data-v-6df1b911></div><div class="cube-face right" data-v-6df1b911></div><div class="cube-face left" data-v-6df1b911></div><div class="cube-face top" data-v-6df1b911></div><div class="cube-face bottom" data-v-6df1b911></div></div>', 1)
          ]))) : e.type === "sphere" ? (r(), d("div", Lt, [
            l("div", Rt, [
              (r(), d(K, null, U(3, (c) => l("div", {
                class: "sphere-ring",
                key: c
              })), 64))
            ])
          ])) : e.type === "datastream" ? (r(), d("div", Bt, [
            (r(), d(K, null, U(10, (c) => l("div", {
              class: "data-line",
              key: c
            })), 64))
          ])) : e.type === "circuit" ? (r(), d("div", Dt, [
            l("div", Ot, [
              (r(), d(K, null, U(5, (c) => l("div", {
                class: "circuit-path",
                key: c
              })), 64)),
              (r(), d(K, null, U(6, (c) => l("div", {
                class: "circuit-node",
                key: c + 10
              })), 64))
            ])
          ])) : D("", !0)
        ], 2),
        e.text ? (r(), d("div", Ht, [
          l("span", Ft, V(i.value), 1),
          h[1] || (h[1] = l("span", { class: "cursor" }, "_", -1))
        ])) : D("", !0),
        h[2] || (h[2] = l("div", { class: "holo-base" }, [
          l("div", { class: "base-glow" })
        ], -1))
      ])
    ], 2));
  }
}), At = /* @__PURE__ */ W(Yt, [["__scopeId", "data-v-6df1b911"]]), Gt = G(At), Pt = ["onClick"], Vt = { class: "th-content" }, Wt = {
  key: 0,
  class: "sort-icon"
}, Xt = ["onClick"], qt = {
  key: 0,
  class: "loading-overlay"
}, jt = {
  key: 1,
  class: "empty-data"
}, Kt = {
  key: 0,
  class: "table-footer"
}, Ut = /* @__PURE__ */ A({
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
    // 虚拟滚动相关
    bufferSize: {
      type: Number,
      default: 5
    }
  },
  emits: ["row-click", "sort-change", "load-more"],
  setup(e, { emit: a }) {
    var M, X;
    const t = e, o = a, i = w(null), n = w(null), u = w(0), v = w(0), f = w(0), h = w(0), c = w({
      key: ((M = t.defaultSort) == null ? void 0 : M.key) || "",
      order: ((X = t.defaultSort) == null ? void 0 : X.order) || ""
    }), x = z(() => {
      var p;
      return (((p = t.data) == null ? void 0 : p.length) || 0) * t.rowHeight;
    }), _ = z(() => {
      if (!t.data || t.data.length === 0) return [];
      let p = [...t.data];
      return c.value.key && c.value.order && p.sort((S, N) => {
        const T = S[c.value.key], H = N[c.value.key];
        return c.value.order === "asc" ? T > H ? 1 : -1 : T < H ? 1 : -1;
      }), p.slice(u.value, v.value);
    }), y = (p, S) => typeof t.rowKey == "function" ? t.rowKey(p) : typeof t.rowKey == "string" ? p[t.rowKey] : `row-${S}`, k = (p, S) => S.formatter ? S.formatter(p, S, t.data.indexOf(p)) : p[S.key], s = (p) => p.width ? { width: typeof p.width == "number" ? `${p.width}px` : p.width } : {}, C = (p) => {
      if (!t.selectedRows || t.selectedRows.length === 0) return !1;
      const S = y(p, t.data.indexOf(p));
      return t.selectedRows.some((N) => {
        const T = y(N, t.data.indexOf(N));
        return S === T;
      });
    }, m = (p) => {
      o("row-click", p);
    }, O = (p) => {
      if (!p.sortable) return;
      let S = "asc";
      c.value.key === p.key && (c.value.order === "asc" ? S = "desc" : c.value.order === "desc" ? S = "" : S = "asc"), c.value = {
        key: p.key,
        order: S
      }, o("sort-change", { ...c.value });
    }, P = () => {
      if (!n.value) return;
      const p = n.value.scrollTop, S = n.value.clientHeight, N = Math.max(0, Math.floor(p / t.rowHeight) - t.bufferSize), T = Math.min(
        t.data.length,
        Math.ceil((p + S) / t.rowHeight) + t.bufferSize
      ), H = N * t.rowHeight;
      u.value = N, v.value = T, f.value = H, T >= t.data.length - 10 && !t.loading && o("load-more");
    }, Z = () => {
      if (!n.value) return;
      const p = n.value.clientHeight;
      h.value = Math.ceil(p / t.rowHeight) + 2 * t.bufferSize, v.value = Math.min(t.data.length, h.value);
    }, g = () => {
      !i.value || !n.value || (i.value.scrollLeft = n.value.scrollLeft);
    };
    return te(() => t.data, () => {
      ce(() => {
        P();
      });
    }, { deep: !0 }), te(() => t.defaultSort, (p) => {
      p && p.key && (c.value = { ...p });
    }, { deep: !0 }), le(() => {
      Z(), n.value && n.value.addEventListener("scroll", g), window.addEventListener("resize", Z);
    }), oe(() => {
      n.value && n.value.removeEventListener("scroll", g), window.removeEventListener("resize", Z);
    }), (p, S) => (r(), d("div", {
      class: E(["cp-infinite-table", { loading: e.loading }])
    }, [
      l("div", {
        class: "table-header",
        ref_key: "headerRef",
        ref: i
      }, [
        l("table", null, [
          l("colgroup", null, [
            (r(!0), d(K, null, U(e.columns, (N, T) => (r(), d("col", {
              key: `col-${T}`,
              style: q(s(N))
            }, null, 4))), 128))
          ]),
          l("thead", null, [
            l("tr", null, [
              (r(!0), d(K, null, U(e.columns, (N, T) => (r(), d("th", {
                key: `header-${T}`,
                class: E({ sortable: N.sortable }),
                onClick: (H) => O(N)
              }, [
                l("div", Vt, [
                  l("span", null, V(N.title), 1),
                  N.sortable ? (r(), d("span", Wt, [
                    l("span", {
                      class: E(["sort-up", { active: c.value.key === N.key && c.value.order === "asc" }])
                    }, "▲", 2),
                    l("span", {
                      class: E(["sort-down", { active: c.value.key === N.key && c.value.order === "desc" }])
                    }, "▼", 2)
                  ])) : D("", !0)
                ])
              ], 10, Pt))), 128))
            ])
          ])
        ])
      ], 512),
      l("div", {
        class: "table-body",
        ref_key: "bodyRef",
        ref: n,
        onScroll: P
      }, [
        l("div", {
          class: "scroll-container",
          style: q({ height: `${x.value}px` })
        }, [
          l("table", {
            style: q({ transform: `translateY(${f.value}px)` })
          }, [
            l("colgroup", null, [
              (r(!0), d(K, null, U(e.columns, (N, T) => (r(), d("col", {
                key: `col-${T}`,
                style: q(s(N))
              }, null, 4))), 128))
            ]),
            l("tbody", null, [
              (r(!0), d(K, null, U(_.value, (N, T) => (r(), d("tr", {
                key: y(N, T),
                class: E({ selected: C(N) }),
                onClick: (H) => m(N)
              }, [
                (r(!0), d(K, null, U(e.columns, (H, $) => (r(), d("td", {
                  key: `cell-${T}-${$}`
                }, [
                  Y(p.$slots, `cell-${H.key}`, {
                    row: N,
                    column: H,
                    index: u.value + T
                  }, () => [
                    ue(V(k(N, H)), 1)
                  ], !0)
                ]))), 128))
              ], 10, Xt))), 128))
            ])
          ], 4)
        ], 4),
        e.loading ? (r(), d("div", qt, S[0] || (S[0] = [
          l("div", { class: "loading-spinner" }, [
            l("div", { class: "spinner-circle" }),
            l("div", { class: "spinner-text" }, "加载中...")
          ], -1)
        ]))) : D("", !0),
        !e.loading && (!e.data || e.data.length === 0) ? (r(), d("div", jt, [
          Y(p.$slots, "empty", {}, () => [
            S[1] || (S[1] = l("div", { class: "empty-content" }, [
              l("div", { class: "empty-icon" }, "⚠"),
              l("div", { class: "empty-text" }, "暂无数据")
            ], -1))
          ], !0)
        ])) : D("", !0)
      ], 544),
      p.$slots.footer ? (r(), d("div", Kt, [
        Y(p.$slots, "footer", {}, void 0, !0)
      ])) : D("", !0),
      S[2] || (S[2] = l("div", { class: "table-scanline" }, null, -1)),
      S[3] || (S[3] = l("div", { class: "table-glitch-effect" }, null, -1))
    ], 2));
  }
}), Qt = /* @__PURE__ */ W(Ut, [["__scopeId", "data-v-ec2231f8"]]), Zt = G(Qt), Jt = /* @__PURE__ */ A({
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
    se();
    const t = e, o = z(() => {
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
    return (n, u) => (r(), d("div", {
      class: E(["cp-button-neno", i.value])
    }, [
      l("div", {
        class: E(["button", o.value, t.bg ? "show-bg" : ""])
      }, [
        u[0] || (u[0] = l("div", { class: "border" }, null, -1)),
        u[1] || (u[1] = l("div", { class: "border" }, null, -1)),
        u[2] || (u[2] = l("div", { class: "border" }, null, -1)),
        u[3] || (u[3] = l("div", { class: "border" }, null, -1)),
        Y(n.$slots, "default", {}, void 0, !0)
      ], 2)
    ], 2));
  }
}), ea = /* @__PURE__ */ W(Jt, [["__scopeId", "data-v-c8c24548"]]), ta = G(ea), aa = ["aria-checked", "aria-disabled"], la = { class: "toggle-thumb" }, na = {
  key: 0,
  class: "pulse-effect"
}, oa = /* @__PURE__ */ A({
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
    }
  },
  emits: ["update:modelValue", "change"],
  setup(e, { emit: a }) {
    de((u) => ({
      "353518d4": t.inActiveColor,
      "820f538e": t.activeColor
    }));
    const t = e, o = a, i = z(() => {
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
      const u = !t.modelValue;
      o("update:modelValue", u), o("change", u);
    };
    return (u, v) => (r(), d("div", {
      class: E(["cp-neon-toggle", i.value, { active: e.modelValue, disabled: e.disabled }]),
      onClick: n,
      "aria-checked": e.modelValue,
      role: "switch",
      "aria-disabled": e.disabled
    }, [
      v[0] || (v[0] = l("div", { class: "toggle-track" }, [
        l("div", { class: "toggle-track-inner" }),
        l("div", { class: "circuit-lines" })
      ], -1)),
      l("div", la, [
        e.pulseEffect && e.modelValue ? (r(), d("div", na)) : D("", !0)
      ])
    ], 10, aa));
  }
}), sa = /* @__PURE__ */ W(oa, [["__scopeId", "data-v-31e0bc28"]]), ra = G(sa), ia = /* @__PURE__ */ A({
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
    se();
    const t = e, o = z(() => {
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
    return (n, u) => (r(), d("div", {
      class: E(["cp-button-neno", i.value])
    }, [
      l("div", {
        class: E(["button", o.value, t.bg ? "show-bg" : ""])
      }, [
        Y(n.$slots, "default", {}, void 0, !0)
      ], 2)
    ], 2));
  }
}), ca = /* @__PURE__ */ W(ia, [["__scopeId", "data-v-f4ab33ea"]]), ua = G(ca), da = ["data-word"], fa = /* @__PURE__ */ A({
  name: "CyberText",
  __name: "text",
  props: {
    lineColor: {
      type: String,
      default: "#fff"
    }
  },
  setup(e) {
    const a = w(""), t = se();
    if (t && t.default) {
      let i = t.default();
      a.value = i[0].children;
    }
    const o = e;
    return (i, n) => (r(), d("div", {
      class: "cp-text",
      "data-word": a.value
    }, [
      Y(i.$slots, "default", {}, void 0, !0),
      l("div", {
        class: "cp-text-line",
        style: q("background: " + o.lineColor)
      }, null, 4)
    ], 8, da));
  }
}), va = /* @__PURE__ */ W(fa, [["__scopeId", "data-v-3aa7f29f"]]), ha = G(va), ga = /* @__PURE__ */ A({
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
    const a = e, t = (i, n) => {
      let u = `0px 0px ${i}`;
      for (let v = 1; v <= a.long; v++) {
        const f = o(i, v);
        u += `, ${n === "left" ? "-" : ""}${v}px ${v}px ${f}`;
      }
      return u;
    }, o = (i, n) => {
      const u = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i.exec(i), v = /^rgba?\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})(,\s*([\d.]+))?\)$/i.exec(i);
      if (u) {
        const f = parseInt(u[1], 16), h = parseInt(u[2], 16), c = parseInt(u[3], 16), x = u[4] ? parseInt(u[4], 16) / 255 : 1, _ = Math.max(0, x - n * 0.05);
        return `rgba(${f}, ${h}, ${c}, ${_})`;
      } else if (v) {
        const f = parseInt(v[1], 10), h = parseInt(v[2], 10), c = parseInt(v[3], 10), x = v[5] ? parseFloat(v[5]) : 1, _ = Math.max(0, x - n * 0.05);
        return `rgba(${f}, ${h}, ${c}, ${_})`;
      } else
        throw new Error(`Unsupported color format: ${i}`);
    };
    return (i, n) => (r(), d("div", {
      class: E(["shadow-text", a.direction]),
      style: q({ textShadow: t(a.shadowColor, a.direction) })
    }, [
      Y(i.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), pa = /* @__PURE__ */ W(ga, [["__scopeId", "data-v-baec179b"]]), ma = G(pa), ya = { class: "cp-typing" }, ba = { class: "content" }, wa = /* @__PURE__ */ A({
  name: "CyberTyping",
  __name: "typing",
  setup(e) {
    return (a, t) => (r(), d("div", ya, [
      l("div", ba, [
        Y(a.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), $a = /* @__PURE__ */ W(wa, [["__scopeId", "data-v-c43f79f6"]]), xa = G($a), _a = ["aria-label", "aria-busy"], ka = ["src", "alt", "loading", "crossorigin"], Ca = {
  key: 1,
  class: "placeholder"
}, Sa = ["src"], Ia = {
  key: 2,
  class: "error"
}, Ma = /* @__PURE__ */ A({
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
    const a = e, t = w(!1), o = w(!1), i = w(a.src), n = z(
      () => typeof a.width == "number" ? `${a.width}px` : a.width
    ), u = z(
      () => typeof a.height == "number" ? `${a.height}px` : a.height
    ), v = z(() => o.value && a.errorSrc ? `url(${a.errorSrc}) no-repeat` : `url(${i.value}) no-repeat`), f = () => {
      if (!a.src) return;
      t.value = !1, o.value = !1;
      const c = new Image();
      a.crossorigin && (c.crossOrigin = a.crossorigin), c.src = a.src, c.onload = () => {
        i.value = a.src, t.value = !0;
      }, c.onerror = () => {
        if (o.value = !0, a.errorSrc && a.errorSrc !== a.src) {
          i.value = a.errorSrc;
          const x = new Image();
          x.src = a.errorSrc, x.onload = () => t.value = !0;
        } else
          t.value = !0;
      };
    }, h = z(() => {
      switch (a.fit) {
        case "fill":
          return "100% 100%";
        case "scale-down":
          return "contain";
        default:
          return a.fit;
      }
    });
    return te(() => a.src, f), le(f), (c, x) => (r(), d("div", null, [
      l("div", {
        class: "imgbox",
        style: q({ width: n.value, height: u.value }),
        role: "img",
        "aria-label": c.alt || void 0,
        "aria-busy": !t.value && !o.value
      }, [
        c.src ? (r(), d("img", {
          key: 0,
          src: c.src,
          alt: c.alt,
          loading: c.loading,
          crossorigin: c.crossorigin,
          class: "hidden-image"
        }, null, 8, ka)) : D("", !0),
        l("div", {
          class: E(["cyberimg", {
            loaded: t.value && !o.value,
            loading: !t.value && !o.value,
            error: o.value,
            "no-glitch": c.disableGlitch
          }]),
          style: q({
            background: v.value,
            backgroundSize: h.value
          })
        }, [
          t.value && !o.value ? Y(c.$slots, "default", { key: 0 }, void 0, !0) : !t.value && c.placeholder ? (r(), d("div", Ca, [
            Y(c.$slots, "placeholder", {}, () => [
              l("img", {
                src: c.placeholder,
                alt: "Loading..."
              }, null, 8, Sa)
            ], !0)
          ])) : o.value ? (r(), d("div", Ia, [
            Y(c.$slots, "error", {}, () => [
              ue(V(c.errorContent), 1)
            ], !0)
          ])) : D("", !0)
        ], 6)
      ], 12, _a)
    ]));
  }
}), Ta = /* @__PURE__ */ W(Ma, [["__scopeId", "data-v-5faae0c2"]]), Na = G(Ta), Ea = { class: "text-container" }, za = ["data-text"], La = /* @__PURE__ */ A({
  name: "CyberMagicText",
  __name: "magicText",
  setup(e) {
    const a = w(""), t = se();
    if (t && t.default) {
      let o = t.default();
      a.value = o[0].children;
    }
    return (o, i) => (r(), d("div", Ea, [
      l("span", {
        class: "gradient-text",
        "data-text": a.value
      }, [
        Y(o.$slots, "default")
      ], 8, za)
    ]));
  }
}), Ra = G(La), Ba = { class: "imgWrap" }, Da = ["src"], Oa = /* @__PURE__ */ A({
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
    const a = e, t = w(a.imgList.length), o = i(a.imgWidth, 360 / t.value) * 1.6;
    function i(u, v) {
      const f = v * Math.PI / 180;
      return u / (2 * Math.sin(f / 2));
    }
    const n = (u) => {
      const v = 35 + (u + 1) * (360 / t.value), f = i(a.imgWidth, 360 / t.value);
      return {
        transform: `rotateY(${v}deg) translateZ(${f}px)`
      };
    };
    return (u, v) => (r(), d("div", {
      class: "container",
      style: q({
        "--container-width": `${o}px`,
        "--img-width": `${a.imgWidth}px`,
        "--img-height": `${a.imgHeight}px`
      })
    }, [
      l("div", {
        class: E(["stage", { "has-shadow": a.shadow }])
      }, [
        l("div", {
          class: "control",
          style: q({
            "--animation-duration": `${a.animationDuration}s`
          })
        }, [
          l("div", Ba, [
            (r(!0), d(K, null, U(a.imgList, (f, h) => (r(), d("div", {
              key: h,
              class: "img",
              style: q(n(h))
            }, [
              l("img", { src: f }, null, 8, Da)
            ], 4))), 128))
          ])
        ], 4)
      ], 2)
    ], 4));
  }
}), Ha = /* @__PURE__ */ W(Oa, [["__scopeId", "data-v-15a0847c"]]), Fa = G(Ha), Ya = [
  Ne,
  Ae,
  Xe,
  lt,
  ht,
  wt,
  Nt,
  Gt,
  Zt,
  ra,
  ta,
  ua,
  ha,
  ma,
  kt,
  xa,
  it,
  Na,
  Ra,
  Fa
], Aa = Ce([...Ya]);
console.log(
  "%c %s",
  "border: 1px solid #97E3FE;border-radius: 3px;padding: 2px 5px;color: white;font-weight:bolder;background: linear-gradient(to right, #fF717F,#CC54D1,#4EAFFA,#3DE1C3, #F7DA66)",
  "CyberPunk-UI"
);
const Va = Aa.install;
export {
  Aa as default,
  Va as install,
  Ce as makeInstaller
};
