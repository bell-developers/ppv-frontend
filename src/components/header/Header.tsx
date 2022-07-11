import { StyledNavigationList, ALIGN } from 'baseui/header-navigation';
import { LabelLarge } from 'baseui/typography';
import Link from 'next/link';
import { CustomHomeLogo, StyledHeaderNavigation } from './Header.styles';

const Header = () => (
    <StyledHeaderNavigation>
        <StyledNavigationList $align={ALIGN.left}>
            <CustomHomeLogo>
                <Link href='/'>
                    <LabelLarge>Logo</LabelLarge>
                </Link>
            </CustomHomeLogo>
        </StyledNavigationList>
    </StyledHeaderNavigation>
);

export default Header;
