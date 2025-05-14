
type ButtonProps = {
	type?: string;
	size?: string;
	text?: string;
}

function Button({type, size, text}: ButtonProps) {

	return (
		<button className={`btn ${type ? type : ''} ${size ? size : ''}`.trim()}> 
			&#129120; &#160; {text} &#160;&#129122;
		</button>
	);
}

export default Button