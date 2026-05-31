type __VLS_Props = {
    percentage?: number;
    theme?: 'neon' | 'hologram' | 'terminal' | 'matrix';
    animated?: boolean;
    showPercentage?: boolean;
    percentagePosition?: 'inside' | 'outside';
    showStatus?: boolean;
    indeterminate?: boolean;
    direction?: 'horizontal' | 'vertical';
    color?: string;
    height?: number;
    glowIntensity?: number;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
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
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
