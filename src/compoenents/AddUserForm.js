import { useState } from "react";
import UserNameInput from "./UserNameInput";
import AgeInput from "./AgeInput";
import "./styles.css"

export default function AddUserForm(props) {
  const {setUserList, setModalOpen, setFormErrors} = props;
  const [userName, setUserName] = useState("");
  const [isValidUserName, setIsValidUserName] = useState(true);
  const [age, setAge] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    if (!isValidUserName) {
      setFormErrors((prev) => [...prev, `Invalid UserName Format: ${userName}`])
      setModalOpen(true)
    }

    if (isValidUserName) {
      const user = { userName: userName, age: age };
      setUserList((prev) => [...prev, user]);

      setUserName("");
      setAge("");
      setIsValidUserName(true);
      setFormErrors([])
    }
  };

  return (
    <form onSubmit={onSubmit} className="container">
      <UserNameInput
        userName={userName}
        setUserName={setUserName}
        isValidUserName={isValidUserName}
        setIsValidUserName={setIsValidUserName}
      />
      <AgeInput
        age={age}
        setAge={setAge}
      />
      <button type="submit">Add User</button>
    </form>
  )
}
