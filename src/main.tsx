import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css';
import Product from './components/productCard/Product.tsx';
// import Categories  from './components/categories/categories.tsx';
// import Button from './components/button/button.tsx';


createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<div className="container">
			<div className="nav">
			</div>
			<div className="nav">
			</div>
			<div className="sidebar">
				{/* <h3 className="title">Shop by Category</h3>
				<Categories /> */}
			</div>
			<div className="main">	
			<div className="wrapper">

			<Product
				imgsrc="https://orebishopping.reactbd.com/static/media/spfFour.d005441cba54d7214bf7.webp"
				title="Sun glasses"
				descrption="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
				price={200.00}
				ButtonType='primary'
				ButtonSize='lg'
				ButtonText='Add to cart'
			/>

			<Product
				imgsrc="https://orebishopping.reactbd.com/static/media/newArrFour.b8a5fda6839f2f0b1eaa.webp"
				// title="Funny Toy"
				// descrption="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
				price={60.00}
			/>
			<Product
				imgsrc="https://orebishopping.reactbd.com/static/media/bestSellerTwo.c2641a76c189fcc71670.webp"
				title="Backpack"
				descrption="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
				price={120.00}
			/>

			</div>
		<></>
		<div className="footer">
			{/* <div className="menu">
					<h3 className="title">Primary buttons</h3>
				<Button 
					type='primary'
					size='lg'
					text='Button'
				/>
				<Button 
					type='primary'
					size='md'
					text='Button'
					/>
				<Button 
					type='primary'
					size='xs'
					text='Button'
					/>
				<Button 
					type='primary'
					size='tn'
					text='Button'
					/>
			</div>
			<div className="menu">
					<h3 className="title">Outline buttons</h3>
				<Button 
					type='outline'
					size='lg'
					text='Button'
				/>
				<Button 
					type='outline'
					size='md'
					text='Button'
					/>
				<Button 
					type='outline'
					size='xs'
					text='Button'
					/>
				<Button 
					type='outline'
					size='tn'
					text='Button'
					/>
			</div>
			<div className="menu">
					<h3 className="title">Tonal buttons</h3>
				<Button 
					type='tonal'
					size='lg'
					text='Button'
				/>
				<Button 
					type='tonal'
					size='md'
					text='Button'
					/>
				<Button 
					type='tonal'
					size='xs'
					text='Button'
					/>
				<Button 
					type='tonal'
					size='tn'
					text='Button'
					/>
			</div>


		</div> */}
	</div>
</div>
</div>

	</StrictMode>,
)
