import { HeadingLarge, LabelMedium } from 'baseui/typography';
import CustomSpinner from 'components/custom-spinner/CustomSpinner';
import ErrorMessage from 'components/error-message/ErrorMessage';
import Header from 'components/header/Header';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useLoadProduct } from 'pages-content/product/hooks/useLoadProduct';
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
    const { query, isReady } = useRouter();
    const queryId = Array.isArray(query.id) ? query.id[0] : query.id;
    const { productData, loading, error } = useLoadProduct(queryId, isReady);
    const sizes = ['S', 'M', 'L'];

    return (
        <ProductPageBody>
            <Head>
                <title>Producto</title>
            </Head>
            <Header />
            {error === true && (
                <ErrorMessage containerStyles={() => ({ marginTop: '5rem' })} />
            )}
            {loading && <CustomSpinner />}
            {productData && (
                <ProductContainer>
                    <ProductImageContainer></ProductImageContainer>
                    <ProductContentContainer>
                        <ProductNameAndPrice>
                            <HeadingLarge>{productData?.name}</HeadingLarge>
                            <ProductPrice>{productData?.price}ARS</ProductPrice>
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
            )}
        </ProductPageBody>
    );
}

export default ProductPage;
