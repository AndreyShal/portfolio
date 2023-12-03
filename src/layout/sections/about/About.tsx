import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {WorkExperience} from "../../../components/workExperience/WorkExperience";
import {Drawing} from "../../../components/icon/Icon";
import {Container} from "../../../components/Container";

const About = () => {
    return (
        <Section>
            <Drawing/>
            <Container>
                <AboutContainer>
                    <FlexWrapper direction={"column"}>
                        <H2>About Me</H2>
                        <P>The Generator App is an online tool that helps you to export ready-made templates ready to
                            work
                            as
                            your future website. It helps you to combine slides, panels and other components and export
                            it
                            as a
                            set of static files: HTML/CSS/JS.</P>
                    </FlexWrapper>
                    <FlexWrapper direction={"column"}>
                        <H2>Work Experience</H2>
                        <WorkExperience profession={"Junior Web Developer"} busyness={"Full Time"}
                                        companyName={"The First Studio"} companyMap={"London"}
                                        date={"Sep 2021 - November 2023"}/>
                    </FlexWrapper>
                </AboutContainer>
            </Container>
        </Section>

    )
}

export default About;

const Section = styled.section`
  width: 100%;
  position: relative;
  overflow: hidden;

  & > svg {
    top: -20%;
    left: 52%;
    position: absolute;
    width: 834.658px;
    height: 834.655px;
    transform: translateX(0%);
    object-fit: contain;
  }
`

const AboutContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 708px;
  display: flex;
  flex-direction: column;
  gap: 38px;
  margin-bottom: 200px;


`

const H2 = styled.h2`
  color: ${({theme}) => theme.colors.solidHeading};

  font-family: "Poppins";
  font-size: 42px;
  font-style: normal;
  font-weight: 700;
  line-height: 123.81%;
  letter-spacing: -0.4px;

  margin-bottom: 38px;
`

const P = styled.p`
  color: ${({theme}) => theme.colors.content};
  font-family: "Poppins";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px; /* 144.444% */
`