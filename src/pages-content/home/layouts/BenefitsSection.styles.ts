import themedStyled from 'themes/utils/themedStyled';

export const BenefitsSectionContainer = themedStyled('div', ({ $theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: '5rem',
    width: `min(${$theme.custom.pageMaxWidth}, 100%)`,
    marginTop: '12vh',
    marginBottom: '5rem',
}));

export const BenefitsSectionTitleContainer = themedStyled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5em',
    textAlign: 'center',
    width: '100%',
});
