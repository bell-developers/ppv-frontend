import { createDarkTheme } from 'baseui';
import BaseThemeProperties, { CustomTheme } from './BaseThemeProperties';

const { primitives, overrides, custom } = BaseThemeProperties;

export const CustomDarkTheme: CustomTheme = {
    ...createDarkTheme(primitives, overrides),
    custom,
};
