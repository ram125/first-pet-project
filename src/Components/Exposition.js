import React, {useContext} from 'react'
import Context from './Context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'


let styles = {
	mainDiv: {
		widht: "6%",
		height: "400px",
		display: "flex",
		flexDirection: "row",
		padding: "20px"
	},
	image: {
		height: "300px",
		width: "200px",
		marginRight: "30px"
	},
	description: {
		display: "flex", 
		flexDirection: "column",
		justifyContent: "center"
	},
	h2: {
		textTransform: "capitalize"
	},
	button: {
		border: 0,
		background: "white",
		cursor: "pointer",
		height: "50px"
	}
}

let Exposition = ({exposed}) => {
	const images = require.context('../img', true);

	const {Exposed} = useContext(Context)

	let stars = []
	for(let i=0; i<5; i++){
		if(i<exposed.rating){
			stars[i] = 'yellow'
		}else{
			stars[i] = 'grey'
		}
	}

	return(
		<div style={styles.mainDiv}>
			<img src={images(exposed.image)} alt="another something" style={styles.image} />
			<div style={styles.description}>
				<h2 style={styles.h2}>{exposed.name}</h2>
				<div style={styles.rating}>
				{
					stars = 
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
				<p>{exposed.description}</p>
			</div>
			<button style={styles.button} onClick={() => {Exposed(0)}}>X</button>
		</div>
	)
}

export default Exposition