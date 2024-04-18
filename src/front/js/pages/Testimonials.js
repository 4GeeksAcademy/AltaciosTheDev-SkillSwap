import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TestimonialCard from "../component/TestimonialCard";
import "../../styles/testimonial.css";

export const Testimonials = () => {
  const { store, actions } = useContext(Context);
  return <>
    <div className="testimonial-container">
    <h1 className="text-center p-5">The SkillSwap Teachers & Learnes Experiences</h1>
      <div className="container">
        <div className="testimonial-grid">
          <div className="testimonial-col-1">
            <TestimonialCard
              name={"Messi"}

              description={"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who  "} />
            <TestimonialCard
              name={"Messi"}

              description={"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who  "} />
            <TestimonialCard
              name={"Messi"}

              description={"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who  "} />
          </div>

          <div className="testimonial-col-2">
            <TestimonialCard
              name={"Messi"}

              description={"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who  "} />
            <TestimonialCard
              name={"Messi"}

              description={"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who  "} />
            <TestimonialCard
              name={"Messi"}

              description={"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who  "} />
          </div>

          <div className="testimonial-col-3">
            <TestimonialCard
              name={"Messi"}

              description={"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who  "} />
            <TestimonialCard
              name={"Messi"}

              description={"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who  "} />
            <TestimonialCard
              name={"Messi"}

              description={"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who  "} />
          </div>

        </div>
      </div>

      {/* <div className="d-flex justify-content-center gap-4 mx-5">
            <Row xs={1} md={2} lg={3} className="d-flex justify-content-center">
  
              <Col className="  mb-3">
                <TestimonialCard
                  name={"Messi"} 
  
                  description={"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who  "}/>
              </Col>
  
              <Col className="  mb-3">
              <TestimonialCard
                name={"Santiago"} 
  
                description={"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual "}/>
              </Col>
  
              <Col className="  mb-3">
                <TestimonialCard
                  name={"Cristian"} 
                  
                  description={"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who  "}/>
              </Col>
              <Col className="  mb-3">
              <TestimonialCard
                name={"Samuel"} 
  
                description={"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual "}/>
              </Col>
  
              <Col className="  mb-3">
                <TestimonialCard
                  name={"jean"} 
                  
                  description={"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who  "}/>
              </Col>
              <Col className="  mb-3">
              <TestimonialCard
                name={"miguel"} 
  
                description={"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual "}/>
              </Col>
  
              <Col className="  mb-3">
                <TestimonialCard
                  name={"Diana"} 
                  
                  description={"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who  "}/>
              </Col>
              <Col className="  mb-3">
                <TestimonialCard
                  name={"Sebas"} 
                  
                  description={"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who  "}/>
              </Col>
              <Col className="  mb-3">
                <TestimonialCard
                  name={"Luis"} 
                  
                  description={"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who  "}/>
              </Col>
            </Row>
          </div> */}
    </div>


  </>
}
