import { createLightTheme } from 'baseui';
import { CustomTheme } from 'themes/CustomTheme.type';
import { Colors } from 'baseui/styles';
import BaseThemeProperties from 'themes/BaseThemeProperties';

const overrides: { colors: Partial<Colors> } = {
    colors: {
        // Content
        contentPrimary: '#1d3557',
        contentSecondary: '#457b9d',
        contentAccent: '#e63946',
        // Backgrounds
        backgroundPrimary: '#f1faee',
        backgroundSecondary: '#DFECDB',
        backgroundTertiary: '#DFECDB',
        backgroundAccent: '#e63946',
        // Others
        buttonPrimaryFill: '#e63946',
        buttonPrimaryHover: '#e63946',
        buttonPrimaryText: '#FFFFFF',
        buttonSecondaryFill: '#DFECDB',
        buttonSecondaryText: '#1d3557',
    },
};

export const StarPlatinumTheme: CustomTheme = {
    ...createLightTheme(BaseThemeProperties.primitives, overrides),
    custom: BaseThemeProperties.custom,
};
