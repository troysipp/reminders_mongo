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

3. Let's test to make sure our connection works as expected! Run `node db/schema.js`


## Step 3: Create Schema and Models


Instructions:

1. Write your Schemas for Reminders and Authors.

  * Authors will have the following fields: a name (string), and reminders (an array)

  * Reminders will have the following fields: a body (string)

2. Create your Models by using `mongoose.model`.


## Step 4: Seeds Data and Create


Instructions:

1. Add module.exports and require your Models in `db/seeds.js`

2. Create Seed data your choosing for both Both Authors and Reminders.

3. Add a Reminder or two for each Author.

4. Run `node db/seeds.js` to seed our database.

4. Test your data in the terminal.


## Step 5: Read


Instructions:

1. Add a controllers directory and `controllers/authorsController.js` file.

2. In your `authorsController.js` file add in code for an `index` method that would query all authors.

3. Then, write the code for a`show` method to query one author.

4. Call your methods in the `authorsController.js` and run `node controllers/authorsController.js`


## Step 6: Update


Instructions

1. Add an update method to our `controllers/authorsController.js` file.

2. Call the method and run `node controllers/authorsController.js`


## Step 7: Delete

Instructions:

1. Add an `destroy` method to find an author and remove that document from our database.

2. Add an `destroyAll` method to remove all authors with a particular name from our database.


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
