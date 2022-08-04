import { HeadingXSmall } from 'baseui/typography';
import { Product } from 'models/Product.model';
import { FC } from 'react';
import { useStyletron } from 'baseui';
import Image from 'next/image';
import Link from 'next/link';
import {
    CatalogProductContainer,
    CatalogProductDataContainer,
    CatalogProductImageContainer,
} from './CatalogProduct.styles';

type CatalogProductProps = {
    productData: Product;
};

export const CatalogProduct: FC<CatalogProductProps> = props => {
    const { productData } = props;
    const [css, theme] = useStyletron();

    return (
        <Link href={'/producto/' + productData.id}>
            <CatalogProductContainer>
                <CatalogProductImageContainer>
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
                </CatalogProductImageContainer>
                <CatalogProductDataContainer>
                    <HeadingXSmall
                        className={css({
                            fontWeight: '400',
                        })}
                    >
                        {productData.name}
                    </HeadingXSmall>
                    <HeadingXSmall
                        className={css({
                            justifySelf: 'flex-end',
                            color: theme.colors.accent,
                            fontWeight: '600',
                        })}
                    >
                        {productData.price}$
                    </HeadingXSmall>
                </CatalogProductDataContainer>
            </CatalogProductContainer>
        </Link>
    );
};
