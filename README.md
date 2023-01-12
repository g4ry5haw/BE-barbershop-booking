# BE-barbershop-booking

An app built for browsing, booking and paying for appointments with your local barber.

## Description

The app was built as a group project during the final phase of the Northcoders Software Development bootcamp which ran from October-22 to January-23. The goal was to build a fully-functioning software product using at least 2 new technologies that hadn’t been taught on the Bootcamp. These were chosen as MongoDB for the back-end and React Native for the front-end.

The project was phased over 3 weeks:

- Week 1 - idea generation, spiking and RATs, defining tasks on kanban board using Trello
- Week 2 - build the back-end using MongoDB. Start of the front-end build using React Native
- Week 3 - finalisation of the front-end

The front-end and back-end are in 2 separate repositories. The corresponding front-end repo can be accesed [here](https://github.com/g4ry5haw/FE-barbershop-booking).

The back-end uses a hosted MongoDB Atlas database.

The API's are hosted on cyclic. You can check the server is up and running [here](https://rich-gold-basket-clam-cape.cyclic.app/api/health)

## Getting Started

### Dependencies

- cors
- dotenv
- express
- mongoose
- stripe
- jest
- nodemon
- supertest

### Installing

Fork and clone this repository for the back-end

Run `npm install` to install all dependencies

Add a `.env` file in the root folder containing 2 variables:

> `DATABASE_URL:`

> `STRIPE_SECRET_KEY:`

The `DATABASE_URL` is the link to your MongoDB Atlas hosted database. See the [documentation](https://www.mongodb.com/docs/atlas/getting-started/) to set this up.

The format will be as follows :

`mongodb+srv://<username>:<password>@cluster0.<cluster>.mongodb.net/<database name>`

> replace `<username>`, `<password>`, `<cluster>` & `<database name>` with those from MongoDB Atlas.

The `STRIPE_SECRET_KEY` is provided by Stripe for testing purposes when you [set up an account](https://dashboard.stripe.com/register). It begins with `sk_test`

If you wish to host your own server then use a service such as [cyclic](cyclic.sh) and view the README.md in the front-end repo for additonal steps to update the base URL for the API requests.

### Executing the program

Populate the database by running `node runseeds.js`. This will create 28 days of appointments and the following users:

| **username** | **password** |
| ------------ | :----------: |
| gs           |   password   |
| nb           |   password   |
| rn           |   password   |
| rm           |   password   |

Check the database is populated using the API requests on `route.rest`. This requires installing the VS Code extension **REST Client**.

```javascript
'get summary count of available timeslots by day'
GET https://rich-gold-basket-clam-cape.cyclic.app/api/appointments
###
```

Alternatively use a platform such as [Postman](https://www.postman.com/) to test the API's.

## Authors

This app was made as a final project for the Northcoders full-stack software development bootcamp.

The project team was :

- Nasser Benashur
- Robbie McDonough
- Ryan Nolan
- Gary Shaw
