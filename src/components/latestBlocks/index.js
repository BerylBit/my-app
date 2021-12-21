import React from "react";
import { Box, Text, Button, useColorMode } from "@chakra-ui/react";
import BlockNoti from "./blockNoti";

const Index = () => {
    const { colorMode } = useColorMode();
    return (
        <Box
            width={{"lg":'calc(50% - 20px)',"md":'calc(50% - 20px)',"sm":'calc(100% - 20px)',}}
            margin="0 10px"
            boxShadow="0 0.5rem 1.2rem rgb(189 197 209 / 20%)"
            background={colorMode === "light" ? "#ffffff" : "primary.700"}
            border="1px solid"
            borderColor={colorMode === "light" ? "#e7eaf3" : "primary.800"}
            borderRadius="10PX"
            color={colorMode === "light" ? "#000000" : "#ffffff"}
        >
            <Text
                borderBottom="1px solid"
                borderColor="inherit"
                padding="12px"
                textTransform="capitalize"
                fontSize="14px"
                fontWeight="bold"
            >
                latest blocks
            </Text>
            <Box padding="0 12px" whiteSpace='nowrap' overflow="auto">
                <BlockNoti />
                <BlockNoti />
                <BlockNoti />
                <BlockNoti />
                <BlockNoti />
            </Box>
            <Box
                marginTop="-1px"
                borderTop="1px solid"
                borderColor="inherit"
                padding="12px"
            >
                <Button
                    fontWeight="400"
                    padding="5px 10px"
                    height="auto"
                    minH="29px"
                    background="rgba(51,122,254,.1)"
                    boxShadow="none"
                    fontSize="11px"
                    color="primary.500"
                    width="100%"
                    display="block"
                    _hover={{
                        color: "#ffffff",
                        background: "primary.500",
                        boxShadow: "0 4px 11px rgb(51 122 254 / 35%)",
                    }}
                    _active={{
                        background: "primary.500",
                        color: "#ffffff",
                        boxShadow: "0 0 0 rgb(51 122 254 / 35%)",
                    }}
                    _focus={{
                        boxShadow: "none",
                    }}
                >
                    View all blocks
                </Button>
            </Box>
        </Box>
    );
};

export default Index;
