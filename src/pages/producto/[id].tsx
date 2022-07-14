import { HeadingLarge, LabelMedium } from 'baseui/typography';
import Header from 'components/header/Header';
import Head from 'next/head';
import { useRouter } from 'next/router';
import {
    ProductContainer,
    ProductContentContainer,
    ProductCTA,
    ProductImageContainer,
    ProductNameAndPrice,
    ProductPageBody,
    ProductPrice,
    ProductSize,
    ProductSizesContainer,
    ProductSizesSection,
} from 'pages-content/product/layouts/ProductPage.layout';

function ProductPage() {
    const { query } = useRouter();
    const sizes = ['S', 'M', 'L'];

    return (
        <ProductPageBody>
            <Head>
                <title>Producto N°{query.id}</title>
            </Head>
            <Header />
            <ProductContainer>
                <ProductImageContainer></ProductImageContainer>
                <ProductContentContainer>
                    <ProductNameAndPrice>
                        <HeadingLarge>Buzo con capucha</HeadingLarge>
                        <ProductPrice>$3000</ProductPrice>
                    </ProductNameAndPrice>
                    <ProductSizesSection>
                        <LabelMedium>Talles</LabelMedium>
                        <ProductSizesContainer>
                            {sizes.map(size => (
                                <ProductSize key={size}>{size}</ProductSize>
                            ))}
                        </ProductSizesContainer>
                    </ProductSizesSection>
                    <ProductCTA>Comprar</ProductCTA>
                </ProductContentContainer>
            </ProductContainer>
        </ProductPageBody>
    );
}

export default ProductPage;
