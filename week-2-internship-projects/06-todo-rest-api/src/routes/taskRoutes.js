const router = require('express').Router();
const Task = require('../models/Task');

router.get('/', async (_req, res, next) => {
  try { res.json(await Task.find().sort({ createdAt: -1 })); } catch (error) { next(error); }
});

router.post('/', async (req, res, next) => {
  try {
    const task = await Task.create({ title: req.body.title, completed: req.body.completed ?? false });
    res.status(201).json(task);
  } catch (error) { next(error); }
});

router.put('/:id', async (req, res, next) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!task) return res.status(404).json({ message: 'Task not found' });
    res.json(task);
  } catch (error) { next(error); }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) return res.status(404).json({ message: 'Task not found' });
    res.json({ message: 'Task deleted' });
  } catch (error) { next(error); }
});

module.exports = router;
