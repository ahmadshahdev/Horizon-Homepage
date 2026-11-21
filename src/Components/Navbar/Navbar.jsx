import { MdOutlineTravelExplore, MdClose, MdMenu } from "react-icons/md";
import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
	// initial state is the base class name; we'll toggle to "navBar activeNavBar"
	const [active, setActive] = useState("navBar");

	const showNav = () => setActive("navBar activeNavBar");
	const removeNavBar = () => setActive("navBar");

	return (
		<section className="navBarSection">
			<header className="header flex">
				<div className="logoDiv">
					<a href="#" className="logo">
						<h1>
							<MdOutlineTravelExplore className="icon" />
							Travel
						</h1>
					</a>
				</div>

				
				<div className={active}>
					<ul className="navList flex">
						<li className="navItems">
							<a href="#" className="navLink">
								Home
							</a>
						</li>
						<li className="navItems">
							<a href="#" className="navLink">
								Packages
							</a>
						</li>
						<li className="navItems">
							<a href="#" className="navLink">
								Shop
							</a>
						</li>
						<li className="navItems">
							<a href="#" className="navLink">
								About
							</a>
						</li>
						<li className="navItems">
							<a href="#" className="navLink">
								Pages
							</a>
						</li>

						<li className="navItems">
							<a href="#" className="btn">
								Book Now
							</a>
						</li>
					</ul>

					<div onClick={removeNavBar} className="closeNavbar">
						<MdClose className="icon" />
					</div>
				</div>

				<div onClick={showNav} className="toggleNavbar">
					<MdMenu className="icon" />
				</div>
			</header>
		</section>
	);
};

export default Navbar;
