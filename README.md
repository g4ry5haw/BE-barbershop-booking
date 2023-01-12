# BE-barbershop-booking

An app built for browsing, booking and paying for appointments with your local barber.

## Description

The app was built as a group project during the final phase of the Northcoders Software Development bootcamp which ran from October-22 to January-23. The goal was to build a fully-functioning software product using at least 2 new technologies that hadn’t been taught on the Bootcamp. These were chosen as MongoDB for the back-end and React Native for the front-end

The project was phased over 3 :

- Week 1 - idea generation, spiking and RATs, define tasks on kanban board using Trello
- Week 2 - build the back-end using MongoDB. Start of front-end build using React Native
- Week 3 - finalisation of the front-end

The front-end and back-end are in 2 separate repositories. The front-end repo can be accesed [here](https://github.com/g4ry5haw/FE-barbershop-booking).

The back-end incldues a hosted MongoDB Atlas database.

The API's are hosted on cyclic. You can check the server is up and running with the url :

https://rich-gold-basket-clam-cape.cyclic.app/api/health

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

Fork and clone this repository for the front-end

Run `npm install` to install all dependencies

Add a `.env` file in the root folder containing 2 variables:

> `DATABASE_URL:`

> `STRIPE_SECRET_KEY:`

The database URL is the link to your MongoDB Atlas hosted database. See the [documentation](https://www.mongodb.com/docs/atlas/getting-started/) to set this up.

The format will be as follows :

`mongodb+srv://<username>:<password>@cluster0.io9vsdw.mongodb.net/<database name>`

> _replace `<username>`, `<password>` & `<database name>` with those from MongoDB Atlas_

The Stripe secret key is provided by Stripe for testing purposes when you [set up an account](https://dashboard.stripe.com/register). It begins with `sk_test`

### Executing the program
