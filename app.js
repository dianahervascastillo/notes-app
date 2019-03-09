

let noteInput = document.getElementById('new-note');
let addButton = document.getElementsByTagName('button')[0];
let notesList = document.getElementsByClassName('notes-list')[0];


// Function for creating a new note

const addNewNoteToList = function(noteText){
  //all elements that will appear in the new note when added
  let listItem = document.createElement('li');
  let noteContent = document.createElement('p');

  let editInput = document.createElement('input');
  let editButton = document.createElement('button');
  let deleteButton = document.createElement('button');

  //Add new note to paragraph
  noteContent.innerText = noteText;
  noteContent.className = 'note-text'
  //When edit, input should be a text
  editInput.type = 'text';
  editInput.className = 'edit-input';
  addButton.className = 'action--add'
  //Set the right attrs for the edit button
  editButton.type = 'button';
  editButton.innerText = 'Edit';
  editButton.className = 'action--edit';

  //Set the right attrs for the delete button
  deleteButton.type = 'button';
  deleteButton.innerText = 'Delete';
  deleteButton.className = 'action--delete';


  //Add these elements to the DOM for each new note

  listItem.appendChild(noteContent);
  listItem.appendChild(editInput);
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);


  console.log(listItem)

  return listItem;
}


const addNewNote = function(){
  console.log('Added note!!');
  if (noteInput.value != '') {
    //add New Note from Input new note
    let listItem = addNewNoteToList(noteInput.value);

    //add new note created to list
    notesList.appendChild(listItem)
    bindNotesListFunctions(listItem)

    //empty new note input each time
    noteInput.value = '';
  }

}


const editNote = function(){
  console.log('Edit note...');

  let listItem = this.parentNode;
  let editButton = listItem.querySelector('button.action--edit')

  let editInput = listItem.querySelector('input[type="text"]');
  let noteParagraph = listItem.querySelector('p')

  editButton.innerText = 'Save'

  if (listItem.classList.contains('mode--edit')) {
    noteParagraph.innerText = editInput.value;
    editButton.innerText = 'Edit'
  } else{
    editInput.value = noteParagraph.innerText
  }

  //Change css class when in edit mode
  listItem.classList.toggle('mode--edit');

}

const deleteNote = function(){

  console.log('Deleted note!!');

  let listItem = this.parentNode;
  var noteList = listItem.parentNode;

  noteList.removeChild(listItem);

}


//Adding function to Add button
addButton.onclick = addNewNote;


//Adding functions to buttons in notes list items

const bindNotesListFunctions = function(listItem){

  let editButton = listItem.querySelector('button.action--edit');
  let deleteButton = listItem.querySelector('button.action--delete');

  editButton.onclick = editNote;
  deleteButton.onclick = deleteNote;

}




