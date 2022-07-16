import { styled } from 'baseui';
import { Button } from 'baseui/button';
import { DisplaySmall } from 'baseui/typography';

export const ProductPageBody = styled('div', ({ $theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    padding: '0 10em 1em 10em',
    maxWidth: '100vw',
    minHeight: '100vh',
    boxSizing: 'border-box',
    gap: '2.5em',
    [$theme.mediaQuery.medium]: {
        padding: '0 13vw',
        alignItems: 'center',
    },
    [$theme.mediaQuery.small]: {
        padding: '0 1em',
    },
}));

export const ProductContainer = styled('div', ({ $theme }) => ({
    display: 'flex',
    width: '100%',
    borderRadius: $theme.borders.radius500,
    ...$theme.borders.border400,
    boxSizing: 'border-box',
    [$theme.mediaQuery.medium]: {
        flexDirection: 'column',
        width: '60vw',
    },
}));

export const ProductImageContainer = styled('div', ({ $theme }) => ({
    width: '100%',
    aspectRatio: '1 / 1',
    backgroundColor: $theme.colors.backgroundInverseSecondary,
    borderTopLeftRadius: $theme.borders.radius500,
    borderBottomLeftRadius: $theme.borders.radius500,
    [$theme.mediaQuery.medium]: {
        borderTopLeftRadius: $theme.borders.radius500,
        borderTopRightRadius: $theme.borders.radius500,
        borderBottomLeftRadius: 0,
    },
}));

export const ProductContentContainer = styled('div', ({ $theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
    padding: '1.5em',
    boxSizing: 'border-box',
    [$theme.mediaQuery.medium]: {
        gap: '2em',
    },
}));

export const ProductNameAndPrice = styled('div', () => ({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: 'fit-content',
    gap: '1.5em',
}));

export const ProductPrice = styled(DisplaySmall, ({ $theme }) => ({
    color: $theme.colors.accent,
}));

export const ProductSizesSection = styled('div', () => ({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: 'fit-content',
    gap: '0.5em',
}));

export const ProductSizesContainer = styled('div', () => ({
    display: 'flex',
    width: '100%',
    gap: '.75em',
}));

export const ProductSize = styled('div', ({ $theme }) => ({
    display: 'flex',
    placeContent: 'center',
    placeItems: 'center',
    width: '2.5em',
    height: '2.5em',
    backgroundColor: $theme.colors.backgroundTertiary,
    borderRadius: $theme.borders.radius300,
    fontFamily: 'Poppins, sans-serif',
}));

export const ProductCTA = styled(Button, {
    gridColumn: '1 / 3',
});
