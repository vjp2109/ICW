# Day 10: Express Custom Error Handling, Eager Loading with Sequelize

**You should be able to:**

- Write custom error handlers in Express
- Utilize eager loading in Sequelize queries
- Write class and instance methods on Sequelize models

# In your own words, what is eager loading?

- **The equivalent to doing an `LEFT JOIN` in SQL.**
    - By default it does a `LEFT JOIN`. However, you can indicate to Sequelize what kind of join you want to do. Below is from the Sequelize Documentation, which is linked below this snippet.

```javascript

User.findAll({
    include: [{
    model: Task // will create a left join
   }]
});
User.findAll({
  include: [{
    model: Task,
    right: true // will create a right join
  }]
});
User.findAll({
  include: [{
    model: Task,
    required: true // will create an inner join
  }]
});
```

- ***Reference:***
  - [Sequelize: Eager Loading](https://sequelize.org/master/manual/eager-loading.html)
     > As briefly mentioned in the associations guide, eager Loading is the act of querying data of several models at once (one 'main' model and one or more associated models). At the SQL level, this is a query with one or more joins).
     >
     > When this is done, the associated models will be added by Sequelize in appropriately named, automatically created field(s) in the returned objects.
     >
     > In Sequelize, eager loading is mainly done by using the include option on a model finder query (such as findOne, findAll, etc).
     ```js
     // Models
     const User = sequelize.define('user', { name: DataTypes.STRING }, { timestamps: false });
     const Task = sequelize.define('task', { name: DataTypes.STRING }, { timestamps: false });
     const Tool = sequelize.define('tool', {
       name: DataTypes.STRING,
       size: DataTypes.STRING
     }, { timestamps: false });

     // Associations
     User.hasMany(Task);
     Task.belongsTo(User);
     User.hasMany(Tool, { as: 'Instruments' }); // **aliased**

     // Eager Loading examples:

     // (1) Fetching a single associated element (i.e. include each task's user)
     const tasks = await Task.findAll({ include: User });

     // Sample output:
     [{
       "name": "A Task",
       "id": 1,
       "userId": 1,
       "user": {
         "name": "John Doe",
         "id": 1
       }
     }]

     // (2) Fetching all associated elements (i.e. include all of the users' tasks)
     const users = await User.findAll({ include: Task });

     // Sample output:
     [{
       "name": "John Doe",
       "id": 1,
       "tasks": [{
         "name": "A Task",
         "id": 1,
         "userId": 1
       }]
     }]

     // (3) Fetching an Aliased association (i.e. include each user's tools [aka "instruments"])
     // If an association is aliased (using the as option), you must specify this alias when including the model. Instead of passing the model directly to the include option, you should instead provide an object with two options: model and as.
     const users = await User.findAll({
       include: { model: Tool, as: 'Instruments' }
     });

    // Sample output:
    [{
      "name": "John Doe",
      "id": 1,
      "Instruments": [{
        "name": "Scissor",
        "id": 1,
        "userId": 1
      }]
    }]
     ```
  - [FSA Sequelize docs: Joins/Includes (aka "Eager Loading")](https://sequelizedocs.fullstackacademy.com/eager-loading/)
    - Note: FSA Sequelize docs are deprecated (e.g. `findById` --> `findByPk`)

## Which of the following is a valid error-handling middleware?

- `app.use((req, res, next) => {...});`
- `app.get((err, req, res, next) => {...});`
- **`app.use((err, req, res, next) => {...});`**  ☑️
- `app.use((req, res, err) => {...});`
- ***Reference:***
  - [Express: Writing error handlers](https://expressjs.com/en/guide/error-handling.html#writing-error-handlers)
  - [Express: How do I setup an error handler?](http://expressjs.com/en/starter/faq.html#how-do-i-setup-an-error-handler)

## What does `this` refer to in this code snippet? `User.findByBirthday = function() { return this; }`

- **the User model**  ☑️
- a single user instance
- the `findByBirthday` function
- undefined
- ***Reference:***
  - [Sequelize: Taking advantage of Models being classes](https://sequelize.org/master/manual/model-basics.html#taking-advantage-of-models-being-classes)
  - [Sequelize: Expansion of models](https://sequelize.readthedocs.io/en/latest/docs/models-definition/#expansion-of-models)
    ```js
    const User = db.define('user', { firstname: Sequelize.STRING });

    // Adding a class level method
    User.classLevelMethod = function() {
      return 'foo';
    };
    ```
  - [FSA Sequelize docs: Class methods](https://sequelizedocs.fullstackacademy.com/instance-and-class-methods/#class-methods)
    - Note: FSA Sequelize docs are deprecated (e.g. `findById` --> `findByPk`)

## What does `this` refer to in this code snippet? `User.prototype.getBirthday = function() { return this; }`

- the User model
- **a single user instance**  ☑️
- the `findByBirthday` function
- undefined
- ***Reference:***
  - [Sequelize: Taking advantage of Models being classes](https://sequelize.org/master/manual/model-basics.html#taking-advantage-of-models-being-classes)
  - [Sequelize: Expansion of models](https://sequelize.readthedocs.io/en/latest/docs/models-definition/#expansion-of-models)
    ```js
    const User = db.define('user', { firstname: Sequelize.STRING });

    // Adding an instance level method
    User.prototype.instanceLevelMethod = function() {
      return 'bar';
    };
    ```
  - [FSA Sequelize docs: Instance methods](https://sequelizedocs.fullstackacademy.com/instance-and-class-methods/#instance-methods)
    - Note: FSA Sequelize docs are deprecated (e.g. `findById` --> `findByPk`)


## Other Questions for Morning Review?

### 1. Still confused about defining relationship in a one to many and many to many relationship
- magic methods, eager loading


Eager loading for many to many relationships:
- No matter what kind of relationship/association you've made, you can always use `include` to handle it.


### most common hooks and when to use which
`beforeValidate`, `beforeSave`, `afterValidate`: make changes to our incoming body

If someone submitted a form with a name that is lowercased (angie lin), the beforeValidate can change it to be capitalized (Angie Lin) before saving into the db.

`afterCreate`, `afterSave` -> happens when you want to do something _else_

If I had a Users table, and also a Books table, and I created a book with an author that doesn't exist in the db, an afterCreate or afterSave hook can then create the respective user if I didn't have one.

**When do these run?**
If I wanted to increment something in my db every time something gets saved, I would want to use an `afterSave` hook or `beforeSave` (but this might not work if my instance fails when trying to be saved).
### `res.send` versus `res.json`

Mostly - it doesn't matter. If you send back an object through `res.send`, you'll get back an object on the other side as "json" anyway.

`res.send` should be for HTML you want to send back.
`res.json` is any JS/data you want to send back.
