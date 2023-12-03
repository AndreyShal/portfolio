import styled from "styled-components";
import {Icon} from "../icon/Icon";

type WorkExperienceType = {
    profession: string
    busyness: string
    companyName: string
    companyMap: string
    date: string
}

export const WorkExperience = (props: WorkExperienceType) => {
    return (
        <Container>
            <Profession>{props.profession}</Profession>
            <Busyness>{props.busyness}</Busyness>
            <Text><Icon iconId={"office"} viewBox="0 0 16 12"/>{props.companyName}</Text>
            <Text as={"a"} href={"https://maps.app.goo.gl/GrueD5hN9dBe8hmKA"}><Icon iconId={"location"} viewBox="0 0 16 12"/>{props.companyMap}</Text>
            <Text><Icon iconId={"calendar"} viewBox="0 0 16 12"/>{props.date}</Text>
        </Container>
    )
}

const Container = styled.div`
  display: grid;
  //grid-template-columns: repeat(3, 1 f);
  //grid-template-rows: repeat(2, 1 f);
  padding-bottom: 23px;
  border-bottom: 2px solid #EBEAED;


  span:nth-child(1) {
    grid-area: 1/1/1/span 2;
  }

  span:nth-child(2) {
    grid-area: 1/3/span 1/span 1;
    justify-self: flex-end;
  }

  p:nth-child(3) {
    grid-area: 2/1/span 1/span 1;
  }

  p:nth-child(4) {
    grid-area: 2/2/span 1/span 1;
    justify-self: flex-start;
  }

  p:nth-child(5) {
    grid-area: 2/3/span 1/span 1;
    justify-self: flex-end;
  }

  & > a {
    text-decoration: none;
  }

  @media ${props => props.theme.media.tablet} {
    span:nth-child(1) {
      grid-area: 1/1/span 1/span 2;
    }

    span:nth-child(2) {
      grid-area: 1/2/span 1/span 1;
      justify-self: flex-end;
    }

    p:nth-child(3) {
      grid-area: 3/1/span 1/span 1;
    }

    p:nth-child(4) {
      grid-area: 4/1/span 1/span 1;
      justify-self: flex-start;
    }

    p:nth-child(5) {
      grid-area: 5/1/span 1/span 1;
      justify-self: flex-start;
    }
  }

`
const Profession = styled.span`
  color: ${({theme}) => theme.colors.content};
  font-family: 'Poppins';
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: 1px;
`
const Busyness = styled.span`
  width: 84px;
  height: 24px;
  border-radius: 100px;
  background: #D7FFE0;

  color: #018C0F;
  text-align: center;
  font-family: "Poppins";
  font-size: 9px;
  font-style: normal;
  font-weight: 600;
  line-height: 288.889%;
`

const Text = styled.p`
  color: ${({theme}) => theme.colors.content};
  font-family: 'Poppins';
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 233.333%;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  
  svg {
    width: 16px;
    height: 12px;
    margin-right: 5.33px;
  }
`