import type { AppProps } from 'next/app';
import 'styles/reset.css';
import { Provider } from 'styletron-react';
import { BaseProvider } from 'baseui';
import { styletron } from 'utils/styletron';
import { DefaultLightTheme } from 'themes/default-themes/DefaultLightTheme';
import { createContext, useEffect, useState } from 'react';
import { DefaultDarkTheme } from 'themes/default-themes/DefaultDarkTheme';
import { PuraSerendipiaLightTheme } from 'themes/pura-serendipia/PuraSerendipiaLightTheme';
import { GreenDayTheme } from 'themes/greenday/GreenDayTheme';
import { StarPlatinumTheme } from 'themes/star-platinum/StarPlatinumTheme';

type CurrentTheme = {
    id: string;
    setCurrentTheme?: (id: string) => () => void;
};

export const CurrentThemeContext = createContext<CurrentTheme>({
    id: 'pura-serendipia',
});

const themes = {
    'default-light': DefaultLightTheme,
    'default-dark': DefaultDarkTheme,
    'pura-serendipia': PuraSerendipiaLightTheme,
    greenday: GreenDayTheme,
    'star-platinum': StarPlatinumTheme,
};

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    const setTheme = (id: string) => {
        localStorage.setItem('theme-id', id);
        return setCurrentTheme({ id, setCurrentTheme: setTheme });
    };
    const [CurrentTheme, setCurrentTheme] = useState<CurrentTheme>({
        id: 'pura-serendipia',
        setCurrentTheme: setTheme,
    });

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme-id');
        if (storedTheme === 'null') setTheme('pura-serendipia');
        else setTheme(storedTheme || 'pura-serendipia');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
