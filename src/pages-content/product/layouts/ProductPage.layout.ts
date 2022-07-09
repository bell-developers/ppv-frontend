import { styled } from 'baseui';

export const ProductPageBody = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    padding: '0 1em',
    maxWidth: '100vw',
    minHeight: '100vh',
    gap: '1em',
});

export const ProductContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    gap: '1.5em',
});

export const ProductImageContainer = styled('div', ({ $theme }) => ({
    width: '100%',
    aspectRatio: '1 / 1.1',
    backgroundColor: 'red',
    borderRadius: $theme.borders.radius300,
    boxShadow: '0px 4px 16px 0px #0000001F',
}));

export const ProductContentContainer = styled('div', () => ({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    gap: '1.5em',
}));

export const ProductSizesSection = styled('div', () => ({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
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
