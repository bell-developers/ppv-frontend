import createPPVTheme from 'themes/utils/createPPVTheme';
import PuraSerendipiaProperties from './PuraSerendipiaProperties';

const { primitives, overrides, custom } = PuraSerendipiaProperties;

export const PuraSerendipiaLightTheme = createPPVTheme({
    type: 'light',
    primitives,
    overrides,
    custom,
});
