import { defineComponent as f, useSlots as y, computed as o, openBlock as c, createElementBlock as i, normalizeClass as l, createElementVNode as r, unref as b, renderSlot as m, toDisplayString as v, pushScopeId as z, popScopeId as h } from "vue";
const w = (e = []) => ({
  install: (t) => {
    e.forEach((s) => t.use(s));
  }
}), _ = (e, a) => (e.install = (t) => {
  for (const s of [e, ...Object.values({})])
    t.component(s.name, s);
}, e), S = ["data-content"], C = { key: 1 }, x = /* @__PURE__ */ f({
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
    const t = y(), s = e, n = o(() => {
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
    }), u = o(() => {
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
    return (p, U) => (c(), i("div", {
      class: l(["cp-button", u.value])
    }, [
      r("div", {
        class: l(["button", n.value]),
        "data-content": s.content
      }, [
        b(t) ? m(p.$slots, "default", { key: 0 }, void 0, !0) : (c(), i("span", C, v(s.content), 1))
      ], 10, S)
    ], 2));
  }
}), g = (e, a) => {
  const t = e.__vccOpts || e;
  for (const [s, n] of a)
    t[s] = n;
  return t;
}, I = /* @__PURE__ */ g(x, [["__scopeId", "data-v-abbd8a2e"]]), O = _(I), d = (e) => (z("data-v-f129b4c1"), e = e(), h(), e), k = /* @__PURE__ */ d(() => /* @__PURE__ */ r("div", { class: "border" }, null, -1)), B = /* @__PURE__ */ d(() => /* @__PURE__ */ r("div", { class: "border" }, null, -1)), $ = /* @__PURE__ */ d(() => /* @__PURE__ */ r("div", { class: "border" }, null, -1)), E = /* @__PURE__ */ d(() => /* @__PURE__ */ r("div", { class: "border" }, null, -1)), M = /* @__PURE__ */ f({
  name: "CpNenobutton",
  __name: "nenobutton",
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
    y();
    const t = e, s = o(() => {
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
    }), n = o(() => {
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
    return (u, p) => (c(), i("div", {
      class: l(["cp-button-neno", n.value])
    }, [
      r("div", {
        class: l(["button", s.value, t.bg ? "show-bg" : ""])
      }, [
        k,
        B,
        $,
        E,
        m(u.$slots, "default", {}, void 0, !0)
      ], 2)
    ], 2));
  }
}), N = /* @__PURE__ */ g(M, [["__scopeId", "data-v-f129b4c1"]]), L = _(N), R = /* @__PURE__ */ f({
  name: "CpReflectbutton",
  __name: "reflectbutton",
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
    y();
    const t = e, s = o(() => {
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
    }), n = o(() => {
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
    return (u, p) => (c(), i("div", {
      class: l(["cp-button-neno", n.value])
    }, [
      r("div", {
        class: l(["button", s.value, t.bg ? "show-bg" : ""])
      }, [
        m(u.$slots, "default", {}, void 0, !0)
      ], 2)
    ], 2));
  }
}), T = /* @__PURE__ */ g(R, [["__scopeId", "data-v-b3a0922b"]]), j = _(T), D = [
  O,
  L,
  j
], P = w([...D]), q = P.install;
export {
  P as default,
  q as install,
  w as makeInstaller
};
