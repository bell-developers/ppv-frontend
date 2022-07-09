import { useRouter } from 'next/router';
import { ProductPageBody } from 'pages-content/product/layouts/ProductPage.layout';

function ProductPage() {
    const { query } = useRouter();

    return <ProductPageBody></ProductPageBody>;
}

export default ProductPage;
