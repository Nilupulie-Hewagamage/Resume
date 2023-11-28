import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Nilupulie Hewagamage </span>
            from <span className="purple"> Sri Lanka.</span>
            <br /> Currently, I'm studying Bachelor of Science (Hons) in Computer Science (Top-Up) at Lithan Academy through JISC Campus.
            I enjoy creating things that live on the internet. My passion for Web Development started back in
            September 2022.
            <br />
            <br />
            I am driven and ambitious. I thrive on challenges and establish goals for myself regularly, so I always
            have something to strive ahead. I enjoy meeting new people and learning about their experiences and backgrounds.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Social Work
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Make a difference. Leave lasting impressions!"{" "}
          </p>
          <footer className="blockquote-footer">Nilupulie</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
