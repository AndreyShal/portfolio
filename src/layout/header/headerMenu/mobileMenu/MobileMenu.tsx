import React, {useState} from "react";
import styled, {css} from "styled-components";
import {Menu} from "../menu/Menu";
import {SocialNetwork} from "../../../../components/socialNetwork/SocialNetwork";
import {Theme} from "../../../../components/theme/Theme";
import {Icon} from "../../../../components/icon/Icon";
import {Logo} from "../../../../components/logo/Logo";

type DesktopMenuProps = {
    menuItems: Array<string>
    theme: any
    setTheme: any
}


export const MobileMenu: React.FC<DesktopMenuProps> = ({menuItems, theme, setTheme}) => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <StyledMobileMenu>
            <BurgerButton isOpen={isOpen} onClick={() => setIsOpen(true)}>
                <Icon iconId={"burger-open"} viewBox="0 0 30 30"/>
            </BurgerButton>

            <MobileMenuPopup isOpen={isOpen}>
                <MobileMenuPopupTop>
                    <ThemeContainer>
                        <Theme theme={theme} setTheme={setTheme}/>
                    </ThemeContainer>
                    <CloseMenu onClick={() => setIsOpen(false)}>
                        <Icon iconId={"burger-close"} viewBox="0 0 30 30"/>
                    </CloseMenu>
                </MobileMenuPopupTop>
                <MobileMenuContainer>
                    <Menu menuItems={menuItems}/>
                </MobileMenuContainer>
                <SocialNetworkContainer>
                    <SocialNetwork/>
                </SocialNetworkContainer>
            </MobileMenuPopup>
        </StyledMobileMenu>
    )
}

const StyledMobileMenu = styled.div`
`

const MobileMenuPopup = styled.div<{ isOpen?: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: grey;
  padding: 41px 15px 0 15px;
  z-index: 99999;
  transform: translateX(100%);
  transition: transform 0.3s ease-in-out;

  display: flex;
  flex-direction: column;
  gap: 3svh;

  ${props => props.isOpen && css`
    transform: translateX(0%);
  `}
`

const MobileMenuPopupTop = styled.div`
  display: flex;
  gap: 20px;
`

const BurgerButton = styled.div<{ isOpen?: boolean }>`
  position: fixed;
  top: 40px;
  right: 20px;
  width: 45px;
  height: 45px;
  color: ${({theme}) => theme.colors.content};
  cursor: pointer;
`

const CloseMenu = styled.div`
  margin-left: auto;
  margin-right: 0;
  width: 45px;
  height: 45px;
  color: ${({theme}) => theme.colors.content};
  cursor: pointer;
  
  svg {
    width: 100%;
    height: 100%;
    object-position: center;
    object-fit: cover;
  }
`

const MobileMenuContainer = styled.nav`
  ul {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    font-size: 24px;
    gap: 10px;

    li {
    }
  }
`

const ThemeContainer = styled.div`
  
`

const SocialNetworkContainer = styled.div`
  display: flex;
  gap: 20px;
`