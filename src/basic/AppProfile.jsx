import React from 'react';
import './App.css';
import Avatar from './components/Avatar';
import Profile from './components/Profile';

function AppProfile() {
  const handleClick = (event) => {
    console.log(event);
    alert('click');
  }
  return (
    <>
      <button onClick={handleClick}>버튼</button>
      <Avatar isNew={true} image='https://images.unsplash.com/photo-1764014588206-3c2647a34911?q=80&w=1211&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
      <Profile isNew={true} image='https://images.unsplash.com/photo-1764014588206-3c2647a34911?q=80&w=1211&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' name='James Kim1' job='프론트엔드 개발자' />
      <Profile image='https://images.unsplash.com/photo-1764014588206-3c2647a34911?q=80&w=1211&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' name='James Kim2' job='프론트엔드 개발자' />
      <Profile image='https://images.unsplash.com/photo-1764014588206-3c2647a34911?q=80&w=1211&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' name='James Kim3' job='프론트엔드 개발자' />
    </>
  );
}

export default AppProfile;
