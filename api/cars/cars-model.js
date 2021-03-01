const db = require('../../data/db-config')

// getAll resolves to an array of car records (or an empty array)
const getAll = () => {
  // DO YOUR MAGIC
  return db.select("*").from('cars');
}

// getById resolves to a car record by the given id
const getById = () => {
  // DO YOUR MAGIC
  return db.select("*")
  .from('cars')
  .where("id", id)
  .limit(1)
}

// create resolves to the newly created car record
const create = async (cars) => {
  // DO YOUR MAGIC
  const [id] = await db
  .insert({
    vin: cars.vin,
    make: cars.make,
    model: cars.model,
    mileage: cars.mileage,
    title: cars.title,
    transmission: cars.transmission,
  })
  .into('cars')

  const newCar = await db('cars')
  .where("id", id)
  .first()

  return newCar
}

module.exports = {
  getAll,
  getById,
  create,
}
