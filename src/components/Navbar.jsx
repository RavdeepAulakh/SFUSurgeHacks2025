import { Link } from "react-router-dom";
import { Home, User } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  console.log("navbar rendered");
  const [hovered, setHovered] = useState({ home: false, about: false });

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
      {/* Banner Image (Fixed Width, Centered) */}
      <img
        src="/pastrypanic.png"
        alt="Pastry Panic Banner"
        style={{
          width: "800px",
          maxWidth: "100%",
          height: "auto",
          marginBottom: "10px",
          borderRadius: "10px",
        }}
      />

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
          width: "100%",  // Ensures it spans the full width
          borderRadius: "0px", // No border radius to match full width
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)"
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
            padding: "10px",
            borderRadius: "5px",
            textDecoration: "none",
            color: "white",
            boxShadow: hovered.home ? "0px 4px 10px rgba(255, 255, 255, 0.3)" : "none",
            transition: "box-shadow 0.3s, gap 0.3s ease-in-out",
          }}
        >
          <Home size={24} />
          <span
            style={{
              display: "inline-block",
              width: hovered.home ? "60px" : "0px",
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
          <User size={24} />
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
