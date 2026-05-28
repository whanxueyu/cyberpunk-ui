import type { NotificationPosition, NotificationEffect, NotificationOptions } from './instance';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    position: {
        type: () => NotificationPosition;
        default: string;
        validator: (value: string) => boolean;
    };
    maxCount: {
        type: NumberConstructor;
        default: number;
    };
    duration: {
        type: NumberConstructor;
        default: number;
    };
    effect: {
        type: () => NotificationEffect;
        default: string;
        validator: (value: string) => boolean;
    };
}>, {
    info: (options: Omit<NotificationOptions, "type">) => number;
    success: (options: Omit<NotificationOptions, "type">) => number;
    warning: (options: Omit<NotificationOptions, "type">) => number;
    error: (options: Omit<NotificationOptions, "type">) => number;
    create: (options: NotificationOptions) => number;
    close: (id: number) => void;
    clearAll: () => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    close: (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    position: {
        type: () => NotificationPosition;
        default: string;
        validator: (value: string) => boolean;
    };
    maxCount: {
        type: NumberConstructor;
        default: number;
    };
    duration: {
        type: NumberConstructor;
        default: number;
    };
    effect: {
        type: () => NotificationEffect;
        default: string;
        validator: (value: string) => boolean;
    };
}>> & Readonly<{
    onClose?: ((...args: any[]) => any) | undefined;
}>, {
    position: NotificationPosition;
    maxCount: number;
    duration: number;
    effect: NotificationEffect;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
