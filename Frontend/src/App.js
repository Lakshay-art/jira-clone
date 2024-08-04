import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import DashBoard from "./components/DashBoard";
import { useAuth } from "./contexts/authContext";
import { DragProvider } from "./contexts/dragContext";
import Navbar from "./components/NavBar";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebaseInit";
import axios from "axios";

function App() {
  const { isAuthenticated, setUser, login } = useAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (currentuser) => {
      // console.log(currentuser);
      if (!currentuser) return;
      axios
        .post(`${process.env.REACT_APP_SERVER}/users/glogin`, {
          googleAuthData: {
            userId: currentuser.uid,
            username: currentuser.displayName,
            email: currentuser.email,
            profilePic: currentuser.photoURL,
          },
        })
        .then((user) => {
          setUser(user?.data);
          login();
        });
    });
  }, []);
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/login" element={<Login />} />
          {/* <Route
            path="/login"
            element={isAuthenticated ? <Navigate to="/dashboard" /> : <Login />}
          /> */}
          <Route
            path="/dashboard"
            element={
              isAuthenticated === false ? (
                <Navigate to="/login" />
              ) : (
                <DragProvider>
                  <DashBoard />
                </DragProvider>
              )
            }
          ></Route>
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
