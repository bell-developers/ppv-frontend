import { Theme } from 'baseui';
import { Font } from 'baseui/themes';

export type CustomTheme = Theme & {
    custom: {
        /** Layout's max width */
        pageMaxWidth: string;
        /** Layout containers' (like Header) width property */
        mainLayoutWidth: string;
        headings: Record<'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6', Font>;
    };
};
