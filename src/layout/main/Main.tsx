import styled from "styled-components";
import {lightTheme} from "../../styles/Theme.styled";

const Main = () => {
    return (
        <Container>
            <H1>Hi 👋,<br/>
                My name is<br/>
                <mark>Pavan MG</mark><br/>
                I build things for web</H1>
        </Container>
    )
}

const Container = styled.section`
  display: flex;
`
const H1 = styled.h1`
  color: ${({theme}) => theme.colors.solidHeading};
  font-family: 'Poppins';
  font-size: 58px;
  font-style: normal;
  font-weight: 700;
  line-height: 70px;
  letter-spacing: -1px;

  mark {
    background: ${({theme}) => theme.colors.gradientHeading};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

  }
`
export default Main;