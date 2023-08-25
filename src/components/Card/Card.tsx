import {HeadingTag, LoadingSpinner} from "..";

import "./card.scss";

interface CardProps {
	title?: string;
	description?: string;
	image?: string;
	loading?: boolean;
}

export const Card = ({description, image, title, loading}: CardProps) => {
	console.log(loading);

	//if (loading) {
	//	return <LoadingSpinner />;
	//}
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
