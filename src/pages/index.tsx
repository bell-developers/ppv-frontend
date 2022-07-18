import { NextPage } from 'next';
import { DisplaySmall, HeadingXLarge, ParagraphLarge } from 'baseui/typography';
import { HomeBody } from 'pages-content/home/layouts/Home.layouts';
import {
    BenefitContainer,
    BenefitContainerReversed,
    BenefitContent,
    BenefitImageContainer,
    BenefitsSection,
    BenefitsTitleContainer,
    BenefitsTitleOverride,
} from 'pages-content/home/layouts/BenefitsSection.layouts';
import Header from 'components/header/Header';
import Head from 'next/head';
import Image from 'next/image';
import { ValueProposalLayout } from 'pages-content/home/layouts/ValueProposalSection.layouts';

const HomePage: NextPage = () => {
    return (
        <HomeBody>
            <Head>
                <title>Inicio - PPV</title>
            </Head>
            <Header />
            <ValueProposalLayout />
            <BenefitsSection>
                <BenefitsTitleContainer>
                    <DisplaySmall as='h3' overrides={BenefitsTitleOverride}>
                        ¡Animate a comprar por internet!
                    </DisplaySmall>
                </BenefitsTitleContainer>
                <BenefitContainer>
                    <BenefitContent>
                        <HeadingXLarge as='h4'>Comprá desde tu casa</HeadingXLarge>
                        <ParagraphLarge>
                            Ya no es necesario venir a nuestra tienda, podés hacerlo desde
                            la comodidad de tu hogar.
                        </ParagraphLarge>
                    </BenefitContent>
                    <BenefitImageContainer>
                        <Image
                            src='/sofa.jpg'
                            layout='fill'
                            alt='Comprá desde tu casa'
                            style={{ borderRadius: '8px' }}
                        />
                    </BenefitImageContainer>
                </BenefitContainer>
                <BenefitContainerReversed>
                    <BenefitContent>
                        <HeadingXLarge as='h4'>
                            Utilizá la forma de pago que más te guste
                        </HeadingXLarge>
                        <ParagraphLarge>
                            Ofrecemos varias formas de pago para que elijas la que más te
                            convenga.
                        </ParagraphLarge>
                    </BenefitContent>
                    <BenefitImageContainer>
                        <Image
                            src='/pay.jpg'
                            layout='fill'
                            alt='Utilizá la forma de pago que más te guste'
                            style={{ borderRadius: '8px' }}
                        />
                    </BenefitImageContainer>
                </BenefitContainerReversed>
            </BenefitsSection>
        </HomeBody>
    );
};

export default HomePage;
