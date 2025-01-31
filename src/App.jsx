import Navigation from "./Components/Navigation"; 
import Banner from "./Components/Banner"; 
import GlobalStyle from "./GlobalStyle";
import { Box } from "@mui/material";
import Footer from "./Components/Footer";
import SectionOne from "./Components/SectionOne";
import BrandsBanner from "./Components/BrandsBanner";
import Enterprise from "./Components/Enterprise";
import SectionSix from "./Components/SectionSix";
import SectionSeven from "./Components/SectionSeven";
import SectionNine from "./Components/SectionNine";

function App() {
  return (
    <>
      <GlobalStyle />
      <Navigation/>
      <Box sx={{padding: "180px 0 0 0", backgroundColor: "#f8f9fb"}}>
        <Banner/>
      </Box> 
      <SectionOne/>
      <BrandsBanner/>
      <Enterprise/>
      <SectionSix/>
      <SectionSeven/>
      <SectionNine/>
      <Footer/>
    </>
  );
}

export default App;
