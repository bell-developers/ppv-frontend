import type { AppProps } from 'next/app';
import 'styles/reset.css';
import { Provider } from 'styletron-react';
import { BaseProvider } from 'baseui';
import { CustomTheme } from 'styles/CustomTheme';
import { styletron } from 'utils/styletron';

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <Provider value={styletron}>
            <BaseProvider theme={CustomTheme}>
                <Component {...pageProps} />
            </BaseProvider>
        </Provider>
    );
}
