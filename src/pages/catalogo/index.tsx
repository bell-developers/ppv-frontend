import { DisplaySmall } from 'baseui/typography';
import Header from 'components/header/Header';
import { NextPage } from 'next';
import { CatalogProduct } from 'pages-content/catalog/components/CatalogProduct.component';
import {
    CatalogBody,
    CatalogProductsContainer,
    CatalogSpinner,
    CatalogTitleContainer,
} from 'pages-content/catalog/layouts/Catalog.layouts';
import Head from 'next/head';
import { useLoadCatalog } from 'pages-content/catalog/hooks/useLoadCatalog';

const CatalogPage: NextPage = props => {
    const { loading, productsData, error } = useLoadCatalog();

    return (
        <CatalogBody>
            <Head>
                <title>Catálogo - PPV</title>
            </Head>
            <Header />
            <CatalogTitleContainer>
                <DisplaySmall>Catálogo</DisplaySmall>
            </CatalogTitleContainer>
            <CatalogProductsContainer>
                {error === true && <div>Ocurrió un error</div>}
                {loading === true && <CatalogSpinner />}
                {productsData &&
                    productsData.map(productData => (
                        <CatalogProduct key={productData.id} productData={productData} />
                    ))}
            </CatalogProductsContainer>
        </CatalogBody>
    );
};

export default CatalogPage;
