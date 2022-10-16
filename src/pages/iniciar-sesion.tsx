import Header from 'components/header/Header';
import { LoginPageBody } from 'pages-content/login/LoginPage.layout';
import { Card, StyledBody, StyledAction } from 'baseui/card';
import { Button } from 'baseui/button';
import { HeadingLarge, ParagraphMedium } from 'baseui/typography';
import { FormControl } from 'baseui/form-control';
import { Input } from 'baseui/input';
import themedUseStyletron from 'themes/utils/themedUseStyletron';
import Head from 'next/head';

function LoginPage() {
    const [, theme] = themedUseStyletron();

    return (
        <LoginPageBody>
            <Head>
                <title>Iniciar sesión - Bell</title>
            </Head>
            <Header />
            <Card
                overrides={{
                    Root: {
                        style: {
                            width: 'max(300px, 25vw)',
                            marginRight: 'auto',
                            marginLeft: 'auto',
                            borderRightColor: theme.colors.backgroundTertiary,
                            borderLeftColor: theme.colors.backgroundTertiary,
                            borderTopColor: theme.colors.backgroundTertiary,
                            borderBottomColor: theme.colors.backgroundTertiary,
                        },
                    },
                }}
            >
                <StyledBody>
                    <HeadingLarge
                        overrides={{
                            Block: {
                                style: {
                                    marginBottom: '1.5rem',
                                    marginTop: '1.5rem',
                                    fontWeight: '600',
                                },
                            },
                        }}
                    >
                        Iniciar sesión
                    </HeadingLarge>
                    <FormControl label={() => <ParagraphMedium>Usuario</ParagraphMedium>}>
                        <Input />
                    </FormControl>
                    <FormControl
                        label={() => <ParagraphMedium>Contraseña</ParagraphMedium>}
                    >
                        <Input type='password' />
                    </FormControl>
                </StyledBody>
                <StyledAction>
                    <Button overrides={{ BaseButton: { style: { width: '100%' } } }}>
                        Iniciar sesión
                    </Button>
                </StyledAction>
            </Card>
        </LoginPageBody>
    );
}

export default LoginPage;
