import { Theme } from 'baseui';

export type CustomTheme = Theme & {
    custom: {
        pageMaxWidth: string;
    };
};
