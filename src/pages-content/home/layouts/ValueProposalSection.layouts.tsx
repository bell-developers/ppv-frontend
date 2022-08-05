import { useStyletron } from 'baseui';
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

export const ValueProposalLayout = () => {
    const [css, theme] = useStyletron();

    return (
        <ValueProposalMain>
            <Grid gridMargins={0} align={ALIGNMENT.center} gridGaps={32}>
                <Cell span={[4, 8, 6]} order={[1, 1, 0]}>
                    <ValueProposalContent>
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
                            <Button>Ver ropa</Button>
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
