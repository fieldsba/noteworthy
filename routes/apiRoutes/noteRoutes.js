const router = require('express').Router();
const { findById, createNewNote, deleteNote } = require('../../lib/notes.js');
const { notes } = require('../../db/db.json');
  
  
  router.get('/notes', (req, res) => {
      res.json(notes);
  });

  router.post('/notes', (req, res) => {
      const note = createNewNote(req.body, notes);
      res.json(note);
  });

  router.delete('/notes/:id', (req, res) => {
    const result = findById(req.params.id, notes);
    
    if (result !== null) {
      res.json(deleteNote(result, notes)); 
    } else {
      res.sendStatus(404);
    }
});
  
module.exports = router;