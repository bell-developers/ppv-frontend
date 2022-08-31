import themedStyled from 'themes/utils/themedStyled';

export const HomeBody = themedStyled('div', ({ $theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '100vw',
    minHeight: '100vh',
    backgroundColor: $theme.colors.backgroundPrimary,
}));
