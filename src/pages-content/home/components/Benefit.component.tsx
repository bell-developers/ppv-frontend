import { Grid, ALIGNMENT, Cell } from 'baseui/layout-grid';
import { HeadingMedium, ParagraphLarge } from 'baseui/typography';
import Image from 'next/image';
import { BenefitContainer, BenefitContent, BenefitImage } from './Benefit.styles';

type BenefitProps = {
    title: string;
    content: string;
    imageUrl: string;
    imageAlt: string;
    reverse?: boolean;
};

const Benefit = (props: BenefitProps) => {
    const { title, content, imageUrl, imageAlt, reverse = false } = props;

    return (
        <BenefitContainer>
            <Grid
                gridMargins={[32, 64, 104]}
                align={ALIGNMENT.center}
                gridGaps={[16, 32, 32]}
            >
                <Cell span={[4, 8, 6]} order={reverse === false ? [1, 1, 0] : [1, 1, 1]}>
                    <BenefitContent>
                        <HeadingMedium as='h4'>{title}</HeadingMedium>
                        <ParagraphLarge>{content}</ParagraphLarge>
                    </BenefitContent>
                </Cell>
                <Cell span={[4, 8, 6]}>
                    <BenefitImage>
                        <Image
                            src={imageUrl}
                            layout='fill'
                            alt={imageAlt}
                            style={{ borderRadius: '8px' }}
                        />
                    </BenefitImage>
                </Cell>
            </Grid>
        </BenefitContainer>
    );
};

export default Benefit;
