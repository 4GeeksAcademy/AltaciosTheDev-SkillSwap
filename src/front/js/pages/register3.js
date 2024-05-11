import React, { useContext, useState,useEffect} from "react";
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




export const Register3 = ({nextPage, prevPage}) => {

    const { store, actions } = useContext(Context)
    const [category, setCategory] = useState('');
    const [level, setLevel] = useState('');
    const [role, setRole] = useState('Tutor');
    const [skill,setSkill]=useState('');

        useEffect(() => {
  actions.getSkills()
   }, [])


       // Declare userSkillElements variable
  let userSkill = null;

  // Declare categoryElements variable
  

 

    //  if (store.userSkillsAssociations) {
    //     userSkillElements = store.userSkillsAssociations.map((association) => (
    //       <SkillCard
    //         key={association.user_skill_association_id}
    //         user_name={association.user_name}
    //         skill_name={association.skill_name}
    //         role={association.role}
    //         level={association.level}
    //         user_gender={association.user_gender}
    //         category_name={association.category_name}
    //         getTutorProfile={() => actions.getTutorProfile(association.user_id)}
    //       />
    //     ));
    //   }


    

    return (



        <div className="text-center">
            <div>
                <h1>Skills</h1>
                <p>Select the skills you have to teach </p>
                <p>First skill: </p>
                <a>Role</a>
                <input
                    className="loginput text-center"
                    type="text"
                    placeholder="Tutor"
                    value={role}
                    disabled
                />
                
                <a>Level</a>
                <select
                    labelId="level-select-label"
                    id="level-select"
                    value={level}
                    label="Level"
                    onChange={(event) => setLevel(event.target.value)}
                >
                    <option value="Beginner">Beginner</option>
                    <option value="Intermidiate">Intermidiate</option>
                    <option value="Advanced">Advanced</option>
                </select>

                <a>Category: </a>
                <select
                    className="loginput"
                    labelId="category-select-label"
                    id="category-select"
                    value={category}
                    label="Category"
                    onChange={(e) => setCategory(e.target.value)}
                >
                    {/* <option>{categoriesElement}</option> */}
                </select>
            </div>
            <div>
            <p>Second skill: </p>
            <a>Role</a>
                <input
                    className="loginput text-center"
                    type="text"
                    placeholder="Tutor"
                    value={role}
                    disabled
                />
                
                <a>Level</a>
                <select
                    labelId="level-select-label"
                    id="level-select"
                    value={level}
                    label="Level"
                    onChange={(event) => setLevel(event.target.value)}
                >
                    <option value="Beginner">Beginner</option>
                    <option value="Intermidiate">Intermidiate</option>
                    <option value="Advanced">Advanced</option>
                </select>

                <a>Skill: </a>
                
                <select
                    className="loginput"
                    labelId="skill-select-label"
                    id="skill-select"
                    value={skill}
                    label="Skill"
                    onChange={(e)=>setSkill(e.target.value)}
                >
                    {store.skills && store.skills.map(skill => (
                        <option key={skill.id} value={skill.id}>{skill.name}</option>
                    ))}
                </select>
            </div>
            <div>
            <p>third skill: </p>
            <a>Role</a>
                <input
                    className="loginput text-center"
                    type="text"
                    placeholder="Tutor"
                    value={role}
                    disabled
                />
                
                <a>Level</a>
                <select
                    labelId="level-select-label"
                    id="level-select"
                    value={level}
                    label="Level"
                    onChange={(event) => setLevel(event.target.value)}
                >
                    <option value="Beginner">Beginner</option>
                    <option value="Intermidiate">Intermidiate</option>
                    <option value="Advanced">Advanced</option>
                </select>

                <a>Category: </a>
                <select
                    className="loginput"
                    labelId="category-select-label"
                    id="category-select"
                    value={category}
                    label="Category"
                    onChange={(e) => setCategory(e.target.value)}
                >
                    {/* <option>{categoriesElement}</option> */}
                </select>
            </div>
            <div>
            <p>Fourth skill: </p>
            <a>Role</a>
                <input
                    className="loginput text-center"
                    type="text"
                    placeholder="Tutor"
                    value={role}
                    disabled
                />
                
                <a>Level</a>
                <select
                    labelId="level-select-label"
                    id="level-select"
                    value={level}
                    label="Level"
                    onChange={(event) => setLevel(event.target.value)}
                >
                    <option value="Beginner">Beginner</option>
                    <option value="Intermidiate">Intermidiate</option>
                    <option value="Advanced">Advanced</option>
                </select>

                <a>Category: </a>
                <select
                    className="loginput"
                    labelId="category-select-label"
                    id="category-select"
                    value={category}
                    label="Category"
                    onChange={(e) => setCategory(e.target.value)}
                >
                    {/* <option>{categoriesElement}</option> */}
                </select>
            </div>
            <div>
            <p>fifth skill: </p>
            <a>Role</a>
                <input
                    className="loginput text-center"
                    type="text"
                    placeholder="Tutor"
                    value={role}
                    disabled
                />
                
                <a>Level</a>
                <select
                    labelId="level-select-label"
                    id="level-select"
                    value={level}
                    label="Level"
                    onChange={(event) => setLevel(event.target.value)}
                >
                    <option value="Beginner">Beginner</option>
                    <option value="Intermidiate">Intermidiate</option>
                    <option value="Advanced">Advanced</option>
                </select>

                <a>Category: </a>
                <select
                    className="loginput"
                    labelId="category-select-label"
                    id="category-select"
                    value={category}
                    label="Category"
                    onChange={(e) => setCategory(e.target.value)}
                >
                    {/* <option>{categoriesElement}</option> */}
                </select>
            </div>
            
            <button type="button" className="nextbutton" onClick={prevPage}>Previous</button>
            <button type="button" className="nextbutton" onClick={nextPage}>Next</button>
        </div>

    );
};