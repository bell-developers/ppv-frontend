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
            backgroundColor: 'rgb(255, 255, 255, 0.98)',
            zIndex: 1,
            paddingTop: '1em',
            paddingBottom: '1em',
            fontSize: 'clamp(14px, 1.2vw, 24px)',
        },
    },
};

const CustomHomeLogo = withStyle(StyledNavigationItem, {
    paddingLeft: 0,
});

export { HomeBody, HomeHeaderOverrides, CustomHomeLogo };
