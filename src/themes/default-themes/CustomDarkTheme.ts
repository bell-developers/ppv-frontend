import { createDarkTheme } from 'baseui';
import BaseThemeProperties from '../BaseThemeProperties';
import { CustomTheme } from '../CustomTheme.type';

const { primitives, overrides, custom } = BaseThemeProperties;

export const CustomDarkTheme: CustomTheme = {
    ...createDarkTheme(primitives, overrides),
    custom,
};
