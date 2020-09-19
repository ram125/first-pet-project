import React from 'react'
import Stars from './Stars'
import '../css/style.css'

let Form = ({product, saveChanges}) => {

	let style = {
		form: {
			background: "#f1f1f1"
		}
	}

	const [value, setValue] = React.useState({
		name: product.name,
		description: product.description, 
		rating: product.rating
	})
	const values = ["name", "description", "rating"]
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
			saveChanges(value.name, value.description, value.rating)
		}
	}
	return(
		<div>
			<form onSubmit={handleSubmit} style={style.form}>
				<p>
					title
					<input className="inputs" name="name" placeholder="name"type="text" value={value.name} onChange={e => handleChange(e)}/>
				</p>
				<p>
					description
					<textarea className="inputs" style={{
						height: "200px",
						resize: "none",
						display: "block",
						overflow: "auto"
					}} name="description" placeholder="description" type="text" value={value.description} onChange={e => handleChange(e)}/>
				</p>
				<div className="stars" style={{display: "flex", flexDirection: "column"}}>
					<p style={{marginBottom: "10px"}}>rating</p>
					<Stars name={value.name} description={value.description} rating={value.rating} changeFunc={setValue}/>
				</div>
				<input type="submit" className="formBtn" value="Save changes"/>
			</form>
		</div>
	)
}

export default Form