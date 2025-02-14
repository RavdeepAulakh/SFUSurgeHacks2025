import React from "react";
import { useState } from "react";
import "../App.css";
const styles = {
  about: {
    textAlign: "center",
    fontFamily: "'Pixelify Sans', sans-serif",
    fontSize: "1rem",
    margin: "40px 0",
    backgroundColor: '#F7E1D7',
  },
  description: {
    padding: "20px",
    margin: "40px",
  },
  team: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)", // 4 columns
    gap: "20px",
    justifyContent: "center",
    padding: "20px",
    margin: "40px 0",
  },
  teamMember: (isHovered) => ({
    textAlign: "center",
    padding: "20px",
    borderRadius: "8px",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    transform: isHovered ? "scale(1.05)" : "scale(1)",
    boxShadow: isHovered ? "0px 4px 10px rgba(0, 0, 0, 0.2)" : "none",
  }),
  toolHeader: {
    display: "inline-block",  // Makes it behave like an inline element
    verticalAlign: "middle", // Aligns text to the baseline
  },
  tool: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)", // 2 columns
    gap: "20px",
    justifyContent: "left",
    padding: "20px",
    margin: "40px 0",
  },
  tr: (isHovered) => ({
    transition: "background-color 0.3s ease, transform 0.2s ease",
    backgroundColor: isHovered ? "#f0f0f0" : "transparent",
    transform: isHovered ? "scale(1.02)" : "scale(1)",
  }),
  img: {
    maxWidth: "50px", // ✅ Fixed camelCase issue
    height: "auto",
    borderRadius: "8px", // Optional: makes images slightly rounded
    display: "block",
    margin: "0 auto", // Center images inside their containers
  }
}

function About() {
  // State to track hovered member
  const [hoverIndex, setHoverIndex] = useState(null);
  const [hoverRowIndex, setHoverRowIndex] = useState(null);

  const team = [
    { name: "Emmy Fong", role: "Frontend Developer", image: "https://via.placeholder.com/100", description: "Emmy is a frontend developer with a passion for creating beautiful and responsive web applications." },
    { name: "Evan Chen", role: "Backend Developer", image: "https://via.placeholder.com/100", description: "Evan is a backend developer with a passion for creating scalable and efficient web applications." },
    { name: "Camille Ng", role: "UI/UX Designer", image: "https://via.placeholder.com/100", description: "Camille is a UI/UX designer with a passion for creating intuitive and user-friendly web applications." },
    { name: "Ravdeep Aulakh", role: "Project Manager", image: "https://via.placeholder.com/100", description: "Ravdeep is a project manager with a passion for leading and coordinating web development projects." },
  ];

  const tools = [
    { name: "React", image: "logo192.png" },
    { name: "GitHub", image: "github-mark.png" },
    { name: "Vercel", image: "vercel-icon-dark.png" },
    { name: "Unity", image: "unity-logo.png" },
  ];

  return (
    <div style={styles.about}>
      <h1>About Us</h1>
      <div style={styles.description}>
        <h2>Project Description</h2>
        <p>
        In Pastry Panic, you play as an adorable penguin on a mission to bake the tallest, most delicious cake to win the Great Antarctic Bake-Off! But this isn't just about baking—your grandma needs life-saving surgery, and the prize money is your only hope!

  Stack layers perfectly to build a towering masterpiece, but be careful—one wrong move, and your cake might come crashing down! Can you balance speed, precision, and creativity to bake your way to victory? 🏆🎂

  Get ready to stack, strategize, and save Grandma in this fun, fast-paced cake-building adventure!
        </p>
      </div>
      
      <h2>Project Team</h2>
      <div style={styles.team}>
        {team.map((member, index) => (
          <div key={index}
          style={styles.teamMember(hoverIndex === index)}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          >
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
          <tbody>
          {tools.map((tool, index) => (
            <tr
              key={index}
              style={styles.tr(hoverRowIndex === index)}
              onMouseEnter={() => setHoverRowIndex(index)}
              onMouseLeave={() => setHoverRowIndex(null)}
            >
              <td style={styles.td}>{tool.name}</td>
              <td style={styles.td}>
                <img src={tool.image} alt={tool.name} style={styles.img} />
              </td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default About;
