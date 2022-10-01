import { HeadingLarge, LabelLarge, LabelSmall } from 'baseui/typography';
import Image from 'next/image';
import themedUseStyletron from 'themes/utils/themedUseStyletron';
import {
    ClientsOpinionSectionCard,
    ClientsOpinionSectionCardImageContainer,
    ClientsOpinionSectionCardImageStyles,
    ClientsOpinionSectionCardsContainer,
    ClientsOpinionSectionContainer,
    ClientsOpinionSectionHeadingStyles,
    ClientsOpinionSectionSubHeadingStyles,
} from './ClientsOpinionSection.styles';

function ClientsOpinionSectionLayout() {
    const [css] = themedUseStyletron();

    return (
        <ClientsOpinionSectionContainer>
            <HeadingLarge
                overrides={{
                    Block: {
                        style: ClientsOpinionSectionHeadingStyles,
                    },
                }}
            >
                Nuestros clientes
            </HeadingLarge>
            <LabelLarge
                overrides={{
                    Block: {
                        style: ClientsOpinionSectionSubHeadingStyles,
                    },
                }}
            >
                ¡Estamos agradecidos con ustedes por confiar en nuestro emprendimiento!
            </LabelLarge>
            <ClientsOpinionSectionCardsContainer>
                <ClientsOpinionSectionCard>
                    <ClientsOpinionSectionCardImageContainer>
                        <Image
                            src='/client1.jpg'
                            alt='Cliente de Pura Serendipia'
                            layout='fill'
                            className={css(ClientsOpinionSectionCardImageStyles)}
                        />
                    </ClientsOpinionSectionCardImageContainer>
                    <LabelLarge>
                        Muy buena la calidad y la atención al cliente.
                    </LabelLarge>
                    <LabelSmall>Claudia Ferraro</LabelSmall>
                </ClientsOpinionSectionCard>
                <ClientsOpinionSectionCard>
                    <ClientsOpinionSectionCardImageContainer>
                        <Image
                            src='/client2.jpg'
                            alt='Cliente de Pura Serendipia'
                            layout='fill'
                            className={css(ClientsOpinionSectionCardImageStyles)}
                        />
                    </ClientsOpinionSectionCardImageContainer>
                    <LabelLarge>
                        Me compré unos dijes de corazones y me encantaron!
                    </LabelLarge>
                    <LabelSmall>María Ester Verdún</LabelSmall>
                </ClientsOpinionSectionCard>
                <ClientsOpinionSectionCard>
                    <ClientsOpinionSectionCardImageContainer>
                        <Image
                            src='/client3.jpg'
                            alt='Cliente de Pura Serendipia'
                            layout='fill'
                            className={css(ClientsOpinionSectionCardImageStyles)}
                        />
                    </ClientsOpinionSectionCardImageContainer>
                    <LabelLarge>
                        No esperaba mucho por el precio pero, de verdad, me sorprendieron.
                    </LabelLarge>
                    <LabelSmall>Gonzalo Pérez</LabelSmall>
                </ClientsOpinionSectionCard>
            </ClientsOpinionSectionCardsContainer>
        </ClientsOpinionSectionContainer>
    );
}

export default ClientsOpinionSectionLayout;
