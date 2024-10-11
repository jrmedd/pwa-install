import { ImageResource } from 'web-app-manifest';

export interface IRelatedApp {
    id: string,
    platform: string,
    url: string
}

export interface IWindow extends Window {
    defferedPromptEvent: BeforeInstallPromptEvent | null;
}

type Booleanish = 'true' | 'false';

export interface PWAInstallAttributes {
    ['manual-apple']?: Booleanish;
    ['manual-chrome']?: Booleanish;
    ['disable-chrome']?: Booleanish;
    ['install-description']?: string;
    ['disable-install-description']?: Booleanish;
    ['manifest-url']?: string;
    name?: string;
    description?: string;
    icon?: string;
}

/**
 * Represents an accessible image resource that extends a basic image resource
 * with additional information to enhance accessibility.
 *
 * @interface AccessibleImageResource
 * @extends {ImageResource} - Inherits properties from the ImageResource interface.
 * 
 * @property {string} label - A descriptive label for the image, used to provide 
 * additional context for users with accessibility needs.
 *
 * @see https://w3c.github.io/image-resource/#label-member - For more details 
 * on the 'label' property and its intended use in accessibility.
 */
export interface AccessibleImageResource extends ImageResource {
  label: string;
}

export class Manifest {
    constructor() {
        this.icons = [{ src: '' }];
        this.screenshots = undefined;
        this.short_name = 'PWA';
        this.name = 'Progressive web application';
        this.description = 'Progressive web application';
    }
    short_name: string;
    icons: ImageResource[];
    name: string;
    screenshots?: AccessibleImageResource[];
    description: string;
}
