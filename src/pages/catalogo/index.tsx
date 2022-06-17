import { adaptCatalog } from 'adapters/adaptCatalog';
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
import { useEffect, useState } from 'react';
import { getCatalog } from 'services/get/getCatalog';
import Head from 'next/head';

const CatalogPage: NextPage = props => {
    const [productsData, setProductsData] = useState(null);
    const [loading, setLoading] = useState<boolean>(true);

    const loadCatalog = async () => {
        setLoading(true);
        setProductsData(adaptCatalog(await getCatalog()));
        setLoading(false);
    };

    useEffect(() => {
        loadCatalog();
    }, []);

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
                {loading ? (
                    <CatalogSpinner />
                ) : (
                    productsData.map(productData => (
                        <CatalogProduct key={productData.id} productData={productData} />
                    ))
                )}
            </CatalogProductsContainer>
        </CatalogBody>
    );
};

export default CatalogPage;
