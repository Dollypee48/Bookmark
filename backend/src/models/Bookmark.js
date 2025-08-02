const mongoose = require('mongoose');

const bookmarkSchema = new mongoose.Schema({
  title: { type: String, required: true },
  url: { type: String, required: true },
  tags: [{ type: String }],
  userId: { type: String, required: true },
  sharedWith: [{ type: String }],
}, { timestamps: true });

module.exports = mongoose.model('Bookmark', bookmarkSchema);