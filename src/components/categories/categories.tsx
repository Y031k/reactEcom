// import React from 'react';
import './categories.scss';
// import { categories } from './data';
import { useEffect, useState } from 'react';
import { categoriesTypes } from './categoriesType';

function Categories() {

	const [categories, setCategories] = useState<categoriesTypes>([]);

	useEffect(() => {
		fetch('https://dummyjson.com/products/categories')
			.then(res => res.json())
			.then((data: categoriesTypes) => {
				setCategories(data);
			})
	}, []);

	return (
		 <ul>
   { categories.map((category) => (
		<li>{category.name}</li>  
	))}
		</ul>
	)
}


export default Categories;