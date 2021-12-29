import React from 'react';
import { useQuery } from '@apollo/client';
import { getBookQuery } from '../queries/queries.js';

const BookDetails = () => {

  const { loading, error, data } = useQuery(getBookQuery);

  if ( loading ) return 'Loading...';
  if ( error ) return  `Error!: ${error.message}`;

  return (
    <div id="book-details">
      <p>Output book details here</p>
    </div>
  )
}

export default BookDetails;