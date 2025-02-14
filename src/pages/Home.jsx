import React, { useState } from "react";

function Home() {
  // Example leaderboard players
  const [players, setPlayers] = useState([
    { name: "Player 1", score: 1000 },
    { name: "Player 2", score: 900 },
    { name: "Player 3", score: 800 },
    { name: "Player 4", score: 700 },
    { name: "Player 5", score: 600 }
  ]);

  // Add a new player dynamically
  const addPlayer = (name, score) => {
    setPlayers([...players, { name, score }]);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "100vh",  // Ensure the container takes up at least the full viewport height
        backgroundImage: "url('/penguinBackground.jpg')", // Background image
        backgroundSize: "cover", // Ensures the image covers the entire screen
        backgroundPosition: "center", // Centers the background image
        backgroundRepeat: "no-repeat", // Prevents repeating the image
        position: "relative", // Necessary to keep the leaderboard and other content on top of the background
        fontFamily: "'Pixelify Sans', sans-serif",
      }}
    >
      {/* Unity Game iframe */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "80px", // Added marginTop to create space between navbar and iframe
          marginBottom: "20px", // Space between iframe and leaderboard
        }}
      >
        <iframe
          src="/unity/index.html"
          width="400px" // Smaller width for a portrait effect
          height="700px" // Larger height for a portrait effect
          style={{
            borderRadius: "10px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          }}
          title="Unity Game"
          frameBorder="0"
        />
      </div>

      {/* Leaderboard Section */}
      <div
        style={{
          position: "absolute", // Position it absolutely
          top: "20%", // Position it slightly higher up
          right: "5%", // Place it on the right side
          width: "250px", // Smaller width for the leaderboard
          backgroundColor: "#d9f7be", // Light green background
          border: "5px solid #86653D", // Light brown border
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          maxHeight: "80vh", // Make sure it doesn't overflow the screen vertically
          overflowY: "auto", // Allow scrolling if it overflows
        }}
      >
        <h2>Leaderboard</h2>
        <ul>
          {players.map((player, index) => (
            <li key={index}>
              {player.name} - {player.score}
            </li>
          ))}
        </ul>
      </div>

      {/* How to Play Section */}
      <div
        style={{
          width: "80%", // Make it smaller than the full width
          backgroundColor: "#f9f9f9", // Light background
          border: "3px solid #86653D", // Light brown border
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          textAlign: "center",
          marginTop: "20px", // Space between iframe and how-to-play section
          marginBottom: "20px",
        }}
      >
        <h2>How to Play</h2>
        <p>Welcome to the game! Here’s a brief overview of how to play:</p>
        <ol style={{ textAlign: "left" }}>
          <li>Start the game by clicking on the "Play" button in the Unity game iframe above.</li>
          <li>Control the character using the on-screen buttons or keyboard inputs.</li>
          <li>Aim for the highest score and compete with others in the leaderboard!</li>
        </ol>
        <p>Enjoy the game, and may the best player win!</p>
      </div>
    </div>
  );
}

export default Home;
