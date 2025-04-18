const {FlightRepository, AirplaneRepository}= require('../repository/index');
const { compareTime }= require('../utils/helper');

class FlightService{
    constructor(){
        this.airplaneRepository = new AirplaneRepository();
        this.flightrepository =new FlightRepository();
    }
    async createFlight(data){
        try{
            if(!compareTime(data.arrivalTime,data.departureTime)){
                  throw{error: 'Arrival time cannot be less than the departure time'}
            }
            
            const airplane =await this.airplaneRepository.getAirplane(data.airplaneId);
            const flight = await this.flightrepository.createFlight({
                ...data, totalSeats:airplane.capacity
            });
            return flight;

        }catch(error){
            console.log("something went wrong in the repository layer");
            throw{error};
        }
    }
    async getAllFlightData(data){
        try{
            const flights =await this.flightrepository.getAllFlights(data);
            return flights;
        }
        catch(error){
            console.log("something went wrong in the repository layer");
            throw{error};
        }

    }
}
module.exports = FlightService;