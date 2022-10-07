import { CustomTheme } from 'themes/CustomTheme.type';
import { Colors } from 'baseui/styles';
import createPPVTheme from 'themes/utils/createPPVTheme';

const overrides: { colors: Partial<Colors> } = {
    colors: {
        // Content
        contentPrimary: '#2f3e46',
        contentSecondary: '#354f52',
        contentAccent: '#52796f',
        // Backgrounds
        backgroundPrimary: '#cad2c5',
        backgroundSecondary: '#AFB8AA',
        backgroundTertiary: '#AFB8AA',
        backgroundAccent: '#52796f',
        // Others
        buttonPrimaryFill: '#52796f',
        buttonPrimaryHover: '#558277',
        buttonPrimaryText: '#FFFFFF',
        buttonSecondaryFill: '#AFB8AA',
        buttonSecondaryText: '#2f3e46',
    },
};

export const GreenDayTheme: CustomTheme = createPPVTheme({
    type: 'light',
    overrides,
});
