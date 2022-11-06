import { IMotorcycle } from "../../interfaces/IMotorcycle"

const motocycleMock: IMotorcycle = {	
  model: 'Honda CG Titan 125',
  year: 1963,
  color: 'red',
  buyValue: 3500,
  category: 'Street',
  engineCapacity: 125
}

const motocycleMockList: IMotorcycle[] & { _id: string }[] = [
	{
		model: 'Honda CG Titan 125',
    year: 1963,
    color: 'red',
    buyValue: 3500,
    category: 'Street',
    engineCapacity: 125,
    _id: '4edd40c86762e0fb12000003'
	}
]

const motocycleMockWithId: IMotorcycle & { _id: string } = {
	model: 'Honda CG Titan 125',
  year: 1963,
  color: 'red',
  buyValue: 3500,
  category: 'Street',
  engineCapacity: 125,
	_id: '4edd40c86762e0fb12000003'
}

const motocycleMockToUpdate: IMotorcycle = {	
  model: 'Honda CG Titan 125',
  year: 1963,
  color: 'black',
  buyValue: 3500,
  category: 'Street',
  engineCapacity: 125
}

const motocycleMockUpdatedWithId: IMotorcycle & { _id: string } = {	
  model: 'Honda CG Titan 125',
  year: 1963,
  color: 'black',
  buyValue: 3500,
  category: 'Street',
  engineCapacity: 125,
	_id: '4edd40c86762e0fb12000003'
}

export { motocycleMock, motocycleMockList, motocycleMockWithId, motocycleMockToUpdate, motocycleMockUpdatedWithId };