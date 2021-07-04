# Day 09: ORMs, Wikistack

**You should be able to:**

- Define an ORM, and explain its pros/cons
- Define models in Sequelize
- Associate models with each other
- Hook into Sequelize lifecycle events
- Query on models (findAll, findOne, create, "magic methods", etc)

## Sequelize is...

|                                                                   | correct? | explanation                                                                                                                                                  |     |
| :---------------------------------------------------------------: | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | --- |
|                           A type of ORM                           | ☑️       |                                                                                                                                                              |     |
|                        A type of database                         |          | It just helps us connect to a database. It's not the database itself.                                                                                        |     |
| A library that converts between tables/rows and classes/instances | ☑️       |                                                                                                                                                              |     |
|       Used in Node applications to connect to SQL databases       | ☑️       |                                                                                                                                                              |     |
|   Used in Node applications to connect to ANY type of database    |          | For NoSQL DBs such as Document Store (MongoDB), we would need to use a ODM (Object Data Modeling). In the case of MongoDB, the equivalent would be Mongoose. |     |

## Fill in the blanks in the code sample:

```javascript
const User = db.<blank>('user', {
    name: {
        type: Sequelize.<blank>,
        <blank>: false
    },
    pictureUrl: <blank>.STRING
})
```

- define, STRING, allowNull, Sequelize

## Model Associations

A journal app has three entities, Author, Entry and Tag. There is a one-to-one relationship between Author and Pseudonym, a one-to-many relationship between Author and Entry and a many-to-many relationship between Tag and Entry. Choose the correct method for these relationships below.

|                     | HasOne | HasMany | BelongsToMany |
| :-----------------: | ------ | ------- | ------------- |
|   Author to Entry   |        | ☑️      |               |
| Author to Pseudonym | ☑️     |         |               |
|    Entry to Tag     |        |         | ☑️            |

## Pick the option which lists Sequelize model instance hooks in order

- beforeValidate, afterValidate, beforeCreate
  - [Resource: Julissa's Hooks and Ops Gist](https://gist.github.com/Julissa93/6a6d29874d34a801d603d2522645025f)

## Choose the method that will return exactly one instance in a query and not modify the database:

- findOne

## Any final questions?

### From Sarah: What happens when I __submit a form in order to create a new post__?


### CLIENT SIDE
1. I fill out my form and press the "Submit" button.
2. A POST request gets made from the client
  - from `addpage.js`'s html
  - <form method="POST" action="/wiki/">
  - `POST` to `/wiki`
  - "name: yuuji, title: "Cursed spirits are a hard time sometimes! ..."

### SERVER SIDE
#### EXPRESS LAND
3. `app.js` Match on morgan, match on line 8 and convert our data into `req.body`
  - `req.body` from form data will receive an object of the form { [name]: value }
4. `POST` to `/wiki` -> match on our `app.use('/wiki')` and also enter the file `./routes/wiki`
  - inside of `./routes/wiki` -> we are `POST`ing to URL: ''
  - when we enter any route that starts with `app.use`, we will mount our associated URL, and effectively "strip" that portion from our URL when we enter the file
  - inside of wikirouter, we are `POST` to `/`
5. `./routes/wiki`: match on line 17: for POST /
6. Sequelize calls a method called `findOrCreate` in order to make a new or retrieve an existing user
  - Sequelize converts this javascript into a SQL string and passes it to `pg`
  - `pg` speaks through the postgres protocol TO postgres and sends the query to create or find our user
  - postgres performs the query, and sends back data
  - `pg` retrieves that data and converts it into some readable JS (data.rows) and passes that back to Sequelize
  - Sequelize takes that JS, parses it and converts it into JS instances and allows us to make use of it
7. We now have access to a user called `user` variable.
8. We call `Page.create` and pass in our form data now accessible as `req.body` and run through ALL of the Sequelize + pg work that had happened earlier.
9. After the page gets created, we now have to set our user as the author.
  - any magic methods are ASYNCHRONOUS and speak to the db!!
  - make sure you await any magic methods you end up using!
  - runs through all of the sequelize + pg logic as earlier
10. `res.redirect('/wiki/cursed_spirits_are_a_hard_time_sometimes')`

### CLIENT SIDE
11. Change our URL to say `'/wiki/cursed_spirits_are_a_hard_time_sometimes'`
12. `GET` request to `'/wiki/cursed_spirits_are_a_hard_time_sometimes'`
### SERVER SIDE
13. Receive this request and pass through all of my middleware (morgan, express.static, express.urlencoded, etc.)
  - Do we have a req.body? No req.body because GET does not supply a body (POST/PUT routes supply bodies)
14. Match again on `app.use('/wiki')`
15. Pass through all of our middleware here until we match on:
  `GET` for `/cursed_spirits_are_a_hard_time_sometimes'` since our `/wiki` has been mounted earlier
16. Matched on `router.get("/:slug",`
17. Sequelize + pg will find a page associated with our slug `req.params.slug`
18. Sequelize + pg will also find our author from the db
19. Sends back the page for `page` and `author`

### CLIENT SIDE
20. `GET` for `/stylesheets/style.css`

### SERVER SIDE
21. Hit up morgan, and enter our `express.static` route, since we now are a file
22. Our `express.static` route will send back the stylesheet we were looking for.

### CLIENT SIDE
23. Render all of our HTML & CSS as needed



### When redirecting for the user, why do I need to append `/wiki` to my path?
