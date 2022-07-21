import { createLightTheme, DarkTheme } from 'baseui';

const primitives = {
    primaryFontFamily: 'Poppins',
};

const overrides = {
    colors: {
        buttonPrimaryFill: DarkTheme.colors.accent,
        buttonPrimaryText: DarkTheme.colors.contentPrimary,
        buttonPrimaryHover: DarkTheme.colors.accent500,
    },
};

export const theme = createLightTheme(primitives, overrides);

const custom = {
    pageMaxWidth: '1200px',
};

export const CustomTheme = { ...theme, ...custom };
