import { useStyletron } from 'baseui';
import { DisplaySmall, HeadingXLarge, ParagraphLarge } from 'baseui/typography';
import Image from 'next/image';

const BenefitsSectionLayout = () => {
    const [css, theme] = useStyletron();

    return (
        <div
            className={css({
                display: 'flex',
                flexDirection: 'column',
                gap: '5em',
                padding: '5em 0',
                width: `min(${theme.custom.pageMaxWidth}, 100%)`,
                fontSize: 'clamp(16px, 1.2vw, 20px)',
            })}
        >
            <div
                className={css({
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.5em',
                    textAlign: 'center',
                    width: '100%',
                })}
            >
                <DisplaySmall
                    as='h3'
                    overrides={{
                        Block: {
                            style: ({ $theme }) => ({
                                fontWeight: 600,
                                color: $theme.colors.contentPrimary,
                            }),
                        },
                    }}
                >
                    ¡Animate a comprar por internet!
                </DisplaySmall>
            </div>
            <div
                className={css({
                    display: 'flex',
                    flexDirection: 'column-reverse',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '3vh 6vw',
                    gap: '5vw',
                    backgroundColor: theme.colors.backgroundSecondary,
                    [theme.mediaQuery.large]: {
                        flexDirection: 'row',
                        gap: '6.5em',
                        padding: '5em 6.5em',
                    },
                    [theme.mediaQuery.medium]: {
                        padding: '8vh 8vw',
                    },
                    [theme.mediaQuery.small]: {
                        flexDirection: 'column-reverse',
                    },
                })}
            >
                <div
                    className={css({
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1.5em',
                        width: '100%',
                    })}
                >
                    <HeadingXLarge as='h4'>Comprá desde tu casa</HeadingXLarge>
                    <ParagraphLarge>
                        Ya no es necesario venir a nuestra tienda, podés hacerlo desde la
                        comodidad de tu hogar.
                    </ParagraphLarge>
                </div>
                <div
                    className={css({
                        width: '100%',
                        position: 'relative',
                        aspectRatio: '1.3 / 1',
                        borderRadius: theme.borders.radius300,
                    })}
                >
                    <Image
                        src='/sofa.jpg'
                        layout='fill'
                        alt='Comprá desde tu casa'
                        style={{ borderRadius: '8px' }}
                    />
                </div>
            </div>
            <div
                className={css({
                    display: 'flex',
                    flexDirection: 'column-reverse',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '3vh 6vw',
                    gap: '5vw',
                    backgroundColor: theme.colors.backgroundSecondary,
                    [theme.mediaQuery.large]: {
                        flexDirection: 'row-reverse',
                        gap: '6.5em',
                        padding: '5em 6.5em',
                    },
                    [theme.mediaQuery.medium]: {
                        padding: '8vh 8vw',
                    },
                    [theme.mediaQuery.small]: {
                        flexDirection: 'column-reverse',
                    },
                })}
            >
                <div
                    className={css({
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1.5em',
                        width: '100%',
                    })}
                >
                    <HeadingXLarge as='h4'>
                        Utilizá la forma de pago que más te guste
                    </HeadingXLarge>
                    <ParagraphLarge>
                        Ofrecemos varias formas de pago para que elijas la que más te
                        convenga.
                    </ParagraphLarge>
                </div>
                <div
                    className={css({
                        width: '100%',
                        position: 'relative',
                        aspectRatio: '1.3 / 1',
                        borderRadius: theme.borders.radius300,
                    })}
                >
                    <Image
                        src='/pay.jpg'
                        layout='fill'
                        alt='Utilizá la forma de pago que más te guste'
                        style={{ borderRadius: '8px' }}
                    />
                </div>
            </div>
        </div>
    );
};

export default BenefitsSectionLayout;
