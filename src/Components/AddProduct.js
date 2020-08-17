import React, {useContext, useState} from 'react'
import Context from './Context'

let AddProduct = () => {

	let styles = {
		main: {
			display: "flex",
			flexDirection: "row"
		},
		form: {
			display: "none"
		}, 
		addBtn: {
			height: "50px",
			width: "50px",
			border: "1px solid black",
			borderRadius: "50%",
			cursor: "pointer",
			background: "white"
		},
		myform: {
			display: "none"
		}
	}

	const [value, setValue] = useState({
		name: '',
		description: '',
		rating: ''
	})

	const values = ["name", "description", "rating"]

	const {NewProduct} = useContext(Context)

	let changeClass = () => {
		let theObject = document.getElementById("myForm")
		let theBtn = document.getElementById("addBtn")
		if(theObject.style.display === "none"){
			theObject.style.display = "flex"
			theBtn.innerHTML = "X"
		}else{
			theObject.style.display = "none"
			theBtn.innerHTML = "+"
		}
	}

	let handleChange = (event) => {
		let newObj = {}
		for(let i=0; i<values.length; i++){
			if(values[i] === event.target.name){
				newObj[event.target.name] = event.target.value
			}else{
				newObj[values[i]] = value[values[i]]
			}
		}
		setValue(newObj)
	}

	let handleSubmit = event => {
		event.preventDefault()
		if(value.name.trim()){
			NewProduct(value.name, value.description, value.rating)
			setValue({name: '', description: '', rating: ''})
		}
	}

	return(
		<div style={styles.main}>
			<div id="myForm" style={styles.myform}>
				<form onSubmit={handleSubmit}>
					<p>
					 the name here
					 <input name="name" type="text" value={value.name} onChange={e => handleChange(e)} />
					</p>
					<p>
					 the description
					 <input name="description" type="text" value={value.description} onChange={e => handleChange(e)} />
					</p>
					<p>
					 the rating
					 <input name="rating" type="text" value={value.rating} onChange={e => handleChange(e)} />
					</p>
					<input type="submit" />
				</form>
			</div>
			<button id="addBtn" style={styles.addBtn} onClick={changeClass}>+</button>
		</div>
	)
}

export default AddProduct