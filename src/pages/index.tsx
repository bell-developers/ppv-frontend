import { NextPage } from 'next';
import {
    ALIGN,
    HeaderNavigation,
    StyledNavigationItem,
    StyledNavigationList,
} from 'baseui/header-navigation';
import { LabelLarge } from 'baseui/typography';

const Home: NextPage = () => {
    return (
        //@ts-ignore
        <HeaderNavigation
            overrides={{
                Root: {
                    style: {
                        border: '1px solid transparent',
                        paddingLeft: '5em',
                    },
                },
            }}
        >
            <StyledNavigationList $align={ALIGN.left}>
                <StyledNavigationItem>
                    <LabelLarge>Logo</LabelLarge>
                </StyledNavigationItem>
            </StyledNavigationList>
        </HeaderNavigation>
    );
};

export default Home;
