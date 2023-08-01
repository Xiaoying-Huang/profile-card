import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
    return (
        <div className="card">
            <Avatar />
            <div className="data">
                <Intro />
                {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
                <SkillList />
            </div>
        </div>
    );
}

function Avatar() {
    return (<div className="avatar">
        <img src="kimutaku-2.png" alt="avatar" className="avatar" />
    </div>);
}

function Intro() {
    return (<div>
        <h1>Takuya Kimura</h1>
        <p>Takuya Kimura (Japanese: 木村 拓哉, Hepburn: Kimura Takuya, born November 13, 1972) is a Japanese actor, singer, and radio personality. He is regarded as a Japanese icon after achieving success as an actor. He was also a popular member of SMAP, one of the best-selling boy bands in Asia.</p>
    </div>);
}

function SkillList() {
    const skillList = ["Acting", "Singing", "Hair styling", "Ice hockey", "Archery"];
    const backgroundColor = ["blue", "yellow", "green", "orange", "salmon"];
    let props = [];
    for (let i = 0; i < 5; i++) {
        props.push({ skill: skillList[i], backgroundColor: backgroundColor[i] });
    }

    return (<div className="skill-list">
        {props.map((prop) => { return <Skill skill_name={prop.skill} background_color={prop.backgroundColor} /> })}
    </div>);
}

function Skill(props) {

    return (<span className="skill" style={{ background: props.background_color }}>{props.skill_name}💪</span>);

}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <App />
    </StrictMode>
);
