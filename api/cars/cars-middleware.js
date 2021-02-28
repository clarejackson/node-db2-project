const cars = require('./cars-model')
var vinValidator = require('vin-validator');
// checkCarId returns a status 404 with a { message: "car with id <car id> is not found" } if the id in req.params does not exist in the database.
exports.checkCarId = async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    const car = await cars.getById(req.params.id)
    if (car) {
      req.car = car
      next()
    } else {
      res.status(404).json({
        message: `car with id ${car.id} is not found`
      })
    }
  } catch (err) {
    next(err)
  }
}

// checkCarPayload returns a status 400 with a { message: "<field name> is missing" } if any required field is missing.
exports.checkCarPayload = (req, res, next) => {
  // DO YOUR MAGIC
  if (!req.body.vin || !req.body.make || !req.body.model || !req.body.mileage) {
    return res.status(400).json({
      message: "required field is missing"
    })
}
next()
}

// checkVinNumberValid returns a status 400 with a { message: "vin <vin number> is invalid" } if the vin number is invalid.
exports.checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
  var isValidVin = vinValidator.validate(req.body.vin);
  if (!isValidVin) {
    return res.status(400).json({
      message: `vin ${req.body.vin} is invalid`
    })
  }
  next()
}

// checkVinNumberUnique returns a status 400 with a { message: "vin <vin number> already exists" } if the vin number already exists in the database.
exports.checkVinNumberUnique = async (req, res, next) => {
  // DO YOUR MAGIC
  try {
  let dbVins = await cars.getAll()
  // const vin = req.body.vin

  dbVins = dbVins.filter((newVin) => {
    return req.body.vin === newVin.vin
  })

  if (dbVins.length >= 1) {
    res.status(400).json({
      message: `vin ${req.body.vin} already exists`
    })
  } else {
    next()
  }
} catch (err) {
  next(err)
}
}
