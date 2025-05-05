import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.scss'
import Product from './components/productCard/Product.tsx'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<div className="wrapper">
			<Product
				imgsrc="https://orebishopping.reactbd.com/static/media/spfFour.d005441cba54d7214bf7.webp"
				title="Sun glasses"
				descrption="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
				price={200.00}
			/>
			<Product
				imgsrc="https://orebishopping.reactbd.com/static/media/newArrFour.b8a5fda6839f2f0b1eaa.webp"
				title="Funny Toy"
				descrption="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
				price={60.00}
			/>
			<Product
				imgsrc="https://orebishopping.reactbd.com/static/media/bestSellerTwo.c2641a76c189fcc71670.webp"
				title="Backpack"
				descrption="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
				price={120.00}
			/>





		</div>
	</StrictMode>,
)
