import type { AppProps } from 'next/app';
import 'styles/reset.css';
import { Provider } from 'styletron-react';
import { BaseProvider } from 'baseui';
import { styletron } from 'utils/styletron';
import { CustomLightTheme } from 'themes/CustomLightTheme';
import { createContext, useState } from 'react';
import { CustomDarkTheme } from 'themes/CustomDarkTheme';
import { PuraSerendipiaLightTheme } from 'themes/pura-serendipia/PuraSerendipiaLightTheme';

type CurrentTheme = {
    id: string;
    setCurrentTheme?: (id: string) => () => void;
};

export const CurrentThemeContext = createContext<CurrentTheme>({ id: 'default' });

const themes = {
    'default-light': CustomLightTheme,
    'default-dark': CustomDarkTheme,
    'pura-serendipia': PuraSerendipiaLightTheme,
};

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    const setTheme = (id: string) => setCurrentTheme({ id, setCurrentTheme: setTheme });
    const [CurrentTheme, setCurrentTheme] = useState<CurrentTheme>({
        id: 'pura-serendipia',
        setCurrentTheme: setTheme,
    });

    return (
        <Provider value={styletron}>
            {/* Pass your theme in theme props */}
            <CurrentThemeContext.Provider value={CurrentTheme}>
                <BaseProvider theme={themes[CurrentTheme.id]}>
                    <Component {...pageProps} />
                </BaseProvider>
            </CurrentThemeContext.Provider>
        </Provider>
    );
}
