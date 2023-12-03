import styled, {css} from "styled-components";

const Header = styled.header<{visible?: boolean}>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 41px;
  z-index: 100;
  transition: transform 0.3s ease-in-out;

${props => !props.visible && css`
  transform: translateY(-100%);
`}
`

export const S = {
    Header,
}