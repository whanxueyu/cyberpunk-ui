import { defineComponent as y, useSlots as T, computed as h, openBlock as p, createElementBlock as f, normalizeClass as v, createElementVNode as d, unref as F, renderSlot as g, toDisplayString as R, pushScopeId as G, popScopeId as j, ref as m, normalizeStyle as M, onMounted as A, watchEffect as H, Fragment as U, renderList as V } from "vue";
const q = (e = []) => ({
  install: (t) => {
    e.forEach((s) => t.use(s));
  }
}), b = (e, o) => (e.install = (t) => {
  for (const s of [e, ...Object.values({})])
    t.component(s.name, s);
}, e), J = ["data-content"], K = { key: 1 }, Q = /* @__PURE__ */ y({
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
  setup(e, { emit: o }) {
    const t = T(), s = e, n = h(() => {
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
    }), u = h(() => {
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
    return (r, c) => (p(), f("div", {
      class: v(["cp-button", u.value])
    }, [
      d("div", {
        class: v(["button", n.value]),
        "data-content": s.content
      }, [
        F(t) ? g(r.$slots, "default", { key: 0 }, void 0, !0) : (p(), f("span", K, R(s.content), 1))
      ], 10, J)
    ], 2));
  }
}), w = (e, o) => {
  const t = e.__vccOpts || e;
  for (const [s, n] of o)
    t[s] = n;
  return t;
}, W = /* @__PURE__ */ w(Q, [["__scopeId", "data-v-abbd8a2e"]]), X = b(W), z = (e) => (G("data-v-b847fdcb"), e = e(), j(), e), Z = /* @__PURE__ */ z(() => /* @__PURE__ */ d("div", { class: "border" }, null, -1)), ee = /* @__PURE__ */ z(() => /* @__PURE__ */ d("div", { class: "border" }, null, -1)), te = /* @__PURE__ */ z(() => /* @__PURE__ */ d("div", { class: "border" }, null, -1)), ne = /* @__PURE__ */ z(() => /* @__PURE__ */ d("div", { class: "border" }, null, -1)), se = /* @__PURE__ */ y({
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
  setup(e, { emit: o }) {
    T();
    const t = e, s = h(() => {
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
    }), n = h(() => {
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
    return (u, r) => (p(), f("div", {
      class: v(["cp-button-neno", n.value])
    }, [
      d("div", {
        class: v(["button", s.value, t.bg ? "show-bg" : ""])
      }, [
        Z,
        ee,
        te,
        ne,
        g(u.$slots, "default", {}, void 0, !0)
      ], 2)
    ], 2));
  }
}), ae = /* @__PURE__ */ w(se, [["__scopeId", "data-v-b847fdcb"]]), oe = b(ae), le = /* @__PURE__ */ y({
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
  setup(e, { emit: o }) {
    T();
    const t = e, s = h(() => {
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
    }), n = h(() => {
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
    return (u, r) => (p(), f("div", {
      class: v(["cp-button-neno", n.value])
    }, [
      d("div", {
        class: v(["button", s.value, t.bg ? "show-bg" : ""])
      }, [
        g(u.$slots, "default", {}, void 0, !0)
      ], 2)
    ], 2));
  }
}), re = /* @__PURE__ */ w(le, [["__scopeId", "data-v-d00bccf3"]]), ce = b(re), ue = ["data-word"], ie = /* @__PURE__ */ y({
  name: "CpText",
  __name: "text",
  props: {
    lineColor: {
      type: String,
      default: "#fff"
    }
  },
  setup(e) {
    const o = m(""), t = T();
    if (t && t.default) {
      let n = t.default();
      o.value = n[0].children;
    }
    const s = e;
    return (n, u) => (p(), f("div", {
      class: "cp-text",
      "data-word": o.value
    }, [
      g(n.$slots, "default", {}, void 0, !0),
      d("div", {
        class: "cp-text-line",
        style: M("background: " + s.lineColor)
      }, null, 4)
    ], 8, ue));
  }
}), de = /* @__PURE__ */ w(ie, [["__scopeId", "data-v-d9bb2586"]]), pe = b(de), fe = /* @__PURE__ */ y({
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
    const o = e, t = (n, u) => {
      let r = `0px 0px ${n}`;
      for (let c = 1; c <= o.long; c++) {
        const i = s(n, c);
        r += `, ${u === "left" ? "-" : ""}${c}px ${c}px ${i}`;
      }
      return r;
    }, s = (n, u) => {
      const r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i.exec(n), c = /^rgba?\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})(,\s*([\d.]+))?\)$/i.exec(n);
      if (r) {
        const i = parseInt(r[1], 16), $ = parseInt(r[2], 16), S = parseInt(r[3], 16), x = r[4] ? parseInt(r[4], 16) / 255 : 1, C = Math.max(0, x - u * 0.05);
        return `rgba(${i}, ${$}, ${S}, ${C})`;
      } else if (c) {
        const i = parseInt(c[1], 10), $ = parseInt(c[2], 10), S = parseInt(c[3], 10), x = c[5] ? parseFloat(c[5]) : 1, C = Math.max(0, x - u * 0.05);
        return `rgba(${i}, ${$}, ${S}, ${C})`;
      } else
        throw new Error(`Unsupported color format: ${n}`);
    };
    return (n, u) => (p(), f("div", {
      class: v(["shadow-text", o.direction]),
      style: M({ textShadow: t(o.shadowColor, o.direction) })
    }, [
      g(n.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), ve = /* @__PURE__ */ w(fe, [["__scopeId", "data-v-236954e6"]]), me = b(ve), ge = { class: "glow-text" }, _e = /* @__PURE__ */ y({
  name: "CpGlowText",
  __name: "glowText",
  props: {
    color: {
      type: String,
      default: "#e91e84"
    }
  },
  setup(e) {
    const o = e;
    return A(() => {
      document.documentElement.style.setProperty("--child-color", o.color);
    }), (t, s) => (p(), f("div", ge, [
      g(t.$slots, "default", {}, void 0, !0)
    ]));
  }
}), he = /* @__PURE__ */ w(_e, [["__scopeId", "data-v-36354501"]]), ye = b(he), be = { class: "cp-typing" }, we = { class: "content" }, $e = /* @__PURE__ */ y({
  name: "CpTyping",
  __name: "typing",
  setup(e) {
    return (o, t) => (p(), f("div", be, [
      d("div", we, [
        g(o.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), xe = /* @__PURE__ */ w($e, [["__scopeId", "data-v-22bd4332"]]), Ce = b(xe), Se = { class: "cp-full-page" }, Te = ["onClick"], ze = /* @__PURE__ */ y({
  name: "CpFullPage",
  __name: "fullPage",
  props: ["pageNum", "position"],
  emits: ["toNext", "toLast", "change"],
  setup(e, { emit: o }) {
    const t = e, s = o, n = m();
    H(() => {
      var a;
      (a = n.value) != null && a.style && (n.value.style.top = c.value);
    });
    const u = m(window.innerHeight), r = h(() => (i.value = !0, u.value)), c = h(() => `-${l.value * r.value}px`), i = m(!1), $ = m(!0);
    function S(a) {
      i.value = !1, $.value && ($.value = !1, O(a), setTimeout(() => {
        $.value = !0;
      }, 500));
    }
    const x = m(0), C = m(0), _ = m(0);
    function N(a) {
      x.value = a.touches[0].pageY || a.changedTouches[0].pageY;
    }
    function B(a) {
      a.preventDefault(), i.value = !1, C.value = a.changedTouches[0].pageY || a.touches[0].pageY, _.value = C.value - x.value, Math.abs(_.value) >= 60 ? (l.value < t.pageNum - 1 && _.value < 0 && l.value++, l.value > 0 && _.value > 0 && l.value--) : n.value.style.top = `-${l.value * r.value}px`;
    }
    function E(a) {
      i.value = !0, a.preventDefault(), _.value = (a.changedTouches[0].pageY || a.touches[0].pageY) - x.value, !(l.value === t.pageNum - 1 && _.value < 0 || l.value === 0 && _.value > 0) && (n.value.style.top = `-${l.value * r.value + _.value * -1}px`);
    }
    function O(a) {
      s("change", a.wheelDelta), a.wheelDelta < 0 ? P() : Y();
    }
    const l = m(0);
    function P() {
      l.value < t.pageNum - 1 && (l.value++, s("toNext", l.value));
    }
    function Y() {
      (l.value > 1 || l.value === 1) && (l.value--, s("toLast", l.value));
    }
    function L(a) {
      console.log(a), i.value = !1, l.value = a;
    }
    return (a, D) => (p(), f("div", Se, [
      d("div", {
        ref_key: "element",
        ref: n,
        class: v([{ activeTranstion: i.value }, "inner-box"]),
        onMousewheel: S,
        onTouchstart: N,
        onTouchend: B,
        onTouchmove: E
      }, [
        g(a.$slots, "default", {}, void 0, !0)
      ], 34),
      d("div", {
        class: v(["cp-full-dot", t.position])
      }, [
        (p(!0), f(U, null, V(t.pageNum, (Ne, I) => (p(), f("div", {
          onClick: (Be) => L(I),
          class: "cp-full-dot-item"
        }, [
          d("div", {
            class: v(["cp-full-dot-item-bg", { active: I === l.value }])
          }, null, 2),
          g(a.$slots, "dot", {}, void 0, !0)
        ], 8, Te))), 256))
      ], 2)
    ]));
  }
}), Ie = /* @__PURE__ */ w(ze, [["__scopeId", "data-v-4cf5557c"]]), Me = b(Ie), k = [
  X,
  oe,
  ce,
  pe,
  me,
  ye,
  Ce,
  Me
];
console.log(k);
const ke = q([...k]), Oe = ke.install;
export {
  ke as default,
  Oe as install,
  q as makeInstaller
};
