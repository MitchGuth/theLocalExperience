# The Local Experience
<p align="center">
  <img src="screenshot of website" width="250">
</p>
The Local Experience is a web app built in React that uses the Google Maps API and user supplied images and geo-points to create markers on the google map and those markers are saved as experiences. The purpose is to allow users to see mapped points in their area that they can explore and have an experience at that location. For example have you ever taken a walk at lunch and sat at a bench to clear your mind or just breath, if not you should try it. If you have tried it you can upload that expereince on The Local Experience so that other users could have that same moment of rest or recharge and the world can be a better place.

## Dependencies
In order to have a working version of this application you will need the following things. 
- Install PostgreSQL
- Run npm install from the client and then server folders 
- Obtain API key for Google Maps API

### PostgreSQL

Our database currently has two tables. The User table contains the user’s login credentials (email and password), along with their name and an array of their contributions. The Contributions table contains information regarding the experience contributions. This information includes the experience location coordinates, the title, the description, the User ID (if posted by a logged in user), the URL for the uploaded photo, and the time. 

Queries were made to the database using PostgresQL. These queries included selecting all of the entries in the contributions table, inserting experience contributions as new entries, and updating a user’s array of contributions. We utilized async functions and promises to work with the returned data from our database queries.

## Deployment
This app was deployed using an AWS EC2.
<p align="center">
  <img src="AWS Logo" width="75">
 </p>

## Built With
- React / Redux
- Node.js / Express
- HTML / CSS / JavaScript
- Google Maps API
<p align="center">
  <img src="technology images" width="75">
  <img src="technology images" width="75">
  <img src="technology images" width="75">
  <img src="technology images" width="75">
  <img src="technology images" width="75">
  <img src="technology images" width="75">
  <img src="technology images" width="75">
 </p>

## Authors
Brandon Humphries && Mitch Guth

## Copyright
This project is licensed under the MIT License - see the LICENSE.txt file for details.
