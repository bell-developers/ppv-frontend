import { styled, withStyle } from 'baseui';

export const BenefitsSection = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '5em',
    padding: '5em 0',
    minHeight: '100vh',
    width: '100%',
    maxWidth: '1250px',
    fontSize: 'clamp(13px, 1.2vw, 24px)',
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
    backgroundColor: $theme.colors.backgroundPrimary,
    boxShadow: '0 16px 64px rgba(0, 0, 0, 0.06)',
}));

export const BenefitContainerReversed = withStyle(BenefitContainer, {
    flexDirection: 'row-reverse',
});

export const BenefitContent = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5em',
    width: '23.4em',
});

export const BenefitImage = styled('div', ({ $theme }) => ({
    width: '19.5em',
    height: '16.25em',
    background: $theme.colors.backgroundInverseSecondary,
    borderRadius: $theme.borders.radius300,
}));
