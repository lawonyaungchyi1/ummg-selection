import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { useGoogleLogin } from "@react-oauth/google";
import { Box, ThemeProvider, Typography } from "@mui/material";
import axios from "axios";
import { createTheme } from "@mui/material";
import { pink } from "@mui/material/colors";
import SchoolLg from "../../photos/school-1.png";
import SchoolWhole from "../../photos/school-whole.png";
import { UserAuth } from "../../context/AuthContext";
import { GoogleButton } from "react-google-button";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Login = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: pink[400],
      },
    },
  });
  // const login = useGoogleLogin({
  //   onSuccess: async (tokenResponse) => {
  //     try {
  //       const res = await axios.get(
  //         "https://www.googleapis.com/oauth2/v3/userinfo",
  //         {
  //           headers: {
  //             Authorization: `Bearer ${tokenResponse.access_token}`,
  //           },
  //         }
  //       );
  //       console.log(res.data);
  //       localStorage.setItem("User Info", JSON.stringify(res.data));
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   },
  // });

  const navigate = useNavigate();
  const { googleSignIn, user } = UserAuth();

  useEffect(() => {
    if (user != null) {
      navigate("/home");
    }
  }, [user]);
  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: `url(${SchoolWhole})`,
        backgroundSize: "cover",
      }}
    >
      <ThemeProvider theme={theme}>
        <Box
          onClick={handleGoogleSignIn}
          sx={{
            minWidth: "10%",
            minHeight: "10%",
            backgroundColor: "#ff477e",
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px",
            flexWrap: "wrap",
            fontSize: "20px",
            color: "#ece5f0",
            fontWeight: "bolder",
            borderRadius: "10px",
          }}
        >
          <img
            src={SchoolLg}
            alt="School Logo"
            style={{ width: "30px", height: "30px" }}
          />
          <Typography sx={{ fontWeight: "bolder" }}>
            Login to Ummg Selection
          </Typography>
        </Box>
        {/* <GoogleButton /> */}
      </ThemeProvider>
    </Box>
  );
};

export default Login;
