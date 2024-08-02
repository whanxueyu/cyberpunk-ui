import { defineComponent as m, useSlots as y, computed as o, openBlock as i, createElementBlock as d, normalizeClass as l, createElementVNode as s, unref as v, renderSlot as f, toDisplayString as b, pushScopeId as h, popScopeId as z } from "vue";
const S = (e = []) => ({
  install: (n) => {
    e.forEach((t) => n.use(t));
  }
}), _ = (e, r) => (e.install = (n) => {
  for (const t of [e, ...Object.values({})])
    n.component(t.name, t);
}, e), w = ["data-content"], I = { key: 1 }, k = /* @__PURE__ */ m({
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
  setup(e, { emit: r }) {
    const n = y(), t = e, a = o(() => {
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
    }), u = o(() => {
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
    return (p, U) => (i(), d("div", {
      class: l(["cp-button", u.value])
    }, [
      s("div", {
        class: l(["button", a.value]),
        "data-content": t.content
      }, [
        v(n) ? f(p.$slots, "default", { key: 0 }, void 0, !0) : (i(), d("span", I, b(t.content), 1))
      ], 10, w)
    ], 2));
  }
}), g = (e, r) => {
  const n = e.__vccOpts || e;
  for (const [t, a] of r)
    n[t] = a;
  return n;
}, C = /* @__PURE__ */ g(k, [["__scopeId", "data-v-abbd8a2e"]]), x = _(C), c = (e) => (h("data-v-adc9b76e"), e = e(), z(), e), O = /* @__PURE__ */ c(() => /* @__PURE__ */ s("div", { class: "border" }, null, -1)), B = /* @__PURE__ */ c(() => /* @__PURE__ */ s("div", { class: "border" }, null, -1)), E = /* @__PURE__ */ c(() => /* @__PURE__ */ s("div", { class: "border" }, null, -1)), $ = /* @__PURE__ */ c(() => /* @__PURE__ */ s("div", { class: "border" }, null, -1)), M = /* @__PURE__ */ m({
  name: "Nenobutton",
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
    content: {
      type: String,
      default: "CyberPunk-UI"
    }
  },
  emits: ["onMouseEnter", "onMouseLeave"],
  setup(e, { emit: r }) {
    y();
    const n = e, t = o(() => {
      switch (n.type) {
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
    }), a = o(() => {
      switch (n.size) {
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
    return (u, p) => (i(), d("div", {
      class: l(["cp-button-neno", a.value])
    }, [
      s("div", {
        class: l(["button", t.value])
      }, [
        O,
        B,
        E,
        $,
        f(u.$slots, "default", {}, void 0, !0)
      ], 2)
    ], 2));
  }
}), N = /* @__PURE__ */ g(M, [["__scopeId", "data-v-adc9b76e"]]), L = _(N), P = [
  x,
  L
], T = S([...P]), D = T.install;
export {
  T as default,
  D as install,
  S as makeInstaller
};
