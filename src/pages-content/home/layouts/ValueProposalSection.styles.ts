import { styled, withStyle } from 'baseui';

export const ValueProposalMain = styled('section', ({ $theme }) => ({
    width: `min(${$theme.custom.pageMaxWidth}, 100%)`,
    height: 'fit-content',
    marginTop: $theme.sizing.scale950,
}));

export const ValueProposalContent = styled('div', ({ $theme }) => ({
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

export const ValueProposalImages = styled('div', ({ $theme }) => ({
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

const ValueProposalImageContainer = styled('div', ({ $theme }) => ({
    position: 'relative',
    width: '100%',
    height: '100%',
    backgroundColor: $theme.colors.backgroundSecondary,
    borderRadius: $theme.borders.radius400,
    aspectRatio: '1.3 / 1.7',
    transition: 'transform .3s ease',
    ':hover': {
        transform: 'scale(1.1)',
    },
}));

export const ValueProposalImageContainer1 = withStyle(ValueProposalImageContainer, {
    gridColumn: '1 / 6',
    gridRow: '1 / 8',
});

export const ValueProposalImageContainer2 = withStyle(ValueProposalImageContainer, {
    gridColumn: '5 / 10',
    gridRow: '2 / 9',
});
