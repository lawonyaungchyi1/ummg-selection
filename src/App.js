import Login from "./components/Login/Login";
import Container from "./components/Container/Container";
import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import { UserAuth } from "./context/AuthContext";

// 129624143222-gb2lkr2kd848oqdpb3fvevimfau7s42k.apps.googleusercontent.com

const App = () => {
  const { user } = UserAuth();
  return (
    <Router>
      <div style={{ background: "#fff0f3" }}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Container />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
