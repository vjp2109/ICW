const router = require('express').Router();
const { Monster, Town } = require('../db');

// /monsters
router.get('/', async (req, res, next) => {
  try {
    const monsters = await Monster.findAll({ include: Town });



    // [{
    //   id: 1,
    //   level: 5,
    //   towns: [{
    //     ...
    //   }]
    // }]


    // // through table
    // monsterId | townId  | name
    //   1       |   1     | 'chelsea'




    // alias
    // const monsters = await Monster.findAll({ include: {
    //   model: Town,
    //   as: 'home'
    //  }
    // });
    res.send(monsters);
  } catch (e) {
    next(e);
  }
});

// /monsters/:id
router.get(`/:id`, async (req, res, next) => {
  try {
    // findByPk -> looks up an instance in the database with the primary key as an argument and returns the instance
    // other option: findOne -> pass in an object that dictates what you're specifically looking for
    const monster = await Monster.findByPk(req.params.id);
    // console.log('What is this monster variable', monster);

    // if (monster === null) {...}
    if (!monster) {
      const error = new Error('there is no monster here!');
      error.status = 404;
      throw error;
    } else res.send(monster);
  } catch(e) {
    next(e);
  }
});

module.exports = router;
