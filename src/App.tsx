import { Header } from "./components/Header/Header";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { CategoryMenu } from "./components/CategoryMenu/CategoryMenu";
import { AdCard } from "./components/AdCard/AdCard";
import { Box, Typography } from "@mui/material";

function App() {
  return (
    <div>
      <Header />
      <SearchBar />
      <Box sx={{ marginLeft: "-50px", marginTop: "30px" }}>
        <CategoryMenu />
      </Box>

      <Box sx={{ maxWidth: "1000px", margin: "60px auto" }}>
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", marginBottom: "12px" }}
        >
          Populära annonser
        </Typography>

        <Box sx={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          <AdCard
            image="https://images.blocketcdn.se/dynamic/1600w/item/23596892/bba79434-3b58-4810-949a-bcf25f3c07d5"
            title="Gallringsprocessor Kesla 40 LFe vangsmonterad / trepunkt,..."
            price="100 000 kr"
            location="Vittangi"
          />
          <AdCard
            image="https://images.blocketcdn.se/dynamic/1600w/item/23621929/f84271b9-aad0-4071-9240-0304af1c1b4b"
            title="Volvo S60"
            price="369 900 kr"
            location="Järfälla"
          />
          <AdCard
            image="https://images.blocketcdn.se/dynamic/1600w/item/23394296/38b4913a-17ed-4a89-b824-d290ab2bd829"
            title="Honda CR-Z"
            price="22 500 kr"
            location="Norrahammar"
          />
          <AdCard
            image="https://images.blocketcdn.se/dynamic/1600w/item/23551464/31691cb6-b5eb-4653-81da-889c8fde2b6b"
            title="Titleist T200, T100 klubbor järnset 5-P"
            price="8 700 kr"
            location="Skellefteå"
          />
          <AdCard
            image="https://img.qasa.se/unsafe/adaptive-fit-in/1200x1200/https://qasa-static-prod.s3-eu-west-1.amazonaws.com/img/c2e9f55dbedf2611697e5c40ab062ed7cad1cf3c6da4341d76052b52feb1247f.jpg"
            title="Lägenhet i Solna"
            price="9853 kr/månad"
            location="Solna"
            isSponsored="Blocket + Qasa" // "optional" sponsor blocket + qasa blå ruta
          />
          <AdCard
            image="https://images.blocketcdn.se/dynamic/1280w/item/23583418/1fc7a889-622d-4c23-aae6-31e92c47852e"
            title="Dorper tackor, ungtackor och korsningar."
            price="3 500 kr"
            location="Ulrika"
          />
          <AdCard
            image="https://images.blocketcdn.se/dynamic/1600w/item/23666417/a4fb4d6e-f38c-44ee-9d29-c1df942fae27"
            title="Volvo Original 18' 5-Double Spoke Silver - Pirelli Scorpio dubbdäck"
            price="11 990 kr"
            location="Hallsberg"
          />
          <AdCard
            image="https://images.blocketcdn.se/dynamic/1600w/item/23107806/5c5f4e68-afd0-45dc-8758-f62382fc0eb8"
            title="IKEA Stuvland säng 120 cm med resårbotten"
            price="1 500 kr"
            location="Helsingborg"
          />
          <AdCard
            image="https://images.blocketcdn.se/dynamic/1280w/item/23660456/d3e0c29d-f348-4b08-9976-6c2432acca37"
            title="Flatcoated retriever - tikvalpar"
            price="23 000 kr"
            location="Sundsvall"
          />
          <AdCard
            image="https://images.blocketcdn.se/dynamic/1280w/item/21634222/32f2fd52-7668-4aa1-88c4-c7b8a03780f2"
            title="Abu Garcia Revo Beast multirulle med Savage Gear spö"
            price="2 800 kr"
            location="Bandhagen"
          />
          <AdCard
            image="https://images.blocketcdn.se/dynamic/1600w/item/22289218/9ff8b65e-896a-47c1-bd33-2c43502cef65"
            title="Ducati Monster 1200 S"
            price="110 000 kr"
            location="Själevad"
          />
          <AdCard
            image="https://images.blocketcdn.se/dynamic/1280w/item/23802372/c179e853-0fda-471f-b05e-0b26e0211ffa"
            title="Ibanez SR30TH5PII elbas - begagnad"
            price="6 995 kr"
            location="Umeå"
          />
        </Box>
      </Box>
    </div>
  );
}

export default App;
