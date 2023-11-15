import styled, {ThemeProvider} from 'styled-components';
import {Icon} from "./components/icon/Icon";
import Header from "./layout/header/Header";
import {Menu} from "./components/menu/Menu";
import Main from "./layout/main/Main";
import React, {useState} from "react";
import {lightTheme, darkTheme} from "./styles/Theme.styled";
import {ThemeContext} from "./context/ThemeContext";
import {GlobalStyles} from "./styles/GlobalStyles";
import {ThemeEnum} from "./styles/interfaces/styled";


function App() {
    const [theme, setTheme] = useState(true);
    return (
        <ThemeProvider theme={theme ? lightTheme : darkTheme}>
            <Container>
                <Header theme={theme} setTheme={setTheme}/>
                <Main/>
            </Container>
            <GlobalStyles/>
        </ThemeProvider>
    );
}

export default App;

const Container = styled.div`
  max-width: 1193px;
  margin: 0 auto;
  padding-top: 40px;
  padding-bottom: 60px;
`;

const GridContainer2 = styled.div`
  display: grid;
  //grid-template-columns: repeat(auto-fill, minmax(200px, auto));
  grid-template-columns: repeat(auto-fit, minmax(200px, auto));
  grid-auto-rows: 200px;
  gap: 10px;
`;
const GridItem2 = styled.div`
  background-color: aqua;

  &:first-child {
    display: grid;
    grid-template-columns: 50px 50px;
    grid-template-rows: 50px 50px;
  }
`;

const GridSubItem2 = styled.div`
  background-color: #1aff00;
`;

const GridContainer1 = styled.div`
  height: 100vh;
  display: grid;
  grid-auto-rows: minmax(200px, auto);
  grid-template-columns: repeat(4, 265px);
  gap: 25px;
  //
  //justify-items: center;
  //align-items: center;
  justify-content: center;
  align-content: center;
  //grid-template-areas: 
  //"one two three four"
  //"five five six eight"
  //"five five seven eight";

  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (max-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
    align-content: start ;
  }
`;
const GridItem1 = styled.div`
  background-color: aqua;

  &:nth-child(5) {
    //grid-row: 2/4;
    //grid-column: 1/3;
    //or
    //grid-area: 2/1/4/3;
    //or
    grid-area: 2/1/span 2/span 2;
    z-index: 1;

    @media screen and (max-width: 576px) {
      grid-area: 3/1/span 2/span 2;
    }
  }

  &:nth-child(6) {
    //grid-area: 2/2/3/span 2;
    //background-color: rgba(255, 192, 203, 0.39);
  }

  &:nth-child(8) {
    //grid-row: 2/4;
    //grid-column: 4/5;
    //or
    //grid-area: 2/4/4/5;
    //or
    grid-area: 2/4/span 2/span 1;

    @media screen and (max-width: 576px) {
      grid-area: 5/2/span 2/span 1;
    }
  }

  //&:first-child {
  //  grid-area: one;
  //}
  //
  //&:nth-child(2) {
  //  grid-area: two;
  //}  
  //&:nth-child(3) {
  //  grid-area: three;
  //}  
  //&:nth-child(4) {
  //  grid-area: four;
  //}  
  //&:nth-child(5) {
  //  grid-area: five;
  //}  
  //&:nth-child(6) {
  //  grid-area: six;
  //}  
  //&:nth-child(7) {
  //  grid-area: seven;
  //}  
  //&:last-child {
  //  grid-area: eight;
  //}
`;

