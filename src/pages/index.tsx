import { NextPage } from 'next';
import { HomeBody } from 'pages-content/home/layouts/Home.layouts';
import BenefitsSectionLayout from 'pages-content/home/layouts/BenefitsSection.layouts';
import Header from 'components/header/Header';
import Head from 'next/head';
import { ValueProposalLayout } from 'pages-content/home/layouts/ValueProposalSection.layouts';

const HomePage: NextPage = () => {
    return (
        <HomeBody>
            <Head>
                <title>Inicio - PPV</title>
            </Head>
            <Header />
            <ValueProposalLayout />
            <BenefitsSectionLayout />
        </HomeBody>
    );
};

export default HomePage;
