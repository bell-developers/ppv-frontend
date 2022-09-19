import { StyledNavigationItem } from 'baseui/header-navigation';
import { FC, ReactNode } from 'react';
import themedUseStyletron from 'themes/utils/themedUseStyletron';
import themedWithStyle from 'themes/utils/themedWithStyle';

export const CustomHomeLogo = themedWithStyle(StyledNavigationItem, ({ $theme }) => ({
    paddingLeft: 0,
    cursor: 'pointer',
    color: $theme.colors.contentPrimary,
}));

export const ThemesMenuContainer: FC<{
    children: ReactNode;
    isVisible: boolean;
}> = ({ children, isVisible }) => {
    const [css] = themedUseStyletron();

    if (isVisible === false) return null;

    return (
        <div
            className={css({
                position: 'absolute',
                top: '3.5rem',
            })}
        >
            {children}
        </div>
    );
};
