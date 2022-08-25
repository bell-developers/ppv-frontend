import { Cell, Grid } from 'baseui/layout-grid';
import { HeadingSmall } from 'baseui/typography';
import {
    FooterContainer,
    FooterItem,
    FooterNav,
    FooterSocialMedia,
} from './Footer.styles';
import { StyledLink } from 'baseui/link';

function Footer() {
    return (
        <FooterContainer>
            <Grid
                gridMaxWidth={850}
                gridMargins={0}
                gridGutters={0}
                gridGaps={[32, 32, 0]}
            >
                <Cell span={[4, 8, 4]}>
                    <FooterItem>
                        <HeadingSmall>Bell</HeadingSmall>
                    </FooterItem>
                </Cell>
                <Cell span={[4, 8, 4]}>
                    <FooterItem>
                        <FooterNav>
                            <StyledLink href='/'>Inicio</StyledLink>
                            <StyledLink href='/catalogo'>Catálogo</StyledLink>
                        </FooterNav>
                    </FooterItem>
                </Cell>
                <Cell span={[4, 8, 4]}>
                    <FooterItem>
                        <FooterSocialMedia>
                            <div>Mandanos un mensaje</div>
                            <div>@puraserendipia_</div>
                        </FooterSocialMedia>
                    </FooterItem>
                </Cell>
            </Grid>
        </FooterContainer>
    );
}

export default Footer;
