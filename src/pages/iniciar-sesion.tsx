import Header from 'components/header/Header';
import { LoginPageBody } from 'pages-content/login/layouts/LoginPage.layout';
import { Card, StyledBody, StyledAction } from 'baseui/card';
import { Button } from 'baseui/button';
import { HeadingLarge, ParagraphMedium } from 'baseui/typography';
import { FormControl } from 'baseui/form-control';
import { Input } from 'baseui/input';
import themedUseStyletron from 'themes/utils/themedUseStyletron';
import Head from 'next/head';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { User } from 'models/User.model';
import useLogin from 'pages-content/login/hooks/useLogin';

function LoginPage() {
    const { control, handleSubmit } = useForm<User>();
    const { mutate, isLoading } = useLogin();
    const onSubmit: SubmitHandler<User> = data => mutate(data);
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
                <form onSubmit={handleSubmit(onSubmit)}>
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
                        <FormControl label={<ParagraphMedium>Usuario</ParagraphMedium>}>
                            <Controller
                                name='username'
                                control={control}
                                render={({ field }) => <Input {...field} />}
                            />
                        </FormControl>
                        <FormControl
                            label={<ParagraphMedium>Contraseña</ParagraphMedium>}
                        >
                            <Controller
                                name='password'
                                control={control}
                                render={({ field }) => <Input {...field} />}
                            />
                        </FormControl>
                    </StyledBody>
                    <StyledAction>
                        <Button
                            overrides={{ BaseButton: { style: { width: '100%' } } }}
                            isLoading={isLoading}
                        >
                            Iniciar sesión
                        </Button>
                    </StyledAction>
                </form>
            </Card>
        </LoginPageBody>
    );
}

export default LoginPage;
