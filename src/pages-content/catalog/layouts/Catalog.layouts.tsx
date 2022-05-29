import { styled, useStyletron } from 'baseui';
import { HeadingXSmall } from 'baseui/typography';

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
    gridTemplateColumns: 'repeat(auto-fill, minmax(310px, 1fr))',
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

export const CatalogProduct = () => {
    const [css, theme] = useStyletron();

    return (
        <div
            className={css({
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                gap: '0.5em',
                width: '100%',
                textAlign: 'center',
            })}
        >
            <div
                className={css({
                    width: '100%',
                    aspectRatio: '1 / 0.9',
                    backgroundColor: theme.colors.contentSecondary,
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.12)',
                })}
            ></div>
            <div>
                <HeadingXSmall
                    className={css({
                        fontWeight: '400',
                    })}
                >
                    Producto
                </HeadingXSmall>
                <HeadingXSmall
                    className={css({
                        color: theme.colors.contentSecondary,
                        fontWeight: '400',
                    })}
                >
                    1500$
                </HeadingXSmall>
            </div>
        </div>
    );
};
