import themedStyled from 'themes/utils/themedStyled';

export const FooterContainer = themedStyled('div', ({ $theme }) => ({
    display: 'block',
    width: '100%',
    paddingBlock: '4rem',
    backgroundColor: $theme.colors.backgroundSecondary,
}));

export const FooterItem = themedStyled('div', () => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

export const FooterNav = themedStyled('nav', () => ({
    display: 'flex',
    flexDirection: 'column',
    gap: '.5rem',
    textAlign: 'center',
}));

export const FooterSocialMedia = themedStyled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '.5rem',
});
