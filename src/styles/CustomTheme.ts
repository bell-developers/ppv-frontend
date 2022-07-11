import { createDarkTheme, createTheme } from 'baseui';

const primitives = {
    primaryFontFamily: 'Poppins',
};

const overrides = {
    mediaQuery: {
        small: '@media screen and (max-width: 480px)',
        medium: '@media screen and (max-width: 960px)',
        large: '@media screen and (max-width: 1328px)',
    },
    typography: {
        DisplayMedium: {
            fontSize: '3.25em',
            fontWeight: '600',
            lineHeight: '1.23em',
        },
        DisplaySmall: {
            fontSize: '2.75em',
            lineHeight: '1.18em',
        },
        HeadingXSmall: {
            fontSize: '1.25em',
            lineHeight: '1.4em',
        },
        LabelLarge: {
            fontSize: '1.125em',
            lineHeight: '1.33em',
        },
        HeadingXLarge: {
            fontSize: '2.25em',
            lineHeight: '1.22em',
        },
        ParagraphLarge: {
            fontSize: '1.125em',
            lineHeight: '1.55em',
        },
    },
};

// export const CustomTheme = createTheme(primitives, overrides);
export const CustomTheme = createDarkTheme(primitives, overrides);
