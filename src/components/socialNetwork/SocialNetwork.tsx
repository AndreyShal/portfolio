import {Icon} from "../icon/Icon";
import styled from "styled-components";

export const SocialNetwork = () => {
    return (
        <Container>
            <Link><Icon iconId={"github"}/></Link>
            <Link><Icon iconId={"twitter"}/></Link>
            <Link><Icon iconId={"linkedin"}/></Link>
        </Container>
    )
}

const Container = styled.div`
  justify-self: end;
  align-self: center;
  display: flex;
  gap: 20px;
`
const Link = styled.a`
  svg {
    width: 32px;
    height: 32px;
    object-fit: contain;
    object-position: center;
  }
`