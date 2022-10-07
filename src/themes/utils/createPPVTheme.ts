import { createLightTheme, Primitives, createDarkTheme } from 'baseui';
import BaseThemeProperties from 'themes/BaseThemeProperties';
import { CustomTheme } from 'themes/CustomTheme.type';

type CreatePPVThemeEntry = {
    type: 'dark' | 'light';
    primitives?: Partial<Primitives>;
    overrides?: Record<string, unknown>;
    custom?: Partial<CustomTheme['custom']>;
};

type CreatePPVTheme = (newThemeData: CreatePPVThemeEntry) => CustomTheme;

/**
 * Creates a new theme for the app. Use always this function to create custom themes.
 * @param newThemeData Your new theme data.
 * @returns A custom theme ready to use.
 */
const createPPVTheme: CreatePPVTheme = newThemeData => {
    const { type, primitives = {}, overrides = {}, custom = {} } = newThemeData;
    if (type === 'light')
        return {
            ...createLightTheme(
                { ...BaseThemeProperties.primitives, ...primitives },
                { ...BaseThemeProperties.overrides, ...overrides }
            ),
            custom: { ...BaseThemeProperties.custom, ...custom },
        };
    else
        return {
            ...createDarkTheme(
                { ...BaseThemeProperties.primitives, ...primitives },
                { ...BaseThemeProperties.overrides, ...overrides }
            ),
            custom: { ...BaseThemeProperties.custom, ...custom },
        };
};

export default createPPVTheme;
