import React from "react";
import { Box, useColorMode } from "@chakra-ui/react";
import { Logo, Container } from "../index";
import Navbar from "./navbar";

const Index = () => {
	const { colorMode } = useColorMode();
	return (
		<Box
			
			backgroundColor={colorMode === "dark" ? "primary.700" : "#ffffffs"}
			as={"header"}
			padding={"5px 0"}
		>
			<Container
				display="flex"
				alignItems="center"
				justifyContent="space-between"
				flexWrap="wrap"
			>
				<Logo />
				<Navbar />
			</Container>
		</Box>
	);
};

export default Index;
