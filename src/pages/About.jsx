import React from "react";
import "../App.css";
const styles = {
  about: {
    textAlign: "center",
    fontFamily: "'Pixelify Sans', sans-serif",
    fontSize: "1rem",
  },
  team: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)", // 4 columns
    gap: "20px",
    justifyContent: "center",
    padding: "20px",
  },
  toolHeader: {
    display: "inline-block",  // Makes it behave like an inline element
    verticalAlign: "middle", // Aligns text to the baseline
  },
  tool: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)", // 2 columns
    gap: "20px",
    justifyContent: "center",
    padding: "20px",
  },
  img: {
    maxwidth: "100px",
  }
}

function About() {
  const team = [
    { name: "Emmy Fong", role: "Frontend Developer", image: "https://via.placeholder.com/100", description: "Emmy is a frontend developer with a passion for creating beautiful and responsive web applications." },
    { name: "Evan Chen", role: "Backend Developer", image: "https://via.placeholder.com/100", description: "Evan is a backend developer with a passion for creating scalable and efficient web applications." },
    { name: "Camille Ng", role: "UI/UX Designer", image: "https://via.placeholder.com/100", description: "Camille is a UI/UX designer with a passion for creating intuitive and user-friendly web applications." },
    { name: "Ravdeep Aulakh", role: "Project Manager", image: "https://via.placeholder.com/100", description: "Ravdeep is a project manager with a passion for leading and coordinating web development projects." },
  ];
  return (
    <div style={styles.about}>
      <h1>About Us</h1>
      <h2>Project Description</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
      </p>
      <h2>Project Team</h2>
      
      <div style={styles.team}>
        {team.map((member, index) => (
          <div key={index}>
            <img src={member.image} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
            <p>{member.description}</p>
          </div>
        ))}
      </div>
      
      <div style={styles.tool}>
        <div styles={styles.toolHeader}>
          <h2>Project Tools</h2>
        </div>
        <table>
          <tr>
            <td>
              <img src="logo192.png" alt="React" />
            </td>
            <td><p>React</p></td>
          </tr>
          <tr>
            <td>
              <img src="https://via.placeholder.com/100" alt="GitHub" />
            </td>
            <td>
              <p>GitHub</p>
            </td>
          </tr>
          <tr>
            <td>
              <img src="https://via.placeholder.com/100" alt="Vercel" />
            </td>
            <td>
              <p>Vercel</p>
            </td>
          </tr>
          <tr>
            <td>
              <img src="https://via.placeholder.com/100" alt="Unity" />
            </td>
            <td>
              <p>Unity</p>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default About;
