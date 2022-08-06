import { styled } from 'baseui';

export const BenefitsSectionContainer = styled('div', ({ $theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: '5rem',
    width: `min(${$theme.custom.pageMaxWidth}, 100%)`,
    marginTop: '12vh',
    marginBottom: '5rem',
}));

export const BenefitsSectionTitleContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5em',
    textAlign: 'center',
    width: '100%',
});
