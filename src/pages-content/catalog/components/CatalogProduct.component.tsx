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
                    aspectRatio: '1 / 1',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.06)',
                    borderRadius: '.5em',
                    ...theme.borders.border200,
                })}
            >
                <Image
                    src={productData.images[0]}
                    layout='fill'
                    className={css({
                        borderRadius: '.5em',
                        objectFit: 'cover',
                    })}
                    alt={productData.name}
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
