import themedStyled from 'themes/utils/themedStyled';

export const ClientsOpinionSectionContainer = themedStyled('section', ({ $theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '100vw',
    width: $theme.custom.pageMaxWidth,
    padding: '2rem 1rem',
    color: $theme.colors.contentPrimary,
    boxSizing: 'border-box',
    textAlign: 'center',
    [$theme.mediaQuery.large]: {
        padding: '4rem 0',
    },
    [$theme.mediaQuery.medium]: {
        padding: '3rem 15vw',
    },
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
    fontWeight: '400',
};

export const ClientsOpinionSectionCardsContainer = themedStyled('div', {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '1rem',
    width: '100%',
    marginTop: '2rem',
});

export const ClientsOpinionSectionCard = themedStyled('div', ({ $theme }) => ({
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    flex: '1 1 225px',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1rem',
    textAlign: 'center',
    marginTop: '1.5rem',
    width: 'min(120px, 100%)',
    padding: '3rem 1.5rem 1.5rem 1.5rem',
    backgroundColor: $theme.colors.backgroundSecondary,
}));

export const ClientsOpinionSectionCardImageContainer = themedStyled(
    'div',
    ({ $theme }) => ({
        position: 'absolute',
        top: '-1.5rem',
        height: '3.5rem',
        width: '3.5rem',
        borderRadius: '50%',
        backgroundColor: $theme.colors.backgroundSecondary,
        border: '4px solid ' + $theme.colors.backgroundSecondary,
        boxSizing: 'border-box',
    })
);

export const ClientsOpinionSectionCardImageStyles = {
    borderRadius: '50%',
};
