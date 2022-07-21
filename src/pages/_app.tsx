import type { AppProps } from 'next/app';
import 'styles/reset.css';
import { Provider } from 'styletron-react';
import { BaseProvider } from 'baseui';
import { styletron } from 'utils/styletron';
import { CustomLightTheme } from 'themes/CustomLightTheme';

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <Provider value={styletron}>
            <BaseProvider theme={CustomLightTheme}>
                <Component {...pageProps} />
            </BaseProvider>
        </Provider>
    );
}
