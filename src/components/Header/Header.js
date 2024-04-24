import React from 'react';
import Nav from './Nav';
import Main from './Main';

export default function Header() {
  return (
    <header className='bg-neutral-silver'>
      <Nav></Nav>
      <Main></Main>
    </header>
  )
}
