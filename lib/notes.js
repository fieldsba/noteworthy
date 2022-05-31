const fs = require('fs');
const path = require('path');

function findById(id, notesArray) {
  const result = notesArray.findIndex(note => note.id === id);
  return result;
}

function createNewNote(body, notes) {
  
    function createNoteId () {
        let uniqueId = Math.floor((1 + Math.random()))

        return uniqueId;
    }

  const note = body;
  note.id = createNoteId();

  notes.push(note);

  fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify({ notes }, null, 2)
  );
  
  return note;

}

function deleteNote(index, notes) {
  
    notes.splice(index,1);
    
    fs.writeFileSync(
      path.join(__dirname, '../db/db.json'),
      JSON.stringify({ notes }, null, 2)
    );
  }
  

module.exports = {
  findById,
  createNewNote,
  deleteNote
};