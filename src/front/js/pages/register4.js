import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import "../../styles/loginst.css";
import Swal from 'sweetalert2'

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';


import { useNavigate } from "react-router-dom";


export const Register4 = ({ nextPage, prevPage }) => {

    const { store, actions } = useContext(Context)
    const [skills, setSkills] = useState(Array(5).fill(''));
    const [levels, setLevels] =  useState(Array(5).fill(''));
    const [role, setRole] = useState('Learner');
    const navigate = useNavigate();

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

    async function skillsLearningRegister() {
        // Call your register action here
         const areSkillsRegistered = await actions.createAssociation(skills, role, levels)
         console.log('areSkillsRegistered:' ,areSkillsRegistered)
         const isProfileLoaded = await actions.getProfile()
         console.log('isProfileLoaded:' ,isProfileLoaded)
         if (areSkillsRegistered && isProfileLoaded) {
             navigate("/dashboard")
         }
    }

    return (
        <>
        <Box
            component="form"
            sx={{
              '& > :not(style)': { mt: 0, mb: 2, width: '100%' },
            }}
            noValidate
            autoComplete="off"
          >
        <Grid container spacing={2}>
        <Grid item xs={12}>
            <p class="text-login">Choose 5 skills to
                <span className="teachandlearn"> LEARN</span>
            </p>
        </Grid>
    <Grid item xs={6}>
      <FormControl fullWidth>
        <InputLabel id="skill-select-label">Skill</InputLabel>
        <Select
          labelId="skill-select-label"
          id="skill-select"
          value={skills[0]} // Use the correct index
          label="Skill"
          onChange={(e) => updateSkill(0, e.target.value)} // Use the correct index
        >
        <MenuItem value=""><em>None</em></MenuItem>
          {store.skills && store.skills.map(skill => (
            <MenuItem key={skill.id} value={skill.id}>{skill.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Grid>
    <Grid item xs={6}>
      <FormControl fullWidth>
        <InputLabel id="level-select-label">Level</InputLabel>
        <Select
          labelId="level-select-label"
          id="level-select"
          value={levels[0]}
          label="Level"
          onChange={(e) => updateLevel(0, e.target.value)} // Use the correct index
        >
          <MenuItem value=""><em>None</em></MenuItem>
          <MenuItem value="Beginner">Beginner</MenuItem>
          <MenuItem value="Intermidiate">Intermidiate</MenuItem>
          <MenuItem value="Advanced">Advanced</MenuItem>
        </Select>
      </FormControl>
    </Grid>
    <Grid item xs={6}>
      <FormControl fullWidth>
        <InputLabel id="skill-select-label">Skill</InputLabel>
        <Select
          labelId="skill-select-label"
          id="skill-select"
          value={skills[1]} // Use the correct index
          label="Skill"
          onChange={(e) => updateSkill(1, e.target.value)} // Use the correct index
        >
        <MenuItem value=""><em>None</em></MenuItem>
          {store.skills && store.skills.map(skill => (
            <MenuItem key={skill.id} value={skill.id}>{skill.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Grid>
    <Grid item xs={6}>
      <FormControl fullWidth>
        <InputLabel id="level-select-label">Level</InputLabel>
        <Select
          labelId="level-select-label"
          id="level-select"
          value={levels[1]}
          label="Level"
          onChange={(e) => updateLevel(1, e.target.value)} // Use the correct index
        >
          <MenuItem value=""><em>None</em></MenuItem>
          <MenuItem value="Beginner">Beginner</MenuItem>
          <MenuItem value="Intermidiate">Intermidiate</MenuItem>
          <MenuItem value="Advanced">Advanced</MenuItem>
        </Select>
      </FormControl>
    </Grid>
    <Grid item xs={6}>
      <FormControl fullWidth>
        <InputLabel id="skill-select-label">Skill</InputLabel>
        <Select
          labelId="skill-select-label"
          id="skill-select"
          value={skills[2]} // Use the correct index
          label="Skill"
          onChange={(e) => updateSkill(2, e.target.value)} // Use the correct index
        >
            <MenuItem value=""><em>None</em></MenuItem>
          {store.skills && store.skills.map(skill => (
            <MenuItem key={skill.id} value={skill.id}>{skill.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Grid>
    <Grid item xs={6}>
      <FormControl fullWidth>
        <InputLabel id="level-select-label">Level</InputLabel>
        <Select
          labelId="level-select-label"
          id="level-select"
          value={levels[2]}
          label="Level"
          onChange={(e) => updateLevel(2, e.target.value)} // Use the correct index
        >
          <MenuItem value=""><em>None</em></MenuItem>
          <MenuItem value="Beginner">Beginner</MenuItem>
          <MenuItem value="Intermidiate">Intermidiate</MenuItem>
          <MenuItem value="Advanced">Advanced</MenuItem>
        </Select>
      </FormControl>
    </Grid>
    <Grid item xs={6}>
      <FormControl fullWidth>
        <InputLabel id="skill-select-label">Skill</InputLabel>
        <Select
          labelId="skill-select-label"
          id="skill-select"
          value={skills[3]} // Use the correct index
          label="Skill"
          onChange={(e) => updateSkill(3, e.target.value)} // Use the correct index
        >
            <MenuItem value=""><em>None</em></MenuItem>
          {store.skills && store.skills.map(skill => (
            <MenuItem key={skill.id} value={skill.id}>{skill.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Grid>
    <Grid item xs={6}>
      <FormControl fullWidth>
        <InputLabel id="level-select-label">Level</InputLabel>
        <Select
          labelId="level-select-label"
          id="level-select"
          value={levels[3]}
          label="Level"
          onChange={(e) => updateLevel(3, e.target.value)} // Use the correct index
        >
          <MenuItem value=""><em>None</em></MenuItem>
          <MenuItem value="Beginner">Beginner</MenuItem>
          <MenuItem value="Intermidiate">Intermidiate</MenuItem>
          <MenuItem value="Advanced">Advanced</MenuItem>
        </Select>
      </FormControl>
    </Grid>
    <Grid item xs={6}>
      <FormControl fullWidth>
        <InputLabel id="skill-select-label">Skill</InputLabel>
        <Select
          labelId="skill-select-label"
          id="skill-select"
          value={skills[4]} // Use the correct index
          label="Skill"
          onChange={(e) => updateSkill(4, e.target.value)} // Use the correct index
        >
          <MenuItem value=""><em>None</em></MenuItem>
          {store.skills && store.skills.map(skill => (
            <MenuItem key={skill.id} value={skill.id}>{skill.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Grid>
    <Grid item xs={6}>
      <FormControl fullWidth>
        <InputLabel id="level-select-label">Level</InputLabel>
        <Select
          labelId="level-select-label"
          id="level-select"
          value={levels[4]}
          label="Level"
          onChange={(e) => updateLevel(4, e.target.value)} // Use the correct index
        >
          <MenuItem value=""><em>None</em></MenuItem>
          <MenuItem value="Beginner">Beginner</MenuItem>
          <MenuItem value="Intermidiate">Intermidiate</MenuItem>
          <MenuItem value="Advanced">Advanced</MenuItem>
        </Select>
      </FormControl>
    </Grid>
    <Grid item xs={6}>
        <button type="button" class="button-login grid-btn" onClick={prevPage}>Previous</button>
    </Grid>
    <Grid item xs={6}>
    <button type="button" class="button-login positive-btn grid-btn" onClick={skillsLearningRegister}>Register</button>
    </Grid>
  </Grid>
           
          </Box>
            <p class="text-login back-home">Want to go back?
                <Link to="/" >
                    <span className="signup-button">Return home</span>
                </Link>
            </p>
    </>

    );
};