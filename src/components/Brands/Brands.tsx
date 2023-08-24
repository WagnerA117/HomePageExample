import {HeadingTag} from "..";
import "./brands.scss";
import {
	bbc,
	distell,
	engen,
	liquid,
	microsoft,
	multichoice,
	picknPay,
	sanlam,
	santam,
	spotify,
	tfg,
	tymeBank,
	visa,
	wesGro,
	nike,
} from "../../assets";

const images = [
	visa,
	tymeBank,
	distell,
	spotify,
	microsoft,
	engen,
	nike,
	wesGro,
	multichoice,
	picknPay,
	liquid,
	tfg,
	sanlam,
	santam,
	bbc,
];

export const Brands = () => {
	return (
		<div className="brand-container">
			<HeadingTag heading="You'll be in good company" />

			<h1>Trusted by leading brands</h1>

			<div className="brands-display">
				{images.map((item) => (
					<img src={item} alt="brand" />
				))}
			</div>
		</div>
	);
};
