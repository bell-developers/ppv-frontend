import { styled } from 'baseui';
import { BlockOverrides } from 'baseui/block';
import { ButtonOverrides } from 'baseui/button';

const ValueProposalSection = styled('div', ({ $theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '2.5em',
    height: '100vh',
    width: '100%',
    borderBottom: `1px solid ${$theme.colors.borderOpaque}`,
    boxSizing: 'border-box',
    maxWidth: '65em',
}));

const ValueProposalContent = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    width: '25em',
    gap: '1em',
});

const ValueProposalSubtitleOverride: BlockOverrides = {
    Block: {
        style: ({ $theme }) => ({
            color: $theme.colors.contentSecondary,
            fontWeight: '400',
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
    width: '17em',
    height: '27.5625em',
    background: 'grey',
    borderRadius: $theme.borders.radius300,
}));

const FakeImage2 = styled('div', ({ $theme }) => ({
    width: '17em',
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
