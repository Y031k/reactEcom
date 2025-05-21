import style from './button.module.css';

type ButtonSize = 'lg' | 'md' | 'xs' | 'tn';
type ButtonType = 'primary' | 'outline' | 'tonal';

type ButtonProps = {
	type?: ButtonType;
	size?: ButtonSize;
	text?: string;
}

function Button({type, size, text}: ButtonProps) {
		const classes = [
			style.btn,
			style[type || 'primary'],
			style[size || 'lg']
		]
		.join(' ');

		return (

			<button className={classes}>
				{text}
			</button>

		)
	
	
}

export default Button