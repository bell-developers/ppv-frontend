import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import { Key } from 'react';
import { Server } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { styletron } from 'utils/styletron';

class MyDocument extends Document {
    static async getInitialProps(context: DocumentContext) {
        const renderPage = () =>
            context.renderPage({
                // eslint-disable-next-line react/display-name
                enhanceApp: App => props =>
                    (
                        <StyletronProvider value={styletron}>
                            <App {...props} />
                        </StyletronProvider>
                    ),
            });

        const initialProps = await Document.getInitialProps({
            ...context,
            renderPage,
        });
        const serverStyletron = styletron as Server;
        const stylesheets = serverStyletron.getStylesheets() || [];
        return { ...initialProps, stylesheets };
    }
    render() {
        return (
            <Html lang='es'>
                <Head>
                    <link rel='preconnect' href='https://fonts.googleapis.com' />
                    <link rel='preconnect' href='https://fonts.gstatic.com' />
                    <link
                        href='https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap'
                        rel='stylesheet'
                    />
                    {/* @ts-ignore */}
                    {this.props.stylesheets.map(
                        (
                            sheet: {
                                css: any;
                                attrs: { [x: string]: any; media: string };
                            },
                            i: Key
                        ) => (
                            <style
                                className='_styletron_hydrate_'
                                dangerouslySetInnerHTML={{ __html: sheet.css }}
                                media={sheet.attrs.media}
                                data-hydrate={sheet.attrs['data-hydrate']}
                                key={i}
                            />
                        )
                    )}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
