import { defineComponent as _, useSlots as b, computed as v, openBlock as c, createElementBlock as u, normalizeClass as p, createElementVNode as l, unref as N, renderSlot as y, toDisplayString as C, pushScopeId as F, popScopeId as R, createTextVNode as G, normalizeStyle as H, ref as d, watchEffect as V, Fragment as j, renderList as U, withDirectives as X, vShow as q } from "vue";
const A = (e = []) => ({
  install: (t) => {
    e.forEach((s) => t.use(s));
  }
}), g = (e, n) => (e.install = (t) => {
  for (const s of [e, ...Object.values({})])
    t.component(s.name, s);
}, e), J = ["data-content"], K = { key: 1 }, Q = /* @__PURE__ */ _({
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
  setup(e, { emit: n }) {
    const t = b(), s = e, r = v(() => {
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
    }), h = v(() => {
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
    return (i, w) => (c(), u("div", {
      class: p(["cp-button", h.value])
    }, [
      l("div", {
        class: p(["button", r.value]),
        "data-content": s.content
      }, [
        N(t) ? y(i.$slots, "default", { key: 0 }, void 0, !0) : (c(), u("span", K, C(s.content), 1))
      ], 10, J)
    ], 2));
  }
}), m = (e, n) => {
  const t = e.__vccOpts || e;
  for (const [s, r] of n)
    t[s] = r;
  return t;
}, W = /* @__PURE__ */ m(Q, [["__scopeId", "data-v-abbd8a2e"]]), Z = g(W), x = (e) => (F("data-v-b847fdcb"), e = e(), R(), e), ee = /* @__PURE__ */ x(() => /* @__PURE__ */ l("div", { class: "border" }, null, -1)), te = /* @__PURE__ */ x(() => /* @__PURE__ */ l("div", { class: "border" }, null, -1)), ne = /* @__PURE__ */ x(() => /* @__PURE__ */ l("div", { class: "border" }, null, -1)), se = /* @__PURE__ */ x(() => /* @__PURE__ */ l("div", { class: "border" }, null, -1)), ae = /* @__PURE__ */ _({
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
  setup(e, { emit: n }) {
    b();
    const t = e, s = v(() => {
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
    }), r = v(() => {
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
    return (h, i) => (c(), u("div", {
      class: p(["cp-button-neno", r.value])
    }, [
      l("div", {
        class: p(["button", s.value, t.bg ? "show-bg" : ""])
      }, [
        ee,
        te,
        ne,
        se,
        y(h.$slots, "default", {}, void 0, !0)
      ], 2)
    ], 2));
  }
}), oe = /* @__PURE__ */ m(ae, [["__scopeId", "data-v-b847fdcb"]]), le = g(oe), re = /* @__PURE__ */ _({
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
  setup(e, { emit: n }) {
    b();
    const t = e, s = v(() => {
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
    }), r = v(() => {
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
    return (h, i) => (c(), u("div", {
      class: p(["cp-button-neno", r.value])
    }, [
      l("div", {
        class: p(["button", s.value, t.bg ? "show-bg" : ""])
      }, [
        y(h.$slots, "default", {}, void 0, !0)
      ], 2)
    ], 2));
  }
}), ce = /* @__PURE__ */ m(re, [["__scopeId", "data-v-d00bccf3"]]), ue = g(ce), ie = ["data-word"], de = /* @__PURE__ */ _({
  name: "CpText",
  __name: "text",
  props: {
    type: {
      type: String,
      default: "primary",
      validator: (e) => ["primary", "success", "warning", "danger"].indexOf(e) !== -1
    },
    content: {
      type: String,
      default: "TEXT"
    },
    bgColor: {
      type: String,
      default: "#fff"
    }
  },
  setup(e) {
    b();
    const n = e;
    return (t, s) => (c(), u("div", {
      class: "cp-text",
      "data-word": n.content
    }, [
      G(C(n.content) + " ", 1),
      l("div", {
        class: "cp-text-line",
        style: H("background: " + n.bgColor)
      }, null, 4)
    ], 8, ie));
  }
}), pe = /* @__PURE__ */ m(de, [["__scopeId", "data-v-64e3465d"]]), fe = g(pe), ve = ["data-color"], _e = /* @__PURE__ */ _({
  name: "CpShadowText",
  __name: "shadowText",
  props: {
    type: {
      type: String,
      default: "left",
      validator: (e) => ["left", "right"].indexOf(e) !== -1
    },
    shadowColor: {
      type: String,
      default: "#ae0ed68c"
    }
  },
  setup(e) {
    const n = e;
    return (t, s) => (c(), u("div", {
      class: p(["shadow-text", n.type]),
      "data-color": n.shadowColor
    }, [
      y(t.$slots, "default", {}, void 0, !0)
    ], 10, ve));
  }
}), ge = /* @__PURE__ */ m(_e, [["__scopeId", "data-v-0060592a"]]), me = g(ge), he = ["data-color"], ye = /* @__PURE__ */ _({
  name: "CpGlowText",
  __name: "glowText",
  props: {
    color: {
      type: String,
      default: "#e91e84"
    }
  },
  setup(e) {
    const n = e;
    return (t, s) => (c(), u("div", {
      class: "glow-text",
      "data-color": n.color
    }, [
      y(t.$slots, "default", {}, void 0, !0)
    ], 8, he));
  }
}), we = /* @__PURE__ */ m(ye, [["__scopeId", "data-v-cc37feb3"]]), be = g(we), xe = { class: "cp-typing" }, Te = { class: "content" }, Se = /* @__PURE__ */ _({
  name: "CpTyping",
  __name: "typing",
  setup(e) {
    return (n, t) => (c(), u("div", xe, [
      l("div", Te, [
        y(n.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), Ce = /* @__PURE__ */ m(Se, [["__scopeId", "data-v-44949692"]]), $e = g(Ce), ze = {
  class: "cp-full-page",
  ref: "fullPage"
}, Ie = { class: "cp-full-dot" }, ke = ["onClick"], Be = /* @__PURE__ */ _({
  name: "CpFullPage",
  __name: "fullPage",
  props: ["sectionList"],
  setup(e) {
    const n = e;
    d([
      {
        title: "section1"
      },
      {
        title: "section2"
      },
      {
        title: "section3"
      }
    ]);
    const t = d();
    V(() => {
      t.value.style && (t.value.style.top = h.value);
    });
    const s = d(window.innerHeight), r = v(() => (i.value = !0, s.value)), h = v(() => `-${o.value * r.value}px`), i = d(!1), w = d(!0);
    function I(a) {
      i.value = !1, w.value && (w.value = !1, E(a), setTimeout(() => {
        w.value = !0;
      }, 500));
    }
    const T = d(0), $ = d(0), f = d(0);
    function k(a) {
      T.value = a.touches[0].pageY || a.changedTouches[0].pageY;
    }
    function B(a) {
      a.preventDefault(), i.value = !1, $.value = a.changedTouches[0].pageY || a.touches[0].pageY, f.value = $.value - T.value, Math.abs(f.value) >= 60 ? (o.value < n.sectionList.value.length - 1 && f.value < 0 && o.value++, o.value > 0 && f.value > 0 && o.value--) : t.value.style.top = `-${o.value * r.value}px`;
    }
    function O(a) {
      i.value = !0, a.preventDefault(), f.value = (a.changedTouches[0].pageY || a.touches[0].pageY) - T.value, !(o.value === n.sectionList.value.length - 1 && f.value < 0 || o.value === 0 && f.value > 0) && (t.value.style.top = `-${o.value * r.value + f.value * -1}px`);
    }
    function E(a) {
      a.wheelDelta < 0 ? L() : M();
    }
    const o = d(0);
    function L() {
      o.value < n.sectionList.value.length - 1 && o.value++;
    }
    function M() {
      (o.value > 1 || o.value === 1) && o.value--;
    }
    function P(a) {
      i.value = !1, o.value = a;
    }
    return (a, Y) => (c(), u("div", ze, [
      l("div", {
        ref_key: "element",
        ref: t,
        class: p([{ activeTranstion: i.value }, "inner-box"]),
        onMousewheel: I,
        onTouchstart: k,
        onTouchend: B,
        onTouchmove: O
      }, [
        y(a.$slots, "default", {}, void 0, !0)
      ], 34),
      l("ul", Ie, [
        (c(!0), u(j, null, U(n.sectionList, (D, S) => (c(), u("li", {
          onClick: (Me) => P(S)
        }, [
          l("span", {
            class: p({ active: S === o.value })
          }, null, 2),
          X(l("div", { class: "show-dec" }, C(D.title), 513), [
            [q, S === o.value]
          ])
        ], 8, ke))), 256))
      ])
    ], 512));
  }
}), Oe = /* @__PURE__ */ m(Be, [["__scopeId", "data-v-ef474626"]]), Ee = g(Oe), z = [
  Z,
  le,
  ue,
  fe,
  me,
  be,
  $e,
  Ee
];
console.log(z);
const Le = A([...z]), Ye = Le.install;
export {
  Le as default,
  Ye as install,
  A as makeInstaller
};
