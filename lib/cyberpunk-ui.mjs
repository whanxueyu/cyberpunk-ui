import { defineComponent as c, openBlock as l, createElementBlock as r, createElementVNode as a, renderSlot as d } from "vue";
const i = (t = []) => ({
  install: (o) => {
    t.forEach((n) => o.use(n));
  }
}), p = (t, e) => (t.install = (o) => {
  for (const n of [t, ...Object.values({})])
    o.component(n.name, n);
}, t), u = c({
  name: "CpButton"
  // 组件选项
}), _ = (t, e) => {
  const o = t.__vccOpts || t;
  for (const [n, s] of e)
    o[n] = s;
  return o;
}, f = { class: "black" }, m = { class: "button" };
function v(t, e, o, n, s, b) {
  return l(), r("div", f, [
    a("div", m, [
      d(t.$slots, "default", {}, void 0, !0)
    ])
  ]);
}
const h = /* @__PURE__ */ _(u, [["render", v], ["__scopeId", "data-v-b94ce646"]]), k = p(h), B = [
  k
], $ = i([...B]), x = $.install;
export {
  $ as default,
  x as install,
  i as makeInstaller
};
