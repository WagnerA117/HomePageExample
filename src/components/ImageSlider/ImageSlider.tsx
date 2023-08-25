import "./imageslider.scss";

import {useEffect, useState} from "react";
import axios from "axios";

import {HeadingTag} from "../HeadingTag/HeadingTag";

import {Card} from "../Card/Card";
import {Button} from "../Button/Button";
import {LoadingSpinner} from "..";

interface Image {
	imageUrl: string;
	title: string;
	description: string;
}

//interface ImageSliderProps {
//	images?: Image[] | [];
//}

export const ImageSlider = () => {
	const [loading, setLoading] = useState<boolean>(false);
	const [images, setImages] = useState<Image[]>();
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		//setLoading(true);

		setTimeout(() => {}, 2000);

		axios
			.get("/api")
			.then((res) => {
				setImages(res.data);
				setLoading(false);
			})
			.catch((err) => {
				console.log(err);
			});

		//setLoading(false);
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

	console.log(currentIndex, "index");

	return (
		<div className="container">
			<div>
				<HeadingTag heading="Case studies" />
			</div>

			<div className="slider-container">
				<Button label="Previous" onClick={previousImage} />

				{images ? (
					<Card
						loading={true}
						description={images?.[currentIndex].description}
						image={images?.[currentIndex].imageUrl}
						title={images?.[currentIndex].title}
					/>
				) : (
					<LoadingSpinner />
				)}

				<Button label="Next" onClick={nextImage} />
			</div>
		</div>
	);
};

export default ImageSlider;
