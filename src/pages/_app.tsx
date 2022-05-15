import type { AppProps } from 'next/app';
import '../styles/reset.css';

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return <Component {...pageProps} />;
}
