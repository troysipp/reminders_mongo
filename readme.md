# Reminder.ly

## Description
This is a 2 model Todo App built using Mongo/Mongoose. Authors have many Reminders.

## Step 1: Initial Set Up

Fork or Clone this repo.

```bash
$ git clone
$ cd reminders_mongo
$ git checkout mongoose
$ npm install
```

## Step 2: Install Mongoose and Establish Connection

Instructions:

1. First we will be installing Mongoose: `$ npm install mongoose --save`

2. Next write code to require Mongoose and establish a connection.

3. Let's test to make sure our connection works as expected! Run `nodemon`;

## Step 3: Create Schema and Models

We will be writing our schemas for Reminders and Authors

Instructions:

1. Write your Schemas for Reminders and Authors

2. Create your Models by using `mongoose.model`


## Step 4: Seeds Data and Create

We will be writing our schemas for Reminders and Authors

Instructions:

1. Add Module to Exports and Require that in your `db/seeds.js`

2. Create seed data of your choosing for both Both Authors and Reminders

3. Adds a few Reminders to each Author

4. Run `node db/seeds.js` to seed our database.

4. Test your data in the terminal

## Step 5: Read

Instructions:

1. Add a controllers directory and `controllers/authors.controller.js` file

2. In your `authors.controller.js` file add in code for an `index` method that would query all authors.

3. Then, write the code for a`show` method to query one author.

4. Add `module.exports = authorsController;` in our `authors.controller.js` file

5. Add the following code to our `index.js`: `var authorsController = require("./controllers/authors.controller.js");`

4. Call the methods in our index.js and run `nodemon`

## Step 6: Update

Instructions

1. Add an update method or function to our `controllers/authors.controller.js` file.

2. Call the method in index.js to test and run `nodemon`


## Step 7: Delete

Instructions:

1. Add an `destroy` method to find an author and remove that document from our database.

2. Add an `destroyAll` method to remove all authors with the name "tom" from our database. You may need to add in an additional document with the name `tom` to test this method.

## Bonus

Work to Write Code to Add and Delete Reminders from an Authors Document

## Mongo Instructions:

```
Also make sure you have mongo and make sure you have a connection to mongodb running:

```bash
$ brew install mongo
$ mongod --config /usr/local/etc/mongod.conf
```

> when you run the mongod command, your terminal should hang. This how you know your connected to mongo.
```
