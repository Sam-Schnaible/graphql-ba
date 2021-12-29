import React from 'react';
import { useQuery } from '@apollo/client';
import { getBookQuery } from '../queries/queries.js';

const BookDetails = ({ id }) => {

  const { loading, error, data } = useQuery(getBookQuery, { variables:{id} });

  if ( loading ) return 'Loading...';
  if ( error ) return  `Error!: ${error.message}`;

  const details = data.book ?
  <>
  <h2>{data?.book?.name}</h2>
  <p>{data?.book?.genre}</p>
  <p>{data?.book?.author?.name}</p>
  <p>All Books by this author:</p>
  <ul className="other-books">
    {data?.book?.author.books.map( book =>
      <li key={book.id}>{book.name}</li>
    )}
  </ul>
  </>
  :
  <p>No book selected...</p>

  return (
    <div id="book-details">
      {details}
    </div>
  )
}

export default BookDetails;