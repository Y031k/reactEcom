import './Product.css'
import Button from '../button/button.tsx'
import { moneyFormatter } from '../tools/moneyFormatter.tsx';




/*   render 1 or 2 buttons */


// function renderButton(btnstate: number) {

// 	const buttonState = btnstate;

// 	switch (buttonState) {
// 		case 0:
// 			return <div className="card__btn"> <Button type='primary' size='lg' text='Add to cart'/></div>
// 			 break;
// 		case 1:
// 			 return <div className="card__btn"> <Button type='primary' size='lg' text='Add to cart'/> <Button type='outline' size='lg' text='Add to cart'/></div>
// 			 break;
// 		default:
// 			 return <div className="card__btn"></div>
			
// 	}
// }

/*   product interfatce */

interface ProductCard {
	imgsrc?: string;
	title?: string;
	descrption?: string;
	price?: number;
	// btnstate:number;

}

interface Btn {
	ButtonType: 'primary' | 'outline' | 'tonal';
	ButtonSize: 'lg' | 'md' | 'xs' | 'tn';
	ButtonText: string;
}


function Product({imgsrc, title, descrption, price,actions, ButtonType, ButtonSize, ButtonText, btnstate }: ProductCard) {

	return(
				<div className="card">
				<div className="card__body">
					<img className='card__image' src={imgsrc}/>
					<h2 className="card__title">{title}</h2>
					<p className="card__description">{descrption}</p>
					<h2 className="card__price">{moneyFormatter.format(price)}</h2>
				<div/>
					{actions.map((action: Btn, index: number) => (

						<div key={index}  className="card__btn">
						<Button
							type={action.ButtonType}
							size={action.ButtonSize}		
							text={action.ButtonText}			
						/>
						</div>
					))}
					{/* {renderButton(btnstate)} */}
			{/* <div className="card__btn">
			<Button
				type={ButtonType}
				size={ButtonSize}		
				text={ButtonText}			
			/> */}
			{/* </div>	 */}

			</div>	
		</div>


	)

}


 
 export default Product