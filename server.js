const express = require('express')
const app = express()
const PORT = 8000

const creatures = {
	'tiger plain':{
		'scientificName':'Danaus chrysippus',
		'phylum': 'Arthropoda',
		'species': 'D. chrysippus'
	},
	'human':{
		'scientificName':'Homo sapiens',
		'phylum': 'Chordata',
		'species': 'H. sapiens'
	},
	'unknown':{
		'scientificName':'Unkown',
		'phylum': 'Unkown',
		'species': 'Unkown'
	}
}

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html')
})

app.get('/api/:creature', (req, res) => {
	let creature_name = req.params.creature.toLowerCase()
	if(creatures[creature_name]) res.json(creatures[creature_name])
	else res.json(creatures['unknown'])
})

app.listen(PORT, ()=> {
	console.log(`Server is running at ${PORT}`)
})

