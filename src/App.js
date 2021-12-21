import { Home } from "./views";
import { Routes, Route } from "react-router-dom";
import { Header, Footer } from "./components";
import { Box, useColorMode } from "@chakra-ui/react";
function App() {
    const { colorMode } = useColorMode();
    return (
        <Box
            display="flex"
            flexDir="column"
            className="App"
            minH="100vh"
            background={colorMode === "light" ? "#ffffff" : "primary.600"}
        >
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            <Footer />
        </Box>
    );
}

export default App;
