import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
    const currentPage = useLocation().pathname;

    useEffect(() => {
        const navbarToggler = document.querySelector(".navbar-toggler");

        const handleNavbarToggle = () => {
            const targetId = navbarToggler.getAttribute("data-target");
            const targetElement = document.getElementById(targetId.slice(1));

            if (targetElement) {
                const expanded = targetElement.classList.contains("show");
                targetElement.classList.toggle("show", !expanded);
            }
        };

        navbarToggler.addEventListener("click", handleNavbarToggle);

        return() => {
            navbarToggler.removeEventListener("click", handleNavbarToggle);
        };
}, []);
return(
    <header className="navbarHeader">
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse justify-content-end"
                        id="navbarNav"
                    >
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link
                                    to="/"
                                    className={`nav-link ${currentPage === "/" && "active"}`}>
                                        About
                                    </Link>
                            </li>
                        </ul>
                    </div>
            </div>
        </nav>
    </header>
)
}


export default Navbar