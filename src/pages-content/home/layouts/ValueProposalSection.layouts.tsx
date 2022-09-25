import { Button } from 'baseui/button';
import { Grid, ALIGNMENT, Cell } from 'baseui/layout-grid';
import { DisplayMedium, HeadingXSmall } from 'baseui/typography';
import Link from 'next/link';
import Image from 'next/image';
import {
    ValueProposalContent,
    ValueProposalImageContainer1,
    ValueProposalImageContainer2,
    ValueProposalImages,
    ValueProposalMain,
} from './ValueProposalSection.styles';
import themedUseStyletron from 'themes/utils/themedUseStyletron';
import { useContext } from 'react';
import { CurrentThemeContext } from 'pages/_app';

const imagesSrc = {
    'default-light': '/isotype2-black.png',
    'default-dark': '/isotype2-white.png',
    'pura-serendipia': '/isotype2-primary.png',
};

export const ValueProposalLayout = () => {
    const currentTheme = useContext(CurrentThemeContext);
    const [css, theme] = themedUseStyletron();

    return (
        <ValueProposalMain>
            <Grid gridMargins={0} align={ALIGNMENT.center} gridGaps={32}>
                <Cell span={[4, 8, 6]} order={[1, 1, 0]}>
                    <ValueProposalContent>
                        <DisplayMedium
                            $style={{
                                fontSize: 'clamp(3.25rem, 3.90vw, 4rem)',
                                fontWeight: '700',
                            }}
                        >
                            Pura Serendipia
                        </DisplayMedium>
                        <HeadingXSmall color={theme.colors.contentSecondary}>
                            Accesorios en acero quirúrgico
                        </HeadingXSmall>
                        <Link href='/catalogo'>
                            <Button>Ver accesorios</Button>
                        </Link>
                    </ValueProposalContent>
                </Cell>
                <Cell span={[4, 8, 6]} align={ALIGNMENT.end}>
                    <ValueProposalImages>
                        <ValueProposalImageContainer1>
                            <Image
                                src='/girl1.jpg'
                                alt='Product Image 1'
                                layout='fill'
                                priority={true}
                                className={css({
                                    borderRadius: theme.borders.radius400,
                                })}
                            />
                        </ValueProposalImageContainer1>
                        <ValueProposalImageContainer2>
                            <Image
                                src='/girl2.jpg'
                                alt='Product Image 2'
                                layout='fill'
                                priority={true}
                                className={css({
                                    borderRadius: theme.borders.radius400,
                                })}
                            />
                        </ValueProposalImageContainer2>
                    </ValueProposalImages>
                </Cell>
            </Grid>
        </ValueProposalMain>
    );
};
