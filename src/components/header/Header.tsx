import { StyledNavigationList, ALIGN, HeaderNavigation } from 'baseui/header-navigation';
import { LabelLarge } from 'baseui/typography';
import Link from 'next/link';
import { CustomHomeLogo } from './Header.styles';

const Header = () => (
    <HeaderNavigation
        overrides={{
            Root: {
                style: ({ $theme }) => ({
                    position: 'sticky',
                    top: 0,
                    width: `min(${$theme.custom.pageMaxWidth}, 100%)`,
                    zIndex: 10,
                    borderBottomColor: $theme.borders.border200.borderColor,
                }),
            },
        }}
    >
        <StyledNavigationList $align={ALIGN.left}>
            <CustomHomeLogo>
                <Link href='/'>
                    <LabelLarge>Bell</LabelLarge>
                </Link>
            </CustomHomeLogo>
        </StyledNavigationList>
    </HeaderNavigation>
);

export default Header;
