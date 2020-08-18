import React from 'react'


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
				 the name here
				 <input name="name" type="text" value={value.name} onChange={e => handleChange(e)}/>
				</p>
				<p>
				 the description here
				 <input name="description" type="text" value={value.description} onChange={e => handleChange(e)}/>
				</p>
				<p>
				 the rating here
				 <input name="rating" type="text" value={value.rating} onChange={e => handleChange(e)}/>
				</p>
				<input type="submit" />
			</form>
		</div>
	)
}

export default Form