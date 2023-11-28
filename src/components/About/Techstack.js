import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiHtml5,
  DiCss3,
  DiMysql,
  DiJava,

} from "react-icons/di";
import {
  SiAngularjs,
  SiJquery,
  SiBootstrap,
  SiSpringboot,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <h6>JavaScript</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
        <h6>HTML</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
        <h6>CSS</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <h6>ReactJS</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
        <h6>MySQL</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
        <h6>Java</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAngularjs />
        <h6>AngularJS</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJquery />
        <h6>jQuery</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap />
        <h6>Bootstrap</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSpringboot />
        <h6>SpringBoot</h6>
      </Col>
    </Row>
  );
}

export default Techstack;
