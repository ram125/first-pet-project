import React from 'react'
import Stars from './Stars'

let Form = ({product, saveChanges}) => {
	
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
			<form onSubmit={handleSubmit}>
				<p>
				 <input name="name" placeholder="name"type="text" value={value.name} onChange={e => handleChange(e)}/>
				</p>
				<p>
				 <input name="description" placeholder="description" type="text" value={value.description} onChange={e => handleChange(e)}/>
				</p>
				<div style={{display: "flex", flexDirection: "row"}}>
				 <Stars name={value.name} description={value.description} rating={value.rating} changeFunc={setValue}/>
				</div>
				<input type="submit"/>
			</form>
		</div>
	)
}

export default Form