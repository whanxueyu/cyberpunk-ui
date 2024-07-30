import { NOOP } from '@vue/shared';
export const withInstall = (main, extra) => {
    ;
    main.install = (app) => {
        for (const comp of [main, ...Object.values(extra !== null && extra !== void 0 ? extra : {})]) {
            app.component(comp.name, comp);
        }
    };
    if (extra) {
        for (const [key, comp] of Object.entries(extra)) {
            ;
            main[key] = comp;
        }
    }
    return main;
};
export const withInstallFunction = (fn, name) => {
    ;
    fn.install = (app) => {
        ;
        fn._context = app._context;
        app.config.globalProperties[name] = fn;
    };
    return fn;
};
export const withInstallDirective = (directive, name) => {
    ;
    directive.install = (app) => {
        app.directive(name, directive);
    };
    return directive;
};
export const withNoopInstall = (component) => {
    component.install = NOOP;
    return component;
};
//# sourceMappingURL=install.js.map