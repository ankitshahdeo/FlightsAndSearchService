const { City } = require('../models/index');

class CityRepository {
    async createCity({ name }){  //{name}-- by writing name key like this we can diirectly access name inside this function we dont have to write like name.obj
        try {//to handle errors
            const city =  await City.create({
                name
            });
            return city;
        } catch (error){
           console.log("something went wrong in the repository layer");
           throw{error};
        }
    }

// its an ORM it automatically does its task we dont have to write sql code
    async deleteCity(cityId){
    try {
        await City.destroy({
            where: {
                id:cityId
            }
        });
        return true;
    }catch(error){
        console.log("something went wrong in the repository layer");
        throw{error};

        }
    }

    async updateCity(cityId, data){
        try{
            //the below approach also works but will not return updated object
            //if we are using Pg then returning: true can be used,else not

            // const city = await City.update(data,{
            //     where: {
            //         id:cityId
            //     },
            // });
            
            //for getiing updated data in mysql we use below approach
            const city = await City.findByPk(cityId);
            city.name =data.name;
            await city.save();
            return city;
        }catch (error){
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }
    
    async getCity(cityId){
        try{
            const city =await City.findByPk(cityId);
            return city;
        }catch(error){
            console.log("something went wrong in the repository layer");
            throw{ error };
        }
    }
}

module.exports = CityRepository;