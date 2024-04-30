import React, { useContext, useState } from 'react'
import { Context } from "../../store/appContext";
import personLogo from "../../../img/personLogo.png"
import { BiSolidTired } from 'react-icons/bi';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function Main() {
  const { store, actions } = useContext(Context);

  const [newUser, setNewUser] = useState("")

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  console.log(newUser);

  const updateProfile = async () => {
    actions.editProfile(newUser);
    handleClose()

  }

  const tutorSkills = store.profile.skills && store.profile.skills.length > 0 && store.profile.skills.filter((skill) => {
    return skill.role == "Tutor"
  })
  const learnerSkills = store.profile.skills.filter((skill) => {
    return skill.role == "Learner"
  })
   console.log(tutorSkills)
   console.log(learnerSkills)

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
                type="number" placeholder="Your Number"
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
          {/* <i className="fa-solid fa-user-pen"></i> */}


          
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
          <div>
            <h4 className='rosa '>Status</h4>
              <div className="learning-levels">
                  <hr />
                   
              </div>
          </div>

          <div className='row ms-xs-3'>
            <div className='col-xs-6 col-md-5 mt-3 m-md-3 ms-md-3 d-flex flex-column me-5'>

              <div className='status-contenedor'>
                <div>
                <h6 className='text-danger'>Rol</h6>
                  {tutorSkills.map((tutor) => <p key={tutor.id}>{tutor.role}</p>)}
                </div>
                <div>
                <h6 className='text-danger'>Skill</h6>
                  {tutorSkills.map((tutor) => <p key={tutor.id}>{tutor.skill}</p>)}
                </div>
                <div>
                <h6 className='text-danger'>Level</h6>
                  {tutorSkills.map((tutor) => <p key={tutor.id}>{tutor.level}</p>)}
                </div>
              </div>
            </div>

            <div className='col-xs-6 col-md-5 mt-sm-3 d-flex flex-column'>

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

            </div>

          </div>
          
        </div>
      </div>
    </div>      
            
          

        

      
   


  </>
}

export default Main
