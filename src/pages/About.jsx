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
    { name: "Emmy Fong", role: "Developer", image: "./emmy.png", description: "Emmy worked on the game in Unity, bringing the game mechanics and interactive elements to life with a focus on game development and optimization." },
    { name: "Evan Chen", role: "Developer", image: "./evan.png", description: "Evan contributed to both the game development in Unity and the art, helping to shape the visual style and immersive experience of the game." },
    { name: "Camille Ng", role: "Developer", image: "./camille.png", description: "Camille worked on the frontend website, designing and implementing the user interface to create a visually appealing and user-friendly web experience." },
    { name: "Ravdeep Aulakh", role: "Developer", image: "./ravdeep.png", description: "Ravdeep worked on both the frontend and backend of the website, ensuring smooth integration of features and optimizing performance across the application." },
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
