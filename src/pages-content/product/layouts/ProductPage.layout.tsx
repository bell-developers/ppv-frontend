import { Button } from 'baseui/button';
import { DisplaySmall } from 'baseui/typography';
import { StyleObject } from 'styletron-standard';
import themedStyled from 'themes/utils/themedStyled';

export const ProductPageBody = themedStyled('div', ({ $theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    boxSizing: 'border-box',
    backgroundColor: $theme.colors.backgroundPrimary,
    gap: '2.5em',
    [$theme.mediaQuery.medium]: {
        alignItems: 'center',
    },
}));

export const ProductContainer = themedStyled('div', ({ $theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    width: '90%',
    borderRadius: $theme.borders.radius500,
    ...$theme.borders.border400,
    boxSizing: 'border-box',
    margin: 'auto',
    [$theme.mediaQuery.medium]: {
        width: '60vw',
    },
    '@media (min-width: 850px)': {
        flexDirection: 'row',
        width: $theme.custom.mainLayoutWidth,
    },
}));

export const ProductMessagesContainerStyles: Partial<StyleObject> = {
    minHeight: '70vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
};

export const ProductErrorMessageContainer = {
    ...ProductMessagesContainerStyles,
};

export const ProductSpinnerContainer = themedStyled(
    'div',
    ProductMessagesContainerStyles
);

export const ProductImageContainer = themedStyled('div', ({ $theme }) => ({
    width: '100%',
    aspectRatio: '1 / 1',
    backgroundColor: $theme.colors.backgroundInverseSecondary,
    borderTopLeftRadius: $theme.borders.radius500,
    borderTopRightRadius: $theme.borders.radius500,
    borderBottomLeftRadius: 0,
    position: 'relative',
    '@media (min-width: 850px)': {
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
    marginTop: '2rem',
    gridColumn: '1 / 3',
});
