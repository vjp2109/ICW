const express = require('express');
const router = express.Router();
const { Page, User } = require('../models');
const { main, addPage, editPage, wikiPage } = require('../views');

// GET /wiki
router.get('/', async (req, res, next) => {
  try {
    const pages = await Page.findAll();
    res.send(main(pages));
  } catch (error) {
    next(error);
    // If we write the error handlers all here, what happens when we want to change our error handling. We have to rewrite every error handler per route
    console.error(err.stack);
    res.sendStatus(500);
  }
});

// POST /wiki
router.post('/', async (req, res, next) => {
  try {
    const [user, wasCreated] = await User.findOrCreate({
      where: {
        name: req.body.name,
        email: req.body.email,
      },
    });

    const page = await Page.create(req.body);

    page.setAuthor(user);

    res.redirect('/wiki/' + page.slug);
  } catch (error) {
    next(error);
  }
});

// GET /wiki/search
router.get('/search', async (req, res, next) => {
  try {
    const pages = await Page.findByTag(req.query.search);
    res.send(main(pages));
  } catch (error) {
    next(error);
  }
});

// PUT /wiki/:slug
router.put('/:slug', async (req, res, next) => {
  try {
    const [updatedRowCount, updatedPages] = await Page.update(req.body, {
      where: {
        slug: req.params.slug,
      },
      returning: true,
    });

    res.redirect('/wiki/' + updatedPages[0].slug);
  } catch (error) {
    next(error);
  }
});

// DELETE /wiki/:slug
router.delete('/:slug', async (req, res, next) => {
  try {
    await Page.destroy({
      where: {
        slug: req.params.slug,
      },
    });

    res.redirect('/wiki');
  } catch (error) {
    next(error);
  }
});

// GET /wiki/add
router.get('/add', (req, res) => {
  res.send(addPage());
});

// GET /wiki/:slug
router.get('/:slug', async (req, res, next) => {
  try {
    const page = await Page.findOne({
      where: {
        slug: req.params.slug,
      },
      include: [{ model: User, as: 'author' }],
    });
    if (page === null) {
      res.sendStatus(404);
    } else {
      res.send(wikiPage(page));
    }
  } catch (error) {
    next(error);
  }
});

// GET /wiki/:slug/edit
router.get('/:slug/edit', async (req, res, next) => {
  try {
    const page = await Page.findOne({
      where: {
        slug: req.params.slug,
      },
    });

    if (page === null) {
      res.sendStatus(404);
    } else {
      const author = await page.getAuthor();
      res.send(editPage(page, author));
    }
  } catch (error) {
    next(error);
  }
});

// GET /wiki/:slug/similar
router.get('/:slug/similar', async (req, res, next) => {
  try {
    const page = await Page.findOne({
      where: {
        slug: req.params.slug,
      },
    });

    if (page === null) {
      res.sendStatus(404);
    } else {
      const similar = await page.findSimilar();
      res.send(main(similar));
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
