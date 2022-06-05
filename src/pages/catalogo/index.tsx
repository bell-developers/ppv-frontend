import { adaptCatalog } from 'adapters/adaptCatalog';
import { DisplaySmall } from 'baseui/typography';
import Header from 'components/header/Header';
import { Product } from 'models/Product.model';
import { GetServerSideProps, NextPage } from 'next';
import { CatalogProduct } from 'pages-content/catalog/components/CatalogProduct.component';
import {
    CatalogBody,
    CatalogProductsContainer,
    CatalogTitleContainer,
} from 'pages-content/catalog/layouts/Catalog.layouts';
import { getCatalog } from 'services/get/getCatalog';

type CatalogPageProps = {
    productsData: Product[];
};

const CatalogPage: NextPage<CatalogPageProps> = props => {
    const { productsData } = props;

    return (
        <CatalogBody>
            <Header />
            <CatalogTitleContainer>
                <DisplaySmall>Catálogo</DisplaySmall>
            </CatalogTitleContainer>
            <CatalogProductsContainer>
                {productsData.map(productData => (
                    <CatalogProduct key={productData.id} productData={productData} />
                ))}
            </CatalogProductsContainer>
        </CatalogBody>
    );
};

export const getServerSideProps: GetServerSideProps = async context => {
    const productsData = adaptCatalog(await getCatalog());

    return {
        props: {
            productsData,
        },
    };
};

export default CatalogPage;
