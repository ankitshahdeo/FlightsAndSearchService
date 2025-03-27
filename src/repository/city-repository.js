const { City } = require('../models/index');

class CityRepository {
    async createCity({ name }){
        try {
            const city =  await City.create({name});
            return city;
        } catch (error){
            throw {error};
        }
    }

// its an ORM it automatically does its task we dont have to write sql code
async deleteCity({ cityid }){
    try {
        await City.destroy({
            where: {
                id:cityId
            }
        });
    }catch(error){
        throw{error};

    }``
}
}

module.exports = CityRepository;