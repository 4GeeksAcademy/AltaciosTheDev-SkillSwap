import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import "../../styles/loginst.css";

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';




export const Register3 = ({ nextPage, prevPage }) => {

    const { store, actions } = useContext(Context)
    const [skills, setSkills] = useState([]);
    const [levels, setLevels] = useState([]);
    const [role, setRole] = useState('Tutor');

    useEffect(() => {
        actions.getSkills()
    }, [])

    // Update a specific skill or level
    const updateSkill = (index, value) => {
        const newSkills = [...skills];
        newSkills[index] = parseInt(value);
        setSkills(newSkills);
        console.log(newSkills)
        console.log(typeof newSkills[0])
    };

    const updateLevel = (index, value) => {
        const newLevels = [...levels];
        newLevels[index] = value;
        setLevels(newLevels);
        console.log(newLevels)
    };

    async function skillsTutoringRegister() {
        // Call your register action here
        const areSkillsRegistered = await actions.createAssociation(skills, role, levels)
        console.log('areSkillsRegistered:' ,areSkillsRegistered)
        if (areSkillsRegistered) {
            nextPage(); // Call nextPage as a function
        }
    }

    return (
        <div className="text-center">
            <div>
                <h1>Skills to Tutor</h1>
                <p>Select skills and levels </p>
            </div>
            <div>
                <p>First skill: </p>

                <a>Skill: </a>

                <select
                    className="loginput"
                    labelId="skill-select-label"
                    id="skill-select"
                    value={skills[0]} // Use the correct index
                    label="Skill"
                    onChange={(e) => updateSkill(0, e.target.value)} // Use the correct index
                    >
                    {store.skills && store.skills.map(skill => (
                        <option key={skill.id} value={skill.id}>{skill.name}</option>
                    ))}
                </select>
                <a>Level</a>
                <select
                    className="loginput"
                    labelId="level-select-label"
                    id="level-select"
                    value={levels[0]}
                    label="Level"
                    onChange={(e) => updateLevel(0, e.target.value)} // Use the correct index
                >
                    <option value="Beginner">Beginner</option>
                    <option value="Intermidiate">Intermidiate</option>
                    <option value="Advanced">Advanced</option>
                </select>


            </div>

            <div>
                <p>Second skill: </p>

                <a>Skill: </a>

                <select
                    className="loginput"
                    labelId="skill-select-label"
                    id="skill-select"
                    value={skills[1]} // Use the correct index
                    label="Skill"
                    onChange={(e) => updateSkill(1, e.target.value)} // Use the correct index
                    >
                    {store.skills && store.skills.map(skill => (
                        <option key={skill.id} value={skill.id}>{skill.name}</option>
                    ))}
                </select>
                <a>Level</a>
                <select
                    className="loginput"
                    labelId="level-select-label"
                    id="level-select"
                    value={levels[1]}
                    label="Level"
                    onChange={(e) => updateLevel(1, e.target.value)} // Use the correct index
                >
                    <option value="Beginner">Beginner</option>
                    <option value="Intermidiate">Intermidiate</option>
                    <option value="Advanced">Advanced</option>
                </select>


            </div>
            <div>
                <p>Third skill: </p>

                <a>Skill: </a>

                <select
                    className="loginput"
                    labelId="skill-select-label"
                    id="skill-select"
                    value={skills[2]} // Use the correct index
                    label="Skill"
                    onChange={(e) => updateSkill(2, e.target.value)} // Use the correct index
                    >
                    {store.skills && store.skills.map(skill => (
                        <option key={skill.id} value={skill.id}>{skill.name}</option>
                    ))}
                </select>
                <a>Level</a>
                <select
                    className="loginput"
                    labelId="level-select-label"
                    id="level-select"
                    value={levels[2]}
                    label="Level"
                    onChange={(e) => updateLevel(2, e.target.value)} // Use the correct index
                >
                    <option value="Beginner">Beginner</option>
                    <option value="Intermidiate">Intermidiate</option>
                    <option value="Advanced">Advanced</option>
                </select>


            </div>
            <div>
                <p>Fourth skill: </p>

                <a>Skill: </a>

                <select
                    className="loginput"
                    labelId="skill-select-label"
                    id="skill-select"
                    value={skills[3]} // Use the correct index
                    label="Skill"
                    onChange={(e) => updateSkill(3, e.target.value)} // Use the correct index
                    >
                    {store.skills && store.skills.map(skill => (
                        <option key={skill.id} value={skill.id}>{skill.name}</option>
                    ))}
                </select>
                <a>Level</a>
                <select
                    className="loginput"
                    labelId="level-select-label"
                    id="level-select"
                    value={levels[3]}
                    label="Level"
                    onChange={(e) => updateLevel(3, e.target.value)} // Use the correct index
                >
                    <option value="Beginner">Beginner</option>
                    <option value="Intermidiate">Intermidiate</option>
                    <option value="Advanced">Advanced</option>
                </select>


            </div>
            <div>
                <p>Fifth skill: </p>

                <a>Skill: </a>

                <select
                    className="loginput"
                    labelId="skill-select-label"
                    id="skill-select"
                    value={skills[4]} // Use the correct index
                    label="Skill"
                    onChange={(e) => updateSkill(4, e.target.value)} // Use the correct index
                    >
                    {store.skills && store.skills.map(skill => (
                        <option key={skill.id} value={skill.id}>{skill.name}</option>
                    ))}
                </select>
                <a>Level</a>
                <select
                    className="loginput"
                    labelId="level-select-label"
                    id="level-select"
                    value={levels[4]}
                    label="Level"
                    onChange={(e) => updateLevel(4, e.target.value)} // Use the correct index
                >
                    <option value="Beginner">Beginner</option>
                    <option value="Intermidiate">Intermidiate</option>
                    <option value="Advanced">Advanced</option>
                </select>


            </div>

            <button type="button" className="nextbutton" onClick={prevPage}>Previous</button>
            <button type="button" className="nextbutton" onClick={skillsTutoringRegister}>Next</button>
        </div>

    );
};