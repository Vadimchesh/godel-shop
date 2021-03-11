import React, { ReactElement } from 'react';

interface Props {}

export default function Profile({}: Props): ReactElement {
  return (
    <div>
      <h1>You Profile</h1>
      <div>Orders:</div>
    </div>
  );
}
