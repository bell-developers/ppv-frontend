import { Colors } from 'baseui/styles';
import BaseThemeProperties from 'themes/BaseThemeProperties';

const overrides: { colors: Partial<Colors> } = {
    colors: {
        // Content
        contentPrimary: '#5B3610',
        contentSecondary: '#86613C',
        contentAccent: '#7B447B',
        // Backgrounds
        backgroundPrimary: '#F4E4D4',
        backgroundSecondary: '#F0DBC6',
        backgroundTertiary: '#F3D1AF',
        backgroundAccent: '#7B447B',
        // Others
        buttonPrimaryFill: '#933693',
        buttonPrimaryHover: '#A64CA6',
        buttonPrimaryText: '#FFFFFF',
    },
};

const PuraSerendipiaProperties = {
    ...BaseThemeProperties,
    overrides,
};

export default PuraSerendipiaProperties;
