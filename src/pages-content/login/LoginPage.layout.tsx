import { ReactNode } from 'react';
import themedUseStyletron from 'themes/utils/themedUseStyletron';

export const LoginPageBody = ({ children }: { children: ReactNode }) => {
    const [css, theme] = themedUseStyletron();
    return (
        <div
            className={css({
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
                boxSizing: 'border-box',
                backgroundColor: theme.colors.backgroundPrimary,
                gap: '2.5em',
                [theme.mediaQuery.medium]: {
                    alignItems: 'center',
                },
            })}
        >
            {children}
        </div>
    );
};
