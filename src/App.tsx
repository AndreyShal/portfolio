import styled, {ThemeProvider} from 'styled-components';
import {Icon} from "./components/icon/Icon";
import Header from "./layout/header/Header";
import Main from "./layout/sections/main/Main";
import React, {useState} from "react";
import {lightTheme, darkTheme} from "./styles/Theme.styled";
import {ThemeContext} from "./context/ThemeContext";
import {GlobalStyles} from "./styles/GlobalStyles";
import {ThemeEnum} from "./styles/interfaces/styled";
import About from "./layout/sections/about/About";
import TechStack from "./layout/sections/techStack/TechStack";
import Projects from "./layout/sections/projects/Projects";
import Footer from "./layout/footer/Footer";
import QuestionsForMail from "./layout/sections/questionsForMail/QuestionsForMail";


function App() {
    const [theme, setTheme] = useState(true);
    return (
        <ThemeProvider theme={theme ? lightTheme : darkTheme}>
            <Header theme={theme} setTheme={setTheme}/>
            <Main/>
            <About/>
            <TechStack/>
            <Projects/>
            <QuestionsForMail/>
            <Footer/>
            <GlobalStyles/>
        </ThemeProvider>
    );
}

export default App;
