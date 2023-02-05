import React from "react";
import {Jumbotron} from "./migration";
import {Container} from "react-bootstrap";
import {useScrollPosition} from "../../hooks/useScrollPosition";
import {useTranslation} from 'react-i18next';
import {BsFillStarFill} from 'react-icons/bs';

const Skills = React.forwardRef(({heading, skills}, ref) => {
    const {t} = useTranslation();
    const skillsTabRef = React.useRef(null);
    const [isScrolled, setIsScrolled] = React.useState(false);

    //const navbarDimensions = useResizeObserver(navbarMenuRef);
    console.log(skills)
    useScrollPosition(
        ({prevPos, currPos}) => {
            if (!isScrolled && currPos.y - 400 < 0) setIsScrolled(true);
        },
        [],
        skillsTabRef
    );

    return (
        <Jumbotron ref={skillsTabRef} fluid className="bg-white m-0" id="skills">
            <Container className="p-5 ">
                <h2 ref={skillsTabRef} className="display-4 pb-5 text-center">
                    {t(heading)}
                </h2>
                <div className="skillsContainer">
                    {skills.map((skill, index) => (
                        <div key={index} className="skill">
                            <div className="skillHidden shadow-lg">
                                <h6>{skill.name}</h6>
                                <img src={skill.img} alt={skill.name}/>
                                <div className="stars">
                                    {new Array(skill.stars).fill(0).map((i,j) =>
                                        <BsFillStarFill key={j}/>)
                                    }
                                </div>
                            </div>

                            <img src={skill.img} alt="skill"/>
                        </div>
                    ))}
                </div>
            </Container>
        </Jumbotron>
    );
});

export default Skills;
