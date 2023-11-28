import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiGithub,
  SiMysql,
  SiIntellijidea,
  SiEclipseide,
  SiFigma,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <h6>Visual Studio Code</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <h6>Postman</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
        <h6>Github</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
        <h6>MySQL</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiIntellijidea />
        <h6>IntelliJ IDEA</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiEclipseide />
        <h6>Eclipse IDE</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma />
        <h6>Figma</h6>
      </Col>

    </Row>
  );
}

export default Toolstack;
