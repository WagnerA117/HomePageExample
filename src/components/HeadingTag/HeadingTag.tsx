import "./headingtag.scss";
export interface HeadingTagProps {
	heading: string;
}

export const HeadingTag = ({heading}: HeadingTagProps) => {
	return (
		<div className="heading-tag-container">
			<div className="header-rectangle"></div>
			<h5>{heading}</h5>
		</div>
	);
};
