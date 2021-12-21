import React from "react";
import { Box, useColorMode } from "@chakra-ui/react";
import { Container } from "../index";
import StatBox from "./statBox";
import StatBox2 from "./statBox2";
import HistoryChart from "./historyChart";

const Index = () => {
    const { colorMode } = useColorMode();
    return (
        <Box marginTop="-3rem">
            <Container>
                <Box
                    boxShadow="0 0.5rem 1.2rem rgb(189 197 209 / 20%)"
                    background={
                        colorMode === "light" ? "#ffffff" : "primary.700"
                    }
                    padding="20px 0"
                    border="1px solid"
                    borderColor={
                        colorMode === "light" ? "#e7eaf3" : "primary.800"
                    }
                    borderRadius="10PX"
                    display="flex"
                    flexWrap="wrap"
                    alignItems="center"
                    color={colorMode === "light" ? "black" : "#ffffff"}
                >
                    <Box
                        width={{ lg: "33.33%", md: "50%", sm: "100%" }}
                        borderRight="1px solid"
                        borderColor="inherit"
                    >
                        <StatBox />
                    </Box>
                    <Box
                        borderRight={"1px solid"}
                        borderColor="inherit"
                        width={{ lg: "33.33%", md: "50%", sm: "100%" }}
                    >
                        <StatBox2 />
                    </Box>
                    <Box
                        borderTop={{
                            lg: "0px solid",
                            md: "1px solid",
                            sm: "1px solid",
                        }}
                        paddingTop={{lg: "0", md: "20px", sm: "20px"}}
                        marginTop={{lg: "0", md: "20px", sm: "20px"}}
                        borderColor="inherit !important"
                        width={{ lg: "33.33%", md: "100%", sm: "100%" }}
                    >
                        <HistoryChart />
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Index;
