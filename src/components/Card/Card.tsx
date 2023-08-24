import {HeadingTag} from "..";
import "./card.scss";

interface CardProps {
	title?: string;
	description?: string;
	image?: string;
}

export const Card = ({description, image, title}: CardProps) => {
	return (
		<div className="card">
			<div className="card-content">
				<HeadingTag heading="" />
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
			<img src={image} alt={`${title} image `} className="card-image" />
		</div>
	);
};