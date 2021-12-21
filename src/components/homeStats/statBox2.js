import React from "react";
import { Box, Image, Text, Link } from "@chakra-ui/react";
import { Link as Rlink } from "react-router-dom";
import statLogo from "../../assets/images/55x70 size logo.png";

const statBox = () => {
	return (
		<Box
			borderTop={{
				lg: "0px solid",
				md: "0px solid",
				sm: "1px solid",
			}}
			paddingTop={{ lg: "0", md: "0", sm: "20px" }}
			marginTop={{ lg: "0", md: "0", sm: "20px" }}
			borderColor="inherit !important"
			padding="0 24px"
		>
			<Box display="flex" alignItems="center">
				<Image src={statLogo} marginRight="10px" maxHeight="28px" maxW="28px" />
				<Box>
					<Text fontSize="12px" color="#77838f">
						LATEST BLOCK
					</Text>
					<Link
						color="inherit"
						fontWeight="bold"
						_hover={{ color: "primary.400", textDecor: "none" }}
						sx={{
							"& span": {
								color: "#77838f",
								marginLeft: "5px",
							},
							"& small": {
								fontSize: "12px",
								color: "#77838f",
								marginLeft: "5px",
							},
						}}
						as={Rlink}
						to="/"
					>
						25137425<small>(0.9s)</small>
					</Link>
				</Box>
				<Box marginLeft="auto">
					<Text fontSize="12px" textAlign="right" color="#77838f">
						TRANSACTIONS
					</Text>
					<Link
						textAlign="right"
						color="inherit"
						fontWeight="bold"
						_hover={{ color: "primary.400", textDecor: "none" }}
						sx={{
							"& span": {
								color: "#77838f",
								marginLeft: "5px",
							},
							"& small": {
								fontSize: "12px",
								color: "#77838f",
								marginLeft: "5px",
							},
						}}
						as={Rlink}
						to="/"
					>
						138.94 M<small>(5.1 TPS)</small>
					</Link>
				</Box>
			</Box>
			<Box as="hr" margin="20px 0" background="primary.800" />
			<Box display="flex" alignItems="center">
				<Image src={statLogo} marginRight="10px" maxHeight="28px" maxW="28px" />
				<Box>
					<Text fontSize="12px" color="#77838f">
						ACTIVE VALIDATOR
					</Text>
					<Link
						color="inherit"
						fontWeight="bold"
						_hover={{ color: "primary.400", textDecor: "none" }}
						sx={{
							"& span": {
								color: "#77838f",
								marginLeft: "5px",
							},
							"& small": {
								color: "#77838f",
								fontSize: "12px",
								marginLeft: "5px",
							},
						}}
						as={Rlink}
						to="/"
					>
						52
					</Link>
				</Box>
				<Box marginLeft="auto">
					<Text fontSize="12px" textAlign="right" color="#77838f">
						CURRENT EPOCH
					</Text>
					<Link
						textAlign="right"
						fontWeight="bold"
						color="inherit"
						_hover={{ color: "primary.400", textDecor: "none" }}
						sx={{
							"& span": {
								color: "#77838f",
								marginLeft: "5px",
							},
							"& small": {
								fontSize: "12px",
								color: "#77838f",
								marginLeft: "5px",
							},
						}}
						as={Rlink}
						to="/"
					>
						62324
					</Link>
				</Box>
			</Box>
		</Box>
	);
};

export default statBox;
