import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import AppProfile from './AppProfile';
// import AppCounter from './AppCounter';
// import AppProduct from './basic/AppProduct';
// import AppXY from './AppXY';
// import AppMentor from './AppMentor';
// import AppMentors from './AppMentors';
// import AppMentorsReducer from './AppMentorsReducer';
// import AppJumpGame from './AppJumpGame';
// import AppForm from './AppForm';
// import AppWrap from './AppWrap';
import reportWebVitals from './reportWebVitals';
import ToDoApp from './ToDoApp';
// import AppTheme from './AppTheme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <AppProfile /> */}
    {/* <AppCounter /> */}
    {/* <AppProduct /> */}
    {/* <AppXY /> */}
    {/* <AppMentor /> */}
    {/* <AppMentors /> */}
    {/* <AppMentorsReducer /> */}
    {/* <AppJumpGame /> */}
    {/* <AppForm /> */}
    {/* <AppWrap /> */}
    {/* <AppTheme /> */}
    <ToDoApp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// $ npm run build
// ./bulid/ 안에 있는 파일들을 배포하면 됨.
// 개인 PC에서 서버돌릴때
// npm install -g serve
// serve -s build
// http://localhost:3000
