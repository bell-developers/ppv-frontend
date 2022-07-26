import { styled, withStyle } from 'baseui';
import { Spinner } from 'baseui/spinner';

export const CatalogBody = styled('div', ({ $theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '3.5em',
    maxWidth: '100vw',
    minHeight: '100vh',
    padding: '0 1em 3.5em 1em',
    fontSize: 'clamp(16px, 1.2vw, 24px)',
    backgroundColor: $theme.colors.backgroundPrimary,
    [$theme.mediaQuery.medium]: {
        padding: '0 4em 3.5em 4em',
    },
    [$theme.mediaQuery.small]: {
        padding: '0 1em 3.5em 1em',
        gap: '2.5em',
    },
}));

export const CatalogTitleContainer = styled('div', ({ $theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    width: `min(${$theme.custom.pageMaxWidth}, 100%)`,
    color: $theme.colors.contentPrimary,
    [$theme.mediaQuery.small]: {
        justifyContent: 'center',
    },
}));

export const CatalogProductsContainer = styled('div', ({ $theme }) => ({
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
    gridAutoRows: 'auto',
    gap: '2em',
    width: `100%`,
    boxSizing: 'border-box',
    [$theme.mediaQuery.large]: {
        gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))',
        padding: 0,
        width: `min(1000px, 80%)`,
    },
    [$theme.mediaQuery.small]: {
        padding: '0 1em',
    },
}));

export const CatalogSpinner = withStyle(Spinner, ({ $theme }) => ({
    position: 'absolute',
    top: '50%',
    left: '0',
    right: '0',
    transform: 'translateY(-50%)',
    margin: '0 auto',
    borderTopColor: $theme.colors.primary,
    width: '4em',
    height: '4em',
}));

export const CatalogErrorContainer = styled('div', ({ $theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1em',
    position: 'absolute',
    top: '50%',
    left: '0',
    right: '0',
    margin: '0 auto',
    maxWidth: $theme.custom.pageMaxWidth,
    transform: 'translateY(-50%)',
    textAlign: 'center',
}));
