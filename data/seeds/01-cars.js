// STRETCH
const cars = [
    {
        vin: '1234567890987',
        make: 'toyota',
        model: 'prius',
        mileage: 132567,
        title: 'clean',
        transmission: 'manual',
    },
    {
        vin: '0987654321234',
        make: 'toyota',
        model: 'corolla',
        mileage: 200890,
        title: 'salvage',
    },
    {
        vin: '2345678909876',
        make: 'ford',
        model: 'f150',
        mileage: 57890,
    },
]

exports.seed = function (knex) {
    return knex('cars')
        .truncate().then(() => {
            return knex('cars').insert(cars)
    })
}