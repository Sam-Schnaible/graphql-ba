import React from 'react';
import { useQuery } from '@apollo/client';
import { getBooksQuery } from '../queries/queries.js';


const BookList = () => {

  const { loading, error, data } = useQuery(getBooksQuery);

  if ( loading ) return 'Loading...';
  if ( error ) return  `Error! ${error.message}`;

  return (
    <div>
      <ul id="book-list">
        {data.books.map( book =>
          <li key={book.id}>{book.name}</li>
        )}
      </ul>
    </div>
  )
}

export default BookList;