import { DarkTheme } from 'baseui';
import { CustomTheme } from './CustomTheme.type';

const primitives = {
    primaryFontFamily: 'Inter',
};

const overrides = {
    colors: {
        buttonPrimaryFill: DarkTheme.colors.accent,
        buttonPrimaryText: DarkTheme.colors.contentPrimary,
        buttonPrimaryHover: DarkTheme.colors.accent500,
    },
};

const custom: Partial<CustomTheme['custom']> = {
    pageMaxWidth: '850px',
    mainLayoutWidth: `min(850px, 100%)`,
};

const BaseThemeProperties = {
    primitives,
    overrides,
    custom,
};

export default BaseThemeProperties;
