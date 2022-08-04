import { useStyletron } from 'baseui';
import { DisplayXSmall } from 'baseui/typography';
import Benefit from '../components/Benefit.component';

const BenefitsSectionLayout = () => {
    const [css, theme] = useStyletron();

    return (
        <div
            className={css({
                display: 'flex',
                flexDirection: 'column',
                gap: '5rem',
                width: `min(${theme.custom.pageMaxWidth}, 100%)`,
                marginTop: '12vh',
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
