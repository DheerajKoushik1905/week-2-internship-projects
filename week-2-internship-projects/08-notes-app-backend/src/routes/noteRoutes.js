const router = require('express').Router();
const Note = require('../models/Note');
const auth = require('../middleware/auth');

router.use(auth);

router.get('/', async (req, res, next) => {
  try { res.json(await Note.find({ owner: req.user.userId }).sort({ updatedAt: -1 })); }
  catch (error) { next(error); }
});

router.get('/:id', async (req, res, next) => {
  try {
    const note = await Note.findOne({ _id: req.params.id, owner: req.user.userId });
    if (!note) return res.status(404).json({ message: 'Note not found' });
    res.json(note);
  } catch (error) { next(error); }
});

router.post('/', async (req, res, next) => {
  try {
    const note = await Note.create({ title: req.body.title, content: req.body.content || '', owner: req.user.userId });
    res.status(201).json(note);
  } catch (error) { next(error); }
});

router.put('/:id', async (req, res, next) => {
  try {
    const note = await Note.findOneAndUpdate({ _id: req.params.id, owner: req.user.userId }, { title: req.body.title, content: req.body.content }, { new: true, runValidators: true });
    if (!note) return res.status(404).json({ message: 'Note not found' });
    res.json(note);
  } catch (error) { next(error); }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const note = await Note.findOneAndDelete({ _id: req.params.id, owner: req.user.userId });
    if (!note) return res.status(404).json({ message: 'Note not found' });
    res.json({ message: 'Note deleted' });
  } catch (error) { next(error); }
});

module.exports = router;
