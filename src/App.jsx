import React from 'react';
import './App.css';

function App() {
  const [peopleList, setPeopleList] = React.useState([{ id: 1, user: '' }]);

  const handlePeopleAdd = (event) => {
    event.preventDefault();
    const lastId = peopleList.length > 0 ? peopleList[peopleList.length - 1].id : 0;
    const nextId = lastId + 1;
    setPeopleList([...peopleList, { id: nextId, user: '' }]);
  };

  const RemovePeopleAdd = (id) => {
    const list = peopleList.filter((person) => person.id !== id);
    setPeopleList(list);
  };

  const handlePeopleChange = (event, id) => {
    const { name, value } = event.target;
    const list = peopleList.map((person) => {
      if (person.id === id) {
        return { ...person, [name]: value };
      }
      return person;
    });
    setPeopleList(list);
  };
  return (
    <>
      <form>
        <div className="form">
          <label htmlFor="user">Пользователи</label>
          {peopleList.map((people, index) => (
            <div key={people.id}>
              <div className="first_input_block">
                <h2 className="user_index">Пользователь {people.id}</h2>
                <input
                  name="user"
                  type="text"
                  id="user"
                  required
                  value={people.user}
                  onChange={(event) => handlePeopleChange(event, people.id)}
                  placeholder={`Введите значение в поле ${people.id}`}
                />
              </div>
              <div className="remove_button_block">
                <button type="button" onClick={() => RemovePeopleAdd(people.id)}>
                  <span>Удалить</span>
                </button>
              </div>
            </div>
          ))}
          {peopleList.length < 5 && (
            <button type="button" className="button_add" onClick={handlePeopleAdd}>
              <span>Добавить пользователя</span>
            </button>
          )}
          <div className="list_users_block">
            <h2>Список пользователей</h2>
            {peopleList.map((person, id) => (
              <ul key={person.id}>
                {person.user && (
                  <li>
                    {person.user ? person.id : ''}) {person.user}
                  </li>
                )}
              </ul>
            ))}
          </div>
        </div>
      </form>
    </>
  );
}

export default App;
