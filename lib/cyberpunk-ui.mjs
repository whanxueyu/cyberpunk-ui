import { defineComponent as Y, useSlots as oe, computed as B, createElementBlock as r, openBlock as o, normalizeClass as E, createElementVNode as l, renderSlot as X, unref as ie, toDisplayString as P, ref as $, onUnmounted as se, createBlock as de, Teleport as fe, createCommentVNode as O, createVNode as be, TransitionGroup as we, withCtx as $e, Fragment as W, renderList as K, normalizeStyle as U, watch as ae, nextTick as ce, onMounted as ne, withDirectives as ve, createTextVNode as he, vShow as ge, watchEffect as xe, useCssVars as ue, getCurrentInstance as _e, createStaticVNode as ke } from "vue";
const Ce = (e = []) => ({
  install: (t) => {
    e.forEach((c) => t.use(c));
  }
}), A = (e, a) => (e.install = (t) => {
  for (const c of [e, ...Object.values({})])
    t.component(c.name, c);
}, e), Se = ["data-content"], Ie = { key: 1 }, Me = /* @__PURE__ */ Y({
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
    const t = oe(), c = e, i = B(() => {
      switch (c.type) {
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
    }), s = B(() => {
      switch (c.size) {
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
    return (u, v) => (o(), r("div", {
      class: E(["cp-button", s.value])
    }, [
      l("div", {
        class: E(["button", i.value]),
        "data-content": c.content
      }, [
        ie(t) ? X(u.$slots, "default", { key: 0 }, void 0, !0) : (o(), r("span", Ie, P(c.content), 1))
      ], 10, Se)
    ], 2));
  }
}), j = (e, a) => {
  const t = e.__vccOpts || e;
  for (const [c, i] of a)
    t[c] = i;
  return t;
}, Te = /* @__PURE__ */ j(Me, [["__scopeId", "data-v-c3d9b67f"]]), Ne = A(Te), Ee = { class: "notification-content" }, ze = {
  key: 0,
  class: "notification-icon"
}, Re = { class: "notification-body" }, Le = {
  key: 0,
  class: "notification-title"
}, Be = { class: "notification-message" }, De = {
  key: 1,
  class: "notification-actions"
}, Oe = ["onClick"], Fe = ["onClick"], He = /* @__PURE__ */ Y({
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
    const c = e, i = t, s = $([]), u = $(!1);
    let v = 0;
    const d = (y) => {
      const k = ++v, n = {
        id: k,
        title: y.title || "",
        message: y.message,
        type: y.type || "info",
        duration: y.duration !== void 0 ? y.duration : c.duration,
        showClose: y.showClose !== void 0 ? y.showClose : !0,
        showIcon: y.showIcon !== void 0 ? y.showIcon : !0,
        actions: y.actions || [],
        effect: y.effect || c.effect,
        onClose: y.onClose || (() => {
        })
      };
      if (s.value.push(n), u.value = !0, n.duration > 0 && setTimeout(() => {
        g(k);
      }, n.duration), s.value.length > c.maxCount) {
        const C = s.value[0];
        g(C.id);
      }
      return k;
    }, g = (y) => {
      const k = s.value.findIndex((n) => n.id === y);
      if (k !== -1) {
        const n = s.value[k];
        n.onClose && n.onClose(), s.value.splice(k, 1), i("close", y);
      }
    }, h = (y, k) => {
      k.callback && k.callback(), g(y.id);
    }, _ = () => {
      s.value.length === 0 && (u.value = !1);
    }, x = () => {
      s.value.forEach((y) => {
        y.onClose && y.onClose();
      }), s.value = [], u.value = !1;
    };
    return a({
      // 创建不同类型的通知
      info: (y) => d({ ...y, type: "info" }),
      success: (y) => d({ ...y, type: "success" }),
      warning: (y) => d({ ...y, type: "warning" }),
      error: (y) => d({ ...y, type: "error" }),
      // 通用创建方法
      create: d,
      // 关闭方法
      close: g,
      // 清除所有
      clearAll: x
    }), se(() => {
      x();
    }), (y, k) => (o(), de(fe, { to: "body" }, [
      u.value ? (o(), r("div", {
        key: 0,
        class: E(["cp-cyber-notification-container", `position-${e.position}`])
      }, [
        be(we, {
          name: "notification",
          tag: "div",
          onAfterLeave: _
        }, {
          default: $e(() => [
            (o(!0), r(W, null, K(s.value, (n) => (o(), r("div", {
              key: n.id,
              class: E(["cp-cyber-notification", `type-${n.type}`, `effect-${n.effect}`])
            }, [
              l("div", Ee, [
                n.showIcon ? (o(), r("div", ze, k[0] || (k[0] = [
                  l("div", { class: "icon-circle" }, null, -1),
                  l("div", { class: "icon-symbol" }, null, -1)
                ]))) : O("", !0),
                l("div", Re, [
                  n.title ? (o(), r("div", Le, P(n.title), 1)) : O("", !0),
                  l("div", Be, P(n.message), 1),
                  n.actions && n.actions.length ? (o(), r("div", De, [
                    (o(!0), r(W, null, K(n.actions, (C, m) => (o(), r("button", {
                      key: m,
                      class: "action-button",
                      onClick: (D) => h(n, C)
                    }, P(C.text), 9, Oe))), 128))
                  ])) : O("", !0)
                ]),
                n.showClose ? (o(), r("div", {
                  key: 1,
                  class: "notification-close",
                  onClick: (C) => g(n.id)
                }, k[1] || (k[1] = [
                  l("span", { class: "close-icon" }, "×", -1)
                ]), 8, Fe)) : O("", !0)
              ]),
              n.duration > 0 ? (o(), r("div", {
                key: 0,
                class: "notification-progress",
                style: U({ animationDuration: `${n.duration}ms` })
              }, null, 4)) : O("", !0),
              k[2] || (k[2] = l("div", { class: "notification-glitch-effect" }, null, -1)),
              k[3] || (k[3] = l("div", { class: "notification-hologram-effect" }, null, -1))
            ], 2))), 128))
          ]),
          _: 1
        })
      ], 2)) : O("", !0)
    ]));
  }
}), Ye = /* @__PURE__ */ j(He, [["__scopeId", "data-v-cc7acbbb"]]), Ae = A(Ye), je = { class: "tooltip-inner" }, Ge = { class: "tooltip-content" }, Ve = /* @__PURE__ */ Y({
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
    const t = e, c = a, i = $(!1), s = $(null), u = $(null), v = $(null), d = $(t.position), g = $({}), h = B(() => typeof t.width == "number" ? `${t.width}px` : t.width), _ = () => {
      v.value && clearTimeout(v.value), v.value = window.setTimeout(() => {
        i.value = !0, ce(() => {
          y(), c("show");
        });
      }, t.delay);
    }, x = () => {
      v.value && clearTimeout(v.value), v.value = window.setTimeout(() => {
        i.value = !1, c("hide");
      }, 100);
    }, y = () => {
      if (!s.value || !u.value) return;
      const f = s.value.getBoundingClientRect(), M = u.value.getBoundingClientRect(), V = document.documentElement.scrollTop || document.body.scrollTop, p = document.documentElement.scrollLeft || document.body.scrollLeft, S = window.innerWidth, N = window.innerHeight, T = 10;
      if (t.position === "auto") {
        const H = f.top - T, R = N - f.bottom - T, L = f.left - T, q = S - f.right - T, te = M.height, ee = M.width;
        var F = [];
        if (R > te && F.push({ pos: "bottom", space: R }), H > te && F.push({ pos: "top", space: H }), q > ee && F.push({ pos: "right", space: q }), L > ee && F.push({ pos: "left", space: L }), F.length > 0)
          F.sort((Z, J) => J.space - Z.space), d.value = F[0].pos;
        else {
          const Z = Math.max(H, q, R, L);
          Z === H ? d.value = "top" : Z === q ? d.value = "right" : Z === R ? d.value = "bottom" : d.value = "left";
        }
      } else
        d.value = t.position;
      let w = 0, b = 0;
      const I = 10;
      switch (d.value) {
        case "top":
          w = f.left + f.width / 2 - M.width / 2 + p, b = f.top - M.height - I + V;
          break;
        case "right":
          w = f.right + I + p, b = f.top + f.height / 2 - M.height / 2 + V;
          break;
        case "bottom":
          w = f.left + f.width / 2 - M.width / 2 + p, b = f.bottom + I + V;
          break;
        case "left":
          w = f.left - M.width - I + p, b = f.top + f.height / 2 - M.height / 2 + V;
          break;
      }
      const z = () => {
        w < T ? w = T : w + M.width > S - T && (w = S - M.width - T), b < T ? b = T : b + M.height > N + V - T && (b = N + V - M.height - T);
      };
      t.position, z(), g.value = {
        left: `${w}px`,
        top: `${b}px`,
        width: h.value
      };
    }, k = () => {
      t.trigger === "hover" && _();
    }, n = () => {
      t.trigger === "hover" && x();
    }, C = () => {
      t.trigger === "click" && (i.value ? x() : _());
    }, m = () => {
      t.trigger === "focus" && _();
    }, D = () => {
      t.trigger === "focus" && x();
    }, G = () => {
      i.value && y();
    }, Q = () => {
      i.value && y();
    };
    return ae(() => t.position, () => {
      i.value && ce(y);
    }), ne(() => {
      window.addEventListener("resize", G), window.addEventListener("scroll", Q), document.addEventListener("click", (f) => {
        if (i.value && t.trigger === "click") {
          const M = f.target;
          u.value && !u.value.contains(M) && s.value && !s.value.contains(M) && x();
        }
      });
    }), se(() => {
      window.removeEventListener("resize", G), window.removeEventListener("scroll", Q), v.value && clearTimeout(v.value);
    }), (f, M) => (o(), r("div", null, [
      l("div", {
        ref_key: "triggerRef",
        ref: s,
        class: "tooltip-trigger",
        onMouseenter: k,
        onMouseleave: n,
        onClick: C,
        onFocus: m,
        onBlur: D
      }, [
        X(f.$slots, "default", {}, void 0, !0)
      ], 544),
      (o(), de(fe, { to: "body" }, [
        ve(l("div", {
          ref_key: "tooltipRef",
          ref: u,
          class: E(["cp-cyber-tooltip", `theme-${e.theme}`, `effect-${e.effect}`, `position-${d.value}`]),
          style: U(g.value)
        }, [
          M[2] || (M[2] = l("div", { class: "tooltip-arrow" }, null, -1)),
          l("div", je, [
            l("div", Ge, [
              X(f.$slots, "content", {}, () => [
                he(P(e.content), 1)
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
}), Pe = /* @__PURE__ */ j(Ve, [["__scopeId", "data-v-18381a70"]]), Xe = A(Pe), qe = {
  key: 0,
  class: "prefix"
}, We = { class: "counter-container" }, Ke = {
  key: 0,
  class: "separator"
}, Ue = { class: "digit-top" }, Ze = { class: "digit-bottom" }, Qe = { class: "digit-top flip-top" }, Je = { class: "digit-bottom flip-bottom" }, et = {
  key: 1,
  class: "suffix"
}, tt = /* @__PURE__ */ Y({
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
    const a = e, t = $(Number(a.from)), c = $(Number(a.value)), i = $(null), s = $(null), u = $(""), v = (n) => {
      const C = Math.pow(10, a.decimal);
      let D = (Math.round(n * C) / C).toFixed(a.decimal);
      if (a.separator) {
        const G = D.split(".");
        G[0] = G[0].replace(/\B(?=(\d{3})+(?!\d))/g, a.separator), D = G.join(".");
      }
      return D;
    }, d = B(() => v(t.value)), g = B(() => d.value.split("")), h = (n) => n === a.separator || n === ".", _ = (n) => !u.value || n >= u.value.length ? !1 : u.value[n] !== g.value[n] && !h(g.value[n]), x = (n) => {
      i.value === null && (i.value = n);
      const C = n - i.value, m = Math.min(C / a.duration, 1), D = Number(a.from), G = Number(a.to !== null ? a.to : c.value), Q = D + (G - D) * y(m);
      t.value = Q, m < 1 ? s.value = requestAnimationFrame(x) : (t.value = G, i.value = null);
    }, y = (n) => 1 - Math.pow(1 - n, 4), k = () => {
      u.value = d.value, s.value !== null && cancelAnimationFrame(s.value), i.value = null, s.value = requestAnimationFrame(x);
    };
    return ae(() => a.value, (n) => {
      c.value = Number(n), k();
    }), ae(() => a.to, (n) => {
      n !== null && (c.value = Number(n), k());
    }), ne(() => {
      Number(a.from) !== Number(a.value) && k();
    }), se(() => {
      s.value !== null && cancelAnimationFrame(s.value);
    }), (n, C) => (o(), r("div", {
      class: E(["cp-digital-counter", `theme-${e.theme}`])
    }, [
      e.prefix ? (o(), r("span", qe, P(e.prefix), 1)) : O("", !0),
      l("div", We, [
        (o(!0), r(W, null, K(g.value, (m, D) => (o(), r("div", {
          key: D,
          class: "digit-container"
        }, [
          h(m) ? (o(), r("div", Ke, P(m), 1)) : (o(), r("div", {
            key: 1,
            class: E(["digit-flipper", { animate: _(D) }])
          }, [
            l("div", Ue, P(m), 1),
            l("div", Ze, P(m), 1),
            l("div", Qe, P(m), 1),
            l("div", Je, P(m), 1)
          ], 2))
        ]))), 128))
      ]),
      e.suffix ? (o(), r("span", et, P(e.suffix), 1)) : O("", !0)
    ], 2));
  }
}), at = /* @__PURE__ */ j(tt, [["__scopeId", "data-v-41a40b63"]]), lt = A(at), st = {
  class: "cp-full-page",
  id: "page-scroll"
}, nt = ["onClick"], ot = /* @__PURE__ */ Y({
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
    const t = e, c = a, i = $();
    xe(() => {
      var f;
      (f = i.value) != null && f.style && (console.log("watch", u.value), i.value.style.transform = u.value);
    });
    const s = B(() => {
      var M, V;
      v.value = !0;
      let f = 0;
      return (M = document.getElementById("page-scroll")) != null && M.clientHeight ? f = ((V = document.getElementById("page-scroll")) == null ? void 0 : V.clientHeight) ?? 0 : f = window.innerHeight, f;
    }), u = B(() => (console.log(m.value, s.value), `translateY(-${m.value * s.value}px)`)), v = $(!1), d = $(!0);
    function g(f) {
      v.value = !1, d.value && (d.value = !1, C(f), setTimeout(() => {
        d.value = !0;
      }, 500));
    }
    const h = $(0), _ = $(0), x = $(0);
    function y(f) {
      h.value = f.touches[0].pageY || f.changedTouches[0].pageY;
    }
    function k(f) {
      f.preventDefault(), v.value = !1, _.value = f.changedTouches[0].pageY || f.touches[0].pageY, x.value = _.value - h.value, Math.abs(x.value) >= 60 ? (m.value < t.items.length - 1 && x.value < 0 && m.value++, m.value > 0 && x.value > 0 && m.value--) : (console.log("else", -m.value * s.value), i.value.style.transform = `translateY(-${m.value * s.value}px)`);
    }
    function n(f) {
      v.value = !0, f.preventDefault(), x.value = (f.changedTouches[0].pageY || f.touches[0].pageY) - h.value, !(m.value === t.items.length - 1 && x.value < 0 || m.value === 0 && x.value > 0) && (console.log("else", -m.value * s.value + x.value * -1), i.value.style.transform = `translateY(-${m.value * s.value + x.value * -1}px)`);
    }
    function C(f) {
      c("change", f.wheelDelta), f.wheelDelta < 0 ? D() : G();
    }
    const m = $(0);
    function D() {
      m.value < t.items.length - 1 && (m.value++, c("toNext", m.value));
    }
    function G() {
      (m.value > 1 || m.value === 1) && (m.value--, c("toLast", m.value));
    }
    function Q(f) {
      console.log(f), v.value = !1, m.value = f;
    }
    return (f, M) => (o(), r("div", st, [
      l("div", {
        ref_key: "element",
        ref: i,
        class: E([{ activeTranstion: v.value }, "inner-box"]),
        onMousewheel: g,
        onTouchstart: y,
        onTouchend: k,
        onTouchmove: n
      }, [
        X(f.$slots, "default", {}, void 0, !0)
      ], 34),
      l("div", {
        class: E(["cp-full-dot", t.position])
      }, [
        (o(!0), r(W, null, K(t.items, (V, p) => (o(), r("div", {
          onClick: (S) => Q(p),
          class: "cp-full-dot-item"
        }, [
          l("div", {
            class: E(["cp-full-dot-item-bg", { active: p === m.value }])
          }, null, 2),
          t.showTitle ? ve((o(), r("div", {
            key: 0,
            class: "show-dec"
          }, P(V.title), 513)), [
            [ge, p === m.value]
          ]) : O("", !0)
        ], 8, nt))), 256))
      ], 2)
    ]));
  }
}), rt = /* @__PURE__ */ j(ot, [["__scopeId", "data-v-41ff6c24"]]), it = A(rt), ct = ["src", "alt"], ut = {
  key: 1,
  class: "loading-placeholder"
}, dt = {
  key: 2,
  class: "error-placeholder"
}, ft = /* @__PURE__ */ Y({
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
    const t = e, c = a, i = $(null), s = $(null), u = $(null), v = $(!1), d = $(!1), g = $(!1), h = $(null), _ = $(null), x = B(() => t.intensity / 10), y = () => {
      v.value = !0, d.value = !1, setTimeout(() => {
        n(), t.triggerMode === "auto" ? V() : t.triggerMode === "random" && p();
      }, 0);
    }, k = () => {
      d.value = !0, v.value = !1, console.error("Failed to load image:", t.src);
    }, n = () => {
      if (!u.value || !s.value) return;
      const w = s.value, b = u.value, I = b.getContext("2d");
      if (I) {
        b.width = w.naturalWidth, b.height = w.naturalHeight;
        try {
          I.drawImage(w, 0, 0), _.value = I.getImageData(0, 0, b.width, b.height);
        } catch (z) {
          console.error("Failed to get image data (possibly CORS issue):", z), d.value = !0;
        }
      }
    }, C = (w, b) => {
      if (!_.value) return;
      const I = w.canvas, z = w.getImageData(0, 0, I.width, I.height), H = z.data, R = _.value.data, L = Math.floor(20 * b), q = Math.floor(Math.random() * L), te = Math.floor(Math.random() * L);
      for (let ee = 0; ee < I.height; ee++)
        for (let Z = 0; Z < I.width; Z++) {
          const J = (ee * I.width + Z) * 4, le = Math.min(Math.max(Z + q, 0), I.width - 1), pe = (Math.min(Math.max(ee + te, 0), I.height - 1) * I.width + le) * 4;
          H[J] = R[pe];
          const me = Math.min(Math.max(Z - q, 0), I.width - 1), ye = (Math.min(Math.max(ee - te, 0), I.height - 1) * I.width + me) * 4;
          H[J + 2] = R[ye + 2], H[J + 1] = R[J + 1];
        }
      w.putImageData(z, 0, 0);
    }, m = (w, b) => {
      if (!_.value) return;
      const I = w.canvas;
      w.putImageData(_.value, 0, 0);
      const z = Math.max(1, Math.floor(5 / b)), H = 0.5 + b * 0.1;
      for (let R = 0; R < I.height; R += z * 2)
        w.fillStyle = `rgba(255, 255, 255, ${H})`, w.fillRect(0, R, I.width, z);
    }, D = (w, b) => {
      if (!_.value) return;
      const I = w.canvas;
      w.putImageData(_.value, 0, 0);
      const z = Math.max(4, Math.floor(b * 8));
      if (Math.random() > 0.5)
        for (let R = 0; R < I.height; R += z)
          for (let L = 0; L < I.width; L += z) {
            const q = w.getImageData(L, R, 1, 1).data;
            w.fillStyle = `rgb(${q[0]}, ${q[1]}, ${q[2]})`, w.fillRect(L, R, z, z);
          }
      else {
        const R = Math.floor(b * 3);
        for (let L = 0; L < R; L++) {
          const q = Math.floor(Math.random() * (I.width - 50)), te = Math.floor(Math.random() * (I.height - 50)), ee = Math.floor(Math.random() * 100 * b) + 30, Z = Math.floor(Math.random() * 80 * b) + 20;
          for (let J = te; J < te + Z; J += z)
            for (let le = q; le < q + ee; le += z)
              if (le < I.width && J < I.height) {
                const re = w.getImageData(le, J, 1, 1).data;
                w.fillStyle = `rgb(${re[0]}, ${re[1]}, ${re[2]})`, w.fillRect(le, J, z, z);
              }
        }
      }
    }, G = (w, b) => {
      if (!_.value) return;
      const I = w.canvas, z = w.getImageData(0, 0, I.width, I.height), H = z.data, R = 0.2 + b * 0.05;
      for (let L = 0; L < H.length; L += 4)
        Math.random() < R && (Math.random() > 0.5 ? (H[L] = 255, H[L + 1] = 255, H[L + 2] = 255) : (H[L] = Math.floor(Math.random() * 256), H[L + 1] = Math.floor(Math.random() * 256), H[L + 2] = Math.floor(Math.random() * 256)));
      w.putImageData(z, 0, 0);
    }, Q = (w, b) => {
      [...["rgb-shift", "scanline", "pixelate", "noise"]].sort(() => 0.5 - Math.random()).slice(0, 2 + Math.floor(Math.random() * 2)).forEach((R) => {
        switch (R) {
          case "rgb-shift":
            C(w, b);
            break;
          case "scanline":
            m(w, b);
            break;
          case "pixelate":
            D(w, b);
            break;
          case "noise":
            G(w, b);
            break;
        }
      });
    }, f = () => {
      if (!u.value || !_.value) return;
      const b = u.value.getContext("2d");
      if (b) {
        switch (b.putImageData(_.value, 0, 0), t.glitchType) {
          case "rgb-shift":
            C(b, x.value);
            break;
          case "scanline":
            m(b, x.value);
            break;
          case "pixelate":
            D(b, x.value);
            break;
          case "noise":
            G(b, x.value);
            break;
          case "combined":
            Q(b, x.value);
            break;
        }
        g.value = !0, c("glitch-start");
      }
    }, M = () => {
      if (!u.value || !_.value) return;
      const b = u.value.getContext("2d");
      b && (b.putImageData(_.value, 0, 0), g.value = !1, c("glitch-end"));
    }, V = () => {
      h.value && clearInterval(h.value), f(), t.animated && (h.value = window.setInterval(() => {
        f();
      }, t.interval));
    }, p = () => {
      h.value && clearInterval(h.value), h.value = window.setInterval(() => {
        Math.random() < 0.5 && (f(), setTimeout(() => {
          M();
        }, 200 + Math.random() * 300));
      }, t.interval);
    }, S = () => {
      h.value && (clearInterval(h.value), h.value = null), M();
    }, N = () => {
      t.triggerMode === "hover" && V();
    }, T = () => {
      t.triggerMode === "hover" && !t.animated && S();
    }, F = () => {
      t.triggerMode === "click" && (g.value ? S() : V());
    };
    return ae(() => [t.src, t.glitchType, t.intensity], () => {
      t.src && (v.value = !1, d.value = !1), g.value && f();
    }), ne(() => {
      s.value && s.value.complete && s.value.naturalHeight !== 0 && y();
    }), se(() => {
      h.value && clearInterval(h.value);
    }), (w, b) => (o(), r("div", {
      class: E(["cp-glitch-image", { animated: e.animated }]),
      onMouseenter: N,
      onMouseleave: T,
      onClick: F
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
          ref: s,
          class: "original-image",
          crossOrigin: "anonymous",
          onLoad: y,
          onError: k
        }, null, 40, ct),
        v.value && !d.value ? (o(), r("canvas", {
          key: 0,
          ref_key: "glitchCanvasRef",
          ref: u,
          class: "glitch-canvas"
        }, null, 512)) : O("", !0),
        !v.value && !d.value ? (o(), r("div", ut, b[0] || (b[0] = [
          l("div", { class: "loading-text" }, "Loading...", -1)
        ]))) : O("", !0),
        d.value ? (o(), r("div", dt, b[1] || (b[1] = [
          l("div", { class: "error-text" }, "Image Load Failed", -1)
        ]))) : O("", !0)
      ], 512)
    ], 34));
  }
}), vt = /* @__PURE__ */ j(ft, [["__scopeId", "data-v-b537a1f3"]]), ht = A(vt), gt = ["data-progress"], pt = { class: "progress-container" }, mt = {
  key: 0,
  class: "progress-text"
}, yt = /* @__PURE__ */ Y({
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
    const a = e, t = $(null), c = $(null), i = B(() => a.direction === "vertical" ? "vertical" : "horizontal"), s = B(() => {
      const d = a.direction === "vertical" ? "height" : "width", g = a.indeterminate ? "100%" : `${a.progress}%`;
      return {
        [d]: g,
        backgroundColor: a.color,
        boxShadow: `0 0 ${a.glitchIntensity * 2}px ${a.color}`
      };
    }), u = () => {
      if (!t.value) return;
      const d = t.value.querySelector(".glitch-effect");
      if (!d) return;
      const g = () => {
        if (!d) return;
        if (Math.random() < a.glitchIntensity / 20) {
          const _ = Math.random() * a.glitchIntensity - a.glitchIntensity / 2, x = Math.random() * a.glitchIntensity - a.glitchIntensity / 2, y = Math.random() * a.glitchIntensity - a.glitchIntensity / 2, k = Math.random() * a.glitchIntensity / 2;
          d.style.transform = `translate(${_}px, ${x}px) skew(${y}deg)`, d.style.filter = `blur(${k}px)`, d.style.opacity = "1", setTimeout(() => {
            d && (d.style.transform = "translate(0, 0) skew(0)", d.style.filter = "blur(0)", d.style.opacity = "0");
          }, 150);
        }
      };
      c.value = window.setInterval(() => {
        g();
      }, 500);
    };
    let v = a.progress;
    return ae(() => a.progress, (d) => {
      if (d !== v) {
        if (t.value) {
          const g = t.value.querySelector(".glitch-effect");
          if (g) {
            const h = Math.random() * a.glitchIntensity * 2 - a.glitchIntensity, _ = Math.random() * a.glitchIntensity - a.glitchIntensity / 2;
            g.style.transform = `translate(${h}px, ${_}px)`, g.style.opacity = "1", setTimeout(() => {
              g && (g.style.transform = "translate(0, 0)", g.style.opacity = "0");
            }, 300);
          }
        }
        v = d;
      }
    }), ne(() => {
      u();
    }), se(() => {
      c.value && clearInterval(c.value);
    }), (d, g) => (o(), r("div", {
      class: E(["cp-glitch-progress", i.value, { indeterminate: e.indeterminate }]),
      "data-progress": e.progress
    }, [
      l("div", pt, [
        l("div", {
          class: "progress-bar",
          style: U(s.value),
          ref_key: "progressBarRef",
          ref: t
        }, g[0] || (g[0] = [
          l("div", { class: "glitch-effect" }, null, -1)
        ]), 4),
        e.showText && !e.indeterminate ? (o(), r("div", mt, P(e.progress) + "% ", 1)) : O("", !0)
      ])
    ], 10, gt));
  }
}), bt = /* @__PURE__ */ j(yt, [["__scopeId", "data-v-27854e11"]]), wt = A(bt), $t = { class: "glow-text" }, xt = /* @__PURE__ */ Y({
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
    }), (t, c) => (o(), r("div", $t, [
      X(t.$slots, "default", {}, void 0, !0)
    ]));
  }
}), _t = /* @__PURE__ */ j(xt, [["__scopeId", "data-v-986b354d"]]), kt = A(_t), Ct = ["tabindex", "aria-disabled", "aria-label"], St = { class: "holo-card-content" }, It = {
  key: 0,
  class: "card-title"
}, Mt = /* @__PURE__ */ Y({
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
    ue((n) => ({
      "03e45bb0": c.hologramColor
    }));
    const a = _e(), t = oe(), c = e, i = $({ x: 0, y: 0 }), s = $(!1), d = ((n, C) => {
      let m;
      return function() {
        const D = arguments, G = a;
        m || (n.apply(G, D), m = !0, setTimeout(() => m = !1, C));
      };
    })((n) => {
      if (c.disabled) return;
      const C = n.currentTarget.getBoundingClientRect();
      i.value = {
        x: (n.clientX - C.left) / C.width * 2 - 1,
        y: (n.clientY - C.top) / C.height * 2 - 1
      }, s.value = !0;
    }, 16), g = () => {
      s.value = !1, i.value = { x: 0, y: 0 };
    }, h = () => {
      c.disabled || (s.value = !0, i.value = { x: 0, y: 0 });
    }, _ = B(() => [(() => {
      switch (c.type) {
        case "basic":
          return "basic-type";
        case "media":
          return "media-type";
        case "action":
          return "action-type";
        default:
          return "basic-type";
      }
    })()]), x = B(() => {
      const n = {};
      if (c.rounded || (n.borderRadius = "0"), c.disabled && (n.cursor = "not-allowed", n.opacity = "0.6"), !s.value || c.disabled) return n;
      const C = i.value.y * 10, m = -i.value.x * 10;
      return {
        ...n,
        transform: `perspective(1000px) rotateX(${C}deg) rotateY(${m}deg) scale3d(1.05, 1.05, 1.05)`,
        transition: "transform 0.1s ease"
      };
    }), y = B(() => {
      if (!s.value || c.disabled) return {};
      const n = Math.max(-50, Math.min(50, i.value.x * 10)), C = Math.max(-50, Math.min(50, i.value.y * 10));
      return {
        background: `radial-gradient(circle at ${50 + n}% ${50 + C}%, ${c.hologramColor}33, transparent 70%)`,
        opacity: 0.8,
        transition: "background 0.1s ease"
      };
    }), k = B(() => {
      const n = c.glowIntensity / 100;
      return {
        boxShadow: `0 0 ${10 + c.glowIntensity / 5}px ${c.hologramColor}${Math.floor(n * 99).toString(16).padStart(2, "0")}`,
        opacity: s.value && !c.disabled ? n : n * 0.5
      };
    });
    return (n, C) => (o(), r("div", {
      class: E([
        "cp-holo-card",
        `depth-${e.depth}`,
        _.value,
        `theme-${e.theme}`,
        `effect-${e.effect}`
      ]),
      style: U(x.value),
      onMousemove: C[0] || (C[0] = //@ts-ignore
      (...m) => ie(d) && ie(d)(...m)),
      onMouseleave: g,
      onFocus: h,
      onBlur: g,
      tabindex: e.disabled ? -1 : 0,
      role: "button",
      "aria-disabled": e.disabled,
      "aria-label": e.title
    }, [
      l("div", St, [
        e.title && !ie(t).title ? (o(), r("div", It, P(e.title), 1)) : O("", !0),
        X(n.$slots, "title", {}, void 0, !0),
        X(n.$slots, "default", {}, void 0, !0),
        X(n.$slots, "footer", {}, void 0, !0)
      ]),
      l("div", {
        class: "holo-card-hologram-effect",
        style: U(y.value)
      }, null, 4),
      l("div", {
        class: "holo-card-glow",
        style: U(k.value)
      }, null, 4)
    ], 46, Ct));
  }
}), Tt = /* @__PURE__ */ j(Mt, [["__scopeId", "data-v-514a9886"]]), Nt = A(Tt), Et = { class: "loader-container" }, zt = {
  key: 0,
  class: "cube-loader"
}, Rt = {
  key: 1,
  class: "sphere-loader"
}, Lt = { class: "sphere" }, Bt = {
  key: 2,
  class: "datastream-loader"
}, Dt = {
  key: 3,
  class: "circuit-loader"
}, Ot = { class: "circuit-board" }, Ft = {
  key: 0,
  class: "loader-text"
}, Ht = { class: "typing-text" }, Yt = /* @__PURE__ */ Y({
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
      "7f665050": t
    }));
    const a = e, t = (6 / a.speed).toString() + "s", c = B(() => {
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
    }), i = $(""), s = $(0), u = $(null), v = () => {
      if (!a.text) return;
      s.value = 0, i.value = "";
      const d = () => {
        s.value < a.text.length ? (i.value += a.text[s.value], s.value++) : setTimeout(() => {
          s.value = 0, i.value = "";
        }, 1e3);
      }, g = 100 / a.speed;
      u.value = window.setInterval(d, g);
    };
    return ae(() => a.text, () => {
      u.value && clearInterval(u.value), v();
    }), ne(() => {
      v();
    }), se(() => {
      u.value && clearInterval(u.value);
    }), (d, g) => (o(), r("div", {
      class: E(["cp-holo-loader", c.value, { "transparent-bg": e.transparent }])
    }, [
      l("div", Et, [
        l("div", {
          class: E(["holo-projection", `type-${e.type}`])
        }, [
          e.type === "cube" || e.type === "split" ? (o(), r("div", zt, g[0] || (g[0] = [
            ke('<div class="cube" data-v-6df1b911><div class="cube-face front" data-v-6df1b911></div><div class="cube-face back" data-v-6df1b911></div><div class="cube-face right" data-v-6df1b911></div><div class="cube-face left" data-v-6df1b911></div><div class="cube-face top" data-v-6df1b911></div><div class="cube-face bottom" data-v-6df1b911></div></div>', 1)
          ]))) : e.type === "sphere" ? (o(), r("div", Rt, [
            l("div", Lt, [
              (o(), r(W, null, K(3, (h) => l("div", {
                class: "sphere-ring",
                key: h
              })), 64))
            ])
          ])) : e.type === "datastream" ? (o(), r("div", Bt, [
            (o(), r(W, null, K(10, (h) => l("div", {
              class: "data-line",
              key: h
            })), 64))
          ])) : e.type === "circuit" ? (o(), r("div", Dt, [
            l("div", Ot, [
              (o(), r(W, null, K(5, (h) => l("div", {
                class: "circuit-path",
                key: h
              })), 64)),
              (o(), r(W, null, K(6, (h) => l("div", {
                class: "circuit-node",
                key: h + 10
              })), 64))
            ])
          ])) : O("", !0)
        ], 2),
        e.text ? (o(), r("div", Ft, [
          l("span", Ht, P(i.value), 1),
          g[1] || (g[1] = l("span", { class: "cursor" }, "_", -1))
        ])) : O("", !0),
        g[2] || (g[2] = l("div", { class: "holo-base" }, [
          l("div", { class: "base-glow" })
        ], -1))
      ])
    ], 2));
  }
}), At = /* @__PURE__ */ j(Yt, [["__scopeId", "data-v-6df1b911"]]), jt = A(At), Gt = ["onClick"], Vt = { class: "th-content" }, Pt = {
  key: 0,
  class: "sort-icon"
}, Xt = ["onClick"], qt = {
  key: 0,
  class: "loading-overlay"
}, Wt = {
  key: 1,
  class: "empty-data"
}, Kt = {
  key: 0,
  class: "table-footer"
}, Ut = /* @__PURE__ */ Y({
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
    var M, V;
    const t = e, c = a, i = $(null), s = $(null), u = $(0), v = $(0), d = $(0), g = $(0), h = $({
      key: ((M = t.defaultSort) == null ? void 0 : M.key) || "",
      order: ((V = t.defaultSort) == null ? void 0 : V.order) || ""
    }), _ = B(() => {
      var p;
      return (((p = t.data) == null ? void 0 : p.length) || 0) * t.rowHeight;
    }), x = B(() => {
      if (!t.data || t.data.length === 0) return [];
      let p = [...t.data];
      return h.value.key && h.value.order && p.sort((S, N) => {
        const T = S[h.value.key], F = N[h.value.key];
        return h.value.order === "asc" ? T > F ? 1 : -1 : T < F ? 1 : -1;
      }), p.slice(u.value, v.value);
    }), y = (p, S) => typeof t.rowKey == "function" ? t.rowKey(p) : typeof t.rowKey == "string" ? p[t.rowKey] : `row-${S}`, k = (p, S) => S.formatter ? S.formatter(p, S, t.data.indexOf(p)) : p[S.key], n = (p) => p.width ? { width: typeof p.width == "number" ? `${p.width}px` : p.width } : {}, C = (p) => {
      if (!t.selectedRows || t.selectedRows.length === 0) return !1;
      const S = y(p, t.data.indexOf(p));
      return t.selectedRows.some((N) => {
        const T = y(N, t.data.indexOf(N));
        return S === T;
      });
    }, m = (p) => {
      c("row-click", p);
    }, D = (p) => {
      if (!p.sortable) return;
      let S = "asc";
      h.value.key === p.key && (h.value.order === "asc" ? S = "desc" : h.value.order === "desc" ? S = "" : S = "asc"), h.value = {
        key: p.key,
        order: S
      }, c("sort-change", { ...h.value });
    }, G = () => {
      if (!s.value) return;
      const p = s.value.scrollTop, S = s.value.clientHeight, N = Math.max(0, Math.floor(p / t.rowHeight) - t.bufferSize), T = Math.min(
        t.data.length,
        Math.ceil((p + S) / t.rowHeight) + t.bufferSize
      ), F = N * t.rowHeight;
      u.value = N, v.value = T, d.value = F, T >= t.data.length - 10 && !t.loading && c("load-more");
    }, Q = () => {
      if (!s.value) return;
      const p = s.value.clientHeight;
      g.value = Math.ceil(p / t.rowHeight) + 2 * t.bufferSize, v.value = Math.min(t.data.length, g.value);
    }, f = () => {
      !i.value || !s.value || (i.value.scrollLeft = s.value.scrollLeft);
    };
    return ae(() => t.data, () => {
      ce(() => {
        G();
      });
    }, { deep: !0 }), ae(() => t.defaultSort, (p) => {
      p && p.key && (h.value = { ...p });
    }, { deep: !0 }), ne(() => {
      Q(), s.value && s.value.addEventListener("scroll", f), window.addEventListener("resize", Q);
    }), se(() => {
      s.value && s.value.removeEventListener("scroll", f), window.removeEventListener("resize", Q);
    }), (p, S) => (o(), r("div", {
      class: E(["cp-infinite-table", { loading: e.loading }])
    }, [
      l("div", {
        class: "table-header",
        ref_key: "headerRef",
        ref: i
      }, [
        l("table", null, [
          l("colgroup", null, [
            (o(!0), r(W, null, K(e.columns, (N, T) => (o(), r("col", {
              key: `col-${T}`,
              style: U(n(N))
            }, null, 4))), 128))
          ]),
          l("thead", null, [
            l("tr", null, [
              (o(!0), r(W, null, K(e.columns, (N, T) => (o(), r("th", {
                key: `header-${T}`,
                class: E({ sortable: N.sortable }),
                onClick: (F) => D(N)
              }, [
                l("div", Vt, [
                  l("span", null, P(N.title), 1),
                  N.sortable ? (o(), r("span", Pt, [
                    l("span", {
                      class: E(["sort-up", { active: h.value.key === N.key && h.value.order === "asc" }])
                    }, "▲", 2),
                    l("span", {
                      class: E(["sort-down", { active: h.value.key === N.key && h.value.order === "desc" }])
                    }, "▼", 2)
                  ])) : O("", !0)
                ])
              ], 10, Gt))), 128))
            ])
          ])
        ])
      ], 512),
      l("div", {
        class: "table-body",
        ref_key: "bodyRef",
        ref: s,
        onScroll: G
      }, [
        l("div", {
          class: "scroll-container",
          style: U({ height: `${_.value}px` })
        }, [
          l("table", {
            style: U({ transform: `translateY(${d.value}px)` })
          }, [
            l("colgroup", null, [
              (o(!0), r(W, null, K(e.columns, (N, T) => (o(), r("col", {
                key: `col-${T}`,
                style: U(n(N))
              }, null, 4))), 128))
            ]),
            l("tbody", null, [
              (o(!0), r(W, null, K(x.value, (N, T) => (o(), r("tr", {
                key: y(N, T),
                class: E({ selected: C(N) }),
                onClick: (F) => m(N)
              }, [
                (o(!0), r(W, null, K(e.columns, (F, w) => (o(), r("td", {
                  key: `cell-${T}-${w}`
                }, [
                  X(p.$slots, `cell-${F.key}`, {
                    row: N,
                    column: F,
                    index: u.value + T
                  }, () => [
                    he(P(k(N, F)), 1)
                  ], !0)
                ]))), 128))
              ], 10, Xt))), 128))
            ])
          ], 4)
        ], 4),
        e.loading ? (o(), r("div", qt, S[0] || (S[0] = [
          l("div", { class: "loading-spinner" }, [
            l("div", { class: "spinner-circle" }),
            l("div", { class: "spinner-text" }, "加载中...")
          ], -1)
        ]))) : O("", !0),
        !e.loading && (!e.data || e.data.length === 0) ? (o(), r("div", Wt, [
          X(p.$slots, "empty", {}, () => [
            S[1] || (S[1] = l("div", { class: "empty-content" }, [
              l("div", { class: "empty-icon" }, "⚠"),
              l("div", { class: "empty-text" }, "暂无数据")
            ], -1))
          ], !0)
        ])) : O("", !0)
      ], 544),
      p.$slots.footer ? (o(), r("div", Kt, [
        X(p.$slots, "footer", {}, void 0, !0)
      ])) : O("", !0),
      S[2] || (S[2] = l("div", { class: "table-scanline" }, null, -1)),
      S[3] || (S[3] = l("div", { class: "table-glitch-effect" }, null, -1))
    ], 2));
  }
}), Zt = /* @__PURE__ */ j(Ut, [["__scopeId", "data-v-ec2231f8"]]), Qt = A(Zt), Jt = /* @__PURE__ */ Y({
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
    const t = e, c = B(() => {
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
    }), i = B(() => {
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
    return (s, u) => (o(), r("div", {
      class: E(["cp-button-neno", i.value])
    }, [
      l("div", {
        class: E(["button", c.value, t.bg ? "show-bg" : ""])
      }, [
        u[0] || (u[0] = l("div", { class: "border" }, null, -1)),
        u[1] || (u[1] = l("div", { class: "border" }, null, -1)),
        u[2] || (u[2] = l("div", { class: "border" }, null, -1)),
        u[3] || (u[3] = l("div", { class: "border" }, null, -1)),
        X(s.$slots, "default", {}, void 0, !0)
      ], 2)
    ], 2));
  }
}), ea = /* @__PURE__ */ j(Jt, [["__scopeId", "data-v-c8c24548"]]), ta = A(ea), aa = ["aria-checked", "aria-disabled"], la = { class: "toggle-thumb" }, sa = {
  key: 0,
  class: "pulse-effect"
}, na = /* @__PURE__ */ Y({
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
    ue((u) => ({
      "353518d4": t.inActiveColor,
      "820f538e": t.activeColor
    }));
    const t = e, c = a, i = B(() => {
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
    }), s = () => {
      if (t.disabled) return;
      const u = !t.modelValue;
      c("update:modelValue", u), c("change", u);
    };
    return (u, v) => (o(), r("div", {
      class: E(["cp-neon-toggle", i.value, { active: e.modelValue, disabled: e.disabled }]),
      onClick: s,
      "aria-checked": e.modelValue,
      role: "switch",
      "aria-disabled": e.disabled
    }, [
      v[0] || (v[0] = l("div", { class: "toggle-track" }, [
        l("div", { class: "toggle-track-inner" }),
        l("div", { class: "circuit-lines" })
      ], -1)),
      l("div", la, [
        e.pulseEffect && e.modelValue ? (o(), r("div", sa)) : O("", !0)
      ])
    ], 10, aa));
  }
}), oa = /* @__PURE__ */ j(na, [["__scopeId", "data-v-31e0bc28"]]), ra = A(oa), ia = /* @__PURE__ */ Y({
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
    const t = e, c = B(() => {
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
    }), i = B(() => {
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
    return (s, u) => (o(), r("div", {
      class: E(["cp-button-neno", i.value])
    }, [
      l("div", {
        class: E(["button", c.value, t.bg ? "show-bg" : ""])
      }, [
        X(s.$slots, "default", {}, void 0, !0)
      ], 2)
    ], 2));
  }
}), ca = /* @__PURE__ */ j(ia, [["__scopeId", "data-v-f4ab33ea"]]), ua = A(ca), da = ["data-word"], fa = /* @__PURE__ */ Y({
  name: "CyberText",
  __name: "text",
  props: {
    lineColor: {
      type: String,
      default: "#fff"
    }
  },
  setup(e) {
    const a = $(""), t = oe();
    if (t && t.default) {
      let i = t.default();
      a.value = i[0].children;
    }
    const c = e;
    return (i, s) => (o(), r("div", {
      class: "cp-text",
      "data-word": a.value
    }, [
      X(i.$slots, "default", {}, void 0, !0),
      l("div", {
        class: "cp-text-line",
        style: U("background: " + c.lineColor)
      }, null, 4)
    ], 8, da));
  }
}), va = /* @__PURE__ */ j(fa, [["__scopeId", "data-v-3aa7f29f"]]), ha = A(va), ga = /* @__PURE__ */ Y({
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
    const a = e, t = (i, s) => {
      let u = `0px 0px ${i}`;
      for (let v = 1; v <= a.long; v++) {
        const d = c(i, v);
        u += `, ${s === "left" ? "-" : ""}${v}px ${v}px ${d}`;
      }
      return u;
    }, c = (i, s) => {
      const u = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i.exec(i), v = /^rgba?\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})(,\s*([\d.]+))?\)$/i.exec(i);
      if (u) {
        const d = parseInt(u[1], 16), g = parseInt(u[2], 16), h = parseInt(u[3], 16), _ = u[4] ? parseInt(u[4], 16) / 255 : 1, x = Math.max(0, _ - s * 0.05);
        return `rgba(${d}, ${g}, ${h}, ${x})`;
      } else if (v) {
        const d = parseInt(v[1], 10), g = parseInt(v[2], 10), h = parseInt(v[3], 10), _ = v[5] ? parseFloat(v[5]) : 1, x = Math.max(0, _ - s * 0.05);
        return `rgba(${d}, ${g}, ${h}, ${x})`;
      } else
        throw new Error(`Unsupported color format: ${i}`);
    };
    return (i, s) => (o(), r("div", {
      class: E(["shadow-text", a.direction]),
      style: U({ textShadow: t(a.shadowColor, a.direction) })
    }, [
      X(i.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), pa = /* @__PURE__ */ j(ga, [["__scopeId", "data-v-baec179b"]]), ma = A(pa), ya = { class: "cp-typing" }, ba = { class: "content" }, wa = /* @__PURE__ */ Y({
  name: "CyberTyping",
  __name: "typing",
  setup(e) {
    return (a, t) => (o(), r("div", ya, [
      l("div", ba, [
        X(a.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), $a = /* @__PURE__ */ j(wa, [["__scopeId", "data-v-c43f79f6"]]), xa = A($a), _a = { class: "imgbox" }, ka = /* @__PURE__ */ Y({
  name: "CyberImage",
  __name: "image",
  props: {
    imgurl: {
      type: String,
      default: "https://mzz-files.oss-cn-shenzhen.aliyuncs.com///uploads/U1002433/0cb5e044a1f0f7fc15f61264ee97ac1f.png"
    }
  },
  setup(e) {
    const a = e;
    return (t, c) => (o(), r("div", _a, [
      l("div", {
        class: "cyberimg",
        style: U({
          background: `url(${a.imgurl}) no-repeat`,
          backgroundSize: "cover"
        })
      }, [
        X(t.$slots, "default", {}, void 0, !0)
      ], 4)
    ]));
  }
}), Ca = /* @__PURE__ */ j(ka, [["__scopeId", "data-v-bf51ceee"]]), Sa = A(Ca), Ia = { class: "g-container" }, Ma = /* @__PURE__ */ Y({
  name: "CyberMagicText",
  __name: "magicText",
  setup(e) {
    return (a, t) => (o(), r("div", Ia, [
      l("p", null, [
        X(a.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), Ta = /* @__PURE__ */ j(Ma, [["__scopeId", "data-v-24ba40e5"]]), Na = A(Ta), Ea = { class: "container" }, za = { class: "stage" }, Ra = { class: "control" }, La = { class: "imgWrap" }, Ba = ["src"], Da = /* @__PURE__ */ Y({
  name: "CyberBanner",
  __name: "banner",
  props: {
    imgList: {
      type: Array,
      default: [
        "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
        "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
        "https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg",
        "https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg",
        "https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg",
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
        "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"
      ]
    },
    translateZ: {
      type: Number,
      default: 650
    }
  },
  setup(e) {
    const a = e, t = $(1);
    t.value = a.imgList.length;
    const c = (i) => ({
      transform: `rotateY(${35 + (i + 1) * (360 / t.value)}deg) translateZ(${a.translateZ}px)`
    });
    return (i, s) => (o(), r("div", Ea, [
      l("div", za, [
        l("div", Ra, [
          l("div", La, [
            (o(!0), r(W, null, K(a.imgList, (u, v) => (o(), r("div", {
              key: v,
              class: "img",
              style: U(c(v))
            }, [
              l("img", { src: u }, null, 8, Ba)
            ], 4))), 128))
          ])
        ])
      ])
    ]));
  }
}), Oa = /* @__PURE__ */ j(Da, [["__scopeId", "data-v-e36d7862"]]), Fa = A(Oa), Ha = [
  Ne,
  Ae,
  Xe,
  lt,
  ht,
  wt,
  Nt,
  jt,
  Qt,
  ra,
  ta,
  ua,
  ha,
  ma,
  kt,
  xa,
  it,
  Sa,
  Na,
  Fa
], Ya = Ce([...Ha]);
console.log(
  "%c %s",
  "border: 1px solid #97E3FE;border-radius: 3px;padding: 2px 5px;color: white;font-weight:bolder;background: linear-gradient(to right, #fF717F,#CC54D1,#4EAFFA,#3DE1C3, #F7DA66)",
  "CyberPunk-UI"
);
const Ga = Ya.install;
export {
  Ya as default,
  Ga as install,
  Ce as makeInstaller
};
