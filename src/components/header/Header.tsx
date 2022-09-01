import { StyledNavigationList, ALIGN, HeaderNavigation } from 'baseui/header-navigation';
import { LabelLarge } from 'baseui/typography';
import Link from 'next/link';
import { CustomHomeLogo } from './Header.styles';

type HeaderProps = {
    fullWidth?: boolean;
};

const Header = (props: HeaderProps) => (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    <HeaderNavigation
        overrides={{
            Root: {
                style: ({ $theme }) => ({
                    position: 'sticky',
                    top: 0,
                    width: $theme.custom.mainLayoutWidth,
                    zIndex: 10,
                    borderBottomColor: $theme.borders.border200.borderColor,
                    boxSizing: 'border-box',
                    paddingRight: '1rem',
                    paddingLeft: '1rem',
                    [$theme.mediaQuery.large]: {
                        paddingRight: '0',
                        paddingLeft: '0',
                    },
                    [$theme.mediaQuery.medium]: {
                        paddingRight: '15vw',
                        paddingLeft: '15vw',
                    },
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
                    <LabelLarge>Logo</LabelLarge>
                </Link>
            </CustomHomeLogo>
        </StyledNavigationList>
    </HeaderNavigation>
);

export default Header;
