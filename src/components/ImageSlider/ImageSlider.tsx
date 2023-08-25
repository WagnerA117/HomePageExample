import "./imageslider.scss";

import {useEffect, useState} from "react";
import axios from "axios";

import {HeadingTag} from "../HeadingTag/HeadingTag";

import {Card} from "../Card/Card";

import {LoadingSpinner} from "..";

interface Image {
	imageUrl: string;
	title: string;
	description: string;
}

export const ImageSlider = () => {
	const [loading, setLoading] = useState<boolean>(false);
	const [images, setImages] = useState<Image[]>();
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		setLoading(true);
		axios
			.get("/api")
			.then((res) => {
				setImages(res.data);
				setLoading(false);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const previousImage = () => {
		const isFirstImage = currentIndex === 0;
		const newIndex = isFirstImage ? images!.length - 1 : currentIndex - 1;
		setCurrentIndex(newIndex);
	};
	const nextImage = () => {
		const isLastImage = currentIndex === images!.length - 1;
		const newIndex = isLastImage ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
	};

	return (
		<div className="container">
			<div style={{marginBottom: "2%"}}>
				<HeadingTag heading="Case studies" />
			</div>

			<div className="slider-container">
				{images ? (
					<Card
						loading={loading}
						description={images?.[currentIndex].description}
						image={images?.[currentIndex].imageUrl}
						title={images?.[currentIndex].title}
						previousImage={previousImage}
						nextImage={nextImage}
					/>
				) : (
					<LoadingSpinner />
				)}
			</div>
		</div>
	);
};

export default ImageSlider;
