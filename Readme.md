# Welcome to Flights Service

## project setup
 - clone the project on your local
 - Execute `npm install` on the same path as your  root directory of teh downloaded project
 -Create a `.env` file in the root directory and add the following environmebt variable
     -`PORT=3000`
 -Inside the `src/config` folder create a new file `config.json` and then add the following piece of json

 ```
 {
  "development": {
    "username": <your_db_login_name>,
    "password": <your_db_password>,
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }

}