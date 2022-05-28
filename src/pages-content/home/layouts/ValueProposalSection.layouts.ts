import { styled } from 'baseui';
import { BlockOverrides } from 'baseui/block';
import { ButtonOverrides } from 'baseui/button';
import Image from 'next/image';

const ValueProposalSection = styled('div', ({ $theme }) => ({
    display: 'flex',
    alignItems: 'center',
    alignContent: 'center',
    gap: '2.25em',
    width: '100%',
    height: '92vh',
    borderBottom: `1px solid ${$theme.colors.borderOpaque}`,
    boxSizing: 'border-box',
    maxWidth: '1250px',
    fontSize: 'clamp(12px, 1.2vw, 24px)',
    [$theme.mediaQuery.medium]: {
        flexDirection: 'column-reverse',
        justifyContent: 'flex-end',
        textAlign: 'center',
        gap: '5em',
        paddingTop: '1em',
        height: '85vh',
    },
    [$theme.mediaQuery.small]: {
        gap: '2em',
    },
}));

const ValueProposalContent = styled('div', ({ $theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    gap: '1em',
    [$theme.mediaQuery.medium]: {
        alignItems: 'center',
    },
}));

const ValueProposalSubtitleOverride: BlockOverrides = {
    Block: {
        style: ({ $theme }) => ({
            color: $theme.colors.contentSecondary,
            fontWeight: '400',
            width: '80%',
        }),
    },
};

const ValueProposalCTAOverride: ButtonOverrides = {
    BaseButton: {
        style: ({ $theme }) => ({
            backgroundColor: $theme.colors.accent,
            width: '7em',
        }),
    },
};

const ValueProposalImages = styled('div', ({ $theme }) => ({
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    gridTemplateRows: 'repeat(7, 1fr)',
    width: '100%',
    height: '80%',
    [$theme.mediaQuery.medium]: {
        height: '60%',
        width: '90%',
    },
    [$theme.mediaQuery.small]: {
        height: '50%',
        width: '90%',
    },
}));

const ValueProposalImageContainer1 = styled('div', ({ $theme }) => ({
    position: 'relative',
    gridRow: '1 / 7',
    gridColumn: '1 / 5',
}));

const ValueProposalImageContainer2 = styled('div', ({ $theme }) => ({
    position: 'relative',
    gridRow: '2 / 8',
    gridColumn: '4 / 8',
}));

export const ValueProposalImage = styled(Image, ({ $theme }) => ({
    borderRadius: $theme.borders.radius300,
}));

export {
    ValueProposalSection,
    ValueProposalContent,
    ValueProposalSubtitleOverride,
    ValueProposalCTAOverride,
    ValueProposalImages,
    ValueProposalImageContainer1,
    ValueProposalImageContainer2,
};
