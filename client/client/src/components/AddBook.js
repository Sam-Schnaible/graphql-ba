import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { getAuthorsQuery, addBookMutation } from '../queries/queries.js';


const AddBook = () => {

  const [author, setAuthor ] = useState({
    name: '',
    genre: '',
    authorId: ''
  })

  const { loading, error, data } = useQuery(getAuthorsQuery);


  const [addBook] = useMutation(addBookMutation)


  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log(author);
    const { name, genre, authorId } = author;
    try {
      await addBook({
        variables: {
          name,
          genre,
          authorId
        }
      });
    } catch(err) {
      console.log(`ERROR ON CLIENT: ${err.message}`)
    }
  }

  if ( loading ) return 'Loading...';
  if ( error ) return  `Error! ${error.message}`;

  return (
    <form id="add-book"
    onSubmit={(e) => handleOnSubmit(e)}
    >
      <div className="field">
        <label>Book name:</label>
          <input type="text"
          onChange={(e) => setAuthor({...author, name: e.target.value})}
          />
      </div>
      <div className="field">
        <label>Genre:</label>
          <input type="text"
          onChange={(e) => setAuthor({...author, genre: e.target.value})}
          />
      </div>
      <div className="field">
        <label>Author:</label>
          <select
          onChange={(e) => setAuthor({...author, authorId: e.target.value})}
          >
            <option>Select author</option>
            {data.authors.map( author =>
            <option key={author.id} value={author.id}>{author.name}</option>)}
          </select>
      </div>
      <button>+</button>
    </form>
  )
}

export default AddBook;