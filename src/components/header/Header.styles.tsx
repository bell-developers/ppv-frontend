import { HeaderNavigation, StyledNavigationItem } from 'baseui/header-navigation';
import { styled, withStyle } from 'baseui';

export const StyledHeaderNavigation = styled(HeaderNavigation, ({ $theme }) => ({
    position: 'sticky',
    top: '0',
    left: '0',
    right: '0',
    width: '100%',
    maxWidth: '1250px',
    backgroundColor: $theme.colors.backgroundPrimary,
    zIndex: 1,
    paddingTop: '1em',
    paddingBottom: '1em',
    fontSize: 'clamp(12px, 1.2vw, 20px)',
    ':before': {
        content: '""',
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        width: '100%',
        borderBottom: '1px solid rgba(0%, 0%, 0%, 0.04)',
        backgroundColor: $theme.colors.backgroundPrimary,
        paddingTop: '1em',
        zIndex: '-1',
        paddingBottom: '1em',
        height: '1.1em',
    },
}));

export const CustomHomeLogo = withStyle(StyledNavigationItem, ({ $theme }) => ({
    paddingLeft: 0,
    cursor: 'pointer',
    color: $theme.colors.contentPrimary,
}));
