import React from "react";
import {Menu} from "../menu/Menu";
import styled from "styled-components";
import {SocialNetwork} from "../../../../components/socialNetwork/SocialNetwork";
import {Theme} from "../../../../components/theme/Theme";

type DesktopMenuProps = {
    menuItems: Array<string>
    theme: any
    setTheme: any
}

export const DesktopMenu: React.FC<DesktopMenuProps> = ({menuItems, theme, setTheme}) => {
    return (
        <StyledDesktopMenu>
            <Menu menuItems={menuItems}/>
            <SocialNetworkContainer><SocialNetwork/></SocialNetworkContainer>
            <Theme theme={theme} setTheme={setTheme}/>
        </StyledDesktopMenu>
    )
}


const StyledDesktopMenu = styled.nav`
  //justify-self: end;
  align-self: center;
  display: flex;
  gap: 20px;
  grid-template-columns: 1fr auto auto;
  
  ul {
    display: flex;
    gap: 67px;
    font-size: 20px;
    
    @media ${props => props.theme.media.laptop} {
      gap: 10px;
    }
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
`
