import { createLightTheme } from 'baseui';
import { CustomTheme } from 'themes/CustomTheme.type';
import PuraSerendipiaProperties from './PuraSerendipiaProperties';

const { primitives, overrides, custom } = PuraSerendipiaProperties;

export const PuraSerendipiaLightTheme: CustomTheme = {
    ...createLightTheme(primitives, overrides),
    custom,
};
