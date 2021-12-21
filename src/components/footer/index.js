import React from "react";
import { Box, Image, IconButton, useColorMode } from "@chakra-ui/react";
import { Container } from "../index";
import { MoonIcon, SunIcon, EmailIcon } from "@chakra-ui/icons";
import statLogo from "../../assets/images/73x73 size logo.png";

const Index = () => {
	const { toggleColorMode, colorMode } = useColorMode();
	return (
		<Box
			marginTop="50px"
			padding="20px 0"
			backgroundColor="#618cbb"
			backgroundImage="linear-gradient(90deg, #618cbb 0%, #af56e2 100%)"
			backgroundColor={colorMode === "light" ? "primary.550" : "primary.700"}
		>
			<Container>
				<Box
					display="flex"
					paddingBottom="20px"
					borderBottom="1px solid #ffffff1a"
					justifyContent="space-between"
					alignItems="center"
				>
					<Box
						fontSize="19px"
						color="#ffffff"
						fontWeight="500"
						display="flex"
						alignItems="center"
					>
						<Image marginRight="15px" src={statLogo} maxW="30px" maxH="30px" />
						Powered by BerylBit Blocks
					</Box>
					<IconButton
						background="#ffffff1a"
						height="28px"
						width="28px"
						minH="15px"
						minW="15px"
						color="#ffffff"
						fontSize="13px"
						padding="5px"
						_hover={{
							color: "gray.700",
							background: "#fff",
						}}
						icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
						onClick={toggleColorMode}
					/>
				</Box>
				<Box
					display="flex"
					alignItems="center"
					justifyContent="space-between"
					paddingTop="20px"
				>
					<Box fontSize="12px" as="p" color="#ffffff">
						BrbScan © 2021 (BRB-A) | ⛏ Built by the same team behind Etherscan{" "}
						<Box as="a" color="primary.500" href="https://etherscan.io/">
							Etherscan
						</Box>
					</Box>
					<IconButton
						background="#ffffff1a"
						height="28px"
						width="28px"
						minH="15px"
						minW="15px"
						color="#ffffff"
						fontSize="13px"
						padding="5px"
						borderRadius="50px"
						_hover={{
							color: "gray.700",
							background: "#fff",
						}}
						icon={<EmailIcon />}
					/>
				</Box>
			</Container>
		</Box>
	);
};

export default Index;
