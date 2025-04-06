const express= require("express");
const bodyParser= require('body-parser');

const { PORT } =require('./config/serverconfig');

const ApiRoutes = require('./routes/index');

const db= require('./models/index');
//const {Airplane} = require('./models/index');

const setupAndStartServer =async () => {

       //create the express object
       const app = express();
       app.use(bodyParser.json());
       app.use(bodyParser.urlencoded({extended: true}));
       app.use('/api',ApiRoutes);

       
       app.listen(PORT, async()=>{
        console.log(`Server started at ${PORT}`);
        if(process.env.SYNC_DB){
            db.sequelize.sync({alter: true});
        }
       //  const city = await City.findOne({
       //        where: {
       //               id: 6
       //        }
       //  });
       //const airports = await city.getAirports();
       //  const newAirport= await Airport.findOne({
       //        where: {
       //               id:5
       //        }
       //  });
       //  await city.addAirport(newAirport);


       });
}

setupAndStartServer();
