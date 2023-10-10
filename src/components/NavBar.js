import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <h2 className="primary-color">Users App</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/CreateAndUpdateUser" className="ml-3">
          New User
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
