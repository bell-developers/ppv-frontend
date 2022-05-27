import type { AppProps } from 'next/app';
import 'styles/reset.css';
import { Provider } from 'styletron-react';
import { Client, Server } from 'styletron-engine-atomic';
import { BaseProvider } from 'baseui';
import { CustomTheme } from 'styles/CustomTheme';

const styletron = typeof window === 'undefined' ? new Server() : new Client();

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <Provider value={styletron}>
            <BaseProvider theme={CustomTheme}>
                <Component {...pageProps} />
            </BaseProvider>
        </Provider>
    );
}
