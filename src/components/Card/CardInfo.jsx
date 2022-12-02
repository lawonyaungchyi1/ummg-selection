import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import NaiNai from "../../photos/nai-nai.png";
import { createTheme, ThemeProvider } from "@mui/material";
import { pink } from "@mui/material/colors";
import King from "../../photos/king.png";
import Queen from "../../photos/queen.png";
import Prince from "../../photos/prince.png";
import Princess from "../../photos/princess.png";
import Popularity from "../../photos/popularity.png";
import Tuxedo from "../../photos/tuxedo.png";
import Dress from "../../photos/dress.png";

export default function CardInfo({ cardInfo }) {
  const theme = createTheme({
    palette: {
      primary: {
        main: pink[400],
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Card
        sx={{
          maxWidth: 345,
          marginBottom: "20px",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <CardMedia
          component="img"
          image={NaiNai}
          alt="green iguana"
          sx={{ width: "50%" }}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ textAlign: "center", fontWeight: "bold" }}
          >
            {cardInfo.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Button
            size="small"
            variant="contained"
            sx={{
              display: "flex",
              justifyContent: "center",
              alginItems: "center",
              margin: "4px",
            }}
          >
            <img
              src={cardInfo.gender === "1" ? King : Queen}
              alt="King Logo"
              style={{ width: "25px", height: "25px" }}
            />
            <Typography>
              {cardInfo.gender === "1" ? "King" : "Queen"}
            </Typography>
          </Button>
          <Button
            size="small"
            variant="contained"
            sx={{
              display: "flex",
              justifyContent: "center",
              alginItems: "center",
              margin: "4px",
            }}
          >
            <img
              src={cardInfo.gender === "1" ? Prince : Princess}
              alt="Prince Logo"
              style={{ width: "25px", height: "25px" }}
            />
            <Typography>
              {cardInfo.gender === "1" ? "Prince" : "Princess"}
            </Typography>
          </Button>
          <Button
            size="small"
            variant="contained"
            sx={{
              display: "flex",
              justifyContent: "center",
              alginItems: "center",
              margin: "4px",
            }}
          >
            <img
              src={Popularity}
              alt="Popularity Logo"
              style={{ width: "25px", height: "25px" }}
            />
            <Typography>Popularity</Typography>
          </Button>
          <Button
            size="small"
            variant="contained"
            sx={{
              display: "flex",
              justifyContent: "center",
              alginItems: "center",
              margin: "4px",
            }}
          >
            <img
              src={cardInfo.gender === "1" ? Tuxedo : Dress}
              alt="Tuxedo Logo"
              style={{ width: "25px", height: "25px" }}
            />
            <Typography>
              {cardInfo.gender === "1" ? "Style Boy" : "Style Girl"}
            </Typography>
          </Button>
        </Box>
      </Card>
    </ThemeProvider>
  );
}
