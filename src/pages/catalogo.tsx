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
import { HeadingLevel } from 'baseui/heading';
import Heading from 'components/heading/Heading';

const CatalogPage: NextPage = () => {
    const { loading, productsData, error } = useLoadCatalog();

    return (
        <CatalogBody>
            <Head>
                <title>Catálogo - PPV</title>
            </Head>
            <HeadingLevel>
                <Header fullWidth={true} />
                <CatalogTitleContainer>
                    <Heading styledAs='h2'>Catálogo</Heading>
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
                            <CatalogProduct
                                key={productData.id}
                                productData={productData}
                            />
                        ))}
                </CatalogProductsContainer>
                <Footer />
            </HeadingLevel>
        </CatalogBody>
    );
};

export default CatalogPage;
