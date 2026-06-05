import { Box, TextField, Button } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

export const SearchBar = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>
      <TextField
        placeholder="Sök efter fiskebåt eller fyrhjulsdrift"
        size="small"
        sx={{ width: "850px" }}
      />
      <Button>
        <SearchOutlinedIcon
          sx={{
            color: "black",
            minWidth: "40px",
            minHeight: "30px",
          }}
        />
      </Button>
    </Box>
  );
};
