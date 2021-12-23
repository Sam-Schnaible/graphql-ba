import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { getAuthorsQuery } from '../queries/queries.js';


const AddBook = () => {

  const [author, setAuthor ] = useState({
    name: '',
    genre: '',
    authorId: ''
  })

  const { loading, error, data } = useQuery(getAuthorsQuery);

  const handleOnSubmit = e => {
    e.preventDefault();

  }

  if ( loading ) return 'Loading...';
  if ( error ) return  `Error! ${error.message}`;

  return (
    <form id="add-book"
    onSubmit={() => handleOnSubmit()}
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
            <option key={author.id}>{author.name}</option>)}
          </select>
      </div>
      <button>+</button>
    </form>
  )
}

export default AddBook;