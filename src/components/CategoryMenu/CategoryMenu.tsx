import { Box, Typography, Grid } from "@mui/material";
import {
  ChairOutlined,
  Checkroom,
  Tv,
  Home,
  SportsSoccer,
  ChildCare,
  SportsEsportsOutlined,
  DirectionsCar,
  RvHookup,
  DirectionsBoat,
  TwoWheeler,
  Agriculture,
  ParkOutlined,
  PetsOutlined,
  ArrowForwardIos,
} from "@mui/icons-material";

const categories = [
  {
    name: "Möbler och inredning",
    icon: <ChairOutlined sx={{ color: "#DC352A" }} />,
  },
  {
    name: "Kläder, kosmetik och accessoarer",
    icon: <Checkroom sx={{ color: "#DC352A" }} />,
  },
  {
    name: "Elektronik och vitvaror",
    icon: <Tv sx={{ color: "#DC352A" }} />,
  },
  { name: "Hyr Bostad", icon: <Home sx={{ color: "black" }} /> },
  {
    name: "Sport och friluftsliv",
    icon: <SportsSoccer sx={{ color: "#DC352A" }} />,
  },
  { name: "Barn & baby", icon: <ChildCare sx={{ color: "#DC352A" }} /> },
  {
    name: "Underhållning och hobby",
    icon: <SportsEsportsOutlined sx={{ color: "#DC352A" }} />,
  },
  { name: "Bil", icon: <DirectionsCar sx={{ color: "#DC352A" }} /> },
  {
    name: "Husbil och Husvagn",
    icon: <RvHookup sx={{ color: "#DC352A" }} />,
  },
  { name: "Båt", icon: <DirectionsBoat sx={{ color: "#DC352A" }} /> },
  {
    name: "MC, ATV och snöskoter",
    icon: <TwoWheeler sx={{ color: "#DC352A" }} />,
  },
  {
    name: "Entreprenad- och lantbruksmaskiner",
    icon: <Agriculture sx={{ color: "#DC352A" }} />,
  },
  {
    name: "Bygg och trädgård",
    icon: <ParkOutlined sx={{ color: "#DC352A" }} />,
  },
  {
    name: "Djur och tillbehör",
    icon: <PetsOutlined sx={{ color: "#DC352A" }} />,
  },
];

export const CategoryMenu = () => {
  return (
    <Box sx={{ maxWidth: "1000px", margin: "0 auto", marginBottom: "-60px" }}>
      <Grid container spacing={1} columns={7} sx={{ justifyContent: "center" }}>
        {categories.map((cat, index) => (
          <Grid
            size={1}
            key={index}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "#dc362a1f",
                borderRadius: "10px",
              },
            }}
          >
            {cat.icon}
            <Typography
              sx={{
                fontSize: "11px",
                marginTop: 1,
                color: "#353434",
              }}
            >
              {cat.name}
            </Typography>
          </Grid>
        ))}
      </Grid>
      <Box
        sx={{ display: "flex", justifyContent: "flex-end", marginTop: "5px" }}
      >
        <Typography
          sx={{
            fontSize: "14px",
            color: "#0080ff",
            cursor: "pointer",
            marginRight: "45px",
          }}
        >
          Fler kategorier
          <ArrowForwardIos
            sx={{
              maxHeight: "14px",
              maxWidth: "14px",
              marginLeft: "5px",
            }}
          />
        </Typography>
      </Box>
    </Box>
  );
};
