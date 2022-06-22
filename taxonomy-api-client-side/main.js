document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
	const creature_name = document.querySelector('input').value
	try{
		const response = await fetch(`https://taxonomy-names-api.herokuapp.com/api/${creature_name}`)
		const data = await response.json()
		console.log(data)
		document.querySelector('h2').innerText = data.scientificName
	}catch(error){
		console.log(error)
	}
}