const { db, Monster, Town } = require('./db');

const monsters = [
  {
    name: 'Axe Stump',
    level: 21,
    description: 'The story of Axe stump is that it became wildly enraged when a lumberjack left his axe stuck in it. The anger made it much more powerful and speedy. Found in Perion.',
    imageUrl: 'https://cdn.wikimg.net/en/strategywiki/images/0/08/MS_Monster_Axe_Stump.png',
    homeId: 1
  }, {
    name: 'Fire Boar',
    level: 58,
    description: 'A boar covered in flames. Found at the end of the Burnt Lands of Perion.',
    imageUrl: 'https://cdn.wikimg.net/en/strategywiki/images/9/91/MS_Monster_Fire_Boar.png',
    homeId: 1
  }, {
    name: 'Slime',
    level: 7,
    description: 'Slimes are made of a thick liquid which allows them to bounce about. Found in the Ellinia Chimney Tree in Victoria Island. MS Monster Halloween Slime.pngAlso found in Maple Island with different drops. Drops Squishy Liquid, and sometimes Slime Bubbles. MS Monster Christmas Slime.pngDuring the Halloween event in 2006, all Slimes were turned orange. Slimes were turned also half red and half green during Christmas event in 2006.',
    imageUrl: 'https://cdn.wikimg.net/en/strategywiki/images/8/83/MS_Monster_Slime.png',
    homeId: 2
  }, {
    name: 'Evil Eye',
    level: 26,
    description: 'A very disgusting looking yellow lizard. They often swarm. Found in Ellinia.',
    imageUrl: 'https://strategywiki.org/wiki/File:MS_Monster_Evil_Eye.png',
    homeId: 2
  }, {
    name: 'Snail',
    level: 1,
    description: 'The snail family is also known as farm pests. Found near Lith Harbor. Also found in Maple Island with different drops.',
    imageUrl: 'https://cdn.wikimg.net/en/strategywiki/images/c/c8/MS_Monster_Snail.png',
    homeId: 3
  }, {
    name: 'Octopus',
    level: 10,
    description: 'An alien creature that resembles Mateons from the Omega Sector. Relatively big. Located in Kerning City Construction Site.',
    imageUrl: 'https://cdn.wikimg.net/en/strategywiki/images/1/10/MS_Monster_Octopus.png',
    homeId: 4
  }, {
    name: 'Wraith',
    level: 45,
    description: 'The adult form of Jr. Wraith. Weak against holy attacks since it is a ghost. Found in Kerning City Subway.',
    imageUrl: 'https://cdn.wikimg.net/en/strategywiki/images/9/9c/MS_Monster_Wraith.png',
    homeId: 4
  }, {
    name: 'Mushmom',
    level: 18,
    description: 'The mother of all mushrooms. When provoked, it will stomp on the ground. Found at Mushmom Forest Trail near Henesys.',
    imageUrl: 'https://cdn.wikimg.net/en/strategywiki/images/7/7d/MS_Monster_Mushmom.png',
    homeId: 5
  }
];

const towns = [
  {
    name: 'Perion',
    job: 'Warrior'
  },
  {
    name: 'Ellinia',
    job: 'Magician'
  },
  {
    name: 'Lith Harbor',
    job: 'Beginner'
  },
  {
    name: 'Kerning City',
    job: 'Thief'
  }, {
    name: 'Henesys',
    job: 'Archer'
  }
];

const seed = async () => {
  try {
    await db.sync({ force: true });
    await Promise.all(towns.map(town => Town.create(town)));
    console.log(`${towns.length} towns have been created! Let's add some monsters!`);
    await Promise.all(monsters.map(monster => Monster.create(monster)));
    console.log(`${monsters.length} monsters have been created! Place them in their towns!`);
    console.log('I am done seeding! Enter the brave heroes!');
  } catch (e) {
    console.log('There was an error seeding!');
    console.error(e);
  }
}

seed()
  .then(() => db.close())
  .catch(err => {
    console.error('Problem seeding:', err)
    db.close();
});
