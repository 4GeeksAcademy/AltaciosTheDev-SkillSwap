import React, { useContext, useState } from 'react'
import { Context } from "../../store/appContext";
import personLogo from "../../../img/personLogo.png"
import { BiSolidTired } from 'react-icons/bi';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

import { useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function Main() {
  const { store, actions } = useContext(Context);

  const [newUser, setNewUser] = useState("")

  const [associationToEdit, setAssociationToEdit] = React.useState(null);

  const [level, setLevel] = useState('');
  const [role, setRole] = useState('');

  const [skill, setSkill] = useState('');

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [skillModal, setSkillModal] = useState(false);
  const handleSkillClose = () => setSkillModal(false);
  const handleSkillShow = () => setSkillModal(true);



  const handleChange = (event) => {
    setAssociationToEdit(event.target.value);
    console.log(associationToEdit);
  };

  //modals funcions
  const updateProfile = async () => {
    actions.editProfile(newUser);
    handleClose()
  }
  const handleUpdateSkill = async () => {
    await actions.editAssociation(associationToEdit, skill, role, level)
    handleSkillClose()
    

  }


  const tutorSkills = store.profile.skills && store.profile.skills.length > 0 && store.profile.skills.filter((skill) => {
    return skill.role == "tutor"
  })
  const learnerSkills = store.profile.skills && store.profile.skills.length > 0 && store.profile.skills.filter((skill) => {
    return skill.role == "learner"
  })
  
  // console.log(learnerSkills)



  useEffect(() => {
    setNewUser({
      "name": store.profile.name,
      "email": store.profile.email,
      "number": store.profile.number,
      "country": store.profile.country,
      "city": store.profile.city,
      "gender": store.profile.gender,
      "bio": store.profile.bio

    })



  }, [store.profile])


  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  //  let skillElements = ""

   useEffect(() => {
    actions.getSkills()
    
  }, [])

  //Check if store.skill is available
  // if (store.skills && store.skills > 0 && store.skills) {
  //   skillElements = store.skills.map(skill => (
  //     <MenuItem key={skill.id} value={skill.id}>{skill.name}</MenuItem>
  //   ))
  // }

  return <>
    <div className='height-profile '>
      <div className="pt-4 px-3 d-flex flex-column gap-4  ">

        <div className='d-flex align-items-center'>
          <h2 className='rosa '>Your Profile</h2>



          <Modal
            className='Modal'
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header className='modal-profile' closeButton>
              <Modal.Title className='rosa' >Edit Your Profile</Modal.Title>
            </Modal.Header>
            <Modal.Body className='modal-profile '>

              <Box
                component="form"
                sx={{
                  '& > :not(style)': { m: 1, width: '95%' },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField id="outlined-basic" label="Email" variant="outlined"
                  type="email" placeholder="Your e-mail"
                  value={newUser.email}
                  onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                />
                <TextField id="outlined-basic" label="Name" variant="outlined"
                  type="text" placeholder="Your Name"
                  value={newUser.name}
                  onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                />
                <TextField id="outlined-basic" label="Country" variant="outlined"
                  type="text" placeholder="Your Country"
                  value={newUser.country}
                  onChange={(e) => setNewUser({ ...newUser, country: e.target.value })}
                />
                <TextField id="outlined-basic" label="City" variant="outlined"
                  type="text" placeholder="Your City"
                  value={newUser.city}
                  onChange={(e) => setNewUser({ ...newUser, city: e.target.value })}
                />
                <TextField id="outlined-basic" label="Gender" variant="outlined"
                  type="text" placeholder="Your Gender"
                  value={newUser.gender}
                  onChange={(e) => setNewUser({ ...newUser, gender: e.target.value })}
                />
                <TextField id="outlined-basic" label="Number" variant="outlined"
                  type="text" placeholder="Your Number"
                  value={newUser.number}
                  onChange={(e) => setNewUser({ ...newUser, number: e.target.value })}
                />

              </Box>



            </Modal.Body>
            <Modal.Footer className='modal-profile'>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button onClick={() => updateProfile()} variant="primary">Save Edit</Button>
            </Modal.Footer>
          </Modal>
          {/* final Modal de edit profile */}
          <Modal
            className='Modal'
            show={skillModal}
            onHide={handleSkillClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header className='modal-profile' closeButton>
              <Modal.Title className='rosa' >Edit Your Profile</Modal.Title>
            </Modal.Header>
            <Modal.Body className='modal-profile '>

              <Box
                component="form"
                sx={{
                  '& > :not(style)': { m: 1, width: '95%' },
                }}
                noValidate
                autoComplete="off"
              >
                <Box sx={{ minWidth: 120, mr: 2 }}>
                  <FormControl fullWidth>
                    <InputLabel id="skill-select-label">Skill</InputLabel>
                    <Select
                      labelId="skill-select-label"
                      id="skill-select"
                      value={skill}
                      label="Skill"
                      onChange={(event) => setSkill(event.target.value)}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      {store.skills && store.skills.map(skill => (
                       <MenuItem key={skill.id} value={skill.id}>{skill.name}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Box>
                <Box sx={{ minWidth: 120, mr: 2 }}>
                  <FormControl fullWidth>
                    <InputLabel id="level-select-label">Level</InputLabel>
                    <Select
                      labelId="level-select-label"
                      id="level-select"
                      value={level}
                      label="Level"
                      onChange={(event) => setLevel(event.target.value)}
                    >
                      <MenuItem value="">
                        
                      </MenuItem>
                      <MenuItem aria-required value="Beginner">Beginner</MenuItem>
                      <MenuItem value="Intermediate">Intermediate</MenuItem>
                      <MenuItem value="Advanced">Advanced</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <Box sx={{ minWidth: 120, mr: 2 }}>
                  <FormControl fullWidth>
                    <InputLabel id="role-select-label">Role</InputLabel>
                    <Select
                      labelId="role-select-label"
                      id="role-select"
                      value={role}
                      label="Role"
                      onChange={(event) => setRole(event.target.value)}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value="Learner">Learner</MenuItem>
                      <MenuItem value="Tutor">Tutor</MenuItem>
                    </Select>
                  </FormControl>
                </Box>

              </Box>

            </Modal.Body>
            <Modal.Footer className='modal-profile'>
              <Button variant="secondary" onClick={handleSkillClose}>
                Close
              </Button>
              <Button onClick={() => handleUpdateSkill()} variant="primary">Save Edit</Button>
            </Modal.Footer>
          </Modal>



        </div>

        <div className=' container-border-profile'>
          <div className="profile-card-container ">
            <img src={personLogo} className="tutor-img" />
            <div className="tutor-text-container ">
              <p className="tutor-text"><strong className='me-2'>Name:</strong>{store.profile && store.profile.name}</p>
              <p className="tutor-text"><strong className='me-2'>Email:</strong>{store.profile && store.profile.email}</p>
              <p className="tutor-text"><strong className='amarillo'>Student</strong></p>
            </div>
          </div>
        </div>

        {/*<-----About------> */}
        <div className='container-border-profile'>
          <div className='d-flex justify-content-between'>
            <h4 className='rosa '>About me</h4>
            <Button className='amarillo' variant="" onClick={handleShow}>Edit Profile</Button>
          </div>
          <hr />

          <div className='row ms-xs-3'>
            <div className='col-xs-6 col-md-2 mt-sm-3 ms-md-3 d-flex flex-column'>
              <span className='gris'>country</span>
              <p className='white'>{store.profile && store.profile.country}</p>
            </div>

            <div className='col-xs-6 col-md-2 mt-sm-3 d-flex flex-column'>
              <span className='gris'>City</span>
              <p className='white'>{store.profile && store.profile.city}</p>
            </div>

            <div className='col-xs-6 mt-sm-3 col-md-2 d-flex flex-column'>
              <span className='gris'>Phone</span>
              <p className='white'>{store.profile && store.profile.number}</p>
            </div>

            <div className='col-xs-6 mt-sm-3 col-md-2 me-5 d-flex flex-column'>
              <span className='gris'>Email</span>
              <p className='white'>{store.profile && store.profile.email}</p>
            </div>

            <div className='col-xs-6 mt-sm-3 col-md-2 col-ms-5 d-flex flex-column'>
              <span className='gris'>Gender</span>
              <p className='white'>{store.profile && store.profile.gender}</p>
            </div>

            <div className='col-12 mt-sm-3 ms-md-3 d-flex flex-column'>
              <span className='gris'>Biography</span>
              <p className='white'>{store.profile && store.profile.bio}</p>
            </div>
          </div>

          {/* <-----status------> */}
          {/* <span className='gris'>skill</span>
              {store.profile.skills && store.profile.skills.length > 0 && store.profile.skills.map((item, index) => {
                return (
                  <p key={index}>{item.skill}</p>
                )
              })} */}

        </div>
        <div className='container-border-profile'>
          <div className='d-flex justify-content-between'>
            <h4 className='rosa '>Status</h4>
            <Button className='amarillo' variant="" onClick={handleSkillShow}>Edit Skill</Button>
          </div>
            <div className="learning-levels">
              <hr />

            </div>

          <div className='row ms-xs-3'>
            <div className='col-xs-6 col-md-5 mt-3 m-md-3 ms-md-3 d-flex flex-column me-5'>

              <div className='status-contenedor'>
                <div>
                  <h6 className='text-danger'>Rol</h6>
                  {store.profile && store.profile.skills.filter(role => role.role == "Tutor").map((tutor) => <p key={tutor.id}>{tutor.role.charAt(0).toUpperCase() + tutor.role.slice(1)}</p>)}

                  {store.profile && store.profile.skills.filter(role => role.role == "Learner").map((tutor) => <p key={tutor.id}>{tutor.role.charAt(0).toUpperCase() + tutor.role.slice(1)}</p>)}

                  {/* {learnerSkills && learnerSkills.length > 0 && learnerSkills.map((learner) => <p key={learner.id}>{learner.role.charAt(0).toUpperCase() + learner.role.slice(1)}</p>)}
                   */}
                </div>
                <div>
                  <h6 className='text-danger'>Skill</h6>
                  {store.profile && store.profile.skills.filter(role => role.role == "Tutor").map((tutor) => <p key={tutor.id}>{tutor.skill.charAt(0).toUpperCase() + tutor.skill.slice(1)}</p>)}

                  {store.profile && store.profile.skills.filter(role => role.role == "Learner").map((tutor) => <p key={tutor.id}>{tutor.skill.charAt(0).toUpperCase() + tutor.skill.slice(1)}</p>)}
                </div>
                <div>
                  <h6 className='text-danger '>Level</h6>
                  {store.profile && store.profile.skills.filter(role => role.role == "Tutor").map((tutor) => <p key={tutor.id}>{tutor.level.charAt(0).toUpperCase() + tutor.level.slice(1)}</p>)}

                  {store.profile && store.profile.skills.filter(role => role.role == "Learner").map((tutor) => <p key={tutor.id}>{tutor.level.charAt(0).toUpperCase() + tutor.level.slice(1)}</p>)}
                  {/* {learnerSkills && learnerSkills.length > 0 && learnerSkills.map((learner) => {
                    return (
                      <p key={learner.id}>

                        <span >{learner.level.charAt(0).toUpperCase() + learner.level.slice(1)}</span>
                        <span className='ms-2 text-danger'></span>

                      </p>
                    )
                  })} */}
                  
                </div>

                <div className='d-flex flex-column gap-2'>
                    
                    <FormControl>
                      <FormLabel id="demo-radio-buttons-group-label">Edit</FormLabel>

                      <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue=""
                        name="radio-buttons-group"
                      >
                        {store.profile && store.profile.skills.filter(role => role.role == "Tutor").map((tutor) =>
                      <FormControlLabel key={tutor.id} onChange={handleChange} value={tutor.id} control={<Radio />} label="" />
                    )}

                        {store.profile && store.profile.skills.filter(role => role.role == "Learner").map((learner) =>
                      <FormControlLabel key={learner.id} onChange={handleChange} value={learner.id} control={<Radio />} label="" />
                    )}
                        
                        
                      </RadioGroup>
                    </FormControl>
                  </div>




              </div>
            </div>

            {/* <div className='col-xs-6 col-md-5 mt-sm-3 d-flex flex-column'>

              <div className='status-contenedor'>
                <div className=''>
                  <h6 className='text-success'>Rol</h6>
                    {learnerSkills.map((learner) => <p key={learner.id}>{learner.role}</p>)}  
                </div>

                <div>
                  <h6 className='text-success'>Skill</h6>
                    {learnerSkills.map((learner) => <p key={learner.id}>{learner.skill}</p>)}
                </div>

                <div>
                  <h6 className='text-success'>Level</h6>
                    {learnerSkills.map((learner) => <p key={learner.id}>{learner.level}</p>)}
                </div>
              </div>

            </div> */}

          </div>

        </div>
      </div>
    </div>









  </>
}

export default Main
