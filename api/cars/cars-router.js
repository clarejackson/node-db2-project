// DO YOUR MAGIC
const router = require('express').Router()
const cars = require('./cars-model')
const { checkCarId, checkCarPayload, checkVinNumberUnique, checkVinNumberValid } = require('./cars-middleware')

// [GET] /api/cars returns an array of cars sorted by id (or an empty array if there aren't any).
router.get('/', async (req, res, next) => {
  try {
    const values = await cars.getAll()
    res.status(200).json(values)
  } catch (err) {
    next(err)
  }
})

// [GET] /api/cars/:id returns a car by the given id.
router.get('/:id', checkCarId, async (req, res, next) => {
  try {
    res.status(200).json(req.car)
  } catch (err) {
    next(err)
  }
})

// [POST] /api/cars returns the created car. Leading or trailing whitespace on budget name should be trimmed before saving to db.
router.post('/', checkCarPayload, checkVinNumberUnique, checkVinNumberValid, async (req, res, next) => {
  try {
    const newCar = cars.create(res.car)
    res.status(201).json(newCar)
  } catch (err) {
    next(err)
  }
})