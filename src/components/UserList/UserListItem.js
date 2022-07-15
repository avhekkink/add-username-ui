import "./UserListItem.css";

const UserListItem = (props) => {
  return <li className="user-item">{props.children}</li>;
};

export default UserListItem;
