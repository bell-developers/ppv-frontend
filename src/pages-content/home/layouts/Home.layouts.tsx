import { styled, withStyle } from 'baseui';
import { StyledNavigationItem } from 'baseui/header-navigation';

const HomeBody = styled('div', ({ $theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '100vw',
    minHeight: '100vh',
    padding: '0 10em',
    backgroundColor: $theme.colors.backgroundPrimary,
    [$theme.mediaQuery.medium]: {
        padding: '0 4em',
    },
    [$theme.mediaQuery.small]: {
        padding: '0 1em',
    },
}));

const HomeHeaderOverrides = {
    Root: {
        style: {
            position: 'sticky',
            top: '0',
            left: '0',
            right: '0',
            width: '100%',
            maxWidth: '1250px',
            borderBottomWidth: 'none',
            borderBottomStyle: 'none',
            borderBottomColor: 'none',
            backgroundColor: 'transparent',
            zIndex: 1,
            paddingTop: '1em',
            paddingBottom: '1em',
            fontSize: 'clamp(13px, 1.2vw, 24px)',
            ':before': {
                content: '""',
                position: 'fixed',
                top: '0',
                left: '0',
                right: '0',
                width: '100%',
                backgroundColor: 'rgb(255, 255, 255, 0.99)',
                paddingTop: '1em',
                zIndex: '-1',
                paddingBottom: '1em',
                height: '1.1em',
            },
        },
    },
};

const CustomHomeLogo = withStyle(StyledNavigationItem, {
    paddingLeft: 0,
});

export { HomeBody, HomeHeaderOverrides, CustomHomeLogo };
