import type { AppProps } from 'next/app';
import 'styles/reset.css';
import 'styles/base.css';
import { Provider } from 'styletron-react';
import { Client, Server } from 'styletron-engine-atomic';
import { BaseProvider, LightTheme, createTheme } from 'baseui';
import type { Theme } from 'baseui';

const styletron = typeof window === 'undefined' ? new Server() : new Client();
const customTheme: Theme = createTheme({
    primaryFontFamily: 'Poppins',
});

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <Provider value={styletron}>
            <BaseProvider theme={customTheme}>
                <Component {...pageProps} />
            </BaseProvider>
        </Provider>
    );
}
