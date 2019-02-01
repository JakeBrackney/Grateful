# Grateful

https://app-grateful.herokuapp.com

Grateful is a web-app for creating and maintaining positive affirmation and gratitude lists, or things you like and love about yourself and things you're grateful for. [Positive affirmation](https://www.mindtools.com/pages/article/affirmations.htm) and [gratitude lists](https://en.wikipedia.org/wiki/Gratitude_journal) are simple, yet powerful [cognitive behavioral therapy](https://www.mayoclinic.org/tests-procedures/cognitive-behavioral-therapy/about/pac-20384610) techniques that aim to boost a person's sense of worth, confidence, and purpose.

## Technologies Used
This app is built using a MEHN stack, [MongoDB](https://www.mongodb.com/), [Express](https://expressjs.com/), [Handlebars](https://handlebarsjs.com/), and [Node.js](https://nodejs.org/en/). It is deployed to Heroku, and it's database is held on MLAB.

## Functionality
The app employs [Passport](http://www.passportjs.org/docs/authenticate/) authentication. Users may create a login, and once logged in, may create their gratitude and positive affirmation lists. List items have full CRUD functionality, and the application was designed with RESTful routing in mind.

## Getting Started

To deploy or test this app, clone it on GitHub.

### Installation

To install the necessary dependencies, run the command

```$ npm install```

Then launch on `localhost:3000` by running the command

```$ nodemon```

The database does not need to be seeded. If you are using the app from the production URL, all data will be created and stored on MLAB. If you are testing the app from your own cloned repository, launch MongoDB.

```$ mongod```

In a separate tab, launch Mongo

``` $ mongo ```

You can then access the database and collections with the following commands

``` > use grateful ```

``` > show collections ```

``` > db.users.find()```

``` > db.affirmations.find()```

``` > db.gratitudes```
 
## Author
* Jake Brackney: https://github.com/JakeBrackney/

## Screencast
* https://youtu.be/us7Mebrp3UE



