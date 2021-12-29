import React, {useState} from 'react';
import { useQuery } from '@apollo/client';
import { getBooksQuery } from '../queries/queries.js';
import BookDetails from './BookDetails.js';

const BookList = () => {

  const [selected, setSelected ] = useState(null);

  const { loading, error, data } = useQuery(getBooksQuery);

  if ( loading ) return 'Loading...';
  if ( error ) return  `Error! ${error.message}`;

  return (
    <div>
      <ul id="book-list">
        {data.books.map( book =>
          <li key={book.id} onClick={(e) => setSelected(book.id)}>{book.name}</li>
        )}
      </ul>
      <BookDetails id={selected} />
    </div>
  )
}

export default BookList;