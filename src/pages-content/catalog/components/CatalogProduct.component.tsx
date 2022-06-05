import { HeadingXSmall } from 'baseui/typography';
import { Product } from 'models/Product.model';
import { FC } from 'react';
import { useStyletron } from 'baseui';
import Image from 'next/image';

type CatalogProductProps = {
    productData: Product;
};

export const CatalogProduct: FC<CatalogProductProps> = props => {
    const { productData } = props;
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
                    position: 'relative',
                    width: '100%',
                    aspectRatio: '1 / 0.9',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.12)',
                })}
            >
                <Image
                    src={'data:image/jpg;base64,' + productData.images[0].slice(2, -1)}
                    layout='fill'
                />
            </div>
            <div>
                <HeadingXSmall
                    className={css({
                        fontWeight: '400',
                    })}
                >
                    {productData.name}
                </HeadingXSmall>
                <HeadingXSmall
                    className={css({
                        color: theme.colors.contentSecondary,
                        fontWeight: '400',
                    })}
                >
                    {productData.price}$
                </HeadingXSmall>
            </div>
        </div>
    );
};
