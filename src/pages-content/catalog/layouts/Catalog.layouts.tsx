import { styled, useStyletron } from 'baseui';
import { HeadingXSmall } from 'baseui/typography';

export const CatalogBody = styled('div', ({ $theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '3.5em',
    maxWidth: '100vw',
    padding: '0 10em 3.5em 10em',
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
    maxWidth: '1250px',
});

export const CatalogProductsContainer = styled('div', {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(19.875em, 1fr))',
    gridAutoRows: 'auto',
    gap: '2em',
    width: '100%',
    maxWidth: '1250px',
});

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
