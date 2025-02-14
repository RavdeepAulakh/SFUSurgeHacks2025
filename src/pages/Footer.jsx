import React from "react";

const Footer = () => {
    return (
      <footer style={{ 
        backgroundColor: "#4A5759", 
        color: "white", 
        textAlign: "center", 
        padding: "10px 0"
      }}>
        <p>&copy; {new Date().getFullYear()} Pastry Panic. All Rights Reserved.</p>
        <a href="https://github.com/RavdeepAulakh/SFUSurgeHacks2025"
            style={{ 
                color: "white", 
                textDecoration: "none", 
                fontWeight: "bold",
                textDecoration: "underline" 
              }}
              target="_blank"
              rel="noopener noreferrer"
        >SFUSurgeHacks2025</a>
      </footer>
    );
  };
  
  export default Footer;
  