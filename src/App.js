import "./App.css";
import Header from "./components/Header";
import Information from "./components/Information";
import Education from "./components/Education";
import Experiences from "./components/Experiences";
import AIHighlights from "./components/AIHighlights";
import TechStack from "./components/Technology";
import Contact from "./components/Contact";
import { Element } from "react-scroll";

function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <Element name="information">
                    <Information />
                </Element>
                <Element name="education">
                    <Education />
                </Element>
                <Element name="experiences">
                    <Experiences />
                </Element>
                <Element name="aiwork">
                    <AIHighlights />
                </Element>
                <Element name="techstack">
                    <TechStack />
                </Element>
                <Element name="contact">
                    <Contact />
                </Element>
            </main>
        </div>
    );
}

export default App;
