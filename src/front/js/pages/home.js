import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../../styles/home.css";
import InfoCards from "../component/InfoCards";
import TheCard from "../component/TheCard"; 
import TestimonialCard from "../component/TestimonialCard";
import personLogo from "../../img/personLogo.png"
import imginfo from "../../img/1 a 1.jpg"
import teachImg from "../../img/teachImg.png"
import connectImg from "../../img/connect.png"
import sports from "../../img/sport.jpg"
import coocking from "../../img/coocking.jpg"
import programming from "../../img/programming.png"
import english from "../../img/english.jpg"
import matematica from "../../img/matematica.jpg"
import history from "../../img/history.jpg"
import meditation from "../../img/meditation.webp"
import psychology from "../../img/psychology.jpg"


export const Home = () => {
	const { store, actions } = useContext(Context);

	return <>
		<div className="container-fluid hero-navbar pt-3 m-0">    
        <div className="container ">
          <div className="fade-in">
            <div className="txt-right mx-5 me-5 mt-5">
              <h4 className="text-hero"><strong> <span className="rosa ">/</span> Learn, Teach, Connect, One Skill at a Time</strong></h4>
              <p className="p-hero">Exchange Skills and Knowledge with a Global Community of Learners and Mentors</p>
              <Link to="/login">
               <button className="boton-hero">Join Now!</button>
              </Link>
            </div>
          </div>
        </div>
    </div>


    <div className=" justify-content-center bg-azul-oscuro mt-0 p-4 ">

      <div className=" my-5">
        <div className='container'>
        <Row xs={1} md={1} lg={3} xxl={3} className="d-flex justify-content-center">
          <Col className="mb-3 ">
            <InfoCards 
              img={imginfo}
              title={"Exclusive 1-on-1"} 
            
              description="While other platforms may charge for personalized learning experiences, SkillSwap offers something truly unique: direct 1-on-1 interactions between learners and mentors, entirely free of charge Sharing your own expertise in return. With SkillSwap, accessing tailored mentorship and guidance has never been easier and affordable." 
            
              btn="Your only commitment?" 
            
              info="Sharing your own expertise in return. With SkillSwap, accessing tailored mentorship and guidance has never been easier and affordable." />
          </Col>

          <Col className="mb-3">
            <InfoCards 
            img={teachImg}
              title={"Empowerment Through Teaching"} 
            
              description="SkillSwap not only allows users to learn new skills but also empowers them to share their expertise and contribute to the learning community." 
            
              btn="How is this a benefit?" 
            
              info="By serving as mentors and teachers, users can make a positive impact on others while reinforcing their own knowledge and skills. This empowerment through teaching fosters a sense of fulfillment and accomplishment among users." />
          </Col>

          <Col className="mb-3">
            <InfoCards 
              img={connectImg} 
              title={"Personalized Experience "} 
            
              description="Unlike traditional learning platforms where users primarily consume content, SkillSwap empowers users to actively engage in skill-sharing sessions tailored to their individual needs and interests." 
            
              btn="Why is this approach better?" 
            
              info="This personalized approach fosters deeper learning and meaningful connections between users." />
          </Col>
          
          {/* <Col>
            <InfoCards className="p-0 m-0"
              title={"Community of Like-Minded Individuals"} 
            
              description="SkillSwap fosters a supportive and collaborative community where users can connect with like-minded individuals, Through collaborative learning experiences and peer-to-peer mentorship."
            
              btn="How is this a benefit?"  
            
              info="users can benefit from diverse perspectives, feedback, and support. This sense of community enhances the learning experience and encourages continuous growth and development." />
          </Col> */}
         </Row>
          </div>
        
      </div> 
    </div>
      <div className="d-flex justify-content-end bg-azul-oscuro pb-5 position-relative"></div>

      <div className="d-none d-md-block vh-100 bg-azul-claro position-relative  d-flex">
        <div className="bg-verde caja-flotante position-absolute start-50 rounded-2 translate-middle d-flex gap-3 shadow">
          <div className="gris">
            <h4 className="mb-5">We can help you reach your potential, <br/> <span className="rosa">even if you...</span> </h4>
            <p className="my-4 p-info">. feel <strong className="rosa">OVERWHELMED</strong> with learning something new. </p>
            <p className="my-4 p-info">. think you don't have <strong className="rosa">ANYTHING</strong> to offer.</p>
            <p className="my-4 p-info" >. You've <strong className="rosa">STRUGGLED</strong> with Self-learing before. </p>
            <p className="my-4 p-info" >. <strong className="rosa">CAN'T AFFORD</strong> live and personalized learning anywhere else</p>
          </div>
          

          <div className=" w-50 p-4 bg-azul-oscuro h-75 mt-5 rounded-3 shadow">
            <h1 className="text-center"> Sound like you?</h1>
            <p className="my-5 p-info ">"If so, <strong className="rosa">Skillswap</strong> provides the community you need and empowers 
              you to make a difference within it."</p>
              <div className="d-sm-none d-lg-block d-flex justify-content-end">
              <Link to="/login"><button className="boton mt-3">Trust us and JOIN!</button></Link>
              </div>
            
          </div>

        </div>
      </div>
      <div className="bg-azul-oscuro pb-5 ">
        <h1 className="text-center p-4 mb-5">Learn some of the most demand skills</h1>
        <div className="container d-flex justify-content-center">
          <Row xs={1} md={2} lg={2} xl={4} >
          
              <Col className="d-flex justify-content-center mb-3">
                <TheCard 
                  img={sports}
                  skill={"Sport"}/>
              </Col>

              <Col className="d-flex justify-content-center mb-3">
                <TheCard 
                  img={programming}
                  skill={"Programming"}/>
              </Col>

              <Col className="d-flex justify-content-center mb-3">
                <TheCard 
                  img={coocking}
                  skill={"Cooking"}/>
              </Col>

              <Col className="d-flex justify-content-center mb-3">
                <TheCard 
                  img={history}
                  skill={"History"}/>
              </Col>

              <Col className="d-flex justify-content-center mb-3">
                <TheCard 
                  img={matematica}
                  skill={"Math"}/>
              </Col>

              <Col className="d-flex justify-content-center mb-3">
                <TheCard
                  img={english} 
                  skill={"English"}/>
              </Col>

              <Col className="d-flex justify-content-center mb-3">
                <TheCard
                  img={meditation} 
                  skill={"Meditation"}/>
              </Col>
              
              <Col className="d-flex justify-content-center mb-3">
                <TheCard
                  img={psychology} 
                  skill={"Psycology"}/>
              </Col>
            
          </Row>
        </div>
      </div>
      <div className="bg-azul-oscuro"></div>

      <div className="bg-azul-claro ">

        <div className="d-flex justify-content-between p-5">
          <h1>Stories from real <span className="pink">people</span></h1>
          <Link to="/testimonials">
            <button className="boton rounded-2">View All</button>
          </Link>
          
        </div>

        <div className="d-flex justify-content-center gap-4 pb-5 mx-3">
          <Row xs={1} md={1} lg={4} className="d-flex justify-content-center">

            <Col className="  mb-3">
              <TestimonialCard
                name={"enzo"} 

                description={"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who  "}/>
            </Col>

            <Col className="  mb-3">
            <TestimonialCard
              name={"miguel"} 

              description={"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual "}/>
            </Col>

            <Col className="  mb-3">
              <TestimonialCard
                name={"jean"} 
                
                description={"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who  "}/>
            </Col>

          </Row>
        </div>


      </div>
      

      

      


      






  </>
};
