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

  const loadTopPlayers = () => {
    
  }

  return (
    <div
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    flexWrap: "wrap", // Allow items to wrap on smaller screens
    gap: "20px", // Space between game and leaderboard
    width: "100%",
    padding: "20px",
  }}
>
  {/* Unity Game iframe */}
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flex: "1", // Allow it to take up available space
      maxWidth: "500px", // Prevents it from getting too large
      minWidth: "350px", // Prevents it from shrinking too much
    }}
  >
    <iframe
      src="/unity/index.html"
      width="100%" // Makes it responsive
      height="700px"
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
      flex: "1",
      maxWidth: "300px", // Prevents it from getting too large
      minWidth: "250px", // Ensures it's still visible on small screens
      backgroundColor: "#B0C4B1",
      border: "5px solid #4A5759",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
      maxHeight: "80vh",
      overflowY: "auto",
      textAlign: "center",
    }}
  >
    <div style={{ position: "relative" }}>
      <img src="/leaderboard.png" alt="leaderboardBanner" style={{ width: "100%", height: "auto" }} />
      <h2
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "black",
          padding: "10px",
          borderRadius: "5px",
          fontSize: "1.2rem",
        }}
      >
        Leaderboard
      </h2>
    </div>

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
