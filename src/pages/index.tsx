import { NextPage } from 'next';
import { HomeBody } from 'pages-content/home/layouts/Home.layouts';
import BenefitsSectionLayout from 'pages-content/home/layouts/benefits/BenefitsSection.layouts';
import Header from 'components/header/Header';
import Head from 'next/head';
import { ValueProposalLayout } from 'pages-content/home/layouts/value-proposal/ValueProposalSection.layouts';
import Footer from 'components/footer/Footer';
import ClientsOpinionSectionLayout from 'pages-content/home/layouts/clients-opinion/ClientsOpinionSection.layouts';
import CTASectionLayout from 'pages-content/home/layouts/cta/CTASection.layout';

const HomePage: NextPage = () => {
    return (
        <HomeBody>
            <Head>
                <title>Inicio - Bell</title>
            </Head>
            <Header fullWidth={true} />
            <ValueProposalLayout />
            <ClientsOpinionSectionLayout />
            <CTASectionLayout />
            <BenefitsSectionLayout />
            <Footer />
        </HomeBody>
    );
};

export default HomePage;
