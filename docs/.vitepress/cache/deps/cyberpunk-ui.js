import {
  computed,
  createBaseVNode,
  createElementBlock,
  defineComponent,
  normalizeClass,
  openBlock,
  renderSlot,
  toDisplayString,
  unref,
  useSlots
} from "./chunk-WFWRDC73.js";

// node_modules/cyberpunk-ui/lib/cyberpunk-ui.mjs
var g = (t = []) => ({
  install: (n) => {
    t.forEach((e) => n.use(e));
  }
});
var v = (t, s) => (t.install = (n) => {
  for (const e of [t, ...Object.values({})])
    n.component(e.name, e);
}, t);
var z = ["data-content"];
var b = { key: 1 };
var h = defineComponent({
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
    const n = useSlots(), e = t, r = computed(() => {
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
    }), u = computed(() => {
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
    return (i, B) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(["cp-button", u.value])
    }, [
      createBaseVNode("div", {
        class: normalizeClass(["button", r.value]),
        "data-content": e.content
      }, [
        unref(n) ? renderSlot(i.$slots, "default", { key: 0 }, void 0, true) : (openBlock(), createElementBlock("span", b, toDisplayString(e.content), 1))
      ], 10, z)
    ], 2));
  }
});
var k = (t, s) => {
  const n = t.__vccOpts || t;
  for (const [e, r] of s)
    n[e] = r;
  return n;
};
var S = k(h, [["__scopeId", "data-v-583221f4"]]);
var w = v(S);
var C = [
  w
];
var x = g([...C]);
var I = x.install;
export {
  x as default,
  I as install,
  g as makeInstaller
};
//# sourceMappingURL=cyberpunk-ui.js.map
