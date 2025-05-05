import './Product.scss'


/*   local currency format */
export const moneyFormatter = Intl.NumberFormat('en-ES', {
	currency: 'USD',
	currencyDisplay: 'symbol',
	currencySign: 'standard',
	style: 'currency',
	minimumFractionDigits: 2,  
	maximumFractionDigits: 4,  
	minimumIntegerDigits: 1,   
 });

/*   product interfatce */

interface ProductCard {
	imgsrc: string
	title: string
	descrption: string
	price: number
}

function Product({imgsrc, title, descrption, price}: ProductCard) {
	return (
	  <>
			<div className="card">
				<div className="card__body">
					<img src={imgsrc}/>
					<h2 className="card__title">{title}</h2>
					<p className="card__description">{descrption}</p>
					<h2 className="card__price">{moneyFormatter.format(price)}</h2>
					<button onClick={
						()=>{
						console.log( 'Product', {title}.title, 'added to cart')
						}
					}className="card__btn">
					Add to basket
					</button>
				</div>
			</div>
	  </>
	)
 }
 
 export default Product