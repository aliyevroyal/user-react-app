import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import UsersList from "./components/UsersList";
import NotFound from "./components/NotFound";
import UserDetails from "./components/UserDetails";
import CreateAndUpdateUser from "./components/CreateAndUpdateUser";

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <div>
          <Routes>
            <Route exact path="/" Component={UsersList} />
            <Route
              path="/CreateAndUpdateUser"
              Component={CreateAndUpdateUser}
            />
            <Route path="/users/:id" Component={UserDetails} />
            <Route path="/users/edit/:id" Component={CreateAndUpdateUser} />
            <Route path="*" Component={NotFound} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
