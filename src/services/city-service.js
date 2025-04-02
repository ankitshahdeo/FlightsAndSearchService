const { CityRepository } = require('../repository/index');

class CityService {
    constructor() {
        this.cityRepository = new CityRepository();
    }

    async createCity(data){
        try{
            const city = await this.cityRepository.createCity(data);
            return city;

        }catch(error){
            console.log("something went wrong at service layer");
            throw {error};
        }
    }
    async deleteCity({ cityId }){
        try {
            response = this.createCitytyRepository.deleteCity(cityId);
            return response;

        }catch(error){
            console.log("something went wrong in the repository layer");
            throw{error};
    
            }
        }
    
        async updateCity(CityId, data){
            try{
                const city = await this.cityRepository.updateCity(cityId,data);
                return city;
            }catch (error){
                console.log("Something went wrong in the repository layer");
                throw {error};
            }
        }
        async getCity(CityId){
                try{
                    const city =await this.cityRepository.getCity(cityId);
                    return city;
                }catch(error){
                    console.log("something went wrong in the repository layer");
                    throw{error};
                }
            }
}
module.exports =CityService;