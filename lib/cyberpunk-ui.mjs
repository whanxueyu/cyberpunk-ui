import { defineComponent as d, useSlots as p, computed as a, openBlock as o, createElementBlock as l, normalizeClass as c, createElementVNode as f, unref as m, renderSlot as y, toDisplayString as _ } from "vue";
const g = (t = []) => ({
  install: (n) => {
    t.forEach((e) => n.use(e));
  }
}), v = (t, s) => (t.install = (n) => {
  for (const e of [t, ...Object.values({})])
    n.component(e.name, e);
}, t), z = ["data-content"], b = { key: 1 }, h = /* @__PURE__ */ d({
  name: "CpButton",
  __name: "button",
  props: {
    type: {
      type: String,
      default: "primary",
      validator: (t) => ["primary", "success", "warning", "danger"].indexOf(t) !== -1
    },
    size: {
      type: String,
      default: "default",
      validator: (t) => ["large", "default", "small"].indexOf(t) !== -1
    },
    content: {
      type: String,
      default: "CyberPunk-UI"
    }
  },
  emits: ["onMouseEnter", "onMouseLeave"],
  setup(t, { emit: s }) {
    const n = p(), e = t, r = a(() => {
      switch (e.type) {
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
    }), u = a(() => {
      switch (e.size) {
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
    return (i, B) => (o(), l("div", {
      class: c(["cp-button", u.value])
    }, [
      f("div", {
        class: c(["button", r.value]),
        "data-content": e.content
      }, [
        m(n) ? y(i.$slots, "default", { key: 0 }, void 0, !0) : (o(), l("span", b, _(e.content), 1))
      ], 10, z)
    ], 2));
  }
}), k = (t, s) => {
  const n = t.__vccOpts || t;
  for (const [e, r] of s)
    n[e] = r;
  return n;
}, S = /* @__PURE__ */ k(h, [["__scopeId", "data-v-583221f4"]]), w = v(S), C = [
  w
], x = g([...C]), I = x.install;
export {
  x as default,
  I as install,
  g as makeInstaller
};
