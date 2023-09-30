import "./styles.css"

export default function UserList(props) {
  const {userList} = props

  return (
    <div className="container">
      {userList.map((user, index) => (
        <p key={index} className="user">
          {user.userName} ({user.age} year(s) old)
        </p>
      ))}
    </div>
  )
}
