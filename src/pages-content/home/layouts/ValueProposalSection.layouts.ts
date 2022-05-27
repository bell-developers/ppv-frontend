import { styled } from 'baseui';
import { BlockOverrides } from 'baseui/block';
import { ButtonOverrides } from 'baseui/button';

const ValueProposalSection = styled('div', ({ $theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '2.25em',
    minHeight: '100vh',
    width: '100%',
    borderBottom: `1px solid ${$theme.colors.borderOpaque}`,
    boxSizing: 'border-box',
    maxWidth: '1250px',
    fontSize: 'clamp(14px, 1.2vw, 24px)',
}));

const ValueProposalContent = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    gap: '1em',
});

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

const ValueProposalImages = styled('div', {
    position: 'relative',
    display: 'flex',
    marginRight: '-4em',
    marginTop: '-4em',
});

const FakeImage1 = styled('div', ({ $theme }) => ({
    minWidth: '16em',
    width: '100%',
    height: '27.5625em',
    background: 'grey',
    borderRadius: $theme.borders.radius300,
}));

const FakeImage2 = styled('div', ({ $theme }) => ({
    minWidth: '16em',
    width: '100%',
    height: '27.5625em',
    background: 'red',
    borderRadius: $theme.borders.radius300,
    position: 'relative',
    top: '4em',
    left: '-4em',
}));

export {
    ValueProposalSection,
    ValueProposalContent,
    ValueProposalSubtitleOverride,
    ValueProposalCTAOverride,
    ValueProposalImages,
    FakeImage1,
    FakeImage2,
};
