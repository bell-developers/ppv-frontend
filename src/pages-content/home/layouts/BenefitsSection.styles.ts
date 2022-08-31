import themedStyled from 'themes/utils/themedStyled';

export const BenefitsSectionContainer = themedStyled('div', ({ $theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: '5rem',
    width: $theme.custom.mainLayoutWidth,
    marginTop: '12vh',
    marginBottom: '5rem',
    padding: '0 1em',
    boxSizing: 'border-box',
    [$theme.mediaQuery.large]: {
        padding: '0 0',
    },
    [$theme.mediaQuery.medium]: {
        padding: '0 15vw',
    },
}));

export const BenefitsSectionTitleContainer = themedStyled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5em',
    textAlign: 'center',
    width: '100%',
});
