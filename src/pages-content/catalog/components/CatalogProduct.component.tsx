import { HeadingXSmall } from 'baseui/typography';
import { Product } from 'models/Product.model';
import { FC } from 'react';
import { useStyletron } from 'baseui';
import Image from 'next/image';
import Link from 'next/link';

type CatalogProductProps = {
    productData: Product;
};

export const CatalogProduct: FC<CatalogProductProps> = props => {
    const { productData } = props;
    const [css, theme] = useStyletron();

    return (
        <Link href={'/producto/' + productData.id}>
            <div
                className={css({
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                    gap: '0.5em',
                    width: '100%',
                    textAlign: 'center',
                    cursor: 'pointer',
                })}
            >
                <div
                    className={css({
                        position: 'relative',
                        width: '100%',
                        aspectRatio: '1 / 1',
                        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.06)',
                        borderRadius: '.5em',
                        ...theme.borders.border200,
                        transition: 'box-shadow .3s ease, transform .3s ease',
                        ':hover': {
                            boxShadow: '0 2px 16px rgba(0, 0, 0, 0.06)',
                            transform: 'scale(1.03)',
                        },
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
        </Link>
    );
};
