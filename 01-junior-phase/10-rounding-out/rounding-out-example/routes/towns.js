const Sequelize = require('sequelize');
const router = require('express').Router();
const { Town, Monster } = require('../db');

// const coolObj = { a: 1 };
// const name = 'name';
// coolObj = { name: 'sarah', a: 1 };
// coolObj[name] = 'sarah';


// /towns
router.get('/', async (req, res, next) => {
  try {
    // if you have to specify MORE than just the model NAME, you will need to include an object passed as the value to `include`
    const towns = await Town.findAll({
      where: {
        // in reference to the Town model
      },
      include: {
        model: Monster,
        // in reference to the Monster model
        where: {
          level: {
            [Sequelize.Op.gte]: 30
          }
        }
      }
    });
    // eager loading will look for ALL of my towns and gives back my towns and their monsters if they have them
    // left join


    // do some sort of looping... and make who knows how many calls to the db
    // for () {
    //   const monsters = await Monster.findAll(...);
    // }
    res.send(towns);
  } catch (e) {
    next(e);
  }
});

// /towns/:id
router.get('/:id', async (req, res, next) => {
  try {
    // second argument { include: modelName }
    const town = await Town.findByPk(req.params.id, { include: Monster });


    // eager loading: make 1 database call that is able to retrieve information about an instance's associations in addition to getting the instance back
    // { include: modelName }






    // I want to get all of my town's monsters

    // I can do a few things:
    // 1. use the magic method `getMonsters()` to make another call to the db to get my monsters
    // 2. Monster.findAll({ where: { townId: req.params.id }})

    // turned my 1 database call into 2 which is not the most efficient
    res.send(town);
  } catch(e) {
    next(e);
  }
});

module.exports = router;
