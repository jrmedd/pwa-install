import { LitElement } from 'lit';
import { Manifest } from '../types/types';
export default class PWAGalleryElement extends LitElement {
    screenshots: Manifest['screenshots'];
    theme: 'default' | 'apple_desktop' | 'apple_mobile';
    static get styles(): CSSStyleSheet;
    calcScrollSize: () => {
        scroller: Element;
        item: HTMLImageElement;
    } | undefined;
    scrollToNextPage: () => void;
    scrollToPrevPage: () => void;
    private _init;
    firstUpdated(): void;
    connectedCallback(): void;
    render(): import("lit").TemplateResult<1>;
}
