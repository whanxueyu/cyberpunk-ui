declare const _default: (({
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        type: {
            type: StringConstructor;
            default: string;
            validator: (value: string) => boolean;
        };
        size: {
            type: StringConstructor;
            default: string;
            validator: (value: string) => boolean;
        };
        content: {
            type: StringConstructor;
            default: string;
        };
    }>> & Readonly<{
        onOnMouseEnter?: ((...args: any[]) => any) | undefined;
        onOnMouseLeave?: ((...args: any[]) => any) | undefined;
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        onMouseEnter: (...args: any[]) => void;
        onMouseLeave: (...args: any[]) => void;
    }, import("vue").PublicProps, {
        type: string;
        size: string;
        content: string;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        type: {
            type: StringConstructor;
            default: string;
            validator: (value: string) => boolean;
        };
        size: {
            type: StringConstructor;
            default: string;
            validator: (value: string) => boolean;
        };
        content: {
            type: StringConstructor;
            default: string;
        };
    }>> & Readonly<{
        onOnMouseEnter?: ((...args: any[]) => any) | undefined;
        onOnMouseLeave?: ((...args: any[]) => any) | undefined;
    }>, {}, {}, {}, {}, {
        type: string;
        size: string;
        content: string;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
    };
    size: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
    };
    content: {
        type: StringConstructor;
        default: string;
    };
}>> & Readonly<{
    onOnMouseEnter?: ((...args: any[]) => any) | undefined;
    onOnMouseLeave?: ((...args: any[]) => any) | undefined;
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    onMouseEnter: (...args: any[]) => void;
    onMouseLeave: (...args: any[]) => void;
}, string, {
    type: string;
    size: string;
    content: string;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
}) & import("vue").ObjectPlugin<any[]> & Record<string, any>) | ({
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        type: {
            type: StringConstructor;
            default: string;
            validator: (value: string) => boolean;
        };
        size: {
            type: StringConstructor;
            default: string;
            validator: (value: string) => boolean;
        };
        content: {
            type: StringConstructor;
            default: string;
        };
    }>> & Readonly<{
        onOnMouseEnter?: ((...args: any[]) => any) | undefined;
        onOnMouseLeave?: ((...args: any[]) => any) | undefined;
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        onMouseEnter: (...args: any[]) => void;
        onMouseLeave: (...args: any[]) => void;
    }, import("vue").PublicProps, {
        type: string;
        size: string;
        content: string;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        type: {
            type: StringConstructor;
            default: string;
            validator: (value: string) => boolean;
        };
        size: {
            type: StringConstructor;
            default: string;
            validator: (value: string) => boolean;
        };
        content: {
            type: StringConstructor;
            default: string;
        };
    }>> & Readonly<{
        onOnMouseEnter?: ((...args: any[]) => any) | undefined;
        onOnMouseLeave?: ((...args: any[]) => any) | undefined;
    }>, {}, {}, {}, {}, {
        type: string;
        size: string;
        content: string;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
    };
    size: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
    };
    content: {
        type: StringConstructor;
        default: string;
    };
}>> & Readonly<{
    onOnMouseEnter?: ((...args: any[]) => any) | undefined;
    onOnMouseLeave?: ((...args: any[]) => any) | undefined;
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    onMouseEnter: (...args: any[]) => void;
    onMouseLeave: (...args: any[]) => void;
}, string, {
    type: string;
    size: string;
    content: string;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
}) & ((app: import("vue").App, ...options: any[]) => any) & Partial<import("vue").ObjectPlugin<any[]>> & Record<string, any>) | ({
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        position: {
            type: () => import("package/components/notification/src/instance").NotificationPosition;
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
            type: () => import("package/components/notification/src/instance").NotificationEffect;
            default: string;
            validator: (value: string) => boolean;
        };
    }>> & Readonly<{
        onClose?: ((...args: any[]) => any) | undefined;
    }>, {
        info: (options: Omit<import("package/components/notification/src/instance").NotificationOptions, "type">) => number;
        success: (options: Omit<import("package/components/notification/src/instance").NotificationOptions, "type">) => number;
        warning: (options: Omit<import("package/components/notification/src/instance").NotificationOptions, "type">) => number;
        error: (options: Omit<import("package/components/notification/src/instance").NotificationOptions, "type">) => number;
        create: (options: import("package/components/notification/src/instance").NotificationOptions) => number;
        close: (id: number) => void;
        clearAll: () => void;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        close: (...args: any[]) => void;
    }, import("vue").PublicProps, {
        position: import("package/components/notification/src/instance").NotificationPosition;
        maxCount: number;
        duration: number;
        effect: import("package/components/notification/src/instance").NotificationEffect;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        position: {
            type: () => import("package/components/notification/src/instance").NotificationPosition;
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
            type: () => import("package/components/notification/src/instance").NotificationEffect;
            default: string;
            validator: (value: string) => boolean;
        };
    }>> & Readonly<{
        onClose?: ((...args: any[]) => any) | undefined;
    }>, {
        info: (options: Omit<import("package/components/notification/src/instance").NotificationOptions, "type">) => number;
        success: (options: Omit<import("package/components/notification/src/instance").NotificationOptions, "type">) => number;
        warning: (options: Omit<import("package/components/notification/src/instance").NotificationOptions, "type">) => number;
        error: (options: Omit<import("package/components/notification/src/instance").NotificationOptions, "type">) => number;
        create: (options: import("package/components/notification/src/instance").NotificationOptions) => number;
        close: (id: number) => void;
        clearAll: () => void;
    }, {}, {}, {}, {
        position: import("package/components/notification/src/instance").NotificationPosition;
        maxCount: number;
        duration: number;
        effect: import("package/components/notification/src/instance").NotificationEffect;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    position: {
        type: () => import("package/components/notification/src/instance").NotificationPosition;
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
        type: () => import("package/components/notification/src/instance").NotificationEffect;
        default: string;
        validator: (value: string) => boolean;
    };
}>> & Readonly<{
    onClose?: ((...args: any[]) => any) | undefined;
}>, {
    info: (options: Omit<import("package/components/notification/src/instance").NotificationOptions, "type">) => number;
    success: (options: Omit<import("package/components/notification/src/instance").NotificationOptions, "type">) => number;
    warning: (options: Omit<import("package/components/notification/src/instance").NotificationOptions, "type">) => number;
    error: (options: Omit<import("package/components/notification/src/instance").NotificationOptions, "type">) => number;
    create: (options: import("package/components/notification/src/instance").NotificationOptions) => number;
    close: (id: number) => void;
    clearAll: () => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    close: (...args: any[]) => void;
}, string, {
    position: import("package/components/notification/src/instance").NotificationPosition;
    maxCount: number;
    duration: number;
    effect: import("package/components/notification/src/instance").NotificationEffect;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("vue").ObjectPlugin<any[]> & Record<string, any>) | ({
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        position: {
            type: () => import("package/components/notification/src/instance").NotificationPosition;
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
            type: () => import("package/components/notification/src/instance").NotificationEffect;
            default: string;
            validator: (value: string) => boolean;
        };
    }>> & Readonly<{
        onClose?: ((...args: any[]) => any) | undefined;
    }>, {
        info: (options: Omit<import("package/components/notification/src/instance").NotificationOptions, "type">) => number;
        success: (options: Omit<import("package/components/notification/src/instance").NotificationOptions, "type">) => number;
        warning: (options: Omit<import("package/components/notification/src/instance").NotificationOptions, "type">) => number;
        error: (options: Omit<import("package/components/notification/src/instance").NotificationOptions, "type">) => number;
        create: (options: import("package/components/notification/src/instance").NotificationOptions) => number;
        close: (id: number) => void;
        clearAll: () => void;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        close: (...args: any[]) => void;
    }, import("vue").PublicProps, {
        position: import("package/components/notification/src/instance").NotificationPosition;
        maxCount: number;
        duration: number;
        effect: import("package/components/notification/src/instance").NotificationEffect;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        position: {
            type: () => import("package/components/notification/src/instance").NotificationPosition;
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
            type: () => import("package/components/notification/src/instance").NotificationEffect;
            default: string;
            validator: (value: string) => boolean;
        };
    }>> & Readonly<{
        onClose?: ((...args: any[]) => any) | undefined;
    }>, {
        info: (options: Omit<import("package/components/notification/src/instance").NotificationOptions, "type">) => number;
        success: (options: Omit<import("package/components/notification/src/instance").NotificationOptions, "type">) => number;
        warning: (options: Omit<import("package/components/notification/src/instance").NotificationOptions, "type">) => number;
        error: (options: Omit<import("package/components/notification/src/instance").NotificationOptions, "type">) => number;
        create: (options: import("package/components/notification/src/instance").NotificationOptions) => number;
        close: (id: number) => void;
        clearAll: () => void;
    }, {}, {}, {}, {
        position: import("package/components/notification/src/instance").NotificationPosition;
        maxCount: number;
        duration: number;
        effect: import("package/components/notification/src/instance").NotificationEffect;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    position: {
        type: () => import("package/components/notification/src/instance").NotificationPosition;
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
        type: () => import("package/components/notification/src/instance").NotificationEffect;
        default: string;
        validator: (value: string) => boolean;
    };
}>> & Readonly<{
    onClose?: ((...args: any[]) => any) | undefined;
}>, {
    info: (options: Omit<import("package/components/notification/src/instance").NotificationOptions, "type">) => number;
    success: (options: Omit<import("package/components/notification/src/instance").NotificationOptions, "type">) => number;
    warning: (options: Omit<import("package/components/notification/src/instance").NotificationOptions, "type">) => number;
    error: (options: Omit<import("package/components/notification/src/instance").NotificationOptions, "type">) => number;
    create: (options: import("package/components/notification/src/instance").NotificationOptions) => number;
    close: (id: number) => void;
    clearAll: () => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    close: (...args: any[]) => void;
}, string, {
    position: import("package/components/notification/src/instance").NotificationPosition;
    maxCount: number;
    duration: number;
    effect: import("package/components/notification/src/instance").NotificationEffect;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & ((app: import("vue").App, ...options: any[]) => any) & Partial<import("vue").ObjectPlugin<any[]>> & Record<string, any>) | ({
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        content: {
            type: StringConstructor;
            default: string;
        };
        position: {
            type: StringConstructor;
            default: string;
            validator: (value: string) => boolean;
        };
        effect: {
            type: StringConstructor;
            default: string;
            validator: (value: string) => boolean;
        };
        trigger: {
            type: StringConstructor;
            default: string;
            validator: (value: string) => boolean;
        };
        delay: {
            type: NumberConstructor;
            default: number;
        };
        width: {
            type: (StringConstructor | NumberConstructor)[];
            default: string;
        };
        theme: {
            type: StringConstructor;
            default: string;
            validator: (value: string) => boolean;
        };
    }>> & Readonly<{
        onShow?: ((...args: any[]) => any) | undefined;
        onHide?: ((...args: any[]) => any) | undefined;
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        show: (...args: any[]) => void;
        hide: (...args: any[]) => void;
    }, import("vue").PublicProps, {
        content: string;
        position: string;
        effect: string;
        trigger: string;
        delay: number;
        width: string | number;
        theme: string;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        content: {
            type: StringConstructor;
            default: string;
        };
        position: {
            type: StringConstructor;
            default: string;
            validator: (value: string) => boolean;
        };
        effect: {
            type: StringConstructor;
            default: string;
            validator: (value: string) => boolean;
        };
        trigger: {
            type: StringConstructor;
            default: string;
            validator: (value: string) => boolean;
        };
        delay: {
            type: NumberConstructor;
            default: number;
        };
        width: {
            type: (StringConstructor | NumberConstructor)[];
            default: string;
        };
        theme: {
            type: StringConstructor;
            default: string;
            validator: (value: string) => boolean;
        };
    }>> & Readonly<{
        onShow?: ((...args: any[]) => any) | undefined;
        onHide?: ((...args: any[]) => any) | undefined;
    }>, {}, {}, {}, {}, {
        content: string;
        position: string;
        effect: string;
        trigger: string;
        delay: number;
        width: string | number;
        theme: string;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    content: {
        type: StringConstructor;
        default: string;
    };
    position: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
    };
    effect: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
    };
    trigger: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
    };
    delay: {
        type: NumberConstructor;
        default: number;
    };
    width: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    theme: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
    };
}>> & Readonly<{
    onShow?: ((...args: any[]) => any) | undefined;
    onHide?: ((...args: any[]) => any) | undefined;
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    show: (...args: any[]) => void;
    hide: (...args: any[]) => void;
}, string, {
    content: string;
    position: string;
    effect: string;
    trigger: string;
    delay: number;
    width: string | number;
    theme: string;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    } & {
        content?: (props: {}) => any;
    };
}) & import("vue").ObjectPlugin<any[]> & Record<string, any>) | ({
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        content: {
            type: StringConstructor;
            default: string;
        };
        position: {
            type: StringConstructor;
            default: string;
            validator: (value: string) => boolean;
        };
        effect: {
            type: StringConstructor;
            default: string;
            validator: (value: string) => boolean;
        };
        trigger: {
            type: StringConstructor;
            default: string;
            validator: (value: string) => boolean;
        };
        delay: {
            type: NumberConstructor;
            default: number;
        };
        width: {
            type: (StringConstructor | NumberConstructor)[];
            default: string;
        };
        theme: {
            type: StringConstructor;
            default: string;
            validator: (value: string) => boolean;
        };
    }>> & Readonly<{
        onShow?: ((...args: any[]) => any) | undefined;
        onHide?: ((...args: any[]) => any) | undefined;
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        show: (...args: any[]) => void;
        hide: (...args: any[]) => void;
    }, import("vue").PublicProps, {
        content: string;
        position: string;
        effect: string;
        trigger: string;
        delay: number;
        width: string | number;
        theme: string;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        content: {
            type: StringConstructor;
            default: string;
        };
        position: {
            type: StringConstructor;
            default: string;
            validator: (value: string) => boolean;
        };
        effect: {
            type: StringConstructor;
            default: string;
            validator: (value: string) => boolean;
        };
        trigger: {
            type: StringConstructor;
            default: string;
            validator: (value: string) => boolean;
        };
        delay: {
            type: NumberConstructor;
            default: number;
        };
        width: {
            type: (StringConstructor | NumberConstructor)[];
            default: string;
        };
        theme: {
            type: StringConstructor;
            default: string;
            validator: (value: string) => boolean;
        };
    }>> & Readonly<{
        onShow?: ((...args: any[]) => any) | undefined;
        onHide?: ((...args: any[]) => any) | undefined;
    }>, {}, {}, {}, {}, {
        content: string;
        position: string;
        effect: string;
        trigger: string;
        delay: number;
        width: string | number;
        theme: string;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    content: {
        type: StringConstructor;
        default: string;
    };
    position: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
    };
    effect: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
    };
    trigger: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
    };
    delay: {
        type: NumberConstructor;
        default: number;
    };
    width: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    theme: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
    };
}>> & Readonly<{
    onShow?: ((...args: any[]) => any) | undefined;
    onHide?: ((...args: any[]) => any) | undefined;
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    show: (...args: any[]) => void;
    hide: (...args: any[]) => void;
}, string, {
    content: string;
    position: string;
    effect: string;
    trigger: string;
    delay: number;
    width: string | number;
    theme: string;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    } & {
        content?: (props: {}) => any;
    };
}) & ((app: import("vue").App, ...options: any[]) => any) & Partial<import("vue").ObjectPlugin<any[]>> & Record<string, any>) | ({
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<{
        percentage?: number;
        theme?: "neon" | "hologram" | "terminal" | "matrix";
        animated?: boolean;
        showPercentage?: boolean;
        percentagePosition?: "inside" | "outside";
        showStatus?: boolean;
        indeterminate?: boolean;
        direction?: "horizontal" | "vertical";
        color?: string;
        height?: number;
        glowIntensity?: number;
    }> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        theme: "neon" | "hologram" | "terminal" | "matrix";
        height: number;
        percentage: number;
        animated: boolean;
        showPercentage: boolean;
        percentagePosition: "inside" | "outside";
        showStatus: boolean;
        indeterminate: boolean;
        direction: "horizontal" | "vertical";
        glowIntensity: number;
    }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<{
        percentage?: number;
        theme?: "neon" | "hologram" | "terminal" | "matrix";
        animated?: boolean;
        showPercentage?: boolean;
        percentagePosition?: "inside" | "outside";
        showStatus?: boolean;
        indeterminate?: boolean;
        direction?: "horizontal" | "vertical";
        color?: string;
        height?: number;
        glowIntensity?: number;
    }> & Readonly<{}>, {}, {}, {}, {}, {
        theme: "neon" | "hologram" | "terminal" | "matrix";
        height: number;
        percentage: number;
        animated: boolean;
        showPercentage: boolean;
        percentagePosition: "inside" | "outside";
        showStatus: boolean;
        indeterminate: boolean;
        direction: "horizontal" | "vertical";
        glowIntensity: number;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{
    percentage?: number;
    theme?: "neon" | "hologram" | "terminal" | "matrix";
    animated?: boolean;
    showPercentage?: boolean;
    percentagePosition?: "inside" | "outside";
    showStatus?: boolean;
    indeterminate?: boolean;
    direction?: "horizontal" | "vertical";
    color?: string;
    height?: number;
    glowIntensity?: number;
}> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    theme: "neon" | "hologram" | "terminal" | "matrix";
    height: number;
    percentage: number;
    animated: boolean;
    showPercentage: boolean;
    percentagePosition: "inside" | "outside";
    showStatus: boolean;
    indeterminate: boolean;
    direction: "horizontal" | "vertical";
    glowIntensity: number;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("vue").ObjectPlugin<any[]> & Record<string, any>) | ({
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<{
        percentage?: number;
        theme?: "neon" | "hologram" | "terminal" | "matrix";
        animated?: boolean;
        showPercentage?: boolean;
        percentagePosition?: "inside" | "outside";
        showStatus?: boolean;
        indeterminate?: boolean;
        direction?: "horizontal" | "vertical";
        color?: string;
        height?: number;
        glowIntensity?: number;
    }> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        theme: "neon" | "hologram" | "terminal" | "matrix";
        height: number;
        percentage: number;
        animated: boolean;
        showPercentage: boolean;
        percentagePosition: "inside" | "outside";
        showStatus: boolean;
        indeterminate: boolean;
        direction: "horizontal" | "vertical";
        glowIntensity: number;
    }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<{
        percentage?: number;
        theme?: "neon" | "hologram" | "terminal" | "matrix";
        animated?: boolean;
        showPercentage?: boolean;
        percentagePosition?: "inside" | "outside";
        showStatus?: boolean;
        indeterminate?: boolean;
        direction?: "horizontal" | "vertical";
        color?: string;
        height?: number;
        glowIntensity?: number;
    }> & Readonly<{}>, {}, {}, {}, {}, {
        theme: "neon" | "hologram" | "terminal" | "matrix";
        height: number;
        percentage: number;
        animated: boolean;
        showPercentage: boolean;
        percentagePosition: "inside" | "outside";
        showStatus: boolean;
        indeterminate: boolean;
        direction: "horizontal" | "vertical";
        glowIntensity: number;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{
    percentage?: number;
    theme?: "neon" | "hologram" | "terminal" | "matrix";
    animated?: boolean;
    showPercentage?: boolean;
    percentagePosition?: "inside" | "outside";
    showStatus?: boolean;
    indeterminate?: boolean;
    direction?: "horizontal" | "vertical";
    color?: string;
    height?: number;
    glowIntensity?: number;
}> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    theme: "neon" | "hologram" | "terminal" | "matrix";
    height: number;
    percentage: number;
    animated: boolean;
    showPercentage: boolean;
    percentagePosition: "inside" | "outside";
    showStatus: boolean;
    indeterminate: boolean;
    direction: "horizontal" | "vertical";
    glowIntensity: number;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & ((app: import("vue").App, ...options: any[]) => any) & Partial<import("vue").ObjectPlugin<any[]>> & Record<string, any>) | ({
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        value: {
            type: (StringConstructor | NumberConstructor)[];
            default: number;
        };
        from: {
            type: (StringConstructor | NumberConstructor)[];
            default: number;
        };
        to: {
            type: (StringConstructor | NumberConstructor)[];
            default: null;
        };
        duration: {
            type: NumberConstructor;
            default: number;
        };
        format: {
            type: ObjectConstructor;
            default: () => {};
        };
        prefix: {
            type: StringConstructor;
            default: string;
        };
        suffix: {
            type: StringConstructor;
            default: string;
        };
        separator: {
            type: StringConstructor;
            default: string;
        };
        decimal: {
            type: NumberConstructor;
            default: number;
        };
        effect: {
            type: StringConstructor;
            default: string;
            validator: (value: string) => boolean;
        };
        theme: {
            type: StringConstructor;
            default: string;
            validator: (value: string) => boolean;
        };
        error: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        duration: number;
        effect: string;
        error: boolean;
        to: string | number;
        theme: string;
        value: string | number;
        from: string | number;
        format: Record<string, any>;
        prefix: string;
        suffix: string;
        separator: string;
        decimal: number;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        value: {
            type: (StringConstructor | NumberConstructor)[];
            default: number;
        };
        from: {
            type: (StringConstructor | NumberConstructor)[];
            default: number;
        };
        to: {
            type: (StringConstructor | NumberConstructor)[];
            default: null;
        };
        duration: {
            type: NumberConstructor;
            default: number;
        };
        format: {
            type: ObjectConstructor;
            default: () => {};
        };
        prefix: {
            type: StringConstructor;
            default: string;
        };
        suffix: {
            type: StringConstructor;
            default: string;
        };
        separator: {
            type: StringConstructor;
            default: string;
        };
        decimal: {
            type: NumberConstructor;
            default: number;
        };
        effect: {
            type: StringConstructor;
            default: string;
            validator: (value: string) => boolean;
        };
        theme: {
            type: StringConstructor;
            default: string;
            validator: (value: string) => boolean;
        };
        error: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, {
        duration: number;
        effect: string;
        error: boolean;
        to: string | number;
        theme: string;
        value: string | number;
        from: string | number;
        format: Record<string, any>;
        prefix: string;
        suffix: string;
        separator: string;
        decimal: number;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    value: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    from: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    to: {
        type: (StringConstructor | NumberConstructor)[];
        default: null;
    };
    duration: {
        type: NumberConstructor;
        default: number;
    };
    format: {
        type: ObjectConstructor;
        default: () => {};
    };
    prefix: {
        type: StringConstructor;
        default: string;
    };
    suffix: {
        type: StringConstructor;
        default: string;
    };
    separator: {
        type: StringConstructor;
        default: string;
    };
    decimal: {
        type: NumberConstructor;
        default: number;
    };
    effect: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
    };
    theme: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
    };
    error: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    duration: number;
    effect: string;
    error: boolean;
    to: string | number;
    theme: string;
    value: string | number;
    from: string | number;
    format: Record<string, any>;
    prefix: string;
    suffix: string;
    separator: string;
    decimal: number;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("vue").ObjectPlugin<any[]> & Record<string, any>) | ({
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        value: {
            type: (StringConstructor | NumberConstructor)[];
            default: number;
        };
        from: {
            type: (StringConstructor | NumberConstructor)[];
            default: number;
        };
        to: {
            type: (StringConstructor | NumberConstructor)[];
            default: null;
        };
        duration: {
            type: NumberConstructor;
            default: number;
        };
        format: {
            type: ObjectConstructor;
            default: () => {};
        };
        prefix: {
            type: StringConstructor;
            default: string;
        };
        suffix: {
            type: StringConstructor;
            default: string;
        };
        separator: {
            type: StringConstructor;
            default: string;
        };
        decimal: {
            type: NumberConstructor;
            default: number;
        };
        effect: {
            type: StringConstructor;
            default: string;
            validator: (value: string) => boolean;
        };
        theme: {
            type: StringConstructor;
            default: string;
            validator: (value: string) => boolean;
        };
        error: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        duration: number;
        effect: string;
        error: boolean;
        to: string | number;
        theme: string;
        value: string | number;
        from: string | number;
        format: Record<string, any>;
        prefix: string;
        suffix: string;
        separator: string;
        decimal: number;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        value: {
            type: (StringConstructor | NumberConstructor)[];
            default: number;
        };
        from: {
            type: (StringConstructor | NumberConstructor)[];
            default: number;
        };
        to: {
            type: (StringConstructor | NumberConstructor)[];
            default: null;
        };
        duration: {
            type: NumberConstructor;
            default: number;
        };
        format: {
            type: ObjectConstructor;
            default: () => {};
        };
        prefix: {
            type: StringConstructor;
            default: string;
        };
        suffix: {
            type: StringConstructor;
            default: string;
        };
        separator: {
            type: StringConstructor;
            default: string;
        };
        decimal: {
            type: NumberConstructor;
            default: number;
        };
        effect: {
            type: StringConstructor;
            default: string;
            validator: (value: string) => boolean;
        };
        theme: {
            type: StringConstructor;
            default: string;
            validator: (value: string) => boolean;
        };
        error: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, {
        duration: number;
        effect: string;
        error: boolean;
        to: string | number;
        theme: string;
        value: string | number;
        from: string | number;
        format: Record<string, any>;
        prefix: string;
        suffix: string;
        separator: string;
        decimal: number;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    value: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    from: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    to: {
        type: (StringConstructor | NumberConstructor)[];
        default: null;
    };
    duration: {
        type: NumberConstructor;
        default: number;
    };
    format: {
        type: ObjectConstructor;
        default: () => {};
    };
    prefix: {
        type: StringConstructor;
        default: string;
    };
    suffix: {
        type: StringConstructor;
        default: string;
    };
    separator: {
        type: StringConstructor;
        default: string;
    };
    decimal: {
        type: NumberConstructor;
        default: number;
    };
    effect: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
    };
    theme: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
    };
    error: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    duration: number;
    effect: string;
    error: boolean;
    to: string | number;
    theme: string;
    value: string | number;
    from: string | number;
    format: Record<string, any>;
    prefix: string;
    suffix: string;
    separator: string;
    decimal: number;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & ((app: import("vue").App, ...options: any[]) => any) & Partial<import("vue").ObjectPlugin<any[]>> & Record<string, any>) | ({
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        items: {
            type: () => Array<import("package/components").FullPageItem>;
            default: {
                title: string;
            }[];
        };
        position: {
            type: StringConstructor;
            default: string;
        };
        showTitle: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{
        onChange?: ((...args: any[]) => any) | undefined;
        onToNext?: ((...args: any[]) => any) | undefined;
        onToLast?: ((...args: any[]) => any) | undefined;
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        change: (...args: any[]) => void;
        toNext: (...args: any[]) => void;
        toLast: (...args: any[]) => void;
    }, import("vue").PublicProps, {
        position: string;
        items: import("package/components").FullPageItem[];
        showTitle: boolean;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        items: {
            type: () => Array<import("package/components").FullPageItem>;
            default: {
                title: string;
            }[];
        };
        position: {
            type: StringConstructor;
            default: string;
        };
        showTitle: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{
        onChange?: ((...args: any[]) => any) | undefined;
        onToNext?: ((...args: any[]) => any) | undefined;
        onToLast?: ((...args: any[]) => any) | undefined;
    }>, {}, {}, {}, {}, {
        position: string;
        items: import("package/components").FullPageItem[];
        showTitle: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    items: {
        type: () => Array<import("package/components").FullPageItem>;
        default: {
            title: string;
        }[];
    };
    position: {
        type: StringConstructor;
        default: string;
    };
    showTitle: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{
    onChange?: ((...args: any[]) => any) | undefined;
    onToNext?: ((...args: any[]) => any) | undefined;
    onToLast?: ((...args: any[]) => any) | undefined;
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    change: (...args: any[]) => void;
    toNext: (...args: any[]) => void;
    toLast: (...args: any[]) => void;
}, string, {
    position: string;
    items: import("package/components").FullPageItem[];
    showTitle: boolean;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
}) & import("vue").ObjectPlugin<any[]> & Record<string, any>) | ({
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        items: {
            type: () => Array<import("package/components").FullPageItem>;
            default: {
                title: string;
            }[];
        };
        position: {
            type: StringConstructor;
            default: string;
        };
        showTitle: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{
        onChange?: ((...args: any[]) => any) | undefined;
        onToNext?: ((...args: any[]) => any) | undefined;
        onToLast?: ((...args: any[]) => any) | undefined;
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        change: (...args: any[]) => void;
        toNext: (...args: any[]) => void;
        toLast: (...args: any[]) => void;
    }, import("vue").PublicProps, {
        position: string;
        items: import("package/components").FullPageItem[];
        showTitle: boolean;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        items: {
            type: () => Array<import("package/components").FullPageItem>;
            default: {
                title: string;
            }[];
        };
        position: {
            type: StringConstructor;
            default: string;
        };
        showTitle: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{
        onChange?: ((...args: any[]) => any) | undefined;
        onToNext?: ((...args: any[]) => any) | undefined;
        onToLast?: ((...args: any[]) => any) | undefined;
    }>, {}, {}, {}, {}, {
        position: string;
        items: import("package/components").FullPageItem[];
        showTitle: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    items: {
        type: () => Array<import("package/components").FullPageItem>;
        default: {
            title: string;
        }[];
    };
    position: {
        type: StringConstructor;
        default: string;
    };
    showTitle: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{
    onChange?: ((...args: any[]) => any) | undefined;
    onToNext?: ((...args: any[]) => any) | undefined;
    onToLast?: ((...args: any[]) => any) | undefined;
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    change: (...args: any[]) => void;
    toNext: (...args: any[]) => void;
    toLast: (...args: any[]) => void;
}, string, {
    position: string;
    items: import("package/components").FullPageItem[];
    showTitle: boolean;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
}) & ((app: import("vue").App, ...options: any[]) => any) & Partial<import("vue").ObjectPlugin<any[]>> & Record<string, any>) | ({
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        src: {
            type: StringConstructor;
            required: true;
        };
        alt: {
            type: StringConstructor;
            default: string;
        };
        glitchType: {
            type: StringConstructor;
            default: string;
            validator: (value: string) => boolean;
        };
        intensity: {
            type: NumberConstructor;
            default: number;
            validator: (value: number) => boolean;
        };
        animated: {
            type: BooleanConstructor;
            default: boolean;
        };
        triggerMode: {
            type: StringConstructor;
            default: string;
            validator: (value: string) => boolean;
        };
        interval: {
            type: NumberConstructor;
            default: number;
        };
    }>> & Readonly<{
        "onGlitch-start"?: ((...args: any[]) => any) | undefined;
        "onGlitch-end"?: ((...args: any[]) => any) | undefined;
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        "glitch-start": (...args: any[]) => void;
        "glitch-end": (...args: any[]) => void;
    }, import("vue").PublicProps, {
        animated: boolean;
        alt: string;
        glitchType: string;
        intensity: number;
        triggerMode: string;
        interval: number;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        src: {
            type: StringConstructor;
            required: true;
        };
        alt: {
            type: StringConstructor;
            default: string;
        };
        glitchType: {
            type: StringConstructor;
            default: string;
            validator: (value: string) => boolean;
        };
        intensity: {
            type: NumberConstructor;
            default: number;
            validator: (value: number) => boolean;
        };
        animated: {
            type: BooleanConstructor;
            default: boolean;
        };
        triggerMode: {
            type: StringConstructor;
            default: string;
            validator: (value: string) => boolean;
        };
        interval: {
            type: NumberConstructor;
            default: number;
        };
    }>> & Readonly<{
        "onGlitch-start"?: ((...args: any[]) => any) | undefined;
        "onGlitch-end"?: ((...args: any[]) => any) | undefined;
    }>, {}, {}, {}, {}, {
        animated: boolean;
        alt: string;
        glitchType: string;
        intensity: number;
        triggerMode: string;
        interval: number;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    src: {
        type: StringConstructor;
        required: true;
    };
    alt: {
        type: StringConstructor;
        default: string;
    };
    glitchType: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
    };
    intensity: {
        type: NumberConstructor;
        default: number;
        validator: (value: number) => boolean;
    };
    animated: {
        type: BooleanConstructor;
        default: boolean;
    };
    triggerMode: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
    };
    interval: {
        type: NumberConstructor;
        default: number;
    };
}>> & Readonly<{
    "onGlitch-start"?: ((...args: any[]) => any) | undefined;
    "onGlitch-end"?: ((...args: any[]) => any) | undefined;
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "glitch-start": (...args: any[]) => void;
    "glitch-end": (...args: any[]) => void;
}, string, {
    animated: boolean;
    alt: string;
    glitchType: string;
    intensity: number;
    triggerMode: string;
    interval: number;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("vue").ObjectPlugin<any[]> & Record<string, any>) | ({
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        src: {
            type: StringConstructor;
            required: true;
        };
        alt: {
            type: StringConstructor;
            default: string;
        };
        glitchType: {
            type: StringConstructor;
            default: string;
            validator: (value: string) => boolean;
        };
        intensity: {
            type: NumberConstructor;
            default: number;
            validator: (value: number) => boolean;
        };
        animated: {
            type: BooleanConstructor;
            default: boolean;
        };
        triggerMode: {
            type: StringConstructor;
            default: string;
            validator: (value: string) => boolean;
        };
        interval: {
            type: NumberConstructor;
            default: number;
        };
    }>> & Readonly<{
        "onGlitch-start"?: ((...args: any[]) => any) | undefined;
        "onGlitch-end"?: ((...args: any[]) => any) | undefined;
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        "glitch-start": (...args: any[]) => void;
        "glitch-end": (...args: any[]) => void;
    }, import("vue").PublicProps, {
        animated: boolean;
        alt: string;
        glitchType: string;
        intensity: number;
        triggerMode: string;
        interval: number;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        src: {
            type: StringConstructor;
            required: true;
        };
        alt: {
            type: StringConstructor;
            default: string;
        };
        glitchType: {
            type: StringConstructor;
            default: string;
            validator: (value: string) => boolean;
        };
        intensity: {
            type: NumberConstructor;
            default: number;
            validator: (value: number) => boolean;
        };
        animated: {
            type: BooleanConstructor;
            default: boolean;
        };
        triggerMode: {
            type: StringConstructor;
            default: string;
            validator: (value: string) => boolean;
        };
        interval: {
            type: NumberConstructor;
            default: number;
        };
    }>> & Readonly<{
        "onGlitch-start"?: ((...args: any[]) => any) | undefined;
        "onGlitch-end"?: ((...args: any[]) => any) | undefined;
    }>, {}, {}, {}, {}, {
        animated: boolean;
        alt: string;
        glitchType: string;
        intensity: number;
        triggerMode: string;
        interval: number;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    src: {
        type: StringConstructor;
        required: true;
    };
    alt: {
        type: StringConstructor;
        default: string;
    };
    glitchType: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
    };
    intensity: {
        type: NumberConstructor;
        default: number;
        validator: (value: number) => boolean;
    };
    animated: {
        type: BooleanConstructor;
        default: boolean;
    };
    triggerMode: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
    };
    interval: {
        type: NumberConstructor;
        default: number;
    };
}>> & Readonly<{
    "onGlitch-start"?: ((...args: any[]) => any) | undefined;
    "onGlitch-end"?: ((...args: any[]) => any) | undefined;
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "glitch-start": (...args: any[]) => void;
    "glitch-end": (...args: any[]) => void;
}, string, {
    animated: boolean;
    alt: string;
    glitchType: string;
    intensity: number;
    triggerMode: string;
    interval: number;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & ((app: import("vue").App, ...options: any[]) => any) & Partial<import("vue").ObjectPlugin<any[]>> & Record<string, any>) | ({
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        progress: {
            type: NumberConstructor;
            default: number;
            validator: (value: number) => boolean;
        };
        direction: {
            type: StringConstructor;
            default: string;
            validator: (value: string) => boolean;
        };
        glitchIntensity: {
            type: NumberConstructor;
            default: number;
            validator: (value: number) => boolean;
        };
        indeterminate: {
            type: BooleanConstructor;
            default: boolean;
        };
        color: {
            type: StringConstructor;
            default: string;
        };
        showText: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        progress: number;
        indeterminate: boolean;
        direction: string;
        color: string;
        glitchIntensity: number;
        showText: boolean;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        progress: {
            type: NumberConstructor;
            default: number;
            validator: (value: number) => boolean;
        };
        direction: {
            type: StringConstructor;
            default: string;
            validator: (value: string) => boolean;
        };
        glitchIntensity: {
            type: NumberConstructor;
            default: number;
            validator: (value: number) => boolean;
        };
        indeterminate: {
            type: BooleanConstructor;
            default: boolean;
        };
        color: {
            type: StringConstructor;
            default: string;
        };
        showText: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, {
        progress: number;
        indeterminate: boolean;
        direction: string;
        color: string;
        glitchIntensity: number;
        showText: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    progress: {
        type: NumberConstructor;
        default: number;
        validator: (value: number) => boolean;
    };
    direction: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
    };
    glitchIntensity: {
        type: NumberConstructor;
        default: number;
        validator: (value: number) => boolean;
    };
    indeterminate: {
        type: BooleanConstructor;
        default: boolean;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
    showText: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    progress: number;
    indeterminate: boolean;
    direction: string;
    color: string;
    glitchIntensity: number;
    showText: boolean;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("vue").ObjectPlugin<any[]> & Record<string, any>) | ({
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        progress: {
            type: NumberConstructor;
            default: number;
            validator: (value: number) => boolean;
        };
        direction: {
            type: StringConstructor;
            default: string;
            validator: (value: string) => boolean;
        };
        glitchIntensity: {
            type: NumberConstructor;
            default: number;
            validator: (value: number) => boolean;
        };
        indeterminate: {
            type: BooleanConstructor;
            default: boolean;
        };
        color: {
            type: StringConstructor;
            default: string;
        };
        showText: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        progress: number;
        indeterminate: boolean;
        direction: string;
        color: string;
        glitchIntensity: number;
        showText: boolean;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        progress: {
            type: NumberConstructor;
            default: number;
            validator: (value: number) => boolean;
        };
        direction: {
            type: StringConstructor;
            default: string;
            validator: (value: string) => boolean;
        };
        glitchIntensity: {
            type: NumberConstructor;
            default: number;
            validator: (value: number) => boolean;
        };
        indeterminate: {
            type: BooleanConstructor;
            default: boolean;
        };
        color: {
            type: StringConstructor;
            default: string;
        };
        showText: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, {
        progress: number;
        indeterminate: boolean;
        direction: string;
        color: string;
        glitchIntensity: number;
        showText: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    progress: {
        type: NumberConstructor;
        default: number;
        validator: (value: number) => boolean;
    };
    direction: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
    };
    glitchIntensity: {
        type: NumberConstructor;
        default: number;
        validator: (value: number) => boolean;
    };
    indeterminate: {
        type: BooleanConstructor;
        default: boolean;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
    showText: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    progress: number;
    indeterminate: boolean;
    direction: string;
    color: string;
    glitchIntensity: number;
    showText: boolean;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & ((app: import("vue").App, ...options: any[]) => any) & Partial<import("vue").ObjectPlugin<any[]>> & Record<string, any>) | ({
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<{
        color?: string;
        glowing?: boolean;
        effect?: import("package/components/glowText/src/instance").GlowEffect;
        animationSpeed?: import("package/components/glowText/src/instance").AnimationSpeed;
        tag?: string;
        disabled?: boolean;
    }> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        effect: import("package/components/glowText/src/instance").GlowEffect;
        disabled: boolean;
        tag: string;
        color: string;
        glowing: boolean;
        animationSpeed: import("package/components/glowText/src/instance").AnimationSpeed;
    }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<{
        color?: string;
        glowing?: boolean;
        effect?: import("package/components/glowText/src/instance").GlowEffect;
        animationSpeed?: import("package/components/glowText/src/instance").AnimationSpeed;
        tag?: string;
        disabled?: boolean;
    }> & Readonly<{}>, {}, {}, {}, {}, {
        effect: import("package/components/glowText/src/instance").GlowEffect;
        disabled: boolean;
        tag: string;
        color: string;
        glowing: boolean;
        animationSpeed: import("package/components/glowText/src/instance").AnimationSpeed;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{
    color?: string;
    glowing?: boolean;
    effect?: import("package/components/glowText/src/instance").GlowEffect;
    animationSpeed?: import("package/components/glowText/src/instance").AnimationSpeed;
    tag?: string;
    disabled?: boolean;
}> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    effect: import("package/components/glowText/src/instance").GlowEffect;
    disabled: boolean;
    tag: string;
    color: string;
    glowing: boolean;
    animationSpeed: import("package/components/glowText/src/instance").AnimationSpeed;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
}) & import("vue").ObjectPlugin<any[]> & Record<string, any>) | ({
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<{
        color?: string;
        glowing?: boolean;
        effect?: import("package/components/glowText/src/instance").GlowEffect;
        animationSpeed?: import("package/components/glowText/src/instance").AnimationSpeed;
        tag?: string;
        disabled?: boolean;
    }> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        effect: import("package/components/glowText/src/instance").GlowEffect;
        disabled: boolean;
        tag: string;
        color: string;
        glowing: boolean;
        animationSpeed: import("package/components/glowText/src/instance").AnimationSpeed;
    }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<{
        color?: string;
        glowing?: boolean;
        effect?: import("package/components/glowText/src/instance").GlowEffect;
        animationSpeed?: import("package/components/glowText/src/instance").AnimationSpeed;
        tag?: string;
        disabled?: boolean;
    }> & Readonly<{}>, {}, {}, {}, {}, {
        effect: import("package/components/glowText/src/instance").GlowEffect;
        disabled: boolean;
        tag: string;
        color: string;
        glowing: boolean;
        animationSpeed: import("package/components/glowText/src/instance").AnimationSpeed;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{
    color?: string;
    glowing?: boolean;
    effect?: import("package/components/glowText/src/instance").GlowEffect;
    animationSpeed?: import("package/components/glowText/src/instance").AnimationSpeed;
    tag?: string;
    disabled?: boolean;
}> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    effect: import("package/components/glowText/src/instance").GlowEffect;
    disabled: boolean;
    tag: string;
    color: string;
    glowing: boolean;
    animationSpeed: import("package/components/glowText/src/instance").AnimationSpeed;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
}) & ((app: import("vue").App, ...options: any[]) => any) & Partial<import("vue").ObjectPlugin<any[]>> & Record<string, any>) | ({
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        type: {
            type: StringConstructor;
            default: string;
            validator: (value: string) => boolean;
        };
        glowIntensity: {
            type: NumberConstructor;
            default: number;
            validator: (value: number) => boolean;
        };
        hologramColor: {
            type: StringConstructor;
            default: string;
        };
        depth: {
            type: NumberConstructor;
            default: number;
            validator: (value: number) => boolean;
        };
        title: {
            type: StringConstructor;
            default: string;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        rounded: {
            type: BooleanConstructor;
            default: boolean;
        };
        theme: {
            type: StringConstructor;
            default: string;
            validator: (value: string) => boolean;
        };
        effect: {
            type: StringConstructor;
            default: string;
            validator: (value: string) => boolean;
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        type: string;
        title: string;
        effect: string;
        disabled: boolean;
        theme: string;
        glowIntensity: number;
        hologramColor: string;
        depth: number;
        rounded: boolean;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        type: {
            type: StringConstructor;
            default: string;
            validator: (value: string) => boolean;
        };
        glowIntensity: {
            type: NumberConstructor;
            default: number;
            validator: (value: number) => boolean;
        };
        hologramColor: {
            type: StringConstructor;
            default: string;
        };
        depth: {
            type: NumberConstructor;
            default: number;
            validator: (value: number) => boolean;
        };
        title: {
            type: StringConstructor;
            default: string;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        rounded: {
            type: BooleanConstructor;
            default: boolean;
        };
        theme: {
            type: StringConstructor;
            default: string;
            validator: (value: string) => boolean;
        };
        effect: {
            type: StringConstructor;
            default: string;
            validator: (value: string) => boolean;
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, {
        type: string;
        title: string;
        effect: string;
        disabled: boolean;
        theme: string;
        glowIntensity: number;
        hologramColor: string;
        depth: number;
        rounded: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
    };
    glowIntensity: {
        type: NumberConstructor;
        default: number;
        validator: (value: number) => boolean;
    };
    hologramColor: {
        type: StringConstructor;
        default: string;
    };
    depth: {
        type: NumberConstructor;
        default: number;
        validator: (value: number) => boolean;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    rounded: {
        type: BooleanConstructor;
        default: boolean;
    };
    theme: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
    };
    effect: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
    };
}>> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    type: string;
    title: string;
    effect: string;
    disabled: boolean;
    theme: string;
    glowIntensity: number;
    hologramColor: string;
    depth: number;
    rounded: boolean;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        title?: (props: {}) => any;
    } & {
        default?: (props: {}) => any;
    } & {
        footer?: (props: {}) => any;
    };
}) & import("vue").ObjectPlugin<any[]> & Record<string, any>) | ({
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        type: {
            type: StringConstructor;
            default: string;
            validator: (value: string) => boolean;
        };
        glowIntensity: {
            type: NumberConstructor;
            default: number;
            validator: (value: number) => boolean;
        };
        hologramColor: {
            type: StringConstructor;
            default: string;
        };
        depth: {
            type: NumberConstructor;
            default: number;
            validator: (value: number) => boolean;
        };
        title: {
            type: StringConstructor;
            default: string;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        rounded: {
            type: BooleanConstructor;
            default: boolean;
        };
        theme: {
            type: StringConstructor;
            default: string;
            validator: (value: string) => boolean;
        };
        effect: {
            type: StringConstructor;
            default: string;
            validator: (value: string) => boolean;
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        type: string;
        title: string;
        effect: string;
        disabled: boolean;
        theme: string;
        glowIntensity: number;
        hologramColor: string;
        depth: number;
        rounded: boolean;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        type: {
            type: StringConstructor;
            default: string;
            validator: (value: string) => boolean;
        };
        glowIntensity: {
            type: NumberConstructor;
            default: number;
            validator: (value: number) => boolean;
        };
        hologramColor: {
            type: StringConstructor;
            default: string;
        };
        depth: {
            type: NumberConstructor;
            default: number;
            validator: (value: number) => boolean;
        };
        title: {
            type: StringConstructor;
            default: string;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        rounded: {
            type: BooleanConstructor;
            default: boolean;
        };
        theme: {
            type: StringConstructor;
            default: string;
            validator: (value: string) => boolean;
        };
        effect: {
            type: StringConstructor;
            default: string;
            validator: (value: string) => boolean;
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, {
        type: string;
        title: string;
        effect: string;
        disabled: boolean;
        theme: string;
        glowIntensity: number;
        hologramColor: string;
        depth: number;
        rounded: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
    };
    glowIntensity: {
        type: NumberConstructor;
        default: number;
        validator: (value: number) => boolean;
    };
    hologramColor: {
        type: StringConstructor;
        default: string;
    };
    depth: {
        type: NumberConstructor;
        default: number;
        validator: (value: number) => boolean;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    rounded: {
        type: BooleanConstructor;
        default: boolean;
    };
    theme: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
    };
    effect: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
    };
}>> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    type: string;
    title: string;
    effect: string;
    disabled: boolean;
    theme: string;
    glowIntensity: number;
    hologramColor: string;
    depth: number;
    rounded: boolean;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        title?: (props: {}) => any;
    } & {
        default?: (props: {}) => any;
    } & {
        footer?: (props: {}) => any;
    };
}) & ((app: import("vue").App, ...options: any[]) => any) & Partial<import("vue").ObjectPlugin<any[]>> & Record<string, any>) | ({
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        type: {
            type: StringConstructor;
            default: string;
            validator: (value: string) => boolean;
        };
        size: {
            type: StringConstructor;
            default: string;
            validator: (value: string) => boolean;
        };
        text: {
            type: StringConstructor;
            default: string;
        };
        speed: {
            type: NumberConstructor;
            default: number;
            validator: (value: number) => boolean;
        };
        transparent: {
            type: BooleanConstructor;
            default: boolean;
        };
        color: {
            type: StringConstructor;
            default: string;
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        type: string;
        size: string;
        text: string;
        color: string;
        transparent: boolean;
        speed: number;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        type: {
            type: StringConstructor;
            default: string;
            validator: (value: string) => boolean;
        };
        size: {
            type: StringConstructor;
            default: string;
            validator: (value: string) => boolean;
        };
        text: {
            type: StringConstructor;
            default: string;
        };
        speed: {
            type: NumberConstructor;
            default: number;
            validator: (value: number) => boolean;
        };
        transparent: {
            type: BooleanConstructor;
            default: boolean;
        };
        color: {
            type: StringConstructor;
            default: string;
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, {
        type: string;
        size: string;
        text: string;
        color: string;
        transparent: boolean;
        speed: number;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
    };
    size: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
    };
    text: {
        type: StringConstructor;
        default: string;
    };
    speed: {
        type: NumberConstructor;
        default: number;
        validator: (value: number) => boolean;
    };
    transparent: {
        type: BooleanConstructor;
        default: boolean;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
}>> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    type: string;
    size: string;
    text: string;
    color: string;
    transparent: boolean;
    speed: number;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("vue").ObjectPlugin<any[]> & Record<string, any>) | ({
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        type: {
            type: StringConstructor;
            default: string;
            validator: (value: string) => boolean;
        };
        size: {
            type: StringConstructor;
            default: string;
            validator: (value: string) => boolean;
        };
        text: {
            type: StringConstructor;
            default: string;
        };
        speed: {
            type: NumberConstructor;
            default: number;
            validator: (value: number) => boolean;
        };
        transparent: {
            type: BooleanConstructor;
            default: boolean;
        };
        color: {
            type: StringConstructor;
            default: string;
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        type: string;
        size: string;
        text: string;
        color: string;
        transparent: boolean;
        speed: number;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        type: {
            type: StringConstructor;
            default: string;
            validator: (value: string) => boolean;
        };
        size: {
            type: StringConstructor;
            default: string;
            validator: (value: string) => boolean;
        };
        text: {
            type: StringConstructor;
            default: string;
        };
        speed: {
            type: NumberConstructor;
            default: number;
            validator: (value: number) => boolean;
        };
        transparent: {
            type: BooleanConstructor;
            default: boolean;
        };
        color: {
            type: StringConstructor;
            default: string;
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, {
        type: string;
        size: string;
        text: string;
        color: string;
        transparent: boolean;
        speed: number;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
    };
    size: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
    };
    text: {
        type: StringConstructor;
        default: string;
    };
    speed: {
        type: NumberConstructor;
        default: number;
        validator: (value: number) => boolean;
    };
    transparent: {
        type: BooleanConstructor;
        default: boolean;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
}>> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    type: string;
    size: string;
    text: string;
    color: string;
    transparent: boolean;
    speed: number;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & ((app: import("vue").App, ...options: any[]) => any) & Partial<import("vue").ObjectPlugin<any[]>> & Record<string, any>) | ({
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<{
        data?: import("package/components/infiniteTable/src/instance").TableRow[];
        columns?: import("package/components/infiniteTable/src/instance").TableColumn[];
        theme?: "neon" | "hologram" | "terminal" | "matrix";
        rowHeight?: number;
        bufferSize?: number;
        scrollType?: "single" | "page";
        showScanline?: boolean;
        loadMore?: () => Promise<void>;
        remoteMethod?: (params: {
            page: number;
            size: number;
        }) => Promise<{
            data: import("package/components/infiniteTable/src/instance").TableRow[];
            total: number;
            hasMore: boolean;
        }>;
        autoScroll?: boolean;
        rowNum?: number;
        waitTime?: number;
        hoverPause?: boolean;
    }> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        data: import("package/components/infiniteTable/src/instance").TableRow[];
        theme: "neon" | "hologram" | "terminal" | "matrix";
        columns: import("package/components/infiniteTable/src/instance").TableColumn[];
        rowHeight: number;
        bufferSize: number;
        scrollType: "single" | "page";
        showScanline: boolean;
        autoScroll: boolean;
        rowNum: number;
        waitTime: number;
        hoverPause: boolean;
    }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<{
        data?: import("package/components/infiniteTable/src/instance").TableRow[];
        columns?: import("package/components/infiniteTable/src/instance").TableColumn[];
        theme?: "neon" | "hologram" | "terminal" | "matrix";
        rowHeight?: number;
        bufferSize?: number;
        scrollType?: "single" | "page";
        showScanline?: boolean;
        loadMore?: () => Promise<void>;
        remoteMethod?: (params: {
            page: number;
            size: number;
        }) => Promise<{
            data: import("package/components/infiniteTable/src/instance").TableRow[];
            total: number;
            hasMore: boolean;
        }>;
        autoScroll?: boolean;
        rowNum?: number;
        waitTime?: number;
        hoverPause?: boolean;
    }> & Readonly<{}>, {}, {}, {}, {}, {
        data: import("package/components/infiniteTable/src/instance").TableRow[];
        theme: "neon" | "hologram" | "terminal" | "matrix";
        columns: import("package/components/infiniteTable/src/instance").TableColumn[];
        rowHeight: number;
        bufferSize: number;
        scrollType: "single" | "page";
        showScanline: boolean;
        autoScroll: boolean;
        rowNum: number;
        waitTime: number;
        hoverPause: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{
    data?: import("package/components/infiniteTable/src/instance").TableRow[];
    columns?: import("package/components/infiniteTable/src/instance").TableColumn[];
    theme?: "neon" | "hologram" | "terminal" | "matrix";
    rowHeight?: number;
    bufferSize?: number;
    scrollType?: "single" | "page";
    showScanline?: boolean;
    loadMore?: () => Promise<void>;
    remoteMethod?: (params: {
        page: number;
        size: number;
    }) => Promise<{
        data: import("package/components/infiniteTable/src/instance").TableRow[];
        total: number;
        hasMore: boolean;
    }>;
    autoScroll?: boolean;
    rowNum?: number;
    waitTime?: number;
    hoverPause?: boolean;
}> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    data: import("package/components/infiniteTable/src/instance").TableRow[];
    theme: "neon" | "hologram" | "terminal" | "matrix";
    columns: import("package/components/infiniteTable/src/instance").TableColumn[];
    rowHeight: number;
    bufferSize: number;
    scrollType: "single" | "page";
    showScanline: boolean;
    autoScroll: boolean;
    rowNum: number;
    waitTime: number;
    hoverPause: boolean;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        [x: string]: ((props: {
            row: any;
            column: import("package/components/infiniteTable/src/instance").TableColumn;
        }) => any) | undefined;
    };
}) & import("vue").ObjectPlugin<any[]> & Record<string, any>) | ({
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<{
        data?: import("package/components/infiniteTable/src/instance").TableRow[];
        columns?: import("package/components/infiniteTable/src/instance").TableColumn[];
        theme?: "neon" | "hologram" | "terminal" | "matrix";
        rowHeight?: number;
        bufferSize?: number;
        scrollType?: "single" | "page";
        showScanline?: boolean;
        loadMore?: () => Promise<void>;
        remoteMethod?: (params: {
            page: number;
            size: number;
        }) => Promise<{
            data: import("package/components/infiniteTable/src/instance").TableRow[];
            total: number;
            hasMore: boolean;
        }>;
        autoScroll?: boolean;
        rowNum?: number;
        waitTime?: number;
        hoverPause?: boolean;
    }> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        data: import("package/components/infiniteTable/src/instance").TableRow[];
        theme: "neon" | "hologram" | "terminal" | "matrix";
        columns: import("package/components/infiniteTable/src/instance").TableColumn[];
        rowHeight: number;
        bufferSize: number;
        scrollType: "single" | "page";
        showScanline: boolean;
        autoScroll: boolean;
        rowNum: number;
        waitTime: number;
        hoverPause: boolean;
    }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<{
        data?: import("package/components/infiniteTable/src/instance").TableRow[];
        columns?: import("package/components/infiniteTable/src/instance").TableColumn[];
        theme?: "neon" | "hologram" | "terminal" | "matrix";
        rowHeight?: number;
        bufferSize?: number;
        scrollType?: "single" | "page";
        showScanline?: boolean;
        loadMore?: () => Promise<void>;
        remoteMethod?: (params: {
            page: number;
            size: number;
        }) => Promise<{
            data: import("package/components/infiniteTable/src/instance").TableRow[];
            total: number;
            hasMore: boolean;
        }>;
        autoScroll?: boolean;
        rowNum?: number;
        waitTime?: number;
        hoverPause?: boolean;
    }> & Readonly<{}>, {}, {}, {}, {}, {
        data: import("package/components/infiniteTable/src/instance").TableRow[];
        theme: "neon" | "hologram" | "terminal" | "matrix";
        columns: import("package/components/infiniteTable/src/instance").TableColumn[];
        rowHeight: number;
        bufferSize: number;
        scrollType: "single" | "page";
        showScanline: boolean;
        autoScroll: boolean;
        rowNum: number;
        waitTime: number;
        hoverPause: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{
    data?: import("package/components/infiniteTable/src/instance").TableRow[];
    columns?: import("package/components/infiniteTable/src/instance").TableColumn[];
    theme?: "neon" | "hologram" | "terminal" | "matrix";
    rowHeight?: number;
    bufferSize?: number;
    scrollType?: "single" | "page";
    showScanline?: boolean;
    loadMore?: () => Promise<void>;
    remoteMethod?: (params: {
        page: number;
        size: number;
    }) => Promise<{
        data: import("package/components/infiniteTable/src/instance").TableRow[];
        total: number;
        hasMore: boolean;
    }>;
    autoScroll?: boolean;
    rowNum?: number;
    waitTime?: number;
    hoverPause?: boolean;
}> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    data: import("package/components/infiniteTable/src/instance").TableRow[];
    theme: "neon" | "hologram" | "terminal" | "matrix";
    columns: import("package/components/infiniteTable/src/instance").TableColumn[];
    rowHeight: number;
    bufferSize: number;
    scrollType: "single" | "page";
    showScanline: boolean;
    autoScroll: boolean;
    rowNum: number;
    waitTime: number;
    hoverPause: boolean;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        [x: string]: ((props: {
            row: any;
            column: import("package/components/infiniteTable/src/instance").TableColumn;
        }) => any) | undefined;
    };
}) & ((app: import("vue").App, ...options: any[]) => any) & Partial<import("vue").ObjectPlugin<any[]>> & Record<string, any>) | ({
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        type: {
            type: StringConstructor;
            default: string;
            validator: (value: string) => boolean;
        };
        size: {
            type: StringConstructor;
            default: string;
            validator: (value: string) => boolean;
        };
        bg: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{
        onOnMouseEnter?: ((...args: any[]) => any) | undefined;
        onOnMouseLeave?: ((...args: any[]) => any) | undefined;
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        onMouseEnter: (...args: any[]) => void;
        onMouseLeave: (...args: any[]) => void;
    }, import("vue").PublicProps, {
        type: string;
        size: string;
        bg: boolean;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        type: {
            type: StringConstructor;
            default: string;
            validator: (value: string) => boolean;
        };
        size: {
            type: StringConstructor;
            default: string;
            validator: (value: string) => boolean;
        };
        bg: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{
        onOnMouseEnter?: ((...args: any[]) => any) | undefined;
        onOnMouseLeave?: ((...args: any[]) => any) | undefined;
    }>, {}, {}, {}, {}, {
        type: string;
        size: string;
        bg: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
    };
    size: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
    };
    bg: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{
    onOnMouseEnter?: ((...args: any[]) => any) | undefined;
    onOnMouseLeave?: ((...args: any[]) => any) | undefined;
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    onMouseEnter: (...args: any[]) => void;
    onMouseLeave: (...args: any[]) => void;
}, string, {
    type: string;
    size: string;
    bg: boolean;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
}) & import("vue").ObjectPlugin<any[]> & Record<string, any>) | ({
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        type: {
            type: StringConstructor;
            default: string;
            validator: (value: string) => boolean;
        };
        size: {
            type: StringConstructor;
            default: string;
            validator: (value: string) => boolean;
        };
        bg: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{
        onOnMouseEnter?: ((...args: any[]) => any) | undefined;
        onOnMouseLeave?: ((...args: any[]) => any) | undefined;
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        onMouseEnter: (...args: any[]) => void;
        onMouseLeave: (...args: any[]) => void;
    }, import("vue").PublicProps, {
        type: string;
        size: string;
        bg: boolean;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        type: {
            type: StringConstructor;
            default: string;
            validator: (value: string) => boolean;
        };
        size: {
            type: StringConstructor;
            default: string;
            validator: (value: string) => boolean;
        };
        bg: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{
        onOnMouseEnter?: ((...args: any[]) => any) | undefined;
        onOnMouseLeave?: ((...args: any[]) => any) | undefined;
    }>, {}, {}, {}, {}, {
        type: string;
        size: string;
        bg: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
    };
    size: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
    };
    bg: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{
    onOnMouseEnter?: ((...args: any[]) => any) | undefined;
    onOnMouseLeave?: ((...args: any[]) => any) | undefined;
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    onMouseEnter: (...args: any[]) => void;
    onMouseLeave: (...args: any[]) => void;
}, string, {
    type: string;
    size: string;
    bg: boolean;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
}) & ((app: import("vue").App, ...options: any[]) => any) & Partial<import("vue").ObjectPlugin<any[]>> & Record<string, any>) | ({
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        modelValue: {
            type: BooleanConstructor;
            default: boolean;
        };
        shape: {
            type: StringConstructor;
            default: string;
            validator: (value: string) => boolean;
        };
        activeColor: {
            type: StringConstructor;
            default: string;
        };
        inActiveColor: {
            type: StringConstructor;
            default: string;
        };
        pulseEffect: {
            type: BooleanConstructor;
            default: boolean;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        size: {
            type: StringConstructor;
            default: string;
            validator: (value: string) => boolean;
        };
    }>> & Readonly<{
        onChange?: ((...args: any[]) => any) | undefined;
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        change: (...args: any[]) => void;
        "update:modelValue": (...args: any[]) => void;
    }, import("vue").PublicProps, {
        size: string;
        disabled: boolean;
        modelValue: boolean;
        shape: string;
        activeColor: string;
        inActiveColor: string;
        pulseEffect: boolean;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        modelValue: {
            type: BooleanConstructor;
            default: boolean;
        };
        shape: {
            type: StringConstructor;
            default: string;
            validator: (value: string) => boolean;
        };
        activeColor: {
            type: StringConstructor;
            default: string;
        };
        inActiveColor: {
            type: StringConstructor;
            default: string;
        };
        pulseEffect: {
            type: BooleanConstructor;
            default: boolean;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        size: {
            type: StringConstructor;
            default: string;
            validator: (value: string) => boolean;
        };
    }>> & Readonly<{
        onChange?: ((...args: any[]) => any) | undefined;
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }>, {}, {}, {}, {}, {
        size: string;
        disabled: boolean;
        modelValue: boolean;
        shape: string;
        activeColor: string;
        inActiveColor: string;
        pulseEffect: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    shape: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
    };
    activeColor: {
        type: StringConstructor;
        default: string;
    };
    inActiveColor: {
        type: StringConstructor;
        default: string;
    };
    pulseEffect: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
    };
}>> & Readonly<{
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    change: (...args: any[]) => void;
    "update:modelValue": (...args: any[]) => void;
}, string, {
    size: string;
    disabled: boolean;
    modelValue: boolean;
    shape: string;
    activeColor: string;
    inActiveColor: string;
    pulseEffect: boolean;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("vue").ObjectPlugin<any[]> & Record<string, any>) | ({
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        modelValue: {
            type: BooleanConstructor;
            default: boolean;
        };
        shape: {
            type: StringConstructor;
            default: string;
            validator: (value: string) => boolean;
        };
        activeColor: {
            type: StringConstructor;
            default: string;
        };
        inActiveColor: {
            type: StringConstructor;
            default: string;
        };
        pulseEffect: {
            type: BooleanConstructor;
            default: boolean;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        size: {
            type: StringConstructor;
            default: string;
            validator: (value: string) => boolean;
        };
    }>> & Readonly<{
        onChange?: ((...args: any[]) => any) | undefined;
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        change: (...args: any[]) => void;
        "update:modelValue": (...args: any[]) => void;
    }, import("vue").PublicProps, {
        size: string;
        disabled: boolean;
        modelValue: boolean;
        shape: string;
        activeColor: string;
        inActiveColor: string;
        pulseEffect: boolean;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        modelValue: {
            type: BooleanConstructor;
            default: boolean;
        };
        shape: {
            type: StringConstructor;
            default: string;
            validator: (value: string) => boolean;
        };
        activeColor: {
            type: StringConstructor;
            default: string;
        };
        inActiveColor: {
            type: StringConstructor;
            default: string;
        };
        pulseEffect: {
            type: BooleanConstructor;
            default: boolean;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        size: {
            type: StringConstructor;
            default: string;
            validator: (value: string) => boolean;
        };
    }>> & Readonly<{
        onChange?: ((...args: any[]) => any) | undefined;
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }>, {}, {}, {}, {}, {
        size: string;
        disabled: boolean;
        modelValue: boolean;
        shape: string;
        activeColor: string;
        inActiveColor: string;
        pulseEffect: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    shape: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
    };
    activeColor: {
        type: StringConstructor;
        default: string;
    };
    inActiveColor: {
        type: StringConstructor;
        default: string;
    };
    pulseEffect: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
    };
}>> & Readonly<{
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    change: (...args: any[]) => void;
    "update:modelValue": (...args: any[]) => void;
}, string, {
    size: string;
    disabled: boolean;
    modelValue: boolean;
    shape: string;
    activeColor: string;
    inActiveColor: string;
    pulseEffect: boolean;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & ((app: import("vue").App, ...options: any[]) => any) & Partial<import("vue").ObjectPlugin<any[]>> & Record<string, any>) | ({
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        direction: {
            type: StringConstructor;
            default: string;
        };
        shadowColor: {
            type: StringConstructor;
            default: string;
        };
        long: {
            type: NumberConstructor;
            default: number;
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        direction: string;
        shadowColor: string;
        long: number;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        direction: {
            type: StringConstructor;
            default: string;
        };
        shadowColor: {
            type: StringConstructor;
            default: string;
        };
        long: {
            type: NumberConstructor;
            default: number;
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, {
        direction: string;
        shadowColor: string;
        long: number;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    direction: {
        type: StringConstructor;
        default: string;
    };
    shadowColor: {
        type: StringConstructor;
        default: string;
    };
    long: {
        type: NumberConstructor;
        default: number;
    };
}>> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    direction: string;
    shadowColor: string;
    long: number;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
}) & import("vue").ObjectPlugin<any[]> & Record<string, any>) | ({
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        direction: {
            type: StringConstructor;
            default: string;
        };
        shadowColor: {
            type: StringConstructor;
            default: string;
        };
        long: {
            type: NumberConstructor;
            default: number;
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        direction: string;
        shadowColor: string;
        long: number;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        direction: {
            type: StringConstructor;
            default: string;
        };
        shadowColor: {
            type: StringConstructor;
            default: string;
        };
        long: {
            type: NumberConstructor;
            default: number;
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, {
        direction: string;
        shadowColor: string;
        long: number;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    direction: {
        type: StringConstructor;
        default: string;
    };
    shadowColor: {
        type: StringConstructor;
        default: string;
    };
    long: {
        type: NumberConstructor;
        default: number;
    };
}>> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    direction: string;
    shadowColor: string;
    long: number;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
}) & ((app: import("vue").App, ...options: any[]) => any) & Partial<import("vue").ObjectPlugin<any[]>> & Record<string, any>) | ({
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<{
        text?: string;
        shadowColor?: string;
        glitchColor?: string;
        lineColor?: string;
        effect?: import("package/components/text/src/instance").CyberTextEffect;
        glowing?: boolean;
        animationSpeed?: import("package/components/text/src/instance").AnimationSpeed;
        lineVisible?: boolean;
        tag?: string;
        disabled?: boolean;
    }> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        text: string;
        effect: import("package/components/text/src/instance").CyberTextEffect;
        disabled: boolean;
        tag: string;
        glowing: boolean;
        animationSpeed: import("package/components/text/src/instance").AnimationSpeed;
        shadowColor: string;
        glitchColor: string;
        lineColor: string;
        lineVisible: boolean;
    }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<{
        text?: string;
        shadowColor?: string;
        glitchColor?: string;
        lineColor?: string;
        effect?: import("package/components/text/src/instance").CyberTextEffect;
        glowing?: boolean;
        animationSpeed?: import("package/components/text/src/instance").AnimationSpeed;
        lineVisible?: boolean;
        tag?: string;
        disabled?: boolean;
    }> & Readonly<{}>, {}, {}, {}, {}, {
        text: string;
        effect: import("package/components/text/src/instance").CyberTextEffect;
        disabled: boolean;
        tag: string;
        glowing: boolean;
        animationSpeed: import("package/components/text/src/instance").AnimationSpeed;
        shadowColor: string;
        glitchColor: string;
        lineColor: string;
        lineVisible: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{
    text?: string;
    shadowColor?: string;
    glitchColor?: string;
    lineColor?: string;
    effect?: import("package/components/text/src/instance").CyberTextEffect;
    glowing?: boolean;
    animationSpeed?: import("package/components/text/src/instance").AnimationSpeed;
    lineVisible?: boolean;
    tag?: string;
    disabled?: boolean;
}> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    text: string;
    effect: import("package/components/text/src/instance").CyberTextEffect;
    disabled: boolean;
    tag: string;
    glowing: boolean;
    animationSpeed: import("package/components/text/src/instance").AnimationSpeed;
    shadowColor: string;
    glitchColor: string;
    lineColor: string;
    lineVisible: boolean;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
}) & import("vue").ObjectPlugin<any[]> & Record<string, any>) | ({
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<{
        text?: string;
        shadowColor?: string;
        glitchColor?: string;
        lineColor?: string;
        effect?: import("package/components/text/src/instance").CyberTextEffect;
        glowing?: boolean;
        animationSpeed?: import("package/components/text/src/instance").AnimationSpeed;
        lineVisible?: boolean;
        tag?: string;
        disabled?: boolean;
    }> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        text: string;
        effect: import("package/components/text/src/instance").CyberTextEffect;
        disabled: boolean;
        tag: string;
        glowing: boolean;
        animationSpeed: import("package/components/text/src/instance").AnimationSpeed;
        shadowColor: string;
        glitchColor: string;
        lineColor: string;
        lineVisible: boolean;
    }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<{
        text?: string;
        shadowColor?: string;
        glitchColor?: string;
        lineColor?: string;
        effect?: import("package/components/text/src/instance").CyberTextEffect;
        glowing?: boolean;
        animationSpeed?: import("package/components/text/src/instance").AnimationSpeed;
        lineVisible?: boolean;
        tag?: string;
        disabled?: boolean;
    }> & Readonly<{}>, {}, {}, {}, {}, {
        text: string;
        effect: import("package/components/text/src/instance").CyberTextEffect;
        disabled: boolean;
        tag: string;
        glowing: boolean;
        animationSpeed: import("package/components/text/src/instance").AnimationSpeed;
        shadowColor: string;
        glitchColor: string;
        lineColor: string;
        lineVisible: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{
    text?: string;
    shadowColor?: string;
    glitchColor?: string;
    lineColor?: string;
    effect?: import("package/components/text/src/instance").CyberTextEffect;
    glowing?: boolean;
    animationSpeed?: import("package/components/text/src/instance").AnimationSpeed;
    lineVisible?: boolean;
    tag?: string;
    disabled?: boolean;
}> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    text: string;
    effect: import("package/components/text/src/instance").CyberTextEffect;
    disabled: boolean;
    tag: string;
    glowing: boolean;
    animationSpeed: import("package/components/text/src/instance").AnimationSpeed;
    shadowColor: string;
    glitchColor: string;
    lineColor: string;
    lineVisible: boolean;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
}) & ((app: import("vue").App, ...options: any[]) => any) & Partial<import("vue").ObjectPlugin<any[]>> & Record<string, any>) | ({
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        text: {
            type: StringConstructor;
            default: string;
        };
        speed: {
            type: NumberConstructor;
            default: number;
        };
        delay: {
            type: NumberConstructor;
            default: number;
        };
        loop: {
            type: BooleanConstructor;
            default: boolean;
        };
        loopDelay: {
            type: NumberConstructor;
            default: number;
        };
        cursor: {
            type: BooleanConstructor;
            default: boolean;
        };
        cursorColor: {
            type: StringConstructor;
            default: string;
        };
    }>> & Readonly<{
        onFinish?: (() => any) | undefined;
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        finish: () => any;
    }, import("vue").PublicProps, {
        text: string;
        delay: number;
        cursor: boolean;
        speed: number;
        loop: boolean;
        loopDelay: number;
        cursorColor: string;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        text: {
            type: StringConstructor;
            default: string;
        };
        speed: {
            type: NumberConstructor;
            default: number;
        };
        delay: {
            type: NumberConstructor;
            default: number;
        };
        loop: {
            type: BooleanConstructor;
            default: boolean;
        };
        loopDelay: {
            type: NumberConstructor;
            default: number;
        };
        cursor: {
            type: BooleanConstructor;
            default: boolean;
        };
        cursorColor: {
            type: StringConstructor;
            default: string;
        };
    }>> & Readonly<{
        onFinish?: (() => any) | undefined;
    }>, {}, {}, {}, {}, {
        text: string;
        delay: number;
        cursor: boolean;
        speed: number;
        loop: boolean;
        loopDelay: number;
        cursorColor: string;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    text: {
        type: StringConstructor;
        default: string;
    };
    speed: {
        type: NumberConstructor;
        default: number;
    };
    delay: {
        type: NumberConstructor;
        default: number;
    };
    loop: {
        type: BooleanConstructor;
        default: boolean;
    };
    loopDelay: {
        type: NumberConstructor;
        default: number;
    };
    cursor: {
        type: BooleanConstructor;
        default: boolean;
    };
    cursorColor: {
        type: StringConstructor;
        default: string;
    };
}>> & Readonly<{
    onFinish?: (() => any) | undefined;
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    finish: () => any;
}, string, {
    text: string;
    delay: number;
    cursor: boolean;
    speed: number;
    loop: boolean;
    loopDelay: number;
    cursorColor: string;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
}) & import("vue").ObjectPlugin<any[]> & Record<string, any>) | ({
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        text: {
            type: StringConstructor;
            default: string;
        };
        speed: {
            type: NumberConstructor;
            default: number;
        };
        delay: {
            type: NumberConstructor;
            default: number;
        };
        loop: {
            type: BooleanConstructor;
            default: boolean;
        };
        loopDelay: {
            type: NumberConstructor;
            default: number;
        };
        cursor: {
            type: BooleanConstructor;
            default: boolean;
        };
        cursorColor: {
            type: StringConstructor;
            default: string;
        };
    }>> & Readonly<{
        onFinish?: (() => any) | undefined;
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        finish: () => any;
    }, import("vue").PublicProps, {
        text: string;
        delay: number;
        cursor: boolean;
        speed: number;
        loop: boolean;
        loopDelay: number;
        cursorColor: string;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        text: {
            type: StringConstructor;
            default: string;
        };
        speed: {
            type: NumberConstructor;
            default: number;
        };
        delay: {
            type: NumberConstructor;
            default: number;
        };
        loop: {
            type: BooleanConstructor;
            default: boolean;
        };
        loopDelay: {
            type: NumberConstructor;
            default: number;
        };
        cursor: {
            type: BooleanConstructor;
            default: boolean;
        };
        cursorColor: {
            type: StringConstructor;
            default: string;
        };
    }>> & Readonly<{
        onFinish?: (() => any) | undefined;
    }>, {}, {}, {}, {}, {
        text: string;
        delay: number;
        cursor: boolean;
        speed: number;
        loop: boolean;
        loopDelay: number;
        cursorColor: string;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    text: {
        type: StringConstructor;
        default: string;
    };
    speed: {
        type: NumberConstructor;
        default: number;
    };
    delay: {
        type: NumberConstructor;
        default: number;
    };
    loop: {
        type: BooleanConstructor;
        default: boolean;
    };
    loopDelay: {
        type: NumberConstructor;
        default: number;
    };
    cursor: {
        type: BooleanConstructor;
        default: boolean;
    };
    cursorColor: {
        type: StringConstructor;
        default: string;
    };
}>> & Readonly<{
    onFinish?: (() => any) | undefined;
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    finish: () => any;
}, string, {
    text: string;
    delay: number;
    cursor: boolean;
    speed: number;
    loop: boolean;
    loopDelay: number;
    cursorColor: string;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
}) & ((app: import("vue").App, ...options: any[]) => any) & Partial<import("vue").ObjectPlugin<any[]>> & Record<string, any>) | ({
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<{
        speed?: import("package/components/magicText/src/instance").MagicTextSpeed;
        duration?: number;
        gradient?: import("package/components/magicText/src/instance").MagicTextGradient;
        gradientColors?: string[];
        gradientAngle?: string;
        glowColor?: string;
        glowSize?: string;
        strokeColor?: string;
        strokeWidth?: string;
        blendMode?: import("package/components/magicText/src/instance").MagicTextBlendMode;
        fontWeight?: string | number;
        fontFamily?: string;
        tag?: string;
        disabled?: boolean;
        direction?: import("package/components/magicText/src/instance").MagicTextDirection;
    }> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        disabled: boolean;
        tag: string;
        direction: import("package/components/magicText/src/instance").MagicTextDirection;
        speed: import("package/components/magicText/src/instance").MagicTextSpeed;
        gradient: import("package/components/magicText/src/instance").MagicTextGradient;
        gradientAngle: string;
        glowColor: string;
        glowSize: string;
        strokeColor: string;
        strokeWidth: string;
        blendMode: import("package/components/magicText/src/instance").MagicTextBlendMode;
        fontWeight: string | number;
        fontFamily: string;
    }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<{
        speed?: import("package/components/magicText/src/instance").MagicTextSpeed;
        duration?: number;
        gradient?: import("package/components/magicText/src/instance").MagicTextGradient;
        gradientColors?: string[];
        gradientAngle?: string;
        glowColor?: string;
        glowSize?: string;
        strokeColor?: string;
        strokeWidth?: string;
        blendMode?: import("package/components/magicText/src/instance").MagicTextBlendMode;
        fontWeight?: string | number;
        fontFamily?: string;
        tag?: string;
        disabled?: boolean;
        direction?: import("package/components/magicText/src/instance").MagicTextDirection;
    }> & Readonly<{}>, {}, {}, {}, {}, {
        disabled: boolean;
        tag: string;
        direction: import("package/components/magicText/src/instance").MagicTextDirection;
        speed: import("package/components/magicText/src/instance").MagicTextSpeed;
        gradient: import("package/components/magicText/src/instance").MagicTextGradient;
        gradientAngle: string;
        glowColor: string;
        glowSize: string;
        strokeColor: string;
        strokeWidth: string;
        blendMode: import("package/components/magicText/src/instance").MagicTextBlendMode;
        fontWeight: string | number;
        fontFamily: string;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{
    speed?: import("package/components/magicText/src/instance").MagicTextSpeed;
    duration?: number;
    gradient?: import("package/components/magicText/src/instance").MagicTextGradient;
    gradientColors?: string[];
    gradientAngle?: string;
    glowColor?: string;
    glowSize?: string;
    strokeColor?: string;
    strokeWidth?: string;
    blendMode?: import("package/components/magicText/src/instance").MagicTextBlendMode;
    fontWeight?: string | number;
    fontFamily?: string;
    tag?: string;
    disabled?: boolean;
    direction?: import("package/components/magicText/src/instance").MagicTextDirection;
}> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    disabled: boolean;
    tag: string;
    direction: import("package/components/magicText/src/instance").MagicTextDirection;
    speed: import("package/components/magicText/src/instance").MagicTextSpeed;
    gradient: import("package/components/magicText/src/instance").MagicTextGradient;
    gradientAngle: string;
    glowColor: string;
    glowSize: string;
    strokeColor: string;
    strokeWidth: string;
    blendMode: import("package/components/magicText/src/instance").MagicTextBlendMode;
    fontWeight: string | number;
    fontFamily: string;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
}) & import("vue").ObjectPlugin<any[]> & Record<string, any>) | ({
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<{
        speed?: import("package/components/magicText/src/instance").MagicTextSpeed;
        duration?: number;
        gradient?: import("package/components/magicText/src/instance").MagicTextGradient;
        gradientColors?: string[];
        gradientAngle?: string;
        glowColor?: string;
        glowSize?: string;
        strokeColor?: string;
        strokeWidth?: string;
        blendMode?: import("package/components/magicText/src/instance").MagicTextBlendMode;
        fontWeight?: string | number;
        fontFamily?: string;
        tag?: string;
        disabled?: boolean;
        direction?: import("package/components/magicText/src/instance").MagicTextDirection;
    }> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        disabled: boolean;
        tag: string;
        direction: import("package/components/magicText/src/instance").MagicTextDirection;
        speed: import("package/components/magicText/src/instance").MagicTextSpeed;
        gradient: import("package/components/magicText/src/instance").MagicTextGradient;
        gradientAngle: string;
        glowColor: string;
        glowSize: string;
        strokeColor: string;
        strokeWidth: string;
        blendMode: import("package/components/magicText/src/instance").MagicTextBlendMode;
        fontWeight: string | number;
        fontFamily: string;
    }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<{
        speed?: import("package/components/magicText/src/instance").MagicTextSpeed;
        duration?: number;
        gradient?: import("package/components/magicText/src/instance").MagicTextGradient;
        gradientColors?: string[];
        gradientAngle?: string;
        glowColor?: string;
        glowSize?: string;
        strokeColor?: string;
        strokeWidth?: string;
        blendMode?: import("package/components/magicText/src/instance").MagicTextBlendMode;
        fontWeight?: string | number;
        fontFamily?: string;
        tag?: string;
        disabled?: boolean;
        direction?: import("package/components/magicText/src/instance").MagicTextDirection;
    }> & Readonly<{}>, {}, {}, {}, {}, {
        disabled: boolean;
        tag: string;
        direction: import("package/components/magicText/src/instance").MagicTextDirection;
        speed: import("package/components/magicText/src/instance").MagicTextSpeed;
        gradient: import("package/components/magicText/src/instance").MagicTextGradient;
        gradientAngle: string;
        glowColor: string;
        glowSize: string;
        strokeColor: string;
        strokeWidth: string;
        blendMode: import("package/components/magicText/src/instance").MagicTextBlendMode;
        fontWeight: string | number;
        fontFamily: string;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{
    speed?: import("package/components/magicText/src/instance").MagicTextSpeed;
    duration?: number;
    gradient?: import("package/components/magicText/src/instance").MagicTextGradient;
    gradientColors?: string[];
    gradientAngle?: string;
    glowColor?: string;
    glowSize?: string;
    strokeColor?: string;
    strokeWidth?: string;
    blendMode?: import("package/components/magicText/src/instance").MagicTextBlendMode;
    fontWeight?: string | number;
    fontFamily?: string;
    tag?: string;
    disabled?: boolean;
    direction?: import("package/components/magicText/src/instance").MagicTextDirection;
}> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    disabled: boolean;
    tag: string;
    direction: import("package/components/magicText/src/instance").MagicTextDirection;
    speed: import("package/components/magicText/src/instance").MagicTextSpeed;
    gradient: import("package/components/magicText/src/instance").MagicTextGradient;
    gradientAngle: string;
    glowColor: string;
    glowSize: string;
    strokeColor: string;
    strokeWidth: string;
    blendMode: import("package/components/magicText/src/instance").MagicTextBlendMode;
    fontWeight: string | number;
    fontFamily: string;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
}) & ((app: import("vue").App, ...options: any[]) => any) & Partial<import("vue").ObjectPlugin<any[]>> & Record<string, any>) | ({
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<{
        src: string;
        alt?: string;
        width?: string | number;
        height?: string | number;
        fit?: "contain" | "cover" | "fill" | "none" | "scale-down";
        loading?: "eager" | "lazy";
        crossorigin?: "" | "anonymous" | "use-credentials";
        placeholder?: string;
        errorSrc?: string;
        errorContent?: string;
        disableGlitch?: boolean;
    }> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        width: string | number;
        height: string | number;
        src: string;
        alt: string;
        fit: "contain" | "cover" | "fill" | "none" | "scale-down";
        loading: "eager" | "lazy";
        crossorigin: "" | "anonymous" | "use-credentials";
        errorSrc: string;
        errorContent: string;
        disableGlitch: boolean;
    }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<{
        src: string;
        alt?: string;
        width?: string | number;
        height?: string | number;
        fit?: "contain" | "cover" | "fill" | "none" | "scale-down";
        loading?: "eager" | "lazy";
        crossorigin?: "" | "anonymous" | "use-credentials";
        placeholder?: string;
        errorSrc?: string;
        errorContent?: string;
        disableGlitch?: boolean;
    }> & Readonly<{}>, {}, {}, {}, {}, {
        width: string | number;
        height: string | number;
        src: string;
        alt: string;
        fit: "contain" | "cover" | "fill" | "none" | "scale-down";
        loading: "eager" | "lazy";
        crossorigin: "" | "anonymous" | "use-credentials";
        errorSrc: string;
        errorContent: string;
        disableGlitch: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{
    src: string;
    alt?: string;
    width?: string | number;
    height?: string | number;
    fit?: "contain" | "cover" | "fill" | "none" | "scale-down";
    loading?: "eager" | "lazy";
    crossorigin?: "" | "anonymous" | "use-credentials";
    placeholder?: string;
    errorSrc?: string;
    errorContent?: string;
    disableGlitch?: boolean;
}> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    width: string | number;
    height: string | number;
    src: string;
    alt: string;
    fit: "contain" | "cover" | "fill" | "none" | "scale-down";
    loading: "eager" | "lazy";
    crossorigin: "" | "anonymous" | "use-credentials";
    errorSrc: string;
    errorContent: string;
    disableGlitch: boolean;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        placeholder?: (props: {}) => any;
    } & {
        error?: (props: {}) => any;
    } & {
        default?: (props: {}) => any;
    };
}) & import("vue").ObjectPlugin<any[]> & Record<string, any>) | ({
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<{
        src: string;
        alt?: string;
        width?: string | number;
        height?: string | number;
        fit?: "contain" | "cover" | "fill" | "none" | "scale-down";
        loading?: "eager" | "lazy";
        crossorigin?: "" | "anonymous" | "use-credentials";
        placeholder?: string;
        errorSrc?: string;
        errorContent?: string;
        disableGlitch?: boolean;
    }> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        width: string | number;
        height: string | number;
        src: string;
        alt: string;
        fit: "contain" | "cover" | "fill" | "none" | "scale-down";
        loading: "eager" | "lazy";
        crossorigin: "" | "anonymous" | "use-credentials";
        errorSrc: string;
        errorContent: string;
        disableGlitch: boolean;
    }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<{
        src: string;
        alt?: string;
        width?: string | number;
        height?: string | number;
        fit?: "contain" | "cover" | "fill" | "none" | "scale-down";
        loading?: "eager" | "lazy";
        crossorigin?: "" | "anonymous" | "use-credentials";
        placeholder?: string;
        errorSrc?: string;
        errorContent?: string;
        disableGlitch?: boolean;
    }> & Readonly<{}>, {}, {}, {}, {}, {
        width: string | number;
        height: string | number;
        src: string;
        alt: string;
        fit: "contain" | "cover" | "fill" | "none" | "scale-down";
        loading: "eager" | "lazy";
        crossorigin: "" | "anonymous" | "use-credentials";
        errorSrc: string;
        errorContent: string;
        disableGlitch: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{
    src: string;
    alt?: string;
    width?: string | number;
    height?: string | number;
    fit?: "contain" | "cover" | "fill" | "none" | "scale-down";
    loading?: "eager" | "lazy";
    crossorigin?: "" | "anonymous" | "use-credentials";
    placeholder?: string;
    errorSrc?: string;
    errorContent?: string;
    disableGlitch?: boolean;
}> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    width: string | number;
    height: string | number;
    src: string;
    alt: string;
    fit: "contain" | "cover" | "fill" | "none" | "scale-down";
    loading: "eager" | "lazy";
    crossorigin: "" | "anonymous" | "use-credentials";
    errorSrc: string;
    errorContent: string;
    disableGlitch: boolean;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        placeholder?: (props: {}) => any;
    } & {
        error?: (props: {}) => any;
    } & {
        default?: (props: {}) => any;
    };
}) & ((app: import("vue").App, ...options: any[]) => any) & Partial<import("vue").ObjectPlugin<any[]>> & Record<string, any>) | ({
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        imgList: {
            type: () => Array<string>;
            default: never[];
        };
        shadow: {
            type: BooleanConstructor;
            default: boolean;
        };
        animationDuration: {
            type: NumberConstructor;
            default: number;
        };
        imgWidth: {
            type: NumberConstructor;
            default: number;
        };
        imgHeight: {
            type: NumberConstructor;
            default: number;
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        animationDuration: number;
        imgList: string[];
        shadow: boolean;
        imgWidth: number;
        imgHeight: number;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        imgList: {
            type: () => Array<string>;
            default: never[];
        };
        shadow: {
            type: BooleanConstructor;
            default: boolean;
        };
        animationDuration: {
            type: NumberConstructor;
            default: number;
        };
        imgWidth: {
            type: NumberConstructor;
            default: number;
        };
        imgHeight: {
            type: NumberConstructor;
            default: number;
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, {
        animationDuration: number;
        imgList: string[];
        shadow: boolean;
        imgWidth: number;
        imgHeight: number;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    imgList: {
        type: () => Array<string>;
        default: never[];
    };
    shadow: {
        type: BooleanConstructor;
        default: boolean;
    };
    animationDuration: {
        type: NumberConstructor;
        default: number;
    };
    imgWidth: {
        type: NumberConstructor;
        default: number;
    };
    imgHeight: {
        type: NumberConstructor;
        default: number;
    };
}>> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    animationDuration: number;
    imgList: string[];
    shadow: boolean;
    imgWidth: number;
    imgHeight: number;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("vue").ObjectPlugin<any[]> & Record<string, any>) | ({
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        imgList: {
            type: () => Array<string>;
            default: never[];
        };
        shadow: {
            type: BooleanConstructor;
            default: boolean;
        };
        animationDuration: {
            type: NumberConstructor;
            default: number;
        };
        imgWidth: {
            type: NumberConstructor;
            default: number;
        };
        imgHeight: {
            type: NumberConstructor;
            default: number;
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        animationDuration: number;
        imgList: string[];
        shadow: boolean;
        imgWidth: number;
        imgHeight: number;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        imgList: {
            type: () => Array<string>;
            default: never[];
        };
        shadow: {
            type: BooleanConstructor;
            default: boolean;
        };
        animationDuration: {
            type: NumberConstructor;
            default: number;
        };
        imgWidth: {
            type: NumberConstructor;
            default: number;
        };
        imgHeight: {
            type: NumberConstructor;
            default: number;
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, {
        animationDuration: number;
        imgList: string[];
        shadow: boolean;
        imgWidth: number;
        imgHeight: number;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    imgList: {
        type: () => Array<string>;
        default: never[];
    };
    shadow: {
        type: BooleanConstructor;
        default: boolean;
    };
    animationDuration: {
        type: NumberConstructor;
        default: number;
    };
    imgWidth: {
        type: NumberConstructor;
        default: number;
    };
    imgHeight: {
        type: NumberConstructor;
        default: number;
    };
}>> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    animationDuration: number;
    imgList: string[];
    shadow: boolean;
    imgWidth: number;
    imgHeight: number;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & ((app: import("vue").App, ...options: any[]) => any) & Partial<import("vue").ObjectPlugin<any[]>> & Record<string, any>) | ({
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<{
        modelValue?: import("package/components/select/src/instance").ModelValue;
        options?: import("package/components").SelectOption[];
        placeholder?: string;
        searchPlaceholder?: string;
        noDataText?: string;
        disabled?: boolean;
        clearable?: boolean;
        filterable?: boolean;
        multiple?: boolean;
        showCheck?: boolean;
        size?: "large" | "default" | "small";
        theme?: "neon" | "terminal" | "matrix" | "hologram";
        labelKey?: string;
        valueKey?: string;
    }> & Readonly<{
        onFocus?: ((event: FocusEvent) => any) | undefined;
        onBlur?: ((event: FocusEvent) => any) | undefined;
        onChange?: ((value: import("package/components/select/src/instance").ModelValue, option?: import("package/components").SelectOption | import("package/components").SelectOption[] | undefined) => any) | undefined;
        onClear?: (() => any) | undefined;
        "onUpdate:modelValue"?: ((value: import("package/components/select/src/instance").ModelValue) => any) | undefined;
        "onVisible-change"?: ((visible: boolean) => any) | undefined;
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
        focus: (event: FocusEvent) => any;
        blur: (event: FocusEvent) => any;
        change: (value: import("package/components/select/src/instance").ModelValue, option?: import("package/components").SelectOption | import("package/components").SelectOption[] | undefined) => any;
        clear: () => any;
        "update:modelValue": (value: import("package/components/select/src/instance").ModelValue) => any;
        "visible-change": (visible: boolean) => any;
    }, import("vue").PublicProps, {
        size: "large" | "default" | "small";
        disabled: boolean;
        placeholder: string;
        theme: "neon" | "terminal" | "matrix" | "hologram";
        modelValue: import("package/components/select/src/instance").ModelValue;
        options: import("package/components").SelectOption[];
        searchPlaceholder: string;
        noDataText: string;
        clearable: boolean;
        filterable: boolean;
        multiple: boolean;
        showCheck: boolean;
        labelKey: string;
        valueKey: string;
    }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<{
        modelValue?: import("package/components/select/src/instance").ModelValue;
        options?: import("package/components").SelectOption[];
        placeholder?: string;
        searchPlaceholder?: string;
        noDataText?: string;
        disabled?: boolean;
        clearable?: boolean;
        filterable?: boolean;
        multiple?: boolean;
        showCheck?: boolean;
        size?: "large" | "default" | "small";
        theme?: "neon" | "terminal" | "matrix" | "hologram";
        labelKey?: string;
        valueKey?: string;
    }> & Readonly<{
        onFocus?: ((event: FocusEvent) => any) | undefined;
        onBlur?: ((event: FocusEvent) => any) | undefined;
        onChange?: ((value: import("package/components/select/src/instance").ModelValue, option?: import("package/components").SelectOption | import("package/components").SelectOption[] | undefined) => any) | undefined;
        onClear?: (() => any) | undefined;
        "onUpdate:modelValue"?: ((value: import("package/components/select/src/instance").ModelValue) => any) | undefined;
        "onVisible-change"?: ((visible: boolean) => any) | undefined;
    }>, {}, {}, {}, {}, {
        size: "large" | "default" | "small";
        disabled: boolean;
        placeholder: string;
        theme: "neon" | "terminal" | "matrix" | "hologram";
        modelValue: import("package/components/select/src/instance").ModelValue;
        options: import("package/components").SelectOption[];
        searchPlaceholder: string;
        noDataText: string;
        clearable: boolean;
        filterable: boolean;
        multiple: boolean;
        showCheck: boolean;
        labelKey: string;
        valueKey: string;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{
    modelValue?: import("package/components/select/src/instance").ModelValue;
    options?: import("package/components").SelectOption[];
    placeholder?: string;
    searchPlaceholder?: string;
    noDataText?: string;
    disabled?: boolean;
    clearable?: boolean;
    filterable?: boolean;
    multiple?: boolean;
    showCheck?: boolean;
    size?: "large" | "default" | "small";
    theme?: "neon" | "terminal" | "matrix" | "hologram";
    labelKey?: string;
    valueKey?: string;
}> & Readonly<{
    onFocus?: ((event: FocusEvent) => any) | undefined;
    onBlur?: ((event: FocusEvent) => any) | undefined;
    onChange?: ((value: import("package/components/select/src/instance").ModelValue, option?: import("package/components").SelectOption | import("package/components").SelectOption[] | undefined) => any) | undefined;
    onClear?: (() => any) | undefined;
    "onUpdate:modelValue"?: ((value: import("package/components/select/src/instance").ModelValue) => any) | undefined;
    "onVisible-change"?: ((visible: boolean) => any) | undefined;
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    focus: (event: FocusEvent) => any;
    blur: (event: FocusEvent) => any;
    change: (value: import("package/components/select/src/instance").ModelValue, option?: import("package/components").SelectOption | import("package/components").SelectOption[] | undefined) => any;
    clear: () => any;
    "update:modelValue": (value: import("package/components/select/src/instance").ModelValue) => any;
    "visible-change": (visible: boolean) => any;
}, string, {
    size: "large" | "default" | "small";
    disabled: boolean;
    placeholder: string;
    theme: "neon" | "terminal" | "matrix" | "hologram";
    modelValue: import("package/components/select/src/instance").ModelValue;
    options: import("package/components").SelectOption[];
    searchPlaceholder: string;
    noDataText: string;
    clearable: boolean;
    filterable: boolean;
    multiple: boolean;
    showCheck: boolean;
    labelKey: string;
    valueKey: string;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("vue").ObjectPlugin<any[]> & Record<string, any>) | ({
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<{
        modelValue?: import("package/components/select/src/instance").ModelValue;
        options?: import("package/components").SelectOption[];
        placeholder?: string;
        searchPlaceholder?: string;
        noDataText?: string;
        disabled?: boolean;
        clearable?: boolean;
        filterable?: boolean;
        multiple?: boolean;
        showCheck?: boolean;
        size?: "large" | "default" | "small";
        theme?: "neon" | "terminal" | "matrix" | "hologram";
        labelKey?: string;
        valueKey?: string;
    }> & Readonly<{
        onFocus?: ((event: FocusEvent) => any) | undefined;
        onBlur?: ((event: FocusEvent) => any) | undefined;
        onChange?: ((value: import("package/components/select/src/instance").ModelValue, option?: import("package/components").SelectOption | import("package/components").SelectOption[] | undefined) => any) | undefined;
        onClear?: (() => any) | undefined;
        "onUpdate:modelValue"?: ((value: import("package/components/select/src/instance").ModelValue) => any) | undefined;
        "onVisible-change"?: ((visible: boolean) => any) | undefined;
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
        focus: (event: FocusEvent) => any;
        blur: (event: FocusEvent) => any;
        change: (value: import("package/components/select/src/instance").ModelValue, option?: import("package/components").SelectOption | import("package/components").SelectOption[] | undefined) => any;
        clear: () => any;
        "update:modelValue": (value: import("package/components/select/src/instance").ModelValue) => any;
        "visible-change": (visible: boolean) => any;
    }, import("vue").PublicProps, {
        size: "large" | "default" | "small";
        disabled: boolean;
        placeholder: string;
        theme: "neon" | "terminal" | "matrix" | "hologram";
        modelValue: import("package/components/select/src/instance").ModelValue;
        options: import("package/components").SelectOption[];
        searchPlaceholder: string;
        noDataText: string;
        clearable: boolean;
        filterable: boolean;
        multiple: boolean;
        showCheck: boolean;
        labelKey: string;
        valueKey: string;
    }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<{
        modelValue?: import("package/components/select/src/instance").ModelValue;
        options?: import("package/components").SelectOption[];
        placeholder?: string;
        searchPlaceholder?: string;
        noDataText?: string;
        disabled?: boolean;
        clearable?: boolean;
        filterable?: boolean;
        multiple?: boolean;
        showCheck?: boolean;
        size?: "large" | "default" | "small";
        theme?: "neon" | "terminal" | "matrix" | "hologram";
        labelKey?: string;
        valueKey?: string;
    }> & Readonly<{
        onFocus?: ((event: FocusEvent) => any) | undefined;
        onBlur?: ((event: FocusEvent) => any) | undefined;
        onChange?: ((value: import("package/components/select/src/instance").ModelValue, option?: import("package/components").SelectOption | import("package/components").SelectOption[] | undefined) => any) | undefined;
        onClear?: (() => any) | undefined;
        "onUpdate:modelValue"?: ((value: import("package/components/select/src/instance").ModelValue) => any) | undefined;
        "onVisible-change"?: ((visible: boolean) => any) | undefined;
    }>, {}, {}, {}, {}, {
        size: "large" | "default" | "small";
        disabled: boolean;
        placeholder: string;
        theme: "neon" | "terminal" | "matrix" | "hologram";
        modelValue: import("package/components/select/src/instance").ModelValue;
        options: import("package/components").SelectOption[];
        searchPlaceholder: string;
        noDataText: string;
        clearable: boolean;
        filterable: boolean;
        multiple: boolean;
        showCheck: boolean;
        labelKey: string;
        valueKey: string;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{
    modelValue?: import("package/components/select/src/instance").ModelValue;
    options?: import("package/components").SelectOption[];
    placeholder?: string;
    searchPlaceholder?: string;
    noDataText?: string;
    disabled?: boolean;
    clearable?: boolean;
    filterable?: boolean;
    multiple?: boolean;
    showCheck?: boolean;
    size?: "large" | "default" | "small";
    theme?: "neon" | "terminal" | "matrix" | "hologram";
    labelKey?: string;
    valueKey?: string;
}> & Readonly<{
    onFocus?: ((event: FocusEvent) => any) | undefined;
    onBlur?: ((event: FocusEvent) => any) | undefined;
    onChange?: ((value: import("package/components/select/src/instance").ModelValue, option?: import("package/components").SelectOption | import("package/components").SelectOption[] | undefined) => any) | undefined;
    onClear?: (() => any) | undefined;
    "onUpdate:modelValue"?: ((value: import("package/components/select/src/instance").ModelValue) => any) | undefined;
    "onVisible-change"?: ((visible: boolean) => any) | undefined;
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    focus: (event: FocusEvent) => any;
    blur: (event: FocusEvent) => any;
    change: (value: import("package/components/select/src/instance").ModelValue, option?: import("package/components").SelectOption | import("package/components").SelectOption[] | undefined) => any;
    clear: () => any;
    "update:modelValue": (value: import("package/components/select/src/instance").ModelValue) => any;
    "visible-change": (visible: boolean) => any;
}, string, {
    size: "large" | "default" | "small";
    disabled: boolean;
    placeholder: string;
    theme: "neon" | "terminal" | "matrix" | "hologram";
    modelValue: import("package/components/select/src/instance").ModelValue;
    options: import("package/components").SelectOption[];
    searchPlaceholder: string;
    noDataText: string;
    clearable: boolean;
    filterable: boolean;
    multiple: boolean;
    showCheck: boolean;
    labelKey: string;
    valueKey: string;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & ((app: import("vue").App, ...options: any[]) => any) & Partial<import("vue").ObjectPlugin<any[]>> & Record<string, any>) | ({
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<{
        modelValue?: import("package/components/cascader/src/instance").OptionValue | import("package/components/cascader/src/instance").OptionValue[];
        options?: import("package/components").CascaderOption[];
        placeholder?: string;
        noDataText?: string;
        disabled?: boolean;
        clearable?: boolean;
        multiple?: boolean;
        showAllLevels?: boolean;
        filterable?: boolean;
        size?: "large" | "default" | "small";
        theme?: "neon" | "terminal" | "matrix" | "hologram";
        labelKey?: string;
        valueKey?: string;
        childrenKey?: string;
    }> & Readonly<{
        onFocus?: ((event: FocusEvent) => any) | undefined;
        onBlur?: ((event: FocusEvent) => any) | undefined;
        onChange?: ((value: import("package/components/cascader/src/instance").OptionValue | import("package/components/cascader/src/instance").OptionValue[]) => any) | undefined;
        onClear?: (() => any) | undefined;
        "onUpdate:modelValue"?: ((value: import("package/components/cascader/src/instance").OptionValue | import("package/components/cascader/src/instance").OptionValue[]) => any) | undefined;
        "onVisible-change"?: ((visible: boolean) => any) | undefined;
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
        focus: (event: FocusEvent) => any;
        blur: (event: FocusEvent) => any;
        change: (value: import("package/components/cascader/src/instance").OptionValue | import("package/components/cascader/src/instance").OptionValue[]) => any;
        clear: () => any;
        "update:modelValue": (value: import("package/components/cascader/src/instance").OptionValue | import("package/components/cascader/src/instance").OptionValue[]) => any;
        "visible-change": (visible: boolean) => any;
    }, import("vue").PublicProps, {
        size: "large" | "default" | "small";
        disabled: boolean;
        placeholder: string;
        theme: "neon" | "terminal" | "matrix" | "hologram";
        modelValue: import("package/components/cascader/src/instance").OptionValue | import("package/components/cascader/src/instance").OptionValue[];
        options: import("package/components").CascaderOption[];
        noDataText: string;
        clearable: boolean;
        filterable: boolean;
        multiple: boolean;
        labelKey: string;
        valueKey: string;
        childrenKey: string;
        showAllLevels: boolean;
    }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<{
        modelValue?: import("package/components/cascader/src/instance").OptionValue | import("package/components/cascader/src/instance").OptionValue[];
        options?: import("package/components").CascaderOption[];
        placeholder?: string;
        noDataText?: string;
        disabled?: boolean;
        clearable?: boolean;
        multiple?: boolean;
        showAllLevels?: boolean;
        filterable?: boolean;
        size?: "large" | "default" | "small";
        theme?: "neon" | "terminal" | "matrix" | "hologram";
        labelKey?: string;
        valueKey?: string;
        childrenKey?: string;
    }> & Readonly<{
        onFocus?: ((event: FocusEvent) => any) | undefined;
        onBlur?: ((event: FocusEvent) => any) | undefined;
        onChange?: ((value: import("package/components/cascader/src/instance").OptionValue | import("package/components/cascader/src/instance").OptionValue[]) => any) | undefined;
        onClear?: (() => any) | undefined;
        "onUpdate:modelValue"?: ((value: import("package/components/cascader/src/instance").OptionValue | import("package/components/cascader/src/instance").OptionValue[]) => any) | undefined;
        "onVisible-change"?: ((visible: boolean) => any) | undefined;
    }>, {}, {}, {}, {}, {
        size: "large" | "default" | "small";
        disabled: boolean;
        placeholder: string;
        theme: "neon" | "terminal" | "matrix" | "hologram";
        modelValue: import("package/components/cascader/src/instance").OptionValue | import("package/components/cascader/src/instance").OptionValue[];
        options: import("package/components").CascaderOption[];
        noDataText: string;
        clearable: boolean;
        filterable: boolean;
        multiple: boolean;
        labelKey: string;
        valueKey: string;
        childrenKey: string;
        showAllLevels: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{
    modelValue?: import("package/components/cascader/src/instance").OptionValue | import("package/components/cascader/src/instance").OptionValue[];
    options?: import("package/components").CascaderOption[];
    placeholder?: string;
    noDataText?: string;
    disabled?: boolean;
    clearable?: boolean;
    multiple?: boolean;
    showAllLevels?: boolean;
    filterable?: boolean;
    size?: "large" | "default" | "small";
    theme?: "neon" | "terminal" | "matrix" | "hologram";
    labelKey?: string;
    valueKey?: string;
    childrenKey?: string;
}> & Readonly<{
    onFocus?: ((event: FocusEvent) => any) | undefined;
    onBlur?: ((event: FocusEvent) => any) | undefined;
    onChange?: ((value: import("package/components/cascader/src/instance").OptionValue | import("package/components/cascader/src/instance").OptionValue[]) => any) | undefined;
    onClear?: (() => any) | undefined;
    "onUpdate:modelValue"?: ((value: import("package/components/cascader/src/instance").OptionValue | import("package/components/cascader/src/instance").OptionValue[]) => any) | undefined;
    "onVisible-change"?: ((visible: boolean) => any) | undefined;
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    focus: (event: FocusEvent) => any;
    blur: (event: FocusEvent) => any;
    change: (value: import("package/components/cascader/src/instance").OptionValue | import("package/components/cascader/src/instance").OptionValue[]) => any;
    clear: () => any;
    "update:modelValue": (value: import("package/components/cascader/src/instance").OptionValue | import("package/components/cascader/src/instance").OptionValue[]) => any;
    "visible-change": (visible: boolean) => any;
}, string, {
    size: "large" | "default" | "small";
    disabled: boolean;
    placeholder: string;
    theme: "neon" | "terminal" | "matrix" | "hologram";
    modelValue: import("package/components/cascader/src/instance").OptionValue | import("package/components/cascader/src/instance").OptionValue[];
    options: import("package/components").CascaderOption[];
    noDataText: string;
    clearable: boolean;
    filterable: boolean;
    multiple: boolean;
    labelKey: string;
    valueKey: string;
    childrenKey: string;
    showAllLevels: boolean;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("vue").ObjectPlugin<any[]> & Record<string, any>) | ({
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<{
        modelValue?: import("package/components/cascader/src/instance").OptionValue | import("package/components/cascader/src/instance").OptionValue[];
        options?: import("package/components").CascaderOption[];
        placeholder?: string;
        noDataText?: string;
        disabled?: boolean;
        clearable?: boolean;
        multiple?: boolean;
        showAllLevels?: boolean;
        filterable?: boolean;
        size?: "large" | "default" | "small";
        theme?: "neon" | "terminal" | "matrix" | "hologram";
        labelKey?: string;
        valueKey?: string;
        childrenKey?: string;
    }> & Readonly<{
        onFocus?: ((event: FocusEvent) => any) | undefined;
        onBlur?: ((event: FocusEvent) => any) | undefined;
        onChange?: ((value: import("package/components/cascader/src/instance").OptionValue | import("package/components/cascader/src/instance").OptionValue[]) => any) | undefined;
        onClear?: (() => any) | undefined;
        "onUpdate:modelValue"?: ((value: import("package/components/cascader/src/instance").OptionValue | import("package/components/cascader/src/instance").OptionValue[]) => any) | undefined;
        "onVisible-change"?: ((visible: boolean) => any) | undefined;
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
        focus: (event: FocusEvent) => any;
        blur: (event: FocusEvent) => any;
        change: (value: import("package/components/cascader/src/instance").OptionValue | import("package/components/cascader/src/instance").OptionValue[]) => any;
        clear: () => any;
        "update:modelValue": (value: import("package/components/cascader/src/instance").OptionValue | import("package/components/cascader/src/instance").OptionValue[]) => any;
        "visible-change": (visible: boolean) => any;
    }, import("vue").PublicProps, {
        size: "large" | "default" | "small";
        disabled: boolean;
        placeholder: string;
        theme: "neon" | "terminal" | "matrix" | "hologram";
        modelValue: import("package/components/cascader/src/instance").OptionValue | import("package/components/cascader/src/instance").OptionValue[];
        options: import("package/components").CascaderOption[];
        noDataText: string;
        clearable: boolean;
        filterable: boolean;
        multiple: boolean;
        labelKey: string;
        valueKey: string;
        childrenKey: string;
        showAllLevels: boolean;
    }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<{
        modelValue?: import("package/components/cascader/src/instance").OptionValue | import("package/components/cascader/src/instance").OptionValue[];
        options?: import("package/components").CascaderOption[];
        placeholder?: string;
        noDataText?: string;
        disabled?: boolean;
        clearable?: boolean;
        multiple?: boolean;
        showAllLevels?: boolean;
        filterable?: boolean;
        size?: "large" | "default" | "small";
        theme?: "neon" | "terminal" | "matrix" | "hologram";
        labelKey?: string;
        valueKey?: string;
        childrenKey?: string;
    }> & Readonly<{
        onFocus?: ((event: FocusEvent) => any) | undefined;
        onBlur?: ((event: FocusEvent) => any) | undefined;
        onChange?: ((value: import("package/components/cascader/src/instance").OptionValue | import("package/components/cascader/src/instance").OptionValue[]) => any) | undefined;
        onClear?: (() => any) | undefined;
        "onUpdate:modelValue"?: ((value: import("package/components/cascader/src/instance").OptionValue | import("package/components/cascader/src/instance").OptionValue[]) => any) | undefined;
        "onVisible-change"?: ((visible: boolean) => any) | undefined;
    }>, {}, {}, {}, {}, {
        size: "large" | "default" | "small";
        disabled: boolean;
        placeholder: string;
        theme: "neon" | "terminal" | "matrix" | "hologram";
        modelValue: import("package/components/cascader/src/instance").OptionValue | import("package/components/cascader/src/instance").OptionValue[];
        options: import("package/components").CascaderOption[];
        noDataText: string;
        clearable: boolean;
        filterable: boolean;
        multiple: boolean;
        labelKey: string;
        valueKey: string;
        childrenKey: string;
        showAllLevels: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{
    modelValue?: import("package/components/cascader/src/instance").OptionValue | import("package/components/cascader/src/instance").OptionValue[];
    options?: import("package/components").CascaderOption[];
    placeholder?: string;
    noDataText?: string;
    disabled?: boolean;
    clearable?: boolean;
    multiple?: boolean;
    showAllLevels?: boolean;
    filterable?: boolean;
    size?: "large" | "default" | "small";
    theme?: "neon" | "terminal" | "matrix" | "hologram";
    labelKey?: string;
    valueKey?: string;
    childrenKey?: string;
}> & Readonly<{
    onFocus?: ((event: FocusEvent) => any) | undefined;
    onBlur?: ((event: FocusEvent) => any) | undefined;
    onChange?: ((value: import("package/components/cascader/src/instance").OptionValue | import("package/components/cascader/src/instance").OptionValue[]) => any) | undefined;
    onClear?: (() => any) | undefined;
    "onUpdate:modelValue"?: ((value: import("package/components/cascader/src/instance").OptionValue | import("package/components/cascader/src/instance").OptionValue[]) => any) | undefined;
    "onVisible-change"?: ((visible: boolean) => any) | undefined;
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    focus: (event: FocusEvent) => any;
    blur: (event: FocusEvent) => any;
    change: (value: import("package/components/cascader/src/instance").OptionValue | import("package/components/cascader/src/instance").OptionValue[]) => any;
    clear: () => any;
    "update:modelValue": (value: import("package/components/cascader/src/instance").OptionValue | import("package/components/cascader/src/instance").OptionValue[]) => any;
    "visible-change": (visible: boolean) => any;
}, string, {
    size: "large" | "default" | "small";
    disabled: boolean;
    placeholder: string;
    theme: "neon" | "terminal" | "matrix" | "hologram";
    modelValue: import("package/components/cascader/src/instance").OptionValue | import("package/components/cascader/src/instance").OptionValue[];
    options: import("package/components").CascaderOption[];
    noDataText: string;
    clearable: boolean;
    filterable: boolean;
    multiple: boolean;
    labelKey: string;
    valueKey: string;
    childrenKey: string;
    showAllLevels: boolean;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & ((app: import("vue").App, ...options: any[]) => any) & Partial<import("vue").ObjectPlugin<any[]>> & Record<string, any>) | ({
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<{
        data?: import("package/components").TreeNode[];
        theme?: "neon" | "hologram" | "terminal" | "matrix";
        effect?: "glitch" | "scan" | "pulse" | "static";
        showConnectors?: boolean;
        showStatus?: boolean;
        showScanline?: boolean;
        indent?: number;
        defaultExpandAll?: boolean;
        expandOnClick?: boolean;
        multiple?: boolean;
    }> & Readonly<{
        "onNode-click"?: ((node: import("package/components").TreeNode) => any) | undefined;
        "onNode-expand"?: ((node: import("package/components").TreeNode) => any) | undefined;
        "onNode-collapse"?: ((node: import("package/components").TreeNode) => any) | undefined;
        "onSelect-change"?: ((selectedNodes: import("package/components").TreeNode[]) => any) | undefined;
    }>, {
        getSelectedNodes: () => {
            [x: string]: any;
            _expanded: boolean;
            _selected: boolean;
            _level: number;
            _parent?: any | undefined;
            _isLastChild: boolean;
            id: string | number;
            label: string;
            children?: {
                [x: string]: any;
                id: string | number;
                label: string;
                children?: any[] | undefined;
                expanded?: boolean | undefined;
                selected?: boolean | undefined;
                status?: "online" | "offline" | "warning" | "error" | undefined;
                icon?: string | undefined;
            }[] | undefined;
            expanded?: boolean | undefined;
            selected?: boolean | undefined;
            status?: "online" | "offline" | "warning" | "error" | undefined;
            icon?: string | undefined;
        }[];
        clearSelection: () => void;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
        "node-click": (node: import("package/components").TreeNode) => any;
        "node-expand": (node: import("package/components").TreeNode) => any;
        "node-collapse": (node: import("package/components").TreeNode) => any;
        "select-change": (selectedNodes: import("package/components").TreeNode[]) => any;
    }, import("vue").PublicProps, {
        data: import("package/components").TreeNode[];
        effect: "glitch" | "scan" | "pulse" | "static";
        theme: "neon" | "hologram" | "terminal" | "matrix";
        showStatus: boolean;
        showScanline: boolean;
        multiple: boolean;
        showConnectors: boolean;
        indent: number;
        defaultExpandAll: boolean;
        expandOnClick: boolean;
    }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<{
        data?: import("package/components").TreeNode[];
        theme?: "neon" | "hologram" | "terminal" | "matrix";
        effect?: "glitch" | "scan" | "pulse" | "static";
        showConnectors?: boolean;
        showStatus?: boolean;
        showScanline?: boolean;
        indent?: number;
        defaultExpandAll?: boolean;
        expandOnClick?: boolean;
        multiple?: boolean;
    }> & Readonly<{
        "onNode-click"?: ((node: import("package/components").TreeNode) => any) | undefined;
        "onNode-expand"?: ((node: import("package/components").TreeNode) => any) | undefined;
        "onNode-collapse"?: ((node: import("package/components").TreeNode) => any) | undefined;
        "onSelect-change"?: ((selectedNodes: import("package/components").TreeNode[]) => any) | undefined;
    }>, {
        getSelectedNodes: () => {
            [x: string]: any;
            _expanded: boolean;
            _selected: boolean;
            _level: number;
            _parent?: any | undefined;
            _isLastChild: boolean;
            id: string | number;
            label: string;
            children?: {
                [x: string]: any;
                id: string | number;
                label: string;
                children?: any[] | undefined;
                expanded?: boolean | undefined;
                selected?: boolean | undefined;
                status?: "online" | "offline" | "warning" | "error" | undefined;
                icon?: string | undefined;
            }[] | undefined;
            expanded?: boolean | undefined;
            selected?: boolean | undefined;
            status?: "online" | "offline" | "warning" | "error" | undefined;
            icon?: string | undefined;
        }[];
        clearSelection: () => void;
    }, {}, {}, {}, {
        data: import("package/components").TreeNode[];
        effect: "glitch" | "scan" | "pulse" | "static";
        theme: "neon" | "hologram" | "terminal" | "matrix";
        showStatus: boolean;
        showScanline: boolean;
        multiple: boolean;
        showConnectors: boolean;
        indent: number;
        defaultExpandAll: boolean;
        expandOnClick: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{
    data?: import("package/components").TreeNode[];
    theme?: "neon" | "hologram" | "terminal" | "matrix";
    effect?: "glitch" | "scan" | "pulse" | "static";
    showConnectors?: boolean;
    showStatus?: boolean;
    showScanline?: boolean;
    indent?: number;
    defaultExpandAll?: boolean;
    expandOnClick?: boolean;
    multiple?: boolean;
}> & Readonly<{
    "onNode-click"?: ((node: import("package/components").TreeNode) => any) | undefined;
    "onNode-expand"?: ((node: import("package/components").TreeNode) => any) | undefined;
    "onNode-collapse"?: ((node: import("package/components").TreeNode) => any) | undefined;
    "onSelect-change"?: ((selectedNodes: import("package/components").TreeNode[]) => any) | undefined;
}>, {
    getSelectedNodes: () => {
        [x: string]: any;
        _expanded: boolean;
        _selected: boolean;
        _level: number;
        _parent?: any | undefined;
        _isLastChild: boolean;
        id: string | number;
        label: string;
        children?: {
            [x: string]: any;
            id: string | number;
            label: string;
            children?: any[] | undefined;
            expanded?: boolean | undefined;
            selected?: boolean | undefined;
            status?: "online" | "offline" | "warning" | "error" | undefined;
            icon?: string | undefined;
        }[] | undefined;
        expanded?: boolean | undefined;
        selected?: boolean | undefined;
        status?: "online" | "offline" | "warning" | "error" | undefined;
        icon?: string | undefined;
    }[];
    clearSelection: () => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    "node-click": (node: import("package/components").TreeNode) => any;
    "node-expand": (node: import("package/components").TreeNode) => any;
    "node-collapse": (node: import("package/components").TreeNode) => any;
    "select-change": (selectedNodes: import("package/components").TreeNode[]) => any;
}, string, {
    data: import("package/components").TreeNode[];
    effect: "glitch" | "scan" | "pulse" | "static";
    theme: "neon" | "hologram" | "terminal" | "matrix";
    showStatus: boolean;
    showScanline: boolean;
    multiple: boolean;
    showConnectors: boolean;
    indent: number;
    defaultExpandAll: boolean;
    expandOnClick: boolean;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("vue").ObjectPlugin<any[]> & Record<string, any>) | ({
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<{
        data?: import("package/components").TreeNode[];
        theme?: "neon" | "hologram" | "terminal" | "matrix";
        effect?: "glitch" | "scan" | "pulse" | "static";
        showConnectors?: boolean;
        showStatus?: boolean;
        showScanline?: boolean;
        indent?: number;
        defaultExpandAll?: boolean;
        expandOnClick?: boolean;
        multiple?: boolean;
    }> & Readonly<{
        "onNode-click"?: ((node: import("package/components").TreeNode) => any) | undefined;
        "onNode-expand"?: ((node: import("package/components").TreeNode) => any) | undefined;
        "onNode-collapse"?: ((node: import("package/components").TreeNode) => any) | undefined;
        "onSelect-change"?: ((selectedNodes: import("package/components").TreeNode[]) => any) | undefined;
    }>, {
        getSelectedNodes: () => {
            [x: string]: any;
            _expanded: boolean;
            _selected: boolean;
            _level: number;
            _parent?: any | undefined;
            _isLastChild: boolean;
            id: string | number;
            label: string;
            children?: {
                [x: string]: any;
                id: string | number;
                label: string;
                children?: any[] | undefined;
                expanded?: boolean | undefined;
                selected?: boolean | undefined;
                status?: "online" | "offline" | "warning" | "error" | undefined;
                icon?: string | undefined;
            }[] | undefined;
            expanded?: boolean | undefined;
            selected?: boolean | undefined;
            status?: "online" | "offline" | "warning" | "error" | undefined;
            icon?: string | undefined;
        }[];
        clearSelection: () => void;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
        "node-click": (node: import("package/components").TreeNode) => any;
        "node-expand": (node: import("package/components").TreeNode) => any;
        "node-collapse": (node: import("package/components").TreeNode) => any;
        "select-change": (selectedNodes: import("package/components").TreeNode[]) => any;
    }, import("vue").PublicProps, {
        data: import("package/components").TreeNode[];
        effect: "glitch" | "scan" | "pulse" | "static";
        theme: "neon" | "hologram" | "terminal" | "matrix";
        showStatus: boolean;
        showScanline: boolean;
        multiple: boolean;
        showConnectors: boolean;
        indent: number;
        defaultExpandAll: boolean;
        expandOnClick: boolean;
    }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<{
        data?: import("package/components").TreeNode[];
        theme?: "neon" | "hologram" | "terminal" | "matrix";
        effect?: "glitch" | "scan" | "pulse" | "static";
        showConnectors?: boolean;
        showStatus?: boolean;
        showScanline?: boolean;
        indent?: number;
        defaultExpandAll?: boolean;
        expandOnClick?: boolean;
        multiple?: boolean;
    }> & Readonly<{
        "onNode-click"?: ((node: import("package/components").TreeNode) => any) | undefined;
        "onNode-expand"?: ((node: import("package/components").TreeNode) => any) | undefined;
        "onNode-collapse"?: ((node: import("package/components").TreeNode) => any) | undefined;
        "onSelect-change"?: ((selectedNodes: import("package/components").TreeNode[]) => any) | undefined;
    }>, {
        getSelectedNodes: () => {
            [x: string]: any;
            _expanded: boolean;
            _selected: boolean;
            _level: number;
            _parent?: any | undefined;
            _isLastChild: boolean;
            id: string | number;
            label: string;
            children?: {
                [x: string]: any;
                id: string | number;
                label: string;
                children?: any[] | undefined;
                expanded?: boolean | undefined;
                selected?: boolean | undefined;
                status?: "online" | "offline" | "warning" | "error" | undefined;
                icon?: string | undefined;
            }[] | undefined;
            expanded?: boolean | undefined;
            selected?: boolean | undefined;
            status?: "online" | "offline" | "warning" | "error" | undefined;
            icon?: string | undefined;
        }[];
        clearSelection: () => void;
    }, {}, {}, {}, {
        data: import("package/components").TreeNode[];
        effect: "glitch" | "scan" | "pulse" | "static";
        theme: "neon" | "hologram" | "terminal" | "matrix";
        showStatus: boolean;
        showScanline: boolean;
        multiple: boolean;
        showConnectors: boolean;
        indent: number;
        defaultExpandAll: boolean;
        expandOnClick: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{
    data?: import("package/components").TreeNode[];
    theme?: "neon" | "hologram" | "terminal" | "matrix";
    effect?: "glitch" | "scan" | "pulse" | "static";
    showConnectors?: boolean;
    showStatus?: boolean;
    showScanline?: boolean;
    indent?: number;
    defaultExpandAll?: boolean;
    expandOnClick?: boolean;
    multiple?: boolean;
}> & Readonly<{
    "onNode-click"?: ((node: import("package/components").TreeNode) => any) | undefined;
    "onNode-expand"?: ((node: import("package/components").TreeNode) => any) | undefined;
    "onNode-collapse"?: ((node: import("package/components").TreeNode) => any) | undefined;
    "onSelect-change"?: ((selectedNodes: import("package/components").TreeNode[]) => any) | undefined;
}>, {
    getSelectedNodes: () => {
        [x: string]: any;
        _expanded: boolean;
        _selected: boolean;
        _level: number;
        _parent?: any | undefined;
        _isLastChild: boolean;
        id: string | number;
        label: string;
        children?: {
            [x: string]: any;
            id: string | number;
            label: string;
            children?: any[] | undefined;
            expanded?: boolean | undefined;
            selected?: boolean | undefined;
            status?: "online" | "offline" | "warning" | "error" | undefined;
            icon?: string | undefined;
        }[] | undefined;
        expanded?: boolean | undefined;
        selected?: boolean | undefined;
        status?: "online" | "offline" | "warning" | "error" | undefined;
        icon?: string | undefined;
    }[];
    clearSelection: () => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    "node-click": (node: import("package/components").TreeNode) => any;
    "node-expand": (node: import("package/components").TreeNode) => any;
    "node-collapse": (node: import("package/components").TreeNode) => any;
    "select-change": (selectedNodes: import("package/components").TreeNode[]) => any;
}, string, {
    data: import("package/components").TreeNode[];
    effect: "glitch" | "scan" | "pulse" | "static";
    theme: "neon" | "hologram" | "terminal" | "matrix";
    showStatus: boolean;
    showScanline: boolean;
    multiple: boolean;
    showConnectors: boolean;
    indent: number;
    defaultExpandAll: boolean;
    expandOnClick: boolean;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & ((app: import("vue").App, ...options: any[]) => any) & Partial<import("vue").ObjectPlugin<any[]>> & Record<string, any>) | ({
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<{
        direction?: "horizontal" | "vertical";
        type?: "primary" | "success" | "warning" | "danger" | "info";
        content?: string;
        showLeftLine?: boolean;
        showRightLine?: boolean;
        size?: string;
    }> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        type: "primary" | "success" | "warning" | "danger" | "info";
        size: string;
        content: string;
        direction: "horizontal" | "vertical";
        showLeftLine: boolean;
        showRightLine: boolean;
    }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<{
        direction?: "horizontal" | "vertical";
        type?: "primary" | "success" | "warning" | "danger" | "info";
        content?: string;
        showLeftLine?: boolean;
        showRightLine?: boolean;
        size?: string;
    }> & Readonly<{}>, {}, {}, {}, {}, {
        type: "primary" | "success" | "warning" | "danger" | "info";
        size: string;
        content: string;
        direction: "horizontal" | "vertical";
        showLeftLine: boolean;
        showRightLine: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{
    direction?: "horizontal" | "vertical";
    type?: "primary" | "success" | "warning" | "danger" | "info";
    content?: string;
    showLeftLine?: boolean;
    showRightLine?: boolean;
    size?: string;
}> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    type: "primary" | "success" | "warning" | "danger" | "info";
    size: string;
    content: string;
    direction: "horizontal" | "vertical";
    showLeftLine: boolean;
    showRightLine: boolean;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
}) & import("vue").ObjectPlugin<any[]> & Record<string, any>) | ({
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<{
        direction?: "horizontal" | "vertical";
        type?: "primary" | "success" | "warning" | "danger" | "info";
        content?: string;
        showLeftLine?: boolean;
        showRightLine?: boolean;
        size?: string;
    }> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        type: "primary" | "success" | "warning" | "danger" | "info";
        size: string;
        content: string;
        direction: "horizontal" | "vertical";
        showLeftLine: boolean;
        showRightLine: boolean;
    }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<{
        direction?: "horizontal" | "vertical";
        type?: "primary" | "success" | "warning" | "danger" | "info";
        content?: string;
        showLeftLine?: boolean;
        showRightLine?: boolean;
        size?: string;
    }> & Readonly<{}>, {}, {}, {}, {}, {
        type: "primary" | "success" | "warning" | "danger" | "info";
        size: string;
        content: string;
        direction: "horizontal" | "vertical";
        showLeftLine: boolean;
        showRightLine: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{
    direction?: "horizontal" | "vertical";
    type?: "primary" | "success" | "warning" | "danger" | "info";
    content?: string;
    showLeftLine?: boolean;
    showRightLine?: boolean;
    size?: string;
}> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    type: "primary" | "success" | "warning" | "danger" | "info";
    size: string;
    content: string;
    direction: "horizontal" | "vertical";
    showLeftLine: boolean;
    showRightLine: boolean;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
}) & ((app: import("vue").App, ...options: any[]) => any) & Partial<import("vue").ObjectPlugin<any[]>> & Record<string, any>) | ({
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<{
        modelValue?: string | number;
        type?: "text" | "password" | "number" | "email" | "tel" | "url" | "search";
        placeholder?: string;
        disabled?: boolean;
        readonly?: boolean;
        maxlength?: string | number;
        autocomplete?: string;
        name?: string;
        size?: "large" | "default" | "small";
        theme?: "primary" | "success" | "warning" | "danger" | "info";
        glitchEffect?: boolean;
        scanlineEffect?: boolean;
        clearable?: boolean;
        showPassword?: boolean;
    }> & Readonly<{
        onInput?: ((value: string) => any) | undefined;
        onFocus?: ((event: FocusEvent) => any) | undefined;
        onBlur?: ((event: FocusEvent) => any) | undefined;
        onChange?: ((value: string | number) => any) | undefined;
        onKeydown?: ((event: KeyboardEvent) => any) | undefined;
        onKeyup?: ((event: KeyboardEvent) => any) | undefined;
        onClear?: (() => any) | undefined;
        "onUpdate:modelValue"?: ((value: string | number) => any) | undefined;
    }>, {
        focus: () => void;
        blur: () => void;
        select: () => void;
        clear: () => void;
        ref: import("vue").Ref<HTMLInputElement | null, HTMLInputElement | null>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
        input: (value: string) => any;
        focus: (event: FocusEvent) => any;
        blur: (event: FocusEvent) => any;
        change: (value: string | number) => any;
        keydown: (event: KeyboardEvent) => any;
        keyup: (event: KeyboardEvent) => any;
        clear: () => any;
        "update:modelValue": (value: string | number) => any;
    }, import("vue").PublicProps, {
        name: string;
        type: "text" | "password" | "number" | "email" | "tel" | "url" | "search";
        size: "large" | "default" | "small";
        disabled: boolean;
        placeholder: string;
        theme: "primary" | "success" | "warning" | "danger" | "info";
        modelValue: string | number;
        clearable: boolean;
        readonly: boolean;
        maxlength: string | number;
        autocomplete: string;
        glitchEffect: boolean;
        scanlineEffect: boolean;
        showPassword: boolean;
    }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<{
        modelValue?: string | number;
        type?: "text" | "password" | "number" | "email" | "tel" | "url" | "search";
        placeholder?: string;
        disabled?: boolean;
        readonly?: boolean;
        maxlength?: string | number;
        autocomplete?: string;
        name?: string;
        size?: "large" | "default" | "small";
        theme?: "primary" | "success" | "warning" | "danger" | "info";
        glitchEffect?: boolean;
        scanlineEffect?: boolean;
        clearable?: boolean;
        showPassword?: boolean;
    }> & Readonly<{
        onInput?: ((value: string) => any) | undefined;
        onFocus?: ((event: FocusEvent) => any) | undefined;
        onBlur?: ((event: FocusEvent) => any) | undefined;
        onChange?: ((value: string | number) => any) | undefined;
        onKeydown?: ((event: KeyboardEvent) => any) | undefined;
        onKeyup?: ((event: KeyboardEvent) => any) | undefined;
        onClear?: (() => any) | undefined;
        "onUpdate:modelValue"?: ((value: string | number) => any) | undefined;
    }>, {
        focus: () => void;
        blur: () => void;
        select: () => void;
        clear: () => void;
        ref: import("vue").Ref<HTMLInputElement | null, HTMLInputElement | null>;
    }, {}, {}, {}, {
        name: string;
        type: "text" | "password" | "number" | "email" | "tel" | "url" | "search";
        size: "large" | "default" | "small";
        disabled: boolean;
        placeholder: string;
        theme: "primary" | "success" | "warning" | "danger" | "info";
        modelValue: string | number;
        clearable: boolean;
        readonly: boolean;
        maxlength: string | number;
        autocomplete: string;
        glitchEffect: boolean;
        scanlineEffect: boolean;
        showPassword: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{
    modelValue?: string | number;
    type?: "text" | "password" | "number" | "email" | "tel" | "url" | "search";
    placeholder?: string;
    disabled?: boolean;
    readonly?: boolean;
    maxlength?: string | number;
    autocomplete?: string;
    name?: string;
    size?: "large" | "default" | "small";
    theme?: "primary" | "success" | "warning" | "danger" | "info";
    glitchEffect?: boolean;
    scanlineEffect?: boolean;
    clearable?: boolean;
    showPassword?: boolean;
}> & Readonly<{
    onInput?: ((value: string) => any) | undefined;
    onFocus?: ((event: FocusEvent) => any) | undefined;
    onBlur?: ((event: FocusEvent) => any) | undefined;
    onChange?: ((value: string | number) => any) | undefined;
    onKeydown?: ((event: KeyboardEvent) => any) | undefined;
    onKeyup?: ((event: KeyboardEvent) => any) | undefined;
    onClear?: (() => any) | undefined;
    "onUpdate:modelValue"?: ((value: string | number) => any) | undefined;
}>, {
    focus: () => void;
    blur: () => void;
    select: () => void;
    clear: () => void;
    ref: import("vue").Ref<HTMLInputElement | null, HTMLInputElement | null>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    input: (value: string) => any;
    focus: (event: FocusEvent) => any;
    blur: (event: FocusEvent) => any;
    change: (value: string | number) => any;
    keydown: (event: KeyboardEvent) => any;
    keyup: (event: KeyboardEvent) => any;
    clear: () => any;
    "update:modelValue": (value: string | number) => any;
}, string, {
    name: string;
    type: "text" | "password" | "number" | "email" | "tel" | "url" | "search";
    size: "large" | "default" | "small";
    disabled: boolean;
    placeholder: string;
    theme: "primary" | "success" | "warning" | "danger" | "info";
    modelValue: string | number;
    clearable: boolean;
    readonly: boolean;
    maxlength: string | number;
    autocomplete: string;
    glitchEffect: boolean;
    scanlineEffect: boolean;
    showPassword: boolean;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        prefix?: (props: {}) => any;
    } & {
        suffix?: (props: {}) => any;
    };
}) & import("vue").ObjectPlugin<any[]> & Record<string, any>) | ({
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<{
        modelValue?: string | number;
        type?: "text" | "password" | "number" | "email" | "tel" | "url" | "search";
        placeholder?: string;
        disabled?: boolean;
        readonly?: boolean;
        maxlength?: string | number;
        autocomplete?: string;
        name?: string;
        size?: "large" | "default" | "small";
        theme?: "primary" | "success" | "warning" | "danger" | "info";
        glitchEffect?: boolean;
        scanlineEffect?: boolean;
        clearable?: boolean;
        showPassword?: boolean;
    }> & Readonly<{
        onInput?: ((value: string) => any) | undefined;
        onFocus?: ((event: FocusEvent) => any) | undefined;
        onBlur?: ((event: FocusEvent) => any) | undefined;
        onChange?: ((value: string | number) => any) | undefined;
        onKeydown?: ((event: KeyboardEvent) => any) | undefined;
        onKeyup?: ((event: KeyboardEvent) => any) | undefined;
        onClear?: (() => any) | undefined;
        "onUpdate:modelValue"?: ((value: string | number) => any) | undefined;
    }>, {
        focus: () => void;
        blur: () => void;
        select: () => void;
        clear: () => void;
        ref: import("vue").Ref<HTMLInputElement | null, HTMLInputElement | null>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
        input: (value: string) => any;
        focus: (event: FocusEvent) => any;
        blur: (event: FocusEvent) => any;
        change: (value: string | number) => any;
        keydown: (event: KeyboardEvent) => any;
        keyup: (event: KeyboardEvent) => any;
        clear: () => any;
        "update:modelValue": (value: string | number) => any;
    }, import("vue").PublicProps, {
        name: string;
        type: "text" | "password" | "number" | "email" | "tel" | "url" | "search";
        size: "large" | "default" | "small";
        disabled: boolean;
        placeholder: string;
        theme: "primary" | "success" | "warning" | "danger" | "info";
        modelValue: string | number;
        clearable: boolean;
        readonly: boolean;
        maxlength: string | number;
        autocomplete: string;
        glitchEffect: boolean;
        scanlineEffect: boolean;
        showPassword: boolean;
    }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<{
        modelValue?: string | number;
        type?: "text" | "password" | "number" | "email" | "tel" | "url" | "search";
        placeholder?: string;
        disabled?: boolean;
        readonly?: boolean;
        maxlength?: string | number;
        autocomplete?: string;
        name?: string;
        size?: "large" | "default" | "small";
        theme?: "primary" | "success" | "warning" | "danger" | "info";
        glitchEffect?: boolean;
        scanlineEffect?: boolean;
        clearable?: boolean;
        showPassword?: boolean;
    }> & Readonly<{
        onInput?: ((value: string) => any) | undefined;
        onFocus?: ((event: FocusEvent) => any) | undefined;
        onBlur?: ((event: FocusEvent) => any) | undefined;
        onChange?: ((value: string | number) => any) | undefined;
        onKeydown?: ((event: KeyboardEvent) => any) | undefined;
        onKeyup?: ((event: KeyboardEvent) => any) | undefined;
        onClear?: (() => any) | undefined;
        "onUpdate:modelValue"?: ((value: string | number) => any) | undefined;
    }>, {
        focus: () => void;
        blur: () => void;
        select: () => void;
        clear: () => void;
        ref: import("vue").Ref<HTMLInputElement | null, HTMLInputElement | null>;
    }, {}, {}, {}, {
        name: string;
        type: "text" | "password" | "number" | "email" | "tel" | "url" | "search";
        size: "large" | "default" | "small";
        disabled: boolean;
        placeholder: string;
        theme: "primary" | "success" | "warning" | "danger" | "info";
        modelValue: string | number;
        clearable: boolean;
        readonly: boolean;
        maxlength: string | number;
        autocomplete: string;
        glitchEffect: boolean;
        scanlineEffect: boolean;
        showPassword: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{
    modelValue?: string | number;
    type?: "text" | "password" | "number" | "email" | "tel" | "url" | "search";
    placeholder?: string;
    disabled?: boolean;
    readonly?: boolean;
    maxlength?: string | number;
    autocomplete?: string;
    name?: string;
    size?: "large" | "default" | "small";
    theme?: "primary" | "success" | "warning" | "danger" | "info";
    glitchEffect?: boolean;
    scanlineEffect?: boolean;
    clearable?: boolean;
    showPassword?: boolean;
}> & Readonly<{
    onInput?: ((value: string) => any) | undefined;
    onFocus?: ((event: FocusEvent) => any) | undefined;
    onBlur?: ((event: FocusEvent) => any) | undefined;
    onChange?: ((value: string | number) => any) | undefined;
    onKeydown?: ((event: KeyboardEvent) => any) | undefined;
    onKeyup?: ((event: KeyboardEvent) => any) | undefined;
    onClear?: (() => any) | undefined;
    "onUpdate:modelValue"?: ((value: string | number) => any) | undefined;
}>, {
    focus: () => void;
    blur: () => void;
    select: () => void;
    clear: () => void;
    ref: import("vue").Ref<HTMLInputElement | null, HTMLInputElement | null>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    input: (value: string) => any;
    focus: (event: FocusEvent) => any;
    blur: (event: FocusEvent) => any;
    change: (value: string | number) => any;
    keydown: (event: KeyboardEvent) => any;
    keyup: (event: KeyboardEvent) => any;
    clear: () => any;
    "update:modelValue": (value: string | number) => any;
}, string, {
    name: string;
    type: "text" | "password" | "number" | "email" | "tel" | "url" | "search";
    size: "large" | "default" | "small";
    disabled: boolean;
    placeholder: string;
    theme: "primary" | "success" | "warning" | "danger" | "info";
    modelValue: string | number;
    clearable: boolean;
    readonly: boolean;
    maxlength: string | number;
    autocomplete: string;
    glitchEffect: boolean;
    scanlineEffect: boolean;
    showPassword: boolean;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        prefix?: (props: {}) => any;
    } & {
        suffix?: (props: {}) => any;
    };
}) & ((app: import("vue").App, ...options: any[]) => any) & Partial<import("vue").ObjectPlugin<any[]>> & Record<string, any>) | ({
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<{
        modelValue?: string | number;
        items?: import("package/components").MenuItem[];
        direction?: import("package/components").MenuDirection;
        theme?: import("package/components").MenuTheme;
        effect?: import("package/components").MenuEffect;
        expandedValues?: (string | number)[];
    }> & Readonly<{
        onSelect?: ((item: import("package/components").MenuItem) => any) | undefined;
        onChange?: ((v: string | number) => any) | undefined;
        "onUpdate:modelValue"?: ((v: string | number) => any) | undefined;
        "onUpdate:expandedValues"?: ((v: (string | number)[]) => any) | undefined;
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
        select: (item: import("package/components").MenuItem) => any;
        change: (v: string | number) => any;
        "update:modelValue": (v: string | number) => any;
        "update:expandedValues": (v: (string | number)[]) => any;
    }, import("vue").PublicProps, {
        effect: import("package/components").MenuEffect;
        theme: import("package/components").MenuTheme;
        direction: import("package/components").MenuDirection;
        items: import("package/components").MenuItem[];
        modelValue: string | number;
        expandedValues: (string | number)[];
    }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<{
        modelValue?: string | number;
        items?: import("package/components").MenuItem[];
        direction?: import("package/components").MenuDirection;
        theme?: import("package/components").MenuTheme;
        effect?: import("package/components").MenuEffect;
        expandedValues?: (string | number)[];
    }> & Readonly<{
        onSelect?: ((item: import("package/components").MenuItem) => any) | undefined;
        onChange?: ((v: string | number) => any) | undefined;
        "onUpdate:modelValue"?: ((v: string | number) => any) | undefined;
        "onUpdate:expandedValues"?: ((v: (string | number)[]) => any) | undefined;
    }>, {}, {}, {}, {}, {
        effect: import("package/components").MenuEffect;
        theme: import("package/components").MenuTheme;
        direction: import("package/components").MenuDirection;
        items: import("package/components").MenuItem[];
        modelValue: string | number;
        expandedValues: (string | number)[];
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{
    modelValue?: string | number;
    items?: import("package/components").MenuItem[];
    direction?: import("package/components").MenuDirection;
    theme?: import("package/components").MenuTheme;
    effect?: import("package/components").MenuEffect;
    expandedValues?: (string | number)[];
}> & Readonly<{
    onSelect?: ((item: import("package/components").MenuItem) => any) | undefined;
    onChange?: ((v: string | number) => any) | undefined;
    "onUpdate:modelValue"?: ((v: string | number) => any) | undefined;
    "onUpdate:expandedValues"?: ((v: (string | number)[]) => any) | undefined;
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    select: (item: import("package/components").MenuItem) => any;
    change: (v: string | number) => any;
    "update:modelValue": (v: string | number) => any;
    "update:expandedValues": (v: (string | number)[]) => any;
}, string, {
    effect: import("package/components").MenuEffect;
    theme: import("package/components").MenuTheme;
    direction: import("package/components").MenuDirection;
    items: import("package/components").MenuItem[];
    modelValue: string | number;
    expandedValues: (string | number)[];
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("vue").ObjectPlugin<any[]> & Record<string, any>) | ({
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<{
        modelValue?: string | number;
        items?: import("package/components").MenuItem[];
        direction?: import("package/components").MenuDirection;
        theme?: import("package/components").MenuTheme;
        effect?: import("package/components").MenuEffect;
        expandedValues?: (string | number)[];
    }> & Readonly<{
        onSelect?: ((item: import("package/components").MenuItem) => any) | undefined;
        onChange?: ((v: string | number) => any) | undefined;
        "onUpdate:modelValue"?: ((v: string | number) => any) | undefined;
        "onUpdate:expandedValues"?: ((v: (string | number)[]) => any) | undefined;
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
        select: (item: import("package/components").MenuItem) => any;
        change: (v: string | number) => any;
        "update:modelValue": (v: string | number) => any;
        "update:expandedValues": (v: (string | number)[]) => any;
    }, import("vue").PublicProps, {
        effect: import("package/components").MenuEffect;
        theme: import("package/components").MenuTheme;
        direction: import("package/components").MenuDirection;
        items: import("package/components").MenuItem[];
        modelValue: string | number;
        expandedValues: (string | number)[];
    }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<{
        modelValue?: string | number;
        items?: import("package/components").MenuItem[];
        direction?: import("package/components").MenuDirection;
        theme?: import("package/components").MenuTheme;
        effect?: import("package/components").MenuEffect;
        expandedValues?: (string | number)[];
    }> & Readonly<{
        onSelect?: ((item: import("package/components").MenuItem) => any) | undefined;
        onChange?: ((v: string | number) => any) | undefined;
        "onUpdate:modelValue"?: ((v: string | number) => any) | undefined;
        "onUpdate:expandedValues"?: ((v: (string | number)[]) => any) | undefined;
    }>, {}, {}, {}, {}, {
        effect: import("package/components").MenuEffect;
        theme: import("package/components").MenuTheme;
        direction: import("package/components").MenuDirection;
        items: import("package/components").MenuItem[];
        modelValue: string | number;
        expandedValues: (string | number)[];
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{
    modelValue?: string | number;
    items?: import("package/components").MenuItem[];
    direction?: import("package/components").MenuDirection;
    theme?: import("package/components").MenuTheme;
    effect?: import("package/components").MenuEffect;
    expandedValues?: (string | number)[];
}> & Readonly<{
    onSelect?: ((item: import("package/components").MenuItem) => any) | undefined;
    onChange?: ((v: string | number) => any) | undefined;
    "onUpdate:modelValue"?: ((v: string | number) => any) | undefined;
    "onUpdate:expandedValues"?: ((v: (string | number)[]) => any) | undefined;
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    select: (item: import("package/components").MenuItem) => any;
    change: (v: string | number) => any;
    "update:modelValue": (v: string | number) => any;
    "update:expandedValues": (v: (string | number)[]) => any;
}, string, {
    effect: import("package/components").MenuEffect;
    theme: import("package/components").MenuTheme;
    direction: import("package/components").MenuDirection;
    items: import("package/components").MenuItem[];
    modelValue: string | number;
    expandedValues: (string | number)[];
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & ((app: import("vue").App, ...options: any[]) => any) & Partial<import("vue").ObjectPlugin<any[]>> & Record<string, any>) | ({
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        height: {
            type: (StringConstructor | NumberConstructor)[];
            default: string;
        };
        maxHeight: {
            type: (StringConstructor | NumberConstructor)[];
            default: string;
        };
        theme: {
            type: StringConstructor;
            default: string;
            validator: (v: string) => boolean;
        };
        size: {
            type: StringConstructor;
            default: string;
            validator: (v: string) => boolean;
        };
        always: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{}>, {
        update: () => void;
        scrollToY: (y: number) => void;
        scrollToX: (x: number) => void;
        wrapRef: import("vue").Ref<HTMLElement | null, HTMLElement | null>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        size: string;
        theme: string;
        height: string | number;
        maxHeight: string | number;
        always: boolean;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        height: {
            type: (StringConstructor | NumberConstructor)[];
            default: string;
        };
        maxHeight: {
            type: (StringConstructor | NumberConstructor)[];
            default: string;
        };
        theme: {
            type: StringConstructor;
            default: string;
            validator: (v: string) => boolean;
        };
        size: {
            type: StringConstructor;
            default: string;
            validator: (v: string) => boolean;
        };
        always: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{}>, {
        update: () => void;
        scrollToY: (y: number) => void;
        scrollToX: (x: number) => void;
        wrapRef: import("vue").Ref<HTMLElement | null, HTMLElement | null>;
    }, {}, {}, {}, {
        size: string;
        theme: string;
        height: string | number;
        maxHeight: string | number;
        always: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    height: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    maxHeight: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    theme: {
        type: StringConstructor;
        default: string;
        validator: (v: string) => boolean;
    };
    size: {
        type: StringConstructor;
        default: string;
        validator: (v: string) => boolean;
    };
    always: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{}>, {
    update: () => void;
    scrollToY: (y: number) => void;
    scrollToX: (x: number) => void;
    wrapRef: import("vue").Ref<HTMLElement | null, HTMLElement | null>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    size: string;
    theme: string;
    height: string | number;
    maxHeight: string | number;
    always: boolean;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
}) & import("vue").ObjectPlugin<any[]> & Record<string, any>) | ({
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        height: {
            type: (StringConstructor | NumberConstructor)[];
            default: string;
        };
        maxHeight: {
            type: (StringConstructor | NumberConstructor)[];
            default: string;
        };
        theme: {
            type: StringConstructor;
            default: string;
            validator: (v: string) => boolean;
        };
        size: {
            type: StringConstructor;
            default: string;
            validator: (v: string) => boolean;
        };
        always: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{}>, {
        update: () => void;
        scrollToY: (y: number) => void;
        scrollToX: (x: number) => void;
        wrapRef: import("vue").Ref<HTMLElement | null, HTMLElement | null>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        size: string;
        theme: string;
        height: string | number;
        maxHeight: string | number;
        always: boolean;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        height: {
            type: (StringConstructor | NumberConstructor)[];
            default: string;
        };
        maxHeight: {
            type: (StringConstructor | NumberConstructor)[];
            default: string;
        };
        theme: {
            type: StringConstructor;
            default: string;
            validator: (v: string) => boolean;
        };
        size: {
            type: StringConstructor;
            default: string;
            validator: (v: string) => boolean;
        };
        always: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{}>, {
        update: () => void;
        scrollToY: (y: number) => void;
        scrollToX: (x: number) => void;
        wrapRef: import("vue").Ref<HTMLElement | null, HTMLElement | null>;
    }, {}, {}, {}, {
        size: string;
        theme: string;
        height: string | number;
        maxHeight: string | number;
        always: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    height: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    maxHeight: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    theme: {
        type: StringConstructor;
        default: string;
        validator: (v: string) => boolean;
    };
    size: {
        type: StringConstructor;
        default: string;
        validator: (v: string) => boolean;
    };
    always: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{}>, {
    update: () => void;
    scrollToY: (y: number) => void;
    scrollToX: (x: number) => void;
    wrapRef: import("vue").Ref<HTMLElement | null, HTMLElement | null>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    size: string;
    theme: string;
    height: string | number;
    maxHeight: string | number;
    always: boolean;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
}) & ((app: import("vue").App, ...options: any[]) => any) & Partial<import("vue").ObjectPlugin<any[]>> & Record<string, any>) | ({
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<{
        percent?: number;
        color?: string;
        pipeWidth?: number;
        pipeHeight?: number;
        perspective?: number;
        rotateX?: number;
        indeterminate?: boolean;
        showText?: boolean;
        glowIntensity?: number;
    }> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        indeterminate: boolean;
        color: string;
        glowIntensity: number;
        showText: boolean;
        percent: number;
        pipeWidth: number;
        pipeHeight: number;
        perspective: number;
        rotateX: number;
    }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<{
        percent?: number;
        color?: string;
        pipeWidth?: number;
        pipeHeight?: number;
        perspective?: number;
        rotateX?: number;
        indeterminate?: boolean;
        showText?: boolean;
        glowIntensity?: number;
    }> & Readonly<{}>, {}, {}, {}, {}, {
        indeterminate: boolean;
        color: string;
        glowIntensity: number;
        showText: boolean;
        percent: number;
        pipeWidth: number;
        pipeHeight: number;
        perspective: number;
        rotateX: number;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{
    percent?: number;
    color?: string;
    pipeWidth?: number;
    pipeHeight?: number;
    perspective?: number;
    rotateX?: number;
    indeterminate?: boolean;
    showText?: boolean;
    glowIntensity?: number;
}> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    indeterminate: boolean;
    color: string;
    glowIntensity: number;
    showText: boolean;
    percent: number;
    pipeWidth: number;
    pipeHeight: number;
    perspective: number;
    rotateX: number;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("vue").ObjectPlugin<any[]> & Record<string, any>) | ({
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<{
        percent?: number;
        color?: string;
        pipeWidth?: number;
        pipeHeight?: number;
        perspective?: number;
        rotateX?: number;
        indeterminate?: boolean;
        showText?: boolean;
        glowIntensity?: number;
    }> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        indeterminate: boolean;
        color: string;
        glowIntensity: number;
        showText: boolean;
        percent: number;
        pipeWidth: number;
        pipeHeight: number;
        perspective: number;
        rotateX: number;
    }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<{
        percent?: number;
        color?: string;
        pipeWidth?: number;
        pipeHeight?: number;
        perspective?: number;
        rotateX?: number;
        indeterminate?: boolean;
        showText?: boolean;
        glowIntensity?: number;
    }> & Readonly<{}>, {}, {}, {}, {}, {
        indeterminate: boolean;
        color: string;
        glowIntensity: number;
        showText: boolean;
        percent: number;
        pipeWidth: number;
        pipeHeight: number;
        perspective: number;
        rotateX: number;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{
    percent?: number;
    color?: string;
    pipeWidth?: number;
    pipeHeight?: number;
    perspective?: number;
    rotateX?: number;
    indeterminate?: boolean;
    showText?: boolean;
    glowIntensity?: number;
}> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    indeterminate: boolean;
    color: string;
    glowIntensity: number;
    showText: boolean;
    percent: number;
    pipeWidth: number;
    pipeHeight: number;
    perspective: number;
    rotateX: number;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & ((app: import("vue").App, ...options: any[]) => any) & Partial<import("vue").ObjectPlugin<any[]>> & Record<string, any>))[];
export default _default;
