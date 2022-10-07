import { Colors } from 'baseui/styles';
import createPPVTheme from 'themes/utils/createPPVTheme';

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

export const StarPlatinumTheme = createPPVTheme({ type: 'light', overrides });
