import { styled } from 'baseui';

const HomeBody = styled('div', ({ $theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '100vw',
    minHeight: '100vh',
    padding: '0 10em',
    backgroundColor: $theme.colors.backgroundPrimary,
}));

const HomeHeaderOverride = {
    Root: {
        style: {
            borderBottomWidth: 'none',
            borderBottomStyle: 'none',
            borderBottomColor: 'none',
            paddingLeft: '5em',
            position: 'fixed',
            top: '0',
            left: '0',
            right: '0',
        },
    },
};

export { HomeBody, HomeHeaderOverride };
