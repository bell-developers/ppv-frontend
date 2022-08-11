import { Spinner } from 'baseui/spinner';
import themedUseStyletron from 'themes/utils/themedUseStyletron';

function CustomSpinner() {
    const [, theme] = themedUseStyletron();

    return <Spinner $size='64' $borderWidth='8' $color={theme.colors.primary} />;
}

export default CustomSpinner;
