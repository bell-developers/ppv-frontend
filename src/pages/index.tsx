import { NextPage } from 'next';
import {
    ALIGN,
    HeaderNavigation,
    StyledNavigationItem,
    StyledNavigationList,
} from 'baseui/header-navigation';
import { DisplayMedium, HeadingXSmall, LabelLarge } from 'baseui/typography';
import {
    FakeImage1,
    FakeImage2,
    HomeBody,
    HomeHeaderOverride,
    ValueProposalContent,
    ValueProposalCTAOverride,
    ValueProposalImages,
    ValueProposalSection,
    ValueProposalSubtitleOverride,
} from 'pages-content/home/Home.layouts';
import { HeadingLevel, Heading } from 'baseui/heading';
import { Button } from 'baseui/button';

const HomePage: NextPage = () => {
    return (
        <HomeBody>
            {/* @ts-ignore */}
            <HeaderNavigation overrides={HomeHeaderOverride}>
                <StyledNavigationList $align={ALIGN.left}>
                    <StyledNavigationItem>
                        <a href='#ValueProposalSection'>
                            <LabelLarge>Logo</LabelLarge>
                        </a>
                    </StyledNavigationItem>
                </StyledNavigationList>
            </HeaderNavigation>
            <ValueProposalSection id='ValueProposalSection'>
                <ValueProposalContent>
                    <HeadingLevel>
                        <Heading as={DisplayMedium}>Ropa buena, bonita y barata</Heading>
                        <HeadingLevel>
                            <Heading
                                as={HeadingXSmall}
                                overrides={ValueProposalSubtitleOverride}
                            >
                                Llevá tu estilo al siguiente nivel con nuestras prendas
                            </Heading>
                        </HeadingLevel>
                        <Button
                            $as='a'
                            href='/catalogo'
                            overrides={ValueProposalCTAOverride}
                        >
                            Ver catálogo
                        </Button>
                    </HeadingLevel>
                </ValueProposalContent>
                <ValueProposalImages>
                    <FakeImage1 />
                    <FakeImage2 />
                </ValueProposalImages>
            </ValueProposalSection>
        </HomeBody>
    );
};

export default HomePage;
