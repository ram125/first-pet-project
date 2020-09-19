import React from 'react'
import '../css/style.css'
import ProductsRow from './ProductsRow'
import Exposition from './Exposition'
import Context from './Context'
import AddProduct from './AddProduct'
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
				description: "here i'll write my description of the product. It's a really good product and you definetly should buy it. another thing i can say abt a product that doesn't even exist is that it has a rly good price - only 35$ another thingie is that i'm so tired rn to write something with meaning but i need a lot of letters to test my new function. you could say that i should've taken some existing product but bruh i'm too lazy for that shit. actually i think that amount of letters will be enough so i'll just leave it like that",
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
			</div>
		</Context.Provider>
	);
};

export default App