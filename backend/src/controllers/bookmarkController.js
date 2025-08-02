const Bookmark = require('../models/Bookmark');
const User = require('../models/User');

exports.getBookmarks = async (req, res) => {
  try {
    const bookmarks = await Bookmark.find({ userId: req.user.id });
    res.json(bookmarks);
  } catch (error) {
    console.error('Error fetching bookmarks:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

exports.addBookmark = async (req, res) => {
  const { title, url, tags } = req.body;
  try {
    const bookmark = new Bookmark({
      title,
      url,
      tags,
      userId: req.user.id,
    });
    await bookmark.save();
    res.status(201).json(bookmark);
  } catch (error) {
    console.error('Add bookmark error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.deleteBookmark = async (req, res) => {
  try {
    const bookmark = await Bookmark.findByIdAndDelete(req.params.id);
    if (!bookmark) {
      return res.status(404).json({ message: 'Bookmark not found' });
    }
    res.json({ message: 'Bookmark deleted' });
  } catch (error) {
    console.error('Delete error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.shareBookmark = async (req, res) => {
  const { bookmarkId, email } = req.body;
  try {
    // Validate recipient email
    const recipient = await User.findOne({ email });
    if (!recipient) {
      return res.status(400).json({ message: 'Recipient email not found' });
    }
    const bookmark = await Bookmark.findById(bookmarkId);
    if (!bookmark) {
      return res.status(404).json({ message: 'Bookmark not found' });
    }
    // Check if bookmark belongs to the user
    if (bookmark.userId.toString() !== req.user.id) {
      return res.status(403).json({ message: 'Unauthorized to share this bookmark' });
    }
    if (!bookmark.sharedWith.includes(email)) {
      bookmark.sharedWith.push(email);
      await bookmark.save();
    }
    res.json({ message: 'Bookmark shared successfully' });
  } catch (error) {
    console.error('Share error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

exports.getSharedBookmarks = async (req, res) => {
  try {
    console.log('Fetching shared bookmarks for email:', req.user.email);
    const bookmarks = await Bookmark.find({ sharedWith: req.user.email });
    console.log('Shared bookmarks found:', bookmarks);
    res.json(bookmarks);
  } catch (error) {
    console.error('Get shared bookmarks error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};