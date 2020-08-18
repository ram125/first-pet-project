import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import Context from './Context'
import Form from './Form'
import '../css/style.css'


let styles = {
	main_div: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		margin: '0 10px',
	},
	rating: {
		display: 'flex',
		flexDirection: 'row',
		margin: '10px 0'
	},
	img: {
		height: '340px',
		width: '260px'
	},
	h3: {
		textTransform: 'capitalize'
	}
}

const Product = ({product}) => {
	let stars = []

	let [formShown, setFormShown] = React.useState(false)

	const {Exposed} = React.useContext(Context)
	const {Deleted} = React.useContext(Context)
	const {Changed} = React.useContext(Context)
	const {Products} = React.useContext(Context)

	for(let i=0; i<5; i++){
		if(i<product.rating){
			stars[i] = 'yellow'
		}else{
			stars[i] = 'grey'
		}
	}

	const somefunc = () => {
		for(let i=0; i<3; i++){
			let theBtn = document.getElementById("ctrlBtn"+product.id+i);
			theBtn.classList.remove("unactive");
			theBtn.classList.add("active")
		}
	}
	const secfunc = () => {
		for(let i=0; i<3; i++){
			let theBtn = document.getElementById("ctrlBtn"+product.id+i);
			theBtn.classList.add("unactive");
			theBtn.classList.remove("active")
		}
	}

	const saveChanges = (name, description, rating) => {
		let prevProduct = product
		prevProduct.name = name
		prevProduct.description = description
		prevProduct.rating = rating
		let curProduct = Products.map(product => {
					if(product.id === prevProduct.id){
						return(prevProduct)
					}
					return(product)
				}
			)
		Changed(curProduct)
		setFormShown(false)
	}

	const images = require.context('../img', true);
	return(
		<div
		 style={styles.main_div} 
		 className="product" 
		 onMouseEnter={() => {somefunc()}}
		 onMouseLeave={() => {secfunc()}}
		>
			<img src={images(product.image)} alt="gigigi" style={styles.img}/>
			<div className="ctrlPanel">
				<div
				 id={"ctrlBtn"+product.id+"0"}
				 className="ctrlBtn unactive first"
				 onClick={() => {Exposed(product.id)}}
				>
					<FontAwesomeIcon icon={faEye} />
				</div>
				<div 
				 id={"ctrlBtn"+product.id+"1"} 
				 className="ctrlBtn unactive second" 
				 onClick={() => {
				 	setFormShown(!formShown)
				 }}
				>
					<FontAwesomeIcon icon={faEdit} />
				</div>
				<div
				 id={"ctrlBtn"+product.id+"2"} 
				 className="ctrlBtn unactive third"
				 onClick={() => {Deleted(product.id)}}
				><FontAwesomeIcon icon={faTrash} /></div>
			</div>
			<h3 style={styles.h3}>{product.name}</h3>
			<div style={styles.rating}>
				{
					stars.map(
						(star, i) => {
							return(<FontAwesomeIcon
							 icon={faStar}
							 style={{color: star, margin: '0 2px'}}
							 key={i} 
							/>)
						}
					)
				}
			</div>
			<p>{product.description}</p>
			{formShown ? (
				<Form product={product} saveChanges={saveChanges}/>
			): (<p></p>)}
		</div>
	)
}

export default Product