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
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '100%',
                    borderRadius: theme.borders.radius500,
                    ...theme.borders.border300,
                    textAlign: 'center',
                    cursor: 'pointer',
                })}
            >
                <div
                    className={css({
                        position: 'relative',
                        width: '100%',
                        aspectRatio: '1 / 1',
                        backgroundColor: 'blue',
                        transition: 'box-shadow .3s ease, transform .3s ease',
                        borderBottomWidth: theme.borders.border300.borderWidth,
                        borderBottomStyle: 'solid',
                        borderBottomColor: theme.borders.border300.borderColor,
                        borderTopLeftRadius: theme.borders.radius500,
                        borderTopRightRadius: theme.borders.radius500,
                    })}
                >
                    <Image
                        src={productData.images[0]}
                        layout='fill'
                        className={css({
                            borderTopLeftRadius: theme.borders.radius500,
                            borderTopRightRadius: theme.borders.radius500,
                            objectFit: 'cover',
                        })}
                        alt={productData.name}
                    />
                </div>
                <div
                    className={css({
                        display: 'flex',
                        width: '100%',
                        justifyContent: 'space-between',
                        padding: '1em',
                        boxSizing: 'border-box',
                        backgroundColor: theme.colors.backgroundPrimary,
                        borderBottomLeftRadius: theme.borders.radius500,
                        borderBottomRightRadius: theme.borders.radius500,
                    })}
                >
                    <HeadingXSmall
                        className={css({
                            fontWeight: '500',
                        })}
                    >
                        {productData.name}
                    </HeadingXSmall>
                    <HeadingXSmall
                        className={css({
                            justifySelf: 'flex-end',
                            color: theme.colors.accent,
                            fontWeight: '500',
                        })}
                    >
                        {productData.price}$
                    </HeadingXSmall>
                </div>
            </div>
        </Link>
    );
};
