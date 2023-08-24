import {Button} from "..";
import brand from "../../assets/brand.svg";

import "./navbar.scss";

export const NavBar = () => {
	return (
		<div className="menu-container">
			<div className="navbar">
				<div className="logo-container">
					<img src={brand}></img>
				</div>

				<div className="nav-buttons">
					<Button label="Services" primary />

					<Button label="Industry" primary />

					<Button label="Cases" primary />

					<Button label="Contact" primary />
				</div>

				<div>
					<Button label="Let's Talk" variant="inverted" />
				</div>
			</div>
		</div>
	);
};
