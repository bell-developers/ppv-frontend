import { StyledNavigationList, ALIGN, HeaderNavigation } from 'baseui/header-navigation';
import { LabelLarge } from 'baseui/typography';
import Link from 'next/link';
import { Fragment } from 'react';
import { CustomHomeLogo, HeaderNavigationOverrides } from './Header.styles';

const Header = () => (
    <Fragment>
        {/* @ts-ignore */}
        <HeaderNavigation overrides={HeaderNavigationOverrides}>
            <StyledNavigationList $align={ALIGN.left}>
                <CustomHomeLogo>
                    <Link href='/'>
                        <LabelLarge>Logo</LabelLarge>
                    </Link>
                </CustomHomeLogo>
            </StyledNavigationList>
        </HeaderNavigation>
    </Fragment>
);

export default Header;
