import React, { useState, Fragment } from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';



function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = function (name, age) {
    setUsersList((prevList) => {
      return [...prevList, { name: name, age: age, id: Math.random().toString() }];
    });
  };

  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler} />

      <UsersList users={usersList} />
    </Fragment>
  );
}

export default App;
