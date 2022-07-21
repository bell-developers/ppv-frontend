import { createLightTheme, DarkTheme } from 'baseui';
import type { Theme } from 'baseui';

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

type CustomThemeT = Theme & { custom: typeof custom };

export const CustomTheme: CustomThemeT = { ...theme, custom };
