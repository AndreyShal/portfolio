import styled from "styled-components";
import {Project} from "../../../components/project/Project";
import {ProjectsArray} from "./projectsArray";
import {Container} from "../../../components/Container";

const Projects = () => {
    return (
        <section>
            <Container>
                <H2>Projects</H2>
                <H3>Things I’ve built so far</H3>
                <ContainerProjects>
                    {
                        ProjectsArray.map((el, id) => (
                            <Project key={id} img={el.img} title={el.title} description={el.description} stack={el.stack}
                                     livePreview={el.livePreview} viewCode={el.viewCode}/>
                        ))
                    }
                </ContainerProjects>
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
  line-height: 54%;
  text-align: center;

  margin-bottom: 49px;
`
const H3 = styled.h3`
  color: ${({theme}) => theme.colors.content};

  font-family: "Poppins";
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 81%;
  text-align: center;

  margin-bottom: 124px;
`

const ContainerProjects = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 375px);
  column-gap: 10px;
  row-gap: 94px;
  justify-content: center;
  margin-bottom: 184px;

  @media ${props => props.theme.media.laptop} {
    column-gap: 30px;
  }
`


export default Projects;