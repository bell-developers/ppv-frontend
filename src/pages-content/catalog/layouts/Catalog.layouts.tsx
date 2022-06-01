import { styled, useStyletron } from 'baseui';
import { HeadingXSmall } from 'baseui/typography';
import { Product } from 'models/Product.model';
import { FC } from 'react';

export const CatalogBody = styled('div', ({ $theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '3.5em',
    maxWidth: '100vw',
    padding: '0 10em 3.5em 10em',
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
    width: '100%',
    maxWidth: '1250px',
    [$theme.mediaQuery.small]: {
        justifyContent: 'center',
    },
}));

export const CatalogProductsContainer = styled('div', ({ $theme }) => ({
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gridAutoRows: 'auto',
    gap: '2em',
    width: '100%',
    maxWidth: '1250px',
    boxSizing: 'border-box',
    [$theme.mediaQuery.medium]: {
        gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
    },
    [$theme.mediaQuery.small]: {
        padding: '0 1em',
    },
}));
