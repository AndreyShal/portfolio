import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {SocialNetwork} from "../../components/socialNetwork/SocialNetwork";
import {Menu} from "../header/headerMenu/menu/Menu";
import {Container} from "../../components/Container";

const items = ["Home", "About", "Tech Stack", "Projects", "Contact"];

const Footer = () => {
    return (
        <FooterStyle>
            <Container>
                <FooterInner>
                    <FooterTop>
                        <Logo isFooter/>
                        <Link>+91 12345 09876</Link>
                        <Link>info@example.com</Link>
                        <SocialNetworkContainer><SocialNetwork/></SocialNetworkContainer>
                    </FooterTop>
                    <FooterNav>
                        <Menu menuItems={items}/>
                    </FooterNav>
                    <Built>Designed and built by <mark>Andrey
                        Shalomitsky</mark> with <mark>Love</mark> & <mark>Coffee</mark></Built>
                </FooterInner>
            </Container>
        </FooterStyle>
    )
}

const FooterStyle = styled.footer`
padding-bottom: 60px;`

const FooterInner = styled.div`
  display: grid;
  row-gap: 45px;

  //grid-template-columns: auto auto;
  //grid-template-rows: auto auto;

  div:nth-child(1) {
    grid-area: 1/1/span 1/ span 2;
    padding-bottom: 40px;
  }

  nav:nth-child(2) {
    grid-area: 2/1/span 1/ span 1;
    justify-self: start;
  }

  span:nth-child(3) {
    grid-area: 2/2/span 1/ span 1;
    justify-self: end;
  }

  @media ${props => props.theme.media.laptop} {
    nav:nth-child(2) {
      grid-area: 2/1/span 1/ span 2;
      justify-self: center;
    }

    span:nth-child(3) {
      grid-area: 3/1/span 1/ span 2;
      justify-self: center;
    }
  }
`

const FooterTop = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr auto auto auto;
  align-items: center;
  column-gap: 33px;
  flex-direction: column-reverse;

  &:before {
    position: absolute;
    left: 0;
    width: 100%;
    bottom: 0;
    height: 2px;
    content: "";
    background: ${({theme}) => theme.colors.content};
    opacity: 0.3;
  }

  @media ${props => props.theme.media.tablet} {
    grid-template-columns: auto;
    justify-content: center;
    gap: 20px;
    
    a{
      justify-self: center;
    }
  }
`

const FooterNav = styled.nav`
  ul {
    display: flex;
    gap: 50px;
    font-size: 18px;

    @media ${props => props.theme.media.tablet} {
      flex-direction: column;
      align-items: center;
      gap: 5px;
    }
  }
`

const Link = styled.a`
  color: ${({theme}) => theme.colors.content};
  font-family: "DM Sans";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 144%;
`

const Built = styled.span`
  color: ${({theme}) => theme.colors.content};
  text-align: center;
  font-family: "Poppins";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 144%;

  mark {
    background: linear-gradient(90deg, #13B0F5 -2.06%, #E70FAA 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`

const SocialNetworkContainer = styled.div`
  justify-self: end;
  align-self: center;
  display: flex;
  gap: 20px;

  @media ${props => props.theme.media.laptop} {
    gap: 5px;
  }  
  
  @media ${props => props.theme.media.tablet} {
    justify-self: center;
  }
`

export default Footer;