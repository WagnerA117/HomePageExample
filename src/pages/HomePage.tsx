import {
	Button,
	NavBar,
	InfoCard,
	ImageSlider,
	Brands,
	HeadingTag,
} from "../components";
import "./homepage.scss";
import {heroImage} from "../assets";

export const HomePage = () => {
	return (
		<>
			<div style={{width: "100%"}}>
				<header className="header">
					<nav>
						<NavBar />
					</nav>
				</header>

				<section className="hero">
					<div className="hero-content">
						<h1>Live with Confidence</h1>
						<p>
							José Mourinho brings confidence to pan-African Sanlam campaign.
						</p>

						<Button label=" View Project" />
					</div>
					<img src={heroImage} className="hero-image"></img>
				</section>

				<main className="main">
					<InfoCard />
				</main>

				<section className="case-studies">
					<ImageSlider />
				</section>

				<section className="brands">
					<Brands />
				</section>

				<footer className="footer">
					<div style={{margin: "2%"}}>
						<HeadingTag heading="Contact us" />

						<div className="contact-details">
							<h2 className="contact-header">
								Have a project in mind? <br></br> Let's make it happen
							</h2>

							<p className="address">
								22 Street Name, Suburb, 8000,
								<br /> Cape Town, South Africa <br /> +27 21 431 0001
								<br /> <a>enquirie@website.co.za</a>
							</p>
						</div>

						<div className="links-section">
							<p>
								Terms of service
								<br /> Privacy policy
								<br /> Impressum
							</p>

							<p>
								Facebook <br />
								Instagram
								<br /> Twitter
							</p>

							<p>
								Github <br />
								Linkedin <br />
								Teams
							</p>

							<p>
								Youtube
								<br /> Behance <br />
								Dribbble
							</p>

							<p className="jobs">
								Explore open jobs ©2000—2023 <p></p>Company Name
							</p>
						</div>
					</div>
				</footer>
			</div>
		</>
	);
};
