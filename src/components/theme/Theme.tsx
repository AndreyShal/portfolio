
import styled from "styled-components";
import {darkTheme, lightTheme} from "../../styles/Theme.styled";
import {ThemeEnum} from "../../styles/interfaces/styled";
import {Icon} from "../../components/icon/Icon";

export const Theme = ({theme, setTheme}: any) => {
    return (
        <StylesTheme onClick={() => setTheme(!theme)}><Icon
            iconId={theme ? "theme-light" : "theme-dark"}/></StylesTheme>
    )
}

const StylesTheme = styled.div`
  justify-self: center;
  align-self: center;
  cursor: pointer;
`