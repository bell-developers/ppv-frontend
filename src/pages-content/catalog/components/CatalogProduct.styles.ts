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
    position: 'relative',
    width: '100%',
    aspectRatio: '1 / 1',
    transition: 'box-shadow .3s ease, transform .3s ease',
    borderBottomWidth: $theme.borders.border300.borderWidth,
    borderBottomStyle: 'solid',
    borderBottomColor: $theme.borders.border300.borderColor,
    borderTopLeftRadius: $theme.borders.radius500,
    borderTopRightRadius: $theme.borders.radius500,
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
