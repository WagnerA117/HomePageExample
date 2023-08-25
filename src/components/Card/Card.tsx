import {Button, HeadingTag} from "..";

import "./card.scss";

interface CardProps {
	title?: string;
	description?: string;
	image?: string;
	loading?: boolean;
	previousImage?: () => void;
	nextImage?: () => void;
}

export const Card = ({
	description,
	image,
	title,
	previousImage,
	nextImage,
}: CardProps) => {
	return (
		<div className="card ">
			<div className="prev-button">
				<Button label="Previous" onClick={previousImage} />
			</div>

			<div className="next-button " onClick={nextImage}>
				<Button label="Next" />
			</div>

			<div className="card-content">
				<HeadingTag heading="" />
				<h3>{title}</h3>
				<p>{description}</p>
			</div>

			<img src={image} alt={`${title} image `} className="card-image" />
		</div>
	);
};
