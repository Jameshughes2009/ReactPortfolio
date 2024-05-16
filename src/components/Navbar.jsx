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
}

export default Navbar