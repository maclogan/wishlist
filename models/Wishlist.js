const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WishlistSchema = new mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  name: {
    type: String,
    required: true
  },
  items: [
    {
      name: {
        type: String,
        required: true
      },
      uri: {
        type: String
      },
      image: {
        type: String
      },
      date: {
        type: Date,
        default: Date.now
      },
      price: {
        type: String
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Wishlist = mongoose.model('wishlist', WishlistSchema);
