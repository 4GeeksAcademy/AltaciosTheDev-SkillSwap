import React, {useContext, useState} from 'react'
import { Context } from "../../store/appContext";
import personLogo from "../../../img/personLogo.png"
import { BiSolidTired } from 'react-icons/bi';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useParams } from "react-router-dom";
import { useEffect } from 'react';

function Main() {
  const { store, actions } = useContext(Context);
  
  const [newUser, setNewUser] = useState("")

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const id = store.profile.id

  console.log(newUser);
  
  const updateProfile = async () => {
    actions.editProfile(newUser, id);
    handleClose()
    
  }
  
  // const editSuccesfull = actions.editProfile()
  // if(editSuccesfull) {
  //   actions.getProfile()
  // }
   
  useEffect(() => {
    
    
  }, [newUser])
  
  

  return <>
  <div className='height-profile'>
    <div className="pt-4 px-3 d-flex flex-column gap-4 ">
      
      <div className='d-flex justify-content-between align-items-center'>
        <h2 className='rosa '>Your Profile</h2>

        <Button variant="primary" onClick={handleShow}>
        Edit Profile
       </Button>

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

          <div className='d-flex justify-content-between'>
           <div className='d-flex flex-column gap-2'>
              <label className='gris'>Email</label>
              <input 
                type="email" placeholder="Your e-mail" 
                value={newUser.email} 
                onChange={(e) => setNewUser({...newUser, email:e.target.value})}
                />
            </div>
           <div className='d-flex flex-column gap-2'>
              <label className='gris'>Name</label>
              <input 
                type="text" placeholder="Your Name" 
                value={newUser.name} 
                onChange={(e) => setNewUser({...newUser, name:e.target.value})}
                />
            </div>
          </div>
          <div className='d-flex justify-content-between'>
           <div className='d-flex flex-column gap-2'>
              <label className='gris'>Country</label>
              <input 
                type="text" placeholder="Your Country" 
                value={newUser.country} 
                onChange={(e) => setNewUser({...newUser, country:e.target.value})}
                />
            </div>
            <div className='d-flex flex-column gap-2'>
              <label className='gris'>City</label>
              <input 
                type="text" placeholder="Your City" 
                value={newUser.city} 
                onChange={(e) => setNewUser({...newUser, city:e.target.value})}
                />
            </div>
           </div>
          <div className='d-flex justify-content-between'>
           <div className='d-flex flex-column gap-2'>
              <label className='gris'>Gender</label>
              <input 
                type="text" placeholder="Your Gender" 
                value={newUser.gender} 
                onChange={(e) => setNewUser({...newUser, gender:e.target.value})}
                />
            </div>
          
           <div className='d-flex flex-column gap-2'>
              <label className='gris'>Phone Number</label>
              <input 
                type="number" placeholder="Your Number" 
                value={newUser.number} 
                onChange={(e) => setNewUser({...newUser, number:e.target.value})}
                />
            </div>
          </div> 
          
        </Modal.Body>
        <Modal.Footer className='modal-profile'>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={() => updateProfile()} variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>


        <i className="fa-solid fa-user-pen"></i>
      </div> 

        <div className=' container-border-profile'>
          <div className="profile-card-container ">
            <img src={personLogo} className="tutor-img" />
              <div className="tutor-text-container ">
                <p className="tutor-text"><strong className='me-2'>Name:</strong>{store.profile && store.profile.name}</p>
                <p className="tutor-text"><strong className='me-2'>Email:</strong>{store.profile && store.profile.email}</p>
                <p className="tutor-text"><strong>Student</strong></p>
              </div>
          </div>
        </div>   
        
      {/*<-----About------> */}
      <div className='container-border-profile'>
         <div>
          <h4 className='rosa '>About me</h4>
          <hr />
        </div>

        <div className='row ms-xs-3'>
          <div className='col-xs-6 col-md-2 mt-sm-3 ms-md-3 d-flex flex-column'>
            <span className='gris'>country</span>
            <p>{store.profile && store.profile.country}</p>
          </div>

          <div className='col-xs-6 col-md-2 mt-sm-3 d-flex flex-column'>
            <span className='gris'>City</span>
            <p>{store.profile && store.profile.city}</p>
          </div>

          <div className='col-xs-6 mt-sm-3 col-md-2 d-flex flex-column'>
            <span className='gris'>Phone</span>
            <p>{store.profile && store.profile.number}</p>
          </div>

          <div className='col-xs-6 mt-sm-3 col-md-2 me-5 d-flex flex-column'>
            <span className='gris'>Email</span>
            <p>{store.profile && store.profile.email}</p>
          </div>

          <div className='col-xs-6 mt-sm-3 col-md-2 col-ms-5 d-flex flex-column'>
            <span className='gris'>Gender</span>
            <p>{store.profile && store.profile.gender}</p>
          </div>
          
          <div className='col-12 mt-sm-3 ms-md-3 d-flex flex-column'>
            <span className='gris'>Biography</span>
            <p>{store.profile && store.profile.bio}</p>
          </div>
        </div>

      {/* <-----status------> */}

      </div> 
      <div className='container-border-profile'>
         <div>
          <h4 className='rosa '>Status</h4>
          <hr />
        </div>

        <div className='row ms-xs-3'>
          <div className='col-xs-6 col-md-2 mt-sm-3 ms-md-3 d-flex flex-column'>
            <span className='gris'>skill</span>
            <p>{store.userSkillsAssociations && store.userSkillsAssociations.skill}</p>
          </div>

          <div className='col-xs-6 col-md-2 mt-sm-3 d-flex flex-column'>
            <span className='gris'>City</span>
            <p>{store.profile && store.profile.city}</p>
          </div>

          <div className='col-xs-6 mt-sm-3 col-md-2 d-flex flex-column'>
            <span className='gris'>Phone</span>
            <p>{store.profile && store.profile.number}</p>
          </div>

          <div className='col-xs-6 mt-sm-3 col-md-2 me-5 d-flex flex-column'>
            <span className='gris'>Email</span>
            <p>{store.profile && store.profile.email}</p>
          </div>

          <div className='col-xs-6 mt-sm-3 col-md-2 col-ms-5 d-flex flex-column'>
            <span className='gris'>Gender</span>
            <p>{store.profile && store.profile.gender}</p>
          </div>
          
          <div className='col-12 mt-sm-3 ms-md-3 d-flex flex-column'>
            <span className='gris'>Biography</span>
            <p>{store.profile && store.profile.bio}</p>
          </div>
        </div>

      </div> 

    </div>
  </div>


  </>
}

export default Main
