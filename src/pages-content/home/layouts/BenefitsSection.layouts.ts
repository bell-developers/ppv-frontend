import { styled, withStyle } from 'baseui';

export const BenefitsSection = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '5em',
    padding: '5em 0',
    width: '100%',
    maxWidth: '1250px',
    fontSize: 'clamp(12px, 1.2vw, 20px)',
});

export const BenefitsTitleContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5em',
    textAlign: 'center',
    width: '100%',
});

export const BenefitsTitleOverride = {
    Block: {
        style: ({ $theme }) => ({
            fontWeight: 600,
            color: $theme.colors.contentPrimary,
        }),
    },
};

export const BenefitsSubtitleOverride = {
    Block: {
        style: ({ $theme }) => ({
            color: $theme.colors.contentSecondary,
        }),
    },
};

export const BenefitContainer = styled('div', ({ $theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '6.5em',
    padding: '5em 6.5em',
    backgroundColor: $theme.colors.backgroundSecondary,
    [$theme.mediaQuery.medium]: {
        padding: '3vh 6vw',
        gap: '5vw',
    },
    [$theme.mediaQuery.small]: {
        flexDirection: 'column-reverse',
    },
}));

export const BenefitContainerReversed = withStyle(BenefitContainer, {
    flexDirection: 'row-reverse',
});

export const BenefitContent = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5em',
    width: '100%',
});

export const BenefitImageContainer = styled('div', ({ $theme }) => ({
    width: '100%',
    position: 'relative',
    aspectRatio: '1.3 / 1',
    borderRadius: $theme.borders.radius300,
}));
