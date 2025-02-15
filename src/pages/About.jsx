import React from "react";
import { useState } from "react";
import "../App.css";
const styles = {
  description: {
    padding: "20px",
    margin: "40px",
    backgroundColor: "#B0C4B1",
    border: "5px solid #4A5759",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  },
  team: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", 
    maxWidth: "100%",  // Prevents stretching too much
    gap: "20px",
    justifyContent: "center",
    
  },
  teamMember: (isHovered) => ({
    textAlign: "center",
    padding: "20px",
    borderRadius: "8px",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    transform: isHovered ? "scale(1.05)" : "scale(1)",
    boxShadow: isHovered ? "0px 4px 10px rgba(0, 0, 0, 0.2)" : "none",
  }),
  teamImg: {
    maxWidth: "100px", // Fixed camelCase issue
    height: "auto",
    borderRadius: "8px", // Optional: makes images slightly rounded
    objectFit: "cover",
    margin: "0 auto", // Center images inside their containers
  },
  toolHeader: {
    alignItems: "left",
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
    padding: "20px",
    borderRadius: "8px",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    //backgroundColor: isHovered ? "#f0f0f0" : "transparent",
    transform: isHovered ? "scale(1.02)" : "scale(1)",
    boxShadow: isHovered ? "0px 4px 10px rgba(0, 0, 0, 0.2)" : "none",
  }),
  img: {
    maxWidth: "50px", // Fixed camelCase issue
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
    { name: "Emmy Fong", role: "Frontend Developer", image: "./emmy.png", description: "Emmy is a frontend developer with a passion for creating beautiful and responsive web applications." },
    { name: "Evan Chen", role: "Backend Developer", image: "./evan.png", description: "Evan is a backend developer with a passion for creating scalable and efficient web applications." },
    { name: "Camille Ng", role: "UI/UX Designer", image: "./camille.png", description: "Camille is a UI/UX designer with a passion for creating intuitive and user-friendly web applications." },
    { name: "Ravdeep Aulakh", role: "Project Manager", image: "./ravdeep.png", description: "Ravdeep is a project manager with a passion for leading and coordinating web development projects." },
  ];

  const tools = [
    { name: "React", image: "logo192.png" },
    { name: "GitHub", image: "github-mark.png" },
    { name: "Vercel", image: "vercel-icon-dark.png" },
    { name: "Unity", image: "unity-logo.png" },
  ];

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      backgroundColor: "#F7E1D7", // Light pink background
      flexWrap: "wrap", // Allow items to wrap on smaller screens
      gap: "20px", // Space between game and leaderboard
      width: "100%",
      padding: "20px",
    }}>
      <h1>About Us</h1>
      <div style={styles.description}>
        <h2>Project Description</h2>
        <p>
        In Pastry Panic, you play as an adorable penguin on a mission to bake the tallest, most delicious cake to win the Great Antarctic Bake-Off! But this isn't just about baking—your grandma needs life-saving surgery, and the prize money is your only hope!

  Stack layers perfectly to build a towering masterpiece, but be careful—one wrong move, and your cake might come crashing down! Can you balance speed, precision, and creativity to bake your way to victory? 🏆🎂

  Get ready to stack, strategize, and save Grandma in this fun, fast-paced cake-building adventure!
        </p>
      </div>
      <div style={{ width: "100%", textAlign: "center" }}>
        <h2>Project Team</h2>
      </div>
      <div style={styles.team}>
        {team.map((member, index) => (
          <div key={index}
          style={styles.teamMember(hoverIndex === index)}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            <img src={member.image} alt={member.name} style={styles.teamImg}/>
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
