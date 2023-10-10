import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import UserService from "../services/UserService";

const UserDetails = () => {
  const { id } = useParams();
  const [currentUser, setCurrentUser] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    UserService.getUser(id)
      .then((user) => {
        setCurrentUser(user.data);
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  }, []);

  const handleDelete = () => {
    UserService.deleteUser(id)
      .then((response) => {
        navigate("/");
      })
      .catch((error) => {
        console.log("Something went wrong!", error);
      });
  };

  const handleEdit = () => {
    navigate(`/users/edit/${id}`);
  };

  return (
    <div className="user-details main-content">
      {currentUser && (
        <div>
          <article>
            <div className="mb-3">Name: {currentUser.name}</div>
            <div className="mb-3">Age: {currentUser.age}</div>
            <div className="mb-3">Email Address: {currentUser.email}</div>
            <div className="mb-3">Phone Number: {currentUser.phoneNumber}</div>
          </article>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete} className="ml-3">
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default UserDetails;
