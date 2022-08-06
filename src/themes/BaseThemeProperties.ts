import { DarkTheme } from 'baseui';

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

const custom: CustomThemeProperties = {
    pageMaxWidth: '850px',
};

const BaseThemeProperties = {
    primitives,
    overrides,
    custom,
};

export type CustomThemeProperties = {
    pageMaxWidth: string;
};

export default BaseThemeProperties;
