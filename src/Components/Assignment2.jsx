import React, { useState } from 'react';

function Assignment2() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [names, setNames] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName !== '' && lastName !== '') {
      setNames([...names, { firstName, lastName }]);
      setFirstName('');
      setLastName('');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </label>
        <br />
        <label>
          Last Name:
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      <br />
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {names.map((name, index) => (
            <tr key={index}>
              <td>{name.firstName}</td>
              <td>{name.lastName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Assignment2