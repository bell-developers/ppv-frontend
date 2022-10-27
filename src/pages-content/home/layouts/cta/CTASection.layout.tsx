import { Button, SIZE } from 'baseui/button';
import { DisplaySmall, HeadingLarge, HeadingMedium, LabelLarge } from 'baseui/typography';
import Heading from 'components/heading/Heading';
import Image from 'next/image';
import themedUseStyletron from 'themes/utils/themedUseStyletron';
import {
    CTASectionBackground,
    CTASectionContainer,
    CTASectionProductContainer,
    CTASectionProductContent,
    CTASectionProductImageContainer,
    CTASectionProductPrices,
} from './CTASection.styles';

function CTASectionLayout() {
    const [css, theme] = themedUseStyletron();

    return (
        <CTASectionBackground>
            <CTASectionContainer>
                <Heading
                    styleOverrides={{
                        textAlign: 'center',
                        [theme.mediaQuery.large]: {
                            textAlign: 'start',
                        },
                        color: theme.colors.buttonPrimaryText,
                    }}
                >
                    APROVECHÁ NUESTRAS OFERTAS DE HASTA UN 15% DE DESCUENTO!!
                </Heading>
                <CTASectionProductContainer>
                    <CTASectionProductImageContainer>
                        <Image
                            src='/girl1.jpg'
                            layout='fill'
                            alt='APROVECHÁ NUESTRAS OFERTAS DE HASTA UN 15% DE DESCUENTO!! - Pura Serendipia'
                            className={css({ borderRadius: theme.borders.radius300 })}
                        />
                    </CTASectionProductImageContainer>
                    <CTASectionProductContent>
                        <LabelLarge color={theme.colors.buttonPrimaryText}>
                            Aro corazón strass
                        </LabelLarge>
                        <CTASectionProductPrices>
                            <DisplaySmall color={theme.colors.buttonPrimaryText}>
                                $300
                            </DisplaySmall>
                            <HeadingMedium
                                overrides={{
                                    Block: {
                                        style: {
                                            textDecoration: 'line-through',
                                        },
                                    },
                                }}
                                color='#DADADA'
                            >
                                $500
                            </HeadingMedium>
                        </CTASectionProductPrices>
                        <Button
                            size={SIZE.large}
                            overrides={{
                                BaseButton: {
                                    style: {
                                        backgroundColor: theme.colors.buttonPrimaryText,
                                        color: theme.colors.backgroundAccent,
                                        fontWeight: 700,
                                        ':hover': null,
                                    },
                                },
                            }}
                        >
                            Comprar
                        </Button>
                    </CTASectionProductContent>
                </CTASectionProductContainer>
            </CTASectionContainer>
        </CTASectionBackground>
    );
}

export default CTASectionLayout;
