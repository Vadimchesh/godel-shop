import React, { ReactElement } from 'react';
import Cards from '../Card/Cards';

interface Props {}

export default function Categories({}: Props): ReactElement {
  return (
    <div>
      <h1>Books</h1>
      <Cards title='Book used' />
    </div>
  );
}
