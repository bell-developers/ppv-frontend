import themedStyled from 'themes/utils/themedStyled';

export const BenefitContainer = themedStyled('div', ({ $theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    paddingTop: 'min(2rem, 10vh)',
    paddingBottom: '1rem',
    backgroundColor: $theme.colors.backgroundSecondary,
    [$theme.mediaQuery.medium]: {
        paddingTop: 'min(4rem, 10vh)',
        paddingBottom: 'min(2rem, 10vh)',
    },
}));

export const BenefitContent = themedStyled('div', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '1.5em',
});

export const BenefitImage = themedStyled('div', ({ $theme }) => ({
    position: 'relative',
    aspectRatio: '1.3 / 1',
    borderRadius: $theme.borders.radius300,
}));
