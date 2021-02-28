

// checkCarId returns a status 404 with a { message: "car with id <car id> is not found" } if the id in req.params does not exist in the database.
const checkCarId = (req, res, next) => {
  // DO YOUR MAGIC
}

// checkCarPayload returns a status 400 with a { message: "<field name> is missing" } if any required field is missing.
const checkCarPayload = (req, res, next) => {
  // DO YOUR MAGIC
}

// checkVinNumberValid returns a status 400 with a { message: "vin <vin number> is invalid" } if the vin number is invalid.
const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
}

// checkVinNumberUnique returns a status 400 with a { message: "vin <vin number> already exists" } if the vin number already exists in the database.
const checkVinNumberUnique = (req, res, next) => {
  // DO YOUR MAGIC
}
