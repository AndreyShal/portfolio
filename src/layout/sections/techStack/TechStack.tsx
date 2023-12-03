import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon";
import {Container} from "../../../components/Container";

const TechStack = () => {
    return (
        <section>
            <Container>
                <H2>My Tech Stack</H2>
                <H3>Technologies I’ve been working with recently</H3>
                <ContainerTechStack>
                    <Icon iconId={"html"} viewBox="0 0 120 120"/>
                    <Icon iconId={"css"} viewBox="0 0 120 120"/>
                    <Icon iconId={"js"} viewBox="0 0 120 120"/>
                    <Icon iconId={"react"} viewBox="0 0 120 120"/>
                    <Icon iconId={"redux"} viewBox="0 0 120 120"/>
                    <Icon iconId={"sass"} viewBox="0 0 120 120"/>
                    <Icon iconId={"git"} viewBox="0 0 120 120"/>
                    <Icon iconId={"gsap"} viewBox="0 0 120 120"/>
                    <Icon iconId={"vscode"} viewBox="0 0 120 120"/>
                    <Icon iconId={"github"} viewBox="0 0 30 30"/>
                </ContainerTechStack>
            </Container>
        </section>

    )
}

const H2 = styled.h2`
  color: ${({theme}) => theme.colors.solidHeading};

  font-family: "Poppins";
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 110%;
  text-align: center;

  margin-bottom: 49px;
`
const H3 = styled.h3`
  color: ${({theme}) => theme.colors.content};

  font-family: "Poppins";
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 110%;
  text-align: center;
  
  margin-bottom: 124px;
`

const ContainerTechStack = styled.div`
  display: grid;
  //grid-auto-flow: column;
  grid-template-columns: repeat(auto-fill, 120px);
  column-gap: 105px;
  row-gap: 94px;
  justify-content: center;
  margin-bottom: 214px;

  @media ${props => props.theme.media.tablet} {
    grid-template-columns: repeat(auto-fill, 80px);
  }
  
  svg {
    width: 100%;
    height: 100%;
    //width: 120px;
    //height: 120px;
  }
`

export default TechStack;