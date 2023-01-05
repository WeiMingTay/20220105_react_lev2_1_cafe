import { Link, NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
	return (
		<header>
			<div>
				{/* <img src="#"/> */}
				<div>
					<p>张</p>
				</div>
				<h1>Ming's Cafe Hamburg</h1>
			</div>
			<nav>
				<ul>
					<li>
						<NavLink
							to="/Speisekarte"
							style={({ isActive }) =>
								isActive ? { color: "#66aeaa" } : { color: "#fff" }
							}
						>
							Speisekarte
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/Kontakt"
							style={({ isActive }) =>
								isActive ? { color: "#66aeaa" } : { color: "#fff" }
							}
						>
							Kontakt
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/Oeffnungszeiten"
							style={({ isActive }) =>
								isActive ? { color: "#66aeaa" } : { color: "#fff" }
							}
						>
							Öffnungszeiten
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/Galerie"
							style={({ isActive }) =>
								isActive ? { color: "#66aeaa" } : { color: "#fff" }
							}
						>
							Galerie
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Nav;
