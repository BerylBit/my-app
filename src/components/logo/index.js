import React from "react";
import { Image, Link, useColorMode } from "@chakra-ui/react";
import { Link as Rlink } from "react-router-dom";
import headerLogo from "../../assets/images/header-logo 356x73.png";
const Index = () => {
	const { colorMode } = useColorMode();
	return (
		<Link as={Rlink} to="/" display="block">
			<Image
				src={headerLogo}
				maxH={"73px"}
				maxW="220px"
				width="auto"
				height="100%"
			/>
		</Link>
	);
};

export default Index;
