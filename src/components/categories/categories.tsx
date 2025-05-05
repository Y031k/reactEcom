// import React from 'react';
import './categories.scss';
import { categories } from './data';
import { useEffect } from 'react';

function Categories() {
	// fetch('https://dummyjson.com/products/categories')
	// .then(res => res.json())
	// .then(console.log);



	return (
		 <ul>
{
	categories.map((category) => (
		<li key={category.name}> {category.name}</li>  
	))
}
		</ul>
	)
}


export default Categories;