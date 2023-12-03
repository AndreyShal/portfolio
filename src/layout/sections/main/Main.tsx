import styled from "styled-components";
import {lightTheme} from "../../../styles/Theme.styled";
import personImg from "../../../assets/images/person.webp";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {PhotoPattern} from "../../../components/icon/Icon";
import {Container} from "../../../components/Container";

const Main = () => {
    return (
        <section>
            <Container>
                <MainContainer>
                    <FlexWrapper direction={"column"}>
                        <H2>
                            Hi 👋,<br/>
                            My name is<br/>
                            <mark>Andrey Shalomitsky</mark>
                            <br/>
                        </H2>
                        <H1>I frontend developer</H1>
                    </FlexWrapper>
                    <Photo>
                        <PhotoPattern/>
                    </Photo>
                </MainContainer>
            </Container>
        </section>
    )
}

const MainContainer = styled.section`
  padding-top: 339px;
  display: flex;
  justify-content: center;
  gap: 198px;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 182px;
`

const H1 = styled.h1`
  color: ${({theme}) => theme.colors.solidHeading};
  font-family: 'Poppins';
  font-size: 58px;
  font-style: normal;
  font-weight: 700;
  line-height: 70px;
  letter-spacing: -1px;
`
const H2 = styled.h1`
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
const Photo = styled.div`
  position: relative;
  width: 349px;
  height: 349px;
  padding: 9%;

  &:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    background: ${({theme}) => theme.colors.gradientHeading};
    border-radius: 230px;
  }

  &:before {
    content: "";
    position: absolute;
    left: 3%;
    top: 3%;
    right: 3%;
    bottom: 3%;
    z-index: 2;
    background-size: cover;
    background-image: url(${personImg});
    border-radius: 230px;
  }

  svg {
    position: absolute;
    top: -40%;
    left: -28%;
    width: 150%;
  }

  @media ${props => props.theme.media.tablet} {
    width: 309px;
    height: 309px;
  } 
`
export default Main;