import { DisplaySmall, HeadingXSmall, LabelMedium } from 'baseui/typography';
import Header from 'components/header/Header';
import {
    ProductContainer,
    ProductContentContainer,
    ProductCTA,
    ProductImageContainer,
    ProductPageBody,
    ProductPrice,
    ProductPriceContainer,
    ProductSize,
    ProductSizesContainer,
    ProductSizesSection,
} from 'pages-content/product/layouts/ProductPage.layout';

function ProductPage() {
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
                    <ProductPriceContainer>
                        <HeadingXSmall>Precio</HeadingXSmall>
                        <ProductPrice>$3000</ProductPrice>
                        <ProductCTA>Comprar</ProductCTA>
                    </ProductPriceContainer>
                </ProductContentContainer>
            </ProductContainer>
        </ProductPageBody>
    );
}

export default ProductPage;
