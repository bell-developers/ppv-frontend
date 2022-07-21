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
                width: `min(${theme.custom.pageMaxWidth}, 100%)`,
                height: 'fit-content',
                marginTop: theme.sizing.scale950,
            })}
        >
            <Grid gridMargins={0} align={ALIGNMENT.center} gridGaps={32}>
                <Cell span={[4, 8, 6]} order={[1, 1, 0]}>
                    <article
                        className={css({
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1em',
                            textAlign: 'center',
                            alignItems: 'center',
                            [theme.mediaQuery.large]: {
                                textAlign: 'start',
                                alignItems: 'start',
                            },
                        })}
                    >
                        <DisplayMedium
                            $style={{
                                fontSize: 'clamp(3.25rem, 3.90vw, 4rem)',
                            }}
                        >
                            Ropa urbana
                        </DisplayMedium>
                        <HeadingXSmall color={theme.colors.contentSecondary}>
                            En nuestra tienda te ofrecemos ropa a los mejores precios.
                        </HeadingXSmall>
                        <Link href='/catalogo'>
                            <Button
                                className={css({
                                    paddingRight: '2rem',
                                    paddingLeft: '2rem',
                                    width: '10rem',
                                    [theme.mediaQuery.large]: {
                                        width: '8rem',
                                    },
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
                            margin: 'auto',
                            [theme.mediaQuery.large]: {
                                width: '100%',
                                minHeight: '400px',
                            },
                            [theme.mediaQuery.medium]: {
                                width: '80%',
                                minHeight: '250px',
                            },
                            [theme.mediaQuery.small]: {
                                width: '100%',
                            },
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
                                aspectRatio: '1,3 / 1,7',
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
                                aspectRatio: '1.3 / 1.7',
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
