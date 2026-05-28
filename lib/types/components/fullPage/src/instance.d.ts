import type FullPage from './fullPage.vue';
export type FullPageInstance = InstanceType<typeof FullPage>;
export interface FullPageItem {
    title: string;
    content?: string;
}
