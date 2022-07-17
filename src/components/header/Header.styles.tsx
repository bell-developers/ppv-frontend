import { StyledNavigationItem } from 'baseui/header-navigation';
import { withStyle } from 'baseui';

export const CustomHomeLogo = withStyle(StyledNavigationItem, ({ $theme }) => ({
    paddingLeft: 0,
    cursor: 'pointer',
    color: $theme.colors.contentPrimary,
}));
