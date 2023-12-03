import styled from "styled-components";
import {Icon} from "../icon/Icon";

type ProjectType = {
    img: string
    title: string
    description: string
    stack: string
    livePreview: string
    viewCode: string
}

export const Project = (props: ProjectType) => {
    return (
        <Container>
            <ImgContainer>
                <Img src={props.img}/>
            </ImgContainer>
            <ContentContainer>
                <H4>{props.title}</H4>
                <Description>{props.description}</Description>
                <Stack>Tech stack : {props.stack}</Stack>
                <Link href={props.livePreview}><Icon iconId={'link'} viewBox={"0 0 20 20"} width={'20px'}
                                                     height={'20px'}/>Live
                    Preview</Link>
                <Link href={props.viewCode}><Icon iconId={'github'} viewBox={"0 0 30 30"} width={'20px'}
                                                  height={'20px'}/>View
                    Code</Link>
            </ContentContainer>
        </Container>
    )
}

const Container = styled.div`
  border-radius: 20px;
  overflow: hidden;
  background: ${({theme}) => theme.colors.backgroundSecond};
  box-shadow: 2px 2px 100px 0px rgba(0, 0, 0, 0.20);


`

const ImgContainer = styled.div`
  width: 100%;
  height: 260px;
  overflow: hidden;
`

const Img = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
`

const ContentContainer = styled.div`
  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(2, 1fr);
  padding: 27px 30px 25px 30px;
`

const H4 = styled.h4`
  margin-bottom: 17px;
  color: ${({theme}) => theme.colors.solidHeadingSecond};

  font-family: "Poppins";
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 93%;
  grid-area: 1/1/1 span/2 span;
`
const Description = styled.p`
  color: ${({theme}) => theme.colors.content};
  font-family: 'Poppins';
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: 144%;
  margin-bottom: 12px;
  grid-area: 2/1/1 span/2 span;
`

const Stack = styled.p`
  color: ${({theme}) => theme.colors.solidHeading};
  font-family: 'Poppins';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 162%;
  margin-bottom: 21px;
  grid-area: 3/1/1 span/2 span;
`

const Link = styled.a`
  display: grid;
  grid-auto-flow: column;
  column-gap: 10px;
  align-content: center;
  color: ${({theme}) => theme.colors.contentSecond};

  font-family: "Poppins";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 162%;
  text-decoration-line: underline;

  &:nth-of-type(1) {
    justify-self: start;
  }

  &:nth-of-type(2) {
    justify-self: end;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`


