const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');
const User = require('../../models/User');
const Wishlist = require('../../models/Wishlist');

// @route   POST api/wishlists
// @desc    Create a wishlist
// @access  Private
router.post(
  '/',
  [
    auth,
    [
      check('name', 'Wishlist name is required')
        .not()
        .isEmpty(),
      check()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.arrray() });
    }

    try {
      const newWishlist = new Wishlist({
        user: req.user.id,
        name: req.body.name
      });

      const wishlist = await newWishlist.save();

      res.json(wishlist);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route   DELETE api/wishlists/:id
// @desc    Delete a wishlist by id
// @access  Private
router.delete('/:id', auth, async (req, res) => {
  try {
    const wishlist = await Wishlist.findById(req.params.id);

    if (!wishlist) {
      return res.status(404).json({ msg: 'Wishlist not found' });
    }

    if (wishlist.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }

    await wishlist.remove();

    res.json({ msg: 'Wishlist removed' });
  } catch (err) {
    console.error(err.message);

    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Wishlist not found' });
    }

    res.status(500).send('Server Error');
  }
});

// @route   GET api/wishlist/user/:userId
// @desc    Get all wishlists for a specific user
// @access  Public
router.get('/user/:userId', async (req, res) => {
  try {
    const wishlists = await Wishlist.find({ user: req.params.userId });

    res.json(wishlists);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/wishlist/:id
// @desc    Get a wishlist by ID
// @access  Private
router.get('/:id', async (req, res) => {
  try {
    const wishlist = await Wishlist.findById(req.params.id);

    if (!wishlist) {
      return res.status(404).json({ msg: 'Wishlist not found' });
    }

    res.json(wishlist);
  } catch (err) {
    console.error(err.message);

    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Wishlist not found' });
    }

    res.status(500).send('Server Error');
  }
});

// @route   PUT api/wishlist/:id
// @desc    Update a wishlist by ID
// @access  Private
router.put(
  '/:id',
  [
    auth,
    [
      check('name', 'Wishlist name is required')
        .not()
        .isEmpty(),
      check()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const wishlist = await Wishlist.findById(req.params.id);

      if (!wishlist) {
        return res.status(404).json({ msg: 'Wishlist not found' });
      }

      if (wishlist.user.toString() !== req.params.userId) {
        return res.status(401).json({ msg: 'User not authorized' });
      }

      wishlist.name = req.body.name;

      await wishlist.save();

      res.json(wishlist);
    } catch (err) {}
  }
);

// @route   POST api/wishlist/item/:id
// @desc    Add an item to a wishlist by wishlist ID
// @access  Private
router.post(
  '/item/:id',
  [
    auth,
    [
      check('name', 'A product name is required')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const wishlist = await Wishlist.findById(req.params.id);

      const newItem = {
        name: req.body.name,
        image: req.body.image,
        uri: req.body.uri,
        price: req.body.price
      };

      wishlist.items.unshift(newItem);

      await wishlist.save();

      res.json(wishlist.items);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route   PUT api/wishlist/item/:wishlistId/:id
// @desc    Delete an item from a wishlist
// @access  Private
router.delete('/item/:wishlistId/:id', auth, async (req, res) => {
  try {
    const wishlist = await Wishlist.findById(req.params.wishlistId);
    if (!wishlist) {
      return res.status(404).json('Wishlist not found');
    }

    if (
      wishlist.items.filter(item => item.id.toString() === req.params.id)
        .length === 0
    ) {
      return res.status(400).json({ msg: 'Item not found' });
    }

    wishlist.items = wishlist.items.filter(
      item => item.id.toString() !== req.params.id
    );

    await wishlist.save();

    res.json(wishlist.items);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Item not found' });
    }
    res.status(500).send('Server Error');
  }
});

// @route   PUT api/wishlist/item/:wishlistId/:id
// @desc    Update an item in a wishlist by wishlist ID and item ID
// @access  Private
router.put(
  '/item/:wishlistId/:id',
  [
    auth,
    [
      check('name', 'A product name is required')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const wishlist = await Wishlist.findById(req.params.wishlistId);
      if (!wishlist) {
        return res.status(400).json({ errors: errors.array() });
      }

      wishlist.items.forEach(item => {
        if (item.id === req.params.id) {
          item.name = req.body.name;
          item.uri = req.body.uri;
          item.price = req.body.price;
        }
      });

      await wishlist.save();

      res.json(wishlist.items);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;
