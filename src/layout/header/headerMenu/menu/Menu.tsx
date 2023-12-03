import styled, {css} from "styled-components";
import React from "react";

type MenuProps =  {
    isFooter?: boolean
    menuItems: Array<string>
}

export const Menu: React.FC<MenuProps> = ({isFooter, menuItems}) => {
    return (
            <ul role={'menu'} aria-label={"Menu"}>
                {menuItems.map((item, index) => {
                    return  <Li role={"menuitem"} key={index} tabIndex={index}>{item}</Li>
                })}
            </ul>
    )
}


const Li = styled.li`
  list-style: none;
  word-wrap: break-word;
  
  color: ${({theme}) => theme.colors.content};
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 500;
  line-height: 26px; /* 130% */
  cursor: pointer;
`