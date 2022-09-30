import themedStyled from 'themes/utils/themedStyled';

export const ClientsOpinionSectionContainer = themedStyled('section', ({ $theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    width: $theme.custom.pageMaxWidth,
    padding: '4rem 0',
}));

export const ClientsOpinionSectionHeadingStyles = {
    width: '100%',
    textAlign: 'center',
    fontWeight: '600',
};

export const ClientsOpinionSectionSubHeadingStyles = {
    width: '100%',
    textAlign: 'center',
    marginTop: '1rem',
};
