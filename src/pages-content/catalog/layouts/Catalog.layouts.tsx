import { styled } from 'baseui';

export const CatalogBody = styled('div', ({ $theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '100vw',
    minHeight: '100vh',
    padding: '0 10em',
    backgroundColor: $theme.colors.backgroundPrimary,
    [$theme.mediaQuery.medium]: {
        padding: '0 4em',
    },
    [$theme.mediaQuery.small]: {
        padding: '0 1em',
    },
}));

export const CatalogTitleContainer = styled('div', {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
});
