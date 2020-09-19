import React, {useContext, useState} from 'react'
import Context from './Context'
import Stars from './Stars'
import '../css/style.css'

let AddProduct = () => {

	let styles = {
		main: {
			display: "flex",
			flexDirection: "row"
		},
		myform: {
			position: "relative",
			display: "flex",
			flexDirection: "row"
		}, 
		addBtn: {
			border: "0px solid black",
			cursor: "pointer",
			background: "white"
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
		let theBtn = document.getElementById("addBtn")
		let theForm = document.getElementById("Form")
		if(theBtn.classList.contains("addProductA")){
			theBtn.classList.remove("addProductA")
			theForm.style.marginLeft = "-260px"
		}else{
			theBtn.classList.add("addProductA")
			theForm.style.marginLeft = "0px"
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
			setValue({name: '', description: '', rating: 0})
			changeClass()
		}
	}

	return(
		<div style={styles.main}>
			<div style={styles.myform}>
				<form onSubmit={handleSubmit} className="addForm" id="Form">
					<p style={{display: "flex", flexDirection: "column"}}>
						title
						<input className="inputs" name="name" placeholder="Name of the product" type="text" value={value.name} onChange={e => handleChange(e)} />
					</p>
					<p>
						description
						<input className="inputs" style={{
							height: "200px",
							resize: "none",
							display: "block",
							overflow: "auto"
						}} name="description" placeholder="Description of the product" type="text" value={value.description} onChange={e => handleChange(e)} />
					</p>
					<div style={{display: "flex", flexDirection: "column"}}>
						<p style={{marginBottom: "10px"}}>rating</p>
						<Stars name={value.name} description={value.description} rating={value.rating} changeFunc={setValue}/>
					</div>
					<input type="submit" className="formBtn" value="Save changes"/>
				</form>
				<div id="addBtn" className="addProduct" onClick={changeClass}>
				</div>
			</div>
		</div>
	)
}

export default AddProduct