import { useState } from "react";
import AddUserForm from "./compoenents/AddUserForm";
import UserList from "./compoenents/UserList";

export default function App() {
  const [userList, setUserList] = useState([]);

  return (
    <div className="site">
      <AddUserForm setUserList={setUserList} />
      <UserList userList={userList} />
    </div>
  );
}
