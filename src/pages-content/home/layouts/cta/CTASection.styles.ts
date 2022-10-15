import themedStyled from 'themes/utils/themedStyled';

export const CTASectionBackground = themedStyled('section', ({ $theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    boxSizing: 'border-box',
    marginTop: '2rem',
    backgroundColor: $theme.colors.backgroundAccent,
    color: $theme.colors.buttonPrimaryText,
}));

export const CTASectionContainer = themedStyled('div', ({ $theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: $theme.custom.pageMaxWidth,
    padding: '2rem 1rem',
    [$theme.mediaQuery.large]: {
        padding: '5rem 0',
        flexDirection: 'row',
    },
    [$theme.mediaQuery.medium]: {
        padding: '3rem 15vw',
    },
    boxSizing: 'border-box',
}));

export const CTASectionProductContainer = themedStyled('div', ({ $theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '1rem',
    width: '70%',
    height: '100%',
    [$theme.mediaQuery.medium]: {
        flexDirection: 'row',
        width: '100%',
    },
}));

export const CTASectionProductImageContainer = themedStyled('div', ({ $theme }) => ({
    position: 'relative',
    aspectRatio: '1 / 1',
    height: '100%',
    minHeight: '6rem',
    borderRadius: $theme.borders.radius200,
    [$theme.mediaQuery.medium]: {
        flexDirection: 'row',
        width: '100%',
        minHeight: '12rem',
    },
}));

export const CTASectionProductContent = themedStyled('div', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: '1rem',
});

export const CTASectionProductPrices = themedStyled('div', {
    display: 'flex',
    gap: '.5rem',
    alignItems: 'center',
    width: '100%',
});
