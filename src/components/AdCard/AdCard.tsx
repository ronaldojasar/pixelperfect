import { Box, Typography } from "@mui/material";

interface AdCardProps {
  image: string;
  title: string;
  price: string | number;
  location: string;
  isSponsored?: string;
}

export const AdCard = (props: AdCardProps) => {
  return (
    <Box sx={{ width: "220px", cursor: "pointer" }}>
      <img
        src={props.image}
        alt="annonsbild"
        style={{
          width: "100%",
          height: "150px",
          objectFit: "cover",
          borderRadius: "8px",
        }}
      />

      <Typography sx={{ fontSize: "14px", marginTop: "10px" }}>
        {props.title}
      </Typography>
      <Typography
        sx={{
          fontWeight: "bold",
          fontSize: "16px",
        }}
      >
        {props.price}
      </Typography>
      <Typography sx={{ color: "grey", fontWeight: "200", fontSize: "14px" }}>
        {props.location}
      </Typography>
      <Typography
        sx={{
          backgroundColor: "#abc8f3",
          display: "flex",
          justifyContent: "center",
          maxWidth: "90px",
          borderRadius: "4px",
          fontWeight: "bold",
          fontSize: "11px",
        }}
      >
        {props.isSponsored}
      </Typography>
    </Box>
  );
};
