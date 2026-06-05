import { Box, Button, Typography } from "@mui/material";
import {
  NotificationsNoneOutlined,
  AddCircleOutlineOutlined,
  ChatOutlined,
  AccountCircleOutlined,
} from "@mui/icons-material";

export const Header = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        maxWidth: "900px",
        margin: "0 auto",
        borderBottom: "1px solid #f3f3f3",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontSize: "2rem",
          fontFamily: "Big Shoulders",
          color: "#DC352A",
          fontWeight: "900",
          letterSpacing: "-1px",
          cursor: "pointer",
        }}
      >
        blocket
      </Typography>

      <Box
        sx={{
          display: "flex",
          gap: "10px",
        }}
      >
        <Button
          sx={{
            color: "black",
            textTransform: "none",
            fontSize: "13px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <NotificationsNoneOutlined sx={{ fontSize: "20px", mb: "2px" }} />
          Notiser
        </Button>

        <Button
          sx={{
            color: "black",
            textTransform: "none",
            fontSize: "13px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <AddCircleOutlineOutlined sx={{ fontSize: "20px", mb: "2px" }} />
          Ny annons
        </Button>

        <Button
          sx={{
            color: "black",
            textTransform: "none",
            fontSize: "13px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <ChatOutlined sx={{ fontSize: "20px", mb: "2px" }} />
          Meddelanden
        </Button>

        <Button
          sx={{
            color: "black",
            textTransform: "none",
            fontSize: "13px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <AccountCircleOutlined sx={{ fontSize: "20px", mb: "2px" }} />
          Logga in
        </Button>
      </Box>
    </Box>
  );
};
