import { DisplaySmall } from 'baseui/typography';
import Header from 'components/header/Header';
import { NextPage } from 'next';
import { CatalogProduct } from 'pages-content/catalog/components/CatalogProduct.component';
import {
    CatalogBody,
    CatalogErrorMessageStyles,
    CatalogProductsContainer,
    CatalogSpinnerContainer,
    CatalogTitleContainer,
} from 'pages-content/catalog/layouts/Catalog.layouts';
import Head from 'next/head';
import { useLoadCatalog } from 'pages-content/catalog/hooks/useLoadCatalog';
import ErrorMessage from 'components/error-message/ErrorMessage';
import CustomSpinner from 'components/custom-spinner/CustomSpinner';
import Footer from 'components/footer/Footer';

const CatalogPage: NextPage = () => {
    const { loading, productsData, error } = useLoadCatalog();

    return (
        <CatalogBody>
            <Head>
                <title>Catálogo - PPV</title>
            </Head>
            <Header fullWidth={true} />
            <CatalogTitleContainer>
                <DisplaySmall $style={{ fontWeight: '700' }}>Catálogo</DisplaySmall>
            </CatalogTitleContainer>
            <CatalogProductsContainer>
                {error === true && (
                    <ErrorMessage containerStyles={CatalogErrorMessageStyles} />
                )}
                {loading === true && (
                    <CatalogSpinnerContainer>
                        <CustomSpinner />
                    </CatalogSpinnerContainer>
                )}
                {productsData &&
                    productsData.map(productData => (
                        <CatalogProduct key={productData.id} productData={productData} />
                    ))}
            </CatalogProductsContainer>
            <Footer />
        </CatalogBody>
    );
};

export default CatalogPage;
