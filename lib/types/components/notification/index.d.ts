export declare const CyberNotification: import("package/utils/typescript").SFCWithInstall<import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    position: {
        type: () => import("./src/instance.ts").NotificationPosition;
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
        type: () => import("./src/instance.ts").NotificationEffect;
        default: string;
        validator: (value: string) => boolean;
    };
}>, {
    info: (options: Omit<import("./src/instance.ts").NotificationOptions, "type">) => number;
    success: (options: Omit<import("./src/instance.ts").NotificationOptions, "type">) => number;
    warning: (options: Omit<import("./src/instance.ts").NotificationOptions, "type">) => number;
    error: (options: Omit<import("./src/instance.ts").NotificationOptions, "type">) => number;
    create: (options: import("./src/instance.ts").NotificationOptions) => number;
    close: (id: number) => void;
    clearAll: () => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    close: (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    position: {
        type: () => import("./src/instance.ts").NotificationPosition;
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
        type: () => import("./src/instance.ts").NotificationEffect;
        default: string;
        validator: (value: string) => boolean;
    };
}>> & Readonly<{
    onClose?: ((...args: any[]) => any) | undefined;
}>, {
    position: import("./src/instance.ts").NotificationPosition;
    maxCount: number;
    duration: number;
    effect: import("./src/instance.ts").NotificationEffect;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>> & Record<string, any>;
export default CyberNotification;
export type { NotificationInstance } from './src/instance.ts';
