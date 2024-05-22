import React from "react";
import styles from "./Nav.module.css";
import {BrowserRouter as Router,Route,Routes,NavLink} from "react-router-dom";
import Products from "../pages/Products";
import About from "../pages/About";
import Service from "../pages/Service";
import Help from "../pages/Help";
import logo from "../images/logo.svg";
import calcul from "../images/calculation.svg";
import meas from "../images/measering.svg";


const Nav = () => {
    return (
        <Router>
            <header className={styles.navigation}>
                <div className={styles.logo}>
                    <img src={logo} alt="" />
                </div>
                <nav  className={styles.links}>
                    <NavLink to="/Service">Services</NavLink>
                    <NavLink to="/Products">Products</NavLink>
                    <NavLink to="/Help">Help</NavLink>
                    <NavLink to="/About">About</NavLink>
                </nav>
                <div className={styles.buttons}>
                    <button className={styles.reque}>
                        <img src={meas} alt="" />
                        Make request
                    </button>
                    <button className={styles.calcul}>
                        <img src={calcul} alt="" />
                        Calculation
                    </button>
                </div>
            </header>
            <Routes>
                <Route path="/Service" element={<Service />} />
                <Route path="/Products" element={<Products />} />
                <Route path="/Help" element={<Help />} />
                <Route path="/About" element={<About />} />
                <Route path="/" element={<Service />} />
            </Routes>
        </Router>
    );
};

export default Nav;
