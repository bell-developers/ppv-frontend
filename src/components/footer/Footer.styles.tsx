import themedStyled from 'themes/utils/themedStyled';

export const FooterContainer = themedStyled('div', ({ $theme }) => ({
    width: '100%',
    height: '10rem',
    backgroundColor: $theme.colors.accent,
}));
