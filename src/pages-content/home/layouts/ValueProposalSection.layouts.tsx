import { useStyletron } from 'baseui';
import { Button } from 'baseui/button';
import { Grid, ALIGNMENT, Cell } from 'baseui/layout-grid';
import { DisplayMedium, HeadingXSmall } from 'baseui/typography';
import Link from 'next/link';
import Image from 'next/image';

export const ValueProposalLayout = () => {
    const [css, theme] = useStyletron();

    return (
        <main
            className={css({
                width: '100%',
                height: 'fit-content',
                marginTop: theme.sizing.scale950,
            })}
        >
            <Grid gridMargins={0} align={ALIGNMENT.center}>
                <Cell span={[4, 8, 6]} order={[1, 1, 0]}>
                    <article
                        className={css({
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1em',
                        })}
                    >
                        <DisplayMedium>Ropa urbana</DisplayMedium>
                        <HeadingXSmall color={theme.colors.contentSecondary}>
                            En nuestra tienda te ofrecemos ropa a los mejores precios.
                        </HeadingXSmall>
                        <Link href='/catalogo'>
                            <Button
                                className={css({
                                    paddingRight: '2em',
                                    paddingLeft: '2em',
                                    width: 'fit-content',
                                })}
                            >
                                Ver ropa
                            </Button>
                        </Link>
                    </article>
                </Cell>
                <Cell span={[4, 8, 6]} align={ALIGNMENT.end}>
                    <article
                        className={css({
                            display: 'grid',
                            gridTemplateColumns: 'repeat(9, 1fr)',
                            gridTemplateRows: 'repeat(8, 1fr)',
                            width: '100%',
                            height: '600px',
                            maxHeight: '70vh',
                        })}
                    >
                        <div
                            className={css({
                                position: 'relative',
                                width: '100%',
                                height: '100%',
                                backgroundColor: theme.colors.backgroundSecondary,
                                borderRadius: theme.borders.radius400,
                                gridColumn: '1 / 6',
                                gridRow: '1 / 8',
                                transition: 'transform .3s ease',
                                ':hover': {
                                    transform: 'scale(1.1)',
                                },
                            })}
                        >
                            <Image
                                src='/girl1.jpg'
                                alt='Product Image 1'
                                layout='fill'
                                priority={true}
                                className={css({
                                    borderRadius: theme.borders.radius400,
                                })}
                            />
                        </div>
                        <div
                            className={css({
                                position: 'relative',
                                width: '100%',
                                height: '100%',
                                backgroundColor: theme.colors.backgroundSecondary,
                                borderRadius: theme.borders.radius400,
                                gridColumn: '5 / 10',
                                gridRow: '2 / 9',
                                transition: 'transform .3s ease',
                                ':hover': {
                                    transform: 'scale(1.1)',
                                },
                            })}
                        >
                            <Image
                                src='/girl2.jpg'
                                alt='Product Image 2'
                                layout='fill'
                                priority={true}
                                className={css({
                                    borderRadius: theme.borders.radius400,
                                })}
                            />
                        </div>
                    </article>
                </Cell>
            </Grid>
        </main>
    );
};
