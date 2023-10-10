import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserService from "../services/UserService";

const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    UserService.getUsersList()
      .then((response) => {
        console.log("printing response", response.data);
        setUsers(response.data);
      })

      .catch((error) => {
        console.log("something went wrong!", error);
      });
  }, []);

  return (
    <div className="main-content">
      <h4>List of Users</h4>
      <div className="users-list mt-4">
        {users.length > 0 ? (
          users.map((user) => (
            <div key={user.id} className="users-preview mt-3">
              <Link to={`/users/${user.id}`}>
                <h5 className="primary-color text-capitalize">{user.name}</h5>
              </Link>
            </div>
          ))
        ) : (
          <div>No user available</div>
        )}
      </div>
    </div>
  );
};

export default UsersList;
