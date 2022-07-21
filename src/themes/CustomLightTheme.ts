import { createLightTheme } from 'baseui';
import BaseThemeProperties, { CustomTheme } from './BaseThemeProperties';

const { primitives, overrides, custom } = BaseThemeProperties;

export const CustomLightTheme: CustomTheme = {
    ...createLightTheme(primitives, overrides),
    custom,
};
