const carMock = {	
  model: 'Camaro',
  year: 1967,
  color: 'red',
  buyValue: 3500000,
  seatsQty: 2,
  doorsQty: 2
}

const carMockList = [
	{
		_id: "63592945f44546bf5a691c8d",
		model: "Camaro",
		year: 1967,
		color: "red",
		buyValue: 3500000,
		doorsQty: 2,
		seatsQty: 2
	}
]

const carMockWithId = {
	model: 'Camaro',
	year: 1967,
	color: 'red',
	buyValue: 3500000,
	doorsQty: 2,
	seatsQty: 2,
	_id: "63592945f44546bf5a691c8d"
}

const carMockToUpdate = {	
  model: 'Camaro',
  year: 1967,
  color: 'white',
  buyValue: 3500000,
  seatsQty: 2,
  doorsQty: 2
}

const carMockUpdatedWithId = {	
  model: 'Camaro',
  year: 1967,
  color: 'white',
  buyValue: 3500000,
  seatsQty: 2,
  doorsQty: 2,
  _id: "63592945f44546bf5a691c8d"
}

export { carMock, carMockWithId, carMockList, carMockToUpdate, carMockUpdatedWithId };