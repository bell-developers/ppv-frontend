import themedStyled from 'themes/utils/themedStyled';

export const CTASectionBackground = themedStyled('section', ({ $theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    boxSizing: 'border-box',
    backgroundColor: $theme.colors.backgroundAccent,
    color: $theme.colors.buttonPrimaryText,
}));

export const CTASectionContainer = themedStyled('div', ({ $theme }) => ({
    display: 'flex',
    gap: '2rem',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: $theme.custom.pageMaxWidth,
    padding: '5rem 0',
}));

export const CTASectionProductContainer = themedStyled('div', {
    display: 'flex',
    gap: '1rem',
    width: '100%',
    height: '100%',
});

export const CTASectionProductImageContainer = themedStyled('div', ({ $theme }) => ({
    position: 'relative',
    aspectRatio: '1 / 1',
    height: '100%',
    minHeight: '12rem',
    borderRadius: $theme.borders.radius200,
}));

export const CTASectionProductContent = themedStyled('div', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
});

export const CTASectionProductPrices = themedStyled('div', {
    display: 'flex',
    gap: '.5rem',
    alignItems: 'center',
});
