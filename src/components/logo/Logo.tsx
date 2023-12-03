import {Icon, LogoImg} from "../icon/Icon";
import styled from "styled-components";

type LogoProps = {
    isFooter?: boolean
}

export const Logo = (props: LogoProps) => {
    return (
        <Link href={"/"} isFooter={props.isFooter}><LogoImg /></Link>
    )
}

const Link = styled.a<LogoProps>`
  width: 97px;
  svg {
    width: 100%;
    object-position: center;
    path{
     fill: ${props => props.isFooter ? props.theme.colors.solidHeading : null}; 
    }
  }
`