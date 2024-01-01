// STRETCH
const cars = [
    {
        vin: '1FDXE45F51HA15306',
        make: 'toyota',
        model: 'prius',
        mileage: 132567,
        title: 'clean',
        transmission: 'manual',
    },
    {
        vin: '1GNEC13ZX3J123100',
        make: 'toyota',
        model: 'corolla',
        mileage: 200890,
        title: 'salvage',
    },
    {
        vin: '1D8GT58687W796324',
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