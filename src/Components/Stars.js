import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

let Stars = ({name, description, rating, changeFunc}) => {

	let styles = {
		main: {
			margin: '0 10px'
		}
	}



	let firstStarList = []
	for(let i=0; i<5; i++){
		if(i<rating){
			firstStarList[i] = "yellow"
		}else{
			firstStarList[i] = "grey"
		}
	}
	
	let [starsColor, setStarsColor] = React.useState(firstStarList)

	let colorNegative = (index) => {
		let newList = []
		for(let i = 0; i < starsColor.length; i++){
			if(i<=index){
				if(starsColor[i] === "orange"){
					newList[i] = "yellow"
				}else{
					newList[i] = "grey"
				}
			}else{
				if(starsColor[i] === "orange" || starsColor[i] === "yellow"){
					newList[i] = "yellow"
				}else{
					newList[i] = "grey"
				}
			}
		}
		setStarsColor(newList)
	}

	let colorPositive = (index) => {
		let newList = []
		for(let i = 0; i < starsColor.length; i++){
			if(i<=index){
				if(starsColor[i] === "orange" || starsColor[i] === "yellow"){
					newList[i] = "orange"
				}else if(starsColor[i] === "grey"){
					newList[i] = "black"
				}
			}else{
				if(starsColor[i] === "orange" || starsColor[i] === "yellow"){
					newList[i] = "yellow"
				}else{
					newList[i] = "grey"
				}
			}
		}
		setStarsColor(newList)
	}

	let setStar = (index) => {
		let newList = []
		for(let i = 0; i < starsColor.length; i++){
			if(i<=index){
				newList[i] = "orange"
			}else{
				newList[i] = "grey"
			}
		}
		let newForm = {name: name, description: description, rating: ++index}
		changeFunc(newForm)
		setStarsColor(newList)
	}

	let starList = []

	for(let i=0; i<5; i++){
		starList[i] = <FontAwesomeIcon
		 icon={faStar}
		 style={{color: starsColor[i], cursor: "pointer"}}
		 onMouseEnter={() => {colorPositive(i)}}
		 onMouseLeave={() => {colorNegative(i)}}
		 onClick={() => {setStar(i)}}
		 key={i}
		 id={i}
		/>
	}

	return(
		<div style={styles.main}>
			{starList.map(
				star => {
					return(star)
				}
			)}
		</div>
	)	
}


export default Stars
