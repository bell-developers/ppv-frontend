import { createLightTheme } from 'baseui';
import BaseThemeProperties from 'themes/BaseThemeProperties';
import { CustomTheme } from 'themes/CustomTheme.type';

const { primitives, overrides, custom } = BaseThemeProperties;

export const CustomLightTheme: CustomTheme = {
    ...createLightTheme(primitives, overrides),
    custom,
};
