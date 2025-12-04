import React, { useState } from "react";
import './AppMentor.css';

export default function AppMentor() {
  const [person, setPerson] = useState({
    name: 'James',
    title: '개발자',
    mentor: {
      name: 'John',
      title: '시니어개발자',
    },
  });
  return (
    <div>
      <h1>{person.name}는 {person.title}</h1>
      <p>
        {person.name}의 멘토는 {person.mentor.name} ({person.mentor.title})
      </p>
      <button onClick={() => {
        const name = prompt('멘토의 이름은?');
        setPerson((person) => ({ ...person, mentor: { ...person.mentor, name: name}}));
        // setPerson((person) => { return { ...person, mentor: {name: name, title: person.mentor.title}} });
      }}>멘토 이름 바꾸기</button>
      <button onClick={() => {
        const title = prompt('멘토의 타이틀은?');
        setPerson((person) => ({ ...person, mentor: { ...person.mentor, title: title}}));
        // setPerson((person) => { return { ...person, mentor: {name: person.mentor.name, title: title}} });
      }}>멘토 타이틀 바꾸기</button>
    </div>
  );
}
