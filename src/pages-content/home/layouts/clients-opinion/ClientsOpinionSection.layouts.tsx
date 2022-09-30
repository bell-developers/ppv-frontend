import { HeadingLarge, LabelLarge } from 'baseui/typography';
import {
    ClientsOpinionSectionContainer,
    ClientsOpinionSectionHeadingStyles,
    ClientsOpinionSectionSubHeadingStyles,
} from './ClientsOpinionSection.styles';

function ClientsOpinionSectionLayout() {
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
        </ClientsOpinionSectionContainer>
    );
}

export default ClientsOpinionSectionLayout;
