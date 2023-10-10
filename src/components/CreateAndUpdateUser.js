import { useEffect, useState } from "react";
import UserService from "../services/UserService";
import { useNavigate, useParams } from "react-router";

const CreateAndUpdateUser = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const { id } = useParams();
  const [errors, setErrors] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      UserService.getUser(id)
        .then((user) => {
          setName(user.data.name);
          setAge(user.data.age);
          setEmail(user.data.email);
          setPhoneNumber(user.data.phoneNumber);
        })
        .catch((error) => {
          console.log("Something went wrong!", error);
        });
    }
  }, []);

  const saveUser = (e) => {
    e.preventDefault();

    if (!name || !email) {
      setErrors(true);
      return;
    }

    const user = { name, age, email, phoneNumber, id };
    if (id) {
      UserService.updateUser(id, user)
        .then((response) => {
          console.log("user is updated successfully!", response.data);
          navigate("/");
        })
        .catch((error) => {
          console.log("something went wrong!", error);
        });
    } else {
      UserService.createUser(user)
        .then((response) => {
          console.log("user is saved successfully!", response.data);
          navigate("/");
        })
        .catch((error) => {
          console.log("something went wrong!", error);
        });
    }
  };

  return (
    <div className="create">
      <div className="text-center">
        <h5>{id ? "Update the User" : "Add a New User"}</h5>
        {errors && (
          <span style={{ color: "red", fontStyle: "italic" }}>
            Please Fill the Mandatory Fields!
          </span>
        )}
      </div>
      <form>
        <div className="form-group">
          <label htmlFor="name">
            Name: <sup>*</sup>
          </label>
          <input
            text="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>

        <div className="form-group">
          <label htmlFor="age">
            Age: <sup>*</sup>
          </label>
          <input
            text="text"
            className="form-control"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          ></input>
        </div>

        <div className="form-group">
          <label htmlFor="email">
            Email Address: <sup>*</sup>
          </label>
          <input
            text="text"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>

        <div className="form-group">
          <label htmlFor="phoneNumber">
            Phone Number: <sup>*</sup>
          </label>
          <input
            text="text"
            className="form-control"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          ></input>
        </div>

        <div className="text-center">
          <button onClick={(e) => saveUser(e)}>
            {id ? "Update User" : "Add User"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateAndUpdateUser;
