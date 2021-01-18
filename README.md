# Logarette

## Introduction
This is an api implementation that makes a log of cigarettes smoked for a person.

## Routes
* POST /user
    * this route creates a new user. it requires parameters:
        * name: string;
        * email: string;
* GET /user
    * this route returns a list of users. theres no parameters
* GET /user/:userId
    * this route returns a user by id.
* PUT /user/:userId
    * this route updates a user. it requires the parameters that are being changed.
* DELETE /user/:userId
    * this route deletes a user by id.
* POST /user/:userId/cigar
    * this route adds a new cigar to the user. theres no parameters.
* GET /user/:userId/cigar
    * this route returns a cigar list. there is a optional parameter, which filters the list by date.
        * date: string; (DD/MM/YYYY);
* DELETE /user/:userId/cigar/:cigarId
    * this route deletes the specified cigar.

## Running (dev)
To run this you need to npm install and run: 

```npx sequelize-cli db:create```
and
```npx sequelize-cli db:migrate```
