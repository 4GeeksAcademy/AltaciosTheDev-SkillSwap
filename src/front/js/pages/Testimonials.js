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
    <h1 className="text-center p-5">The SkillSwap Teachers & Learners Experiences</h1>
      <div className="container">
        <div className="testimonial-grid">
          <div className="testimonial-col-1">
            <TestimonialCard
              name={"Enzo Altamirano"}

              description={"SkillSwap has been an invaluable tool for my learning journey. I've accessed a wide range of high-quality courses and resources, and I've gained so much knowledge thanks to them."  } />
            <TestimonialCard
              name={"Jean Nounoun"}

              description={"The courses on SkillSwap are excellent. They're well-structured, easy to follow, and packed with valuable information. I've learned a ton from them. "} />
            <TestimonialCard
              name={"Ana"}

              description={"I love the flexibility of SkillSwap. I can learn at my own pace and on my own schedule, which is perfect for my busy lifestyle."} />
          </div>

          <div className="testimonial-col-2">
            <TestimonialCard
              name={"Miguel Reyes"}

              description={"The learning community on SkillSwap is very active and supportive. I've met many other students with similar interests, and I've been able to learn a lot from them. "} />
            <TestimonialCard
              name={"Astrid Altamirano"}

              description={"I had the opportunity to take a course with Jean Nounon and absolutely loved it. They're a highly experienced and passionate instructor, and they helped me learn so much about the subject.  "} />
            <TestimonialCard
              name={"LeAnn Turcios"}

              description={"SkillSwap has made a positive impact on my life. I've been able to gain new skills and knowledge that have helped me advance in my career. "} />
          </div>

          <div className="testimonial-col-3">
            <TestimonialCard
              name={"Emma Cueva"}

              description={"I highly recommend SkillSwap to anyone looking to learn something new. It's a fantastic platform with a lot to offer."} />
            <TestimonialCard
              name={"Jan Turcios"}

              description={"Thanks to SkillSwap, I've been able to increase my knowledge of Programming . I'm incredibly happy with the results! "} />
            <TestimonialCard
              name={"David Smith"}

              description={"I'm so excited about SkillSwap! It's opened up a world of new learning possibilities for me. "} />
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
