import { StyledNavigationList, ALIGN, HeaderNavigation } from 'baseui/header-navigation';
import { LabelLarge } from 'baseui/typography';
import Link from 'next/link';
import { CustomHomeLogo } from './Header.styles';

type HeaderProps = {
    fullWidth?: boolean;
};

const Header = (props: HeaderProps) => (
    <HeaderNavigation
        overrides={{
            Root: {
                style: ({ $theme }) => ({
                    position: 'sticky',
                    top: 0,
                    width: `min(${$theme.custom.pageMaxWidth}, 100%)`,
                    zIndex: 10,
                    borderBottomColor: $theme.borders.border200.borderColor,
                    ':before':
                        props.fullWidth === true
                            ? {
                                  content: '""',
                                  position: 'fixed',
                                  top: '0',
                                  left: '0',
                                  right: '0',
                                  width: '100vw',
                                  height: '3rem',
                                  backgroundColor: $theme.colors.backgroundPrimary,
                                  zIndex: '-1',
                              }
                            : null,
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
