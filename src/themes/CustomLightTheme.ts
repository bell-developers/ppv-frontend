import { createLightTheme } from 'baseui';
import BaseThemeProperties from './BaseThemeProperties';
import { CustomTheme } from './CustomTheme.type';

const { primitives, overrides, custom } = BaseThemeProperties;

export const CustomLightTheme: CustomTheme = {
    ...createLightTheme(primitives, overrides),
    custom,
};
