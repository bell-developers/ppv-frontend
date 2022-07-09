import Header from 'components/header/Header';
import { useRouter } from 'next/router';
import { ProductPageBody } from 'pages-content/product/layouts/ProductPage.layout';

function ProductPage() {
    const { query } = useRouter();

    return (
        <ProductPageBody>
            <Header />
        </ProductPageBody>
    );
}

export default ProductPage;
