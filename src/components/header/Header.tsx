import { Button, KIND, SIZE } from 'baseui/button';
import {
    StyledNavigationList,
    ALIGN,
    HeaderNavigation,
    StyledNavigationItem,
} from 'baseui/header-navigation';
import { StatefulMenu } from 'baseui/menu';
import { LabelLarge } from 'baseui/typography';
import Link from 'next/link';
import { CurrentThemeContext } from 'pages/_app';
import { useContext, useState } from 'react';
import { CustomHomeLogo, ThemesMenuContainer } from './Header.styles';

type HeaderProps = {
    fullWidth?: boolean;
};

const ThemesMenuItems = [
    { label: 'Claro', id: 'default-light' },
    { label: 'Oscuro', id: 'default-dark' },
    { label: 'Pura Serendipia', id: 'pura-serendipia' },
    { label: 'Green Day', id: 'greenday' },
];

const Header = (props: HeaderProps) => {
    const currentTheme = useContext(CurrentThemeContext);
    const [isThemeMenuVisible, setIsThemeMenuVisible] = useState<boolean>(false);

    return (
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
                                      height: '3.75rem',
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
                        <LabelLarge as='p'>Pura Serendipia</LabelLarge>
                    </Link>
                </CustomHomeLogo>
            </StyledNavigationList>
            <StyledNavigationList $align={ALIGN.center} />
            <StyledNavigationList $align={ALIGN.right}>
                <StyledNavigationItem>
                    <Button
                        kind={KIND.secondary}
                        size={SIZE.compact}
                        onClick={() => {
                            setIsThemeMenuVisible(x => !x);
                        }}
                    >
                        Cambiar tema
                    </Button>
                </StyledNavigationItem>
                <ThemesMenuContainer isVisible={isThemeMenuVisible}>
                    <StatefulMenu
                        items={ThemesMenuItems}
                        onItemSelect={({ item }) => {
                            setIsThemeMenuVisible(false);
                            currentTheme.setCurrentTheme(item.id);
                        }}
                    />
                </ThemesMenuContainer>
            </StyledNavigationList>
        </HeaderNavigation>
    );
};

export default Header;
