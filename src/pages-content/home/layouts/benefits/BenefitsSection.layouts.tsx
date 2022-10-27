import Heading from 'components/heading/Heading';
import Benefit from '../../components/Benefit.component';
import {
    BenefitsSectionContainer,
    BenefitsSectionTitleContainer,
} from './BenefitsSection.styles';

const BenefitsSectionLayout = () => {
    return (
        <BenefitsSectionContainer>
            <BenefitsSectionTitleContainer>
                <Heading>¡Animate a comprar por internet!</Heading>
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
