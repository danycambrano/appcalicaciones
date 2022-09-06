import React from 'react';

import Menu from '../Menu/barraMenu';

export default function Layouts({children}) {
  return (
    <div>
        <Menu/>
        {children}
    </div>
  )
}
