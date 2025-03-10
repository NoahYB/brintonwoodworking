import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import Footer from "./Footer";
import "../styles/Layout.css";

const Layout = () => {
  return (
    <div className="layout">
      <header>
        <h1 className="logo">Brinton Woodworking</h1>
        <nav>
          <ul className="nav-links">
            <li>
              <NavLink to="/" end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/furniture">Furniture</NavLink>
            </li>
            <li>
              <NavLink to="/cabinetry">Cabinetry</NavLink>
            </li>
            <li>
              <NavLink to="/contact">About/Contact</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
