import { DisplaySmall } from 'baseui/typography';
import Header from 'components/header/Header';
import { NextPage } from 'next';
import { CatalogProduct } from 'pages-content/catalog/components/CatalogProduct.component';
import {
    CatalogBody,
    CatalogProductsContainer,
    CatalogTitleContainer,
} from 'pages-content/catalog/layouts/Catalog.layouts';

const CatalogPage: NextPage = () => {
    return (
        <CatalogBody>
            <Header />
            <CatalogTitleContainer>
                <DisplaySmall>Catálogo</DisplaySmall>
            </CatalogTitleContainer>
            <CatalogProductsContainer>
                <CatalogProduct
                    productData={{
                        name: 'Pantalón Jean',
                        price: 3999.99,
                        images: [],
                        sizes: [],
                    }}
                ></CatalogProduct>
            </CatalogProductsContainer>
        </CatalogBody>
    );
};

export default CatalogPage;
