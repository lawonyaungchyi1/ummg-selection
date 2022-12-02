import { Typography, Box } from "@mui/material";
import Love from "../../photos/love-1.png";

const MainContainer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row", lg: "row" },
        justifyContent: "center",
        alignItems: "center",
        padding: "6%",
      }}
    >
      <Box sx={{ flex: 1, marginBottom: { xs: "20px" } }}>
        <Typography sx={{ textAlign: "center" }}>
          <Typography
            variant="h4"
            color="#ff5c8a"
            fontWeight="bolder"
            sx={{ textAlign: "center" }}
          >
            Foundation Year 12/2022
          </Typography>
          မှကျောင်းသားကျောင်းသူလေးများရဲ့ယှဉ်ပြိုင်မှုဖြစ်ပါတယ်။မိမိတိုရဲ့သူငယ်ချင်းများကိုvoteပေးရန်နှစ်သက်ရာtitleကိုရွေးချယ်၍မဲပေးနိုင်ပါသည်။
        </Typography>
      </Box>
      {/* Right Side */}
      <Box style={{ flex: 1 }}>
        <img
          src={Love}
          style={{ maxWidth: "100%", height: "auto" }}
          alt="Lover"
        />
      </Box>
    </Box>
  );
};

export default MainContainer;
