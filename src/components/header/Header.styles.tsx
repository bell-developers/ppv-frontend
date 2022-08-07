import { StyledNavigationItem } from 'baseui/header-navigation';
import themedWithStyle from 'themes/utils/themedWithStyle';

export const CustomHomeLogo = themedWithStyle(StyledNavigationItem, ({ $theme }) => ({
    paddingLeft: 0,
    cursor: 'pointer',
    color: $theme.colors.contentPrimary,
}));
