import Header from 'components/header/Header';
import { useRouter } from 'next/router';
import {
    ProductContainer,
    ProductContentContainer,
    ProductImageContainer,
    ProductPageBody,
} from 'pages-content/product/layouts/ProductPage.layout';

function ProductPage() {
    const { query } = useRouter();

    return (
        <ProductPageBody>
            <Header />
            <ProductContainer>
                <ProductImageContainer></ProductImageContainer>
                <ProductContentContainer></ProductContentContainer>
            </ProductContainer>
        </ProductPageBody>
    );
}

export default ProductPage;
