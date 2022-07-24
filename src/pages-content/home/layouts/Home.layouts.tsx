import { styled } from 'baseui';

export const HomeBody = styled('div', ({ $theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '100vw',
    minHeight: '100vh',
    padding: '0 1em',
    backgroundColor: $theme.colors.backgroundPrimary,
    [$theme.mediaQuery.large]: {
        padding: '0 12em',
    },
    [$theme.mediaQuery.medium]: {
        padding: '0 15vw',
    },
    [$theme.mediaQuery.small]: {
        padding: '0 1em',
    },
}));
