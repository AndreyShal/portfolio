import styled from "styled-components";

const QuestionsForMail = () => {
    return <section>
        <H2>For any questions please mail me:</H2>
        <H3>andreyshalomitsky@gmail.com</H3>
    </section>
}

const H2 = styled.h2`
  color: ${({theme}) => theme.colors.solidHeading};

  font-family: "Poppins";
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 110%;
  text-align: center;

  margin-bottom: 9px;

  @media ${props => props.theme.media.laptop} {
    font-size: 32px;
  }
`

const H3 = styled.h2`
  background: linear-gradient(90deg, #13B0F5 -2.06%, #E70FAA 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  font-family: "Poppins";
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 110%;
  text-align: center;

  margin-bottom: 206px;

  @media ${props => props.theme.media.laptop} {
    font-size: 24px;
  }

  @media ${props => props.theme.media.mobile} {
    font-size: 18px;
  }
`

export default QuestionsForMail;