
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex("cars").truncate()
    
  await knex("cars").insert([
    { vin: "1234", make: "ford", model: "taurus", mileage: 200000, title: "yes", transmission: "automatic" },
    { vin: "2345", make: "subaru", model: "outback", mileage: 100000, title: "no", transmission: "automatic" },
    { vin: "3456", make: "mini", model: "cooper", mileage: 50000, title: "yes", transmission: "manual" }
  ])
};
