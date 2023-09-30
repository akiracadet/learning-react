import { useState } from "react";
import AddUserForm from "./compoenents/AddUserForm";
import UserList from "./compoenents/UserList";
import Modal from "./compoenents/Modal";

export default function App() {
  const [userList, setUserList] = useState([]);
  const [formErrors, setFormErrors] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="site">
      <Modal show={isModalOpen} onClose={() => setModalOpen(false)} >
        <ul>
          {formErrors.map((error, index) => (
            <li key={index}><p>{error}</p></li>
          ))}
        </ul>
      </Modal>
      <AddUserForm
        setUserList={setUserList}
        setModalOpen={setModalOpen}
        setFormErrors={setFormErrors}
      />
      <UserList userList={userList} />
    </div>
  );
}
