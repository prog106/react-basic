export default function personReducer(person, action) {
  switch(action.type) {
    case 'updated': {
      const {prev, current} = action;
      return {
        ...person,
        mentors: person.mentors.map((mentor) => {
          if(mentor.name === prev) {
            return { ...mentor, name: current};
          }
          return mentor;
        })
      };
    }
    case 'added': {
      const {name, title} = action;
      return {
        ...person,
        // mentors: [...person.mentors, { name, title }] // 뒤에 추가
        mentors: [{ name, title }, ...person.mentors] // 앞에 추가
      }
    }
    case 'deleted': {
      const {name} = action;
      return {
        ...person,
        mentors: person.mentors.filter((mentor) => mentor.name !== name),
      }
    }
    default: {
      throw Error(`Error : ${action.type}`);
    }
  }
}
