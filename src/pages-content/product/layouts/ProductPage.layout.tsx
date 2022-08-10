import { Button } from 'baseui/button';
import { DisplaySmall } from 'baseui/typography';
import themedStyled from 'themes/utils/themedStyled';

export const ProductPageBody = themedStyled('div', ({ $theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    padding: '0 10em 1em 10em',
    minHeight: '100vh',
    boxSizing: 'border-box',
    fontSize: 'clamp(12px, 1.2vw, 20px)',
    gap: '2.5em',
    [$theme.mediaQuery.medium]: {
        padding: '0 13vw',
        alignItems: 'center',
    },
    [$theme.mediaQuery.small]: {
        padding: '0 1em',
    },
}));

export const ProductContainer = themedStyled('div', ({ $theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxWidth: `min(${$theme.custom.pageMaxWidth}, 100%)`,
    borderRadius: $theme.borders.radius500,
    ...$theme.borders.border400,
    boxSizing: 'border-box',
    [$theme.mediaQuery.large]: {
        flexDirection: 'row',
        width: '100%',
    },
    [$theme.mediaQuery.medium]: {
        width: '60vw',
    },
    [$theme.mediaQuery.small]: {
        width: '100%',
    },
}));

export const ProductImageContainer = themedStyled('div', ({ $theme }) => ({
    width: '100%',
    aspectRatio: '1 / 1',
    backgroundColor: $theme.colors.backgroundInverseSecondary,
    borderTopLeftRadius: $theme.borders.radius500,
    borderTopRightRadius: $theme.borders.radius500,
    borderBottomLeftRadius: 0,
    [$theme.mediaQuery.large]: {
        borderTopLeftRadius: $theme.borders.radius500,
        borderTopRightRadius: 0,
        borderBottomLeftRadius: $theme.borders.radius500,
    },
}));

export const ProductContentContainer = themedStyled('div', ({ $theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
    minHeight: 'fit-content',
    padding: '1.5em',
    boxSizing: 'border-box',
    [$theme.mediaQuery.medium]: {
        gap: '2em',
    },
}));

export const ProductNameAndPrice = themedStyled('div', () => ({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: 'fit-content',
    gap: '1.5em',
}));

export const ProductPrice = themedStyled(DisplaySmall, ({ $theme }) => ({
    color: $theme.colors.accent,
}));

export const ProductSizesSection = themedStyled('div', () => ({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: 'fit-content',
    gap: '0.5em',
}));

export const ProductSizesContainer = themedStyled('div', () => ({
    display: 'flex',
    width: '100%',
    gap: '.75em',
}));

export const ProductSize = themedStyled('div', ({ $theme }) => ({
    display: 'flex',
    placeContent: 'center',
    placeItems: 'center',
    width: '2.5em',
    height: '2.5em',
    backgroundColor: $theme.colors.backgroundTertiary,
    borderRadius: $theme.borders.radius300,
    fontFamily: 'Poppins, sans-serif',
}));

export const ProductCTA = themedStyled(Button, {
    gridColumn: '1 / 3',
});
