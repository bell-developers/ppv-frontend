import { Primitives } from 'baseui';
import { CustomTheme } from 'themes/CustomTheme.type';

const HeadingStyles: (
    primitives: Partial<Primitives>
) => CustomTheme['custom']['headings'] = primitives => ({
    h1: {
        fontFamily: primitives.primaryFontFamily,
        fontSize: '3.25rem',
        fontWeight: 700,
        lineHeight: '4rem',
    },
    h2: {
        fontFamily: primitives.primaryFontFamily,
        fontSize: '2.5rem',
        fontWeight: 700,
        lineHeight: '3.25rem',
    },
    h3: {
        fontFamily: primitives.primaryFontFamily,
        fontSize: '2rem',
        fontWeight: 700,
        lineHeight: '2.5rem',
    },
    h4: {
        fontFamily: primitives.primaryFontFamily,
        fontSize: '1.75rem',
        fontWeight: 600,
        lineHeight: '2.25rem',
    },
    h5: {
        fontFamily: primitives.primaryFontFamily,
        fontSize: '1.25rem',
        fontWeight: 600,
        lineHeight: '1.75rem',
    },
    h6: {
        fontFamily: primitives.primaryFontFamily,
        fontSize: '1rem',
        fontWeight: 700,
        lineHeight: '1.5rem',
    },
});

export default HeadingStyles;
