# Storefront Backend Project

## Getting Started

This repo contains a basic Node and Express app to get you started in constructing an API. To get started, clone this repo and run `yarn` in your terminal at the project root.

## Required Technologies
Your application must make use of the following libraries:
- Postgres for the database
- Node/Express for the application logic
- dotenv from npm for managing environment variables
- db-migrate from npm for migrations
- jsonwebtoken from npm for working with JWTs
- jasmine from npm for testing

## Steps to Completion

### 1. Plan to Meet Requirements

In this repo there is a `REQUIREMENTS.md` document which outlines what this API needs to supply for the frontend, as well as the agreed upon data shapes to be passed between front and backend. This is much like a document you might come across in real life when building or extending an API. 

Your first task is to read the requirements and update the document with the following:
- Determine the RESTful route for each endpoint listed. Add the RESTful route and HTTP verb to the document so that the frontend developer can begin to build their fetch requests.    
**Example**: A SHOW route: 'blogs/:id' [GET] 

- Design the Postgres database tables based off the data shape requirements. Add to the requirements document the database tables and columns being sure to mark foreign keys.   
**Example**: You can format this however you like but these types of information should be provided
Table: Books (id:varchar, title:varchar, author:varchar, published_year:varchar, publisher_id:string[foreign key to publishers table], pages:number)

**NOTE** It is important to remember that there might not be a one to one ratio between data shapes and database tables. Data shapes only outline the structure of objects being passed between frontend and API, the database may need multiple tables to store a single shape. 

### 2.  DB Creation and Migrations

Now that you have the structure of the databse outlined, it is time to create the database and migrations. Add the npm packages dotenv and db-migrate that we used in the course and setup your Postgres database. If you get stuck, you can always revisit the database lesson for a reminder. 

You must also ensure that any sensitive information is hashed with bcrypt. If any passwords are found in plain text in your application it will not pass.

### 3. Models

Create the models for each database table. The methods in each model should map to the endpoints in `REQUIREMENTS.md`. Remember that these models should all have test suites and mocks.

### 4. Express Handlers

Set up the Express handlers to route incoming requests to the correct model method. Make sure that the endpoints you create match up with the enpoints listed in `REQUIREMENTS.md`. Endpoints must have tests and be CORS enabled. 

### 5. JWTs

Add JWT functionality as shown in the course. Make sure that JWTs are required for the routes listed in `REQUIUREMENTS.md`.

### 6. QA and `README.md`

Before submitting, make sure that your project is complete with a `README.md`. Your `README.md` must include instructions for setting up and running your project including how you setup, run, and connect to your database. 

Before submitting your project, spin it up and test each endpoint. If each one responds with data that matches the data shapes from the `REQUIREMENTS.md`, it is ready for submission!


# Welcome to the API Guide.

HOST_OF_THE_DATABASE='localhost'
PORT_OF_THE_DATABASE='5000'
NAME_OF_THE_DATABASE='backend_for_storefront'
NAME_OF_TEST_DATABASE='backend_for_storefront_test' => for testing
USER_OF_THE_DATABASE='postgres'
PASSWORD_FOR_POSTGRES='123456'

# First create the database so that you can use the installed migrations.

=> You can create the database by typing "CREATE DATABASE backend_for_storefront;" in psql terminal.
=> For the testing database type "CREATE DATABASE backend_for_storefront_test;".
=> The port and the password are mentioned above.

=> after that run in npm the db-migrate up command so can form the schema of the database.

# To create the database open the postgres SQL command prompt.

# Then enter with port "5000" and only 5000 either that or you will not be able to connect to the database.

# Enter as postgres user with postgres database name so that you can create The API database.

# After that use the command "CREATE DATABASE backend_for_storefront;" so that you can create the inteded database.

# The password for the DB is 123456. 

# Now you are connected to our database and you can now use the migrations.

# Just use in the node terminal the "db-migrate up" command so that you can create the required tables.

# You can start the server using "npm run watch" command to use tsc-watch and the server will start
on port "3000" on the localhost.

# Important Packeges that are installed:
-express.
-tsc-watch.
-bcrypt // for hashing.
-jsonwebtoken // for authintication and authoriztion.
-pg => installed globally // for postgres database connection.
-dotenv // for keeping the secrecy of some information.

# Important script to use: 
- "watch" to run the server and build the app.
- "test" to test the app.

# ENV variables information.

HOST_OF_THE_DATABASE='localhost'
PORT_OF_THE_DATABASE='5000'
NAME_OF_THE_DATABASE='backend_for_storefront'
NAME_OF_TEST_DATABASE='backend_for_storefront_test'
USER_OF_THE_DATABASE='postgres'
PASSWORD_FOR_POSTGRES='123456'
ENV='dev'
PEPPER='wolf-witcher-school'    => for hashing passwords.
SALT_ROUNDS='10'                => for hashing password.
TOKEN_SECRET='igni1234!'        => for authintication and authorization.