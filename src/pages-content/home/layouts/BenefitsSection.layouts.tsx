import { useStyletron } from 'baseui';
import { ALIGNMENT, Cell, Grid } from 'baseui/layout-grid';
import { DisplayXSmall, HeadingMedium, ParagraphLarge } from 'baseui/typography';
import Image from 'next/image';

type BenefitProps = {
    title: string;
    content: string;
    imageUrl: string;
    imageAlt: string;
    reverse?: boolean;
};

const Benefit = (props: BenefitProps) => {
    const { title, content, imageUrl, imageAlt, reverse = false } = props;
    const [css, theme] = useStyletron();

    return (
        <div
            className={css({
                display: 'flex',
                justifyContent: 'center',
                paddingTop: 'min(2rem, 10vh)',
                paddingBottom: '1rem',
                backgroundColor: theme.colors.backgroundSecondary,
                [theme.mediaQuery.medium]: {
                    paddingTop: 'min(4rem, 10vh)',
                    paddingBottom: 'min(2rem, 10vh)',
                },
            })}
        >
            <Grid
                gridMargins={[32, 64, 104]}
                align={ALIGNMENT.center}
                gridGaps={[16, 32, 32]}
            >
                <Cell span={[4, 8, 6]} order={reverse === false ? [1, 1, 0] : [1, 1, 1]}>
                    <div
                        className={css({
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            gap: '1.5em',
                        })}
                    >
                        <HeadingMedium as='h4'>{title}</HeadingMedium>
                        <ParagraphLarge>{content}</ParagraphLarge>
                    </div>
                </Cell>
                <Cell span={[4, 8, 6]}>
                    <div
                        className={css({
                            position: 'relative',
                            aspectRatio: '1.3 / 1',
                            borderRadius: theme.borders.radius300,
                        })}
                    >
                        <Image
                            src={imageUrl}
                            layout='fill'
                            alt={imageAlt}
                            style={{ borderRadius: '8px' }}
                        />
                    </div>
                </Cell>
            </Grid>
        </div>
    );
};

const BenefitsSectionLayout = () => {
    const [css, theme] = useStyletron();

    return (
        <div
            className={css({
                display: 'flex',
                flexDirection: 'column',
                gap: '5rem',
                width: `min(${theme.custom.pageMaxWidth}, 100%)`,
                marginBottom: '5rem',
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
                <DisplayXSmall
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
                </DisplayXSmall>
            </div>
            <Benefit
                title='Comprá desde tu casa'
                content='Ya no es necesario venir a nuestra tienda, podés hacerlo desde la comodidad de tu hogar.'
                imageUrl='/sofa.jpg'
                imageAlt='Comprá desde tu casa.'
            />
            <Benefit
                title='Utilizá la forma de pago que más te guste'
                content='Ofrecemos varias formas de pago para que elijas la que más te convenga.'
                imageUrl='/pay.jpg'
                imageAlt='Utilizá la forma de pago que más te guste.'
                reverse
            />
        </div>
    );
};

export default BenefitsSectionLayout;
