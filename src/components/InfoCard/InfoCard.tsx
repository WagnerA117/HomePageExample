import "./infocard.scss";
import {HeadingTag} from "../HeadingTag/HeadingTag";

import {blockChain, mobileDev, userExperience, webDev} from "../../assets";

export type ServicesCardType = {
	logo?: string;
	title?: string;
	description?: string;
};

const services: ServicesCardType[] = [
	{
		logo: webDev,
		title: " Web development",
		description:
			"We use cutting-edge web development technologies to help our clients fulfill their business goals through functional, reliable solutions.",
	},
	{
		logo: userExperience,
		title: " User experience & design",
		description:
			"Our complete web design services will bring your ideas to life and provide you with a sleek, high-performing product that elevates your business.",
	},
	{
		logo: mobileDev,
		title: "Mobile development",
		description:
			"Our extensive mobile development experience allows us to create custom native and cross-platform iOS and Android mobile solutions for our clients.",
	},
	{
		logo: blockChain,
		title: " Blockchain solutions",
		description:
			"We conduct market research to determine the optimal blockchain-based solutions to help you grow your company and achieve your business goals.",
	},
];

//rename the info card to services

export const InfoCard = () => {
	return (
		<div className="info-card-container">
			<div className="heading-tag">
				<HeadingTag heading="What we do" />
			</div>

			{/*<img src={blockChain} alt="Blockchain logo" />*/}

			<div>
				<h1>
					We offer a complete range of bespoke design and development services
					to help you turn your ideas into digital masterpieces
				</h1>
			</div>

			<div className="services-section">
				{services.map((item) => (
					<div className="service-item">
						<img src={item.logo} alt={`${item.title} image `} />

						<h4>{item.title}</h4>

						<div>
							<p>{item.description}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
