![img](https://www.shareicon.net/data/512x512/2015/10/10/653854_print_512x512.png)
Pet-Detective

The app that helps the hunt for lost pets!
# Team
Copypasta

Product Owner: Tourne Torres
Scrum Master: Daniel Weill
Development Team Members: Tourne Torres, Taijon Robinson, Daniel Weill
Table of Contents

# Usage
## Requirements
## Installing Dependencies
## Tasks
## Contributing

## Some usage instructions
## Requirements
Node 6.10.2 \
MySQL 2.13.0 \
Deployed with DigitalOcean 

Place these keys in a file called map.config.js inside of your *client* folder
window.GEOCODE_API_KEY = 'YOUR GEOCODE API KEY';

window.PLACES_API_KEY = 'YOUR PLACES API KEY';

Create a .env file in your root directory to store port and database variables. Localhost will suffice for db in most cases

You will need a database called petdetective, created in a mysql session. Once used, create a table called petpost with the following command: `create table petpost (id integer not null auto_increment, lostOrFound varchar(20), type varchar(20) , address varchar(140), message varchar(140), date varchar(140), latlong varchar(140), primary key (id));`

## Installing Dependencies

### From within the root directory:
Run this command:
`npm install`

It's that simple!
## Tasks
To start the app run: `npm start`

## Contributing

See CONTRIBUTING.md for contribution guidelines.

![img](https://upload.wikimedia.org/wikipedia/en/thumb/6/62/MySQL.svg/1200px-MySQL.svg.png)

![img](http://kartikgola.com/wp-content/uploads/2017/02/express3.png)


![img](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-BLdbYkpNZFei4Ok3tusGUT6hl3sy-QEHWuWPAIugq4cEoq3e)

![img](http://topdogsocialmedia.com/wp-content/uploads/2012/01/Google-Places-Listing.png)

![img](https://www.digitalocean.com/assets/media/logos-badges/png/DO_Logo_Vertical_Blue-6321464d.png)