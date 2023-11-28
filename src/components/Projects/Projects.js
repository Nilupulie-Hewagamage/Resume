import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import project4 from "../../Assets/Projects/project4.png";
import project7 from "../../Assets/Projects/project7.png";
import project3 from "../../Assets/Projects/project3.png";
import project from "../../Assets/Projects/project.png";
import project6 from "../../Assets/Projects/project6.png";
import project1 from "../../Assets/Projects/project1.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project}
              isBlog={false}
              title="ABC Learning & Training Institute"
              description="A dynamic website for the ABC Learning IT Training Institute, utilizing HTML, CSS, JavaScript, and jQuery. The website serves as a comprehensive source of information about the institute. (October - 2022)"
              ghLink="https://github.com/Nilupulie-Hewagamage/ABC-Learning-Institue"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project1}
              isBlog={false}
              title="MCQ System"
              description="An MCQ System using IntelliJ for educational purposes. This system facilitates interactive multiple-choice question-based learning. (November - 2022)"
              ghLink="https://github.com/Nilupulie-Hewagamage/MCQ-System"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project3}
              isBlog={false}
              title="AAA Web Hosting with CMS"
              description="A website hosting service using Liferay and MySQL. This service allows users to host their websites and ensures reliable performance and secure data storage. It provides an easy-to-use platform for individuals and businesses to establish their online presence effectively. (March - 2023)"
              ghLink="https://github.com/Nilupulie-Hewagamage/AAA-Web-Hosting-with-CMS"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project4}
              isBlog={false}
              title="ABC Car Portal"
              description="Created a dynamic website application using Spring Boot, Spring Security, JSP, Bootstrap, JavaScript, and MySQL. This platform serves as a virtual marketplace for buying and selling used cars, offering users a wide range of pre-owned vehicles to browse. Additionally, it enables users to place bids on cars they desire, potentially securing a purchase at a more affordable price. (April - 2023)"
              ghLink="https://github.com/Nilupulie-Hewagamage/ABC-Car-Portal"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project6}
              isBlog={false}
              title="Know-Your-Neighborhood"
              description="A website application utilizing React and Spring Boot. This platform serves as a comprehensive resource, delivering valuable information about users' local neighborhoods. From local attractions to community events and essential services, this application aims to provide users with a centralized hub of neighborhood-related information. (May - 2023)"
              ghLink="https://github.com/Nilupulie-Hewagamage/Know-Your-Neighborhood"
            // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project7}
              isBlog={false}
              title="ABC Job Portal"
              description="A job search website application that enables users to discover job opportunities and apply for them. This platform simplifies the job search process by providing comprehensive job listings and a user-friendly interface for submitting applications. Users can explore various career options and take the next step towards their professional goals.(February -2023)"
              ghLink="https://github.com/Nilupulie-Hewagamage/ABC-Job-Portal"
            // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
