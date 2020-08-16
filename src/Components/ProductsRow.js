import React from 'react'
import Product from './Product'

let styles = {
	marginTop: '10px',
	display: 'flex',
	flexDirection: 'row'
}

const ProductRow = ({products}) => {
	return(
		<div style={styles}>
			{products.map((product, i) => {
				return(
					<Product product={product} key={i}/>
				)
			})}
		</div>
	)
}

export default ProductRow