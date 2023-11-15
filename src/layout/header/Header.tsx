import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";
import {SocialNetwork} from "../../components/socialNetwork/SocialNetwork";
import styled from "styled-components";
import {darkTheme, lightTheme} from "../../styles/Theme.styled";
import {ThemeEnum} from "../../styles/interfaces/styled";
import {Icon} from "../../components/icon/Icon";

export const Header = ({theme, setTheme}: any) => {
    console.log({theme})
    return (
        <StyledHeader>
            <Logo/>
            <Menu/>
            <SocialNetwork/>
            <Theme onClick={() => setTheme(!theme)}><Icon iconId={theme ? "theme-light" : "theme-dark"} /></Theme>
        </StyledHeader>
    )
}

export default Header;

const StyledHeader = styled.header`
  width: 100%;
  display: grid;
  grid-template-columns: auto 1fr auto auto;
  gap: 50px;
`

const Theme = styled.div`
  justify-self: center;
  align-self: center;
  cursor: pointer;
`