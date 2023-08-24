import "./imageslider.scss";

import {useEffect, useState} from "react";
import axios from "axios";

import {HeadingTag} from "../HeadingTag/HeadingTag";

import {Card} from "../Card/Card";
import {Button} from "../Button/Button";

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

	console.log(images, "images in image slider");

	if (loading) {
		return <h1>Loading...</h1>;
	}

	const goToPrevious = () => {
		const isFirstImage = currentIndex === 0;
		const newIndex = isFirstImage ? images!.length - 1 : currentIndex - 1;
		setCurrentIndex(newIndex);
	};
	const goToNext = () => {
		const isLastImage = currentIndex === images!.length - 1;
		const newIndex = isLastImage ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
	};
	const goToImage = (imageIndex: number) => {
		setCurrentIndex(imageIndex);
	};

	console.log(currentIndex, "index");

	return (
		<div className="container">
			<div>
				<HeadingTag heading="Case studies" />
			</div>

			<div className="slider-container">
				<Button label="Previous" onClick={goToPrevious} />
				<Card
					description={images?.[0].description}
					image={images?.[currentIndex].imageUrl}
					title={images?.[currentIndex].title}
				></Card>
				<Button label="Next" onClick={goToNext} />
			</div>
		</div>
	);
};

export default ImageSlider;
