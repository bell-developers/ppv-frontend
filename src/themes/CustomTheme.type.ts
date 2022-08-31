import { Theme } from 'baseui';

export type CustomTheme = Theme & {
    custom: {
        /** Layout's max width */
        pageMaxWidth: string;
        /** Layout containers' (like Header) width property */
        mainLayoutWidth: string;
    };
};
