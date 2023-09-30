import "./styles.css"

export default function UserNameInput(props) {
  const {userName, setUserName} = props
  const {isValidUserName, setIsValidUserName} = props

  const onChangeUserName = (event) => {
    const userName = event.target.value;
    setUserName(userName);
    setIsValidUserName(
      /^[a-zA-Z][a-zA-Z0-9]*$/.test(userName)
    );
  };

  return (
    <div>
      <div>
        <label htmlFor="user-name">Username</label>
        <input
          className="input"
          type="text"
          id="user-name"
          name="user-name"
          value={userName}
          onChange={onChangeUserName}
        />
      </div>
      {isValidUserName || <p className="error">* Invalid username.</p>}
    </div>
  )
}
