import Navigation from "./Components/Navigation"; 
import Banner from "./Components/Banner"; 
import GlobalStyle from "./GlobalStyle";
import { Box } from "@mui/material";
import Footer from "./Components/Footer";
import SectionOne from "./Components/SectionOne";
import BrandsBanner from "./Components/BrandsBanner";
import Enterprise from "./Components/Enterprise";

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
      <Footer/>
    </>
  );
}

export default App;
