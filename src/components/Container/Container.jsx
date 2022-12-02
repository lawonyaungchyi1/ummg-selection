import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Navbar from "../Navbar/Navbar";
import Card from "./../Card/CardInfo";
import { students } from "../Data/DummyData";
import MainContainer from "./../MainContainer/MainContainer";
import Love from "../../photos/love-2.png";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { UserAuth } from "../../context/AuthContext";

export default function SimpleContainer() {
  const { user } = UserAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user === null) {
      navigate("/");
    }
  }, [user]);
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Navbar />
      </Container>
      <Container>
        <MainContainer />
      </Container>
      <Container
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        {students.map((s) => (
          <Card key={s.id} cardInfo={s} />
        ))}
      </Container>
    </>
  );
}
