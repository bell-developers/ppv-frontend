import { DisplaySmall, LabelLarge } from 'baseui/typography';
import Header from 'components/header/Header';
import { NextPage } from 'next';
import { CatalogProduct } from 'pages-content/catalog/components/CatalogProduct.component';
import {
    CatalogBody,
    CatalogErrorContainer,
    CatalogProductsContainer,
    CatalogSpinner,
    CatalogTitleContainer,
} from 'pages-content/catalog/layouts/Catalog.layouts';
import Head from 'next/head';
import { useLoadCatalog } from 'pages-content/catalog/hooks/useLoadCatalog';
import { Alert } from 'baseui/icon';

const CatalogPage: NextPage = () => {
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
                {error === true && (
                    <CatalogErrorContainer>
                        <Alert size={64} />
                        <LabelLarge>
                            Ha ocurrido un error. <br /> Por favor, recarge la página.
                        </LabelLarge>
                    </CatalogErrorContainer>
                )}
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
