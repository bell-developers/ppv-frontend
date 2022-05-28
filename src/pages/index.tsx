import { NextPage } from 'next';
import {
    DisplayMedium,
    DisplaySmall,
    HeadingXSmall,
    LabelLarge,
    HeadingXLarge,
    ParagraphLarge,
} from 'baseui/typography';
import {
    ValueProposalContent,
    ValueProposalCTAOverride,
    ValueProposalImages,
    ValueProposalSection,
    ValueProposalSubtitleOverride,
    ValueProposalImageContainer1,
    ValueProposalImageContainer2,
    ValueProposalImage,
} from 'pages-content/home/layouts/ValueProposalSection.layouts';
import { Button } from 'baseui/button';
import { HomeBody } from 'pages-content/home/layouts/Home.layouts';
import {
    BenefitContainer,
    BenefitContainerReversed,
    BenefitContent,
    BenefitImage,
    BenefitsSection,
    BenefitsSubtitleOverride,
    BenefitsTitleContainer,
    BenefitsTitleOverride,
} from 'pages-content/home/layouts/BenefitsSection.layouts';
import Header from 'components/header/Header';

const HomePage: NextPage = () => {
    return (
        <HomeBody>
            <Header />
            <ValueProposalSection>
                <ValueProposalContent>
                    <DisplayMedium as='h1'>Ropa buena, bonita y barata</DisplayMedium>
                    <HeadingXSmall as='h2' overrides={ValueProposalSubtitleOverride}>
                        Llevá tu estilo al siguiente nivel con nuestras prendas
                    </HeadingXSmall>
                    <Button $as='a' href='/catalogo' overrides={ValueProposalCTAOverride}>
                        Ver catálogo
                    </Button>
                </ValueProposalContent>
                <ValueProposalImages>
                    <ValueProposalImageContainer1>
                        <ValueProposalImage
                            src='/girl1.jpg'
                            alt='Product Image 1'
                            layout='fill'
                        />
                    </ValueProposalImageContainer1>
                    <ValueProposalImageContainer2>
                        <ValueProposalImage
                            src='/girl2.jpg'
                            alt='Product Image 2'
                            layout='fill'
                        />
                    </ValueProposalImageContainer2>
                </ValueProposalImages>
            </ValueProposalSection>
            <BenefitsSection>
                <BenefitsTitleContainer>
                    <DisplaySmall as='h3' overrides={BenefitsTitleOverride}>
                        Beneficios
                    </DisplaySmall>
                    <LabelLarge overrides={BenefitsSubtitleOverride}>
                        Dignissim eget proin suspendisse magna maecenas iaculis duis id.
                    </LabelLarge>
                </BenefitsTitleContainer>
                <BenefitContainer>
                    <BenefitContent>
                        <HeadingXLarge as='h4'>Beneficio 1</HeadingXLarge>
                        <ParagraphLarge>
                            Posuere euismod aliquet ipsum dolor aliquet tellus mauris.
                            Egestas in dignissim nunc, nisi, in lacus a nascetur
                            adipiscing.
                        </ParagraphLarge>
                    </BenefitContent>
                    <BenefitImage />
                </BenefitContainer>
                <BenefitContainerReversed>
                    <BenefitContent>
                        <HeadingXLarge as='h4'>Beneficio 2</HeadingXLarge>
                        <ParagraphLarge>
                            Posuere euismod aliquet ipsum dolor aliquet tellus mauris.
                            Egestas in dignissim nunc, nisi, in lacus a nascetur
                            adipiscing.
                        </ParagraphLarge>
                    </BenefitContent>
                    <BenefitImage />
                </BenefitContainerReversed>
            </BenefitsSection>
        </HomeBody>
    );
};

export default HomePage;
