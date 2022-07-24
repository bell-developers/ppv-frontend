import { DarkTheme } from 'baseui';
import type { Theme } from 'baseui/theme';

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

export type CustomTheme = Theme & { custom: CustomThemeProperties };

export default BaseThemeProperties;
