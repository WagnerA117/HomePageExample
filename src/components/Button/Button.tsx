import "./button.scss";

interface ButtonProps {
	variant?:
		| "primary"
		| "secondary"
		| "tertiary"
		| "sucess"
		| "danger"
		| "card-button"
		| "inverted";

	primary?: boolean;

	backgroundColor?: string;

	size?: "small" | "medium" | "large";

	label: string;
	loading?: boolean;

	onClick?: () => void;
}

export const Button = ({
	backgroundColor,
	label,

	primary = false,
	size = "medium",
	variant,
	...props
}: ButtonProps) => {
	const mode = primary ? "button--primary" : "button--secondary";

	return (
		<button
			type="button"
			className={["button", `button--${size}`, mode, variant].join(" ")}
			style={{backgroundColor}}
			{...props}
		>
			{label}
		</button>
	);
};
