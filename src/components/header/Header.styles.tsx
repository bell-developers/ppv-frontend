import { StyledNavigationItem } from 'baseui/header-navigation';
import { withStyle } from 'baseui';

export const HeaderNavigationOverrides = {
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
            fontSize: 'clamp(12px, 1.2vw, 24px)',
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

export const CustomHomeLogo = withStyle(StyledNavigationItem, {
    paddingLeft: 0,
});
