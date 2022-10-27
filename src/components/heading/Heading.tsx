import { BlockOverrides } from 'baseui/block';
import { Heading as BaseHeading, LevelContext } from 'baseui/heading';
import { ReactNode, useContext } from 'react';
import themedUseStyletron from 'themes/utils/themedUseStyletron';

function Heading(props: {
    children: ReactNode;
    styleOverrides?: BlockOverrides['Block']['style'];
    styledAs?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}) {
    const [, theme] = themedUseStyletron();
    const level = useContext(LevelContext);

    return (
        <BaseHeading
            overrides={{
                Block: {
                    style: {
                        ...theme.custom.headings[props.styledAs || `h${String(level)}`],
                        ...props.styleOverrides,
                    },
                },
            }}
        >
            {props.children}
        </BaseHeading>
    );
}

export default Heading;
