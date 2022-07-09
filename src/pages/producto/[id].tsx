import { DisplaySmall, LabelMedium } from 'baseui/typography';
import Header from 'components/header/Header';
import { useRouter } from 'next/router';
import {
    ProductContainer,
    ProductContentContainer,
    ProductImageContainer,
    ProductPageBody,
    ProductSize,
    ProductSizesContainer,
    ProductSizesSection,
} from 'pages-content/product/layouts/ProductPage.layout';

function ProductPage() {
    const { query } = useRouter();
    const sizes = ['S', 'M', 'L'];

    return (
        <ProductPageBody>
            <Header />
            <ProductContainer>
                <ProductImageContainer></ProductImageContainer>
                <ProductContentContainer>
                    <DisplaySmall>Buzo con capucha</DisplaySmall>
                    <ProductSizesSection>
                        <LabelMedium>Talles</LabelMedium>
                        <ProductSizesContainer>
                            {sizes.map(size => (
                                <ProductSize key={size}>{size}</ProductSize>
                            ))}
                        </ProductSizesContainer>
                    </ProductSizesSection>
                </ProductContentContainer>
            </ProductContainer>
        </ProductPageBody>
    );
}

export default ProductPage;
