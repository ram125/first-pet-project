import React from 'react'
import '../css/style.css'
import ProductsRow from './ProductsRow'
import Exposition from './Exposition'
import Context from './Context'
import AddProduct from './AddProduct'
import Stars from './Stars'
/*, 
			{
				id: 3,
				name: 'blue dress', 
				image: './1.jpg', 
				description: "i don't really like this dress",
				rating: 3
			}, 
			{
				id: 4,
				name: 'yellow dress', 
				image: './2.jpg', 
				description: 'this dress is just ok',
				rating: 1
			}, 
			{
				id: 5,
				name: 'green dress', 
				image: './2.jpg', 
				description: 'and this is just a duck',
				rating: 4
			}*/
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
				rating: 5
			}, 
			{
				id: 3,
				name: 'blue dress', 
				image: './1.jpg', 
				description: "i don't really like this dress",
				rating: 3
			}, 
			{
				id: 4,
				name: 'yellow dress', 
				image: './2.jpg', 
				description: 'this dress is just ok',
				rating: 1
			}, 
			{
				id: 5,
				name: 'green dress', 
				image: './2.jpg', 
				description: 'and this is just a duck',
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

	let deleteProduct = (id) => {
		if(exposedProduct === id){
			setExposedProduct(0)
		}
		let newProductList = []
		products.forEach(product => {
			if(product.id !== id){
				if(product.id > id){
					product.id--
					newProductList.push(product)
				}else{
					newProductList.push(product)
				}
			}
		})
		setProduct(newProductList)
	}

	let newProduct = (name, description, rating) => {
		let newProd = {
			id: products.length+1,
			name: name,
			image: './2.jpg',
			description: description,
			rating: rating
		}
		setProduct(products.concat(newProd))
	}

	return(
		<Context.Provider value={{ 
			Exposed: setExposedProduct, 
			Deleted: deleteProduct, 
			NewProduct: newProduct, 
			Changed: setProduct,
			Products: products
		}}>
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
				<Stars />
			</div>
		</Context.Provider>
	);
};

export default App