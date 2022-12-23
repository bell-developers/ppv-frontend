import { HeadingLarge } from 'baseui/typography';
import CustomSpinner from 'components/custom-spinner/CustomSpinner';
import ErrorMessage from 'components/error-message/ErrorMessage';
import Footer from 'components/footer/Footer';
import Header from 'components/header/Header';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import useLoadProduct from 'pages-content/product/hooks/useLoadProduct';
import {
    ProductContainer,
    ProductContentContainer,
    ProductCTA,
    ProductErrorMessageContainer,
    ProductImageContainer,
    ProductNameAndPrice,
    ProductPageBody,
    ProductPrice,
    ProductSpinnerContainer,
} from 'pages-content/product/layouts/ProductPage.layout';
import themedUseStyletron from 'themes/utils/themedUseStyletron';

function ProductPage() {
    const { query } = useRouter();
    const queryId = Array.isArray(query.id) ? query.id[0] : query.id;
    const { data: productData, isLoading, isError } = useLoadProduct(queryId);
    const [css, theme] = themedUseStyletron();

    return (
        <ProductPageBody>
            <Head>
                <title>Producto</title>
            </Head>
            <Header />
            {isError === true && (
                <ErrorMessage containerStyles={() => ProductErrorMessageContainer} />
            )}
            {isLoading && (
                <ProductSpinnerContainer>
                    <CustomSpinner />
                </ProductSpinnerContainer>
            )}
            {productData && (
                <ProductContainer>
                    <ProductImageContainer>
                        <Image
                            alt={productData.name}
                            layout='fill'
                            src={
                                'data:image/jpg;base64,' +
                                productData.images[0].slice(2, -1)
                            }
                            className={css({
                                borderTopLeftRadius: theme.borders.radius500,
                                borderTopRightRadius: theme.borders.radius500,
                                borderBottomLeftRadius: 0,
                                '@media (min-width: 850px)': {
                                    borderTopLeftRadius: theme.borders.radius500,
                                    borderTopRightRadius: 0,
                                    borderBottomLeftRadius: theme.borders.radius500,
                                },
                            })}
                        />
                    </ProductImageContainer>
                    <ProductContentContainer>
                        <ProductNameAndPrice>
                            <HeadingLarge>{productData?.name}</HeadingLarge>
                            <ProductPrice>{productData?.price}ARS</ProductPrice>
                        </ProductNameAndPrice>
                        <ProductCTA>Comprar</ProductCTA>
                    </ProductContentContainer>
                </ProductContainer>
            )}
            <Footer />
        </ProductPageBody>
    );
}

export default ProductPage;
