import React from 'react';

export default function AppWrap() {
  return (
    <div>
      <Navbar>
        <Avatar
          image='https://images.unsplash.com/photo-1764014588206-3c2647a34911?q=80&w=1211&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          name='Bob'
          size={200}
        />
        <p>안녕하세요.</p>
      </Navbar>
    </div>
  );
}

function Navbar({ children }) {
  return (
    <header style={{backgroundColor: 'yellow'}}>
      {children}
    </header>
  )
}

function Avatar(props) {
  return (
    <div>
      <img src={props.image} alt={`${props.name}`} width={props.size} height={props.size} style={{borderRadius:'50%'}} />
    </div>
  )
}
