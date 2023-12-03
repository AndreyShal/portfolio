import {Logo} from "../../components/logo/Logo";
import styled from "styled-components";
import {Container} from "../../components/Container";
import {S} from "./Header_Styles"
import React, {useEffect, useState} from "react";
import {DesktopMenu} from "./headerMenu/desktopMenu/DesktopMenu";
import {MobileMenu} from "./headerMenu/mobileMenu/MobileMenu";

const menuItems = ["Home", "About", "Tech Stack", "Projects", "Contact"];

export const Header: React.FC<any> = ({theme, setTheme}) => {
    const  [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 810;

    useEffect(()=> {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleWindowResize);

        return () => window.removeEventListener("resize", handleWindowResize)
    },[]);

    const [position, setPosition] = useState(window.pageYOffset)
    const [visible, setVisible] = useState(true)
    useEffect(()=> {
        const handleScroll = () => {
            let moving = window.pageYOffset

            setVisible(position > moving);
            setPosition(moving)
        };
        window.addEventListener("scroll", handleScroll);
        return(() => {
            window.removeEventListener("scroll", handleScroll);
        })
    })

    return (
        <S.Header visible={visible}>
            <Container>
                <Inner>
                    <Logo/>
                    {width < breakpoint ? <MobileMenu menuItems={menuItems} theme={theme} setTheme={setTheme}/> : <DesktopMenu menuItems={menuItems} theme={theme} setTheme={setTheme}/>}
                </Inner>
            </Container>
        </S.Header>
    )
}

export default Header;



const Inner = styled.div`
  display: flex;
  justify-content: space-between;


  @media ${props => props.theme.media.laptop} {
    gap: 20px;
  }
`

