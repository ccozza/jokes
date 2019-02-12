# Healthera Jokes Problem

The app provides REST endpoints to manage jokes. A pre-registered Admin has to sign-in and only then one is provided authorization to create, read, update or delete jokes

## Prerequisite
 - node version >= 8.4
 - npm version >= 5.6
 - mongodb version >= 4.0
 - Ensure mongo db service is up and running
 - execute init.sh script from root directory
 - this will create default database and a collection named "Users" in mongodb
 - it will also create an Admin with default credentials

## Steps to run the service
 - npm install
 - npm run start
 - it will start the server by default on port 3000
 - note from logs that unit test cases are executed first with code coverage report generated in "coverage" folder in root directory

## Steps to test the app
 - import the POSTMAN collection from the url ```https://www.getpostman.com/collections/d4f4b879ffeec404a204```
 - execute the login api from the collection first
 - in response header for the above api, copy the payload from "Set-Cookie" header
 - Go to cookies tab in POSTMAN app and add the copied payload for the domain 'localhost'
 - now we are ready to execute the other apis from the POSTMAN collection