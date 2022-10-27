import { DarkTheme } from 'baseui';
import HeadingStyles from 'styles/HeadingStyles';
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

const custom: CustomTheme['custom'] = {
    pageMaxWidth: '900px',
    mainLayoutWidth: `min(900px, 100%)`,
    headings: HeadingStyles(primitives),
};

const BaseThemeProperties = {
    primitives,
    overrides,
    custom,
};

export default BaseThemeProperties;
