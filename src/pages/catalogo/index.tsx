import Header from 'components/header/Header';
import { NextPage } from 'next';
import { CatalogBody } from 'pages-content/catalog/layouts/Catalog.layouts';

const CatalogPage: NextPage = () => {
    return (
        <CatalogBody>
            <Header />
        </CatalogBody>
    );
};

export default CatalogPage;
