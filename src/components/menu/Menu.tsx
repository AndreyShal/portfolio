import styled from "styled-components";

export const Menu = () => {
    return (
        <Nav>
            <Ul>
                <Li><Span>Home</Span></Li>
                <Li><Span>About</Span></Li>
                <Li><Span>Tech Stack</Span></Li>
                <Li><Span>Projects</Span></Li>
                <Li><Span>Contact</Span></Li>
            </Ul>
        </Nav>
    )
}

const Nav = styled.nav`
  justify-self: end;
  align-self: center;
`
const Ul = styled.ul`
  display: flex;
  gap: 67px;
`
const Li = styled.li`
  list-style: none;
  word-wrap: break-word;
`
const Span = styled.span`
  color: #666;
  font-family: 'DM Sans';
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 26px; /* 130% */
  cursor: pointer;
`