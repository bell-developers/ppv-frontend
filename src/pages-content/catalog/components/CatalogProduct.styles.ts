import themedStyled from 'themes/utils/themedStyled';

export const CatalogProductContainer = themedStyled('div', ({ $theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    borderRadius: $theme.borders.radius500,
    ...$theme.borders.border300,
    textAlign: 'center',
    cursor: 'pointer',
}));

export const CatalogProductImageContainer = themedStyled('div', ({ $theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    padding: '1rem',
    boxSizing: 'border-box',
    backgroundColor: $theme.colors.backgroundPrimary,
    borderBottomLeftRadius: $theme.borders.radius500,
    borderBottomRightRadius: $theme.borders.radius500,
}));

export const CatalogProductDataContainer = themedStyled('div', ({ $theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    padding: '1rem',
    boxSizing: 'border-box',
    backgroundColor: $theme.colors.backgroundPrimary,
    borderBottomLeftRadius: $theme.borders.radius500,
    borderBottomRightRadius: $theme.borders.radius500,
}));
