import {
  createBaseVNode,
  createElementBlock,
  defineComponent,
  openBlock,
  renderSlot
} from "./chunk-DAWBZIED.js";

// node_modules/cyberpunk-ui/lib/cyberpunk-ui.mjs
var i = (t = []) => ({
  install: (o) => {
    t.forEach((n) => o.use(n));
  }
});
var p = (t, e) => (t.install = (o) => {
  for (const n of [t, ...Object.values({})])
    o.component(n.name, n);
}, t);
var u = defineComponent({
  name: "CpButton"
  // 组件选项
});
var _ = (t, e) => {
  const o = t.__vccOpts || t;
  for (const [n, s] of e)
    o[n] = s;
  return o;
};
var f = { class: "black" };
var m = { class: "button" };
function v(t, e, o, n, s, b) {
  return openBlock(), createElementBlock("div", f, [
    createBaseVNode("div", m, [
      renderSlot(t.$slots, "default", {}, void 0, true)
    ])
  ]);
}
var h = _(u, [["render", v], ["__scopeId", "data-v-b94ce646"]]);
var k = p(h);
var B = [
  k
];
var $ = i([...B]);
var x = $.install;
export {
  $ as default,
  x as install,
  i as makeInstaller
};
//# sourceMappingURL=cyberpunk-ui.js.map