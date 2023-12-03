import {Icon} from "../icon/Icon";
import styled from "styled-components";

export const SocialNetwork = () => {
    return (
        <>
            <Link><Icon iconId={"github"}/></Link>
            <Link><Icon iconId={"telegram"} viewBox="0 0 50 50"/></Link>
            <Link><Icon iconId={"linkedin"}/></Link>
        </>
    )
}

const Link = styled.a`
  svg {
    width: 32px;
    height: 32px;
    object-fit: contain;
    object-position: center;
    color: ${({theme}) => theme.colors.contentSecond};
  }
`

