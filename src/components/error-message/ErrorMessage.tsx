import { Alert } from 'baseui/icon';
import { LabelLarge } from 'baseui/typography';
import { ReactNode } from 'react';
import { StyleObject } from 'styletron-standard';
import { CustomTheme } from 'themes/CustomTheme.type';
import themedUseStyletron from 'themes/utils/themedUseStyletron';
import { ErrorMessageContainer } from './ErrorMessage.styles';

type ErrorMessageProps = {
    containerStyles?: (theme: CustomTheme) => StyleObject;
    children?: ReactNode;
};

function ErrorMessage(props: ErrorMessageProps) {
    const { children, containerStyles } = props;
    const [css, theme] = themedUseStyletron();

    return (
        <ErrorMessageContainer className={containerStyles && css(containerStyles(theme))}>
            <Alert color={theme.colors.negative} size={64} />
            {children ? (
                children
            ) : (
                <LabelLarge>
                    Ha ocurrido un error. <br /> Por favor, recarge la página.
                </LabelLarge>
            )}
        </ErrorMessageContainer>
    );
}

export default ErrorMessage;
