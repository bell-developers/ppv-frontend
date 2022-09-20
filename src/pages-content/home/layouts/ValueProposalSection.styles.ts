import themedStyled from 'themes/utils/themedStyled';
import themedWithStyle from 'themes/utils/themedWithStyle';

export const ValueProposalMain = themedStyled('section', ({ $theme }) => ({
    width: $theme.custom.mainLayoutWidth,
    height: 'fit-content',
    marginTop: $theme.sizing.scale950,
    padding: '0 1em',
    boxSizing: 'border-box',
    [$theme.mediaQuery.large]: {
        padding: '0 0',
    },
    [$theme.mediaQuery.medium]: {
        padding: '0 15vw',
    },
}));

export const ValueProposalContent = themedStyled('div', ({ $theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: '1em',
    textAlign: 'center',
    alignItems: 'center',
    [$theme.mediaQuery.large]: {
        textAlign: 'start',
        alignItems: 'start',
    },
}));

export const ValueProposalImages = themedStyled('div', ({ $theme }) => ({
    display: 'grid',
    gridTemplateColumns: 'repeat(9, 1fr)',
    gridTemplateRows: 'repeat(8, 1fr)',
    width: '100%',
    margin: 'auto',
    [$theme.mediaQuery.large]: {
        width: '100%',
        minHeight: '400px',
    },
    [$theme.mediaQuery.medium]: {
        width: '80%',
        minHeight: '250px',
    },
    [$theme.mediaQuery.small]: {
        width: '100%',
    },
}));

const ValueProposalImageContainer = themedStyled('div', () => ({
    position: 'relative',
    width: '90%',
    height: '100%',
    aspectRatio: '1 / 1',
    transition: 'transform .3s ease',
    ':hover': {
        transform: 'scale(1.05)',
    },
}));

export const ValueProposalImageContainer1 = themedWithStyle(ValueProposalImageContainer, {
    gridColumn: '1 / 6',
    gridRow: '1 / 8',
});

export const ValueProposalImageContainer2 = themedWithStyle(ValueProposalImageContainer, {
    gridColumn: '5 / 10',
    gridRow: '2 / 9',
});
