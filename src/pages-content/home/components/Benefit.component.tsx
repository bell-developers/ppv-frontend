import { Grid, ALIGNMENT, Cell } from 'baseui/layout-grid';
import { HeadingMedium, ParagraphLarge } from 'baseui/typography';
import { useStyletron } from 'baseui';
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

export default Benefit;
