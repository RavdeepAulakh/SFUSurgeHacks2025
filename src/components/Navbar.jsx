import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  console.log("navbar rendered");
  const [hovered, setHovered] = useState({ home: false, about: false });

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
      {/* Banner Wrapper with Background Image */}
        <div
        style={{
            position: "relative",
            width: "100%",
            maxWidth: "100%",
            height: "auto",
            borderRadius: "10px",
            backgroundImage: "url('/backgroundstars.png')", // Set your background image
            backgroundSize: "cover",
            backgroundPosition: "center",
            padding: "20px", // Adjust padding for spacing
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }}
        >
        <img
            src="/pastrypanic.png"
            alt="Pastry Panic Banner"
            style={{
            width: "800px",
            height: "auto",
            borderRadius: "10px",
            backgroundColor: "transparent", // Ensure the image itself has no background
            }}
        />
        </div>

      {/* Navbar (Full-Width) */}
      <nav
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "50px",
          padding: "10px",
          background: "#86653D",
          height: "60px",
          color: "white",
          width: "100%",  
          borderRadius: "0px", 
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        }}
      >
        {/* Home Button */}
        <Link
          to="/"
          onMouseEnter={() => setHovered({ ...hovered, home: true })}
          onMouseLeave={() => setHovered({ ...hovered, home: false })}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: hovered.home ? "15px" : "10px",
            padding: "5px",
            borderRadius: "5px", // Makes the container round
            textDecoration: "none",
            color: "white",
            boxShadow: hovered.home ? "0px 4px 10px rgba(255, 255, 255, 0.3)" : "none",
            transition: "box-shadow 0.3s, gap 0.3s ease-in-out",
            width: "auto",
          }}
        >
          <img 
            src="/igloo.png" 
            alt="Home Icon" 
            style={{ width: "60px", height: "60px", objectFit: "contain" }} 
          />
          <span
            style={{
              display: "inline-block",
              width: hovered.home ? "65px" : "0px",
              overflow: "hidden",
              whiteSpace: "nowrap",
              transition: "width 0.5s ease-in-out",
            }}
          >
            Home
          </span>
        </Link>

        {/* About Button */}
        <Link
          to="/about"
          onMouseEnter={() => setHovered({ ...hovered, about: true })}
          onMouseLeave={() => setHovered({ ...hovered, about: false })}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: hovered.about ? "15px" : "10px",
            padding: "10px",
            borderRadius: "5px",
            textDecoration: "none",
            color: "white",
            boxShadow: hovered.about ? "0px 4px 10px rgba(255, 255, 255, 0.3)" : "none",
            transition: "box-shadow 0.3s, gap 0.3s ease-in-out",
          }}
        >
          <img 
            src="/penguin.png" 
            alt="About Icon" 
            style={{ width: "40px", height: "40px", objectFit: "contain" }} 
          />
          <span
            style={{
              display: "inline-block",
              width: hovered.about ? "65px" : "0px",
              overflow: "hidden",
              whiteSpace: "nowrap",
              transition: "width 0.5s ease-in-out",
            }}
          >
            About
          </span>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
