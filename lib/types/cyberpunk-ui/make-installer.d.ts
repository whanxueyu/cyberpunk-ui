import type { App, Plugin } from '@vue/runtime-core';
export declare const makeInstaller: (components?: Plugin[]) => {
    install: (app: App) => void;
};
