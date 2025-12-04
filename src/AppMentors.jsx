import React, { useState } from "react";
import './AppMentors.css';

export default function AppMentor() {
  const [person, setPerson] = useState(initPerson);
  const handleUpdate = () => {
    const prev = prompt('누구의 이름을 바꾸고 싶은가요?');
    const current = prompt('이름을 무엇으로 바꾸고 싶은가요?');
    setPerson((person) => ({
      ...person,
      mentors: person.mentors.map((mentor) => {
        if(mentor.name === prev) {
          return { ...mentor, name: current};
        }
        return mentor;
      })
    }));
  }
  const handleAdd = () => {
    const name = prompt('추가할 멘토의 이름은 무엇인가요?');
    const title = prompt('멘토의 타이틀은 무엇인가요?');
    setPerson((person) => ({
      ...person,
      // mentors: [...person.mentors, { name, title }] // 뒤에 추가
      mentors: [{ name, title }, ...person.mentors] // 앞에 추가
    }));
  }
  const handleDelete = () => {
    const name = prompt('삭제할 멘토의 이름은 무엇인가요?');
    setPerson((person) => ({
      ...person,
      mentors: person.mentors.filter((mentor) => mentor.name !== name),
    }));
  }
  return (
    <div>
      <h1>{person.name}는 {person.title}</h1>
      <p>
        {person.name}의 멘토는:
      </p>
      <ul>
        {person.mentors.map((mentor) => (
          <li key={mentor.id}>{mentor.name} ({mentor.title})</li>
        ))}
      </ul>
      <button onClick={handleUpdate}>멘토 이름 바꾸기</button>
      <button onClick={handleAdd}>멘토 추가하기</button>
      <button onClick={handleDelete}>멘토 삭제하기</button>
    </div>
  );
}

const initPerson = {
  name: 'James',
  title: '개발자',
  mentors: [
    {
      id: 1,
      name: 'John',
      title: '시니어개발자',
    },
    {
      id: 2,
      name: 'Jane',
      title: '시니어개발자',
    },
  ],
};
