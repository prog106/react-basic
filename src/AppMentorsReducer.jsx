import React, { useReducer } from "react";
import './AppMentors.css';
import personReducer from "./reducer/personReducer";

export default function AppMentor() {
  // const [person, setPerson] = useState(initPerson);
  const [person, dispatch] = useReducer(personReducer, initPerson);
  const handleUpdate = () => {
    const prev = prompt('누구의 이름을 바꾸고 싶은가요?');
    const current = prompt('이름을 무엇으로 바꾸고 싶은가요?');
    dispatch({type: 'updated', prev, current});
    // setPerson((person) => ({
    //   ...person,
    //   mentors: person.mentors.map((mentor) => {
    //     if(mentor.name === prev) {
    //       return { ...mentor, name: current};
    //     }
    //     return mentor;
    //   })
    // }));
  }
  const handleAdd = () => {
    const name = prompt('추가할 멘토의 이름은 무엇인가요?');
    const title = prompt('멘토의 타이틀은 무엇인가요?');
    dispatch({type: 'added', name, title});
    // setPerson((person) => ({
    //   ...person,
    //   // mentors: [...person.mentors, { name, title }] // 뒤에 추가
    //   mentors: [{ name, title }, ...person.mentors] // 앞에 추가
    // }));
  }
  const handleDelete = () => {
    const name = prompt('삭제할 멘토의 이름은 무엇인가요?');
    dispatch({type: 'deleted', name});
    // setPerson((person) => ({
    //   ...person,
    //   mentors: person.mentors.filter((mentor) => mentor.name !== name),
    // }));
  }
  return (
    <div className="app-mentors-reducer">
      <h1 className="app-mentors-reducer__title">
        {person.name}는 <span className="app-mentors-reducer__role">{person.title}</span>
      </h1>

      <p className="app-mentors-reducer__subtitle">
        {person.name}의 멘토는:
      </p>

      <ul className="app-mentors-reducer__list">
        {person.mentors.map((mentor) => (
          <li className="app-mentors-reducer__item" key={mentor.id}>
            <span className="app-mentors-reducer__item-name">{mentor.name}</span>
            <span className="app-mentors-reducer__item-title">{mentor.title}</span>
          </li>
        ))}
      </ul>

      <div className="app-mentors-reducer__actions">
        <button className="app-mentors-reducer__button" onClick={handleUpdate}>
          멘토 이름 바꾸기
        </button>
        <button className="app-mentors-reducer__button" onClick={handleAdd}>
          멘토 추가하기
        </button>
        <button className="app-mentors-reducer__button app-mentors-reducer__button--danger" onClick={handleDelete}>
          멘토 삭제하기
        </button>
      </div>
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
