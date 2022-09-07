import { StyleObject } from 'styletron-standard';
import { CustomTheme } from 'themes/CustomTheme.type';
import themedStyled from 'themes/utils/themedStyled';

export const CatalogBody = themedStyled('div', ({ $theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '3.5em',
    maxWidth: '100vw',
    minHeight: '100vh',
    fontSize: 'clamp(16px, 1.2vw, 24px)',
    backgroundColor: $theme.colors.backgroundPrimary,
    [$theme.mediaQuery.small]: {
        gap: '2.5em',
    },
}));

export const CatalogTitleContainer = themedStyled('div', ({ $theme }) => ({
    display: 'flex',
    width: $theme.custom.mainLayoutWidth,
    color: $theme.colors.contentPrimary,
    justifyContent: 'center',
    paddingBlock: '3.5rem',
    boxSizing: 'border-box',
    [$theme.mediaQuery.large]: {
        justifyContent: 'space-between',
        padding: '0',
    },
    [$theme.mediaQuery.medium]: {
        padding: '0 4em 3.5em 4em',
    },
    [$theme.mediaQuery.small]: {
        padding: '0 1em 3.5em 1em',
        gap: '2.5em',
    },
}));

export const CatalogProductsContainer = themedStyled('div', ({ $theme }) => ({
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
    gridAutoRows: 'auto',
    gap: '2em',
    width: `100%`,
    minHeight: '55vh',
    boxSizing: 'border-box',
    padding: '0 1em',
    [$theme.mediaQuery.large]: {
        gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))',
        padding: 0,
        width: `min(1000px, 80%)`,
    },
}));

export const CatalogSpinnerContainer = themedStyled('div', {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translateY(-50%) translateX(-50%)',
});

export const CatalogErrorMessageStyles = (theme: CustomTheme): StyleObject => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1em',
    position: 'absolute',
    top: '50%',
    left: '0',
    right: '0',
    margin: '0 auto',
    maxWidth: theme.custom.pageMaxWidth,
    transform: 'translateY(-50%)',
});
