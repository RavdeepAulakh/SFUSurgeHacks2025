import React, { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client
const supabase = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_SUPABASE_ANON_KEY
)
function Home() {
  // State for leaderboard players
  const [players, setPlayers] = useState([]);

  // Fetch leaderboard data from Supabase when the component mounts
  useEffect(() => {
    const fetchLeaderboard = async () => {
        const { data, error } = await supabase
          .from("leaderboard")
          .select("*")
          .order("score", { ascending: false });
      
        if (error) {
          console.error("Error fetching leaderboard:", error);
        } else {
          console.log("Fetched data:", data); // Log the data for debugging
          if (data && data.length === 0) {
            console.log("No records found in leaderboard.");
          } else {
            setPlayers(data);
          }
        }
      };
      

    fetchLeaderboard();
  }, []); // Empty array ensures this effect runs only once

  // Add a new player to the leaderboard in Supabase
  const addPlayer = async (name, score) => {
    const { data, error } = await supabase
      .from("leaderboard") // The name of the table
      .insert([{ name, score }]);

    if (error) {
      console.error("Error adding player:", error);
    } else {
      setPlayers([...players, ...data]); // Update the state with the new player
    }
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
        position: "absolute",
        top: "20%",
        right: "5%",
        width: "250px",
        backgroundColor: "#d9f7be",
        border: "5px solid #86653D",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        maxHeight: "80vh",
        overflowY: "auto",
        textAlign: "center", // Center text inside the box
    }}
    >
    <h2>Leaderboard</h2>
    <ul style={{ listStyle: "none", padding: 0 }}>
        {players.map((player, index) => (
        <li 
            key={index} 
            style={{ display: "flex", justifyContent: "space-between", padding: "5px 0" }}
        >
            <span>{index + 1}. {player.name}</span>
            <span>{player.score}</span>
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
