import Card from "../UI/Card";
import "./UserList.css";
import UserListItem from "./UserListItem";

const UserList = (props) => {
  const listContent = props.userData.map((user) => {
    return (
      <UserListItem key={user.id}>
        {user.enteredUsername} ({user.enteredAge} years old)
      </UserListItem>
    );
  });

  return (
    <Card className="users">
      <ul className="user-list">{listContent}</ul>
    </Card>
  );
};

export default UserList;
