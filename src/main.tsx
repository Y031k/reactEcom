import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css';
import Product from './components/productCard/Product.tsx';
// import Categories  from './components/categories/categories.tsx';
//  import Button from './components/button/button.tsx';
import { productData } from './components/productCard/ProductData.tsx';


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

			{productData.map((product, index) => (
				<Product
					key={index}
					imgsrc={product.imgsrc}
					title={product.title}
					descrption={product.descrption}
					price={product.price}
					actions={product.actions}

				/>
			))}

	
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
