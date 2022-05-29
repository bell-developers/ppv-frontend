import { DisplaySmall } from 'baseui/typography';
import Header from 'components/header/Header';
import { NextPage } from 'next';
import {
    CatalogBody,
    CatalogTitleContainer,
} from 'pages-content/catalog/layouts/Catalog.layouts';

const CatalogPage: NextPage = () => {
    return (
        <CatalogBody>
            <Header />
            <CatalogTitleContainer>
                <DisplaySmall>Catálogo</DisplaySmall>
            </CatalogTitleContainer>
        </CatalogBody>
    );
};

export default CatalogPage;
