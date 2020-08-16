import React from 'react'
import '../css/style.css'
import ProductsRow from './ProductsRow'
import Exposition from './Exposition'
import Context from './Context'

const App = () => {

	let products = [
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
	]

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

	return(
		<Context.Provider value={{ Clicked: changeExposed }}>
			<div className="first_class">
				<h1>React tutorial</h1>
				{exposedProduct !== 0 ? (
					<Exposition exposed={products[exposedProduct-1]}/>
				) : (
					<p>no exposition</p>
				)}
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