import React from 'react'
import '../css/style.css'
import ProductsRow from './ProductsRow'
import Exposition from './Exposition'
import Context from './Context'
import AddProduct from './AddProduct'

const App = () => {

	let [products, setProduct] = React.useState([
			{
				id: 1,
				name: 'white dress', 
				image: './1.jpg', 
				description: 'some really good white dress',
				rating: 3
			}, 
			{
				id: 2,
				name: 'red dress', 
				image: './2.jpg', 
				description: 'some really good red dress',
				rating: 4
			}
		])

	const [exposedProduct, setExposedProduct] = React.useState( 0 )

	let list_rows = [];

	for(let i=0; i<products.length/4; i++){
		let current_row = [];
		let currency = 4
		if(i+1.1 > products.length/4){
			currency = 4 - ((i+1)*4 - products.length)
		}
		for(var w=0; w<currency; w++){
			current_row[w] = products[w+(i*4)];
		}
		list_rows[i] = <ProductsRow products={current_row} key={w+(i*4)}/>
	}

	let changeExposed = (id) => {
		setExposedProduct(id)
	}

	let deleteProduct = (id) => {
		setProduct(products.filter(product => product.id !== id))
	}

	let newProduct = (name, description, rating) => {
		console.log(products.length)
		let newProd = {
			id: products.length+1,
			name: name,
			image: './2.jpg',
			description: description,
			rating: rating
		}
		setProduct(products.concat(newProd))
		console.log(products)
	}

	return(
		<Context.Provider value={{ Exposed: changeExposed, Deleted: deleteProduct, NewProduct: newProduct}}>
			<div className="first_class">
				<h1>React tutorial</h1>
				{exposedProduct !== 0 ? (
					<Exposition exposed={products[exposedProduct-1]}/>
				) : (
					<p>no exposition</p>
				)}
				<AddProduct />
				{list_rows.map(
					row => {
						return(row)
					}
				)}
			</div>
		</Context.Provider>
	);
};

export default App