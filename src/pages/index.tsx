import { NextPage } from 'next';
import { HomeBody } from 'pages-content/home/layouts/Home.layouts';
import BenefitsSectionLayout from 'pages-content/home/layouts/benefits/BenefitsSection.layouts';
import Header from 'components/header/Header';
import Head from 'next/head';
import { ValueProposalLayout } from 'pages-content/home/layouts/value-proposal/ValueProposalSection.layouts';
import Footer from 'components/footer/Footer';

const HomePage: NextPage = () => {
    return (
        <HomeBody>
            <Head>
                <title>Inicio - Bell</title>
            </Head>
            <Header />
            <ValueProposalLayout />
            <BenefitsSectionLayout />
            <Footer />
        </HomeBody>
    );
};

export default HomePage;
