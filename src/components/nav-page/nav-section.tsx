import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import logoImage from '/homelogo.png'

const Navbar: React.FC = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const handleItemHover = (index: number | null) => {
    setHoveredItem(index);
  };

  return (
    <div className="n-wrapper" id="Navbar">
      <div className="n-left">
        <div className="n-name">
          <img
            src={logoImage}
            alt="JavaScript Logo"
            style={{ width: '80px', height: '60px', marginBottom: '-18px' }}
          />
          Vaesc
        </div>
      </div>

      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li
              onMouseEnter={() => handleItemHover(0)}
              onMouseLeave={() => handleItemHover(null)}
              className={hoveredItem === 0 ? "hovered" : ""}
            >
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li
              onMouseEnter={() => handleItemHover(1)}
              onMouseLeave={() => handleItemHover(null)}
              className={hoveredItem === 1 ? "hovered" : ""}
            >
              <Link to="services" spy={true} smooth={true}>
                About
              </Link>
            </li>
            <li
              onMouseEnter={() => handleItemHover(2)}
              onMouseLeave={() => handleItemHover(null)}
              className={hoveredItem === 2 ? "hovered" : ""}
            >
              <Link to="works" spy={true} smooth={true}>
                Experience
              </Link>
            </li>
            <li
              onMouseEnter={() => handleItemHover(3)}
              onMouseLeave={() => handleItemHover(null)}
              className={hoveredItem === 3 ? "hovered" : ""}
            >
              <Link to="portfolio" smooth={true}>
                Services
              </Link>
            </li>
          </ul>
        </div>
        <Link to="contact" spy={true} smooth={true}>
          <button className="button n-button">Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
