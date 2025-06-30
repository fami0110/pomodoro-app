export default function Dots({ className, color }) {
	return (
		<svg className={className} width="24" viewBox="0 0 30 8" fill="none" xmlns="http://www.w3.org/2000/svg">
			<circle cx="15.0002" cy="3.83543" r="3.54222" fill={color} />
			<circle cx="25.9745" cy="3.83543" r="3.54222" fill={color} />
			<circle cx="4.0261" cy="3.83543" r="3.54222" fill={color} />
		</svg>
	);
}
