import { DisplayXSmall } from 'baseui/typography';
import Benefit from '../../components/Benefit.component';
import {
    BenefitsSectionContainer,
    BenefitsSectionTitleContainer,
} from './BenefitsSection.styles';

const BenefitsSectionLayout = () => {
    return (
        <BenefitsSectionContainer>
            <BenefitsSectionTitleContainer>
                <DisplayXSmall
                    as='h3'
                    overrides={{
                        Block: {
                            style: ({ $theme }) => ({
                                fontWeight: 600,
                                color: $theme.colors.contentPrimary,
                            }),
                        },
                    }}
                >
                    ¡Animate a comprar por internet!
                </DisplayXSmall>
            </BenefitsSectionTitleContainer>
            <Benefit
                title='Comprá desde tu casa'
                content='Ya no es necesario venir a nuestra tienda, podés hacerlo desde la comodidad de tu hogar.'
                imageUrl='/sofa.jpg'
                imageAlt='Comprá desde tu casa.'
            />
            <Benefit
                title='Utilizá la forma de pago que más te guste'
                content='Ofrecemos varias formas de pago para que elijas la que más te convenga.'
                imageUrl='/pay.jpg'
                imageAlt='Utilizá la forma de pago que más te guste.'
                reverse
            />
        </BenefitsSectionContainer>
    );
};

export default BenefitsSectionLayout;
