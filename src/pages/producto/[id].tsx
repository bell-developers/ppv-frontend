import { DisplaySmall, LabelMedium } from 'baseui/typography';
import Header from 'components/header/Header';
import { useRouter } from 'next/router';
import {
    ProductContainer,
    ProductContentContainer,
    ProductImageContainer,
    ProductPageBody,
    ProductSizesContainer,
} from 'pages-content/product/layouts/ProductPage.layout';

function ProductPage() {
    const { query } = useRouter();

    return (
        <ProductPageBody>
            <Header />
            <ProductContainer>
                <ProductImageContainer></ProductImageContainer>
                <ProductContentContainer>
                    <DisplaySmall>Buzo con capucha</DisplaySmall>
                    <ProductSizesContainer>
                        <LabelMedium>Talles</LabelMedium>
                    </ProductSizesContainer>
                </ProductContentContainer>
            </ProductContainer>
        </ProductPageBody>
    );
}

export default ProductPage;
