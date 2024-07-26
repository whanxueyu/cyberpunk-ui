import { defineComponent as a, openBlock as r, createElementBlock as d, createElementVNode as p, renderSlot as l } from "vue";
const _ = a({
  name: "CpButton"
  // 组件选项
}), u = (t, o) => {
  const n = t.__vccOpts || t;
  for (const [s, c] of o)
    n[s] = c;
  return n;
}, i = { class: "black" }, f = { class: "button" };
function m(t, o, n, s, c, C) {
  return r(), d("div", i, [
    p("div", f, [
      l(t.$slots, "default", {}, void 0, !0)
    ])
  ]);
}
const e = /* @__PURE__ */ u(_, [["render", m], ["__scopeId", "data-v-dd9dd1b3"]]);
e.install = (t) => {
  t.component("CpButton", e);
};
const v = [
  e
], B = (t) => {
  v.forEach((o) => {
    t.component(o.name, o);
  });
}, $ = {
  install: B
};
export {
  e as CpButtton,
  $ as default
};
