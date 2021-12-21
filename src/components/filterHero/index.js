import React from "react";
import { Box, Heading, IconButton, useColorMode } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { Container } from "../index";

const Index = () => {
	const { colorMode } = useColorMode();
	return (
		<Box
			padding="60px 0 110px 0"
			backgroundColor="#618cbb"
			backgroundImage="linear-gradient(90deg, #618cbb 0%, #af56e2 100%)"
			backgroundColor={colorMode === "light" ? "primary.550" : "primary.700"}
		>
			<Container
				display="flex"
				alignItems="center"
				justifyContent="center"
				flexDir="column"
			>
				<Heading
					textAlign="center"
					as="h1"
					fontSize="24px"
					fontWeight="400"
					color="white"
					letterSpacing="3px"
				>
					BerylBit Blockchain Explorer
				</Heading>
				<Box
					as="form"
					maxW="550px"
					display="flex"
					marginTop="20px"
					alignItems="center"
					width="100%"
					backgroundColor={colorMode === "light" ? "white" : "primary.600"}
					borderRadius="5px"
					overflow="hidden"
					border={colorMode === "dark" ? "1px solid" : ""}
					borderColor={"primary.800"}
				>
					<Box
						padding="12px 32px 12px 16px"
						border="none"
						outline="none"
						as="select"
						backgroundColor="transparent"
						fontSize="14px"
						borderRight="1px solid"
						borderColor={colorMode === "light" ? "gray.300" : "primary.800"}
						appearance="none"
						background="url(/images/down-arrow.png) center right 10px no-repeat"
						backgroundSize="15px"
						sx={{
							"& option": {
								backgroundColor:
									colorMode === "light" ? "#ffffff" : "primary.600",
							},
						}}
					>
						<option value="*">All filters</option>
						<option value="addresses">addresses</option>
						<option value="tokens">tokens</option>
					</Box>
					<Box
						padding="12px 16px"
						border="none"
						outline="none"
						background="transparent"
						as="input"
						fontSize="14px"
						placeholder="Search by Address / Txn Hash / Block / Token"
						type="text"
						width="100%"
					/>
					<IconButton
						backgroundColor={
							colorMode === "light" ? "primary.500" : "primary.800"
						}
						_hover={{
							backgroundColor: "primary.400",
						}}
						color="white"
						borderRadius="none"
						padding="23px 19px"
						type="submit"
						icon={<SearchIcon />}
					/>
				</Box>
			</Container>
		</Box>
	);
};

export default Index;
