import { useState } from "react";

export default function App() {
  const [userList, setUserList] = useState([]);
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");
  const [isValidUserName, setIsValidUserName] = useState(true);
  const [isValidAge, setIsValidAge] = useState(true);

  const onSubmit = (event) => {
    event.preventDefault();

    if (isValidUserName && isValidAge) {
      const user = { userName: userName, age: age };
      setUserList((prev) => [...prev, user]);

      setUserName("");
      setAge("");
      setIsValidUserName(true);
      setIsValidAge(true);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <div>
            <label htmlFor="user-name">Username</label>
            <input
              type="text"
              id="user-name"
              name="user-name"
              value={userName}
              onChange={(event) => {
                const userName = event.target.value;
                setUserName(userName);
                setIsValidUserName(
                  /^[a-zA-Z]+[0-9]*[a-zA-Z0-9]*$/.test(userName)
                );
              }}
            />
          </div>
          {isValidUserName || <p>Invalid username.</p>}
        </div>
        <div>
          <div>
            <label htmlFor="age">Age</label>
            <input
              type="number"
              id="age"
              name="age"
              value={age}
              onChange={(event) => {
                const age = event.target.value;
                setAge(age);
                setIsValidAge(Number.isInteger(+age) && +age >= 0);
              }}
            />
          </div>
          {isValidAge || <p>Invalid age.</p>}
        </div>
        <button type="submit">Add User</button>
      </form>
      <div>
        {userList.map((user, index) => (
          <p key={index}>
            {user.userName} ({user.age} year(s) old)
          </p>
        ))}
      </div>
    </div>
  );
}
